---
title: Player Model Renderers in JSON UI
description: Learn how to display live player, paper-doll, and name-tag renderers beside an ActionForm.
category: Tutorials
tags:
    - intermediate
    - scripting
license: true
mentions:
    - KawEduh-dv
---

:::warning FORMAT VERSION 1.21.120
This tutorial assumes a basic understanding of Resource Packs, Behavior Packs, Script API, and JSON UI.

JSON UI is being deprecated in favor of Ore UI. This technique can stop working in a future Minecraft update.
:::

This tutorial explains how to extend an `ActionFormData` with two additional panels:

-   a live player preview using `live_player_renderer`;
-   a paper-doll preview using `paper_doll_renderer`.

It also combines a compact `live_player_renderer` with `name_tag_renderer` to display an upper-body player portrait and the actual player name in a profile row.

The example does not spawn entities, collect runtime entity IDs, or replace the vanilla button template.

## Result

When the player uses a stick, the script opens an ActionForm in the middle of the screen. The paper-doll preview appears on the left, the live player preview appears on the right, and a compact live-player portrait with the player's name appears above the form. Each of the three main panels keeps its own localized title.

<WikiImage
    src="/assets/images/json-ui/player-model-renderers/result.png"
    alt="An ActionForm between paper-doll and live-player preview panels, with a compact player portrait and name above it."
    caption="The completed player renderer form."
    width="720"
/>

## Project Structure

<FolderView :paths="[
    'BP/manifest.json',
    'BP/scripts/main.js',
    'RP/manifest.json',
    'RP/ui/_ui_defs.json',
    'RP/ui/server_form.json',
    'RP/custom_ui/custom_server_form.json',
    'RP/texts/languages.json',
    'RP/texts/en_US.lang'
]" />

In this example, `BP` represents `development_behavior_packs/pack.name` and `RP` represents `development_resource_packs/pack.name`.

## Behavior Pack Manifest

The Behavior Pack needs one script module and dependencies for `@minecraft/server` and `@minecraft/server-ui`.

<CodeHeader path="BP/manifest.json" />

```json
{
    "format_version": 2,
    "header": {
        "name": "Player Model Renderers BP",
        "description": "Opens the player model renderer tutorial form.",
        "uuid": "e22068c8-41c7-48bb-a655-74821d0cb755",
        "version": [1, 0, 0],
        "min_engine_version": [1, 21, 120]
    },
    "modules": [
        {
            "type": "script",
            "language": "javascript",
            "entry": "scripts/main.js",
            "uuid": "340a63b6-5ab7-4525-b866-14f8fb7c4cc6",
            "version": [1, 0, 0]
        }
    ],
    "dependencies": [
        {
            "module_name": "@minecraft/server",
            "version": "2.9.0"
        },
        {
            "module_name": "@minecraft/server-ui",
            "version": "2.1.0"
        }
    ]
}
```

Use new UUIDs when copying this example into another project.

## Resource Pack Manifest

The Resource Pack contains the JSON UI files and localized strings used by the form.

<CodeHeader path="RP/manifest.json" />

```json
{
    "format_version": 2,
    "header": {
        "name": "Player Model Renderers RP",
        "description": "Displays player model renderers around a server form.",
        "uuid": "4685b5ba-7007-4776-a977-5ce8f49f2626",
        "version": [1, 0, 0],
        "min_engine_version": [1, 21, 120]
    },
    "modules": [
        {
            "type": "resources",
            "uuid": "db7f17a1-f778-42d2-9934-91c675a174d5",
            "version": [1, 0, 0]
        }
    ]
}
```

Use UUIDs that are different from the Behavior Pack UUIDs and from those used by other packs.

## Opening the ActionForm

The script uses a four-character prefix to identify the custom form. The raw title is an internal data channel: it contains the prefix followed by the current player's name. A separate localized label is shown to the player.

<CodeHeader path="BP/scripts/main.js" />

```js
import { world, system } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

const MENU_ITEM_ID = "minecraft:stick";
const CUSTOM_FORM_PREFIX = "pmrd";

async function showPlayerModelForm(player) {
    const internalTitle = `${CUSTOM_FORM_PREFIX}${player.name}`;

    const form = new ActionFormData()
        .title(internalTitle)
        .body({ translate: "wiki.form.body" })
        .button({ translate: "wiki.form.button" });

    try {
        await form.show(player);
    } catch {
        player.sendMessage({ translate: "wiki.form.error" });
    }
}

world.afterEvents.itemUse.subscribe((event) => {
    if (event.itemStack.typeId !== MENU_ITEM_ID) return;

    system.run(() => {
        showPlayerModelForm(event.source);
    });
});
```

The title becomes `pmrd<PlayerName>`. `server_form.json` uses the first four characters to select the custom layout, while the remaining characters are displayed beside the compact live-player portrait. The internal string is never used as the visible center title.

:::tip CHANGING THE MENU ITEM
Replace `minecraft:stick` with another item identifier, such as `minecraft:compass`.
:::

## Registering the Custom UI File

New JSON UI files must be listed in `_ui_defs.json` using paths relative to the Resource Pack root.

<CodeHeader path="RP/ui/_ui_defs.json" />

```jsonc
{
    // Register every new JSON UI file relative to the Resource Pack root.
    "ui_defs": ["custom_ui/custom_server_form.json"],
}
```

`ui/server_form.json` replaces a vanilla file with the same path, so it does not need to be listed. `custom_ui/custom_server_form.json` is a new file and must be registered.

## Selecting the Custom Long Form

The `server_form` namespace receives `#title_text` from the engine. The following binding extracts the first four characters:

<CodeHeader path="RP/ui/server_form.json" />

```jsonc
{
    "binding_type": "view",
    "source_property_name": "('%.4s' * #title_text)",
    "target_property_name": "#form_prefix",
}
```

The regular form is visible when the title does not start with `pmrd`:

```jsonc
{
    "binding_type": "view",
    "source_property_name": "(not (#form_prefix = 'pmrd'))",
    "target_property_name": "#visible",
}
```

The tutorial form uses the inverse condition:

```jsonc
{
    "binding_type": "view",
    "source_property_name": "(#form_prefix = 'pmrd')",
    "target_property_name": "#visible",
}
```

This prevents the vanilla and custom forms from appearing at the same time.

### Displaying the Center-Panel Title

The incoming `#title_text` contains both the internal marker and the player name. The visible title must therefore use an independent localization key instead of displaying `#title_text`:

```jsonc
"$text_name": "wiki.form.title",
"$title_text_binding_type": "none"
```

`common_dialogs.standard_title_label` displays `Custom Server Form` in the center header without exposing `pmrd<PlayerName>`. No second center-title label is needed.

### Adding the Preview Panels

The transparent `custom_long_form` container references both reusable controls:

```jsonc
"controls": [
    {
        "player_identity@custom_server_form.player_identity": {}
    },
    {
        "player_model@custom_server_form.player_model": {}
    },
    {
        "player_paper_doll_model@custom_server_form.player_paper_doll_model": {}
    }
]
```

The `@custom_server_form` references the namespace declared in `custom_ui/custom_server_form.json`. `player_identity` contains the compact live-player portrait and dynamic player name.

## Live Player Renderer

`live_player_renderer` displays the local player with current equipment and animation state.

<CodeHeader path="RP/custom_ui/custom_server_form.json" />

```jsonc
"live_player_model": {
    "type": "custom",
    "renderer": "live_player_renderer",
    "anchor_from": "center",
    "anchor_to": "center",
    "anims": [
        "@common.screen_exit_size_animation_push",
        "@common.screen_exit_size_animation_pop",
        "@common.screen_entrance_size_animation_push",
        "@common.screen_entrance_size_animation_pop"
    ],
    "size": [
        "40%",
        "100%"
    ],
    "offset": [
        0,
        "-12%"
    ],
    "property_bag": {
        "#look_at_cursor": true
    },
    "layer": 2
}
```

The width controls the overall model scale. `#look_at_cursor` makes the model's head follow the pointer.

## Paper-Doll Renderer

`paper_doll_renderer` displays the player's skin using Minecraft's paper-doll preview. Unlike `live_player_renderer`, it is intended as a static UI representation: it does not run the player's normal entity animations, does not reproduce gameplay movement, and does not use `#look_at_cursor`. This makes it appropriate for inventory previews, profile cards, and small identity icons.

```jsonc
"paper_doll_model": {
    "type": "custom",
    "renderer": "paper_doll_renderer",
    "anchor_from": "center",
    "anchor_to": "center",
    "anims": [
        "@common.screen_exit_size_animation_push",
        "@common.screen_exit_size_animation_pop",
        "@common.screen_entrance_size_animation_push",
        "@common.screen_entrance_size_animation_pop"
    ],
    "size": [
        "40%",
        "100%"
    ],
    "offset": [
        0,
        "-12%"
    ],
    "layer": 2
}
```

The complete file places this panel `212` pixels to the left and the live player panel `212` pixels to the right.

:::tip CHOOSING A PLAYER RENDERER
Use `live_player_renderer` when the preview should behave like the live player model, including supported animation state, equipment, and cursor-facing behavior. Use `paper_doll_renderer` when you need a stable paper-doll representation that does not perform those live animations.
:::

## Screen Transition Animations

Every player model in this example is a custom renderer. Custom renderers are composited differently from ordinary labels and images, and they can remain visible briefly after the parent form is closed. Without a matching exit transition, this looks like a detached player model floating over the world.

Add all four standard screen size animations to each `live_player_renderer` and `paper_doll_renderer` control:

```jsonc
"anims": [
    "@common.screen_exit_size_animation_push",
    "@common.screen_exit_size_animation_pop",
    "@common.screen_entrance_size_animation_push",
    "@common.screen_entrance_size_animation_pop"
]
```

-   `screen_entrance_size_animation_push` handles opening a screen by pushing it onto the UI stack.
-   `screen_entrance_size_animation_pop` handles returning to the screen by popping another screen.
-   `screen_exit_size_animation_push` handles leaving when another screen is pushed above it.
-   `screen_exit_size_animation_pop` handles closing the current screen and popping it from the stack.

Using both push and pop variants covers every navigation direction. The renderer then scales in and out with the screen instead of outliving the form visually.

:::warning THESE ARE UI TRANSITIONS
The entries in `anims` do not make the player walk, attack, or perform an entity animation. They animate the renderer control during screen entrance and exit. Their purpose here is to prevent a player model from remaining visible after the menu closes.
:::

## Titles Attached to the Preview Panels

The left and right titles belong to their respective model panels. They use localizable `label` controls directly over the framed panels, without adding a separate title-background image. The existing top portion of `dialog_background_hollow_3` provides the title area.

```jsonc
"live_player_title": {
    "type": "label",
    "anchor_from": "top_middle",
    "anchor_to": "top_middle",
    "offset": [
        0,
        8
    ],
    "size": [
        "100% - 16px",
        10
    ],
    "text": "wiki.model.title",
    "localize": true,
    "text_alignment": "center",
    "color": [0, 0, 0, 1],
    "layer": 4
}
```

The paper-doll panel uses the same control with `wiki.paper_doll.title`.

`label` is appropriate here because these are static localized headings. `name_tag_renderer` does not automatically localize a key placed in `#playername`; doing that produces raw text such as `wiki.model.title`. Reserve `name_tag_renderer` for the extracted player name.

## Compact Live-Player Portrait and Name

The profile row places a small `live_player_renderer` portrait beside the actual player name. The name travels through the raw ActionForm title only as internal data; it is not the visible title and is not stored in a `.lang` file.

### Adding the 32 × 32 Upper-Body Portrait

Place a fixed-size `live_player_renderer` inside a clipping panel. The wrapper limits the visible area, while the renderer provides the player's skin and equipment. In this compact layout, the result emphasizes the torso and head instead of using the tall full-body proportions of the large preview panel.

```jsonc
"panel_trainer_model": {
    "type": "panel",
    "offset": [
        -54,
        0
    ],
    "size": [
        32,
        32
    ],
    "clips_children": true,
    "controls": [
        {
            "poke_trainer_model": {
                "type": "custom",
                "renderer": "live_player_renderer",
                "anims": [
                    "@common.screen_exit_size_animation_push",
                    "@common.screen_exit_size_animation_pop",
                    "@common.screen_entrance_size_animation_push",
                    "@common.screen_entrance_size_animation_pop"
                ],
                "size": [
                    32,
                    32
                ],
                "property_bag": {
                    "#look_at_cursor": false
                },
                "offset": [
                    0,
                    0
                ],
                "layer": 8,
                "anchor_from": "center",
                "anchor_to": "center"
            }
        }
    ]
}
```

The `32 × 32` size defines the portrait and clipping area. The negative X offset moves it toward the left side of the centered profile row, leaving room for `name_tag_renderer`. Setting `#look_at_cursor` to `false` prevents the portrait from turning toward the pointer. The same screen transition animations used by the large previews ensure that this smaller renderer also disappears with the form.

:::tip PAPER DOLL ALTERNATIVE
You can replace this control with `paper_doll_renderer`, but a paper doll is designed to show the complete static skin model. It does not reproduce the live gameplay animation state or support `#look_at_cursor`, so it is less suitable when the desired result is a close portrait beside the nametag.
:::

### Displaying the Actual Player Name

`name_tag_renderer` draws text similar to the name displayed above a player or named entity. The `server_form` screen does not provide the required player name binding directly, so the script embeds the name after the four-character prefix in `#title_text`. The UI extracts the remaining text into `#playername`.

```jsonc
"player_name": {
    "type": "custom",
    "renderer": "name_tag_renderer",
    "anchor_from": "left_middle",
    "anchor_to": "left_middle",
    "offset": [
        105,
        0
    ],
    "size": [
        8,
        8
    ],
    "text_color": [
        1,
        1,
        1,
        1
    ],
    "background_color": [
        0,
        0,
        0,
        0
    ],
    "property_bag": {
        "#x_padding": 4
    },
    "bindings": [
        {
            "binding_name": "#title_text"
        },
        {
            "binding_type": "view",
            "source_property_name": "('%.4s' * #title_text)",
            "target_property_name": "#form_prefix"
        },
        {
            "binding_type": "view",
            "source_property_name": "(#title_text - #form_prefix)",
            "target_property_name": "#playername"
        }
    ]
}
```

Do not put `wiki.model.title` or another localization key in `#playername`. The first view binding isolates `pmrd`; the second subtracts that prefix and gives the renderer the actual profile name.

The profile row uses white text over a translucent dark panel, similar to the profile card shown in Minecraft's menus.

:::tip NAME POSITION
Because `name_tag_renderer` centers its text around its own position, adjust `offset[0]` when the name is too close to or too far from the small model.
:::

## Background, Frame, and Layers

Each full-body preview panel uses four layers:

| Layer | Control            | Purpose                              |
| ----: | ------------------ | ------------------------------------ |
|     1 | `model_background` | translucent black background         |
|     2 | player renderer    | player or paper-doll model           |
|     3 | `model_frame`      | vanilla dialog frame                 |
|     4 | localized label    | title attached to that preview panel |

Higher layers are drawn above lower layers.

The separate profile row uses its own background at layer 1, live-player portrait at layer 8, and player name at layer 3. Renderer layers may need individual tuning because custom renderers are not always composited exactly like regular image controls.

## Localization

This example enables only English:

<CodeHeader path="RP/texts/languages.json" />

```json
["en_US"]
```

The visible strings are stored in `RP/texts/en_US.lang`:

```properties
wiki.form.title=Custom Server Form
wiki.form.body=This is a custom server form with a player model renderer.
wiki.form.button=Close
wiki.form.error=The tutorial menu could not be opened.
wiki.model.title=Player Model
wiki.paper_doll.title=Player Paper Doll Model
```

The three panel headings use localization keys. The player's profile name is extracted from the internal form title, so the real username does not need a localization entry.

Do not translate technical identifiers, JSON property names, namespace names, or the internal `pmrd` prefix.

## Testing

1. Enable both packs in the same world.
2. Exit and reopen the world after changing JSON UI files.
3. Obtain and use a stick.
4. Confirm that the ActionForm appears in the center.
5. Confirm that the paper-doll preview appears on the left.
6. Confirm that the live player preview appears on the right.
7. Confirm that the compact upper-body portrait appears in the profile row.
8. Confirm that the actual player name appears beside the model, not in the ActionForm title.
9. Close the form with both the button and the close icon, and confirm that every model disappears with it.
10. Open an unrelated ActionForm and confirm that it retains the vanilla layout.

## Common Problems

### The Player Name Does Not Appear

-   Confirm that the control uses `type: "custom"` and `renderer: "name_tag_renderer"`.
-   Confirm that the script sends `pmrd` followed by `player.name` in the raw title.
-   Confirm that the bindings read `#title_text`, isolate `#form_prefix`, and write the remaining text to `#playername`.
-   Confirm that the identity panel is instantiated by `server_form.json`.
-   Reload the world after changing JSON UI.

### The Compact Player Portrait Does Not Appear

-   Confirm that the control uses `type: "custom"` and `renderer: "live_player_renderer"`.
-   Start with a fixed `size` of `[32, 32]` instead of percentage dimensions.
-   Confirm that `panel_trainer_model` is a child of `player_identity` and that `poke_trainer_model` is inside its `controls` array.
-   Set `#look_at_cursor` to `false` for a stable profile portrait.
-   Reload the world after changing JSON UI.

### The Custom Panels Do Not Appear

-   Confirm that the ActionForm title begins with `pmrd`.
-   Confirm that `_ui_defs.json` registers `custom_ui/custom_server_form.json`.
-   Confirm that both packs are enabled.
-   Check the Minecraft Content Log for JSON UI errors.

### The Internal Prefix or Player Name Appears in the Center Title

-   Confirm that `tutorial_long_form` uses `wiki.form.title` instead of `#title_text` for its visible title.
-   Confirm that `$title_text_binding_type` is `none` for the tutorial form.
-   Do not add another center label bound directly to `#title_text`.

### A Player Model Remains After the Form Closes

-   Confirm that every `live_player_renderer` and `paper_doll_renderer` has the four standard screen size animations.
-   Include both the `push` and `pop` versions of the entrance and exit animations.
-   Apply the animations to the custom renderer itself, not only to its parent panel.
-   Test the normal button, close icon, and any navigation path that replaces the form.

### Other Forms Disappear

-   Confirm that `regular_long_form` uses the inverse prefix condition.
-   Avoid replacing button templates or unrelated server form controls.

## Implementation Checklist

<FolderView :paths="[
    'BP/manifest.json',
    'BP/scripts/main.js',
    'RP/manifest.json',
    'RP/ui/_ui_defs.json',
    'RP/ui/server_form.json',
    'RP/custom_ui/custom_server_form.json',
    'RP/texts/languages.json',
    'RP/texts/en_US.lang'
]" />

Create or update each file shown above, then follow the testing steps before distributing the packs. With this tutorial, you can display the local player's model beside an ActionForm while preserving the vanilla layout of unrelated forms.

## References

-   [Bedrock Wiki — Intro to JSON UI](/json-ui/json-ui-intro)
-   [Bedrock Wiki — JSON UI Documentation](/json-ui/json-ui-documentation)
-   [Bedrock Wiki — Modifying Server Forms](/json-ui/modifying-server-forms)
-   [Mojang Bedrock Samples — start_screen.json](https://github.com/Mojang/bedrock-samples/blob/main/resource_pack/ui/start_screen.json)
-   [Mojang Bedrock Samples — pause_screen.json](https://github.com/Mojang/bedrock-samples/blob/main/resource_pack/ui/pause_screen.json)

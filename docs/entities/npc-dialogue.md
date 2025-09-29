---
title: NPC Dialogue
category: General
tags:
    - intermediate
mentions:
    - kyleplo
    - StuartDA
    - MedicalJewel105
    - SirLich
    - solvedDev
    - Studio0rbit
    - Sprunkles137
    - ThomasOrs
    - QuazChick
---

Non-Player Characters, or NPCs are villager-like entities that can be given a dialogue with a message and multiple buttons.
They were originally designed for use in adventure maps, but with the introduction of the `/dialogue` command, they can now be used in the context of a normal add-on.

## Dialogue Files

NPC dialogue data is stored in dialogue files, which are stored in the `dialogue` folder in the root of the behavior pack. Here is a basic NPC dialogue file:

<CodeHeader>BP/dialogue/example.json</CodeHeader>

```json
{
    "format_version": "1.17",
    "minecraft:npc_dialogue": {
        "scenes": [
            {
                "scene_tag": "wiki:example",
                "npc_name": "Steve",
                "text": "Hello"
            }
        ]
    }
}
```

In this file, there is an array of scenes. Each scene is a separate dialogue. You can put every dialogue in one file, or you can put each one in a separate file. Within each scene object are a number of properties that can be set to control the dialogue:

### Scene Tag

The identifier of the scene, used to target the scene.

### NPC Name

The display name of the NPC. Optional, if it is not specified, the name of the NPC entity will be used, which is `§eNPC` by default.

### Text

The text to display in the speech bubble. Optional.

### Open Commands

Array of command strings to be run when the dialogue is opened. Optional.

<CodeHeader></CodeHeader>

```json
"on_open_commands": [
    "/say Hello"
]
```

### Close Commands

Array of command strings to be run when the dialogue is closed. Optional.

<CodeHeader></CodeHeader>

```json
"on_close_commands": [
    "/say Goodbye"
]
```

### Buttons

An array of objects specifying the buttons to show in the dialogue. Optional.

<CodeHeader></CodeHeader>

```json
"buttons": [
    {
        "name": "Button One",
        "commands": [
            "/say Button One Pressed!"
        ]
    },
    {
        "name": "Button Two",
        "commands": [
            "/say Button Two Pressed!",
            "/say Secondary Command for Button Two"
        ]
    }
]
```

## Selecting the Player

In `on_open_commands`, `on_close_commands`, and the `commands` property of each button object, you can use normal selectors, such as `@p` to select the nearest player. However, these selectors are run relative to the NPC entity, so this may be confusing in multiplayer. To solve this, there is a special selector, `@initiator` which always selects the player with the dialogue open.

<CodeHeader></CodeHeader>

```json
"buttons": [
    {
        "name": "Levitation Please",
        "commands": [
            "/effect @initiator levitation"
        ]
    }
]
```

This selector **only** works within NPC dialogues, it cannot be used anywhere else.

## Translation

All of the dialogue properties that will be displayed to the user can also be translated:

<CodeHeader></CodeHeader>

```json
"npc_name": {
    "rawtext": [
        {
            "translate": "entity.endermite.name"
        }
    ]
}
```

The translation key used should then be specified in the resource pack's language files. In this case, `entity.endermite.name` would translate to "Endermite."

## Opening Dialogues

The `/dialogue` command is used to open and control dialogues. The command looks like this: `/dialogue open <npc: target> <player: target> [sceneName: string]`

-   `<npc: target>`: A selector pointing to any entity with the `minecraft:npc` component, such as the vanilla NPC. This determines where dialogue commands are executed from, as well as the appearance of the NPC in the dialogue.
-   `<player: target>`: A selector pointing to the player who will see the dialogue.
-   `[sceneName: string]`: A string matching the `scene_tag` of the dialogue to be shown. Optional, if not present, the last dialogue shown by the NPC will be shown.

For example, the following command would open the dialogue `example` for the nearest player, using the nearest NPC:

```
/dialogue open @e[type=npc,c=1] @p example
```

## Changing Dialogues

The `/dialogue` command is also used to change the dialogue of an NPC. Unlike the `/dialogue open` command, this command has no effect until a player opens the NPC dialogue manually. This syntax looks like this: `/dialogue change <npc: target> <sceneName: string> [player: target]`

-   `<npc: target>`: A selector pointing to the NPC to change the dialogue of.
-   `<sceneName: string>`: A string matching the `scene_tag` of the dialogue to be shown.
-   `[player: target]`: A selector pointing to the player who will see the updated dialogue. Optional, if not present, all player will be affected.

For example, the following command would change the nearest NPC's dialogue to `example` for a random player.

```
/dialogue change @e[type=npc,c=1] example @r
```

## Full Example

This full example will create a custom item that will allow the player to teleport when they right-click/interact while holding the item.
For this demo, use the manifest file at the top of this page.

### Creating the NPC

Even if the NPC will never be visible, an NPC entity is always needed for the `/dialogue` command. To do this, you will need to summon the NPC and put it in a ticking area so that it is accessible from anywhere:

<CodeHeader>functions/setup.mcfunction</CodeHeader>

```
tickingarea add 0 1 0 0 2 0
summon npc "§r" 0 1 0
```

This function will create a ticking area at 0, 0, and spawn an NPC with no name in the bedrock layer in that ticking area. You will need to run this function once, either manually, or making use of `player.json` or `tick.json`.

:::tip

You can trigger an NPC dialogue from within the player using the /dialogue command, without having to summon an NPC beforehand.

1. Within the player's behavior, add the minecraft:npc component.
2. Specify a scene from the BP/dialogue folder.
3. Run the `/dialogue` command from the player, provided with the scene_tag:

:::

```
/dialogue open @s @s <scene_tag>
```

#### Pros and Cons:

-   `+` You don't need to worry about hiding away an NPC, if you're just going to run NPC dialogues provided using scene_tags.
-   `+` No NPC means you also don't need to make sure it is in a 'ticking area'.
-   `-` Since the dialogue is being triggered from the player, in which it is not intended to, it may become unstable in some cases.
-   `-` Other players can click on player and they will see this dialogue.

To avoid this add the `minecraft:interaction` to the entity which will replace the npc interaction. The npc stuff will still work, but if a player clicks on another player, then the npc won't come up

<CodeHeader></CodeHeader>

```json
"minecraft:interact": {
    "interactions": [
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        }
                    ]
                }
            }
        }
    ]
}
```

### The Dialogue File

This dialogue file features two dialogues, each with two teleport buttons, and a button to switch between the two.

<CodeHeader>BP/dialogue/example.json</CodeHeader>

```json
{
    "format_version": "1.17",
    "minecraft:npc_dialogue": {
        "scenes": [
            {
                "scene_tag": "wiki:main_teleport_menu",
                "npc_name": "Teleport",
                "text": "Where would you like to teleport?",
                "buttons": [
                    {
                        "name": "Districts",
                        "commands": [
                            "/dialogue open @e[type=npc,c=1] @initiator wiki:districts_teleport_menu"
                        ]
                    },
                    {
                        "name": "My Base",
                        "commands": ["/tp @initiator -20 4 -20"]
                    },
                    {
                        "name": "World Spawn",
                        "commands": ["/tp @initiator 0 4 0"]
                    }
                ]
            },
            {
                "scene_tag": "wiki:districts_teleport_menu",
                "npc_name": "District Teleport",
                "text": "What district would you like to teleport to?",
                "buttons": [
                    {
                        "name": "< Back",
                        "commands": [
                            "/dialogue open @e[type=npc,c=1] @initiator wiki:main_teleport_menu"
                        ]
                    },
                    {
                        "name": "Shop District",
                        "commands": ["/tp @initiator 20 4 20"]
                    },
                    {
                        "name": "Gaming District",
                        "commands": ["/tp @initiator 20 4 -20"]
                    }
                ]
            }
        ]
    }
}
```

### Creating the Item

Lastly, create an item that will open the dialogue when right-clicked/interacted with. This item uses the Ender Pearl texture, but you could give it custom texture.

#### Item JSON

<CodeHeader>BP/items/teleport_menu.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:teleport_menu",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            "minecraft:icon": "ender_pearl",
            "minecraft:glint": true,
            "minecraft:display_name": {
                "value": "Teleport Menu"
            },
            "wiki:teleport_menu": {}
        }
    }
}
```

#### Custom Component Script

<CodeHeader>BP/scripts/teleportMenu.js</CodeHeader>

```js
import { system } from "@minecraft/server";

const ItemTeleportMenuComponent = {
    onUse({ source }) {
        source.runCommand("dialogue open @e[type=npc, c=1] @s wiki:main_teleport_menu");
    },
};

system.beforeEvents.startup.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent("wiki:teleport_menu", ItemTeleportMenuComponent);
});
```

### Testing

When you are done, package these files along with the manifest, and import it into Minecraft. Start a new flat world, and make sure to enable cheats and experiments.

Once you are in the world, use `/function setup` to create the ticking area and NPC entity. Then use `/give @s wiki:teleport_menu` to give yourself the teleportation item. Switch to survival mode (NPC dialogues do not work in Creative), hold the item, and right-click. You should see your dialogue appear.

## Credits

This tutorial is based off of [this page](https://learn.microsoft.com/minecraft/creator/documents/npcdialogue) in the Minecraft Creator documentation.

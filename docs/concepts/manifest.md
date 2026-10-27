---
title: manifest.json
category: Pack Files
description: A complete reference for manifest.json - format versions, UUIDs, header, modules, dependencies, capabilities, metadata, subpacks and pack settings.
mentions:
    - MRBBATES1
    - Lufurrius
    - SirLich
    - smell-of-curry
    - MedicalJewel105
    - QuazChick
    - solvedDev
    - Joelant05
    - ChilRx
    - SmokeyStack
    - TheItsNameless
    - Cavell1234
---

:::tip
New to manifests? The [Project Setup](/guide/project-setup#bp-manifest) page of the beginner guide walks through writing your first one. This page is the complete reference for every field. See also [Pack Folder Structure](/documentation/pack-structure) for where the file lives.
:::

The `manifest.json` file is what identifies a pack to Minecraft. It lives in the root folder of every behavior pack, resource pack, skin pack and world template. This page documents every section of the manifest, including the ones the beginner guide skips: dependencies, capabilities, metadata, subpacks and pack settings.

## Structure

A manifest is a single JSON object with the following top-level keys.

| Key                                  | Required | Description                                                                                             |
| ------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------- |
| [`format_version`](#format-versions) | Yes      | The version of the manifest syntax itself. Use `3`.                                                     |
| [`header`](#header)                  | Yes      | Public-facing information about the pack: name, description, UUID, version.                             |
| [`modules`](#modules)                | Yes      | What kind of content the pack contains. Determines whether it is a BP, RP, skin pack or world template. |
| [`dependencies`](#dependencies)      | No       | Other packs or script modules this pack requires.                                                       |
| [`capabilities`](#capabilities)      | No       | Optional engine features the pack opts into.                                                            |
| [`metadata`](#metadata)              | No       | Authors, license, website, generating tool and product type.                                            |
| [`subpacks`](#subpacks)              | No       | Selectable variations of the pack, typically used for texture resolutions.                              |
| [`settings`](#pack-settings)         | No       | Player-configurable toggles, sliders and dropdowns shown in the pack settings screen.                   |

## Format Versions

The manifest has its own `format_version`, separate from the format versions used by other pack files (see [Format Versions](/guide/format-version)).

| Version | Status          | Notes                                                                                                                                                                                                                                                 |
| ------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `1`     | Legacy          | Only still seen in skin packs. Do not use for new behavior or resource packs.                                                                                                                                                                         |
| `2`     | Supported       | The long-standing format. Versions are written as arrays such as `[1, 0, 0]`. Does not support pack settings or `memory_performance_tier`.                                                                                                            |
| `3`     | **Recommended** | Current format. All `version` fields, `min_engine_version` and `base_game_version` **must** be [SemVer](https://semver.org/) strings such as `"1.0.0"`. Adds [pack settings](#pack-settings) and `memory_performance_tier` for [subpacks](#subpacks). |

:::warning
In format version 3, the `metadata.authors` field is currently required. A version 3 manifest without it will fail to load. Microsoft has stated this is unintended and expected to change, but until then always include at least one author.
:::

### Version Formats

Format version 2 accepts either style below. Format version 3 only accepts strings.

```json
"version": [1, 2, 3]   // Array style. Allowed in format_version 1 and 2 only.
"version": "1.2.3"     // SemVer string. Allowed in format_version 2 and required in 3.
```

Script module dependency versions are always strings, regardless of the manifest format version.

## UUIDs

A UUID (Universally Unique Identifier) is a 36-character string of hexadecimal digits and dashes, written in the form `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`. Minecraft uses UUIDs to tell packs apart, so every pack and every module needs its own.

Minecraft expects **version 4** UUIDs, which are randomly generated. You can create them with:

-   [uuidgenerator.net](https://www.uuidgenerator.net/version4)
-   [uuidtools.com](https://www.uuidtools.com/generate/v4)
-   The [UUID Generator](https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator) extension for VSCode
-   Most add-on editors such as _bridge._ generate them for you.

### Rules

-   **Never reuse a UUID.** Every pack and every module needs a different one. If two packs share a header UUID the game treats them as the same pack, which causes "Duplicate pack detected" errors or silently replaces one with the other.
-   **The header UUID and module UUIDs must all be different** from each other, even within one manifest.
-   **Keep the UUID stable across updates.** The header UUID is the pack's identity. Changing it makes Minecraft treat the update as a brand new pack, so worlds using the old pack will not receive the update. Bump `header.version` instead.
-   **Case does not matter.** UUIDs are base 16, so `A`-`F` and `a`-`f` are equivalent. Lowercase is the convention.

## Header

The `header` object describes the pack to the player and to the game.

| Field                   | Type    | Required             | Description                                                                                                                                                                                                          |
| ----------------------- | ------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                  | String  | Yes                  | The name shown in-game. Can be a [localization key](/text/text-intro) such as `pack.name`, translated in the pack's own `texts/` folder.                                                                             |
| `description`           | String  | No                   | Shown below the name in-game. Keep it to one or two lines. Can also be a localization key.                                                                                                                           |
| `uuid`                  | String  | Yes                  | The pack's unique identity. See [UUIDs](#uuids).                                                                                                                                                                     |
| `version`               | Version | Yes                  | The pack's version. When a pack with the same UUID is imported again, the new copy replaces the old one only if this version is higher. Equal or lower versions are ignored.                                         |
| `min_engine_version`    | Version | BP and RP            | The lowest game version the pack supports. Also controls which legacy behaviors the game keeps enabled for the pack, so set it to the version you are developing against. Not used in skin packs or world templates. |
| `pack_scope`            | String  | No (RP only)         | Where the pack can be applied. `"world"` means only inside a world, `"global"` means only from the global resource pack list, and `"any"` (the default) allows both.                                                 |
| `base_game_version`     | Version | World templates      | The version of the vanilla behavior and resource packs the template was built against. The game applies the matching vanilla content when the template is used.                                                      |
| `lock_template_options` | Boolean | World templates      | Prevents the player from changing world options when creating a world from the template.                                                                                                                             |
| `allow_random_seed`     | Boolean | No (world templates) | Generates a new seed every time the template is used and lets the player change it.                                                                                                                                  |

## Modules

`modules` is an array. Each entry declares one kind of content the pack contains. The module `type` is what makes a pack a behavior pack, resource pack, skin pack or world template.

| Field         | Type    | Required      | Description                                                                                              |
| ------------- | ------- | ------------- | -------------------------------------------------------------------------------------------------------- |
| `type`        | String  | Yes           | One of the module types below.                                                                           |
| `uuid`        | String  | Yes           | A UUID for this module. Must differ from the header UUID and from every other module.                    |
| `version`     | Version | Yes           | The module's version. Usually kept in step with `header.version`.                                        |
| `description` | String  | No            | A note to yourself about what the module is for. Not shown in-game.                                      |
| `language`    | String  | `script` only | The scripting language. The only supported value is `"javascript"`.                                      |
| `entry`       | String  | `script` only | Path to the script file the game runs first, relative to the pack root, for example `"scripts/main.js"`. |

### Module Types

| Type             | Pack type      | Description                                                                                                                         |
| ---------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `data`           | Behavior pack  | Entities, items, blocks, loot tables, functions and every other server-side definition.                                             |
| `script`         | Behavior pack  | A [Script API](/scripting/scripting-intro) entry point. Requires `language` and `entry`. Usually appears alongside a `data` module. |
| `resources`      | Resource pack  | Textures, models, sounds, UI, animations and every other client-side asset.                                                         |
| `skin_pack`      | Skin pack      | See [Skin Packs](/visuals/skin-packs).                                                                                              |
| `world_template` | World template | A world that players can create new copies of.                                                                                      |
| `client_data`    | Behavior pack  | Legacy client-side scripting. Removed from the game. Only listed so you recognize it in old packs.                                  |

A pack may contain more than one module, for example a `data` module and a `script` module in the same behavior pack. A pack may **not** mix behavior and resource content: a `data` module and a `resources` module cannot share a manifest.

## Dependencies

`dependencies` is an array. Each entry is either a dependency on another **pack**, identified by UUID, or on a built-in **script module**, identified by name.

| Field         | Type    | Description                                                                                                                                                         |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uuid`        | String  | The **header** UUID of the pack this pack requires. Use this for pack dependencies.                                                                                 |
| `module_name` | String  | The name of a built-in script module, such as `@minecraft/server`. Use this for script dependencies.                                                                |
| `version`     | Version | For pack dependencies, the version of the other pack's header. For script modules, the API version string, which may carry a `-beta` suffix such as `"2.4.0-beta"`. |

### Pack Dependencies

The most common use is a behavior pack depending on its resource pack. When the BP is added to a world, the game automatically adds the RP as well, and warns the player if it is missing. The dependency's `uuid` must match the RP's `header.uuid` exactly, and `version` should match the RP's `header.version`.

<CodeHeader path="BP/manifest.json" />

```json
"dependencies": [
    {
        "uuid": "66c6e9a8-3093-462a-9c36-dbb052165822", // The RP's header UUID
        "version": "1.0.0"
    }
]
```

### Script Module Dependencies

Any behavior pack with a `script` module must declare the API modules it imports. The version chooses which API surface you get. See [Script API Modules](/scripting/api-modules) for the current list of modules and versions.

<CodeHeader path="BP/manifest.json" />

```json
"dependencies": [
    {
        "module_name": "@minecraft/server",
        "version": "2.7.0"
    },
    {
        "module_name": "@minecraft/server-ui",
        "version": "2.0.0"
    }
]
```

## Capabilities

`capabilities` is an array of strings. Each one opts the pack into an optional engine feature.

| Capability               | Pack type | Description                                                                                                             |
| ------------------------ | --------- | ----------------------------------------------------------------------------------------------------------------------- |
| `pbr`                    | RP        | The pack ships physically based rendering assets, and Vibrant Visuals may be enabled while it is active.                |
| `raytraced`              | RP        | The pack ships ray-tracing assets and enables ray tracing on supported devices.                                         |
| `script_eval`            | BP        | Allows `eval()` and `Function()` in scripts. Not recommended; see [Script API Environment](/scripting/api-environment). |
| `chemistry`              | BP / RP   | The pack may add, remove or modify chemistry (Education Edition) behavior.                                              |
| `editorExtension`        | BP / RP   | Marks the pack as an extension for the Minecraft Editor.                                                                |
| `experimental_custom_ui` | RP        | Legacy flag from the old HTML-based custom UI system. It has no effect in current versions.                             |

<CodeHeader path="RP/manifest.json" />

```json
"capabilities": ["pbr"]
```

## Metadata

`metadata` holds information about who made the pack and how. None of it changes how the pack behaves in-game.

| Field            | Type   | Description                                                                                                                                                                                                                                                                                                                                                 |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authors`        | Array  | Names of the pack's authors. **Required in format version 3** (see [Format Versions](#format-versions)).                                                                                                                                                                                                                                                    |
| `license`        | String | The license the pack is distributed under, for example `"MIT"` or `"All Rights Reserved"`.                                                                                                                                                                                                                                                                  |
| `url`            | String | The pack's website.                                                                                                                                                                                                                                                                                                                                         |
| `product_type`   | String | The only supported value is `"addon"`. It tells the game the pack is an add-on rather than a full world or game. Before version 26.50, worlds with `"addon"` packs kept achievements enabled; this was removed in 26.50 as it was considered an exploit ([MCPE-242529](https://mojira.dev/MCPE-242529)). It does not otherwise change how the pack behaves. |
| `generated_with` | Object | Records the tools that generated or edited the manifest. Keys are tool names matching `[a-zA-Z0-9_-]` with at most 32 characters. Values are arrays of SemVer strings, one for each tool version that touched the file.                                                                                                                                     |

<CodeHeader path="BP/manifest.json" />

```json
"metadata": {
    "authors": ["Your Name"],
    "license": "MIT",
    "url": "https://wiki.bedrock.dev",
    "product_type": "addon",
    "generated_with": {
        "bridge": ["2.7.0"]
    }
}
```

## Subpacks

Subpacks let the player choose between different variations of a pack. They were designed for shipping several texture resolutions in one resource pack, so lower-memory devices load smaller textures, but they can hold any resource or behavior pack content.

### How Subpacks Work

Files in a subpack folder **override** files in the pack's root when that subpack is selected. For example, if a pack contains both `RP/textures/wiki/entities/ghost.png` and `RP/subpacks/pack_1/textures/wiki/entities/ghost.png`, the second image replaces the first while `pack_1` is active. Files that only exist in the root are still loaded.

For more on how files override each other, see [Overwriting Vanilla Assets](/concepts/overwriting-assets).

### Creating Subpacks

Create a `subpacks` folder in the root of your BP or RP, then one folder per subpack inside it.

<FolderView :paths="[
    'RP/subpacks/subpack_1',
    'RP/subpacks/subpack_2'
]" />

Each subpack folder is laid out exactly like a normal pack.

<FolderView :paths="[
    'RP/subpacks/subpack_1/textures/wiki/blocks/dirt.png',
    'RP/subpacks/subpack_1/textures/wiki/items/example_item.png',
    'RP/subpacks/subpack_2/textures/wiki/blocks/dirt.png',
    'RP/subpacks/subpack_2/textures/wiki/items/example_item.png'
]" />

:::tip
Keep subpack folder names short. Long names can hit path length limits on some platforms.
:::

### Subpack Manifest Fields

Register each folder in the `subpacks` array of the manifest.

| Field                     | Type    | Required | Description                                                                                                                                                                   |
| ------------------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `folder_name`             | String  | Yes      | The folder inside `subpacks/` this entry refers to.                                                                                                                           |
| `name`                    | String  | Yes      | The label shown on the subpack slider. Cannot be localized.                                                                                                                   |
| `memory_tier`             | Integer | Yes      | The minimum device memory needed to select this subpack, in units of 0.25 GB. A tier of `4` means 1 GB. Microsoft plans to replace this field with `memory_performance_tier`. |
| `memory_performance_tier` | Integer | No       | A platform tier from `1` to `5` (see the table below). Requires manifest `format_version` 3 and is still experimental.                                                        |

<CodeHeader path="RP/manifest.json" />

```json
{
    "format_version": 3,
    "header": {
        "name": "Pack Name",
        "description": "Pack Description",
        "uuid": "2fc2dd6f-86cb-4370-af70-21490a1ae471",
        "version": "1.0.0",
        "min_engine_version": "1.26.40"
    },
    "modules": [
        {
            "type": "resources",
            "uuid": "f6821b4a-1854-44fc-a8a4-0c2847ffda46",
            "version": "1.0.0"
        }
    ],
    "metadata": {
        "authors": ["Your Name"]
    },
    "subpacks": [
        {
            "folder_name": "subpack_1",
            "name": "Low Resolution",
            "memory_tier": 0,
            "memory_performance_tier": 1
        },
        {
            "folder_name": "subpack_2",
            "name": "High Resolution",
            "memory_tier": 12,
            "memory_performance_tier": 3
        }
    ]
}
```

### Memory Tier Alignment

Microsoft publishes the following mapping between `memory_performance_tier`, `memory_tier` and typical hardware.

| Performance tier | Typical platforms                               | Equivalent `memory_tier` | Device memory |
| ---------------- | ----------------------------------------------- | ------------------------ | ------------- |
| 1                | Nintendo Switch                                 | ≤ 11                     | 2 to 4 GB     |
| 2                | PS4, PS4 Pro, Xbox One, Xbox One S, most mobile | 12 to 16                 | 4 to 5 GB     |
| 3                | Xbox One X, Xbox Series S                       | 18 to 20                 | 6 to 8 GB     |
| 4                | Xbox Series X, PS5                              | 24 to 28                 | 8 to 12 GB    |
| 5                | PS5 Pro, most PCs                               | ≥ 32                     | over 12 GB    |

### Subpack Selection

-   The default subpack is the one with the **highest tier the device qualifies for**. If several subpacks share that tier, the **last** one in the array wins, so avoid giving two subpacks the same tier.
-   Players can switch subpacks from the pack's settings. In the resource pack list, select the pack, press the gear icon and move the slider. Players can only move to tiers their device supports.
-   Adding a single subpack still produces two slider positions: the subpack and "no subpack". Selecting "no subpack" does **not** make root files override anything, it simply loads the root alone.

## Pack Settings

Pack settings add a configurable options screen to a behavior or resource pack. The screen can contain labels, toggles, sliders and dropdowns. Players reach it from the gear icon next to the pack in the world's pack list, or from Settings while in-game.

-   **Resource pack settings** are stored per player. Each player picks their own values, and the pack reads them with Molang.
-   **Behavior pack settings** are stored per world. The world or server owner sets them, and the pack reads them from the Script API.
-   Skin packs cannot have settings.

### Requirements

-   Manifest `format_version` **3**. Settings are ignored in format version 2.
-   A `min_engine_version` of at least `1.21.130`, which is when the Molang queries were added. The examples on this page use a newer version; any version from `1.21.130` upwards works.
-   `@minecraft/server` for the Script API method. `world.getPackSettings()` is available in the current stable API.

### Setting Types

`settings` is an **ordered** array. Entries appear on the screen in the order they are listed. Every type has a `text` field, which accepts a plain string or a [localization key](/text/text-intro).

#### Label

Read-only text. Use it for headings, descriptions or to break the screen into sections.

| Field  | Type   | Description                                         |
| ------ | ------ | --------------------------------------------------- |
| `type` | String | `"label"`                                           |
| `text` | String | The text to display. Supports `§` formatting codes. |

#### Toggle

A true or false switch.

| Field     | Type    | Description                                                                        |
| --------- | ------- | ---------------------------------------------------------------------------------- |
| `type`    | String  | `"toggle"`                                                                         |
| `name`    | String  | The identifier used to read the value. Namespace it, for example `wiki:show_text`. |
| `text`    | String  | The label shown next to the toggle.                                                |
| `default` | Boolean | The initial value.                                                                 |

#### Slider

A number within a range. Integers and decimals are both allowed.

| Field     | Type   | Description                            |
| --------- | ------ | -------------------------------------- |
| `type`    | String | `"slider"`                             |
| `name`    | String | The identifier used to read the value. |
| `text`    | String | The label shown above the slider.      |
| `min`     | Number | The lowest selectable value.           |
| `max`     | Number | The highest selectable value.          |
| `step`    | Number | The distance between slider notches.   |
| `default` | Number | The initial value.                     |

#### Dropdown

A choice between a fixed list of options.

| Field     | Type   | Description                                                                                     |
| --------- | ------ | ----------------------------------------------------------------------------------------------- |
| `type`    | String | `"dropdown"`                                                                                    |
| `name`    | String | The identifier used to read the value.                                                          |
| `text`    | String | The label shown next to the dropdown.                                                           |
| `options` | Array  | Objects with a `name` (the value your pack reads) and a `text` (the label shown to the player). |
| `default` | String | The `name` of the initially selected option.                                                    |

### Example

<CodeHeader path="RP/manifest.json" />

```json
{
    "format_version": 3,
    "header": {
        "name": "Pack Name",
        "description": "Pack Description",
        "uuid": "7f3b2c91-5e84-4a16-bd73-91c8e52f604a",
        "version": "1.0.0",
        "min_engine_version": "1.26.40"
    },
    "modules": [
        {
            "type": "resources",
            "uuid": "c6a94725-1f3d-4e82-9b61-54e8f7a203dc",
            "version": "1.0.0"
        }
    ],
    "metadata": {
        "authors": ["Your Name"]
    },
    "settings": [
        {
            "type": "label",
            "text": "Text Settings"
        },
        {
            "type": "toggle",
            "name": "wiki:show_text",
            "text": "Show Text",
            "default": true
        },
        {
            "type": "slider",
            "name": "wiki:text_scale",
            "text": "Text Scale",
            "min": 0.5,
            "max": 2.0,
            "step": 0.1,
            "default": 1.0
        },
        {
            "type": "dropdown",
            "name": "wiki:text",
            "text": "Text Options",
            "options": [
                { "name": "text_1", "text": "This is text 1" },
                { "name": "text_2", "text": "This is text 2" },
                { "name": "text_3", "text": "This is text 3" }
            ],
            "default": "text_2"
        }
    ]
}
```

### Reading Settings in Resource Packs

Resource packs read their settings with three [Molang](/concepts/molang) queries. They work anywhere Molang does: render controllers, animations, animation controllers, particles and entity definitions.

```molang
query.is_pack_setting_enabled('wiki:show_text')      // Toggle. Returns true or false.
query.get_pack_setting('wiki:text_scale')            // Slider. Returns the number.
query.is_pack_setting_selected('wiki:text', 'text_2') // Dropdown. True if that option is selected.
```

### Reading Settings in Behavior Packs

Behavior packs read their settings with the Script API. `world.getPackSettings()` returns an object keyed by setting name. Toggles are booleans, sliders are numbers and dropdowns are the selected option's `name` string.

<CodeHeader path="BP/scripts/main.js" />

```js
import { world } from "@minecraft/server";

const settings = world.getPackSettings();

if (settings["wiki:show_text"] === true) {
    const scale = settings["wiki:text_scale"]; // Number
    const option = settings["wiki:text"]; // "text_1", "text_2" or "text_3"
    world.sendMessage(`Scale ${scale}, option ${option}`);
}
```

## Complete Examples

### Behavior Pack

A behavior pack with data and scripts, depending on its resource pack and on two API modules.

<CodeHeader path="BP/manifest.json" />

```json
{
    "format_version": 3,
    "header": {
        "name": "pack.name",
        "description": "pack.description",
        "uuid": "ee649bcf-256c-4013-9068-6a802b89d756",
        "version": "1.0.0",
        "min_engine_version": "1.26.40"
    },
    "modules": [
        {
            "type": "data",
            "uuid": "fa6e90c8-c925-460f-8155-c8a60b753caa",
            "version": "1.0.0"
        },
        {
            "type": "script",
            "language": "javascript",
            "entry": "scripts/main.js",
            "uuid": "c05a992e-482a-455f-898c-58bbb4975e47",
            "version": "1.0.0"
        }
    ],
    "dependencies": [
        {
            "uuid": "66c6e9a8-3093-462a-9c36-dbb052165822",
            "version": "1.0.0"
        },
        {
            "module_name": "@minecraft/server",
            "version": "2.7.0"
        },
        {
            "module_name": "@minecraft/server-ui",
            "version": "2.0.0"
        }
    ],
    "metadata": {
        "authors": ["Your Name"],
        "license": "MIT",
        "url": "https://wiki.bedrock.dev",
        "product_type": "addon"
    }
}
```

### Resource Pack

A world-scoped resource pack with Vibrant Visuals support.

<CodeHeader path="RP/manifest.json" />

```json
{
    "format_version": 3,
    "header": {
        "name": "pack.name",
        "description": "pack.description",
        "uuid": "66c6e9a8-3093-462a-9c36-dbb052165822",
        "version": "1.0.0",
        "min_engine_version": "1.26.40",
        "pack_scope": "world"
    },
    "modules": [
        {
            "type": "resources",
            "uuid": "743f6949-53be-44b6-b326-398005028819",
            "version": "1.0.0"
        }
    ],
    "metadata": {
        "authors": ["Your Name"],
        "product_type": "addon"
    },
    "capabilities": ["pbr"]
}
```

### Skin Pack

Skin packs do not use `min_engine_version`, `dependencies`, `capabilities` or `settings`. See [Skin Packs](/visuals/skin-packs) for the rest of the pack.

<CodeHeader path="skin_packs/my_skins/manifest.json" />

```json
{
    "format_version": 2,
    "header": {
        "name": "My Skin Pack",
        "uuid": "bb9616eb-327c-4a81-9f00-064cae820cd5",
        "version": [1, 0, 0]
    },
    "modules": [
        {
            "type": "skin_pack",
            "uuid": "e4bc71b6-8f9b-4094-9d47-dc3824f8a3dc",
            "version": [1, 0, 0]
        }
    ]
}
```

### World Template

<CodeHeader path="world_templates/my_world/manifest.json" />

```json
{
    "format_version": 2,
    "header": {
        "name": "My World",
        "description": "A world template",
        "uuid": "3d2e1f00-9a8b-4c7d-8e6f-5a4b3c2d1e0f",
        "version": [1, 0, 0],
        "base_game_version": [1, 26, 40],
        "lock_template_options": true,
        "allow_random_seed": false
    },
    "modules": [
        {
            "type": "world_template",
            "uuid": "9f8e7d6c-5b4a-4c3d-9e2f-1a0b9c8d7e6f",
            "version": [1, 0, 0]
        }
    ]
}
```

## Troubleshooting

-   **The pack does not appear in-game.** The manifest is not valid JSON, or a required field is missing. Paste it into a JSON validator. In format version 3, also check that `metadata.authors` is present and every version is a string.
-   **"Duplicate pack detected".** Another installed pack has the same header UUID. Either you copied a manifest without regenerating UUIDs, or you imported an update without raising `header.version`.
-   **Scripts do not run.** The `script` module is missing `entry`, or the `@minecraft/server` dependency is missing or requests a version the game does not have.
-   **The resource pack is not applied with the behavior pack.** The BP's dependency `uuid` does not match the RP's `header.uuid`, or the `version` does not match.
-   **Settings screen is empty.** The manifest is still `format_version` 2.

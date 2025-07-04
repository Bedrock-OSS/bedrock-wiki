---
title: Style Guide
description: A guide for keeping Minecraft creations consistent.
mentions:
    - SirLich
    - solvedDev
    - MedicalJewel105
    - ChibiMango
    - zheaEvyline
    - QuazChick
---

This document will present the Bedrock Wiki style guide for add-on creation. This guide aims to promote best practices while creating add-ons and create a consistent format for everyone to follow.

:::tip
The style guide is a living, breathing document, which will evolve as add-on creation evolves. Please get in touch if you think something needs to be updated or changed!
:::

## Folder Structure

-   No spaces in your file paths. `use_underscores`.
-   No `CAPITALS` in your identifiers, file names, or folder names. 'BP' and 'RP' folder names may use capitals.
-   The total character length of any path must not exceed 80 characters (console limitation).
-   Content folders should use consistent pluralization: Stick with names that are either all plural or all singular, don't mix and match. Example:

✅️ **Consistent**:

```
BP/functions/wiki/ability/ice_blast.mcfunction
BP/functions/wiki/ability/fire_trail.mcfunction
BP/functions/wiki/event/players/on_death.mcfunction
BP/functions/wiki/event/worlds/on_initialise.mcfunction
```

-   All content folders `ability` and `event` are consistently singular.
-   The content folders in `event` are also consistent, as both `players` and `worlds` are plural.

❌️ **Inconsistent**:

```
BP/functions/wiki/abilities/ice_blast.mcfunction
BP/functions/wiki/abilities/fire_trail.mcfunction
BP/functions/wiki/event/players/on_death.mcfunction
BP/functions/wiki/event/world/on_initialise.mcfunction
```

-   Only `abilities` content folder is pluralized while `event` is singular.
-   Also, in the `event` folder, the `players` folder is plural while `world` is singular.

## Identifiers

Do not use identifiers that begin with a number, and especially don't use an identifier that is _only_ a number. This applies to entities, component_groups, events, and anything else that takes a `namespace:name` pair.

## File and Folder Names

| Concept               | Example                                                           |
| --------------------- | ----------------------------------------------------------------- |
| Behavior Pack         | dragons_BP                                                        |
| Resource Pack         | dragons_RP                                                        |
| Geometry              | dragon.geo.json                                                   |
| Animations            | dragon.animation.json<br>dragon.anim.json                         |
| Animation Controllers | dragon.animation_controllers.json<br>dragon.ac.json               |
| Entity                | dragon.behavior.json<br>dragon.se.json<br>_(se: server entity)_   |
| Client Entity         | dragon.entity.json<br>dragon.client_entity.json<br>dragon.ce.json |
| Item                  | dragon_tooth.item.json                                            |
| Legacy Item (BP)      | dragon_tooth.item.bp.json                                         |
| Legacy Item (RP)      | dragon_tooth.item.rp.json                                         |
| Render Controllers    | dragon.render_controllers.json<br>dragon.rc.json                  |
| Loot Table            | dragon.json                                                       |
| Recipe                | dragon_saddle.recipe.json                                         |
| Spawn Rules           | dragon.spawn.json                                                 |
| Trade Table           | dragon.json                                                       |
| Particle Effect       | dragon_magic.particle.json                                        |
| Texture               | dragon.png                                                        |
| Script                | dragonFlight.js                                                   |

## Namespaces

A suitable namespace should be unique to you or your team. Something like `mob` or `cars` or `content` or `custom` would be a **bad** namespace since another developer might come up with the same namespace as you.

The `minecraft` namespace is reserved for vanilla content so cannot be used unless overriding vanilla content.

For personal projects, use a convenient version of your player name, and for team projects, use a suitable version of your team name.

When multiple developers work on a project together, the namespace should always be shared. If credit is required, use sub-indexing: `minetite.wiki:dragon`

Where to use namespaces:

-   Biomes
    -   Tags
-   Blocks
    -   Culling rules
    -   Culling layers
    -   Crafting tags
    -   Tags
-   Entities
    -   Component groups
    -   Events
    -   Families
-   Items
    -   Cooldown categories
    -   Catalog groups
    -   Tags
-   Particles

### Namespace Folders

Some content is identified by its file path. Therefore, it should be included in a folder that acts as the namespace:

<FolderView :paths="[
    'BP/functions/<namespace>/*.mcfunction',
    'BP/loot_tables/<namespace>/*.json',
    'BP/trading/<namespace>/*.json',
    'BP/structures/<namespace>/*.mcstructure',
    'RP/sounds/<namespace>/*.ogg',
    'RP/textures/<namespace>/*.png',
]" />

Other folders should not contain namespaces.

## Sub-Indexing

Sub indexing is the use of `.` to separate chained concepts. Sub-indexing should go in descending order from big to small:

✔️ `animation.controller.dragon.flying.taking_off`

❌ `animation.controller.dragon_take_off_flying`

When using sub-indexing, use `_` as space, not another `.`.

✔️ `animation.controller.dragon.flying.taking_off`

❌ `animation.controller.dragon.flying.taking.off`

You can use sub-indexing in your entities: `wiki:dragon.drake`

## Groups and Events Should Complement Each Other

| Group     | Event               |
| --------- | ------------------- |
| wiki:wild | ✔️ wiki:become_wild |
| wiki:wild | ❌ wiki:wild        |
| wiki:tame | ✔️ wiki:on_tame     |
| wiki:tame | ❌ wiki:tame        |

## Short-Names Should Be Generic

Short-names are file-specific identifiers, which are used to map between an identifier and a pretty name. They are handy because they allow us to re-use animation controllers and render controllers. For this reason, your short-names should be generic.

✔️ `"sit": "animation.dragon.sit"`

❌ `"dragon_sitting": "animation.dragon.sit"`

When we make short-names of this form, we can use a generic "sit" animation controller for all of them since we can use the `sit` short-name to play the sit animation.

## Functions

1. All your `.mcfunction` files must be go in a namespaced root-folder within the functions folder. On Bedrock Wiki, we use the `wiki` namespace. However, you may choose a namespace based on your name or project. For more info, refer to the [namespaces](/concepts/namespaces) page.
    - ✅️ `BP/functions/wiki/random_number.mcfunction`
    - ❌️ `BP/functions/random_number.mcfunction`
2. They must be properly nested:
    - ✅️ `BP/functions/wiki/teleport/zone/hell.mcfunction`
    - ❌ `BP/functions/wiki/teleport_hellzone.mcfunction`
3. The names must follow an `action_object` structure. Meaning verbs should come before subjects.
    - ✅️ `add_all`
    - ❌️ `all_add`
    - ✅️ `shuffle_position`
    - ❌️ `position_shuffle`

### Comments in Functions

-   When working with functions that contain many commands, it's helpful to keep them organized by using multiple hashtags in comments to indicate different header levels.
-   _Optionally_, to further distinguish these levels, you can apply different styles:
    -   level 1 headers - **# UPPERCASE**
    -   level 2 headers - **## Title Case**
    -   level 3 headers - **### Sentence case**
-   Try to avoid the use of more than three header levels or too many headers overall, as this can make the code look cluttered. For your reference, see the example file below:

<Spoiler title="Example Function File">

<CodeHeader>BP/functions/wiki/ability/fire_trail.mcfunction</CodeHeader>

```yaml
# ON PLAYER ITEM DROP

## Give Effects
### Fire resistance
execute at @e[type=item,name="Fire Trail Ability"] run effect @p[r=3] fire_resistance 10 255
### Speed
execute at @e[type=item,name="Fire Trail Ability"] run effect @p[r=3] speed 10 1 true

## Add Particle Time (10s)
execute at @e[type=item,name="Fire Trail Ability"] run scoreboard players set @p[r=3] abilities.fire_trail 200

## Delete Item
kill @e[type=item,name="Fire Trail Ability"]


# ENTITY TIMER

## Emit Particle Trail
execute at @a[scores={wiki:ability.fire_trail=1..}] run particle minecraft:basic_flame_particle ~~~

## Countdown Timer
scoreboard players remove @a [scores={wiki:ability.fire_trail=1..}] wiki:ability.fire_trail 1
```

</Spoiler>

Note the use of two lines of spacing before level 1 headers and one line of spacing before level 2 headers for improved readability.

This practice helps create a consistent format, making it easier for everyone to follow, and maintain uniformity across your functions.

## Scoreboard Objectives & Tags

-   Must begin with a namespace and use `snake_case`.
    -   This prevents conflicts with packs using identical tags or objectives.
-   Only use lowercase letters (a–z), underscores (`_`), and dots (`.`) as special characters.

**Example Objectives:**

-   `wiki:blocks_travelled.overworld`
-   `wiki:q.is_sneaking`
-   `wiki:q.is_armed_any`

**Example Tags:**

-   `wiki:inventory.full`
-   `wiki:inventory.empty`
-   `wiki:is_flying`

:::info NOTE:
Tags describe a definite state—if a tag exists, its condition is true. This is why Molang queries represented as tags in a similar manner do not use the `q.` prefix.
:::

### Score Holders

-   Must be prefixed with either a dot (`.`) or hashtag (`#`) and use `PascalCase`.
    -   This prevents conflicts with gamertags using identical names and provides a clear visual distinction since score holders are used closely with objectives.
    -   A prefix is used instead of a namespace to keep it concise, as the namespaced objective already prevents conflicts with other packs.
-   No special characters other than dots (`.`).

**Examples:**

-   `.Ores.Iron`
-   `.Ores.DeepslateIron`
-   `.200`

:::tip **TIP:**
Score holders prefixed with a hashtag (`#`) will not be displayed on the scoreboard sidebar. However, they must be enclosed in double quotes (`" "`) to avoid a syntax error.
:::

## Group Animations Files when Possible

Example:

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.8.0",
    "animations": {
        "animation.dragon.sit": {...},
        "animation.dragon.fly": {...},
        "animation.dragon.roar": {...},
  }
}
```

## Split Textures by Path, Not Name

✔️ `textures/dragon/red`

❌ `textures/dragon_red_skin`

✔️ `textures/npc/dragon_hunter/archer`

❌ `textures/npc/dragon_hunter_archer`

## .lang File Comments

Comments intended for the localizer should always be in-line, in the following format:

```lang
the.key=The string<\t>## Comment, intended for the one localizing.
```

`<\t>` should be replaced by a tab (`	`) character in your lang files.

Own-line comments can be used for organizational purposes but should not store localization-critical information.

## Abbreviations

### Pack Types

| Abbreviation | Pack Type                          |
| ------------ | ---------------------------------- |
| BP           | Behavior Pack                      |
| RP           | Resource Pack                      |
| SP           | Skin Pack                          |

### Languages

| Abbreviation | Language                           |
| ------------ | ---------------------------------- |
| JS           | JavaScript                         |
| JSON         | JavaScript Object Notation         |
| NBT          | Named Binary Tag                   |
| TS           | TypeScript                         |

### Other

| Abbreviation | Concept                            |
| ------------ | ---------------------------------- |
| AC           | Animation Controller               |
| RPAC         | Resource Pack Animation Controller |
| BPAC         | Behavior Pack Animation Controller |
| BDS          | Bedrock Dedicated Server           |
| HUD          | Heads-Up Display                   |
| IDE          | Integrated Development Environment |
| OSS          | Open-Source Software               |
| UI           | User Interface                     |
| VS Code      | Visual Studio Code                 |

## Definition Format Orders

Blocks, entities and items should follow the format order below.

### Blocks

-   `format_version`
-   `minecraft:block`
    -   `description`
        -   `identifier`
        -   `menu_category`
            -   `category`
            -   `group`
        -   `states`
        -   `traits`
    -   `components`
    -   `permutations`
        -   `condition`
        -   `components`

### Entities

-   `format_version`
-   `minecraft:entity`
    -   `description`
        -   `identifier`
        -   `spawn_category`
        -   `is_spawnable`
        -   `is_summonable`
        -   `properties`
    -   `component_groups`
    -   `components`
    -   `events`

### Items

-   `format_version`
-   `minecraft:item`
    -   `description`
        -   `identifier`
        -   `menu_category`
            -   `category`
            -   `group`
    -   `components`

## Custom Components

### Variable Names

PascalCase should be used with `Block` or `Item` as a prefix and `Component` as a suffix. As an example, `const BlockMeltableComponent = { ... }` rather than `const meltable = { ... }`.

This helps to differentiate what we're using in `registerCustomComponent` and what we're using as values elsewhere.

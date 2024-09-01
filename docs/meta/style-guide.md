---
title: Style Guide
mentions:
    - wiki
    - solvedDev
    - MedicalJewel105
    - ChibiMango
    - zheaEvyline
description: Officially supported Bedrock-Wiki style guide for add-on creation.
---

This document will present the officially supported Bedrock-Wiki style guide for add-on creation. This guide aims to promote best practices while creating add-ons and create a consistent format for everyone to follow.

:::tip
The style guide is a living, breathing document, which will evolve as add-on creation evolves. Please get in touch if you think something needs to be updated or changed!
:::

## Folder Structure

-   No spaces in your file paths. `use_underscores`.
-   No `CAPITALS` in your identifiers, file names, or folder names.
-   The total character length of any path must not exceed 80 characters (console limitation).
-   Content folders should use consistent pluralization: Don't mix and match.

## Identifiers

Do not use identifiers that begin with a number, and especially don't use an identifier that is _only_ a number. This applies to entities, component_groups, events, and anything else that takes a `namespace:name` pair.

## File and Folder names

| Concept              | Example Identifier         |
| -------------------- | -------------------------- |
| Behavior Pack        | dragons_BP                 |
| Resource Pack        | dragons_RP                 |
| Geometry             | dragon.geo.json            |
| Animation            | dragon.animation.json      |
| Animation Controller | dragon.ac.json             |
| RP Entity            | dragon.ce.json             |
| BP Entity            | dragon.se.json             |
| Item 1.16.100+       | dragon_tooth.item.json     |
| BP Item              | dragon_tooth.item.bp.json  |
| RP Item              | dragon_tooth.item.rp.json  |
| Render Controller    | dragon.rc.json             |
| Loot Table           | dragon.loot.json           |
| Recipe               | dragon_saddle.recipe.json  |
| Spawn Rules          | dragon.spawn.json          |
| Trade Table          | dragon.trade.json          |
| Particles            | dragon_magic.particle.json |
| Texture              | dragon.png                 |
| Gametest             | dragonTest.js              |

## Namespaces

A suitable namespace should be unique to you or your team. Something like `mob` or `cars` or `content` or `custom` would be a **bad** namespace since another developer might come up with the same namespace as you.

`minecraft` and `minecon` are reserved. Don't use these.

For personal projects, use a convenient version of your player name, and for team projects, use a suitable version of your team name.

When multiple developers work on a project together, the namespace should always be shared. If credit is required, use sub-indexing: `minetite.wiki:dragon`

Where to use namespaces:

-   entities
-   particles
-   component-groups
-   events

When not to use namespaces:

-   do not include your namespace in any folder path or file-name

## Sub-indexing

Sub indexing is the use of `.` to separate chained concepts. Sub-indexing should go in descending order from big to small:

✔️ `animation.controller.dragon.flying.taking_off`

❌ `animation.controller.dragon_take_off_flying`

When using sub-indexing, use `_` as space, not another `.`.

✔️ `animation.controller.dragon.flying.taking_off`

❌ `animation.controller.dragon.flying.taking.off`

You can use sub-indexing in your entities:
`wiki:dragon.drake`

## Groups and Events should complement each other

| Group     | Event               |
| --------- | ------------------- |
| wiki:wild | ✔️ wiki:become_wild |
| wiki:wild | ❌ wiki:wild        |
| wiki:tame | ✔️ wiki:on_tame     |
| wiki:tame | ❌ wiki:tame        |

## Short-Names should be Generic

Short-names are file-specific identifiers, which are used to map between an identifier and a pretty name. They are handy because they allow us to re-use animation controllers and render controllers. For this reason, your short-names should be generic.

✔️ `"sit": "animation.dragon.sit"`

❌ `"dragon_sitting": "animation.dragon.sit"`

When we make short-names of this form, we can use a generic "sit" animation controller for all of them since we can use the `sit` short-name to play the sit animation.

## Functions should be nested

You can put functions in folders to achieve this.

✔️ `function teleport/zone/hell`

❌ `function teleport_hellzone`

## Scoreboards And Tags

- Scoreboard objectives should be named using `snake_case`, while scoreboard fake-player-names should use `camelCase`. This distinction helps in easily differentiating between the two when typing out scoreboard commands.
- Like scoreboard fake-player-names, tags should also use `camelCase` as they have limited interaction with each other and don't really need further distinction.

- **Example Tag Names:**
    - `admin`
    - `inHub`
    - `inLobby`
    - `abilityFireTrail`
    - `abilityWallClimb`
- *Only alphanumeric characters.*

- **Example Fake Player Names:**
    - `alivePlayer`
    - `zombieHorse`
    - `oresEmerald`
    - `oresDiamond`
    - `oresDeepslateDiamond`
- *Only alphanumeric characters.*

- **Example Objective Names:**
    - `world_timer`
    - `entity_timer`
    - `abilities.fire_trail`
    - `abilities.wall_climb`
    - `abilities.ice_blast`
- *Only alphanumeric characters, (` _ `) and (` . `).*
- Dot notation (`dot.notation`) may be used to represent groups or categories. However, avoid over use to prevent cluttering and impacting readability.

## Group animations files when possible

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

## Split textures by path, not name

✔️ `textures/dragon/red`

❌ `textures/dragon_red_skin`

✔️ `textures/npc/dragon_hunter/archer`

❌ `textures npc/dragon_hunter_archer`

## .lang File Comments

Comments intended for the localizer should always be in-line, in the following format:

`the.key=The string<\t>## Comment, intended for the one localizing.`

`<\t>` represents a tab-character.

Own-line comments can be used for organizational purposes but should not store localization-critical information.

## Acronyms when discussing

| Acronym | Concept                            |
| ------- | ---------------------------------- |
| BP      | Behavior Pack                      |
| RP      | Resource pack                      |
| VRP     | Vanilla Resource Pack              |
| VBP     | Vanilla Behavior Pack              |
| AC      | Animation Controller               |
| RPAC    | Resource Pack Animation Controller |
| BPAC    | Behavior Pack Animation Controller |
| BB      | Blockbench                         |
| BDS     | Bedrock Dedicated Server           |
| FPV     | First Person View                  |
| RD      | Render Dragon                      |
| VSCode  | Visual Studio Code                 |
| SP      | Skin Pack                          |

## Blocks/Items Format Order

Blocks and Items should follow the format order below. This would particularly help with understanding that components that appear later in the file are what will be applied in regards to block permutations.

### Blocks

-   format_version
-   minecraft:block
    -   description
        -   identifier
        -   menu_category
        -   states
        -   traits
    -   components
    -   permutations
        -   condition
        -   components

### Items

-   format_version
-   minecraft:item
    -   description
        -   identifier
        -   menu_category
    -   components

## Custom Components Variable Name

PascalCase should be used with BlockComponent or ItemComponent as a suffix. As an example, `MeltableBlockComponent` rather than `meltable`. This would help to differentiate what we're using in `registerCustomComponent` and what we're using as values elsewhere.

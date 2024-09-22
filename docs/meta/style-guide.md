---
title: Style Guide
mentions:
    - SirLich
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
-   Content folders should use consistent pluralization: Stick with names that are either all plural or all singular, don't mix and match. Example:

✅️ Consistent:
```
BP/functions/abilities/ice_blast.mcfunction
BP/functions/events/player/on_death.mcfunction
BP/functions/events/world/on_initialise.mcfunction
BP/functions/quests/jungle/1.mcfunction
```
- All content folders `abilities`, `events`, and `quests` are consistently pluralized.
- The content folders in `events` are also consistent, as both `player` and `world` are singular.

❌️ Inconsistent:
```
BP/functions/ability/ice_blast.mcfunction
BP/functions/event/players/on_death.mcfunction
BP/functions/event/world/on_initialise.mcfunction
BP/functions/quests/jungle/1.mcfunction
```
- Only `quests` content folder is pluralized while `ability`, and `event` are singular.
- Also, in the `event` folder, the `players` folder is plural while `world` is singular.

## Identifiers

Do not use identifiers that begin with a number, and especially don't use an identifier that is _only_ a number. This applies to entities, component_groups, events, and anything else that takes a `namespace:name` pair.

## File and Folder Names

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

## Sub-Indexing

Sub indexing is the use of `.` to separate chained concepts. Sub-indexing should go in descending order from big to small:

✔️ `animation.controller.dragon.flying.taking_off`

❌ `animation.controller.dragon_take_off_flying`

When using sub-indexing, use `_` as space, not another `.`.

✔️ `animation.controller.dragon.flying.taking_off`

❌ `animation.controller.dragon.flying.taking.off`

You can use sub-indexing in your entities:
`wiki:dragon.drake`

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

1. **Functions should be nested.** You can put functions in folders to achieve this.
    - ✅️ `function teleport/zone/hell`
    - ❌ `function teleport_hellzone`

2. **Function file/folder names must follow an `action_object` structure.** Meaning verbs should always come before the subjects.
    - ✅️ `add_all`
    - ✅️ `shuffle_position`
    - ❌️ `all_add`
    - ❌️ `position_shuffle`

### Comments in Functions

- When working with functions that contain many commands, it's helpful to keep them organized by using multiple hashtags in comments to indicate different header levels.
- *Optionally*, to further distinguish these levels, you can apply different styles:
    - level 1 headers - **# UPPERCASE**
    - level 2 headers - **## Title Case**
    - level 3 headers - **### Sentence case**
- Try to avoid the use of more than three header levels or too many headers overall, as this can make the code look cluttered. For your reference, see the example file below:

<Spoiler title="Example Function File">

<CodeHeader>BP/functions/abilities/fire_trail.mcfunction</CodeHeader>

```yaml
# ON PLAYER ITEM DROP

## Give Effects
### Fire resistance
execute at @e [type=item, name="Fire Trail Ability"] run effect @p [r=3] fire_resistance 10 255
### Speed
execute at @e [type=item, name="Fire Trail Ability"] run effect @p [r=3] speed 10 1 true

## Add Particle Time (10s)
execute at @e [type=item, name="Fire Trail Ability"] run scoreboard players set @p [r=3] abilities.fire_trail 200

## Delete Item
kill @e [type=item, name="Fire Trail Ability"]


# ENTITY TIMER

## Emit Particle Trail
execute at @a [scores={abilities.fire_trail=1..}] run particle minecraft:basic_flame_particle ~~~

## Countdown Timer
scoreboard players remove @a [scores={abilities.fire_trail=1..}] abilities.fire_trail 1
```

</Spoiler>

Note the use of two lines of spacing before level 1 headers and one line of spacing before level 2 headers for improved readability.

This practice helps create a consistent format, making it easier for everyone to follow, and maintain uniformity across your functions.

## Scoreboards and Tags

- Scoreboard objectives should be named using `snake_case`, while scoreboard fake-player-names should use **PascalCase**. This distinction makes it easier to differentiate between the two when typing scoreboard commands.
- Tags should use `camelCase`, as they usually represent states or conditions and align with common conventions for variable names.

**Example Tag Names:**

- `admin`
- `inNether`
- `isFlying`
- `abilityFireTrail`
- `abilityWallClimb`

*Only alphanumeric characters.*

**Example Fake Player Names:**

- `AlivePlayer`
- `ZombieHorse`
- `OresEmerald`
- `OresDiamond`
- `OresDeepslateDiamond`

*Only alphanumeric characters.*

**Example Objective Names:**

- `ticks`
- `entity_timer`
- `abilities.fire_trail`
- `abilities.wall_climb`
- `abilities.ice_blast`

*Only **lowercase** alphanumeric characters, underscores (`_`), and dots (`.`).*

For objectives, dot notation (`dot.notation`) may be used to represent groups or categories. However, use it sparingly to avoid clutter and maintain readability.

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

❌ `textures npc/dragon_hunter_archer`

## .lang File Comments

Comments intended for the localizer should always be in-line, in the following format:

`the.key=The string<\t>## Comment, intended for the one localizing.`

`<\t>` represents a tab-character.

Own-line comments can be used for organizational purposes but should not store localization-critical information.

## Acronyms when Discussing

| Acronym | Concept                            |
| ------- | ---------------------------------- |
| BP      | Behavior Pack                      |
| RP      | Resource Pack                      |
| FP      | Function Pack                      |
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



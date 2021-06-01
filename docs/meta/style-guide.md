---
layout: page
title: Style Guide
parent: Knowledge
---

# Style Guide



This document will present the officially supported Bedrock-Wiki style guide for addon-creation. This guide aims to promote best practices while creating addons and create a consistent format for everyone to follow.

The style guide is a living, breathing document, which will evolve as addon-creation evolves. Please get in touch if you think something needs to be updated or changed. 

## Folder Structure
 - No spaces in your file paths. `use_underscores`.
 - No `CAPITALS` in your identifiers, file names, or folder names, except at the top level.
 - The total character length of any path must not exceed 80 characters (console limitation).
 - Content folders should use consistent pluralization: Don't mix and match. 

## Identifiers
Do not use identifiers that begin with a number, and especially don't use an identifier that is *only* a number. This applies to entities, component_groups, events, and anything else that takes a `namespace:name` pair.

## File and Folder names

| Concept              | Example Identifier         |
|----------------------|----------------------------|
| Behavior Pack        | dragons_BP                 |
| Resource Pack        | dragons_RP                 |
| Geometry             | dragon.geo.json            |
| Animation            | dragon.animation.json      |
| Animation Controller | dragon.ac.json             |
| RP Entity            | dragon.entity.rp.json      |
| BP Entity            | dragon.entity.bp.json      |
| BP Item              | dragon_tooth.item.bp.json  |
| RP Item              | dragon_tooth.item.rp.json  |
| Render Controller    | dragon.render.json         |
| Loot Table           | dragon.loot.json           |
| Dragon Saddle        | dragon_saddle.recipe.json  |
| Spawn Rules          | dragon.spawn.json          |
| Trade Table          | dragon.trade.json          |
| Particles            | dragon_magic.particle.json |
| Texture              | dragon.png                 |

## Namespaces

A suitable namespace should be unique to you or your team. Something like `mob` or `cars` or `content` or `custom` would be a **bad** namespace since another developer might come up with the same namespace as you. 

`minecraft` and `minecon` are reserved. Don't use these.

For personal projects, use a convenient version of your player name, and for team projects, use a suitable version of your team name.

When multiple developers work on a project together, the namespace should always be shared. If credit is required, use sub-indexing: `minetite.sirlich:dragon`

Where to use name-spaces:
 - entities
 - particles
 - component-groups
 - events

When not to use namespaces:
 - do not include your namespace in any folder path or file-name


## Sub-indexing

Sub indexing is the use of `.` to separate chained concepts. Sub-indexing should go in descending order from big to small:

✔️ `animation.controller.dragon.flying.taking_off` 

❌ `animation.controller.dragon_take_off_flying`

When using sub-indexing, use `_` as space, not another `.`. 

✔️ `animation.controller.dragon.flying.taking_off`

❌ `animation.controller.dragon.flying.taking.off`

You can use sub-indexing in your entities:
`sirlich:dragon.drake`

## Groups and Events should complement each other

| Group        | Event               |
|--------------|---------------------|
| sirlich:wild | ✔️ sirlich:become_wild |
| sirlich:wild | ❌ sirlich:wild |
| sirlich:tame | ✔️ sirlich:on_tame |
| sirlich:tame | ❌ sirlich:tame |

## Short-Names should be Generic
Short-names are file-specific identifiers, which are used to map between an identifier and a pretty name. They are handy because they allow us to re-use animation controllers and render controllers. For this reason, your short-names should be generic.

✔️ `"sit": "animation.dragon.sit"`

❌ `"dragon_sitting": "animation.dragon.sit"`

When we make short-names of this form, we can use a generic "sit" animation controller for all of them since we can use the `sit` short-name to play the sit animation.

## Functions should be nested

✔️ `function teleport/zone/hell`

❌ `function teleport_hellzone`

## Group animations files when possible

Example:
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
|---------|------------------------------------|
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












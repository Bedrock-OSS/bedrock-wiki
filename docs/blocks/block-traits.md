---
title: Block Traits
description: Block traits can be used to apply vanilla block states (such as direction) to your custom blocks easily, without the need for events and triggers.
category: General
nav_order: 5
related:
    - /blocks/block-states
    - /blocks/block-permutations
license: true
mentions:
    - QuazChick
    - SmokeyStack
---

:::tip FORMAT VERSION 1.26.30
Before you learn about block traits, you should be confident with [block states](/blocks/block-states).

When working with block states, ensure that the `min_engine_version` in your pack manifest is 1.20.20 or higher.
:::

## Applying Traits

Block traits can be used to apply vanilla block states (such as direction) to your custom blocks easily, without the need for events and triggers.

<CodeHeader path="BP/blocks/custom_slab.json" />

```json
{
    "format_version": "1.26.30",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_slab",
            "menu_category": {
                "category": "construction",
                "group": "minecraft:itemGroup.name.slab"
            },
            "traits": {
                "minecraft:placement_position": {
                    "enabled_states": ["minecraft:vertical_half"]
                }
            }
        },
        "components": { ... },
        "permutations": [ ... ]
    }
}
```

_This example will set the `minecraft:vertical_half` block state when placed to either `"top"`{lang=json} or `"bottom"`{lang=json} - depending on where the player is looking._

**Entries in the [permutations array](/blocks/block-permutations#conditionally-applying-components) are still required for this state to make a functional difference, with conditions querying**

```molang
q.block_state('minecraft:vertical_half')
```

## List of Traits

### Connection

Allows for fence-like connection permutations by updating cardinal connection states based on adjacent blocks.

_Requires format version [1.26.0](/blocks/block-format-history#_1-26-0) or later._

-   `enabled_states` — Array
    -   May only contain `"minecraft:cardinal_connections"`{lang=json}, which enables _all_ of the following states.

<CodeHeader breadcrumbs="minecraft:block/description/traits" />

```json
"minecraft:connection": {
    "enabled_states": ["minecraft:cardinal_connections"]
}
```

#### Provided States {#connection-states}

<Table data="connection_states.json" />

### Multi-Block

Causes the block to be treated as a [multi-block](/blocks/multi-blocks) made up of multiple parts.

-   `enabled_states` — Array
    -   Must contain `"minecraft:multi_block_part"` which is described in the table below.
-   `direction` — String
    -   Determines the direction in which parts of the multi-block are placed.
    -   May be set to `"up"`{lang=json} or `"down"`{lang=json}.
-   `parts` — Integer (`2-4`{lang=js})
    -   Determines the number of blocks that make up the multi-block.
    -   This controls how many blocks are placed as well as the range of valid values for the `minecraft:multi_block_part` state.

<CodeHeader breadcrumbs="minecraft:block/description/traits" />

```json
"minecraft:multi_block": {
    "enabled_states": ["minecraft:multi_block_part"],
    "direction": "up",
    "parts": 2
}
```

#### Provided States {#multi-block-states}

<Table data="multi_block_states.json" />

### Placement Direction

Contains information about the player's rotation when the block was placed.

_Requires format version [1.26.0](/blocks/block-format-history#_1-26-0) or later._

-   `enabled_states` — Array
    -   May contain any of the states from the table below (excluding `minecraft:corner`), enabling only the states specified.
    -   Alternatively, may contain `"minecraft:corner_and_cardinal_direction"`{lang=json} which enables both `minecraft:corner` and `minecraft:cardinal_direction`.
-   `y_rotation_offset` — Integer (optional)
    -   This rotation offset only applies to the horizontal state values (north, south, east, west).
    -   Only axis-aligned angles may be specified (e.g. 90, 180).
-   `blocks_to_corner_with` — Array (optional)
    -   Lists the blocks (as an array of [block descriptors](/documentation/shared-constructs#block-descriptors)) that the block can create corners with.
    -   This parameter may only be specified when `"minecraft:corner_and_cardinal_direction"`{lang=json} is included in the `enabled_states` array.

<CodeHeader breadcrumbs="minecraft:block/description/traits" />

```json
"minecraft:placement_direction": {
    "enabled_states": ["minecraft:cardinal_direction"],
    "y_rotation_offset": 180
}
```

#### Provided States {#placement-direction-states}

<Table data="placement_direction_states.json" />

### Placement Position

Contains information about where the player placed the block.

_Requires format version [1.20.20](/blocks/block-format-history#_1-20-20) or later._

-   `enabled_states` — Array
    -   May contain any of the states from the table below, enabling only the states specified.

<CodeHeader breadcrumbs="minecraft:block/description/traits" />

```json
"minecraft:placement_position": {
    "enabled_states": [
        "minecraft:block_face",
        "minecraft:vertical_half"
    ]
}
```

#### Provided States {#placement-position-states}

<Table data="placement_position_states.json" />

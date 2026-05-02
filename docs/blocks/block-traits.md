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

:::tip FORMAT VERSION 1.26.10
Before you learn about block traits, you should be confident with [block states](/blocks/block-states).

When working with block states, ensure that the `min_engine_version` in your pack manifest is 1.20.20 or higher.
:::

## Applying Traits

Block traits can be used to apply vanilla block states (such as direction) to your custom blocks easily, without the need for events and triggers.

<CodeHeader>BP/blocks/custom_slab.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
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

#### Provided States {#connection-states}

| State                        | Values                                              | Description                                                        |
| ---------------------------- | --------------------------------------------------- | ------------------------------------------------------------------ |
| `minecraft:connection_north` | `false`{lang=json} _(default)_<br>`true`{lang=json} | Whether the block is connected to the adjacent block to the north. |
| `minecraft:connection_south` | `false`{lang=json} _(default)_<br>`true`{lang=json} | Whether the block is connected to the adjacent block to the south. |
| `minecraft:connection_west`  | `false`{lang=json} _(default)_<br>`true`{lang=json} | Whether the block is connected to the adjacent block to the west.  |
| `minecraft:connection_east`  | `false`{lang=json} _(default)_<br>`true`{lang=json} | Whether the block is connected to the adjacent block to the east.  |

<CodeHeader>minecraft:block > description > traits</CodeHeader>

```json
"minecraft:connection": {
    "enabled_states": ["minecraft:cardinal_connections"]
}
```

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

#### Provided States {#placement-direction-states}

| State                          | Values                                                                                                                                                | Description                                         |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `minecraft:cardinal_direction` | `"south"`{lang=json} _(default)_<br>`"north"`{lang=json}<br>`"west"`{lang=json}<br>`"east"`{lang=json}                                                | Cardinal facing direction of player when placed.    |
| `minecraft:facing_direction`   | `"down"`{lang=json} _(default)_<br>`"up"`{lang=json}<br>`"south"`{lang=json}<br>`"north"`{lang=json}<br>`"west"`{lang=json}<br>`"east"`{lang=json}    | Overall direction of player when placed.            |
| `minecraft:corner`             | `"none"`{lang=json} _(default)_<br>`"inner_left"`{lang=json}<br>`"inner_right"`{lang=json}<br>`"outer_left"`{lang=json}<br>`"outer_right"`{lang=json} | The shape of the corner that the block has created. |

<CodeHeader>minecraft:block > description > traits</CodeHeader>

```json
"minecraft:placement_direction": {
    "enabled_states": ["minecraft:cardinal_direction"],
    "y_rotation_offset": 180
}
```

### Placement Position

Contains information about where the player placed the block.

_Requires format version [1.20.20](/blocks/block-format-history#_1-20-20) or later._

-   `enabled_states` — Array
    -   May contain any of the states from the table below, enabling only the states specified.

#### Provided States {#placement-position-states}

| State                     | Values                                                                                                                                             | Description                                   |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `minecraft:block_face`    | `"down"`{lang=json} _(default)_<br>`"up"`{lang=json}<br>`"south"`{lang=json}<br>`"north"`{lang=json}<br>`"west"`{lang=json}<br>`"east"`{lang=json} | Face on which the block was placed.           |
| `minecraft:vertical_half` | `"top"`{lang=json}<br>`"bottom"`{lang=json} _(default)_                                                                                            | The vertical half where the block was placed. |

<CodeHeader>minecraft:block > description > traits</CodeHeader>

```json
"minecraft:placement_position": {
    "enabled_states": [
        "minecraft:block_face",
        "minecraft:vertical_half"
    ]
}
```

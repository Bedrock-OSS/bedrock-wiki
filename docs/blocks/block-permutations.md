---
title: Block Permutations
description: Block permutations represent all state configurations that blocks can possibly be in.
category: General
nav_order: 7
license: true
mentions:
    - QuazChick
    - SmokeyStack
---

:::tip FORMAT & MIN ENGINE VERSION `1.21.110`
Before you learn about block permutations, you should be confident with [block states](/blocks/block-states).

When working with block states, ensure that the `min_engine_version` in your pack manifest is `1.20.20` or higher.
:::
:::danger OVERRIDING COMPONENTS
Only **one** instance of each component can be active at once.
Duplicate components will be overridden by the latest "[permutations](#conditionally-applying-components)" array entry.
:::

## What Are Permutations?

Block permutations represent all state value configurations that each block can possibly be in.

For example, if you added a custom block with two boolean states…

<CodeHeader>minecraft:block</CodeHeader>

```json
"description": {
    "identifier": "wiki:permutations_example",
    "states": {
        "wiki:first_state": [false, true],
        "wiki:second_state": [false, true]
    }
}
```

…the 4 following block permutations would be added to the world:

| Block Identifier          | wiki:first_state | wiki:second_state |
| ------------------------- | ---------------- | ----------------- |
| wiki:permutations_example | false            | false             |
| wiki:permutations_example | true             | false             |
| wiki:permutations_example | false            | true              |
| wiki:permutations_example | true             | true              |

To calculate how many permutations your block has, multiply the amount of valid state values each state has together.
For instance, the calculation for the example above would be 2 &times; 2, meaning this block has 4 permutations.

### Misconceptions

-   All blocks have permutations, even blocks with no states have 1 permutation that is simply made up of the block identifier.
-   The number of permutations your block has is based on the states it has, not the number of items in the `permutations` array.

## Conditionally Applying Components

The block `permutations` array provides a way of conditionally applying components (including tags) to a block based on its current permutation.

Components within the `permutations` array can override the block's base components, as well as those of other component lists. The latest component list in the `permutations` array takes priority.

_Requires format version [1.19.70](/blocks/block-format-history#_1-19-70) or later._

<CodeHeader>BP/blocks/custom_block.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_block",
            "states": {
                "wiki:integer_state_example": [2, 4, 6, 8],
                "wiki:boolean_state_example": [false, true],
                "wiki:string_state_example": ["red", "green", "blue"]
            }
        },
        "components": {},
        "permutations": [
            {
                "condition": "q.block_state('wiki:integer_state_example') == 2",
                "components": {
                    "minecraft:friction": 0.1
                }
            },
            {
                "condition": "q.block_state('wiki:boolean_state_example')",
                "components": {
                    "minecraft:friction": 0.8 // Overrides the friction defined in the previous component list.
                }
            },
            {
                "condition": "q.block_state('wiki:string_state_example') == 'red' && !q.block_state('wiki:boolean_state_example')",
                "components": {
                    "minecraft:geometry": "geometry.pig"
                }
            }
        ]
    }
}
```

### Permutation Conditions

When evaluated as truthy (not false or 0), the involved component list is applied.

Permutation conditions are written as Molang expression strings, and have very limited context:

-   Conditions are purely based on the block's permutation, therefore only have access to the `q.block_state` query function.
-   This also means that conditions cannot have side effects.
    -   The following math functions may not be used: `math.die_roll`, `math.die_roll_integer`, `math.random`, `math.random_integer`.
    -   Variables (including `temp` variables) cannot be assigned.

```molang
q.block_state('wiki:integer_state_example') < 6 || !q.block_state('wiki:boolean_state_example')
```

## Permutation Limits

As with all things blocks, some limitations have been put in place by Mojang to prevent undesirable behavior.

### Maximum Amount Per Block

A block _cannot_ have more than 65,536 permutations (equivalent to 4 states with 16 values each).
This is because a block permutation must be representable by 16 bits.

Exceeding this limit will result in some states being absent from your block so that its permutation count is within the limit, along with a content log error.

### Maximum Amount Per World

A world _shouldn't_ have more than a total of 65,536 **custom** block permutations registered (not necessarily placed).

Exceeding this limit should not affect block functionality, however will result in the following content log warning:

> [Blocks][warning]-World with over 65536 block permutations may degrade performance. Current world has XXXXX permutations.

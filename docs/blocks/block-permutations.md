---
title: Block Permutations
description: The block permutations array provides a way of conditionally applying components to a block based on its current permutation.
category: General
nav_order: 7
mentions:
    - QuazChick
---

:::tip FORMAT & MIN ENGINE VERSION `1.20.30`
Before you learn about block permutations, you should be confident with [block states](/blocks/block-states).

When working with block states, ensure that the `min_engine_version` in your pack manifest is `1.20.20` or higher.
:::

The block `permutations` array provides a way of conditionally applying components (including event triggers and tags) to a block based on its current permutation (collection of state values).

Components within the `permutations` array can override the block's base components, as well as those of other component lists. The latest item in the `permutations` array takes priority.

## Defining Permutations

The `permutations` array is a direct child of `minecraft:block` and is made up of objects containing components which get applied if the evaluated condition is truthy (not false or 0).

**Permutation conditions must adhere to their [Molang limitations](#permutation-conditions).**

_Released from experiment `Holiday Creator Features` for format versions 1.19.70 and higher._

<CodeHeader>BP/blocks/custom_block.json</CodeHeader>

```json
{
  "format_version": "1.20.30",
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
          "minecraft:friction": 0.8 // Overrides previous permutation
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

## Permutation Conditions

When evaluated as truthy (not false or 0), the involved component list is applied.

Permutation conditions are written as Molang expression strings, and have very limited context:

-   Conditions are purely based on the block's permutation, therefore only have access to the `q.block_state` query function.
-   This also means that conditions cannot have side effects.
    -   The following math functions may not be used: `math.die_roll`, `math.die_roll_integer`, `math.random`, `math.random_integer`.
    -   Variables cannot be assigned.

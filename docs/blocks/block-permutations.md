---
title: Block Permutations
description: Block permutations are a way of conditionally applying components (including event triggers and tags) to a block with Molang expressions.
category: General
nav_order: 7
mentions:
    - QuazChick
---

:::tip MIN ENGINE VERSION `[1, 20, 20]`
Before you learn about block permutations, you should be confident with [block states](/blocks/block-states).

When working with block states, ensure that the `min_engine_version` in your pack manifest is `[1, 20, 20]` or higher.
:::

Block permutations are a way of conditionally applying components (including event triggers and tags) to a block with Molang expressions.

Permutations can override the block's base components, as well as those of other permutations. The latest permutation in the `permutations` array takes priority.

## Defining Permutations

The `permutations` array is a direct child of `minecraft:block` and is made up of objects containing components which get applied if the evaluated condition is truthy (not false or 0).

**Permutation conditions must adhere to their [Molang limitations](#permutation-conditions).**

_Released from experiment `Holiday Creator Features` for format versions 1.19.70 and higher._

<CodeHeader></CodeHeader>

```json
{
  "format_version": "1.20.10",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_block",
      "properties": {
        "wiki:custom_integer_state": [2, 4, 6, 8],
        "wiki:custom_boolean_state": [false, true],
        "wiki:custom_string_state": ["red", "green", "blue"]
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

When evaluated as truthy (not false or 0), the involved permutation's components are applied.

Permutation conditions are written as Molang expression strings, and have very limited context:

-   Conditions may only use the query function `q.block_state`.
-   Conditions cannot have side effects.
    -   The following math functions may not be used: `math.die_roll`, `math.die_roll_integer`, `math.random`, `math.random_integer`.
    -   Variables cannot be assigned.

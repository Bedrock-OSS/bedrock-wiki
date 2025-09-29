---
title: Block States
description: Block states allow your blocks to have variants, each with its own functionality and appearance through use of permutations.
category: General
nav_order: 4
license: true
mentions:
    - QuazChick
    - SmokeyStack
---

:::tip FORMAT & MIN ENGINE VERSION `1.21.110`
When working with block states, ensure that the `min_engine_version` in your pack manifest is `1.20.20` or higher.
:::

Block states allow your blocks to have variants, each with its own functionality and appearance through use of [permutations](/blocks/block-permutations).

## Defining States

Valid state values can be defined as a boolean, integer or string array - or as an integer range by using an object. The first item in the values array is used as the default.

Each state may have up to 16 valid values defined. For integer range states, this means that the `max` value cannot be more than 15 higher than the `min` value.

_Requires format version [1.19.70](/blocks/block-format-history#_1-19-70) or later._

<CodeHeader>BP/blocks/custom_block.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_block",
            "states": {
                "wiki:string_state_example": ["red", "green", "blue"],
                "wiki:boolean_state_example": [false, true],
                "wiki:integer_state_example": [1, 2, 3],
                "wiki:integer_range_state_example": {
                    "values": { "min": 0, "max": 5 } // The same as [0, 1, 2, 3, 4, 5]
                }
            }
        },
        "components": { ... },
        "permutations": [ ... ]
    }
}
```

## Getting State Values

Listed below are ways to get the current value of block states in different contexts.

### Molang Query Function

State values are returned by the `block_state` query function.

<CodeHeader>Molang Expression</CodeHeader>

```molang
q.block_state('wiki:string_state_example') == 'blue'
```

### Command Argument

The [block states argument](/commands/block-states) is included in commands such as `execute` and `testforblock`, and can be used to check the value of block states.

<CodeHeader>Command</CodeHeader>

```c
execute if block ~~~ wiki:custom_block["wiki:string_state_example"="blue", "wiki:integer_state_example"=4] run kill
```

### Script API

The [`BlockPermutation.getState()`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/blockpermutation#getstate) method allows you to get the current value of different states.

<CodeHeader>Script</CodeHeader>

```js
customBlock.permutation.getState("wiki:integer_state_example") === 3;
```

## Setting State Values

### Command Argument

The [block states argument](/commands/block-states) is included in commands such as `setblock` and `fill`, and can be used to change states away from their default values.

<CodeHeader>Command</CodeHeader>

```c
setblock ~~~ wiki:custom_block["wiki:string_state_example"="blue", "wiki:integer_state_example"=4]
```

### Script API

The [`BlockPermutation.withState()`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/blockpermutation#withstate) method returns a new block permutation with the specified state value changed. This permutation can be applied to the block using the [`Block.setPermutation()`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/block#setpermutation) method, as seen below.

<CodeHeader>Script</CodeHeader>

```js
customBlock.setPermutation(customBlock.permutation.withState("wiki:boolean_state_example", false));
```

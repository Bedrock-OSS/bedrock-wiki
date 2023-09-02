---
title: Block States
description: Block states allow your blocks to have variants, each with its own functionality and appearance through use of permutations.
category: General
nav_order: 4
mentions:
    - QuazChick
---

:::tip FORMAT & MIN ENGINE VERSION `1.20.30`
When working with block states, ensure that the `min_engine_version` in your pack manifest is `1.20.20` or higher.
:::

Block states allow your blocks to have variants, each with its own functionality and appearance through use of [permutations](/blocks/block-permutations).

## Defining States

Valid state values can be defined as a boolean, integer or string array - or as an integer range. The first item in the values array is used as the default.

**Each state may have up to 16 values. Block states cannot have more than 64 values combined.**

_Released from experiment `Holiday Creator Features` for format versions 1.19.70 and higher._

<CodeHeader>BP/blocks/custom_block.json</CodeHeader>

```json
{
  "format_version": "1.20.30",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_block",
      "states": {
        "wiki:string_state_example": ["red", "green", "blue"],
        "wiki:boolean_state_example": [false, true],
        "wiki:integer_state_example": [1, 2, 3],
        "wiki:integer_range_state_example": {
          "values": { "min": 0, "max": 5 } // Same as [0, 1, 2, 3, 4, 5]
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

### Molang Query

State values are returned by `q.block_state`.

```c
q.block_state('wiki:string_state_example') == 'blue'
```

### Command Argument

The block states argument is included in commands such as `execute` and `testforblock`, and can be used to check the value of block states.

```c
execute if block ~~~ wiki:custom_block["wiki:string_state_example"="blue", "wiki:integer_state_example"=4] run kill
```

### Script API

The `BlockPermutation` scripting class has methods which allow you to get the current value of different states.

```js
customBlock.permutation.getState("wiki:integer_state_example") === 3
```

## Setting State Values

### Command Argument

The block states argument is included in commands such as `setblock` and `fill`, and can be used to change states away from their default values.

```c
setblock ~~~ wiki:custom_block["wiki:string_state_example"="blue", "wiki:integer_state_example"=4]
```

### Event Response

:::warning EXPERIMENTAL
Block events require the `Holiday Creator Features` experiment to be enabled.
:::

The `set_block_state` event response can change the values of custom block states.

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:change_state": {
  "set_block_state": {
    "wiki:boolean_state_example": false,
    "wiki:string_state_example": "'red'"
  }
}
```

### Script API

The `BlockPermutation` scripting class has methods which allow you to change the values of states.

```js
customBlock.setPermutation(
  customBlock.permutation.withState("wiki:boolean_state_example", false)
);
```

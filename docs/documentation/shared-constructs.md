---
title: Shared Constructs
description: JSON constructs are expressible in multiple locations in the add-ons system.
mentions:
    - Ciosciaa
    - ThomasOrs
    - QuazChick
---

JSON constructs are expressible in multiple locations in the add-ons system.

## Block Descriptors

Block descriptors can be used to check for blocks that match the specified parameters.
For example, block descriptors are used in the block [placement filter](/blocks/block-components#placement-filter) to determine which types of blocks a custom block can survive on.

### Block Type Descriptor

<CodeHeader>Block Descriptor</CodeHeader>

```json
{
    "name": "wiki:custom_block"
}
```

### Block Permutation Descriptor

<CodeHeader>Block Descriptor</CodeHeader>

```json
{
    "name": "wiki:custom_block",
    "states": {
        "wiki:custom_state": 5
    }
}
```

### Block Tags Descriptor

Only has access to the `q.all_tags()`{lang=molang} and `q.any_tag()`{lang=molang} query functions.

<CodeHeader>Block Tags Descriptor</CodeHeader>

```json
{
    "tags": "q.any_tag('minecraft:is_axe_item_destructible', 'wiki:custom_tag')"
}
```

## Item Descriptors

Item descriptors can be used to check for items that match the specified parameters.
For example, item descriptors are used in the item [repairable](/items/item-components#repairable) component to determine which types of item can be used to repair the item.

### Item Type Descriptor

<CodeHeader>Item Descriptor</CodeHeader>

```json
{
    "name": "wiki:custom_item"
}
```

### Item Tags Descriptor

Only has access to the `q.all_tags()`{lang=molang} and `q.any_tag()`{lang=molang} query functions.

<CodeHeader>Item Tags Descriptor</CodeHeader>

```json
{
    "tags": "q.any_tag('minecraft:is_axe', 'wiki:custom_tag')"
}
```

## Range Objects

Range objects define a spread between two numbers.

<CodeHeader>Range Object Example</CodeHeader>

```json
{
    "min": 2,
    "max": 4
}
```

When provided, a random value will be selected inclusively between the minimum and maximum. Rolls are not retained; a new random value will be rolled each instance the range object would be used. The maximum must not be less than the minimum, but they may be equal to affix rolls to a specific value.

## Fraction Objects

Fraction objects define a fraction using a numerator and denominator.

<CodeHeader>Fraction Object Example</CodeHeader>

```json
{
    "numerator": 3,
    "denominator": 5
}
```

The value used in place of the object will be the computed division, `numerator` ÷ `denominator`. Both the numerator and denominator must be at least `1`, and the denominator cannot be equal to the numerator.

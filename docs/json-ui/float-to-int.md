---
title: Float to Int
category: Tutorials
tags:
    - intermediate
mentions:
    - pankis4173
description: In this tutorial, you will learn how to convert a numerical string into a number and a number into a text string.
---

:::warning
This tutorial assumes an intermediate understanding of JSON UI and knowledge of what bindings are and how they work.
:::

In this tutorial, you will learn how to convert a float value into a integer value and viceversa.

## Overview

There are some situations where we want to display a vanilla value on screen, such as the durability of an item, the percentage progress of the loading screen, etc. However, the JSON UI engine doesn't allow us to convert float values ​​to strings and display them directly, as we can with an int type where we simply use `('§r' + #value)`.

Similarly, there are situations where we want to work with floats (for example, when using `#size_binding` or `#anchored_offset_value`), but dividing two integers doesn't produce a float, but rather another integer.

To perform these conversions, we'll use variables and some tricks with data bindings.

## Int to Float

To convert an int to a float, we simply multiply that value by a variable `$one` with a value of `1.0`.

```json
"int_to_float": {
    "type": "image",
    // ... other properties
    "$one": 1.0, // We can use 1.0 if we only want to convert to float
    "$onehundred": 100.0, // or another fixed value by which we want to multiply/divide it
    "bindings": [
        {
            "binding_type": "view",
            "source_property_name": "(#example_binding * $one / 100)", // convert to float, then divide by 100
            "target_property_name": "#anchored_offset_value_x"
        },
        {
            "binding_type": "view",
            "source_property_name": "(#example_binding / $onehundred)", // same as above, but directly dividing by a float 100
            "target_property_name": "#anchored_offset_value_y"
        }
    ]
}
```

This is especially useful when working with bindings that require the use of floats to work properly, such as `#clip_ratio`, `#alpha`, etc.

## Float to Int

There are 2 ways to convert a float to an int.

### Using Binding Loops

The shortest method, easy to understand, but limited to 'integer floats' (1.0, 2.0, 3.0, etc.)

```json
"float_to_int_loop": {
    "type": "label",
    "text": "#output",
    "bindings": [
        {
            "binding_name": "#item_durability_total_amount",
            "binding_name_override": "#target",
            "binding_type": "collection",
            "binding_collection_name": "hotbar_items"
        },
        {
            "binding_type": "view",
            "source_property_name": "(#current + (#current < #target) * 1 - (#current > #target) * 1)",
            "target_property_name": "#current"
        },
        {
            "binding_type": "view",
            "source_property_name": "('§r' + #current)",
            "target_property_name": "#output"
        }
    ]
}
```

:::tip NOTE
The `* 1` is not necessary in any case; the value is automatically converted to a number.
:::

This method works by making the variable `#current` approach `#target` using a loop, which, if the value #current is lower than #target, will add 1 until they are equal, while if #target goes down and now #current is less than #target, it will subtract 1 until they are equal.

- `#current` Initial value not set, which will act as 0.
- `+ (#current < #target) * 1` Add 1 to #current if it is less than #target.
- `- (#current > #target) * 1` Subtract 1 from #current if it is greater than #target.
- `"target_property_name": "#current"` Set the new value to #current, then repeat the calculation until both conditions are false (i.e., until `#current` equals `#target`)
- `('§r' + #current)` Finally, display our #current value on the screen by adding `'§r'` at the beginning to convert it to a string.

:::warning
This method only works correctly for non-fractional float values, such as `#item_durability_current_amount` and `#item_durability_total_amount` in HUD screen.
:::

An alternative form of this method is the following, a little more complex to understand, but without the limitation of the previous way.

```json
"float_to_int_loop": {
    "type": "label",
    "text": "#output",
    "localize": false,
    "bindings": [
        {
            "binding_name": "#loading_bar_percentage" // Value 1 to 0, since it is originally a value for #clip_ratio
        },
        {
            "binding_type": "view",
            "source_property_name": "(10000 - #loading_bar_percentage * 10000)", // Invert the value and multiply it by 10000. Essentially the same as ((1 - #loading_bar_percentage) * 10000) 
            "target_property_name": "#target"
        },
        {
            "binding_type": "view",
            "source_property_name": "(#current + (not (#target - #current < 1)) * 1 - (#target - #current < 0) * 1)",
            "target_property_name": "#current"
        }
    ]
}
```

This method basically gets the floor of our float.

- `#current` Initial value not set, which will act as 0.
- `+ (not (#target - #current < 1)) * 1` Add 1 if the difference between #target and #current is greater than or equal to 1 (i.e., if the integer part of the percentage has changed to a larger value).
- `- (#current > #target) * 1` Subtract 1 if the difference between #target and #current is negative (i.e., if the integer part of the percentage has changed to a smaller value)
- `"target_property_name": "#current"` Set the new value to `#current` and repeat the calculation until both conditions are false (i.e., until the integer part of `#target` is equal to `#current`).

And this is how to convert your value from `0 to 10000` to `0.00% to 100.00%`.

```json
{
    "binding_type": "view",
    "source_property_name": "('§r' + #current / 100 + '.' + (#current - #current / 100 * 100) / 10 + (#current - #current / 10 * 10) + '%')",
    "target_property_name": "#output"
}
```
- `'§r'` String formatter that does not affect the text and prevents it from being converted to a number.
- `#current / 100` Discard the last two digits (`8567 -> 85`).
- `(#current - #current / 100 * 100) / 10` Keep the last two digits, then discard the last one (`8567 -> 6`).
- `(#current - #current / 10 * 10)` Keep only the last digit (`8567 -> 7`).

<!--
JSON UI is horrendously complicated to explain, bruh 🥀
-->

### Getting digit by digit

There is another method which involves using several comparisons to obtain each digit individually.

```json
"progress_percentage": {
    "type": "label",
    "color": "$progress_bar_color",
    "shadow": true,
    "text": "#output",
    "font_type": "smooth",
    "localize": false,
    "offset": [0, 24],
    "bindings": [
        {
            "binding_name": "#loading_bar_percentage" // Value 1 to 0, since it is originally a value for #clip_ratio
        },
        {
            "binding_type": "view",
            "source_property_name": "(10 - #loading_bar_percentage * 10)",
            "target_property_name": "#a"
        },
        {
            "binding_type": "view",
            "source_property_name": "(10 - (#a < 1) - (#a < 2) - (#a < 3) - (#a < 4) - (#a < 5) - (#a < 6) - (#a < 7) - (#a < 8) - (#a < 9) - (#a < 10))",
            // It is only compared 10 times here, since this digit can range from 0 to 10.
            "target_property_name": "#1"
        },
        {
            "binding_type": "view",
            "source_property_name": "(#a * 10 - #1 * 10)",
            "target_property_name": "#b"
        },
        {
            "binding_type": "view",
            "source_property_name": "(9 - (#b < 1) - (#b < 2) - (#b < 3) - (#b < 4) - (#b < 5) - (#b < 6) - (#b < 7) - (#b < 8) - (#b < 9))",
            "target_property_name": "#2"
        },
        {
            "binding_type": "view",
            "source_property_name": "(#b * 10 - #2 * 10)",
            "target_property_name": "#c"
        },
        {
            "binding_type": "view",
            "source_property_name": "(9 - (#c < 1) - (#c < 2) - (#c < 3) - (#c < 4) - (#c < 5) - (#c < 6) - (#c < 7) - (#c < 8) - (#c < 9))",
            "target_property_name": "#3"
        },
        {
            // a
            "binding_type": "view",
            "source_property_name": "(#c * 10 - #3 * 10)",
            "target_property_name": "#d"
        },
        {
            // b
            "binding_type": "view",
            "source_property_name": "(9 - (#d < 1) - (#d < 2) - (#d < 3) - (#d < 4) - (#d < 5) - (#d < 6) - (#d < 7) - (#d < 8) - (#d < 9))",
            "target_property_name": "#4"
        },
        {
            "binding_type": "view",
            "source_property_name": "('§r' + (#1 * 10 + #2) + '.' + #3 + #4 + '%')",
            "target_property_name": "#output"
        }
    ]
}
```

This method also gets the floor of our float.

- `(10 - #loading_bar_percentage * 10)` Invert the value and multiply it by 10 (`0.84651 -> 8.4651`).
- `(10 - (#a < 1) - (#a < 2) - ...)` Compare to all possible digits to obtain the integer part (the first digit, `8`).
- `(#a * 10 - #1 * 10)` Multiply the original value by 10, then subtract the resulting digit by 10 to get something similar to the above (`84.651 - 80 = 4.651`).
- `(9 - (#b < 1) - (#b < 2) - ...)` Repeat. In this case, the comparison is only made 9 times, since that digit can only range from 0 to 9.
- `('§r' + (#1 * 10 + #2) + '.' + #3 + #4 + '%')` Finally, concatenate each digit.

If you want more decimals, just repeat bindings `a` and `b`, remembering to change the names, of course.

<!--
JSON UI is horrendously complicated to explain, bruh 🥀
-->
<!--
JSON UI is horrendously complicated to explain, bruh 🥀
-->
<!--
JSON UI is horrendously complicated to explain, bruh 🥀
-->

---
title: Molang
description: Learn about the basics of Molang.
tags:
    - intermediate
mentions:
    - Cra-ZGuy
    - yanasakana
    - TheDoctor15
    - MedicalJewel105
    - DoubleShotgun
    - Lufurrius
    - TheItsNameless
    - QuazChick
---

## What Is Molang?

**Molang** is a math-based expression language used throughout Minecraft Bedrock Edition. It is used in animations, particles, render controllers, and behavior logic.

## Expressions

Molang expressions are like little math problems the game solves constantly.

```molang
q.health < 5 ? 1 : 0
```

This returns `1.0`{lang=molang} if health is less than 5, otherwise `0.0`{lang=molang}.

## Accessing Game Data

### 1. Queries (`query.`{lang=molang} or `q.`{lang=molang})

**Read-only values provided by the game.**

Queries can either return a value directly, or accept arguments to return context-specific results.

Examples without arguments:

- `query.is_sneaking`{lang=molang}
- `query.time_of_day`{lang=molang}
- `query.health`{lang=molang}

Examples with arguments:

- `query.position(0)`{lang=molang}
- `query.is_item_name_any('slot.weapon.offhand', 'minecraft:dirt')`{lang=molang}
- `query.in_range(5, 0, 10)`{lang=molang}

### 2. Variables (`variable.`{lang=molang} or `v.`{lang=molang})

**Read-write values stored per-entity.**

Examples:

- `variable.buff_timer`{lang=molang}
- `variable.has_effect`{lang=molang}

```molang
v.buff_timer = (v.buff_timer ?? 0) + q.delta_time;
```

#### Default Variables

| Variable                                           | Description                                                   |
| -------------------------------------------------- | ------------------------------------------------------------- |
| `variable.animation_frames_128x128`{lang=molang}   | Controls animation frame index for 128x128 textures (persona) |
| `variable.animation_frames_32x32`{lang=molang}     | Controls animation frame index for 32x32 textures             |
| `variable.animation_frames_face`{lang=molang}      | Controls face animation frames (used in facial expressions)   |
| `variable.attack_time`{lang=molang}                | Progress of an attack animation (0.0 to 0.7)                  |
| `variable.bob_animation`{lang=molang}              | Oscillation used for idle/movement bobbing                    |
| `variable.charge_amount`{lang=molang}              | Amount of charge built up (used in attachables)               |
| `variable.damage_nearby_mobs`{lang=molang}         | `true`{lang=molang} if nearby mobs are being damaged          |
| `variable.gliding_speed_value`{lang=molang}        | Speed value while gliding                                     |
| `variable.has_target`{lang=molang}                 | Whether the entity currently has a target                     |
| `variable.is_brandishing_spear`{lang=molang}       | Whether the entity is holding up a trident                    |
| `variable.is_holding_left`{lang=molang}            | Whether the left hand is holding something                    |
| `variable.is_holding_right`{lang=molang}           | Whether the right hand is holding something                   |
| `variable.is_holding_spyglass`{lang=molang}        | Whether the player is holding a spyglass                      |
| `variable.is_horizontal_splitscreen`{lang=molang}  | `true`{lang=molang} if horizontal splitscreen is active       |
| `variable.is_paperdoll`{lang=molang}               | Whether the paperdoll is currently visible                    |
| `variable.is_sneaking`{lang=molang}                | Whether the player is sneaking                                |
| `variable.is_tooting_goat_horn`{lang=molang}       | Whether the player is tooting a goat horn                     |
| `variable.is_using_brush`{lang=molang}             | Whether the player is using a brush                           |
| `variable.is_using_vr`{lang=molang}                | Whether the player is using a VR headset                      |
| `variable.is_vertical_splitscreen`{lang=molang}    | `true`{lang=molang} if vertical splitscreen is active         |
| `variable.last_blink_time`{lang=molang}            | Time since last blink event (persona)                         |
| `variable.left_arm_swim_amount`{lang=molang}       | Amount of swimming animation applied to left arm              |
| `variable.map_face_icon`{lang=molang}              | `true`{lang=molang} if there is a map face icon display       |
| `variable.player_arm_height`{lang=molang}          | Height offset of arms (usually adjusted in first-person view) |
| `variable.player_x_rotation`{lang=molang}          | X-axis rotation of the player’s view                          |
| `variable.right_arm_swim_amount`{lang=molang}      | Amount of swimming animation applied to right arm             |
| `variable.short_arm_offset_left`{lang=molang}      | Adjusts arm length for left arm (used in VR/paperdoll)        |
| `variable.short_arm_offset_right`{lang=molang}     | Adjusts arm length for right arm                              |
| `variable.swim_amount`{lang=molang}                | General swimming animation progress                           |
| `variable.use_blinking_animation`{lang=molang}     | Enables/disables blinking animation logic                     |
| `variable.use_item_interval_progress`{lang=molang} | Tracks middle portion of item use timeline                    |
| `variable.use_item_startup_progress`{lang=molang}  | Tracks startup phase of item use animation                    |
| `variable.is_first_person`{lang=molang}            | Whether the player is in first-person                         |

### 3. Temporary Variables (`temp.`{lang=molang} or `t.`{lang=molang})

**Read-write values stored per-pack.**

```molang
t.temp_speed = q.ground_speed * 1.2;
```

Temporary variables are **pack-scoped** and **ephemeral**. They only exist for the duration of the current Molang expression or loop. They are **shared globally** across a pack and are **cleared automatically** after each expression completes. They do not support structs (no `.x`, `.y`, `.z`).

:::tip
They are also incredibly useful for **passing intermediate results between expressions**, especially in contexts that **do not support passing in variables or queries directly**, such as particles.
:::

### 4. Context Variables (`context.`{lang=molang} or `c.`{lang=molang})

**Read-only values from the base game in specific situations.**

#### Common Context Variables

| Context Variable                                 | Contexts                                 | Description                                                   |
| ------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------- |
| `context.count`{lang=molang}                     | Recipes                                  | Count of something in the current context                     |
| `context.is_first_person`{lang=molang}           | Animations, Entities, Render Controllers | `true`{lang=molang} if the entity is rendered in first person |
| `context.item_slot`{lang=molang}                 | Models                                   | Slot index of the current item                                |
| `context.other`{lang=molang}                     | Items                                    | The "other" item (for repair targets)                         |
| `context.owning_entity`{lang=molang}             | Attachables                              | Entity that owns this context (used for getting queries)      |
| `context.player_offhand_arm_height`{lang=molang} | Models                                   | Arm offset used when rendering offhand                        |

Example:

```molang
context.other->query.remaining_durability
```

## Logic and Conditions

### Comparison Operators

| Operator                             | Description                |
| ------------------------------------ | -------------------------- |
| `==`{lang=molang}                    | Equal                      |
| `!=`{lang=molang}                    | Not equal                  |
| `<`{lang=molang}, `>`{lang=molang}   | Less/greater than          |
| `<=`{lang=molang}, `>=`{lang=molang} | Less/greater than or equal |

```molang
q.health <= 10
```

### Boolean Logic

| Operator            | Meaning |
| ------------------- | ------- |
| `&&`{lang=molang}   | AND     |
| `\|\|`{lang=molang} | OR      |

```molang
q.is_sneaking && q.is_using_item
```

### Conditional Operators

Use `?`{lang=molang} and `:`{lang=molang} like if-else:

- Binary: `condition ? result`{lang=molang}
- Ternary: `condition ? true : false`{lang=molang}

```molang
q.is_jumping ? 3 : 0
```

You can also use the **null coalescing operator** (`??`{lang=molang}) to provide a fallback when a variable might not be initialized:

- `fallback = value ?? default`{lang=molang}

```molang
v.timer = (v.timer ?? 0) + q.delta_time
```

This avoids content log errors if `v.timer`{lang=molang} has not been defined yet.

## Math Functions

Molang supports a wide range of math functions, using **degrees** (not radians) for trigonometry. These are useful for animation timing, oscillation, directional math, clamping, and more.

| Function                                           | Description                                               |
| -------------------------------------------------- | --------------------------------------------------------- |
| `math.abs(x)`{lang=molang}                         | Absolute value of `x`                                     |
| `math.acos(x)`{lang=molang}                        | Arccosine (inverse cosine) of `x`                         |
| `math.asin(x)`{lang=molang}                        | Arcsine (inverse sine) of `x`                             |
| `math.atan(x)`{lang=molang}                        | Arctangent (inverse tangent) of `x`                       |
| `math.atan2(y, x)`{lang=molang}                    | Arctangent of `y / x` — returns angle in degrees          |
| `math.ceil(x)`{lang=molang}                        | Round `x` up to the nearest integer                       |
| `math.clamp(x, min, max)`{lang=molang}             | Constrain `x` between `min` and `max`                     |
| `math.cos(x)`{lang=molang}                         | Cosine of `x` degrees                                     |
| `math.die_roll(n, low, high)`{lang=molang}         | Roll `n` floats between `low` and `high` and sum them     |
| `math.die_roll_integer(n, low, high)`{lang=molang} | Same as above but rolls integers                          |
| `math.exp(x)`{lang=molang}                         | Exponential (e^x)                                         |
| `math.floor(x)`{lang=molang}                       | Round `x` down to the nearest integer                     |
| `math.hermite_blend(t)`{lang=molang}               | Smooth curve: `3t^2 - 2t^3`, good for eased interpolation |
| `math.lerp(a, b, t)`{lang=molang}                  | Linearly interpolate between `a` and `b` by `t`           |
| `math.lerprotate(a, b, t)`{lang=molang}            | Rotational interpolation, shortest path around a circle   |
| `math.ln(x)`{lang=molang}                          | Natural logarithm of `x`                                  |
| `math.max(a, b)`{lang=molang}                      | Larger of `a` or `b`                                      |
| `math.min(a, b)`{lang=molang}                      | Smaller of `a` or `b`                                     |
| `math.min_angle(x)`{lang=molang}                   | Clamp angle `x` to the range -180° to 180°                |
| `math.mod(a, b)`{lang=molang}                      | Remainder of `a / b`                                      |
| `math.pi`{lang=molang}                             | Constant for π (approximately 3.14159)                    |
| `math.pow(base, exponent)`{lang=molang}            | Raise `base` to the `exponent` power                      |
| `math.random(low, high)`{lang=molang}              | Random float between `low` and `high`                     |
| `math.random_integer(low, high)`{lang=molang}      | Random integer between `low` and `high`                   |
| `math.round(x)`{lang=molang}                       | Round `x` to the nearest integer                          |
| `math.sin(x)`{lang=molang}                         | Sine of `x` degrees                                       |
| `math.sqrt(x)`{lang=molang}                        | Square root of `x`                                        |
| `math.trunc(x)`{lang=molang}                       | Remove fractional part of `x` (round toward zero)         |

## Structs

Structs in Molang are values that contain multiple related fields, like `.x`, `.y`, `.z`.

You can create your own structs using `variable.`{lang=molang} and assign values to their fields directly:

```molang
v.location.x = 1;
v.location.y = 2;
v.location.z = 3;
```

These values can then be reused or passed to other expressions:

```molang
v.target = v.other_mob->v.location;
```

:::warning
`temp.`{lang=molang} variables do **not** support structs. Use `variable.`{lang=molang} for anything involving `.x`, `.y`, `.z`, etc.
:::

## Loops and Flow Control

You can run expressions multiple times using `loop`{lang=molang}.

```molang
v.a = 1;
v.b = 1;

loop(10, {
    t.next = v.a + v.b;
    v.a = v.b;
    v.b = t.next;
});
```

### `break`{lang=molang} and `continue`{lang=molang}

- `break;`{lang=molang} exits the current loop early
- `continue;`{lang=molang} skips to the next iteration

```molang
loop(10, {
    (v.a > 5) ? break;
    v.a += 1;
});
```

## Simple vs Complex Expressions

- **Simple**: a single expression that returns a value

```molang
math.sin(q.anim_time * 10)
```

- **Complex**: multiple statements with `;` and an explicit `return`{lang=molang}

```molang
t.a = math.sin(q.anim_time * 10);
t.b = t.a * t.a;
return t.b + 1;
```

## Versioning and `min_engine_version`

Molang behavior can change depending on the `min_engine_version` defined in your pack’s `manifest.json`. These changes improve how expressions behave, fix bugs, and deprecate older behavior.

Make sure your pack's engine version is set correctly to take advantage of the latest fixes and syntax improvements.

| Pack `min_engine_version` | Description                                                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `1.17.0`                  | Initial support for Versioned Changes added. (Not actually a Versioned Change)                                                                               |
| `1.17.30`                 | Fixed `query.item_remaining_use_duration` conversion from ticks to seconds (was multiplied by 20 instead of divided). Also reversed its normalization logic. |
| `1.17.40`                 | Added new error messages for invalid expressions (e.g., `'text' + 1` now causes a content error).                                                            |
| `1.17.40`                 | Added error detection for mismatched parentheses/brackets and unknown tokens.                                                                                |
| `1.18.10`                 | Fixed ternary operator associativity. `A ? B : C ? D : E` now evaluates correctly as `A ? B : (C ? D : E)`.                                                  |
| `1.18.20`                 | Changed operator precedence: logical `AND` now evaluates before `OR`, and comparison before equality.                                                        |
| `1.19.60`                 | Fixed issue where dividing by a dynamically negative value used the absolute value instead.                                                                  |
| `1.20.0`                  | Fixed `query.cape_flap_amount` using incorrect head rotation instead of body rotation.                                                                       |
| `1.20.10`                 | Renamed `block_property` and `has_block_property` to `block_state` and `has_block_state`.                                                                    |
| `1.20.40`                 | Deprecated `block_property` and `has_block_property`.                                                                                                        |
| `1.20.50`                 | Fully removed `block_property` logic. Also removed queries: `is_scenting`, `is_rising`, and `is_feeling_happy`. Replaced by `timer_flag_1–3`.                |
| `1.20.70`                 | Step particle texture queries now treat leaf blocks as valid sources.                                                                                        |


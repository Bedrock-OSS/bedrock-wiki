---
title: Playanimation
category: Commands
mentions:
    - PipiSpamton
    - zheaEvyline
description: Understanding the playanimation command.
---

## Introduction

[Sourced by the Japanese Commanders Gathering Discord](https://discord.gg/xFZH6QJfSB)

In Bedrock, the `/playanimation` command allows entities to play animations. You can stack multiple animations or even customize them.

## Syntax

`/playanimation <entity: target> <animation: string> [next_state: string] [blend_out_time: float] [stop_expression: string] [controller: string]`

**Definitions:**

`<>` Angle brackets mean the variable is required.<br>
`[]` Square brackets mean the variable is optional.

-   `<entity: target>` Specifies the entity that will play the animation.
-   `<animation: string>` Specifies the animation to be played.
-   `[next_state: string]` Specifies which animation to transition to when the current animation's end conditions are met.
-   `[blend_out_time: float]` Sets the time for transitioning between animations.
-   `[stop_expression: string]` Defines the end condition. This must be written in Molang.
-   `[controller: string]` Accesses and defines the animation controller.

**Example:**

<CodeHeader></CodeHeader>

```yaml
/playanimation @a animation.player.riding.legs none 0 "query.is_moving"
```

This command plays the `animation.player.riding.legs` animation (which represents a player's leg movement while sitting) for all players. When `query.is_moving` (indicating movement) becomes true, it transitions to the animation `none` in 0 seconds.

Since the animation `none` does not exist, the entity returns to an idle state, effectively canceling the animation.

If the animation belongs to the entity itself, the `animation.entity.` part can be omitted.<br>
For example, to play `animation.player.attack.positions` for a player, you can simply enter `attack.positions` instead of `animation.player.attack.positions`.

## Animation Controller

An animation controller determines which animations play under specific conditions.<br>
If an existing animation controller is accessed, it will be overwritten.

### Examples

<CodeHeader></CodeHeader>

```yaml
/playanimation @e[type=allay] animation.player.attack.positions none "1" controller.animation.allay.dancing
```

Executing this command on an Allay prevents it from dancing when music plays.<br>
This happens because the original animation controller, which made it dance when music played, is replaced with a new controller that does nothing.<br>
(Any animation could be used here, but `attack.positions` was chosen since it has no effect.)

If a non-existent animation controller is specified, it will be registered as a new one:

<CodeHeader></CodeHeader>

```yaml
/playanimation @a animation.ender_dragon.neck_head_movement animation.piglin.celebrate_hunt_special 0 "v.head_position_y=0;v.head_rotation_y=q.life_time*1000;return !q.is_sneaking;" wiki:head
```

<CodeHeader></CodeHeader>

```yaml
/playanimation @a animation.piglin.celebrate_hunt_special animation.ender_dragon.neck_head_movement 0 "v.head_position_y=0;v.head_rotation_y=q.target_y_rotation;return q.is_sneaking;" wiki:dance
```

These commands register a new animation controller that:

-   Rotates the player's head when not sneaking.
-   Plays a dancing animation when sneaking.

:::info NOTE:
If executed repeatedly, the animation may flicker due to a mismatch in animation transition timing (a 1-frame delay is needed).
:::

The left-side animation transitions to the right-side animation when conditions are met. This can be extended with more transitions. However, transitions only apply within the same animation controller.

For example, if the above commands are active and another animation controller (`wiki:head.2`, etc.) plays `animation.piglin.celebrate_hunt_special`, it won’t affect transitions to `animation.ender_dragon.neck_head_movement`.

### Storage and Removal

-   Animation controllers are stored on the client-side entity.
-   They **cannot** be removed using commands.
-   Custom animation controllers reset when leaving the world or sending the affected entity far away.

## Stacking Animations

Each animation controller can play only one animation at a time. By using multiple animation controllers, you can play multiple animations simultaneously.

### Examples

<CodeHeader></CodeHeader>

```yaml
/playanimation @a animation.player.riding.legs none 0 "0" wiki:rideleg
```

This command overlays the **riding legs** animation with the **pigling dance** animation:

<CodeHeader></CodeHeader>

```yaml
/playanimation @a animation.piglin.celebrate_hunt_special none 0 "0" wiki:dance
```

Here, `wiki:rideleg` and `wiki:dance` are used as controller names, but any name like `"a"` or `"b"` is also valid. However, you **cannot** use the same name for multiple controllers (e.g., both as `"a"`).

### Removing Stacked Animations

To remove the above animations, you must **overwrite** the animation controller states:

<CodeHeader></CodeHeader>

```yaml
/playanimation @a animation.player.attack.positions none 0 "1" wiki:rideleg
```

<CodeHeader></CodeHeader>

```yaml
/playanimation @a animation.player.attack.positions none 0 "1" wiki:dance
```

1. The **`animation.player.attack.positions`** animation (which does nothing) is played.
2. The condition `1` (true) forces a transition to `none`.
3. Since `none` does not exist, the animation is canceled.

**Why Not Directly Use `none` as the Animation?**

-   You can **transition** to `none`, but you **cannot** directly set `none` as the animation.
-   The animation name must be valid; otherwise, the command might not work properly.

### Potential Issues

-   This method **adds** a rule that transitions `attack.positions` to `none`.
-   If any other animation already transitions to `attack.positions`, **unexpected behavior** may occur.

### Bad Usage Examples

<CodeHeader></CodeHeader>

```yaml
/playanimation @a animation.ender_dragon.neck_head_movement attack.positions 0 "v.head_position_y=0;v.head_rotation_y=q.life_time*1000;return !q.is_sneaking;" wiki:head
```

<CodeHeader></CodeHeader>

```yaml
/playanimation @a attack.positions animation.ender_dragon.neck_head_movement 0 "v.head_position_y=0;v.head_rotation_y=q.target_y_rotation;return q.is_sneaking;" wiki:head
```

This makes the head rotate **only while sneaking**. However, if you then execute:

<CodeHeader></CodeHeader>

```yaml
playanimation @e[tag=main] attack.positions none 0 "1" wiki:head
```

-   When you stop sneaking, the animation transitions to `attack.positions`.
-   Since `attack.positions` is now playing, it transitions to `none`.
-   `attack.positions` is no longer active, so sneaking **no longer triggers** `animation.ender_dragon.neck_head_movement`.

**Fixing This Issue:**

Instead of transitioning to `attack.positions`, transition to a **different** animation that does nothing.

## Custom Animations

-   You can customize animations by modifying their **variables**.
-   Some animations have elements like **angles and positions** controlled by `variable`.
-   Minecraft uses its own scripting language, **Molang**, to define **stop conditions**—but you can also use Molang to **change `variable` values** dynamically.

### Example: Editing the Parrot's Animation

This is part of the `animation.parrot.moving` JSON file:

<CodeHeader></CodeHeader>

```json
"animation.parrot.moving": {
    "loop": true,
    "bones": {
        "body": {
            "position": [ 0.0, "variable.wing_flap * 0.3", 0.0 ]
        },
        "tail": {
            "rotation": [ "60.0 + math.cos(query.anim_time * 38.17) * 17.0 - this", 0.0, 0.0 ]
        },
        "wing0": {
            "rotation": [ 0.0, 0.0, "-5.0 - variable.wing_flap * 57.3" ]
        },
        "wing1": {
            "rotation": [ 0.0, 0.0, "5.0 + variable.wing_flap * 57.3" ]
        }
    }
}
```

-   **Bones**: `"body"`, `"tail"`, `"wing0"`, and `"wing1"` are different body parts.
-   The `body` has a `y`-position controlled by **`variable.wing_flap`**.

Now, let's **modify the parrot's body position** using this command:

<CodeHeader></CodeHeader>

```yaml
/playanimation @a animation.parrot.moving none 0 "variable.wing_flap=10;" wiki:body.ypos
```

This moves the parrot’s **body upwards**.

-   Setting `wing_flap=30` moves it even **higher**.
-   Setting `wing_flap=-10` moves it **downwards**.

**Shortened Syntax:**

You can **shorten `variable` to `v`**:

<CodeHeader></CodeHeader>

```yaml
/playanimation @a animation.parrot.moving none 0 "v.wing_flap=10;" wiki:body_ypos
```

`variable.wing_flap` **and** `v.wing_flap` **are the same**.

### Limitations

1. **Only animations with `variable` can be customized.**
    - If an animation **doesn’t** use `variable`, you **can’t modify** it.
2. **Default entity variables reset on each execution.**

    - If you loop the command:

    <CodeHeader></CodeHeader>

    ```yaml
    /playanimation @a animation.player.attack.rotations none 0 "v.attack_body_rot_y=90;" wiki:body.yrot
    ```

    - **Flickering occurs** because `v.attack_body_rot_y` **resets each frame** before being reassigned.

**Fixing Flickering:**

-   **Use a delay** between commands.
-   **Trigger it once** using tags or conditions.

### Checking Vanilla Animations

You can view **Vanilla Minecraft animation** files here:  
[Bedrock Samples - Animation Files](https://github.com/Mojang/bedrock-samples/tree/v1.21.0.3/resource_pack/animations)

### Molang Basics

Molang is Minecraft's scripting language used to control animations, conditions, and expressions.

-   `variable` can be shortened to **`v`**
-   `query` can be shortened to **`q`**

**Reference for Molang:**

For a detailed guide, visit: [Bedrock.dev - Molang Documentation](https://bedrock.dev/docs/stable/Molang)

## List of Useful Playanimation Commands

-   These commands can be applied to players and most other entities.
-   All variables are initialized as zero in the examples but can be adjusted as needed.
-   Some commands use multiple variables. You can add or remove variables based on your requirements.
-   Controller names (e.g., `wiki:body_yrot`) enable stacking animations without overwriting previous ones.
    -   You are free to change the namespace (`wiki`) or the controller names to your liking.

### Body Animations

1. Rotate the body of the entity along the Y-axis (excluding limbs and head):

    <CodeHeader></CodeHeader>

    ```yaml
    /playanimation @a animation.player.attack.rotations none 0 "v.attack_body_rot_y=0;" wiki:body_yrot
    ```

2. Rotate the body of the entity along the Z-axis (excluding limbs and head):

    <CodeHeader></CodeHeader>

    ```yaml
    /playanimation @a animation.wolf.shaking none 0 "v.body_rot_z=0;" wiki:body_zrot
    ```

### Root Animations

1. Rotate the entire entity along the X-axis and Z-axis:

    <CodeHeader></CodeHeader>

    ```yaml
    /playanimation @a animation.ender_dragon.setup none 0 "v.clamped_pitch=0;v.clamped_roll=0;" wiki:root_xrot_yrot
    ```

    - `clamped_pitch` — rotate the entire entity along the X-axis.
    - `clamped_roll` — rotate the entire entity along the Z-axis.

2. Offset the entire entity's position along the X, Y, and Z axes:

    <CodeHeader></CodeHeader>

    ```yaml
    /playanimation @a animation.minecart.move none 0 "v.rail_offset.x=0;v.rail_offset.y=0;v.rail_offset.z=0;" wiki:root_pos
    ```

    - `rail_offset.x` — offset the entire entity along the X-axis.
    - `rail_offset.y` — offset the entire entity along the Y-axis.
    - `rail_offset.z` — offset the entire entity along the Z-axis.

### Head Animations

1. Offset or rotate the entity's head:

    <CodeHeader></CodeHeader>

    ```yaml
    /playanimation @a animation.ender_dragon.neck_head_movement none 0 "v.head_position_x=0;v.head_position_y=0;v.head_position_z=0;v.head_rotation_x=0;v.head_rotation_y=0;v.head_rotation_z=0;" wiki:head_pos_rot
    ```

    - `head_position_x` — offset the entity's head along the X-axis.
    - `head_position_y` — offset the entity's head along the Y-axis.
    - `head_position_z` — offset the entity's head along the Z-axis.
    - `head_rotation_x` — rotate the entity's head along the X-axis.
    - `head_rotation_y` — rotate the entity's head along the Y-axis.
    - `head_rotation_z` — rotate the entity's head along the Z-axis.

## What's Next?

<Card title="FMBE - A New Way to Create Display Entities" link="/commands/display-entities" image="/assets/images/icons/diamond_ore.png">

Learn how to create display entities on Bedrock purely using commands.

</Card>

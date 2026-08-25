---
title: N-Way Rotation
example: n_way_rotation
description: Learn how to make blocks that are able to face a given number of directions, without being restricted to axis-aligned rotations.
category: Sound & Visuals
tags:
    - guide
    - intermediate
outline_depth: 4
license: true
mentions:
    - QuazChick
---

:::tip KNOWN ISSUE ([MCPE-241952](https://bugs.mojang.com/browse/MCPE-241952))
N-way rotation is only visible to the player hosting the world, not remote players joining.
For servers, this means it is not visible to any players.
:::
:::tip VISUAL ONLY
Unlike rotation from the [transformation](/blocks/block-components#transformation) component, features such as [collision box](/blocks/block-components#collision-box) and [selection box](/blocks/block-components#selection-box) will not be affected by N-way rotation as this system only targets block [geometry](/blocks/block-components#geometry).
This is because N-way rotation may not be axis-aligned which would cause issues for these components.
:::
:::tip ROOT ONLY
N-way rotation can only be defined in the root `components` object of the block, so cannot be specified per [permutation](/blocks/block-permutations).
:::
:::danger MULTI-BLOCKS
N-way rotation is not supported by [multi-blocks](/blocks/multi-blocks) and attempts to use it will cause the block JSON to be invalid.
:::

## How It Works

N-way rotation allows the geometry of a block to be rotated by linking a block state with each rotation axis.
The game will then automatically associate an angle of rotation to each block state value, equally spacing rotations across the full 360°, starting from south.

Here, _N_ refers to the number of discrete angles that the block can face on a given axis, determined by the number of valid values listed for the associated block state.
For example, the state below has 3 valid values (`0`{lang=json}, `1`{lang=json} and `2`{lang=json}), meaning it could be used to apply 3-way rotation to the block geometry.

**Note:** You will need to implement a way to set the value of any custom states you make, see the [custom N-way rotation states](#custom-n-way-rotation-states) section.
Alternatively, there are vanilla states provided by [block traits](/blocks/block-traits) (such as [`minecraft:sixteen_way_rotation`](#sixteen-way-rotation)) which will have their values set automatically when the block is placed.

<ExampleFile path="BP/blocks/three_way_arrow.json" snippet="minecraft:block/description" />

In the block's [geometry](/blocks/block-components#geometry) component, we need to define the `n_way_visual_rotation` parameter.
Here, the `y` axis has been set to the name of the block state it should rotate based on, as that is the axis that the rotation should affect.
Other keys (`x` and `z`) can also be defined here if you would like those axes to have N-way rotation too.

<ExampleFile
    path="BP/blocks/three_way_arrow.json"
    snippet="minecraft:block/components/minecraft:geometry"
/>

Now that we have N-way rotation set up, let's see how it looks in-game!

The first state value (`0`{lang=json} in this case) will always be associated with a rotation of 0° **from south**.
Assuming your block model faces north, the block will face south when placed with this state value and when displayed in the UI.

The angle of rotation increases by
$
\begin{aligned}
    \frac{360}{N}
\end{aligned}
$
degrees in a clockwise direction for each subsequent state value.

The different permutations of our arrow block with 3-way rotation have their associated angles annotated below.
**The following screenshots were taken from above while facing north.**

<div style="display: grid; grid-template-columns: repeat(auto-fill, 224px); column-gap: 1em;">

<WikiImage src="three_way_rotation_0.svg" caption="wiki:three_way_rotation = 0" />

<WikiImage src="three_way_rotation_1.svg" caption="wiki:three_way_rotation = 1" />

<WikiImage src="three_way_rotation_2.svg" caption="wiki:three_way_rotation = 2" />

</div>

## Existing Applications

### Cardinal Direction

Traditionally, blocks with cardinal orientation would have their rotation applied via the [`minecraft:transformation`](/blocks/block-components#transformation) component, with each state value (e.g. `"west"`{lang=json}) manually assigned a rotation angle using the [`permutations`](/blocks/block-permutations#conditionally-applying-components) array.

However, for blocks where only the geometry needs to be rotated (such as carved pumpkins which have the same collision and selection boxes regardless of direction), N-way rotation provides a much easier interface for applying cardinal direction by automatically applying different angles of rotation based on the `minecraft:cardinal_direction` state.

<Spoiler title="Example block with cardinal direction applied via N-way rotation">

<ExampleFile path="BP/blocks/cardinal_arrow.json" />

</Spoiler>

### Sixteen-Way Rotation

Some vanilla blocks including banners, mob heads and signs can be placed at 16 discrete rotations, allowing for more precise orientation.

The [`minecraft:placement_direction`](/blocks/block-traits#placement-direction) block trait provides a `minecraft:sixteen_way_direction` state that can be used to enable this type of orientation.

<Spoiler title="Example block with 16-way rotation">

<ExampleFile path="BP/blocks/sixteen_way_arrow.json" />

</Spoiler>

## Custom N-Way Rotation States

<Tag name="scripting" />

While Minecraft provides a placement direction state for 4-way rotation via `minecraft:cardinal_direction` and 16-way rotation via `minecraft:sixteen_way_rotation`, if you'd like your block to have a different _N_, you'll have to implement your own logic for setting the custom rotation state when placed.

In this section, you will be provided with a [custom component](/blocks/block-events) that will adapt to the number of values that your rotation state has.
We will be modifying the example arrow block from the start of this page so that its `wiki:three_way_rotation` state is set upon being placed by the player.

### Custom State

Rather than using a block trait to enable a built-in block state, you'll need to define your own state.

:::tip STATE VALUE LIMIT
Keep in mind that a single block state can have a maximum of 16 values, meaning 16-way rotation is as precise as your block can get by using this system!
:::

<ExampleFile path="BP/blocks/three_way_arrow.json" snippet="minecraft:block/description/states" />

:::tip INTEGER RANGE FORMAT

For larger value ranges, it's a good idea to use the [integer range](/blocks/block-states) format when defining your custom state so that you don't have to manually list each value.
Here's an example for 8-way rotation:

<CodeHeader breadcrumbs="minecraft:block/description" />

```json
"states": {
    "wiki:eight_way_rotation": {
        "values": { "min": 0, "max": 7 }
    }
}
```

:::

### Custom Component

#### Component JSON Format

This custom component is needed to set the value of the `wiki:three_way_rotation` state when the block is placed.
We will do this using the [`beforeOnPlayerPlace()`{lang=js}](/blocks/block-events#before-player-place) event hook.

First, let's outline the format of our custom component in the block JSON file.
We're going to give it two parameters:

-   `rotation_state` — String
    -   The name of the state that is being used for N-way rotation.
    -   This is needed for the script registering the custom component to know which state to set and how many values it has.
    -   For our example, this parameter will be set to `"wiki:three_way_rotation"`{lang=json}.
-   `y_rotation_offset` — Integer (optional)
    -   An angle added to the player's Y rotation before calculating the value of the rotation state.
    -   This is equivalent to the same parameter found in the [`minecraft:placement_direction`](/blocks/block-traits#placement-direction) trait.
    -   Since we want the block to face towards the player when placed (rather than in the same direction as the player), we will set it to `180`{lang=json} degrees.

<ExampleFile
    path="BP/blocks/three_way_arrow.json"
    snippet="minecraft:block/components/wiki:n_way_rotation"
/>

#### Component Script

Here is the function that we will use to convert the player's Y rotation into a value between `0`{lang=js} and `n-1`{lang=js} (where `n` is the number of state values).

<CodeHeader path="BP/scripts/nWayRotation.js" />

```js
/**
 * @param {number} n
 * @param {number} rotation
 */
function getNWayRotation(n, rotation) {
    // Angle between different state values
    const rotationInterval = 360 / n;

    // Converts the rotation into a positive angle below 360
    rotation %= 360;
    if (rotation < 0) rotation += 360;

    // Returns the rotation as a value that is less than n
    return Math.round(rotation / rotationInterval) % n;
}
```

Now let's create a custom component that uses the `getNWayRotation()`{lang=js} function to set the block to the correct rotation permutation.

<CodeHeader path="BP/scripts/nWayRotation.js" />

```js
import { BlockStates, system } from "@minecraft/server";

// Make sure you change "wiki" to your own namespace!
const componentName = "wiki:n_way_rotation";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockNWayRotationComponent = {
    beforeOnPlayerPlace(event, { params }) {
        const { player } = event;
        if (!player) return;

        // Get the number of rotation state values
        const rotationState = params.rotation_state;
        const n = BlockStates.get(rotationState).validValues.length;

        // Get the "y_rotation_offset" value defined in the block JSON (default to 0) and add it to the player's Y rotation
        const yRotationOffset = params.y_rotation_offset ?? 0;
        const yRotation = player.getRotation().y + yRotationOffset;

        // Get the rotation state value from the player's Y rotation
        const value = getNWayRotation(n, yRotation);

        // Update the block permutation being placed
        event.permutationToPlace = event.permutationToPlace.withState(rotationState, value);
    },
};

// Register the custom component with the name "wiki:n_way_rotation"
system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(componentName, BlockNWayRotationComponent);
});
```

Remember to import the script into your entry file and set up scripts in `BP/manifest.json` if you haven't already!

<ExampleFile path="BP/scripts/index.js" />

### Final Block JSON & Script

<Spoiler title="Example Arrow Block JSON">

<ExampleFile path="BP/blocks/three_way_arrow.json" />

</Spoiler>

<Spoiler title="N-Way Rotation Component Script">

<ExampleFile path="BP/scripts/nWayRotation.js" />

</Spoiler>

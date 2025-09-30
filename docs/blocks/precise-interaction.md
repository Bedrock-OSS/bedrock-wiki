---
title: Precise Interaction
description: Learn how to interact with different parts of the same block.
category: Tutorials
tags:
    - expert
    - scripting
license: true
mentions:
    - QuazChick
    - SmokeyStack
hidden: true
---

::: tip FORMAT & MIN ENGINE VERSION `1.21.110`
This tutorial assumes an advanced understanding of blocks and scripting.
Check out the [blocks](/blocks/blocks-intro) and [scripting](/scripting/scripting-intro) guides before starting.
:::
::: danger [MCPE-223452](https://bugs.mojang.com/browse/MCPE-223452)
An issue with the `faceLocation` property of many events means that it is not always relative to the bottom north-west corner of a block depending on the block's position in the world.
As a result, precise interaction does not work correctly and the following method should not be used until this bug is fixed.
:::

The ability to create custom blocks that the player can interact with can be very basic to implement, yet still allow for complex functionality. However, sometimes the default interaction mode, which is based on simply right-clicking or tapping the block without location-specific conditions, is not enough to achieve the desired functionality.

For example, what if you want to create a block that has multiple buttons on one side, and each one triggers a different action? Or a segment display, where multiple individually-lit lamps can be contained within one block.

This is where precise interaction comes in! The following methods of precise interaction allow you to define multiple areas in a block that can be interacted with separately, and assign different functions to each area. In this tutorial, we will show you how to add precise interaction to your blocks using scripts, with examples of each method.

**Note:** Precise interaction does not enable blocks to have multiple/custom-shaped [`minecraft:selection_box`](/blocks/block-components#selection-box) components. The selection box must be within all defined areas for precise interaction to function properly.

![Showcase image displaying example Pigeonholes and Double Flower Pot blocks](/assets/images/blocks/precise-interaction/showcase.png)

## How it Works

The provided methods of precise interaction use `faceLocation`, a property of the [player interact event](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/blockcomponentplayerinteractevent).

This value tells us where on the block's `minecraft:selection_box` was selected/hit, which is what precise interaction relies on.

## FaceSelectionPlains Class

This class allows you to define 2D areas on a block's face and get the selected plain.

To use this method for precise interaction, create the file `BP/scripts/utilities/face_selection_plains.js` and paste the below code into it.

<Spoiler title="FaceSelectionPlains Code">

<CodeHeader>BP/scripts/utilities/face_selection_plains.js</CodeHeader>

```js
import { Direction } from "@minecraft/server";

const isInRange = (value, min, max) => value >= min && value <= max;

export default class FaceSelectionPlains {
    /**
     * Allows you to define 2D areas on a block's face and get the selected plain.
     *
     * @param {Object[]} plains Spread array defining the 2D areas on a block's face which may be selected.
     * @param {[number, number]} plains[].origin [U, V] array defining the offset of the plain from the top left of the block face in pixels.
     * @param {[number, number]} plains[].size [U, V] array defining the size of the plain, extending from the top left in pixels.
     * @param {string} [plains[].name] Custom name to easily identify this plain when it is selected.
     */
    constructor(...plains) {
        this.plains = plains;
    }
    /**
     * @param {Object} selection
     * @param {Direction} selection.face
     * @param {import("@minecraft/server").Vector3} selection.faceLocation
     *
     * @param {Object} [options]
     * @param {boolean} [options.invertU] Horizontal axis extends `right -> left` rather than `left -> right` if true.
     * @param {boolean} [options.invertV] Vertical axis extends `bottom -> top` rather than `top -> bottom` if true.
     *
     * @returns Selected plain ID, or plain index if an ID is not provided. If no plains apply to the selection, `undefined` is returned.
     */
    getSelected(selection, options) {
        const { face, faceLocation } = selection;

        // Create a new object so the original is not mutated
        let location = { ...faceLocation };

        const horizontalAxis = face === Direction.East || face === Direction.West ? "z" : "x";
        const verticalAxis = face === Direction.Up || face === Direction.Down ? "z" : "y";

        if (face !== Direction.Down) location[verticalAxis] = 1 - location[verticalAxis];
        if (face !== Direction.South && face !== Direction.West)
            location[horizontalAxis] = 1 - location[horizontalAxis];

        if (options?.invertU) location[horizontalAxis] = 1 - location[horizontalAxis];
        if (options?.invertV) location[verticalAxis] = 1 - location[verticalAxis];

        for (let i = 0; i < this.plains.length; i++) {
            const plain = this.plains[i];

            const inHorizontalRange = isInRange(
                location[horizontalAxis],
                plain.origin[0] / 16,
                (plain.origin[0] + plain.size[0]) / 16
            );
            const inVerticalRange = isInRange(
                location[verticalAxis],
                plain.origin[1] / 16,
                (plain.origin[1] + plain.size[1]) / 16
            );

            if (inHorizontalRange && inVerticalRange) return plain.name ?? i;
        }
    }
}
```

</Spoiler>

### Methods

-   #### constructor

    ```ts
    new FaceSelectionPlains(...plains: { origin: [number, number]; size: [number, number]; name?: string }[])
    ```

    Creates a new `FaceSelectionPlains` instance.

      <Spoiler title="Parameters">

    -   **plains**: `Object[]`

        Array defining the 2D areas on a block's face which may be selected.

        -   **origin**: `[number, number]`

            [U, V] array defining the offset of the plain from the top left of the block face.

        -   **size**: `[number, number]`

            [U, V] array defining the size of the plain, extending from the top left.

        -   **name**?: `string`

            Custom name to easily identify this plain when it is selected.

      </Spoiler>

-   #### getSelected

    ```ts
    getSelected(selection: { face: Direction; faceLocation: Vector3 }, options?: { invertU?: boolean; invertV?: boolean }): number | string | undefined
    ```

    Returns the involved plain's array index, or name if provided. If no plain is selected, `undefined` is returned.

      <Spoiler title="Parameters">

    -   **selection**: `Object`

        Object containing details about the selection.

        -   **face**: [`Direction`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/direction)

            The selected face of the block.

        -   **faceLocation**: [`Vector3`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/vector3)

            Selection location relative to the bottom north-west corner of the block.

    -   **options**?: `Object`

        Optionally configure how the selected plain is calculated.

        -   **invertU**?: `boolean`

            Horizontal axis goes `right -> left` rather than `left -> right` if true.

        -   **invertV**?: `boolean`

            Vertical axis goes `bottom -> top` rather than `top -> bottom` if true.

      </Spoiler>

### Usage

The below example would split the targeted block face into quarters:

<CodeHeader>BP/scripts/blocks/example.js</CodeHeader>

```js
import { world } from "@minecraft/server";
import FaceSelectionPlains from "../utilities/face_selection_plains";

const quadrants = new FaceSelectionPlains(
    { origin: [0, 0], size: [8, 8] },
    { origin: [8, 0], size: [8, 8] },
    { origin: [0, 8], size: [8, 8] },
    { origin: [8, 8], size: [8, 8] }
);
```

Additionally, names can be provided to easily identify each plain:

```js
const quadrants = new FaceSelectionPlains(
    { origin: [0, 0], size: [8, 8], name: "top_left" },
    { origin: [8, 0], size: [8, 8], name: "top_right" },
    { origin: [0, 8], size: [8, 8], name: "bottom_left" },
    { origin: [8, 8], size: [8, 8], name: "bottom_right" }
);
```

This could be used in a [custom component](/blocks/block-events) to get the selected quadrant:

```js
const BlockQuadrantInteractionComponent = {
    onPlayerInteract({ block, face, faceLocation }) {
        // Returns the selected area's index (0, 1, 2 or 3), or name if provided (e.g. "top_left").
        // If no plain was selected, `undefined` is retured.
        const selectedQuadrant = quadrants.getSelected({
            face,
            faceLocation,
        });

        world.sendMessage(`Quadrant ${selectedQuadrant} was selected!`);
    },
};
```

## SelectionBoxes Class

::: warning
As with the `minecraft:selection_box` and `minecraft:collision_box` components, do not use Blockbench's displayed position values when setting up your SelectionBoxes as they are measured from the north-west, rather than the north-east. Instead, use the origin value from the exported `.geo.json` file.

If you wish to use Blockbench's values, the `invertX` option should be set to true in [`getSelected`](#getselected-1).
:::

This class allows you to define 3D areas in a block and get the box which the face selection lies within.

To use this method for precise interaction, create the file `BP/scripts/utilities/selection_boxes.js` and paste the below code into it.

<Spoiler title="SelectionBoxes Code">

<CodeHeader>BP/scripts/utilities/selection_boxes.js</CodeHeader>

```js
const isInRange = (value, min, max) => value >= min && value <= max;

export default class SelectionBoxes {
    /**
     * Allows you to define 3D areas in a block and get the box which the face selection lies within.
     *
     * @param {Object[]} boxes Array defining the 3D areas within a block which may be selected.
     * @param {[number, number, number]} boxes[].origin [X, Y, Z] array defining the offset of the box from the block's horizontal middle and vertical bottom in pixels, extending from the north-east.
     * @param {[number, number, number]} boxes[].size [X, Y, Z] array defining the size of the box in pixels, extending from the north-east.
     * @param {string} [boxes[].name] Custom name to easily identify this box when it is selected.
     */
    constructor(...boxes) {
        this.boxes = boxes;
    }
    /**
     * Get the box which the `faceLocation` lies within.
     *
     * @param {import("@minecraft/server").Vector3} faceLocation Selection location relative to the bottom north-west corner of the block.
     *
     * @param {Object} [options] Optionally configure how the selected box is calculated.
     * @param {boolean} [options.invertX] X axis extends `west -> east` rather than `east -> west` if true, following [Blockbench](https://blockbench.net)'s displayed positions.
     * @param {boolean} [options.invertY] Y axis extends `up -> down` rather than `down -> up` if true.
     * @param {boolean} [options.invertZ] Z axis extends `south -> north` rather than `north -> south` if true.
     *
     * @returns {(string|number|undefined)} Selected box name, or box index if a name is not provided. If no boxes apply to the selection, `undefined` is returned.
     */
    getSelected(faceLocation, options) {
        // Create a new object so the original is not mutated
        let location = { ...faceLocation };

        // X is inverted to ensure measurements are relative to the bottom north-east.
        if (!options?.invertX) location.x = 1 - location.x;
        if (options?.invertY) location.y = 1 - location.y;
        if (options?.invertZ) location.z = 1 - location.z;

        for (let i = 0; i < this.boxes.length; i++) {
            const box = this.boxes[i];

            const from = {
                x: box.origin[0] + 8,
                y: box.origin[1],
                z: box.origin[2] + 8,
            };
            const to = {
                x: from.x + box.size[0],
                y: from.y + box.size[1],
                z: from.z + box.size[2],
            };

            const inXRange = isInRange(location.x, from.x / 16, to.x / 16);
            const inYRange = isInRange(location.y, from.y / 16, to.y / 16);
            const inZRange = isInRange(location.z, from.z / 16, to.z / 16);

            if (inXRange && inYRange && inZRange) return box.name ?? i;
        }
    }
}
```

</Spoiler>

### Methods

-   #### constructor

    ```ts
    new SelectionBoxes(...boxes: { origin: [number, number, number]; size: [number, number, number]; name?: string }[])
    ```

    Creates a new `SelectionBoxes` instance.

      <Spoiler title="Parameters">

    -   **boxes**: `Object[]`

        Array defining the 3D areas within a block which may be selected.

        -   **origin**: `[number, number, number]`

            [X, Y, Z] array defining the offset of the box from the block's horizontal middle and vertical bottom in pixels, extending from the north-east.

        -   **size**: `[number, number, number]`

            [X, Y, Z] array defining the size of the box in pixels, extending from the north-east.br>

        -   **name**?: `string`

            Custom name to easily identify this box when it is selected.

      </Spoiler>

-   #### getSelected

    ```ts
    getSelected(faceLocation: Vector3, options?: { invertX?: boolean; invertY?: boolean; invertZ?: boolean }): number | string | undefined
    ```

    Get the box which the `faceLocation` lies within.

    Returns the involved box's array index, or name if provided. If no box is selected, `undefined` is returned.

      <Spoiler title="Parameters">

    -   **faceLocation**: [`Vector3`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/vector3)

        Selection location relative to the bottom north-west corner of the block.

    -   **options**?: `Object`

        Optionally configure how the selected box is calculated.

        -   **invertX**?: `boolean`

            X axis extends `west -> east` rather than `east -> west` if true, following [Blockbench](https://blockbench.net)'s displayed positions.

        -   **invertY**?: `boolean`

            Y axis extends `up -> down` rather than `down -> up` if true.

        -   **invertZ**?: `boolean`

            Z axis extends `south -> north` rather than `north -> south` if true.

      </Spoiler>

### Usage

The below example would split the targeted block into its vertical halves:

<CodeHeader>BP/scripts/blocks/example.js</CodeHeader>

```js
import { world } from "@minecraft/server";
import SelectionBoxes from "../utilities/selection_boxes";

const verticalHalves = new SelectionBoxes(
    { origin: [-8, 8, -8], size: [16, 8, 16], name: "top" },
    { origin: [-8, 0, -8], size: [16, 8, 16], name: "bottom" }
);
```

This could be used with a [`playerInteractWithBlock` after event](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockafterevent) to get the selected box:

```js
world.afterEvents.playerInteractWithBlock.subscribe((e) => {
    // Do nothing if the targeted block is not "wiki:example_block"
    if (e.block.typeId !== "wiki:example_block") return;

    // Returns the selected vertical half ("top" or "bottom").
    const selectedVerticalHalf = verticalHalves.getSelected(e.faceLocation);

    world.sendMessage(`The ${selectedVerticalHalf} of the block was selected!`);
});
```

## Pigeonholes Example

Using our [FaceSelectionPlains](#faceselectionplains-class) class, we can create a block which functions similarly to a Chiselled Bookshelf. Other assets (textures etc.) are included in the [example pack](#download-example-pack).

Interacting with paper will fill the selected slot. Destroying the block releases all of the stored paper items.

![Pigeonholes Showcase](/assets/images/blocks/precise-interaction/pigeonholes.png)

<Button link="https://github.com/Bedrock-OSS/bedrock-examples/blob/main/resources/precise_interaction/rp/models/blocks/pigeonholes.geo.json">
    Download Pigeonholes Model
</Button>

<Spoiler title="Block JSON">

<CodeHeader>BP/blocks/pigeonholes.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:pigeonholes",
            "menu_category": {
                "category": "items"
            },
            "states": {
                "wiki:slot_0_occupied": [false, true],
                "wiki:slot_1_occupied": [false, true],
                "wiki:slot_2_occupied": [false, true],
                "wiki:slot_3_occupied": [false, true],
                "wiki:slot_4_occupied": [false, true],
                "wiki:slot_5_occupied": [false, true]
            },
            "traits": {
                "minecraft:placement_direction": {
                    "enabled_states": ["minecraft:cardinal_direction"],
                    "y_rotation_offset": 180
                }
            }
        },
        "components": {
            "wiki:pigeonholes_storage": {},
            "minecraft:destructible_by_mining": {
                "seconds_to_destroy": 1.5
            },
            "minecraft:geometry": {
                "identifier": "geometry.pigeonholes",
                "culling": "wiki:pigeonholes_culling",
                "bone_visibility": {
                    // Display each slot as empty/occupied
                    "empty_slot_0": "!q.block_state('wiki:slot_0_occupied')",
                    "empty_slot_1": "!q.block_state('wiki:slot_1_occupied')",
                    "empty_slot_2": "!q.block_state('wiki:slot_2_occupied')",
                    "empty_slot_3": "!q.block_state('wiki:slot_3_occupied')",
                    "empty_slot_4": "!q.block_state('wiki:slot_4_occupied')",
                    "empty_slot_5": "!q.block_state('wiki:slot_5_occupied')",
                    "occupied_slot_0": "q.block_state('wiki:slot_0_occupied')",
                    "occupied_slot_1": "q.block_state('wiki:slot_1_occupied')",
                    "occupied_slot_2": "q.block_state('wiki:slot_2_occupied')",
                    "occupied_slot_3": "q.block_state('wiki:slot_3_occupied')",
                    "occupied_slot_4": "q.block_state('wiki:slot_4_occupied')",
                    "occupied_slot_5": "q.block_state('wiki:slot_5_occupied')"
                }
            },
            "minecraft:material_instances": {
                "*": {
                    "texture": "stripped_bamboo_block_top"
                },
                // Material instances defined in model:
                "side": {
                    "texture": "stripped_bamboo_block"
                },
                "empty_slot": {
                    "texture": "wiki:pigeonholes_empty"
                },
                "occupied_slot": {
                    "texture": "wiki:pigeonholes_occupied"
                }
            }
        },
        "permutations": [
            // Facing north
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'north'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 0, 0] }
                }
            },
            // Facing west
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'west'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 90, 0] }
                }
            },
            // Facing south
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'south'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 180, 0] }
                }
            },
            // Facing east
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'east'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, -90, 0] }
                }
            }
        ]
    }
}
```

</Spoiler>

<Spoiler title="Precise Interaction Script">

<CodeHeader>BP/scripts/blocks/pigeonholes.js</CodeHeader>

```js
import { system, EquipmentSlot, GameMode, ItemStack } from "@minecraft/server";
import FaceSelectionPlains from "../utilities/face_selection_plains"; // Import the FaceSelectionPlains class to use it

// Slot bounds
const slots = new FaceSelectionPlains(
    { origin: [0, 0], size: [6, 8] },
    { origin: [6, 0], size: [5, 8] },
    { origin: [11, 0], size: [5, 8] },
    { origin: [0, 8], size: [6, 8] },
    { origin: [6, 8], size: [5, 8] },
    { origin: [11, 8], size: [5, 8] }
);

const isFrontFace = (block, face) =>
    block.permutation.getState("minecraft:cardinal_direction") === face.toLowerCase();

const isSlotOccupied = (block, slot) => block.permutation.getState(`wiki:slot_${slot}_occupied`);

const occupySlot = (block, slot) =>
    block.setPermutation(block.permutation.withState(`wiki:slot_${slot}_occupied`, true));

const emptySlot = (block, slot) =>
    block.setPermutation(block.permutation.withState(`wiki:slot_${slot}_occupied`, false));

function handleInteract({ block, face, faceLocation, dimension, player }) {
    if (!player || !isFrontFace(block, face)) return;

    const equippable = player.getComponent("minecraft:equippable");
    if (!equippable) return;

    const selectedSlot = slots.getSelected({ face, faceLocation });
    if (selectedSlot === undefined) return;

    const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
    const isHoldingPaper = mainhand.hasItem() && mainhand.typeId === "minecraft:paper";

    if (isHoldingPaper && !isSlotOccupied(block, selectedSlot)) {
        if (player.getGameMode() !== GameMode.creative) {
            if (mainhand.amount > 1) mainhand.amount--;
            else mainhand.setItem(undefined);
        }

        occupySlot(block, selectedSlot);
        dimension.playSound("insert.chiseled_bookshelf", block.center());
    } else if (isSlotOccupied(block, selectedSlot)) {
        emptySlot(block, selectedSlot);

        const itemLocation = {
            x: block.location.x + faceLocation.x,
            y: block.location.y + faceLocation.y - 0.5,
            z: block.location.z + faceLocation.z,
        };

        dimension.spawnItem(new ItemStack("minecraft:paper"), itemLocation).clearVelocity();

        dimension.playSound("pickup.chiseled_bookshelf", block.center());
    }
}

// ------------------------------
//  Release paper on destruction
// ------------------------------
function releasePaper({ block, brokenBlockPermutation, dimension }) {
    const states = brokenBlockPermutation.getAllStates();

    for (const state in states) {
        const value = states[state];
        const isPaper = value === true;

        if (!isPaper) continue;

        dimension.spawnItem(new ItemStack("minecraft:paper"), block.center());
    }
}

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockPigeonholesStorageComponent = {
    onPlayerInteract: handleInteract,
    onPlayerBreak: releasePaper,
};

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "wiki:pigeonholes_storage",
        BlockPigeonholesStorageComponent
    );
});
```

</Spoiler>

## Double Flower Pot Example

Using our [SelectionBoxes](#selectionboxes-class) class, the player can interact with each pot separately. The following files are the basis for implementing a new Double Flower Pot block, other assets (textures etc.) are included in the [example pack](#download-example-pack).

**Note**: The pots in this example only support the planting of dandelions and cacti for simplicity - you could expand this further yourself.

![Double Flower Pot Showcase](/assets/images/blocks/precise-interaction/double_flower_pot.png)

<Button link="https://github.com/Bedrock-OSS/bedrock-examples/blob/main/resources/precise_interaction/rp/models/blocks/double_flower_pot.geo.json">
    Download Double Flower Pot Model
</Button>

<Spoiler title="Block JSON">

<CodeHeader>BP/blocks/double_flower_pot.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:double_flower_pot",
            "menu_category": {
                "category": "items"
            },
            "states": {
                "wiki:pot_0_plant": ["none", "dandelion", "cactus"],
                "wiki:pot_1_plant": ["none", "dandelion", "cactus"]
            },
            "traits": {
                "minecraft:placement_direction": {
                    "enabled_states": ["minecraft:cardinal_direction"]
                }
            }
        },
        "components": {
            "wiki:double_flower_pot": {},
            "minecraft:collision_box": {
                "origin": [-7, 0, -3],
                "size": [14, 6, 6]
            },
            // This must cover all boxes in the precise interaction script
            "minecraft:selection_box": {
                "origin": [-7, 0, -3],
                "size": [14, 6, 6]
            },
            "minecraft:geometry": {
                "identifier": "geometry.double_flower_pot",
                // Conditionally display plants in their pots
                "bone_visibility": {
                    "dandelion_0": "q.block_state('wiki:pot_0_plant') == 'dandelion'",
                    "dandelion_1": "q.block_state('wiki:pot_1_plant') == 'dandelion'",
                    "cactus_0": "q.block_state('wiki:pot_0_plant') == 'cactus'",
                    "cactus_1": "q.block_state('wiki:pot_1_plant') == 'cactus'"
                }
            },
            "minecraft:material_instances": {
                "*": {
                    "texture": "flower_pot",
                    "render_method": "alpha_test",
                    "ambient_occlusion": false
                },
                // Material instances defined in model:
                "dirt": {
                    "texture": "wiki:double_flower_pot_dirt", // Apply a darker tint to the dirt texture to replicate vanilla potted dirt
                    "render_method": "alpha_test",
                    "ambient_occlusion": false
                },
                "handle": {
                    "texture": "wiki:double_flower_pot_handle",
                    "render_method": "alpha_test"
                },
                "dandelion": {
                    "texture": "yellow_flower",
                    "render_method": "alpha_test",
                    "face_dimming": false,
                    "ambient_occlusion": false
                },
                "cactus_side": {
                    "texture": "cactus_side",
                    "render_method": "alpha_test"
                },
                "cactus_top": {
                    "texture": "cactus_top",
                    "render_method": "alpha_test"
                }
            }
        },
        "permutations": [
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'west' || q.block_state('minecraft:cardinal_direction') == 'east'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 90, 0] } // Front of model facing east
                }
            }
        ]
    }
}
```

</Spoiler>

<Spoiler title="Precise Interaction Script">

<CodeHeader>BP/scripts/blocks/double_flower_pot.js</CodeHeader>

```js
import { system, ItemStack, EquipmentSlot, GameMode } from "@minecraft/server";
import SelectionBoxes from "../utilities/selection_boxes"; // Import the SelectionBoxes class to use it

// Support orientation along both horizontal axes
const pots = {
    x: new SelectionBoxes(
        { origin: [-7, 0, -3], size: [6, 6, 6] },
        { origin: [1, 0, -3], size: [6, 6, 6] }
    ),
    z: new SelectionBoxes(
        { origin: [-3, 0, -7], size: [6, 6, 6] },
        { origin: [-3, 0, 1], size: [6, 6, 6] }
    ),
};

// The state value and sound associated with each plant
const plants = {
    "minecraft:dandelion": {
        value: "dandelion",
        sound: "dig.grass",
    },
    "minecraft:cactus": {
        value: "cactus",
        sound: "dig.cloth",
    },
};

const getAxis = (direction) => (direction === "west" || direction === "east" ? "z" : "x");

// Get the selected pot for the appropriate axis
function getSelectedPot(block, faceLocation) {
    const direction = block.permutation.getState("minecraft:cardinal_direction");
    const axis = getAxis(direction);

    return pots[axis].getSelected(faceLocation);
}

const isPotOccupied = (block, pot) =>
    block.permutation.getState(`wiki:pot_${pot}_plant`) !== "none";

const setPotPlant = (block, pot, plant) =>
    block.setPermutation(block.permutation.withState(`wiki:pot_${pot}_plant`, plant));

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockDoubleFlowerPotComponent = {
    onPlayerInteract({ block, dimension, faceLocation, player }) {
        if (!player) return;

        const equippable = player.getComponent("minecraft:equippable");
        if (!equippable) return;

        const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);

        const selectedPot = getSelectedPot(block, faceLocation);
        if (selectedPot === undefined) return;

        if (mainhand.hasItem() && !isPotOccupied(block, selectedPot)) {
            const plant = plants[mainhand.typeId];
            if (!plant) return;

            if (player.getGameMode() !== GameMode.creative) {
                if (mainhand.amount > 1) mainhand.amount--;
                else mainhand.setItem(undefined);
            }

            setPotPlant(block, selectedPot, plant.value);
            dimension.playSound(plant.sound, block.center(), { volume: 0.5 });
        } else if (!mainhand.hasItem() && isPotOccupied(block, selectedPot)) {
            const plantValue = block.permutation.getState(`wiki:pot_${selectedPot}_plant`);
            const plantId = Object.keys(plants).find((key) => plants[key].value === plantValue);

            setPotPlant(block, selectedPot, "none");
            dimension.playSound("random.pop", block.center());

            mainhand.setItem(new ItemStack(plantId));
        }
    },
    onPlayerBreak: releasePlants,
};

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "wiki:double_flower_pot",
        BlockDoubleFlowerPotComponent
    );
});

// -------------------------------
//  Release plants on destruction
// -------------------------------
function releasePlants({ block, brokenBlockPermutation, dimension }) {
    const states = brokenBlockPermutation.getAllStates();

    // Array of plant state values e.g. ["cactus", "dandelion"]
    const storedPlants = Object.entries(states)
        .filter(([state, value]) => state.startsWith("wiki:pot") && value !== "none")
        .map(([state, value]) => value);

    if (storedPlants.length === 0) return;

    // Create an item entity for every potted plant
    for (const plant of storedPlants) {
        const plantId = Object.keys(plants).find((key) => plants[key].value === plant);

        dimension.spawnItem(new ItemStack(plantId), block.center());
    }
}
```

</Spoiler>

## Importing Scripts

Don't forget to import your scripts into your pack's entry file!

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "modules": [
        {
            "type": "script",
            "language": "javascript",
            "entry": "index.js", // Your defined entry file
            "uuid": "...",
            "version": "1.0.0"
        }
    ],
    "dependencies": [
        {
            "module_name": "@minecraft/server",
            "version": "2.0.0"
        }
    ]
}
```

<CodeHeader>BP/scripts/index.js</CodeHeader>

```js
// Import your precise interaction scripts here...
import "./blocks/pigeonholes";
import "./blocks/double_flower_pot";
```

## Download Example Pack

Template pack made according to this tutorial, adding the Pigeonholes and Double Flower Pot blocks into the "Items" tab.

<Button link="https://github.com/Bedrock-OSS/bedrock-examples/releases/download/download/precise_interaction.mcaddon">
    Download MCADDON
</Button>

If you require extra assistance with precise interaction, feel free to ask in the [Bedrock Add-Ons Discord](/discord)!
Remember to include a link to this page in your question, as the classes provided here are not built into Minecraft.

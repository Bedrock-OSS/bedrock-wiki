---
title: Precise Interaction
category: Tutorials
tags:
    - experimental
    - expert
    - scripting
mentions:
    - QuazChick
---

::: tip FORMAT & MIN ENGINE VERSION `1.20.30`
This tutorial assumes an advanced understanding of blocks and scripting.
Check out the [blocks](/blocks/blocks-intro) and [scripting](/scripting/starting-scripts) guides before starting.
:::

::: warning EXPERIMENTAL
Requires `Holiday Creator Features` to trigger block events.

Requires `Beta APIs` to use [@minecraft/server](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/minecraft-server) module version `1.6.0-beta`.
:::

:::danger NO EMPTY HANDS!
The following examples of precise interaction require the player to be interacting with an item (not air) in their hand.
:::

The ability to create custom blocks that the player can interact with can be very basic to implement, yet still allow for complex functionality. However, sometimes the default interaction mode, which is based on simply right-clicking or tapping the block without location-specific conditions, is not enough to achieve the desired functionality.

For example, what if you want to create a block that has multiple buttons on one side, and each one triggers a different action? Or a segment display, where multiple individually-lit lamps can be contained within one block.

This is where precise interaction comes in! The following methods of precise interaction allow you to define multiple areas in a block that can be interacted with separately, and assign different functions to each area. In this tutorial, we will show you how to add precise interaction to your blocks using scripts, with examples of each method.

**Note**: Precise interaction does not enable blocks to have multiple/custom-shaped [`minecraft:selection_box`](/blocks/block-components#selection-box) components. The selection box must be within all defined areas for precise interaction to function properly.

![Showcase image displaying example Pigeonholes and Double Flower Pot blocks](/assets/images/blocks/precise-interaction/showcase.png)

## How It Works

The provided methods of precise interaction use `faceLocation`, a property of the following Script API classes:

- [`ItemUseOnBeforeEvent`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/itemuseonbeforeevent)
- [`ItemUseOnAfterEvent`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/itemuseonafterevent)

It's also a returned property from the following methods:

- [`Entity.getBlockFromViewDirection()`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/entity#getblockfromviewdirection)
- [`Dimension.getBlockFromRay()`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/dimension#getblockfromray)
- [`ProjectileHitBlockAfterEvent.getBlockHit()`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/projectilehitblockafterevent#getblockhit)

This value tells us where on the block's `minecraft:selection_box` was selected/hit, which is what precise interaction relies on.

## FaceSelectionPlains Class

This class allows you to define 2D areas on a block's face and get the selected plain.

To use this method for precise interaction, create the file `BP/scripts/utils/face_selection_plains.js` and paste the below code into it.


<Spoiler title="FaceSelectionPlains Code">

<CodeHeader>BP/scripts/utils/face_selection_plains.js</CodeHeader>

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
   * @param {{ blockFace: Direction, faceLocation: Record<"x" | "y" | "z", number> }} selection
   *
   * @param {Object} [options] Optionally configure how the selected plain is calculated.
   * @param {boolean} [options.invertU] Horizontal axis extends `right -> left` rather than `left -> right` if true.
   * @param {boolean} [options.invertV] Vertical axis extends `bottom -> top` rather than `top -> bottom` if true.
   *
   * @returns Selected plain ID, or plain index if an ID is not provided. If no plains apply to the selection, `undefined` is returned.
   */
  getSelected(selection, options) {
    const face = selection.blockFace;
    // Create a new object so the original is not mutated
    let location = { ...selection.faceLocation };

    const horizontalAxis = face === Direction.East || face === Direction.West ? "z" : "x";
    const verticalAxis = face === Direction.Up || face === Direction.Down ? "z" : "y";

    if (face !== Direction.Down) location[verticalAxis] = 1 - location[verticalAxis];
    if (face !== Direction.South && face !== Direction.West) location[horizontalAxis] = 1 - location[horizontalAxis];

    if (options?.invertU) location[horizontalAxis] = 1 - location[horizontalAxis];
    if (options?.invertV) location[verticalAxis] = 1 - location[verticalAxis];

    for (let i = 0; i < this.plains.length; i++) {
      const plain = this.plains[i];

      const inHorizontalRange = isInRange(location[horizontalAxis], plain.origin[0] / 16, (plain.origin[0] + plain.size[0]) / 16);
      const inVerticalRange = isInRange(location[verticalAxis], plain.origin[1] / 16, (plain.origin[1] + plain.size[1]) / 16);

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

      - **plains**: `Object[]`<br>
        Array defining the 2D areas on a block's face which may be selected.<br><br>

        - **origin**: `[number, number]`<br>
          [U, V] array defining the offset of the plain from the top left of the block face.<br><br>

        - **size**: `[number, number]`<br>
          [U, V] array defining the size of the plain, extending from the top left.<br><br>

        - **name**?: `string`<br>
          Custom name to easily identify this plain when it is selected.
      
      </Spoiler><br>


-   #### getSelected
      ```ts
      getSelected(selection: { blockFace: Direction; faceLocation: Vector3 }, options?: { invertU?: boolean; invertV?: boolean }): number | string | undefined
      ```

      Returns the involved plain's array index, or name if provided. If no plain is selected, `undefined` is returned.

      <Spoiler title="Parameters">

      - **selection**: `Object`<br>
        Object containing details about the selection.<br><br>

        - **blockFace**: [`Direction`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/direction)<br>
          The selected face of the block.<br><br>

        - **faceLocation**: [`Vector3`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/vector3)<br>
          Selection location relative to the bottom north-west corner of the block.<br><br>

      - **options**?: `Object`<br>
        Optionally configure how the selected plain is calculated.<br><br>

        - **invertU**?: `boolean`<br>
          Horizontal axis goes `right -> left` rather than `left -> right` if true.<br><br>
          
        - **invertV**?: `boolean`<br>
          Vertical axis goes `bottom -> top` rather than `top -> bottom` if true.

      </Spoiler>

### Usage

The below example would split the targeted block face into quarters:

<CodeHeader>BP/scripts/blocks/example.js</CodeHeader>

```js
import { world } from "@minecraft/server";
import FaceSelectionPlains from "../utils/face_selection_plains";

const quadrants = new FaceSelectionPlains(
  { origin: [0, 0], size: [8, 8] },
  { origin: [8, 0], size: [8, 8] },
  { origin: [0, 8], size: [8, 8] },
  { origin: [8, 8], size: [8, 8] }
);
```
<br>

Additionally, names can be provided to easily identify each plain:

```js
const quadrants = new FaceSelectionPlains(
  { origin: [0, 0], size: [8, 8], name: "top_left" },
  { origin: [8, 0], size: [8, 8], name: "top_right" },
  { origin: [0, 8], size: [8, 8], name: "bottom_left" },
  { origin: [8, 8], size: [8, 8], name: "bottom_right" }
);
```
<br>

This could be used with an [`itemUseOn` after event](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemuseonafterevent) to get the selected quadrant:

```js
world.afterEvents.itemUseOn.subscribe((e) => {
  // Do nothing if the targeted block is not "wiki:example_block"
  if (e.block.typeId !== "wiki:example_block") return;

  // Returns the selected area's index (0, 1, 2 or 3), or name if provided (e.g. "top_left").
  // If no plain was selected, `undefined` is retured.
  const selectedQuadrant = quadrants.getSelected(e);

  world.sendMessage(`Quadrant ${selectedQuadrant} was selected!`);
});
```

## SelectionBoxes Class

::: warning
As with the `minecraft:selection_box` and `minecraft:collision_box` components, do not use Blockbench's displayed position values when setting up your SelectionBoxes as they are measured from the north-west, rather than the north-east. Instead, use the origin value from the exported `.geo.json` file.

If you wish to use Blockbench's values, the `invertX` option should be set to true in [`getSelected`](#getselected-1).
:::

This class allows you to define 3D areas in a block and get the box which the face selection lies within.

To use this method for precise interaction, create the file `BP/scripts/utils/selection_boxes.js` and paste the below code into it.

<Spoiler title="SelectionBoxes Code">

<CodeHeader>BP/scripts/utils/selection_boxes.js</CodeHeader>

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
   * @param {Record<"x" | "y" | "z", number>} faceLocation Selection location relative to the bottom north-west corner of the block.
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

      const origin = {
        x: box.origin[0] + 8,
        y: box.origin[1],
        z: box.origin[2] + 8,
      };

      const inXRange = isInRange(location.x, origin.x / 16, (origin.x + box.size[0]) / 16);
      const inYRange = isInRange(location.y, origin.y / 16, (origin.y + box.size[1]) / 16);
      const inZRange = isInRange(location.z, origin.z / 16, (origin.z + box.size[2]) / 16);

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

      - **boxes**: `Object[]`<br>
        Array defining the 3D areas within a block which may be selected.<br><br>

        - **origin**: `[number, number, number]`<br>
          [X, Y, Z] array defining the offset of the box from the block's horizontal middle and vertical bottom in pixels, extending from the north-east.<br><br>

        - **size**: `[number, number, number]`<br>
          [X, Y, Z] array defining the size of the box in pixels, extending from the north-east.<br><br>

        - **name**?: `string`<br>
          Custom name to easily identify this box when it is selected.

      </Spoiler><br>

-    #### getSelected
      ```ts
      getSelected(faceLocation: Vector3, options?: { invertX?: boolean; invertY?: boolean; invertZ?: boolean }): number | string | undefined
      ```
      Get the box which the `faceLocation` lies within.

      Returns the involved box's array index, or name if provided. If no box is selected, `undefined` is returned.

      <Spoiler title="Parameters">

      - **faceLocation**: [`Vector3`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/vector3)<br>
        Selection location relative to the bottom north-west corner of the block.<br><br>

      - **options**?: `Object`<br>
        Optionally configure how the selected box is calculated.<br><br>

        - **invertX**?: `boolean`<br>
          X axis extends `west -> east` rather than `east -> west` if true, following [Blockbench](https://blockbench.net)'s displayed positions.<br><br>
          
        - **invertY**?: `boolean`<br>
          Y axis extends `up -> down` rather than `down -> up` if true.<br><br>

        - **invertZ**?: `boolean`<br>
          Z axis extends `south -> north` rather than `north -> south` if true.

      </Spoiler>


### Usage

The below example would split the targeted block into its vertical halves:

<CodeHeader>BP/scripts/blocks/example.js</CodeHeader>

```js
import { world } from "@minecraft/server";
import SelectionBoxes from "../utils/selection_boxes";

const verticalHalves = new SelectionBoxes(
  { origin: [-8, 8, -8], size: [16, 8, 16], name: "top" },
  { origin: [-8, 0, -8], size: [16, 8, 16], name: "bottom" }
);
```
<br>

This could be used with an [`itemUseOn` after event](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemuseonafterevent) to get the selected box:

```js
world.afterEvents.itemUseOn.subscribe((e) => {
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

<BButton
  link="https://github.com/Bedrock-OSS/wiki-addon/blob/main/ma-precise_interaction/rp/models/blocks/pigeonholes.geo.json"
  color=blue
>Download Pigeonholes Model</BButton>

<Spoiler title="Block JSON">

<CodeHeader>BP/blocks/pigeonholes.json</CodeHeader>

```json
{
  "format_version": "1.20.30",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:pigeonholes",
      "menu_category": {
        "category": "items"
      },
      "traits": {
        "minecraft:placement_direction": {
          "enabled_states": ["minecraft:cardinal_direction"],
          "y_rotation_offset": 180
        }
      },
      "states": {
        "wiki:slot_0_occupied": [false, true],
        "wiki:slot_1_occupied": [false, true],
        "wiki:slot_2_occupied": [false, true],
        "wiki:slot_3_occupied": [false, true],
        "wiki:slot_4_occupied": [false, true],
        "wiki:slot_5_occupied": [false, true]
      }
    },
    "components": {
      "minecraft:destructible_by_mining": {
        "seconds_to_destroy": 1.5
      },
      "minecraft:geometry": {
        "identifier": "geometry.pigeonholes",
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
          "texture": "pigeonholes_empty"
        },
        "occupied_slot": {
          "texture": "pigeonholes_occupied"
        }
      },
      "minecraft:on_interact": {
        // Only allow interaction with the front face
        "condition": "(q.block_face == 2 && q.block_state('minecraft:cardinal_direction') == 'north') || (q.block_face == 3 && q.block_state('minecraft:cardinal_direction') == 'south') || (q.block_face == 4 && q.block_state('minecraft:cardinal_direction') == 'west') || (q.block_face == 5 && q.block_state('minecraft:cardinal_direction') == 'east')",
        "event": "wiki:on_insert"
      }
    },
    "events": {
      "wiki:on_insert": {
        "sequence": [
          {
            "condition": "q.is_item_name_any('slot.weapon.mainhand', 'minecraft:paper')",
            "decrement_stack": {}
          }
        ]
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
import { world, ItemStack } from "@minecraft/server";
import FaceSelectionPlains from "../utils/face_selection_plains"; // Import the FaceSelectionPlains class to use it

// Slot bounds
const slots = new FaceSelectionPlains(
  { origin: [0, 0], size: [6, 8] },
  { origin: [6, 0], size: [5, 8] },
  { origin: [11, 0], size: [5, 8] },
  { origin: [0, 8], size: [6, 8] },
  { origin: [6, 8], size: [5, 8] },
  { origin: [11, 8], size: [5, 8] }
);

const isFrontFace = (block, face) => block.permutation.getState("minecraft:cardinal_direction") === face.toLowerCase();

const isSlotOccupied = (block, slot) => block.permutation.getState(`wiki:slot_${slot}_occupied`);

const occupySlot = (block, slot) => block.setPermutation(block.permutation.withState(`wiki:slot_${slot}_occupied`, true));

// Cancel the use if a slot was not selected, is occupied, or if not interacting with paper
world.beforeEvents.itemUseOn.subscribe((e) => {
  if (e.block.typeId !== "wiki:pigeonholes" || !isFrontFace(e.block, e.blockFace) || (e.itemStack.typeId !== "minecraft:paper" && e.source.isSneaking)) return;

  // Get the selected slot index
  const slot = slots.getSelected(e);

  if (slot === undefined || isSlotOccupied(e.block, slot) || e.itemStack.typeId !== "minecraft:paper") e.cancel = true;
});

// ------------------------------
//    Insert paper on interact
// ------------------------------
world.afterEvents.itemUseOn.subscribe((e) => {
  if (e.block.typeId !== "wiki:pigeonholes" || e.itemStack.typeId !== "minecraft:paper") return;

  // Set block state and play an insert sound. The stack is decremented in the block JSON event.
  occupySlot(e.block, slots.getSelected(e));
  e.source.runCommand(`playsound insert.chiseled_bookshelf @a ${Object.values(e.block.location).join(" ")}`);
});

// ------------------------------
//  Release paper on destruction
// ------------------------------
function releasePaper(e) {
  // Get the number of states with the value `true`. This is the amount of paper stored in the block
  const storageAmount = Object.values((e.brokenBlockPermutation ?? e.explodedBlockPermutation).getAllStates()).filter((v) => v === true).length;

  // If no paper is stored, stop here
  if (storageAmount === 0) return;

  // Centre loot in block
  const lootLocation = {
    x: e.block.location.x + 0.5,
    y: e.block.location.y + 0.5,
    z: e.block.location.z + 0.5,
  };

  // Create an item entity for every stored paper
  for (let i = 0; i < storageAmount; i++) {
    e.block.dimension.spawnItem(new ItemStack("minecraft:paper"), lootLocation);
  }
}

// Release paper on block break and explode
world.afterEvents.playerBreakBlock.subscribe((e) => {
  if (e.brokenBlockPermutation.type.id !== "wiki:pigeonholes") return;
  releasePaper(e);
});
world.afterEvents.blockExplode.subscribe((e) => {
  if (e.explodedBlockPermutation.type.id !== "wiki:pigeonholes") return;
  releasePaper(e);
});
```

</Spoiler>

## Double Flower Pot Example

Using our [SelectionBoxes](#selectionboxes-class) class, the player can interact with each pot separately. The following files are the basis for implementing a new Double Flower Pot block, other assets (textures etc.) are included in the [example pack](#download-example-pack).

**Note**: The pots in this example only support the planting of dandelions and cacti for simplicity - you could expand this further yourself.

![Double Flower Pot Showcase](/assets/images/blocks/precise-interaction/double_flower_pot.png)

<BButton
  link="https://github.com/Bedrock-OSS/wiki-addon/blob/main/ma-precise_interaction/rp/models/blocks/double_flower_pot.geo.json"
  color=blue
>Download Double Flower Pot Model</BButton>

<Spoiler title="Block JSON">

<CodeHeader>BP/blocks/double_flower_pot.json</CodeHeader>

```json
{
  "format_version": "1.20.30",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:double_flower_pot",
      "menu_category": {
        "category": "items"
      },
      "states": {
        "wiki:axis": ["x", "z"],
        "wiki:pot_0_plant": ["none", "dandelion", "cactus"],
        "wiki:pot_1_plant": ["none", "dandelion", "cactus"]
      }
    },
    "components": {
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
          "texture": "double_flower_pot_dirt", // Apply a darker tint to the dirt texture to replicate vanilla potted dirt
          "render_method": "alpha_test",
          "ambient_occlusion": false
        },
        "handle": {
          "texture": "double_flower_pot_handle",
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
      },
      "minecraft:on_player_placing": {
        "event": "wiki:set_axis"
      },
      "minecraft:on_interact": {
        "condition": "!q.is_sneaking && q.is_item_name_any('slot.weapon.mainhand', 'minecraft:yellow_flower', 'minecraft:cactus')", // Only trigger with valid plants
        "event": "wiki:on_plant"
      }
    },
    "events": {
      "wiki:set_axis": {
        "set_block_state": {
          "wiki:axis": "Math.floor((q.cardinal_facing_2d - 2) / 2) == 1 ? 'z' : 'x'"
        }
      },
      "wiki:on_plant": {
        "decrement_stack": {}
      }
    },
    "permutations": [
      {
        "condition": "q.block_state('wiki:axis') == 'z'",
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
import { world, ItemStack } from "@minecraft/server";
import SelectionBoxes from "../utils/selection_boxes"; // Import the SelectionBoxes class to use it

// Support orientation along both horizontal axes
const pots = {
  x: new SelectionBoxes({ origin: [-7, 0, -3], size: [6, 6, 6] }, { origin: [1, 0, -3], size: [6, 6, 6] }),
  z: new SelectionBoxes({ origin: [-3, 0, -7], size: [6, 6, 6] }, { origin: [-3, 0, 1], size: [6, 6, 6] }),
};

// The state value and sound associated with each plant
const plants = {
  "minecraft:yellow_flower": {
    value: "dandelion",
    sound: "dig.grass",
  },
  "minecraft:cactus": {
    value: "cactus",
    sound: "dig.cloth",
  },
};

// Get the selected pot for the appropriate axis
const getSelectedPot = (e) => pots[e.block.permutation.getState("wiki:axis")].getSelected(e.faceLocation);

const isPotOccupied = (block, pot) => block.permutation.getState(`wiki:pot_${pot}_plant`) !== "none";

const setPotPlant = (block, pot, plant) => block.setPermutation(block.permutation.withState(`wiki:pot_${pot}_plant`, plant));

// Our flower pots even have sound effects!
const playPlantSound = (dimension, location, sound) => dimension.runCommand(`playsound ${sound} @a ${location.x} ${location.y} ${location.z} 0.5`);

// If a pot is not selected (the inbetween area is targeted) or is already filled, the item use is cancelled.
world.beforeEvents.itemUseOn.subscribe((e) => {
  if (e.block.typeId !== "wiki:double_flower_pot" || !plants[e.itemStack.typeId]) return;

  const selectedPot = getSelectedPot(e);

  if (selectedPot === undefined || isPotOccupied(e.block, selectedPot)) e.cancel = true;
});

// -------------------------------
//    Plant in the selected pot
// -------------------------------
world.afterEvents.itemUseOn.subscribe((e) => {
  if (e.block.typeId !== "wiki:double_flower_pot" || !plants[e.itemStack.typeId] || e.source.isSneaking) return;

  const selectedPot = getSelectedPot(e);
  const plant = plants[e.itemStack.typeId];

  setPotPlant(e.block, selectedPot, plant.value);
  playPlantSound(e.block.dimension, e.block.location, plant.sound);
});

// -------------------------------
//  Release plants on destruction
// -------------------------------
function releasePlants(e) {
  const states = (e.brokenBlockPermutation ?? e.explodedBlockPermutation).getAllStates();

  // Array of plant state values e.g. ["cactus", "dandelion"]
  const storedPlants = Object.entries(states)
    .filter(([state, value]) => state.startsWith("wiki:pot") && value !== "none")
    .map(([state, value]) => value);

  if (storedPlants.length === 0) return;

  // Centre loot in block
  const lootLocation = {
    x: e.block.location.x + 0.5,
    y: e.block.location.y + 0.5,
    z: e.block.location.z + 0.5,
  };

  // Create an item entity for every potted plant
  for (const plant of storedPlants) {
    const plantId = Object.keys(plants).find((key) => plants[key].value === plant);

    e.dimension.spawnItem(new ItemStack(plantId), lootLocation);
    playPlantSound(e.dimension, e.block.location, plants[plantId].sound);
  }
}

world.afterEvents.playerBreakBlock.subscribe((e) => {
  if (e.brokenBlockPermutation.type.id === "wiki:double_flower_pot") releasePlants(e);
});
world.afterEvents.blockExplode.subscribe((e) => {
  if (e.explodedBlockPermutation.type.id === "wiki:double_flower_pot") releasePlants(e);
});
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
      "version": [1, 0, 0]
    }
  ],
  "dependencies": [
    {
      "module_name": "@minecraft/server",
      "version": "1.6.0-beta"
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

Template pack made according to this tutorial, adding the Pigeonholes and Double Flower Pot blocks into the `Items` tab.

<BButton
  link="https://github.com/Bedrock-OSS/wiki-addon/releases/download/download/precise_interaction.mcaddon"
  color=blue
>Download MCADDON</BButton>

If you require extra assistance with precise interaction, feel free to ask in the [Bedrock Add-Ons Discord](/discord)! Remember to include a link to this page in your question, as the classes provided here are not built into Minecraft.

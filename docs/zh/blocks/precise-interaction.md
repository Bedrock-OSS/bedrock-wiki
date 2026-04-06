---
title: 精确交互
description: 了解如何与同一方块的不同部分进行交互。
category: 教程
tags:
    - expert
    - scripting
license: true
mentions:
    - QuazChick
    - SmokeyStack
hidden: true
---

::: tip 格式版本 1.26.10
本教程假设你对方块和脚本有高级理解。
在开始之前请查看[方块](/blocks/blocks-intro)和[脚本](/scripting/scripting-intro)指南。
:::

::: danger [MCPE-223452](https://bugs.mojang.com/browse/MCPE-223452)
许多事件的 `faceLocation` 属性存在问题，使得它并不总是相对于方块世界位置中的西北底角。
因此，精确交互无法正常工作，以下方法在bug修复前不应使用。
:::

创建玩家可以交互的自定义方块可以实现得非常基础，但仍然允许复杂的功能。然而，有时候默认的交互模式（基于简单地右键或点击方块，没有位置特定的条件）不足以实现所需的功能。

例如，如果你想创建一个方块在一侧有多个按钮，每个触发不同的动作？或者一个分段显示，其中多个单独点亮的灯可以包含在一个方块中？

这就是精确交互的用武之地！以下精确交互方法允许你定义方块中可单独交互的多个区域，并为每个区域分配不同的功能。在本教程中，我们将向你展示如何使用脚本为你的方块添加精确交互，并提供每种方法的示例。

**注意：** 精确交互不能使方块具有多个/自定义形状的 [`minecraft:selection_box`](/blocks/block-components#选择框) 组件。精确交互要正常工作，选择框必须在所有定义区域内。

![展示鸽子窝和双花盆方块的示例图片](/assets/images/blocks/precise-interaction/showcase.png)

## 工作原理

提供的精确交互方法使用 `faceLocation`，这是[玩家交互事件](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/blockcomponentplayerinteractevent)的一个属性。

这个值告诉我们 `minecraft:selection_box` 的哪个部分被选择/点击，这正是精确交互所依赖的。

## FaceSelectionPlains 类

此类允许你定义方块面上的2D区域并获取选中的平面。

要使用此方法进行精确交互，创建文件 `BP/scripts/utilities/face_selection_plains.js` 并将以下代码粘贴到其中。

<Spoiler title="FaceSelectionPlains 代码">

<CodeHeader>BP/scripts/utilities/face_selection_plains.js</CodeHeader>

```js
import { Direction } from "@minecraft/server";

const isInRange = (value, min, max) => value >= min && value <= max;

export default class FaceSelectionPlains {
    /**
     * 允许你定义方块面上的2D区域并获取选中的平面。
     *
     * @param {Object[]} plains 分散数组，定义方块面上可能被选择的2D区域。
     * @param {[number, number]} plains[].origin [U, V] 数组，定义平面相对于方块面左上角的偏移（像素）。
     * @param {[number, number]} plains[].size [U, V] 数组，定义从左上角延伸的平面大小（像素）。
     * @param {string} [plains[].name] 自定义名称，以便在选中时轻松识别此平面。
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
     * @param {boolean} [options.invertU] 水平轴如果为true则从 `right -> left` 而不是 `left -> right`。
     * @param {boolean} [options.invertV] 垂直轴如果为true则从 `bottom -> top` 而不是 `top -> bottom`。
     *
     * @returns 选中的平面ID，或如果未提供ID则返回平面索引。如果没有平面适用于选择，返回 `undefined`。
     */
    getSelected(selection, options) {
        const { face, faceLocation } = selection;

        // 创建一个新对象，以免修改原始对象
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

### 方法

-   #### constructor

    ```ts
    new FaceSelectionPlains(...plains: { origin: [number, number]; size: [number, number]; name?: string }[])
    ```

    创建新的 `FaceSelectionPlains` 实例。

      <Spoiler title="参数">

    -   **plains**: `Object[]`

        定义方块面上可能被选择的2D区域的数组。

        -   **origin**: `[number, number]`

            [U, V] 数组，定义平面相对于方块面左上角的偏移。

        -   **size**: `[number, number]`

            [U, V] 数组，定义从左上角延伸的平面大小。

        -   **name**?: `string`

            自定义名称，以便在选中时轻松识别此平面。

      </Spoiler>

-   #### getSelected

    ```ts
    getSelected(selection: { face: Direction; faceLocation: Vector3 }, options?: { invertU?: boolean; invertV?: boolean }): number | string | undefined
    ```

    返回涉及的平面的数组索引，或名称（如果提供）。如果没有选择平面，返回 `undefined`{lang=js}。

      <Spoiler title="参数">

    -   **selection**: `Object`

        包含选择详情的对象。

        -   **face**: [`Direction`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/direction)

            方块被选择的面。

        -   **faceLocation**: [`Vector3`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/vector3)

            选择位置相对于方块西北底角。

    -   **options**?: `Object`

        可选配置如何计算选中的平面。

        -   **invertU**?: `boolean`

            水平轴如果为true则从 `right -> left` 而不是 `left -> right`。

        -   **invertV**?: `boolean`

            垂直轴如果为true则从 `bottom -> top` 而不是 `top -> bottom`。

      </Spoiler>

### 用法

以下示例将目标方块面分成四等份：

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

此外，可以提供名称以轻松识别每个平面：

```js
const quadrants = new FaceSelectionPlains(
    { origin: [0, 0], size: [8, 8], name: "top_left" },
    { origin: [8, 0], size: [8, 8], name: "top_right" },
    { origin: [0, 8], size: [8, 8], name: "bottom_left" },
    { origin: [8, 8], size: [8, 8], name: "bottom_right" }
);
```

这可以用于[自定义组件](/blocks/block-events)中获取选中的象限：

```js
const BlockQuadrantInteractionComponent = {
    onPlayerInteract({ block, face, faceLocation }) {
        // 返回选中的区域索引（0、1、2或3），或如果提供名称则返回名称（例如 "top_left"）。
        // 如果没有选择平面，返回 `undefined`。
        const selectedQuadrant = quadrants.getSelected({
            face,
            faceLocation,
        });

        world.sendMessage(`Quadrant ${selectedQuadrant} was selected!`);
    },
};
```

## SelectionBoxes 类

::: warning
与 `minecraft:selection_box` 和 `minecraft:collision_box` 组件一样，在设置 SelectionBoxes 时不要使用 Blockbench 显示的位置值，因为它们是从西北角而不是东北角测量的。而是使用导出的 `.geo.json` 文件中的 origin 值。

如果你想使用 Blockbench 的值，应在 [`getSelected`](#getselected-1) 中设置 `invertX` 选项为 true。
:::

此类允许你定义方块中的3D区域并获取面选择所在的框。

要使用此方法进行精确交互，创建文件 `BP/scripts/utilities/selection_boxes.js` 并将以下代码粘贴到其中。

<Spoiler title="SelectionBoxes 代码">

<CodeHeader>BP/scripts/utilities/selection_boxes.js</CodeHeader>

```js
const isInRange = (value, min, max) => value >= min && value <= max;

export default class SelectionBoxes {
    /**
     * 允许你定义方块中的3D区域并获取面选择所在的框。
     *
     * @param {Object[]} boxes 定义方块内可能被选择的3D区域的数组。
     * @param {[number, number, number]} boxes[].origin [X, Y, Z] 数组，定义盒子从方块水平中间和垂直底部偏移（像素），从东北角延伸。
     * @param {[number, number, number]} boxes[].size [X, Y, Z] 数组，定义盒子的大小（像素），从东北角延伸。
     * @param {string} [boxes[].name] 自定义名称，以便在选中时轻松识别此盒子。
     */
    constructor(...boxes) {
        this.boxes = boxes;
    }
    /**
     * 获取 `faceLocation` 所在的框。
     *
     * @param {import("@minecraft/server").Vector3} faceLocation 选择位置相对于方块西北底角。
     *
     * @param {Object} [options] 可选配置如何计算选中的框。
     * @param {boolean} [options.invertX] X轴如果为true则从 `west -> east` 而不是 `east -> west`，遵循 [Blockbench](https://blockbench.net) 显示的位置。
     * @param {boolean} [options.invertY] Y轴如果为true则从 `up -> down` 而不是 `down -> up`。
     * @param {boolean} [options.invertZ] Z轴如果为true则从 `south -> north` 而不是 `north -> south`。
     *
     * @returns {(string|number|undefined)} 选中的盒子名称，或如果未提供名称则返回盒子索引。如果没有盒子适用于选择，返回 undefined。
     */
    getSelected(faceLocation, options) {
        // 创建一个新对象，以免修改原始对象
        let location = { ...faceLocation };

        // X被反转以确保测量相对于东北底角
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

### 方法

-   #### constructor

    ```ts
    new SelectionBoxes(...boxes: { origin: [number, number, number]; size: [number, number, number]; name?: string }[])
    ```

    创建新的 `SelectionBoxes` 实例。

      <Spoiler title="参数">

    -   **boxes**: `Object[]`

        定义方块内可能被选择的3D区域的数组。

        -   **origin**: `[number, number, number]`

            [X, Y, Z] 数组，定义盒子从方块水平中间和垂直底部偏移（像素），从东北角延伸。

        -   **size**: `[number, number, number]`

            [X, Y, Z] 数组，定义盒子的大小（像素），从东北角延伸.br>

        -   **name**?: `string`

            自定义名称，以便在选中时轻松识别此盒子。

      </Spoiler>

-   #### getSelected

    ```ts
    getSelected(faceLocation: Vector3, options?: { invertX?: boolean; invertY?: boolean; invertZ?: boolean }): number | string | undefined
    ```

    获取 `faceLocation` 所在的盒子。

    返回涉及的盒子的数组索引，或名称（如果提供）。如果没有选择盒子，返回 `undefined`{lang=js}。

      <Spoiler title="参数">

    -   **faceLocation**: [`Vector3`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/vector3)

        选择位置相对于方块西北底角。

    -   **options**?: `Object`

        可选配置如何计算选中的盒子。

        -   **invertX**?: `boolean`

            X轴如果为true则从 `west -> east` 而不是 `east -> west`，遵循 [Blockbench](https://blockbench.net) 显示的位置。

        -   **invertY**?: `boolean`

            Y轴如果为true则从 `up -> down` 而不是 `down -> up`。

        -   **invertZ**?: `boolean`

            Z轴如果为true则从 `south -> north` 而不是 `north -> south`。

      </Spoiler>

### 用法

以下示例将目标方块分成其垂直两半：

<CodeHeader>BP/scripts/blocks/example.js</CodeHeader>

```js
import { world } from "@minecraft/server";
import SelectionBoxes from "../utilities/selection_boxes";

const verticalHalves = new SelectionBoxes(
    { origin: [-8, 8, -8], size: [16, 8, 16], name: "top" },
    { origin: [-8, 0, -8], size: [16, 8, 16], name: "bottom" }
);
```

这可以与 [`playerInteractWithBlock` after event](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockafterevent) 一起使用来获取选中的盒子：

```js
world.afterEvents.playerInteractWithBlock.subscribe((e) => {
    // 如果目标方块不是 "wiki:example_block" 则不执行任何操作
    if (e.block.typeId !== "wiki:example_block") return;

    // 返回选中的垂直半（"top" 或 "bottom"）。
    const selectedVerticalHalf = verticalHalves.getSelected(e.faceLocation);

    world.sendMessage(`The ${selectedVerticalHalf} of the block was selected!`);
});
```

## 鸽子窝示例

使用我们的 [FaceSelectionPlains](#faceselectionplains-class) 类，我们可以创建一个功能类似于书架的方块。其他资产（纹理等）包含在[示例包](#下载示例包)中。

与纸交互将填充选中的槽位。破坏方块会释放所有存储的纸物品。

![鸽子窝展示](/assets/images/blocks/precise-interaction/pigeonholes.png)

<Button link="https://github.com/Bedrock-OSS/bedrock-examples/blob/main/resources/precise_interaction/rp/models/blocks/pigeonholes.geo.json">
    下载鸽子窝模型
</Button>

<Spoiler title="方块 JSON">

<CodeHeader>BP/blocks/pigeonholes.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
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
                    // 显示每个槽位为空/占用
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
                // 模型中定义的材质实例：
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
            // 朝北
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'north'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 0, 0] }
                }
            },
            // 朝西
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'west'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 90, 0] }
                }
            },
            // 朝南
            {
                "condition": "q.block_state('minecraft:cardinal_direction') == 'south'",
                "components": {
                    "minecraft:transformation": { "rotation": [0, 180, 0] }
                }
            },
            // 朝东
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

<Spoiler title="精确交互脚本">

<CodeHeader>BP/scripts/blocks/pigeonholes.js</CodeHeader>

```js
import { system, EquipmentSlot, GameMode, ItemStack } from "@minecraft/server";
import FaceSelectionPlains from "../utilities/face_selection_plains"; // 导入 FaceSelectionPlains 类以使用它

// 槽位边界
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
//  破坏时释放纸
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

## 双花盆示例

使用我们的 [SelectionBoxes](#selectionboxes-class) 类，玩家可以分别与每个花盆交互。以下文件是实现新双花盆方块的基础，其他资产（纹理等）包含在[示例包](#下载示例包)中。

**注意**：此示例中的花盆只支持种植蒲公英和仙人掌以保持简单，你可以自己进一步扩展。

![双花盆展示](/assets/images/blocks/precise-interaction/double_flower_pot.png)

<Button link="https://github.com/Bedrock-OSS/bedrock-examples/blob/main/resources/precise_interaction/rp/models/blocks/double_flower_pot.geo.json">
    下载双花盆模型
</Button>

<Spoiler title="方块 JSON">

<CodeHeader>BP/blocks/double_flower_pot.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
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
            // 这必须覆盖精确交互脚本中的所有框
            "minecraft:selection_box": {
                "origin": [-7, 0, -3],
                "size": [14, 6, 6]
            },
            "minecraft:geometry": {
                "identifier": "geometry.double_flower_pot",
                // 有条件地在花盆中显示植物
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
                // 模型中定义的材质实例：
                "dirt": {
                    "texture": "wiki:double_flower_pot_dirt", // 应用较暗的色调到泥土纹理以复制 vanilla 花盆泥土
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
                    "minecraft:transformation": { "rotation": [0, 90, 0] } // 模型正面朝东
                }
            }
        ]
    }
}
```

</Spoiler>

<Spoiler title="精确交互脚本">

<CodeHeader>BP/scripts/blocks/double_flower_pot.js</CodeHeader>

```js
import { system, ItemStack, EquipmentSlot, GameMode } from "@minecraft/server";
import SelectionBoxes from "../utilities/selection_boxes"; // 导入 SelectionBoxes 类以使用它

// 支持沿两个水平轴的朝向
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

// 每个植物关联的状态值和声音
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

// 获取适当轴的选中花盆
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
//  破坏时释放植物
// -------------------------------
function releasePlants({ block, brokenBlockPermutation, dimension }) {
    const states = brokenBlockPermutation.getAllStates();

    // 植物状态值数组，例如 ["cactus", "dandelion"]
    const storedPlants = Object.entries(states)
        .filter(([state, value]) => state.startsWith("wiki:pot") && value !== "none")
        .map(([state, value]) => value);

    if (storedPlants.length === 0) return;

    // 为每个花盆植物创建物品实体
    for (const plant of storedPlants) {
        const plantId = Object.keys(plants).find((key) => plants[key].value === plant);

        dimension.spawnItem(new ItemStack(plantId), block.center());
    }
}
```

</Spoiler>

## 导入脚本

别忘了将你的脚本导入到包的入口文件！

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "modules": [
        {
            "type": "script",
            "language": "javascript",
            "entry": "index.js", // 你定义的入口文件
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
// 在这里导入你的精确交互脚本...
import "./blocks/pigeonholes";
import "./blocks/double_flower_pot";
```

## 下载示例包

根据本教程制作的模板包，将鸽子窝和双花盆方块添加到"物品"标签页。

<Button link="https://github.com/Bedrock-OSS/bedrock-examples/releases/download/download/precise_interaction.mcaddon">
    下载 MCADDON
</Button>

如果你需要精确交互方面的额外帮助，欢迎在 [Bedrock Add-Ons Discord](/discord) 中提问！
请记得在你的问题中包含此页面的链接，因为这里提供的类不是 Minecraft 内置的。
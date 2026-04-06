---
title: 斜向朝向
example: intercardinal_block_orientation
description: 了解如何制作一个可以面向斜向方向的方块，如生物头颅和告示牌。
category: 教程
tags:
    - intermediate
    - scripting
license: true
mentions:
    - QuazChick
    - SmokeyStack
---

::: tip 格式版本 1.26.10
本教程假设你对方块和脚本有很好的理解。
在开始之前请查看[方块指南](/blocks/blocks-intro)。
:::

本教程将引导你制作一个可以面向16个斜向方向中任何一个的方块，如生物头颅和告示牌，并提供本教程中"mug"方块的这种[方块朝向](/blocks/block-orientation)示例。

<WikiImage
    src="showcase.png"
    alt="Custom mug blocks placed in different directions on a table"
    width="500"
/>

## 初始方块 JSON

在将斜向方向实现到你的方块之前，你需要为你的方块定义创建一个 JSON 文件。

这是我们将在本教程中从"mug"方块开始的 JSON：

<CodeHeader>BP/blocks/mug.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:mug",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            // 碰撞和选择框
            "minecraft:collision_box": {
                "origin": [-3, 0, -3],
                "size": [6, 8, 6]
            },
            "minecraft:selection_box": {
                "origin": [-3, 0, -3],
                "size": [6, 8, 6]
            },
            // 视觉效果
            "minecraft:destruction_particles": {
                "particle_count": 48
            },
            "minecraft:material_instances": {
                "*": { "texture": "wiki:mug" }
            }
        }
    }
}
```

如你所见，方块目前缺少允许朝向的几何和置换。
让我们修复它！

## 定义方向状态

由于 Minecraft 没有为自定义方块提供内置的斜向方向状态，我们必须创建自己的。

本教程中的状态基于用于 vanilla 横幅和告示牌朝向的 `ground_sign_direction` 状态，并具有以下值：

|           值 | 方向       |
| --------------: | --------------- |
|  `0`{lang=json} | 南           |
|  `1`{lang=json} | 西南偏南 |
|  `2`{lang=json} | 西南       |
|  `3`{lang=json} | 西南偏西  |
|  `4`{lang=json} | 西            |
|  `5`{lang=json} | 西北偏西  |
|  `6`{lang=json} | 西北       |
|  `7`{lang=json} | 西北偏北 |
|  `8`{lang=json} | 北           |
|  `9`{lang=json} | 东北偏北 |
| `10`{lang=json} | 东北       |
| `11`{lang=json} | 东北偏东  |
| `12`{lang=json} | 东            |
| `13`{lang=json} | 东南偏东  |
| `14`{lang=json} | 东南       |
| `15`{lang=json} | 东南偏南 |

如上所示，我们需要定义一个支持从 `0`{lang=json} 到 `15`{lang=json} 整数值的[方块状态](/blocks/block-states)。
在本教程中，该状态将称为 `wiki:intercardinal_direction`。
与往常一样，确保你将 `wiki` 更改为你自己的命名空间！

<CodeHeader>minecraft:block > description</CodeHeader>

```json
"states": {
    "wiki:intercardinal_direction": {
        "values": { "min": 0, "max": 15 }
    }
}
```

## 设置方向状态

现在我们需要一种方法来在玩家放置方块之前将 `wiki:intercardinal_direction` 状态设置为正确的值。

为此，我们可以使用脚本计算方向值，并使用自定义组件中的 `beforeOnPlayerPlace()`{lang=js} 事件钩子更新正在放置的方块置换。

### 计算方向值

以下是我们将用于将玩家旋转转换为从 `0`{lang=js} 到 `15`{lang=js} 的斜向方向的函数。

<CodeHeader>BP/scripts/intercardinalOrientation.js</CodeHeader>

```js
/** @param {number} yRotation */
function getIntercardinalDirection(yRotation) {
    // 将Y旋转转换为低于360的正角度
    yRotation %= 360;
    if (yRotation < 0) yRotation += 360;

    // 将Y旋转作为低于16的斜向方向返回
    return Math.round(yRotation / 22.5) % 16;
}
```

### 朝向自定义组件

现在让我们创建一个使用 `getIntercardinalDirection()`{lang=js} 函数将方块设置为正确方向置换的自定义组件。

<CodeHeader>BP/scripts/intercardinalOrientation.js</CodeHeader>

```js
import { system } from "@minecraft/server";

// 确保你将 "wiki" 更改为你自己的命名空间！
const stateName = "wiki:intercardinal_direction";
const componentName = "wiki:intercardinal_orientation";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockIntercardinalOrientationComponent = {
    beforeOnPlayerPlace(event, { params }) {
        const { player } = event;
        if (!player) return;

        // 获取在方块JSON中定义的 "y_rotation_offset" 值（默认为0）并将其添加到玩家的Y旋转
        const yRotationOffset = params.y_rotation_offset ?? 0;
        const yRotation = player.getRotation().y + yRotationOffset;

        // 从玩家的Y旋转获取斜向方向值（0-15）
        const direction = getIntercardinalDirection(yRotation);

        // 更新正在放置的方块置换
        event.permutationToPlace = event.permutationToPlace.withState(stateName, direction);
    },
};

// 使用名称 "wiki:intercardinal_orientation" 注册自定义组件。
system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        componentName,
        BlockIntercardinalOrientationComponent
    );
});
```

注意到这个自定义组件有一个额外的 `y_rotation_offset` 参数了吗？
这个参数将允许我们以与玩家有偏移的方式定位方块，就像[放置方向](/blocks/block-traits#放置方向)方块特性中的等效参数一样。

没有这个参数，方块放置时将面向与玩家相同的方向，意味着方块的背面将面向玩家。
通过将参数设为 `180`{lang=json}，方块的正面（方块模型的北面）将在放置时面向玩家。

让我们在方块的 `components` 中应用自定义组件：

<CodeHeader>BP/blocks/mug.json</CodeHeader>

```json
"wiki:intercardinal_orientation": {
    "y_rotation_offset": 180 // 面向玩家
}
```

## 方块模型

通常，[变换](/blocks/block-components#变换)组件用于旋转方块以匹配其方向，但是此组件仅支持90度倍数 的角度。
为了允许用于斜向旋转的22.5度间隔，你的方块模型需要一些额外的骨骼。

斜向朝向了需要四个骨骼，每个都有不同的Y轴旋转：

-   `0`{lang=json}
-   `22.5`{lang=json}
-   `45`{lang=json}
-   `67.5`{lang=json}

**这些旋转是从上方看模型时顺时针方向的。**

### 基本骨骼

首先，你需要创建一个没有旋转的骨骼，模型正面朝北。
在本教程中，每个骨骼以其Y旋转命名，意味着这个骨骼应该有名称 `0`，因为它旋转了0度。

当方块面向基本方向时（当 `wiki:intercardinal_direction` 是 `0`{lang=json}、`4`{lang=json}、`8`{lang=json} 或 `12`{lang=json}），这个骨骼将是可见的。
在此阶段，你模型的所有立方体必须是此骨骼的直接子级，不能包含在子骨骼中。

![](model_bone_0.png)

### 斜向骨骼

现在你需要将此骨骼复制三次，剩余的旋转值（`22.5`{lang=json}、`45`{lang=json} 和 `67.5`{lang=json}）。
这些复制骨骼用于在方块旋转到斜向方向时使用。

:::tip
你可以在 Blockbench 中通过选择骨骼并按 Ctrl + D 来复制骨骼。

将每个骨骼的支点设置为 `[0, 0, 0]`{lang=json}，这样它的旋转就围绕方块中心。
:::

作为参考，以下是"mug"方块的最终模型外观。小心，它现在还不漂亮！

![](model_bones.png)

## 应用方块旋转

### 骨骼可见性

并非你模型中的所有骨骼都应该可见，因此我们使用[几何](/blocks/block-components#几何)组件中的 `bone_visibility` 参数来确保只渲染需要的骨骼。

将以下组件添加到你的方块：

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": {
    "identifier": "geometry.mug", // 上一步创建的模型
    "bone_visibility": {
        "0": "math.mod(q.block_state('wiki:intercardinal_direction'), 4) == 0",
        "22.5": "math.mod(q.block_state('wiki:intercardinal_direction'), 4) == 1",
        "45": "math.mod(q.block_state('wiki:intercardinal_direction'), 4) == 2",
        "67.5": "math.mod(q.block_state('wiki:intercardinal_direction'), 4) == 3"
    }
}
```

### 置换条目

现在，使用[`置换`](/blocks/block-permutations)数组通过将以下内容插入你的方块 JSON（按所示顺序）来定义方块的基本旋转：

<CodeHeader>minecraft:block</CodeHeader>

```json
"permutations": [
    {
        "condition": "q.block_state('wiki:intercardinal_direction') >= 0",
        "components": {
            "minecraft:transformation": { "rotation": [0, 180, 0] }
        }
    },
    {
        "condition": "q.block_state('wiki:intercardinal_direction') >= 4",
        "components": {
            "minecraft:transformation": { "rotation": [0, 90, 0] }
        }
    },
    {
        "condition": "q.block_state('wiki:intercardinal_direction') >= 8",
        "components": {
            "minecraft:transformation": { "rotation": [0, 0, 0] }
        }
    },
    {
        "condition": "q.block_state('wiki:intercardinal_direction') >= 12",
        "components": {
            "minecraft:transformation": { "rotation": [0, -90, 0] }
        }
    }
]
```

## 最终方块 JSON 和脚本

上述步骤后的方块 JSON 和脚本文件应与以下内容类似：

<Spoiler title="Mug 示例方块 JSON">

<ExampleFile path="BP/blocks/mug.json" />

</Spoiler>

<Spoiler title="斜向朝向脚本">

<ExampleFile path="BP/scripts/intercardinalOrientation.js" />

</Spoiler>

记得将脚本导入到你的入口文件！

<ExampleFile path="BP/scripts/index.js" />

## 结果

你已创建的内容：

-   [x] 支持斜向方向的方块模型
-   [x] 支持16个方向状态值的方块
-   [x] 可用于设置方向状态的自定义组件

<WikiImage
    src="directions.png"
    alt="Custom mug blocks in a square formation, each pointing towards the middle"
    width="500"
/>
---
title: 方块事件
description: 方块事件在满足某些条件时触发。创作者可以钩入这些事件，以便在事件触发时修改游戏世界。
category: 通用
nav_order: 8
tags:
    - scripting
license: true
mentions:
    - SirLich
    - solvedDev
    - yanasakana
    - MedicalJewel105
    - aexer0e
    - SmokeyStack
    - TheDoctor15
    - XxPoggyisLitxX
    - TheItsNameless
    - ThomasOrs
    - QuazChick
    - VactricaKing
    - BlazeDrake
---

:::tip 格式版本 1.26.10
创建自定义方块时使用最新格式版本可以访问最新功能和改进。
wiki目前针对格式版本1.26.10，旨在分享关于自定义方块的最新信息。
:::

## 注册自定义组件

方块事件在满足某些条件时触发，可以在世界加载前在脚本中注册的**自定义组件**中"监听"这些事件。

在每个自定义组件中，列出了事件处理函数（如 [`beforeOnPlayerPlace()`{lang=js}](#玩家放置前)），用于配置每个事件触发时你希望发生的事情。

_此示例阻止非创造模式的玩家放置方块：_

<CodeHeader>BP/scripts/creativeModeOnly.js</CodeHeader>

```js
import { system, GameMode } from "@minecraft/server"; // 必须是2.0.0或更高版本

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockCreativeModeOnlyComponent = {
    beforeOnPlayerPlace(event) {
        const gameMode = event.player?.getGameMode();

        if (gameMode !== GameMode.Creative) {
            event.cancel = true;
        }
    },
};

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "wiki:creative_mode_only",
        BlockCreativeModeOnlyComponent
    );
});
```

## 应用自定义组件

要将自定义组件绑定到方块，只需在你的方块JSON的 `components` 中列出它。

与普通组件一样，自定义组件可以根据方块的[置换](/blocks/block-permutations)添加和删除。

_需要格式版本 [1.21.90](/blocks/block-format-history#_1-21-90) 或更高版本。_

<CodeHeader>minecraft:block</CodeHeader>

```json
"components": {
    "wiki:creative_mode_only": {}
}
```

## 事件列表

### 玩家放置前

在玩家放置方块前调用，阻止方块的客户端放置。

<CodeHeader>自定义组件</CodeHeader>

```js
beforeOnPlayerPlace(event) {
    event.block // 受此事件影响的方块。这是将被替换的方块。
    event.cancel // 如果设为true，取消方块放置事件。
    event.dimension // 包含该方块的维度。
    event.face // 被放置到的方块面。
    event.permutationToPlace // 将被放置的方块置换。可以更改以放置不同的置换。
    event.player // 放置此方块的玩家。可能未定义。
}
```

### 破坏

每当方块从世界中移除时调用，包括通过命令替换时。

<CodeHeader>自定义组件</CodeHeader>

```js
onBreak(event) {
    event.block // 受此事件影响的方块。这是破坏后的方块。
    event.dimension // 包含该方块的维度。
    event.blockDestructionSource // 破坏该方块的方块（如延长的活塞）。可能未定义。
    event.brokenBlockPermutation // 破坏前方块的置换。
    event.entitySource // 破坏该方块的实体。可能未定义。
}
```

### 实体

当实体在方块上执行事件时调用。

事件可以通过 `execute_event_on_home_block` 实体事件响应或通过 vanilla 实体组件触发（见 [vanilla 实体事件](#vanilla-实体事件)）。
实体不一定会在请求执行事件的同一tick收到此钩子。

<CodeHeader>自定义组件</CodeHeader>

```js
onEntity(event) {
    event.block // 受此事件影响的方块。
    event.blockPermutation // 实体最初影响方块时的方块置换。
    event.dimension // 包含该方块的维度。
    event.entitySource // 在方块上执行事件的实体。
    event.name // 实体执行的事件名称。可能是自定义的或下面列出的 vanilla 事件之一。
}
```

#### Vanilla 实体事件

| 事件名称              | 所需实体组件             | 描述                                              |
| ---------------------- | ------------------------ | ------------------------------------------------- |
| `"on_escape"`{lang=js} | `minecraft:behavior.avoid_block`   | 实体逃离方块后执行。 |
| `"on_home"`{lang=js}   | `minecraft:behavior.go_home`       | 实体到达方块后执行。      |
| `"on_place"`{lang=js}  | `minecraft:behavior.place_block`   | 实体放置方块后执行。       |
| `"on_reach"`{lang=js}  | `minecraft:behavior.move_to_block` | 实体到达方块后执行。      |
| `"on_take"`{lang=js}   | `minecraft:behavior.take_block`    | 实体拿取方块后执行。        |

#### 自定义狗示例

<CodeHeader>minecraft:entity</CodeHeader>

```json
"components": {
    // 狗的家将设置为它的狗舍
    "minecraft:home": {
        "restriction_radius": 32,
        "restriction_type": "random_movement",
        "home_block_types": ["wiki:kennel", "wiki:large_kennel"]
    }
},
"events": {
    // 可以触发的事件，使狗舍变大
    "wiki:upgrade_kennel": {
        "execute_event_on_home_block": {
            "event": "wiki:on_upgrade"
        }
    }
}
```

<CodeHeader>自定义组件</CodeHeader>

```js
onEntity({ name, block }) {
    if (name === "wiki:on_upgrade") {
        // 将普通狗舍升级为大狗舍
        block.setType("wiki:large_kennel");
    }
}
```

### 实体落下

:::tip 依赖项
实体落下事件需要 [`minecraft:entity_fall_on`](/blocks/block-components#entity-fall-on) 组件在你的方块上激活才能触发。

实体落下事件需要 [`minecraft:collision_box`](/blocks/block-components#collision-box) 组件在Y轴上高于 `3.2`{lang=json} 像素才能触发。
:::

当实体落在方块上时调用。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:entity_fall_on": {
    "min_fall_distance": 5 // 实体必须落下的最小距离才能触发此事件（可选）。
}
```

<CodeHeader>自定义组件</CodeHeader>

```js
onEntityFallOn(event) {
    event.block // 受此事件影响的方块。
    event.dimension // 包含该方块的维度。
    event.entity // 踩上方块的实体。可能未定义。
    event.fallDistance // 实体落地前落下的距离。
}
```

### 放置

当方块被放置时调用。

<CodeHeader>自定义组件</CodeHeader>

```js
onPlace(event) {
    event.block // 受此事件影响的方块。
    event.dimension // 包含该方块的维度。
    event.previousBlock // 被替换的方块的置换。
}
```

### 玩家破坏

当玩家破坏方块时调用。

<CodeHeader>自定义组件</CodeHeader>

```js
onPlayerBreak(event) {
    event.block // 受此事件影响的方块。这是破坏后的方块。
    event.brokenBlockPermutation // 破坏前方块的置换。
    event.dimension // 包含该方块的维度。
    event.player // 破坏该方块的玩家。可能未定义。
}
```

### 玩家交互

:::danger 空桶
当玩家使用空桶与方块交互时，不会调用 `onPlayerInteract` 钩子。
:::

当玩家与/使用方块时调用。

<CodeHeader>自定义组件</CodeHeader>

```js
onPlayerInteract(event) {
    event.block // 受此事件影响的方块。
    event.dimension // 包含该方块的维度。
    event.face // 交互的方块面。
    event.faceLocation // 玩家交互位置相对于方块西北底角的位置。
    event.player // 交互的玩家。可能未定义。
}
```

### 随机刻

在每个随机刻触发，允许诸如随机作物生长的行为。

<CodeHeader>自定义组件</CodeHeader>

```js
onRandomTick(event) {
    event.block // 受此事件影响的方块。
    event.dimension // 包含该方块的维度。
}
```

### 红石更新

:::tip 依赖项
红石更新事件需要 [`minecraft:redstone_consumer`](/blocks/block-components#redstone-consumer) 组件在你的方块上激活才能触发。
:::

每次方块收到红石更新时触发。

发生在以下情况：

-   方块被放置
-   包含方块的区块被加载
-   方块的红石功率等级发生变化

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_consumer": {
    "min_power": 5 // 触发此事件所需的最小功率等级。
}
```

<CodeHeader>自定义组件</CodeHeader>

```js
onRedstoneUpdate(event) {
    event.block // 受此事件影响的方块。
    event.dimension // 包含该方块的维度。
    event.powerLevel // 方块收到的红石功率等级。
}
```

### 离开

:::tip 依赖项
离开事件需要 [`minecraft:collision_box`](/blocks/block-components#collision-box) 组件在Y轴上高于 `3.2`{lang=json} 像素才能触发。
:::

当实体离开方块时调用。

<CodeHeader>自定义组件</CodeHeader>

```js
onStepOff(event) {
    event.block // 受此事件影响的方块。
    event.dimension // 包含该方块的维度。
    event.entity // 离开方块的实体。可能未定义。
}
```

### 踩上

:::tip 依赖项
踩上事件需要 [`minecraft:collision_box`](/blocks/block-components#collision-box) 组件在Y轴上高于 `3.2`{lang=json} 像素才能触发。
:::

当实体踩上方块时调用。

<CodeHeader>自定义组件</CodeHeader>

```js
onStepOn(event) {
    event.block // 受此事件影响的方块。
    event.dimension // 包含该方块的维度。
    event.entity // 踩上方块的实体。可能未定义。
}
```

### 刻

:::tip 依赖项
刻事件需要 [`minecraft:tick`](/blocks/block-components#tick) 组件在你的方块上激活才能触发。
:::

在方块的 [`minecraft:tick`](/blocks/block-components#tick) 组件的 `interval_range` 内的X到Y刻之间触发。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:tick": {
    "interval_range": [10, 20],
    "looping": true
}
```

<CodeHeader>自定义组件</CodeHeader>

```js
onTick(event) {
    event.block // 受此事件影响的方块。
    event.dimension // 包含该方块的维度。
}
```
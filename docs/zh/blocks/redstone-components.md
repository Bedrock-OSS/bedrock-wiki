---
title: 红石组件
description: 了解可以组成红石电路的不同类型的组件。
category: 文档
tags:
    - intermediate
license: true
mentions:
    - QuazChick
---

:::tip 格式版本 1.26.10
创建自定义方块时使用最新格式版本可以访问最新的红石功能。
:::

本页面将帮助你了解可以组成红石电路的不同类型的组件。
仅记录可以使用附加包创建的组件类型。

## 红石绝缘体

:::tip
一般来说，如果 vanilla 方块不是完整且不透明的，它将充当绝缘体。
但是，重要的是要记住方块的功能不是由其外观决定的，因此可能有例外。
例如，尽管是半透明的，史莱姆块不是绝缘体，而是会[传导](#红石导体)红石功率。
:::

虽然它们在技术上不构成电路的一部分，**红石绝缘体**在构建紧凑红石电路时非常有用，因为它们在被 powered 时**不**传导红石信号。

在下图中，左边的 powered 中继器正在强 powering 石锯。然而，由于石锯是红石绝缘体，右边的中继器未连接到电路，因此保持 unpowered。

<WikiImage
    src="insulator.png"
    alt="Diagram of a stonecutter block with a powered repeater pointing into the left of it and an unpowered repeater pointing out of the right of it."
    width="512"
    pixelated
/>

### 创建红石绝缘体

创建自定义红石绝缘体再简单不过，因为这是自定义方块的默认行为！

你不需要在方块的 JSON 定义中添加任何东西。

### 防止线向下延伸

默认情况下，红石线的线被允许沿着绝缘体的侧面下移以向下传递功率。
然而，与其他绝缘体（如玻璃）不同，vanilla 板不允许线沿其侧面下移。

你可以通过使用[红石导电](/blocks/block-components#红石导电)组件来阻止线沿你的方块下移。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_conductivity": {
    "allows_wire_to_step_down": false
}
```

## 红石导体

:::tip
一般来说，如果 vanilla 方块是完整且不透明的，它将充当导体。
但是，重要的是要记住方块的功能不是由其外观决定的，因此可能有例外。
例如，尽管是完整且不透明的，观察者是[绝缘体](#红石绝缘体)，因此不会传导红石功率。
:::

**红石导体**与绝缘体相反，它们在被 powered 时**确实**将红石信号传导到相邻方块。

-   **强 powering** 导体（使用[红石产生器](#红石产生器)）会将相邻的红石线和组件连接到电路，导致它们接收被传导的功率。

-   **弱 powering** 导体（通过 power 在导体顶部或指向导体的红石线）会将相邻的红石组件连接到电路，导致它们接收被传导的功率而不连接相邻的红石线。

如果方块是红石导体，它将**阻止线向下延伸**到其正下方的方块，切断该部分的线路。

在下图中，左边的 powered 中继器正在强 powering 混凝土块。由于混凝土是红石导体，右边的中继器连接到电路，因此也变得 powered。

<WikiImage
    src="conductor.png"
    alt="Diagram of a concrete block with a powered repeater pointing into the left of it and another powered repeater pointing out of the right of it."
    width="512"
    pixelated
/>

### 创建红石导体

要创建自定义红石导体，你需要在方块中包含[红石导电](/blocks/block-components#红石导电)组件。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_conductivity": {
    "redstone_conductor": true
}
```

:::danger 红石消耗器（[MCPE-232715](https://bugs.mojang.com/browse/MCPE-232715)）
将 `minecraft:redstone_consumer` 组件应用到方块将阻止它传导红石，同时保留红石导体的其他属性，如线切割。
为了使红石消耗器实际上以与常规方块相同的方式传导红石，你必须将 `propagates_power` 参数设为 `true`{lang=json}：

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_conductivity": {
    "redstone_conductor": true
},
"minecraft:redstone_consumer": {
    "propagates_power": true
}
```

:::

## 红石消耗器

当被提供红石功率时激活的方块称为**红石消耗器**。

在下图中，红石灯充当红石消耗器，正在被红石火把 powered，红石火把是一个红石产生器。

<WikiImage
    src="consumer.png"
    alt="Diagram of a lit redstone lamp with a redstone torch to the left of it."
    width="384"
    pixelated
/>

### 创建红石消耗器

要创建自定义红石消耗器，你需要在方块中包含[红石消耗器](/blocks/block-components#红石产生器)组件，以及一个响应红石更新的自定义组件。

:::danger 红石更新
红石更新不仅是由方块收到的红石功率变化引起的。
它们还可以由方块被放置或包含方块的区块被加载触发，这意味着目前无法创建像门一样工作的方块。
:::

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_consumer": {
    "min_power": 0
},
"wiki:redstone_update_logging": {}
```

<CodeHeader>自定义组件脚本</CodeHeader>

```js
import { system } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockRedstoneUpdateLoggingComponent = {
    onRedstoneUpdate({ powerLevel }) {
        console.log("Block received a redstone update with power level", powerLevel);
    },
};

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "wiki:redstone_update_logging",
        BlockRedstoneUpdateLoggingComponent
    );
});
```

## 红石产生器

向电路提供红石功率的方块称为**红石产生器**。
其他红石组件可以连接到产生器以接收其允许方向上的功率。

除了红石块外，所有产生器还强 power 一个方向。这种强 power 可以被[红石导体](#红石导体)传导以向电路添加更多组件。

在下图中，红石火把充当电路的红石产生器，可以从除下方外的所有方向连接。
此外，它正在强 power 其上方的方块。

<WikiImage
    src="producer.png"
    alt="Diagram of a redstone torch with two powered repeaters pointing outwards to the left and right and a strongly powered concrete block above it."
    width="384"
    pixelated
/>

### 创建红石产生器

要创建自定义红石产生器，你需要在方块中包含[红石产生器](/blocks/block-components#红石产生器)组件。

以下是上图中点亮的红石火把的红石产生器组件外观：

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_producer": {
    "power": 15,
    "strongly_powered_face": "up",
    "connected_faces": ["up", "north", "south", "west", "east"]
}
```
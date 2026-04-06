---
title: 物品事件
description: 物品事件在满足某些条件时触发。创作者可以钩入这些事件，在事件触发时修改游戏世界。
category: 通用
nav_order: 4
tags:
    - scripting
license: true
mentions:
    - SmokeyStack
    - QuazChick
---

:::tip 格式版本 1.26.10
在创建自定义物品时使用最新格式版本可以获取新功能和改进。Wiki旨在分享关于自定义物品的最新信息，目前针对格式版本1.26.10。
:::

## 注册自定义组件

物品事件在满足某些条件时触发，可以在世界加载之前在脚本中注册的**自定义组件**中"监听"。

在每个自定义组件中，列出了事件处理函数（如[`onBeforeDurabilityDamage`](#before-durability-damage)）来配置你希望在每个事件触发时发生什么。

_此示例防止物品在击中实体时受到耐久度损坏：_

<CodeHeader>BP/scripts/unbreakable.js</CodeHeader>

```js
import { system } from "@minecraft/server"; // Must be version 2.0.0 or higher

/** @type {import("@minecraft/server").ItemCustomComponent} */
const ItemUnbreakableComponent = {
    onBeforeDurabilityDamage(event) {
        event.durabilityDamage = 0;
    },
};

system.beforeEvents.startup.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent("wiki:unbreakable", ItemUnbreakableComponent);
});
```

## 应用自定义组件

要将自定义组件绑定到物品，只需将其列在你的物品JSON的`components`中。

_需要格式版本[1.21.90](/items/item-format-history#_1-21-90)或更高版本。_

<CodeHeader>minecraft:item</CodeHeader>

```json
"components": {
    "wiki:unbreakable": {}
}
```

## 事件列表

### 耐久度损坏前

当包含此组件的物品击中实体并即将受到耐久度损坏时，将调用此事件。

<CodeHeader>自定义组件</CodeHeader>

```js
onBeforeDurabilityDamage(event) {
    event.attackingEntity // The attacking entity.
    event.durabilityDamage // The damage applied to the item's durability when the event occurs.
    event.hitEntity // The entity being hit.
    event.itemStack // The item stack used to hit the entity.
}
```

### 完成使用

:::tip 依赖
完成使用事件需要你的物品上激活[`minecraft:use_modifiers`](/items/item-components#use-modifiers)组件才能触发。
:::

当包含此组件的物品的使用持续时间完成时，将调用此事件。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:use_modifiers": {
    "use_duration": 5
}
```

<CodeHeader>自定义组件</CodeHeader>

```js
onCompleteUse(event) {
    event.itemStack // Returns the item stack that has completed charging.
    event.source // Returns the source entity that triggered this item event.
}
```

### 消耗

当包含此组件的物品被实体吃掉时，将调用此事件。

:::tip 依赖
完成使用事件需要你的物品上激活[`minecraft:use_modifiers`](/items/item-components#use-modifiers)和[`minecraft:food`](/items/item-components#food)组件才能触发。
:::

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:food": {},
"minecraft:use_modifiers": {
    "use_duration": 5
}
```

<CodeHeader>自定义组件</CodeHeader>

```js
onConsume(event) {
    event.itemStack // The item stack that was consumed.
    event.source // The source entity that consumed the item.
}
```

### 击中实体

当包含此组件的物品用于击中另一个实体时，将调用此函数。

<CodeHeader>自定义组件</CodeHeader>

```js
onHitEntity(event) {
    event.attackingEntity // The attacking entity.
    event.hadEffect // Whether the hit landed or had any effect.
    event.hitEntity // The entity being hit.
    event.itemStack // The item stack used to hit the entity.
}
```

### 挖掘方块

当包含此组件的物品用于挖掘方块时，将调用此函数。

<CodeHeader>自定义组件</CodeHeader>

```js
onMineBlock(event) {
    event.block // The block impacted by this event.
    event.itemStack // The item stack used to mine the block.
    event.minedBlockPermutation // The block permutation that was mined.
    event.source // The entity that mined the block.
}
```

### 使用

当包含此组件的物品被玩家使用时，将调用此函数。

<CodeHeader>自定义组件</CodeHeader>

```js
onUse(event) {
    event.itemStack // The item stack when the item was used.
    event.source // The player who used the item.
}
```

### 对方块使用

当包含此组件的物品在方块上使用时，将调用此函数。

<CodeHeader>自定义组件</CodeHeader>

```js
onUseOn(event) {
    event.source // The entity that used the item on the block.
    event.usedOnBlockPermutation // The block permutation that the item was used on.
}
```

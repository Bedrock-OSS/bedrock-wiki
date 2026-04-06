---
title: 物品事件迁移
description: 查看已弃用JSON物品事件响应的脚本API实现。
category: 通用
nav_order: 5
tags:
    - help
license: true
mentions:
    - QuazChick
---

:::tip 在你开始之前
本页面要求你熟悉基础JavaScript，并且需要了解现代[物品事件](/items/item-events)是如何工作的。
:::

努力将物品的JSON事件升级到[自定义组件](/items/item-events#registering-custom-components)？
别担心！本页面将帮助你理解已弃用的JSON事件响应使用脚本API实现的样子。

## 添加生物效果

<CodeHeader>自定义组件</CodeHeader>

```js
onHitEntity({ hitEntity }) {
    hitEntity.addEffect("regeneration", 30, {
        amplifier: 10,
        showParticles: false
    });
}
```

## 伤害（持有者）

```js
import { EntityDamageCause } from "@minecraft/server";
```

<CodeHeader>自定义组件</CodeHeader>

```js
onUse({ source }) {
    source.applyDamage(2, {
        cause: EntityDamageCause.drowning
    });
}
```

## 伤害（物品）

```js
import { EquipmentSlot, GameMode, Player } from "@minecraft/server";
```

<CodeHeader>自定义组件</CodeHeader>

```js
onMineBlock({ source }) {
    // Get main hand slot
    if (!(source instanceof Player)) return;

    const equippable = source.getComponent("minecraft:equippable");
    if (!equippable) return;

    const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
    if (!mainhand.hasItem()) return;

    // Apply durability damage when not in creative mode
    if (source.getGameMode() === GameMode.Creative) return;

    const itemStack = mainhand.getItem(); // Allows us to get item components

    const durability = itemStack.getComponent("minecraft:durability");
    if (!durability) return;

    // Factor in unbreaking enchantment
    const enchantable = itemStack.getComponent("minecraft:enchantable");
    const unbreakingLevel = enchantable?.getEnchantment("unbreaking")?.level;

    const damageChance = durability.getDamageChance(unbreakingLevel) / 100;

    if (Math.random() > damageChance) return; // Randomly skip damage based on unbreaking level

    // Damage the item
    const shouldBreak = durability.damage === durability.maxDurability;

    if (shouldBreak) {
        mainhand.setItem(undefined); // Remove the item
        source.playSound("random.break"); // Play break sound
    } else {
        durability.damage++; // Increase durability damage
        mainhand.setItem(itemStack); // Update item in main hand
    }
}
```

## 减少堆叠

```js
import { EquipmentSlot, GameMode } from "@minecraft/server";
```

<CodeHeader>自定义组件</CodeHeader>

```js
onUse({ source }) {
    if (!source) return;

    const equippable = source.getComponent("minecraft:equippable");
    if (!equippable) return;

    const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
    if (!mainhand.hasItem()) return;

    if (source.getGameMode() !== GameMode.Creative) {
        if (mainhand.amount > 1) {
            mainhand.amount--; // Remove one item from the stack
        } else {
            mainhand.setItem(undefined); // Remove the item stack
        }
    }
}
```

## 移除生物效果

<CodeHeader>自定义组件</CodeHeader>

```js
onHitEntity({ hitEntity }) {
    hitEntity.removeEffect("regeneration");
}
```

## 运行命令

<CodeHeader>自定义组件</CodeHeader>

```js
onUse({ source }) {
    source.runCommand("say Hello there!")
    source.runCommand("say Welcome to my world!")
}
```

## 传送

<CodeHeader>自定义组件</CodeHeader>

```js
onConsume({ source }) {
    source.teleport({ x: 100, y: 20, z: 786 });
}
```

## 转换物品

```js
import { EquipmentSlot, ItemStack } from "@minecraft/server";
```

<CodeHeader>自定义组件</CodeHeader>

```js
onUse({ source }) {
    const equippable = source?.getComponent("minecraft:equippable");
    if (!equippable) return;

    const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);

    mainhand.setItem(new ItemStack("minecraft:suspicious_stew"));
}
```

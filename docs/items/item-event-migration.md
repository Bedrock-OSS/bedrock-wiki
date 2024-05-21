---
title: Item Event Migration
description: View Script API implementations of the deprecated JSON item event responses.
category: General
nav_order: 4
tags:
    - help
mentions:
    - QuazChick
---

:::tip BEFORE YOU START
This page requires you to be comfortable with basic JavaScript and requires knowledge of how modern [item events](/items/item-events) work.
:::

Struggling to upgrade your items' JSON events to [custom components](/items/item-events#registering-custom-components)? Don't worry! This page will help you to understand what the deprecated JSON event responses look like implemented using the Script API.

## Add Mob Effect

<CodeHeader>Custom Component</CodeHeader>

```js
onHitEntity({ hitEntity }) {
    hitEntity.addEffect("regeneration", 30, {
        amplifier: 10,
        showParticles: false
    });
}
```

## Damage (Holder)

```js
import { EntityDamageCause } from "@minecraft/server";
```

<CodeHeader>Custom Component</CodeHeader>

```js
onUse({ source }) {
    source.applyDamage(2, {
        cause: EntityDamageCause.drowning
    });
}
```

## Damage (Item)

```js
import { EquipmentSlot, GameMode, Player } from "@minecraft/server";
```

<CodeHeader>Custom Component</CodeHeader>

```js
onMineBlock({ source }) {
    if (!source || !(source instanceof Player)) return;

    const equippable = source.getComponent("minecraft:equippable");
    if (!equippable) return;

    const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
    if (!mainhand.hasItem()) return;

    const durability = mainhand.getComponent("minecraft:durability");
    if (!durability || Math.random() > durability.getDamageChance()) return;

    const shouldBreak = durability.damage === durability.maxDurability;

    if (source.getGameMode() !== GameMode.creative) {
        if (shouldBreak) {
            durability.damage++; // Damage the item
        } else {
            mainhand.setItem(undefined); // Remove the item
            source.playSound("random.break"); // Play break sound
        }
    }
}
```

## Decrement Stack

```js
import { EquipmentSlot, GameMode } from "@minecraft/server";
```

<CodeHeader>Custom Component</CodeHeader>

```js
onUse({ source }) {
    if (!source) return;

    const equippable = source.getComponent("minecraft:equippable");
    if (!equippable) return;

    const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
    if (!mainhand.hasItem()) return;

    if (source.getGameMode() !== GameMode.creative) {
        if (mainhand.amount > 1) {
            mainhand.amount--; // Remove one item from the stack
        } else {
            mainhand.setItem(undefined); // Remove the item stack
        }
    }
}
```

## Remove Mob Effect

<CodeHeader>Custom Component</CodeHeader>

```js
onHitEntity({ hitEntity }) {
    hitEntity.removeEffect("regeneration");
}
```

## Run Command

<CodeHeader>Custom Component</CodeHeader>

```js
onUse({ source }) {
    source.runCommand("say Hello there!")
    source.runCommand("say Welcome to my world!")
}
```

## Teleport

<CodeHeader>Custom Component</CodeHeader>

```js
onConsume({ source }) {
    source.teleport({ x: 100, y: 20, z: 786 });
}
```

## Transform Item

```js
import { EquipmentSlot, ItemStack } from "@minecraft/server";
```

<CodeHeader>Custom Component</CodeHeader>

```js
onUse({ source }) {
    const equippable = source?.getComponent("minecraft:equippable");
    if (!equippable) return;

    const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);

    mainhand.setItem(new ItemStack("minecraft:suspicious_stew"));
}
```

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
    // Get main hand slot
    if (!(source instanceof Player)) return;

    const equippable = source.getComponent("minecraft:equippable");
    if (!equippable) return;

    const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
    if (!mainhand.hasItem()) return;

    // Apply durability damage when not in creative mode
    if (source.getGameMode() === GameMode.creative) return;

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

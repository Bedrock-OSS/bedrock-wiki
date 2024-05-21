---
title: Block Event Migration
description: View Script API implementations of the deprecated JSON block event responses.
category: General
nav_order: 9
tags:
    - help
mentions:
    - QuazChick
---

:::tip BEFORE YOU START
This page requires you to be comfortable with basic JavaScript and requires knowledge of how modern [block events](/blocks/block-events) work.
:::

Struggling to upgrade your blocks' JSON events to [custom components](/blocks/block-events#registering-custom-components)? Don't worry! This page will help you to understand what the deprecated JSON event responses look like implemented using the Script API.

## Add Mob Effect

<CodeHeader>Custom Component</CodeHeader>

```js
onStepOn({ entity }) {
    entity?.addEffect("regeneration", 30, {
        amplifier: 10,
        showParticles: false
    });
}
```

## Damage (Entities)

```js
import { EntityDamageCause } from "@minecraft/server";
```

<CodeHeader>Custom Component</CodeHeader>

```js
onStepOn({ entity }) {
    entity?.applyDamage(2, {
        cause: EntityDamageCause.drowning
    });
}
```

## Damage (Items)

```js
import { EquipmentSlot, GameMode } from "@minecraft/server";
```

<CodeHeader>Custom Component</CodeHeader>

```js
onPlayerInteract({ player }) {
    // Get main hand slot
    if (!player) return;

    const equippable = player.getComponent("minecraft:equippable");
    if (!equippable) return;

    const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
    if (!mainhand.hasItem()) return;

    // Apply durability damage when not in creative mode
    if (player.getGameMode() === GameMode.creative) return;

    const itemStack = mainhand.getItem(); // Allows us to get item components

    const durability = itemStack.getComponent("minecraft:durability");
    if (!durability) return;

    // Factor in unbreaking enchantment
    const enchantable = itemStack.getComponent("minecraft:enchantable");
    const unbreakingLevel = enchantable?.getEnchantment("unbreaking")?.level;

    const damageChance = durability.getDamageChance(unbreakingLevel) / 100;

    if (Math.random() > damageChance) return; // Randomly skip damage based on unkbreaking level

    // Damage the item
    const shouldBreak = durability.damage === durability.maxDurability;

    if (shouldBreak) {
        mainhand.setItem(undefined); // Remove the item
        player.playSound("random.break"); // Play break sound
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
onPlayerInteract({ player }) {
    if (!player) return;

    const equippable = player.getComponent("minecraft:equippable");
    if (!equippable) return;

    const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
    if (!mainhand.hasItem()) return;

    if (player.getGameMode() !== GameMode.creative) {
        if (mainhand.amount > 1) {
            mainhand.amount--; // Remove one item from the stack
        } else {
            mainhand.setItem(undefined); // Remove the item stack
        }
    }
}
```

## Die (Blocks)

<CodeHeader>Custom Component</CodeHeader>

```js
onStepOn({ block }) {
    block.setType("minecraft:air")
}
```

## Die (Entities)

<CodeHeader>Custom Component</CodeHeader>

```js
onStepOn({ entity }) {
    entity?.kill();
}
```

## Play Effect

<CodeHeader>Custom Component</CodeHeader>

```js
onStepOn({ dimension, block }) {
    dimension.spawnParticle("minecraft:campfire_smoke_particle", block.center());
}
```

## Play Sound

<CodeHeader>Custom Component</CodeHeader>

```js
onStepOn({ dimension, block }) {
    dimension.playSound("dig.stone", block.center());
}
```

## Remove Mob Effect

<CodeHeader>Custom Component</CodeHeader>

```js
onStepOn({ entity }) {
    entity?.removeEffect("regeneration");
}
```

## Run Command

<CodeHeader>Custom Component</CodeHeader>

```js
onStepOn({ dimension }) {
    dimension.runCommand("say Hello there!")
    dimension.runCommand("say Welcome to my world!")
}
```

## Set Block

<CodeHeader>Custom Component</CodeHeader>

```js
onStepOn({ block }) {
    block.setType("minecraft:grass_block")
}
```

```js
import { BlockPermutation } from "@minecraft/server";
```

<CodeHeader>Custom Component</CodeHeader>

```js
onStepOn({ block }) {
    block.setPermutation(BlockPermutation.resolve("minecraft:campfire", {
        "minecraft:cardinal_direction": "east",
        "extinguished": true
    }));
}
```

## Set Block At Pos

<CodeHeader>Custom Component</CodeHeader>

```js
onStepOn({ dimension, block }) {
    const offset = { x: -1, y: 1, z: 5 };

    const locationWithOffset = {
        x: block.location.x + offset.x,
        y: block.location.y + offset.y,
        z: block.location.z + offset.z
    };

    dimension.setBlockType(locationWithOffset, "minecraft:grass_block");
}
```

```js
import { BlockPermutation } from "@minecraft/server";
```

<CodeHeader>Custom Component</CodeHeader>

```js
onStepOn({ dimension, block }) {
    const offset = { x: -1, y: 1, z: 5 };

    const locationWithOffset = {
        x: block.location.x + offset.x,
        y: block.location.y + offset.y,
        z: block.location.z + offset.z
    };

    dimension.setBlockPermutation(locationWithOffset, BlockPermutation.resolve("minecraft:campfire", {
        "minecraft:cardinal_direction": "east",
        "extinguished": true
    }));
}
```

## Set Block State

<CodeHeader>Custom Component</CodeHeader>

```js
onStepOn({ block }) {
    block.setPermutation(
        block.permutation.withState("wiki:integer_example", 5)
    );
}
```

```js
import { BlockPermutation } from "@minecraft/server";
```

<CodeHeader>Custom Component</CodeHeader>

```js
onStepOn({ block }) {
    const states = {
        ...block.permutation.getAllStates(),
        "wiki:boolean_example": false,
        "wiki:integer_example": 5,
        "wiki:string_example": "blue"
    };

    block.setPermutation(
        BlockPermutation.resolve(block.typeId, states)
    );
}
```

## Spawn Loot

```js
import { ItemStack } from "@minecraft/server";
```

<CodeHeader>Custom Component</CodeHeader>

```js
onStepOn({ dimension, block }) {
    dimension.spawnItem(new ItemStack("minecraft:stick", 3), block.center());
}
```

<CodeHeader>Custom Component</CodeHeader>

```js
onStepOn({ dimension, block }) {
    const { x, y, z } = block.center();

    dimension.runCommand(`loot spawn ${x} ${y} ${z} loot "entities/ghast"`);
}
```

## Teleport

<CodeHeader>Custom Component</CodeHeader>

```js
onStepOn({ entity }) {
    entity?.teleport({ x: 100, y: 20, z: 786 });
}
```

## Transform Item

```js
import { EquipmentSlot, ItemStack } from "@minecraft/server";
```

<CodeHeader>Custom Component</CodeHeader>

```js
onPlayerInteract({ player }) {
    const equippable = player?.getComponent("minecraft:equippable");
    if (!equippable) return;

    const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
    if (!mainhand.hasItem() || mainhand.typeId !== "minecraft:bowl") return;

    mainhand.setItem(new ItemStack("minecraft:suspicious_stew"));
}
```

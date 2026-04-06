---
title: 工具耐久度
category: 教程
tags:
    - experimental
    - intermediate
    - scripting
mentions:
    - MedicalJewel105
    - TheDoctor15
    - napstaa967
description: 为自定义工具添加类似原版的耐久度。
hidden: true
---

## 简介

1.21.10+的物品具有与1.10和1.16物品不同的耐久度机制。
现在你需要定义物品何时会受到耐久度损坏以及执行该操作的事件。
本页面将讨论的内容：

-   耐久度组件
-   更新耐久度的事件
-   伤害实体
-   破坏方块
-   `repair_amount`值
-   `on_tool_used`事件

### 组件

<CodeHeader>BP/items/my_item.json#components</CodeHeader>

```json
"minecraft:durability": {
    "max_durability": 200
}
```

`minecraft:durability`将为你的物品设置最大耐久度

## 事件

### 物品事件

<CodeHeader>BP/items/my_item.json#events</CodeHeader>

```json
"durability_update": {
    "damage": {
        "type": "none",
        "amount": 1,
        "target": "self"
    }
}
```

当调用此事件时，物品（`self`目标）将受到耐久度损坏。
看起来很简单，不是吗？

### 脚本事件

对于脚本方法，我们将使用一个函数来伤害我们的物品

此函数支持物品上的耐久

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
function damage_item(item) {
    // Get durability
    const durabilityComponent = item.getComponent("durability");
    var unbreaking = 0;
    // Get unbreaking level
    if (item.hasComponent("enchantments")) {
        unbreaking = item.getComponent("enchantments").enchantments.getEnchantment("unbreaking");
        if (!unbreaking) {
            unbreaking = 0;
        } else {
            unbreaking = unbreaking.level;
        }
    }
    // Apply damage
    if (durabilityComponent.damage == durabilityComponent.maxDurability) {
        return;
    }
    durabilityComponent.damage += Number(
        Math.round(Math.random() * 100) <= durabilityComponent.getDamageChance(unbreaking)
    );
    return item;
}
```

## 伤害实体

### 使用脚本

:::warning 实验性脚本

此脚本使用`@minecraft/server 1.9.0-beta`，这将在下一个Minecraft更新中更改。
:::

对于格式版本1.20.40及更高版本，`on_hurt_entity`不再工作。

这提供了一种使用脚本伤害武器的方法

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
// Add your item IDs into this array
const my_items = ["wiki:silver_dagger"];

world.afterEvents.entityHurt.subscribe((event) => {
    // If there's no source entity, skip
    if (!event.damageSource.damagingEntity) return;

    // Get equipped weapon
    const equipment = event.damageSource.damagingEntity.getComponent("minecraft:equippable");
    if (!equipment) return;
    const weapon = equipment.getEquipment(EquipmentSlot.Mainhand);

    // If there's no weapon, skip
    if (!weapon) return;

    // If the item is not in our item IDs, skip
    if (!my_items.includes(weapon.typeId)) return;
    let newItem = damage_item(weapon);
    equipment.setEquipment(EquipmentSlot.Mainhand, newItem);
    if (!newItem) {
        if (event.damageSource.damagingEntity instanceof Player) {
            event.damageSource.damagingEntity.playSound("random.break");
        }
    }
});
```

### on_hurt_entity

:::warning

`on_hurt_entity`在格式版本1.20.40中被移除
:::

`on_hurt_entity`可以在"minecraft:weapon"组件中定义。它告诉游戏当玩家使用此物品伤害实体时应该发生什么事件。

<CodeHeader>BP/items/my_item.json#components</CodeHeader>

```json
"minecraft:weapon": {
    "on_hurt_entity": {
        "event": "durability_update"
    }
}
```

## 破坏方块

### 使用脚本

:::warning 实验性脚本

此脚本使用`@minecraft/server 1.9.0-beta`，这将在下一个Minecraft更新中更改。
:::

对于格式版本1.20.20及更高版本，`on_dig`不再工作。

这提供了一种使用脚本伤害挖掘物品的方法

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
// Add your item IDs into this array
const my_items = ["wiki:obsidian_pickaxe"];

world.afterEvents.playerBreakBlock.subscribe((event) => {
    // If there's no item, skip
    if (!event.itemStackAfterBreak) return;
    // If the item is not in our item IDs, skip
    if (!my_items.includes(event.itemStackAfterBreak.typeId)) return;

    // If player is in creative, skip
    if (
        world
            .getPlayers({
                gameMode: GameMode.creative,
            })
            .includes(event.player)
    )
        return;
    const newItem = damage_item(event.itemStackAfterBreak);
    event.player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand, newItem);
    if (!newItem) {
        event.player.playSound("random.break");
    }
});
```

### on_dig

:::warning

`on_dig`在格式版本1.20.20中被移除
:::

`on_dig`可以在"minecraft:digger"组件中定义。它告诉游戏当玩家使用此物品挖掘方块时应该发生什么事件。

<CodeHeader>BP/items/my_item.json#components</CodeHeader>

```json
"minecraft:digger": {
    "use_efficiency": true,
    "destroy_speeds": [
        {
            "block": {
                "tags": "q.any_tag('wood')"
            },
            "speed": 8,
            "on_dig": {
                // Defines event that should happen when block with tag wood was dug.
                "event": "durability_update"
            }
        }
    ],
    "on_dig": {
        // Defines event that should happen when any block was destroyed.
        "event": "durability_update"
    }
}
```

## repair_amount

`repair_amount`可以在"minecraft:repairable"组件中定义。它告诉游戏物品在修复时应该恢复多少耐久度。

<CodeHeader>BP/items/my_item.json#components</CodeHeader>

```json
"minecraft:repairable": {
    "repair_items": [
        {
            "repair_amount": "context.other->q.remaining_durability + 0.05 * context.other->q.max_durability",
            "items": [
                "bs:silver",
                "bs:silver_axe"
            ]
        }
    ]
}
```

公式解释：

`"context.other->q.remaining_durability + 0.05 * context.other->q.max_durability"`

最终耐久度将是第一把斧头的耐久度 + 第二把斧头的耐久度 + 第二把斧头最大耐久度的5%。

## on_tool_used

（这可能现在不工作）
`on_tool_used`是一个可以使用标签调用的特殊事件。
标签有点像实体的运行时标识符。
已知标签：

| 标签                  | 效果        | 如何调用                                  |
| -------------------- | -------------- | -------------------------------------------------- |
| minecraft:is_axe     | 剥树皮    | 通过与斧头交互的方块交互 |
| minecraft:is_hoe     | 耕地     | 通过与锄头交互的方块交互 |
| minecraft:is_pickaxe | 未知        | 未知                                            |
| minecraft:is_sword   | 未知        | 未知                                            |

你可以这样应用这些标签：

<CodeHeader>BP/items/my_item.json#components</CodeHeader>

```json
"tag:minecraft:is_axe": {}
```

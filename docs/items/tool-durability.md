---
title: Tool Durability
category: Tutorials
tags:
    - experimental
    - intermediate
    - scripting
mentions:
    - MedicalJewel105
    - TheDoctor15
    - napstaa967
---

## Introduction

1.16.100+ items have different durability mechanic than 1.10 and 1.16 items.
Now you need to define when will the item get durability damage and also an event that does it.
What will be discussed on this page:
- Durability component
- Event that updates durability
- Damaging entities
- Block breaking
- `repair_amount` value
- `on_tool_used` event

### Components

<CodeHeader>BP/items/my_item.json#components</CodeHeader>

```json
"minecraft:durability": {
    "max_durability": 200
}
```

`minecraft:durability` will give your item a set max durability

## Event

### Item event

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

When this event is called the item (`self` target) will receive durability damage.
Looks simple, doesn't it?

### Script event

For the script methods, we'll be using a function to damage our item

This function supports unbreaking on items

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
function damage_item(item) {
    // Get durability
    const durabilityComponent = item.getComponent("durability")
    var unbreaking = 0
    // Get unbreaking level
    if (item.hasComponent("enchantments")) {
        unbreaking = item.getComponent("enchantments").enchantments.getEnchantment("unbreaking")
        if (!unbreaking) {
            unbreaking = 0
        } else {
            unbreaking = unbreaking.level
        }
    }
    // Apply damage
    if (durabilityComponent.damage == durabilityComponent.maxDurability) {

        return
    }
    durabilityComponent.damage += Number(Math.round(Math.random() * 100) <= durabilityComponent.getDamageChance(unbreaking))
    return item
}
```

## Damaging entities

### Using scripts

:::warning Experimental Script

This script uses `@minecraft/server 1.9.0-beta`, which will change in the next minecraft update.
:::

For format versions 1.20.40 and onward, `on_hurt_entity` no longer works.

This provides a way to damage weapons using scripts

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
// Add your item IDs into this array
const my_items = ["wiki:silver_dagger"]

world.afterEvents.entityHurt.subscribe(event => {
    // If there's no source entity, skip
    if (!event.damageSource.damagingEntity) return

    // Get equipped weapon
    const equipment = event.damageSource.damagingEntity.getComponent("minecraft:equippable")
    if (!equipment) return
    const weapon = equipment.getEquipment(EquipmentSlot.Mainhand)

    // If there's no weapon, skip
    if (!weapon) return

    // If the item is not in our item IDs, skip
    if (!my_items.includes(weapon.typeId)) return
    let newItem = damage_item(weapon)
    equipment.setEquipment(EquipmentSlot.Mainhand, newItem)
    if (!newItem) {
        if (event.damageSource.damagingEntity instanceof Player) {
            event.damageSource.damagingEntity.playSound("random.break")
        }
    }
})
```

### on_hurt_entity

:::warning

`on_hurt_entity` was removed in format version 1.20.40
:::

`on_hurt_entity` can be defined in "minecraft:weapon" component. It tells the game what event should happen when player hurts entity using this item.

<CodeHeader>BP/items/my_item.json#components</CodeHeader>

```json
"minecraft:weapon": {
    "on_hurt_entity": {
        "event": "durability_update"
    }
}
```

## Block breaking

### Using scripts

:::warning Experimental Script

This script uses `@minecraft/server 1.9.0-beta`, which will change in the next minecraft update.
:::

For format versions 1.20.20 and onward, `on_dig` no longer works.

This provides a way to damage digger items by using scripts

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
// Add your item IDs into this array
const my_items = ["wiki:obsidian_pickaxe"]

world.afterEvents.playerBreakBlock.subscribe(event => {
    // If there's no item, skip
    if (!event.itemStackAfterBreak) return
    // If the item is not in our item IDs, skip
    if (!my_items.includes(event.itemStackAfterBreak.typeId)) return

    // If player is in creative, skip
    if (world.getPlayers({
        gameMode: GameMode.creative
    }).includes(event.player)) return
    const newItem = damage_item(event.itemStackAfterBreak)
    event.player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand, newItem)
    if (!newItem) {
        event.player.playSound("random.break")
    }
})
```

### on_dig

:::warning

`on_dig` was removed in format version 1.20.20
:::

`on_dig` can be defined in "minecraft:digger" component. It tells the game what event should happen when player dug a block using this item.

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

`repair_amount` can be defined in "minecraft:repairable" component. It tells the game how much of the item's durability should be back when it was repaired.

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

Formula explanation:

`"context.other->q.remaining_durability + 0.05 * context.other->q.max_durability"`

The _final_ durability will be durability of the first axe + durability of the second axe + 5% of 2nd axe MAX durability.

## on_tool_used

(This might not work now)
`on_tool_used` is special event that can be called using tags.
Tags work kinda like runtime identifiers for entities.
Known tags:

| Tag                  | Effects        | How can be called                                  |
| -------------------- | -------------- | -------------------------------------------------- |
| minecraft:is_axe     | Strips logs    | By interacting with blocks that axe interacts with |
| minecraft:is_hoe     | Makes farmland | By interacting with blocks that hoe interacts with |
| minecraft:is_pickaxe | Unknown        | Unknown                                            |
| minecraft:is_sword   | Unknown        | Unknown                                            |

You can apply these tags this way:

<CodeHeader>BP/items/my_item.json#components</CodeHeader>

```json
"tag:minecraft:is_axe": {}
```

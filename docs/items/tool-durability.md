---
title: Tool Durability
category: Tutorials
tags:
    - experimental
    - intermediate
mentions:
    - MedicalJewel105
    - TheDoctor15
---

## Introduction

1.16.100+ items have different durability mechanic than 1.10 and 1.16 items.
Now you need to define when will the item get durability damage and also an event that does it.
What will be discussed on this page:

-	Event that updates durability
-	`on_hurt_entity` durability update
-	`on_dig` durability update
-	`repair_amount` value
-	`on_tool_used` event

## Event

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

## on_hurt_entity

`on_hurt_entity` can be defined in "minecraft:weapon" component. It tells the game what event should happen when player hurts entity using this item.

<CodeHeader>BP/items/my_item.json#components</CodeHeader>

```json
"minecraft:weapon": {
    "on_hurt_entity": {
        "event": "durability_update"
    }
}
```

## on_dig

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

| Tag                  | Effects           | How can be called                                  |
| -------------------- | ----------------- | -------------------------------------------------- |
| minecraft:is_axe     | Strips logs       | By interacting with blocks that axe interacts with |
| minecraft:is_hoe     | Makes farmland    | By interacting with blocks that hoe interacts with |
| minecraft:is_pickaxe | Unknown           | Unknown                                            |
| minecraft:is_sword   | Unknown           | Unknown                                            |

You can apply these tags this way:

<CodeHeader>BP/items/my_item.json#components</CodeHeader>

```json
"tag:minecraft:is_axe": {}
```

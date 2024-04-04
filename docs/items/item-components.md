---
title: Item Components
description: Item components are used to change how your item appears and functions in the world.
category: General
nav_order: 2
mentions:
    - SmokeyStack
    - QuazChick
---

:::danger PLEASE READ
This page will be part of a rewrite to accomodate for the removal of the Holiday Creator Feature experimental toggle. Expect this page to be rewritten or removed when this happens.
:::
:::tip FORMAT & MIN ENGINE VERSION `1.20.50`
Using the latest format version when creating custom items provides access to fresh features and improvements. The wiki aims to share up-to-date information about custom items, and currently targets format version `1.20.50`.
:::

## Applying Components

Item components are used to change how your item appears and functions in the world. They are applied in the `components` child of `minecraft:item`.

<CodeHeader>BP/items/custom_item.json</CodeHeader>

```json
{
    "format_version": "1.20.50",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_item",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            "minecraft:icon": {
                "texture": "custom_item"
            }
        }
    }
}
```

## Allow Off Hand

Determines whether an item can be placed in the off-hand slot of the inventory.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:allow_off_hand": {
    "value": true
}
```

## Block Placer

Sets the item as a Planter item component for blocks. Items with this component will place a block when used.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:block_placer":{ 
    "block": "seeds",
    "use_on": [
        "dirt",
        "grass"
    ]
}
```

## Can Destroy In Creative

Determines if an item will break blocks in Creative Mode while swinging.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:can_destroy_in_creative": {
    "value": true
}
```

## Cooldown

Sets an items "Cool down" time. After using an item, it becomes unusable for the duration specified by the 'duration' setting of this component.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:cooldown":{
    "category" : "attack",
    "duration" : 0.2
}
```

## Damage

Determines how much extra damage an item does on attack.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:damage": {
    "value": 10
}
```

## Digger

Allows a creator to determine how quickly an item can dig specific blocks.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:digger": {
	"use_efficiency": true,
	"destroy_speeds": [
		{
			"block": {
				"tags": "q.any_tag('stone', 'metal')" // Note that not all blocks have tags; listing many blocks may be necessary
			},
			"speed": 6
		}
	]
}
```

## Display Name

Sets the item display name within Minecraft: Bedrock Edition. This component may also be used to pull from the localization file by referencing a key from it.

### Example

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:display_name":{
    "value": "secret_weapon"
}
```

### Example Using Localization Key

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:display_name":{
    "value": "item.snowball.name"
}
```

## Durability

Sets how much damage the item can take before breaking, and allows the item to be combined at an anvil, grindstone, or crafting table.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:durability":{
    "damage_chance": {
        "min": 10,
        "max": 50
    },
    "max_durability": 36
}
```

## Enchantable

Determines the enchantments that can be applied to the item, specifying the item slot for potential enchantments and the enchantability value that influences the quality and frequency of enchantments applied.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:enchantable": {
    "slot": "sword",
    "value": 9
}
```

### Enchantment Slots
Specifies the applicable item category for enchantments, such as armor pieces, weapons, and tools.

| Slot Name     |
| ------------- |
| armor_feet    |
| armor_torso   |
| armor_head    |
| armor_legs    |
| axe           |
| bow           |
| cosmetic_head |
| crossbow      |
| elytra        |
| fishing_rod   |
| flintsteel    |
| hoe           |
| pickaxe       |
| shears        |
| shield        |
| shovel        |
| sword         |
| all           |

### Enchantability Value
Determines the item's enchantability, influencing the quality and quantity of potential enchantments. Higher values boost the chance of guaranteeing more powerful enchantments. The table below details enchantability scores across different materials, showcasing their ability to get enchantments.

| Material  | Armor Enchantability | Sword/Tool Enchantability |
|-----------|----------------------|---------------------------|
| Wood      | N/A                  | 15                        |
| Leather   | 15                   | N/A                       |
| Stone     | N/A                  | 5                         |
| Chain     | 12                   | N/A                       |
| Iron      | 9                    | 14                        |
| Gold      | 25                   | 22                        |
| Diamond   | 10                   | 10                        |
| Turtle    | 9                    | N/A                       |
| Netherite | 15                   | 15                        |
| Other     | 1                    | 1                         |

For an in-depth exploration of enchantability and its impact on the game, refer to the [Enchanting Mechanics on the Unofficial Minecraft Wiki](https://minecraft.wiki/w/Enchanting_mechanics#Enchantability).


## Entity Placer

Allows an item to place entities into the world. Additionally, in version 1.19.80 and above, the component allows the item to set the spawn type of a monster spawner.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:entity_placer":{
    "entity": "minecraft:spider",
    "dispense_on": ["minecraft:web"],
    "use_on": ["minecraft:web"]
}
```

## Food

Sets the item as a food component, allowing it to be edible to the player.

:::tip
The `minecraft:food` must have the `minecraft:use_modifiers` component in order to function properly.
:::

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:food":{
    "can_always_eat": false,
    "nutrition" : 3,
    "saturation_modifier": "0.6",
    "using_converts_to": "bowl"
}
```

## Fuel

Allows this item to be used as fuel in a furnace to 'cook' other items.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:fuel":{
    "duration": 3.0
}
```

## Glint

Determines whether the item has the enchanted glint render effect on it.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:glint": false
```

## Hand Equipped

Determines if an item is rendered like a tool while in-hand.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:hand_equipped": {
    "value": true
}
```

## Hover Text Color

Determines the color of the item name when hovering over it.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:hover_text_color": "green"
```

## Icon

Sets the icon item component. Determines the icon to represent the item in the UI and elsewhere.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:icon":{
    "texture": "oak_slab"
}
```

## Interact Button

Is a boolean or string that determines if the interact button is shown in touch controls, and what text is displayed on the button. When set to 'true', the default 'Use Item' text will be used.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:interact_button": "Use This Custom Item" // Can be a string or a boolean value. 
```

## Liquid Clipped

Determines whether an item interacts with liquid blocks on use.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:liquid_clipped": {
    "value": true
}
```

## Max Stack Size

Determines how many of an item can be stacked together.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:max_stack_size": {
    "value": 64
}
```

## Projectile

Compels the item to shoot, similarly to an arrow. Items with `minecraft:projectile` can be shot from dispensers or used as ammunition for items with the `minecraft:shooter` item component. Additionally, this component sets the entity that is spawned for items that also contain the `minecraft:throwable` component.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:projectile":{
    "minimum_critical_power": 1.25,
    "projectile_entity": "arrow"
}
```

## Record

Used by record items to play music.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:record": {
    "comparator_signal": 1,
    "duration": 5,
    "sound_event": "ambient.tame"
}
```

### Sound Event

Listed [here](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/itemreference/examples/itemcomponents/minecraft_record?view=minecraft-bedrock-stable) are the available sounds

## Repairable

Defines the items that can be used to repair a defined item, and the amount of durability each item restores upon repair. Each entry needs to define a list of strings for 'items' that can be used for the repair and an optional 'repair_amount' for how much durability is repaired.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:repairable":{
    "on_repaired": "minecraft:celebrate",
    "repair_items": ["anvil"]
}
```

## Shooter

Compels an item to shoot projectiles, similarly to a bow or crossbow. Must have the `minecraft:use_modifiers` component in order to function properly.

:::tip
Ammunition used by `minecraft:shooter` must have the `minecraft:projectile` component in order to function properly.
:::

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:shooter": {
    "ammunition": [
        {
            "item": "custom_projectile",
            "use_offhand": true,
            "search_inventory": true,
            "use_in_creative": true
        }
    ],
    "max_draw_duration": 1.0,
    "scale_power_by_draw_duration": true,
    "charge_on_draw": false
}
```

## Should Despawn

Determines if an item should despawn while floating in the world.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:should_despawn": {
    "value": true
}
```

## Stacked By Data

Determines if the same item with different aux values can stack. Additionally, this component defines whether the item actors can merge while floating in the world.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:stacked_by_data": {
    "value": true
}
```

## Tags

Determines which tags are included on a given item.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:tags": {
    "tags": [
        "custom_tag"
    ]
}
```

## Throwable

Sets the throwable item component.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:throwable":{
    "do_swing_animation" : false,
    "launch_power_scale" : 1.0,
    "max_draw_duration" : 0.0,
    "max_launch_power" : 1.0,
    "min_draw_duration" : 0.0,
    "scale_power_by_draw_duration" : false
}
```

## Use Animation

Determines which animation plays when using an item.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:use_animation": "eat"
```

## Use Modifiers

Determines how long an item takes to use in combination with components such as Shooter, Throwable, or Food.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:use_modifiers": {
    "use_duration": 1.6,
    "movement_modifier": 0.35
}
```

## Wearable

Sets the wearable item component.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:wearable":{
    "dispensable" : true,
    "slot": "slot.chest"
}
```

### Slots
| Slot Name            |
| -------------------- |
| slot.weapon.mainhand |
| slot.weapon.offhand  |
| slot.armor.head      |
| slot.armor.chest     |
| slot.armor.legs      |
| slot.armor.feet      |
| slot.hotbar          |
| slot.inventory       |
| slot.enderchest      |
| slot.saddle          |
| slot.armor           |
| slot.chest           |
| slot.equippable      |

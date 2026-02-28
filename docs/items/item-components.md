---
title: Item Components
description: Item components are used to change how your item appears and functions in the world.
category: General
nav_order: 2
license: true
mentions:
    - SmokeyStack
    - QuazChick
---

:::tip FORMAT VERSION 1.26.0
Using the latest format version when creating custom items provides access to fresh features and improvements.
The wiki aims to share up-to-date information about custom items, and currently targets format version 1.26.0.
:::

## Applying Components

Item components are used to change how your item appears and functions in the world. They are applied in the `components` child of `minecraft:item`.

<CodeHeader>BP/items/custom_item.json</CodeHeader>

```json
{
    "format_version": "1.26.0",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_item",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            "minecraft:icon": "wiki:custom_item"
        }
    }
}
```

## List of Components

### Allow Off-Hand

Determines whether an item can be equipped into the off-hand slot of the inventory.

_Requires format version [1.20.20](/items/item-format-history#_1-20-20) or later._

#### Boolean Format {#allow-off-hand-boolean}

-   When `true`{lang=json}, the item can be equipped into the off-hand slot.
-   When `false`{lang=json} (default), the item cannot be equipped into the off-hand slot.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:allow_off_hand": true
```

### Block Placer

Allows the item to be used to place a block, decrementing the item stack when the player is not in creative mode.

_Requires format version [1.21.60](/items/item-format-history#_1-21-60) or later._

#### Object Format {#block-placer-object}

-   `block` — String / Object
    -   Defines the block that will be placed.
-   `replace_block_item` — Boolean (optional)
    -   Learn more about replacing block items [here](/blocks/blocks-as-items#replacing-block-items).
-   `use_on` — Array (optional)
    -   Lists the blocks (as an array of [block descriptors](/documentation/shared-constructs#block-descriptors)) that this item can be used on to place the block.
    -   If empty or omitted, the item will be able to place on any block.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:block_placer": {
    "block": "wiki:custom_block",
    "use_on": [
        "minecraft:dirt",
        {
            "name": "wiki:another_custom_block",
            "states": {
                "wiki:custom_state": 5
            }
        },
        {
            "tags": "q.any_tag('wiki:custom_tag')"
        }
    ]
}
```

### Bundle Interaction

Enables the bundle tooltip and functionality.

The item must have the `minecraft:storage_item` component for this component to function.

_Requires format version [1.21.40](/items/item-format-history#_1-21-40) or later._

#### Object Format {#bundle-interaction-object}

-   `num_viewable_slots` — Integer (`1-64`{lang=js})
    -   Defines the maximum number of item stacks accessible from the top of the bundle.
    -   Slots are accessed via the tooltip in rows filling from the bottom right to the top left.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:bundle_interaction": {
    "num_viewable_slots": 12
}
```

### Can Destroy in Creative

Determines whether the item will break blocks when the player is attacking in creative mode.

_Requires format version [1.20.10](/items/item-format-history#_1-20-10) or later._

#### Boolean Format {#can-destroy-in-creative-boolean}

-   When `true`{lang=json} (default), the item can destroy blocks in creative mode.
-   When `false`{lang=json}, the item cannot destroy blocks in creative mode.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:can_destroy_in_creative": true
```

### Compostable

Allows this item to be used on or siphoned into (using hoppers) a composter.

_Requires format version [1.21.60](/items/item-format-history#_1-21-60) or later._

#### Object Format {#compostable-object}

-   `composting_chance` — Float (`0-100`{lang=js})
    -   How likely the compost level is to increase as a percentage.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:compostable": {
    "composting_chance": 50 // 50% chance to increment the compost level
}
```

### Cooldown

Determines how cooldowns are triggered for the item and how long each cooldown should last.

_Requires format version [1.20.10](/items/item-format-history#_1-20-10) or later._

#### Object Format {#cooldown-object}

-   `category` — String
    -   The category of cooldown for this item.
    -   Items with the same category will share cooldowns.
-   `duration` — Float
    -   The duration of time (in seconds) items with a matching category will spend cooling down before becoming usable again.
    -   If this value is a negative number, it renders the item unusable.
-   `type` — String (optional)
    -   Determines which of the following types of input the cooldown affects:
        -   `"use"`{lang=json} (default) causes the cooldown to start when the item is used and prevents the item from being used while the cooldown is active.
        -   `"attack"`{lang=json} causes the cooldown to start when the player attacks while holding the item and prevents the item from being used to attack while the cooldown is active.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:cooldown": {
    "category": "wiki:cooldown",
    "duration": 0.2,
    "type": "use"
}
```

### Damage

Determines how much extra damage (`0-32767`{lang=js}) the item deals on attack, displaying as "+X Attack Damage" in the item's tooltip.

_Requires format version [1.26.0](/items/item-format-history#_1-26-0) or later._

#### Integer Format {#damage-integer}

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:damage": 10
```

### Damage Absorption

Causes the item to absorb damage that would otherwise be dealt to its wearer.
For this to happen, the item needs to have the durability component and be equipped in an armor slot.

_Requires format version [1.21.20](/items/item-format-history#_1-21-20) or later._

#### Object Format {#damage-absorption-object}

-   `absorbable_causes` — Array
    -   List of damage causes (such as `entity_attack` and `magma`) that can be absorbed by the item.
    -   See the autocompletions for the `/damage` command for a list of available damage causes.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:damage_absorption": {
    "absorbable_causes": ["all"]
}
```

### Digger

Determine how quickly an item can dig specific blocks.

_Requires format version [1.20.20](/items/item-format-history#_1-20-20) or later._

#### Object Format {#digger-object}

-   `destroy_speeds` — Array
    -   `block` — [Block Descriptor](/documentation/shared-constructs#block-descriptors)
        -   The block that the related destroy speed will apply to.
    -   `speed` — Integer
        -   The speed at which the block will be mined.
        -   When `0`{lang=json}, the item will not be able to destroy the block.
-   `use_efficiency` — Boolean (optional)
    -   Determines whether the "Efficiency" enchantment is able to affect the defined destroy speeds.
    -   By default, this is set to `false`{lang=json}.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:digger": {
    "use_efficiency": true,
    "destroy_speeds": [
        {
            "block": "minecraft:gravel",
            "speed": 0 // Prevents gravel blocks from being mined
        }
        {
            "block": {
                "tags": "q.any_tag('minecraft:is_pickaxe_item_destructible')"
            },
            "speed": 6
        }
    ]
}
```

### Display Name

Determines the localization key used when displaying the item's name.

-   If the given string does not have a translation, the raw string will be displayed.
-   By default, `item.<identifier>`{lang=xml} is used.

_Requires format version [1.20.0](/items/item-format-history#_1-20-0) or later._

#### Object Format {#display-name-object}

-   `value` — String
    -   The localization key to associate with the item.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:display_name": {
    "value": "item.wiki:custom_item"
}
```

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_item=Custom Item
```

### Durability

Allows the item to take damage and determines how much damage the item can take before breaking.

-   Allows the durability of the item to be combined with another item of the same type via crafting.
-   Even if the item is a [digger](#digger), it will not be damaged when mining blocks.
-   Each time an entity is hit using this item, the item's damage increases by 2.
    This does not match vanilla damage for weapons, but does match vanilla damage for tools.
-   When the item is [wearable](#wearable), hitting an entity will not damage the item.
    Instead, it implicitly increments the damage when worn and the entity is hurt.

#### Object Format {#durability-object}

-   `damage_chance` — Integer [Range](/documentation/shared-constructs#range-objects) (optional)
    -   Determines the percentage chance range of the item receiving damage when it has the "Unbreaking" enchantment.
    -   When the item does not have the "Unbreaking" enchantment, it is damaged 100% of the time regardless of this range.
    -   When the item has the "Unbreaking" enchantment, its chance of being damaged is as follows:
        -   Unbreaking I — 50% of the range.
        -   Unbreaking II — 33% of the range.
        -   Unbreaking III — 25% of the range.
-   `max_durability` — Integer (`0-32767`{lang=js}) ([MCPE-180112](https://bugs.mojang.com/browse/MCPE-180112))
    -   The amount of damage that the item can take before breaking.

### Durability Sensor

Allows an item to trigger vanilla level events when it receives damage.

_Requires format version [1.21.20](/items/item-format-history#_1-21-20) or later._

#### Object Format {#durability-sensor-object}

-   `durability_thresholds` — Array
    -   Items define both the durability thresholds, and the effects emitted when each threshold is met.
    -   When multiple thresholds are met, only the threshold with the lowest durability after applying the damage is considered.
    -   `durability` — Integer
        -   The effects are emitted when the item durability value is less than or equal to this value.
    -   `particle_type` — String (optional)
        -   Vanilla particle type to spawn when the threshold is met.
    -   `sound_event` — String (optional)
        -   Vanilla level sound event to trigger when the threshold is met.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:durability_sensor": {
    "durability_thresholds": [
        {
            "durability": 100,
            "particle_type": "minecraft:explosion_manual",
            "sound_event": "blast"
        },
        {
            "durability": 5,
            "sound_event": "raid.horn"
        }
    ]
}
```

### Dyeable

Allows the item to be dyed by cauldron water.
Once dyed, the item will display the `dyed` [icon](#icon) texture rather than `default`.

_Requires format version [1.21.30](/items/item-format-history#_1-21-30) or later._

#### Object Format {#dyeable-object}

-   `default_color` — String (optional)
    -   Determines the color to use by default before the player has dyed the item.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:dyeable": {
    "default_color": "#ffffff"
}
```

### Enchantable

Allows the item to be enchanted in enchanting tables, anvils, loot tables and other places.

_Requires format version [1.20.30](/items/item-format-history#_1-20-30) or later._

#### Object Format {#enchantable-object}

-   `slot` — String
    -   Determines which enchantments can be applied to the item.
-   `value` — Integer (`0-255`{lang=js}) ([MCPE-180331](https://bugs.mojang.com/browse/MCPE-180331))
    -   Determines the quality and quantity of enchantments available when enchanting the item using an Enchanting Table.

#### Enchantable Slots

| Slot Name       |
| --------------- |
| `armor_feet`    |
| `armor_torso`   |
| `armor_head`    |
| `armor_legs`    |
| `axe`           |
| `bow`           |
| `cosmetic_head` |
| `crossbow`      |
| `elytra`        |
| `fishing_rod`   |
| `flintsteel`    |
| `hoe`           |
| `melee_spear`   |
| `pickaxe`       |
| `shears`        |
| `shield`        |
| `shovel`        |
| `sword`         |
| `all`           |

#### Enchantability Value

Determines the item's enchantability, influencing the quality and quantity of potential enchantments.
Higher values boost the chance of guaranteeing more powerful enchantments.

The table below details enchantability scores across different materials, showcasing their ability to get enchantments.

| Material  | Armor Enchantability | Tool/Weapon Enchantability |
| --------- | -------------------- | -------------------------- |
| Wood      | N/A                  | 15                         |
| Leather   | 15                   | N/A                        |
| Stone     | N/A                  | 5                          |
| Chain     | 12                   | N/A                        |
| Iron      | 9                    | 14                         |
| Gold      | 25                   | 22                         |
| Diamond   | 10                   | 10                         |
| Turtle    | 9                    | N/A                        |
| Netherite | 15                   | 15                         |
| Other     | 1                    | 1                          |

For an in-depth exploration of enchantability and its impact on the game, refer to the [Minecraft Wiki](https://minecraft.wiki/w/Enchanting_table_mechanics#Enchantability).

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:enchantable": {
    "slot": "sword",
    "value": 10
}
```

### Entity Placer

Allows the item to place specified entities into the world and spawner blocks.

_Requires format version [1.20.0](/items/item-format-history#_1-20-0) or later._

#### Object Format {#entity-placer-object}

-   `entity` — String
    -   The entity to be placed in the world.
    -   May optionally specify a custom spawn event in the following format `wiki:entity<wiki:event>`{lang=xml}.
        -   By default, the `minecraft:entity_spawned` event from is triggered when the entity is spawned.
-   `dispense_on` — Array (optional)
    -   Lists the blocks (as an array of [block descriptors](/documentation/shared-constructs#block-descriptors)) that this item can be used on to place the block.
    -   If empty or omitted, the item will be able to be dispensed onto any block.
    -   The mouth of the dispenser has to be pointing to either an air block or the block defined in this array.
        If the dispenser is facing an air block, the game checks whether the block below matches a block defined in this array
-   `use_on` — Array (optional)
    -   Lists the blocks (as an array of [block descriptors](/documentation/shared-constructs#block-descriptors)) that this item can be used on to place the block.
    -   If empty or omitted, the item will be able to place on any block.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
    "minecraft:entity_placer": {
        "entity": "minecraft:spider",
        "dispense_on": [
            "minecraft:dirt"
        ],
        "use_on": [
            "minecraft:dirt"
        ]
    }
```

### Fire Resistant

Determines whether items should be able to withstand fire and lava when dropped rather than being destroyed.

#### Object Format {#fire-resistant-object}

-   `value` — Boolean
    -   Determines whether the item is fire resistant.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:fire_resistant": {
    "value": true
}
```

### Food

Allows the item to be consumed when used by players.

-   The item must also have the [`minecraft:use_modifiers`](#use-modifiers) with a defined `use_duration` component in order to function properly.
-   To display an eating/drinking animation, also apply the [`minecraft:use_animation`](#use-animation) component to the item.

:::danger CAN ALWAYS EAT ([MCPE-178647](https://bugs.mojang.com/browse/MCPE-178647), [MCPE-188410](https://bugs.mojang.com/browse/MCPE-188410))
Custom items can always be eaten when the player is full even when `can_always_eat` is set to `false`{lang=json}.
:::

_Requires format version [1.20.30](/items/item-format-history#_1-20-30) or later._

#### Object Format {#food-object}

-   `can_always_eat` — Boolean (optional)
    -   Determines whether the item can be consumed even when the player is full.
    -   Creative mode players can always eat food regardless of this value.
-   `nutrition` — Integer
    -   The value that is added to the player's nutrition after the item is consumed.
    -   Negative values can be used to increase the player's hunger.
-   `saturation_modifier` — Float
    -   Saturation Modifier is used in this formula: `nutrition * saturation_modifier * 2`{lang=js} when applying the saturation buff.
    -   Value must be greater than 0
-   `using_converts_to` — String (optional)
    -   When used, converts to the item specified by the string in this field.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:food": {
    "nutrition": 3,
    "saturation_modifier": 0.6,
    "using_converts_to": "minecraft:bowl"
}
```

### Fuel

Allows the item to be used as fuel in a furnace to smelt other items.

_Requires format version [1.20.0](/items/item-format-history#_1-20-0) or later._

#### Object Format {#fuel-object}

-   `duration` — Float (`0.5-107374180.0`{lang=js})
    -   The time duration (in seconds) that this item fuels furnaces for.
    -   The maximum value is a result of the tick-converted duration reaching the 32-bit integer limit.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:fuel": {
    "duration": 8.5
}
```

### Glint

Determines whether the item has the enchanted glint effect, even when not enchanted.

_Requires format version [1.20.20](/items/item-format-history#_1-20-20) or later._

#### Boolean Format {#glint-boolean}

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:glint": false
```

### Hand Equipped

Determines whether the item is rendered like a tool while equipped in third person.

_Requires format version [1.20.20](/items/item-format-history#_1-20-20) or later._

#### Boolean Format {#hand-equipped-boolean}

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:hand_equipped": true
```

### Hover Text Color

Determines the color of the item's name. Valid colors can be found on the [Minecraft Wiki](https://minecraft.wiki/w/Formatting_codes#Color_codes).

_Requires format version [1.20.10](/items/item-format-history#_1-20-10) or later._

#### String Format {#hover-text-color-string}

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:hover_text_color": "minecoin_gold"
```

### Icon

Determines the icon to represent the item in the UI and elsewhere. Released from experiment in format version 1.20.10.

_Requires format version [1.20.60](/items/item-format-history#_1-20-60) or later._

#### String Format {#icon-string}

A shorthand format for defining the `default` texture of the item icon.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:icon": "wiki:custom_item"
```

#### Object Format {#icon-object}

-   `textures` — Object
    -   Contains the different textures that can be used for the item's icon.
    -   Armor trim textures and palettes can be specified here as well.
    -   The icon textures are the keys from the `resource_pack/textures/item_texture.json -> texture_data` object associated with the texture file.
    -   `default`
        -   The regular texture to display as the item's icon.
        -   If you're only defining this texture, consider using the shorthand [string format](#icon-string) instead.
    -   `dyed`
        -   The icon displayed after a [dyeable](#dyeable) item is dyed in a cauldron.
    -   `icon_trim`
        -   The icon overlay for when your item has a trim on it.
        -   `icon_trim` implicitly falls back to the type of slot in the `minecraft:wearable` component. Currently, the icon will only overlay if the shortname matches the item’s identifier. Whether this is a bug or feature is unknown yet.
    -   `bundle_open_back`
        -   The texture displayed behind the preview of the item selected in the [bundle interaction](#bundle-interaction) tooltip.
    -   `bundle_open_front`
        -   The texture displayed in front of the preview of the item selected in the [bundle interaction](#bundle-interaction) tooltip.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:icon": {
    "textures": {
        "default": "wiki:custom_item",
        "dyed": "wiki:custom_item_dyed" // Greyscale texture to be tinted
    }
}
```

### Interact Button

Determines whether the interact button is shown in touch controls when looking at an entity and the text that is displayed on the button.

_Requires format version [1.20.30](/items/item-format-history#_1-20-30) or later._

#### Boolean Format {#interact-button-boolean}

-   When `true`{lang=json}, the generic "Use Item" (`action.interact.use`) text will be displayed on the interact button.
-   When `false`{lang=json} (default), the interact button will not be displayed.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:interact_button": true
```

#### String Format {#interact-button-string}

Enables the interact button and determines the localization key of the text to display.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:interact_button": "action.interact.wiki:launch"
```

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
action.interact.wiki:launch=Launch
```

### Kinetic Weapon

Causes the item to damage (as well as dismount and apply knockback to) each entity that the player moves towards (or that move towards the player) while the item is being used.

#### Object Format {#kinetic-weapon-object}

-   `delay` — Integer
    -   Determines the duration (in ticks) before kinetic damage and effects start to be applied.
-   `hitbox_margin` — Float
    -   Determines how close (in blocks) each target's collision needs to be to the player's view direction to be affected by the kinetic attack.
    -   By default, there is no additional hitbox margin.
-   `reach` — Float [Range](/documentation/shared-constructs#range-objects)
    -   Determines the range (in blocks) of how far away entities must be from the player in order to be affected by the kinetic attack.
    -   By default, entities between 0 and 3 blocks away from the player will be affected by the kinetic attack.
-   `creative_reach` — Float [Range](/documentation/shared-constructs#range-objects)
    -   Determines the `reach` applied when the player is in creative mode.
    -   By default, players in creative mode will be restricted to the normal `reach` range.
-   `damage_multiplier` — Float
    -   Determines the base damage of the kinetic attack is multiplied by to obtain a multiplied damage value.
-   `damage_modifier` — Float
    -   Added to the multiplied damage value to obtain a final damage value to be inflicted upon each target.
-   `damage_conditions` — Object
    -   Lists the conditions that need to be met for damage to be inflicted.
-   `dismount_conditions` — Object
    -   Lists the conditions that need to be met for each target to be dismounted from the entity it is riding by the kinetic attack.
    -   By default, entities are never dismounted.
-   `knockback_conditions` — Object
    -   Lists the conditions that need to be met for each target to be receive knockback from the kinetic attack.
    -   By default, knockback is never applied.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:kinetic_weapon": {
    "delay": 15,
    "reach": {
        "min": 2.0,
        "max": 4.5
    },
    "creative_reach": {
        "min": 2.0,
        "max": 7.5
    },
    "hitbox_margin": 0.25,
    "damage_multiplier": 0.7,
    "damage_conditions": {
        "max_duration": 300,
        "min_relative_speed": 4.6
    },
    "knockback_conditions": {
        "max_duration": 120,
        "min_speed": 5.1
    },
    "dismount_conditions": {
        "max_duration": 100,
        "min_speed": 14.0
    }
}
```

### Liquid Clipped

Determines whether an item interacts with liquid blocks on use, as long as no blocks behind the liquid are selected.
The interaction takes place inside the liquid block, not on its sides.

_Requires format version [1.20.20](/items/item-format-history#_1-20-20) or later._

#### Boolean Format {#liquid-clipped-boolean}

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:liquid_clipped": true
```

### Max Stack Size

Determines the maximum number of this item that can be stacked together in containers and on the ground.

_Requires format version [1.20.10](/items/item-format-history#_1-20-10) or later._

#### Integer Format {#max-stack-size-integer}

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:max_stack_size": 64
```

### Piercing Weapon

Causes the item to damage all entities in a straight line from the player's view direction when attacking.

-   If there are block collisions between the player and other entities, the damage will be blocked.
-   Prevents the item from being used to mine blocks.

#### Object Format {#piercing-weapon-object}

-   `hitbox_margin` — Float
    -   Determines how close (in blocks) each entity's collision needs to be to the player's view direction to receive damage.
    -   By default, there is no additional hitbox margin.
-   `reach` — Float [Range](/documentation/shared-constructs#range-objects)
    -   Determines the range (in blocks) of how far away entities must be from the player in order to receive damage.
    -   By default, entities between 0 and 3 blocks away from the player will receive damage.
-   `creative_reach` — Float [Range](/documentation/shared-constructs#range-objects)
    -   Determines the `reach` applied when the player is in creative mode.
    -   By default, players in creative mode will be restricted to the normal `reach` range.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:piercing_weapon": {
    "reach": {
        "min": 2.0,
        "max": 4.5
    },
    "creative_reach": {
        "min": 2.0,
        "max": 7.5
    },
    "hitbox_margin": 0.25
}
```

### Projectile

Associates a projectile entity with this item, allowing it to be used as [shooter](#shooter) ammunition or [thrown](#throwable).

_Requires format version [1.20.10](/items/item-format-history#_1-20-10) or later._

#### Object Format {#projectile-object}

-   `minimum_critical_power` — Float (optional)
    -   Determines the time (in seconds) that a projectile needs to charge in order to deal critical damage.
-   `projectile_entity` — String
    -   The type of entity to be fired as a projectile.
    -   If no namespace is specified, it is assumed to be `minecraft`.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:projectile": {
    "minimum_critical_power": 1.25,
    "projectile_entity": "arrow"
}
```

### Rarity

Represents how difficult the item is to obtain by changing the color of its name text.
This component will be overridden and have no effect if the `minecraft:hover_text_color` is also applied.

An item's rarity value will be upgraded to `rare` if enchanted, or `epic` if its base rarity is already `rare`.
An `epic` rarity item will remain unchanged when enchanted.

_Requires format version [1.21.30](/items/item-format-history#_1-21-30) or later._

#### String Format {#rarity-string}

-   `common` results in a white name.
-   `uncommon` results in a yellow name.
-   `rare` results in an aqua name.
-   `epic` results in a light purple name.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:rarity": "rare"
```

### Record

Allows the item to be inserted into a Jukebox.

_Requires format version [1.20.10](/items/item-format-history#_1-20-10) or later._

#### Object Format {#record-object}

-   `comparator_signal` — Integer (`0-15`{lang=js})
    -   Redstone power level for comparators to produce when pointing from a Jukebox containing the item.
-   `duration` — Float
    -   Determines the duration (in seconds) that the record will play for.
    -   This includes how long note particles will play above the Jukebox for, as well as how long it takes before a hopper can siphon the item out of the Jukebox.
-   `sound_event` — String
    -   Determines the _vanilla_ sound event triggered when the item is inserted into a Jukebox.
    -   Also used to determine the localization key of the item's description in its tooltip.
        -   The localization key will follow the format `item.record_<id>.desc`{lang=xml}, where `<id>`{lang=xml} is the substring of the sound event following the last `.` character.
        -   For example, if the `"bucket.empty.powder_snow"`{lang=json} sound event were used, the description would be `item.record_powder_snow.desc`.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:record": {
    "comparator_signal": 1,
    "duration": 5,
    "sound_event": "bucket.empty.powder_snow"
}
```

### Repairable

Determines which items can be used to repair the item, as well as the amount of durability specified items will repair.

By default, items can be repaired by other items of the same type, combining their remaining durability.

_Requires format version [1.20.10](/items/item-format-history#_1-20-10) or later._

#### Object Format {#repairable-object}

-   `repair_items` — Array
    -   `items` — Array
        -   The items used to repair the item
        -   Required Field
    -   `repair_amount` — Integer / String
        -   How much durability is repaired
        -   When defined as a string, the repair amount is evaluated as a molang expression
            -   The second slot in the anvil can be referenced using `context.other`{lang=molang}.
            -   Random functions such as `math.random`{lang=molang} are supported.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:repairable": {
    "repair_items": [
        {
            "items": [
                "minecraft:diamond"
            ],
            "repair_amount": 10
        },
        {
            "items": [
                { "tags": "q.any_tag('minecraft:planks')" }
            ],
            "repair_amount": "q.max_durability * 0.25"
        }
    ]
}
```

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:repairable": {
    "repair_items": [
        {
            "items": [
                "minecraft:diamond"
            ],
            "repair_amount": "math.min(q.remaining_durability + c.other->q.remaining_durability + math.floor(q.max_durability / 20), c.other->q.max_durability)" // Vanilla formula
        }
    ]
}
```

### Shooter

Allows projectile ammunition items to be shot by using the item. Must have the [`minecraft:use_modifiers`](#use-modifiers) component in order to function properly.

Custom shooters can be used, applying use modifiers, even when no ammunition is available ([MCPE-228331](https://bugs.mojang.com/browse/MCPE-228331)).

_Requires format version [1.20.10](/items/item-format-history#_1-20-10) or later._

#### Object Format {#shooter-object}

-   `ammunition` — Array
    -   `item` — String
        -   Denotes the item description identifier. Item must have the `minecraft:projectile` component.
    -   `search_inventory` — Boolean
        -   Determines whether inventory slots can be searched for this ammunition.
    -   `use_in_creative` — Boolean
        -   Determines whether this ammunition should be used by default when the holder is in creative mode.
        -   If there is different ammunition in the player's off-hand, and `use_offhand` is `true`{lang=json}, that ammunition will be used instead.
    -   `use_offhand` — Boolean
        -   Determines whether this ammunition can be used when in the off-hand slot.
-   `charge_on_draw` — Boolean ([MCPE-228332](https://bugs.mojang.com/browse/MCPE-228332), [MCPE-228333](https://bugs.mojang.com/browse/MCPE-228333))
    -   Determines whether ammunition is charged into the item when it is drawn, like a crossbow ([MCPE]).
    -   The `use_duration` [use modifier](#use-modifiers) must be greater than or equal to `max_draw_duration` for this to function.
-   `max_draw_duration` — Float
    -   Determines the duration (in seconds) that the weapon can be drawn for before releasing automatically.
-   `scale_power_by_draw_duration` — Boolean
    -   Determines whether the power of the released projectile increases the longer the weapon is drawn.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:shooter": {
    "ammunition": [
        {
            "item": "minecraft:arrow",
            "search_inventory": true,
            "use_in_creative": true, // This is the default ammunition to use in creative move
            "use_offhand": true
        },
        {
            "item": "wiki:custom_projectile",
            "use_offhand": true // This ammunition can only be used when in the off-hand
        }
    ],
    "scale_power_by_draw_duration": true
}
```

### Should Despawn

Determines whether stacks of the item that are floating on the ground should eventually despawn.

_Requires format version [1.20.20](/items/item-format-history#_1-20-20) or later._

#### Boolean Format {#should-despawn-boolean}

-   When `true`{lang=json} (default), the item will despawn as an entity.
-   When `false`{lang=json}, the item will not despawn as an entity.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:should_despawn": true
```

### Stacked by Data

Determines whether items of the same type with different data are stacked separately in container slots and on the ground.

_Requires format version [1.20.20](/items/item-format-history#_1-20-20) or later._

#### Boolean Format {#stacked-by-data-boolean}

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:stacked_by_data": true
```

### Storage Item

Allows the item to act as a container and store other items.
The item must have a max stack size of 1 for this component to function.

_Requires format version [1.21.60](/items/item-format-history#_1-21-60) or later._

#### Object Format {#storage-item-object}

-   `allow_nested_storage_items` — Boolean
    -   Determines whether other storage items can be placed into the container.
-   `allowed_items` — Array
    -   Defines the items that are exclusively allowed in the container.
    -   If empty all items are allowed in the container.
-   `banned_items` — Array
    -   Defines the items that are not allowed in the container.
-   `max_slots` — Integer (`1-64`{lang=js})
    -   Defines the number of slots in the container.
-   `max_weight_limit` — Integer

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:storage_item": {
    "max_slots": 64,
    "allow_nested_storage_items": true,
    "banned_items": [
        "minecraft:shulker_box",
        "minecraft:undyed_shulker_box"
    ]
}
```

### Storage Weight Limit

Defines the maximum allowed total weight of all items in the storage item container.
The item must have the `minecraft:storage_item` component for this component to function.

-   To calculate the weight of an item, divide 64 by its max stack size.
-   Items that stack to 64 weigh 1 each, those that stack to 16 weigh 4 each and non-stackable items weigh 64.

_Requires format version [1.21.60](/items/item-format-history#_1-21-60) or later._

#### Object Format {#storage-weight-limit-object}

-   `max_weight_limit` — Integer

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:storage_weight_limit": {
    "max_weight_limit": 64
}
```

### Storage Weight Modifier

Defines the additional weight the item adds when inside another storage item.

_Requires format version [1.21.60](/items/item-format-history#_1-21-60) or later._

#### Object Format {#storage-weight-modifier-object}

-   `weight_in_storage_item` — Integer (`0-64`{lang=js})
    -   When `0`{lang=json}, the item is not allowed inside another storage item.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:storage_weight_modifier": {
    "weight_in_storage_item": 4
}
```

### Swing Duration

Determines the base duration, in seconds, of the player's swing animation when mining, attacking or using the item.
The actual swing duration may differ from this value due to effects such as Mining Fatigue.

#### Float Format {#swing-duration-float}

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:swing_duration": {
    "value": 1
}
```

### Swing Sounds

Determines the vanilla sound events triggered when a player attacks when holding the item.

#### Object Format {#swing-sounds-object}

-   `attack_miss` — String (optional)
    -   Determines the _vanilla_ sound event triggered when no entity is hit or no damage is dealt.
-   `attack_hit` — String (optional)
    -   Determines the _vanilla_ sound event triggered when an entity is hit and non-critical damage is dealt.
-   `attack_critical_hit` — String (optional)
    -   Determines the _vanilla_ sound event triggered when an entity is hit and critical damage is dealt.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:swing_sounds": {
    "attack_miss": "item.wooden_spear.attack_miss",
    "attack_hit": "item.wooden_spear.attack_hit"
}
```

### Tags

Determines the list of tags that the item has.

_Requires format version [1.20.50](/items/item-format-history#_1-20-50) or later._

#### Object Format {#tags-object}

-   `tags` — Array
    -   An array of tags to apply to the item.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:tags": {
    "tags": [
        "wiki:custom_tag"
    ]
}
```

### Throwable

Allows the item to be used to throw the projectile defined in the item's [`minecraft:projectile`](#projectile) component.

_Requires format version [1.20.10](/items/item-format-history#_1-20-10) or later._

#### Object Format {#throwable-object}

-   `do_swing_animation` — Boolean
    -   Whether the item should use the swing animation when thrown.
-   `min_draw_duration` — Float
    -   Determines the duration (in seconds) that the item needs to be drawn for before it can be released.
-   `max_draw_duration` — Float
    -   Determines the duration (in seconds) that the item can be drawn for before releasing automatically.
-   `launch_power_scale` — Float
    -   The scale at which the power of the throw increases.
    -   Negative values will launch the projectile behind the player.
-   `max_launch_power` — Float
    -   The maximum power to launch the throwable item.
-   `scale_power_by_draw_duration` — Boolean
    -   Determines whether the power of the released projectile increases the longer the item is drawn.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:throwable": {
    "do_swing_animation": false,
    "launch_power_scale": 1.0,
    "max_draw_duration": 0.0,
    "max_launch_power": 1.0,
    "min_draw_duration": 0.0,
    "scale_power_by_draw_duration": false
}
```

### Use Animation

Determines which animation plays when using a chargeable item, such as when eating [food](#food).

_Requires format version [1.20.20](/items/item-format-history#_1-20-20) or later._

#### String Format {#use-animation-string}

| Value                   | Description                                                                                                                                                                 |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"eat"`{lang=json}      | Plays the first and third person consumption animations, producing particles and playing the chewing sound.                                                                 |
| `"drink"`{lang=json}    | Plays the first and third person consumption animations, playing the sipping sound.                                                                                         |
| `"bow"`{lang=json}      | Not functional, displays a broken third person arm animation.                                                                                                               |
| `"block"`{lang=json}    | Not functional, displays a broken third person arm animation.                                                                                                               |
| `"camera"`{lang=json}   | Not functional, displays a broken third person arm animation.                                                                                                               |
| `"crossbow"`{lang=json} | Not functional, displays a broken third person arm animation.                                                                                                               |
| `"none"`{lang=json}     | Not functional, displays a broken third person arm animation.                                                                                                               |
| `"brush"`{lang=json}    | Plays the first and third person brushing animations.                                                                                                                       |
| `"spear"`{lang=json}    | Plays the third person arm raising animation used by the Trident.<br/>For melee spear animations, apply the `minecraft:is_spear` tag to the item instead of this component. |
| `"spyglass"`{lang=json} | Plays the third person arm raising animation used by the Spyglass.                                                                                                          |

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:use_animation": "eat"
```

### Use Modifiers

General configuration for effects applied when using a chargeable item, such as when eating [food](#food).

_Requires format version [1.20.50](/items/item-format-history#_1-20-50) or later._

#### Object Format {#use-modifiers-object}

-   `emit_vibrations` — Boolean (optional)
    -   Determines whether the item emits vibrations when it starts and stops being used.
-   `movement_modifier` — Float (`0.0-1.0`{lang=js}) (optional)
    -   Modifier value to scale the players movement speed when item is in use.
-   `start_sound` — String (optional)
    -   Determines the _vanilla_ sound event that is triggered when the item starts to be used.
-   `use_duration` — Float
    -   The time duration (in seconds) that the item must be used for to complete a single use.

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:use_modifiers": {
    "movement_modifier": 0.5,
    "use_duration": 1.0
}
```

### Wearable

Allows the item to be worn by entities.

_Requires format version [1.20.20](/items/item-format-history#_1-20-20) or later._

#### Object Format {#wearable-object}

-   `hides_player_location` — Boolean (optional)
    -   Determines whether a player wearing the item will be hidden from the Locator Bar and Locator Maps.
-   `protection` — Integer (optional)
    -   The number of armor points this item contributes when worn.
-   `slot` — String
    -   The slot that the item can be equipped into, which must be one of the following values:
        -   `"slot.weapon.offhand"`{lang=json}
        -   `"slot.armor.head"`{lang=json}
        -   `"slot.armor.chest"`{lang=json}
        -   `"slot.armor.legs"`{lang=json}
        -   `"slot.armor.feet"`{lang=json}
    -   When set to an armor slot, the item's [max stack size](#max-stack-size) is set to 1 ([MCPE-176931](https://bugs.mojang.com/browse/MCPE-176931)).

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:wearable": {
    "protection": 10,
    "slot": "slot.armor.chest"
}
```

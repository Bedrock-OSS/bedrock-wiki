---
title: Menu Categories
description: Menu categories determine where items and blocks appear inside of the creative inventory and recipe book.
license: true
mentions:
    - Warhead51707
    - yanasakana
    - SirLich
    - SmokeyStack
    - MedicalJewel105
    - Chikorita-Lover
    - MiemieMethod
    - retr0cube
    - TheItsNameless
    - QuazChick
---

Menu categories determine where items and blocks appear inside of the creative inventory and recipe book.

-   A `category` can be defined to place the item under a tab (such as construction). Click [here](#list-of-categories) for a list of valid categories.
-   A `group` specifies which expandable group the item is placed into. If you use a custom value, a new expandable group won't be created, however items with the group will be placed next to each other in the creative inventory. Click [here](#list-of-groups) for a list of expandable groups.
-   You can also set `is_hidden_in_commands` to true to remove this block/item from commands, such as `/give` and `/setblock`.

If `menu_category` is omitted, the item will only be accessible through commands and won't appear in the creative inventory or recipe book.

**NOTE:** The menu category of custom spawn eggs cannot be modified. You must instead create a custom item with the `minecraft:entity_placer` component.

<CodeHeader></CodeHeader>

```json
"menu_category": {
    "category": "construction", // Tab the item is placed under
    "group": "minecraft:itemGroup.name.door", // Optional - Group the item is placed into
    "is_hidden_in_commands": false // Optional - default is false (item is usable in commands)
}
```

:::danger HIDDEN ITEMS INACCESSIBLE IN COMMANDS ([MCPE-177866](https://bugs.mojang.com/browse/MCPE-177866))
Currently, setting the category to "none" in a custom item (not block) prevents the item from being used in commands, overriding the "is_hidden_in_commands" option. This issue doesn't affect blocks.
:::

## Block Example

<CodeHeader>BP/blocks/balsa_wood.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:balsa_wood",
            "menu_category": {
                "category": "nature",
                "group": "minecraft:itemGroup.name.wood" // Placed into an expandable group
            }
        }
    }
}
```

## Item Example

<CodeHeader>BP/items/dagger.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:dagger",
            "menu_category": {
                "category": "equipment",
                "is_hidden_in_commands": true // Item cannot be used in commands
            }
        }
    }
}
```

## List of Categories

_For use with `menu_category` parameter, `category`._

| Category     | Description                                              |
| ------------ | -------------------------------------------------------- |
| construction | Added to the "Construction" tab.                         |
| equipment    | Added to the "Equipment" tab.                            |
| items        | Added to the "Items" tab.                                |
| nature       | Added to the "Nature" tab.                               |
| none         | Not added to a tab and only accessible through commands. |

## List of Vanilla Groups

_For use with the `menu_category` parameter, `group`._

<!-- page_dumper_start -->

| Creative Categories:                        |
| ------------------------------------------- |
| minecraft:itemGroup.name.anvil              |
| minecraft:itemGroup.name.arrow              |
| minecraft:itemGroup.name.axe                |
| minecraft:itemGroup.name.banner             |
| minecraft:itemGroup.name.banner_pattern     |
| minecraft:itemGroup.name.bed                |
| minecraft:itemGroup.name.boat               |
| minecraft:itemGroup.name.boots              |
| minecraft:itemGroup.name.bundles            |
| minecraft:itemGroup.name.buttons            |
| minecraft:itemGroup.name.candles            |
| minecraft:itemGroup.name.chalkboard         |
| minecraft:itemGroup.name.chest              |
| minecraft:itemGroup.name.chestboat          |
| minecraft:itemGroup.name.chestplate         |
| minecraft:itemGroup.name.compounds          |
| minecraft:itemGroup.name.concrete           |
| minecraft:itemGroup.name.concretePowder     |
| minecraft:itemGroup.name.cookedFood         |
| minecraft:itemGroup.name.copper             |
| minecraft:itemGroup.name.coral              |
| minecraft:itemGroup.name.coral_decorations  |
| minecraft:itemGroup.name.crop               |
| minecraft:itemGroup.name.door               |
| minecraft:itemGroup.name.dye                |
| minecraft:itemGroup.name.enchantedBook      |
| minecraft:itemGroup.name.fence              |
| minecraft:itemGroup.name.fenceGate          |
| minecraft:itemGroup.name.firework           |
| minecraft:itemGroup.name.fireworkStars      |
| minecraft:itemGroup.name.flower             |
| minecraft:itemGroup.name.glass              |
| minecraft:itemGroup.name.glassPane          |
| minecraft:itemGroup.name.glazedTerracotta   |
| minecraft:itemGroup.name.goatHorn           |
| minecraft:itemGroup.name.grass              |
| minecraft:itemGroup.name.hanging_sign       |
| minecraft:itemGroup.name.helmet             |
| minecraft:itemGroup.name.hoe                |
| minecraft:itemGroup.name.horseArmor         |
| minecraft:itemGroup.name.leaves             |
| minecraft:itemGroup.name.leggings           |
| minecraft:itemGroup.name.lingeringPotion    |
| minecraft:itemGroup.name.log                |
| minecraft:itemGroup.name.minecart           |
| minecraft:itemGroup.name.miscFood           |
| minecraft:itemGroup.name.mobEgg             |
| minecraft:itemGroup.name.monsterStoneEgg    |
| minecraft:itemGroup.name.mushroom           |
| minecraft:itemGroup.name.netherWartBlock    |
| minecraft:itemGroup.name.ominousBottle      |
| minecraft:itemGroup.name.ore                |
| minecraft:itemGroup.name.permission         |
| minecraft:itemGroup.name.pickaxe            |
| minecraft:itemGroup.name.planks             |
| minecraft:itemGroup.name.potion             |
| minecraft:itemGroup.name.potterySherds      |
| minecraft:itemGroup.name.pressurePlate      |
| minecraft:itemGroup.name.products           |
| minecraft:itemGroup.name.rail               |
| minecraft:itemGroup.name.rawFood            |
| minecraft:itemGroup.name.record             |
| minecraft:itemGroup.name.sandstone          |
| minecraft:itemGroup.name.sapling            |
| minecraft:itemGroup.name.sculk              |
| minecraft:itemGroup.name.seed               |
| minecraft:itemGroup.name.shovel             |
| minecraft:itemGroup.name.shulkerBox         |
| minecraft:itemGroup.name.sign               |
| minecraft:itemGroup.name.skull              |
| minecraft:itemGroup.name.slab               |
| minecraft:itemGroup.name.smithing_templates |
| minecraft:itemGroup.name.splashPotion       |
| minecraft:itemGroup.name.stainedClay        |
| minecraft:itemGroup.name.stairs             |
| minecraft:itemGroup.name.stone              |
| minecraft:itemGroup.name.stoneBrick         |
| minecraft:itemGroup.name.sword              |
| minecraft:itemGroup.name.trapdoor           |
| minecraft:itemGroup.name.walls              |
| minecraft:itemGroup.name.wood               |
| minecraft:itemGroup.name.wool               |
| minecraft:itemGroup.name.woolCarpet         |

_Last updated for 1.21.70_

<!-- page_dumper_end -->

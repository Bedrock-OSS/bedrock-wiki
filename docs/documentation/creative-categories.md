---
title: Menu Categories
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

- A `category` can be defined to place the item under a tab (such as construction). Click [here](#list-of-categories) for a list of valid categories.

- A `group` specifies which expandable group the item is placed into. If you use a custom value, a new expandable group won't be created, however items with the group will be placed next to each other in the creative inventory. Click [here](#list-of-groups) for a list of expandable groups.

- You can also set `is_hidden_in_commands` to true to remove this block/item from commands, such as `/give` and `/setblock`.

If `menu_category` is omitted, the item will only be accessible through commands and won't appear in the creative inventory or recipe book.

**NOTE:** The menu category of custom spawn eggs cannot be modified. You must instead create a custom item with the `minecraft:entity_placer` component.

<CodeHeader></CodeHeader>

```json
"menu_category": {
  "category": "construction", // Tab the item is placed under
  "group": "itemGroup.name.door", // Optional - Group the item is placed into
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
  "format_version": "1.20.50",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:balsa_wood",
      "menu_category": {
        "category": "nature",
        "group": "itemGroup.name.wood" // Placed into an expandable group
      }
    }
  }
}
```

## Item Example

<CodeHeader>BP/items/dagger.json</CodeHeader>

```json
{
  "format_version": "1.20.50",
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
| construction | Added to the "Contruction" tab.                          |
| equipment    | Added to the "Equipment" tab.                            |
| items        | Added to the "Items" tab.                                |
| nature       | Added to the "Nature" tab.                               |
| none         | Not added to a tab and only accessible through commands. |

## List of Groups

_For use with the `menu_category` parameter, `group`._

<!-- page_dumper_start -->
| Creative Categories:              |
| --------------------------------- |
| itemGroup.name.anvil              |
| itemGroup.name.arrow              |
| itemGroup.name.axe                |
| itemGroup.name.banner             |
| itemGroup.name.banner_pattern     |
| itemGroup.name.bed                |
| itemGroup.name.boat               |
| itemGroup.name.boots              |
| itemGroup.name.buttons            |
| itemGroup.name.candles            |
| itemGroup.name.chalkboard         |
| itemGroup.name.chest              |
| itemGroup.name.chestboat          |
| itemGroup.name.chestplate         |
| itemGroup.name.concrete           |
| itemGroup.name.concretePowder     |
| itemGroup.name.cookedFood         |
| itemGroup.name.copper             |
| itemGroup.name.coral              |
| itemGroup.name.coral_decorations  |
| itemGroup.name.crop               |
| itemGroup.name.door               |
| itemGroup.name.dye                |
| itemGroup.name.enchantedBook      |
| itemGroup.name.fence              |
| itemGroup.name.fenceGate          |
| itemGroup.name.firework           |
| itemGroup.name.fireworkStars      |
| itemGroup.name.flower             |
| itemGroup.name.glass              |
| itemGroup.name.glassPane          |
| itemGroup.name.glazedTerracotta   |
| itemGroup.name.goatHorn           |
| itemGroup.name.grass              |
| itemGroup.name.hanging_sign       |
| itemGroup.name.helmet             |
| itemGroup.name.hoe                |
| itemGroup.name.horseArmor         |
| itemGroup.name.leaves             |
| itemGroup.name.leggings           |
| itemGroup.name.lingeringPotion    |
| itemGroup.name.log                |
| itemGroup.name.minecart           |
| itemGroup.name.miscFood           |
| itemGroup.name.mobEgg             |
| itemGroup.name.monsterStoneEgg    |
| itemGroup.name.mushroom           |
| itemGroup.name.netherWartBlock    |
| itemGroup.name.ore                |
| itemGroup.name.permission         |
| itemGroup.name.pickaxe            |
| itemGroup.name.planks             |
| itemGroup.name.potion             |
| itemGroup.name.potterySherds      |
| itemGroup.name.pressurePlate      |
| itemGroup.name.rail               |
| itemGroup.name.rawFood            |
| itemGroup.name.record             |
| itemGroup.name.sandstone          |
| itemGroup.name.sapling            |
| itemGroup.name.sculk              |
| itemGroup.name.seed               |
| itemGroup.name.shovel             |
| itemGroup.name.shulkerBox         |
| itemGroup.name.sign               |
| itemGroup.name.skull              |
| itemGroup.name.slab               |
| itemGroup.name.smithing_templates |
| itemGroup.name.splashPotion       |
| itemGroup.name.stainedClay        |
| itemGroup.name.stairs             |
| itemGroup.name.stone              |
| itemGroup.name.stoneBrick         |
| itemGroup.name.sword              |
| itemGroup.name.trapdoor           |
| itemGroup.name.walls              |
| itemGroup.name.wood               |
| itemGroup.name.wool               |
| itemGroup.name.woolCarpet         |

*Last updated for 1.20.10*
<!-- page_dumper_end -->

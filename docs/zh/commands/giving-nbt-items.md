---
title: 给予 NBT 物品
category: 通用
mentions:
    - MedicalJewel105
    - SirLich
    - Veka0
    - StuartDA
    - Sprunkles137
    - TheItsNameless
    - SmokeyStack
    - Mittens4All
    - zheaEvyline
description: 用于给予带有 NBT 组件的物品的命令。
---

命名二进制标签（NBT）组件用于物品和方块的 `/give` 或 `/replaceitem` 命令。其限制为：

1. `minecraft:can_place_on`
2. `minecraft:can_destroy`
3. `minecraft:keep_on_death`
4. `minecraft:item_lock`

NBT 组件以 JSON 格式编写。原版命名空间 `minecraft` 可以省略。要隐藏 NBT 描述或锁定物品上的红色/黄色三角形，你可以运行以下命令：

-   `/gamerule showtags false`

## CanPlaceOn 和 CanDestroy

这两个组件仅影响冒险模式下的玩家。

:::warning 注意：
当带有 `can_place_on` 组件的方块被放置然后被玩家打破并捡起时，它不会保留其 `can_place_on` 组件。
:::

<CodeHeader></CodeHeader>

```yaml
# 给玩家一个可以放置在木板上的圆石方块：
/give @p cobblestone 1 0 {"minecraft:can_place_on":{"blocks":["planks"]}}
```

要添加更多方块，使用此格式：`["planks","log","fence"]`

<CodeHeader></CodeHeader>

```yaml
# 给玩家一把可以破坏木板和木材的钻石斧：
/give @p diamond_axe 1 0 {"minecraft:can_destroy":{"blocks":["planks","wood"]}}
```

注意：某些方块类别包含多个方块。

**示例**：

| 木材              | 木板   | 栅栏    | 树苗  | 树叶 | 原木    | 原木2     | 石头             | 头                 |
| ----------------- | -------- | -------- | -------- | ------ | ------ | -------- | ----------------- | --------------------- |
| 金合欢            | 金合欢   | 金合欢   | 白桦  | 桦木  | 白桦  | 金合欢   | 安山岩          | 爬行者头          |
| 白桦             | 白桦    | 白桦    | 白桦    | 丛林 | 丛林 | 深色橡木 | 磨制闪长岩  | 龙头           |
| 深色橡木          | 深色橡木 | 深色橡木 | 深色橡木 | 橡木    | 橡木    |          | 石头             | 猪灵头           |
| 丛林            | 丛林   | 丛林   | 丛林   | 云杉 | 云杉 |          | 闪长岩           | 玩家头           |
| 橡木               | 橡木      | 橡木      | 橡木      |        |        |          | 花岗岩           | 骷髅头        |
| 云杉            | 云杉   | 云杉   | 云杉   |        |        |          | 磨制安山岩 | 僵尸头           |
| Stripped Acacia   |          |          |          |        |        |          | 磨制花岗岩  | 凋零骷髅头 |
| Stripped Birch    |          |          |          |        |        |          |                   |                       |
| Stripped Dark Oak |          |          |          |        |        |          |                   |                       |
| Stripped Jungle   |          |          |          |        |        |          |                   |                       |
| Stripped Oak      |          |          |          |        |        |          |                   |                       |
| Stripped Spruce   |          |          |          |        |        |          |                   |                       |

包含多个方块的一些方块：`anvil`、`concrete_powder`、`dirt`、`fence`、`light_block`、`leaves`、`log`、`log2`、`planks`、`sapling`、`stone`、`skull`、`wood`。

### 可放置在所有方块上

这是给予一个可以放置在游戏中所有方块上的方块的代码：

**请注意，如果至少有一个 _无效_ 方块，这将不起作用！**

<CodeHeader></CodeHeader>

```json
give @p stone 1 0 {"minecraft:can_place_on": {"blocks": ["acacia_button", "acacia_door", "acacia_double_slab", "acacia_fence", "acacia_fence_gate", "acacia_hanging_sign", "acacia_leaves", "acacia_log", "acacia_pressure_plate", "acacia_sapling", "acacia_slab", "acacia_stairs", "acacia_standing_sign", "acacia_trapdoor", "acacia_wall_sign", "acacia_wood", "activator_rail", "air", "allium", "allow", "amethyst_block", "amethyst_cluster", "ancient_debris", "andesite", "andesite_double_slab", "andesite_slab", "andesite_stairs", "andesite_wall", "anvil", "azalea", "azalea_leaves", "azalea_leaves_flowered", "azure_bluet", "bamboo", "bamboo_block", "bamboo_button", "bamboo_door", "bamboo_double_slab", "bamboo_fence", "bamboo_fence_gate", "bamboo_hanging_sign", "bamboo_mosaic", "bamboo_mosaic_double_slab", "bamboo_mosaic_slab", "bamboo_mosaic_stairs", "bamboo_planks", "bamboo_pressure_plate", "bamboo_sapling", "bamboo_slab", "bamboo_stairs", "bamboo_standing_sign", "bamboo_trapdoor", "bamboo_wall_sign", "barrel", "barrier", "basalt", "beacon", "bed", "bedrock", "bee_nest", "beehive", "beetroot", "bell", "big_dripleaf", "birch_button", "birch_door", "birch_double_slab", "birch_fence", "birch_fence_gate", "birch_hanging_sign", "birch_leaves", "birch_log", "birch_pressure_plate", "birch_sapling", "birch_slab", "birch_stairs", "birch_standing_sign", "birch_trapdoor", "birch_wall_sign", "birch_wood", "black_candle", "black_candle_cake", "black_carpet", "black_concrete", "black_concrete_powder", "black_glazed_terracotta", "black_shulker_box", "black_stained_glass", "black_stained_glass_pane", "black_terracotta", "black_wool", "blackstone", "blackstone_double_slab", "blackstone_slab", "blackstone_stairs", "blackstone_wall", "blast_furnace", "blue_candle", "blue_candle_cake", "blue_carpet", "blue_concrete", "blue_concrete_powder", "blue_glazed_terracotta", "blue_ice", "blue_orchid", "blue_shulker_box", "blue_stained_glass", "blue_stained_glass_pane", "blue_terracotta", "blue_wool", "b... (line truncated to 2000 chars)
```

_最后更新于 1.21.50_

## ItemLock

`item_lock` 有两种模式，一个物品只能有其中一种或另一种。`item_lock` 在冒险模式、生存模式和创造模式下都有效。

`lock_in_inventory` 组件防止物品被丢弃、从玩家背包中移除、与物品合成、放入捆绑包或在铁砧中重命名。物品纹理将在左上角显示一个黄色三角形。

<CodeHeader></CodeHeader>

```yaml
# 给玩家一把锁定在背包中的钻石斧：
/give @p diamond_axe 1 0 {"minecraft:item_lock":{"mode":"lock_in_inventory"}}

# 用一把锁定在背包中的钻石剑替换第一个快捷栏槽位：
/replaceitem entity @p slot.hotbar 0 diamond_sword 1 0 {"minecraft:item_lock":{"mode":"lock_in_inventory"}}
```

`lock_in_slot` 组件防止物品被丢弃、移动或从玩家背包的槽位中移除、与物品合成、放入捆绑包或在铁砧中重命名。物品纹理将在左上角显示一个红色三角形。

<CodeHeader></CodeHeader>

```yaml
# 给玩家一把锁定在槽位中的木镐：
/give @p wooden_pickaxe 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}`

# 用一把锁定在槽位中的铁锹替换第一个快捷栏槽位：
/replaceitem entity @p slot.hotbar 0 iron_shovel 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
```

:::info 注意：
玩家可以将带有 `item_lock` 组件的物品放入装饰罐中。当罐子被打破时，物品会保留其 NBT 组件。
:::

### 覆盖 ItemLock 的显示方式

要覆盖的纹理是 `16x16`，位于 `RP/textures/ui/item_lock_red.png` 和 `RP/textures/ui/item_lock_yellow.png`

如果你想更改这些组件的显示方式，可以覆盖以下翻译键：

<CodeHeader></CodeHeader>

```json
item.itemLock.cantDrop=:hollow_star: Can't Drop Items can't be:
item.itemLock.cantMove=:solid_star: Can't Move Items can't be:
item.itemLock.hoverText.cantBe.moved=moved
item.itemLock.hoverText.cantBe.dropped=dropped
item.itemLock.hoverText.cantBe.removed=removed
item.itemLock.hoverText.cantBe.craftedWith=crafted with
item.itemLock.keepOnDeath=This item is not lost on death
item.itemLock.popupNotice.cantDrop=:hollow_star: Can't Drop Items can't be: dropped, removed, crafted with
item.itemLock.popupNotice.cantMove=:solid_star: Can't Move Items can't be: moved, dropped, removed, crafted with
```

## KeepOnDeath

物品将在实体死亡时保留在其背包中：

<CodeHeader></CodeHeader>

```yaml
/replaceitem entity @e[type=zombie] slot.weapon.mainhand 0 cooked_beef 1 0 {"minecraft:keep_on_death":{}}
```

对于非玩家实体，物品不会在死亡后出现在它们的背包中，因为它们不会重生。但是，可以使用 `/clear` 从实体背包中清除或使用 `/replaceitem` 替换。

:::info 注意

保持背包的作弊功能相当于玩家背包中的所有物品都有 `"minecraft:keep_on_death":{}`。但是，NBT 组件对于过滤你希望玩家保留在背包中的特定物品最有用，而不是所有物品。

:::

`keep_on_death` 在冒险模式和生存模式中功能相同。

## 组合 NBT 组件

同时带有 `can_place_on` 组件和 `item_lock` 组件的方块可以放置在冒险模式中。`item_lock` 组件防止方块被丢弃、从玩家背包放入容器（如箱子或熔炉）、与物品合成、放入捆绑包或在铁砧中重命名。

<CodeHeader></CodeHeader>

```py
# 给所有玩家一组可以放置在泥土、草和圆石上，并锁定在背包中的橡木木板：
/give @a oak_planks 64 0 {"minecraft:can_place_on":{"blocks":["dirt", "grass", "cobblestone"]},"minecraft:item_lock":{"mode":"lock_in_inventory"}}

# 给所有玩家一把锁定在特定背包槽位且死亡后保留的弓：
/give @a bow 1 0 {"minecraft:item_lock":{ "mode": "lock_in_slot" }, "minecraft:keep_on_death":{}}

# 给自己一把只能挖掘沙子和沙砾，并锁定在背包中的石锹：
/give @s stone_shovel 1 0 {"minecraft:can_destroy":{"blocks":["dirt", "sand"]},"minecraft:item_lock":{ "mode": "lock_in_inventory" }}
```

## 其他注意事项

使用 `"minecraft:can_place_on"` 和 `"minecraft:can_destroy"` 为特定方块和物品分配特定数据值将返回错误，显示 NBT"无法更新"，这在此情况下似乎是一个意外的 bug。

<CodeHeader></CodeHeader>

```yaml
/give @s cobblestone 64 0 {"minecraft:can_place_on":{"blocks":["stained_glass:2"]}}
/give @a wooden_axe 16 0 {"minecraft:can_destroy":{"blocks":["wool:5"]}}
```

同样地，指定通常没有意义的命令也会返回"无法更新"错误。一些示例包括：

<CodeHeader></CodeHeader>

```yaml
/give @a diamond_sword 10 0 {"minecraft:can_place_on":{"blocks":["dirt"]}}
```

_无法将非方块物品放置在方块上。_

## 使用 Structure 命令给予 NBT 物品

通过使用 `/structure save` 命令保存已命名或附魔的物品，你可以稍后使用 `/structure load` 命令将这些物品给予玩家。

请注意，此方法不会将物品直接放入玩家背包。相反，它会在玩家脚下生成物品，让他们可以立即捡起。

### 保存物品

1. 将所需的物品放在地上。
2. 在它旁边放置一个重复命令块 ![重复命令块](/assets/images/commands/intro-to-command-blocks/command-block.repeat.png)，并使用以下命令：
    -   `tp @e[type=item,c=1] ~~0.5~`
3. 在聊天中运行以下命令：

    <CodeHeader></CodeHeader>

    ```yaml
    /execute at @e[type=item,c=1] run structure save wiki:nbt_item ~~~ ~~~ true disk false
    ```

_重复命令块和掉落的物品现在可以移除，因为它们不再需要。_

### 给予物品

现在，要将保存的物品给予玩家，只需运行：

<CodeHeader></CodeHeader>

```yaml
/execute at @p run structure load wiki:nbt_item ~~~
```

**注意：** 结构标识符（`wiki`）和名称（`nbt_item`）可以更改为你项目所需的任何名称。

## 使用 Loot 命令给予 NBT 潜影盒

使用此方法，你可以给予——或直接放入玩家或容器背包——装有你选择物品的已命名潜影盒。

这对于冒险地图或服务器特别有用——例如，在玩家首次加入服务器时给他们一个"新手包"。

> **_[由 @CornyFlex 制作的演示视频](https://youtu.be/SFCZ4zb8sHk)_**

### 步骤

1. 准备你的潜影盒并将其放置在只有管理员可以访问的安全区域。
2. 使用**[ticking area](https://learn.microsoft.com/en-us/minecraft/creator/documents/tickingareacommand)**确保此区域始终保持加载。
3. 你现在可以使用 **[/loot](https://learn.microsoft.com/en-us/minecraft/creator/commands/commands/loot?view=minecraft-bedrock-stable)** 命令向玩家提供准备好的潜影盒，如下所示：

    <CodeHeader>示例</CodeHeader>

    ```yaml
    /loot give @p mine <xyz:source>
    ```

    将 `<xyz:source>` 替换为潜影盒的坐标。

    要将潜影盒放入**玩家**背包的特定槽位，使用：

    <CodeHeader>示例</CodeHeader>

    ```yaml
    /loot replace entity @p slot.hotbar 0 mine <xyz:source>
    ```

    要将其放入**容器**的特定槽位，使用：

    <CodeHeader>示例</CodeHeader>

    ```yaml
    /loot replace block <xyz:target> slot.container 0 mine <xyz:source>
    ```

:::info 注意

此方法也适用于已重命名**旗帜**、**箱子**、**熔炉**和**烟熏炉**。但是，这些容器方块内存储的任何物品都不会被保留。

:::

## 在交易或战利品表中给予 NBT 物品

目前无法通过战利品表或交易表设置 NBT。如果你想要销售带有 NBT 组件的物品，你需要使用某种变通方法，例如克隆包含预先存在 NBT 物品的箱子。

## Item Editor MCBE

此项目提供了一个用于 Minecraft 基岩版的附加组件，允许在游戏中直接编辑物品属性。它利用 Script API，无需在你的世界设置中启用任何额外开关。

GitHub 仓库链接：https://github.com/Justash01/item-editor-mcbe
---
title: 战利品表
category: 文档
nav_order: 1
mentions:
    - Ciosciaa
    - Etanarvazac
    - SmokeyStack
description: 关于战利品表的一切。
---

::: warning
本文档正在进行中。
:::

战利品表用于从声明的集合中选择一组物品。战利品表可以用于：

-   `/loot` 命令
-   容器内容
-   方块掉落
-   钓鱼
-   生物掉落
-   生成生物的装备
-   其他各种生物行为

每次使用相同的战利品表时可能会选择不同的物品集合，基于[外部条件](#)和[固有随机性](#)。这种变化对于游戏性和冒险至关重要，尤其是在更具RPG驱动的系统中。

## 集成

战利品表不是注册的附加包条目，而是通过上述来源的路径引用。战利品表可以放在行为包内的任何位置，但建议将它们放在顶级 `loot_tables` 目录下，遵循原版约定。

<FolderView
	:paths="[
		'BP/loot_tables/blocks/cypress_door.json',
		'BP/loot_tables/blocks/cypress_door.json',
		'BP/loot_tables/blocks/cypress_door.json'
	]"
/>

## 结构

战利品表表示为具有单个必需的 `"pools"` 数组属性的 JSON 对象。

<CodeHeader>#</CodeHeader>

```json
{
	"pools": [
		…
	]
}
```

从战利品表调用返回的战利品将是此处提供的所有奖池的产出的_总和_。

### 奖池

奖池作为选择物品的隔离构造；奖池的结果不能被其他奖池影响。

<CodeHeader>#</CodeHeader>

```json
{
    "rolls": 1,

    "entries": [
        {
            "type": "item",
            "name": "wiki:silver"
        }
    ]
}
```

有两种类型的奖池可用：通用[加权随机奖池](#weighted-random-pools)和[分层奖池](#tiered-pools)，后者传统上用于选择生物装备。

#### 加权随机奖池

传统的加权随机奖池根据相对权重选择物品，根据配置的滚动次数选择一定数量的产出。

<CodeHeader>artifacts.json/pools/0</CodeHeader>

```json
{
    "rolls": {
        "min": 2,
        "max": 4
    },

    "entries": [
        {
            "type": "item",
            "name": "minecraft:golden_apple",
            "weight": 20
        },
        {
            "type": "item",
            "name": "minecraft:appleEnchanted",
            "weight": 1
        },
        {
            "type": "item",
            "name": "minecraft:name_tag",
            "weight": 30
        }
    ]
}
```

##### 滚动

###### 奖励滚动

加权随机奖池的滚动次数可以使用可选的 `"bonus_rolls"` 属性根据玩家的运气进行更改。

```json
"bonus_rolls": 3,
"bonus_chance": 0.095
```

##### 条目权重

权重是该条目被选中的机会。相对于此"entries"数组中其他条目的权重越高，该条目被选中的机会就越高。

```json
"weight": 3
```

###### 品质

条目的权重可以使用品质属性根据玩家的运气进行更改。

```json
"quality": 2
```

目前，运气只在用附有"海之幸运"的钓鱼竿钓鱼时表达。

#### 分层奖池

分层奖池用于从集合中精确选择一个条目。

```json
{
    "tiers": {
        "initial_range": 2,

        "bonus_rolls": 3,
        "bonus_chance": 0.095
    },

    "entries": [
        {
            "type": "loot_table",
            "name": "loot_tables/entities/armor_set_leather.json"
        },
        {
            "type": "loot_table",
            "name": "loot_tables/entities/armor_set_gold.json"
        },
        {
            "type": "loot_table",
            "name": "loot_tables/entities/armor_set_chain.json"
        },
        {
            "type": "loot_table",
            "name": "loot_tables/entities/armor_set_iron.json"
        },
        {
            "type": "loot_table",
            "name": "loot_tables/entities/armor_set_diamond.json"
        }
    ]
}
```

奖池通过包含 `"tiers"` 对象属性变得分层：

```json
"tiers": {
	"initial_range": 2,

	"bonus_rolls": 3,
	"bonus_chance": 0.095
}
```

分层奖池中的条目是_有序的_。分层奖池的选择条目基于其索引。要确定这个索引，首先随机滚动一个起始索引，然后一批成功滚动尝试增加这个起始索引。

起始索引是通过在1和整数属性 `"initial_range"` 之间滚动一个随机整数来决定的。如果没有提供初始范围，它默认为 `1`，强制起始索引为1。

接下来，尝试使用额外的滚动来推进索引。这些滚动尝试的次数作为整数提供给 `"bonus_rolls"`。任何此类滚动成功的几率通过 `"bonus_chance"` 给出。`"bonus_chance"` 的几率是1中的值，意味着 `0.5` 将是任何奖励滚动成功的50%几率。每次成功的滚动将索引增加1。这两个属性都默认为 `0`，意味着必须两者都提供才能使用这个额外滚动机制。

最终确定的索引用于选择该奖池的对应条目作为产出。分层奖池中的索引是从1开始的，意味着第一个条目的索引为1，第二个为2，依此类推。如果确定的索引大于该奖池的条目数，则不会提供产出。

::: warning
分层奖池中条目的所有[条件](#)都被忽略。奖池本身的条件仍然允许。
:::

### 条目

条目是奖池的可选单元。有三种不同类型的条目可用。

#### 物品条目

物品条目是选择战利品的基本条目类型。物品条目指的是

```json
"type": "item",
"name": "minecraft:apple",
"weight": 1
```

#### 战利品表条目

可以使用战利品表条目形成战利品层级。

```json
"type": "loot_table",
"name": "loot_tables/custom/example.json",
"weight": 1
```

#### 空条目

当被选中时，空条目不会为该次滚动产生任何战利品。

```json
"type": "empty",
"weight": 4
```

空条目通常可以使用[包含0的滚动次数](#)、[随机几率条件](#)或可能随机选择0的[计数函数](#)来模仿。它们在[加权随机奖池](#)中使用时的主要优势是可读性：当滚动不会产生条目时，按权重表示可能更容易理解。

### 函数

函数是使战利品表如此强大的原因。它们可以为战利品表中的每个条目执行广泛的任务。例如，它们可以更改物品的掉落数量、存在的附魔（即使是在通常无法附魔的物品上）、物品名称、它的 lore，甚至可以写书！查看[物品函数](/loot/item-functions)以获取函数的完整列表以及它们的使用方法。

<CodeHeader>artifacts.json/pools/entries</CodeHeader>

```json
{
    "type": "item",
    "name": "minecraft:dirt",
    "weight": 10,
    "functions": [
        {
            "function": "set_count",
            "count": {
                "min": 16,
                "max": 64
            }
        },
        {
            "function": "set_name",
            "name": "Pile of dirt"
        }
    ]
}
```

### 条件

条件检查是否满足某些标准。示例："僵尸是被玩家杀死的吗"、"剑上有抢夺附魔吗？如果有，等级是多少？"

<CodeHeader>artifacts.json/pools/entries</CodeHeader>

```json
{
    "conditions": [
        {
            "condition": "killed_by_player"
        },
        {
            "condition": "random_chance_with_looting",
            "chance": 0.025,
            "looting_multiplier": 0.01
        }
    ],
    "rolls": 1,
    "entries": [
        {
            "type": "item",
            "name": "minecraft:iron_ingot",
            "weight": 1
        },
        {
            "type": "item",
            "name": "minecraft:carrot",
            "weight": 1
        },
        {
            "type": "item",
            "name": "minecraft:potato",
            "weight": 1
        }
    ]
}
```

## 覆盖

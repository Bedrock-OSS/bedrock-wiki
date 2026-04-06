---
title: 交易表
category: 文档
nav_order: 2
mentions:
    - Ciosciaa
    - SirLich
    - TheItsNameless
    - QuazChick
description: 交易表代表了实体交易物品的基本数据。
---

交易表代表了实体交易物品的基本数据。交易表不是独立的；它们必须被一个[实体组件](https://bedrock.dev/docs/stable/Entities#minecraft%3Aeconomy_trade_table)引用。利用交易表可用的随机化属性，交易报价、物品数量和成本计算可能在不同的实体实例中有所不同，即使它们都指向同一个交易表。

![](trading.png)

交易表没有标识符或版本号。与战利品表一样，交易表不支持 Molang，而是依赖 JSON 结构，如范围对象和[函数](#functions)。尽管有所不同，交易表仍然支持注释。

## 集成

交易表并不像方块或生物群系那样代表一个主要的附加系统。它们不是通过放置在特定文件夹中注册的；相反，它们是被（从实体）引用的。交易表可以放在行为包内的任何位置。

::: tip
建议在添加自定义交易表时，在 `trading` 文件夹的顶层包含一个命名空间文件夹（这里我们称之为 `wiki`），以避免不同包之间的冲突。
:::

<FolderView :paths="[
    'BP/trading/wiki/minister.json',
    'BP/trading/economy_trades/cleric_trades.json'
]" />

以下示例将在整篇文档中被引用和分析：

<Spoiler title="交易表文件示例">

<CodeHeader>BP/trading/wiki/minister.json</CodeHeader>

```json
{
    "tiers": [
        {
            "groups": [
                {
                    "num_to_select": 1,

                    "trades": [
                        {
                            "wants": [
                                {
                                    "item": "wiki:blessing_glyph",
                                    "quantity": {
                                        "min": 2,
                                        "max": 4
                                    },

                                    "price_multiplier": 0.5
                                },
                                {
                                    "item": "minecraft:book"
                                }
                            ],
                            "gives": [
                                {
                                    "item": "minecraft:enchanted_book",
                                    "functions": [
                                        {
                                            "function": "enchant_book_for_trading",

                                            "base_cost": 4,
                                            "base_random_cost": 12,
                                            "per_level_cost": 4,
                                            "per_level_random_cost": 8
                                        }
                                    ]
                                }
                            ],
                            "max_uses": 7,

                            "trader_exp": 3
                        },
                        {
                            "wants": [
                                {
                                    "item": "wiki:crystalline_spiritite",
                                    "quantity": 32,

                                    "price_multiplier": 0.125
                                }
                            ],
                            "gives": [
                                {
                                    "item": "wiki:exalted_blade",
                                    "functions": [
                                        {
                                            "function": "enchant_with_levels",

                                            "treasure": true,
                                            "levels": {
                                                "min": 15,
                                                "max": 25
                                            }
                                        }
                                    ]
                                }
                            ],
                            "max_uses": 2,

                            "reward_exp": false,
                            "trader_exp": 8
                        }
                    ]
                }
            ]
        },
        {
            "total_exp_required": 28,

            "trades": [
                {
                    "wants": [
                        {
                            "choice": [
                                {
                                    "item": "wiki:sacred_stones",
                                    "quantity": {
                                        "min": 4,
                                        "max": 6
                                    },

                                    "price_multiplier": 0.5
                                },
                                {
                                    "item": "wiki:blessed_beads",
                                    "quantity": {
                                        "min": 16,
                                        "max": 24
                                    },

                                    "price_multiplier": 0.5
                                }
                            ]
                        }
                    ],
                    "gives": [
                        {
                            "item": "wiki:aeleon_jewels",
                            "quantity": {
                                "min": 4,
                                "max": 6
                            }
                        }
                    ],
                    "max_uses": 2
                }
            ]
        }
    ]
}
```

</Spoiler>

## 结构

交易表表示为无版本、无命名空间的对象。

<CodeHeader>#</CodeHeader>

```json
{
	"tiers": [
		{
			"groups": …
		},
		{
			"total_exp_required": 28,

			"trades": …
		}
	]
}
```

交易表使用[等级](#tiers)来构建交易组织。等级由必需的顶层 `"tiers"` 数组属性定义。等级按顺序出现在交易界面中。

### 等级

等级作为一组可解锁的交易，代表了交易表中的最高层级分组。

<CodeHeader>#/tiers/0</CodeHeader>

```json
{
	"groups": …
}
```

<CodeHeader>#/tiers/1</CodeHeader>

```json
{
	"total_exp_required": 28,

	""trades": …
}
```

每个等级必须表示一组[交易](#trades)（作为 `"trades"`）或[交易组](#groups)（作为 `"groups"`）；这两个属性必须提供一个。如果指定了 `"trades"`，该等级将显示所有这些交易。如果提供的是 `"groups"`，该等级将使用所有列出的交易组中的交易；每个组如何选择其交易取决于其配置。

::: tip NOTE
如果一个等级中同时给定了 `"trades"` 和 `"groups"`，交易声明将被忽略，转而使用组。
:::

在等级内，交易按顺序出现在交易界面中。如果交易被分组，这些组将按其定义顺序显示，按组然后按交易进行组织。一个组中的交易与其他组的交易在视觉上没有区别；只有等级在视觉上被分隔和识别。

#### 经验要求

等级在交易者满足经验阈值时解锁。每个交易者都有其自己的内部累计经验，在与玩家交易时累积。每笔交易获得的经验量取决于该交易的[经验奖励](#trader-experience)。可选的 `"total_exp_required"` 属性指定交易者需要多少经验才能解锁该等级。

<CodeHeader>#/tiers/1/</CodeHeader>

```json
"total_exp_required": 28
```

默认情况下，所需经验值设置为交易等级的索引。因此，第二等级需要交易者有1点经验；第三等级需要2点经验；依此类推。第一等级总是自动解锁，[无论其设置的经验阈值如何](#initial-tier-experience)。

#### 等级解锁

等级按顺序解锁。当新等级解锁时，还会检查后续等级是否满足当前经验值。如果满足，它也会解锁并检查其后续等级，依此类推。当奖励的交易者经验足以满足多个等级时，或者如果[提供的初始经验](#initial-tier-experience)会在游戏正确更新时解锁后续等级时，会检查等级解锁。

::: tip NOTE
由于等级是一次一个地检查的，如果等级解锁因为某等级的XP要求未满足而停止，则不会检查后续等级，即使那些后续等级的XP要求已经满足。
:::

##### 初始等级经验

第一等级有非零经验阈值时会进行特殊处理。如果为负，_所有_等级都将被解锁。如果大于0，则将交易者的初始经验设置为提供的值。

::: warning
当初始等级的经验阈值非零时，需要手动更新以使交易者的交易反映其交易表的实际性质。在这些情况下，执行一次交易或关闭并重新打开交易界面将正确更新界面。最初，即使其他等级应该被解锁，也只有第一等级可用。
:::

##### 等级冻结

除了[初始等级](#initial-tier-experience)，还有可能将交易冻结在某个等级：

<CodeHeader>示例等级冻结</CodeHeader>

```json
"total_exp_required": -1
```

当其前置等级被解锁后，具有负XP要求的等级将立即解锁，[如预期](#tier-unlocking)。然而，玩家将无法进展到任何后续等级。

### 交易组

交易组是一种随机选择个体交易者应该为某个等级使用哪些交易的方式。

<CodeHeader>#/tiers/0/groups/0</CodeHeader>

```json
{
	"num_to_select": 1,

	"trades": …
}
```

要选择的交易通过必需的 `"trades"` 数组提供；每个条目都是一个[交易](#trades)。可选的 `"num_to_select"` 属性指示将为该等级为每个交易者选择多少交易。如果 `"num_to_select"` 为 `0`，则选择所有交易；这是默认的。

::: tip NOTE
交易组不能嵌套以进行高级概率选择。
:::

::: tip
目前，不可能有随机选择数量。也不可能按交易加权，但交易可以在数组中重复以有效增加其被选中的可能性。
:::

### 交易

交易代表交易者和玩家之间的交易。

<CodeHeader>#/tiers/0/trades/1</CodeHeader>

```json
{
	"wants": …,
	"gives": …,
	"max_uses": 2,

	"reward_exp": false,
	"trader_exp": 8
}
```

一旦一个交易被选中放入交易槽，它将不会从根本上改变。只有[数量](#quantity)在某些情况下可能会被修改。

::: tip
单个交易定义可以影响不仅仅是交易本身。值得注意的是，实体可以响应玩家持有的物品[持有特定物品](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.trade_interest)。
:::

#### 想要和给予的物品

基本交易单位使用 `"wants"` 和 `"gives"` 声明；玩家用 `"wants"` 交易以获得 `"gives"`。两个属性都必须是数组，并且是必需的。

<CodeHeader>#/tiers/0/trades/1/</CodeHeader>

```json
"wants": …,
"gives": …
```

一笔交易可以有1到2个想要的条目，并且必须恰好有1个给予的条目。每个数组的条目可以是[物品](#items)或[选择](#choices)。

交易界面将根据想要物品的数量进行调整。在某些情况下，一些交易修饰符，如[数量修饰附魔函数](#quantity-modifying-enchantment-functions)，只会影响第一个想要的物品。

::: tip NOTE
如果一个对象作为条目提供，同时包含 item 和 choice 属性，则只考虑 choice 部分；item 部分将被忽略。
:::

#### 交易限制

交易者通常只能执行单笔交易一定次数，然后需要补充。可选的数值 `"max_uses"` 属性配置这个数字。

<CodeHeader>#/tiers/0/trades/1/</CodeHeader>

```json
"max_uses": 2
```

交易限制对每笔交易都是特定的。一笔交易中的减少供应不会影响另一笔交易，即使两笔交易有相同的想要和给予的物品。默认情况下，交易者能够执行单笔交易7次，然后需要补充。

::: tip NOTE
补充行为由实体组件处理（`"minecraft:trade_resupply": {}`）。
:::

如果值为 `0`，该交易将显示在交易界面中但无法使用。如果为负值，该交易将永远不需要补充；它可以无限使用。

#### 玩家经验

可以使用可选的布尔值 `"reward_exp"` 属性为交易禁用面向_玩家_的经验球。

<CodeHeader>#/tiers/0/trades/1/</CodeHeader>

```json
"reward_exp": false
```

默认情况下，`"reward_exp"` 为 true，玩家将因交易获得一些经验。获得的经验量在交易表中无法修改。

#### 交易者经验

当玩家完成交易时，交易者可能会获得经验。这个属性是使用[等级](#tiers)建立与交易者交易进度系统的关键。

<CodeHeader>#/tiers/0/trades/1/</CodeHeader>

```json
"trader_exp": 8
```

给予交易者_的经验量通过可选的数值属性 `"trader_exp"` 给出。默认情况下，交易者将获得1点经验。

::: tip
对于非均匀分布的等级，交易者经验在更高等级中通常会增加。这样，低等级交易对升级的影响就小于高等级交易。
:::

### 选择

选择是用于随机选择交易使用物品的简单对象。一个物品以均匀随机的方式为每笔交易选择的每个交易者实例被选中。

<CodeHeader>#/tiers/1/trades/0/wants/0</CodeHeader>

```json
{
	"choice": [
		{
			"item": "wiki:sacred_stones",
			…
		},
		{
			"item": "wiki:blessed_beads",
			…
		}
	]
}
```

选择只包含必需的 `"choice"` 数组属性。数组中的每个条目都是一个[物品](#items)。必须至少提供一个物品。

::: tip NOTE
选择不能嵌套。
:::

::: tip
目前没有办法为特定物品指定权重，但物品可以在数组中重复以有效增加其被选中的可能性。
:::

### 物品

物品是交易的主体。它们在想要和给予的物品之间共享定义，但根据使用位置有一些不同的含义。

<CodeHeader>#/tiers/1/trades/0/wants/0/choice/0</CodeHeader>

```json
{
    "item": "wiki:sacred_stones",
    "quantity": {
        "min": 4,
        "max": 6
    },

    "price_multiplier": 0.5
}
```

<CodeHeader>#/tiers/0/groups/0/trades/1/gives/0</CodeHeader>

```json
{
    "item": "wiki:exalted_blade",
    "functions": [
        {
            "function": "enchant_with_levels",

            "treasure": true,
            "levels": {
                "min": 15,
                "max": 25
            }
        }
    ]
}
```

#### 物品引用

物品使用必需的 `"item"` 字符串属性在交易中被引用。

<CodeHeader>#/tiers/1/trades/0/wants/0/choice/0/</CodeHeader>

```json
"item": "wiki:exalted_blade"
```

物品引用必须指向一个物品的标识符。可以在引用后缀中提供数据值：

<CodeHeader>示例数据赋值</CodeHeader>

```json
"item": "minecraft:log:2"
```

::: tip
数据值也可以使用 `set_data` 函数设置（并且更方便地随机化）。
:::

如果没有为_想要_的物品指定数据值，则可以交易任何具有该标识符的物品。如果没有为_给予_的物品指定数据值，则隐含数据值为 `0`。

#### 数量

可选的 `"quantity"` 属性指定交易中想要或给予的物品数量。

<CodeHeader>#/tiers/1/trades/0/wants/0/choice/0/</CodeHeader>

```json
"quantity": {
	"min": 4,
	"max": 6
}
```

数量可以表示为整数文字或范围对象，如上所示。如果表示为范围，则在指定限制内均匀随机选择值。如果没有提供数量，物品数量将默认为1。

::: tip NOTE
数量始终受堆叠大小限制，并且只能影响交易中的一个槽。例如，不可能强制要求从单个槽获得100个木板（尽管可以使用2个"wants"），或在单笔交易中给予玩家2把不可堆叠的剑。
:::

#### 价格乘数

价格乘数决定某些事件如何改变物品的[基础数量](#quantity)。

<CodeHeader>#/tiers/1/trades/0/wants/0/choice/0/</CodeHeader>

```json
"price_multiplier": 0.5
```

`"price_multiplier"` 是可选的，默认为 `0`。有两个系统使用价格乘数：现代系统和传统系统。在现代系统中，给出的价格乘数只能影响交易中的_第一个想要物品_。在传统系统中，任何_想要物品_都可能受到影响。

##### 波动因素

交易价格因以下因素而波动：

-   需求增加，当在多次[补充](#trade-limit)后交易相同物品时发生
-   最近被治愈，如村民从僵尸村民治愈
-   附近有最近被治愈的交易者
-   与受"村庄英雄"状态影响的玩家交易

价格乘数影响所有这些情况，但使用新定价公式的"村庄英雄"玩家除外，该公式使用固定值。

##### 成本计算

价格乘数直接且唯一地影响因对交易需求增加而导致的成本增加。默认情况下，需求为0，不能低于该值。交易的累积需求在补充后（在[该交易耗尽](#trade-limit)之后）增加，如果没有发生交易则在补充之间减少。

仅因需求增加而产生的成本是线性的，每次需求增加都会增加基础成本的一个比例，由价格乘数给出。假设以下变量……

| 变量 | 含义                                                                              |
| -------- | ------------------------------------------------------------------------------------ |
| _c_      | 总成本                                                                           |
| _p_      | 基础成本，包括[数量覆盖](#quantity-modifying-enchantment-functions) |
| _m_      | 价格乘数                                                                     |
| _d_      | 当前需求                                                                       |

……当没有其他因素存在时，可以使用以下公式计算总成本：

_c_ = _p_ × (1 + _m_ \* _d_)

::: tip NOTE
其他情况还使用实体属性进行成本计算，此处未提供。
:::

如果价格乘数为 `0`，数量在大多数情况下将保持不变（除了使用新定价公式的"村庄英雄"修饰符）。

::: tip NOTE
负价格乘数是可能的，但不能影响因[需求](#trade-limit)增加而增加的成本；乘数将有效地限制为 `0`。然而，负值确实会影响交易者最近被治愈、交易者附近有最近被治愈的其他交易者，或与受"村庄英雄"影响的玩家交易时的价格，使用传统定价公式。
:::

#### 函数

函数用于修改物品的性质。可选的 `"functions"` 数组包含要应用于该物品的函数集合。

<CodeHeader>#/tiers/0/groups/0/trades/1/gives/0/</CodeHeader>

```json
"functions": [
	{
		"function": "enchant_with_levels",

		"treasure": true,
		"levels": {
			"min": 15,
			"max": 25
		}
	}
]
```

交易表使用的函数与战利品表共享。在想要物品声明中使用时（[在可用的情况下](#unusable-wanted-item-functions)），它们用于限制想要物品的性质。此类函数限制只能影响第一个想要的物品。

##### 通常不可用的函数

一般来说，函数在交易中表现良好；但以下函数在交易表中任何地方都不起作用：

-   `set_count`
-   `furnace_smelt`
-   `looting_enchant`
-   `trader_material_type`

::: tip NOTE
`set_count` 的功能由[数量属性](#quantity)替代。

`trader_material_type`，仅在单个原版交易表中看到，理论上会根据实体的标记变体设置物品的数据值，但这似乎无法以任何自定义方式使用。
:::

##### 不可用的想要物品函数

一般来说，使用函数为想要物品指定物品属性需要提供的物品符合这些属性。然而，以下函数不执行严格匹配，因此对想要物品无用：

-   `set_name`
-   `set_lore`
-   `set_damage`
-   `set_book_contents`
-   `random_dye`
-   `fill_container`

##### 数量修饰附魔函数

2个函数实际上为第一个_想要物品_设置数量（如果用作_给予物品_），可能会覆盖该第一个想要物品的任何提供的[数量](#quantity)：

-   `enchant_with_levels`
-   `enchant_book_for_trading`

::: tip NOTE
尽管覆盖了数量，所有[修改后的交易价格](#fluctuation-factors)都能正确调整。这些函数不能影响第二个想要物品的数量，即使使用传统成本公式。如果这些函数用于_想要物品_，数量不会被覆盖。
:::

###### 附魔等级函数

`enchant_with_levels` 随机为物品附魔，如同从附魔台附魔一样。

<CodeHeader>#/tiers/0/groups/0/trades/1/gives/0/functions/0</CodeHeader>

```json
{
    "function": "enchant_with_levels",

    "treasure": true,
    "levels": {
        "min": 5,
        "max": 25
    }
}
```

第一个想要物品的成本是通过将该函数选择的等级值（如果为负则限制为 `0`）加到原始[数量](#quantity)上来确定的。等级值由可选的 `"levels"` 属性计算。如果使用数值文字，则该值是选择的等级值。如果使用范围对象，如上，则在提供的最小值和最大值之间滚动一个随机数 inclusively。该随机数然后作为选择的等级值。在上面的例子中，第一个想要物品的成本将增加5到25。

###### 交易用附魔书函数

`enchant_book_for_trading` 仅用于交易。它的属性组合决定了第一个想要物品的成本。

<CodeHeader>#/tiers/0/groups/0/trades/0/gives/0/functions/0</CodeHeader>

```json
{
    "function": "enchant_book_for_trading",

    "base_cost": 4,
    "base_random_cost": 12,
    "per_level_cost": 4,
    "per_level_random_cost": 8
}
```

此函数仅设计用于在书上滚动一个附魔，跨越所有可能的非诅咒附魔，包括收藏附魔。该函数不适应物品。如果用于书上，总是会成功应用附魔；如果用于其他可附魔的物品，物品可能不会成功附魔。

::: tip NOTE
据推测，当失败时，该函数会滚动一个不适用于该物品的附魔，然后无法应用这个无关的附魔，导致未附魔的物品。因此，非书上附魔的成功性与适用于该物品的附魔数量成正比。
:::

总成本由独立于滚动附魔的基础成本和依赖于随机滚动的每级成本组成。所有成本配置属性都是可选的。

基础成本通过将起始值与随机滚动相加来计算。起始值由 `"base_cost"` 给出，默认为 `2`。随机滚动通过 `"base_random_cost"` 提供，默认为 `4`。当为交易者生成交易时，会在0到 `"base_random_cost"` 之间均匀随机选择 inclusively。

对于所选附魔的每个等级，与基础成本计算相同的过程也会发生：一个固定值加上一个均匀随机选择的值。在这种情况下，每级基础成本由 `"per_level_cost"` 给出，默认为 `3`，每级随机成本由 `"per_level_random_cost"` 给出，默认为 `10`。每个级别的每级滚动可能不同。

一旦计算了基础成本和每个级别的成本，它们被加在一起形成总成本。最后，如果选择的附魔是收藏附魔，成本会翻倍。与往常一样，这个成本不能小于1或大于该物品的堆叠大小。无论交易者使用的定价系统如何，这个公式都成立。

::: warning
如果任何随机成本属性为负，似乎有50-50的机会使成本要么是给定的[数量](#quantity)，要么是该第一个想要物品的最大堆叠大小。
:::

::: tip
如果总成本为负（假设没有使用负随机成本属性），则使用受影响的想要物品的提供[数量](#quantity)。保证这一点的最简单方法是：

<CodeHeader>示例基于数量的附魔书成本</CodeHeader>

```json
{
    "function": "enchant_book_for_trading",

    "base_cost": -1,
    "base_random_cost": 0,
    "per_level_cost": 0,
    "per_level_random_cost": 0
}
```

:::

##### 生成蛋交易绑定

`"set_actor_id"` 函数用于根据提供的实体标识符（由 `"id"` 给出）设置生成蛋的数据值。

<CodeHeader>示例生成蛋交易绑定</CodeHeader>

```json
{
    "function": "set_actor_id"
}
```

在交易表中，如果没有提供ID，则会将交易者的实体类型分配给蛋。

## 覆盖

因为交易表不使用数据内标识符，它们只需用新的交易表替换旧的交易表即可覆盖。你可以在[资源覆盖](/concepts/overwriting-assets)了解更多。

以下是当前每个交易者使用的原版交易表：

| 交易者           | 路径                                                     |
| ---------------- | -------------------------------------------------------- |
| Stone Mason      | `BP/trading/economy_trades/stone_mason_trades.json`      |
| Farmer           | `BP/trading/economy_trades/farmer_trades.json`           |
| Fisherman        | `BP/trading/economy_trades/fisherman_trades.json`        |
| Butcher          | `BP/trading/economy_trades/butcher_trades.json`          |
| Shepherd         | `BP/trading/economy_trades/shepherd_trades.json`         |
| Leather Worker   | `BP/trading/economy_trades/leather_worker_trades.json`   |
| Librarian        | `BP/trading/economy_trades/librarian_trades.json`        |
| Cartographer     | `BP/trading/economy_trades/cartographer_trades.json`     |
| Cleric           | `BP/trading/economy_trades/cleric_trades.json`           |
| Tool Smith       | `BP/trading/economy_trades/tool_smith_trades.json`       |
| Weapon Smith     | `BP/trading/economy_trades/weapon_smith_trades.json`     |
| Fletcher         | `BP/trading/economy_trades/fletcher_trades.json`         |
| Armorer          | `BP/trading/economy_trades/armorer_trades.json`          |
| Wandering Trader | `BP/trading/economy_trades/wandering_trader_trades.json` |

::: tip NOTE
其他交易表直接存在于 `trading` 文件夹中，但这些已被弃用。目前只使用 `economy_trades` 子文件夹中的表。
:::

或者，可以更新交易者实体定义以指向新的交易表位置。

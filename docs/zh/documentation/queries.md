---
title: Molang 查询
description: 一些 MoLang 查询的解释。
outline_depth: 2
mentions:
    - SirLich
    - solvedDev
    - stirante
    - SmokeyStack
    - Dreamedc2015
    - Ultr4Anubis
    - MedicalJewel105
    - TreaBeane
    - r4isen1920
    - ChillRx
    - Lufurrius
    - TheItsNameless
    - ThomasOrs
---

Molang 的官方文档历来很差。本页面将尝试通过为各个查询提供额外详细信息来改善这一情况，_在可能的情况下_。本页面旨在供搜索使用，而非完整阅读。使用侧边栏，或使用 `ctrl-f` 进行导航。

:::tip
本页面并非详尽无遗的列表！它仅包含我们编写了额外信息的查询。完整的查询列表可在此处找到[here](https://bedrock.dev/docs/stable/Molang#List%20of%20Entity%20Queries)!
:::

## query.armor_texture_slot

格式如：`query.armor_texture_slot(x) = y`。

其中 `x` 和 `y` 都是整数参数，来自下表：

### X

| 参数 | 槽位        |
| ---- | ----------- |
| 0    | 头盔        |
| 1    | 胸甲        |
| 2    | 护腿        |
| 3    | 靴子        |

### Y

| 参数 | 类型              |
| ---- | ----------------- |
| -1   | 无                |
| 0    | 皮革盔甲        |
| 1    | 锁链盔甲        |
| 2    | 铁盔甲          |
| 3    | 钻石盔甲        |
| 4    | 金盔甲          |
| 5    | 鞘翅            |
| 6    | 海龟壳          |
| 7    | 下界合金盔甲    |

### Y（马）

| 参数 | 类型            |
| ---- | --------------- |
| 1    | 皮革盔甲       |
| 2    | 铁盔甲         |
| 3    | 金盔甲         |
| 4    | 钻石盔甲       |

### 示例

`query.armor_texture_slot(3) == 1`：查询铁靴子。

## query.armor_material_slot

格式如：`query.armor_material_slot(x) = y`。

其中 `x` 和 `y` 都是整数参数，来自下表：

### X

| 参数 | 槽位        |
| ---- | ----------- |
| 0    | 头盔        |
| 1    | 胸甲        |
| 2    | 护腿        |
| 3    | 靴子        |

### Y

未知，可能是：

| 参数 | 槽位                    |
| ---- | ---------------------- |
| 0    | 默认盔甲材质           |
| 1    | 附魔盔甲材质           |
| 2    | 皮革盔甲材质           |
| 3    | 皮革附魔材质           |

## query.armor_color_slot

_注意：从版本 `1.16.100.51` 开始，此查询会导致 minecraft 崩溃。之后的版本可能会修复。_

格式如：`color = query.armor_color_slot(slot, channel)`。

其中 `slot` 和 `channel` 都是整数参数，来自下表：

### 槽位

| 参数 | 槽位        |
| ---- | ----------- |
| 0    | 头盔        |
| 1    | 胸甲        |
| 2    | 护腿        |
| 3    | 靴子        |

### 通道

| 参数 | 槽位          |
| ---- | ------------- |
| 0    | 红色通道     |
| 1    | 绿色通道     |
| 2    | 蓝色通道     |
| 3    | Alpha 通道   |

### 颜色

查询返回指定通道中的颜色值。

## query.get_equipped_item_name

:::warning
**已弃用的查询：** 建议尽可能使用新查询（`query.is_item_name_any`），因为它是此查询的更新版本。不过，为保持向后兼容，此查询在未来仍可继续使用。
:::

格式如：`query.get_equipped_item_name('main_hand') = 'item_name'`

接受一个可选的手槽位参数（0 或 'main_hand' 为主手，1 或 'off_hand' 为副手），以及第二个参数（0=默认）如果您想要已装备的物品或任何非零数字表示当前渲染的物品，并返回请求槽位中的物品名称（如果未提供参数则默认为主手），如果没有则返回 ''。

其中 `item_name` 是您要测试的物品。请注意无命名空间，并注意引号。

示例：`"query.get_equipped_item_name == 'diamond'"`

**您可以测试库存中的物品吗？可以！使用新查询 `query.is_item_name_any`。**

## query.get_name

:::warning
**已弃用的查询：** 建议尽可能使用新查询（`query.is_name_any`），因为它是此查询的更新版本。不过，为保持向后兼容，此查询在未来仍可继续使用。
:::

格式如：`query.get_name == 'Name'`

如果实际游戏内显示的名称与名称匹配则为 true（使用 OnixClient 在第三人称视图中查看名称）。需要在特殊条件下使用。

<Spoiler title="显示">

<CodeHeader>animation_controllers/ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.ac": {
            "initial_state": "default",
            "states": {
                "default": {
                    "transitions": [
                        {
                            "active": "query.is_alive"
                        }
                    ]
                },
                "active": {
                    "transitions": [
                        {
                            "default": "(1.0)"
                        }
                    ],
                    "animations": [
                        {
                            "anim": "query.get_name == '...'" // 你只能在这里使用它！
                        }
                    ]
                }
            }
        }
    }
}
```

</Spoiler>

## query.is_name_any

格式如：`query.get_name('Name1', 'Name2')`。
接受一个或多个参数。
如果实际游戏内显示的名称与给定名称之一匹配则为 true。
需要在特殊条件下使用。

<Spoiler title="显示">

<CodeHeader>animation_controllers/ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.ac": {
            "initial_state": "default",
            "states": {
                "default": {
                    "transitions": [
                        {
                            "active": "query.is_alive"
                        }
                    ]
                },
                "active": {
                    "transitions": [
                        {
                            "default": "(1.0)"
                        }
                    ],
                    "animations": [
                        {
                            "anim": "query.is_name_any(...)" // 你只能在这里使用它！
                        }
                    ]
                }
            }
        }
    }
}
```

</Spoiler>

## query.is_item_name_any

格式如：`query.is_item_name_any('slot.weapon.mainhand', 0, 'namespace:item_name')`

首先接受装备槽位名称，然后是槽位索引值，最后是带命名空间的物品名称列表。

可能的装备槽位如下：

| 槽位名称              | 槽位数量 | 描述                                                                         |
| --------------------- | -------- | ---------------------------------------------------------------------------- |
| `slot.weapon.mainhand` | 0        | 通常任何手持物品都在这里                                                    |
| `slot.weapon.offhand`  | 0        | 副手槽位，用于 `盾牌`、`不死图腾` 或 `地图`                                  |
| `slot.armor.head`      | 0        | 头部盔甲                                                                     |
| `slot.armor.chest`    | 0        | 胸甲                                                                         |
| `slot.armor.legs`      | 0        | 护腿                                                                         |
| `slot.armor.feet`      | 0        | 靴子                                                                         |
| `slot.armor`           | 0        | 马盔甲                                                                       |
| `slot.saddle`         | 0        | 马鞍槽位                                                                     |
| `slot.hotbar`         | 0 到 8   | 玩家快捷栏槽位                                                              |
| `slot.inventory`      | 0+（varies）| 有库存的实体，如玩家、箱子矿车、驴等。                                     |
| `slot.enderchest`     | 0 到 26  | 仅玩家的末影箱库存                                                          |

### 测试玩家库存中的物品

格式如：`t.val = 0; t.i = 0; loop(27, {t.val = q.is_item_name_any('slot.inventory', t.i, 'namespace:item_name'); t.val ? break; t.i = t.i+1;});`

将 `namespace:item_name` 替换为您要检查的任何物品。这会简单循环遍历库存的所有 27 个槽位，如果找到任何具有指定物品的槽位则返回 `1.0`。请注意，快捷栏与主库存槽位不同，因此您需要单独检查。

## query.is_enchanted

格式如：`is_enchanted = query.is_enchanted`。

根据实体是否被附魔返回 1.0 或 0.0。

_目前，只能在材质中使用。_

## query.is_eating

此查询追踪某些实体正在"进食"的时刻。不适用于玩家。触发方式，使用以下组件之一：- `minecraft:behavior.eat_carried_item` - `minecraft:behavior.snacking`

## query.is_ghost

格式如：`is_ghost = query.is_ghost`。

根据实体是否为幽灵返回 1.0 或 0.0。

_目前，仅对守卫者幽灵返回 1.0，并由其渲染器使用。_

## query.is_grazing

格式如：`is_grazing = query.is_grazing`。

根据实体是否正在吃方块返回 1.0 或 0.0。

_目前，仅对羊和使用绵羊运行时标识符的实体返回 1.0。_

## query.is_jumping

格式如：`is_jumping = query.is_jumping`。

根据实体是否正在跳跃返回 1.0 或 0.0。

对于玩家，激活条件为：

-   跳跃按钮被按下（包括在水中和爬脚手架时）
-   或自动跳跃触发
-   或游泳时自动跳跃
-   或为可骑行实体充能跳跃

## query.modified_move_speed

格式如：`modified_move_speed = query.modified_move_speed`。

返回实体的当前步行速度，该速度已根据状态标志（如 is_baby 或 on_fire）进行了修改。

值示例：

-   玩家行走：约 0.86
-   玩家冲刺：1.0
-   玩家冲刺并跳跃：0.35
-   玩家在火上行走：1.0
-   玩家在火上冲刺：1.0
-   玩家在火上冲刺并跳跃：0.525

## query.log

内容日志不是调试日志，它们是不同的文件。`query.log` 仅输出到调试日志。

## query.on_fire_time

格式如：`on_fire_time = query.on_fire_time`。

返回实体开始或停止燃烧以来的游戏刻数，否则返回 0.0

值示例：

-   实体被召唤：值为 0
-   实体被点燃：值为 0 并开始每游戏刻递增 1
-   实体已燃烧 2 秒：值为 40 仍然每游戏刻递增 1
-   实体停止燃烧：值重置为 0 尽管不再燃烧仍继续每游戏刻递增 1
-   实体第二次被点燃：值重置为 0 继续每游戏刻递增 1
-   实体第二次停止燃烧：值重置为 0 尽管不再燃烧仍继续每游戏刻递增 1

基本上这是一个游戏刻计时器，在实体首次被点燃后开始，并在每次从燃烧状态改变时重置。

## query.scoreboard

格式如：`query.scoreboard('objective_name') > 0`

如果查询值在指定范围内则返回 1.0 或 0.0。或基于分数计数、molang 操作符和数字。

请注意，有时它可能由于未知原因无法工作。其中之一是这无法查询带有大写字母的计分板目标名称。在这种情况下，例如，目标 `testfoo` 可以工作，但 **不是** `testFoo`。

## query.structural_integrity

格式如：`structural_integrity = query.structural_integrity`。

由船和矿车用于销毁它。攻击实体时它会减少，并会随时间恢复。
可能除了船和矿车外对任何其他东西都不可用。

## variable.attack_time

### 说明

此变量设置为就像是一个查询一样。换句话说，它可以在任何实体上使用，无论是在客户端还是服务器上，无论您是否正确设置/定义了该变量。

### 对于实体

变量追踪实体何时挥动攻击。不攻击时，它将返回 0.0，攻击时它将从 0.0 到总攻击时间（可能约为 0.3 或类似值）之间变化。对于玩家，此值范围从 0.0 到 1.0。该变量以小数形式返回实体攻击进度的百分比。例如，如果实体攻击挥动进行到一半，则变量将返回 0.5。它线性递增。

### 对于玩家

对于玩家，该变量将追踪何时臂骨在挥动，这包括：

-   放置方块
-   放置实体
-   交互（当挥动启用时）
-   近战攻击

## query.is_roaring

当 `knockback_roar` 攻击发生时评估为 true。

## query.head_x_rotation

格式如：`query.head_x_rotation(x)`

其中 `x` 指定实体的头部。它对于任何实体都不是真正相关的，只有凋零者。

返回头部俯仰。抬头返回 `-89.9`，低头返回 `89.9`。

## query.head_y_rotation

格式如：`query.head_y_rotation(x)`

其中 `x` 指定实体的头部。它对于任何实体都不是真正相关的，只有凋零者。

返回头部偏航角从 `-179.9` 到 `179.9`。值会环绕，所以就像如果您在 `-179.9` 然后稍微转一下，就会立即变成 `179.9`。

## query.target_x_rotation 和 query.target_y_rotation

与各自的 `query.head_*_rotation` 相同，但没有选择头部的可选参数。

## query.time_of_day

返回实体所在维度的一天中的时间（午夜=0.0，日出=0.25，正午=0.5，日落=0.75）。
白天时间通过以下公式计算：

`f(x) = (x*0.25/2400)mod 1`

query.time_of_day - 白天时间表

<Spoiler title="显示">

| `query.time_of_day` | 白天时间 |
| ------------------- | -------- |
| 0.00                | 18000    |
| 0.01                | 18240    |
| 0.02                | 18480    |
| 0.03                | 18720    |
| 0.04                | 18960    |
| 0.05                | 19200    |
| 0.06                | 19440    |
| 0.07                | 19680    |
| 0.08                | 19920    |
| 0.09                | 20162    |
| 0.10                | 20400    |
| 0.11                | 20640    |
| 0.12                | 20880    |
| 0.13                | 21120    |
| 0.14                | 21360    |
| 0.15                | 21602    |
| 0.16                | 21840    |
| 0.17                | 22080    |
| 0.18                | 22322    |
| 0.19                | 22560    |
| 0.20                | 22800    |
| 0.21                | 23040    |
| 0.22                | 23280    |
| 0.23                | 23520    |
| 0.24                | 23760    |
| 0.25                | 0        |
| 0.26                | 240      |
| 0.27                | 480      |
| 0.28                | 720      |
| 0.29                | 960      |
| 0.30                | 1202     |
| 0.31                | 1440     |
| 0.32                | 1680     |
| 0.33                | 1922     |
| 0.34                | 2160     |
| 0.35                | 2400     |
| 0.36                | 2642     |
| 0.37                | 2880     |
| 0.38                | 3120     |
| 0.39                | 3360     |
| 0.40                | 3600     |
| 0.41                | 3840     |
| 0.42                | 4080     |
| 0.43                | 4320     |
| 0.44                | 4560     |
| 0.45                | 4800     |
| 0.46                | 5040     |
| 0.47                | 5280     |
| 0.48                | 5520     |
| 0.49                | 5760     |
| 0.50                | 6000     |
| 0.51                | 6240     |
| 0.52                | 6480     |
| 0.53                | 6720     |
| 0.54                | 6960     |
| 0.55                | 7200     |
| 0.56                | 7440     |
| 0.57                | 7680     |
| 0.58                | 7920     |
| 0.59                | 8160     |
| 0.60                | 8402     |
| 0.61                | 8640     |
| 0.62                | 8880     |
| 0.63                | 9120     |
| 0.64                | 9360     |
| 0.65                | 9600     |
| 0.66                | 9842     |
| 0.67                | 10080    |
| 0.68                | 10320    |
| 0.69                | 10560    |
| 0.70                | 10800    |
| 0.71                | 11040    |
| 0.72                | 11282    |
| 0.73                | 11520    |
| 0.74                | 11760    |
| 0.75                | 12000    |
| 0.76                | 12240    |
| 0.77                | 12480    |
| 0.78                | 12720    |
| 0.79                | 12962    |
| 0.80                | 13200    |
| 0.81                | 13440    |
| 0.82                | 13680    |
| 0.83                | 13920    |
| 0.84                | 14160    |
| 0.85                | 14402    |
| 0.86                | 14640    |
| 0.87                | 14880    |
| 0.88                | 15120    |
| 0.89                | 15360    |
| 0.90                | 15600    |
| 0.91                | 15842    |
| 0.92                | 16080    |
| 0.93                | 16320    |
| 0.94                | 16560    |
| 0.95                | 16800    |
| 0.96                | 17040    |
| 0.97                | 17282    |
| 0.98                | 17520    |
| 0.99                | 17760    |
| 1.00                | 18000    |

致谢：[query.time_of_day 分析](https://gist.github.com/DoubleF3lix/a03afde0a979dfa41e8525ee92f12ca5)

</Spoiler>

## query.eye_target_x_rotation 和 query.eye_target_y_rotation

不适用于玩家。不太确定它有什么用。

## variable.short_arm_offset_right

返回玩家右臂骨骼相对于默认皮肤几何体的偏移因子。配备在玩家身上时，瘦臂（3 像素宽）皮肤将返回 `0.5`。正常（4 像素宽）皮肤将返回 `0.0`。注意：玩家必须至少进入第一人称视角一次，此变量才能初始化并可在实体上其他位置使用。

## variable.short_arm_offset_left

与 `variable.short_arm_offset_right` 行为相同，只是引用玩家左臂骨骼。

## query.movement_direction

返回实体移动归一化向量的 3 个分量之一，这意味着向量的大小/模/长度在 0 到 1 之间。

**注意**：在编写文档时，任何轴返回的值都会根据实体的速度而变化（如果实体在地面上，该值将小于实体在空中时即使朝同一方向移动的值）。

要获取实体移动的实际归一化速度向量，您需要对值进行归一化。以下是 Molang 设置：

```molang
variable.mag = math.sqrt( math.pow( query.movement_direction(0), 2 ) + math.pow( query.movement_direction(1), 2) + math.pow( query.movement_direction(2), 2));
variable.xNorm = query.movement_direction(0) / variable.mag;
variable.yNorm = query.movement_direction(1) / variable.mag;
variable.zNorm = query.movement_direction(2) / variable.mag;
```

有关归一化向量的更多信息，您可以玩这个 <a href=https://www.desmos.com/calculator/hhoamwgve2>Desmos 图表</a>

| 参数 | 轴 |
| ---- | -- |
| 0    | X  |
| 1    | Y  |
| 2    | Z  |

## query.block_neighbor_has_any_tag 和 query.relative_block_has_any_tag

需要使用"实验性 Molang 功能"。根据文档，`获取相对位置和一个或多个标签名称，根据该位置的方块是否具有提供的任何标签返回 0 或 1`。这对于使用连接方块或检测实体很有用。

`query.block_neighbor_has_any_tag` - 接受方块位置
`query.relative_block_has_any_tag` - 接受实体位置

其语法为 `q.block_neighbor_has_any_tag(x,y,z,'tag_name')` 和 `q.relative_block_has_any_tag(x,y,z,'tag_name')`。

示例：

-   `q.relative_block_has_any_tag(0,-1,0,'grass')` 会尝试检测实体下方一个带有草标签的方块。
-   `q.block_neighbor_has_any_tag(0,-1,0,'grass')` 会尝试检测方块下方一个带有草标签的方块。

要使用多个标签，您可以使用 `q.correct_query(0,-1,0,'grass', 'plant')`，其中 `correct_query` 被正确的查询替换。

请注意，这也可以检测自定义标签和[原版标签](/blocks/block-tags)
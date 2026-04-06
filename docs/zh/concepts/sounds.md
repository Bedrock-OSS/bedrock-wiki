---
title: 音效
description: 了解如何在不覆盖任何默认音效的情况下添加自定义音效。
tags:
    - intermediate
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - aexer0e
    - MedicalJewel105
    - Justash01
    - DasEtwas
    - TheItsNameless
    - ThomasOrs
    - QuazChick
---

在基岩版中，我们可以添加自定义音效而不覆盖任何默认音效。这是通过将文件添加到资源包中来实现的。

:::tip
学习音效的最佳方式是下载默认资源包并对其进行操作。
:::

### 文件结构

当我们想要添加音效时，有两个主要文件需要编辑。注意 `sound_definition` 嵌套在 `sounds` 里面。

音效文件本身添加在 `sounds` 文件夹中，可以是以下任何格式。

<FolderView :paths="[
	'RP/sounds/example.wav',
	'RP/sounds/example.ogg',
	'RP/sounds/example.fsb',
	'RP/sounds/sound_definitions.json',
	'RP/sounds.json',
]" />

## sound_definitions.json

`sound_definitions.json` 是我们定义新音效短名称的地方。这相当于将 `short-name` 或 `id` 映射到物理音效路径。以下是一个示例 `sound_definitions.json`，添加了一个名为 `example.toot` 的新喇叭音效：

<CodeHeader>RP/sounds/sound_definitions.json</CodeHeader>

```json
{
    "format_version": "1.14.0",
    "sound_definitions": {
        "example.toot": {
            "category": "neutral",
            "sounds": ["sounds/trumpet"]
        }
    }
}
```

以这种方式添加的音效可以使用 `/playsound` 触发。请注意，`playsound` 不会自动更正，因此你需要仔细输入。

:::warning
通过文件路径引用的新文件（如音效）确实需要完全重启客户端才能加载。这意味着如果音效不工作，你应该重启整个 MC 客户端，而不是仅仅重载世界。
:::

### /playsound 音量说明

游戏会在与音效定义的音量相乘之前将音效音量限制为最多 1.0。

对于 `/playsound`，音效的最大可听范围由 `min(max_distance, max(volume * 16, 16))` 给出。
如果音效定义中没有给出 `"max_distance"` ，则相当于 `playsound_volume * 16`。

近似音效衰减与距离的关系。实际图表可能不是线性的。

![](sound_graph.png)

上面显示的是**播放音量参数大于或等于 1 的音效**的近似音量衰减因数。注意 playsound `<volume>` 如何限制音效的可听范围。
`distance` 轴是音效听众（玩家）到音效源的距离。对应的 `volume` 轴的值是 playsound 音量上限为 1 的因数，乘以音效定义的音量，得到你听到的音效的最终音量。用表达式可以写成：`final_volume = min(playsound_volume, 1) * graph_volume * sound_definition_volume`。

**注意：** 音效可听音量的距离衰减不受命令中给出的音量参数影响。

例如，`mob.ghast.affectionate_scream` 设置了 `"min_distance": 100.0`，但使用音量 1 的 `/playsound` 播放时，最远只能在 16 格距离内听到。指定更大的音量值会增加可听范围。当使用足够大的音量使音效在更远的地方也能听到时，音效会在超过 100.0 的距离后才开始变 quiet。

要使音效能够在远处听到但音量随距离持续下降，可以添加例如 `"volume": 0.01` 并在 playsound 命令中使用大的 `<volume>` 值。`/playsound` 音量的大值将产生大的可听范围（例如，音量 4 如上计算为 64 格），而低音量将防止播放的音效过快达到 1.0 上限。

### 顶级键

在上面的示例中，我展示了两个顶级字段：`category` 和 `sounds`。`sounds` 将在下文中详细讨论，但其他顶级键将在此处讨论：

#### 分类

分类在引擎内部用于决定如何播放每个音效。我们可以利用不同的频道来获得其他效果。

| 分类     | 说明                                               |
| -------- | -------------------------------------------------- |
| block    |                                                    |
| bottle   |                                                    |
| bucket   |                                                    |
| hostile  |                                                    |
| music    |                                                    |
| neutral  |                                                    |
| player   |                                                    |
| record   |                                                    |
| ui       | 此分类中的音效将忽略距离限制                        |
| weather  |                                                    |

#### min_distance

音效音量开始衰减的距离。默认值：0.0。它必须是浮点数（例如 1.0），否则该属性将被忽略。

#### max_distance

音效音量变得最 quiet（如果在范围内）的距离。它必须是浮点数（例如 1.0），否则该属性将被忽略。

### 音效定义

在上面的示例中，我将 `sounds` 显示为具有单个路径的列表。这对于简单的音效来说很好，但功能不强。首先，我可以在列表中添加多个音效。这些音效在播放时会随机播放：

<CodeHeader>RP/sounds/sound_definitions.json</CodeHeader>

```json
{
    "format_version": "1.14.0",
    "sound_definitions": {
        "example.toot": {
            "category": "neutral",
            "sounds": ["sounds/trumpet", "sounds/trumpet2", "sounds/trumpet3"]
        }
    }
}
```

此外，我们可以将每个音效定义为对象而不是字符串。这允许我们更精细地控制并解锁一些新设置。可以混合和匹配字符串/对象样式。

#### name

文件的路径，例如：`"sounds/music/game/creative/creative1"`

#### stream

限制音效同时播放的实例数量。会导致游戏在播放时不会将整个音效数据加载到内存中，而是在播放时以较小的部分加载，从而使用更少的内存。适合改善音效密集型世界的性能。

#### volume

音效应该播放的音量，从 `0.0` 到 `1.0`。无法使音效比最初编码的更响亮。默认为 `1.0`。
自定义资源包中的音效可以有大于 1.0 的有效值。

#### load_on_low_memory

强制在接近低内存时加载音效。"load_on_low_memory" 自 1.16.0 起已被弃用

#### pitch

音效的音调（听起来多低/多高）。应该是正值。例如，`2.3` 将使音效播放速度快 2.3 倍，从而音调更高。默认为 `1.0`。

#### is3D

`true` 使音效具有方向性。默认为所有音效 `true`。被忽略用于 `music` 和 `ui` 音效。只有 `false` 的音效会播放立体声音效。

#### interruptible

默认为 `true`。

#### weight

如果列表中有多个音效，要播放的音效是随机选择的。`"weight"`（整数值如 5）将给出从列表中选择该音效的相对概率。例如，如果列表中有两个音效，一个具有 `"weight": 10`，另一个具有 `"weight": 2`，第一个被播放的概率大约是第二个的 5 倍（准确地说：10 / (10 + 2) = 83.3% 概率 vs. 2 / (10 + 2) = 16.7% 概率）。默认为 `1`。

### 示例

这是一个包含这些选项的更现实的示例：

<CodeHeader>RP/sounds/sound_definitions.json#sound_definitions</CodeHeader>

```json
"block.beehive.drip": {
    "category": "block",
    "max_distance": 8,
    "sounds": [
        {
            "name": "sounds/block/beehive/drip1",
            "load_on_low_memory": true
        },
        "sounds/block/beehive/drip2",
        "sounds/block/beehive/drip3",
        "sounds/block/beehive/drip4"
    ]
}
```

## sounds.json

如果我们想让音效自动运行，可以将它们添加到 `sounds.json` 文件中。这将使音效定义直接绑定到游戏事件，并在无需使用 `/playsound` 触发的情况下播放。

音效可以添加到各种分类：

| 分类                    | 说明                                                                             |
| ----------------------- | -------------------------------------------------------------------------------- |
| block_sounds            | 包含方块的撞击、脚步和破坏音效                              |
| entity_sounds           | 包含实体的死亡、环境、受伤等音效（包括自定义的！）           |
| individual_event_sounds | 包含诸如信标激活、箱子关闭或爆炸之类的音效                    |
| interactive_sounds      | 工作中                                                               |

### 添加实体音效

我认为音效可以添加到其他分类，但我个人只有将音效添加到 `entities` 分类的经验。实体音效会在实体生命周期的各个点自动播放。

常见事件：

| 事件           | 说明                                                     |
| -------------- | -------------------------------------------------------- |
| ambient        | 随机播放，如咕噜声、咯咯声或恶魂噪音                      |
| attack         | 用于近战攻击                                              |
| attack.strong  | 用于 delayed_attack 行为                                  |
| cast.spell     | 用于开始召唤                                              |
| death          | 在死亡时播放                                              |
| fall.big       | 从高处落地                                                |
| fall.small     | 从低处落地                                                |
| hurt           | 在受伤时播放                                              |
| prepare.attack | 用于完成召唤                                              |
| roar           | 用于咆哮                                                  |
| shoot          | 用于发射投射物                                            |
| splash         | 在水中溅水                                                |
| step           | 在实体沿地面移动时播放                                      |

还有很多音效事件，这些事件_很可能_会自动触发，但我没有详细信息，例如：

| 未知分类      |
| ------------- |
| ambient.in.water |
| breathe       |
| death.in.water  |
| eat           |
| hurt.in.water   |
| jump          |
| mad           |
| scream        |
| sleep         |
| sniff         |
| spit          |
| splash        |
| stare         |
| swim          |
| warn          |

### 示例

<CodeHeader>RP/sounds.json</CodeHeader>

```json
{
    "entity_sounds": {
        "entities": {
            "wiki:elephant": {
                "volume": 1,
                "pitch": [0.9, 1.0],
                "events": {
                    "step": {
                        "sound": "elephant.step",
                        "volume": 0.18,
                        "pitch": 1.1
                    },
                    "ambient": {
                        "sound": "elephant.trumpet",
                        "volume": 0.11,
                        "pitch": 0.9
                    }
                }
            }
        }
    }
}
```

## 将音效添加到动画

在动画中播放的音效基于 RP 实体文件中的短名称定义。

这个示例展示了播放一个翅膀扇动音效，与动画同步。

<CodeHeader>RP/entities/dragon.json#minecraft:client_entity/description</CodeHeader>

```json
"sound_effects": {
    "wing_flap": "wiki.dragon.wing_flap" //where wiki.dragon.roar is a sound defined in sound_definitions
}
```

<CodeHeader>RP/animations/dragon.json#animations/animation.dragon.flying</CodeHeader>

```json
"sound_effects": {
    "3.16": {
        "effect": "wing_flap"
    }
}
```

## 将音效添加到动画控制器

你可以在动画控制器中以与动画类似的方式播放音效。

这个示例展示了使用动画控制器同步播放爆炸音效。

<CodeHeader>RP/entities/custom_tnt.json#minecraft:client_entity/description</CodeHeader>

```json
"sound_effects": {
    "explosion": "wiki.custom_tnt.explosion" //where wiki.custom_tnt.explosion is a sound defined in sound_definitions just like animation sounds.
}
```

<CodeHeader>
    RP/animation_controllers/custom_tnt.animation_controllers.json#controller.animation.custom_tnt
</CodeHeader>

```json
"states":{
    "default":{
        "transitions":[
            {
                "explode_state":"q.mark_variant == 1"
            }
        ]
    },
    "explode_state":{
        "sound_effects":[
            {
                "effect":"explosion"
            }
        ],
        "transitions":[
            {
                "default":"q.mark_variant == 0"
            }
        ]
    }
}
```

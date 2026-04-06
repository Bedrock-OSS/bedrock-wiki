---
title: 动画中的特效
mentions:
    - MedicalJewel105
category: 通用
description: 学习如何为你的动画添加粒子和声音。
---

## 动画中的特效

有时在动画中使用粒子或声音比在动画控制器中更简单。
动画中可以包含特效，例如：

-   粒子
-   声音

### 粒子

Minecraft粒子可以用于实体动画。例如，幻翼有一个持续发射minecraft:phantom_trail粒子的动画。让我们尝试为我们的实体攻击动画添加一个粒子。

<CodeHeader>RP/entity/my_entity.json</CodeHeader>

```json
"particle_effects": {
	"flames": "minecraft:mobflame_emitter"
}
```

这里我们为将要使用的粒子定义了一个简称。

你可以在[这里](https://minecraft.wiki/w/Particles)或[这里](/particles/vanilla-particles)找到粒子列表。

:::warning 警告！
并非所有粒子都能在那里工作。如果有问题，可以尝试另一个粒子。例如，使用这个。
还要注意一些粒子会持续发射。
:::

### 声音

如果你想使用声音，你也需要定义它。
你可以在[ZapSplat](https://www.zapsplat.com/)获取声音。

<CodeHeader>RP/entity/my_entity.json</CodeHeader>

```json
"sound_effects": {
	"meow": "mob.cat.meow"
}
```

:::warning 警告！
并非所有声音都能在那里工作。如果有问题，可以尝试另一个声音。例如，使用这个。
:::

## 为动画添加特效

你可以在动画中主要（在JSON中）或在Blockbench中添加粒子或声音。

### 在JSON中

你需要将以下内容添加到你的动画中：

<CodeHeader>RP/animations/my_animation.json#my.animation</CodeHeader>

```json
"particle_effects": {
    "0.0": {
        "effect": "flames",
        "locator": "" //你需要在你的模型中添加一个定位器
    }
}
```

<CodeHeader>RP/animations/my_animation.json#my.animation</CodeHeader>

```json
"sound_effects": {
    "0.0": {
        "effect": "meow"
	}
}
```

你可以在同一时间调用多个粒子：

```json
"particle_effects": {
    "0.0": [
        {
            "effect": "particle_1",
            "locator": "locator_1"
    	},
	{
            "effect": "particle_2",
            "locator": "locator_2"
    	}
    ]
}
```

<Spoiler title="示例">

<CodeHeader>RP/animations/my_animation.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "animations": {
        "animation.sheep.grazing": {
            "animation_length": 2.0,
            "loop": true,
            "particle_effects": {
                "0.0": {
                    "effect": "flames",
                    "locator": "body"
                }
            },
            "sound_effects": {
                "0.0": {
                    "effect": "meow"
                }
            },
            "bones": {
                "head": {
                    "position": {
                        "0": [0.0, 0.0, 0.0],
                        "0.2": [0.0, -9.0, 0.0],
                        "1.8": [0.0, -9.0, 0.0],
                        "2": [0.0, 0.0, 0.0]
                    },
                    "rotation": {
                        "0.2": {
                            "post": [
                                "180.0 * (0.2 + 0.07 * math.sin(q.key_frame_lerp_time * 1644.39))",
                                0.0,
                                0.0
                            ],
                            "pre": [36.0, 0.0, 0.0]
                        },
                        "1.8": {
                            "post": [36.0, 0.0, 0.0],
                            "pre": [
                                "180.0 * (0.2 + 0.07 * math.sin(q.key_frame_lerp_time * 1644.39))",
                                0.0,
                                0.0
                            ]
                        }
                    }
                }
            }
        }
    }
}
```

</Spoiler>

### 在Blockbench中

首先，让我们为粒子添加一个定位器。转到“编辑”部分选择一个组，右键单击然后选择“添加定位器”：

![](add-locator.png)

重命名它并移动到你想要的位置。

然后转到“动画”部分选择一个动画，点击魔杖图标：

![](add-effect.png)

现在点击“+”打开菜单并指定数据：

![](specify-data.png)

你可以用同样的方式为动画附加声音。

现在保存你的动画并启动游戏！

![](showcase.png)

:::warning 警告！
目前（1.21.1）定位器对可穿戴物品无效。
:::

## 离屏更新

你可以在实体RP脚本中设置 `"should_update_bones_and_effects_offscreen"` 为 `true`，以使粒子和声音特效在离屏时更新，默认情况下，如果实体没有在屏幕上渲染，两者都会停止播放。

<CodeHeader>RP/entity/my_entity.json#description</CodeHeader>

```json
"scripts": {
	"should_update_bones_and_effects_offscreen": true
}
```

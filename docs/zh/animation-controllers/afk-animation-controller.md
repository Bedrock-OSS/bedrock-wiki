---
title: AFK 检测器
mentions:
    - SirLich
    - BlueFrog130
    - SmokeyStack
    - Keyyard
    - Ultr4Anubis
description: 玩家 AFK 时运行命令。
---

### AFK 检测器动画控制器

<Button link="animation-controllers-intro">了解更多关于动画控制器</Button>

这是一个可用于跟踪 AFK 玩家的示例。

<CodeHeader>BP/animation_controllers/afk.ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.player.afk": {
            "states": {
                "default": {
                    "transitions": [
                        {
                            "stands_still": "!q.is_moving"
                        }
                    ]
                },
                "stands_still": {
                    "on_entry": ["v.afk = q.life_time;"],
                    "transitions": [
                        {
                            "afk": "(q.life_time - v.afk) >= 30 && !q.is_moving"
                        },
                        {
                            "default": "q.is_moving"
                        }
                    ]
                },
                "afk": {
                    "on_entry": ["/tag @s add AFK", "/say I'm now AFK"],
                    "animations": ["afk_animation"],
                    "transitions": [
                        {
                            "default": "q.is_moving"
                        }
                    ],
                    "on_exit": ["/tag @s remove AFK", "/say I'm no longer AFK"]
                }
            }
        }
    }
}
```

- "controller.animation.player.afk" 当然是标识符。
- 如果 [Molang](https://bedrock.dev/r/MoLang) 查询 `!q.is_moving` 返回 false（玩家没有移动），状态将转换到 "stand_still" 状态。
- "stand_still" 状态检查玩家在30秒内是否不移动，以转换到 "afk"，否则返回 "default"
- 当进入 "afk" 状态时，"on_entry" 被触发，它将运行以下斜杠命令。
- "animations" 包含行为动画的简写，该动画将在整个状态活动期间运行，就像在 [资源动画控制器](#animation-controller) 中一样。
- 如果玩家再次移动，状态将再次转换到 "default"。
- "on_exit" 命令将被执行。
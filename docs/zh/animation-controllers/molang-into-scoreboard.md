---
title: Molang 转记分板
mentions:
    - SirLich
    - MedicalJewel105
    - shanewolf38
    - Lufurrius
    - TheItsNameless
    - ThomasOrs
description: 将 Molang 变量值转换为记分板值。
---

以下提供了一种方法，可以即时读取任意 Molang（变量、查询等）到记分板。请确保控制器 `convert` 状态中调用的动画名称与实体中定义的动画名称（animation.namespace.molang_to_score）相匹配。

**注意：** 这两条命令必须在世界中作为初始设置的一部分运行：
`/scoreboard objectives add MoLang dummy`
`/scoreboard players set "#10" MoLang 10`

<CodeHeader>BP/animation_controllers/molang_to_score.animation_controllers.json</CodeHeader>

```json
"controller.animation.namespace.molang_to_score": {
  "initial_state": "idle",
  "states": {
    "idle": {
      "transitions": [ { "convert": "<condition to start conversion>" } ],
      "on_exit": [ "/scoreboard players set @s MoLang 0", "/scoreboard players set \"#var\" MoLang 0", "v.convert = <variable to convert>;", "v.digit = 1000000000;" ]
    },
    "convert": {
      "animations": [
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score",
        "molang_to_score"
      ],
      "transitions": [ { "idle": "1" } ]
    }
  }
}
```

<CodeHeader>BP/animations/molang_to_score.animation.json</CodeHeader>

```json
"animation.namespace.molang_to_score": {
  "animation_length": 10.0,
  "anim_time_update": "t.digit = Math.mod(Math.floor(v.convert / v.digit), 10) + 0.1; v.digit = v.digit / 10; return t.digit;",
  "timeline": {
    "0.0": [ "/scoreboard players operation @s MoLang *= \"#10\" MoLang", "/scoreboard players operation @s MoLang += \"#var\" MoLang", "/scoreboard players set \"#var\" MoLang 0" ],
    "1.0": [ "/scoreboard players set \"#var\" MoLang 1" ],
    "2.0": [ "/scoreboard players set \"#var\" MoLang 2" ],
    "3.0": [ "/scoreboard players set \"#var\" MoLang 3" ],
    "4.0": [ "/scoreboard players set \"#var\" MoLang 4" ],
    "5.0": [ "/scoreboard players set \"#var\" MoLang 5" ],
    "6.0": [ "/scoreboard players set \"#var\" MoLang 6" ],
    "7.0": [ "/scoreboard players set \"#var\" MoLang 7" ],
    "8.0": [ "/scoreboard players set \"#var\" MoLang 8" ],
    "9.0": [ "/scoreboard players set \"#var\" MoLang 9" ]
  }
}
```

**说明：** 当转换开始时，控制器会重置玩家的 Molang 记分板和 `#var`（虚拟玩家）的 Molang 记分板。转换变量 `v.convert` 被初始化，数字变量 `v.digit` 被设置为获取第10位数字（10^10）。然后第一个动画运行，将动画时间设置为第10位，并将数字变量设置为获取下一位数字（第9位，10^9）。由于所有时间线索引都会运行到设置的时间为止，时间线的 "0.0" 条目始终会运行。这将玩家的 Molang 记分板乘以10以设置正确的数字，然后加上最后获取的数字（第一次运行时，由于控制器已重置 `#var`，该数字始终为0）。然后重复该过程10次，以获取转换变量的所有10位数字。请记住，每个动画都会获取前一个动画设置的数字，这就是为什么动画需要运行11次。

要游戏中测试转换，请将 `<condition to start conversion>` 设置为 `q.is_using_item`，将 `<variable to convert>` 设置为 `Math.random_integer(0, 9999)`。拿一个苹果，开始吃，然后观察数字滚动。
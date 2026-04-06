---
title: 输入按键
description: 学习如何显示与玩家设置相匹配的输入按键。
category: 表情与符号
license: true
mentions:
    - QuazChick
---

输入按键可用于自动检测玩家的输入，并显示适合每种操作类型的按钮，例如 Windows 上的"SHIFT"用于潜行。

## 显示输入按键

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
action.hint.exit.rollercoaster=Press :_input_key.sneak: to end the ride
```

![Press B to end the ride](exit_rollercoaster_action_hint.png)

## 输入按键列表

以下是每种输入类型的默认控制设置结果。
下面的所有文本（包括"Unassigned"）都是字面量，会直接显示给玩家。

不存在的输入按键（例如 `:_input_key.fake:`）将始终显示为"Unassigned"。

### 通用输入按键

| 名称               | 简码                         | 键鼠                                         | 全键盘游戏                  | 触屏                                             | Xbox                                                            | Nintendo Switch                                                 | PlayStation                                                     |
| ------------------ | -------------------------------- | ------------------------------------------------------- | ---------------------- | ------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| 攻击               | `:_input_key.attack:`            | ![](/assets/images/text/emojis/mouse/left_button.png)   | Q                      | ![](/assets/images/text/emojis/touch/attack.png)  | ![](/assets/images/text/emojis/xbox/right_trigger.png)          | ![](/assets/images/text/emojis/switch/right_trigger.png)        | ![](/assets/images/text/emojis/playstation/right_trigger.png)   |
| 使用               | `:_input_key.use:`               | ![](/assets/images/text/emojis/mouse/right_button.png)  | E                      | ![](/assets/images/text/emojis/touch/place.png)   | ![](/assets/images/text/emojis/xbox/left_trigger.png)           | ![](/assets/images/text/emojis/switch/left_trigger.png)         | ![](/assets/images/text/emojis/playstation/left_trigger.png)    |
| 聊天               | `:_input_key.chat:`              | T                                                       | T                      | ![](/assets/images/text/emojis/touch/chat.png)    | ![](/assets/images/text/emojis/xbox/dpad_right.png)             | ![](/assets/images/text/emojis/switch/dpad_right.png)           | ![](/assets/images/text/emojis/playstation/dpad_right.png)      |
| 丢弃               | `:_input_key.drop:`              | Q                                                       | Z                      | Unassigned                                        | ![](/assets/images/text/emojis/xbox/dpad_down.png)              | ![](/assets/images/text/emojis/switch/dpad_down.png)            | ![](/assets/images/text/emojis/playstation/dpad_down.png)       |
| 表情               | `:_input_key.emote:`             | B                                                       | B                      | ![](/assets/images/text/emojis/touch/emote.png)   | ![](/assets/images/text/emojis/xbox/dpad_left.png)              | ![](/assets/images/text/emojis/switch/dpad_left.png)            | ![](/assets/images/text/emojis/playstation/dpad_left.png)       |
| 跳跃               | `:_input_key.jump:`              | SPACE                                                   | SPACE                  | ![](/assets/images/text/emojis/touch/jump.png)    | ![](/assets/images/text/emojis/xbox/a_button.png)               | ![](/assets/images/text/emojis/switch/a_button.png)             | ![](/assets/images/text/emojis/playstation/cross.png)           |
| 潜行               | `:_input_key.sneak:`             | SHIFT                                                   | SHIFT                  | ![](/assets/images/text/emojis/touch/sneak.png)   | ![](/assets/images/text/emojis/xbox/b_button.png)               | ![](/assets/images/text/emojis/switch/b_button.png)             | ![](/assets/images/text/emojis/playstation/circle.png)          |
| 冲刺               | `:_input_key.sprint:`            | CONTROL                                                 | CONTROL                | ![](/assets/images/text/emojis/touch/sprint.png)  | ![](/assets/images/text/emojis/xbox/left_stick.png)             | ![](/assets/images/text/emojis/switch/left_stick.png)           | ![](/assets/images/text/emojis/playstation/left_stick.png)      |
| 前进               | `:_input_key.forward:`           | W                                                       | W                      | ![](/assets/images/text/emojis/touch/forward.png) | ![](/assets/images/text/emojis/controller/left_stick_up.png)    | ![](/assets/images/text/emojis/controller/left_stick_up.png)    | ![](/assets/images/text/emojis/controller/left_stick_up.png)    |
| 后退               | `:_input_key.back:`              | S                                                       | S                      | ![](/assets/images/text/emojis/touch/back.png)    | ![](/assets/images/text/emojis/controller/left_stick_down.png)  | ![](/assets/images/text/emojis/controller/left_stick_down.png)  | ![](/assets/images/text/emojis/controller/left_stick_down.png)  |
| 左                 | `:_input_key.left:`              | A                                                       | A                      | ![](/assets/images/text/emojis/touch/left.png)    | ![](/assets/images/text/emojis/controller/left_stick_left.png)  | ![](/assets/images/text/emojis/controller/left_stick_left.png)  | ![](/assets/images/text/emojis/controller/left_stick_left.png)  |
| 右                 | `:_input_key.right:`             | D                                                       | D                      | ![](/assets/images/text/emojis/touch/right.png)   | ![](/assets/images/text/emojis/controller/left_stick_right.png) | ![](/assets/images/text/emojis/controller/left_stick_right.png) | ![](/assets/images/text/emojis/controller/left_stick_right.png) |
| 物品栏             | `:_input_key.inventory:`         | E                                                       | C                      | Unassigned                                        | ![](/assets/images/text/emojis/xbox/y_button.png)               | ![](/assets/images/text/emojis/switch/x_button.png)             | ![](/assets/images/text/emojis/playstation/triangle.png)        |
| 切换物品左         | `:_input_key.cycleItemLeft:`     | Unassigned                                              | PAGE UP                | Unassigned                                        | ![](/assets/images/text/emojis/xbox/left_bumper.png)            | ![](/assets/images/text/emojis/switch/left_bumper.png)          | ![](/assets/images/text/emojis/playstation/left_bumper.png)     |
| 切换物品右         | `:_input_key.cycleItemRight:`    | Unassigned                                              | PAGE DOWN              | Unassigned                                        | ![](/assets/images/text/emojis/xbox/right_bumper.png)           | ![](/assets/images/text/emojis/switch/right_bumper.png)         | ![](/assets/images/text/emojis/playstation/right_bumper.png)    |
| 切换视角           | `:_input_key.togglePerspective:` | F5                                                      | F5                     | Unassigned                                        | Unassigned                                                      | Unassigned                                                      | Unassigned                                                      |
| 选取方块           | `:_input_key.pickItem:`          | ![](/assets/images/text/emojis/mouse/middle_button.png) | X                      | Unassigned                                        | Unassigned                                                      | Unassigned                                                      | Unassigned                                                      |

### 键鼠输入按键

| 名称                     | 简码                              | 键鼠      | 全键盘游戏 |
| ------------------------ | ------------------------------------ | -------- | ---------------------- |
| 命令宏 1                  | `:_input_key.commandmacro.0:`        | Unassigned | Unassigned             |
| 命令宏 2                  | `:_input_key.commandmacro.1:`        | Unassigned | Unassigned             |
| 命令宏 3                  | `:_input_key.commandmacro.2:`        | Unassigned | Unassigned             |
| 命令宏 4                  | `:_input_key.commandmacro.3:`        | Unassigned | Unassigned             |
| 命令宏 5                  | `:_input_key.commandmacro.4:`        | Unassigned | Unassigned             |
| 命令宏 6                  | `:_input_key.commandmacro.5:`        | Unassigned | Unassigned             |
| 命令宏 7                  | `:_input_key.commandmacro.6:`        | Unassigned | Unassigned             |
| 命令宏 8                  | `:_input_key.commandmacro.7:`        | Unassigned | Unassigned             |
| 命令宏 9                  | `:_input_key.commandmacro.8:`        | Unassigned | Unassigned             |
| 命令宏 10                 | `:_input_key.commandmacro.9:`        | Unassigned | Unassigned             |
| 复制坐标                  | `:_input_key.copyCoordinates:`       | Unassigned | Unassigned             |
| 复制朝向坐标               | `:_input_key.copyFacingCoordinates:` | Unassigned | Unassigned             |
| 快捷栏槽位 1              | `:_input_key.hotbar.1:`              | 1        | 1                      |
| 快捷栏槽位 2              | `:_input_key.hotbar.2:`              | 2        | 2                      |
| 快捷栏槽位 3              | `:_input_key.hotbar.3:`              | 3        | 3                      |
| 快捷栏槽位 4              | `:_input_key.hotbar.4:`              | 4        | 4                      |
| 快捷栏槽位 5              | `:_input_key.hotbar.5:`              | 5        | 5                      |
| 快捷栏槽位 6              | `:_input_key.hotbar.6:`              | 6        | 6                      |
| 快捷栏槽位 7              | `:_input_key.hotbar.7:`              | 7        | 7                      |
| 快捷栏槽位 8              | `:_input_key.hotbar.8:`              | 8        | 8                      |
| 快捷栏槽位 9              | `:_input_key.hotbar.9:`              | 9        | 9                      |
| 微微抬头                   | `:_input_key.lookUpSlight:`          | Unassigned | SUBTRACT               |
| 微微低头                   | `:_input_key.lookDownSlight:`        | Unassigned | ADD                    |
| 左下看                    | `:_input_key.lookDownLeft:`          | Unassigned | NUMPAD1                |
| 下方看                    | `:_input_key.lookDown:`              | Unassigned | NUMPAD2                |
| 右下看                    | `:_input_key.lookDownRight:`         | Unassigned | NUMPAD3                |
| 左看                      | `:_input_key.lookLeft:`              | Unassigned | NUMPAD4                |
| 正看                      | `:_input_key.lookCenter:`            | Unassigned | NUMPAD5                |
| 右看                      | `:_input_key.lookRight:`             | Unassigned | NUMPAD6                |
| 左上看                    | `:_input_key.lookUpLeft:`            | Unassigned | NUMPAD7                |
| 上看                      | `:_input_key.lookUp:`                | Unassigned | NUMPAD8                |
| 右上看                    | `:_input_key.lookUpRight:`           | Unassigned | NUMPAD9                |
| 平滑抬头                   | `:_input_key.lookUpSmooth:`          | Unassigned | UP                     |
| 平滑低头                   | `:_input_key.lookDownSmooth:`        | Unassigned | DOWN                   |
| 平滑左看                   | `:_input_key.lookLeftSmooth:`        | Unassigned | LEFT                   |
| 平滑右看                   | `:_input_key.lookRightSmooth:`       | Unassigned | RIGHT                  |
| 菜单取消                   | `:_input_key.menuCancel:`            | Button5  | P                      |
| 生物效果                   | `:_input_key.mobEffects:`            | Z        | TAB                    |
| 打开命令                   | `:_input_key.command:`               | SLASH    | SLASH                  |
| 打开通知                   | `:_input_key.interactwithtoast:`     | N        | N                      |

### 手柄输入按键

| 名称                          | 简码                                       | Xbox                                                 | Nintendo Switch                                        | PlayStation                                                 |
| ----------------------------- | --------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------- |
| 缓慢上升                       | `:_input_key.flyUpSlow:`                      | Unassigned                                           | Unassigned                                             | Unassigned                                                  |
| 缓慢下降                       | `:_input_key.flyDownSlow:`                    | ![](/assets/images/text/emojis/xbox/right_stick.png) | ![](/assets/images/text/emojis/switch/right_stick.png) | ![](/assets/images/text/emojis/playstation/right_stick.png) |
| 生物效果/打开通知              | `:_input_key.mobeffectsandinteractwithtoast:` | ![](/assets/images/text/emojis/xbox/select.png)      | ![](/assets/images/text/emojis/switch/minus.png)       | ![](/assets/images/text/emojis/playstation/touch_pad.png)   |

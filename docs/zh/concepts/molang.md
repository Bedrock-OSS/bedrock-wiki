---
title: Molang
description: 了解 Molang 的基础知识。
tags:
    - intermediate
mentions:
    - Cra-ZGuy
    - yanasakana
    - TheDoctor15
    - MedicalJewel105
    - DoubleShotgun
    - Lufurrius
    - TheItsNameless
    - QuazChick
---

## 什么是 Molang？

**Molang** 是一种基于数学的表达语言，在 Minecraft 基岩版中广泛使用。它用于动画、粒子、渲染控制器和行为逻辑。

## 表达式

Molang 表达式就像游戏不断求解的小数学问题。

```molang
q.health < 5 ? 1 : 0
```

如果生命值小于 5，这会返回 `1.0`{lang=molang}，否则返回 `0.0`{lang=molang}。

## 访问游戏数据

### 1. 查询（`query.`{lang=molang} 或 `q.`{lang=molang}）

**由游戏提供的只读值。**

查询可以直接返回值，也可以接受参数以返回特定上下文的结果。

无参数的示例：

-   `query.is_sneaking`{lang=molang}
-   `query.time_of_day`{lang=molang}
-   `query.health`{lang=molang}

有参数的示例：

-   `query.position(0)`{lang=molang}
-   `query.is_item_name_any('slot.weapon.offhand', 'minecraft:dirt')`{lang=molang}
-   `query.in_range(5, 0, 10)`{lang=molang}

### 2. 变量（`variable.`{lang=molang} 或 `v.`{lang=molang}）

**每个实体存储的读写值。**

示例：

-   `variable.buff_timer`{lang=molang}
-   `variable.has_effect`{lang=molang}

```molang
v.buff_timer = (v.buff_timer ?? 0) + q.delta_time;
```

#### 默认变量

| 变量                                              | 描述                                                           |
| ------------------------------------------------- | -------------------------------------------------------------- |
| `variable.animation_frames_128x128`{lang=molang}  | 控制 128x128 纹理的动画帧索引（皮肤）                          |
| `variable.animation_frames_32x32`{lang=molang}    | 控制 32x32 纹理的动画帧索引                                    |
| `variable.animation_frames_face`{lang=molang}     | 控制面部动画帧（用于面部表情）                                 |
| `variable.attack_time`{lang=molang}               | 攻击动画的进度（0.0 到 0.7）                                   |
| `variable.bob_animation`{lang=molang}             | 用于闲置/移动上下摆动的振荡                                    |
| `variable.charge_amount`{lang=molang}             | 积累的充电量（用于配件）                                        |
| `variable.damage_nearby_mobs`{lang=molang}        | 附近生物是否正在受到伤害（`true`{lang=molang}）                |
| `variable.gliding_speed_value`{lang=molang}       | 滑翔时的速度值                                                 |
| `variable.has_target`{lang=molang}                | 实体当前是否有目标                                            |
| `variable.is_brandishing_spear`{lang=molang}      | 实体是否举起了三叉戟                                           |
| `variable.is_holding_left`{lang=molang}           | 左手是否拿着东西                                               |
| `variable.is_holding_right`{lang=molang}          | 右手是否拿着东西                                               |
| `variable.is_holding_spyglass`{lang=molang}       | 玩家是否拿着望远镜                                              |
| `variable.is_horizontal_splitscreen`{lang=molang}| 是否处于水平分屏模式（`true`{lang=molang}）                     |
| `variable.is_paperdoll`{lang=molang}              | 纸娃娃模型是否当前可见                                          |
| `variable.is_sneaking`{lang=molang}               | 玩家是否在潜行                                                 |
| `variable.is_tooting_goat_horn`{lang=molang}      | 玩家是否在吹奏山羊角                                           |
| `variable.is_using_brush`{lang=molang}           | 玩家是否正在使用刷子                                           |
| `variable.is_using_vr`{lang=molang}               | 玩家是否正在使用 VR 头戴设备                                   |
| `variable.is_vertical_splitscreen`{lang=molang}  | 是否处于垂直分屏模式（`true`{lang=molang}）                     |
| `variable.last_blink_time`{lang=molang}           | 自上次眨眼事件经过的时间（皮肤）                                |
| `variable.left_arm_swim_amount`{lang=molang}      | 左臂应用的游泳动画量                                            |
| `variable.map_face_icon`{lang=molang}             | 是否有地图面部图标显示（`true`{lang=molang}）                   |
| `variable.player_arm_height`{lang=molang}         | 手臂的高度偏移（通常在第一人称视角中调整）                      |
| `variable.player_x_rotation`{lang=molang}         | 玩家视角的 X 轴旋转                                            |
| `variable.right_arm_swim_amount`{lang=molang}     | 右臂应用的游泳动画量                                            |
| `variable.short_arm_offset_left`{lang=molang}     | 调整左臂手臂长度（用于 VR/纸娃娃）                              |
| `variable.short_arm_offset_right`{lang=molang}   | 调整右臂手臂长度                                                |
| `variable.swim_amount`{lang=molang}               | 一般游泳动画进度                                                |
| `variable.use_blinking_animation`{lang=molang}    | 启用/禁用眨眼动画逻辑                                           |
| `variable.use_item_interval_progress`{lang=molang}| 跟踪物品使用时间线的中间部分                                   |
| `variable.use_item_startup_progress`{lang=molang} | 跟踪物品使用动画的启动阶段                                     |
| `variable.is_first_person`{lang=molang}           | 玩家是否在第一人称                                              |

### 3. 临时变量（`temp.`{lang=molang} 或 `t.`{lang=molang}）

**每个包存储的读写值。**

```molang
t.temp_speed = q.ground_speed * 1.2;
```

临时变量是**包作用域**且**临时的**。它们仅在当前 Molang 表达式或循环持续时间内存在。它们在包中**全局共享**，并在每个表达式完成后**自动清除**。它们不支持结构体（没有 `.x`、`.y`、`.z`）。

:::tip
它们对于**在表达式之间传递中间结果**也非常有用，特别是在**不支持直接传入变量或查询的上下文中**，如粒子。
:::

### 4. 上下文变量（`context.`{lang=molang} 或 `c.`{lang=molang}）

**在特定情况下来自基础游戏的只读值。**

#### 常见上下文变量

| 上下文变量                                 | 上下文                                   | 描述                                                   |
| ------------------------------------------ | ---------------------------------------- | ------------------------------------------------------ |
| `context.count`{lang=molang}                | 配方                                      | 当前上下文中某物的数量                                  |
| `context.is_first_person`{lang=molang}     | 动画、实体、渲染控制器                    | 实体是否以第一人称渲染（`true`{lang=molang}）          |
| `context.item_slot`{lang=molang}            | 模型                                      | 当前物品的槽位索引                                      |
| `context.other`{lang=molang}                | 物品                                      | “另一个”物品（用于修复目标）                            |
| `context.owning_entity`{lang=molang}       | 配件                                      | 拥有此上下文的实体（用于获取查询）                       |
| `context.player_offhand_arm_height`{lang=molang}| 模型                               | 渲染副手时使用的手臂偏移量                                      |

示例：

```molang
context.other->query.remaining_durability
```

## 逻辑和条件

### 比较运算符

| 运算符                              | 描述                    |
| ----------------------------------- | ----------------------- |
| `==`{lang=molang}                   | 等于                    |
| `!=`{lang=molang}                   | 不等于                  |
| `<`{lang=molang}，`>`{lang=molang}  | 小于/大于               |
| `<=`{lang=molang}，`>=`{lang=molang} | 小于/大于或等于         |

```molang
q.health <= 10
```

### 布尔逻辑

| 运算符           | 含义 |
| ---------------- | ---- |
| `&&`{lang=molang} | 与   |
| `\|\|`{lang=molang} | 或   |

```molang
q.is_sneaking && q.is_using_item
```

### 条件运算符

使用 `?`{lang=molang} 和 `:`{lang=molang} 像 if-else：

-   二元：`condition ? result`{lang=molang}
-   三元：`condition ? true : false`{lang=molang}

```molang
q.is_jumping ? 3 : 0
```

你也可以使用**空值合并运算符**（`??`{lang=molang}）在变量可能未初始化时提供后备：

-   `fallback = value ?? default`{lang=molang}

```molang
v.timer = (v.timer ?? 0) + q.delta_time
```

这可以避免如果 `v.timer`{lang=molang} 尚未定义而导致内容日志错误。

## 数学函数

Molang 支持广泛的数学函数， trigonometry 使用**度**（而不是弧度）。这些对于动画计时、振荡、方向数学、限制等很有用。

| 函数                                             | 描述                                               |
| ------------------------------------------------ | ------------------------------------------------- |
| `math.abs(x)`{lang=molang}                       | `x` 的绝对值                                      |
| `math.acos(x)`{lang=molang}                      | `x` 的反余弦（反余弦）                             |
| `math.asin(x)`{lang=molang}                      | `x` 的反正弦（反正弦）                             |
| `math.atan(x)`{lang=molang}                      | `x` 的反正切（反正切）                             |
| `math.atan2(y, x)`{lang=molang}                  | `y / x` 的反正切 —— 返回以度为单位的角度           |
| `math.ceil(x)`{lang=molang}                      | 将 `x` 向上舍入到最近的整数                        |
| `math.clamp(x, min, max)`{lang=molang}           | 将 `x` 限制在 `min` 和 `max` 之间                  |
| `math.cos(x)`{lang=molang}                       | `x` 度的余弦                                       |
| `math.die_roll(n, low, high)`{lang=molang}       | 掷 `n` 个 `low` 到 `high` 之间的浮点数并求和        |
| `math.die_roll_integer(n, low, high)`{lang=molang}| 与上面相同但是掷整数                          |
| `math.exp(x)`{lang=molang}                       | 指数（e^x）                                        |
| `math.floor(x)`{lang=molang}                     | 将 `x` 向下舍入到最近的整数                        |
| `math.hermite_blend(t)`{lang=molang}             | 平滑曲线：3t^2 - 2t^3，适合缓动插值                 |
| `math.lerp(a, b, t)`{lang=molang}                | 通过 `t` 在 `a` 和 `b` 之间线性插值                  |
| `math.lerprotate(a, b, t)`{lang=molang}         | 旋转插值，围绕圆的最短路径                          |
| `math.ln(x)`{lang=molang}                        | `x` 的自然对数                                      |
| `math.max(a, b)`{lang=molang}                    | `a` 或 `b` 中较大的                                |
| `math.min(a, b)`{lang=molang}                    | `a` 或 `b` 中较小的                                |
| `math.min_angle(x)`{lang=molang}                 | 将角度 `x` 限制在 -180° 到 180° 范围内             |
| `math.mod(a, b)`{lang=molang}                    | `a / b` 的余数                                     |
| `math.pi`{lang=molang}                           | π 的常数（大约 3.14159）                           |
| `math.pow(base, exponent)`{lang=molang}         | `base` 的 `exponent` 次方                          |
| `math.random(low, high)`{lang=molang}            | `low` 和 `high` 之间的随机浮点数                    |
| `math.random_integer(low, high)`{lang=molang}    | `low` 和 `high` 之间的随机整数                      |
| `math.round(x)`{lang=molang}                     | 将 `x` 四舍五入到最近的整数                         |
| `math.sin(x)`{lang=molang}                       | `x` 度的正弦                                        |
| `math.sqrt(x)`{lang=molang}                      | `x` 的平方根                                       |
| `math.trunc(x)`{lang=molang}                     | 移除 `x` 的小数部分（向零舍入）                      |

## 结构体

Molang 中的结构体是包含多个相关字段的值，如 `.x`、`.y`、`.z`。

你可以使用 `variable.`{lang=molang} 创建自己的结构体，并直接为它们的字段赋值：

```molang
v.location.x = 1;
v.location.y = 2;
v.location.z = 3;
```

然后可以重用这些值或传递给其他表达式：

```molang
v.target = v.other_mob->v.location;
```

:::warning
`temp.`{lang=molang} 变量**不支持**结构体。对于涉及 `.x`、`.y`、`.z` 等的任何内容，请使用 `variable.`{lang=molang}。
:::

## 循环和流程控制

你可以使用 `loop`{lang=molang} 多次运行表达式。

```molang
v.a = 1;
v.b = 1;

loop(10, {
    t.next = v.a + v.b;
    v.a = v.b;
    v.b = t.next;
});
```

### `break`{lang=molang} 和 `continue`{lang=molang}

-   `break;`{lang=molang} 提前退出当前循环
-   `continue;`{lang=molang} 跳转到下一次迭代

```molang
loop(10, {
    (v.a > 5) ? break;
    v.a += 1;
});
```

## 简单表达式与复杂表达式

-   **简单**：返回单个值的单个表达式

```molang
math.sin(q.anim_time * 10)
```

-   **复杂**：多个语句，用 `;` 分隔，并有显式的 `return`{lang=molang}

```molang
t.a = math.sin(q.anim_time * 10);
t.b = t.a * t.a;
return t.b + 1;
```

## 版本控制和 `min_engine_version`

Molang 行为可以根据你的包的 `manifest.json` 中定义的 `min_engine_version` 而变化。这些更改改善了表达式行为、修复了错误并弃用了旧行为。

确保正确设置你的包的引擎版本，以利用最新的修复和语法改进。

| 包的 `min_engine_version` | 描述                                                                                                                                                |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `1.17.0`                  | 添加版本化更改初始支持。（实际上不是版本化更改）                                                                                                    |
| `1.17.30`                 | 修复 `query.item_remaining_use_duration` 从tick到秒的转换（乘以 20 而不是除以）。还反转了其归一化逻辑。                                            |
| `1.17.40`                 | 为无效表达式添加新错误消息（例如，`'text' + 1` 现在会导致内容错误）。                                                                                |
| `1.17.40`                 | 添加对不匹配的括号/方括号和未知标记的错误检测。                                                                                                       |
| `1.18.10`                 | 修复三元运算符结合性。`A ? B : C ? D : E` 现在正确计算为 `A ? B : (C ? D : E)` 。                                                                   |
| `1.18.20`                 | 更改运算符优先级：逻辑与现在在或之前求值，比较在相等之前求值。                                                                                      |
| `1.19.60`                 | 修复除以动态负值时使用绝对值而不是负值的问题。                                                                                                     |
| `1.20.0`                  | 修复 `query.cape_flap_amount` 使用错误的头部旋转而不是身体旋转。                                                                                  |
| `1.20.10`                 | 将 `block_property` 和 `has_block_property` 重命名为 `block_state` 和 `has_block_state`。                                                         |
| `1.20.40`                 | 弃用 `block_property` 和 `has_block_property`。                                                                                                   |
| `1.20.50`                 | 完全移除 `block_property` 逻辑。还移除了查询：`is_scenting`、`is_rising` 和 `is_feeling_happy`。由 `timer_flag_1–3` 替换。                         |
| `1.20.70`                 | 步骤粒子纹理查询现在将树叶方块视为有效的来源。                                                                                                    |

---
title: 风格指南
description: 保持 Minecraft 创作一致性的指南。
mentions:
    - SirLich
    - solvedDev
    - MedicalJewel105
    - ChibiMango
    - zheaEvyline
    - QuazChick
---

本文档将展示 Bedrock Wiki 的附加包创建风格指南。本指南旨在在创建附加包时推广最佳实践，并为每个人创建一致的格式。

:::tip
风格指南是一份活的、会呼吸的文档，随着附加包创建的发展而演变。如果您认为有什么需要更新或更改，请联系我们！
:::

## 文件夹结构

-   文件路径中不要有空格。使用下划线。
-   标识符、文件名或文件夹名称中不要有大写。'BP' 和 'RP' 文件夹名称可以使用大写。
-   任何路径的总字符长度不得超过 80 个字符（控制台限制）。
-   内容文件夹应使用一致的单复数形式：坚持使用全为复数或全为单数的名称，不要混用。例如：

✅️ **一致**：

```
BP/functions/wiki/ability/ice_blast.mcfunction
BP/functions/wiki/ability/fire_trail.mcfunction
BP/functions/wiki/event/players/on_death.mcfunction
BP/functions/wiki/event/worlds/on_initialize.mcfunction
```

-   所有内容文件夹 `ability` 和 `event` 保持一致为单数形式。
-   `event` 中的内容文件夹也是一致的，因为 `players` 和 `worlds` 都是复数。

❌️ **不一致**：

```
BP/functions/wiki/abilities/ice_blast.mcfunction
BP/functions/wiki/abilities/fire_trail.mcfunction
BP/functions/wiki/event/players/on_death.mcfunction
BP/functions/wiki/event/world/on_initialize.mcfunction
```

-   只有 `abilities` 内容文件夹是复数，而 `event` 是单数。
-   另外，在 `event` 文件夹中，`players` 文件夹是复数而 `world` 是单数。

## 标识符

不要使用以数字开头的标识符，特别是不要使用仅由数字组成的标识符。这适用于实体、component_groups、事件以及任何接受 `namespace:name` 对的内容。

## 文件和文件夹名称

| 概念               | 示例                                                           |
| --------------------- | ----------------------------------------------------------------- |
| 行为包         | dragons_BP                                                        |
| 资源包         | dragons_RP                                                        |
| 几何体              | dragon.geo.json                                                   |
| 动画            | dragon.animation.json<br>dragon.anim.json                         |
| 动画控制器 | dragon.animation_controllers.json<br>dragon.ac.json               |
| 实体                | dragon.behavior.json<br>dragon.se.json<br>_(se: server entity)_   |
| 客户端实体         | dragon.entity.json<br>dragon.client_entity.json<br>dragon.ce.json |
| 物品                  | dragon_tooth.item.json                                            |
| 遗留物品 (BP)      | dragon_tooth.item.bp.json                                         |
| 遗留物品 (RP)      | dragon_tooth.item.rp.json                                         |
| 渲染控制器    | dragon.render_controllers.json<br>dragon.rc.json                  |
| 战利品表            | dragon.json                                                       |
| 配方                | dragon_saddle.recipe.json                                         |
| 生成规则           | dragon.spawn.json                                                 |
| 交易表           | dragon.json                                                       |
| 粒子效果       | dragon_magic.particle.json                                        |
| 纹理               | dragon.png                                                        |
| 脚本                | dragonFlight.js                                                   |

## 命名空间

合适的命名空间应该对您或您的团队是唯一的。像 `mob`、`cars`、`content` 或 `custom` 这样的命名空间会是**不好的**，因为另一个开发者可能会想出与您相同的命名空间。

`minecraft` 命名空间是为原版内容保留的，除非覆盖原版内容，否则不能使用。

对于个人项目，使用您的玩家名的方便版本；对于团队项目，使用您的团队名的合适版本。

当多个开发人员一起处理一个项目时，命名空间应该始终是共享的。如果需要积分，使用子索引：`ascent.wiki:dragon`

命名空间的使用位置：

-   生物群系
    -   标签
-   方块
    -   剔除规则
    -   剔除层
    -   合成标签
    -   标签
-   实体
    -   组件组
    -   事件
    -   族
-   物品
    -   冷却类别
    -   目录组
    -   标签
-   粒子

### 命名空间文件夹

某些内容通过其文件路径识别。因此，它应该包含在作为命名空间的文件夹中：

<FolderView :paths="[
    'BP/functions/<namespace>/*.mcfunction',
    'BP/loot_tables/<namespace>/*.json',
    'BP/trading/<namespace>/*.json',
    'BP/structures/<namespace>/*.mcstructure',
    'RP/sounds/<namespace>/*.ogg',
    'RP/textures/<namespace>/*.png',
]" />

其他文件夹不应包含命名空间。

## 子索引

子索引是使用 `.` 分隔链接概念。子索引应从大到小降序排列：

✔️ `animation.controller.dragon.flying.taking_off`

❌ `animation.controller.dragon_take_off_flying`

使用子索引时，使用 `_` 作为空格，而不是另一个 `.`。

✔️ `animation.controller.dragon.flying.taking_off`

❌ `animation.controller.dragon.flying.taking.off`

您可以在实体中使用子索引：`wiki:dragon.drake`

## 组和事件应该互补

| 组     | 事件               |
| --------- | ------------------- |
| wiki:wild | ✔️ wiki:become_wild |
| wiki:wild | ❌ wiki:wild        |
| wiki:tame | ✔️ wiki:on_tame     |
| wiki:tame | ❌ wiki:tame        |

## 短名称应该是通用的

短名称是文件特定的标识符，用于在标识符和美观名称之间映射。它们很方便，因为它们允许我们重复使用动画控制器和渲染控制器。出于这个原因，您的短名称应该是通用的。

✔️ `"sit": "animation.dragon.sit"`

❌ `"dragon_sitting": "animation.dragon.sit"`

当我们以这种形式制作短名称时，我们可以对所有它们使用通用的"sit"动画控制器，因为我们可以使用 `sit` 短名称来播放 sit 动画。

## 函数

1. 所有您的 `.mcfunction` 文件必须位于 functions 文件夹中的带命名空间的根文件夹内。在 Bedrock Wiki 上，我们使用 `wiki` 命名空间。但是，您可以根据您的名字或项目选择命名空间。更多信息，请参阅 [命名空间](/concepts/namespaces) 页面。
    -   ✅️ `BP/functions/wiki/random_number.mcfunction`
    -   ❌️ `BP/functions/random_number.mcfunction`
2. 它们必须正确嵌套：
    -   ✅️ `BP/functions/wiki/teleport/zone/hell.mcfunction`
    -   ❌ `BP/functions/wiki/teleport_hellzone.mcfunction`
3. 名称必须遵循 `action_object` 结构。意味着动词应该在主语之前。
    -   ✅️ `add_all`
    -   ❌️ `all_add`
    -   ✅️ `shuffle_position`
    -   ❌️ `position_shuffle`

### 函数中的注释

-   当使用包含许多命令的函数时，使用多个井号来组织它们以指示不同的标题级别是有帮助的。
-   _可选地_，为了进一步区分这些级别，您可以应用不同的样式：
    -   1 级标题 - **# 大写**
    -   2 级标题 - **## 标题大小写**
    -   3 级标题 - **### 句首大写**
-   尽量避免使用超过三个标题级别或太多标题，因为这会使代码看起来杂乱。请参阅下面的示例文件：

<Spoiler title="示例函数文件">

<CodeHeader>BP/functions/wiki/ability/fire_trail.mcfunction</CodeHeader>

```yaml
# ON PLAYER ITEM DROP

## Give Effects
### Fire resistance
execute at @e[type=item,name="Fire Trail Ability"] run effect @p[r=3] fire_resistance 10 255
### Speed
execute at @e[type=item,name="Fire Trail Ability"] run effect @p[r=3] speed 10 1 true

## Add Particle Time (10s)
execute at @e[type=item,name="Fire Trail Ability"] run scoreboard players set @p[r=3] abilities.fire_trail 200

## Delete Item
kill @e[type=item,name="Fire Trail Ability"]


# ENTITY TIMER

## Emit Particle Trail
execute at @a[scores={wiki:ability.fire_trail=1..}] run particle minecraft:basic_flame_particle ~~~

## Countdown Timer
scoreboard players remove @a [scores={wiki:ability.fire_trail=1..}] wiki:ability.fire_trail 1
```

</Spoiler>

请注意，在 1 级标题前使用两行间距，在 2 级标题前使用一行间距，以提高可读性。

这种做法有助于创建一致的格式，使每个人更容易遵循，并在整个函数中保持统一。

## 记分板目标与标签

-   必须以命名空间开头并使用 `snake_case`。
    -   这可以防止与使用相同标签或目标的包发生冲突。
-   只使用小写字母（a-z）、下划线（`_`）和点（`.`）作为特殊字符。

**示例目标：**

-   `wiki:blocks_traveled.overworld`
-   `wiki:q.is_sneaking`
-   `wiki:q.is_armed_any`

**示例标签：**

-   `wiki:inventory.full`
-   `wiki:inventory.empty`
-   `wiki:is_flying`

:::info 注意：
标签描述确定的状态——如果存在标签，其条件为 true。这就是为什么在类似方式表示的 Molang 查询作为标签时不使用 `q.` 前缀。
:::

### 记分板持有者

-   必须以点（`.`）或井号（`#`）为前缀，并使用 `PascalCase`。
    -   这可以防止与使用相同名称的玩家名称发生冲突，并提供清晰的视觉区分，因为记分板持有者与目标一起使用密切。
    -   使用前缀而不是命名空间是为了保持简洁，因为带命名空间的目标已经防止了与其他包的冲突。
-   除点（`.`）外没有特殊字符。

**示例：**

-   `.Ores.Iron`
-   `.Ores.DeepslateIron`
-   `.200`

:::tip **提示：**
以井号（`#`）为前缀的记分板持有者不会显示在记分板侧边栏中。但是，它们必须用双引号（`" "`）包裹，以避免语法错误。
:::

## 尽可能分组动画文件

示例：

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.8.0",
    "animations": {
        "animation.dragon.sit": { ... },
        "animation.dragon.fly": { ... },
        "animation.dragon.roar": { ... },
  }
}
```

## 按路径而非名称分割纹理

✔️ `RP/textures/wiki/dragon/red`

❌ `RP/textures/wiki/dragon_red_skin`

✔️ `RP/textures/wiki/npc/dragon_hunter/archer`

❌ `RP/textures/wiki/npc/dragon_hunter_archer`

## .lang 文件注释

针对本地化人员的注释应始终是内联的，格式如下：

```lang
the.key=The string	## Comment, intended for the one localizing.
```

请注意，内联注释前的空白必须是制表符，而不是空格。

整行注释可用于组织目的，但不应存储对本地化至关重要的信息。

## 缩写

### 包类型

| 缩写 | 包类型     |
| ------------ | ------------- |
| BP           | 行为包 |
| RP           | 资源包 |
| SP           | 皮肤包     |

### 语言

| 缩写 | 语言                   |
| ------------ | -------------------------- |
| JS           | JavaScript                 |
| JSON         | JavaScript 对象表示法 |
| NBT          | 命名二进制标签           |
| TS           | TypeScript                 |

### 其他

| 缩写 | 概念                            |
| ------------ | ---------------------------------- |
| AC           | 动画控制器               |
| RPAC         | 资源包动画控制器 |
| BPAC         | 行为包动画控制器 |
| BDS          | Bedrock 专用服务器           |
| HUD          | 平视显示器                   |
| IDE          | 集成开发环境 |
| OSS          | 开源软件               |
| UI           | 用户界面                     |
| VS Code      | Visual Studio 代码                 |

## 定义格式顺序

方块、实体和物品应遵循以下格式顺序。

### 方块

-   `format_version`
-   `minecraft:block`
    -   `description`
        -   `identifier`
        -   `menu_category`
            -   `category`
            -   `group`
        -   `states`
        -   `traits`
    -   `components`
    -   `permutations`
        -   `condition`
        -   `components`

### 实体

-   `format_version`
-   `minecraft:entity`
    -   `description`
        -   `identifier`
        -   `spawn_category`
        -   `is_spawnable`
        -   `is_summonable`
        -   `properties`
    -   `component_groups`
    -   `components`
    -   `events`

### 物品

-   `format_version`
-   `minecraft:item`
    -   `description`
        -   `identifier`
        -   `menu_category`
            -   `category`
            -   `group`
    -   `components`

## 自定义组件

### 变量名

应使用 `Block` 或 `Item` 作为前缀，`Component` 作为后缀的 PascalCase。例如，`const BlockMeltableComponent = { ... }` 而不是 `const meltable = { ... }`。

这有助于区分我们在 `registerCustomComponent` 中使用的内容与在其他地方用作值的内容。
---
title: 物品组件
description: 物品组件用于改变你的物品在世界中的外观和功能。
category: 通用
nav_order: 2
license: true
mentions:
    - SmokeyStack
    - QuazChick
---

:::tip 格式版本 1.26.10
在创建自定义物品时使用最新格式版本可以获取新功能和改进。
Wiki旨在分享关于自定义物品的最新信息，目前针对格式版本1.26.10。
:::

## 应用组件

物品组件用于改变你的物品在世界中的外观和功能。它们应用于`minecraft:item`的`components`子项。

<CodeHeader>BP/items/custom_item.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:custom_item",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            "minecraft:icon": "wiki:custom_item"
        }
    }
}
```

## 组件列表

### 允许副手

决定物品是否可以装备到物品栏的副手槽。

_需要格式版本[1.20.20](/items/item-format-history#_1-20-20)或更高版本。_

#### 布尔格式 {#allow-off-hand-boolean}

-   当`true`{lang=json}时，物品可以装备到副手槽。
-   当`false`{lang=json}（默认）时，物品不能装备到副手槽。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:allow_off_hand": true
```

### 方块放置器

允许物品用于放置方块，在玩家不在创造模式时减少物品堆叠数量。

_需要格式版本[1.26.0](/items/item-format-history#_1-26-0)或更高版本。_

#### 对象格式 {#block-placer-object}

-   `block` — 字符串
    -   定义将被放置的方块的标识符。
-   `replace_block_item` — 布尔值（可选）
    -   在此处了解更多关于替换方块物品的信息[here](/blocks/blocks-as-items#replacing-block-items)。
-   `aligned_placement` — 布尔值（可选）
    -   决定当玩家按住放置按键时是否使用对齐放置。
    -   启用时，方块将放置在先前放置的方块上，位于玩家开始移动方向的面。
    -   这对大多数原版建筑方块已启用。
    -   默认情况下，对齐放置是禁用的。
-   `use_on` — 数组（可选）
    -   列出可以使用此物品放置方块的方块（作为[方块描述符](/documentation/shared-constructs#block-descriptors)数组）。
    -   如果为空或省略，物品将能够放置在任何方块上。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:block_placer": {
    "block": "wiki:custom_block",
    "use_on": [
        "minecraft:dirt",
        {
            "name": "wiki:another_custom_block",
            "states": {
                "wiki:custom_state": 5
            }
        },
        {
            "tags": "q.any_tag('wiki:custom_tag')"
        }
    ]
}
```

###  bundles 交互

启用 bundles 工具提示和功能。

此组件生效需要物品具有`minecraft:storage_item`组件。

_需要格式版本[1.21.40](/items/item-format-history#_1-21-40)或更高版本。_

#### 对象格式 {#bundle-interaction-object}

-   `num_viewable_slots` — 整数（`1-64`{lang=js}）
    -   定义从 bundles 顶部可访问的物品堆叠的最大数量。
    -   槽位通过工具提示访问，从右下到左上逐行填充。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:bundle_interaction": {
    "num_viewable_slots": 12
}
```

### 可以在创造模式破坏

决定当玩家在创造模式攻击时，物品是否会破坏方块。

_需要格式版本[1.20.10](/items/item-format-history#_1-20-10)或更高版本。_

#### 布尔格式 {#can-destroy-in-creative-boolean}

-   当`true`{lang=json}（默认）时，物品可以在创造模式破坏方块。
-   当`false`{lang=json}时，物品不能在创造模式破坏方块。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:can_destroy_in_creative": true
```

### 可堆肥

允许此物品在堆肥桶中使用或（使用漏斗）吸入。

_需要格式版本[1.21.60](/items/item-format-history#_1-21-60)或更高版本。_

#### 对象格式 {#compostable-object}

-   `composting_chance` — 浮点数（`0-100`{lang=js}）
    -   堆肥等级增加的可能性百分比。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:compostable": {
    "composting_chance": 50 // 50% chance to increment the compost level
}
```

### 冷却

决定如何触发物品的冷却以及每个冷却持续多长时间。

_需要格式版本[1.20.10](/items/item-format-history#_1-20-10)或更高版本。_

#### 对象格式 {#cooldown-object}

-   `category` — 字符串
    -   此物品的冷却类别。
    -   具有相同类别的物品将共享冷却。
-   `duration` — 浮点数
    -   具有匹配类别的物品在再次可用之前将花费的冷却时间（以秒为单位）。
    -   如果此值为负数，则物品将无法使用。
-   `type` — 字符串（可选）
    -   决定以下哪种类型的输入会受到影响：
        -   `"use"`{lang=json}（默认）导致冷却在物品使用时开始，并防止在冷却激活期间使用物品。
        -   `"attack"`{lang=json}导致冷却在玩家手持物品攻击时开始，并防止在冷却激活期间使用物品进行攻击。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:cooldown": {
    "category": "wiki:cooldown",
    "duration": 0.2,
    "type": "use"
}
```

### 伤害

决定物品在攻击时造成多少额外伤害（`0-32767`{lang=js}），在物品工具提示中显示为"+X 攻击伤害"。

_需要格式版本[1.26.0](/items/item-format-history#_1-26-0)或更高版本。_

#### 整数格式 {#damage-integer}

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:damage": 10
```

### 伤害吸收

导致物品吸收原本会施加给其穿戴者的伤害。
要发生这种情况，物品需要具有耐久度组件并装备在盔甲槽中。

_需要格式版本[1.21.20](/items/item-format-history#_1-21-20)或更高版本。_

#### 对象格式 {#damage-absorption-object}

-   `absorbable_causes` — 数组
    -   可以被物品吸收的伤害原因列表（如`entity_attack`和`magma`）。
    -   有关可用的伤害原因列表，请参阅`/damage`命令的自动补全。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:damage_absorption": {
    "absorbable_causes": ["all"]
}
```

### 挖掘者

决定物品挖掘特定方块的速度。

_需要格式版本[1.20.20](/items/item-format-history#_1-20-20)或更高版本。_

#### 对象格式 {#digger-object}

-   `destroy_speeds` — 数组
    -   `block` — [方块描述符](/documentation/shared-constructs#block-descriptors)
        -   应用相关挖掘速度的方块。
    -   `speed` — 整数
        -   方块被挖掘的速度。
        -   当`0`{lang=json}时，物品将无法破坏该方块。
-   `use_efficiency` — 布尔值（可选）
    -   决定"效率"附魔是否能够影响定义的挖掘速度。
    -   默认情况下，这设置为`false`{lang=json}。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:digger": {
    "use_efficiency": true,
    "destroy_speeds": [
        {
            "block": "minecraft:gravel",
            "speed": 0 // Prevents gravel blocks from being mined
        }
        {
            "block": {
                "tags": "q.any_tag('minecraft:is_pickaxe_item_destructible')"
            },
            "speed": 6
        }
    ]
}
```

### 显示名称

决定显示物品名称时使用的本地化键。

-   如果给定的字符串没有翻译，将显示原始字符串。
-   默认情况下，使用`item.<identifier>`{lang=xml}。

_需要格式版本[1.20.0](/items/item-format-history#_1-20-0)或更高版本。_

#### 对象格式 {#display-name-object}

-   `value` — 字符串
    -   要与物品关联的本地化键。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:display_name": {
    "value": "item.wiki:custom_item"
}
```

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_item=Custom Item
```

### 耐久度

允许物品受到伤害，并决定物品在损坏前可以承受多少伤害。

-   允许通过合成将物品的耐久度与相同类型的另一物品合并。
-   即使物品是[挖掘者](#digger)，在挖掘方块时也不会损坏。
-   每次使用此物品击中实体时，物品的伤害增加2。
    这与武器的原版伤害不匹配，但与工具的原版伤害匹配。
-   当物品是[可穿戴的](#wearable)时，击中实体不会损坏物品。
    相反，它会在穿戴时且实体受到伤害时隐式增加伤害。

#### 对象格式 {#durability-object}

-   `damage_chance` — 整数[范围](/documentation/shared-constructs#range-objects)（可选）
    -   决定物品在拥有"耐久"附魔时受到伤害的百分比范围。
    -   当物品没有"耐久"附魔时，无论此范围如何，物品都会100%受到损坏。
    -   当物品拥有"耐久"附魔时，其受到损坏的机会如下：
        -   耐久I — 范围的50%。
        -   耐久II — 范围的33%。
        -   耐久III — 范围的25%。
-   `max_durability` — 整数（`0-32767`{lang=js}）（[MCPE-180112](https://bugs.mojang.com/browse/MCPE-180112)）
    -   物品在损坏前可以承受的伤害量。

### 耐久度传感器

允许物品在受到伤害时触发原版级别的事件。

_需要格式版本[1.21.20](/items/item-format-history#_1-21-20)或更高版本。_

#### 对象格式 {#durability-sensor-object}

-   `durability_thresholds` — 数组
    -   物品定义了两个耐久度阈值，以及在满足每个阈值时发出的效果。
    -   当满足多个阈值时，只考虑应用伤害后耐久度最低的阈值。
    -   `durability` — 整数
        -   当物品耐久度值小于或等于此值时发出效果。
    -   `particle_type` — 字符串（可选）
        -   满足阈值时要生成的原版粒子类型。
    -   `sound_event` — 字符串（可选）
        -   满足阈值时要触发的原版级别声音事件。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:durability_sensor": {
    "durability_thresholds": [
        {
            "durability": 100,
            "particle_type": "minecraft:explosion_manual",
            "sound_event": "blast"
        },
        {
            "durability": 5,
            "sound_event": "raid.horn"
        }
    ]
}
```

### 可染色

允许物品通过炼药锅的水染色。染色后，物品将显示`dyed`[图标](#icon)纹理而不是`default`。

_需要格式版本[1.21.30](/items/item-format-history#_1-21-30)或更高版本。_

#### 对象格式 {#dyeable-object}

-   `default_color` — 字符串（可选）
    -   决定玩家染色物品前默认使用的颜色。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:dyeable": {
    "default_color": "#ffffff"
}
```

### 可附魔

允许物品在附魔台、铁砧、战利品表和其他地方被附魔。

_需要格式版本[1.20.30](/items/item-format-history#_1-20-30)或更高版本。_

#### 对象格式 {#enchantable-object}

-   `slot` — 字符串
    -   决定可以将哪些附魔应用于物品。
-   `value` — 整数（`0-255`{lang=js}）（[MCPE-180331](https://bugs.mojang.com/browse/MCPE-180331)）
    -   决定使用附魔台附魔物品时可用的附魔质量和数量。

#### 可附魔槽位

| 槽位值                     |
| ------------------------------ |
| `"all"`{lang=json}             |
| `"armor_feet"`{lang=json}      |
| `"armor_torso"`{lang=json}     |
| `"armor_head"`{lang=json}      |
| `"armor_legs"`{lang=json}      |
| `"axe"`{lang=json}             |
| `"bow"`{lang=json}             |
| `"carrot_stick"`{lang=json}    |
| `"cosmetic_head"`{lang=json}   |
| `"crossbow"`{lang=json}        |
| `"elytra"`{lang=json}          |
| `"fishing_rod"`{lang=json}     |
| `"flintsteel"`{lang=json}      |
| `"g_armor"`{lang=json}         |
| `"g_digging"`{lang=json}       |
| `"g_tool"`{lang=json}          |
| `"hoe"`{lang=json}             |
| `"melee_spear"`{lang=json}     |
| `"none"`{lang=json}            |
| `"pickaxe"`{lang=json}         |
| `"shears"`{lang=json}          |
| `"shield"`{lang=json}          |
| `"shovel"`{lang=json}          |
| `"spear"`{lang=json} (三叉戟) |
| `"sword"`{lang=json}           |

#### 附魔等级值

决定物品的附魔等级，影响潜在附魔的质量和数量。
更高的值可以提高获得更强附魔的机会。

下表详细介绍了不同材料的附魔等级，展示它们获得附魔的能力。

| 材料  | 盔甲附魔等级 | 工具/武器附魔等级 |
| --------- | -------------------- | -------------------------- |
| 木头      | N/A                  | 15                         |
| 皮革   | 15                   | N/A                        |
| 石头      | N/A                  | 5                          |
| 锁链      | 12                   | N/A                        |
| 铁      | 9                    | 14                         |
| 金      | 25                   | 22                         |
| 钻石      | 10                   | 10                         |
| 海龟      | 9                    | N/A                        |
| 下界合金 | 15                   | 15                         |
| 其他     | 1                    | 1                          |

有关附魔等级及其对游戏影响的深入探讨，请参阅[Minecraft Wiki](https://minecraft.wiki/w/Enchanting_table_mechanics#Enchantability)。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:enchantable": {
    "slot": "sword",
    "value": 10
}
```

### 实体放置器

允许物品将指定实体放置到世界和刷怪笼中。

_需要格式版本[1.20.0](/items/item-format-history#_1-20-0)或更高版本。_

#### 对象格式 {#entity-placer-object}

-   `entity` — 字符串
    -   要放置在世界的实体。
    -   可以选择以下格式指定自定义生成事件`wiki:entity<wiki:event>`{lang=xml}。
        -   默认情况下，在实体生成时触发`minecraft:entity_spawned`事件。
-   `dispense_on` — 数组（可选）
    -   列出可以使用此物品放置方块的方块（作为[方块描述符](/documentation/shared-constructs#block-descriptors)数组）。
    -   如果为空或省略，物品将能够被发射到任何方块上。
    -   发射器的口必须指向空气方块或此数组中定义的方块。
        如果发射器面向空气方块，游戏将检查下方的方块是否与此数组中定义的方块匹配
-   `use_on` — 数组（可选）
    -   列出可以使用此物品放置方块的方块（作为[方块描述符](/documentation/shared-constructs#block-descriptors)数组）。
    -   如果为空或省略，物品将能够放置在任何方块上。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
    "minecraft:entity_placer": {
        "entity": "minecraft:spider",
        "dispense_on": [
            "minecraft:dirt"
        ],
        "use_on": [
            "minecraft:dirt"
        ]
    }
```

### 耐火

决定物品是否应该能够承受火焰和熔岩，而不是在被丢弃时销毁。

#### 对象格式 {#fire-resistant-object}

-   `value` — 布尔值
    -   决定物品是否耐火。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:fire_resistant": {
    "value": true
}
```

### 食物

允许物品在被玩家使用时消耗。

-   物品还必须具有带有定义的`use_duration`的[`minecraft:use_modifiers`](#use_modifiers)组件才能正常工作。
-   要显示进食/饮用动画，还需要将[`minecraft:use_animation`](#use-animation)组件应用到物品上。

:::danger 总是可以吃（[MCPE-178647](https://bugs.mojang.com/browse/MCPE-178647)，[MCPE-188410](https://bugs.mojang.com/browse/MCPE-188410)）
即使`can_always_eat`设置为`false`{lang=json}，自定义物品在玩家饱腹时总是可以食用。
:::

_需要格式版本[1.20.30](/items/item-format-history#_1-20-30)或更高版本。_

#### 对象格式 {#food-object}

-   `can_always_eat` — 布尔值（可选）
    -   决定物品是否可以在玩家饱腹时消耗。
    -   创造模式玩家无论此值如何总是可以吃食物。
-   `nutrition` — 整数
    -   物品消耗后添加到玩家饥饿值的值。
    -   可以使用负值来增加玩家的饥饿值。
-   `saturation_modifier` — 浮点数
    -   饱和度修正值在此公式中使用：`nutrition * saturation_modifier * 2`{lang=js}应用饱和度增益时。
    -   值必须大于0
-   `using_converts_to` — 字符串（可选）
    -   使用时，转换为此字段字符串指定的物品。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:food": {
    "nutrition": 3,
    "saturation_modifier": 0.6,
    "using_converts_to": "minecraft:bowl"
}
```

### 燃料

允许物品在熔炉中用作燃料来烧制其他物品。

_需要格式版本[1.20.0](/items/item-format-history#_1-20-0)或更高版本。_

#### 对象格式 {#fuel-object}

-   `duration` — 浮点数（`0.5-107374180.0`{lang=js}）
    -   此物品为熔炉供能的时间（以秒为单位）。
    -   最大值是tick转换的持续时间达到32位整数限制的结果。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:fuel": {
    "duration": 8.5
}
```

### 光泽

决定物品是否具有附魔光泽效果，即使未附魔。

_需要格式版本[1.20.20](/items/item-format-history#_1-20-20)或更高版本。_

#### 布尔格式 {#glint-boolean}

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:glint": false
```

### 手持装备

决定物品在第三人称装备时是否像工具一样渲染。

_需要格式版本[1.20.20](/items/item-format-history#_1-20-20)或更高版本。_

#### 布尔格式 {#hand-equipped-boolean}

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:hand_equipped": true
```

### 悬停文本颜色

决定物品名称的颜色。有效颜色可在[Minecraft Wiki](https://minecraft.wiki/w/Formatting_codes#Color_codes)找到。

_需要格式版本[1.20.10](/items/item-format-history#_1-20-10)或更高版本。_

#### 字符串格式 {#hover-text-color-string}

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:hover_text_color": "minecoin_gold"
```

### 图标

决定在UI和其他地方代表物品的图标。从格式版本1.20.10的实验中发布。

_需要格式版本[1.20.60](/items/item-format-history#_1-20-60)或更高版本。_

#### 字符串格式 {#icon-string}

用于定义物品图标`default`纹理的简写格式。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:icon": "wiki:custom_item"
```

#### 对象格式 {#icon-object}

-   `textures` — 对象
    -   包含可用于物品图标的不同纹理。
    -   也可以在此处指定盔甲修剪纹理和调色板。
    -   图标纹理是来自`resource_pack/textures/item_texture.json -> texture_data`对象与纹理文件关联的键。
    -   `default`
        -   显示为物品图标的常规纹理。
        -   如果你只定义此纹理，考虑改用简写的[字符串格式](#icon-string)。
    -   `dyed`
        -   [可染色](#dyeable)物品在炼药锅染色后显示的图标。
    -   `icon_trim`
        -   物品有修剪时的图标覆盖。
        -   `icon_trim`隐式回退到`minecraft:wearable`组件中槽的类型。目前，仅当简称与物品标识符匹配时，图标才会覆盖。不知道这是bug还是特性。
    -   `bundle_open_back`
        -   在[ bundles 交互](#bundle-interaction)工具提示中选择物品的预览后面显示的纹理。
    -   `bundle_open_front`
        -   在[ bundles 交互](#bundle-interaction)工具提示中选择物品的预览前面显示的纹理。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:icon": {
    "textures": {
        "default": "wiki:custom_item",
        "dyed": "wiki:custom_item_dyed" // Greyscale texture to be tinted
    }
}
```

### 交互按钮

决定在触摸控制中查看实体时是否显示交互按钮，以及按钮上显示的文本。

_需要格式版本[1.20.30](/items/item-format-history#_1-20-30)或更高版本。_

#### 布尔格式 {#interact-button-boolean}

-   当`true`{lang=json}时，通用"使用物品"（`action.interact.use`）文本将显示在交互按钮上。
-   当`false`{lang=json}（默认）时，交互按钮将不会显示。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:interact_button": true
```

#### 字符串格式 {#interact-button-string}

启用交互按钮并决定显示文本的本地化键。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:interact_button": "action.interact.wiki:launch"
```

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
action.interact.wiki:launch=Launch
```

### 动能武器

导致物品在玩家向其移动（或玩家向其移动）而物品正在被使用时伤害（以及击落并施加击退）每个实体。

#### 对象格式 {#kinetic-weapon-object}

-   `delay` — 整数
    -   决定动能伤害和效果开始应用之前的持续时间（以tick为单位）。
-   `hitbox_margin` — 浮点数
    -   决定每个目标的碰撞需要距离玩家视线方向多近（以方块为单位）才能受到动能攻击的影响。
    -   默认情况下，没有额外的碰撞箱边距。
-   `reach` — 浮点数[范围](/documentation/shared-constructs#range-objects)
    -   决定实体必须距离玩家多远（以方块为单位）才能受到动能攻击的影响。
    -   默认情况下，距离玩家0到3个方块之间的实体将受到动能攻击的影响。
-   `creative_reach` — 浮点数[范围](/documentation/shared-constructs#range-objects)
    -   决定在玩家处于创造模式时应用的`reach`。
    -   默认情况下，处于创造模式的玩家将被限制在正常的`reach`范围内。
-   `damage_multiplier` — 浮点数
    -   决定动能攻击的基础伤害乘以多少得到乘以后的伤害值。
-   `damage_modifier` — 浮点数
    -   添加到乘以后的伤害值以获得要施加给每个目标的最终伤害值。
-   `damage_conditions` — 对象
    -   列出需要满足才能造成伤害的条件。
-   `dismount_conditions` — 对象
    -   列出需要满足每个目标从其骑乘的实体上被击落（dismount）的条件。
    -   默认情况下，实体永远不会被击落。
-   `knockback_conditions` — 对象
    -   列出需要满足每个目标受到动能攻击击退的条件。
    -   默认情况下，击退永远不会应用。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:kinetic_weapon": {
    "delay": 15,
    "reach": {
        "min": 2.0,
        "max": 4.5
    },
    "creative_reach": {
        "min": 2.0,
        "max": 7.5
    },
    "hitbox_margin": 0.25,
    "damage_multiplier": 0.7,
    "damage_conditions": {
        "max_duration": 300,
        "min_relative_speed": 4.6
    },
    "knockback_conditions": {
        "max_duration": 120,
        "min_speed": 5.1
    },
    "dismount_conditions": {
        "max_duration": 100,
        "min_speed": 14.0
    }
}
```

### 液体剪切

决定物品在使用时是否与液体方块交互，只要没有选择液体背后的方块。
交互发生在液体方块内部，而不是其侧面。

_需要格式版本[1.20.20](/items/item-format-history#_1-20-20)或更高版本。_

#### 布尔格式 {#liquid-clipped-boolean}

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:liquid_clipped": true
```

### 最大堆叠数量

决定此物品可以在容器和地上堆叠在一起的最大数量。

_需要格式版本[1.20.10](/items/item-format-history#_1-20-10)或更高版本。_

#### 整数格式 {#max-stack-size-integer}

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:max_stack_size": 64
```

### 穿刺武器

导致物品在攻击时伤害玩家视线方向上一条直线中的所有实体。

-   如果玩家和其他实体之间有方块碰撞，伤害将被阻止。
-   阻止物品用于挖掘方块。

#### 对象格式 {#piercing-weapon-object}

-   `hitbox_margin` — 浮点数
    -   决定每个实体的碰撞需要距离玩家视线方向多近才能受到伤害。
    -   默认情况下，没有额外的碰撞箱边距。
-   `reach` — 浮点数[范围](/documentation/shared-constructs#range-objects)
    -   决定实体必须距离玩家多远（以方块为单位）才能受到伤害。
    -   默认情况下，距离玩家0到3个方块之间的实体将受到伤害。
-   `creative_reach` — 浮点数[范围](/documentation/shared-constructs#range-objects)
    -   决定在玩家处于创造模式时应用的`reach`。
    -   默认情况下，处于创造模式的玩家将被限制在正常的`reach`范围内。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:piercing_weapon": {
    "reach": {
        "min": 2.0,
        "max": 4.5
    },
    "creative_reach": {
        "min": 2.0,
        "max": 7.5
    },
    "hitbox_margin": 0.25
}
```

### 投射物

将投射物实体与此物品关联，允许其用作[发射器](#shooter)弹药或[投掷物](#throwable)。

_需要格式版本[1.20.10](/items/item-format-history#_1-20-10)或更高版本。_

#### 对象格式 {#projectile-object}

-   `minimum_critical_power` — 浮点数（可选）
    -   决定投射物需要充电多长时间（以秒为单位）才能造成暴击伤害。
-   `projectile_entity` — 字符串
    -   要发射作为投射物的实体类型。
    -   如果没有指定命名空间，假定为`minecraft`。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:projectile": {
    "minimum_critical_power": 1.25,
    "projectile_entity": "arrow"
}
```

### 稀有度

表示物品获取的难度，通过更改其名称文本的颜色。
如果同时应用`minecraft:hover_text_color`，此组件将被覆盖且无效。

物品的稀有度值如果在附魔时将升级为`rare`，或者如果其基础稀有度已经是`rare`则升级为`epic`。
`epic`稀有度物品附魔时将保持不变。

_需要格式版本[1.21.30](/items/item-format-history#_1-21-30)或更高版本。_

#### 字符串格式 {#rarity-string}

-   `common`产生白色名称。
-   `uncommon`产生黄色名称。
-   `rare`产生青色名称。
-   `epic`产生淡紫色名称。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:rarity": "rare"
```

### 唱片

允许物品插入唱片机。

_需要格式版本[1.20.10](/items/item-format-history#_1-20-10)或更高版本。_

#### 对象格式 {#record-object}

-   `comparator_signal` — 整数（`0-15`{lang=js}）
    -   唱片机包含物品时比较器从其中产生红石信号等级。
-   `duration` — 浮点数
    -   决定唱片将播放的持续时间（以秒为单位）。
    -   这包括唱片机上方音符粒子将播放多长时间，以及漏斗在唱片机能将物品吸出之前需要多长时间。
-   `sound_event` — 字符串
    -   决定物品插入唱片机时触发的_原版_声音事件。
    -   也用于确定其工具提示中物品描述的本地化键。
        -   本地化键将遵循格式`item.record_<id>.desc`{lang=xml}，其中`<id>`{lang=xml}是声音事件中最后一个`.`字符后的子字符串。
        -   例如，如果使用`"bucket.empty.powder_snow"`{lang=json}声音事件，描述将为`item.record_powder_snow.desc`。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:record": {
    "comparator_signal": 1,
    "duration": 5,
    "sound_event": "bucket.empty.powder_snow"
}
```

### 可修复

决定哪些物品可用于修复物品，以及指定物品将修复多少耐久度。

默认情况下，物品可以通过同类型物品修复，合并它们的剩余耐久度。

_需要格式版本[1.20.10](/items/item-format-history#_1-20-10)或更高版本。_

#### 对象格式 {#repairable-object}

-   `repair_items` — 数组
    -   `items` — 数组
        -   用于修复物品的物品
        -   必填字段
    -   `repair_amount` — 整数 / 字符串
        -   修复多少耐久度
        -   当定义为字符串时，修复量将作为Molang表达式求值
            -   铁砧中的第二个槽可以使用`context.other`{lang=molang}引用。
            -   支持随机函数如`math.random`{lang=molang}。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:repairable": {
    "repair_items": [
        {
            "items": [
                "minecraft:diamond"
            ],
            "repair_amount": 10
        },
        {
            "items": [
                { "tags": "q.any_tag('minecraft:planks')" }
            ],
            "repair_amount": "q.max_durability * 0.25"
        }
    ]
}
```

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:repairable": {
    "repair_items": [
        {
            "items": [
                "minecraft:diamond"
            ],
            "repair_amount": "math.min(q.remaining_durability + c.other->q.remaining_durability + math.floor(q.max_durability / 20), c.other->q.max_durability)" // Vanilla formula
        }
    ]
}
```

### 发射器

允许投射物弹药物品通过使用物品发射。必须具有[`minecraft:use_modifiers`](#use-modifiers)组件才能正常工作。

即使没有弹药可用，自定义发射器也可以使用，应用使用修饰符（[MCPE-228331](https://bugs.mojang.com/browse/MCPE-228331)）。

_需要格式版本[1.20.10](/items/item-format-history#_1-20-10)或更高版本。_

#### 对象格式 {#shooter-object}

-   `ammunition` — 数组
    -   `item` — 字符串
        -   表示物品描述标识符。物品必须具有`minecraft:projectile`组件。
    -   `search_inventory` — 布尔值
        -   决定是否可以在物品栏槽中搜索此弹药。
    -   `use_in_creative` — 布尔值
        -   决定默认情况下持有者处于创造模式时是否应使用此弹药。
        -   如果玩家副手有不同弹药，且`use_offhand`为`true`{lang=json}，则将使用该弹药。
    -   `use_offhand` — 布尔值
        -   决定此弹药是否可以在副手槽中使用。
-   `charge_on_draw` — 布尔值（[MCPE-228332](https://bugs.mojang.com/browse/MCPE-228332)，[MCPE-228333](https://bugs.mojang.com/browse/MCPE-228333)）
    -   决定弹药是否在拉弓时充能到物品中，像弩一样（[MCPE]）。
    -   `use_duration`[使用修饰符](#use-modifiers)必须大于或等于`max_draw_duration`才能使其工作。
-   `max_draw_duration` — 浮点数
    -   决定武器可以拉弓多长时间（以秒为单位）然后自动释放。
-   `scale_power_by_draw_duration` — 布尔值
    -   决定释放的投射物的力量是否随着武器拉弓时间越长而增加。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:shooter": {
    "ammunition": [
        {
            "item": "minecraft:arrow",
            "search_inventory": true,
            "use_in_creative": true, // This is the default ammunition to use in creative move
            "use_offhand": true
        },
        {
            "item": "wiki:custom_projectile",
            "use_offhand": true // This ammunition can only be used when in the off-hand
        }
    ],
    "scale_power_by_draw_duration": true
}
```

### 应该消失

决定物品堆是否应该最终作为实体消失。

_需要格式版本[1.20.20](/items/item-format-history#_1-20-20)或更高版本。_

#### 布尔格式 {#should-despawn-boolean}

-   当`true`{lang=json}（默认）时，物品将作为实体消失。
-   当`false`{lang=json}时，物品将不会作为实体消失。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:should_despawn": true
```

### 按数据堆叠

决定具有不同数据的同类型物品是否在容器槽中和地上分开堆叠。

_需要格式版本[1.20.20](/items/item-format-history#_1-20-20)或更高版本。_

#### 布尔格式 {#stacked-by-data-boolean}

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:stacked_by_data": true
```

### 储物物品

允许物品作为容器存放其他物品。
此组件生效需要物品的最大堆叠数量为1。

_需要格式版本[1.21.60](/items/item-format-history#_1-21-60)或更高版本。_

#### 对象格式 {#storage-item-object}

-   `allow_nested_storage_items` — 布尔值
    -   决定是否可以将其他储物物品放入容器中。
-   `allowed_items` — 数组
    -   定义容器中专门允许的物品。
    -   如果为空，所有物品都允许放入容器中。
-   `banned_items` — 数组
    -   定义容器中不允许的物品。
-   `max_slots` — 整数（`1-64`{lang=js}）
    -   定义容器中的槽位数。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:storage_item": {
    "max_slots": 64,
    "allow_nested_storage_items": true,
    "banned_items": [
        "minecraft:shulker_box",
        "minecraft:undyed_shulker_box"
    ]
}
```

### 储物重量限制

定义储物物品容器中所有物品允许的总重量最大值。
此组件生效需要物品具有`minecraft:storage_item`组件。

-   要计算物品的重量，请将其最大堆叠数量除以64。
-   堆叠为64的物品每个重量为1，堆叠为16的物品每个重量为4，不可堆叠的物品重量为64。

_需要格式版本[1.21.60](/items/item-format-history#_1-21-60)或更高版本。_

#### 对象格式 {#storage-weight-limit-object}

-   `max_weight_limit` — 整数

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:storage_weight_limit": {
    "max_weight_limit": 64
}
```

### 储物重量修饰符

定义物品在另一个储物物品中时的附加重量。

_需要格式版本[1.21.60](/items/item-format-history#_1-21-60)或更高版本。_

#### 对象格式 {#storage-weight-modifier-object}

-   `weight_in_storage_item` — 整数（`0-64`{lang=js}）
    -   当`0`{lang=json}时，物品不允许放入另一个储物物品中。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:storage_weight_modifier": {
    "weight_in_storage_item": 4
}
```

### 摆动持续时间

决定玩家在挖掘、攻击或使用物品时摆动动画的基础持续时间（以秒为单位）。
实际的摆动持续时间可能与此值不同，因为效果如挖掘疲劳。

#### 浮点数格式 {#swing-duration-float}

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:swing_duration": {
    "value": 1
}
```

### 摆动声音

决定玩家手持物品攻击时触发的原版声音事件。

#### 对象格式 {#swing-sounds-object}

-   `attack_miss` — 字符串（可选）
    -   决定未命中实体或未造成伤害时触发的_原版_声音事件。
-   `attack_hit` — 字符串（可选）
    -   决定命中实体并造成非暴击伤害时触发的_原版_声音事件。
-   `attack_critical_hit` — 字符串（可选）
    -   决定命中实体并造成暴击伤害时触发的_原版_声音事件。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:swing_sounds": {
    "attack_miss": "item.wooden_spear.attack_miss",
    "attack_hit": "item.wooden_spear.attack_hit"
}
```

### 标签

决定物品拥有的标签列表。

_需要格式版本[1.20.50](/items/item-format-history#_1-20-50)或更高版本。_

#### 对象格式 {#tags-object}

-   `tags` — 数组
    -   要应用于物品的标签数组。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:tags": {
    "tags": [
        "wiki:custom_tag"
    ]
}
```

### 可投掷

允许物品用于投掷物品的[`minecraft:projectile`](#projectile)组件中定义的投射物。

_需要格式版本[1.20.10](/items/item-format-history#_1-20-10)或更高版本。_

#### 对象格式 {#throwable-object}

-   `do_swing_animation` — 布尔值
    -   物品在投掷时是否应该使用摆动动画。
-   `min_draw_duration` — 浮点数
    -   决定物品需要被拉弓多长时间（以秒为单位）才能释放。
-   `max_draw_duration` — 浮点数
    -   决定物品可以拉弓多长时间（以秒为单位）然后自动释放。
-   `launch_power_scale` — 浮点数
    -   投掷力量增加的缩放比例。
    -   负值将使投射物在玩家身后发射。
-   `max_launch_power` — 浮点数
    -   投掷物品的最大力量。
-   `scale_power_by_draw_duration` — 布尔值
    -   决定释放的投射物的力量是否随着物品被拉弓时间越长而增加。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:throwable": {
    "do_swing_animation": false,
    "launch_power_scale": 1.0,
    "max_draw_duration": 0.0,
    "max_launch_power": 1.0,
    "min_draw_duration": 0.0,
    "scale_power_by_draw_duration": false
}
```

### 使用动画

决定使用可充电物品时播放的动画，例如进食[食物](#food)。

_需要格式版本[1.20.20](/items/item-format-history#_1-20-20)或更高版本。_

#### 字符串格式 {#use-animation-string}

| 值                   | 描述                                                                                                                                                                 |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"eat"`{lang=json}      | 播放第一和第三人称消耗动画，产生粒子并播放咀嚼声音。                                                                                                                         |
| `"drink"`{lang=json}    | 播放第一和第三人称消耗动画，播放啜饮声音。                                                                                                                               |
| `"bow"`{lang=json}      | 不起作用，显示损坏的第三人称手臂动画。                                                                                                                                 |
| `"block"`{lang=json}    | 不起作用，显示损坏的第三人称手臂动画。                                                                                                                                 |
| `"camera"`{lang=json}   | 不起作用，显示损坏的第三人称手臂动画。                                                                                                                                 |
| `"crossbow"`{lang=json} | 不起作用，显示损坏的第三人称手臂动画。                                                                                                                                 |
| `"none"`{lang=json}     | 不起作用，显示损坏的第三人称手臂动画。                                                                                                                                 |
| `"brush"`{lang=json}    | 播放第一和第三人称刷洗动画。                                                                                                                                          |
| `"spear"`{lang=json}    | 播放第三人称手臂抬起动画，由三叉戟使用。<br/>要获得近战长矛动画，请改将`minecraft:is_spear`标签应用于物品，而不是使用此组件。 |
| `"spyglass"`{lang=json} | 播放第三人称手臂抬起动画，由望远镜使用。                                                                                                                               |

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:use_animation": "eat"
```

### 使用修饰符

对使用可充电物品时应用的效果进行常规配置，例如进食[食物](#food)。

_需要格式版本[1.20.50](/items/item-format-history#_1-20-50)或更高版本。_

#### 对象格式 {#use-modifiers-object}

-   `emit_vibrations` — 布尔值（可选）
    -   决定物品在开始和停止使用时是否发出振动。
-   `movement_modifier` — 浮点数（`0.0-1.0`{lang=js}）（可选）
    -   修饰符值，用于缩放使用物品时玩家的移动速度。
-   `start_sound` — 字符串（可选）
    -   决定物品开始使用时触发的_原版_声音事件。
-   `use_duration` — 浮点数
    -   物品必须使用多长时间（以秒为单位）才能完成一次使用。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:use_modifiers": {
    "movement_modifier": 0.5,
    "use_duration": 1.0
}
```

### 可穿戴

允许物品被实体穿戴。

_需要格式版本[1.20.20](/items/item-format-history#_1-20-20)或更高版本。_

#### 对象格式 {#wearable-object}

-   `hides_player_location` — 布尔值（可选）
    -   决定穿戴物品的玩家是否在定位器和定位地图上隐藏。
-   `protection` — 整数（可选）
    -   穿戴时此物品贡献的盔甲点数。
-   `slot` — 字符串
    -   物品可以装备到的槽位，必须是以下值之一：
        -   `"slot.weapon.offhand"`{lang=json}
        -   `"slot.armor.head"`{lang=json}
        -   `"slot.armor.chest"`{lang=json}
        -   `"slot.armor.legs"`{lang=json}
        -   `"slot.armor.feet"`{lang=json}
    -   设置为盔甲槽时，物品的[最大堆叠数量](#max-stack-size)设置为1（[MCPE-176931](https://bugs.mojang.com/browse/MCPE-176931)）。

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:wearable": {
    "protection": 10,
    "slot": "slot.armor.chest"
}
```

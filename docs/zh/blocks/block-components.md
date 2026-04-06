---
title: 方块组件
description: 方块组件用于改变方块在世界中的外观和功能。
category: 通用
nav_order: 2
license: true
mentions:
    - SirLich
    - solvedDev
    - yanasakana
    - SmokeyStack
    - MedicalJewel105
    - aexer0e
    - Chikorita-Lover
    - Lufurrius
    - TheDoctor15
    - XxPoggyisLitxX
    - TheItsNameless
    - ThomasOrs
    - Kaioga5
    - QuazChick
---

:::tip 格式版本 1.26.10
创建自定义方块时使用最新格式版本可以获得新功能和改进。
本维基旨在分享关于自定义方块的最新信息，目前针对格式版本 1.26.10。
:::

:::danger 覆盖组件
每种组件同时只能有一个实例处于活动状态。
重复的组件将被最新的 [`置换`](/blocks/block-permutations) 数组条目覆盖。
:::

方块组件用于改变方块在世界中的外观和功能。

## 应用组件

方块组件可以直接应用于 `minecraft:block` 的 `components` 子项中，或按方块 [置换](/blocks/block-permutations) 应用。

<CodeHeader>BP/blocks/lamp.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:lamp",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            "minecraft:light_dampening": 0,
            "minecraft:light_emission": 15,
            "minecraft:map_color": [210, 200, 190],
            "minecraft:geometry": {
                "identifier": "geometry.lamp",
                "culling": "wiki:culling.lamp"
            },
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:lamp"
                },
                "shade": {
                    "texture": "wiki:lamp_shade"
                }
            }
        }
    }
}
```

## 原版组件列表

### 碰撞箱

定义方块中实体和粒子发生碰撞的区域。

需要格式版本 [1.19.50](/blocks/block-format-history#_1-19-50) 或更高版本。

#### 布尔格式 {#collision-box-boolean}

-   当 `true`{lang=json}（默认）时，使用 16×16×16 的碰撞箱。
-   当 `false`{lang=json} 时，方块与实体的碰撞被禁用。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:collision_box": true
```

#### 对象格式 {#collision-box-object}

-   `origin` — 向量 `[X, Y, Z]`{lang=js}
    -   碰撞箱的西南下角。
    -   从方块单位的底部中心开始以像素为单位测量。
    -   必须在范围 `[-8, 0, -8]`{lang=json} 到 `[8, 16, 8]`{lang=json} 内。
-   `size` — 向量 `[X, Y, Z]`{lang=js}
    -   碰撞箱每边的大小。
    -   从碰撞箱的 `origin` 开始以像素为单位测量。
    -   `origin` 和 `size` 的总和必须在范围 `[-8, 0, -8]`{lang=json} 到 `[8, 24, 8]`{lang=json} 内。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:collision_box": {
    "origin": [-8, 0, -8],
    "size": [16, 16, 16]
}
```

#### 数组格式 {#collision-box-array}

最多可包含 16 个对象碰撞箱定义。
设置为空数组会导致完整方块碰撞。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:collision_box": [
    {
        "origin": [-4, 8, -4],
        "size": [8, 8, 8]
    },
    {
        "origin": [-8, 0, -8],
        "size": [16, 8, 16]
    }
]
```

### 连接规则

确定其他方块（如栅栏和墙）是否可以连接到该方块。

需要格式版本 [1.26.0](/blocks/block-format-history#_1-26-0) 或更高版本。

#### 对象格式 {#connection-rule-object}

-   `accepts_connections_from` — 字符串（可选）
    -   `"all"`{lang=json}（默认）允许任何方块连接到该方块。
    -   `"only_fences"`{lang=json} 只允许栅栏连接到该方块，防止墙和玻璃板等其他方块连接。
    -   `"none"`{lang=json} 阻止所有方块连接。
-   `enabled_directions` — 数组（可选）
    -   列出其他方块可以从哪些 cardinal 方向连接到该方块。
    -   默认情况下，方块可以从任何 cardinal 方向连接。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:connection_rule": {
    "accepts_connections_from": "only_fences",
    "enabled_directions": ["north", "east", "south", "west"]
}
```

### 工作台

将你的方块变成工作台，交互时打开功能性制作界面。

需要格式版本 [1.19.50](/blocks/block-format-history#_1-19-50) 或更高版本。

#### 对象格式 {#crafting-table-object}

-   `crafting_tags` — 数组
    -   根据标签字符串数组确定哪些配方可以在此工作台中使用。
    -   具有任何已定义标签的配方可以在工作台中使用。
    -   自定义标签应包含命名空间（如 `"wiki:workbench"`{lang=json}）且长度最多为 64 个字符。
    -   最多可包含 64 个标签。
-   `table_name` — 字符串（可选）
    -   指定语言文件键，映射到在工作台界面中制作网格上方显示的文本。
    -   如果无法解析给定字符串的翻译，将显示原始字符串。
    -   当省略时，显示的名称默认为方块的 [显示名称](#display-name)。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:crafting_table": {
    "table_name": "Wiki Workbench",
    "crafting_tags": [
        "crafting_table",
        "wiki:workbench"
    ]
}
```

### 可被爆炸破坏

确定方块是否可以被爆炸破坏。

需要格式版本 [1.19.20](/blocks/block-format-history#_1-19-20) 或更高版本。

#### 布尔格式 {#destructible-by-explosion-boolean}

-   当 `true`{lang=json}（默认）时，方块的爆炸抗性为 0。
-   当 `false`{lang=json} 时，方块不能被爆炸破坏。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:destructible_by_explosion": false
```

#### 对象格式 {#destructible-by-explosion-object}

-   `explosion_resistance` — 浮点数
    -   定义方块抵抗爆炸破坏的能力。
    -   更高的抗性降低方块在爆炸附近被破坏的几率。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:destructible_by_explosion": {
    "explosion_resistance": 20
}
```

### 可被挖掘破坏

确定玩家挖掘方块所需的时间。

需要格式版本 [1.19.20](/blocks/block-format-history#_1-19-20) 或更高版本。

#### 布尔格式 {#destructible-by-mining-boolean}

-   当 `true`{lang=json}（默认）时，方块在挖掘时会立即被破坏。
-   当 `false`{lang=json} 时，方块不能被挖掘破坏。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:destructible_by_mining": false
```

#### 对象格式 {#destructible-by-mining-object}

-   `seconds_to_destroy` — 浮点数
    -   确定方块的"硬度"值。
    -   更大的数值导致更长的挖掘时间。

:::danger 破坏时间
`seconds_to_destroy` 参数名称具有误导性。
虽然名称暗示此参数确定破坏方块所需的秒数，但实际上该参数设置方块的"硬度"值。

默认情况下，实际破坏自定义方块所需的时间是此处设置值的 1.5 倍。
:::

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:destructible_by_mining": {
    "seconds_to_destroy": 20
}
```

### 破坏粒子

确定击中、破坏、踩踏和落到方块上时创建的粒子的外观。

需要格式版本 [1.21.90](/blocks/block-format-history#_1-21-90) 或更高版本。

#### 对象格式 {#destruction-particles-object}

-   `particle_count` — 整数（可选）
    -   确定方块被破坏时创建的粒子数量（`0-255`{lang=json}）。
    -   默认情况下，创建 `100`{lang=json} 个粒子。
-   `texture` — 字符串（可选）
    -   指定要从 `RP/textures/terrain_texture.json` 中使用的 [纹理图集](/concepts/texture-atlases) 短名称。
    -   默认情况下，粒子将使用 `down` 材质实例（或如果未指定则使用 `*`）的纹理。
-   `tint_method` — 字符串（可选）
    -   指定根据方块放置的生物群落为 `texture` 着色的 [着色方法](/blocks/block-tinting#tint-methods)。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:destruction_particles": {
    "texture": "wiki:particle_texture",
    "tint_method": "grass"
}
```

### 显示名称

确定在库存和快捷栏中悬停在方块上时显示的文本的语言文件键。

-   如果给定字符串没有翻译，将显示原始字符串。
-   在某些情况下，Minecraft 可能会恢复使用 `tile.<identifier>.name`{lang=xml}，例如在"可放置在"工具提示中。

需要格式版本 [1.19.60](/blocks/block-format-history#_1-19-60) 或更高版本。

#### 字符串格式 {#display-name-string}

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:display_name": "tile.wiki:custom_block.name"
```

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
tile.wiki:custom_block.name=Custom Block
```

### 嵌入视觉效果

:::tip 仅限根级
此组件只能在方块的根 `components` 对象中定义，因此不能按置换指定。
:::

确定方块在花盆中如何显示。
要使方块能够放入花盆，还必须应用 [花盆兼容](#flower-pottable) 组件。

#### 对象格式 {#embedded-visual-object}

-   `geometry` — 字符串 / 对象
    -   显示的 [几何](#geometry) 组件。
-   `material_instances` — 对象
    -   显示的 [材质实例](#material-instances) 组件。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:embedded_visual": {
    "geometry": "minecraft:geometry.full_block",
    "material_instances": {
        "*": {
            "texture": "wiki:block_texture"
        }
    }
}
```

### 实体坠落

当实体落到方块上时触发 [实体坠落](/blocks/block-events#entity-fall-on) 事件。

需要格式版本 [1.21.10](/blocks/block-format-history#_1-21-10) 或更高版本。

#### 对象格式 {#entity-fall-on-object}

-   `min_fall_distance` — 浮点数
    -   触发事件所需实体下落的最小距离（以方块为单位）。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:entity_fall_on": {
    "min_fall_distance": 5
}
```

### 可燃性

确定方块的易燃程度。

需要格式版本 [1.19.10](/blocks/block-format-history#_1-19-10) 或更高版本。

#### 布尔格式 {#flammable-boolean}

当 `true` 时，方块能够自然地从邻居着火。
当 `false`（默认）时，方块不能自然地从邻居着火，但仍可直接点燃。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:flammable": true
```

#### 对象格式 {#flammable-object}

-   `catch_chance_modifier` — 整数
    -   影响方块在火旁边着火的几率。
    -   当 `0`{lang=json} 时，方块上的火最终会熄灭。
    -   当大于 `0`{lang=json} 时，火将继续燃烧直到方块被破坏（如果 `destroy_chance_modifier` 为 `0`{lang=json} 则会永远燃烧）。
    -   默认情况下，设置为 `5`{lang=json}，与 vanilla 木板相同。
-   `destroy_chance_modifier` — 整数
    -   影响方块着火时被火焰破坏的几率。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:flammable": {
    "catch_chance_modifier": 5,
    "destroy_chance_modifier": 20
}
```

### 花盆可放置

:::tip 仅限根对象
此组件只能定义在方块的根 `components` 对象中，因此不能按排列指定。
:::

允许方块放置在花盆中。
当方块在花盆中时，可以使用[嵌入视觉](#embedded-visual)组件来更改方块的外观。

#### 对象格式 {#flower-pottable-object}

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:flower_pottable": {}
```

### 摩擦力

确定方块对上方移动实体的滑溜程度（`0.0-0.9`）。
值越低意味着方块越滑。

:::warning 移动速度
此组件有些问题。虽然它在船上正常工作，但较高的摩擦力值实际上会导致其他实体加速而不是减速。
:::

需要格式版本 [1.19.20](/blocks/block-format-history#_1-19-20) 或更高版本。

#### 浮点数格式 {#friction-float}

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:friction": 0.4
```

### 几何

确定此方块的几何形状及应应用的任何剔除规则。
方块的几何形状也可以设置为任何[原版方块模型](/blocks/vanilla-block-models)。

**自定义方块模型限制：**

1.  你的方块限制为 30×30×30 像素大小。
2.  你的方块在每个轴上至少 1 像素必须包含在 16×16×16 方块单位内。
3.  你 30×30×30 方块位置的绝对边界是距离原点每个方向 30 像素。
    你的方块可以放置在这些边界内的任何位置，只要遵守规则 #2。

需要格式版本 [1.21.90](/blocks/block-format-history#_1-21-90) 或更高版本。

#### 字符串格式 {#geometry-string}

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": "geometry.example_block"
```

#### 对象格式 {#geometry-object}

-   `identifier` — 字符串
    -   几何体的标识符。
-   `bone_visibility` — 对象（可选）
    -   决定模型中哪些骨骼可见的键值映射。
    -   键代表骨骼名称（不支持通配符 — 必须指定确切的骨骼名称）
    -   值可以是布尔值或确定骨骼是否可见的 Molang 表达式字符串
        -   默认所有骨骼都可见，这意味着值为 `true` 是冗余的。
        -   Molang 表达式必须遵守[排列条件](/blocks/block-permutations#permutation-conditions)限制。
-   `culling` — 字符串（可选）
    -   决定应应用于几何体的剔除规则标识符。
    -   剔除标识符应采用 `<namespace>:culling.<name>` 形式。
-   `culling_layer` — 字符串（可选）
    -   决定剔除层标识符，以便在剔除规则中由[相同剔除层](/blocks/block-culling#same-culling-layer)条件检查。
    -   剔除层标识符应采用 `<namespace>:culling_layer.<name>` 形式。
    -   使用 `minecraft` 命名空间时，只允许以下值：
        -   `"minecraft:culling_layer.undefined"` 是未定义剔除层的方块的剔除层。
        -   `"minecraft:culling_layer.leaves"` 是所有原版树叶的剔除层，创建自定义树叶时应使用此值。
-   `uv_lock` — 数组 / 布尔值（可选）
    -   决定当应用[变换](#transformation)组件的旋转时，UV 是否应锁定到其原始旋转。
    -   当 `false`（默认）时，模型中的所有 UV 将跟随方块的旋转。
    -   当 `true` 时，模型中的所有 UV 将锁定旋转。
    -   当使用数组时，列出骨骼的所有 UV 将锁定旋转。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": {
    "identifier": "geometry.example_block",
    "culling": "wiki:culling.example_block",
    "bone_visibility": {
        "wiki_bone": false,
        "conditional_bone": "q.block_state('wiki:example_state') == 3",
        "another_bone": true
    },
    "uv_lock": ["locked_bone"]
}
```

### 物品视觉

确定此方块在物品形式时如何显示。

需要格式版本 [1.21.60](/blocks/block-format-history#_1-21-60) 或更高版本。

#### 对象格式 {#item-visual-object}

-   `geometry` — 对象 / 字符串
    -   显示的[几何](#geometry)组件。
-   `material_instances` — 对象
    -   显示的[材质实例](#material-instances)组件。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:item_visual": {
    "geometry": "minecraft:geometry.full_block",
    "material_instances": {
        "*": {
            "texture": "wiki:block_texture"
        }
    }
}
```

### 可绑定

允许绳子和气球像栅栏一样连接到方块上。

需要格式版本 [1.26.0](/blocks/block-format-history#_1-26-0) 或更高版本。

#### 对象格式 {#leashable-object}

-   `offset` — 向量 `[X, Y, Z]`（可选）
    -   决定相对于方块底部中心的绳结中心位置。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:leashable": {
    "offset": [0, 12, 0]
}
```

### 光照衰减

确定光线穿过方块时会衰减的最大光照等级数（`0-15`），在一定范围内。

需要格式版本 [1.19.10](/blocks/block-format-history#_1-19-10) 或更高版本。

#### 整数格式 {#light-dampening-integer}

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:light_dampening": 15
```

### 光照强度

确定方块发出的整数光照等级（`0-15`）。

需要格式版本 [1.19.20](/blocks/block-format-history#_1-19-20) 或更高版本。

#### 整数格式 {#light-emission-integer}

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:light_emission": 10
```

### 液体检测

确定此方块与不同类型液体的行为。

需要格式版本 [1.26.0](/blocks/block-format-history#_1-26-0) 或更高版本。

#### 对象格式 {#liquid-detection-object}

-   `detection_rules` — 数组
    -   `liquid_type` — 字符串
        -   此规则适用的液体类型。目前仅支持 `"water"`。
    -   `can_contain_liquid` — 布尔值
        -   液体类型是否可以占据与此方块相同的空间，例如涉水。
    -   `on_liquid_touches` — 字符串（可选）
        -   决定当液体类型流入方块时发生什么，基于以下值之一：
            -   `"blocking"`（默认）防止液体流入。
            -   `"broken"` 导致方块被破坏。
            -   `"no_reaction"` 允许液体流经方块。
            -   `"popped"` 导致方块被弹出，掉落战利品。
    -   `stops_liquid_flowing_from_direction` — 数组（可选）
        -   决定液体不能从此方块流出的方向数组。
        -   如果 `on_liquid_touches` 设置为 `"no_reaction"`，此数组还决定液体不能流入此方块的方向。
    -   `use_liquid_clipping` — 布尔值（可选）
        -   决定方块中包含的液体是否基于方块的包围碰撞器（包含所有[碰撞盒](#collision-box)的最小盒子）进行视觉裁剪。
        -   默认情况下，液体不会被裁剪。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:liquid_detection": {
    "detection_rules": [
        {
            "liquid_type": "water",
            "can_contain_liquid": true, // 可涉水
            "on_liquid_touches": "no_reaction" // 水像空气一样流经方块
        }
    ]
}
```

### 战利品表

方块被破坏时掉落的战利品表路径（使用"精准采集"附魔的工具时会被忽略）。
如果省略，方块会作为物品掉落。

#### 字符串格式 {#loot-string}

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:loot": "loot_tables/blocks/custom_block.json"
```

### 地图颜色

定义方块在地图上显示时的外观。
如果省略，方块在地图上会被忽略。

#### 字符串格式 {#map-color-string}

一个十六进制字符串（以 `#` 开头）定义方块在地图上的 `#RRGGBB` 颜色。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:map_color": "#FFFFFF"
```

#### 数组格式 {#map-color-array}

一个包含 3 个整数（`0-255`）的数组，定义方块在地图上的 `[R, G, B]` 颜色。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:map_color": [255, 255, 255]
```

#### 对象格式 {#map-color-object}

-   `color` — 字符串
    -   一个十六进制字符串（以 `#` 开头）定义方块在地图上的 `#RRGGBB` 颜色。
-   `tint_method` — 字符串（可选）
    -   指定用于根据方块放置的生物群系对 `color` 进行着色的[着色方法](/blocks/block-tinting#tint-methods)。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:map_color": {
    "color": "#FFFFFF",
    "tint_method": "grass"
}
```

### 材质实例

方块渲染的配置，包括纹理和光照。

需要格式版本 [1.19.40](/blocks/block-format-history#_1-19-40) 或更高版本。

**已知问题：**

-   环境光遮蔽与原版方块不能完美匹配，意味着自定义方块可能显得比周围原版方块更暗/更亮（[MCPE-237493](https://bugs.mojang.com/browse/MCPE-237493)）。
-   在用户界面中，在方块模型中应用 `item_display_transforms` 的旋转之前，会先应用面变暗（[MCPE-235788](https://bugs.mojang.com/browse/MCPE-235788)）。
-   PBR 纹理不支持以实体形式渲染的自定义方块（手持、在物品框中、在地上等）（[MCPE-237517](https://bugs.mojang.com/browse/MCPE-237517)）。

#### 对象格式 {#material-instances-object}

每个键是材质实例的名称，每个值是材质实例对象。
`*` 实例是所有立方体面的默认实例，但如果所有面都单独定义了材质实例，则不需要它。

-   `<name>` — 对象
    -   `texture` — 字符串
        -   指定从 `RP/textures/terrain_texture.json` 中使用的[纹理图集](/concepts/texture-atlases)短名称。
    -   `render_method` — 字符串（可选）
        -   使用材质实例渲染面时使用的[渲染方法](#render-methods)。
        -   **所有材质实例必须使用相同的渲染方法。**
        -   默认情况下，使用 `opaque` 渲染方法。
    -   `tint_method` — 字符串（可选）
        -   指定用于根据方块放置的生物群系对着色的 `texture` 进行着色的[着色方法](/blocks/block-tinting#tint-methods)。
    -   `alpha_masked_tint` — 布尔值（可选）
        -   决定着色方法的着色强度是否应基于纹理的 alpha 通道。
        -   当 `true` 时，必须指定 `tint_method`（不是 `"none"`）且 `render_method` 必须为 `"opaque"`。
        -   默认情况下，着色方法的着色不是 alpha 蒙版的。
    -   `ambient_occlusion` — 布尔值 / 浮点数（`0.0-10.0`）（可选）
        -   决定是否对使用材质实例的面应用"平滑光照"。
        -   浮点值可用于确定环境光遮蔽强度。
        -   默认情况下，发出光的方块为 `false`（或 `0.0`），不发出光的方块为 `true`（或 `1.0`）。
    -   `face_dimming` — 布尔值（可选）
        -   决定使用材质实例的面是否根据其方向变暗。
        -   默认情况下，发出光的方块为 `false`，不发出光的方块为 `true`。
    -   `isotropic` — 布尔值（可选）
        -   决定使用材质实例的面 UV 是否根据方块在世界中的位置随机旋转。
        -   默认情况下，纹理不会随机旋转。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:material_instances": {
    // 实例名称 "up"、"down"、"north"、"east"、"south" 和 "west" 是内置的。
    "*": {
        "texture": "wiki:texture_name", // 在 "RP/textures/terrain_texture.json" 中定义的短名称
        "render_method": "blend", // 支持纹理半透明
        "isotropic": true // 随机旋转纹理
    }
}
```

#### 渲染方法

渲染方法本质上控制方块在游戏中的外观，就像实体材质一样。以下是每种类型的关键属性：

| 渲染方法                  | _透明度_ | _半透明度_ | _背面剔除_ | _远处剔除_ | 原版示例               |
| ------------------------- | :------: | :--------: | :--------: | :--------: | ---------------------- |
| `alpha_test`              |    ✔️    |     ❌     |     ❌     |     ✔️     | 梯子、怪物孵化器、藤蔓 |
| `alpha_test_single_sided` |    ✔️    |     ❌     |     ✔️     |     ✔️     | 门、树苗、活板门       |
| `blend`                   |    ✔️    |     ✔️     |     ✔️     |     ❌     | 玻璃、信标、蜂蜜块     |
| `double_sided`            |    ❌    |     ❌     |     ❌     |     ✔️     | 粉雪                   |
| `opaque`（默认）          |    ❌    |     ❌     |     ✔️     |     ❌     | 土、石头、混凝土       |

-   **透明度** - 完全可见的区域。
-   **半透明度** - 半透明区域。
-   **背面剔除** - 从后面看时面变得不可见。
-   **远处剔除** - 达到渲染距离一半后，面变得不可见。

##### 基于距离的渲染方法

| 渲染方法                            | _近处外观_                | _远处外观_ | 原版示例   |
| ----------------------------------- | ------------------------- | ---------- | ---------- |
| `alpha_test_to_opaque`              | `alpha_test`              | `opaque`   | 树叶       |
| `alpha_test_single_sided_to_opaque` | `alpha_test_single_sided` | `opaque`   | 海带、甘蔗 |
| `blend_to_opaque`                   | `blend`                   | `opaque`   | 不适用     |

-   **近处外观** - 到达渲染距离一半之前使用的渲染方法。
-   **远处外观** - 到达渲染距离一半之后使用的渲染方法。

#### 自定义材质实例名称

:::tip
自定义材质实例名称可以在 Blockbench 中通过右键单击立方体并打开其 `Material Instances` 来定义。

详细了解如何应用不同的材质实例[点击此处](/blocks/block-models#changing-material-instances)！
:::

材质实例中可以定义自定义实例名称，并且可以由内置实例名称或在方块模型中引用。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:material_instances": {
    "*": {
        "texture": "wiki:texture_name",
        "render_method": "blend" // 必须与其他实例匹配
    },
    // 自定义实例名称
    "end": {
        "texture": "wiki:texture_name_end",
        "render_method": "blend" // 必须与其他实例匹配
    },
    "up": "end",
    "down": "end",
    // 模型中定义的实例名称：
    "flower": {
        "texture": "wiki:texture_name_flower",
        "render_method": "blend" // 必须与其他实例匹配
    }
}
```

### 可移动

决定方块如何被活塞移动。

需要格式版本 [1.21.100](/blocks/block-format-history#_1-21-100) 或更高版本。

#### 对象格式 {#movable-object}

-   `movement_type` — 字符串
    -   可以是以下值之一：`"immovable"`、`"popped"`、`"push"` 或 `"push_pull"`（默认）。
-   `sticky` — 字符串（可选）
    -   可以设置为 `"same"` 来复制史莱姆/蜂蜜块功能。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:movable": {
    "movement_type": "popped" // 方块被活塞推动时会被破坏。
}
```

### 放置过滤器

决定方块必须满足的放置条件才能存活。
如果未满足指定条件，方块将不会被放置；或者如果方块已经放置，它将弹出为物品。

需要格式版本 [1.19.60](/blocks/block-format-history#_1-19-60) 或更高版本。

#### 对象格式 {#placement-filter-object}

-   `conditions` — 数组
    -   指定方块可以放置并存活而不会弹出为物品的位置条件对象列表。
    -   最多可包含 64 个条件。
    -   `allowed_faces` — 数组（可选）
        -   方块可以放置的面
        -   可以包含 `"all"`、`"side"`、`"down"`、`"up"`、`"north"`、`"south"`、`"west"` 和 `"east"`。
    -   `block_filter` — 数组（可选）
        -   方块可以放置在 `allowed_faces` 方向的[方块描述符](/documentation/shared-constructs#block-descriptors)数组。
        -   有关 vanilla 标签和相关方块列表，请参阅[此](/blocks/block-tags)页面。
        -   最多可包含 64 个方块描述符。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:placement_filter": {
    "conditions": [
        {
            "allowed_faces": ["up"], // 必须放置在以下任意方块的顶部
            "block_filter": [
                "minecraft:dirt",
                {
                    "name": "minecraft:sand",
                    "states": {
                        "sand_type": "red"
                    }
                },
                {
                    "tags": "!q.any_tag('minecraft:crop', 'wiki:tag')"
                }
            ]
        }
    ]
}
```

### 降水交互

决定方块如何与降水（雨和雪）交互。

需要格式版本 [1.21.120](/blocks/block-format-history#_1-21-120) 或更高版本。

#### 对象格式 {#precipitation-interactions-object}

-   `precipitation_behavior`：字符串
    -   `"obstruct_rain_accumulate_snow"`（默认）防止雨穿过方块，而是使其在方块顶部溅射，并导致雪层在方块上方堆积（下雪时）。
    -   `"obstruct_rain"` 防止雨穿过方块，而是使其在方块顶部溅射。
    -   `"none"` 允许雨和雪穿过方块。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:precipitation_interactions": {
    "precipitation_behavior": "none"
}
```

### 随机偏移

根据方块在世界中的位置应用随机偏移，影响方块的碰撞盒、选择框和几何体。

**偏移模型不能超过[方块几何限制](#geometry)。**

需要格式版本 [1.21.100](/blocks/block-format-history#_1-21-100) 或更高版本。

#### 对象格式 {#random-offset-object}

-   `<axis>`：对象（可选）
    -   以下偏移参数分别针对 `x`、`y` 和 `z` 轴定义。
    -   `range` — [范围](/documentation/shared-constructs#range-objects)
        -   决定每个轴上偏移可以有多大。
    -   `steps` — 整数
        -   决定可以在范围内选择多少个等间距的随机值。
        -   值为 `0` 意味着范围内任何值都可以使用。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:random_offset": {
    "x": {
        "steps": 0,
        "range": {
            "min": -8,
            "max": 8
        }
    },
    "y": {
        "steps": 3,
        "range": {
            "min": -2,
            "max": 0
        }
    },
    "z": {
        "steps": 0,
        "range": {
            "min": -8,
            "max": 8
        }
    }
}
```

### 红石传导

定义方块传导红石功率的能力。

需要格式版本 [1.21.40](/blocks/block-format-history#_1-21-40) 或更高版本。

#### 对象格式 {#redstone-conductivity-object}

-   `allows_wire_to_step_down` — 布尔值（可选）
    -   决定红石线是否可以沿此方块的侧面下行（如果方块不是导体）。
    -   红石线始终可以沿[红石导体](/blocks/redstone-components#redstone-conductors)的侧面下行。
-   `redstone_conductor` — 布尔值（可选）
    -   决定此方块是否传导直接红石功率。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_conductivity": {
    "redstone_conductor": true
}
```

### 红石接收器

:::tip 仅限根对象
此组件只能定义在方块的根 `components` 对象中，因此不能按排列指定。
:::

允许方块通过自定义组件使用 `onRedstoneUpdate()` 事件钩子响应红石功率。

#### 对象格式 {#redstone-consumer-object}

-   `min_power` — 整数（`0-15`）
    -   决定触发 `onRedstoneUpdate()` 自定义组件事件钩子所需的最小功率等级。
-   `propagates_power` — 布尔值（可选）
    -   决定此方块是否向相邻方块传导红石功率。
        -   此参数默认设置为 `false`，并覆盖[红石传导](#redstone-conductivity)组件的 `redstone_conductor` 参数。
        -   这允许方块反直觉地具有红石导体的属性，同时实际上并不传导红石。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_consumer": {
    "min_power": 0
}
```

### 红石发射器

导致方块产生红石功率。

#### 对象格式 {#redstone-producer-object}

-   `power` — 整数（`0-15`）
    -   决定方块产生的功率等级（整数）。
-   `strongly_powered_face` — 字符串
    -   决定产生强功率的方向。
    -   如果强功率被[红石导体](#redstone-conductivity)接收，导体周围的方块将被供电（连接到电路）。
-   `connected_faces` — 数组（可选）
    -   决定在哪些方向产生功率。
    -   定义为可以包含 `"down"`、`"up"`、`"north"`、`"south"`、`"west"` 和 `"east"` 的面数组。
    -   默认情况下，所有面都连接。
-   `transform_relative` — 布尔值（可选）
    -   决定面方向是否应相对于[变换](#transformation)组件中的旋转值。
    -   默认情况下，面不是变换相对的。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_producer": {
    "power": 15,
    "strongly_powered_face": "north",
    "transform_relative": true
}
```

### 可替换

允许通过尝试在其位置放置另一个方块来替换此方块。
不允许由相同排列的方块替换。

#### 对象格式 {#replaceable-object}

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:replaceable": {}
```

### 选择框

定义方块可以被玩家选择的区域。

需要格式版本 [1.19.60](/blocks/block-format-history#_1-19-60) 或更高版本。

#### 布尔格式 {#selection-box-boolean}

-   当 `true`（默认）时，使用 16×16×16 的选择框。
-   当 `false` 时，方块不能被玩家选择。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:selection_box": true
```

#### 对象格式 {#selection-box-object}

-   `origin` — 向量 `[X, Y, Z]`
    -   选择框的底部西北角。
    -   从方块单位底部中心以像素测量。
    -   必须在 `[-8, 0, -8]` 到 `[8, 16, 8]` 范围内。
-   `size` — 向量 `[X, Y, Z]`
    -   选择框每边的大小。
    -   从选择框的 `origin` 以像素测量。
    -   `origin` 和 `size` 的和必须在 `[-8, 0, -8]` 到 `[8, 16, 8]` 范围内。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:selection_box": {
    "origin": [-8, 0, -8],
    "size": [16, 16, 16]
}
```

### 支撑

定义方块支撑连接到其上的其他方块的能力。

需要格式版本 [1.26.0](/blocks/block-format-history#_1-26-0) 或更高版本。

#### 对象格式 {#support-object}

-   `shape` — 字符串
    -   可以设置为 `"fence"` 或 `"stair"`。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:support": {
    "shape": "fence"
}
```

### 刻

导致方块在 `interval_range` 指定的范围内随机延迟后"刻"。
排队的刻可以使用自定义组件中的[`onTick()`](/blocks/block-events#tick)事件钩子处理。

请注意，每个刻每个区块最多可以执行 100 个排队刻，这意味着如果方块所在的区块包含许多需要刻的方块，方块实际刻所需的时间可能会比此处指定的稍长。

需要格式版本 [1.21.10](/blocks/block-format-history#_1-21-10) 或更高版本。

#### 对象格式 {#tick-object}

-   `interval_range` — 范围 `[min, max]`
    -   将用作随机性最小和最大延迟的两个持续时间（以刻为单位）。
-   `looping` — 布尔值（可选）
    -   此方块是否应该持续刻，而不是只刻一次。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:tick": {
    "interval_range": [10, 20],
    "looping": true
}
```

### 变换

决定方块的[几何](#geometry)、[碰撞盒](#collision-box)和[选择框](#selection-box)的变换。

**变换后的模型不能超过[方块几何限制](#geometry)。**

需要格式 version [1.21.0](/blocks/block-format-history#_1-21-0) or later.

:::tip
了解[方块方向](/blocks/block-orientation)以根据方块的放置方式应用旋转，就像熔炉和生物头颅一样！
:::

#### 对象格式 {#transformation-object}

-   `rotation` — 向量 `[X, Y, Z]`（可选）
    -   每个轴上几何体旋转的度数。
    -   必须是 90 的倍数（负数为逆时针旋转）。
-   `rotation_pivot` — 向量 `[X, Y, Z]`（可选）
    -   方块旋转的支点（以方块单位计）。
    -   默认情况下，围绕方块中心旋转。
-   `scale` — 向量 `[X, Y, Z]`（可选）
    -   每个轴上几何体缩放的比例因子。
-   `scale_pivot` — 向量 `[X, Y, Z]`（可选）
    -   方块缩放的支点（以方块单位计）。
    -   默认情况下，从方块中心缩放。
-   `translation` — 向量 `[X, Y, Z]`（可选）
    -   每个轴上几何体偏移的方块单位数。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:transformation": {
    "translation": [-5, 8, 0],
    "rotation": [90, 180, 0],
    "rotation_pivot": [0, 0, 0],
    "scale": [0.5, 1, 0.5],
    "scale_pivot": [0, 0, 0]
}
```

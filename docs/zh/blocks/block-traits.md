---
title: 方块特性
description: 方块特性可用于将 vanilla 方块状态（如方向）轻松应用于你的自定义方块，无需事件和触发器。
category: 通用
nav_order: 5
related:
    - /blocks/block-states
    - /blocks/block-permutations
license: true
mentions:
    - QuazChick
    - SmokeyStack
---

:::tip 格式版本 1.26.10
在学习方块特性之前，你应该熟悉[方块状态](/blocks/block-states)。

使用方块状态时，确保你的包清单中的 `min_engine_version` 是 1.20.20 或更高版本。
:::

## 应用特性

方块特性可用于将 vanilla 方块状态（如方向）轻松应用于你的自定义方块，无需事件和触发器。

<CodeHeader>BP/blocks/custom_slab.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_slab",
            "menu_category": {
                "category": "construction",
                "group": "minecraft:itemGroup.name.slab"
            },
            "traits": {
                "minecraft:placement_position": {
                    "enabled_states": ["minecraft:vertical_half"]
                }
            }
        },
        "components": { ... },
        "permutations": [ ... ]
    }
}
```

_此示例将在放置时根据玩家看的方向将 `minecraft:vertical_half` 方块状态设为 `"top"`{lang=json} 或 `"bottom"`{lang=json}。_

**[置换数组](/blocks/block-permutations#条件应用组件)中的条目仍然需要此状态才能产生实际差异，条件查询**

```molang
q.block_state('minecraft:vertical_half')
```

## 特性列表

### 连接

允许通过根据相邻方块更新基本连接状态来实现类似栅栏的连接置换。

_需要格式版本 [1.26.0](/blocks/block-format-history#_1-26-0) 或更高版本。_

-   `enabled_states` — 数组
    -   只能包含 `"minecraft:cardinal_connections"`{lang=json}，启用**所有**以下状态。

#### 提供状态 {#连接状态}

| 状态                        | 值                                              | 描述                                                        |
| ---------------------------- | ------------------------------------------------- | ------------------------------------------------------------------ |
| `minecraft:connection_north` | `false`{lang=json} _(默认)_<br>`true`{lang=json} | 方块是否连接到北侧的相邻方块。 |
| `minecraft:connection_south` | `false`{lang=json} _(默认)_<br>`true`{lang=json} | 方块是否连接到南侧的相邻方块。 |
| `minecraft:connection_west`  | `false`{lang=json} _(默认)_<br>`true`{lang=json} | 方块是否连接到西侧的相邻方块。  |
| `minecraft:connection_east`  | `false`{lang=json} _(默认)_<br>`true`{lang=json} | 方块是否连接到东侧的相邻方块。  |

<CodeHeader>minecraft:block > description > traits</CodeHeader>

```json
"minecraft:connection": {
    "enabled_states": ["minecraft:cardinal_connections"]
}
```

### 放置方向

包含玩家放置方块时的旋转信息。

_需要格式版本 [1.26.0](/blocks/block-format-history#_1-26-0) 或更高版本。_

-   `enabled_states` — 数组
    -   可以包含下表中除 `minecraft:corner` 以外的任何状态，仅启用指定的状态。
    -   或者，可以包含 `"minecraft:corner_and_cardinal_direction"`{lang=json}，它启用 `minecraft:corner` 和 `minecraft:cardinal_direction` 两者。
-   `y_rotation_offset` — 整数（可选）
    -   此旋转偏移仅适用于水平状态值（北、南、东、西）。
    -   只能指定轴对齐的角度（例如90、180）。
-   `blocks_to_corner_with` — 数组（可选）
    -   列出方块可以与其创建角落的方块（作为[方块描述符](/documentation/shared-constructs#block-descriptors)数组）。
    -   仅当 `"minecraft:corner_and_cardinal_direction"`{lang=json} 包含在 `enabled_states` 数组中时才能指定此参数。

#### 提供状态 {#放置方向状态}

| 状态                          | 值                                                                                                                                                | 描述                                         |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `minecraft:cardinal_direction` | `"south"`{lang=json} _(默认)_<br>`"north"`{lang=json}<br>`"west"`{lang=json}<br>`"east"`{lang=json}                                                | 放置时玩家的基本朝向方向。    |
| `minecraft:facing_direction`   | `"down"`{lang=json} _(默认)_<br>`"up"`{lang=json}<br>`"south"`{lang=json}<br>`"north"`{lang=json}<br>`"west"`{lang=json}<br>`"east"`{lang=json}    | 放置时玩家的整体方向。            |
| `minecraft:corner`             | `"none"`{lang=json} _(默认)_<br>`"inner_left"`{lang=json}<br>`"inner_right"`{lang=json}<br>`"outer_left"`{lang=json}<br>`"outer_right"`{lang=json} | 方块创建的角落形状。 |

<CodeHeader>minecraft:block > description > traits</CodeHeader>

```json
"minecraft:placement_direction": {
    "enabled_states": ["minecraft:cardinal_direction"],
    "y_rotation_offset": 180
}
```

### 放置位置

包含有关玩家放置方块位置的信息。

_需要格式版本 [1.20.20](/blocks/block-format-history#_1-20-20) 或更高版本。_

-   `enabled_states` — 数组
    -   可以包含下表中的任何状态，仅启用指定的状态。

#### 提供状态 {#放置位置状态}

| 状态                     | 值                                                                                                                                             | 描述                                   |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `minecraft:block_face`    | `"down"`{lang=json} _(默认)_<br>`"up"`{lang=json}<br>`"south"`{lang=json}<br>`"north"`{lang=json}<br>`"west"`{lang=json}<br>`"east"`{lang=json} | 放置的方块面。           |
| `minecraft:vertical_half` | `"top"`{lang=json}<br>`"bottom"`{lang=json} _(默认)_                                                                                            | 放置方块的垂直半。 |

<CodeHeader>minecraft:block > description > traits</CodeHeader>

```json
"minecraft:placement_position": {
    "enabled_states": [
        "minecraft:block_face",
        "minecraft:vertical_half"
    ]
}
```
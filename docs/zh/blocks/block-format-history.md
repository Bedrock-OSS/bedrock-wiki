---
title: 方块格式历史
description: 每个Minecraft版本的数据驱动方块格式的更改列表。
category: 文档
outline_depth: 2
license: true
mentions:
    - QuazChick
---

:::info <Label color="green">版本化</Label> 更改
文件的 `format_version` 字段必须更新才能使版本化更改生效。
:::

:::info <Tag name="experimental" /> 更改
需要在世界中启用实验性功能才能使实验性更改生效。
:::

:::info <Label color="yellow">使用Beta功能</Label> 更改
文件的 `use_beta_features` 字段必须设为 `true`{lang=json} 才能使相关更改生效。
:::

## 1.26.10

### 特性

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>

-   添加了 `minecraft:multi_block`
    -   使方块被视为由多个部分组成的多方块。
    -   允许通过 `enabled_states` 数组启用 `minecraft:multi_block_part` 状态。
    -   包含 `direction`，决定多方块部分放置的方向。
        -   可以设为 `"up"`{lang=json} 或 `"down"`{lang=json}。
    -   包含 `parts`，决定组成多方块的方块数量（2-4）。
        -   这决定了放置多少方块，以及 `minecraft:multi_block_part` 状态的有效值范围。
    -   阻止在 `permutations` 数组中定义 `minecraft:movable` 和 `minecraft:placement_filter` 组件。
    -   需要用 `movement_type` 为 `"popped"`{lang=json} 或 `"immovable"`{lang=json} 定义 `minecraft:movable` 组件。

### 组件

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>

-   添加了 `minecraft:chest_obstruction`
    -   决定放置在其下方的箱子何时被阻挡打开。
    -   可以设为 `"always"`{lang=json}、`"shape"`{lang=json}（默认）或 `"never"`{lang=json}。
    -   在1.26.10之前的格式版本中，箱子阻挡是基于是否使用了带有 `opaque` 渲染方法的 vanilla 完整方块几何。

## 1.26.0

### 特性

<Label color="green">版本化</Label>

-   从实验性功能中发布了 `minecraft:connection`
-   更新了 `minecraft:placement_direction`
    -   从实验性功能中发布了 `blocks_to_corner_with` 参数
    -   更新了 `enabled_states` 参数
        -   从实验性功能中发布了 `"minecraft:corner_and_cardinal_direction"`{lang=json} 值

### 组件

-   更新了 `minecraft:collision_box`
    -   从实验性功能中发布了数组支持
    -   从实验性功能中发布了扩展边界
-   更新了 `minecraft:geometry`
    -   添加了 `"minecraft:geometry.full_block"`{lang=json} 标识符的向后兼容映射。
        -   在 `1.26.0` 之前的格式版本中，`"minecraft:geometry.full_block"`{lang=json} 将被视为 `"minecraft:geometry.full_block_v1"`{lang=json}。
-   更新了 `minecraft:liquid_detection`
    -   添加了 `use_liquid_clipping` 检测规则参数，决定方块内的液体是否根据方块的包围碰撞箱（包含所有[碰撞箱](/blocks/block-components#collision-box)的最小盒子）进行视觉剪切。
        -   在 `1.26.0` 之前的格式版本中，默认值为 `true`{lang=json}。
        -   在 `1.26.0` 及更高格式版本中，默认值为 `false`{lang=json}。
-   更新了 `minecraft:material_instances`
    -   从实验性功能中发布了 `alpha_masked_tint` 实例参数
-   更新了 `minecraft:redstone_consumer`
    -   将 `propogates_power` 参数重命名为 `propagates_power`

<Label color="green">版本化</Label>

-   从实验性功能中发布了 `minecraft:connection_rule`
-   从实验性功能中发布了 `minecraft:leashable`
-   从实验性功能中发布了 `minecraft:support`
-   从实验性功能中发布了 `minecraft:redstone_consumer`

## 1.21.130

### 特性

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>

-   添加了 `minecraft:connection`
    -   允许类似栅栏的连接置换。
    -   可用于通过在 `enabled_states` 数组中包含 `"minecraft:cardinal_connections"`{lang=json} 来启用以下布尔状态：
        -   `minecraft:connection_north`
        -   `minecraft:connection_east`
        -   `minecraft:connection_south`
        -   `minecraft:connection_west`

<Tag name="experimental" />
<Label color="yellow">Beta API</Label>
<Label color="yellow">使用Beta功能</Label>

-   更新了 `minecraft:placement_direction`
    -   添加了 `blocks_to_corner_with` 参数，这是一个[方块描述符](/documentation/shared-constructs#block-descriptors)数组，指定哪些方块可能影响 `minecraft:corner` 状态。
    -   更新了 `enabled_states` 参数
        -   添加了 `"minecraft:corner_and_cardinal_direction"`{lang=json} 作为有效值，可用于复制楼梯旋转和转角，启用以下状态：
            -   `minecraft:cardinal_direction`
            -   `minecraft:corner`

### 组件

-   从实验性功能中发布了 `minecraft:precipitation_interactions`

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>

-   添加了 `minecraft:connection_rule`
    -   决定其他方块（如栅栏和墙）是否可以连接到该方块。
    -   包含 `accepts_connections_from`，可设为以下值之一：
        -   `"all"`{lang=json}（默认）允许任何方块连接到该方块。
        -   `"only_fences"`{lang=json} 只允许栅栏连接到该方块，阻止其他方块（如墙和玻璃板）连接。
        -   `"none"`{lang=json} 阻止所有方块连接。
    -   包含 `enabled_directions`，列出其他方块可以连接的方向。
        -   默认情况下，方块可以从任何基本方向连接。
-   添加了 `minecraft:leashable`
    -   允许像栅栏一样将栓索连接到该方块。
    -   包含 `offset`，决定栓索结中心相对于方块底部中心的位置。
-   添加了 `minecraft:redstone_consumer`
    -   允许方块通过自定义组件响应红石功率。
    -   包含 `min_power`，决定触发 `onRedstoneUpdate` 自定义组件事件钩子所需的最小功率等级（0-15）。
    -   包含 `propogates_power`，决定该方块是否将红石功率传导到相邻方块。
        -   注意此参数拼写不正确（在1.26.0中已更正为 `propagates_power`）。
        -   此参数默认为 `false`{lang=json}，并覆盖[红石导电](/blocks/block-components#redstone-conductivity)组件的 `redstone_conductor` 参数。
            -   这允许该方块具有红石导体的属性，但实际上并不导电。
-   添加了 `minecraft:support`
    -   定义方块支撑附加到其上的其他方块的能力。
    -   包含 `shape`，可设为 `"fence"`{lang=json} 或 `"stair"`{lang=json}。
-   更新了 `minecraft:collision_box`
    -   现在可以定义为多个盒子的数组。
    -   盒子现在可以在Y轴上延伸到方块单位上方8像素。
-   更新了 `minecraft:material_instances`
    -   移除了冗余的 `emissive` 实例参数

## 1.21.120

### 组件

-   从实验性功能中发布了 `minecraft:embedded_visual`
-   从实验性功能中发布了 `minecraft:flower_pottable`
-   从实验性功能中发布了 `minecraft:redstone_producer`
-   更新了 `minecraft:material_instances`
    -   从实验性功能中发布了[纹理变化](/blocks/block-texture-variation)对 `texture` 实例参数的支持。

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>
<Label color="green">版本化</Label>

-   添加了 `minecraft:precipitation_interactions`
    -   决定此方块如何与降水（雨和雪）交互。
    -   包含 `precipitation_behavior`，可以是以下值之一：
        -   `obstruct_rain_accumulate_snow`（默认）阻止雨穿过方块，而是在其上方溅射，并导致雪层在该方块上方堆积（如果正在下雪）。
        -   `obstruct_rain` 阻止雨穿过方块，而是在其上方溅射。
        -   `none` 允许雨和雪穿过方块。
-   更新了 `minecraft:material_instances`
    -   添加了 `alpha_masked_tint` 实例参数，决定[着色方法](/blocks/block-tinting#着色方法)应用的着色强度是否应基于纹理的alpha通道。
        -   这需要指定 `tint_method`（不是 `none`）以及 `opaque` 的 `render_method`。
    -   添加了 `emissive` 实例参数，决定使用材质实例的面是否应无着色（禁用面变暗和环境光遮蔽）。
        -   注意此参数并不会让面始终以全亮度显示。

## 1.21.110

### 组件

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>

-   添加了 `minecraft:embedded_visual`
    -   决定此方块在花盆中时的显示方式。
    -   包含 `geometry`，决定显示的几何组件。
    -   包含 `material_instances`，决定显示的材质实例组件。
-   添加了 `minecraft:flower_pottable`
    -   一个空对象，允许此方块放置在花盆中。
-   添加了 `minecraft:redstone_producer`
    -   使方块产生红石功率。
    -   包含 `power`，决定方块产生的功率等级（整数0-15）。
    -   包含 `connected_faces`，决定产生功率的方向。
        -   定义为一个面数组，可包括 `down`、`up`、`north`、`south`、`west` 和 `east`。
        -   默认情况下，所有面都连接。
    -   包含 `strongly_powered_face`，决定产生强功率的方向。
        -   如果强功率被[红石导体](/blocks/block-components#redstone-conductivity)接收，包围导体的方块将被供电（连接到电路）。
        -   默认情况下，没有面被强供电。
    -   包含 `transform_relative`，决定面方向是否应相对于[变换](/blocks/block-components#transformation)组件中的 `rotation` 值。
        -   默认情况下，面不是变换相对的。

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>
<Label color="green">版本化</Label>

-   更新了 `minecraft:material_instances`
    -   更新了 `texture` 实例参数以支持[纹理变化](/blocks/block-texture-variation)。
    -   在之前的格式版本中，始终选择所引用图集条目的第一个变化。

## 1.21.100

### 组件

-   更新了 `minecraft:destruction_particles`
    -   从实验性功能中发布了 `particle_count` 参数
-   更新了 `minecraft:geometry`
    -   从实验性功能中发布了 `uv_lock` 参数

<Label color="green">版本化</Label>

-   从实验性功能中发布了 `minecraft:movable`
-   从实验性功能中发布了 `minecraft:random_offset`

## 1.21.90

### 组件

-   更新了 `minecraft:geometry`
    -   从实验性功能中发布了 `culling_layer` 参数
-   更新了 `minecraft:material_instances`
    -   更新了 `*` 实例为可选。

<Label color="green">版本化</Label>

-   移除了 `minecraft:custom_components`
    -   自定义组件现在应以与 vanilla 组件相同的方式应用，作为 `components` 对象中的条目：

        <CodeHeader>minecraft:block</CodeHeader>

        ```json
        "components": {
            "minecraft:friction": 0.4,
            "wiki:custom_component": {
                "parameter": "value"
            }
        }
        ```

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>

-   添加了 `minecraft:movable`
    -   决定方块如何被活塞移动。
    -   包含 `movement_type`，可以是以下值之一：`immovable`、`popped`、`push` 或 `push_pull`（默认）。
    -   包含 `sticky`，可设为 `same` 以复制史莱姆/蜂蜜块功能。
-   添加了 `minecraft:random_offset`
    -   对方块应用基于其在世界中位置的随机偏移。
    -   影响方块的碰撞箱、选择框和几何。
    -   包含 `x`、`y` 和 `z`，通过以下参数决定可能的偏移：
        -   `range`，一个[范围对象](/documentation/shared-constructs#range-objects)，决定每个轴上偏移可以有多大。
        -   `steps`，决定可以在 `range` 中选择多少个等间距的随机值。
            -   值 `0` 意味着可以使用 `range` 内的任何值。

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>
<Label color="green">版本化</Label>

-   更新了 `minecraft:destruction_particles`
    -   添加了 `particle_count` 参数，决定方块被破坏时产生多少粒子（0-255）。
    -   默认产生100个粒子。
-   更新了 `minecraft:geometry`
    -   添加了 `uv_lock` 参数，决定当应用来自[变换](/blocks/block-components#transformation)组件的旋转时，UV是否应锁定到其原始旋转。

## 1.21.80

### 组件

-   从实验性功能中发布了 `minecraft:destruction_particles`
-   更新了 `minecraft:destruction_particles`
    -   更新了 `texture` 参数为可选。
    -   默认情况下，粒子将使用 `down` 材质实例的纹理（或如果不指定则使用 `*`）。
-   更新了 `minecraft:map_color`
    -   从实验性功能中发布了 `tint_method` 参数
-   更新了 `minecraft:material_instances`
    -   更新了 `render_method` 实例参数，添加了3种新渲染方法：
        -   `alpha_test_to_opaque` 在渲染距离一半以内时使用 `alpha_test`，远离时使用 `opaque`。
        -   `alpha_test_single_sided_to_opaque` 在渲染距离一半以内时使用 `alpha_test_single_sided`，远离时使用 `opaque`。
        -   `blend_to_opaque` 在渲染距离一半以内时使用 `blend`，远离时使用 `opaque`。
    -   从实验性功能中发布了 `isotropic` 实例参数
    -   从实验性功能中发布了 `tint_method` 实例参数

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>

-   更新了 `minecraft:geometry`
    -   添加了 `culling_layer` 参数，决定要检查的剔除层标识符，由 [`same_culling_layer`](/blocks/block-culling#相同剔除层) 剔除规则条件使用。
        -   剔除层标识符应采用 `<namespace>:culling_layer.<name>` 的形式。
        -   使用 `minecraft` 命名空间时，唯一允许的剔除层标识符是 `minecraft:culling_layer.undefined` 和 `minecraft:culling_layer.leaves`。

<Tag name="experimental" />
<Label color="red">自定义组件 V2</Label>
<Label color="green">版本化</Label>

-   移除了 `minecraft:custom_components`
    -   自定义组件现在应以与 vanilla 组件相同的方式应用，作为 `components` 对象中的条目。

## 1.21.70

### 组件

-   添加了 `minecraft:replaceable`
    -   一个空对象，允许通过尝试在相同位置放置另一个方块来替换此方块。
    -   不允许被相同置换的方块替换。
-   更新了 `minecraft:map_color`
    -   现在可以定义为包含以下参数的对象：
        -   `color`，这是此方块在地图上的基本HEX字符串颜色。

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>

-   更新了 `minecraft:map_color`
    -   添加了 `tint_method` 参数，允许基于方块所在的生物群系对 `color` 进行着色。
-   更新了 `minecraft:material_instances`
    -   添加了 `isotropic` 实例参数，决定面的UV是否应根据方块在世界中的位置随机旋转。
    -   添加了 `tint_method` 实例参数，导致 `texture` 基于方块放置的生物群系进行着色，作为物品时始终是 `plains`。

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>
<Label color="green">版本化</Label>

-   添加了 `minecraft:destruction_particles`
    -   决定在击中、破坏、踩上和落在方块上时产生的粒子的外观。
    -   包含 `texture`，指定从 `RP/textures/terrain_texture.json` 使用的纹理图集简称。
    -   包含 `tint_method`，导致 `texture` 基于方块放置的生物群系进行着色。

## 1.21.60

### 描述

<Label color="green">版本化</Label>

-   更新了 `menu_category`
    -   更新了 `group` 参数需要命名空间，例如 `minecraft:itemGroup.name.concrete`

### 组件

<Label color="green">版本化</Label>

-   从实验性功能中发布了 `minecraft:item_visual`
-   从实验性功能中发布了 `minecraft:liquid_detection`
-   更新了 `minecraft:material_instances`
    -   从实验性功能中发布了 `ambient_occlusion` 的浮点值支持

## 1.21.50

### 组件

-   更新了 `minecraft:destructible_by_mining`
    -   从实验性功能中发布了 `item_specific_speeds` 参数

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>

-   添加了 `minecraft:item_visual`
    -   决定此方块如何显示为物品。
    -   包含 `geometry`，决定显示的几何组件。
    -   包含 `material_instances`，决定显示的材质实例组件。
-   添加了 `minecraft:liquid_detection`
    -   决定此方块如何与不同类型的液体交互。
    -   包含 `detection_rules`，每个包含以下参数：
        -   `liquid_type` 确定此规则应用哪种液体类型。当前仅支持 `water`。
        -   `can_contain_liquid` 确定液体类型是否可以与此方块占据相同空间，例如水体方块化。
        -   `on_liquid_touches` 确定当液体流入方块时会发生什么。
        -   `stops_liquid_flowing_from_direction` 确定液体不能从该方块流出的方向数组。
-   更新了 `minecraft:material_instances`
    -   更新了 `ambient_occlusion` 实例参数以支持浮点，决定环境光遮蔽强度（0.0-10.0）。

## 1.21.40

### 组件

<Label color="green">版本化</Label>

-   从实验性功能中发布了 `minecraft:redstone_conductivity`

## 1.21.30

### 组件

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>

-   添加了 `minecraft:redstone_conductivity`
    -   包含 `redstone_conductor`，决定此方块是否导电。
    -   包含 `allows_wire_to_step_down`，决定红石线是否可以沿着此方块的侧面向下延伸。

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>
<Label color="green">版本化</Label>

-   更新了 `minecraft:destructible_by_mining`
    -   添加了 `item_specific_speeds`，决定数组中每个 `item` 描述符的 `destroy_speed`。

## 1.21.10

### 组件

<Label color="green">版本化</Label>

-   从实验性功能中发布了 `minecraft:custom_components`
-   从实验性功能中发布了 `minecraft:entity_fall_on`
-   从实验性功能中发布了 `minecraft:tick`

## 1.21.0

### 组件

<Label color="green">版本化</Label>

-   更新了 `minecraft:transformation`
    -   添加了 `scale_pivot` 参数
    -   添加了 `rotation_pivot` 参数

## 1.20.80

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>
<Label color="green">版本化</Label>

-   移除了 `events`

### 组件

<Tag name="experimental" />
<Label color="yellow">Beta API</Label>

-   添加了 `minecraft:custom_components`
    -   列出应应用于此方块的所有自定义组件。
-   添加了 `minecraft:entity_fall_on`
    -   包含 `min_fall_distance`，决定实体必须落下多长距离才能触发实体落下事件。
-   将 `minecraft:queued_ticking` 重命名为 `minecraft:tick`
    -   移除了 `on_tick` 参数

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>
<Label color="green">版本化</Label>

-   移除了 `minecraft:on_fall_on` 触发器
-   移除了 `minecraft:on_interact` 触发器
-   移除了 `minecraft:on_placed` 触发器
-   移除了 `minecraft:on_player_destroyed` 触发器
-   移除了 `minecraft:on_player_placing` 触发器
-   移除了 `minecraft:on_step_off` 触发器
-   移除了 `minecraft:on_step_on` 触发器
-   移除了 `minecraft:random_ticking` 触发器

### 事件

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>
<Label color="green">版本化</Label>

-   移除了 `add_mob_effect` 响应
-   移除了 `damage` 响应
-   移除了 `decrement_stack` 响应
-   移除了 `die` 响应
-   移除了 `play_effect` 响应
-   移除了 `play_sound` 响应
-   移除了 `remove_mob_effect` 响应
-   移除了 `run_command` 响应
-   移除了 `set_block` 响应
-   移除了 `set_block_at_pos` 响应
-   移除了 `set_block_state` 响应
-   移除了 `spawn_loot` 响应
-   移除了 `swing` 响应
-   移除了 `teleport` 响应
-   移除了 `transform` 响应
-   移除了 `trigger` 响应

## 1.20.60

### 组件

-   更新了 `minecraft:geometry`
    -   添加了 `culling` 参数，决定对此方块模型应用哪些剔除规则。

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>
<Label color="green">版本化</Label>

-   移除了 `minecraft:unit_cube`

## 1.20.20

### 描述

-   从实验性功能中发布了 `traits`

### 特性

<Label color="green">版本化</Label>

-   从实验性功能中发布了 `minecraft:placement_direction`
-   从实验性功能中发布了 `minecraft:placement_position`

## 1.20.10

### 描述

-   将 `properties` 重命名为 `states`

### 组件

-   更新了 `minecraft:geometry`
    -   添加了对 `bone_visibility` 条目的 Molang 置换条件支持。

### 事件

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>

-   将 `set_block_property` 响应重命名为 `set_block_state`

## 1.20.0

### 描述

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>

-   添加了 `traits`
    -   方块特性是为数据驱动方块添加 vanilla 状态和值设置器的快捷方式。

### 特性

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>

-   添加了 `minecraft:placement_direction`
    -   可以启用 `minecraft:cardinal_direction` 和 `minecraft:facing_direction` 状态。
-   添加了 `minecraft:placement_position`
    -   可以启用 `minecraft:block_face` 和 `minecraft:vertical_half` 状态。

## 1.19.80

### 组件

<Label color="green">版本化</Label>

-   添加了 `minecraft:transformation`
    -   包含 `rotation`、`scale` 和 `translation`，决定方块模型和碰撞的变换。
-   更新了 `minecraft:geometry`
    -   添加了 `bone_visibility` 参数，决定基于布尔值是否显示骨骼的立方体。

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>

-   移除了 `minecraft:part_visibility`

## 1.19.70

### 描述

-   从实验性功能中发布了 `properties`

### 置换

-   从实验性功能中发布
-   如果 `condition` 参数不是有效的 Molang 置换条件，方块现在将无法加载。

## 1.19.60

### 组件

<Label color="green">版本化</Label>

-   从实验性功能中发布了 `minecraft:display_name`
-   从实验性功能中发布了 `minecraft:placement_filter`
-   从实验性功能中发布了 `minecraft:selection_box`

## 1.19.50

### 组件

<Label color="green">版本化</Label>

-   从实验性功能中发布了 `minecraft:crafting_table`
-   从实验性功能中发布了 `minecraft:collision_box`

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>

-   移除了 `minecraft:breathability`

## 1.19.40

### 描述

-   更新了 `menu_category`
    -   添加了 `is_hidden_in_commands` 参数，决定方块在命令中使用时是否被视为无效。

### 组件

<Label color="green">版本化</Label>

-   从实验性功能中发布了 `minecraft:geometry`
-   从实验性功能中发布了 `minecraft:material_instances`

## 1.19.30

### 描述

-   添加了 `menu_category`
    -   包含 `category`，决定此方块放置在哪个标签页。
    -   包含 `group`，决定此方块与哪些其他项目分组。

### 组件

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>

-   移除了 `minecraft:creative_category`
-   更新了 `minecraft:display_name`
    -   不再在显示名称前添加 `tile.`，也不再在末尾添加 `.name`。

## 1.19.20

### 组件

<Label color="green">版本化</Label>

-   将 `minecraft:block_light_emission` 重命名为 `minecraft:light_emission`
    -   现在以整数光等级（0-15）而不是小数（0.0-1.0）决定发光量。
-   用 `minecraft:destructible_by_mining` 替换了 `minecraft:destroy_time`
    -   设为 `false` 阻止方块被挖掘破坏。
    -   设为 `true` 允许方块被即时挖掘和破坏。
    -   设为对象允许确定 `seconds_to_destroy`。
-   用 `minecraft:destructible_by_explosion` 替换了 `minecraft:explosion_resistance`
    -   设为 `false` 阻止方块被爆炸破坏。
    -   设为 `true` 允许方块容易被爆炸破坏。
    -   设为对象允许确定 `explosion_resistance`。
-   `minecraft:friction` 的值现在代表移动阻力而不是移动。

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>

-   移除了 `minecraft:unwalkable`
-   将 `minecraft:aim_collision` 重命名为 `minecraft:selection_box`

## 1.19.10

### 组件

<Label color="green">版本化</Label>

-   将 `minecraft:block_light_filter` 重命名为 `minecraft:light_dampening`
-   更新了 `minecraft:flammable`
    -   现在可以设为布尔值，`false` 表示方块不可燃，`true` 使用默认的可燃性值。
    -   将 `flame_odds` 参数重命名为 `catch_chance_modifier`
    -   将 `burn_odds` 参数重命名为 `destroy_chance_modifier`

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>

-   将 `minecraft:block_collision` 重命名为 `minecraft:collision_box`
-   更新了 `minecraft:crafting_table`
    -   将 `custom_description` 参数重命名为 `table_name`
    -   移除了 `grid_size` 参数
-   将 `minecraft:ticking` 重命名为 `minecraft:queued_ticking`
    -   用 `interval_range` 替换了 `range` 参数，现在以刻而不是秒测量。

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>

-   更新了 `minecraft:part_visibility`
    -   将 `rules` 参数重命名为 `conditions`

## 1.18.30

### 组件

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>

-   移除了 `minecraft:breakonpush`
-   移除了 `minecraft:immovable`
-   移除了 `minecraft:onlypistonpush`
-   移除了 `minecraft:preventsjumping`

## 1.18.10

### 组件

<Label color="green">版本化</Label>

-   将 `minecraft:block_light_absorption` 重命名为 `minecraft:block_light_filter`

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>

-   将 `minecraft:entity_collision` 重命名为 `minecraft:block_collision`
-   将 `minecraft:pick_collision` 重命名为 `minecraft:aim_collision`

## 1.18.0

### 组件

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>

-   添加了 `minecraft:crafting_table`
    -   包含 `crafting_tags`，决定支持哪些标签配方。
    -   包含 `custom_description`，将在UI中显示而不是"Crafting Table"。
    -   包含 `grid_size`，决定合成网格有多少槽位。唯一支持的值是 `3`。

## 1.17.30

### 组件

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>

-   添加了 `minecraft:part_visibility`
    -   决定模型骨骼的直接子级是否可见，基于 Molang 置换条件。

## 1.17.20

### 组件

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>

-   添加了 `minecraft:creative_category`
    -   决定此方块在创意菜单中的显示位置。

## 1.16.210

### 事件

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>

-   更新了 `decrement_stack` 响应
    -   添加了 `ignore_game_mode` 参数，决定在创造模式下是否减少堆叠。

## 1.16.100

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>
<Label color="green">版本化</Label>

-   添加了 `events`

### 描述

-   移除了 `is_experimental`
-   移除了 `register_to_creative_menu`

### 组件

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>
<Label color="green">版本化</Label>

-   添加了 `minecraft:breakonpush`
    -   决定此方块在被活塞推动时是否会破坏。
-   添加了 `minecraft:breathability`
    -   决定方块是导致窒息（`solid`）还是可呼吸（`air`）。
-   添加了 `minecraft:display_name`
    -   决定此方块的本地化ID，格式为 `tile.<id>.name`。
-   添加了 `minecraft:entity_collision`
    -   决定此方块的实体碰撞箱。
    -   可设为 false 完全移除碰撞。
    -   包含 `origin`，决定盒子的起始位置。
    -   包含 `size`，决定盒子从 `origin` 开始的尺寸。
-   添加了 `minecraft:geometry`
    -   定义此方块用作模型的几何标识符。
-   添加了 `minecraft:immovable`
    -   决定此方块是否可被活塞移动。
-   添加了 `minecraft:material_instances`
    -   包含与 `minecraft:geometry` 或 `minecraft:unit_cube` 组件一起使用的渲染配置。
-   添加了 `minecraft:on_fall_on` 触发器
-   添加了 `minecraft:on_interact` 触发器
-   添加了 `minecraft:on_placed` 触发器
-   添加了 `minecraft:on_player_destroyed` 触发器
-   添加了 `minecraft:on_player_placing` 触发器
-   添加了 `minecraft:on_step_off` 触发器
-   添加了 `minecraft:on_step_on` 触发器
-   添加了 `minecraft:onlypistonpush`
    -   决定此方块是否只能被活塞推动而不能被粘性活塞拉动。
-   添加了 `minecraft:pick_collision`
    -   决定此方块的玩家选择边界。
    -   可设为 false 完全移除碰撞。
    -   包含 `origin`，决定盒子的起始位置。
    -   包含 `size`，决定盒子从 `origin` 开始的尺寸。
-   添加了 `minecraft:placement_filter`
    -   决定方块可以放置在哪里以及在不移除的情况下存活。
    -   包含 `conditions`，其中至少有一个必须匹配。
    -   每个条件可包含 `allowed_faces` 和/或 `block_filter`。
-   添加了 `minecraft:preventsjumping`
    -   决定实体在此方块上是否有有限的跳跃能力。
-   添加了 `minecraft:random_ticking` 触发器
-   添加了 `minecraft:rotation`
    -   通过轴对齐角度旋转此方块的碰撞箱和模型。
-   添加了 `minecraft:ticking`
    -   决定此方块将以什么间隔进行刻，待处理的刻数据被保存。
    -   包含 `looping`，决定刻是否无限继续。
    -   包含 `range`，决定间隔的随机延迟。
    -   包含 `on_tick`，可以在此方块刻时触发事件。
-   添加了 `minecraft:unit_cube`
    -   使此方块以完整方块单位大小显示。
-   添加了 `minecraft:unwalkable`
    -   决定实体是否应该避免走过此方块。

### 事件

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>
<Label color="green">版本化</Label>

-   添加了 `add_mob_effect` 响应
-   添加了 `damage` 响应
-   添加了 `decrement_stack` 响应
-   添加了 `die` 响应
-   添加了 `play_effect` 响应
-   添加了 `play_sound` 响应
-   添加了 `remove_mob_effect` 响应
-   添加了 `run_command` 响应
-   添加了 `set_block` 响应
-   添加了 `set_block_at_pos` 响应
-   添加了 `set_block_property` 响应
-   添加了 `spawn_loot` 响应
-   添加了 `swing` 响应
-   添加了 `teleport` 响应
-   添加了 `transform` 响应
-   添加了 `trigger` 响应

## 1.12.0

### 描述

-   添加了 `identifier`
    -   定义方块的标识符。必须有一个不是 `minecraft` 的命名空间。
-   添加了 `is_experimental`
    -   仅在世界设置中启用"使用实验性游戏玩法"开关时注册方块。
-   添加了 `register_to_creative_menu`
    -   使方块出现在创意菜单的"建筑"类别中。
    -   自定义方块此时无法添加到配方书中。

### 组件

-   添加了 `minecraft:block_light_absorption`
    -   决定光线穿过方块时被吸收的光量（整数光等级0-15）。
-   添加了 `minecraft:block_light_emission`
    -   决定此方块发出多少光线（0.0-1.0的浮点数）。
-   添加了 `minecraft:destroy_time`
    -   决定在生存或冒险模式下挖掘此方块需要多长时间。
-   添加了 `minecraft:explosion_resistance`
    -   决定此方块对爆炸的抵抗能力。
-   添加了 `minecraft:flammable`
    -   包含 `burn_odds`，决定此方块着火时被破坏的可能性。
    -   包含 `flame_odds`，决定此方块附近有火时着火的可能 性。
-   添加了 `minecraft:friction`
    -   决定实体在此方块上的移动速度。
    -   注意这与近代格式中的阻力度量不同。
-   添加了 `minecraft:loot`
    -   决定此方块被破坏时掉落的战利品表路径。
    -   如果使用的工具具有"精准采集"附魔，此组件将被忽略。
-   添加了 `minecraft:map_color`
    -   决定此方块在地图上显示的颜色。
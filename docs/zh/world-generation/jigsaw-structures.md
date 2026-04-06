---
title: Jigsaw结构
description: Jigsaw结构是由较小部件通过jigsaw方块连接而成的结构。
category: 通用
license: true
mentions:
    - Supernova3695
    - QuazChick
    - Nusiq
---

Jigsaw结构是由较小部件通过jigsaw方块连接而成的结构。

## Jigsaw方块

<WikiImage
    src="jigsaw-ui.png"
    alt="The jigsaw block ui"
    caption="Jigsaw方块UI。"
    width="840"
/>

Jigsaw方块是将结构的所有部件连接在一起的方块。它们有两种类型：**生成jigsaw**和**连接jigsaw**。虽然它们在视觉上相同，但在游戏中表现不同。jigsaw方块也可以同时是两者。你可以填写目标池、目标名称和名称字段，jigsaw将能够生成部件并作为连接器生成。这对于隧道或道路转弯很有用，这样就不需要指定多个不同的转弯。如果使用了所有字段，放置该部件的jigsaw方块可以选择任意一端。

-   **生成jigsaw** 填写了[目标池](#目标池)和[目标名称](#目标名称)字段。

    它们将在[模板池](#模板池)中查找具有与目标名称字段匹配的名称字段的连接jigsaw的结构。

    <WikiImage
        src="generating-jigsaw-block.png"
        alt="A generating jigsaw"
        caption="生成jigsaw"
        width="480"
    />

-   **连接jigsaw** 填写了[名称](#名称)字段，不能生成任何内容。

    它们是生成jigsaw在放置其连接部件时查找的方块。

    <WikiImage
        src="connecting-jigsaw-block.png"
        alt="A generating jigsaw"
        caption="生成jigsaw"
        width="480"
    />

### 目标池

目标池是保存jigsaw要查找的模板池标识符的字段。

jigsaw将在整个结构列表中查找可以连接的jigsaw。这称为生成jigsaw。
它有目标池和目标名称，将放置一个具有连接jigsaw的结构，该连接jigsaw只有名称字段。

<CardGrid>

<WikiImage
    src="connectable-jigsaws.png"
    alt="Jigsaws that can connect"
    caption="这两个jigsaw可以连接，因为它们的箭头都是水平对齐的。"
/>

<WikiImage
    src="connectable-jigsaws2.png"
    alt="Jigsaws that can connect"
    caption="这两个jigsaw可以连接，因为它们的箭头都是水平对齐的。"
/>

<WikiImage
    src="unconnectable-jigsaws.png"
    alt="Jigsaws that cannot connect"
    caption="这两个jigsaw无法连接，因为一个水平对齐，另一个垂直对齐。"
/>

</CardGrid>

### 名称

这是jigsaw所属结构部件的名称。只有此字段的jigsaw称为连接jigsaw。

如果你想要一堆隧道，你可以给它们的一个jigsaw一个名称，让生成jigsaw可以在其目标名称字段中使用。
生成jigsaw将在其分配的模板池中搜索名称字段与目标名称字段匹配的连接jigsaw。

### 目标名称

目标名称是生成jigsaw用于查找具有相同名称字段的连接jigsaw的字段。

如果你在名称为"tunnel"的隧道中有一个连接jigsaw，并且有一个生成jigsaw具有该目标名称，游戏将查找隧道列表并选择一个名称相同的。

### 变成

此字段确定jigsaw在生成完成时应变成的方块的标识符。

支持自定义方块，但该字段中的所有方块都需要使用 `/give` 或 `/fill` 找到其技术标识符。也可以在此字段中指定方块状态。例如 `minecraft:campfire["extinguished"=true]`。

### 选择优先级

如果两个生成jigsaw尝试在同一位置放置结构，优先级较高的jigsaw将首先放置其部件，然后阻止另一个部件放置，除非jigsaw在其模板池中找到适合的更小结构。

### 放置优先级

如果结构有2个或更多连接jigsaw，游戏将优先考虑具有较高放置优先级的连接jigsaw进行连接，而不是较低值的。

### 关节类型

如果jigsaw水平对齐则无效，只有垂直jigsaw可以具有此选项。

如果jigsaw朝上且选择了"rollable"，部件将选择随机旋转来放置jigsaw。

如果jigsaw设置为"aligned"，则块两侧的两个白色条在放置时将始终相互匹配。

## 模板池

模板池是结构文件列表以及它们如何适应地形和使用哪些处理器。
它们是jigsaw方块的目标池中使用的标识符的文件。

当将池放入目标池时，你是在告诉jigsaw方块在那个模板池中查找jigsaw，其名称字段值与父jigsaw的目标名称字段值匹配。

但应该注意的是，它们只能与方向匹配的jigsaw连接。
朝上的jigsaw（箭头朝向的方向）只能与朝下的连接，面向侧面的可以与任何其他面向侧面的匹配。

### 元素

目前，创作者可以使用两种类型的元素：`minecraft:empty_pool_element` 和 `minecraft:single_pool_element`。

-   `weight` 是应用于池中条目的数字，告诉jigsaw方块应该多久选择这个元素。值越高，可能性越大。

#### 空池元素

此元素不放置任何内容。如果使用调试生成查看jigsaw方块，如果选择了空池元素，它们将没有连接。如果这是起始元素，结构将无法生成。

#### 单池元素

此元素放置结构模板，然后向其应用处理器和投影。

-   `projection`:（可选）告诉游戏部件应如何适应现有地形。有两个选项：

    -   `rigid`：Rigid告诉游戏保持结构原样，如要寨隧道。如果未指定`projection`，这是默认值。
    -   `terrain_matching`：地形匹配告诉游戏让所有方块，包括空气，与地面的水平匹配，如村庄路径。这些部件没有从`terrain_adaptation`应用的地形密度。

-   `location`：告诉游戏要生成的文件位置。
-   `processors`：（可选）要应用于部件的处理器的ID。

## 处理器

处理器是方块列表以及在放置结构时可以如何修改它们。它们还可以将战利品表应用于支持它们的方块，如箱子和可疑沙砾。

处理器支持四种 `processor_type`：`minecraft:capped`、`minecraft:protected_blocks`、`minecraft:block_ignore` 和 `minecraft:rule`。

### 忽略方块处理器

忽略方块处理器允许方块数组不放置在结构中。圆石可以列在数组中，使用该处理器的部件将不会放置任何圆石。

忽略方块处理器允许1个字段：

-   `blocks`：方块标识符数组。可以通过 `/setblock` 找到方块ID。

<CodeHeader>minecraft:processor_list</CodeHeader>

```json
{
    "processor_type": "minecraft:block_ignore",
    "blocks": ["minecraft:cobblestone"]
}
```

### 保护方块处理器

保护方块处理器允许指定在结构生成时不会被覆盖的方块标签。可以提供石头方块标签，这样具有该标签的任何方块都不会被应用该处理器的部件替换。

保护方块处理器允许1个字段：

-   `value`：一个[方块标签](https://wiki.bedrock.dev/blocks/vanilla-block-tags)。

<CodeHeader>minecraft:processor_list</CodeHeader>

```json
{
    "processor_type": "minecraft:protected_blocks",
    "value": "mob_spawner"
}
```

### 限制处理器

限制允许限制规则可以应用于结构的方块数量。

例如，如果你想限制规则处理器将你的一半黑石结构变成镀金黑石，你可以应用一个限制处理器来为规则处理器设置它可以放置的镀金黑石方块数量，然后再被迫使用其他规则。

限制处理器允许2个字段：

-   `limit`：一个正整数，设置委托字段将运行的次数。
    限值也可以是一个对象，指定类型为`uniform`，然后是`max_inclusive`，一个整数，以及`min_inclusive`，也是一个整数。
    限值也可以指定类型为`constant`，然后是一个`value`，一个整数。
-   `delegate`：将运行限值次数的处理器。它不能是另一个 `minecraft:capped` 处理器。

<CodeHeader>minecraft:processor_list</CodeHeader>

```json
{
    "processor_type": "minecraft:capped",
    "limit": 5,
    "delegate": {}
}
```

### 规则处理器

规则允许修改和替换结构内的方块。
这是原版遗迹废墟如何将战利品表应用于可疑方块并使结构腐烂的方式。

规则处理器允许5个输入：

-   `input_predicate`：允许6个不同的输入告诉游戏如何查找方块。游戏将根据选择的方块选择方块。该字段由字段 `predicate_type` 指定。
    -   `minecraft:always_true` 不言自明。
    -   `minecraft:block_match` 查找特定方块类型。
    -   `minecraft:blockstate_match` 查找具有指定方块状态值的方块。
    -   `minecraft:random_block_match` 查找特定方块并随机选择其中一些，如果你结构中有石头砖，可以用它来替换一些带有裂纹或苔藓的版本。
    -   `minecraft:random_blockstate_match` 查找具有指定方块状态值的方块并随机选择其中一些。如果你有上层石头砖台阶，此规则可以查找特定的上层石头砖台阶，将其替换为上层苔藓石头砖台阶。
    -   `minecraft:tag_match` 查找具有指定标签的方块。
-   `output_state`：如果找到输入谓词，要替换的方块。
-   `block_entity_modifier`：允许方块实体（如箱子和桶）应用战利品。该字段由字段 `predicate_type` 指定。
    -   `minecraft:passthrough` 什么也不做。
    -   `minecraft:append_loot` 如果方块支持战利品表，则将战利品表应用于方块。这会将方块重置为其默认排列，导致状态（如箱子方向）丢失（[MCPE-230078](https://bugs.mojang.com/browse/MCPE-230078)）。
        -   `loot_table` 是要应用的战利品表。
-   `location_predicate`：检查结构中方块替换之前世界中存在的方块。此谓词像 `input_predicate` 一样使用规则测试，但它对被替换的方块而不是正在放置的结构中的方块运行。
-   `position_predicate`：根据方块相对于结构原点的位置更改方块。它有2个谓词类型。该字段由字段 `predicate_type` 指定。
    -   `minecraft:always_true` 不言自明。
    -   `minecraft:axis_aligned_linear_pos` 可以根据特定轴从结构原点选择一定范围内的方块。
        -   `axis` 要测试的轴，`x`、`y` 或 `z` 有效。
        -   `min_distance` 从结构原点到应用 `min_chance` 的距离。从原点到该方块的所有方块都将应用 `min_chance` 字段，并根据该百分比运行规则测试。
        -   `max_distance` 从 `min_distance` 到此字段的距离。从 `min_distance` 到此方块的所有方块都将应用 `max_chance` 字段，并根据该百分比运行规则测试。
        -   `min_chance` 如果方块在原点和 `min_distance` 之间，处理器运行的百分比，从0.0到1.0。
        -   `max_chance` 如果方块在 `min_distance` 和 `max_distance` 之间，处理器运行的百分比，从0.0到1.0。

<CodeHeader>minecraft:processor_list</CodeHeader>

```json
{
    "processor_type": "minecraft:rule",
    "rules": [
        {
            "input_predicate": {
                "predicate_type": "minecraft:random_block_match",
                "block": "minecraft:diamond_block",
                "probability": 0.5
            },
            "output_state": "minecraft:gold_block"
        }
    ]
}
```

## Jigsaw结构定义

Jigsaw结构文件告诉游戏如何生成使用jigsaw的结构。
它们存储在 `BP/worldgen/structures` 文件夹中，每个jigsaw结构的标识符用于 `/place` 和 `/locate` 结构命令。

它们告诉游戏应该使用哪个模板池来开始生成结构，以及结构应该有多大，使用 `max_depth` 等参数。

它们存储在 `BP/worldgen` 文件夹的 `structures` 子文件夹中。

<CodeHeader>BP/worldgen/structures/lone_fortress.json</CodeHeader>

```json
{
    "format_version": "1.21.20",
    "minecraft:jigsaw": {
        "description": {
            "identifier": "wiki:fortress" // 用于"/locate"和"/place"
        }
        // 其他参数放在这里
    }
}
```

### 生成配置

-   `step`：世界生成的哪个步骤放置结构。
    包含多个选项，最著名的是 `underground_structures`、`strongholds` 和 `surface_structures`。

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "step": "surface_structures"
    ```

-   `heightmap_projection`：（可选）`start_height` 值将查找放置结构的y级别。
    可以是 `world_surface` 或 `sea_floor`。

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "heightmap_projection": "world_surface"
    ```

-   `liquid_settings`：（可选）确定如果部件在之前有液体的位置生成该怎么办。可以是 `apply_waterlogging` 或 `ignore_waterlogging`。默认为 `apply_waterlogging`。
    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "liquid_settings": "ignore_waterlogging"
    ```

-   `start_height`：控制从 `heightmap_projection` 偏移多少来放置 `start_pool` 的设置。
    它根据 `type` 字段有多个条目。

    -   `type`：要使用的投影类型。可用类型有 `constant` 和 `uniform`。

        -   `constant`：将使用恒定锚点。
            当 `type` 设置为它时，`start_height` 的其余部分将遵循 `constant` 的格式。

            <CodeHeader>minecraft:jigsaw</CodeHeader>

            ```json
            "start_height": {
                "type": "constant",
                "value": {
                    "absolute": 10
                }
            }
            ```

        -   `uniform`：可能起始高度的均匀分布。
            当 `type` 设置为它时，`start_height` 的其余部分将遵循 `uniform` 的格式。

            <CodeHeader>minecraft:jigsaw</CodeHeader>

            ```json
            "start_height": {
                "type": "uniform",
                "max": {
                    "below_top": 100
                },
                "min": {
                    "above_bottom": 20
                }
            }
            ```

    -   `value`：4个可能的条目，用于根据其分配级别相对于确定值。
        -   `absolute`：一个数字，正或负，表示从 `heightmap_projection` 偏移生成 `start_pool` 部件的位置。必须是整数。
        -   `above_bottom`：相对于维度底部的高度。必须是正整数。
        -   `below_top`：相对于维度顶部的高度。必须是正整数。
        -   `from_sea`：相对于维度的海平面的高度（主世界是64）。必须是整数。
    -   `max`：如果 `type` 是 uniform，此值用于设置生成y级别范围的最大值。
        -   可以在此处使用上面 `value` 的所有4个值
    -   `min`：如果 `type` 是 uniform，此值用于设置生成y级别范围的最小值。
        -   可以在此处使用上面 `value` 的所有4个值

-   `max_depth`：结构有多大。值可以是1到20（含），数字越大结构越大。

    作为参考，原版村庄在Java版是6。试用 chamber是20。

    深度决定了在链终止之前将放置多少个jigsaw。
    例如，如果结构从1个生成jigsaw开始，它将放置1个延伸，这算作1级，但是如果那个延伸放置了3个生成jigsaw，每个由这些放置的部件算作一级，所以所有3个将算作2级，如果它们各自再放置3个，那么所有这些将算作3级，以此类推。

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "max_depth": 20
    ```

-   `terrain_adaptation`：（可选）游戏将如何修改结构周围的地形。

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "terrain_adaptation": "beard_thin"
    ```

    -   `beard_box` 在结构周围挖空一个洞穴，如远古城市。
    -   `beard_thin` 在底部放置一个平台，如村庄。
    -   `bury` 将结构起始部件包围在地形中（如果结构在地下开始使用 `start_height`，但结构的任何部分将像遗迹废墟一样暴露）。
    -   `encapsulate` 无论怎样都将整个结构包围在地形中，试用 chambers 对较大的地下洞穴这样做。
    -   `none` 什么也不做。

-   `start_pool`：结构放置时要使用的模板池的标识符。

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "start_pool": "wiki:lone_fortress_courtyard"
    ```

-   `start_jigsaw_name`：（可选）起始池中结构里应被视为结构原点的jigsaw方块的名称字段值。
    jigsaw方块的位置将是 `max_distance_from_center` 使用的原点，它也将是 `/locate` 引导到的坐标。

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "start_jigsaw_name": "wiki:courtyard"
    ```

-   `biome_filters`：（可选）结构可以在哪些生物群系中生成。

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "biome_filters": [
        {
            "test": "has_biome_tag",
            "value": "plains"
        }
    ]
    ```

-   `max_distance_from_center`：（可选）结构可以延伸多远的方块数，然后终止。可以是1-128（含）。默认为128。

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "max_distance_from_center": 128
    ```

-   `dimension_padding`：（可选）结构的部件在终止前可以接近世界高度和深度限制的距离。必须是正数。可以分别设置顶部和底部。默认为0。

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "dimension_padding": 0
    ```

-   `pool_aliases`：（可选）可用于将jigsaw目标池重新路由到将应用于整个结构的集合模板，以允许创建主题。

    试用 chambers 使用它们来确定每种类型的刷怪笼将生成什么类型的生物。例如，小型近战刷怪笼可以生成僵尸宝宝，然后每个单一的小型近战刷怪笼将生成僵尸宝宝。

    <CodeHeader>minecraft:jigsaw</CodeHeader>

    ```json
    "pool_aliases": [
        ...
    ]
    ```

    有三种类型的重定向：

    -   `direct`：重定向将分配给它的别名重新路由到模板池。

        在 `type` 分配为 `direct` 后，direct还有2个额外字段：

        -   `alias` 是要在jigsaw方块的目标字段中使用的池别名ID。
        -   `target` 是调用别名时要使用的模板池。

        <CodeHeader>minecraft:jigsaw > pool_aliases</CodeHeader>

        ```json
        {
            "type": "direct",
            "alias": "wiki:lone_fortress/spawners/spawner",
            "target": "wiki:lone_fortress/spawners/skeleton" // 此模板池嵌套在"lone_fortress/spawners"文件夹中
        }
        ```

    -   `random`：重定向将别名重新路由到加权模板池列表，其中它将选择整个结构使用的条目之一。

        像 direct 一样，`random` 在 `type` 分配为 `random` 后还有2个额外字段：

        -   `alias` 是要在jigsaw方块的目标字段中使用的池别名ID。
        -   `targets` 是一个数组，条目本身有2个字段来管理它们如何被选择。
            -   `data` 是如果被选择要使用的模板池ID。
            -   `weight` 是分配给它的权重，值越高越可能被选择。

        <CodeHeader>minecraft:jigsaw > pool_aliases</CodeHeader>

        ```json
        {
            "type": "random",
            "alias": "wiki:lone_fortress/spawners/spawner",
            "targets": [
                {
                    "data": "wiki:lone_fortress/spawners/skeleton",
                    "weight": 1
                },
                {
                    "data": "wiki:lone_fortress/spawners/zombie",
                    "weight": 3
                }
            ]
        }
        ```

    -   `random_group`：重定向将别名重新路由到由前两种类型组成的列表，允许池别名选择其他类型。

        它们可以是除 `random_group` 之外的任何类型。

        <CodeHeader>minecraft:jigsaw > pool_aliases</CodeHeader>

        ```json
        {
            "type": "random_group",
            "groups": [
                {
                    "data": [
                        {
                            "type": "direct",
                            "alias": "wiki:lone_fortress/spawners/spawner",
                            "target": "wiki:lone_fortress/spawners/skeleton"
                        },
                        {
                            "type": "direct",
                            "alias": "wiki:lone_fortress/spawners/spawner_throne",
                            "target": "wiki:lone_fortress/spawners/zombie"
                        }
                    ],
                    "weight": 1
                },
                {
                    "data": [
                        {
                            "type": "random",
                            "alias": "wiki:lone_fortress/spawners/spawner",
                            "targets": [
                                {
                                    "data": "wiki:lone_fortress/spawners/skeleton",
                                    "weight": 1
                                },
                                {
                                    "data": "wiki:lone_fortress/spawners/zombie",
                                    "weight": 3
                                }
                            ]
                        }
                    ],
                    "weight": 1
                }
            ]
        }
        ```

## 结构集

一个告诉游戏如何在世界中放置结构的文件。多个结构可以放在这里，它们之间的距离也在此设置。

<CodeHeader>BP/worldgen/structure_sets/fortress.json</CodeHeader>

```json
{
    "format_version": "1.21.20",
    "minecraft:structure_set": {
        "description": {
            "identifier": "wiki:fortress"
        },
        "placement": { ... },
        "structures": [ ... ]
    }
}
```

### 放置

结构集的 `placement` 参数包含以下放置规则，每个都是必需的：

-   `type`：一个值，`minecraft:random_spread`
-   `salt`：一个随机的8位数字字符串，类似于世界种子。共享相同salt、spacing和separation值的结构集将在相同位置放置结构。
-   `spacing`：网格大小（以chunk为单位），用于放置集合中的结构。它们尝试在盒子内生成一次。
-   `separation`：结构之间的填充距离（以chunk为单位）。必须小于spacing值的一半。
-   `spread_type`：游戏用来决定如何放置结构的算法，要么 `linear` 要么 `triangular`。
    -   `linear` 是基本随机。
    -   `triangular` 是更高级的随机。

### 结构

结构集的 `structures` 参数是一个数组，包含结构（来自 `BP/worldgen/structures` 文件夹）的标识符和它们应该被选择的频率的权重。
在这个例子中，当结构集标记一个结构位置时，两个结构有相等的机会被选择。
如果选择生成的结构为其起始池掷出 `minecraft:empty_pool_element`，结构将无法生成，结构集将重新掷值，直到生成一个结构。

<CodeHeader>minecraft:structure_set</CodeHeader>

```json
"structures": [
    {
        "structure": "wiki:fortress",
        "weight": 1
    },
    {
        "structure": "wiki:mage_tower",
        "weight": 1
    }
]
```

## 完整代码示例

### Jigsaw定义

<CodeHeader>BP/worldgen/structures/fortress.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:jigsaw": {
        "description": {
            "identifier": "wiki:fortress"
        },
        "step": "surface_structures",
        "heightmap_projection": "world_surface",
        "liquid_settings": "apply_waterlogging",
        "start_height": {
            "type": "constant",
            "value": {
                "absolute": 0
            }
        },
        "max_depth": 15,
        "terrain_adaptation": "beard_thin",
        "start_pool": "wiki:fortress_courtyard",
        "biome_filters": [
            {
                "test": "has_biome_tag",
                "value": "plains"
            }
        ],
        "max_distance_from_center": 128,
        "dimension_padding": 10,
        "pool_aliases": [
            {
                "type": "random",
                "alias": "wiki:spawners",
                "targets": [
                    {
                        "data": "wiki:spawners/zombie",
                        "weight": 10
                    },
                    {
                        "data": "wiki:spawners/skeleton",
                        "weight": 8
                    },
                    {
                        "data": "wiki:spawners/vindicator",
                        "weight": 1
                    }
                ]
            }
        ]
    }
}
```

### 模板池

<CodeHeader>BP/worldgen/template_pools/lone_fortress_courtyard.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:template_pool": {
        "description": {
            "identifier": "wiki:lone_fortress_courtyard"
        },
        "elements": [
            {
                "element": {
                    "element_type": "minecraft:single_pool_element",
                    "location": "wiki/lone/fortress/courtyard_1",
                    "processors": "wiki:fortress_decay",
                    "projection": "rigid"
                },
                "weight": 1
            }
        ]
    }
}
```

### 处理器列表

<CodeHeader>BP/worldgen/processors/fortress_decay.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:processor_list": {
        "description": {
            "identifier": "wiki:fortress_decay"
        },
        "processors": [
            {
                "processor_type": "minecraft:protected_blocks",
                "value": "mob_spawner"
            },
            {
                "processor_type": "minecraft:rule",
                "rules": [
                    {
                        "input_predicate": {
                            "predicate_type": "minecraft:random_block_match",
                            "block": "minecraft:diamond_block",
                            "probability": 0.5
                        },
                        "output_state": "minecraft:gold_block"
                    }
                ]
            },
            {
                "processor_type": "minecraft:block_ignore",
                "blocks": ["minecraft:barrier"]
            },
            {
                "processor_type": "minecraft:capped",
                "limit": 5,
                "delegate": {
                    "processor_type": "minecraft:rule",
                    "rules": [
                        {
                            "input_predicate": {
                                "predicate_type": "minecraft:random_block_match",
                                "block": "diamond_block",
                                "probability": 1
                            },
                            "output_state": "gold_block"
                        }
                    ]
                }
            }
        ]
    }
}
```

### 结构集

<CodeHeader>BP/worldgen/structure_sets/fortress.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:structure_set": {
        "description": {
            "identifier": "wiki:fortress"
        },
        "placement": {
            "type": "minecraft:random_spread",
            "salt": 89673456,
            "separation": 10,
            "spacing": 100,
            "spread_type": "triangular"
        },
        "structures": [
            {
                "structure": "wiki:fortress",
                "weight": 1
            }
        ]
    }
}
```
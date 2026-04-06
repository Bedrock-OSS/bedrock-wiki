---
title: 方块入门
description: 方块制作入门指南。学习方块格式并创建基础自定义方块。
category: 通用
nav_order: 1
tags:
    - guide
    - beginner
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - Dreamedc2015
    - sermah
    - yanasakana
    - aexer0e
    - SmokeyStack
    - MedicalJewel105
    - stirante
    - ChibiMango
    - Hatchibombotar
    - fraysdev
    - Ciosciaa
    - Sprunkles137
    - ThomasOrs
    - QuazChick
---

:::tip 格式版本 1.26.10
本页面介绍方块的基础功能。你可以在[这里](/blocks/block-components)了解更多方块组件。
:::
:::danger 注意
原版方块是硬编码的。你无法覆盖或访问它们。
:::

Minecraft Bedrock 允许我们在世界中添加具有多种原版类似属性的自定义方块。自定义方块可以拥有多个阶段（如植物）、方向朝向以及其他实用功能。

本教程将介绍如何为 Minecraft 稳定版创建基础方块。

## 注册方块

方块定义的结构与实体类似：它们包含一个描述和定义方块行为的组件列表。

与实体不同，方块除了在 `RP/blocks.json` 中以外，没有其他资源定义。

以下是将自定义方块添加到创造物品栏所需的**最低**行为包代码。

<CodeHeader>BP/blocks/custom_block.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_block",
            "menu_category": {
                "category": "construction", // 方块所在的创造物品栏或配方书标签页
                "group": "minecraft:itemGroup.name.concrete", // 方块所属的可展开分组。（可选）
                "is_hidden_in_commands": false // 方块是否在命令中隐藏？（可选）
            }
        },
        "components": {} // 即使为空也必须存在！
    }
}
```

### 方块描述

-   定义方块的 `identifier`，格式为 `<namespace>:<identifier>`{lang=xml} 的唯一 ID。
-   配置方块所在的 `menu_category`。
    -   还可接受可选参数 `group` 和 `is_hidden_in_commands`。

_方块描述也是 [states](/blocks/block-states) 和 [traits](/blocks/block-traits) 的归属位置，这些内容将在各自的页面中介绍。_

## 添加组件

目前，我们的自定义方块使用的是默认组件值（可在[这里](/blocks/block-components)找到）。

让我们来配置自己的功能！

<CodeHeader>BP/blocks/custom_block.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_block",
            "menu_category": {
                "category": "construction"
            }
        },
        "components": {
            "minecraft:destructible_by_mining": {
                "seconds_to_destroy": 3
            },
            "minecraft:destructible_by_explosion": {
                "explosion_resistance": 3
            },
            "minecraft:map_color": "#ffffff",
            "minecraft:light_dampening": 0,
            "minecraft:light_emission": 4,
            "minecraft:loot": "loot_tables/blocks/custom_block.json"
        }
    }
}
```

-   [`minecraft:destructible_by_mining`](/blocks/block-components#destructible-by-mining) 定义玩家挖掘方块直到破坏所需的时间。目前无法为不同工具设置不同的破坏时间。
-   [`minecraft:destructible_by_explosion`](/blocks/block-components#destructible-by-explosion) 定义对方块爆炸的抗性。值越高，被破坏的概率越低。
-   [`minecraft:map_color`](/blocks/block-components#map-color) 是在 Minecraft 地图上表示此方块的十六进制颜色代码。`"#ffffff"`{lang=json} 表示白色。你可以在[这里](https://www.google.com/search?q=hex+color+picker)获取其他颜色的十六进制代码。
-   [`minecraft:light_dampening`](/blocks/block-components#light-dampening) 定义阻挡光线通过的程度。
-   [`minecraft:light_emission`](/blocks/block-components#light-emission) 定义方块发出的光照等级。
-   [`minecraft:loot`](/blocks/block-components#loot) 定义方块破坏后的战利品表路径。如果移除此项，方块将掉落自身。你可以在[这里](/loot/loot-tables)了解更多关于战利品表的信息。

_在[这里](/blocks/block-components)浏览更多方块组件！_

## 应用纹理

应使用 [geometry](/blocks/block-components#geometry) 和 [material instances](/blocks/block-components#material-instances) 组件来确定方块的外观。

对于我们基础的 16×16×16 像素方块，将使用 [原版模型](/blocks/vanilla-block-models) `minecraft:geometry.full_block`。

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": "minecraft:geometry.full_block",
"minecraft:material_instances": {
    "*": {
        "texture": "wiki:custom_block"
    }
}
```

现在，我们需要在 `RP/textures/terrain_texture.json` 中将纹理短名称链接到图像文件路径：

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_data": {
        // 我们的纹理短名称：
        "wiki:custom_block": {
            "textures": "textures/wiki/blocks/custom_block" // 链接到图像文件名
        }
    }
}
```

### 逐面纹理

纹理也可以逐面应用。例如，自定义"指南针方块"可以使用以下✨精美✨的纹理：

<div style="display: grid; grid-template-columns: repeat(auto-fill, 192px); column-gap: 1em;">

<WikiImage
    caption="RP/textures/wiki/blocks/compass_block_down.png"
    src="compass_block_down.png"
    pixelated
    width="512"
/>
<WikiImage
    caption="RP/textures/wiki/blocks/compass_block_up.png"
    src="compass_block_up.png"
    pixelated
    width="512"
/>
<WikiImage
    caption="RP/textures/wiki/blocks/compass_block_north.png"
    src="compass_block_north.png"
    pixelated
    width="512"
/>
<WikiImage
    caption="RP/textures/wiki/blocks/compass_block_east.png"
    src="compass_block_east.png"
    pixelated
    width="512"
/>
<WikiImage
    caption="RP/textures/wiki/blocks/compass_block_south.png"
    src="compass_block_south.png"
    pixelated
    width="512"
/>
<WikiImage
    caption="RP/textures/wiki/blocks/compass_block_west.png"
    src="compass_block_west.png"
    pixelated
    width="512"
/>

</div>

[material instances](/blocks/block-components#material-instances) 应该如下所示：

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:material_instances": {
    "down": {
        "texture": "wiki:compass_block_down" // 此纹理会出现在破坏粒子中
    },
    "up": {
        "texture": "wiki:compass_block_up"
    },
    "north": {
        "texture": "wiki:compass_block_north"
    },
    "east": {
        "texture": "wiki:compass_block_east"
    },
    "south": {
        "texture": "wiki:compass_block_south"
    },
    "west": {
        "texture": "wiki:compass_block_west"
    }
}
```

以及以下 `terrain_texture.json` 数据：

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:compass_block_down": {
            "textures": "textures/wiki/blocks/compass_block_down"
        },
        "wiki:compass_block_up": {
            "textures": "textures/wiki/blocks/compass_block_up"
        },
        "wiki:compass_block_north": {
            "textures": "textures/wiki/blocks/compass_block_north"
        },
        "wiki:compass_block_east": {
            "textures": "textures/wiki/blocks/compass_block_east"
        },
        "wiki:compass_block_west": {
            "textures": "textures/wiki/blocks/compass_block_west"
        },
        "wiki:compass_block_south": {
            "textures": "textures/wiki/blocks/compass_block_south"
        }
    }
}
```

## 应用音效

自定义方块的挖掘音效、踩踏音效、破坏音效和放置音效可以通过 `RP/blocks.json` 中的 `sound` 参数来确定。

在[这里](/blocks/block-sounds)了解更多关于方块音效的信息！

<CodeHeader>RP/blocks.json</CodeHeader>

```json
{
    "format_version": "1.21.40",
    "wiki:custom_block": {
        "sound": "grass"
    }
}
```

## 定义名称

最后，让我们像这样定义方块名称：

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
tile.wiki:custom_block.name=Custom Block
tile.wiki:compass_block.name=Compass Block
```

你可以在[这里](/text/text-intro)了解更多关于翻译的信息。

## 结果

在本页面中，你学到了以下内容：

-   [x] 方块的基础功能
-   [x] 如何为所有方块面应用纹理
-   [x] 如何逐面应用纹理

...但这只是开始，看看下面你还能做什么！

## 下一步是什么？

<CardGrid>
<Card title="添加功能" image="/assets/images/icons/crafting_table.png">

了解可用的方块[组件](/blocks/block-components)来打造独特的游戏体验。

为什么不使用 [geometry](/blocks/block-components#geometry) 组件为你的方块添加自定义模型呢？
你还可以配置自己的 [collision](/blocks/block-components#collision-box) 和 [selection](/blocks/block-components#selection-box) 来匹配！

</Card>
<Card title="创建变体" image="/assets/images/icons/levers.png">

利用方块 [states](/blocks/block-states) 和 [permutations](/blocks/block-permutations) 来有条件地在方块上启用组件。

例如，你可以为你的自定义水箱方块添加液体深度等级，并支持多种液体类型。

</Card>
<Card title="复刻原版" image="/assets/images/icons/diamond_ore.png">

在**原版复刻**分类中浏览几个现有方块的完整复刻版本。

从 [custom glass blocks](/blocks/custom-glass-blocks) 开始，利用 [material instances](/blocks/block-components#material-instances)！

</Card>
</CardGrid>

---
title: 方块着色
description: 了解如何为方块的纹理和地图颜色应用颜色着色。
category: 视觉
tags:
    - easy
license: true
mentions:
    - QuazChick
---

## 静态着色

在[地形图集文件](/concepts/texture-atlases)中，可以对纹理使用以下两种不同的着色方式：

-   [`tint_color`](/concepts/texture-atlases#tint-color) 对纹理应用基本的乘法着色。
-   [`overlay_color`](/concepts/texture-atlases#overlay-color) 对纹理应用着色，使用纹理的 alpha 通道决定着色强度。

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:tinted_texture": {
            "textures": {
                "path": "textures/wiki/blocks/untinted_texture",
                "tint_color": "#ff5522" // 将纹理着色为橙色
            }
        }
    }
}
```

## 着色方法

着色方法可用于根据方块放置的生物群系对着色。

### 纹理着色

着色通过为相关[材质实例](/blocks/block-components#材质实例)指定 `tint_method` 参数来应用于纹理。
方块的不同材质实例可以使用不同的着色方法。
当方块是物品时，纹理将根据好像方块放置在平原生物群系中进行着色。

与之前提到的静态纹理着色类似，着色方法可以通过两种不同的方式应用于纹理：

-   如果 `alpha_masked_tint` 设为 `false`{lang=json}（默认），纹理的每个颜色通道将乘以着色的颜色。
    -   这等同于纹理图集文件中的 [`tint_color`](/concepts/texture-atlases#tint-color) 参数。
-   如果 `alpha_masked_tint` 设为 `true`{lang=json}，纹理的 alpha 通道不会被乘以，而是用于决定着色的强度。
    -   这可用于将着色限制在纹理中的某些像素。
    -   这导致纹理变得不透明。
    -   这等同于纹理图集文件中的 [`overlay_color`](/concepts/texture-atlases#overlay-color) 参数。

以下是草方块的材质实例外观：

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:material_instances": {
    "*": {
        "texture": "wiki:custom_grass_side", // 泥土像素的 alpha 值为0，使其不受绿色着色的影响
        "tint_method": "grass",
        "alpha_masked_tint": true
    },
    "down": {
        "texture": "wiki:custom_dirt"
    },
    "up": {
        "texture": "wiki:custom_grass_top",
        "tint_method": "grass"
    }
}
```

### 地图颜色着色

如果你的纹理已应用了着色，地图很可能也会用那种着色显示你的方块。

着色方法可以应用于方块的地图颜色，而不仅仅是它的纹理！

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:map_color": {
    "color": "#ffffff",
    "tint_method": "grass"
}
```

### 着色方法列表

<Table data="tint_methods.json" />

<style>
.color-preview {
    display: inline-grid;
    place-items: center;
    margin-block: 0.5em;
    width: 64px; 
    height: 64px;
    border: var(--border);
    border-radius: var(--border-radius);
    font-family: monospace;
    color: #ffffff;
}
</style>
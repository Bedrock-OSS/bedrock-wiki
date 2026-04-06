---
title: 材质创作
tags:
    - expert
category: 通用
description: 社区贡献的实用材质创作。
---

:::warning
材质并不适合心脏较弱的人。请做好应对潜在崩溃、内容日志错误和较长加载时间的准备。
:::

在本页面你可以找到社区贡献的材质创作。

## 自定义发光且支持半透明的材质

注意：通过禁用剔除也可以解决那些奇怪的剔除问题，这样你就看不到应用了材质的纹理后面的实体和物体了。

注意：纹理需要包含半透明才能添加发光效果。

"customblend" 是你在实体中用作材质的名称。

<Spoiler title="显示">

<CodeHeader></CodeHeader>

```json
{
    "customblend:entity_alphablend": {
        "+defines": ["USE_EMISSIVE"],
        "+states": ["Blending", "DisableCulling", "DisableDepthWrite", "DisableAlphaWrite"]
    }
}
```

</Spoiler>

致谢：StealthyX。

## 带渲染龙的Alpha通道纹理

允许使用渲染龙处理alpha通道纹理的材质：

<Spoiler title="显示">

<CodeHeader></CodeHeader>

```json
{
    "ambient_alpha:entity": {
        "+states": ["Blending", "DisableCulling"],
        "vertexShader": "shaders/color_uv.vertex",
        "vrGeometryShader": "shaders/color_uv.geometry",
        "fragmentShader": "shaders/color_texture.fragment",
        "blendSrc": "SourceAlpha",
        "blendDst": "OneMinusSrcAlpha",
        "vertexFields": [
            {
                "field": "Position"
            },
            {
                "field": "Color"
            },
            {
                "field": "Normal"
            },
            {
                "field": "UV0"
            }
        ],
        "variants": [
            {
                "skinning": {
                    "+defines": ["USE_SKINNING"],
                    "vertexFields": [
                        {
                            "field": "Position"
                        },
                        {
                            "field": "BoneId0"
                        },
                        {
                            "field": "Color"
                        },
                        {
                            "field": "Normal"
                        },
                        {
                            "field": "UV0"
                        }
                    ]
                }
            }
        ]
    }
}
```

</Spoiler>

经过更多测试后发现这仅在第三人称视角有效，但仍然有用，因为无论视角如何，原版混合材质仍然损坏。

致谢：Ambient。

## 渲染控制器中的overlay_color

不允许在渲染控制器中使用overlay_color的材质：

<Spoiler title="显示">

<CodeHeader></CodeHeader>

```json
{
    "materials": {
        "version": "1.0.0",
        "ambient_no_overlay": {
            "defines": ["ALPHA_TEST"],
            "vertexShader": "shaders/entity.vertex",
            "vrGeometryShader": "shaders/entity.geometry",
            "fragmentShader": "shaders/entity.fragment",
            "vertexFields": [
                {
                    "field": "Position"
                },
                {
                    "field": "Normal"
                },
                {
                    "field": "UV0"
                }
            ],
            "variants": [
                {
                    "skinning": {
                        "+defines": ["USE_SKINNING"],
                        "vertexFields": [
                            {
                                "field": "Position"
                            },
                            {
                                "field": "BoneId0"
                            },
                            {
                                "field": "Normal"
                            },
                            {
                                "field": "UV0"
                            }
                        ]
                    }
                },
                {
                    "skinning_color": {
                        "+defines": ["USE_SKINNING"],
                        "+states": ["Blending"],
                        "vertexFields": [
                            {
                                "field": "Position"
                            },
                            {
                                "field": "BoneId0"
                            },
                            {
                                "field": "Color"
                            },
                            {
                                "field": "Normal"
                            },
                            {
                                "field": "UV0"
                            }
                        ]
                    }
                }
            ],
            "msaaSupport": "Both",
            "+samplerStates": [
                {
                    "samplerIndex": 0,
                    "textureFilter": "Point"
                },
                {
                    "samplerIndex": 1,
                    "textureWrap": "Repeat"
                }
            ]
        }
    }
}
```

</Spoiler>

可能对应用于特定骨骼而不是整个几何体很有用。

致谢：Ambient。

## entity_alphablend_nocolorentity_static 材质

使用 `entity_alphablend_nocolorentity_static` 材质会导致Minecraft崩溃。

致谢：Gecko。

---
title: Material Creations
tags:
    - expert
category:
    - General
---

:::warning
Materials are not for the faint of heart. Be prepared for potential crashes, content log errors, and long loading times.
:::

On this page you can find material creations by community.

## Custom material that glows and works with semi transparency.

Note: this also works by disabling culling so you don't run into those weird culling issues where you can't see entities and things behind the texture the material is applied to.

Note: Texture needs to have semi transparency in it to add the glow effect.

"customblend" is what you would call in your entity as a material.

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
{
    "customblend:entity_alphablend": {
        "+defines": [
            "USE_EMISSIVE"
        ],
        "+states": [
            "Blending",
            "DisableCulling",
            "DisableDepthWrite",
            "DisableAlphaWrite"
        ]
    }
}
```

</Spoiler>

Credit: StealthyX.

## Alpha Channel Textures with Render Dragon

Material that allows for alpha channel textures with render dragon:

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
{
    "ambient_alpha:entity": {
        "+states": [
            "Blending",
            "DisableCulling"
        ],
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
                    "+defines": [
                        "USE_SKINNING"
                    ],
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

After some more testing was found out that this only works in 3rd person, but still useful since vanilla blending materials still were broken regardless of perspective.

Credit: Ambient.

## overlay_color in render controllers

Material that doesn't permit overlay_color to be used in render controllers:

<Spoiler title="Show">

<CodeHeader></CodeHeader>

```json
{
    "materials": {
        "version": "1.0.0",
        "ambient_no_overlay": {
            "defines": [
                "ALPHA_TEST"
            ],
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
                        "+defines": [
                            "USE_SKINNING"
                        ],
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
                        "+defines": [
                            "USE_SKINNING"
                        ],
                        "+states": [
                            "Blending"
                        ],
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

May be useful for applying to a specific bone and not the entire geometry.

Credit: Ambient.

## entity_alphablend_nocolorentity_static Material

Using the `entity_alphablend_nocolorentity_static` material will reliably crash Minecraft.

Credit: Gecko.

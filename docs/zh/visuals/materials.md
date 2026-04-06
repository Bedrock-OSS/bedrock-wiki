---
title: 材质
tags:
    - expert
category: 通用
mentions:
    - SirLich
    - Joelant05
    - MedicalJewel105
    - Lufurrius
description: 了解Minecraft Bedrock中的材质。
---

:::warning
材质并不适合心脏较弱的人。请做好应对潜在崩溃、内容日志错误和较长加载时间的准备。
:::

## 概述

材质用于指定渲染游戏不同部分的着色器，以及着色器应考虑用于每个元素的状态和设置。目前，游戏中的大多数内容都被硬编码为使用特定材质，可能无法为其分配新材质。改变这些元素渲染方式的唯一方法是直接编辑它们的材质（可能会对其他部分产生意外效果）或创建新的着色器（这是一个古老的实验性功能，Mojang不再正式支持）。唯一允许分配或移除默认或自定义材质的元素是实体和粒子。

如果你不准备深入了解其中的来龙去脉，可以在[这里](/documentation/materials)找到材质预设。

## 语法和结构

大多数材质继承先前定义的材质设置，然后在此基础上进一步构建。格式如下：

<CodeHeader>RP/materials/name.material</CodeHeader>

```json
{
	"materials": {
		"version": "1.0.0",
		"<新材质ID>:<用作基础的材质ID>": {
     		<defines、states和其他设置>
		}
	}
}
```

:::warning
虽然看起来可能相似，但不要混淆材质包中的材质格式文件。材质中不使用命名空间。
:::

一些材质文件包含大量的材质分支树。例如，默认实体使用的大多数材质最终都源自 entity.material 文件中的 `entity_static` 材质。如果我们看一下当前村民使用的材质：

<CodeHeader></CodeHeader>

```json
"villager_v2_masked:entity_multitexture_masked": {
    "depthFunc": "LessEqual"
},
```

我们可以看到材质的名称是 `villager_v2_masked`，它建立在名为 `entity_multitexture_masked` 的材质之上。向上滚动文件，我们可以找到 "entity_multitexture_masked" 继承 "entity_alphatest" 的设置并在其基础上进一步构建：

<CodeHeader></CodeHeader>

```json
"entity_multitexture_masked:entity_alphatest":{
    "+defines":[
        "MASKED_MULTITEXTURE"
    ],
    "+samplerStates":[
        {
            "samplerIndex":0,
            "textureWrap":"Clamp"
        },
        {
            "samplerIndex":1,
            "textureWrap":"Clamp"
        }
    ]
}
```

然后 "entity_alphatest" 可以追溯到 "entity_nocull"

<CodeHeader></CodeHeader>

```json
"entity_alphatest:entity_nocull":{
    "+defines":[
        "ALPHA_TEST"
    ],
    "+samplerStates":[
        {
            "samplerIndex":1,
            "textureWrap":"Repeat"
        }
    ],
    "msaaSupport":"Both"
}
```

它可以进一步追溯到普通的 "entity"

<CodeHeader></CodeHeader>

```json
"entity_nocull:entity":{
    "+states":[
        "DisableCulling"
    ]
}
```

然后它最终可以追溯到 "entity_static"

<CodeHeader></CodeHeader>

```json
"entity:entity_static":{
    "+defines":[
        "USE_OVERLAY"
    ],
    "msaaSupport":"Both"
},

```

"entity_static" 后面没有冒号跟另一个材质，表明它是这个继承链的底部。

<CodeHeader></CodeHeader>

```json
"entity_static":{
    "vertexShader":"shaders/entity.vertex",
    "vrGeometryShader":"shaders/entity.geometry",
    "fragmentShader":"shaders/entity.fragment",
    "vertexFields":[
        {
            "field":"Position"
        },
        {
            "field":"Normal"
        },
        {
            "field":"UV0"
        }
    ],
    "variants":[
        {
            "skinning":{
                "+defines":[
                    "USE_SKINNING"
                ],
                "vertexFields":[
                    {
                        "field":"Position"
                    },
                    {
                        "field":"BoneId0"
                    },
                    {
                        "field":"Normal"
                    },
                    {
                        "field":"UV0"
                    }
                ]
            }
        },
        {
            "skinning_color":{
                "+defines":[
                    "USE_SKINNING",
                    "USE_OVERLAY"
                ],
                "+states":[
                    "Blending"
                ],
                "vertexFields":[
                    {
                        "field":"Position"
                    },
                    {
                        "field":"BoneId0"
                    },
                    {
                        "field":"Color"
                    },
                    {
                        "field":"Normal"
                    },
                    {
                        "field":"UV0"
                    }
                ]
            }
        }
    ],
    "msaaSupport":"Both",
    "+samplerStates":[
        {
            "samplerIndex":0,
            "textureFilter":"Point"
        }
    ]
}
```

## 1.16.100+ 注意事项

警告所有使用自定义材质的人！

自定义材质继承不再有效，会导致内容日志错误。解决方法是完全自定义定义材质，只使用前缀和材质名称。

这在 1.16.100 之前不是问题。

```json
{
    "materials": {
        "version": "1.0.0",
        "prefix:window_glass:entity": {
            //现在会抛出内容日志错误。
            "+states": ["Blending"],
            "defines": ["ENABLE_FOG", "ENABLE_LIGHT", "USE_ONLY_EMISSIVE"]
        },
        "prefix:window_glass:": {
            //修复了内容日志错误。注意：可能还需要定义旧的继承值。
            "+states": ["Blending"],
            "defines": ["ENABLE_FOG", "ENABLE_LIGHT", "USE_ONLY_EMISSIVE"]
        }
    }
}
```

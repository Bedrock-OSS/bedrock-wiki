---
title: 使用 Schema
mentions:
    - SirLich
    - MedicalJewel105
    - 7dev7urandom
    - KalmeMarq
description: 在 VSCode 中使用 Schema 进行附加包开发。
---

JSON Schema 为您提供两件事：验证以确保您的 JSON 具有正确的结构，以及（取决于编辑器支持）IntelliSense 以帮助您正确编写 JSON。Schema 很好，因为它们会在您弄错某事时立即提供反馈，但它们无法捕获所有内容。

JSON Schema 本身就是 JSON 文件，单独无法执行任何操作。您可以编写自己的或使用别人的。已经有很多 Bedrock 的 Schema。由于没有 Schema 是"官方的"（据我所知），而且 Bedrock 是一个移动目标，您找到的任何 Schema 可能都会有一些不准确之处。所以请记住这一点：有时问题在于您的代码，有时 Schema 可能是错误的。如果您发现错误的 Schema，考虑改进它并向作者提交 pull request，这对大家都有好处。

要使验证工作，您需要一个验证器。您有很多选择，包括编辑器特定的选项。

## Schema

存在许多 Schema，各有细微差异。尝试不同的 Schema，看看哪个最适合您：

| 作者                                                                | 支持                                                                                                       | 备注                                             |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| [Assassin](https://github.com/aexer0e/bedrock-schema)                 | 行为包实体文件                                                                                      | 这是本文最初写的原始 Schema |
| [Tschrock's](https://github.com/bedrock-studio/bedrock-json-schemas/) | 清单、实体动画控制器、实体动画、实体资源定义、渲染控制器、几何体 |                                                  |
| [stirante](https://github.com/stirante/bedrock-shader-schema/)        | 着色器                                                                                                        |                                                  |
| [KalmeMarq](https://github.com/KalmeMarq/Bugrock-JSON-UI-Schemas/)    | JSON UI 文件（包括 \_ui_defs.json 和 \_global_variables.json）                                           |                                                  |

## VSCode

要在 VSCode 中的 JSON 文件内使用此 Schema，只需将此行添加到您的根对象：

`"$schema": "https://aexer0e.github.io/bedrock-schema/"`

它应该看起来像这样：

<CodeHeader></CodeHeader>

```json
"format_version": "1.14.0",
"$schema": "https://aexer0e.github.io/bedrock-schema/"
```

### 将 Schema 添加到工作区

如果您想利用此 Schema 来处理工作区中的所有文件，您可以将其添加到 VS Code 工作区设置中。

为此，请确保您在工作区中，然后按 `Ctrl+Shift+P` 并输入并选择 `>Preferences: Open Workspace Settings (JSON)`。之后，将其添加到根对象

<CodeHeader></CodeHeader>

```json
"settings": {
    "json.schemas": [
        {
            "fileMatch": [
                "*.json"
            ],
            "url": "https://aexer0e.github.io/bedrock-schema/"
        }
    ]
}
```

要测试它是否有效，请创建一个 `.json` 文件，打开一个对象，看看是否获得自动完成选项。（您也可以按 `Ctrl+Space` 强制显示可用选项。）
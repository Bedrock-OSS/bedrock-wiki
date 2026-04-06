---
title: 理解 JSON
category: 额外
description: 初步了解 JSON
nav_order: 1
prefix: "a. "
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - Dreamedc2015
    - sermah
    - cda94581
    - QuazChick
---

::: tip
这是一个附录页面。你可以从头开始[这里](/guide/introduction)开始本指南。
:::

JSON 是一种简单的格式，用于以人类和计算机都能理解的方式编写文本文件。基岩版使用 .json 文件作为 Add-On 的"语言"，因此你需要扎实理解如何读取和编写 json！如果你以前从未听说过 JSON，建议你通读[本教程](https://www.digitalocean.com/community/tutorials/an-introduction-to-json)。它会教你编写有效 JSON 文件所需的一切。

## 有效 JSON

编写 JSON 时要记住的重要一点是，它必须_完全无错误_，否则根本无法工作。即使是一个错误的字符或一个额外的逗号也会导致整个文件失败。出于这个原因，编写有效的 JSON 非常重要。

我们可以使用名为 [json lint](https://jsonlint.com/) 的在线工具来告诉我们 JSON 是否有效。只需将你的代码粘贴到网站上，然后按`验证 JSON`。你会收到一个回复，指示你的代码是否正确，以及任何错误的位置和类型。

## 数据结构

在 JSON 中，数据可以用多种格式编写。每种格式都专门用于它想要表示的数据类型。以下是我们可用的结构：

| 名称   | 示例    | 说明                                  |
| ------ | ------- | ------------------------------------- |
| String | "hello!"| 文字或字符。需要引号。                |
| Int    | 15      | 一个数字。不需要引号。                |
| Float  | 1.2     | 一个分数。不需要引号。                |
| Bool   | true    | 真或假。不需要引号。                  |

现在，用 .json 格式表示：

```json
{
    "my_string": "hello!",
    "my_int": 15,
    "my_float": 1.2,
    "my_bool": true
}
```

除了这些简单结构外，我们还可以访问两个特殊结构。特殊结构用于将其他数据_嵌套_在一起。

### 数组

数组写成两个方括号 `[]`。它们代表一个_列表_。我们可以在列表中放入_其他数据结构_。列表的每个_元素_应该用逗号分隔。

一些例子：

| 结构           | 注释                                |
| -------------- | ----------------------------------- |
| [1, 2, 3]      | 整数列表。                          |
| ["Red", "blue"]| 字符串列表。注意引号！              |

现在，用 .json 格式表示：

```json
{
    "my_ints": [1, 2, 3],
    "my_strings": ["Red", "blue"]
}
```

### 对象

对象写成两个花括号 `{}`。对象是一种特殊语法，包含_命名_的数据结构。名称称为`键`，结构称为`值`。本页面前面的例子是包含其他数据类型示例的_字典_。

这种键值语法看起来像这样：`"<key>": <any structure>`。注意键周围的引号和冒号。

这里有一个对象示例，包含几个_键值对_。

<CodeHeader></CodeHeader>

```json
{
    "a_list_of_integers": [1, 2, 3],
    "is_json_cool": true
}
```

我们需要用逗号分隔每个键值对。

我们把对象的键值对称为它的_子级_或_在_对象内部。

## JSON 结构

在 Minecraft 中，JSON 文件总是从一个_对象_开始，你记得它是两个花括号：`{}`。我们称之为_顶级对象_。我们以键值对的形式将代码_写入_这个对象中。

这是一个用于 Minecraft Add-On 的简单 json 文件示例：

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.12.0",
    "animations": {
        "animation.car.wheel_spin": {
            "loop": true,
            "animation_length": 1.0,
            "bones": {
                "front_wheels": {
                    "rotation": ["q.modified_distance_moved * -30", 0, 0]
                },
                "back_wheels": {
                    "rotation": ["q.modified_distance_moved * -30", 0, 0]
                }
            }
        }
    }
}
```

仔细看看格式。你会发现整个结构是由我们之前已经学习的数据结构构建的。如果你想要练习你的 json 技能，尝试回答这些问题：

-   顶级对象中有多少个键？你能说出它们的名字吗？
-   `format_version` 的值是什么？
-   `"loop"` 键中存储了什么类型的数据？（字符串、布尔值等）

## 故障排除示例

这里有一些例子，帮助你理解你可能在 discord 或网上收到的反馈。当我们谈论 JSON 中的错误时，我们倾向于使用技术术语，希望本节能帮助你熟悉这些术语：

---

你写的是：`"format_version": 1.12`

他们说：_format_version 的值类型错误。它应该是字符串。_

请记住，`type` 指的是以下结构之一：`String`、`Int`、`Float`、`Array` 或 `Object`。如果我们检查我们的代码，我们会看到我们将 `format_version` 设置为 `Float`，而不是 `String`。我们可以通过在 `"1.12"` 周围添加引号来解决这个问题。

---

你写的是：`[1 2 5 6]`

他们说：_你的数组缺少逗号。_

请记住，数组元素需要用逗号分隔。你的数组应该看起来像这样：`[1, 2, 5, 6]`

---

他们说：_你不小心把格式版本放在了描述里面。它应该在外部，在顶级。_

这意味着 `"format_version"` 的键值对是作为描述的_子级_。你应该将键值对从描述对象中复制/粘贴出来，并将其放在顶级。

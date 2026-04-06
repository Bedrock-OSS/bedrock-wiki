---
title: API 模块
category: 通用
nav_order: 3
mentions:
    - cda94581
    - conmaster2112
---

## 概述

脚本 API 提供了多个模块供开发者与 Minecraft 交互。此外，清单依赖项需要根据你的附加包中使用的模块进行设置。

| 模块名称                           | UUID                                   | 以前的名字/别名                | 首个模块版本   |
| ---------------------------------- | -------------------------------------- | ----------------------------- | -------------- |
| `@minecraft/common`                | `77ec12b4-1b2b-4c98-8d34-d1cd63f849d5` |                               | `Engine 1.20.40` |
| `@minecraft/debug-utilities`       | `1796ea86-0daf-4409-99ee-fd6467cf1203` |                               | `Engine 1.20.70` |
| `@minecraft/server`                | `b26a4d4c-afdf-4690-88f8-931846312678` | `Minecraft`, `mojang-minecraft` | `Engine 1.16.210` |
| `@minecraft/server-ui`             | `2bd50a27-ab5f-4f40-a596-3641627c635e` | `mojang-minecraft-ui`         | `Engine 1.18.20` |
| `@minecraft/server-gametest`       | `6f4b6893-1bb6-42fd-b458-7fa3d0c89616` | `GameTest`, `mojang-gametest` | `Engine 1.16.210` |
| `@minecraft/server-net`            | `777b1798-13a6-401c-9cba-0cf17e31a81b` | `mojang-net`                  | `Engine 1.19.10` |
| `@minecraft/server-admin`          | `53d7f2bf-bf9c-49c4-ad1f-7c803d947920` | `mojang-minecraft-server-admin` | `Engine 1.19.10` |
| `@minecraft/server-editor-bindings` | `8518d9c7-a1f5-4bf3-acc7-78e87df595fc` |                               | `Engine 1.19.80` |
| `@minecraft/server-editor`         | `1d565354-296d-11ed-a261-0242ac120002` |                               | `Engine 1.19.80` |

## 模块描述

### `@minecraft/common`

这个模块有一些稳定的发布版本，可以无需在依赖中声明即可导入。它是一个包含基础资源的模块，如错误类或接口。

### `@minecraft/debug-utilities`

这是一个实验性模块。这个模块提供调试工具，但不应在公开发布的附加包中使用。

### `@minecraft/server`

这个模块有很多稳定版本，但仍在积极开发中。它是附加包服务端脚本的基石，用于脚本引擎与你的世界之间的交互，如方块、实体、物品、玩家和其他世界资源。

### `@minecraft/server-ui`

这是一个较小的模块，但对于你的包与最终用户之间的交互非常有用。这是一个提供通过可自定义表单向玩家发送数据的功能的模块。

### `@minecraft/server-gametest`

这是目前存在的最老的模块，但这个模块还没有一个稳定的版本。这个模块用于测试原版实验功能、与其他自定义内容的兼容性、捕获边缘情况或确保可重复性。此模块不面向内容创作者，无需保证与稳定版本的后向兼容性。

### `@minecraft/server-net`

这个模块仅允许在 [Bedrock 专用服务器](https://www.minecraft.net/en-us/download/server/bedrock) 上使用，因为它可能对普通附加包的用户构成安全威胁。这个模块可以通过 GET、SET、POST 等网络请求访问互联网。此模块仅以实验形式存在。

### `@minecraft/server-admin`

这个模块也仅允许在 [Bedrock 专用服务器](https://www.minecraft.net/en-us/download/server/bedrock) 上使用。此模块负责处理存储在 JSON 管理文件中的基本数据，用于设置包的行为而不干扰原始包。此模块仅以实验形式存在。

### `@minecraft/server-editor-bindings`

这是编辑器模块的一组特殊原生函数，此模块未文档化，不应被创作者使用。但是，如果你在依赖中引用它，此模块可以被导入，但只能在使用编辑器项目创建的世界中使用。

### `@minecraft/server-editor`

这个模块比较特殊，因为它的实现不是原生的而是 JS 模块，虽然它是用 JS 实现的，所以它的存在是硬编码的，它可以在依赖中引用，但只能在使用编辑器项目创建的世界中使用。

## Alpha 版本

Alpha 版本是模块的过时版本，不应在当前附加包中使用，并标记为实验性。只有两个模块有此 alpha 版本：`@minecraft/server` 以前称为 `mojang-minecraft`，以及 `@minecraft/server-gametest` 以前称为 `mojang-gametest`。如果你想尝试使用此版本，请记住它们只能通过这些名称导入。

### Alpha 2.X

现在你可能还会注意到新的 alpha `2.X` 系列，但这与原来的 alpha 版本不同，它也是实验性版本，但可以很容易地通过当今已知的名称导入。请记住，此版本与之前的系列 `1.X` 不兼容。

## 模块引用

模块引用是能够在你的 JS 代码中导入模块的必要条件。

::: warning
不要同时在依赖中使用 `"uuid"` 和 `"module_name"` 属性，选择其一。
:::

以版本 `1.13.0` 为例，引用 `@minecraft/server`。

<CodeHeader>BP/manifest.json#dependencies[0]</CodeHeader>

```json
{
    "module_name": "@minecraft/server",
    "version": "1.13.0"
}
```

标记你的包为编辑器扩展所需的能力，在这种情况下允许使用编辑器模块。

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "capabilities": ["editorExtension"]
}
```
---
title: NetherNet 协议
category: 协议
mentions:
    - theaddonn
    - bedrock-crustaceans
description: Bedrock 的 NetherNet 协议。
---

Minecraft Bedrock 在底层使用多种不同的协议，其中之一是 NetherNet。
NetherNet 是 Xbox Live 会话使用的主要协议，基于 web-rtc。

::: tip
NetherNet 是相当新的协议，尚未完成，它不像 RakNet 那样广为人知和被理解。
:::

由于我们对 NetherNet 了解不多，我只能引用 [df-mc 制作的文档](https://github.com/df-mc/nethernet-spec)。

## 实现

文档无法详细解释所有内容，因此查看现有实现非常有帮助。
以下是 NetherNet 实现列表

| 名称                                                                              | 描述                                                       | 语言               |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------- |
| [go-nethernet](https://github.com/df-mc/go-nethernet)                             | 实现基本版本 NetherNet 协议的 Go 库 | Go                     |
| [bedrock-crustaceans/nethernet](https://github.com/bedrock-crustaceans/nethernet) | Rust 中的 NetherNet 实现                                  | Rust                   |
| [node-nethernet](https://github.com/PrismarineJS/node-nethernet)                  | NodeJS 中的 NetherNet 实现                                | JavaScript, TypeScript |

此页面是 WIP，欢迎贡献，因为它仍在完善中。
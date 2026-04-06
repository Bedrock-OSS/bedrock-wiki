---
title: RakNet 协议
category: 协议
mentions:
    - ZestiiSpaghett
    - MedicalJewel105
    - SmokeyStack
    - ThomasOrs
    - theaddonn
    - ismaileke
    - Tom-Teclador
    - bedrock-crustaceans
description: Bedrock 的 RakNet 协议。
---

Minecraft Bedrock 在底层使用多种不同的协议，其中之一是 [RakNet](http://www.jenkinssoftware.com/)。
RakNet 是外部服务器使用的主要协议，也就是您可能正在玩的服务器...可能是特色服务器或朋友运行的服务器。

最重要的方面之一是 RakNet 基于 UDP。
Bedrock 使用端口 `19132`（IPv4，IPv6 使用 `19133`）作为 MCBE 服务器的默认 RakNet 端口，您可以根据需要更改端口。

### RakNet 注意事项

-   离线消息 ID 始终为：`0x00ffff00fefefefefdfdfdfd12345678` - 这一系列字节被称为 _Magic_。
-   离线消息 ID 通过未连接消息（如未连接的 ping 和 pong）发送。
-   第一个字节用于识别数据包的类型。

### 数据类型

| 类型                 | 大小 | 范围           | 备注                                                                         |
| -------------------- | ---- | --------------- | ----------------------------------------------------------------------------- |
| u8 (byte)            | 1    | 0-255           | 单个字节                                                                 |
| i16 (short)          | 2    | -32768 - 32767  | 有符号 16 位整数                                                         |
| u16 (unsigned short) | 2    | 0 - 65535       | 无符号 16 位整数                                                       |
| u24 (unsigned int24) | 3    | 0 - 2^24-1      | 无符号 21 位整数                                                       |
| i64 (long)           | 8    | -2^63 到 2^63-1 | 有符号 64 位整数                                                         |
| bool (boolean)       | 1    | 0 - 1           | `0` 为 `false`，`1` 为 `true`                                           |
| String               | N/A  |                 | 前面带有 u16（编码为 Big Endian）的字符串，表示长度 |
| Guid                 | 8    |                 | 全球唯一标识符，存储为 i64                         |
| Socket Address       | 7    |                 | 1 个字节用于 IP 版本 4/6，4 个字节用于 IP，2 个字节用于端口                |
| Magic                | 16   |                 | 特殊常量字节序列 `0x00ffff00fefefefefdfdfdfd12345678`           |

## 目录

-   [未连接的 Ping](#unconnected-pings)
-   [未连接的 Pong](#unconnected-pongs)
-   [打开连接请求 1](#open-connection-request-1)
-   [打开连接回复 1](#open-connection-reply-1)
-   [打开连接请求 2](#open-connection-request-2)
-   [打开连接回复 2](#open-connection-reply-2)
    （从此处开始，RakNet 连接已建立，
    所有 RakNet 消息都包含在 [帧集数据包](https://minecraft.wiki/w/RakNet#Frame_Set_Packet) 中）
-   [连接请求](#connection-request)
-   [连接请求接受](#connection-request-accepted)
-   [新传入连接](#new-incoming-connection)

### 未连接的 Ping

Minecraft Bedrock 会向所有列出的服务器（以及本地网络）发送消息，以检查是否有可用的游戏并获取游戏的 MOTD。
这些消息称为未连接的 ping，格式如下：

`0x01 | 客户端存活时间（毫秒）（无符号长整型）| magic | 客户端 GUID`

### 未连接的 Pong

之后，服务器会响应一个称为未连接 pong 的消息。
这些消息之所以称为未连接，是因为客户端尚未与服务器建立连接。
未连接的 pong 格式如下：

`0x1c | 客户端存活时间（毫秒）（从之前的 ping 记录）| 服务器 GUID | Magic | 字符串长度 | 版本（MCPE 或 MCEE 教育版）；MOTD 第 1 行；协议版本；版本名称；玩家数量；最大玩家数量；服务器唯一 ID；MOTD 第 2 行；游戏模式；游戏模式（数字）；端口（IPv4）；端口（IPv6）；`

示例：

`MCPE;Dedicated Server;527;1.19.1;0;10;13253860892328930865;Bedrock level;Survival;1;19132;19133;`

客户端似乎不使用游戏模式或游戏模式的数值。

### 打开连接请求 1

（客户端 -> 服务器）

客户端在尝试加入服务器时发送此消息

`0x05 | Magic | 协议版本（当前为 11 或 0x0b）| RakNet 空填充`

空填充似乎用于发现网络可处理的最大数据包大小。

客户端会向服务器发送递减的空填充，
直到服务器回复 [打开连接回复 1](#open-connection-reply-1)

### 打开连接回复 1

（服务器 -> 客户端）

服务器在客户端尝试加入时回复此消息

`0x06 | magic | 服务器 GUID | ServerHasSecurity（布尔值）| Cookie（uint32，如果服务器有安全）| MTU 大小（无符号短整型）`

这是客户端和服务器之间的第一次握手。

### 打开连接请求 2

（客户端 -> 服务器）

客户端在收到打开连接回复 1 数据包后回复此消息

`0x07 | magic | Cookie（uint32，如果服务器有安全）| 客户端支持安全（布尔值， vanilla 客户端始终为 false，如果服务器有安全）| 服务器地址 | MTU 大小（无符号短整型）| 客户端 GUID（长整型）`

### 打开连接回复 2

（服务器 -> 客户端）

这是客户端和服务器之间握手的最后部分

`0x08 | magic | 服务器 GUID（长整型）| 客户端地址 | MTU 大小 | 安全（布尔值）`

**从此处开始，所有 RakNet 消息都包含在 [帧集数据包](https://minecraft.wiki/w/RakNet#Frame_Set_Packet) 中。**

### 连接请求

（客户端 -> 服务器）

这是客户端发送连接请求的部分

`0x09 | 客户端 GUID（长整型）| 请求时间戳（长整型）| 安全（布尔值）`

### 连接请求接受

（服务器 -> 客户端）

服务器以此数据包响应传入的连接请求

`0x10 | 客户端地址 | 系统索引（短整型，作用未知。0 可作为值（Minecraft 客户端发送 47））| 系统地址（[]地址）| ping 时间（长整型）| pong 时间（长整型）`

### 新传入连接

（客户端 -> 服务器）

我们的 RakNet 连接现在完全成功

`0x13 | 服务器地址 | 内部地址（[20（可能是 10）]地址）（我使用 255.255.255.255:0）| ping 时间（长整型）| pong 时间（长整型）`

:::

客户端发送此数据包以响应连接请求接受

`0x13 | 服务器地址（uint8）| 客户端机器地址（address[10]，Minecraft 只发送一个 ipv6 和一个占位符（见下文）而不是其他 9 个）| 客户端发送时间（uint64）| 服务器发送时间（uint64）`

其他客户端机器地址（即内部地址）的占位符：

> `0xd4 0x0b 0xa7 0x86 0xdd 0x98 0x33 0x00 0x00`
> 每个字节替换 9 个缺失的客户端机器地址之一

发送此数据包后，
您必须定期发送连接 Ping 以保持连接存活。
服务器有时也会发送连接 Ping，请用连接 Pong 响应。

### 连接 Ping

客户端在/与新传入连接一起立即发送此数据包。
此数据包应作为不可靠发送。
客户端/服务器会以此响应连接 Pong。

`0x00 | 自开始以来的时间（uint64）`

### 连接 Pong

客户端或服务器在收到连接 Ping 后发送此数据包。
此数据包应作为不可靠发送。

`0x00 | 自开始以来的客户端时间（uint64）| 自开始以来的服务器时间（uint64）`

## 实现

文档无法详细解释所有内容，因此查看现有实现非常有帮助。
以下是 RakNet 协议实现列表

| 名称                                                                                            | 描述                                                                         | 语言               |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ---------------------- |
| [RakNet (官方)](https://github.com/facebookarchive/RakNet)                                  | RakNet 是一个跨平台、开源的 C++ 游戏程序员网络引擎 | C++                    |
| [bedrock-crustaceans/raknet](https://github.com/bedrock-crustaceans/raknet)                     | Rust 中的 RakNet 实现                                                       | Rust                   |
| [NetrexMC/RakNet](https://github.com/NetrexMC/RakNet)                                           | Rust 中的 RakNet 实现                                                       | Rust                   |
| [rust-raknet](https://github.com/b23r0/rust-raknet)                                             | Rust 的 RakNet 协议实现                                              | Rust                   |
| [tokio-raknet](https://github.com/iAldrich23xX/tokio-raknet)                                    | 基于 tokio 异步生态系统的 RakNet 实现                        | Rust                   |
| [transport-raknet](https://github.com/CloudburstMC/Network/tree/develop/transport-raknet)       | netty-transport-raknet                                                              | Java                   |
| [RakLib](https://github.com/pmmp/RakLib)                                                        | PHP 编写的 RakNet 服务器实现                                         | PHP                    |
| [go-raknet](https://github.com/Sandertv/go-raknet)                                              | 实现基本版本 RakNet 协议的 Go 库                      | Go                     |
| [raknet-python](https://github.com/raknet-python/raknet-python)                                 | RakNet 的 Python 绑定，一个跨平台游戏程序员网络引擎 | Python                 |
| [PieRakNet](https://github.com/PieMC-Dev/PieRakNet)                                             | RakNet 实现，使用 Python 编写。为 PieMC 创建                         | Python                 |
| [JSPrismarine/raknet](https://github.com/JSPrismarine/JSPrismarine/tree/master/packages/raknet) |                                                                                     | Javascript, Typescript |

## 来源

::: tip
如果您感兴趣并想了解更多关于 RakNet 的信息，这里是 Bedrock 协议和 RakNet 的文档：

[RakNet 协议文档](https://minecraft.wiki/w/RakNet)
[其他 RakNet 协议文档](https://github.com/vp817/RakNetProtocolDoc)
:::

此页面是 WIP，欢迎贡献，因为它仍在完善中。
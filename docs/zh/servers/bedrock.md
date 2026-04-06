---
title: Bedrock 协议
category: 协议
mentions:
    - theaddonn
    - bedrock-crustaceans
description: Bedrock 游戏协议。
---

## 数据类型

| 类型                              | 大小 | 备注                                                        |
| --------------------------------- | ---- | ------------------------------------------------------------ |
| i8 (byte)                         | 1    |                                                              |
| u8 (unsigned byte)                | 1    |                                                              |
| i16 (short)                       | 2    | 最常编码为小端序，有时也编码为大端序 |
| u16 (unsigned short)              | 2    | 最常编码为小端序，有时也编码为大端序 |
| i32 (int)                         | 4    | 最常编码为小端序，有时也编码为大端序 |
| u32 (unsigned int)                | 4    | 最常编码为小端序，有时也编码为大端序 |
| i64 (int)                         | 8    | 最常编码为小端序，有时也编码为大端序 |
| u64 (unsigned long)               | 8    | 最常编码为小端序，有时也编码为大端序 |
| varint i32 (varint int)           | N/A  | 可变长度编码的 i32                                  |
| varint u32 (varint unsigned int)  | N/A  | 可变长度编码的 u32                                  |
| varint i64 (varint int)           | N/A  | 可变长度编码的 i64                                  |
| varint u64 (varint unsigned long) | N/A  | 可变长度编码的 u64                                  |
| f32 (float)                       | 4    | 始终编码为小端序                              |
| f64 (double)                      | 8    | 始终编码为小端序                              |

## 编码

Bedrock 协议可以使用多种不同的整数编码方式，例如：

-   小端序
-   大端序
-   可变长度整数（VarInts）

这些编码方式改变了整数的读写方式，小端序和大端序只是字节序。
它们基本上决定了字节被读取和解释的顺序，可以在 [这里](https://en.wikipedia.org/wiki/Endianness) 了解更多。

另一方面，VarInts 是一种编码方案，用于用最少的字节表示不同大小的整数。
与使用固定数量的字节（如 32 位整数使用 4 字节）不同，VarInt 根据数值的大小使用可变数量的字节，这在编码小数字时可以节省空间。
它常用于 Google Protocol Buffers、Minecraft 等协议。
有关 VarInts 的更多信息可在 [Google 的 proto buf 文档](https://protobuf.dev/programming-guides/encoding/) 中找到。

## 游戏数据包头部

在 Bedrock 中，GamePacket 头部是数据包结构的关键部分。
它包含关于数据包的元数据，如长度、类型以及关于源和目标客户端的信息。
头部被编码为紧凑格式，通过对某些字段使用可变长度整数来减少带宽使用。

GamePacket 头部由以下部分组成：

-   Gamepacket 长度（varint u32），数据包的总体大小，包括头部和负载
-   GamePacket 头部（14 位编码为 varint u32），头部包含：
    -   Gamepacket ID（10 位），标识特定的 Gamepacket 类型
    -   SubClient 发送者 ID（2 位），在多客户端场景中标识发送客户端
    -   SubClient 目标 ID（2 位），在多客户端场景中标识目标客户端

Gamepacket ID 最多 10 位，这意味着最多有 2^10（1024）个可能的 gamepacket ID。
但 200 到 299 的 ID 用于衍生版本，因此可以自定义使用等。

subclient 字段（发送者和目标）为 2 位宽，意味着它们可以取 0 到 3 之间的值。
这允许在多个玩家共享同一连接的场景（如分屏游戏）中识别最多 4 个不同的客户端。

## 压缩

在 Bedrock 中，数据通常会被压缩以优化网络性能并减少带宽使用。
如果数据包超过某个阈值大小，则会对传出的数据包应用压缩，可以根据使用的压缩算法进行配置。
压缩的主要目标是在确保接收端解压高效准确的同时，最小化数据大小。

Bedrock 支持多种压缩算法，在效率、速度和尺寸缩减方面各有不同。
每个连接可以协商使用哪种算法，不同的压缩方法在通信过程中通过唯一标识符进行识别。主要使用的算法包括：

-   Zlib：
    一种广泛使用的压缩技术，提供可配置的压缩级别。
    该算法在压缩速度和压缩级别之间提供权衡，较高的压缩级别产生更小的输出，但需要更多计算能力。
    它对于压缩大数据包很有效。
-   Snappy：
    一种为高速压缩和解压设计的压缩算法，更注重性能而非最高压缩比。
    该算法通常在速度至关重要时使用，尤其是对于较小的数据数据包。
-   无压缩：
    在某些情况下，压缩可能不必要，特别是对于小数据包或调试目的。
    如果数据包大小低于某个阈值，则可能完全跳过压缩以避免不必要的开销。

（长话短说...在生产环境中始终使用 Zlib，因为它是最好的，其他算法要么有问题，要么不适合生产）

压缩仅在要压缩的数据大小超过预定义阈值时应用。
每种算法都有可配置的阈值，这意味着如果数据大小低于此阈值，数据包将按原样发送，不进行任何压缩。

在 Bedrock 中，每个数据包的开始包含一个压缩标识符，这是一个关键的元数据，表明数据包是否被压缩，如果是，使用了哪种压缩算法。
此标识符允许接收端了解如何处理传入数据——是需要解压还是可以直接读取。

以下标识符用于可用的压缩方法：

-   Zlib: 0x00
-   Snappy: 0x01
-   无压缩: 0xFF 或 0xFFFF（在 [网络设置](#network-settings) 中）

此压缩 ID 作为 u8 存储在每个游戏数据包之前，并在 [网络设置](#network-settings) 中作为 u16 定义要使用的默认压缩方法。

## 加密

待文档化...

## 缓存

待文档化...

## 登录流程

Bedrock 协议的登录序列由多个阶段组成，分别是：

-   预登录
-   登录
-   生成
-   开始游戏

### 网络设置请求

（客户端 -> 服务器）

[官方文档参考](https://mojang.github.io/bedrock-protocol-docs/html/RequestNetworkSettingsPacket.html)

自 v554（v1.19.20）起，这是客户端发送的第一个数据包。
NetworkSettingsRequestPacket 只有一个字段，即客户端的当前协议版本。

这是第一个 PreLogin 数据包。

### 网络设置

（服务器 -> 客户端）

[官方文档参考](https://mojang.github.io/bedrock-protocol-docs/html/NetworkSettingsPacket.html)

用于设置连接信息，这是压缩设置和初始化的地方。
请参阅 [压缩](#compression) 部分了解有关压缩的更多信息。

这是最后一个 PreLogin 数据包。

### 登录

（客户端 -> 服务器）

[官方文档参考](https://mojang.github.io/bedrock-protocol-docs/html/LoginPacket.html)

LoginPacket 包含许多关于客户端的信息，如客户端协议版本（再次）。
这不应在新版本中使用，因为已被弃用。

它还包含一个 [JWT](https://jwt.io/introduction) 的 JSON 数组，称为证书链，编码为字符串。
这些 JWT 包含关于客户端的已验证信息。该数组至少包含 1 个 JWT（未通过 Xbox Live 服务身份验证），最多 3 个 JWT（已通过 Xbox Live 服务身份验证）。
它们存储诸如玩家显示名称、xuid 和 uuid 等数据。以及通过身份验证时的沙盒和标题 ID。
如果缺少第 2 和第 3 个 JWT，则玩家尚未登录其 Xbox live 账户，当前未经过身份验证，因此发送的数据无法信任。

LoginPacket 还包含另一个编码为字符串的 JWT，即原始令牌。
它包含关于玩家的信息，如：

-   SelfSignedId
-   ServerAddress =（如果适用则为未解析的 URL）
-   ClientRandomId
-   SkinId
-   SkinData
-   SkinImageWidth
-   SkinImageHeight
-   CapeData
-   CapeImageWidth
-   CapeImageHeight
-   SkinResourcePatch
-   SkinGeometryData
-   SkinGeometryDataEngineVersion
-   SkinAnimationData
-   PlayFabId
-   AnimatedImageData = 数组：
    -   Type
    -   Image
    -   ImageWidth
    -   ImageHeight
    -   Frames
    -   AnimationExpression
-   ArmSize
-   SkinColor
-   PersonaPieces = 数组：
    -   PackId
    -   PieceId
    -   IsDefault
    -   PieceType
    -   ProductId
-   PieceTintColors = 数组：
    -   PieceType
    -   Colors = 颜色十六进制字符串数组
-   IsEduMode（如果是教育版）
-   TenantId（如果是教育版）
-   ADRole（如果是教育版）
-   IsEditorMode
-   GameVersion
-   DeviceModel
-   DeviceOS =（参见枚举：BuildPlatform）
-   DefaultInputMode =（参见枚举：InputMode）
-   CurrentInputMode =（参见枚举：InputMode）
-   UIProfile =（参见枚举：UIProfile）
-   GuiScale
-   LanguageCode
-   PlatformUserId
-   ThirdPartyName
-   ThirdPartyNameOnly
-   PlatformOnlineId
-   PlatformOfflineId
-   DeviceId
-   TrustedSkin
-   PremiumSkin
-   PersonaSkin
-   OverrideSkin
-   CapeOnClassicSkin
-   CapeId
-   CompatibleWithClientSideChunkGen

这是 Login 阶段的第一个数据包。

### HandshakeServerToClient（可选）

（服务器 -> 客户端）

[官方文档参考](https://mojang.github.io/bedrock-protocol-docs/html/ServerToClientHandshakePacket.html)

如果有发送，它会初始化加密。在 [加密部分](#encryption) 中了解更多。

待文档化...

### HandshakeClientToServer（可选）

（客户端 -> 服务器）

[官方文档参考](https://mojang.github.io/bedrock-protocol-docs/html/ClientToServerHandshakePacket.html)

如果客户端正确初始化了加密，它会响应此数据包以表示握手成功。
此数据包完全为空

### ResourcePacksInfo

（服务器 -> 客户端）

[官方文档参考](https://mojang.github.io/bedrock-protocol-docs/html/ResourcePacksInfoPacket.html)

发送有关可用资源包和附加组件的元数据。如果您想发送任何类型的包，请参阅 [发送资源包部分](#sending-resource-packs)。
如果 ResourcePacksInfo 和 ResourcePacksStack 都为空，这些数据包可以批量处理。
然后只有一个 ClientCacheStatus（可选）和 ResourcePackClientResponse。

### ClientCacheStatus（可选）

（客户端 -> 服务器）

[官方文档参考](https://mojang.github.io/bedrock-protocol-docs/html/ClientCacheStatusPacket.html)

如果客户端支持缓存，则发送此数据包，包含一个表示缓存支持的布尔值。
缓存支持启用协议中的某些可能性，在 [缓存部分](#caching) 中了解更多。

### ResourcePackClientResponse

（客户端 -> 服务器）

[官方文档参考](https://mojang.github.io/bedrock-protocol-docs/html/ResourcePackClientResponsePacket.html)

对之前的 ResourcePacksInfoPacket 的回复，描述资源包下载的当前状态。
如果您想发送任何类型的包，请参阅 [发送资源包部分](#sending-resource-packs)。

### ResourcePacksStack

（服务器 -> 客户端）

[官方文档参考](https://mojang.github.io/bedrock-protocol-docs/html/ResourcePackStackPacket.html)

始终回复 ResourcePackClientResponse，直到客户端下载完所有包。

### ResourcePackClientResponse

（客户端 -> 服务器）

[官方文档参考](https://mojang.github.io/bedrock-protocol-docs/html/ResourcePackClientResponsePacket.html)

对之前的 ResourcePacksInfoPacket 的回复，描述资源包下载的当前状态。
如果您想发送任何类型的包，请参阅 [发送资源包部分](#sending-resource-packs)。
如果此数据包指示客户端已下载所有必需的包，登录流程可以继续。

### PlayStatus

（服务器 -> 客户端）

[官方文档参考](https://mojang.github.io/bedrock-protocol-docs/html/ClientToServerHandshakePacket.html)

它包含一个表示游戏状态的枚举（登录流程/阶段的状态）。
如果登录阶段成功，枚举应设置为 `LoginSuccess`。

这是 Login 阶段的最后一个数据包。

### StartGamePacket

（服务器 -> 客户端）

[官方文档参考](https://mojang.github.io/bedrock-protocol-docs/html/ClientToServerHandshakePacket.html)

这是 Spawn 阶段的第一个数据包。

::: tip
在此数据包之后，您已经可以发送 [物品栏内容](#sending-inventory-contents) 或 [区块](#sending-chunks)。
客户端已准备好，只等待您允许其生成。
:::

### PlayStatus

它包含一个表示游戏状态的枚举（登录流程/阶段的状态）。
如果 Spawn 阶段成功，枚举应设置为 `PlayerSpawn`。

这是 Spawn 阶段的最后一个数据包。

## 发送资源包

待文档化...

## 发送区块

待文档化...

## 发送物品栏内容

待文档化...

## 实现

文档无法详细解释所有内容，因此查看现有实现非常有帮助。
以下是 Bedrock 协议实现列表

| 名称                                                              | 描述                                                                  | 语言 |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------- |
| [CloudburstMC/Protocol](https://github.com/CloudburstMC/Protocol) | Minecraft Bedrock 版协议库                             | Java     |
| [PMMP/BedrockProtocol](https://github.com/pmmp/BedrockProtocol)   | PHP 中 Minecraft: Bedrock 版协议的实现          | PHP      |
| [gophertunnel](https://github.com/Sandertv/gophertunnel)          | 用 Go 编写的 Minecraft Bedrock 版通用目的库 | Go       |
| [bedrockrs](https://github.com/bedrock-crustaceans/bedrockrs)     | Rust 中 MCBE 的通用库                                           | Rust     |

此页面是 WIP，欢迎贡献，因为它仍在完善中。
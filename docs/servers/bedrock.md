---
title: Bedrock Protocol
category: Protocols
mentions:
    - theaddonn
    - bedrock-crustaceans
description: Bedrock Game protocol.
---

## Datatypes

| Type                              | Size | Notes                                                        |
|-----------------------------------|------|--------------------------------------------------------------|
| i8 (byte)                         | 1    |                                                              |
| u8 (unsigned byte)                | 1    |                                                              |
| i16 (short)                       | 2    | Most often encoded as Little Endian, Sometimes as Big Endian |
| u16 (unsigned short)              | 2    | Most often encoded as Little Endian, Sometimes as Big Endian |
| i32 (int)                         | 4    | Most often encoded as Little Endian, Sometimes as Big Endian |
| u32 (unsigned int)                | 4    | Most often encoded as Little Endian, Sometimes as Big Endian |
| i64 (int)                         | 8    | Most often encoded as Little Endian, Sometimes as Big Endian |
| u64 (unsigned long)               | 8    | Most often encoded as Little Endian, Sometimes as Big Endian |
| varint i32 (varint int)           | N/A  | Variable length encoded i32                                  |
| varint u32 (varint unsigned int)  | N/A  | Variable length encoded u32                                  |
| varint i64 (varint int)           | N/A  | Variable length encoded i64                                  |
| varint u64 (varint unsigned long) | N/A  | Variable length encoded u64                                  |
| f32 (float)                       | 4    | Always encoded as Little Endian                              |
| f64 (double)                      | 8    | Always encoded as Little Endian                              |

## Encodings

The Bedrock Protocol can use multiple different Encodings for integers, such as
- Little Endian
- Big Endian
- Variable Length Integer (VarInts)

These change how integers are written and read, both Little Endian and Big Endian are just Endianness. 
They basically determine the order in which bytes are read and interpreted, more can be read about them [here, on wikipedia](https://en.wikipedia.org/wiki/Endianness).

On the other hand, VarInts are an encoding scheme used to represent integers of varying sizes using a minimal number of bytes.
Instead of using a fixed number of bytes (like 4 bytes for a 32-bit integer), a VarInt uses a variable number of bytes depending on the magnitude of the number, which can help save space when encoding small numbers.
It's commonly used in protocols like Google Protocol Buffers, Minecraft, and others.
More information on VarInts is available at [Google's proto buf documentation](https://protobuf.dev/programming-guides/encoding/).

## Gamepacket Header

In Bedrock, the GamePacket header is a crucial part of packet structure.
It contains metadata about the packet, such as its length, type, and information about the source and target clients.
The header is encoded into a compact format that reduces bandwidth usage by using variable-length integers for certain fields.

The GamePacket header is composed of:
- Gamepacket Length (varint u32), the total size of the packet, including the header and payload
- GamePacket Header (14 bits encoded as varint u32), the header contains:
    - Gamepacket ID (10 bits), identifies the specific Gamepacket type
    - SubClient Sender ID (2 bits), identifies the sender client in multi-client scenarios
    - SubClient Target ID (2 bits), identifies the target client in multi-client scenarios

The Gamepacket ID is a maximum of 10 bits, which means that there are up to 2^10 (1024) possible gamepacket IDs.
But IDs 200 through 299 are used for spin-offs, so they are free to use for custom packets etc.

The subclient fields (sender and target) are 2 bits wide, meaning they can take on values from 0 to 3.
This allows for identifying up to 4 different clients in scenarios where multiple players share the same connection (e.g., split-screen play).

## Compression

In Bedrock, data is often compressed to optimize network performance and reduce bandwidth usage.
Compression is applied to outgoing data packets if they exceed a certain threshold size, which can be configured based on the compression algorithm being used.
The primary goal of compression is to minimize the data size while ensuring that decompression on the receiving end is efficient and accurate.

Bedrock supports multiple compression algorithms that vary in terms of efficiency, speed, and size reduction.
Each connection can negotiate which algorithm to use, and different compression methods are identified by unique identifiers during communication. The primary algorithms used include:
- Zlib:
  A widely-used compression technique that offers configurable levels of compression.
  This algorithm provides a tradeoff between speed and the level of compression, with higher compression levels yielding smaller output but requiring more computational power.
  It is effective for compressing large packets.
- Snappy:
  A compression algorithm designed for high-speed compression and decompression, focusing more on performance than achieving the highest compression ratios.
  This algorithm is typically used when speed is critical, especially for smaller data packets.
- No Compression:
  In some cases, compression may not be necessary, especially for small data packets/debugging purposes.
  If the size of a packet is below a certain threshold, compression may be skipped entirely to avoid unnecessary overhead.

(Long story, short... Always use Zlib in production, since it is the best because the others either have problems or are not suited for production)

Compression is only applied if the size of the data to be compressed exceeds a predefined threshold.
Each algorithm has a configurable threshold, meaning if the size of the data is below this threshold, the packet is sent as-is, without any compression.

In Bedrock, the beginning of each packet contains a compression identifier, which is a crucial piece of metadata that indicates whether the packet is compressed and, if so, which compression algorithm was used.
This identifier allows the receiving end to understand how to process the incoming data—whether it needs to be decompressed or can be read directly.

The following identifiers are used for the available compression methods:
- Zlib: 0x00
- Snappy: 0x01
- No Compression: 0xFF or 0xFFFF (in [NetworkSettings](#network-settings))

This compression ID is stored before every gamepacket as am u8 and in the [NetworkSettings](#network-settings), where it is an u16 and defines the default compression method to use.

## Encryption

To be documented...

## Caching

To be documented...

## Login Process

The Bedrock Protocol's login sequence is made up of multiple stages, these being:
- PreLogin
- Login
- Spawn
- Play

### Network Settings Request
(Client -> Server)

[Reference in the Official Docs](https://mojang.github.io/bedrock-protocol-docs/html/RequestNetworkSettingsPacket.html)

Since v554 (v1.19.20), this is the first packet sent by the client.
The NetworkSettingsRequestPacket has one single field that being the current protocol version of the client.

This is the first PreLoin packet.

### Network Settings
(Server -> Client)

[Reference in the Official Docs](https://mojang.github.io/bedrock-protocol-docs/html/NetworkSettingsPacket.html)

Used to set up information for the connection, this is where the compression is set and initialized.
Refer to [Compression](#compression) to find out more about compression here.


This is the last PreLoin packet.

### Login
(Client -> Server)

[Reference in the Official Docs](https://mojang.github.io/bedrock-protocol-docs/html/LoginPacket.html)

The LoginPacket contains a lot of information on the client, such as the client protocol version (again).
This should not be used since it is deprecated in newer versions.

It also contains a JSON array of [JWTs](https://jwt.io/introduction) called the certificate chain which is encoded as a String.
These JWTs contain verified information about the client. The array contains at minimum 1 JWT (Not authenticated to Xbox Live services), and at maximum 3 JWTs (Is authenticated to Xbox Live services).
They store data such as the players display name, xuid and uuid. As well as sandbox- and title ID, when authenticated.
If the 2nd and 3rd JWT are missing then the player has not signed in to their Xbox live account and is currently not authenticated, the sent data can hence why not be trusted.

The LoginPacket also contains another JWT encoded as a String, that being the raw token.
It contains information about the player such as:
- SelfSignedId
- ServerAddress = (unresolved url if applicable)
- ClientRandomId
- SkinId
- SkinData
- SkinImageWidth
- SkinImageHeight
- CapeData
- CapeImageWidth
- CapeImageHeight
- SkinResourcePatch
- SkinGeometryData
- SkinGeometryDataEngineVersion
- SkinAnimationData
- PlayFabId
- AnimatedImageData = Array of:
  - Type
  - Image
  - ImageWidth
  - ImageHeight
  - Frames
  - AnimationExpression
- ArmSize
- SkinColor
- PersonaPieces = Array of:
  - PackId
  - PieceId
  - IsDefault
  - PieceType
  - ProductId
- PieceTintColors = Array of:
  - PieceType
  - Colors = Array of color hexstrings
- IsEduMode (if edu mode)
- TenantId (if edu mode)
- ADRole (if edu mode)
- IsEditorMode
- GameVersion
- DeviceModel
- DeviceOS = (see enumeration: BuildPlatform)
- DefaultInputMode = (see enumeration: InputMode)
- CurrentInputMode = (see enumeration: InputMode)
- UIProfile = (see enumeration: UIProfile)
- GuiScale
- LanguageCode
- PlatformUserId
- ThirdPartyName
- ThirdPartyNameOnly
- PlatformOnlineId
- PlatformOfflineId
- DeviceId
- TrustedSkin
- PremiumSkin
- PersonaSkin
- OverrideSkin
- CapeOnClassicSkin
- CapeId
- CompatibleWithClientSideChunkGen

This is the first packet for the Login stage.

### HandshakeServerToClient (Optional)
(Server -> Client)

[Reference in the Official Docs](https://mojang.github.io/bedrock-protocol-docs/html/ServerToClientHandshakePacket.html)

Optionally, if it is sent it initializes encryption. Read more about it in the [Encryption Section](#encryption).

To be documented...

### HandshakeClientToServer (Optional)
(Client -> Server)

[Reference in the Official Docs](https://mojang.github.io/bedrock-protocol-docs/html/ClientToServerHandshakePacket.html)

If the client has initialized Encryption correctly, it responds with this packet to signal that the Handshake was successful.
This packet is completely empty

### ResourcePacksInfo
(Server -> Client)

[Reference in the Official Docs](https://mojang.github.io/bedrock-protocol-docs/html/ResourcePacksInfoPacket.html)

Sends metadata about available resource packs and addons. If you want to send any kind of packs, look into the [Sending Resource Packs Section](#sending-resource-packs).
If both the ResourcePacksInfo and ResourcePacksStack are empty, these packets can be batched.
Then there is only one ClientCacheStatus (Optionally) and ResourcePackClientResponse.

### ClientCacheStatus (Optional)
(Client -> Server)

[Reference in the Official Docs](https://mojang.github.io/bedrock-protocol-docs/html/ClientCacheStatusPacket.html)

If the client supports Caching then it sends this packet, containing one bool indicating caching support.
Caching support enables certain possibilities in the protocol, read more about them in the [Caching Section](#caching).

### ResourcePackClientResponse
(Client -> Server)

[Reference in the Official Docs](https://mojang.github.io/bedrock-protocol-docs/html/ResourcePackClientResponsePacket.html)

A Reply to the previous ResourcePacksInfoPacket, describing the current status of the Resource Pack downloading.
If you want to send any kind of packs, look into the [Sending Resource Packs Section](#sending-resource-packs).

### ResourcePacksStack
(Server -> Client)

[Reference in the Official Docs](https://mojang.github.io/bedrock-protocol-docs/html/ResourcePackStackPacket.html)

Always replied to a ResourcePackClientResponse, until the client has downloaded all packs.

### ResourcePackClientResponse
(Client -> Server)

[Reference in the Official Docs](https://mojang.github.io/bedrock-protocol-docs/html/ResourcePackClientResponsePacket.html)

A Reply to the previous ResourcePacksInfoPacket, describing the current status of the Resource Pack downloading.
If you want to send any kind of packs, look into the [Sending Resource Packs Section](#sending-resource-packs).
If this packet indicates that the client has downloaded all required packs, the login process may continue.

### PlayStatus
(Server -> Client)

[Reference in the Official Docs](https://mojang.github.io/bedrock-protocol-docs/html/ClientToServerHandshakePacket.html)

It contains a single enum indicating the play status (Status of the Login Process/Stage).
If the Login stage was successful, the enum should be set to `LoginSuccess`.

This is the last packet for the Login stage.

### StartGamePacket
(Server -> Client)

[Reference in the Official Docs](https://mojang.github.io/bedrock-protocol-docs/html/ClientToServerHandshakePacket.html)

This is the first packet in the Spawn stage.

::: tip
After this packet, you can already send [Inventory Contents](#sending-inventory-contents) or [Chunks](#sending-chunks).
The client is ready and just waits until you allow it to spawn. 
:::

### PlayStatus

It contains a single enum indicating the play status (Status of the Login Process/Stage).
If the Spawn stage was successful, the enum should be set to `PlayerSpawn`.

This is the last packet for the Spawn stage.

## Sending Resource Packs

To be documented...

## Sending Chunks

To be documented...

## Sending Inventory Contents

To be documented...

## Implementations

Not everything can be explained in great detail via documentation, that's why looking at existing implementations is very helpful.
Here is list of Bedrock Protocol implementations

| Name                                                              | Description                                                                  | Language |
|-------------------------------------------------------------------|------------------------------------------------------------------------------|----------|
| [CloudburstMC/Protocol](https://github.com/CloudburstMC/Protocol) | A protocol library for Minecraft Bedrock Edition                             | Java     |
| [PMMP/BedrockProtocol](https://github.com/pmmp/BedrockProtocol)   | An implementation of the Minecraft: Bedrock Edition protocol in PHP          | PHP      |
| [gophertunnel](https://github.com/Sandertv/gophertunnel)          | General purpose library for Minecraft Bedrock Edition software written in Go | Go       |
| [bedrockrs](https://github.com/bedrock-crustaceans/bedrockrs)     | Universal library for MCBE in Rust                                           | Rust     |

This page is a WIP, feel free to contribute as it is still being worked on.

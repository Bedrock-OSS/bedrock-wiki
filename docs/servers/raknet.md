---
title: RakNet Protocol
category: Protocols
mentions:
    - ZestiiSpaghett
    - MedicalJewel105
    - SmokeyStack
    - ThomasOrs
    - theaddonn
    - ismaileke
    - Tom-Teclador
    - bedrock-crustaceans
description: RakNet protocol for Bedrock.
---

Minecraft Bedrock uses multiple different protocols under the hood, one of them is [RakNet](http://www.jenkinssoftware.com/).
RakNet is the main protocol used for external servers, aka the server you are likely playing on... maybe it is a featured server or the server run by your friend.

One of the most important aspects is that RakNet is based on Udp.
Bedrock uses the port `19132` (Ipv4, use `19133` for ipv6) as its default RakNet port for MCBE servers, you can still change the port as you wish.

### RakNet Notes

- The offline message id will always be: `0x00ffff00fefefefefdfdfdfd12345678` - this series of bytes will be referred to as _Magic_.
- The offline message id is sent with unconnected messages such as unconnected pings and pongs.
- The first byte is used to identify the type of the packet.

### Datatypes

| Type                 | Size | Range           | Notes                                                                         |
|----------------------|------|-----------------|-------------------------------------------------------------------------------|
| u8 (byte)            | 1    | 0-255           | A single Byte                                                                 |
| i16 (short)          | 2    | -32768 - 32767  | Signed 16-bit integer                                                         |
| u16 (unsigned short) | 2    | 0 - 65535       | Unsigned 16-bit integer                                                       |
| u24 (unsigned int24) | 3    | 0 - 2^24-1      | Unsigned 21-bit integer                                                       |
| i64 (long)           | 8    | -2^63 to 2^63-1 | Signed 64-bit integer                                                         |
| bool (boolean)       | 1    | 0 - 1           | `0` is `false`, while `1` is `true`                                           |
| String               | N/A  |                 | A String prefixed by an u16 (encoded as Big Endian), which depicts the length |
| Guid                 | 8    |                 | A Globally Unique Identifier that is stored as an i64                         |
| Socket Address       | 7    |                 | 1 byte for the ip version 4/6, 4 for the IP and 2 for the port                |
| Magic                | 16   |                 | Special constant byte sequence `0x00ffff00fefefefefdfdfdfd12345678`           |

## Contents

-   [Unconnected Pings](#unconnected-pings)
-   [Unconnected Pongs](#unconnected-pongs)
-   [Open Connection Request 1](#open-connection-request-1)
-   [Open Connection Reply 1](#open-connection-reply-1)
-   [Open Connection Request 2](#open-connection-request-2)
-   [Open Connection Reply 2](#open-connection-reply-2)
    (From here on, the RakNet connection is established,
    and all RakNet messages are contained in a [Frame Set Packet](https://minecraft.wiki/w/RakNet#Frame_Set_Packet))
-   [Connection Request](#connection-request)
-   [Connection Request Accepted](#connection-request-accepted)
-   [New Incoming Connection](#new-incoming-connection)


### Unconnected Pings

Minecraft Bedrock will send out a message to all listed servers (and the local network) to check if any games are available and retrieve the MOTD from the game.
These messages are known as unconnected pings and are structured in this format:

`0x01 | client alive time in ms (unsigned long long) | magic | client GUID`


### Unconnected Pongs

After this message, the server will respond with something called an unconnected pong.
The reason these messages are unconnected is that the client has not established a connection to the server.
This is the format of an unconnected pong:

`0x1c | client alive time in ms (recorded from previous ping) | server GUID | Magic | string length | Edition (MCPE or MCEE for Education Edition);MOTD line 1;Protocol Version;Version Name;Player Count;Max Player Count;Server Unique ID;MOTD line 2;Game mode;Game mode (numeric);Port (IPv4);Port (IPv6);`

Example:

`MCPE;Dedicated Server;527;1.19.1;0;10;13253860892328930865;Bedrock level;Survival;1;19132;19133;`

The client doesn't seem to use the gamemode or the numeric value for the gamemode.


### Open Connection Request 1
(Client -> Server)

The client sends this when attempting to join the server

`0x05 | Magic | Protocol version (currently 11 or 0x0b) | RakNet Null Padding`

The null padding seems to be used to discover the maximum packet size the network can handle.

The client will send this to the server with decreasing null padding,
until the server responds with a [Open Connection Reply 1](#open-connection-reply-1)


### Open Connection Reply 1
(Server -> Client)

The server responds with this once the client attempts to join

`0x06 | magic | server GUID | ServerHasSecurity (boolean) | Cookie (uint32, if server has security) | MTU Size (Unsigned short)`

This is the first half of the handshake between the client and the server.


### Open Connection Request 2
(Client -> Server)

The client responds with this after they receive the open connection reply 1 packet.

`0x07 | magic | Cookie (uint32, if server has security) | Client supports security (Boolean(false), always false for the vanilla client, if server has security) | server Address | MTU Size (Unsigned short) | client GUID (Long)`


### Open Connection Reply 2
(Server -> Client)

This is the last part of the handshake between the client and the server.

`0x08 | magic | server GUID (Long) | client Address | MTU Size | security(Boolean)`

**From here on, all RakNet messages are contained in a [Frame Set Packet](https://minecraft.wiki/w/RakNet#Frame_Set_Packet).**


### Connection Request
(Client -> Server)

This is the part where the client sends the connection request.

`0x09 | client GUID (Long) | Request timestamp (Long) | Secure (Boolean)`


### Connection Request Accepted
(Server -> Client)

The server sends this packet in response to the incoming connection request.

`0x10 | client Address | System index (Short, unknown what this does. 0 works as a value (Minecraft client sends 47)) | System adresses ([]Address) | Ping time (Long) | Pong Time (Long)`


### New Incoming Connection
(Client -> Server)

Our RakNet connection is now fully successful.

`0x13 | server Address | internal Adress ([20(maybe 10)]Address) (i use 255.255.255.255:0) | Ping time (Long) | Pong Time (Long)`

::: tip

The next two packets (and the first Minecraft Protocol packet) are all sent together as one by the vanilla client.
The RakNetProtocol allows for them to be sent separately too, however, servers with a custom raknet implementation might not always handle this case because this never occurs within the vanilla client.

:::


### New Incoming Connection

The client sends this packet in response to Connection Request Accepted.

`0x13 | serverAddress (uint8) | clientMachineAddresses (address[10], Minecraft sends only one ipv6 together with a placeholder (see below) instead of the other 9) | clientSendTime (uint64) | serverSendTime (uint64)`

placeholder for the other clientMachineAddresses (a.k.a. Internal Addresses):

> `0xd4 0x0b 0xa7 0x86 0xdd 0x98 0x33 0x00 0x00`
> each byte replaces one of the 9 missing clientMachineAddresses

After having sent this packet,
you must periodically send a Connected Ping to keep the connection alive.
The server also sometimes sends a Connected Ping, respond with a Connected Pong.


### Connected Ping

The client sends this packet immediately after/with New Incoming Connection.
This packet should be sent as unreliable.
The client/server will respond to this with a Connected Pong.

`0x00 | Time since start (uint64)`


### Connected Pong

The client or server sends this packet after having received a Connected Ping.
This packet should be sent as unreliable.

`0x00 | Time since start client (uint64) | Time since start server (uint64)`



## Implementations

Not everything can be explained in great detail via documentation, that's why looking at existing implementations is very helpful.
Here is list of RakNet Protocol implementations

| Name                                                                                            | Description                                                                         | Language               |
|-------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|------------------------|
| [RakNet (Official)](https://github.com/facebookarchive/RakNet)                                  | RakNet is a cross platform, open source, C++ networking engine for game programmers | C++                    |
| [bedrock-crustaceans/raknet](https://github.com/bedrock-crustaceans/raknet)                     | RakNet implementation in Rust                                                       | Rust                   |
| [NetrexMC/RakNet](https://github.com/NetrexMC/RakNet)                                           | RakNet implementation in Rust                                                       | Rust                   |
| [rust-raknet](https://github.com/b23r0/rust-raknet)                                             | RakNet Protocol implementation by Rust                                              | Rust                   |
| [transport-raknet](https://github.com/CloudburstMC/Network/tree/develop/transport-raknet)       | netty-transport-raknet                                                              | Java                   |
| [RakLib](https://github.com/pmmp/RakLib)                                                        | RakNet server implementation written in PHP                                         | PHP                    |
| [go-raknet](https://github.com/Sandertv/go-raknet)                                              | Go library implementing a basic version of the RakNet protocol                      | Go                     |
| [raknet-python](https://github.com/raknet-python/raknet-python)                                 | Python bindings for RakNet, a cross-platform networking engine for game programmers | Python                 |
| [PieRakNet](https://github.com/PieMC-Dev/PieRakNet)                                             | RakNet implementation, written in Python. Created for PieMC                         | Python                 |
| [JSPrismarine/raknet](https://github.com/JSPrismarine/JSPrismarine/tree/master/packages/raknet) |                                                                                     | Javascript, Typescript |

## Sources

::: tip
If you are interested and want to read more about RakNet here is the documentation for the Bedrock Protocol and RakNet:

[RakNet Protocol Documentation](https://minecraft.wiki/w/RakNet)
[Other RakNet Protocol Documentation](https://github.com/vp817/RakNetProtocolDoc)
:::

This page is a WIP, feel free to contribute as it is still being worked on.

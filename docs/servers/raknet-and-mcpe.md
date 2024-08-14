---
title: RakNet and MCPE
mentions:
    - ZestiiSpaghett
    - MedicalJewel105
    - SmokeyStack
    - ThomasOrs
    - Adrian8115
    - ismaileke
    - Tom-Teclador
description: RakNet protocol for MCBE.
---

Minecraft Bedrock uses a protocol known as [RakNet](http://www.jenkinssoftware.com/)
Unlike Minecraft Java edition, Bedrock uses UDP on the port 19132

You can find a list of Minecraft Bedrock server softwares [here](/servers/server-software#active-software).

## RakNet Notes

-   All strings are prefixed with an unsigned short depicting their length.
-   The offline message id will always be: 00ffff00fefefefefdfdfdfd12345678 (hex) - this series of bytes will be referred to as *Magic*
-   The offline message id is sent with unconnected messages such as unconnected pings and pongs.
-   The GUIDS used by RakNet are 8 bytes long.
-   The first byte is used to identify the type of message.

## Data Types

| Type           | Size | Range           | Notes                                                          |
|----------------|------|-----------------|----------------------------------------------------------------|
| Byte           | 1    | 0-255           | An unsigned integer                                            |
| Long           | 8    | -2^63 to 2^63-1 | Signed 64 bit integer                                          |
| Magic          | 16   |                 | 00ffff00fefefefefdfdfdfd12345678 - Will always be those bytes  |
| Short          | 2    | -32768 to 32767 |                                                                |
| Unsigned Short | 2    | 0 to 65535      |                                                                |
| String         | N/A  | N/A             | A string prefixed by a short which depicts the length.         |
| Boolean        | 1    | 0-1             | 0x00 is False while 0x01 is True                               |
| Address        | 7    |                 | 1 byte for the ip version 4/6, 4 for the IP and 2 for the port |
| uint24le       | 3    |                 | 3-byte little-endian unsigned integer                          |

## Contents

<Checklist>

-   [x] Unconnected Pings
-   [x] Unconnected Pongs
-   [x] Open Connection Request 1
-   [x] Open Connection Reply 1
-   [x] Open Connection Request 2
-   [x] Open Connection Reply 2
- **From here on, the RakNet connection is established and all RakNet messages are contained in a [Frame Set Packet](https://wiki.vg/Raknet_Protocol#Frame_Set_Packet).**
-   [x] Connection Request
-   [x] Connection Request Accepted
-   [x] New Incoming Connection

</Checklist>

### Unconnected Pings

Minecraft Bedrock will send out a message to all listed servers (and the local network) to check if any games are available and retrieve the MOTD from the game. These messages are known as unconnected pings and are structured in this format:

`0x01 | client alive time in ms (unsigned long long) | magic | client GUID`

### Unconnected Pongs

After this message, the server will respond with something called an unconnected pong. The reason these messages are unconnected is because the client has not established a connection to the server. This is the format of an unconnected pong:

`0x1c | client alive time in ms (recorded from previous ping) | server GUID | Magic | string length | Edition (MCPE or MCEE for Education Edition);MOTD line 1;Protocol Version;Version Name;Player Count;Max Player Count;Server Unique ID;MOTD line 2;Game mode;Game mode (numeric);Port (IPv4);Port (IPv6);`

Example:

`MCPE;Dedicated Server;527;1.19.1;0;10;13253860892328930865;Bedrock level;Survival;1;19132;19133;`

The client doesn't seem to use the gamemode or the numeric value for the gamemode.


### Open Connection Request 1        |→ Client→Server

The client sends this when attempting to join the server

`0x05 | Magic | Protocol version	(currently 11 or 0x0b) | RakNet Null Padding`

The null padding seems to be used to discover the maximum packet size the network can handle.

The client will send this to the server with decreasing null padding until the server responds with a

### Open Connection Reply 1        |→ Server→Client

The server responds with this once the client attempts to join

`0x06 | magic | server GUID | ServerHasSecurity (boolean) | Cookie (uint32, if server has security) | MTU Size (Unsigned short)`

This is the first half of the handshake between the client and the server.

### Open Connection Request 2        |→ Client→Server

The client responds with this after they receive the open connection reply 1 packet.

`0x07 | magic | Cookie (uint32, if server has security) | Client supports security (Boolean(false), always false for the vanilla client, if server has security) | server Address | MTU Size (Unsigned short) | client GUID (Long)`

### Open Connection Reply 2        |→ Server→Client

This is the last part of the handshake between the client and the server.

`0x08 | magic | server GUID (Long) | client Address | MTU Size | security(Boolean)`

**From here on, all RakNet messages are contained in a [Frame Set Packet](https://wiki.vg/Raknet_Protocol#Frame_Set_Packet).**

### Connection Request        |→ Client→Server

This is the part where the client sends the connection request.

`0x09 | client GUID (Long) | Request timestamp (Long) | Secure (Boolean)`

### Connection Request Accepted        |→ Server→Client

The server sends this packet in response to the incoming connection request.
 
 `0x10 | client Address | System index (Short, unknown what this does. 0 works as a value (Minecraft client sends 47)) | System adresses ([]Address) | Ping time (Long) | Pong Time (Long)`

### New Incoming Connection        |→ Client→Server

Our RakNet connection is now fully successful.

`0x13 | server Address | internal Adress ([20(maybe 10)]Address) (i use 255.255.255.255:0) | Ping time (Long) | Pong Time (Long)`


### Note:
The next 2 packets ( and the first Minecraft Protocoll packet) are all send together as one by the vanilla client.
The RakNetProtocoll allows for them to be sent seperately too, 
however servers with a custom raknet implementation might not always handle this case 
because this never occurs within the vanilly client.

### New Incomming Connection

The client sends this packet in response to Connection Request Accepted.
 
 `0x13 | serverAddress (uint8) | clientMachineAddresses (address[10], Minecraft sends only one ipv6 together with a placeholder (see below) instead of the other 9) | clientSendTime (uint64) | serverSendTime (uint64)`

 placehodler for the other clientMachineAddresses (a.k.a. Internal Adresses):

 > 0xd4 0x0b 0xa7 0x86 0xdd 0x98 0x33 0x00 0x00
 each byte replaces one of the 9 missing clientMachineAdresses

After having sent this packet,
you must periodically sent a Connected Ping to keep the connection alive.
The server also sometimes sends a Connected Ping, respond with a Connected Pong.

### Connected Ping

The client sends this packet immeadiatly after/with New Incomming Connection.
This packet should be sent as unreliable.
The client/server will respond to this with a Connected Pong.

`0x00 | Time since start (uint64)`


### Connected Pong

The client or server sends this packet after having received a Connected Ping.
This packet should be sent as unreliable.

`0x00 | Time since start client (uint64) | Time since start server (uint64)`



## Sources
::: tip
If you are interested and want to read more about it here is the documentation for the Bedrock Protocol and RakNet:

[Mojang's Official Protocol Documentation](https://github.com/Mojang/bedrock-protocol-docs)

[RakNet Protocol Documentation](https://wiki.vg/Raknet_Protocol)

[another RakNet Protocol Documentation](https://github.com/vp817/RakNetProtocolDoc)
:::

This page is a WIP, feel free to contribute as it is still being worked on.

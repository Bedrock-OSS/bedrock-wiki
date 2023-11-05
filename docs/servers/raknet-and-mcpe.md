---
title: RakNet and MCPE
mentions:
    - ZestiiSpaghett
    - MedicalJewel105
    - SmokeyStack
    - ThomasOrs
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
| -------------- | ---- | --------------- | -------------------------------------------------------------- |
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

</Checklist>

### Unconnected Pings

Minecraft Bedrock will send out a message to all listed servers (and the local network) to check if any games are available and retrieve the MOTD from the game. These messages are known as unconnected pings and are structured in this format:

`0x01 | client alive time in ms (unsigned long long) | magic | client GUID`

### Unconnected Pongs

After this message, the server will respond with something called an unconnected pong. The reason these messages are unconnected is because the client has not established a connection to the server. This is the format of an unconnected pong:

`0x1c | client alive time in ms (recorded from previous ping) | server GUID | string length | Edition (MCPE or MCEE for Education Edition);MOTD line 1;Protocol Version;Version Name;Player Count;Max Player Count;Server Unique ID;MOTD line 2;Game mode;Game mode (numeric);Port (IPv4);Port (IPv6);`

Example:

`MCPE;Dedicated Server;527;1.19.1;0;10;13253860892328930865;Bedrock level;Survival;1;19132;19133;`

The client doesn't seem to use the gamemode or the numeric value for the gamemode.

### Open Connection Request 1

The client sends this when attempting to join the server

`0x05 | Magic | Protocol version	(currently 10 or 0x0a) | RakNet Null Padding`

The null padding seems to be used to discover the maximum packet size the network can handle.

The client will send this to the server with decreasing null padding until the server responds with a

## Open Connection Reply 1

The server responds with this once the client attempts to join

`0x06 | magic | server GUID | use encryption boolean (normally false) | RakNet Null Padding Size (Unsigned short, I use 1400)`

This is the first half of the handshake between the client and the server.

### Open Connection Request 2

The client responds with this after they receive the open connection reply 1 packet.

`0x07 | magic | server address | RakNet Null Padding Size | client GUID`

### Open Connection Reply 2

This is the last part of the handshake between the client and the server.

`0x08 | magic | server GUID | client address | Null Padding Size | use encryption`

### Connection Request

This is the part where the client sends the connection request.

`0x09 | client GUID | Request timestamp (Long) | Secure (Boolean, I use 0x00)`

### Connection Request Accepted

The server sends this packet in response to the incoming connection request.
 
 `0x10 | client Address | System index (Short, unknown what this does. 0 works as a value) | System adresses ([]Address) | Request timestamp (Long) | Accepted timestamp (Long)`

## Sources

[RakNet Documentation](https://wiki.vg/Raknet_Protocol)
[Game Packets](https://github.com/NiclasOlofsson/MiNET/blob/master/src/MiNET/MiNET/Net/MCPE%20Protocol%20Documentation.md)

This page is a WIP, feel free to contribute as it is still being worked on.

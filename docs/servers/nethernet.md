---
title: NetherNet Protocol
category: Protocols
mentions:
    - theaddonn
    - bedrock-crustaceans
description: NetherNet protocol for Bedrock.
---

Minecraft Bedrock uses multiple different protocols under the hood, one of them is NetherNet.
NetherNet is the main protocol used for xbox live sessions, and is based on web-rtc.

::: tip
NetherNet is quite new and not finished, it is not as well known and understood as RakNet is.
:::

Since we do not know too much about NetherNet, I can only refer to the [documentation made by df-mc](https://github.com/df-mc/nethernet-spec).

## Implementations

Not everything can be explained in great detail via documentation, that's why looking at existing implementations is very helpful.
Here is list of NetherNet implementations

<!-- Sorted roughly by how complete and actively maintained each project is. Please name entries as user/repo. -->

| Name                                                                                  | Description                                                       | Language               |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------- |
| [bedrock-crustaceans/nethernet](https://github.com/bedrock-crustaceans/nethernet)     | NetherNet implementation in Rust                                  | Rust                   |
| [df-mc/go-nethernet](https://github.com/df-mc/go-nethernet)                           | Go library implementing a basic version of the NetherNet protocol | Go                     |
| [PrismarineJS/node-nethernet](https://github.com/PrismarineJS/node-nethernet)         | NetherNet implementation in NodeJS                                | JavaScript, TypeScript |
| [Amber-PM/NetherNet](https://github.com/Amber-PM/NetherNet)                           | NetherNet implementation in PHP                                   | PHP                    |
| [Bedrock-Phanatics/nethernet-zig](https://github.com/Bedrock-Phanatics/nethernet-zig) | NetherNet implementation in Zig                                   | Zig                    |
| [bedrock-v/nethernet](https://github.com/bedrock-v/nethernet)                         | NetherNet implementation in V                                     | V                      |

This page is a WIP, feel free to contribute as it is still being worked on.

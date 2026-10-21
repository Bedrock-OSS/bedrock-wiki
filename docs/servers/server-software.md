---
title: Bedrock Server Software
category: Software
mentions:
    - SirLich
    - DevGod6969
    - NhanAZ
    - SmokeyStack
    - Joemanasdawd
    - mdisprgm
    - Superice666
    - vanistillhere
    - KanadeDev
    - HUYDGD
    - TheItsNameless
    - hvlxh
    - rac14
    - ThomasOrs
    - lapismyt
    - ModMaker101
    - Misledwater79
    - AzaleeX
    - wu-vincent
    - smartcmd
    - theaddonn
    - sculkmp
    - bedrock-crustaceans
    - QuazChick
    - OmniacDev
    - Chorus-OSS
    - KoshakMineDEV
    - MEFRREEX
    - Snowiiii
description: Software for Bedrock servers.
---

Minecraft servers allow players to play online or via a local area network with other people.
[You can download the official Mojang BDS software here](https://www.minecraft.net/en-us/download/server/bedrock).

Alongside the Vanilla BDS offering, many community projects exist, in a variety of languages.
These other projects get separated into Custom Server Software (Custom) and BDS-Based.

Types of Server Software:

-   Custom Server Software = Server software developed entirely from scratch.
-   BDS-Based = Server software built on top of BDS, with modifications.

You may observe a significant prevalence of Custom Server Software in comparison to BDS-Based solutions. This disparity can be attributed to several factors, the most notable of which are:

-   The lack of an official server software for an extended period, with the first release of BDS occurring on August 28, 2018, approximately seven years after the initial release of Bedrock Edition in 2011.
-   The removal of Symbols (also known as Mappings) in version 1.21.10, initially stripped to reduce the amount of information, which led to the decline of many BDS-Based software solutions.

## Active Software

<Table data="active_software.json" />

## Discontinued Software

<Table data="discontinued_software.json" />

## Adding Software

To keep this list useful, server software has to meet all of the following before it can be added to the active list:

-   **Publicly available.** There has to be something people can actually download and run, like a release, a nightly build or build instructions. The source code doesn't have to be public.
-   **At least 3 months old.** Counted from the first public commit or release.
-   **Actively developed.** It either supports one of the 3 latest protocol versions of stable or preview Bedrock Edition releases, or has had at least one commit or release in the last month. Automated commits (Dependabot, Renovate, etc.) don't count.
-   **At least 15 stars** on GitHub, or similar interest if it's hosted somewhere else or closed source.
-   **Its own README or website.** It should explain what the software is and how to use it.
-   **Clearly distinct from the original project.** Forks have to stand on their own: their own name and branding, a repository, README and docs that describe the fork rather than the original project, and meaningful changes to the code itself, like new features or support the original doesn't have. A renamed copy of another project isn't new server software. This includes the repository name. The only exception is a project the original maintainers officially handed over or point to as its continuation.

If your software meets these, add it to [`active_software.json`](https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/tables/servers/server-software/active_software.json) in alphabetical order and open a PR. Include a Discord or other community link if there is one.

Software is moved to the discontinued list once its repository is archived, or once it hasn't had any commits or releases for 6 months. If a discontinued project picks development back up and meets the requirements again, it can be moved back to the active list.

## Further Information

If you want to create your own server software/understand how they work, take a look into the [MCBE Protocol](./bedrock) and [RakNet](./raknet) documentation.

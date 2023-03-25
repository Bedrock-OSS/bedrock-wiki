---
title: On Player Death
category: On Event Systems
mention:
    - BedrockCommands
    - EziGotFliped
nav_order: 4
tags:
    - system
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This system will run your desired commands on the event that a player leaves the world.

:::tip
Note; you cannot execute commands on the players that leave but you can use [On Player Death](https://wiki.bedrock.dev/commands/on-player-death.html) system to execute when they join back.
:::

## Setup

*To be typed in chat:*

`/scoreboard objectives add total dummy`

## System

<CodeHeader>mcfunction</CodeHeader>

```yaml
/scoreboard players reset new total
/execute as @a run scoreboard players add new total 1
/scoreboard players operation new total -= old total

#Your Commands: (example)
/execute if score new total matches ..-1 run say a player has left the world

/scoreboard players reset old total
/execute as @a run scoreboard players add old total 1
```

![commandBlockChain6](/assets/images/commands/commandBlockChain/6.png)

Here we have used a **`/say`** command as an example but you can use any command you prefer and as many as you require.

Just make sure to follow the given order and properly use the `/execute if score` command as shown to run the commands you need.

## Explanation

**` new `** this FakePlayer name means the total number of players on the world in the current game tick.

**` old `** this FakePlayer name means the total number of players that were on the world in the previous game tick.

ㅤThese values are obtained using the <#992671972205019236> system.

By subtracting 'old' total from 'new' total we will be able to check if player count has:
- decreased ` ..-1 `
- increased ` 1.. `
- or if it's unchanged ` 0 `

If it has decreased; we know that 1 or more players have left the game.
With this knowledge we can run our desired commands from the 'new' FakePlayer name with -1 score or less in the objective **total**

The 'new' total value is obtained first, subtraction is performed after that to run your desired commands and lastly the 'old' total value is obtained.

> Note; all commands listed in a command-line will only run in a sequence but it all still happens in the same tick regardless of the number of commands involved.

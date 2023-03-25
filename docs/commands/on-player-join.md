---
title: On Player Join
category: On Event Systems
mention:
    - BedrockCommands
    - EziGotFliped
nav_order: 2
tags:
    - system
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This system will run your desired commands on the event that a players joins the world.

## Setup

*To be typed in chat:*

`/scoreboard objectives add joined dummy`

## System

<CodeHeader>mcfunction</CodeHeader>

```yaml
/scoreboard players add @a joined 0

#Your Commands Here (example)
/tp @a[scores={joined=0}] 0 65 0

/scoreboard players reset * joined
/scoreboard players set @a joined 1
```

![commandBlockChain4](/assets/images/commands/commandBlockChain/4.png)


Here we have used a `/tp` command as an example but you can use any command you prefer and as many as you require.

Just make sure to follow the given order and properly add the selector argument ` scores={joined=0} ` as shown for your desired commands.

## Explanation

When the player joins, a 0 is added to their objective, this allows us to run commands from them using the 'scores' selector argument.

Immediately after the commands are run, we reset all the scores on the objective using wildcard **` * `** and only players who stayed online will have their score set to 1.

And this way, since our commands only target players with the score 0, the commands won't repeat again for the players who stayed unless they leave and rejoin or if we run:
`/scoreboard players set <player> joined 0`

---
title: Scoreboard Timers
category: Scoreboard Systems
mention:
    - BedrockCommands
    - zheaEvyline
nav_order: 5
tags:
    - system
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This system allows you to run your desired commands at specific intervals with any amount of delay you wish to add.

- **Some Examples:**
    - Sending a message in chat every 2 hour.
    - Running a 'lag clear' function every 10 minutes.
    - Effecting players with 'speed' 30 seconds.
 
 This system is especially useful when you need to set up multiple timers on your world. When working with you may use the Tick Delay option to delay the time taken for your commands to run. However; when working with functions you will need to use a system like this.

It is also recommended to use this system while working with command blocks as well if you wish to run all your timers in sync with one another. ie. with the same start time.
 
## Setup

*To be typed in chat:*
<CodeHeader></CodeHeader>

```yaml
/scoreboard objectives add ticks dummy
/scoreboard objectives add events dummy
```

Once you have created these two objectives you will need to define the interval for each repeating event you need on your world in the `ticks` objective.

To do that first you must to know 1 second is approximately 20 game ticks in Minecraft. Based on this knowledge you will need to do some basic calculations to obtain the ticks equivalent for each interval you want to define.
<CodeHeader></CodeHeader>

```yaml
# 2h = 20t × 60s × 60m × 2 = 144000t
/scoreboard players set 20m ticks 144000

#10m = 20t × 60s × 10 = 12000t
/scoreboard players set 10m ticks 12000

#30s = 20t × 30s = 600t
/scoreboard players set 30s ticks 600
```
We will now use this scoreboard data to make our timers work as intended.

## System

<CodeHeader>mcfunction</CodeHeader>

```yaml
/scoreboard players add timer ticks 1
/scoreboard players operation * events = timer ticks

#Chat Message (every 2h)
/scoreboard players operation chatMessage events %= 2h ticks
/execute if score chatMessage events matches 0 run say Technoblade never dies!

#Lag Clear (every 10m)
/scoreboard players operation lagClear events %= 10m ticks
/execute if score lagClear events matches 0 run function clear_lag

#Speed Effect (every 30s)
/scoreboard players operation speedEffect events %= 30s ticks
/execute if score speedEffect events matches 0 run effect @a speed 10 2 true
```
![commandBlockChain8](/assets/images/commands/commandBlockChain/8.png)

Here we have taken 3 examples to give you an idea how to do it but ou can add any timer you need and as many as you require.

Just make sure to follow the given order and properly use the `/execute if score` command as shown to run the commands you need.

## Explanation

- **` new `** this FakePlayer name means the total number of players on the world in the current game tick.
- **` old `** this FakePlayer name means the total number of players that were on the world in the previous game tick but also saves the values to be used in the *next* game tick.

These values are obtained using the [Entity Counter](https://wiki.bedrock.dev/commands/entity-counter.html) system. It may be beneficial to refer to that doc for better understanding this one.

By subtracting 'old' total from 'new' total we will be able to identify if player count has:
- decreased ` ..-1 `
- increased ` 1.. `
- or if it's unchanged ` 0 `

If it has decreased; we know that 1 or more players have left the game.
With this knowledge we can run our desired commands from 'new' if it's score is -1 or less.
- ie, if there were 10 players and someone leaves:
  - that is ` new - old `
  - which is ` 9 - 10 = -1 `
  - hence we will detect by ` ..-1 `

- The 'new' total value is obtained first, subtraction is performed after that to run your desired commands and lastly the 'old' total value is obtained to be used in the next game tick.

:::tip
All commands involved in a command-block-chain or function will only run in a sequence one after the other but it all still happens in the same tick regardless of the number of commands involved. We are able to achieve this system due to the fact that commands run along the end of a game tick after all events such as player log in, log out, death etc.. occur.

![gametick](/assets/images/commands/gametick.png)
:::

---
title: Scoreboard Timers
category: Scoreboard Systems
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 5
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This system allows you to run your desired commands at specific intervals with any amount of delay that you wish to add.

- **Some Examples:**
    - Sending a message in chat every 2 hours.
    - Running a 'lag clear' function every 10 minutes.
    - Effecting players with 'speed' every 30 seconds.
 
 This system is especially useful when you need to set up multiple timers on your world. When working with command blocks, you may use the [Tick Delay](/commands/intro-to-command-blocks#command-block-tick-delay) option to delay the time taken for your commands to run. However, when working with functions you will need to use a system like this.

It is recommended to use this system while working with command blocks, as well if you wish to run all your timers in sync with one another, ie. with the same start time.
 
## Setup

*To be typed in chat:*
<CodeHeader></CodeHeader>

```yaml
scoreboard objectives add ticks dummy
scoreboard objectives add events dummy
```

Once you have created these two objectives, you will need to define the interval for each repeating event you need on your world in the `ticks` objective.

To do that, first you must know that **1 second is approximately 20 game ticks in Minecraft**. Based on this knowledge, you will need to do some basic calculations to obtain the ticks equivalent for each interval you want to define.
<CodeHeader></CodeHeader>

```yaml
# 2h = 20(t) × 60(s) × 60(m) × 2(h) = 144000t
scoreboard players set 2h ticks 144000

#10m = 20(t) × 60(s) × 10(m) = 12000t
scoreboard players set 10m ticks 12000

#30s = 20(t) × 30(s) = 600t
scoreboard players set 30s ticks 600
```
We will now use this scoreboard data to make our timers function.

## System

<CodeHeader>mcfunction</CodeHeader>

```yaml
scoreboard players add timer ticks 1
scoreboard players operation * events = timer ticks

#Chat Message (every 2h)
scoreboard players operation chatMessage events %= 2h ticks
execute if score chatMessage events matches 0 run say Technoblade never dies!

#Lag Clear (every 10m)
scoreboard players operation lagClear events %= 10m ticks
execute if score lagClear events matches 0 run function clear_lag

#Speed Effect (every 30s)
scoreboard players operation speedEffect events %= 30s ticks
execute if score speedEffect events matches 0 run effect @a speed 10 2 true
```
![commandBlockChain8](/assets/images/commands/commandBlockChain/8.png)

Here we have taken 3 examples to give you an idea on how to do it, but you can add any timer you need and as many as you require.

Just make sure to follow the given order and properly use the `/execute if score` command as shown to run the commands you need.

## Explanation

- **` events `** on this objective we label all the repeating events we want on our world.
    - `chatMessage`
    - `lagClear`
    - `speedEffect`
- **` ticks `** on this objective we define all the intervals for our events and also run our scoreboard timer.
    - ` 2h` interval (static score 144000)
    - `10m` interval (static score 12000)
    - `30s` interval (static score 600)
    - `timer` clock (variable score n+1)


- **Command 1:** this command adds +1 score every tick to FakePlayer name `timer` indicating a tick has passed in the game. This is basically our scoreboard timer/clock which we will use for all the repeating events on our world.


- **Command 2:** here we copy `timer` score to all our events using the ` * ` wildcard selector. This will allow us to perform operations to determine if the interval has been reached to run the commands for that particular event. Example:
    - If `timer` score is 1200 that means 1200 game ticks have passed.
    - And this command makes it so all our events FakePlayer names: `chatMessage`, `lagClear`, `speedEffect` scores are also 1200.


- **Command 3:** we will use the ` %= ` modulo operation to check if our event score is divisible by it's corresponding interval. A number is said to be divisible when the remainder is 0.
    - Chat Message: `1200/144000` Q=0, R=1200, *hence interval not reached.*
    - Lag Clear: `1200/12000` Q=0, R=1200, *hence interval not reached.*
    - Speed Effect: `1200/600` Q=2, R=0, *hence interval has reached and event commands can be executed.*
Here we can note that the first 2 events are yet to happen but the 3rd event is happening for the second time.
:::tip
In Minecraft; scoreboard division is only calculated up to whole numbers and decimal values are ignored.
![longDivision](/assets/images/commands/longDivision.png)
:::


- **Command 4:** the remainder value obtained from the calculation is applied to the corresponding event FakePlayer name. Based on this knowledge we can run our command if it's score is equal to 0.

The rest of the commands are identical in structure and only the event labels and interval values are changed.

## Defining Events With Limited Intervals

To limit how many times an event occurs, you will need to create a new objective called `intervals` and define how many times the event should occur like so:
<CodeHeader></CodeHeader>

```yaml
scoreboard objectives set chatMessage intervals 5
scoreboard objectives set speedEffect intervals 10
```

Once you have done that, modify your system from above like so:

<CodeHeader>mcfunction</CodeHeader>

```yaml
scoreboard players add timer ticks 1
scoreboard players operation * events = timer ticks

#Chat Message (every 10m)
scoreboard players operation chatMessage events %= 2h ticks
execute if score chatMessage events matches 0 if score chatMessage intervals matches 1.. run say Technoblade never dies!
execute if score chatMessage events matches 0 if score chatMessage intervals matches 1.. run scoreboard players remove chatMessage intervals 1

#Speed Effect (every 30s)
scoreboard players operation speedEffect events %= 30s ticks
execute if score speedEffect events matches 0 if score speedEffect intervals matches 1.. run effect @a speed 10 2 true
execute if score speedEffect events matches 0 if score speedEffect intervals matches 1.. run scoreboard players remove speedEffect intervals 1
```
![commandBlockChain8](/assets/images/commands/commandBlockChain/8.png)

## Executing Commands During Timeframe

To run commands during the timeframe between intervals for a particular system you may do something like this:
<CodeHeader>mcfunction</CodeHeader>

```yaml
#Speed Effect (every 30s) + Particle (every tick)
scoreboard players operation speedEffect events %= 30s ticks
execute if score speedEffect intervals matches 1.. as @a at @s run particle minecraft:shulker_bullet ~~~
execute if score speedEffect events matches 0 if score speedEffect intervals matches 1.. run effect @a speed 10 2 true
execute if score speedEffect events matches 0 if score speedEffect intervals matches 1.. run scoreboard players remove speedEffect intervals 1
```
As shown in line 3; to run commands while the timer is running, all you need to do is remove the "if score" testing if the interval has been reached. And instead, only test if *any* interval is left, to run our commands.

Let's say we had set the intervals for this event to 10, then that means players would also have particle trails for 300 seconds since `10*30s=300s`

## Entity Timers

In some cases such as an entity despawn event you will need to run timers for each entity individually rather than a synchronised timer which could cause the event to trigger too soon. In such cases an Async Timer can be helpful.

Let's say we want to:
- kill all entities named "station" 5 minutes after they've been summoned.
- play a shulker particle around them during that timeframe.
- play a flame particle around them in the first 10 seconds.
- play a pling sound to nearby players when the timer reaches half way.
- stop the timer if a passive mob is nearby.
- loop the timer if a hostile mob is nearby.

<CodeHeader>mcfunction</CodeHeader>

```yaml
#Clock
scoreboard players add @e [name=station, scores={ticks=0..}] ticks 1

#Executing Commands while timer is running
execute as @e [name=station, scores={ticks=0..}] at @s run particle minecraft:shulker_bullet ~~~

#Executing commands within a timeframe
execute as @e [name=station, scores={ticks=0..200}] at @s run particle minecraft:basic_flame_particle ~~~

#Executing commands at specific intervals
execute as @e [name=station, scores={ticks=3600}] at @s run playsound note.pling @a [r=10]

#Stopping the timer
execute as @e [name=station] at @s if entity @e [family=pacified, r=10, c=1] run scoreboard players set @s ticks -1

#Looping the timer
execute as @e [name=station, scores={ticks=6000}] at @s if entity @e [family=monster, r=10, c=1] run scoreboard players set @s ticks 0

#End
kill @e [name=station, scores={ticks=6000}]
```
![commandBlockChain7](/assets/images/commands/commandBlockChain/7.png)

As shown; setting the score to 0 when it completes the timeframe will loop the timer and setting the score to -1 will stop/disable it. You can still set the score to 0 to start the timer again.

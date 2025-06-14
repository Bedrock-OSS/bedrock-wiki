---
title: Scoreboard Timers
category: Scoreboard Systems
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 5
description: Create world timers or entity timers using scoreboards.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

This system allows you to run your desired commands at precise intervals, allowing for customizable delays as per your requirements.

**Some Examples:**

-   Sending a message in chat every 2 hours.
-   Running a 'lag clear' function every 10 minutes.
-   Effecting players with 'speed' every 30 seconds.

This system is particularly useful for managing multiple timers in your world. When working with command blocks, you may use the [Tick Delay](/commands/intro-to-command-blocks#command-block-tick-delay) option to delay the time taken for your commands to run. However, when working with functions, you will need to use a system like this.

It is recommended to use this system while working with command blocks, as well if you wish to run all your world-timers in sync with one another, i.e., with the same start time.

## Setup

_To be typed in chat:_

<CodeHeader></CodeHeader>

```yaml
/scoreboard objectives add wiki:ticks dummy
/scoreboard objectives add wiki:events dummy
```

After creating these objectives, the next step is to define the interval for each repeating event using the `ticks` objective.

To do that, first, you must know that 1 second is approximately 20 game-ticks in Minecraft. Based on this knowledge, you will need to do some basic calculations to obtain the equivalent ticks for each interval you want to define.

<CodeHeader></CodeHeader>

```yaml
# 2h = 20t × 60s × 60m × 2h = 144000t
/scoreboard players set .2h wiki:ticks 144000

# 10m = 20t × 60s × 10m = 12000t
/scoreboard players set .10m wiki:ticks 12000

# 30s = 20t × 30s = 600t
/scoreboard players set .30s wiki:ticks 600
```

With the scoreboard data set, we can now operate our timers based on the intervals defined.

## System

<CodeHeader>BP/functions/wiki/scoreboard/world_timer.mcfunction</CodeHeader>

```yaml
## World Timer/Clock
### Increment +1 tick
scoreboard players add .Timer wiki:ticks 1
### Apply current ticks passed to all events
scoreboard players operation * wiki:events = .Timer wiki:ticks

## Chat Message (every 2h)
scoreboard players operation .ChatMessage wiki:events %= .2h wiki:ticks
execute if score .ChatMessage wiki:events matches 0 run say Technoblade never dies!

## Lag Clear (every 10m)
scoreboard players operation .LagClear wiki:events %= .10m wiki:ticks
execute if score .LagClear wiki:events matches 0 run function clear_lag

## Speed Effect (every 30s)
scoreboard players operation .SpeedEffect wiki:events %= .30s wiki:ticks
execute if score .SpeedEffect wiki:events matches 0 run effect @a speed 10 2 true
```

![Chain of 8 Command Blocks](/assets/images/commands/command-block-chain/8.png)

Here, we have taken 3 examples to show how to implement them, but you can add any timer you prefer and as many as you need.

Just make sure to follow the given order and properly apply the `/execute if score` condition as shown for your desired commands.

## Explanation

**`wiki:events`** — On this objective, we label all the repeating events we want on our world:

-   `.ChatMessage`
-   `.LagClear`
-   `.SpeedEffect`

_Note: All 3 are score holders in the objective._

**`wiki:ticks`** — On this objective, we define all the intervals for our events and also run our scoreboard timer:

-   ` .2h ` interval (static score: 144000)
-   ` .10m ` interval (static score: 12000)
-   ` .30s ` interval (static score: 600)
-   ` .Timer ` clock (variable score: n+1)

_Note: All 4 are score holders in the objective._

**Command 1:** This command adds +1 score every tick to the score holder `.Timer` indicating a tick has passed in the game. This is basically our scoreboard timer/clock which we will use for all the repeating events on our world.

**Command 2:** Here, we copy '.Timer' score to all our events using the `*` wildcard selector. This will allow us to perform operations to determine if the interval has been reached to run the commands for that particular event. Example:

-   If `.Timer` score is 1200, it means 1200 game-ticks have passed.
-   This command makes it so all our events score holders (`.ChatMessage`, `.LagClear`, `.SpeedEffect`) scores are also 1200.

**Command 3:** We will use the `%=` modulo operation to check if our event scores are divisible by their assigned interval. i.e., if the remainder is equal to 0.

-   Chat Message: `1200/144000`
    -   Q=0, R=1200 — _interval not reached._
-   Lag Clear: `1200/12000`
    -   Q=0, R=1200 — _interval not reached._
-   Speed Effect: `1200/600`
    -   Q=2, R=0 — _interval reached._
    -   Hence, commands for the `.SpeedEffect` event can be executed.

Here, we can note that the `.ChatMessage` and `.LagClear` events are yet to happen, but the `.SpeedEffect` event is happening for the second time.

Note: In Minecraft, scoreboard division is floored, i.e., it's only calculated up to whole numbers and decimal values are ignored.

**Command 4:** the remainder obtained from the calculation is applied to the corresponding event's score holder. Based on this knowledge, we can run our commands if it's score is equal to `0`.

The remaining commands follow the same structure, with only the event labels and interval durations modified.

## Defining Events with Limited Occurances

To limit how many times an event occurs, you need to create a new objective called `wiki:occurances` and define how many times that event should occur, as shown below.

<CodeHeader></CodeHeader>

```yaml
/scoreboard objectives add wiki:occurances dummy
/scoreboard players set .ChatMessage wiki:occurances 5
/scoreboard players set .SpeedEffect wiki:occurances 10
```

Once you have done that, modify your system as shown below.

<CodeHeader>BP/functions/wiki/scoreboard/world_timer.mcfunction</CodeHeader>

```yaml
## World Timer/Clock
### Increment +1 tick
scoreboard players add .Timer wiki:ticks 1
### Apply current time to all events
scoreboard players operation * wiki:events = .Timer wiki:ticks

## Chat Message (every 10m)
scoreboard players operation .ChatMessage wiki:events %= .2h wiki:ticks
execute if score .ChatMessage wiki:events matches 0 if score .ChatMessage wiki:occurances matches 1.. run say Technoblade never dies!
execute if score .ChatMessage wiki:events matches 0 if score .ChatMessage wiki:occurances matches 1.. run scoreboard players remove .ChatMessage wiki:occurances 1

## Speed Effect (every 30s)
scoreboard players operation .SpeedEffect wiki:events %= .30s wiki:ticks
execute if score .SpeedEffect wiki:events matches 0 if score .SpeedEffect wiki:occurances matches 1.. run effect @a speed 10 2 true
execute if score .SpeedEffect wiki:events matches 0 if score .SpeedEffect wiki:occurances matches 1.. run scoreboard players remove .SpeedEffect wiki:occurances 1
```

![Chain of 8 Command Blocks](/assets/images/commands/command-block-chain/8.png)

## Executing Commands During Intervals

To run commands continuously between the intervals of an event, you may use the technique shown below.

<CodeHeader></CodeHeader>

```yaml
## Speed Effect (every 30s) + Particle (every tick)
scoreboard players operation .SpeedEffect wiki:events %= .30s wiki:ticks
execute if score .SpeedEffect wiki:occurances matches 1.. as @a at @s run particle minecraft:shulker_bullet ~~~
execute if score .SpeedEffect wiki:events matches 0 if score .SpeedEffect wiki:occurances matches 1.. run effect @a speed 10 2 true
execute if score .SpeedEffect wiki:events matches 0 if score .SpeedEffect wiki:occurances matches 1.. run scoreboard players remove .SpeedEffect wiki:occurances 1
```

As shown in line 3, to run commands while the timer is running, all you need to do is remove the `if score` condition testing if all occurances took place. And instead, only test if any occurance remains, to run our commands.

Let's say we had set the `wiki:occurances` for this event to `10`. Then players would've also had a particle trail for 300 seconds as repeating a 30s event 10 times will total 300 seconds.

## Entity Timers

In some cases, such as an entity despawn event, you will need to run timers for each entity separately rather than a synchronised timer which could cause the event to trigger too soon. In such cases, an Async Timer can be helpful.

Let's say we want to perform the following actions:

1. kill all entities named "wiki:station" 5 minutes after they've been summoned.
2. play a shulker particle around them during that timeframe.
3. play a flame particle around them in the first 10 seconds.
4. play a pling sound to nearby players when the timer reaches half way.
5. stop the timer if a passive mob is nearby.
6. loop the timer if a hostile mob is nearby.

<CodeHeader>BP/functions/wiki/scoreboard/players/entity_timer.mcfunction</CodeHeader>

```yaml
## Running the Timer
scoreboard players add @e[name="wiki:station",scores={wiki:ticks=0..}] wiki:ticks 1

# Executing Commands While Timer Is Running
execute as @e[name="wiki:station",scores={wiki:ticks=0..}] at @s run particle minecraft:shulker_bullet ~~~

# Executing Commands Within a Timeframe
execute as @e[name="wiki:station",scores={wiki:ticks=0..200}] at @s run particle minecraft:basic_flame_particle ~~~

# Executing Commands at Precise Intervals
execute as @e[name="wiki:station",scores={wiki:ticks=3600}] at @s run playsound note.pling @a[r=10]

# Stopping the Timer
execute as @e[name="wiki:station"] at @s if entity @e[family=pacified,r=10,c=1] run scoreboard players set @s ticks -1

# Looping the Timer
execute as @e[name="wiki:station",scores={wiki:ticks=6000}] at @s if entity @e[family=monster,r=10,c=1] run scoreboard players set @s ticks 0

# End of Timer
kill @e[name="wiki:station",scores={wiki:ticks=6000}]
```

![Chain of 7 Command Blocks](/assets/images/commands/command-block-chain/7.png)

As shown, setting the score to `0` when it completes the timeframe will loop the timer. And setting the score to `-1` will stop/disable it. You can still set the score to `0` to start the timer again.

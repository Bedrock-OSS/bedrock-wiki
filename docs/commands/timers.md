---
title: Basic Timer
category: Scoreboard Systems
tags:
    - system
mention:
    - Hatchibombotar
nav_order: 2
---

## Introduction

When creating mechanics or waiting for a set amount of time, it can be useful to create timers using only mcfunction files.

:::tip
This page is for using commands to create timers, for entity timers, look at [this page](/entities/timers)
:::

## How To Make Them

### Start Timer

<CodeHeader>BP/functions/timer_start.mcfunction</CodeHeader>

```
scoreboard objectives add timer dummy
scoreboard players set value timer 100
```
To start your timer, you need to create the scoreboard, and set the value that you are going to count down from.

The time left on the timer (currently set here as 100) should be in ticks.
- 20 ticks = 1 second
- 100 ticks = 100/20 = 5 seconds

### Counting Down

<CodeHeader>BP/functions/timer_tick.mcfunction</CodeHeader>

```
scoreboard players remove value timer 1
execute if score value timer matches 0.. run function timer_events
execute if score value timer matches -1 run scoreboard objectives remove timer
```
Each tick, you want the timer to go down by 1.
And, as long as the timer is above 0, you run the timer events.
Once the timer gets to -1, remove the scoreboard

<CodeHeader>BP/functions/tick.json</CodeHeader>

```json
{
    "values": [
        "timer_tick"
    ]
}
```
In order to get the `timer_tick` function to run every tick, you need to include it in your `tick.json` file.

### Running Commands When The Timer Is Over

<CodeHeader>BP/functions/timer_events.mcfunction</CodeHeader>

```
execute if score value timer matches 0 run function timer_up
```

Inside your `timer_events` file, you want to run a command once the timer reaches 0. The `timer_up` function include the commands you want to run once it has finished.

### Running Commands When The Timer Is Running

You could also run commands while the timer is running:

<CodeHeader>BP/functions/timer_events.mcfunction</CodeHeader>

```
execute if score value timer matches 50 run say Half Way!
execute if score value timer matches 0 run say Finished!
```

## End Result

![](/assets/images/commands/timers/timer.gif)

You can also view an example timer pack here:

<BButton
	link="https://github.com/Bedrock-OSS/wiki-addon/releases/download/download/mcfunction_timers.mcpack"
	color=white
>Download Example Pack</BButton>

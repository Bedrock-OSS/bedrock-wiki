---
title: Command Timer
category: General
tags: 
    - experimental
mention:
    - Hatchibombotar
---

:::warning
This document covers experimental features, for 1.19.10+ mcfunctions.
:::

## Introduction
When creating mechanics or waiting for a set amount of time, it can be useful to create timers using only mcfunction files.

:::tip
This page is for using commands to create timers, for entity timers, look at [this page](https://wiki.bedrock.dev/entities/timers.html)
:::

## How to make them
### Start timer
<CodeHeader>BP/functions/timer_start.mcfunction</CodeHeader>

```
scoreboard objectives add timer dummy
scoreboard players add value timer 100
```
To start your timer, you need to create the scoreboard, and set the value that you are going to count down from.

The time left on the timer (currently set here as 100) should be in ticks.

20 ticks = 1 second
(5s * 20 = 100)

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

### Running commands when the timer is over

<CodeHeader>BP/functions/timer_events.mcfunction</CodeHeader>

```
execute if score value timer matches 0 run function timer_up
```

Inside your `timer_events` file, you want to run a command once the timer reaches 0. The `timer_up` function include the commands you want to run once it has finished.

### Running commands when the timer is running
You could also run commands while the timer is running:

<CodeHeader>BP/functions/timer_events.mcfunction</CodeHeader>

```
execute if score value timer matches 50 run say Half Way!
execute if score value timer matches 0 run say Finished!
```

## End result

![](/assets/images/commands/timers/timer.gif)

You can also view an example timer pack here:

<BButton
	link="/assets/packs/tutorials/mcfunction-timers/example_timer_pack.mcpack" download
	color=gray
>Download Example Pack</BButton>
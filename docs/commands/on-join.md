---
title: On Join
category: On Event Systems
mention:
    - BedrockCommands
    - EziGotFliped
nav_order: 2
---

## Introduction

This system will run your desired commands on the event that a players joins the world.

## Setup

*To be typed in chat:*<br>
`/scoreboard objectives add joined dummy`

## System

*mcfunction / Command Line:*
```
/scoreboard players add @a joined 0

#Your Commands Here (example)
/tp @a[scores={joined=0}] 0 65 0

/scoreboard players reset * joined
/scoreboard players set @a joined 1
```
![export1674579202856](https://user-images.githubusercontent.com/99989764/214433884-f718e120-d7fd-47c5-8d0d-89328d02ca23.png)<br>
Here we have used a `/tp` command as an example but you can use any command you prefer and as many as you require.<br>
Just make sure to follow the given order and properly add the selector argument ` scores={joined=0} ` as shown for your desired commands.

## Explanation

When the player joins, a 0 is added to their objective, this allows us to run commands from them using the 'scores' selector argument.<br>
Immediately after the commands are run, we reset all the scores on the objective using wildcard **` * `** and only players who stayed online will have their score set to 1.<br>
And this way, since our commands only target players with the score 0, the commands won't repeat again for the players who stayed unless they leave and rejoin or if we run:<br>
`/scoreboard players set <player> joined 0`<br>
<br>
<br>

[Sourced By Bedrock Commands | Community & Archive](https://discord.gg/SYstTYx5G5)

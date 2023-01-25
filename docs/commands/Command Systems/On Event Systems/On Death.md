---
title: On Death
category: On Event Systems
mention:
	- BedrockCommands
mention:
	- EziGotFliped
nav_order: 4
---

## Introduction

This system will run your desired commands on the event that a player dies.

## Setup

*To be typed in chat:*<br>
`/scoreboard objectives add alive dummy`

## System

*mcfunction / Command Line:*
```mcfunction
/scoreboard players set @a [scores={alive=!2}] alive 0
/scoreboard players set @e [type=player] alive 1


#Your Commands Here (example)
/execute as @a [scores={alive=0}] run say I died


/scoreboard players set @a [scores={alive=0}] alive 2
```
![export1674579202856](https://user-images.githubusercontent.com/99989764/214433884-f718e120-d7fd-47c5-8d0d-89328d02ca23.png)<br>
Here we have used an `/execute - say` command as an example but you can use any command you prefer and as many as you require.<br>
Just make sure to follow the given order and properly add the selector argument ` scores={alive=0} ` as shown for your desired commands.

## Explanation

**` alive=0 `** this means player is dead.<br>
**` alive=1 `** this means player is alive.<br>
**` alive=2 `** this means player is dead and we have run our desired commands on/from them.<br>
<br>

**` @a `** selector will target all players alive/dead so we use it to mark everyone as 0 'dead.'<br>
> Note; we will ignore 2 or it will end up making the commands execute on dead players again. We only want our commands to execute once.<br>
<br>

**` @e `** selector on the other hand will only target players who are alive, so we can use this to mark all alive players 1 'alive.'<br>
<br>

Now that dead players are 0 and alive players are 1 we can use this knowledge to run our desired commands on the dead players.
> Keep in mind we need to set their score to 2 after or otherwise the commands will keep executing till they respawn.<br>
<br>
<br>

[Sourced By Bedrock Commands | Community & Archive](https://discord.gg/SYstTYx5G5)

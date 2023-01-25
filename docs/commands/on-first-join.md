---
title: On First Join
category: On Event Systems
mention:
    - BedrockCommands
    - EziGotFliped
nav_order: 1
---

## Introduction

This system will run your desired commands on the event that a player joins the world for the first time.

## System

ㅤ*mcfunction / Command Line:*
```
#Your Commands Here (examples)
/give @a [tag=!joined] stone_pickaxe
/give @a [tag=!joined] bread 16 1

/tag @a [tag=!joined] add joined
```
![export1674579137294](https://user-images.githubusercontent.com/99989764/214612590-1555d2fd-9a68-4e28-ae7f-d1768e21dff2.png)

Here we have used 2 `/give` commands as example but you can use any command you prefer and as many as you require.<br>
Just make sure to follow the given order and properly add the selector argument ` tag=!joined ` as shown for your desired commands.

## Explanation

When the player joins the world for the first time, they will not have the joined tag.<br>
Once we run our desired commands for players without the tag, they will be given the tag immediately and the commands will not repeat for them again unless we remove their tag with:<br>
`/tag <player> remove joined`<br>
<br>
<br>

[Sourced By Bedrock Commands | Community & Archive](https://discord.gg/SYstTYx5G5)

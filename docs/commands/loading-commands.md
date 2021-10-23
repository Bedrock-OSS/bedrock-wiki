---
title: Loading Commands

mention:
 - MedicalJewel105
---

Have you ever wanted to execute command on a player who joined world for the first time? 
If yes, this tutorial will be useful for you.

## Features:
 - Execute command on player who joined world for the first time
 - No player.json
 - No experimental gameplay needed

 ## Concept

 Idea of this tutorial is simple:

 tick.json runs function that executes a command on everyone who doesn't have a special tag and then adds this tag.

 ## tick.json

 You can understand how tick.json works here:

 [tick.json explanation](/commands/mcfunction.html#creating-tick-json)

 <CodeHeader>BP/functions/tick.json</CodeHeader>

```json
{
    "values":[
        "load_commands"
    ]
}
```

## Function

To show that it works, tellraw command were used

<CodeHeader>BP/functions/load_commands.mcfunction</CodeHeader>

```
tellraw @a[tag=!joined] {"rawtext":[{"text":"This is greeting message."}]}
tag @a add joined
```

## Result

![](/assets/images/commands/loading-commands/loading-commands-showcase.gif)

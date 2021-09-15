---
title: Greeting Message

mention:
 - MedicalJewel105
---

Have you ever wanted to tell something to people who used your add-on?
If yes, this tutorial will be useful for you.

## Features:
 - Send message to player who joined world with this add-on for the first time
 - Translatable
 - Compatible to other add-ons
 - No experimental gameplay needed

 ## Concept

 Idea of this tutorial is very simple:

 tick.json runs funtion that tellraws message to everyone who doesn't have a special tag and then adds this tag

 ## tick.json

 You can understang how tick.json works here:

 [tick.json explanation](/commands/mcfunction.html#creating-tick-json)

 <CodeHeader>BP/functions/my_greeting_message.json</CodeHeader>

```json
{
    "values":[
        "my_greeting_message"
    ]
}
```

## Function

Learn how tellraw works:

 [Tellraw](/commands/tellraw)

<CodeHeader>BP/functions/my_greeting_message.json</CodeHeader>

```
tellraw @a[tag=!readed_greeting_message] {"rawtext":[{"text":"This is greeting message."}]}
tag @a add readed_greeting_message
```

## Result

![](/assets/images/commands/greeting-message/greeting-message-showcase.gif)

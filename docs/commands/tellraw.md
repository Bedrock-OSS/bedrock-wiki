---
title: Tellraw & Titleraw Rawtext JSON Components
category: Commands
mention:
  - BedrockCommands
  - GTB3NW
  - SpacebarNinja
description: Understanding Rawtext JSON Components used in the `/tellraw`  and `/titleraw` commands.
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

![](/assets/images/documentation/tellrawshow.png)

Rawtexts are used to send and display rich text to players. This can be used in a `/tellraw` or `/titleraw` command.

Inside the squared brackets `[]`, this is where you will list multiple text objects of your choice.

```json
{"rawtext":[]}
```

You can combine components by adding a comma ` , ` at the end of a component.

## Text Component

Displays a text. Used inside the quotation marks.

**Syntax:**

```json
{"text" :"<Your Text Here>"}
```

**Example:**

Send a "Hello everyone!" message to all players in chat:

```json
/tellraw @a {"rawtext":[{"text":"Hello everyone!"}]}
```

It also supports breaks, line breaks, and unicodes.

Breaks are accessed as ` \ ` and are used in order to use quotation marks ` " ` within components. Example:

```json
/tellraw @a {"rawtext":[{"text":"He said, \"I like apples\"..."}]}
#Output in chat:
#    He said, "I like apples"...
```

Line breaks are used as ` \n ` to go down a line. Example:

```json
/tellraw @a {"rawtext":[{"text":"Hello\nNext line"}]}
#Output in chat:
#    Hello
#    Next line
```

Unicodes provides a unique number that displays an icon/emoji. Example:
```json
/tellraw @a {"rawtext":[{"text":"\u263a"}]}
```
- Output in chat:
    - ![](/assets/images/concepts/emojis/hud/food.png)
> Note: the unicode symbol will display as it's corresponding icon/emoji in Minecraft only.

For more info and the full list of unicodes available in Bedrock, refer to the [Emojis & Symbols](/concepts/emojis) page.

## Selector Component

Displays the name of a target of your choice. Target Selector arguments are allowed.

**Syntax:**

```json
{"selector":"<target>"}
```

**Examples:**

1. Send name of all players in chat:
```json
/tellraw @a {"rawtext":[{"selector":"@a"}]}
```
2. Send name of all players tagged 'winner' in chat:
```json
/tellraw @a {"rawtext":[{"selector":"@a [tag=winner]"}]}
```

## Score Component

Displays a score from a scoreboard objective.

**Syntax:**
```json
{"score":{"name":"<name>", "objective":"<score>"}}
```

- **` name `** - This can be any selector like `@p` or a player's name.
    - You can also use the **` * `** wildcard to display the reader's own score.
- **` objective `** - The name of the scoreboard you want to display the score from.

Both are required when using the score component.

**Examples:**

1. Display the points score of the closest player in chat:
```json
/tellraw @a {"rawtext" :[{"score":{"name":"@p","objective":"points"}}]}
```
2. Display the money score of the reader in chat:
```json
/titleraw @a title {"rawtext":[{"score":{"name":"*","objective":"money"}}]}
```

## Translate Component

Allows creators to display localized text to users. The list of the strings to translate is inside in the language files. Refer to [Text & Translations](https://wiki.bedrock.dev/concepts/text-and-translations) page for more info.

**Syntax:**

```json
{"translate":"<string>"}
```

**Example:**

```json
/tellraw @a {"rawtext":[{"translate""multiplayer.player.joined"}]}
#Output in chat:
#    %s joined the game
```

In the example above, it outputs "`%s joined the game`". For a name to appear instead of `%s`, ` with ` needs to be specified as well. Requires an array ` [] ` instead of curly brackets ` {} `

```json
/tellraw @a {"rawtext":[{"translate":"multiplayer.player.joined", "with": ["Steve"]}]}
#Output in chat:
#    Steve joined the game
```

![](/assets/images/documentation/tellrawtranslate.png)

### %%s

`translate` and `%s` can be used without a matching string in the localization files. For example:

```json
/tellraw @a {"rawtext":[{"translate":"Hello %%s", "with":["Steve"]}]}
#Output in chat:
#    Hello Steve
```


### Multiple %s

`%%s` can be used multiple times. They are filled in the order as shown.

```json
/tellraw @a {"rawtext":{"translate":"Hello %%s and %%s", "with":["Steve","Alex"]}]}
#Output in chat:
#    Hello Steve and Alex
```

### Ordering with %%#

The order to fill in ` %s ` can be changed by replacing ` s ` with a number at the end. For example, to swap the position of Steve and Alex in the above example:

```json
/tellraw @a {"rawtext":[{"translate":"Hello %%2 and %%1", "with":["Steve","Alex"]}]}
#Output in chat:
#    Hello Alex and Steve
```

And instead of an array, you can use a rawtext component, like so.

```json
/tellraw @a {"rawtext":[{"translate":"Hello %%s and %%s","with": {"rawtext":[{"text":"Steve"},{"translate":"item.apple.name"}]}}]}
#Output in chat:
#    Hello Steve and Apple
```

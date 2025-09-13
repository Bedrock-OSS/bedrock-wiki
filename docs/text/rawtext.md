---
title: Raw Text
description: Understanding raw text JSON components used in the /tellraw and /titleraw commands.
category: General
mentions:
    - BedrockCommands
    - GTB3NW
    - SpacebarNinja
    - zheaEvyline
    - QuazChick
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

![](/assets/images/text/rawtext/tellraw.png)

Raw text is used to send and display rich text to players. This can be used in a `/tellraw` or `/titleraw` command.

Inside the squared brackets `[]`, this is where you will list multiple text objects of your choice.

```json
{ "rawtext": [] }
```

You can combine components by adding a comma `,` at the end of a component.

## Text Component

Displays a regular string of text. Used inside the quotation marks.

**Syntax:**

```json
{ "text": "<Your Text Here>" }
```

**Example:**

Send a "Hello everyone!" message to all players in chat:

```json
/tellraw @a { "rawtext": [{ "text": "Hello everyone!" }] }
```

### Escapes, Line Breaks, And Unicodes

1. Escapes are accessed as `\` and are used in order to use quotation marks `"` within components. Example:

    ```json
    /tellraw @a { "rawtext": [{ "text": "He said, \"I like apples\"..." }] }
    #Output in chat:
    #    He said, "I like apples"...
    ```

2. Line breaks are used as `\n` to go down a line. Example:

    ```json
    /tellraw @a { "rawtext": [{ "text": "Hello\nNext line" }] }
    #Output in chat:
    #    Hello
    #    Next line
    ```

3. Unicodes provides a unique number that displays an icon/emoji. Example:

    ```json
    /tellraw @a { "rawtext": [{ "text": "\ue100" }] }
    ```

    - Output in chat:

        ![](/assets/images/text/emojis/hud/shank.png)

    Note: the unicode symbol will display as it's corresponding icon/emoji in Minecraft only.

    For more info and the full list of unicodes available in Bedrock, refer to the [Emojis & Symbols](/text/emojis) page.

## Selector Component

Displays the name of a target of your choice. Target Selector arguments are allowed.

**Syntax:**

```json
{ "selector": "<target>" }
```

**Examples:**

1. Send name of all players in chat:

```json
/tellraw @a { "rawtext": [{ "selector": "@a" }] }
```

2. Send name of all players tagged 'wiki:winner' in chat:

```json
/tellraw @a { "rawtext": [{ "selector": "@a[tag=wiki:winner]" }] }
```

## Score Component

Displays a score from a scoreboard objective.

**Syntax:**

```json
{ "score": { "name": "<name>", "objective": "<score>" } }
```

-   **`name`** - This can be any selector like `@p` or a player's name.
    -   You can also use the **`*`** wildcard to display the reader's own score.
-   **`objective`** - The name of the scoreboard you want to display the score from.

Both are required when using the score component.

**Examples:**

1. Display the `wiki:points` score of the closest player in chat:

```json
/tellraw @a { "rawtext": [{ "score": { "name": "@p", "objective": "wiki:points" } }] }
```

2. Display the `wiki:money` score of the reader in chat:

```json
/titleraw @a title { "rawtext": [{ "score": { "name": "*", "objective": "wiki:money" } }] }
```

## Translate Component

Allows creators to display localized text to users. The list of the strings to translate is inside in the language files. Refer to the [text guide](https://wiki.bedrock.dev/text/text-intro) page for more info.

**Syntax:**

```json
{ "translate": "<string>" }
```

**Example:**

```json
/tellraw @a { "rawtext": [{ "translate": "multiplayer.player.joined" }] }
#Output in chat:
#    %s joined the game
```

In the example above, it outputs "`%s joined the game`". For a name to appear instead of `%s`, `with` needs to be specified as well. Requires an array `[]` instead of curly brackets `{}`

```json
/tellraw @a { "rawtext": [{ "translate": "multiplayer.player.joined", "with": ["Steve"] }] }
#Output in chat:
#    Steve joined the game
```

![](/assets/images/text/rawtext/translations.png)

### %%s

`translate` and `%s` can be used without a matching string in the localization files. For example:

```json
/tellraw @a { "rawtext": [{ "translate": "Hello %%s", "with": ["Steve"] }] }
#Output in chat:
#    Hello Steve
```

### Multiple %%s

`%%s` can be used multiple times. They are filled in the order as shown.

```json
/tellraw @a { "rawtext": [{ "translate": "Hello %%s and %%s", "with": ["Steve","Alex"] }] }
#Output in chat:
#    Hello Steve and Alex
```

### Ordering with %%#

The order to fill in `%s` can be changed by replacing `s` with a number at the end. For example, to swap the position of Steve and Alex in the above example:

```json
/tellraw @a { "rawtext": [{ "translate": "Hello %%2 and %%1", "with": ["Steve","Alex"] }] }
#Output in chat:
#    Hello Alex and Steve
```

And instead of an array, you can use a rawtext component, like so.

```json
/tellraw @a { "rawtext": [{ "translate": "Hello %%s and %%s", "with": { "rawtext": [{ "text":"Steve" }, { "translate": "item.apple.name" }] } }] }
#Output in chat:
#    Hello Steve and Apple
```

_Additional example shared by @CornyFlex:_

```json
/tellraw @a { "rawtext": [{ "translate": "Role: %%%%s", "with": { "rawtext": [{ "score": { "name": "*", "objective": "wiki:role" } }, { "text":"Member" }, { "text": "Moderator" }, { "text": "Admin" }] } }] }
```

This structure allows you to display different text to the selected players based on scores.

Note: Score must be a positive integer.

-   Output in chat:

    -   Member - When 'wiki:role' score of the player equals 1.
    -   Moderator - When 'wiki:role' score of the player equals 2.
    -   Admin - When 'wiki:role' score of the player equals 3.

**How It Works:**

-   At "`%%%%s`", the first `%%` is left invalid because no argument (either "s" or an integer) is provided. As a result, it cannot display a value from the array.
-   For the second `%%`, the argument "s" is provided, which displays the first slot in the array (a `{score}`).
-   Since there is no space between the first `%%` and the `{score}` (`%%s`), the `{score}` is interpreted as the integer argument for the first `%%`, making it valid.
-   This allows the score to dynamically change the index of the slot to be displayed.

---
title: 原始文本
description: 了解 /tellraw 和 /titleraw 命令中使用的原始文本 JSON 组件。
category: 通用
mentions:
    - BedrockCommands
    - GTB3NW
    - SpacebarNinja
    - zheaEvyline
    - QuazChick
---

## 简介

[由 Bedrock Commands 社区 (BCC) Discord 提供](https://bedrockcommands.org/)

![](tellraw.png)

原始文本用于向玩家发送和显示富文本。这可以在 `/tellraw` 或 `/titleraw` 命令中使用。

在方括号 `[]` 内，你可以列出任意多个文本对象。

```json
{ "rawtext": [] }
```

通过在组件末尾添加逗号 `,` 可以组合多个组件。

## 文本组件

显示普通字符串文本。在引号内使用。

**语法：**

```json
{ "text": "<Your Text Here>" }
```

**示例：**

向所有玩家发送 "Hello everyone!" 消息：

```json
/tellraw @a { "rawtext": [{ "text": "Hello everyone!" }] }
```

### 转义字符、换行符和 Unicode

1. 转义字符使用 `\` 访问，用于在组件内使用引号 `"`。示例：

    ```json
    /tellraw @a { "rawtext": [{ "text": "He said, \"I like apples\"..." }] }
    #Output in chat:
    #    He said, "I like apples"...
    ```

2. 换行符使用 `\n` 来换行。示例：

    ```json
    /tellraw @a { "rawtext": [{ "text": "Hello\nNext line" }] }
    #Output in chat:
    #    Hello
    #    Next line
    ```

3. Unicode 提供一个唯一的数字来显示图标/表情。示例：

    ```json
    /tellraw @a { "rawtext": [{ "text": "\ue100" }] }
    ```

    - 聊天中的显示效果：

        ![](/assets/images/text/emojis/hud/shank.png)

    注意：Unicode 符号在 Minecraft 中只会显示为对应的图标/表情。

    有关 Bedrock 可用 Unicode 的完整列表和更多信息，请参阅 [表情和符号](/text/emojis) 页面。

## 选择器组件

显示所选目标的名称。允许使用目标选择器参数。

**语法：**

```json
{ "selector": "<target>" }
```

**示例：**

1. 在聊天中发送所有玩家的名称：

```json
/tellraw @a { "rawtext": [{ "selector": "@a" }] }
```

2. 在聊天中发送标记为 'wiki:winner' 的所有玩家的名称：

```json
/tellraw @a { "rawtext": [{ "selector": "@a[tag=wiki:winner]" }] }
```

## 计分板组件

显示计分板目标中的分数。

**语法：**

```json
{ "score": { "name": "<name>", "objective": "<score>" } }
```

-   **`name`** - 可以是任何选择器，如 `@p` 或玩家名称。
    -   你也可以使用 **`*`** 通配符来显示阅读者自己的分数。
-   **`objective`** - 要显示分数的计分板名称。

使用计分板组件时，两者都是必需的。

**示例：**

1. 在聊天中显示最近玩家的 `wiki:points` 分数：

```json
/tellraw @a { "rawtext": [{ "score": { "name": "@p", "objective": "wiki:points" } }] }
```

2. 在聊天中显示阅读者的 `wiki:money` 分数：

```json
/titleraw @a title { "rawtext": [{ "score": { "name": "*", "objective": "wiki:money" } }] }
```

## 翻译组件

允许创作者向用户显示本地化文本。翻译字符串列表在语言文件中。更多信息请参阅[文本指南](https://wiki.bedrock.dev/text/text-intro)页面。

**语法：**

```json
{ "translate": "<string>" }
```

**示例：**

```json
/tellraw @a { "rawtext": [{ "translate": "multiplayer.player.joined" }] }
#Output in chat:
#    %s joined the game
```

在上面的示例中，它输出 "`%s joined the game`"。要使名称而不是 `%s` 出现，还需要指定 `with`。需要使用数组 `[]` 而不是花括号 `{}`

```json
/tellraw @a { "rawtext": [{ "translate": "multiplayer.player.joined", "with": ["Steve"] }] }
#Output in chat:
#    Steve joined the game
```

![](translations.png)

### %%s

`translate` 和 `%s` 可以在本地化文件中没有匹配字符串的情况下使用。例如：

```json
/tellraw @a { "rawtext": [{ "translate": "Hello %%s", "with": ["Steve"] }] }
#Output in chat:
#    Hello Steve
```

### 多个 %%s

`%%s` 可以多次使用。它们按显示顺序依次填充。

```json
/tellraw @a { "rawtext": [{ "translate": "Hello %%s and %%s", "with": ["Steve","Alex"] }] }
#Output in chat:
#    Hello Steve and Alex
```

### 使用 %%# 排序

可以通过将末尾的 `s` 替换为数字来更改填充 `%s` 的顺序。例如，要交换上面示例中 Steve 和 Alex 的位置：

```json
/tellraw @a { "rawtext": [{ "translate": "Hello %%2 and %%1", "with": ["Steve","Alex"] }] }
#Output in chat:
#    Hello Alex and Steve
```

除了数组，你还可以使用 rawtext 组件，如下所示。

```json
/tellraw @a { "rawtext": [{ "translate": "Hello %%s and %%s", "with": { "rawtext": [{ "text":"Steve" }, { "translate": "item.apple.name" }] } }] }
#Output in chat:
#    Hello Steve and Apple
```

_由 @CornyFlex 分享的额外示例：_

```json
/tellraw @a { "rawtext": [{ "translate": "Role: %%%%s", "with": { "rawtext": [{ "score": { "name": "*", "objective": "wiki:role" } }, { "text":"Member" }, { "text": "Moderator" }, { "text": "Admin" }] } }] }
```

此结构允许你根据分数向选定的玩家显示不同的文本。

注意：分数必须是正整数。

-   聊天中的显示效果：

    -   Member（成员）- 当玩家的 'wiki:role' 分数等于 1 时。
    -   Moderator（管理员）- 当玩家的 'wiki:role' 分数等于 2 时。
    -   Admin（超级管理员）- 当玩家的 'wiki:role' 分数等于 3 时。

**工作原理：**

-   在 "`%%%%s`" 处，第一个 `%%` 无效，因为没有提供参数（无论是"s"还是整数）。因此无法显示数组中的值。
-   对于第二个 `%%`，提供了参数 "s"，这会显示数组中的第一个槽位（一个 `{score}`）。
-   由于第一个 `%%` 和 `{score}` 之间没有空格（`%%s`），`{score}` 被解释为第一个 `%%` 的整数参数，使其有效。
-   这允许分数动态更改要显示的槽位索引。

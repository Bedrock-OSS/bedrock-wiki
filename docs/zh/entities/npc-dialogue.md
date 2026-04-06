---
title: NPC对话
category: 通用
tags:
    - intermediate
mentions:
    - kyleplo
    - StuartDA
    - MedicalJewel105
    - SirLich
    - solvedDev
    - Studio0rbit
    - Sprunkles137
    - ThomasOrs
    - QuazChick
---

非玩家角色（NPC）是类似村民的实体，可以赋予带有消息和多个按钮的对话。
它们最初是为冒险地图设计的，但随着 `/dialogue` 命令的引入，它们现在可以在普通附加包的上下文中使用。

## 对话文件

NPC对话数据存储在对话文件中，这些文件存储在行为包根目录的 `dialogue` 文件夹中。这是一个基本的NPC对话文件：

<CodeHeader>BP/dialogue/example.json</CodeHeader>

```json
{
    "format_version": "1.17",
    "minecraft:npc_dialogue": {
        "scenes": [
            {
                "scene_tag": "wiki:example",
                "npc_name": "Steve",
                "text": "Hello"
            }
        ]
    }
}
```

在这个文件中，有一个场景数组。每个场景是一个单独的对话。你可以把所有对话放在一个文件中，也可以把每个对话放在单独的文件中。在每个场景对象中，有一些属性可以设置来控制对话：

### 场景标签

场景的标识符，用于定位场景。

### NPC名称

NPC的显示名称。可选，如果未指定，将使用NPC实体的名称，默认为 `§eNPC`。

### 文本

在对话气泡中显示的文本。可选。

### 打开命令

对话打开时要运行的命令字符串数组。可选。

<CodeHeader></CodeHeader>

```json
"on_open_commands": [
    "/say Hello"
]
```

### 关闭命令

对话关闭时要运行的命令字符串数组。可选。

<CodeHeader></CodeHeader>

```json
"on_close_commands": [
    "/say Goodbye"
]
```

### 按钮

指定对话中显示的按钮的对象数组。可选。

<CodeHeader></CodeHeader>

```json
"buttons": [
    {
        "name": "Button One",
        "commands": [
            "/say Button One Pressed!"
        ]
    },
    {
        "name": "Button Two",
        "commands": [
            "/say Button Two Pressed!",
            "/say Secondary Command for Button Two"
        ]
    }
]
```

## 选择玩家

在 `on_open_commands`、`on_close_commands` 和每个按钮对象的 `commands` 属性中，你可以使用普通选择器，如 `@p` 来选择最近的玩家。然而，这些选择器是相对于NPC实体运行的，因此在多人游戏中可能会令人困惑。为了解决这个问题，有一个特殊的选择器 `@initiator`，它总是选择打开对话的玩家。

<CodeHeader></CodeHeader>

```json
"buttons": [
    {
        "name": "Levitation Please",
        "commands": [
            "/effect @initiator levitation"
        ]
    }
]
```

此选择器**仅**在NPC对话中工作，不能在任何其他地方使用。

## 翻译

所有将显示给用户的对话属性也可以翻译：

<CodeHeader></CodeHeader>

```json
"npc_name": {
    "rawtext": [
        {
            "translate": "entity.endermite.name"
        }
    ]
}
```

然后应在资源包的语言文件中指定使用的翻译键。在这种情况下，`entity.endermite.name` 将翻译为"Endermite"。

## 打开对话

`/dialogue` 命令用于打开和控制对话。命令如下：`/dialogue open <npc: target> <player: target> [sceneName: string]`

-   `<npc: target>`：指向任何具有 `minecraft:npc` 组件的实体的选择器，如原版NPC。这决定了对话命令从哪里执行，以及NPC在对话中的外观。
-   `<player: target>`：指向将看到对话的玩家的选择器。
-   `[sceneName: string]`：匹配要显示对话的 `scene_tag` 的字符串。可选，如果不存在，将显示NPC上次显示的对话。

例如，以下命令将使用最近的NPC为最近的玩家打开对话 `example`：

```
/dialogue open @e[type=npc,c=1] @p example
```

## 更改对话

`/dialogue` 命令也可用于更改NPC的对话。与 `/dialogue open` 命令不同，此命令只有在玩家手动打开NPC对话时才有效。语法如下：`/dialogue change <npc: target> <sceneName: string> [player: target]`

-   `<npc: target>`：指向要更改对话的NPC的选择器。
-   `<sceneName: string>`：匹配要显示对话的 `scene_tag` 的字符串。
-   `[player: target]`：指向将看到更新对话的玩家的选择器。可选，如果不存在，所有玩家都将受到影响。

例如，以下命令将最近NPC的对话更改为随机玩家的 `example`：

```
/dialogue change @e[type=npc,c=1] example @r
```

## 完整示例

这个完整示例将创建一个自定义物品，允许玩家在持有该物品时右键点击/交互时传送。
对于此演示，请使用此页面顶部的清单文件。

### 创建NPC

即使NPC永远不会可见，NPC实体总是需要用于 `/dialogue` 命令。为此，你需要召唤NPC并将其放入一个tick区域，以便从任何地方都可以访问它：

<CodeHeader>functions/setup.mcfunction</CodeHeader>

```
tickingarea add 0 1 0 0 2 0
summon npc "§r" 0 1 0
```

此函数将在0,0处创建一个tick区域，并在该tick区域的基岩层生成一个没有名称的NPC。你需要手动运行此函数一次，或使用 `player.json` 或 `tick.json`。

:::tip

你可以使用 /dialogue 命令从玩家内部触发NPC对话，而无需事先召唤NPC。

1. 在玩家的行为中，添加 minecraft:npc 组件。
2. 从BP/dialogue文件夹指定一个场景。
3. 从玩家运行 /dialogue 命令，并提供 scene_tag：

:::

```
/dialogue open @s @s <scene_tag>
```

#### 优点和缺点：

-   `+` 你不需要担心隐藏NPC，如果你只是要运行使用scene_tags提供的NPC对话。
-   `+` 没有NPC意味着你也不需要确保它在'ticking area'中。
-   `-` 由于对话是从玩家触发的，这不是它的预期用途，在某些情况下可能会变得不稳定。
-   `-` 其他玩家可以点击玩家，他们会看到这个对话。

为了避免这个问题，将 `minecraft:interaction` 添加到将替换npc交互的实体中。npc东西仍然有效，但如果玩家点击另一个玩家，npc就不会出现。

<CodeHeader></CodeHeader>

```json
"minecraft:interact": {
    "interactions": [
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        }
                    ]
                }
            }
        }
    ]
}
```

### 对话文件

此对话文件包含两个对话，每个都有两个传送按钮，以及一个在两者之间切换的按钮。

<CodeHeader>BP/dialogue/example.json</CodeHeader>

```json
{
    "format_version": "1.17",
    "minecraft:npc_dialogue": {
        "scenes": [
            {
                "scene_tag": "wiki:main_teleport_menu",
                "npc_name": "Teleport",
                "text": "Where would you like to teleport?",
                "buttons": [
                    {
                        "name": "Districts",
                        "commands": [
                            "/dialogue open @e[type=npc,c=1] @initiator wiki:districts_teleport_menu"
                        ]
                    },
                    {
                        "name": "My Base",
                        "commands": ["/tp @initiator -20 4 -20"]
                    },
                    {
                        "name": "World Spawn",
                        "commands": ["/tp @initiator 0 4 0"]
                    }
                ]
            },
            {
                "scene_tag": "wiki:districts_teleport_menu",
                "npc_name": "District Teleport",
                "text": "What district would you like to teleport to?",
                "buttons": [
                    {
                        "name": "< Back",
                        "commands": [
                            "/dialogue open @e[type=npc,c=1] @initiator wiki:main_teleport_menu"
                        ]
                    },
                    {
                        "name": "Shop District",
                        "commands": ["/tp @initiator 20 4 20"]
                    },
                    {
                        "name": "Gaming District",
                        "commands": ["/tp @initiator 20 4 -20"]
                    }
                ]
            }
        ]
    }
}
```

### 创建物品

最后，创建一个在右键点击/交互时打开对话的物品。此物品使用末影珍珠纹理，但你可以赋予它自定义纹理。

#### 物品JSON

<CodeHeader>BP/items/teleport_menu.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:teleport_menu",
            "menu_category": {
                "category": "items"
            }
        },
        "components": {
            "minecraft:icon": "ender_pearl",
            "minecraft:glint": true,
            "minecraft:display_name": {
                "value": "Teleport Menu"
            },
            "wiki:teleport_menu": {}
        }
    }
}
```

#### 自定义组件脚本

<CodeHeader>BP/scripts/teleportMenu.js</CodeHeader>

```js
import { system } from "@minecraft/server";

const ItemTeleportMenuComponent = {
    onUse({ source }) {
        source.runCommand("dialogue open @e[type=npc, c=1] @s wiki:main_teleport_menu");
    },
};

system.beforeEvents.startup.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent("wiki:teleport_menu", ItemTeleportMenuComponent);
});
```

### 测试

完成后，将这些文件与清单一起打包，然后导入Minecraft。开始一个新的平坦世界，并确保启用作弊和实验。

进入世界后，使用 `/function setup` 创建tick区域和NPC实体。然后使用 `/give @s wiki:teleport_menu` 给自己传送物品。切换到生存模式（NPC对话在创造模式中不起作用），拿着物品，然后右键点击。你应该会看到你的对话出现。

## 致谢

本教程基于Minecraft Creator文档中的[此页面](https://learn.microsoft.com/minecraft/creator/documents/npcdialogue)。

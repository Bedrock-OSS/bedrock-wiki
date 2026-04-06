---
title: 自定义命令
description: 学习如何使用脚本创建可在聊天、命令方块和其他地方使用的自己的命令。
category: 教程
mentions:
    - cda94581
    - fraysdev
    - destruc7ion
    - jannik-de
    - riesters
    - Fabrimat
    - SmokeyStack
    - CrackedMatter
    - JaylyDev
    - Herobrine643928
    - conmaster2112
    - kumja1
    - modmaker101
    - realfeatherdev
    - QuazChick
    - jeanmajid
    - nperma
---

谁不想要酷炫的自定义命令呢？在本教程中，你将学习如何创建可以使用脚本在聊天、命令方块和其他地方使用的自己的命令。

## 包设置

:::tip
在创建脚本之前，建议学习 JavaScript、附加包和脚本 API 的基础知识。
要了解脚本 API 的功能，请参阅 [Microsoft 文档](https://learn.microsoft.com/minecraft/creator/scriptapi)
:::

假设你已经理解了脚本的基础知识，让我们开始创建包。

下面是示例清单，请确保你**生成自己的 UUID**。

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "Custom Commands",
        "description": "Custom Commands using the Script API",
        "min_engine_version": [1, 21, 100],
        "uuid": "c8c3239f-027f-4e80-890f-880eba65027d",
        "version": "1.0.0"
    },
    "modules": [
        {
            "type": "script",
            "language": "javascript",
            "entry": "scripts/main.js",
            "uuid": "f626740d-50a6-49f1-a24a-834983b72134",
            "version": "1.0.0"
        }
    ],
    "dependencies": [
        {
            "module_name": "@minecraft/server",
            "version": "2.1.0" // 需要至少 2.1.0
        }
    ]
}
```

在我们的清单中，我们添加了一个脚本模块。
`entry` 是行为包 `scripts` 文件夹内脚本文件的路径。
依赖允许我们将原生的 `@minecraft/server` 模块导入到我们的脚本中。

<FolderView :paths="[
    'BP/scripts/main.js',
    'BP/manifest.json',
    'BP/pack_icon.png'
]" />

## 注册自定义命令

现在是有趣的部分——创建你的自定义命令。

### 命令名称

首先，你需要为你的命令想一个名字。
这个名字必须有一个命名空间，并且应该只包含小写字母，例如 `wiki:goto`。

:::danger 命名空间
Minecraft 会自动注册一个没有提供命名空间的版本的自定义命令（例如 `/goto` 以及 `/wiki:goto`）。

此功能是为了让自定义命令更方便快速输入聊天，但你应该**永远不要**在聊天之外使用不带命名空间的版本。

如果另一个附加包添加了相同名称的命令（不带命名空间），这将导致命令方块、函数等停止工作。
:::

### 命令描述

你还需要为命令提供一个描述，该描述将显示在命令自动补全中命令名称旁边。

<!--

这应该是一个 `.lang` 文件中的翻译键（最好是 `commands.<name>.description` 的形式）。

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
commands.wiki:goto.description=Teleport to a specific location.
```

-->

### 命令权限等级

你的命令的权限等级很重要，因为它确保不应该访问潜在危险命令的玩家无法运行它们。

以下是命令可以设置的不同权限等级：

-   `Any` — 允许从任何地方运行命令，即使是非管理员。
-   `GameDirectors` — 限制为管理员（包括命令方块）。
-   `Admin` — 限制为管理员（不包括命令方块）。
-   `Host` — 限制为托管世界的玩家。
-   `Owner` — 限制为服务器控制台。

### 命令参数

以下是自定义命令中可以使用的不用参数类型：

-   `BlockType`
-   `Boolean`
-   `EntitySelector` — 返回所选实体的数组（即使只选择了一个实体）。
-   `EntityType`
-   `Enum` — 参数的 `name` 必须是已注册命令枚举的名称。
-   `Float`
-   `Integer`
-   `ItemType`
-   `Location` — 返回 `Vector3` 对象。
-   `PlayerSelector` — 类似于 `EntitySelector`，但只返回玩家。
-   `String`

自定义命令最多可以有 8 个参数。

#### 必需参数

必需参数必须按顺序指定，命令才能运行。

#### 可选参数

可选参数不需要指定，并且始终跟在必需参数之后。

### 命令回调

这是每次执行命令时调用的函数（以[只读模式](/scripting/privileges#read-only-mode)）。

回调总是将命令来源作为第一个参数，其余参数基于你提供的 `mandatoryParameters` 和 `optionalParameters`。
传递给回调的参数数量与命令中定义的参数数量匹配，因此如果你有一个带有 3 个不同参数的命令，你的回调应该如下所示：

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
customCommandRegistry.registerCommand(
    {
        name: "wiki:command",
        description: "A very useful command.",
        permissionLevel: CommandPermissionLevel.GameDirectors,
        mandatoryParameters: [
            { name: "param1", type: CustomCommandParamType.String },
            { name: "param2", type: CustomCommandParamType.Integer },
            { name: "param3", type: CustomCommandParamType.Boolean },
        ],
    },
    (origin, param1, param2, param3) => {
        // Handle the command logic here
    }
);
```

## 传送命令示例

在这个示例中，我们将创建一个自定义斜杠命令 `/wiki:goto`，允许玩家传送到预定义的位置：`spawn`、`shop` 或 `arena`。

在命令自动补全中，其语法如下：

```
/wiki:goto <teleportLocation: string>
```

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import {
    CommandPermissionLevel,
    CustomCommandParamType,
    CustomCommandStatus,
    system,
} from "@minecraft/server";

system.beforeEvents.startup.subscribe(({ customCommandRegistry }) => {
    // Register an enum for teleport locations
    customCommandRegistry.registerEnum("wiki:teleportLocation", ["spawn", "shop", "arena"]);

    // Register the custom command
    customCommandRegistry.registerCommand(
        {
            name: "wiki:goto",
            description: "Teleport to a specific location.",
            permissionLevel: CommandPermissionLevel.Any, // Allow all players to run the command
            cheatsRequired: false, // Allow the command to be ran without enabling cheats
            mandatoryParameters: [
                {
                    // Use the enum by setting the name to the enum name
                    name: "wiki:teleportLocation",
                    type: CustomCommandParamType.Enum,
                },
            ],
        },
        (origin, teleportLocation) => {
            // Only run if executed by an entity
            if (!origin.sourceEntity)
                return {
                    status: CustomCommandStatus.Failure,
                };

            let location;

            // Handle teleportation based on the location string
            if (teleportLocation === "spawn") {
                location = { x: 0, y: 100, z: 0 };
            } else if (teleportLocation === "shop") {
                location = { x: 100, y: 100, z: 100 };
            } else if (teleportLocation === "arena") {
                location = { x: 200, y: 100, z: 200 };
            }

            system.run(() => {
                origin.sourceEntity.teleport(location);
            });

            return {
                status: CustomCommandStatus.Success,
                message: "Teleporting to " + teleportLocation,
            };
        }
    );
});
```

## 限制命令只能由玩家执行

默认情况下，"any" 命令权限等级允许非玩家来源运行命令，这对于应该只能由玩家运行的命令并不合适。

在这个示例中，我们将创建一个自定义斜杠命令 `/wiki:heal`，只能由玩家执行（不能由服务器控制台或命令方块执行）。
此命令将把玩家的生命值恢复到满值。

<CodeHeader>BP/scripts/main.js</CodeHeader>

```js
import {
    CommandPermissionLevel,
    CustomCommandParamType,
    CustomCommandStatus,
    system,
    Player,
} from "@minecraft/server";

system.beforeEvents.startup.subscribe(({ customCommandRegistry }) => {
    customCommandRegistry.registerCommand(
        {
            name: "wiki:heal",
            description: "Restore your health to the default value.",
            permissionLevel: CommandPermissionLevel.Any,
            cheatsRequired: false,
        },
        (origin) => {
            const source = origin.initiator ?? origin.sourceEntity;

            // Only allow players to use this command (or NPCs, treating the initiator as the player executing the command)
            if (!(source instanceof Player)) {
                return {
                    status: CustomCommandStatus.Failure,
                    message: "This command can only be executed by players.",
                };
            }

            // Escape read-only mode to heal the player
            system.run(() => source.getComponent("health").resetToDefaultValue());

            return {
                status: CustomCommandStatus.Success,
                message: "You have been fully healed!",
            };
        }
    );
});
```

有关自定义命令的更多详细信息，请参阅 [Microsoft 文档上的自定义命令](https://learn.microsoft.com/minecraft/creator/documents/scripting/custom-commands)。
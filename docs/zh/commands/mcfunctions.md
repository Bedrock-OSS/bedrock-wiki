---
title: 函数
category: 通用
tags:
    - guide
mentions:
    - BedrockCommands
    - cda94581
    - zheaEvyline
    - jordanparki7
nav_order: 3
description: 了解 MCBE 中的函数。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

函数是包含多行命令的 `.mcfunction` 文件。它们在游戏中使用 `/function` 命令运行。

函数是在**行为包**中创建的，嵌套在 **functions** 文件夹中。函数包仅使用函数文件创建系统。

函数在很多方面都很有用，可以减少在命令块之间调试系统所花费的时间。它们还有助于将系统打包以便在多个世界中使用，并提供许多可以改变一切工作方式的函数。

## 函数包文件夹结构

<FolderView :paths="[
    'BP/functions/this_code.mcfunction',
    'BP/functions/more_of_this_code.mcfunction',
    'BP/functions/tick.json',
    'BP/functions/nested/this_code_is_nested.mcfunction',
]" />

为帮助创建一致的格式，让每个人更容易遵循，并在你的函数之间保持统一，建议遵循这些文件夹结构最佳实践：

1. 所有你的 `.mcfunction` 文件必须放在 functions 文件夹内的命名空间根文件夹中。在基岩版 Wiki 上，我们使用 `wiki` 命名空间。但是，你可以根据你的名字或项目选择命名空间。欲了解更多相关信息，请参阅[namespaces](/concepts/namespaces)页面。
    - ✅️ `BP/functions/wiki/random_number.mcfunction`
    - ❌️ `BP/functions/random_number.mcfunction`
2. 包中的文件夹和文件必须使用 `snake_case` 命名
    - 这意味着只允许使用**小写**字母数字字符和下划线（`_`）。
    - ✅️ `BP/functions/wiki/scoreboard/objectives/add_all.mcfunction`
    - ❌️ `BP/functions/wiki/scoreboard/objectives/Add-All.mcfunction`
3. 它们必须正确嵌套：
    - ✅️ `BP/functions/wiki/teleport/zone/hell`
    - ❌ `BP/functions/wiki/teleport_hellzone`
4. 名称必须遵循 `action_object` 结构。意味着动词应在主语之前。
    - ✅️ `add_all`
    - ❌️ `all_add`
    - ✅️ `shuffle_position`
    - ❌️ `position_shuffle`
5. 任何路径的总字符长度不得超过 80 个字符（主机限制）。
6. 内容文件夹应使用一致的单复数形式：坚持使用全为复数或全为单数的名称，不要混用。例如：

✅️ **一致**：

```
BP/functions/wiki/ability/ice_blast.mcfunction
BP/functions/wiki/ability/fire_trail.mcfunction
BP/functions/wiki/event/players/on_death.mcfunction
BP/functions/wiki/event/worlds/on_initialize.mcfunction
```

-   所有内容文件夹 `ability` 和 `event` 都是一致的单数形式。
-   `event` 中的内容文件夹也是一致的，因为 `players` 和 `worlds` 都是复数。

❌️ **不一致**：

```
BP/functions/wiki/abilities/ice_blast.mcfunction
BP/functions/wiki/abilities/fire_trail.mcfunction
BP/functions/wiki/event/players/on_death.mcfunction
BP/functions/wiki/event/world/on_initialize.mcfunction
```

-   只有 `abilities` 内容文件夹是复数形式，而 `event` 是单数形式。
-   另外，在 `event` 文件夹中，`players` 文件夹是复数而 `world` 是单数。

## 初学者注意事项

_以下是初学者参考的示例函数文件：_

<CodeHeader>BP/functions/wiki/effects.mcfunction</CodeHeader>

```yaml
# 这些效果用于出生点
effect @a[tag=wiki:at_spawn] regeneration 12 255 true
effect @a[tag=wiki:at_spawn] saturation 12 255 true
effect @a[tag=wiki:at_spawn] weakness 12 255 true

# 这些效果用于下界
effect @a[tag=wiki:in_nether] fire_resistance 12 255 true
```

-   函数中的命令不能以斜杠（`/`）开头。函数文件中的每一行都代表一条新命令（如果留空则忽略）。你可以用井号（ `#`）开头添加注释——`#` 后的空格只是格式偏好。关于函数的注释样式指南，请参阅**[下文](#comments-style-guide)**。

-   函数中的所有命令都在**同一个 tick** 中运行。因此，如果一个函数导致大的变化，可能会导致突然的卡顿，如果可能的话，将一些命令分散到多个 tick 中会很有帮助。然而，函数中的命令仍按相同顺序运行。

-   在 Minecraft 基岩版中，函数文件中的命令不能超过 10,000 条。这包括在原始文件中执行的任何其他函数文件。

-   无法运行条件命令。那些仍然需要以某种方式利用命令块，或者可以利用 1.19.50 的 execute 语法。

-   在函数中运行带有指定延迟的命令需要使用记分板计时器在每个 tick 中递增计数直到某一点，并在文件中的特定分数时执行命令。请参阅[记分板计时器](/commands/scoreboard-timers)页面了解其设置。

## 注释样式指南

-   当使用包含许多命令的函数时，使用多个井号在注释中组织它们以指示不同的标题级别会很有帮助。
-   _可选地_，为进一步区分这些级别，你可以应用不同的样式：
-   1 级标题 - **# 大写**
-   2 级标题 - **## 标题大小写**
-   3 级标题 - **### 句子大小写**
-   尽量避免使用超过三个标题级别或 overall 太多标题，因为这会使代码看起来混乱。请参阅下方的示例文件：

<Spoiler title="示例函数文件">

<CodeHeader>BP/functions/wiki/ability/fire_trail.mcfunction</CodeHeader>

```yaml
# ON PLAYER ITEM DROP

## Give Effects
### Fire resistance
execute at @e[type=item,name="Fire Trail Ability"] run effect @p[r=3] fire_resistance 10 255
### Speed
execute at @e[type=item,name="Fire Trail Ability"] run effect @p[r=3] speed 10 1 true

## Add Particle Time (10s)
execute at @e[type=item,name="Fire Trail Ability"] run scoreboard players set @p[r=3] abilities.fire_trail 200

## Delete Item
kill @e[type=item,name="Fire Trail Ability"]


# ENTITY TIMER

## Emit Particle Trail
execute at @a[scores={wiki:ability.fire_trail=1..}] run particle minecraft:basic_flame_particle ~~~

## Countdown Timer
scoreboard players remove @a [scores={wiki:ability.fire_trail=1..}] wiki:ability.fire_trail 1
```

</Spoiler>

注意在 1 级标题前使用两行间距，在 2 级标题前使用一行间距，以提高可读性。

此做法有助于创建一致的格式，让每个人更容易遵循，并在你的函数之间保持统一。
关于记分板和标签约定，请参阅**[样式指南](/meta/style-guide#scoreboard-objectives-tags)**页面。

## 创建函数

1. 找到 `📁 com.mojang` 文件夹并导航到 `📁 development_behavior_packs`

    -   开发文件夹用于快速重新加载包，因为包不会缓存到世界文件。

2. 为函数包创建一个文件夹（任意名称）。这将被称为行为包或 BP。

3. 在 BP 文件夹中创建一个 `📄 manifest.json` 文件和一个 `🖼 pack_icon.png` 文件（可选）。
    -   清单文件包含注册包所需的所有信息，而包图标在包菜单中显示。包图标通常是 128x128 或 256x256 的图像，尽管任何 2 的幂的分辨率都可以，它们会根据需要进行放大和缩小。

<Spoiler title="示例 📄 manifest.json">

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "description": "在此处编写你的包描述",
        "name": "在此处编写你的包名称",
        "uuid": "00000000-0000-0000-0000-000000000000",
        "version": [1, 0, 0],
        "min_engine_version": [1, 19, 73]
    },
    "modules": [
        {
            "description": "§r",
            "type": "data",
            "uuid": "00000000-0000-0000-0000-000000000000",
            "version": [1, 0, 0]
        }
    ]
}
```

请注意，uuid 字段需要替换为实际的 uuid，并且生成的两个 uuid 必须彼此不同。你可以在 **[uuidgenerator.net](https://uuidgenerator.net/)** 生成 uuid。

</Spoiler>
<Spoiler title="示例 🖼 pack_icon.png">

示例 A：

![pack_icon.png](pack_icon.png)

示例 B：

![pack_icon.png](/assets/images/guide/project-setup/pack_icon.png)

</Spoiler>

4. 创建一个 `📁 functions` 文件夹。此文件夹中以 **.mcfunction** 结尾的任何文件都将在游戏中注册为函数，可以使用 `/function <function_name>` 运行。

    -   允许嵌套函数，只需列出相对于 functions 文件夹的文件路径，如函数包文件夹结构所示。

5. 在游戏中应用行为包并尝试函数。函数文件的更改可以通过运行 `/reload` 或简单重新登录来反映在世界中。

:::tip 注意：

函数是有版本的；因此，它们将按照 `📄 manifest.json` 中列出的版本运行，例如：

-   `min_engine_version` 1.19.50 或以上将采用新的 execute 语法。
-   `min_engine_version` 1.19.70 或以上将要求辅助值被替换为方块状态。

:::

## 执行

函数可以在游戏中通过输入 `/function function_name` 来执行。这将执行函数文件中的所有命令，全部在一个 tick 中。

嵌套函数，例如 `BP/functions/wiki/teleport/zone/hell` 可以使用嵌套文件夹路径运行，在这种情况下为 `/function wiki/teleport/zone/hell`

## Tick JSON

functions 文件夹中的最后一个文件是 **`tick.json`** 文件。这指定在每个游戏 tick 上运行服务器端函数（类似于重复命令块）。它位于 `BP/functions` 文件夹中。默认情况下，在此文件中运行的函数在主世界原点（`0, 0, 0`）处执行。示例 **tick.json`** 文件：

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "wiki/function_1",
    "wiki/function_2"
  ]
}
```
> 注意：此文件中的函数在世界*初始化*后立即运行，无论玩家是否已*加载*。如果使用不当，这可能会导致意外行为。

## 示例函数包

<Card
    image="/assets/images/discord/bcc.png"
    title="下载"
    link="https://github.com/Bedrock-OSS/bedrock-examples/releases/download/download/functions_sample.mcpack"
/>

## 函数故障排除

你的函数在使用 `/function` 时可能不会出现在命令建议中。这通常是由于函数中的一个或多个命令出错造成的。

在创作者设置中启用[内容日志](/guide/troubleshooting#content-log)允许你查看函数包中是否有任何错误，错误在哪个函数中，在哪一行，以及该命令的确切语法错误是什么。

每次加载世界或运行 `/reload` 以反映编辑后的更改时，错误列表都会生成。错误列表可以在屏幕上显示几秒钟，也可以在设置中的内容日志历史记录中查看。

![contentLogToggles](/assets/images/commands/mcfunctions/content-log-toggles.png)

![contentLogHistory](/assets/images/commands/mcfunctions/content-log-history.png)

## 专业工作区设置（可选）

设置专用工作区是像专业人士一样开发函数包或附加组件的最后一步。虽然你可以在基本文本编辑器中编写函数，但以下工具将帮助你即时 catch 错误，与他人协作，并将更改直接同步到 Minecraft。

### 1. Visual Studio Code (VS Code)

将 **VS Code** 视为你的指挥中心。它是一个强大的免费代码编辑器，使编写 `.mcfunction` 文件比使用记事本更容易。

-   **下载：** 从[官方 VS Code 站点](https://code.visualstudio.com/Download)获取。
-   **必备插件：** 安装后，点击左侧边栏的**扩展**图标（四个方块）并搜索 **MCBE Command Checker**。
-   **为什么使用它？**
    -   **语法高亮：** 命令根据其类型更改颜色，使它们更容易阅读。
    -   **自动补全：** 当你输入时，编辑器会建议有效的参数、目标和方块名称。
    -   **错误检测：** 它会在你甚至打开游戏之前就用红色下划线突出显示拼写错误或无效语法。

示例截图：

![在 VSCode 中编辑 .mcfunction 文件](/public/assets/images/commands/mcfunctions/mcfunction-file-vscode.png)

### 2. GitHub 版本控制

**GitHub** 是一个基于云的服务，充当项目的"存档点"。

-   **创建一个账户：** 在 [GitHub.com](https://github.com/) 注册。
-   **好处：**
    -   **云备份：** 如果你的电脑崩溃，你永远不会丢失工作。
    -   **协作：** 你可以分享你的代码链接，让其他人可以帮助你修复 bug，而无需来回发送文件。
    -   **历史记录：** 你可以准确查看今天与一周前做了哪些更改。
    -   **发布：** 一旦你的包准备好向公众发布，你可以创建一个"发布"。这允许你将特定版本（如 v1.0 或 v2.1）托管为可下载的 `.mcpack` 文件，让玩家可以轻松找到你最稳定的工作版本。

### 3. GitHub Desktop

虽然 GitHub 存在于云端，但 **GitHub Desktop** 是你电脑上与之对话的应用程序。对于初学者来说，这是管理文件而无需学习复杂"Git"命令的最简单方法。

-   **下载：** 在 [desktop.github.com](https://desktop.github.com) 获取。
-   **工作流程：** 在 VS Code 中完成代码编写后，你使用 GitHub Desktop 来"提交"（保存）并"推送"（上传）你的更改到云端。

### 4. 链接你的文件夹

基岩版开发中最大的障碍是将文件从你的"工作"文件夹移动到 Minecraft"行为包"文件夹。你可以通过创建**目录连接**（一个像真实文件夹一样的快捷方式）来跳过这个手动步骤。

通过将你的 `\GitHub\ProjectName` 文件夹链接到 Minecraft 的 `\development_behavior_packs\ProjectName` 文件夹，你在 VS Code 中保存的任何更改都会**立即更新**到你的 Minecraft 文件中。

**如何链接文件夹（Windows）：**

1.  在你的 GitHub 文件夹中找到你的项目。
> 示例：
> ```
> C:\Github\YOUR_PROJECT_NAME
> ```
2.  找到你的 Minecraft 开发文件夹。
> 示例：
> ```
> C:\Users\YOUR_NAME\AppData\Roaming\Minecraft Bedrock\Users\Shared\games\com.mojang\development_behavior_packs\YOUR_PROJECT_NAME
> ```
3.  以**管理员**身份打开**命令提示符**。
4.  使用 `mklink /J` 命令链接它们。
> 示例：
> ```
> mklink /J "Path\To\Minecraft\Folder" "Path\To\GitHub\Folder"
> ```

:::tip
一旦这些文件夹链接起来，你就不需要重启 Minecraft 甚至重新进入世界来测试你的工作。只需在 VS Code 中保存你的文件，然后在游戏中运行 `/reload` 命令立即应用你的更改！

**额外提示：** 在 VS Code 中启用**自动保存**（**文件 > 自动保存**）使这个过程更快——只需切换回 Minecraft 并运行 `/reload`！
:::
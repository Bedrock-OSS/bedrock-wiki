---
title: 执行位置变体
category: 技术
mentions:
    - BedrockCommands
    - PipiSpamton
    - zheaEvyline
nav_order: 2
description: 学习如何动态地在任何方块变体的位置执行命令。
---

## 简介

[来自基岩版命令社区 (BCC) Discord](https://bedrockcommands.org/)

此技术允许你在任何方块变体的位置执行命令，而无需显式指定每个坐标。

**致谢：** *@oyakodon10*

![演示 GIF](demo_1.gif)

:::warning

-   当涉及大量方块时，必须谨慎使用此系统，因为它可能会导致临时实体为每个方块生成，从而导致卡顿。
-   当用于包含已满堆肥器的区域时，它可能会错误地替换它。如果你的世界中有任何可能受影响的此类建筑或方块，请使用本页末尾略微调整的版本**[此处](/commands/execute-at-block#system-modified)**，其中包含**3 条额外命令**。

:::

## 系统

<CodeHeader>BP/functions/wiki/execute_at_blocks/diamond_block.mcfunction</CodeHeader>

```yaml
## 将 [区域] 中的 [方块] 替换为满堆肥器
execute at @a run fill ~8~8~8 ~-8~-1~-8 composter ["composter_fill_level"=8] replace diamond_block

## 标记现有物品掉落以忽略
tag @e[type=item] add wiki:ignored.item

## 让满堆肥器掉落骨粉
### 通过用原始 [方块] 替换满堆肥器
execute at @a run fill ~8~8~8 ~-8~-1~-8 diamond_block replace composter ["composter_fill_level"=8]

## 在此处编写你的命令（示例）：
### 在玩家附近的所有钻石方块上方播放潜影盒子弹粒子
execute at @e[type=item,tag=!wiki:ignored.item] align xyz positioned ~0.5~0.5~0.5 run particle minecraft:shulker_bullet ~~1~

## 删除所有系统生成的骨粉掉落
kill @e[type=item,tag=!wiki:ignored.item]
```

![5 个命令方块的链条](/assets/images/commands/command-block-chain/5.png)

这里我们以 `/particle` 命令为例，但你也可以使用任何你想要的命令，数量不限。

只需确保按照所示的顺序正确指导 `execute at @e[type=item,tag=!wiki:ignored.item] align xyz positioned ~0.5~0.5~0.5 run`，用于你想要的命令。

另请注意，你选择的方块（`diamond_block`）和所需区域（`at @a run fill ~8~8~8 ~-8~-1~-8`）可以根据你的喜好更改。例如 `gold_block` 或 `iron_block` 以及 `fill 8 8 8 -12 -12 -12` 或 `at @a fill ~3~3~3 ~-3~-3~-3`。

## 每条命令的用途

-   **命令 1：** 你选择的所有方块（例如钻石块）在指定区域（例如所有玩家周围的某个体积）将被替换为满骨粉的堆肥器。
    -   满堆肥器有一个有用的行为：当被破坏或替换时，它会掉落其中的骨粉。
-   **命令 2：** 所有现有的物品掉落（例如玩家掉落的盔甲）将被标记为 `wiki:ignored.item`。这确保在命令 5 中，只有堆肥器掉落的骨粉被删除，而所有其他非系统生成的物品掉落被忽略。
-   **命令 3：** 如命令 1 中所述，我们现在用原始方块（例如钻石块）替换堆肥器。这会导致堆肥器中的骨粉掉落，让我们能够使用选择器瞄准它并在其位置执行想要的命令。
-   **命令 4：** 如前所述，这是一个可以根据你的预期用途进行修改或扩展的示例命令。
-   **命令 5：** 这是系统中的最后一条命令。它删除堆肥器生成的所有骨粉物品掉落，防止因世界上物品掉落数量增加而导致的卡顿。

如果使用函数，你的包文件夹结构如下：

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/functions/wiki',
    'BP/functions/wiki/main.mcfunction',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/wiki/execute_at_blocks',
    'BP/functions/wiki/execute_at_blocks/diamond_block.mcfunction'
]"
></FolderView>

在此设置中，`diamond_block` 函数由 `main.mcfunction` 调用，该函数通过 `tick.json` 每 tick 执行一次。

## 系统 - 修改版

这是该系统的一个略微修改版本，不会影响你世界中任何现有的满堆肥器。

![演示 GIF](demo_2.gif)

<CodeHeader>BP/functions/wiki/execute_at_blocks/diamond_block.mcfunction</CodeHeader>

```yaml
## 标记现有物品掉落以忽略
tag @e[type=item] add wiki:ignored.item

## 🟩 让现有满堆肥器在 [区域] 中掉落骨粉
### 通过用空气替换它们
execute at @a run fill ~8~8~8 ~-8~-1~-8 air replace composter ["composter_fill_level"=8]

## 🟩 标记现有满堆肥器掉落以忽略
tag @e[type=item,tag=!wiki:ignored.item] add wiki:ignored.composter

## 将 [区域] 中的 [方块] 替换为满堆肥器
execute at @a run fill ~8~8~8 ~-8~-1~-8 composter ["composter_fill_level"=8] replace diamond_block

## 让系统的满堆肥器掉落骨粉
### 通过用原始 [方块] 替换它们
execute at @a run fill ~8~8~8 ~-8~-1~-8 diamond_block replace composter ["composter_fill_level"=8]

## 🟩 恢复之前存在的满堆肥器
execute at @e[type=item,tag=wiki:ignored.composter] run setblock ~~~ composter ["composter_fill_level"=8]

## 在此处编写你的命令（示例）：
### 在玩家附近的所有钻石方块上方播放潜影盒子弹粒子
execute at @e[type=item,tag=!wiki:ignored.item,tag=!wiki:ignored.composter] align xyz positioned ~0.5~0.5~0.5 run particle minecraft:shulker_bullet ~~1~

## 删除所有系统生成的骨粉掉落
kill @e[type=item,tag=!wiki:ignored.item]
```

![8 个命令方块的链条](/assets/images/commands/command-block-chain/8.png)

> 注意：2 级标题下带有 🟩 前缀的命令表示新添加的命令。

在原始系统中，你只需要在你想要执行的命令中忽略 `wiki:ignored.item` 标签。然而，在这个修改后的系统中，你还必须如上所示忽略 `wiki:ignored.composter` 标签。
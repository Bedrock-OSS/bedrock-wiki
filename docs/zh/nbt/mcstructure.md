---
title: .mcstructure
category: 通用
mentions:
    - SirLich
    - MedicalJewel105
    - Misledwater79
    - SmokeyStack
    - Robotics-Modified
description: 关于 .mcstructure 格式。
---

[int]: /assets/images/nbt/int.png
[list]: /assets/images/nbt/list.png
[compound]: /assets/images/nbt/compound.png
[string]: /assets/images/nbt/string.png

## 保存和加载结构

**导出**按钮在结构方块中创建 `.mcstructure` 文件。这些文件必须放置在行为包中才能使用结构加载方块在游戏中加载它们。路径决定了结构标识符，该标识符在结构方块中输入以加载结构。

:::warning 移动端限制
目前在基岩版移动端无法导出结构。即使使用导出按钮资源包，游戏也无法导出 `.mcstructure` 文件。
:::

**示例：**

-   `BP/structures/house.mcstructure` → `mystructure:house`
-   `BP/structures/dungeon/entrance.mcstructure` → `dungeon:entrance`
-   `BP/structures/stuff/towers/diamond.mcstructure` → `stuff:towers/diamond`

第一个子文件夹定义命名空间，后续文件夹定义路径，最后是结构文件的名称。

注意，直接放在 `structures` 文件夹中的任何文件都会获得 `mystructure` 命名空间。如果一个结构存在于 `structures` 文件夹中，并与 `mystructure` 文件夹中的结构同名，游戏会产生以下内容日志警告：

```
[structure][warning]-There was a conflict loading a structure in the default namespace. A structure with the name <name> was found both in the root directory and the mystructure directory.
```

在这种情况下，`mystructure` 文件夹中的文件会"获胜"，导致直接放在 `structures` 文件夹中的文件被忽略。

## 文件格式

> ![Integer][int] `format_version`：目前始终设置为 `1`。
>
> ![List][list] `size`：三个整数的列表，描述结构边界的大小。
>
> > ![Integer][int] 结构在 X 方向的大小。
> >
> > ![Integer][int] 结构在 Y 方向的大小。
> >
> > ![Integer][int] 结构在 Z 方向的大小。
>
> ![Compound][compound] `structure`：实际的数据 compound。
>
> > ![List][list] `block_indices`：包含两个子列表的列表，每个图层一个。这些包含结构中的方块。每个方块存储为指向调色板的整数索引（见下文）。按 ZYX 顺序从最低角到最高角进行。例如，如果结构大小为 `[2,3,4]`，则每个图层列表中的 24 个（维度乘积）值表示位于 `[(0,0,0), (0,0,1), (0,0,2), (0,0,3), (0,1,0), (0,1,1), (0,1,2), (0,1,3), (0,2,0), (0,2,1), (0,2,2), (0,2,3), (1,0,0), (1,0,1), (1,0,2), (1,0,3), (1,1,0), (1,1,1), (1,1,2), (1,1,3), (1,2,0), (1,2,1), (1,2,2), (1,2,3)]` 的方块，相对于原点。值等于 `-1` 的索引表示没有方块，导致加载时保留任何现有方块。这发生在保存结构空洞时，第二层中的大多数方块都是这种情况。两个图层共享相同的调色板。
> >
> > > ![List][list] of ![Integer][int] 主图层中方块的索引。
> >
> > > ![List][list] of ![Integer][int] 次图层中的方块索引。此图层通常为空，除非此处有水时会有水。
> >
> > ![List][list] of ![Compound][compound] `entities`：作为 NBT 存储的实体列表，存储方式与世界文件中的实体完全相同。诸如 `Pos` 和 `UniqueID` 之类的标签会被保存，但加载时会替换。
> >
> > ![Compound][compound] `palette`：包含多个命名调色板，可能是为了支持同一结构的多个变体。但是，目前只保存和加载 `default`。
> >
> > > ![Compound][compound] 单个调色板（目前仅命名为 `default`）。
> >
> > > > ![List][list] `block_palette`：方块状态列表。此列表包含方块索引引用的有序条目。
> > > >
> > > > > ![Compound][compound] 单个方块状态。
> > > > >
> > > > > ![String][string] `name`：方块的标识符，例如 `minecraft:planks`。
> > > > > ![Compound][compound] `states`：方块的状态作为键和值。示例：`wood_type:"acacia"`、`bite_counter:3`、`open_bit:1b`。值是状态对应的适当 NBT 类型：枚举值为字符串，标量数为整数，布尔值为字节。
> > > > > ![Integer][int] `version`：此方块的兼容性版本号（截至编写时为 `17959425`，1.19 版）。例如，`17879555` 是十六进制 `01 10 D2 03`，意味着 1.16.210.03。
> > >
> > > > ![Compound][compound] `block_position_data`：包含结构中各个方块的附加数据。每个键都是 `block_indices` 扁平化列表中的整数索引。图层未指定，因为与此无关。
> > > >
> > > > > ![Compound][compound] `<index>`：单个附加方块数据，与其索引位置的方块相关。
> > > > >
> > > > > > ![Compound][compound] `block_entity_data`：作为 NBT 存储的方块实体数据，存储方式与世界文件中的方块实体完全相同。位置标签会被保存，但加载时会替换。图层未指定，因为多个方块实体不能共存于同一方块空间。
> > > > >
> > > > > > ![List][list] `tick_queue_data`：包含一个或多个计划刻度信息的 compound。这用于珊瑚等方块使其死亡、水流以及其他各种计划更新。
> > > > >
> > > > > > > ![Compound][compound] 单个待处理刻度。
> > > > >
> > > > > > > ![Integer][int] `tick_delay`：此方块应该更新前剩余的刻度数量。目前似乎没有与此相邻的其他值存在。
>
> ![List][list] `structure_world_origin`：三个整数的列表，描述结构最初保存在世界中的位置。等于保存结构方块的位置加上其偏移设置。这用于确定加载时实体应该放置在哪里。实体的新绝对位置等于其旧位置减去这些值，加上结构加载位置的原点。
>
> > ![Integer][int] 结构原点 X 位置。
> > ![Integer][int] 结构原点 Y 位置。
> > ![Integer][int] 结构原点 Z 位置。

## 如果……会怎样

以下是测试修改后的结构文件加载时会发生什么的结果：

-   如果 `size` 中的维度超过原版保存限制 `64*256*64`，结构仍然可以正常加载。
-   如果方块图层列表中的值不是 int 标签，所有值都被视为 `0`。
-   如果方块图层列表中的值大于或等于调色板大小或小于 `-1`，则放置空气方块。
-   如果不存在 `default` 调色板，加载结构会导致不放置任何方块。
-   如果任何具有常量名称的标签未指定或类型错误，结构无法加载，并显示以下内容日志错误：

```
[Structure][error]-Loading structure '<identifier>` from behavior pack: '<path>' | "<tag>" field, a required field, is missing from the structure.
```

-   如果 `block_indices` 不包含恰好两个值，结构无法加载，并显示以下内容日志错误：

```
[Structure][error]-Loading structure '<identifier>` from behavior pack: '<path>' | The "block_indices" field should be an array with 2 arrays and instead we have <count> arrays.
```

-   如果 `block_indices` 内部的值不是列表标签，结构无法加载，并显示以下内容日志错误：

```
[Structure][error]-Loading structure '<identifier>` from behavior pack: '<path>' | The "block_indices" field's first array is either missing or not a list.
```

-   如果 `block_indices` 中两个列表的长度不相等，结构无法加载，并显示以下内容日志错误：

```
[Structure][error]-Loading structure '<identifier>` from behavior pack: '<path>' | The "block_indices" field's arrays need to both be the same size.
```

-   如果 `block_indices` 中两个列表的长度不等于结构维度的乘积，结构无法加载，并显示以下内容日志错误：

```
[Structure][error]-Loading structure '<identifier>` from behavior pack: '<path>' | The "block_indices" field should have as many elements as defined by the "size" field.
```

## NBT 文件与 MC 结构比较

[NBT 文件](https://minecraft.wiki/w/NBT_format)（由 Java 版和基岩版的 .mcstructure 文件改编）完全不同。
但即使有所有这些差异，它们也有一个共同点：它们以 NBT 格式存储并使用索引数组和调色板。

以下是一些主要差异：

| MC 结构 vs .NBT 结构                             | 基岩版结构文件                                             | Java 版结构文件                                               |
| ---------------------------------------------------------- | ------------------------------------------------------------- | --------------------------------------------------------------- |
| 文件格式                                                | `.mcstructure`                                                | `.nbt`                                                          |
| 应用的压缩算法                              | None                                                          | GZip 压缩                                                |
| 字节序                                                 | 小端序                                                 | 大端序                                                      |
| 根是属性还是值（NBT 是否作为属性开始） | 无名属性                                               | 无名属性                                               |
| 兼容 `.mcstructure`                                   | 是                                                           | 否                                                              |
| 兼容 `.nbt`                                            | 否                                                            | 是                                                              |
| 结构紧凑大小（越小越好）                      |（更好）方块顺序硬编码，只保存调色板索引 | 每个方块存储为（位置、调色板索引、可选 NBT） |
| 最终文件大小（越小越好）                         | 不使用压缩                                           | GZip 压缩优于紧凑的 `.mcstructure` 格式。 |

## NBT 编辑器

你可以在[此处](/meta/useful-links#software-installed)找到一些 NBT 编辑器的下载链接。

---

[原始来源](https://gist.github.com/tryashtar/87ad9654305e5df686acab05cc4b6205)
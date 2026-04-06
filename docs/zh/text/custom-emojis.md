---
title: 自定义表情
description: 学习如何添加自己的表情到 Minecraft 中。
category: 表情与符号
mentions:
    - SirLich
    - MedicalJewel105
    - QuazChick
    - MaragiDev
    - xKingDark
    - zheaEvyline
---

:::warning
此方法不受官方支持。虽然很多创作者在 Marketplace 上使用它，但请谨慎使用。
:::

:::danger ORE UI
表情不受 Ore UI 屏幕支持。
:::

制作自定义表情的方法与预置表情非常相似，用我们自己的内容覆盖原版精灵图！
有些字符格子已经被原版表情占用了，但也有空白格子可以使用了。

首先，下载下方的精灵图并将它们移到资源包的 `font` 文件夹中。

下方是一个编辑过的示例，包含一些免费使用的自定义表情。

## 修改字形网格

### 字形网格模板

提供的模板网格是 256×256 像素，但你可以做得更大以容纳更大的表情。

<WikiImage src="glyph_grid.png" width="512" pixelated />

### Glyph E0

<WikiImage src="glyph_E0.png" caption="RP/font/glyph_E0.png" pixelated />

### Glyph E1

<WikiImage src="glyph_E1.png" caption="RP/font/glyph_E1.png" pixelated />

:::tip
`E0` 和 `E1` 不是实现自定义表情的唯一代码点。
你也可以使用 `E2`、`E3`、`E4`、`E5`、`E6`、`E7`、`E8`、`E9`、`EA`、`EB`、`EC`、`ED`、`EE`、`EF`、`F0`、`F1`、`F2`、`F3`、`F4`、`F5`、`F6`、`F7` 和 `F8`，因为这些没有被原版使用。

使用这些代码点也可以在一定程度上减少与其他包的冲突。
:::

## 示例

_编辑过的示例 `glyph_E1.png`（CC0），由 @zheaEvyline 分享供免费使用：_

![](glyph_E1_modified.png)

如果你想将现有的原版纹理或自定义纹理添加到字形中并在游戏中用作表情，可以使用 @minato4743 创建的 **[Textures to Glyph Web Tool](https://minato.beyondbedrock.org/web-apps/textures-to-glyph/)** 轻松实现。

你的文件路径应该像这样：

<FolderView :paths="[
    'RP/font/glyph_E0.png',
    'RP/font/glyph_E1.png'
]"
 />

## 在游戏中使用表情

一旦你将自定义表情放入 `glyph_E0.png` 或 `glyph_E1.png`，你需要获取对应的字母/符号，然后可以复制粘贴到游戏中显示表情，可以使用下方的转换器。

输入的前两个字符是 `E0`、`E1` 或任何其他代码点，取决于你将表情添加到了哪个文件。

接下来的两个字符是图像内的位置，格式为 `<行><列>`，其中每个字符都是十六进制数字。
你可以通过参考上方的图片找到这个数字。例如，`E0` 中右上角是 `0F`，右下角是 `FF`。

所以，完成后可能看起来像 `E102`（`E1` + `02`）。

将此代码复制到下方的字段中，然后按 **Convert**。右侧的符号可以复制粘贴到 Minecraft 中。

<div>
    <form>
        <input
            id="hexValue"
            placeholder="Hex value"
            class="button"
            style="background: none; outline: none;"
        />
        <input
            id="result"
            placeholder="Result"
            readonly
            class="button"
            style="background: none; outline: none; margin-inline: 0.5em;"
        />
        <button
            type="button"
            class="button"
            style="cursor: pointer;"
            onclick="document.getElementById('result').value = String.fromCodePoint(parseInt(document.getElementById('hexValue').value, 16))"
        >
            Convert
        </button>
    </form>
</div>

或者，你可以在这个网站 **[这里](https://everythingfonts.com/unicode/0xE300)** 获取字母/符号，或者使用 @NhanAZ 制作的这个 **[Glyph Web Tool](https://nhanaz.github.io/glyph/)**。

## 定位表情

-   要将表情向上/向下移动，只需在其自己的表情槽内上下移动。
-   要将表情向左或向右移动，只需在其侧面（在其自己的槽内）添加任何 5-10% 透明度的像素，方向与你想要移动的方向相反。
    -   例如：要向右移动 2 个像素，在其最左侧添加一个 5-10% 透明度的像素，然后在那个像素的左边再添加一个。

_注意：以下步骤仅适用于未填满其槽宽度的表情（即小于槽尺寸）。_

## 字形间距

有时，在游戏中两个字符靠得太近可能会在它们之间留下一些空白像素。唯一的解决方法是通过缩放字符（PNG 文件）使你的表情（原本跨越多个槽）适合单个槽。

例如，如果你在 `glyph_E1` 文件中使用两个 16×16 槽创建了一个表情，你需要将默认文件的分辨率加倍（从 **256×256** 到 **512×512**）。然后，只需将你的 **16×32** 表情对齐到缩放字形文件中的一个 **32×32** 槽中。

## 调整表情大小

要调整表情大小，将字形（PNG 文件）的分辨率更改为 512×512。分辨率加倍的原因是增加了像素数量，提供更多编辑空间。完成后，打开你选择的图像编辑器，选择新表情，调整大小，然后在其槽内居中。这将使表情在游戏中使用时周围有更多空间。

---
title: 字体
description: 了解 Minecraft 不同字体支持的 Unicode 字符列表。
category: 表情与符号
nav_order: 1
mentions:
    - 8Crafter
---

:::warning Ore UI
游戏中支持的 Unicode 字符列表仅适用于 JSON UI。Ore UI 使用 `Minecraft-Seven.ttf` 和 `Minecraft-Seven-v4.ttf` 文件。
:::

Minecraft 游戏内有 256 个 Unicode 字符被 Mojangles 字体支持。

游戏内 Mojangles 字体、`Mojangles.ttf` 文件、`Minecraft-Seven.otf` 文件和 `Minecraft-Seven-v4.ttf` 文件支持的 Unicode 字符有所不同。

## 游戏内支持的 Unicode 字符

这些是 JSON UI 支持的字符。其纹理由 `default8.png` 文件（`RP/font/default8.png`）决定。

:::tip Windows
如果你在 Windows 上使用带有数字键盘的键盘，Minecraft 实际上会将 Windows ALT 码重新映射到支持的字符之一。要获取 `default8.png` 中字符的 ALT 码，公式为 `列 + (行 * 16)`（其中行和列都是 0-15）。

例如：除号在 `default8.png` 的第 16 行第 7 列，所以我们将它们转换为从 0 开始，变成第 15 行第 6 列，`6 + (15 * 16) = 6 + 240 = 246`，所以除号的 ALT 码是 `246`。
:::

:::warning
其中一些字符无法通过聊天输入，或在聊天输入时被转换为另一个字符，但它们可以在附加包或其他文本输入中输入，并能在任何使用的地方正确显示。

受影响的字符将被标注。
:::

<WikiImage
    src="default8/default8.png"
    alt="default8.png"
    caption="RP/font/default8.png"
    width="512"
    pixelated
/>

| 字符 | Unicode              | ALT 代码 | 预览                                           | 宽度 | 备注             |
| --------- | -------------------- | -------- | ------------------------------------------------- | ----- | ----------------- |
| &#x00C0;  | U+00C0 (also U+0000) | ALT+0    | ![](default8/default8_glyph_00.png){loading=lazy} | 4     | 见下方备注 1。 |
| &#x00C1;  | U+00C1 (also U+0001) | ALT+1    | ![](default8/default8_glyph_01.png){loading=lazy} | 6     | 见下方备注 1。 |
| &#x00C2;  | U+00C2 (also U+0002) | ALT+2    | ![](default8/default8_glyph_02.png){loading=lazy} | 6     | 见下方备注 1。 |
| &#x00C8;  | U+00C8 (also U+0003) | ALT+3    | ![](default8/default8_glyph_03.png){loading=lazy} | 6     | 见下方备注 1。 |
| &#x00CA;  | U+00CA (also U+0004) | ALT+4    | ![](default8/default8_glyph_04.png){loading=lazy} | 6     | 见下方备注 1。 |
| &#x00CB;  | U+00CB (also U+0005) | ALT+5    | ![](default8/default8_glyph_05.png){loading=lazy} | 6     | 见下方备注 1。 |
| &#x00CD;  | U+00CD (also U+0006) | ALT+6    | ![](default8/default8_glyph_06.png){loading=lazy} | 4     | 见下方备注 1。 |
| &#x00D3;  | U+00D3 (also U+0007) | ALT+7    | ![](default8/default8_glyph_07.png){loading=lazy} | 6     | 见下方备注 1。 |
| &#x00D4;  | U+00D4 (also U+0008) | ALT+8    | ![](default8/default8_glyph_08.png){loading=lazy} | 6     | 见下方备注 1。 |
| &#x00D5;  | U+00D5 (also U+0009) | ALT+9    | ![](default8/default8_glyph_09.png){loading=lazy} | 6     | 见下方备注 1。 |
| &#x00DA;  | U+00DA (also U+000A) | ALT+10   | ![](default8/default8_glyph_0a.png){loading=lazy} | 6     | 见下方备注 2。 |
| &#x00DF;  | U+00DF (also U+000B) | ALT+11   | ![](default8/default8_glyph_0b.png){loading=lazy} | 6     |                   |
| &#x00E3;  | U+00E3 (also U+000C) | ALT+12   | ![](default8/default8_glyph_0c.png){loading=lazy} | 6     |                   |
| &#x00F5;  | U+00F5 (also U+000D) | ALT+13   | ![](default8/default8_glyph_0d.png){loading=lazy} | 6     | 见下方备注 2。 |
| &#x011F;  | U+011F (also U+000E) | ALT+14   | ![](default8/default8_glyph_0e.png){loading=lazy} | 6     |                   |
| &#x0130;  | U+0130 (also U+000F) | ALT+15   | ![](default8/default8_glyph_0f.png){loading=lazy} | 4     |                   |

-   _备注 1：当使用此字符的 ALT 码时，除非在 ALT 码开头额外输入一个 0（例如用 ALT+01 而不是 ALT+1），否则不会输入任何内容，但 ALT+0 即使前面加 0 也不会输入任何内容。但是，该字符仍然可以粘贴到文本字段中（控制字符和非控制字符版本都可以）。_
-   _备注 2：通过其 ALT 码或控制字符在文本字段中输入或粘贴时，它的行为相当于按 `Enter` 键（例如发送聊天消息、运行命令或取消文本字段焦点），要在聊天中输入它而不触发回车键行为，请改用非控制字符版本。_

（后续 Unicode 字符表格请参考英文原版）

## Mojangles 支持的 Unicode 字符

这些是 Mojangles.ttf 文件支持的字符。该文件位于 `data/fonts/Mojangles.ttf`。

Unicode 范围：`U+0000, U+000D, U+0020-007E, U+00A0-00FF, U+0131, U+0141-0142, U+0152-0153, U+0160-0161, U+0178, U+017D-017E, U+0192, U+02C6-02C7, U+02D8-02DD, U+03C0, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122, U+2126, U+2202, U+2206, U+220F, U+2211-2212, U+221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+FB01-FB02, U+10000-10002`

（详细 Unicode 表格请参考英文原版）

## Minecraft Five v2 支持的 Unicode 字符

此文件供 Ore UI 使用。文件位于 `data/gui/dist/hbui/fonts/Minecraft-Five-*.otf`。

Unicode 范围：`U+0000, U+000D, U+0020-003F, U+0041-007E, U+00A0-00A3, U+00A5-00A6, U+00A8-00B1, U+00B4, U+00B6-00B8, U+00BB, U+00BF-0148, U+014A-017E, U+01FC-01FF, U+0218-021B, U+0237, U+02C6-02C7, U+02C9, U+02D8-02DD, U+0384-0386, U+0388-038A, U+038C, U+038E-03A1, U+03A3-03CE, U+0400-045F, U+0490-0491, U+1E02-1E03, U+1E0A-1E0B, U+1E1E-1E1F, U+1E22-1E23, U+1E30-1E31, U+1E40-1E41, U+1E56-1E57, U+1E60-1E61, U+1E6A-1E6B, U+1E80-1E85, U+1E9E, U+1EF2-1EF3, U+2013-2015, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+20AC, U+2122, U+2126, U+2206, U+220F, U+2211-2212, U+221E, U+25CA, U+F6C3, U+F8FF, U+FB01-FB02, U+10000-10003`

（详细 Unicode 表格请参考英文原版）

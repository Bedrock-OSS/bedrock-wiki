---
title: Fonts
description: Learn the list of unicode characters supported by the different fonts in Minecraft.
category: Emojis & Symbols
nav_order: 1
mentions:
    - 8Crafter
---

:::warning Ore UI
The in-game supported unicode characters list only applies to JSON UI. Ore UI uses the `Minecraft-Seven.ttf` and `Minecraft-Seven-v4.ttf` files.
:::

Minecraft has 256 unicode characters that are supported by the in-game Mojangles font.

The unicode characters supported by the in-game Mojangles font, `Mojangles.ttf` file, `Minecraft-Seven.otf` file, and `Minecraft-Seven-v4.ttf` file do differ.

## In-Game Supported Unicode Characters

These are the characters supported in JSON UI. Their textures are determined by the `default8.png` file (`RP/font/default8.png`).

:::tip Windows
If you are on Windows and you have a keyboard with a numpad, Minecraft actually remaps the Windows ALT codes to correspond to one of the supported characters, the formula to get the ALT code to get a character in `default8.png` is `column + (row * 16)` (where row and column are 0-15).

Example: The division symbol is at row 16 column 7 in `default8.png`, so we convert them to be 0-indexed and they become row 15 column 6, `6 + (15 * 16) = 6 + 240 = 246`, so the ALT code to get the division symbol is `246`.
:::

:::warning
Some of these characters cannot be typed through the chat, or get turned into another character when typing it into the chat, but they can be entered in add-ons or other text inputs and will be displayed correctly anywhere they are used.

Affected characters will be labeled as such.
:::

<WikiImage
    src="/assets/images/text/fonts/default8/default8.png"
    alt="default8.png"
    caption="RP/font/default8.png"
    width="512"
    pixelated
/>

| Character | Unicode              | ALT Code | Preview                                                                                  | Width | Notes             |
| --------- | -------------------- | -------- | ---------------------------------------------------------------------------------------- | ----- | ----------------- |
| &#x00C0;  | U+00C0 (also U+0000) | ALT+0    | <img :src="'/assets/images/text/fonts/default8/default8_glyph_00.png'" loading="lazy" /> | 4     | See note 1 below. |
| &#x00C1;  | U+00C1 (also U+0001) | ALT+1    | <img :src="'/assets/images/text/fonts/default8/default8_glyph_01.png'" loading="lazy" /> | 6     | See note 1 below. |
| &#x00C2;  | U+00C2 (also U+0002) | ALT+2    | <img :src="'/assets/images/text/fonts/default8/default8_glyph_02.png'" loading="lazy" /> | 6     | See note 1 below. |
| &#x00C8;  | U+00C8 (also U+0003) | ALT+3    | <img :src="'/assets/images/text/fonts/default8/default8_glyph_03.png'" loading="lazy" /> | 6     | See note 1 below. |
| &#x00CA;  | U+00CA (also U+0004) | ALT+4    | <img :src="'/assets/images/text/fonts/default8/default8_glyph_04.png'" loading="lazy" /> | 6     | See note 1 below. |
| &#x00CB;  | U+00CB (also U+0005) | ALT+5    | <img :src="'/assets/images/text/fonts/default8/default8_glyph_05.png'" loading="lazy" /> | 6     | See note 1 below. |
| &#x00CD;  | U+00CD (also U+0006) | ALT+6    | <img :src="'/assets/images/text/fonts/default8/default8_glyph_06.png'" loading="lazy" /> | 4     | See note 1 below. |
| &#x00D3;  | U+00D3 (also U+0007) | ALT+7    | <img :src="'/assets/images/text/fonts/default8/default8_glyph_07.png'" loading="lazy" /> | 6     | See note 1 below. |
| &#x00D4;  | U+00D4 (also U+0008) | ALT+8    | <img :src="'/assets/images/text/fonts/default8/default8_glyph_08.png'" loading="lazy" /> | 6     | See note 1 below. |
| &#x00D5;  | U+00D5 (also U+0009) | ALT+9    | <img :src="'/assets/images/text/fonts/default8/default8_glyph_09.png'" loading="lazy" /> | 6     | See note 1 below. |
| &#x00DA;  | U+00DA (also U+000A) | ALT+10   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_0a.png'" loading="lazy" /> | 6     | See note 2 below. |
| &#x00DF;  | U+00DF (also U+000B) | ALT+11   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_0b.png'" loading="lazy" /> | 6     |                   |
| &#x00E3;  | U+00E3 (also U+000C) | ALT+12   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_0c.png'" loading="lazy" /> | 6     |                   |
| &#x00F5;  | U+00F5 (also U+000D) | ALT+13   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_0d.png'" loading="lazy" /> | 6     | See note 2 below. |
| &#x011F;  | U+011F (also U+000E) | ALT+14   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_0e.png'" loading="lazy" /> | 6     |                   |
| &#x0130;  | U+0130 (also U+000F) | ALT+15   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_0f.png'" loading="lazy" /> | 4     |                   |

-   _Note 1: When the ALT code for this character is used, it does not type anything unless you put type an extra 0 at the beginning of the ALT code (ex. ALT+01 instead of ALT+1), except for ALT+0 which does not type anything even if you prepend an extra 0. However, the character can still be pasted into text fields (both the control character and non-control character versions)._
-   _Note 2: When typed or pasted in a text field through its ALT code or control character, it will behave like pressing the `Enter` key (ex. sending a chat message, running a command, or defocusing the text field), to type it in chat without it behaving like the enter key, use the non-control character version instead._

| Character                     | Unicode              | ALT Code | Preview                                                                                  | Width | Notes             |
| ----------------------------- | -------------------- | -------- | ---------------------------------------------------------------------------------------- | ----- | ----------------- |
| &#x0131;                      | U+0131 (also U+0010) | ALT+16   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_10.png'" loading="lazy" /> | 4     |                   |
| &#x0152;                      | U+0152 (also U+0011) | ALT+17   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_11.png'" loading="lazy" /> | 6     |                   |
| &#x0153;                      | U+0153 (also U+0012) | ALT+18   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_12.png'" loading="lazy" /> | 7     |                   |
| &#x015E;                      | U+015E (also U+0013) | ALT+19   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_13.png'" loading="lazy" /> | 6     |                   |
| &#x015F;                      | U+015F (also U+0014) | ALT+20   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_14.png'" loading="lazy" /> | 6     |                   |
| &#x0174;                      | U+0174 (also U+0015) | ALT+21   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_15.png'" loading="lazy" /> | 6     |                   |
| &#x0175;                      | U+0175 (also U+0016) | ALT+22   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_16.png'" loading="lazy" /> | 6     |                   |
| &#x017E;                      | U+017E (also U+0017) | ALT+23   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_17.png'" loading="lazy" /> | 6     |                   |
| &#x0207;                      | U+0207 (also U+0018) | ALT+24   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_18.png'" loading="lazy" /> | 6     |                   |
| &#x00A7;                      | U+00A7 (also U+0019) | ALT+25   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_19.png'" loading="lazy" /> | 6     |                   |
| &#x00A9;                      | U+00A9 (also U+001A) | ALT+26   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_1a.png'" loading="lazy" /> | 9     |                   |
| &#x2122;                      | U+2122 (also U+001B) | ALT+27   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_1b.png'" loading="lazy" /> | 9     | See note 4 below. |
| &#x00AE;                      | U+00AE (also U+001C) | ALT+28   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_1c.png'" loading="lazy" /> | 9     | See note 4 below. |
| <span innerHTML="&#x001D;" /> | U+001D               | ALT+29   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_1d.png'" loading="lazy" /> | 1     | See note 5 below. |
| <span innerHTML="&#x001E;" /> | U+001E               | ALT+30   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_1e.png'" loading="lazy" /> | 1     | See note 5 below. |
| <span innerHTML="&#x001F;" /> | U+001F               | ALT+31   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_1f.png'" loading="lazy" /> | 1     | See note 5 below. |

<!-- Some characters have to use a span element so that the character is not replaced with U+FFFD because they are control characters. -->

-   _Note 3: If you use the ALT code or the U+0019 control character to type this, it will allow you to type a section sign (§) without it being hidden and used for formatting codes, great if you actually want to display that character._
-   _Note 4: This character was not added until the 1.21.2 hotfix._
-   _Note 5: This renders as a really thin (1px wide) space, great for aligning text._

| Character                                              | Unicode | ALT Code | Preview                                                                                  | Width | Notes |
| ------------------------------------------------------ | ------- | -------- | ---------------------------------------------------------------------------------------- | ----- | ----- |
| <span innerHTML="&#x0020;" style="white-space:pre;" /> | U+0020  | ALT+32   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_20.png'" loading="lazy" /> | 4     |       |
| &#x0021;                                               | U+0021  | ALT+33   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_21.png'" loading="lazy" /> | 2     |       |
| &#x0022;                                               | U+0022  | ALT+34   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_22.png'" loading="lazy" /> | 5     |       |
| &#x0023;                                               | U+0023  | ALT+35   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_23.png'" loading="lazy" /> | 6     |       |
| &#x0024;                                               | U+0024  | ALT+36   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_24.png'" loading="lazy" /> | 6     |       |
| &#x0025;                                               | U+0025  | ALT+37   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_25.png'" loading="lazy" /> | 6     |       |
| &#x0026;                                               | U+0026  | ALT+38   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_26.png'" loading="lazy" /> | 6     |       |
| &#x0027;                                               | U+0027  | ALT+39   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_27.png'" loading="lazy" /> | 3     |       |
| &#x0028;                                               | U+0028  | ALT+40   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_28.png'" loading="lazy" /> | 5     |       |
| &#x0029;                                               | U+0029  | ALT+41   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_29.png'" loading="lazy" /> | 5     |       |
| \*                                                     | U+002A  | ALT+42   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_2a.png'" loading="lazy" /> | 5     |       |
| &#x002B;                                               | U+002B  | ALT+43   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_2b.png'" loading="lazy" /> | 6     |       |
| &#x002C;                                               | U+002C  | ALT+44   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_2c.png'" loading="lazy" /> | 2     |       |
| &#x002D;                                               | U+002D  | ALT+45   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_2d.png'" loading="lazy" /> | 6     |       |
| &#x002E;                                               | U+002E  | ALT+46   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_2e.png'" loading="lazy" /> | 2     |       |
| &#x002F;                                               | U+002F  | ALT+47   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_2f.png'" loading="lazy" /> | 6     |       |

<!-- The space character needs to use the span element so that it is rendered. -->

| Character | Unicode | ALT Code | Preview                                                                                  | Width | Notes |
| --------- | ------- | -------- | ---------------------------------------------------------------------------------------- | ----- | ----- |
| &#x0030;  | U+0030  | ALT+48   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_30.png'" loading="lazy" /> | 6     |       |
| &#x0031;  | U+0031  | ALT+49   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_31.png'" loading="lazy" /> | 6     |       |
| &#x0032;  | U+0032  | ALT+50   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_32.png'" loading="lazy" /> | 6     |       |
| &#x0033;  | U+0033  | ALT+51   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_33.png'" loading="lazy" /> | 6     |       |
| &#x0034;  | U+0034  | ALT+52   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_34.png'" loading="lazy" /> | 6     |       |
| &#x0035;  | U+0035  | ALT+53   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_35.png'" loading="lazy" /> | 6     |       |
| &#x0036;  | U+0036  | ALT+54   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_36.png'" loading="lazy" /> | 6     |       |
| &#x0037;  | U+0037  | ALT+55   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_37.png'" loading="lazy" /> | 6     |       |
| &#x0038;  | U+0038  | ALT+56   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_38.png'" loading="lazy" /> | 6     |       |
| &#x0039;  | U+0039  | ALT+57   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_39.png'" loading="lazy" /> | 6     |       |
| &#x003A;  | U+003A  | ALT+58   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_3a.png'" loading="lazy" /> | 2     |       |
| &#x003B;  | U+003B  | ALT+59   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_3b.png'" loading="lazy" /> | 2     |       |
| &#x003C;  | U+003C  | ALT+60   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_3c.png'" loading="lazy" /> | 5     |       |
| &#x003D;  | U+003D  | ALT+61   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_3d.png'" loading="lazy" /> | 6     |       |
| &#x003E;  | U+003E  | ALT+62   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_3e.png'" loading="lazy" /> | 5     |       |
| &#x003F;  | U+003F  | ALT+63   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_3f.png'" loading="lazy" /> | 6     |       |

| Character | Unicode | ALT Code | Preview                                                                                  | Width | Notes |
| --------- | ------- | -------- | ---------------------------------------------------------------------------------------- | ----- | ----- |
| &#x0040;  | U+0040  | ALT+64   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_40.png'" loading="lazy" /> | 7     |       |
| &#x0041;  | U+0041  | ALT+65   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_41.png'" loading="lazy" /> | 6     |       |
| &#x0042;  | U+0042  | ALT+66   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_42.png'" loading="lazy" /> | 6     |       |
| &#x0043;  | U+0043  | ALT+67   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_43.png'" loading="lazy" /> | 6     |       |
| &#x0044;  | U+0044  | ALT+68   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_44.png'" loading="lazy" /> | 6     |       |
| &#x0045;  | U+0045  | ALT+69   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_45.png'" loading="lazy" /> | 6     |       |
| &#x0046;  | U+0046  | ALT+70   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_46.png'" loading="lazy" /> | 6     |       |
| &#x0047;  | U+0047  | ALT+71   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_47.png'" loading="lazy" /> | 6     |       |
| &#x0048;  | U+0048  | ALT+72   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_48.png'" loading="lazy" /> | 6     |       |
| &#x0049;  | U+0049  | ALT+73   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_49.png'" loading="lazy" /> | 4     |       |
| &#x004A;  | U+004A  | ALT+74   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_4a.png'" loading="lazy" /> | 6     |       |
| &#x004B;  | U+004B  | ALT+75   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_4b.png'" loading="lazy" /> | 6     |       |
| &#x004C;  | U+004C  | ALT+76   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_4c.png'" loading="lazy" /> | 6     |       |
| &#x004D;  | U+004D  | ALT+77   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_4d.png'" loading="lazy" /> | 6     |       |
| &#x004E;  | U+004E  | ALT+78   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_4e.png'" loading="lazy" /> | 6     |       |
| &#x004F;  | U+004F  | ALT+79   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_4f.png'" loading="lazy" /> | 6     |       |

| Character | Unicode | ALT Code | Preview                                                                                  | Width | Notes |
| --------- | ------- | -------- | ---------------------------------------------------------------------------------------- | ----- | ----- |
| &#x0050;  | U+0050  | ALT+80   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_50.png'" loading="lazy" /> | 6     |       |
| &#x0051;  | U+0051  | ALT+81   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_51.png'" loading="lazy" /> | 6     |       |
| &#x0052;  | U+0052  | ALT+82   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_52.png'" loading="lazy" /> | 6     |       |
| &#x0053;  | U+0053  | ALT+83   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_53.png'" loading="lazy" /> | 6     |       |
| &#x0054;  | U+0054  | ALT+84   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_54.png'" loading="lazy" /> | 6     |       |
| &#x0055;  | U+0055  | ALT+85   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_55.png'" loading="lazy" /> | 6     |       |
| &#x0056;  | U+0056  | ALT+86   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_56.png'" loading="lazy" /> | 6     |       |
| &#x0057;  | U+0057  | ALT+87   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_57.png'" loading="lazy" /> | 6     |       |
| &#x0058;  | U+0058  | ALT+88   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_58.png'" loading="lazy" /> | 6     |       |
| &#x0059;  | U+0059  | ALT+89   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_59.png'" loading="lazy" /> | 6     |       |
| &#x005A;  | U+005A  | ALT+90   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_5a.png'" loading="lazy" /> | 6     |       |
| &#x005B;  | U+005B  | ALT+91   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_5b.png'" loading="lazy" /> | 4     |       |
| &#x005C;  | U+005C  | ALT+92   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_5c.png'" loading="lazy" /> | 6     |       |
| &#x005D;  | U+005D  | ALT+93   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_5d.png'" loading="lazy" /> | 4     |       |
| &#x005E;  | U+005E  | ALT+94   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_5e.png'" loading="lazy" /> | 6     |       |
| \_        | U+005F  | ALT+95   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_5f.png'" loading="lazy" /> | 6     |       |

| Character | Unicode | ALT Code | Preview                                                                                  | Width | Notes |
| --------- | ------- | -------- | ---------------------------------------------------------------------------------------- | ----- | ----- |
| &#x0060;  | U+0060  | ALT+96   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_60.png'" loading="lazy" /> | 3     |       |
| &#x0061;  | U+0061  | ALT+97   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_61.png'" loading="lazy" /> | 6     |       |
| &#x0062;  | U+0062  | ALT+98   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_62.png'" loading="lazy" /> | 6     |       |
| &#x0063;  | U+0063  | ALT+99   | <img :src="'/assets/images/text/fonts/default8/default8_glyph_63.png'" loading="lazy" /> | 6     |       |
| &#x0064;  | U+0064  | ALT+100  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_64.png'" loading="lazy" /> | 6     |       |
| &#x0065;  | U+0065  | ALT+101  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_65.png'" loading="lazy" /> | 6     |       |
| &#x0066;  | U+0066  | ALT+102  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_66.png'" loading="lazy" /> | 5     |       |
| &#x0067;  | U+0067  | ALT+103  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_67.png'" loading="lazy" /> | 6     |       |
| &#x0068;  | U+0068  | ALT+104  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_68.png'" loading="lazy" /> | 6     |       |
| &#x0069;  | U+0069  | ALT+105  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_69.png'" loading="lazy" /> | 2     |       |
| &#x006A;  | U+006A  | ALT+106  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_6a.png'" loading="lazy" /> | 6     |       |
| &#x006B;  | U+006B  | ALT+107  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_6b.png'" loading="lazy" /> | 6     |       |
| &#x006C;  | U+006C  | ALT+108  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_6c.png'" loading="lazy" /> | 3     |       |
| &#x006D;  | U+006D  | ALT+109  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_6d.png'" loading="lazy" /> | 6     |       |
| &#x006E;  | U+006E  | ALT+110  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_6e.png'" loading="lazy" /> | 6     |       |
| &#x006F;  | U+006F  | ALT+111  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_6f.png'" loading="lazy" /> | 6     |       |

| Character                     | Unicode | ALT Code | Preview                                                                                  | Width | Notes |
| ----------------------------- | ------- | -------- | ---------------------------------------------------------------------------------------- | ----- | ----- |
| &#x0070;                      | U+0070  | ALT+112  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_70.png'" loading="lazy" /> | 6     |       |
| &#x0071;                      | U+0071  | ALT+113  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_71.png'" loading="lazy" /> | 6     |       |
| &#x0072;                      | U+0072  | ALT+114  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_72.png'" loading="lazy" /> | 6     |       |
| &#x0073;                      | U+0073  | ALT+115  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_73.png'" loading="lazy" /> | 6     |       |
| &#x0074;                      | U+0074  | ALT+116  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_74.png'" loading="lazy" /> | 4     |       |
| &#x0075;                      | U+0075  | ALT+117  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_75.png'" loading="lazy" /> | 6     |       |
| &#x0076;                      | U+0076  | ALT+118  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_76.png'" loading="lazy" /> | 6     |       |
| &#x0077;                      | U+0077  | ALT+119  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_77.png'" loading="lazy" /> | 6     |       |
| &#x0078;                      | U+0078  | ALT+120  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_78.png'" loading="lazy" /> | 6     |       |
| &#x0079;                      | U+0079  | ALT+121  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_79.png'" loading="lazy" /> | 6     |       |
| &#x007A;                      | U+007A  | ALT+122  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_7a.png'" loading="lazy" /> | 6     |       |
| &#x007B;                      | U+007B  | ALT+123  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_7b.png'" loading="lazy" /> | 5     |       |
| &#x0021;                      | U+0021  | ALT+124  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_7c.png'" loading="lazy" /> | 2     |       |
| &#x007D;                      | U+007D  | ALT+125  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_7d.png'" loading="lazy" /> | 5     |       |
| &#x007E;                      | U+007E  | ALT+126  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_7e.png'" loading="lazy" /> | 7     |       |
| <span innerHTML="&#x007F;" /> | U+007F  | ALT+127  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_7f.png'" loading="lazy" /> | 6     |       |

<!-- The delete character has to use a span element so that the character is not replaced with U+FFFD because the delete character is a control character. -->

| Character | Unicode | ALT Code | Preview                                                                                  | Width | Notes |
| --------- | ------- | -------- | ---------------------------------------------------------------------------------------- | ----- | ----- |
| &#x00C7;  | U+00C7  | ALT+128  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_80.png'" loading="lazy" /> | 6     |       |
| &#x00FC;  | U+00FC  | ALT+129  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_81.png'" loading="lazy" /> | 6     |       |
| &#x00E9;  | U+00E9  | ALT+130  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_82.png'" loading="lazy" /> | 6     |       |
| &#x00E2;  | U+00E2  | ALT+131  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_83.png'" loading="lazy" /> | 6     |       |
| &#x00E4;  | U+00E4  | ALT+132  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_84.png'" loading="lazy" /> | 6     |       |
| &#x00E0;  | U+00E0  | ALT+133  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_85.png'" loading="lazy" /> | 6     |       |
| &#x00E5;  | U+00E5  | ALT+134  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_86.png'" loading="lazy" /> | 6     |       |
| &#x00E7;  | U+00E7  | ALT+135  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_87.png'" loading="lazy" /> | 6     |       |
| &#x00EA;  | U+00EA  | ALT+136  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_88.png'" loading="lazy" /> | 6     |       |
| &#x00EB;  | U+00EB  | ALT+137  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_89.png'" loading="lazy" /> | 6     |       |
| &#x00E8;  | U+00E8  | ALT+138  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_8a.png'" loading="lazy" /> | 6     |       |
| &#x00EF;  | U+00EF  | ALT+139  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_8b.png'" loading="lazy" /> | 4     |       |
| &#x00EE;  | U+00EE  | ALT+140  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_8c.png'" loading="lazy" /> | 6     |       |
| &#x00EC;  | U+00EC  | ALT+141  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_8d.png'" loading="lazy" /> | 3     |       |
| &#x00C4;  | U+00C4  | ALT+142  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_8e.png'" loading="lazy" /> | 6     |       |
| &#x00C5;  | U+00C5  | ALT+143  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_8f.png'" loading="lazy" /> | 6     |       |

| Character | Unicode | ALT Code | Preview                                                                                  | Width | Notes             |
| --------- | ------- | -------- | ---------------------------------------------------------------------------------------- | ----- | ----------------- |
| &#x00C9;  | U+00C9  | ALT+144  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_90.png'" loading="lazy" /> | 6     |                   |
| &#x00E6;  | U+00E6  | ALT+145  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_91.png'" loading="lazy" /> | 6     |                   |
| &#x00C6;  | U+00C6  | ALT+146  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_92.png'" loading="lazy" /> | 6     |                   |
| &#x00F4;  | U+00F4  | ALT+147  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_93.png'" loading="lazy" /> | 6     |                   |
| &#x00F6;  | U+00F6  | ALT+148  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_94.png'" loading="lazy" /> | 6     |                   |
| &#x00F2;  | U+00F2  | ALT+149  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_95.png'" loading="lazy" /> | 6     |                   |
| &#x00FB;  | U+00FB  | ALT+150  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_96.png'" loading="lazy" /> | 6     |                   |
| &#x00F9;  | U+00F9  | ALT+151  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_97.png'" loading="lazy" /> | 6     |                   |
| &#x00FF;  | U+00FF  | ALT+152  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_98.png'" loading="lazy" /> | 6     |                   |
| &#x00D6;  | U+00D6  | ALT+153  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_99.png'" loading="lazy" /> | 6     |                   |
| &#x00DC;  | U+00DC  | ALT+154  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_9a.png'" loading="lazy" /> | 6     |                   |
| &#x00F8;  | U+00F8  | N/A      | <img :src="'/assets/images/text/fonts/default8/default8_glyph_9b.png'" loading="lazy" /> | 6     | See note 6 below. |
| &#x00A3;  | U+00A3  | ALT+156  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_9c.png'" loading="lazy" /> | 6     |                   |
| &#x00D8;  | U+00D8  | N/A      | <img :src="'/assets/images/text/fonts/default8/default8_glyph_9d.png'" loading="lazy" /> | 6     | See note 7 below. |
| &#x00D7;  | U+00D7  | N/A      | <img :src="'/assets/images/text/fonts/default8/default8_glyph_9e.png'" loading="lazy" /> | 4     | See note 8 below. |
| &#x0192;  | U+0192  | ALT+159  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_9f.png'" loading="lazy" /> | 6     |                   |

-   _Note 6: The ALT code for this character is broken (ALT+155), it maps to U+00A2 (¢) which is not supported by the in-game Mojangles font, to type this character you must copy and paste the U+00F8 character into the game instead of typing the ALT code._
-   _Note 7: The ALT code for this character is broken (ALT+157), it maps to U+00A5 (¥) which is not supported by the in-game Mojangles font, to type this character you must copy and paste the U+00D8 character into the game instead of typing the ALT code._
-   _Note 8: The ALT code for this character is broken (ALT+158), it maps to U+20A7 (₧) which is not supported by the in-game Mojangles font, to type this character you must copy and paste the U+00D7 character into the game instead of typing the ALT code._

| Character | Unicode | ALT Code | Preview                                                                                  | Width | Notes              |
| --------- | ------- | -------- | ---------------------------------------------------------------------------------------- | ----- | ------------------ |
| &#x00E1;  | U+00E1  | ALT+160  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_a0.png'" loading="lazy" /> | 6     |                    |
| &#x00ED;  | U+00ED  | ALT+161  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_a1.png'" loading="lazy" /> | 3     |                    |
| &#x00F3;  | U+00F3  | ALT+162  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_a2.png'" loading="lazy" /> | 6     |                    |
| &#x00FA;  | U+00FA  | ALT+163  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_a3.png'" loading="lazy" /> | 6     |                    |
| &#x00F1;  | U+00F1  | ALT+164  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_a4.png'" loading="lazy" /> | 6     |                    |
| &#x00D1;  | U+00D1  | ALT+165  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_a5.png'" loading="lazy" /> | 6     |                    |
| &#x00AA;  | U+00AA  | ALT+166  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_a6.png'" loading="lazy" /> | 6     |                    |
| &#x00BA;  | U+00BA  | ALT+167  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_a7.png'" loading="lazy" /> | 6     |                    |
| &#x00BF;  | U+00BF  | ALT+168  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_a8.png'" loading="lazy" /> | 6     |                    |
| N/A       | N/A     | N/A      | <img :src="'/assets/images/text/fonts/default8/default8_glyph_a9.png'" loading="lazy" /> | ?     | See note 9 below.  |
| &#x00AC;  | U+00AC  | ALT+170  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_aa.png'" loading="lazy" /> | 6     |                    |
| &#x00BD;  | U+00BD  | ALT+171  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_ab.png'" loading="lazy" /> | 6     |                    |
| &#x00BC;  | U+00BC  | ALT+172  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_ac.png'" loading="lazy" /> | 6     |                    |
| &#x00A1;  | U+00A1  | ALT+173  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_ad.png'" loading="lazy" /> | 2     |                    |
| &#x00AB;  | U+00AB  | ALT+174  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_ae.png'" loading="lazy" /> | 6     | See note 10 below. |
| &#x00BB;  | U+00BB  | ALT+175  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_af.png'" loading="lazy" /> | 6     | See note 10 below. |

-   _Note 9: This character is buged, although its ALT code should be `ALT+169`, when using it, it results in U+2310 (⌐) which is not supported by the in-game Mojangles font, as such, it is unknown what unicode character is used to display the associated character in the in-game Mojangles font, if you are able to find out, please add that information into the table. This character at this position in Java Edition's `ascii.png` used to be the ⌐ character (which is what the ALT code currently maps to), which is what the `default8.png` image is based off, but was changed to the current one which is a broken version of the © character before it was copied to Bedrock, so as a result Bedrock still has this broken character, but the © character it mapped to a different character which is a correct version of the © character._
-   _Note 10: When typed in-game through the chat, it is replaced with a quotation mark (when displayed using a method other than typing in the chat text box (ex. typing in a different text box, script API, lang files, or escape codes with `/tellraw`), it will not be replaced and will be displayed correctly)._

| Character | Unicode | ALT Code | Preview                                                                                  | Width | Notes |
| --------- | ------- | -------- | ---------------------------------------------------------------------------------------- | ----- | ----- |
| &#x2591;  | U+2591  | ALT+176  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_b0.png'" loading="lazy" /> | 8     |       |
| &#x2592;  | U+2592  | ALT+177  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_b1.png'" loading="lazy" /> | 9     |       |
| &#x2593;  | U+2593  | ALT+178  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_b2.png'" loading="lazy" /> | 9     |       |
| &#x2502;  | U+2502  | ALT+179  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_b3.png'" loading="lazy" /> | 6     |       |
| &#x2524;  | U+2524  | ALT+180  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_b4.png'" loading="lazy" /> | 6     |       |
| &#x2561;  | U+2561  | ALT+181  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_b5.png'" loading="lazy" /> | 6     |       |
| &#x2562;  | U+2562  | ALT+182  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_b6.png'" loading="lazy" /> | 8     |       |
| &#x2556;  | U+2556  | ALT+183  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_b7.png'" loading="lazy" /> | 8     |       |
| &#x2555;  | U+2555  | ALT+184  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_b8.png'" loading="lazy" /> | 6     |       |
| &#x2563;  | U+2563  | ALT+185  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_b9.png'" loading="lazy" /> | 8     |       |
| &#x2551;  | U+2551  | ALT+186  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_ba.png'" loading="lazy" /> | 8     |       |
| &#x2557;  | U+2557  | ALT+187  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_bb.png'" loading="lazy" /> | 8     |       |
| &#x255D;  | U+255D  | ALT+188  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_bc.png'" loading="lazy" /> | 8     |       |
| &#x255C;  | U+255C  | ALT+189  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_bd.png'" loading="lazy" /> | 8     |       |
| &#x255B;  | U+255B  | ALT+190  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_be.png'" loading="lazy" /> | 6     |       |
| &#x2510;  | U+2510  | ALT+191  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_bf.png'" loading="lazy" /> | 6     |       |

| Character | Unicode | ALT Code | Preview                                                                                  | Width | Notes |
| --------- | ------- | -------- | ---------------------------------------------------------------------------------------- | ----- | ----- |
| &#x2514;  | U+2514  | ALT+192  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_c0.png'" loading="lazy" /> | 9     |       |
| &#x2534;  | U+2534  | ALT+193  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_c1.png'" loading="lazy" /> | 9     |       |
| &#x252C;  | U+252C  | ALT+194  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_c2.png'" loading="lazy" /> | 9     |       |
| &#x251C;  | U+251C  | ALT+195  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_c3.png'" loading="lazy" /> | 9     |       |
| &#x2500;  | U+2500  | ALT+196  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_c4.png'" loading="lazy" /> | 9     |       |
| &#x253C;  | U+253C  | ALT+197  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_c5.png'" loading="lazy" /> | 9     |       |
| &#x255E;  | U+255E  | ALT+198  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_c6.png'" loading="lazy" /> | 9     |       |
| &#x255F;  | U+255F  | ALT+199  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_c7.png'" loading="lazy" /> | 9     |       |
| &#x255A;  | U+255A  | ALT+200  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_c8.png'" loading="lazy" /> | 9     |       |
| &#x2554;  | U+2554  | ALT+201  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_c9.png'" loading="lazy" /> | 9     |       |
| &#x2569;  | U+2569  | ALT+202  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_ca.png'" loading="lazy" /> | 9     |       |
| &#x2566;  | U+2566  | ALT+203  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_cb.png'" loading="lazy" /> | 9     |       |
| &#x2560;  | U+2560  | ALT+204  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_cc.png'" loading="lazy" /> | 9     |       |
| &#x2550;  | U+2550  | ALT+205  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_cd.png'" loading="lazy" /> | 9     |       |
| &#x256C;  | U+256C  | ALT+206  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_ce.png'" loading="lazy" /> | 9     |       |
| &#x2567;  | U+2567  | ALT+207  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_cf.png'" loading="lazy" /> | 9     |       |

| Character | Unicode | ALT Code | Preview                                                                                  | Width | Notes |
| --------- | ------- | -------- | ---------------------------------------------------------------------------------------- | ----- | ----- |
| &#x2568;  | U+2568  | ALT+208  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_d0.png'" loading="lazy" /> | 9     |       |
| &#x2564;  | U+2564  | ALT+209  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_d1.png'" loading="lazy" /> | 9     |       |
| &#x2565;  | U+2565  | ALT+210  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_d2.png'" loading="lazy" /> | 9     |       |
| &#x2559;  | U+2559  | ALT+211  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_d3.png'" loading="lazy" /> | 9     |       |
| &#x2558;  | U+2558  | ALT+212  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_d4.png'" loading="lazy" /> | 9     |       |
| &#x2552;  | U+2552  | ALT+213  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_d5.png'" loading="lazy" /> | 9     |       |
| &#x2553;  | U+2553  | ALT+214  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_d6.png'" loading="lazy" /> | 9     |       |
| &#x256B;  | U+256B  | ALT+215  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_d7.png'" loading="lazy" /> | 9     |       |
| &#x256A;  | U+256A  | ALT+216  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_d8.png'" loading="lazy" /> | 9     |       |
| &#x2518;  | U+2518  | ALT+217  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_d9.png'" loading="lazy" /> | 6     |       |
| &#x250C;  | U+250C  | ALT+218  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_da.png'" loading="lazy" /> | 9     |       |
| &#x2588;  | U+2588  | ALT+219  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_db.png'" loading="lazy" /> | 9     |       |
| &#x2584;  | U+2584  | ALT+220  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_dc.png'" loading="lazy" /> | 9     |       |
| &#x258C;  | U+258C  | ALT+221  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_dd.png'" loading="lazy" /> | 5     |       |
| &#x2590;  | U+2590  | ALT+222  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_de.png'" loading="lazy" /> | 9     |       |
| &#x2580;  | U+2580  | ALT+223  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_df.png'" loading="lazy" /> | 9     |       |

| Character | Unicode | ALT Code | Preview                                                                                  | Width | Notes              |
| --------- | ------- | -------- | ---------------------------------------------------------------------------------------- | ----- | ------------------ |
| &#x03B1;  | U+03B1  | ALT+224  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_e0.png'" loading="lazy" /> | 8     |                    |
| &#x03B2;  | U+03B2  | N/A      | <img :src="'/assets/images/text/fonts/default8/default8_glyph_e1.png'" loading="lazy" /> | 7     | See note 11 below. |
| &#x0393;  | U+0393  | ALT+226  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_e2.png'" loading="lazy" /> | 7     |                    |
| &#x03C0;  | U+03C0  | ALT+227  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_e3.png'" loading="lazy" /> | 8     |                    |
| &#x03A3;  | U+03A3  | ALT+228  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_e4.png'" loading="lazy" /> | 7     |                    |
| &#x03C3;  | U+03C3  | ALT+229  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_e5.png'" loading="lazy" /> | 8     |                    |
| &#x03BC;  | U+03BC  | N/A      | <img :src="'/assets/images/text/fonts/default8/default8_glyph_e6.png'" loading="lazy" /> | 8     | See note 12 below. |
| &#x03C4;  | U+03C4  | ALT+231  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_e7.png'" loading="lazy" /> | 8     |                    |
| &#x03A6;  | U+03A6  | ALT+232  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_e8.png'" loading="lazy" /> | 7     |                    |
| &#x0398;  | U+0398  | ALT+233  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_e9.png'" loading="lazy" /> | 8     |                    |
| &#x03A9;  | U+03A9  | ALT+234  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_ea.png'" loading="lazy" /> | 8     |                    |
| &#x03B4;  | U+03B4  | ALT+235  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_eb.png'" loading="lazy" /> | 7     |                    |
| &#x221E;  | U+221E  | ALT+236  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_ec.png'" loading="lazy" /> | 8     |                    |
| &#x2205;  | U+2205  | N/A      | <img :src="'/assets/images/text/fonts/default8/default8_glyph_ed.png'" loading="lazy" /> | 9     | See note 13 below. |
| &#x2208;  | U+2208  | N/A      | <img :src="'/assets/images/text/fonts/default8/default8_glyph_ee.png'" loading="lazy" /> | 6     | See note 14 below. |
| &#x2229;  | U+2229  | ALT+239  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_ef.png'" loading="lazy" /> | 7     |                    |

-   _Note 11: The ALT code for this character is broken (ALT+225), it maps to U+00Df (ß) which is for a different character in the in-game Mojangles font, to type this character you must copy and paste the U+03B2 character into the game instead of typing the ALT code._
-   _Note 12: The ALT code for this character is broken (ALT+230), it maps to U+00B5 (µ (Micro Sign)) which is not supported by the in-game Mojangles font, it was supposed to map to U+03BC (μ (Greek Small Letter Mu)), to type this character you must copy and paste the U+03BC character into the game instead of typing the ALT code._
-   _Note 13: The ALT code for this character is broken (ALT+237), it maps to U+03C6 (φ) which is not supported by the in-game Mojangles font, to type this character you must copy and paste the U+2205 character into the game instead of typing the ALT code._
-   _Note 14: The ALT code for this character is broken (ALT+238), it maps to U+03B5 (ε) which is not supported by the in-game Mojangles font, to type this character you must copy and paste the U+2208 character into the game instead of typing the ALT code._

| Character                         | Unicode | ALT Code | Preview                                                                                  | Width | Notes |
| --------------------------------- | ------- | -------- | ---------------------------------------------------------------------------------------- | ----- | ----- |
| &#x2261;                          | U+2261  | ALT+240  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_f0.png'" loading="lazy" /> | 6     |       |
| &#x00B1;                          | U+00B1  | ALT+241  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_f1.png'" loading="lazy" /> | 6     |       |
| &#x2265;                          | U+2265  | ALT+242  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_f2.png'" loading="lazy" /> | 6     |       |
| &#x2264;                          | U+2264  | ALT+243  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_f3.png'" loading="lazy" /> | 6     |       |
| &#x2320;                          | U+2320  | ALT+244  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_f4.png'" loading="lazy" /> | 9     |       |
| &#x2321;                          | U+2321  | ALT+245  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_f5.png'" loading="lazy" /> | 6     |       |
| &#x00F7;                          | U+00F7  | ALT+246  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_f6.png'" loading="lazy" /> | 7     |       |
| &#x2248;                          | U+2248  | ALT+247  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_f7.png'" loading="lazy" /> | 8     |       |
| &#x00B0;                          | U+00B0  | ALT+248  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_f8.png'" loading="lazy" /> | 7     |       |
| &#x2219;                          | U+2219  | ALT+249  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_f9.png'" loading="lazy" /> | 6     |       |
| &#x00B7;                          | U+00B7  | ALT+250  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_fa.png'" loading="lazy" /> | 6     |       |
| &#x221A;                          | U+221A  | ALT+251  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_fb.png'" loading="lazy" /> | 9     |       |
| &#x207F;                          | U+207F  | ALT+252  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_fc.png'" loading="lazy" /> | 7     |       |
| &#x00B2;                          | U+00B2  | ALT+253  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_fd.png'" loading="lazy" /> | 6     |       |
| &#x25A0;                          | U+25A0  | ALT+254  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_fe.png'" loading="lazy" /> | 7     |       |
| <UnicodeCopyButton code="00A0" /> | U+00A0  | ALT+255  | <img :src="'/assets/images/text/fonts/default8/default8_glyph_ff.png'" loading="lazy" /> | 4     |       |

<!-- The non-breaking space character has to use a button element that has a click action so that it can be copied without being replaced with a regular space character. -->

## Mojangles Supported Unicode Characters

These are the characters supported in the Mojangles.ttf file. The file can be found in `data/fonts/Mojangles.ttf`.

Unicode Range: `U+0000, U+000D, U+0020-007E, U+00A0-00FF, U+0131, U+0141-0142, U+0152-0153, U+0160-0161, U+0178, U+017D-017E, U+0192, U+02C6-02C7, U+02D8-02DD, U+03C0, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122, U+2126, U+2202, U+2206, U+220F, U+2211-2212, U+221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+FB01-FB02, U+10000-10002`

<Spoiler title="Unicode Table">

| Character                                              | Unicode | Preview                                                                                                            | Notes |
| ------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------ | ----- |
| N/A                                                    | U+0000  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_0.svg'" class="svgFontGlyph" loading="lazy" />     |       |
| <UnicodeCopyButton code="000D" />                      | U+000D  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_13.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| <span innerHTML="&#x0020;" style="white-space:pre;" /> | U+0020  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_32.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0021;                                               | U+0021  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_33.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0022;                                               | U+0022  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_34.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0023;                                               | U+0023  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_35.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0024;                                               | U+0024  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_36.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0025;                                               | U+0025  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_37.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0026;                                               | U+0026  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_38.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0027;                                               | U+0027  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_39.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0028;                                               | U+0028  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_40.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0029;                                               | U+0029  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_41.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| \*                                                     | U+002A  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_42.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002B;                                               | U+002B  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_43.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002C;                                               | U+002C  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_44.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002D;                                               | U+002D  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_45.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002E;                                               | U+002E  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_46.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002F;                                               | U+002F  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_47.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0030;                                               | U+0030  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_48.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0031;                                               | U+0031  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_49.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0032;                                               | U+0032  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_50.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0033;                                               | U+0033  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_51.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0034;                                               | U+0034  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_52.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0035;                                               | U+0035  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_53.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0036;                                               | U+0036  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_54.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0037;                                               | U+0037  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_55.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0038;                                               | U+0038  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_56.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0039;                                               | U+0039  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_57.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003A;                                               | U+003A  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_58.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003B;                                               | U+003B  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_59.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003C;                                               | U+003C  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_60.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003D;                                               | U+003D  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_61.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003E;                                               | U+003E  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_62.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003F;                                               | U+003F  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_63.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0040;                                               | U+0040  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_64.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0041;                                               | U+0041  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_65.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0042;                                               | U+0042  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_66.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0043;                                               | U+0043  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_67.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0044;                                               | U+0044  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_68.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0045;                                               | U+0045  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_69.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0046;                                               | U+0046  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_70.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0047;                                               | U+0047  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_71.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0048;                                               | U+0048  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_72.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0049;                                               | U+0049  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_73.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004A;                                               | U+004A  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_74.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004B;                                               | U+004B  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_75.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004C;                                               | U+004C  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_76.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004D;                                               | U+004D  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_77.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004E;                                               | U+004E  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_78.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004F;                                               | U+004F  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_79.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0050;                                               | U+0050  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_80.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0051;                                               | U+0051  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_81.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0052;                                               | U+0052  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_82.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0053;                                               | U+0053  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_83.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0054;                                               | U+0054  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_84.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0055;                                               | U+0055  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_85.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0056;                                               | U+0056  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_86.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0057;                                               | U+0057  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_87.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0058;                                               | U+0058  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_88.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0059;                                               | U+0059  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_89.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005A;                                               | U+005A  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_90.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005B;                                               | U+005B  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_91.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005C;                                               | U+005C  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_92.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005D;                                               | U+005D  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_93.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005E;                                               | U+005E  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_94.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| \_                                                     | U+005F  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_95.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0060;                                               | U+0060  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_96.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0061;                                               | U+0061  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_97.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0062;                                               | U+0062  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_98.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0063;                                               | U+0063  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_99.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0064;                                               | U+0064  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_100.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0065;                                               | U+0065  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_101.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0066;                                               | U+0066  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_102.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0067;                                               | U+0067  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_103.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0068;                                               | U+0068  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_104.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0069;                                               | U+0069  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_105.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006A;                                               | U+006A  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_106.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006B;                                               | U+006B  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_107.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006C;                                               | U+006C  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_108.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006D;                                               | U+006D  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_109.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006E;                                               | U+006E  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_110.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006F;                                               | U+006F  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_111.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0070;                                               | U+0070  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_112.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0071;                                               | U+0071  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_113.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0072;                                               | U+0072  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_114.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0073;                                               | U+0073  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_115.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0074;                                               | U+0074  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_116.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0075;                                               | U+0075  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_117.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0076;                                               | U+0076  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_118.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0077;                                               | U+0077  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_119.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0078;                                               | U+0078  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_120.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0079;                                               | U+0079  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_121.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007A;                                               | U+007A  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_122.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007B;                                               | U+007B  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_123.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007C;                                               | U+007C  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_124.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007D;                                               | U+007D  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_125.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007E;                                               | U+007E  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_126.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| <UnicodeCopyButton code="00A0" />                      | U+00A0  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_160.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A1;                                               | U+00A1  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_161.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A2;                                               | U+00A2  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_162.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A3;                                               | U+00A3  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_163.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A4;                                               | U+00A4  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_164.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A5;                                               | U+00A5  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_165.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A6;                                               | U+00A6  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_166.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A7;                                               | U+00A7  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_167.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A8;                                               | U+00A8  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_168.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A9;                                               | U+00A9  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_169.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AA;                                               | U+00AA  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_170.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AB;                                               | U+00AB  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_171.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AC;                                               | U+00AC  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_172.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AD;                                               | U+00AD  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_173.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AE;                                               | U+00AE  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_174.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AF;                                               | U+00AF  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_175.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B0;                                               | U+00B0  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_176.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B1;                                               | U+00B1  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_177.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B2;                                               | U+00B2  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_178.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B3;                                               | U+00B3  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_179.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B4;                                               | U+00B4  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_180.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B5;                                               | U+00B5  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_181.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B6;                                               | U+00B6  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_182.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B7;                                               | U+00B7  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_183.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B8;                                               | U+00B8  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_184.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B9;                                               | U+00B9  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_185.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BA;                                               | U+00BA  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_186.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BB;                                               | U+00BB  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_187.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BC;                                               | U+00BC  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_188.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BD;                                               | U+00BD  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_189.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BE;                                               | U+00BE  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_190.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BF;                                               | U+00BF  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_191.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C0;                                               | U+00C0  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_192.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C1;                                               | U+00C1  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_193.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C2;                                               | U+00C2  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_194.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C3;                                               | U+00C3  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_195.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C4;                                               | U+00C4  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_196.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C5;                                               | U+00C5  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_197.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C6;                                               | U+00C6  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_198.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C7;                                               | U+00C7  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_199.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C8;                                               | U+00C8  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_200.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C9;                                               | U+00C9  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_201.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CA;                                               | U+00CA  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_202.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CB;                                               | U+00CB  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_203.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CC;                                               | U+00CC  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_204.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CD;                                               | U+00CD  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_205.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CE;                                               | U+00CE  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_206.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CF;                                               | U+00CF  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_207.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D0;                                               | U+00D0  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_208.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D1;                                               | U+00D1  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_209.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D2;                                               | U+00D2  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_210.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D3;                                               | U+00D3  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_211.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D4;                                               | U+00D4  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_212.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D5;                                               | U+00D5  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_213.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D6;                                               | U+00D6  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_214.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D7;                                               | U+00D7  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_215.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D8;                                               | U+00D8  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_216.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D9;                                               | U+00D9  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_217.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DA;                                               | U+00DA  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_218.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DB;                                               | U+00DB  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_219.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DC;                                               | U+00DC  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_220.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DD;                                               | U+00DD  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_221.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DE;                                               | U+00DE  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_222.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DF;                                               | U+00DF  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_223.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E0;                                               | U+00E0  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_224.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E1;                                               | U+00E1  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_225.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E2;                                               | U+00E2  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_226.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E3;                                               | U+00E3  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_227.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E4;                                               | U+00E4  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_228.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E5;                                               | U+00E5  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_229.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E6;                                               | U+00E6  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_230.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E7;                                               | U+00E7  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_231.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E8;                                               | U+00E8  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_232.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E9;                                               | U+00E9  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_233.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EA;                                               | U+00EA  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_234.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EB;                                               | U+00EB  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_235.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EC;                                               | U+00EC  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_236.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00ED;                                               | U+00ED  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_237.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EE;                                               | U+00EE  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_238.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EF;                                               | U+00EF  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_239.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F0;                                               | U+00F0  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_240.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F1;                                               | U+00F1  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_241.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F2;                                               | U+00F2  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_242.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F3;                                               | U+00F3  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_243.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F4;                                               | U+00F4  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_244.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F5;                                               | U+00F5  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_245.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F6;                                               | U+00F6  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_246.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F7;                                               | U+00F7  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_247.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F8;                                               | U+00F8  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_248.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F9;                                               | U+00F9  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_249.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FA;                                               | U+00FA  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_250.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FB;                                               | U+00FB  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_251.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FC;                                               | U+00FC  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_252.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FD;                                               | U+00FD  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_253.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FE;                                               | U+00FE  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_254.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FF;                                               | U+00FF  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_255.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0131;                                               | U+0131  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_305.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0141;                                               | U+0141  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_321.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0142;                                               | U+0142  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_322.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0152;                                               | U+0152  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_338.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0153;                                               | U+0153  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_339.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0160;                                               | U+0160  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_352.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0161;                                               | U+0161  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_353.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0178;                                               | U+0178  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_376.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017D;                                               | U+017D  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_381.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017E;                                               | U+017E  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_382.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0192;                                               | U+0192  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_402.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C6;                                               | U+02C6  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_710.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C7;                                               | U+02C7  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_711.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02D8;                                               | U+02D8  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_728.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02D9;                                               | U+02D9  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_729.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DA;                                               | U+02DA  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_730.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DB;                                               | U+02DB  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_731.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DC;                                               | U+02DC  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_732.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DD;                                               | U+02DD  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_733.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C0;                                               | U+03C0  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_960.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x2013;                                               | U+2013  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8211.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2014;                                               | U+2014  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8212.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2018;                                               | U+2018  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8216.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2019;                                               | U+2019  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8217.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201A;                                               | U+201A  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8218.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201C;                                               | U+201C  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8220.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201D;                                               | U+201D  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8221.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201E;                                               | U+201E  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8222.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2020;                                               | U+2020  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8224.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2021;                                               | U+2021  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8225.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2022;                                               | U+2022  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8226.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2026;                                               | U+2026  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8230.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2030;                                               | U+2030  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8240.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2039;                                               | U+2039  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8249.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x203A;                                               | U+203A  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8250.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2044;                                               | U+2044  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8260.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2074;                                               | U+2074  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8308.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x20AC;                                               | U+20AC  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8364.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2122;                                               | U+2122  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8482.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2126;                                               | U+2126  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8486.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2202;                                               | U+2202  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8706.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2206;                                               | U+2206  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8710.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x220F;                                               | U+220F  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8719.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2211;                                               | U+2211  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8721.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2212;                                               | U+2212  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8722.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x221A;                                               | U+221A  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8730.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x221E;                                               | U+221E  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8734.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x222B;                                               | U+222B  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8747.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2248;                                               | U+2248  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8776.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2260;                                               | U+2260  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8800.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2264;                                               | U+2264  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8804.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2265;                                               | U+2265  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_8805.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x25CA;                                               | U+25CA  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_9674.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#xFB01;                                               | U+FB01  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_64257.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xFB02;                                               | U+FB02  | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_64258.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10000;                                              | U+10000 | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_65536.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10001;                                              | U+10001 | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_65537.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10002;                                              | U+10002 | <img :src="'/assets/images/text/fonts/Mojangles/Mojangles_glyph_65538.svg'" class="svgFontGlyph" loading="lazy" /> |       |

</Spoiler>

## Minecraft Five v2 Supported Unicode Characters

This file is used by Ore UI. The file can be found in `data/gui/dist/hbui/fonts/Minecraft-Five-*.otf`.

Unicode Range: `U+0000, U+000D, U+0020-003F, U+0041-007E, U+00A0-00A3, U+00A5-00A6, U+00A8-00B1, U+00B4, U+00B6-00B8, U+00BB, U+00BF-0148, U+014A-017E, U+01FC-01FF, U+0218-021B, U+0237, U+02C6-02C7, U+02C9, U+02D8-02DD, U+0384-0386, U+0388-038A, U+038C, U+038E-03A1, U+03A3-03CE, U+0400-045F, U+0490-0491, U+1E02-1E03, U+1E0A-1E0B, U+1E1E-1E1F, U+1E22-1E23, U+1E30-1E31, U+1E40-1E41, U+1E56-1E57, U+1E60-1E61, U+1E6A-1E6B, U+1E80-1E85, U+1E9E, U+1EF2-1EF3, U+2013-2015, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+20AC, U+2122, U+2126, U+2206, U+220F, U+2211-2212, U+221E, U+25CA, U+F6C3, U+F8FF, U+FB01-FB02, U+10000-10003`

<Spoiler title="Unicode Table">

| Character                                              | Unicode | Preview                                                                                                                      | Notes |
| ------------------------------------------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------- | ----- |
| N/A                                                    | U+0000  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_0.svg'" class="svgFontGlyph" loading="lazy" />     |       |
| <UnicodeCopyButton code="000D" />                      | U+000D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_13.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| <span innerHTML="&#x0020;" style="white-space:pre;" /> | U+0020  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_32.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0021;                                               | U+0021  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_33.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0022;                                               | U+0022  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_34.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0023;                                               | U+0023  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_35.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0024;                                               | U+0024  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_36.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0025;                                               | U+0025  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_37.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0026;                                               | U+0026  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_38.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0027;                                               | U+0027  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_39.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0028;                                               | U+0028  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_40.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0029;                                               | U+0029  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_41.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| \*                                                     | U+002A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_42.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002B;                                               | U+002B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_43.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002C;                                               | U+002C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_44.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002D;                                               | U+002D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_45.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002E;                                               | U+002E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_46.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002F;                                               | U+002F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_47.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0030;                                               | U+0030  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_48.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0031;                                               | U+0031  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_49.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0032;                                               | U+0032  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_50.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0033;                                               | U+0033  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_51.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0034;                                               | U+0034  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_52.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0035;                                               | U+0035  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_53.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0036;                                               | U+0036  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_54.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0037;                                               | U+0037  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_55.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0038;                                               | U+0038  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_56.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0039;                                               | U+0039  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_57.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003A;                                               | U+003A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_58.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003B;                                               | U+003B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_59.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003C;                                               | U+003C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_60.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003D;                                               | U+003D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_61.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003E;                                               | U+003E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_62.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003F;                                               | U+003F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_63.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0041;                                               | U+0041  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_65.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0042;                                               | U+0042  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_66.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0043;                                               | U+0043  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_67.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0044;                                               | U+0044  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_68.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0045;                                               | U+0045  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_69.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0046;                                               | U+0046  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_70.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0047;                                               | U+0047  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_71.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0048;                                               | U+0048  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_72.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0049;                                               | U+0049  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_73.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004A;                                               | U+004A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_74.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004B;                                               | U+004B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_75.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004C;                                               | U+004C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_76.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004D;                                               | U+004D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_77.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004E;                                               | U+004E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_78.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004F;                                               | U+004F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_79.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0050;                                               | U+0050  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_80.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0051;                                               | U+0051  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_81.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0052;                                               | U+0052  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_82.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0053;                                               | U+0053  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_83.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0054;                                               | U+0054  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_84.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0055;                                               | U+0055  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_85.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0056;                                               | U+0056  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_86.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0057;                                               | U+0057  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_87.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0058;                                               | U+0058  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_88.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0059;                                               | U+0059  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_89.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005A;                                               | U+005A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_90.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005B;                                               | U+005B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_91.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005C;                                               | U+005C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_92.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005D;                                               | U+005D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_93.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005E;                                               | U+005E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_94.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| \_                                                     | U+005F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_95.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0060;                                               | U+0060  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_96.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0061;                                               | U+0061  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_97.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0062;                                               | U+0062  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_98.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0063;                                               | U+0063  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_99.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0064;                                               | U+0064  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_100.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0065;                                               | U+0065  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_101.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0066;                                               | U+0066  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_102.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0067;                                               | U+0067  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_103.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0068;                                               | U+0068  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_104.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0069;                                               | U+0069  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_105.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006A;                                               | U+006A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_106.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006B;                                               | U+006B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_107.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006C;                                               | U+006C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_108.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006D;                                               | U+006D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_109.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006E;                                               | U+006E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_110.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006F;                                               | U+006F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_111.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0070;                                               | U+0070  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_112.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0071;                                               | U+0071  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_113.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0072;                                               | U+0072  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_114.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0073;                                               | U+0073  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_115.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0074;                                               | U+0074  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_116.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0075;                                               | U+0075  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_117.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0076;                                               | U+0076  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_118.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0077;                                               | U+0077  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_119.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0078;                                               | U+0078  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_120.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0079;                                               | U+0079  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_121.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007A;                                               | U+007A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_122.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007B;                                               | U+007B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_123.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007C;                                               | U+007C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_124.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007D;                                               | U+007D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_125.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007E;                                               | U+007E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_126.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| <UnicodeCopyButton code="00A0" />                      | U+00A0  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_160.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A1;                                               | U+00A1  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_161.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A2;                                               | U+00A2  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_162.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A3;                                               | U+00A3  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_163.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A5;                                               | U+00A5  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_165.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A6;                                               | U+00A6  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_166.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A8;                                               | U+00A8  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_168.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A9;                                               | U+00A9  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_169.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AA;                                               | U+00AA  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_170.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AB;                                               | U+00AB  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_171.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AC;                                               | U+00AC  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_172.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AD;                                               | U+00AD  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_173.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AE;                                               | U+00AE  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_174.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AF;                                               | U+00AF  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_175.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B0;                                               | U+00B0  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_176.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B1;                                               | U+00B1  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_177.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B4;                                               | U+00B4  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_180.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B6;                                               | U+00B6  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_182.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B7;                                               | U+00B7  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_183.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B8;                                               | U+00B8  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_184.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BB;                                               | U+00BB  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_187.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BF;                                               | U+00BF  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_191.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C0;                                               | U+00C0  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_192.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C1;                                               | U+00C1  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_193.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C2;                                               | U+00C2  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_194.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C3;                                               | U+00C3  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_195.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C4;                                               | U+00C4  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_196.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C5;                                               | U+00C5  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_197.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C6;                                               | U+00C6  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_198.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C7;                                               | U+00C7  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_199.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C8;                                               | U+00C8  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_200.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C9;                                               | U+00C9  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_201.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CA;                                               | U+00CA  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_202.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CB;                                               | U+00CB  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_203.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CC;                                               | U+00CC  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_204.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CD;                                               | U+00CD  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_205.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CE;                                               | U+00CE  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_206.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CF;                                               | U+00CF  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_207.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D0;                                               | U+00D0  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_208.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D1;                                               | U+00D1  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_209.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D2;                                               | U+00D2  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_210.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D3;                                               | U+00D3  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_211.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D4;                                               | U+00D4  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_212.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D5;                                               | U+00D5  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_213.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D6;                                               | U+00D6  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_214.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D7;                                               | U+00D7  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_215.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D8;                                               | U+00D8  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_216.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D9;                                               | U+00D9  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_217.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DA;                                               | U+00DA  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_218.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DB;                                               | U+00DB  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_219.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DC;                                               | U+00DC  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_220.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DD;                                               | U+00DD  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_221.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DE;                                               | U+00DE  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_222.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DF;                                               | U+00DF  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_223.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E0;                                               | U+00E0  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_224.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E1;                                               | U+00E1  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_225.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E2;                                               | U+00E2  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_226.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E3;                                               | U+00E3  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_227.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E4;                                               | U+00E4  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_228.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E5;                                               | U+00E5  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_229.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E6;                                               | U+00E6  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_230.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E7;                                               | U+00E7  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_231.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E8;                                               | U+00E8  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_232.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E9;                                               | U+00E9  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_233.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EA;                                               | U+00EA  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_234.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EB;                                               | U+00EB  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_235.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EC;                                               | U+00EC  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_236.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00ED;                                               | U+00ED  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_237.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EE;                                               | U+00EE  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_238.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EF;                                               | U+00EF  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_239.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F0;                                               | U+00F0  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_240.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F1;                                               | U+00F1  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_241.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F2;                                               | U+00F2  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_242.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F3;                                               | U+00F3  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_243.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F4;                                               | U+00F4  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_244.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F5;                                               | U+00F5  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_245.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F6;                                               | U+00F6  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_246.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F7;                                               | U+00F7  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_247.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F8;                                               | U+00F8  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_248.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F9;                                               | U+00F9  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_249.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FA;                                               | U+00FA  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_250.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FB;                                               | U+00FB  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_251.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FC;                                               | U+00FC  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_252.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FD;                                               | U+00FD  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_253.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FE;                                               | U+00FE  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_254.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FF;                                               | U+00FF  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_255.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0100;                                               | U+0100  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_256.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0101;                                               | U+0101  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_257.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0102;                                               | U+0102  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_258.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0103;                                               | U+0103  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_259.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0104;                                               | U+0104  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_260.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0105;                                               | U+0105  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_261.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0106;                                               | U+0106  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_262.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0107;                                               | U+0107  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_263.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0108;                                               | U+0108  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_264.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0109;                                               | U+0109  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_265.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010A;                                               | U+010A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_266.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010B;                                               | U+010B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_267.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010C;                                               | U+010C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_268.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010D;                                               | U+010D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_269.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010E;                                               | U+010E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_270.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010F;                                               | U+010F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_271.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0110;                                               | U+0110  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_272.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0111;                                               | U+0111  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_273.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0112;                                               | U+0112  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_274.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0113;                                               | U+0113  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_275.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0114;                                               | U+0114  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_276.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0115;                                               | U+0115  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_277.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0116;                                               | U+0116  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_278.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0117;                                               | U+0117  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_279.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0118;                                               | U+0118  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_280.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0119;                                               | U+0119  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_281.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011A;                                               | U+011A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_282.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011B;                                               | U+011B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_283.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011C;                                               | U+011C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_284.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011D;                                               | U+011D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_285.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011E;                                               | U+011E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_286.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011F;                                               | U+011F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_287.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0120;                                               | U+0120  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_288.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0121;                                               | U+0121  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_289.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0122;                                               | U+0122  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_290.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0123;                                               | U+0123  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_291.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0124;                                               | U+0124  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_292.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0125;                                               | U+0125  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_293.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0126;                                               | U+0126  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_294.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0127;                                               | U+0127  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_295.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0128;                                               | U+0128  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_296.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0129;                                               | U+0129  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_297.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012A;                                               | U+012A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_298.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012B;                                               | U+012B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_299.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012C;                                               | U+012C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_300.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012D;                                               | U+012D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_301.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012E;                                               | U+012E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_302.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012F;                                               | U+012F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_303.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0130;                                               | U+0130  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_304.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0131;                                               | U+0131  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_305.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0132;                                               | U+0132  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_306.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0133;                                               | U+0133  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_307.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0134;                                               | U+0134  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_308.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0135;                                               | U+0135  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_309.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0136;                                               | U+0136  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_310.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0137;                                               | U+0137  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_311.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0138;                                               | U+0138  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_312.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0139;                                               | U+0139  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_313.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013A;                                               | U+013A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_314.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013B;                                               | U+013B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_315.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013C;                                               | U+013C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_316.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013D;                                               | U+013D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_317.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013E;                                               | U+013E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_318.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013F;                                               | U+013F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_319.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0140;                                               | U+0140  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_320.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0141;                                               | U+0141  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_321.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0142;                                               | U+0142  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_322.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0143;                                               | U+0143  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_323.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0144;                                               | U+0144  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_324.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0145;                                               | U+0145  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_325.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0146;                                               | U+0146  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_326.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0147;                                               | U+0147  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_327.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0148;                                               | U+0148  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_328.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014A;                                               | U+014A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_330.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014B;                                               | U+014B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_331.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014C;                                               | U+014C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_332.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014D;                                               | U+014D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_333.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014E;                                               | U+014E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_334.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014F;                                               | U+014F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_335.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0150;                                               | U+0150  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_336.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0151;                                               | U+0151  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_337.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0152;                                               | U+0152  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_338.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0153;                                               | U+0153  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_339.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0154;                                               | U+0154  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_340.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0155;                                               | U+0155  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_341.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0156;                                               | U+0156  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_342.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0157;                                               | U+0157  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_343.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0158;                                               | U+0158  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_344.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0159;                                               | U+0159  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_345.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015A;                                               | U+015A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_346.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015B;                                               | U+015B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_347.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015C;                                               | U+015C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_348.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015D;                                               | U+015D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_349.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015E;                                               | U+015E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_350.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015F;                                               | U+015F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_351.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0160;                                               | U+0160  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_352.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0161;                                               | U+0161  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_353.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0162;                                               | U+0162  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_354.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0163;                                               | U+0163  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_355.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0164;                                               | U+0164  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_356.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0165;                                               | U+0165  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_357.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0166;                                               | U+0166  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_358.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0167;                                               | U+0167  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_359.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0168;                                               | U+0168  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_360.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0169;                                               | U+0169  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_361.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016A;                                               | U+016A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_362.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016B;                                               | U+016B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_363.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016C;                                               | U+016C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_364.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016D;                                               | U+016D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_365.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016E;                                               | U+016E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_366.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016F;                                               | U+016F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_367.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0170;                                               | U+0170  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_368.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0171;                                               | U+0171  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_369.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0172;                                               | U+0172  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_370.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0173;                                               | U+0173  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_371.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0174;                                               | U+0174  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_372.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0175;                                               | U+0175  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_373.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0176;                                               | U+0176  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_374.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0177;                                               | U+0177  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_375.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0178;                                               | U+0178  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_376.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0179;                                               | U+0179  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_377.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017A;                                               | U+017A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_378.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017B;                                               | U+017B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_379.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017C;                                               | U+017C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_380.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017D;                                               | U+017D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_381.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017E;                                               | U+017E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_382.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FC;                                               | U+01FC  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_508.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FD;                                               | U+01FD  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_509.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FE;                                               | U+01FE  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_510.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FF;                                               | U+01FF  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_511.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0218;                                               | U+0218  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_536.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0219;                                               | U+0219  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_537.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x021A;                                               | U+021A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_538.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x021B;                                               | U+021B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_539.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0237;                                               | U+0237  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_567.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C6;                                               | U+02C6  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_710.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C7;                                               | U+02C7  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_711.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C9;                                               | U+02C9  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_713.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02D8;                                               | U+02D8  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_728.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02D9;                                               | U+02D9  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_729.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DA;                                               | U+02DA  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_730.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DB;                                               | U+02DB  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_731.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DC;                                               | U+02DC  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_732.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DD;                                               | U+02DD  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_733.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0384;                                               | U+0384  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_900.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0385;                                               | U+0385  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_901.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0386;                                               | U+0386  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_902.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0388;                                               | U+0388  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_904.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0389;                                               | U+0389  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_905.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038A;                                               | U+038A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_906.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038C;                                               | U+038C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_908.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038E;                                               | U+038E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_910.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038F;                                               | U+038F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_911.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0390;                                               | U+0390  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_912.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0391;                                               | U+0391  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_913.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0392;                                               | U+0392  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_914.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0393;                                               | U+0393  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_915.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0394;                                               | U+0394  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_916.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0395;                                               | U+0395  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_917.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0396;                                               | U+0396  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_918.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0397;                                               | U+0397  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_919.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0398;                                               | U+0398  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_920.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0399;                                               | U+0399  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_921.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039A;                                               | U+039A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_922.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039B;                                               | U+039B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_923.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039C;                                               | U+039C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_924.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039D;                                               | U+039D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_925.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039E;                                               | U+039E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_926.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039F;                                               | U+039F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_927.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A0;                                               | U+03A0  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_928.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A1;                                               | U+03A1  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_929.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A3;                                               | U+03A3  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_931.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A4;                                               | U+03A4  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_932.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A5;                                               | U+03A5  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_933.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A6;                                               | U+03A6  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_934.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A7;                                               | U+03A7  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_935.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A8;                                               | U+03A8  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_936.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A9;                                               | U+03A9  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_937.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AA;                                               | U+03AA  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_938.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AB;                                               | U+03AB  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_939.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AC;                                               | U+03AC  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_940.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AD;                                               | U+03AD  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_941.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AE;                                               | U+03AE  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_942.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AF;                                               | U+03AF  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_943.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B0;                                               | U+03B0  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_944.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B1;                                               | U+03B1  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_945.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B2;                                               | U+03B2  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_946.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B3;                                               | U+03B3  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_947.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B4;                                               | U+03B4  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_948.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B5;                                               | U+03B5  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_949.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B6;                                               | U+03B6  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_950.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B7;                                               | U+03B7  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_951.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B8;                                               | U+03B8  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_952.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B9;                                               | U+03B9  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_953.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BA;                                               | U+03BA  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_954.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BB;                                               | U+03BB  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_955.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BC;                                               | U+03BC  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_956.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BD;                                               | U+03BD  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_957.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BE;                                               | U+03BE  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_958.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BF;                                               | U+03BF  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_959.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C0;                                               | U+03C0  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_960.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C1;                                               | U+03C1  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_961.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C2;                                               | U+03C2  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_962.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C3;                                               | U+03C3  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_963.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C4;                                               | U+03C4  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_964.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C5;                                               | U+03C5  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_965.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C6;                                               | U+03C6  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_966.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C7;                                               | U+03C7  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_967.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C8;                                               | U+03C8  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_968.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C9;                                               | U+03C9  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_969.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CA;                                               | U+03CA  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_970.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CB;                                               | U+03CB  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_971.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CC;                                               | U+03CC  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_972.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CD;                                               | U+03CD  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_973.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CE;                                               | U+03CE  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_974.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0400;                                               | U+0400  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1024.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0401;                                               | U+0401  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1025.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0402;                                               | U+0402  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1026.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0403;                                               | U+0403  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1027.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0404;                                               | U+0404  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1028.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0405;                                               | U+0405  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1029.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0406;                                               | U+0406  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1030.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0407;                                               | U+0407  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1031.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0408;                                               | U+0408  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1032.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0409;                                               | U+0409  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1033.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040A;                                               | U+040A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1034.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040B;                                               | U+040B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1035.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040C;                                               | U+040C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1036.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040D;                                               | U+040D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1037.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040E;                                               | U+040E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1038.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040F;                                               | U+040F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1039.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0410;                                               | U+0410  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1040.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0411;                                               | U+0411  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1041.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0412;                                               | U+0412  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1042.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0413;                                               | U+0413  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1043.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0414;                                               | U+0414  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1044.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0415;                                               | U+0415  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1045.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0416;                                               | U+0416  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1046.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0417;                                               | U+0417  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1047.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0418;                                               | U+0418  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1048.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0419;                                               | U+0419  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1049.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041A;                                               | U+041A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1050.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041B;                                               | U+041B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1051.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041C;                                               | U+041C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1052.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041D;                                               | U+041D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1053.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041E;                                               | U+041E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1054.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041F;                                               | U+041F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1055.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0420;                                               | U+0420  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1056.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0421;                                               | U+0421  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1057.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0422;                                               | U+0422  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1058.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0423;                                               | U+0423  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1059.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0424;                                               | U+0424  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1060.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0425;                                               | U+0425  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1061.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0426;                                               | U+0426  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1062.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0427;                                               | U+0427  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1063.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0428;                                               | U+0428  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1064.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0429;                                               | U+0429  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1065.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042A;                                               | U+042A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1066.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042B;                                               | U+042B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1067.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042C;                                               | U+042C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1068.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042D;                                               | U+042D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1069.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042E;                                               | U+042E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1070.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042F;                                               | U+042F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1071.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0430;                                               | U+0430  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1072.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0431;                                               | U+0431  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1073.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0432;                                               | U+0432  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1074.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0433;                                               | U+0433  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1075.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0434;                                               | U+0434  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1076.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0435;                                               | U+0435  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1077.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0436;                                               | U+0436  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1078.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0437;                                               | U+0437  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1079.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0438;                                               | U+0438  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1080.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0439;                                               | U+0439  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1081.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043A;                                               | U+043A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1082.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043B;                                               | U+043B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1083.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043C;                                               | U+043C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1084.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043D;                                               | U+043D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1085.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043E;                                               | U+043E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1086.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043F;                                               | U+043F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1087.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0440;                                               | U+0440  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1088.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0441;                                               | U+0441  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1089.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0442;                                               | U+0442  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1090.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0443;                                               | U+0443  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1091.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0444;                                               | U+0444  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1092.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0445;                                               | U+0445  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1093.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0446;                                               | U+0446  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1094.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0447;                                               | U+0447  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1095.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0448;                                               | U+0448  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1096.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0449;                                               | U+0449  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1097.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044A;                                               | U+044A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1098.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044B;                                               | U+044B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1099.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044C;                                               | U+044C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1100.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044D;                                               | U+044D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1101.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044E;                                               | U+044E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1102.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044F;                                               | U+044F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1103.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0450;                                               | U+0450  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1104.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0451;                                               | U+0451  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1105.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0452;                                               | U+0452  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1106.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0453;                                               | U+0453  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1107.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0454;                                               | U+0454  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1108.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0455;                                               | U+0455  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1109.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0456;                                               | U+0456  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1110.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0457;                                               | U+0457  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1111.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0458;                                               | U+0458  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1112.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0459;                                               | U+0459  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1113.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045A;                                               | U+045A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1114.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045B;                                               | U+045B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1115.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045C;                                               | U+045C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1116.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045D;                                               | U+045D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1117.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045E;                                               | U+045E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1118.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045F;                                               | U+045F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1119.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0490;                                               | U+0490  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1168.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0491;                                               | U+0491  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_1169.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E02;                                               | U+1E02  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7682.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E03;                                               | U+1E03  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7683.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E0A;                                               | U+1E0A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7690.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E0B;                                               | U+1E0B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7691.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E1E;                                               | U+1E1E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7710.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E1F;                                               | U+1E1F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7711.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E22;                                               | U+1E22  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7714.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E23;                                               | U+1E23  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7715.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E30;                                               | U+1E30  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7728.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E31;                                               | U+1E31  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7729.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E40;                                               | U+1E40  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7744.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E41;                                               | U+1E41  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7745.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E56;                                               | U+1E56  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7766.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E57;                                               | U+1E57  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7767.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E60;                                               | U+1E60  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7776.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E61;                                               | U+1E61  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7777.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E6A;                                               | U+1E6A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7786.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E6B;                                               | U+1E6B  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7787.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E80;                                               | U+1E80  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7808.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E81;                                               | U+1E81  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7809.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E82;                                               | U+1E82  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7810.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E83;                                               | U+1E83  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7811.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E84;                                               | U+1E84  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7812.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E85;                                               | U+1E85  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7813.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E9E;                                               | U+1E9E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7838.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1EF2;                                               | U+1EF2  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7922.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1EF3;                                               | U+1EF3  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_7923.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2013;                                               | U+2013  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8211.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2014;                                               | U+2014  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8212.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2015;                                               | U+2015  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8213.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2018;                                               | U+2018  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8216.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2019;                                               | U+2019  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8217.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201A;                                               | U+201A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8218.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201C;                                               | U+201C  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8220.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201D;                                               | U+201D  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8221.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201E;                                               | U+201E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8222.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2020;                                               | U+2020  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8224.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2021;                                               | U+2021  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8225.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2022;                                               | U+2022  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8226.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2026;                                               | U+2026  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8230.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2030;                                               | U+2030  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8240.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2039;                                               | U+2039  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8249.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x203A;                                               | U+203A  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8250.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2044;                                               | U+2044  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8260.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x20AC;                                               | U+20AC  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8364.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2122;                                               | U+2122  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8482.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2126;                                               | U+2126  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8486.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2206;                                               | U+2206  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8710.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x220F;                                               | U+220F  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8719.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2211;                                               | U+2211  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8721.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2212;                                               | U+2212  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8722.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x221E;                                               | U+221E  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_8734.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x25CA;                                               | U+25CA  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_9674.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#xF6C3;                                               | U+F6C3  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_63171.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xF8FF;                                               | U+F8FF  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_63743.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xFB01;                                               | U+FB01  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_64257.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xFB02;                                               | U+FB02  | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_64258.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10000;                                              | U+10000 | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_65536.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10001;                                              | U+10001 | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_65537.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10002;                                              | U+10002 | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_65538.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10003;                                              | U+10003 | <img :src="'/assets/images/text/fonts/Minecraft-Five/Minecraft-Five_glyph_65539.svg'" class="svgFontGlyph" loading="lazy" /> |       |

</Spoiler>

## Minecraft Five v2 Bold Supported Unicode Characters

This file is used by Ore UI. The file can be found in `data/gui/dist/hbui/fonts/Minecraft-Five-Bold-*.otf`.

Unicode Range: `U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A5-00A6, U+00A8-00A9, U+00AB-00B1, U+00B4, U+00B6-00B8, U+00BB, U+00BF-0148, U+014A-017E, U+01FC-01FF, U+0218-021B, U+0237, U+02C6-02C7, U+02C9, U+02D8-02DD, U+0384-0386, U+0388-038A, U+038C, U+038E-03A1, U+03A3-03CE, U+0400-045F, U+0490-0491, U+1E02-1E03, U+1E0A-1E0B, U+1E1E-1E1F, U+1E22-1E23, U+1E30-1E31, U+1E40-1E41, U+1E56-1E57, U+1E60-1E61, U+1E6A-1E6B, U+1E80-1E85, U+1E9E, U+1EF2-1EF3, U+2013-2015, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+20AC, U+2122, U+2126, U+2206, U+220F, U+2211-2212, U+221E, U+25CA, U+F6C3, U+F8FF, U+FB01-FB02, U+10000-10003`

<Spoiler title="Unicode Table">

| Character                                              | Unicode | Preview                                                                                                                                | Notes |
| ------------------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| N/A                                                    | U+0000  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_0.svg'" class="svgFontGlyph" loading="lazy" />     |       |
| <UnicodeCopyButton code="000D" />                      | U+000D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_13.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| <span innerHTML="&#x0020;" style="white-space:pre;" /> | U+0020  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_32.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0021;                                               | U+0021  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_33.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0022;                                               | U+0022  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_34.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0023;                                               | U+0023  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_35.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0024;                                               | U+0024  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_36.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0025;                                               | U+0025  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_37.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0026;                                               | U+0026  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_38.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0027;                                               | U+0027  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_39.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0028;                                               | U+0028  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_40.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0029;                                               | U+0029  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_41.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| \*                                                     | U+002A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_42.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002B;                                               | U+002B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_43.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002C;                                               | U+002C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_44.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002D;                                               | U+002D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_45.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002E;                                               | U+002E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_46.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002F;                                               | U+002F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_47.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0030;                                               | U+0030  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_48.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0031;                                               | U+0031  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_49.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0032;                                               | U+0032  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_50.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0033;                                               | U+0033  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_51.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0034;                                               | U+0034  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_52.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0035;                                               | U+0035  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_53.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0036;                                               | U+0036  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_54.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0037;                                               | U+0037  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_55.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0038;                                               | U+0038  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_56.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0039;                                               | U+0039  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_57.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003A;                                               | U+003A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_58.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003B;                                               | U+003B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_59.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003C;                                               | U+003C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_60.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003D;                                               | U+003D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_61.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003E;                                               | U+003E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_62.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003F;                                               | U+003F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_63.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0040;                                               | U+0040  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_64.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0041;                                               | U+0041  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_65.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0042;                                               | U+0042  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_66.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0043;                                               | U+0043  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_67.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0044;                                               | U+0044  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_68.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0045;                                               | U+0045  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_69.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0046;                                               | U+0046  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_70.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0047;                                               | U+0047  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_71.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0048;                                               | U+0048  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_72.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0049;                                               | U+0049  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_73.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004A;                                               | U+004A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_74.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004B;                                               | U+004B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_75.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004C;                                               | U+004C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_76.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004D;                                               | U+004D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_77.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004E;                                               | U+004E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_78.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004F;                                               | U+004F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_79.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0050;                                               | U+0050  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_80.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0051;                                               | U+0051  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_81.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0052;                                               | U+0052  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_82.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0053;                                               | U+0053  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_83.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0054;                                               | U+0054  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_84.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0055;                                               | U+0055  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_85.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0056;                                               | U+0056  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_86.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0057;                                               | U+0057  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_87.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0058;                                               | U+0058  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_88.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0059;                                               | U+0059  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_89.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005A;                                               | U+005A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_90.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005B;                                               | U+005B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_91.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005C;                                               | U+005C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_92.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005D;                                               | U+005D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_93.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005E;                                               | U+005E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_94.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| \_                                                     | U+005F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_95.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0060;                                               | U+0060  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_96.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0061;                                               | U+0061  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_97.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0062;                                               | U+0062  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_98.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0063;                                               | U+0063  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_99.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0064;                                               | U+0064  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_100.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0065;                                               | U+0065  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_101.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0066;                                               | U+0066  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_102.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0067;                                               | U+0067  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_103.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0068;                                               | U+0068  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_104.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0069;                                               | U+0069  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_105.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006A;                                               | U+006A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_106.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006B;                                               | U+006B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_107.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006C;                                               | U+006C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_108.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006D;                                               | U+006D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_109.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006E;                                               | U+006E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_110.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006F;                                               | U+006F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_111.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0070;                                               | U+0070  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_112.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0071;                                               | U+0071  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_113.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0072;                                               | U+0072  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_114.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0073;                                               | U+0073  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_115.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0074;                                               | U+0074  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_116.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0075;                                               | U+0075  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_117.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0076;                                               | U+0076  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_118.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0077;                                               | U+0077  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_119.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0078;                                               | U+0078  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_120.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0079;                                               | U+0079  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_121.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007A;                                               | U+007A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_122.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007B;                                               | U+007B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_123.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007C;                                               | U+007C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_124.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007D;                                               | U+007D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_125.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007E;                                               | U+007E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_126.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| <UnicodeCopyButton code="00A0" />                      | U+00A0  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_160.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A1;                                               | U+00A1  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_161.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A2;                                               | U+00A2  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_162.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A3;                                               | U+00A3  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_163.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A5;                                               | U+00A5  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_165.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A6;                                               | U+00A6  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_166.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A8;                                               | U+00A8  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_168.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A9;                                               | U+00A9  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_169.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AB;                                               | U+00AB  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_171.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AC;                                               | U+00AC  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_172.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AD;                                               | U+00AD  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_173.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AE;                                               | U+00AE  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_174.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AF;                                               | U+00AF  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_175.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B0;                                               | U+00B0  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_176.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B1;                                               | U+00B1  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_177.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B4;                                               | U+00B4  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_180.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B6;                                               | U+00B6  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_182.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B7;                                               | U+00B7  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_183.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B8;                                               | U+00B8  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_184.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BB;                                               | U+00BB  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_187.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BF;                                               | U+00BF  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_191.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C0;                                               | U+00C0  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_192.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C1;                                               | U+00C1  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_193.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C2;                                               | U+00C2  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_194.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C3;                                               | U+00C3  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_195.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C4;                                               | U+00C4  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_196.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C5;                                               | U+00C5  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_197.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C6;                                               | U+00C6  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_198.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C7;                                               | U+00C7  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_199.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C8;                                               | U+00C8  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_200.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C9;                                               | U+00C9  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_201.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CA;                                               | U+00CA  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_202.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CB;                                               | U+00CB  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_203.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CC;                                               | U+00CC  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_204.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CD;                                               | U+00CD  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_205.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CE;                                               | U+00CE  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_206.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CF;                                               | U+00CF  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_207.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D0;                                               | U+00D0  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_208.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D1;                                               | U+00D1  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_209.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D2;                                               | U+00D2  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_210.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D3;                                               | U+00D3  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_211.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D4;                                               | U+00D4  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_212.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D5;                                               | U+00D5  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_213.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D6;                                               | U+00D6  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_214.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D7;                                               | U+00D7  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_215.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D8;                                               | U+00D8  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_216.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D9;                                               | U+00D9  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_217.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DA;                                               | U+00DA  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_218.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DB;                                               | U+00DB  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_219.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DC;                                               | U+00DC  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_220.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DD;                                               | U+00DD  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_221.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DE;                                               | U+00DE  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_222.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DF;                                               | U+00DF  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_223.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E0;                                               | U+00E0  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_224.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E1;                                               | U+00E1  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_225.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E2;                                               | U+00E2  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_226.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E3;                                               | U+00E3  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_227.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E4;                                               | U+00E4  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_228.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E5;                                               | U+00E5  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_229.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E6;                                               | U+00E6  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_230.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E7;                                               | U+00E7  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_231.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E8;                                               | U+00E8  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_232.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E9;                                               | U+00E9  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_233.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EA;                                               | U+00EA  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_234.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EB;                                               | U+00EB  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_235.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EC;                                               | U+00EC  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_236.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00ED;                                               | U+00ED  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_237.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EE;                                               | U+00EE  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_238.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EF;                                               | U+00EF  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_239.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F0;                                               | U+00F0  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_240.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F1;                                               | U+00F1  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_241.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F2;                                               | U+00F2  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_242.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F3;                                               | U+00F3  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_243.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F4;                                               | U+00F4  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_244.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F5;                                               | U+00F5  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_245.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F6;                                               | U+00F6  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_246.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F7;                                               | U+00F7  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_247.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F8;                                               | U+00F8  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_248.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F9;                                               | U+00F9  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_249.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FA;                                               | U+00FA  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_250.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FB;                                               | U+00FB  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_251.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FC;                                               | U+00FC  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_252.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FD;                                               | U+00FD  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_253.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FE;                                               | U+00FE  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_254.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FF;                                               | U+00FF  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_255.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0100;                                               | U+0100  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_256.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0101;                                               | U+0101  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_257.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0102;                                               | U+0102  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_258.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0103;                                               | U+0103  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_259.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0104;                                               | U+0104  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_260.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0105;                                               | U+0105  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_261.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0106;                                               | U+0106  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_262.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0107;                                               | U+0107  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_263.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0108;                                               | U+0108  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_264.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0109;                                               | U+0109  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_265.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010A;                                               | U+010A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_266.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010B;                                               | U+010B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_267.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010C;                                               | U+010C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_268.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010D;                                               | U+010D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_269.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010E;                                               | U+010E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_270.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010F;                                               | U+010F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_271.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0110;                                               | U+0110  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_272.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0111;                                               | U+0111  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_273.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0112;                                               | U+0112  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_274.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0113;                                               | U+0113  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_275.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0114;                                               | U+0114  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_276.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0115;                                               | U+0115  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_277.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0116;                                               | U+0116  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_278.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0117;                                               | U+0117  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_279.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0118;                                               | U+0118  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_280.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0119;                                               | U+0119  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_281.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011A;                                               | U+011A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_282.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011B;                                               | U+011B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_283.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011C;                                               | U+011C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_284.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011D;                                               | U+011D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_285.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011E;                                               | U+011E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_286.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011F;                                               | U+011F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_287.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0120;                                               | U+0120  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_288.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0121;                                               | U+0121  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_289.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0122;                                               | U+0122  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_290.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0123;                                               | U+0123  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_291.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0124;                                               | U+0124  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_292.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0125;                                               | U+0125  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_293.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0126;                                               | U+0126  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_294.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0127;                                               | U+0127  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_295.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0128;                                               | U+0128  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_296.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0129;                                               | U+0129  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_297.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012A;                                               | U+012A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_298.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012B;                                               | U+012B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_299.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012C;                                               | U+012C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_300.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012D;                                               | U+012D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_301.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012E;                                               | U+012E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_302.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012F;                                               | U+012F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_303.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0130;                                               | U+0130  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_304.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0131;                                               | U+0131  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_305.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0132;                                               | U+0132  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_306.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0133;                                               | U+0133  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_307.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0134;                                               | U+0134  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_308.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0135;                                               | U+0135  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_309.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0136;                                               | U+0136  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_310.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0137;                                               | U+0137  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_311.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0138;                                               | U+0138  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_312.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0139;                                               | U+0139  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_313.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013A;                                               | U+013A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_314.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013B;                                               | U+013B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_315.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013C;                                               | U+013C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_316.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013D;                                               | U+013D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_317.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013E;                                               | U+013E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_318.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013F;                                               | U+013F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_319.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0140;                                               | U+0140  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_320.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0141;                                               | U+0141  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_321.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0142;                                               | U+0142  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_322.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0143;                                               | U+0143  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_323.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0144;                                               | U+0144  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_324.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0145;                                               | U+0145  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_325.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0146;                                               | U+0146  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_326.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0147;                                               | U+0147  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_327.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0148;                                               | U+0148  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_328.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014A;                                               | U+014A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_330.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014B;                                               | U+014B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_331.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014C;                                               | U+014C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_332.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014D;                                               | U+014D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_333.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014E;                                               | U+014E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_334.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014F;                                               | U+014F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_335.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0150;                                               | U+0150  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_336.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0151;                                               | U+0151  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_337.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0152;                                               | U+0152  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_338.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0153;                                               | U+0153  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_339.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0154;                                               | U+0154  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_340.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0155;                                               | U+0155  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_341.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0156;                                               | U+0156  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_342.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0157;                                               | U+0157  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_343.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0158;                                               | U+0158  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_344.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0159;                                               | U+0159  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_345.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015A;                                               | U+015A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_346.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015B;                                               | U+015B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_347.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015C;                                               | U+015C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_348.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015D;                                               | U+015D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_349.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015E;                                               | U+015E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_350.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015F;                                               | U+015F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_351.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0160;                                               | U+0160  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_352.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0161;                                               | U+0161  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_353.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0162;                                               | U+0162  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_354.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0163;                                               | U+0163  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_355.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0164;                                               | U+0164  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_356.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0165;                                               | U+0165  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_357.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0166;                                               | U+0166  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_358.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0167;                                               | U+0167  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_359.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0168;                                               | U+0168  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_360.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0169;                                               | U+0169  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_361.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016A;                                               | U+016A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_362.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016B;                                               | U+016B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_363.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016C;                                               | U+016C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_364.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016D;                                               | U+016D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_365.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016E;                                               | U+016E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_366.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016F;                                               | U+016F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_367.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0170;                                               | U+0170  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_368.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0171;                                               | U+0171  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_369.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0172;                                               | U+0172  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_370.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0173;                                               | U+0173  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_371.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0174;                                               | U+0174  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_372.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0175;                                               | U+0175  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_373.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0176;                                               | U+0176  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_374.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0177;                                               | U+0177  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_375.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0178;                                               | U+0178  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_376.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0179;                                               | U+0179  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_377.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017A;                                               | U+017A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_378.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017B;                                               | U+017B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_379.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017C;                                               | U+017C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_380.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017D;                                               | U+017D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_381.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017E;                                               | U+017E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_382.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FC;                                               | U+01FC  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_508.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FD;                                               | U+01FD  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_509.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FE;                                               | U+01FE  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_510.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FF;                                               | U+01FF  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_511.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0218;                                               | U+0218  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_536.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0219;                                               | U+0219  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_537.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x021A;                                               | U+021A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_538.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x021B;                                               | U+021B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_539.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0237;                                               | U+0237  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_567.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C6;                                               | U+02C6  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_710.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C7;                                               | U+02C7  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_711.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C9;                                               | U+02C9  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_713.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02D8;                                               | U+02D8  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_728.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02D9;                                               | U+02D9  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_729.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DA;                                               | U+02DA  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_730.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DB;                                               | U+02DB  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_731.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DC;                                               | U+02DC  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_732.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DD;                                               | U+02DD  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_733.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0384;                                               | U+0384  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_900.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0385;                                               | U+0385  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_901.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0386;                                               | U+0386  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_902.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0388;                                               | U+0388  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_904.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0389;                                               | U+0389  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_905.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038A;                                               | U+038A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_906.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038C;                                               | U+038C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_908.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038E;                                               | U+038E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_910.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038F;                                               | U+038F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_911.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0390;                                               | U+0390  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_912.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0391;                                               | U+0391  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_913.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0392;                                               | U+0392  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_914.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0393;                                               | U+0393  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_915.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0394;                                               | U+0394  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_916.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0395;                                               | U+0395  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_917.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0396;                                               | U+0396  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_918.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0397;                                               | U+0397  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_919.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0398;                                               | U+0398  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_920.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0399;                                               | U+0399  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_921.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039A;                                               | U+039A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_922.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039B;                                               | U+039B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_923.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039C;                                               | U+039C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_924.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039D;                                               | U+039D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_925.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039E;                                               | U+039E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_926.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039F;                                               | U+039F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_927.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A0;                                               | U+03A0  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_928.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A1;                                               | U+03A1  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_929.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A3;                                               | U+03A3  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_931.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A4;                                               | U+03A4  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_932.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A5;                                               | U+03A5  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_933.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A6;                                               | U+03A6  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_934.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A7;                                               | U+03A7  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_935.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A8;                                               | U+03A8  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_936.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A9;                                               | U+03A9  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_937.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AA;                                               | U+03AA  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_938.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AB;                                               | U+03AB  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_939.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AC;                                               | U+03AC  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_940.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AD;                                               | U+03AD  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_941.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AE;                                               | U+03AE  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_942.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AF;                                               | U+03AF  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_943.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B0;                                               | U+03B0  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_944.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B1;                                               | U+03B1  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_945.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B2;                                               | U+03B2  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_946.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B3;                                               | U+03B3  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_947.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B4;                                               | U+03B4  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_948.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B5;                                               | U+03B5  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_949.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B6;                                               | U+03B6  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_950.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B7;                                               | U+03B7  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_951.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B8;                                               | U+03B8  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_952.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B9;                                               | U+03B9  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_953.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BA;                                               | U+03BA  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_954.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BB;                                               | U+03BB  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_955.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BC;                                               | U+03BC  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_956.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BD;                                               | U+03BD  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_957.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BE;                                               | U+03BE  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_958.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BF;                                               | U+03BF  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_959.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C0;                                               | U+03C0  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_960.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C1;                                               | U+03C1  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_961.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C2;                                               | U+03C2  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_962.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C3;                                               | U+03C3  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_963.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C4;                                               | U+03C4  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_964.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C5;                                               | U+03C5  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_965.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C6;                                               | U+03C6  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_966.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C7;                                               | U+03C7  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_967.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C8;                                               | U+03C8  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_968.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C9;                                               | U+03C9  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_969.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CA;                                               | U+03CA  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_970.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CB;                                               | U+03CB  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_971.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CC;                                               | U+03CC  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_972.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CD;                                               | U+03CD  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_973.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CE;                                               | U+03CE  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_974.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0400;                                               | U+0400  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1024.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0401;                                               | U+0401  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1025.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0402;                                               | U+0402  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1026.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0403;                                               | U+0403  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1027.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0404;                                               | U+0404  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1028.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0405;                                               | U+0405  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1029.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0406;                                               | U+0406  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1030.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0407;                                               | U+0407  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1031.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0408;                                               | U+0408  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1032.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0409;                                               | U+0409  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1033.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040A;                                               | U+040A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1034.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040B;                                               | U+040B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1035.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040C;                                               | U+040C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1036.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040D;                                               | U+040D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1037.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040E;                                               | U+040E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1038.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040F;                                               | U+040F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1039.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0410;                                               | U+0410  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1040.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0411;                                               | U+0411  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1041.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0412;                                               | U+0412  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1042.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0413;                                               | U+0413  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1043.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0414;                                               | U+0414  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1044.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0415;                                               | U+0415  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1045.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0416;                                               | U+0416  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1046.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0417;                                               | U+0417  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1047.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0418;                                               | U+0418  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1048.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0419;                                               | U+0419  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1049.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041A;                                               | U+041A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1050.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041B;                                               | U+041B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1051.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041C;                                               | U+041C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1052.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041D;                                               | U+041D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1053.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041E;                                               | U+041E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1054.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041F;                                               | U+041F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1055.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0420;                                               | U+0420  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1056.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0421;                                               | U+0421  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1057.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0422;                                               | U+0422  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1058.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0423;                                               | U+0423  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1059.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0424;                                               | U+0424  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1060.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0425;                                               | U+0425  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1061.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0426;                                               | U+0426  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1062.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0427;                                               | U+0427  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1063.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0428;                                               | U+0428  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1064.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0429;                                               | U+0429  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1065.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042A;                                               | U+042A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1066.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042B;                                               | U+042B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1067.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042C;                                               | U+042C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1068.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042D;                                               | U+042D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1069.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042E;                                               | U+042E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1070.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042F;                                               | U+042F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1071.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0430;                                               | U+0430  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1072.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0431;                                               | U+0431  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1073.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0432;                                               | U+0432  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1074.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0433;                                               | U+0433  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1075.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0434;                                               | U+0434  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1076.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0435;                                               | U+0435  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1077.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0436;                                               | U+0436  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1078.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0437;                                               | U+0437  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1079.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0438;                                               | U+0438  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1080.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0439;                                               | U+0439  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1081.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043A;                                               | U+043A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1082.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043B;                                               | U+043B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1083.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043C;                                               | U+043C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1084.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043D;                                               | U+043D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1085.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043E;                                               | U+043E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1086.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043F;                                               | U+043F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1087.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0440;                                               | U+0440  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1088.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0441;                                               | U+0441  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1089.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0442;                                               | U+0442  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1090.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0443;                                               | U+0443  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1091.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0444;                                               | U+0444  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1092.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0445;                                               | U+0445  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1093.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0446;                                               | U+0446  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1094.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0447;                                               | U+0447  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1095.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0448;                                               | U+0448  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1096.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0449;                                               | U+0449  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1097.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044A;                                               | U+044A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1098.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044B;                                               | U+044B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1099.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044C;                                               | U+044C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1100.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044D;                                               | U+044D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1101.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044E;                                               | U+044E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1102.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044F;                                               | U+044F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1103.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0450;                                               | U+0450  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1104.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0451;                                               | U+0451  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1105.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0452;                                               | U+0452  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1106.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0453;                                               | U+0453  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1107.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0454;                                               | U+0454  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1108.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0455;                                               | U+0455  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1109.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0456;                                               | U+0456  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1110.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0457;                                               | U+0457  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1111.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0458;                                               | U+0458  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1112.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0459;                                               | U+0459  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1113.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045A;                                               | U+045A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1114.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045B;                                               | U+045B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1115.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045C;                                               | U+045C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1116.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045D;                                               | U+045D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1117.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045E;                                               | U+045E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1118.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045F;                                               | U+045F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1119.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0490;                                               | U+0490  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1168.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0491;                                               | U+0491  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_1169.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E02;                                               | U+1E02  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7682.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E03;                                               | U+1E03  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7683.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E0A;                                               | U+1E0A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7690.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E0B;                                               | U+1E0B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7691.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E1E;                                               | U+1E1E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7710.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E1F;                                               | U+1E1F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7711.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E22;                                               | U+1E22  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7714.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E23;                                               | U+1E23  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7715.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E30;                                               | U+1E30  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7728.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E31;                                               | U+1E31  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7729.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E40;                                               | U+1E40  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7744.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E41;                                               | U+1E41  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7745.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E56;                                               | U+1E56  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7766.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E57;                                               | U+1E57  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7767.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E60;                                               | U+1E60  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7776.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E61;                                               | U+1E61  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7777.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E6A;                                               | U+1E6A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7786.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E6B;                                               | U+1E6B  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7787.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E80;                                               | U+1E80  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7808.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E81;                                               | U+1E81  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7809.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E82;                                               | U+1E82  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7810.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E83;                                               | U+1E83  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7811.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E84;                                               | U+1E84  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7812.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E85;                                               | U+1E85  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7813.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E9E;                                               | U+1E9E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7838.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1EF2;                                               | U+1EF2  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7922.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1EF3;                                               | U+1EF3  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_7923.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2013;                                               | U+2013  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8211.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2014;                                               | U+2014  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8212.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2015;                                               | U+2015  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8213.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2018;                                               | U+2018  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8216.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2019;                                               | U+2019  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8217.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201A;                                               | U+201A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8218.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201C;                                               | U+201C  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8220.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201D;                                               | U+201D  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8221.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201E;                                               | U+201E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8222.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2020;                                               | U+2020  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8224.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2021;                                               | U+2021  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8225.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2022;                                               | U+2022  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8226.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2026;                                               | U+2026  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8230.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2030;                                               | U+2030  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8240.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2039;                                               | U+2039  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8249.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x203A;                                               | U+203A  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8250.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2044;                                               | U+2044  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8260.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x20AC;                                               | U+20AC  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8364.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2122;                                               | U+2122  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8482.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2126;                                               | U+2126  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8486.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2206;                                               | U+2206  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8710.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x220F;                                               | U+220F  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8719.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2211;                                               | U+2211  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8721.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2212;                                               | U+2212  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8722.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x221E;                                               | U+221E  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_8734.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x25CA;                                               | U+25CA  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_9674.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#xF6C3;                                               | U+F6C3  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_63171.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xF8FF;                                               | U+F8FF  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_63743.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xFB01;                                               | U+FB01  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_64257.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xFB02;                                               | U+FB02  | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_64258.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10000;                                              | U+10000 | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_65536.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10001;                                              | U+10001 | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_65537.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10002;                                              | U+10002 | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_65538.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10003;                                              | U+10003 | <img :src="'/assets/images/text/fonts/Minecraft-Five-Bold/Minecraft-Five-Bold_glyph_65539.svg'" class="svgFontGlyph" loading="lazy" /> |       |

</Spoiler>

## Minecraft Five v3 Supported Unicode Characters

This file is used by Ore UI. The file can be found in `data/gui/dist/hbui/fonts/MinecraftFiveV3-*.ttf`.

Unicode Range: `U+0020-003F, U+0041-007E, U+00A0-00A8, U+00AA-00AC, U+00AE-00B1, U+00B4, U+00B6-00B8, U+00BB, U+00BF-0148, U+014A-017E, U+01FC-01FF, U+0218-021B, U+0237, U+02C6-02C7, U+02C9, U+02D8-02DD, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE, U+0400-045F, U+0490-0491, U+1E02-1E03, U+1E0A-1E0B, U+1E1E-1E23, U+1E30-1E31, U+1E40-1E41, U+1E56-1E57, U+1E60-1E61, U+1E6A-1E6B, U+1E80-1E85, U+1E9E, U+1EF2-1EF3, U+2013-2015, U+2017-2022, U+2026, U+2030, U+2039-203A, U+2044, U+20AC, U+2122, U+2126, U+2206, U+220F, U+2211-2212, U+221E, U+25CA, U+3000, U+F6C3, U+F8FF, U+FB01-FB02, U+10000-10002`

<Spoiler title="Unicode Table">

| Character                                              | Unicode | Preview                                                                                                                        | Notes |
| ------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------ | ----- |
| <span innerHTML="&#x0020;" style="white-space:pre;" /> | U+0020  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_32.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0021;                                               | U+0021  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_33.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0022;                                               | U+0022  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_34.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0023;                                               | U+0023  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_35.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0024;                                               | U+0024  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_36.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0025;                                               | U+0025  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_37.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0026;                                               | U+0026  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_38.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0027;                                               | U+0027  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_39.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0028;                                               | U+0028  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_40.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0029;                                               | U+0029  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_41.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| \*                                                     | U+002A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_42.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002B;                                               | U+002B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_43.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002C;                                               | U+002C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_44.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002D;                                               | U+002D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_45.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002E;                                               | U+002E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_46.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002F;                                               | U+002F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_47.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0030;                                               | U+0030  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_48.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0031;                                               | U+0031  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_49.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0032;                                               | U+0032  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_50.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0033;                                               | U+0033  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_51.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0034;                                               | U+0034  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_52.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0035;                                               | U+0035  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_53.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0036;                                               | U+0036  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_54.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0037;                                               | U+0037  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_55.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0038;                                               | U+0038  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_56.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0039;                                               | U+0039  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_57.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003A;                                               | U+003A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_58.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003B;                                               | U+003B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_59.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003C;                                               | U+003C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_60.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003D;                                               | U+003D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_61.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003E;                                               | U+003E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_62.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003F;                                               | U+003F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_63.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0041;                                               | U+0041  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_65.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0042;                                               | U+0042  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_66.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0043;                                               | U+0043  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_67.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0044;                                               | U+0044  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_68.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0045;                                               | U+0045  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_69.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0046;                                               | U+0046  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_70.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0047;                                               | U+0047  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_71.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0048;                                               | U+0048  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_72.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0049;                                               | U+0049  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_73.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004A;                                               | U+004A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_74.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004B;                                               | U+004B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_75.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004C;                                               | U+004C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_76.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004D;                                               | U+004D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_77.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004E;                                               | U+004E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_78.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004F;                                               | U+004F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_79.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0050;                                               | U+0050  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_80.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0051;                                               | U+0051  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_81.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0052;                                               | U+0052  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_82.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0053;                                               | U+0053  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_83.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0054;                                               | U+0054  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_84.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0055;                                               | U+0055  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_85.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0056;                                               | U+0056  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_86.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0057;                                               | U+0057  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_87.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0058;                                               | U+0058  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_88.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0059;                                               | U+0059  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_89.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005A;                                               | U+005A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_90.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005B;                                               | U+005B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_91.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005C;                                               | U+005C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_92.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005D;                                               | U+005D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_93.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005E;                                               | U+005E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_94.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| \_                                                     | U+005F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_95.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0060;                                               | U+0060  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_96.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0061;                                               | U+0061  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_97.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0062;                                               | U+0062  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_98.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0063;                                               | U+0063  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_99.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0064;                                               | U+0064  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_100.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0065;                                               | U+0065  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_101.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0066;                                               | U+0066  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_102.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0067;                                               | U+0067  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_103.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0068;                                               | U+0068  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_104.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0069;                                               | U+0069  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_105.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006A;                                               | U+006A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_106.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006B;                                               | U+006B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_107.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006C;                                               | U+006C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_108.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006D;                                               | U+006D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_109.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006E;                                               | U+006E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_110.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006F;                                               | U+006F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_111.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0070;                                               | U+0070  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_112.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0071;                                               | U+0071  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_113.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0072;                                               | U+0072  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_114.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0073;                                               | U+0073  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_115.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0074;                                               | U+0074  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_116.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0075;                                               | U+0075  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_117.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0076;                                               | U+0076  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_118.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0077;                                               | U+0077  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_119.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0078;                                               | U+0078  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_120.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0079;                                               | U+0079  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_121.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007A;                                               | U+007A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_122.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007B;                                               | U+007B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_123.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007C;                                               | U+007C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_124.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007D;                                               | U+007D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_125.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007E;                                               | U+007E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_126.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| <UnicodeCopyButton code="00A0" />                      | U+00A0  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_160.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A1;                                               | U+00A1  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_161.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A2;                                               | U+00A2  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_162.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A3;                                               | U+00A3  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_163.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A4;                                               | U+00A4  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_164.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A5;                                               | U+00A5  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_165.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A6;                                               | U+00A6  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_166.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A7;                                               | U+00A7  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_167.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A8;                                               | U+00A8  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_168.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AA;                                               | U+00AA  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_170.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AB;                                               | U+00AB  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_171.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AC;                                               | U+00AC  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_172.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AE;                                               | U+00AE  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_174.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AF;                                               | U+00AF  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_175.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B0;                                               | U+00B0  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_176.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B1;                                               | U+00B1  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_177.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B4;                                               | U+00B4  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_180.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B6;                                               | U+00B6  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_182.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B7;                                               | U+00B7  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_183.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B8;                                               | U+00B8  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_184.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BB;                                               | U+00BB  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_187.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BF;                                               | U+00BF  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_191.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C0;                                               | U+00C0  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_192.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C1;                                               | U+00C1  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_193.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C2;                                               | U+00C2  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_194.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C3;                                               | U+00C3  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_195.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C4;                                               | U+00C4  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_196.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C5;                                               | U+00C5  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_197.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C6;                                               | U+00C6  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_198.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C7;                                               | U+00C7  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_199.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C8;                                               | U+00C8  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_200.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C9;                                               | U+00C9  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_201.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CA;                                               | U+00CA  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_202.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CB;                                               | U+00CB  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_203.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CC;                                               | U+00CC  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_204.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CD;                                               | U+00CD  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_205.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CE;                                               | U+00CE  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_206.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CF;                                               | U+00CF  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_207.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D0;                                               | U+00D0  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_208.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D1;                                               | U+00D1  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_209.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D2;                                               | U+00D2  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_210.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D3;                                               | U+00D3  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_211.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D4;                                               | U+00D4  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_212.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D5;                                               | U+00D5  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_213.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D6;                                               | U+00D6  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_214.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D7;                                               | U+00D7  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_215.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D8;                                               | U+00D8  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_216.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D9;                                               | U+00D9  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_217.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DA;                                               | U+00DA  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_218.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DB;                                               | U+00DB  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_219.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DC;                                               | U+00DC  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_220.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DD;                                               | U+00DD  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_221.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DE;                                               | U+00DE  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_222.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DF;                                               | U+00DF  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_223.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E0;                                               | U+00E0  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_224.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E1;                                               | U+00E1  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_225.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E2;                                               | U+00E2  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_226.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E3;                                               | U+00E3  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_227.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E4;                                               | U+00E4  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_228.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E5;                                               | U+00E5  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_229.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E6;                                               | U+00E6  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_230.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E7;                                               | U+00E7  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_231.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E8;                                               | U+00E8  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_232.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E9;                                               | U+00E9  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_233.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EA;                                               | U+00EA  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_234.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EB;                                               | U+00EB  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_235.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EC;                                               | U+00EC  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_236.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00ED;                                               | U+00ED  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_237.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EE;                                               | U+00EE  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_238.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EF;                                               | U+00EF  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_239.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F0;                                               | U+00F0  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_240.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F1;                                               | U+00F1  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_241.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F2;                                               | U+00F2  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_242.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F3;                                               | U+00F3  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_243.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F4;                                               | U+00F4  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_244.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F5;                                               | U+00F5  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_245.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F6;                                               | U+00F6  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_246.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F7;                                               | U+00F7  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_247.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F8;                                               | U+00F8  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_248.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F9;                                               | U+00F9  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_249.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FA;                                               | U+00FA  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_250.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FB;                                               | U+00FB  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_251.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FC;                                               | U+00FC  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_252.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FD;                                               | U+00FD  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_253.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FE;                                               | U+00FE  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_254.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FF;                                               | U+00FF  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_255.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0100;                                               | U+0100  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_256.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0101;                                               | U+0101  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_257.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0102;                                               | U+0102  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_258.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0103;                                               | U+0103  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_259.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0104;                                               | U+0104  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_260.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0105;                                               | U+0105  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_261.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0106;                                               | U+0106  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_262.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0107;                                               | U+0107  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_263.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0108;                                               | U+0108  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_264.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0109;                                               | U+0109  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_265.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010A;                                               | U+010A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_266.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010B;                                               | U+010B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_267.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010C;                                               | U+010C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_268.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010D;                                               | U+010D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_269.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010E;                                               | U+010E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_270.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010F;                                               | U+010F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_271.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0110;                                               | U+0110  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_272.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0111;                                               | U+0111  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_273.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0112;                                               | U+0112  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_274.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0113;                                               | U+0113  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_275.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0114;                                               | U+0114  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_276.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0115;                                               | U+0115  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_277.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0116;                                               | U+0116  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_278.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0117;                                               | U+0117  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_279.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0118;                                               | U+0118  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_280.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0119;                                               | U+0119  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_281.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011A;                                               | U+011A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_282.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011B;                                               | U+011B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_283.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011C;                                               | U+011C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_284.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011D;                                               | U+011D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_285.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011E;                                               | U+011E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_286.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011F;                                               | U+011F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_287.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0120;                                               | U+0120  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_288.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0121;                                               | U+0121  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_289.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0122;                                               | U+0122  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_290.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0123;                                               | U+0123  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_291.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0124;                                               | U+0124  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_292.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0125;                                               | U+0125  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_293.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0126;                                               | U+0126  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_294.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0127;                                               | U+0127  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_295.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0128;                                               | U+0128  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_296.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0129;                                               | U+0129  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_297.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012A;                                               | U+012A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_298.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012B;                                               | U+012B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_299.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012C;                                               | U+012C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_300.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012D;                                               | U+012D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_301.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012E;                                               | U+012E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_302.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012F;                                               | U+012F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_303.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0130;                                               | U+0130  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_304.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0131;                                               | U+0131  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_305.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0132;                                               | U+0132  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_306.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0133;                                               | U+0133  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_307.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0134;                                               | U+0134  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_308.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0135;                                               | U+0135  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_309.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0136;                                               | U+0136  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_310.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0137;                                               | U+0137  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_311.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0138;                                               | U+0138  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_312.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0139;                                               | U+0139  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_313.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013A;                                               | U+013A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_314.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013B;                                               | U+013B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_315.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013C;                                               | U+013C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_316.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013D;                                               | U+013D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_317.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013E;                                               | U+013E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_318.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013F;                                               | U+013F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_319.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0140;                                               | U+0140  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_320.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0141;                                               | U+0141  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_321.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0142;                                               | U+0142  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_322.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0143;                                               | U+0143  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_323.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0144;                                               | U+0144  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_324.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0145;                                               | U+0145  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_325.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0146;                                               | U+0146  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_326.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0147;                                               | U+0147  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_327.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0148;                                               | U+0148  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_328.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014A;                                               | U+014A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_330.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014B;                                               | U+014B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_331.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014C;                                               | U+014C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_332.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014D;                                               | U+014D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_333.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014E;                                               | U+014E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_334.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014F;                                               | U+014F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_335.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0150;                                               | U+0150  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_336.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0151;                                               | U+0151  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_337.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0152;                                               | U+0152  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_338.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0153;                                               | U+0153  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_339.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0154;                                               | U+0154  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_340.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0155;                                               | U+0155  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_341.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0156;                                               | U+0156  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_342.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0157;                                               | U+0157  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_343.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0158;                                               | U+0158  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_344.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0159;                                               | U+0159  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_345.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015A;                                               | U+015A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_346.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015B;                                               | U+015B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_347.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015C;                                               | U+015C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_348.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015D;                                               | U+015D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_349.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015E;                                               | U+015E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_350.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015F;                                               | U+015F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_351.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0160;                                               | U+0160  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_352.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0161;                                               | U+0161  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_353.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0162;                                               | U+0162  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_354.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0163;                                               | U+0163  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_355.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0164;                                               | U+0164  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_356.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0165;                                               | U+0165  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_357.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0166;                                               | U+0166  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_358.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0167;                                               | U+0167  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_359.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0168;                                               | U+0168  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_360.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0169;                                               | U+0169  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_361.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016A;                                               | U+016A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_362.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016B;                                               | U+016B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_363.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016C;                                               | U+016C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_364.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016D;                                               | U+016D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_365.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016E;                                               | U+016E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_366.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016F;                                               | U+016F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_367.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0170;                                               | U+0170  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_368.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0171;                                               | U+0171  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_369.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0172;                                               | U+0172  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_370.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0173;                                               | U+0173  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_371.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0174;                                               | U+0174  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_372.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0175;                                               | U+0175  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_373.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0176;                                               | U+0176  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_374.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0177;                                               | U+0177  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_375.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0178;                                               | U+0178  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_376.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0179;                                               | U+0179  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_377.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017A;                                               | U+017A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_378.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017B;                                               | U+017B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_379.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017C;                                               | U+017C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_380.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017D;                                               | U+017D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_381.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017E;                                               | U+017E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_382.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FC;                                               | U+01FC  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_508.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FD;                                               | U+01FD  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_509.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FE;                                               | U+01FE  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_510.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FF;                                               | U+01FF  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_511.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0218;                                               | U+0218  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_536.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0219;                                               | U+0219  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_537.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x021A;                                               | U+021A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_538.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x021B;                                               | U+021B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_539.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0237;                                               | U+0237  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_567.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C6;                                               | U+02C6  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_710.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C7;                                               | U+02C7  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_711.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C9;                                               | U+02C9  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_713.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02D8;                                               | U+02D8  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_728.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02D9;                                               | U+02D9  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_729.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DA;                                               | U+02DA  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_730.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DB;                                               | U+02DB  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_731.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DC;                                               | U+02DC  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_732.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DD;                                               | U+02DD  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_733.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0384;                                               | U+0384  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_900.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0385;                                               | U+0385  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_901.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0386;                                               | U+0386  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_902.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0387;                                               | U+0387  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_903.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0388;                                               | U+0388  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_904.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0389;                                               | U+0389  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_905.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038A;                                               | U+038A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_906.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038C;                                               | U+038C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_908.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038E;                                               | U+038E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_910.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038F;                                               | U+038F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_911.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0390;                                               | U+0390  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_912.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0391;                                               | U+0391  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_913.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0392;                                               | U+0392  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_914.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0393;                                               | U+0393  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_915.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0394;                                               | U+0394  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_916.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0395;                                               | U+0395  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_917.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0396;                                               | U+0396  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_918.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0397;                                               | U+0397  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_919.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0398;                                               | U+0398  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_920.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0399;                                               | U+0399  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_921.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039A;                                               | U+039A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_922.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039B;                                               | U+039B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_923.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039C;                                               | U+039C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_924.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039D;                                               | U+039D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_925.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039E;                                               | U+039E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_926.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039F;                                               | U+039F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_927.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A0;                                               | U+03A0  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_928.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A1;                                               | U+03A1  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_929.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A3;                                               | U+03A3  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_931.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A4;                                               | U+03A4  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_932.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A5;                                               | U+03A5  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_933.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A6;                                               | U+03A6  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_934.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A7;                                               | U+03A7  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_935.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A8;                                               | U+03A8  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_936.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A9;                                               | U+03A9  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_937.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AA;                                               | U+03AA  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_938.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AB;                                               | U+03AB  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_939.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AC;                                               | U+03AC  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_940.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AD;                                               | U+03AD  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_941.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AE;                                               | U+03AE  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_942.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AF;                                               | U+03AF  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_943.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B0;                                               | U+03B0  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_944.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B1;                                               | U+03B1  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_945.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B2;                                               | U+03B2  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_946.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B3;                                               | U+03B3  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_947.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B4;                                               | U+03B4  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_948.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B5;                                               | U+03B5  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_949.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B6;                                               | U+03B6  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_950.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B7;                                               | U+03B7  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_951.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B8;                                               | U+03B8  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_952.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B9;                                               | U+03B9  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_953.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BA;                                               | U+03BA  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_954.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BB;                                               | U+03BB  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_955.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BC;                                               | U+03BC  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_956.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BD;                                               | U+03BD  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_957.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BE;                                               | U+03BE  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_958.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BF;                                               | U+03BF  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_959.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C0;                                               | U+03C0  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_960.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C1;                                               | U+03C1  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_961.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C2;                                               | U+03C2  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_962.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C3;                                               | U+03C3  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_963.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C4;                                               | U+03C4  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_964.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C5;                                               | U+03C5  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_965.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C6;                                               | U+03C6  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_966.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C7;                                               | U+03C7  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_967.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C8;                                               | U+03C8  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_968.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C9;                                               | U+03C9  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_969.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CA;                                               | U+03CA  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_970.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CB;                                               | U+03CB  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_971.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CC;                                               | U+03CC  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_972.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CD;                                               | U+03CD  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_973.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CE;                                               | U+03CE  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_974.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0400;                                               | U+0400  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1024.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0401;                                               | U+0401  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1025.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0402;                                               | U+0402  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1026.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0403;                                               | U+0403  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1027.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0404;                                               | U+0404  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1028.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0405;                                               | U+0405  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1029.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0406;                                               | U+0406  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1030.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0407;                                               | U+0407  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1031.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0408;                                               | U+0408  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1032.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0409;                                               | U+0409  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1033.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040A;                                               | U+040A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1034.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040B;                                               | U+040B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1035.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040C;                                               | U+040C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1036.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040D;                                               | U+040D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1037.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040E;                                               | U+040E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1038.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040F;                                               | U+040F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1039.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0410;                                               | U+0410  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1040.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0411;                                               | U+0411  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1041.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0412;                                               | U+0412  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1042.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0413;                                               | U+0413  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1043.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0414;                                               | U+0414  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1044.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0415;                                               | U+0415  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1045.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0416;                                               | U+0416  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1046.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0417;                                               | U+0417  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1047.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0418;                                               | U+0418  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1048.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0419;                                               | U+0419  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1049.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041A;                                               | U+041A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1050.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041B;                                               | U+041B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1051.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041C;                                               | U+041C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1052.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041D;                                               | U+041D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1053.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041E;                                               | U+041E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1054.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041F;                                               | U+041F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1055.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0420;                                               | U+0420  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1056.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0421;                                               | U+0421  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1057.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0422;                                               | U+0422  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1058.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0423;                                               | U+0423  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1059.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0424;                                               | U+0424  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1060.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0425;                                               | U+0425  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1061.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0426;                                               | U+0426  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1062.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0427;                                               | U+0427  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1063.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0428;                                               | U+0428  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1064.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0429;                                               | U+0429  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1065.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042A;                                               | U+042A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1066.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042B;                                               | U+042B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1067.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042C;                                               | U+042C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1068.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042D;                                               | U+042D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1069.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042E;                                               | U+042E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1070.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042F;                                               | U+042F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1071.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0430;                                               | U+0430  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1072.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0431;                                               | U+0431  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1073.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0432;                                               | U+0432  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1074.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0433;                                               | U+0433  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1075.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0434;                                               | U+0434  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1076.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0435;                                               | U+0435  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1077.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0436;                                               | U+0436  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1078.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0437;                                               | U+0437  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1079.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0438;                                               | U+0438  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1080.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0439;                                               | U+0439  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1081.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043A;                                               | U+043A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1082.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043B;                                               | U+043B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1083.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043C;                                               | U+043C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1084.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043D;                                               | U+043D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1085.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043E;                                               | U+043E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1086.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043F;                                               | U+043F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1087.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0440;                                               | U+0440  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1088.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0441;                                               | U+0441  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1089.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0442;                                               | U+0442  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1090.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0443;                                               | U+0443  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1091.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0444;                                               | U+0444  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1092.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0445;                                               | U+0445  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1093.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0446;                                               | U+0446  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1094.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0447;                                               | U+0447  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1095.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0448;                                               | U+0448  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1096.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0449;                                               | U+0449  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1097.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044A;                                               | U+044A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1098.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044B;                                               | U+044B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1099.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044C;                                               | U+044C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1100.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044D;                                               | U+044D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1101.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044E;                                               | U+044E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1102.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044F;                                               | U+044F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1103.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0450;                                               | U+0450  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1104.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0451;                                               | U+0451  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1105.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0452;                                               | U+0452  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1106.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0453;                                               | U+0453  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1107.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0454;                                               | U+0454  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1108.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0455;                                               | U+0455  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1109.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0456;                                               | U+0456  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1110.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0457;                                               | U+0457  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1111.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0458;                                               | U+0458  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1112.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0459;                                               | U+0459  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1113.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045A;                                               | U+045A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1114.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045B;                                               | U+045B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1115.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045C;                                               | U+045C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1116.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045D;                                               | U+045D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1117.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045E;                                               | U+045E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1118.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045F;                                               | U+045F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1119.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0490;                                               | U+0490  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1168.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0491;                                               | U+0491  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_1169.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E02;                                               | U+1E02  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7682.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E03;                                               | U+1E03  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7683.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E0A;                                               | U+1E0A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7690.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E0B;                                               | U+1E0B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7691.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E1E;                                               | U+1E1E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7710.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E1F;                                               | U+1E1F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7711.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E20;                                               | U+1E20  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7712.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E21;                                               | U+1E21  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7713.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E22;                                               | U+1E22  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7714.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E23;                                               | U+1E23  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7715.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E30;                                               | U+1E30  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7728.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E31;                                               | U+1E31  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7729.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E40;                                               | U+1E40  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7744.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E41;                                               | U+1E41  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7745.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E56;                                               | U+1E56  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7766.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E57;                                               | U+1E57  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7767.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E60;                                               | U+1E60  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7776.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E61;                                               | U+1E61  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7777.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E6A;                                               | U+1E6A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7786.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E6B;                                               | U+1E6B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7787.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E80;                                               | U+1E80  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7808.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E81;                                               | U+1E81  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7809.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E82;                                               | U+1E82  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7810.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E83;                                               | U+1E83  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7811.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E84;                                               | U+1E84  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7812.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E85;                                               | U+1E85  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7813.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E9E;                                               | U+1E9E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7838.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1EF2;                                               | U+1EF2  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7922.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1EF3;                                               | U+1EF3  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_7923.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2013;                                               | U+2013  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8211.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2014;                                               | U+2014  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8212.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2015;                                               | U+2015  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8213.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2017;                                               | U+2017  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8215.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2018;                                               | U+2018  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8216.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2019;                                               | U+2019  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8217.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201A;                                               | U+201A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8218.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201B;                                               | U+201B  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8219.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201C;                                               | U+201C  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8220.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201D;                                               | U+201D  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8221.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201E;                                               | U+201E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8222.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201F;                                               | U+201F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8223.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2020;                                               | U+2020  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8224.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2021;                                               | U+2021  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8225.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2022;                                               | U+2022  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8226.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2026;                                               | U+2026  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8230.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2030;                                               | U+2030  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8240.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2039;                                               | U+2039  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8249.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x203A;                                               | U+203A  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8250.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2044;                                               | U+2044  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8260.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x20AC;                                               | U+20AC  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8364.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2122;                                               | U+2122  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8482.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2126;                                               | U+2126  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8486.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2206;                                               | U+2206  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8710.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x220F;                                               | U+220F  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8719.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2211;                                               | U+2211  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8721.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2212;                                               | U+2212  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8722.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x221E;                                               | U+221E  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_8734.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x25CA;                                               | U+25CA  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_9674.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| <UnicodeCopyButton code="3000" />                      | U+3000  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_12288.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xF6C3;                                               | U+F6C3  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_63171.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xF8FF;                                               | U+F8FF  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_63743.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xFB01;                                               | U+FB01  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_64257.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xFB02;                                               | U+FB02  | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_64258.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10000;                                              | U+10000 | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_65536.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10001;                                              | U+10001 | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_65537.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10002;                                              | U+10002 | <img :src="'/assets/images/text/fonts/MinecraftFiveV3/MinecraftFiveV3_glyph_65538.svg'" class="svgFontGlyph" loading="lazy" /> |       |

</Spoiler>

## Minecraft Seven v2 Supported Unicode Characters

This file is used by Ore UI. Whenever you see the Mojangles font in Ore UI when not in a world/realm/server, this is usually the font file being used. The file can be found in `data/gui/dist/hbui/fonts/Minecraft-Seven-*.otf`.

Unicode Range: `U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A5-00B1, U+00B4, U+00B6-00B8, U+00BA-00BB, U+00BF-0148, U+014A-017E, U+0192, U+01FC-01FF, U+0218-021B, U+0237, U+02C6-02C7, U+02C9, U+02D8-02DD, U+0384-0386, U+0388-038A, U+038C, U+038E-03A1, U+03A3-03CE, U+0400-045F, U+0490-0491, U+1E02-1E03, U+1E0A-1E0B, U+1E1E-1E1F, U+1E22-1E23, U+1E30-1E31, U+1E40-1E41, U+1E56-1E57, U+1E60-1E61, U+1E6A-1E6B, U+1E80-1E85, U+1E9E, U+1EF2-1EF3, U+2013-2015, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+20AC, U+2122, U+2126, U+2206, U+220F, U+2211-2212, U+221E, U+25CA, U+F6C3, U+F8FF, U+FB01-FB02, U+10000-1006A`

<Spoiler title="Unicode Table">

| Character                                               | Unicode | Preview                                                                                                                        | Notes |
| ------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------ | ----- |
| N/A                                                     | U+0000  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_0.svg'" class="svgFontGlyph" loading="lazy" />     |       |
| <UnicodeCopyButton code="000D" />                       | U+000D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_13.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| <span innerHTML="&#x0020;" style="white-space:pre;" />  | U+0020  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_32.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0021;                                                | U+0021  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_33.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0022;                                                | U+0022  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_34.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0023;                                                | U+0023  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_35.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0024;                                                | U+0024  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_36.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0025;                                                | U+0025  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_37.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0026;                                                | U+0026  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_38.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0027;                                                | U+0027  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_39.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0028;                                                | U+0028  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_40.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0029;                                                | U+0029  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_41.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| \*                                                      | U+002A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_42.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002B;                                                | U+002B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_43.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002C;                                                | U+002C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_44.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002D;                                                | U+002D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_45.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002E;                                                | U+002E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_46.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002F;                                                | U+002F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_47.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0030;                                                | U+0030  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_48.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0031;                                                | U+0031  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_49.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0032;                                                | U+0032  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_50.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0033;                                                | U+0033  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_51.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0034;                                                | U+0034  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_52.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0035;                                                | U+0035  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_53.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0036;                                                | U+0036  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_54.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0037;                                                | U+0037  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_55.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0038;                                                | U+0038  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_56.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0039;                                                | U+0039  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_57.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003A;                                                | U+003A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_58.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003B;                                                | U+003B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_59.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003C;                                                | U+003C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_60.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003D;                                                | U+003D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_61.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003E;                                                | U+003E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_62.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003F;                                                | U+003F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_63.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0040;                                                | U+0040  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_64.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0041;                                                | U+0041  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0042;                                                | U+0042  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_66.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0043;                                                | U+0043  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_67.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0044;                                                | U+0044  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_68.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0045;                                                | U+0045  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_69.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0046;                                                | U+0046  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_70.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0047;                                                | U+0047  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_71.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0048;                                                | U+0048  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_72.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0049;                                                | U+0049  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_73.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004A;                                                | U+004A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_74.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004B;                                                | U+004B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_75.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004C;                                                | U+004C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_76.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004D;                                                | U+004D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_77.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004E;                                                | U+004E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_78.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004F;                                                | U+004F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_79.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0050;                                                | U+0050  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_80.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0051;                                                | U+0051  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_81.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0052;                                                | U+0052  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_82.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0053;                                                | U+0053  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_83.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0054;                                                | U+0054  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_84.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0055;                                                | U+0055  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_85.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0056;                                                | U+0056  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_86.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0057;                                                | U+0057  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_87.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0058;                                                | U+0058  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_88.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0059;                                                | U+0059  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_89.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005A;                                                | U+005A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_90.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005B;                                                | U+005B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_91.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005C;                                                | U+005C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_92.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005D;                                                | U+005D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_93.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005E;                                                | U+005E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_94.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| \_                                                      | U+005F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_95.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0060;                                                | U+0060  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_96.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0061;                                                | U+0061  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_97.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0062;                                                | U+0062  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_98.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0063;                                                | U+0063  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_99.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0064;                                                | U+0064  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_100.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0065;                                                | U+0065  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_101.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0066;                                                | U+0066  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_102.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0067;                                                | U+0067  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_103.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0068;                                                | U+0068  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_104.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0069;                                                | U+0069  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_105.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006A;                                                | U+006A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_106.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006B;                                                | U+006B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_107.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006C;                                                | U+006C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_108.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006D;                                                | U+006D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_109.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006E;                                                | U+006E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_110.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006F;                                                | U+006F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_111.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0070;                                                | U+0070  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_112.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0071;                                                | U+0071  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_113.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0072;                                                | U+0072  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_114.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0073;                                                | U+0073  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_115.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0074;                                                | U+0074  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_116.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0075;                                                | U+0075  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_117.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0076;                                                | U+0076  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_118.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0077;                                                | U+0077  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_119.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0078;                                                | U+0078  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_120.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0079;                                                | U+0079  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_121.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007A;                                                | U+007A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_122.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007B;                                                | U+007B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_123.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007C;                                                | U+007C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_124.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007D;                                                | U+007D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_125.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007E;                                                | U+007E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_126.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| <UnicodeCopyButton code="00A0" />                       | U+00A0  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_160.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A1;                                                | U+00A1  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_161.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A2;                                                | U+00A2  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_162.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A3;                                                | U+00A3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_163.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A5;                                                | U+00A5  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_165.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A6;                                                | U+00A6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_166.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A7;                                                | U+00A7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_167.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A8;                                                | U+00A8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_168.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A9;                                                | U+00A9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_169.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AA;                                                | U+00AA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_170.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AB;                                                | U+00AB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_171.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AC;                                                | U+00AC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_172.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AD;                                                | U+00AD  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_173.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AE;                                                | U+00AE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_174.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AF;                                                | U+00AF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_175.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B0;                                                | U+00B0  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_176.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B1;                                                | U+00B1  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_177.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B4;                                                | U+00B4  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_180.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B6;                                                | U+00B6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_182.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B7;                                                | U+00B7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_183.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B8;                                                | U+00B8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_184.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BA;                                                | U+00BA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_186.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BB;                                                | U+00BB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_187.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BF;                                                | U+00BF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_191.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C0;                                                | U+00C0  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_192.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C1;                                                | U+00C1  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_193.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C2;                                                | U+00C2  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_194.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C3;                                                | U+00C3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_195.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C4;                                                | U+00C4  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_196.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C5;                                                | U+00C5  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_197.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C6;                                                | U+00C6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_198.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C7;                                                | U+00C7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_199.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C8;                                                | U+00C8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_200.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C9;                                                | U+00C9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_201.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CA;                                                | U+00CA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_202.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CB;                                                | U+00CB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_203.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CC;                                                | U+00CC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_204.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CD;                                                | U+00CD  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_205.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CE;                                                | U+00CE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_206.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CF;                                                | U+00CF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_207.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D0;                                                | U+00D0  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_208.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D1;                                                | U+00D1  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_209.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D2;                                                | U+00D2  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_210.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D3;                                                | U+00D3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_211.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D4;                                                | U+00D4  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_212.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D5;                                                | U+00D5  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_213.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D6;                                                | U+00D6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_214.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D7;                                                | U+00D7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_215.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D8;                                                | U+00D8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_216.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D9;                                                | U+00D9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_217.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DA;                                                | U+00DA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_218.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DB;                                                | U+00DB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_219.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DC;                                                | U+00DC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_220.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DD;                                                | U+00DD  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_221.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DE;                                                | U+00DE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_222.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DF;                                                | U+00DF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_223.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E0;                                                | U+00E0  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_224.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E1;                                                | U+00E1  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_225.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E2;                                                | U+00E2  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_226.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E3;                                                | U+00E3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_227.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E4;                                                | U+00E4  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_228.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E5;                                                | U+00E5  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_229.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E6;                                                | U+00E6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_230.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E7;                                                | U+00E7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_231.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E8;                                                | U+00E8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_232.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E9;                                                | U+00E9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_233.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EA;                                                | U+00EA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_234.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EB;                                                | U+00EB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_235.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EC;                                                | U+00EC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_236.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00ED;                                                | U+00ED  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_237.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EE;                                                | U+00EE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_238.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EF;                                                | U+00EF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_239.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F0;                                                | U+00F0  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_240.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F1;                                                | U+00F1  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_241.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F2;                                                | U+00F2  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_242.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F3;                                                | U+00F3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_243.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F4;                                                | U+00F4  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_244.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F5;                                                | U+00F5  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_245.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F6;                                                | U+00F6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_246.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F7;                                                | U+00F7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_247.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F8;                                                | U+00F8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_248.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F9;                                                | U+00F9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_249.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FA;                                                | U+00FA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_250.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FB;                                                | U+00FB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_251.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FC;                                                | U+00FC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_252.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FD;                                                | U+00FD  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_253.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FE;                                                | U+00FE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_254.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FF;                                                | U+00FF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_255.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0100;                                                | U+0100  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_256.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0101;                                                | U+0101  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_257.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0102;                                                | U+0102  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_258.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0103;                                                | U+0103  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_259.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0104;                                                | U+0104  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_260.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0105;                                                | U+0105  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_261.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0106;                                                | U+0106  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_262.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0107;                                                | U+0107  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_263.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0108;                                                | U+0108  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_264.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0109;                                                | U+0109  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_265.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010A;                                                | U+010A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_266.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010B;                                                | U+010B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_267.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010C;                                                | U+010C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_268.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010D;                                                | U+010D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_269.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010E;                                                | U+010E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_270.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010F;                                                | U+010F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_271.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0110;                                                | U+0110  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_272.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0111;                                                | U+0111  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_273.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0112;                                                | U+0112  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_274.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0113;                                                | U+0113  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_275.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0114;                                                | U+0114  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_276.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0115;                                                | U+0115  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_277.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0116;                                                | U+0116  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_278.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0117;                                                | U+0117  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_279.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0118;                                                | U+0118  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_280.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0119;                                                | U+0119  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_281.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011A;                                                | U+011A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_282.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011B;                                                | U+011B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_283.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011C;                                                | U+011C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_284.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011D;                                                | U+011D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_285.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011E;                                                | U+011E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_286.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011F;                                                | U+011F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_287.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0120;                                                | U+0120  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_288.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0121;                                                | U+0121  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_289.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0122;                                                | U+0122  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_290.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0123;                                                | U+0123  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_291.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0124;                                                | U+0124  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_292.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0125;                                                | U+0125  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_293.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0126;                                                | U+0126  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_294.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0127;                                                | U+0127  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_295.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0128;                                                | U+0128  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_296.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0129;                                                | U+0129  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_297.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012A;                                                | U+012A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_298.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012B;                                                | U+012B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_299.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012C;                                                | U+012C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_300.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012D;                                                | U+012D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_301.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012E;                                                | U+012E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_302.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012F;                                                | U+012F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_303.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0130;                                                | U+0130  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_304.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0131;                                                | U+0131  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_305.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0132;                                                | U+0132  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_306.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0133;                                                | U+0133  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_307.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0134;                                                | U+0134  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_308.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0135;                                                | U+0135  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_309.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0136;                                                | U+0136  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_310.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0137;                                                | U+0137  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_311.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0138;                                                | U+0138  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_312.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0139;                                                | U+0139  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_313.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013A;                                                | U+013A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_314.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013B;                                                | U+013B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_315.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013C;                                                | U+013C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_316.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013D;                                                | U+013D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_317.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013E;                                                | U+013E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_318.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013F;                                                | U+013F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_319.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0140;                                                | U+0140  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_320.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0141;                                                | U+0141  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_321.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0142;                                                | U+0142  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_322.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0143;                                                | U+0143  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_323.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0144;                                                | U+0144  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_324.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0145;                                                | U+0145  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_325.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0146;                                                | U+0146  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_326.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0147;                                                | U+0147  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_327.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0148;                                                | U+0148  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_328.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014A;                                                | U+014A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_330.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014B;                                                | U+014B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_331.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014C;                                                | U+014C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_332.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014D;                                                | U+014D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_333.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014E;                                                | U+014E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_334.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014F;                                                | U+014F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_335.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0150;                                                | U+0150  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_336.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0151;                                                | U+0151  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_337.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0152;                                                | U+0152  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_338.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0153;                                                | U+0153  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_339.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0154;                                                | U+0154  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_340.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0155;                                                | U+0155  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_341.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0156;                                                | U+0156  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_342.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0157;                                                | U+0157  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_343.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0158;                                                | U+0158  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_344.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0159;                                                | U+0159  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_345.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015A;                                                | U+015A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_346.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015B;                                                | U+015B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_347.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015C;                                                | U+015C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_348.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015D;                                                | U+015D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_349.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015E;                                                | U+015E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_350.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015F;                                                | U+015F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_351.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0160;                                                | U+0160  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_352.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0161;                                                | U+0161  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_353.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0162;                                                | U+0162  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_354.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0163;                                                | U+0163  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_355.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0164;                                                | U+0164  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_356.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0165;                                                | U+0165  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_357.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0166;                                                | U+0166  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_358.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0167;                                                | U+0167  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_359.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0168;                                                | U+0168  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_360.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0169;                                                | U+0169  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_361.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016A;                                                | U+016A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_362.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016B;                                                | U+016B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_363.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016C;                                                | U+016C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_364.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016D;                                                | U+016D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_365.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016E;                                                | U+016E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_366.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016F;                                                | U+016F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_367.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0170;                                                | U+0170  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_368.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0171;                                                | U+0171  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_369.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0172;                                                | U+0172  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_370.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0173;                                                | U+0173  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_371.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0174;                                                | U+0174  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_372.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0175;                                                | U+0175  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_373.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0176;                                                | U+0176  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_374.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0177;                                                | U+0177  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_375.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0178;                                                | U+0178  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_376.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0179;                                                | U+0179  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_377.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017A;                                                | U+017A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_378.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017B;                                                | U+017B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_379.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017C;                                                | U+017C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_380.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017D;                                                | U+017D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_381.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017E;                                                | U+017E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_382.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0192;                                                | U+0192  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_402.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FC;                                                | U+01FC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_508.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FD;                                                | U+01FD  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_509.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FE;                                                | U+01FE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_510.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FF;                                                | U+01FF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_511.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0218;                                                | U+0218  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_536.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0219;                                                | U+0219  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_537.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x021A;                                                | U+021A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_538.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x021B;                                                | U+021B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_539.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0237;                                                | U+0237  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_567.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C6;                                                | U+02C6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_710.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C7;                                                | U+02C7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_711.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C9;                                                | U+02C9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_713.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02D8;                                                | U+02D8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_728.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02D9;                                                | U+02D9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_729.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DA;                                                | U+02DA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_730.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DB;                                                | U+02DB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_731.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DC;                                                | U+02DC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_732.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DD;                                                | U+02DD  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_733.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0384;                                                | U+0384  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_900.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0385;                                                | U+0385  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_901.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0386;                                                | U+0386  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_902.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0388;                                                | U+0388  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_904.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0389;                                                | U+0389  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_905.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038A;                                                | U+038A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_906.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038C;                                                | U+038C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_908.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038E;                                                | U+038E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_910.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038F;                                                | U+038F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_911.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0390;                                                | U+0390  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_912.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0391;                                                | U+0391  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_913.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0392;                                                | U+0392  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_914.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0393;                                                | U+0393  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_915.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0394;                                                | U+0394  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_916.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0395;                                                | U+0395  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_917.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0396;                                                | U+0396  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_918.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0397;                                                | U+0397  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_919.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0398;                                                | U+0398  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_920.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0399;                                                | U+0399  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_921.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039A;                                                | U+039A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_922.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039B;                                                | U+039B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_923.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039C;                                                | U+039C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_924.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039D;                                                | U+039D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_925.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039E;                                                | U+039E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_926.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039F;                                                | U+039F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_927.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A0;                                                | U+03A0  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_928.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A1;                                                | U+03A1  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_929.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A3;                                                | U+03A3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_931.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A4;                                                | U+03A4  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_932.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A5;                                                | U+03A5  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_933.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A6;                                                | U+03A6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_934.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A7;                                                | U+03A7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_935.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A8;                                                | U+03A8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_936.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A9;                                                | U+03A9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_937.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AA;                                                | U+03AA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_938.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AB;                                                | U+03AB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_939.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AC;                                                | U+03AC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_940.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AD;                                                | U+03AD  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_941.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AE;                                                | U+03AE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_942.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AF;                                                | U+03AF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_943.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B0;                                                | U+03B0  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_944.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B1;                                                | U+03B1  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_945.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B2;                                                | U+03B2  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_946.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B3;                                                | U+03B3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_947.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B4;                                                | U+03B4  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_948.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B5;                                                | U+03B5  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_949.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B6;                                                | U+03B6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_950.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B7;                                                | U+03B7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_951.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B8;                                                | U+03B8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_952.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B9;                                                | U+03B9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_953.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BA;                                                | U+03BA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_954.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BB;                                                | U+03BB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_955.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BC;                                                | U+03BC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_956.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BD;                                                | U+03BD  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_957.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BE;                                                | U+03BE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_958.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BF;                                                | U+03BF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_959.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C0;                                                | U+03C0  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_960.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C1;                                                | U+03C1  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_961.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C2;                                                | U+03C2  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_962.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C3;                                                | U+03C3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_963.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C4;                                                | U+03C4  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_964.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C5;                                                | U+03C5  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_965.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C6;                                                | U+03C6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_966.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C7;                                                | U+03C7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_967.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C8;                                                | U+03C8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_968.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C9;                                                | U+03C9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_969.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CA;                                                | U+03CA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_970.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CB;                                                | U+03CB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_971.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CC;                                                | U+03CC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_972.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CD;                                                | U+03CD  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_973.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CE;                                                | U+03CE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_974.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0400;                                                | U+0400  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1024.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0401;                                                | U+0401  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1025.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0402;                                                | U+0402  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1026.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0403;                                                | U+0403  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1027.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0404;                                                | U+0404  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1028.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0405;                                                | U+0405  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1029.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0406;                                                | U+0406  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1030.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0407;                                                | U+0407  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1031.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0408;                                                | U+0408  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1032.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0409;                                                | U+0409  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1033.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040A;                                                | U+040A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1034.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040B;                                                | U+040B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1035.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040C;                                                | U+040C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1036.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040D;                                                | U+040D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1037.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040E;                                                | U+040E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1038.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040F;                                                | U+040F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1039.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0410;                                                | U+0410  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1040.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0411;                                                | U+0411  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1041.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0412;                                                | U+0412  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1042.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0413;                                                | U+0413  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1043.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0414;                                                | U+0414  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1044.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0415;                                                | U+0415  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1045.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0416;                                                | U+0416  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1046.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0417;                                                | U+0417  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1047.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0418;                                                | U+0418  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1048.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0419;                                                | U+0419  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1049.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041A;                                                | U+041A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1050.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041B;                                                | U+041B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1051.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041C;                                                | U+041C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1052.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041D;                                                | U+041D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1053.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041E;                                                | U+041E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1054.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041F;                                                | U+041F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1055.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0420;                                                | U+0420  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1056.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0421;                                                | U+0421  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1057.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0422;                                                | U+0422  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1058.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0423;                                                | U+0423  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1059.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0424;                                                | U+0424  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1060.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0425;                                                | U+0425  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1061.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0426;                                                | U+0426  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1062.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0427;                                                | U+0427  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1063.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0428;                                                | U+0428  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1064.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0429;                                                | U+0429  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1065.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042A;                                                | U+042A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1066.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042B;                                                | U+042B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1067.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042C;                                                | U+042C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1068.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042D;                                                | U+042D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1069.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042E;                                                | U+042E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1070.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042F;                                                | U+042F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1071.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0430;                                                | U+0430  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1072.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0431;                                                | U+0431  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1073.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0432;                                                | U+0432  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1074.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0433;                                                | U+0433  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1075.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0434;                                                | U+0434  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1076.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0435;                                                | U+0435  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1077.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0436;                                                | U+0436  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1078.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0437;                                                | U+0437  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1079.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0438;                                                | U+0438  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1080.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0439;                                                | U+0439  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1081.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043A;                                                | U+043A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1082.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043B;                                                | U+043B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1083.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043C;                                                | U+043C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1084.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043D;                                                | U+043D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1085.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043E;                                                | U+043E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1086.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043F;                                                | U+043F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1087.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0440;                                                | U+0440  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1088.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0441;                                                | U+0441  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1089.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0442;                                                | U+0442  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1090.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0443;                                                | U+0443  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1091.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0444;                                                | U+0444  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1092.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0445;                                                | U+0445  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1093.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0446;                                                | U+0446  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1094.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0447;                                                | U+0447  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1095.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0448;                                                | U+0448  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1096.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0449;                                                | U+0449  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1097.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044A;                                                | U+044A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1098.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044B;                                                | U+044B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1099.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044C;                                                | U+044C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1100.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044D;                                                | U+044D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1101.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044E;                                                | U+044E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1102.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044F;                                                | U+044F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1103.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0450;                                                | U+0450  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1104.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0451;                                                | U+0451  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1105.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0452;                                                | U+0452  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1106.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0453;                                                | U+0453  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1107.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0454;                                                | U+0454  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1108.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0455;                                                | U+0455  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1109.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0456;                                                | U+0456  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1110.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0457;                                                | U+0457  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1111.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0458;                                                | U+0458  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1112.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0459;                                                | U+0459  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1113.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045A;                                                | U+045A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1114.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045B;                                                | U+045B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1115.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045C;                                                | U+045C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1116.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045D;                                                | U+045D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1117.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045E;                                                | U+045E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1118.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045F;                                                | U+045F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1119.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0490;                                                | U+0490  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1168.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0491;                                                | U+0491  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_1169.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E02;                                                | U+1E02  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7682.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E03;                                                | U+1E03  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7683.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E0A;                                                | U+1E0A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7690.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E0B;                                                | U+1E0B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7691.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E1E;                                                | U+1E1E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7710.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E1F;                                                | U+1E1F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7711.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E22;                                                | U+1E22  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7714.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E23;                                                | U+1E23  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7715.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E30;                                                | U+1E30  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7728.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E31;                                                | U+1E31  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7729.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E40;                                                | U+1E40  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7744.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E41;                                                | U+1E41  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7745.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E56;                                                | U+1E56  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7766.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E57;                                                | U+1E57  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7767.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E60;                                                | U+1E60  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7776.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E61;                                                | U+1E61  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7777.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E6A;                                                | U+1E6A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7786.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E6B;                                                | U+1E6B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7787.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E80;                                                | U+1E80  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7808.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E81;                                                | U+1E81  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7809.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E82;                                                | U+1E82  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7810.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E83;                                                | U+1E83  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7811.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E84;                                                | U+1E84  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7812.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E85;                                                | U+1E85  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7813.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E9E;                                                | U+1E9E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7838.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1EF2;                                                | U+1EF2  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7922.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1EF3;                                                | U+1EF3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_7923.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2013;                                                | U+2013  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8211.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2014;                                                | U+2014  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8212.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2015;                                                | U+2015  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8213.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2018;                                                | U+2018  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8216.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2019;                                                | U+2019  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8217.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201A;                                                | U+201A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8218.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201C;                                                | U+201C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8220.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201D;                                                | U+201D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8221.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201E;                                                | U+201E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8222.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2020;                                                | U+2020  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8224.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2021;                                                | U+2021  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8225.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2022;                                                | U+2022  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8226.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2026;                                                | U+2026  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8230.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2030;                                                | U+2030  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8240.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2039;                                                | U+2039  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8249.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x203A;                                                | U+203A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8250.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2044;                                                | U+2044  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8260.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x20AC;                                                | U+20AC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8364.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2122;                                                | U+2122  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8482.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2126;                                                | U+2126  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8486.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2206;                                                | U+2206  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8710.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x220F;                                                | U+220F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8719.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2211;                                                | U+2211  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8721.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2212;                                                | U+2212  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8722.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x221E;                                                | U+221E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_8734.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x25CA;                                                | U+25CA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_9674.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#xF6C3;                                                | U+F6C3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_63171.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xF8FF;                                                | U+F8FF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_63743.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xFB01;                                                | U+FB01  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_64257.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xFB02;                                                | U+FB02  | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_64258.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10000;                                               | U+10000 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65536.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10001;                                               | U+10001 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65537.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10002;                                               | U+10002 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65538.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10003;                                               | U+10003 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65539.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10004;                                               | U+10004 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65540.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10005;                                               | U+10005 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65541.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10006;                                               | U+10006 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65542.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10007;                                               | U+10007 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65543.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10008;                                               | U+10008 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65544.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| <UnicodeCopyButton code="10009" />                      | U+10009 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65545.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| <UnicodeCopyButton code="1000A" />                      | U+1000A | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65546.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| <UnicodeCopyButton code="1000B" />                      | U+1000B | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65547.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| <UnicodeCopyButton code="1000C" />                      | U+1000C | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65548.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| <UnicodeCopyButton code="1000D" />                      | U+1000D | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65549.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1000E;                                               | U+1000E | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65550.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1000F;                                               | U+1000F | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65551.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10010;                                               | U+10010 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65552.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10011;                                               | U+10011 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65553.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10012;                                               | U+10012 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65554.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10013;                                               | U+10013 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65555.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10014;                                               | U+10014 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65556.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10015;                                               | U+10015 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65557.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10016;                                               | U+10016 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65558.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10017;                                               | U+10017 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65559.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10018;                                               | U+10018 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65560.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10019;                                               | U+10019 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65561.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1001A;                                               | U+1001A | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65562.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1001B;                                               | U+1001B | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65563.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1001C;                                               | U+1001C | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65564.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1001D;                                               | U+1001D | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65565.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1001E;                                               | U+1001E | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65566.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1001F;                                               | U+1001F | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65567.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| <span innerHTML="&#x10020;" style="white-space:pre;" /> | U+10020 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65568.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10021;                                               | U+10021 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65569.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10022;                                               | U+10022 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65570.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10023;                                               | U+10023 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65571.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10024;                                               | U+10024 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65572.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10025;                                               | U+10025 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65573.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10026;                                               | U+10026 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65574.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10027;                                               | U+10027 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65575.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10028;                                               | U+10028 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65576.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10029;                                               | U+10029 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65577.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1002A;                                               | U+1002A | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65578.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1002B;                                               | U+1002B | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65579.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1002C;                                               | U+1002C | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65580.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1002D;                                               | U+1002D | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65581.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1002E;                                               | U+1002E | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65582.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1002F;                                               | U+1002F | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65583.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10030;                                               | U+10030 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65584.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10031;                                               | U+10031 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65585.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10032;                                               | U+10032 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65586.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10033;                                               | U+10033 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65587.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10034;                                               | U+10034 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65588.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10035;                                               | U+10035 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65589.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10036;                                               | U+10036 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65590.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10037;                                               | U+10037 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65591.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10038;                                               | U+10038 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65592.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10039;                                               | U+10039 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65593.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1003A;                                               | U+1003A | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65594.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1003B;                                               | U+1003B | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65595.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1003C;                                               | U+1003C | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65596.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1003D;                                               | U+1003D | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65597.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1003E;                                               | U+1003E | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65598.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1003F;                                               | U+1003F | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65599.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10040;                                               | U+10040 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65600.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10041;                                               | U+10041 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65601.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10042;                                               | U+10042 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65602.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10043;                                               | U+10043 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65603.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10044;                                               | U+10044 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65604.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10045;                                               | U+10045 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65605.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10046;                                               | U+10046 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65606.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10047;                                               | U+10047 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65607.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10048;                                               | U+10048 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65608.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10049;                                               | U+10049 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65609.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1004A;                                               | U+1004A | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65610.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1004B;                                               | U+1004B | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65611.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1004C;                                               | U+1004C | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65612.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1004D;                                               | U+1004D | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65613.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1004E;                                               | U+1004E | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65614.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1004F;                                               | U+1004F | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65615.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10050;                                               | U+10050 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65616.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10051;                                               | U+10051 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65617.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10052;                                               | U+10052 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65618.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10053;                                               | U+10053 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65619.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10054;                                               | U+10054 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65620.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10055;                                               | U+10055 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65621.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10056;                                               | U+10056 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65622.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10057;                                               | U+10057 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65623.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10058;                                               | U+10058 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65624.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10059;                                               | U+10059 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65625.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1005A;                                               | U+1005A | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65626.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1005B;                                               | U+1005B | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65627.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1005C;                                               | U+1005C | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65628.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1005D;                                               | U+1005D | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65629.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1005E;                                               | U+1005E | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65630.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1005F;                                               | U+1005F | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65631.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10060;                                               | U+10060 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65632.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10061;                                               | U+10061 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65633.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10062;                                               | U+10062 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65634.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10063;                                               | U+10063 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65635.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10064;                                               | U+10064 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65636.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10065;                                               | U+10065 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65637.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10066;                                               | U+10066 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65638.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10067;                                               | U+10067 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65639.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10068;                                               | U+10068 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65640.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10069;                                               | U+10069 | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65641.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x1006A;                                               | U+1006A | <img :src="'/assets/images/text/fonts/Minecraft-Seven/Minecraft-Seven_glyph_65642.svg'" class="svgFontGlyph" loading="lazy" /> |       |

</Spoiler>

## Minecraft Seven v4 Supported Unicode Characters

This file is used by Ore UI. This is used mainly on gameplay Ore UI screens (Ore UI screens you see while you are in a world/realm/server). The file can be found in `data/gui/dist/hbui/fonts/Minecraft-Seven-v4-*.ttf`.

Unicode Range: `U+0020-007E, U+00A0-00AC, U+00AE-017E, U+0192, U+01FC-01FF, U+0218-021B, U+0237, U+02C6-02C7, U+02C9, U+02D8-02DD, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE, U+0400-045F, U+0490-0491, U+1E02-1E03, U+1E0A-1E0B, U+1E1E-1E23, U+1E30-1E31, U+1E40-1E41, U+1E56-1E57, U+1E60-1E61, U+1E6A-1E6B, U+1E80-1E85, U+1E9E, U+1EF2-1EF3, U+2013-2015, U+2017-2022, U+2026, U+2030, U+2039-203A, U+2044, U+20AC, U+2122, U+2126, U+2206, U+220F, U+2211-2212, U+221E, U+25CA, U+3000, U+F6C3, U+F8FF, U+FB01-FB02, U+10000-10002`

<Spoiler title="Unicode Table">

| Character                                              | Unicode | Preview                                                                                                                              | Notes |
| ------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----- |
| <span innerHTML="&#x0020;" style="white-space:pre;" /> | U+0020  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_32.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0021;                                               | U+0021  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_33.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0022;                                               | U+0022  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_34.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0023;                                               | U+0023  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_35.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0024;                                               | U+0024  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_36.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0025;                                               | U+0025  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_37.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0026;                                               | U+0026  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_38.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0027;                                               | U+0027  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_39.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0028;                                               | U+0028  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_40.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0029;                                               | U+0029  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_41.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| \*                                                     | U+002A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_42.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002B;                                               | U+002B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_43.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002C;                                               | U+002C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_44.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002D;                                               | U+002D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_45.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002E;                                               | U+002E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_46.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002F;                                               | U+002F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_47.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0030;                                               | U+0030  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_48.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0031;                                               | U+0031  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_49.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0032;                                               | U+0032  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_50.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0033;                                               | U+0033  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_51.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0034;                                               | U+0034  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_52.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0035;                                               | U+0035  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_53.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0036;                                               | U+0036  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_54.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0037;                                               | U+0037  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_55.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0038;                                               | U+0038  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_56.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0039;                                               | U+0039  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_57.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003A;                                               | U+003A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_58.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003B;                                               | U+003B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_59.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003C;                                               | U+003C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_60.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003D;                                               | U+003D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_61.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003E;                                               | U+003E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_62.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003F;                                               | U+003F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_63.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0040;                                               | U+0040  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_64.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0041;                                               | U+0041  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_65.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0042;                                               | U+0042  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_66.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0043;                                               | U+0043  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_67.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0044;                                               | U+0044  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_68.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0045;                                               | U+0045  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_69.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0046;                                               | U+0046  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_70.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0047;                                               | U+0047  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_71.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0048;                                               | U+0048  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_72.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0049;                                               | U+0049  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_73.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004A;                                               | U+004A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_74.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004B;                                               | U+004B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_75.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004C;                                               | U+004C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_76.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004D;                                               | U+004D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_77.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004E;                                               | U+004E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_78.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004F;                                               | U+004F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_79.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0050;                                               | U+0050  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_80.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0051;                                               | U+0051  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_81.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0052;                                               | U+0052  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_82.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0053;                                               | U+0053  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_83.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0054;                                               | U+0054  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_84.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0055;                                               | U+0055  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_85.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0056;                                               | U+0056  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_86.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0057;                                               | U+0057  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_87.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0058;                                               | U+0058  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_88.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0059;                                               | U+0059  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_89.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005A;                                               | U+005A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_90.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005B;                                               | U+005B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_91.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005C;                                               | U+005C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_92.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005D;                                               | U+005D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_93.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005E;                                               | U+005E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_94.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| \_                                                     | U+005F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_95.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0060;                                               | U+0060  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_96.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0061;                                               | U+0061  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_97.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0062;                                               | U+0062  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_98.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0063;                                               | U+0063  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_99.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0064;                                               | U+0064  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_100.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0065;                                               | U+0065  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_101.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0066;                                               | U+0066  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_102.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0067;                                               | U+0067  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_103.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0068;                                               | U+0068  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_104.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0069;                                               | U+0069  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_105.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006A;                                               | U+006A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_106.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006B;                                               | U+006B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_107.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006C;                                               | U+006C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_108.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006D;                                               | U+006D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_109.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006E;                                               | U+006E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_110.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006F;                                               | U+006F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_111.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0070;                                               | U+0070  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_112.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0071;                                               | U+0071  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_113.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0072;                                               | U+0072  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_114.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0073;                                               | U+0073  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_115.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0074;                                               | U+0074  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_116.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0075;                                               | U+0075  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_117.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0076;                                               | U+0076  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_118.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0077;                                               | U+0077  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_119.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0078;                                               | U+0078  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_120.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0079;                                               | U+0079  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_121.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007A;                                               | U+007A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_122.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007B;                                               | U+007B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_123.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007C;                                               | U+007C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_124.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007D;                                               | U+007D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_125.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007E;                                               | U+007E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_126.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| <UnicodeCopyButton code="00A0" />                      | U+00A0  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_160.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A1;                                               | U+00A1  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_161.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A2;                                               | U+00A2  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_162.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A3;                                               | U+00A3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_163.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A4;                                               | U+00A4  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_164.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A5;                                               | U+00A5  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_165.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A6;                                               | U+00A6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_166.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A7;                                               | U+00A7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_167.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A8;                                               | U+00A8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_168.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A9;                                               | U+00A9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_169.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AA;                                               | U+00AA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_170.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AB;                                               | U+00AB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_171.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AC;                                               | U+00AC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_172.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AE;                                               | U+00AE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_174.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AF;                                               | U+00AF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_175.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B0;                                               | U+00B0  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_176.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B1;                                               | U+00B1  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_177.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B2;                                               | U+00B2  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_178.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B3;                                               | U+00B3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_179.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B4;                                               | U+00B4  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_180.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B5;                                               | U+00B5  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_181.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B6;                                               | U+00B6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_182.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B7;                                               | U+00B7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_183.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B8;                                               | U+00B8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_184.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B9;                                               | U+00B9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_185.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BA;                                               | U+00BA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_186.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BB;                                               | U+00BB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_187.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BC;                                               | U+00BC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_188.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BD;                                               | U+00BD  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_189.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BE;                                               | U+00BE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_190.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BF;                                               | U+00BF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_191.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C0;                                               | U+00C0  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_192.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C1;                                               | U+00C1  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_193.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C2;                                               | U+00C2  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_194.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C3;                                               | U+00C3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_195.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C4;                                               | U+00C4  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_196.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C5;                                               | U+00C5  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_197.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C6;                                               | U+00C6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_198.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C7;                                               | U+00C7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_199.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C8;                                               | U+00C8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_200.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C9;                                               | U+00C9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_201.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CA;                                               | U+00CA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_202.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CB;                                               | U+00CB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_203.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CC;                                               | U+00CC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_204.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CD;                                               | U+00CD  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_205.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CE;                                               | U+00CE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_206.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CF;                                               | U+00CF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_207.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D0;                                               | U+00D0  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_208.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D1;                                               | U+00D1  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_209.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D2;                                               | U+00D2  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_210.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D3;                                               | U+00D3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_211.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D4;                                               | U+00D4  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_212.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D5;                                               | U+00D5  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_213.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D6;                                               | U+00D6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_214.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D7;                                               | U+00D7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_215.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D8;                                               | U+00D8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_216.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D9;                                               | U+00D9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_217.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DA;                                               | U+00DA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_218.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DB;                                               | U+00DB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_219.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DC;                                               | U+00DC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_220.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DD;                                               | U+00DD  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_221.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DE;                                               | U+00DE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_222.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DF;                                               | U+00DF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_223.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E0;                                               | U+00E0  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_224.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E1;                                               | U+00E1  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_225.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E2;                                               | U+00E2  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_226.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E3;                                               | U+00E3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_227.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E4;                                               | U+00E4  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_228.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E5;                                               | U+00E5  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_229.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E6;                                               | U+00E6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_230.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E7;                                               | U+00E7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_231.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E8;                                               | U+00E8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_232.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E9;                                               | U+00E9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_233.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EA;                                               | U+00EA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_234.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EB;                                               | U+00EB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_235.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EC;                                               | U+00EC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_236.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00ED;                                               | U+00ED  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_237.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EE;                                               | U+00EE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_238.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EF;                                               | U+00EF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_239.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F0;                                               | U+00F0  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_240.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F1;                                               | U+00F1  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_241.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F2;                                               | U+00F2  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_242.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F3;                                               | U+00F3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_243.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F4;                                               | U+00F4  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_244.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F5;                                               | U+00F5  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_245.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F6;                                               | U+00F6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_246.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F7;                                               | U+00F7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_247.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F8;                                               | U+00F8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_248.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F9;                                               | U+00F9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_249.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FA;                                               | U+00FA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_250.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FB;                                               | U+00FB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_251.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FC;                                               | U+00FC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_252.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FD;                                               | U+00FD  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_253.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FE;                                               | U+00FE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_254.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FF;                                               | U+00FF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_255.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0100;                                               | U+0100  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_256.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0101;                                               | U+0101  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_257.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0102;                                               | U+0102  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_258.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0103;                                               | U+0103  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_259.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0104;                                               | U+0104  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_260.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0105;                                               | U+0105  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_261.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0106;                                               | U+0106  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_262.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0107;                                               | U+0107  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_263.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0108;                                               | U+0108  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_264.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0109;                                               | U+0109  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_265.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010A;                                               | U+010A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_266.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010B;                                               | U+010B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_267.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010C;                                               | U+010C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_268.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010D;                                               | U+010D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_269.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010E;                                               | U+010E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_270.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010F;                                               | U+010F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_271.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0110;                                               | U+0110  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_272.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0111;                                               | U+0111  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_273.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0112;                                               | U+0112  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_274.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0113;                                               | U+0113  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_275.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0114;                                               | U+0114  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_276.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0115;                                               | U+0115  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_277.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0116;                                               | U+0116  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_278.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0117;                                               | U+0117  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_279.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0118;                                               | U+0118  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_280.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0119;                                               | U+0119  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_281.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011A;                                               | U+011A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_282.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011B;                                               | U+011B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_283.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011C;                                               | U+011C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_284.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011D;                                               | U+011D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_285.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011E;                                               | U+011E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_286.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011F;                                               | U+011F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_287.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0120;                                               | U+0120  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_288.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0121;                                               | U+0121  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_289.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0122;                                               | U+0122  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_290.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0123;                                               | U+0123  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_291.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0124;                                               | U+0124  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_292.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0125;                                               | U+0125  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_293.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0126;                                               | U+0126  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_294.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0127;                                               | U+0127  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_295.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0128;                                               | U+0128  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_296.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0129;                                               | U+0129  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_297.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012A;                                               | U+012A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_298.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012B;                                               | U+012B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_299.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012C;                                               | U+012C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_300.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012D;                                               | U+012D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_301.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012E;                                               | U+012E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_302.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012F;                                               | U+012F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_303.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0130;                                               | U+0130  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_304.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0131;                                               | U+0131  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_305.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0132;                                               | U+0132  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_306.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0133;                                               | U+0133  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_307.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0134;                                               | U+0134  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_308.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0135;                                               | U+0135  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_309.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0136;                                               | U+0136  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_310.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0137;                                               | U+0137  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_311.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0138;                                               | U+0138  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_312.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0139;                                               | U+0139  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_313.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013A;                                               | U+013A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_314.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013B;                                               | U+013B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_315.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013C;                                               | U+013C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_316.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013D;                                               | U+013D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_317.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013E;                                               | U+013E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_318.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013F;                                               | U+013F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_319.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0140;                                               | U+0140  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_320.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0141;                                               | U+0141  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_321.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0142;                                               | U+0142  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_322.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0143;                                               | U+0143  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_323.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0144;                                               | U+0144  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_324.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0145;                                               | U+0145  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_325.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0146;                                               | U+0146  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_326.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0147;                                               | U+0147  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_327.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0148;                                               | U+0148  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_328.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0149;                                               | U+0149  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_329.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014A;                                               | U+014A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_330.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014B;                                               | U+014B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_331.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014C;                                               | U+014C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_332.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014D;                                               | U+014D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_333.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014E;                                               | U+014E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_334.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014F;                                               | U+014F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_335.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0150;                                               | U+0150  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_336.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0151;                                               | U+0151  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_337.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0152;                                               | U+0152  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_338.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0153;                                               | U+0153  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_339.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0154;                                               | U+0154  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_340.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0155;                                               | U+0155  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_341.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0156;                                               | U+0156  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_342.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0157;                                               | U+0157  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_343.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0158;                                               | U+0158  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_344.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0159;                                               | U+0159  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_345.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015A;                                               | U+015A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_346.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015B;                                               | U+015B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_347.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015C;                                               | U+015C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_348.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015D;                                               | U+015D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_349.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015E;                                               | U+015E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_350.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015F;                                               | U+015F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_351.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0160;                                               | U+0160  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_352.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0161;                                               | U+0161  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_353.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0162;                                               | U+0162  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_354.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0163;                                               | U+0163  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_355.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0164;                                               | U+0164  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_356.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0165;                                               | U+0165  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_357.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0166;                                               | U+0166  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_358.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0167;                                               | U+0167  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_359.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0168;                                               | U+0168  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_360.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0169;                                               | U+0169  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_361.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016A;                                               | U+016A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_362.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016B;                                               | U+016B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_363.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016C;                                               | U+016C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_364.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016D;                                               | U+016D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_365.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016E;                                               | U+016E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_366.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016F;                                               | U+016F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_367.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0170;                                               | U+0170  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_368.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0171;                                               | U+0171  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_369.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0172;                                               | U+0172  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_370.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0173;                                               | U+0173  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_371.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0174;                                               | U+0174  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_372.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0175;                                               | U+0175  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_373.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0176;                                               | U+0176  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_374.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0177;                                               | U+0177  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_375.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0178;                                               | U+0178  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_376.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0179;                                               | U+0179  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_377.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017A;                                               | U+017A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_378.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017B;                                               | U+017B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_379.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017C;                                               | U+017C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_380.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017D;                                               | U+017D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_381.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017E;                                               | U+017E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_382.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0192;                                               | U+0192  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_402.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FC;                                               | U+01FC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_508.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FD;                                               | U+01FD  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_509.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FE;                                               | U+01FE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_510.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FF;                                               | U+01FF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_511.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0218;                                               | U+0218  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_536.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0219;                                               | U+0219  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_537.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x021A;                                               | U+021A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_538.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x021B;                                               | U+021B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_539.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0237;                                               | U+0237  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_567.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C6;                                               | U+02C6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_710.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C7;                                               | U+02C7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_711.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C9;                                               | U+02C9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_713.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02D8;                                               | U+02D8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_728.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02D9;                                               | U+02D9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_729.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DA;                                               | U+02DA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_730.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DB;                                               | U+02DB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_731.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DC;                                               | U+02DC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_732.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DD;                                               | U+02DD  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_733.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0384;                                               | U+0384  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_900.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0385;                                               | U+0385  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_901.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0386;                                               | U+0386  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_902.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0387;                                               | U+0387  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_903.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0388;                                               | U+0388  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_904.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0389;                                               | U+0389  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_905.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038A;                                               | U+038A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_906.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038C;                                               | U+038C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_908.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038E;                                               | U+038E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_910.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038F;                                               | U+038F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_911.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0390;                                               | U+0390  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_912.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0391;                                               | U+0391  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_913.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0392;                                               | U+0392  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_914.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0393;                                               | U+0393  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_915.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0394;                                               | U+0394  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_916.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0395;                                               | U+0395  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_917.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0396;                                               | U+0396  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_918.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0397;                                               | U+0397  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_919.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0398;                                               | U+0398  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_920.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0399;                                               | U+0399  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_921.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039A;                                               | U+039A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_922.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039B;                                               | U+039B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_923.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039C;                                               | U+039C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_924.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039D;                                               | U+039D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_925.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039E;                                               | U+039E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_926.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039F;                                               | U+039F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_927.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A0;                                               | U+03A0  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_928.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A1;                                               | U+03A1  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_929.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A3;                                               | U+03A3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_931.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A4;                                               | U+03A4  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_932.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A5;                                               | U+03A5  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_933.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A6;                                               | U+03A6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_934.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A7;                                               | U+03A7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_935.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A8;                                               | U+03A8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_936.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A9;                                               | U+03A9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_937.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AA;                                               | U+03AA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_938.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AB;                                               | U+03AB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_939.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AC;                                               | U+03AC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_940.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AD;                                               | U+03AD  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_941.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AE;                                               | U+03AE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_942.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AF;                                               | U+03AF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_943.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B0;                                               | U+03B0  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_944.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B1;                                               | U+03B1  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_945.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B2;                                               | U+03B2  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_946.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B3;                                               | U+03B3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_947.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B4;                                               | U+03B4  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_948.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B5;                                               | U+03B5  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_949.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B6;                                               | U+03B6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_950.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B7;                                               | U+03B7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_951.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B8;                                               | U+03B8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_952.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B9;                                               | U+03B9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_953.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BA;                                               | U+03BA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_954.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BB;                                               | U+03BB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_955.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BC;                                               | U+03BC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_956.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BD;                                               | U+03BD  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_957.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BE;                                               | U+03BE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_958.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BF;                                               | U+03BF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_959.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C0;                                               | U+03C0  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_960.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C1;                                               | U+03C1  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_961.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C2;                                               | U+03C2  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_962.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C3;                                               | U+03C3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_963.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C4;                                               | U+03C4  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_964.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C5;                                               | U+03C5  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_965.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C6;                                               | U+03C6  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_966.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C7;                                               | U+03C7  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_967.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C8;                                               | U+03C8  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_968.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C9;                                               | U+03C9  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_969.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CA;                                               | U+03CA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_970.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CB;                                               | U+03CB  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_971.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CC;                                               | U+03CC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_972.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CD;                                               | U+03CD  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_973.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CE;                                               | U+03CE  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_974.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0400;                                               | U+0400  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1024.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0401;                                               | U+0401  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1025.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0402;                                               | U+0402  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1026.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0403;                                               | U+0403  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1027.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0404;                                               | U+0404  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1028.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0405;                                               | U+0405  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1029.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0406;                                               | U+0406  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1030.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0407;                                               | U+0407  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1031.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0408;                                               | U+0408  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1032.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0409;                                               | U+0409  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1033.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040A;                                               | U+040A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1034.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040B;                                               | U+040B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1035.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040C;                                               | U+040C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1036.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040D;                                               | U+040D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1037.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040E;                                               | U+040E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1038.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040F;                                               | U+040F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1039.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0410;                                               | U+0410  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1040.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0411;                                               | U+0411  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1041.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0412;                                               | U+0412  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1042.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0413;                                               | U+0413  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1043.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0414;                                               | U+0414  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1044.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0415;                                               | U+0415  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1045.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0416;                                               | U+0416  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1046.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0417;                                               | U+0417  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1047.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0418;                                               | U+0418  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1048.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0419;                                               | U+0419  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1049.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041A;                                               | U+041A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1050.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041B;                                               | U+041B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1051.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041C;                                               | U+041C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1052.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041D;                                               | U+041D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1053.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041E;                                               | U+041E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1054.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041F;                                               | U+041F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1055.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0420;                                               | U+0420  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1056.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0421;                                               | U+0421  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1057.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0422;                                               | U+0422  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1058.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0423;                                               | U+0423  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1059.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0424;                                               | U+0424  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1060.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0425;                                               | U+0425  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1061.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0426;                                               | U+0426  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1062.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0427;                                               | U+0427  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1063.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0428;                                               | U+0428  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1064.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0429;                                               | U+0429  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1065.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042A;                                               | U+042A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1066.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042B;                                               | U+042B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1067.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042C;                                               | U+042C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1068.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042D;                                               | U+042D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1069.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042E;                                               | U+042E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1070.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042F;                                               | U+042F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1071.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0430;                                               | U+0430  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1072.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0431;                                               | U+0431  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1073.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0432;                                               | U+0432  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1074.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0433;                                               | U+0433  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1075.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0434;                                               | U+0434  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1076.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0435;                                               | U+0435  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1077.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0436;                                               | U+0436  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1078.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0437;                                               | U+0437  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1079.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0438;                                               | U+0438  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1080.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0439;                                               | U+0439  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1081.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043A;                                               | U+043A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1082.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043B;                                               | U+043B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1083.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043C;                                               | U+043C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1084.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043D;                                               | U+043D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1085.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043E;                                               | U+043E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1086.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043F;                                               | U+043F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1087.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0440;                                               | U+0440  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1088.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0441;                                               | U+0441  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1089.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0442;                                               | U+0442  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1090.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0443;                                               | U+0443  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1091.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0444;                                               | U+0444  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1092.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0445;                                               | U+0445  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1093.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0446;                                               | U+0446  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1094.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0447;                                               | U+0447  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1095.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0448;                                               | U+0448  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1096.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0449;                                               | U+0449  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1097.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044A;                                               | U+044A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1098.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044B;                                               | U+044B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1099.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044C;                                               | U+044C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1100.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044D;                                               | U+044D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1101.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044E;                                               | U+044E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1102.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044F;                                               | U+044F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1103.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0450;                                               | U+0450  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1104.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0451;                                               | U+0451  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1105.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0452;                                               | U+0452  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1106.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0453;                                               | U+0453  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1107.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0454;                                               | U+0454  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1108.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0455;                                               | U+0455  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1109.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0456;                                               | U+0456  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1110.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0457;                                               | U+0457  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1111.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0458;                                               | U+0458  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1112.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0459;                                               | U+0459  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1113.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045A;                                               | U+045A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1114.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045B;                                               | U+045B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1115.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045C;                                               | U+045C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1116.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045D;                                               | U+045D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1117.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045E;                                               | U+045E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1118.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045F;                                               | U+045F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1119.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0490;                                               | U+0490  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1168.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0491;                                               | U+0491  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_1169.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E02;                                               | U+1E02  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7682.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E03;                                               | U+1E03  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7683.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E0A;                                               | U+1E0A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7690.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E0B;                                               | U+1E0B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7691.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E1E;                                               | U+1E1E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7710.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E1F;                                               | U+1E1F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7711.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E20;                                               | U+1E20  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7712.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E21;                                               | U+1E21  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7713.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E22;                                               | U+1E22  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7714.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E23;                                               | U+1E23  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7715.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E30;                                               | U+1E30  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7728.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E31;                                               | U+1E31  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7729.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E40;                                               | U+1E40  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7744.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E41;                                               | U+1E41  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7745.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E56;                                               | U+1E56  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7766.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E57;                                               | U+1E57  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7767.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E60;                                               | U+1E60  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7776.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E61;                                               | U+1E61  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7777.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E6A;                                               | U+1E6A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7786.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E6B;                                               | U+1E6B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7787.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E80;                                               | U+1E80  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7808.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E81;                                               | U+1E81  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7809.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E82;                                               | U+1E82  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7810.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E83;                                               | U+1E83  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7811.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E84;                                               | U+1E84  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7812.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E85;                                               | U+1E85  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7813.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E9E;                                               | U+1E9E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7838.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1EF2;                                               | U+1EF2  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7922.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1EF3;                                               | U+1EF3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_7923.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2013;                                               | U+2013  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8211.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2014;                                               | U+2014  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8212.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2015;                                               | U+2015  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8213.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2017;                                               | U+2017  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8215.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2018;                                               | U+2018  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8216.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2019;                                               | U+2019  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8217.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201A;                                               | U+201A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8218.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201B;                                               | U+201B  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8219.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201C;                                               | U+201C  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8220.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201D;                                               | U+201D  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8221.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201E;                                               | U+201E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8222.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201F;                                               | U+201F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8223.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2020;                                               | U+2020  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8224.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2021;                                               | U+2021  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8225.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2022;                                               | U+2022  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8226.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2026;                                               | U+2026  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8230.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2030;                                               | U+2030  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8240.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2039;                                               | U+2039  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8249.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x203A;                                               | U+203A  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8250.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2044;                                               | U+2044  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8260.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x20AC;                                               | U+20AC  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8364.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2122;                                               | U+2122  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8482.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2126;                                               | U+2126  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8486.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2206;                                               | U+2206  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8710.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x220F;                                               | U+220F  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8719.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2211;                                               | U+2211  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8721.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2212;                                               | U+2212  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8722.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x221E;                                               | U+221E  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_8734.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x25CA;                                               | U+25CA  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_9674.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| <UnicodeCopyButton code="3000" />                      | U+3000  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_12288.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xF6C3;                                               | U+F6C3  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_63171.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xF8FF;                                               | U+F8FF  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_63743.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xFB01;                                               | U+FB01  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_64257.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xFB02;                                               | U+FB02  | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_64258.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10000;                                              | U+10000 | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_65536.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10001;                                              | U+10001 | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_65537.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10002;                                              | U+10002 | <img :src="'/assets/images/text/fonts/Minecraft-Seven-v4/Minecraft-Seven-v4_glyph_65538.svg'" class="svgFontGlyph" loading="lazy" /> |       |

</Spoiler>

## Minecraft Ten v2 Supported Unicode Characters

This file is used by Ore UI. This is commonly used for buttons and the text on the title bar. The file can be found in `data/gui/dist/hbui/fonts/Minecraft-Ten-*.otf`.

Unicode Range: `U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A5-00A6, U+00A8-00A9, U+00AB-00B1, U+00B4, U+00B6-00B8, U+00BB, U+00BF-0148, U+014A-017E, U+0192, U+01FC-01FF, U+0218-021B, U+0237, U+02C6-02C7, U+02C9, U+02D8-02DD, U+0384-0386, U+0388-038A, U+038C, U+038E-03A1, U+03A3-03CE, U+0400-045F, U+0490-0491, U+1E02-1E03, U+1E0A-1E0B, U+1E1E-1E1F, U+1E22-1E23, U+1E30-1E31, U+1E40-1E41, U+1E56-1E57, U+1E60-1E61, U+1E6A-1E6B, U+1E80-1E85, U+1E9E, U+1EF2-1EF3, U+2013-2015, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+20AC, U+2122, U+2126, U+2206, U+220F, U+2211-2212, U+221E, U+25CA, U+F6C3, U+F8FF, U+FB01-FB02, U+10000-10007`

<Spoiler title="Unicode Table">

| Character                                              | Unicode | Preview                                                                                                                    | Notes |
| ------------------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------- | ----- |
| N/A                                                    | U+0000  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_0.svg'" class="svgFontGlyph" loading="lazy" />     |       |
| <UnicodeCopyButton code="000D" />                      | U+000D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_13.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| <span innerHTML="&#x0020;" style="white-space:pre;" /> | U+0020  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_32.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0021;                                               | U+0021  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_33.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0022;                                               | U+0022  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_34.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0023;                                               | U+0023  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_35.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0024;                                               | U+0024  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_36.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0025;                                               | U+0025  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_37.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0026;                                               | U+0026  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_38.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0027;                                               | U+0027  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_39.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0028;                                               | U+0028  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_40.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0029;                                               | U+0029  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_41.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| \*                                                     | U+002A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_42.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002B;                                               | U+002B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_43.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002C;                                               | U+002C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_44.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002D;                                               | U+002D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_45.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002E;                                               | U+002E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_46.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x002F;                                               | U+002F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_47.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0030;                                               | U+0030  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_48.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0031;                                               | U+0031  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_49.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0032;                                               | U+0032  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_50.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0033;                                               | U+0033  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_51.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0034;                                               | U+0034  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_52.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0035;                                               | U+0035  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_53.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0036;                                               | U+0036  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_54.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0037;                                               | U+0037  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_55.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0038;                                               | U+0038  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_56.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0039;                                               | U+0039  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_57.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003A;                                               | U+003A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_58.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003B;                                               | U+003B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_59.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003C;                                               | U+003C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_60.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003D;                                               | U+003D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_61.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003E;                                               | U+003E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_62.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x003F;                                               | U+003F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_63.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0040;                                               | U+0040  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_64.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0041;                                               | U+0041  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_65.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0042;                                               | U+0042  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_66.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0043;                                               | U+0043  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_67.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0044;                                               | U+0044  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_68.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0045;                                               | U+0045  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_69.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0046;                                               | U+0046  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_70.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0047;                                               | U+0047  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_71.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0048;                                               | U+0048  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_72.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0049;                                               | U+0049  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_73.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004A;                                               | U+004A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_74.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004B;                                               | U+004B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_75.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004C;                                               | U+004C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_76.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004D;                                               | U+004D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_77.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004E;                                               | U+004E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_78.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x004F;                                               | U+004F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_79.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0050;                                               | U+0050  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_80.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0051;                                               | U+0051  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_81.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0052;                                               | U+0052  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_82.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0053;                                               | U+0053  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_83.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0054;                                               | U+0054  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_84.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0055;                                               | U+0055  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_85.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0056;                                               | U+0056  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_86.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0057;                                               | U+0057  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_87.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0058;                                               | U+0058  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_88.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0059;                                               | U+0059  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_89.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005A;                                               | U+005A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_90.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005B;                                               | U+005B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_91.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005C;                                               | U+005C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_92.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005D;                                               | U+005D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_93.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x005E;                                               | U+005E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_94.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| \_                                                     | U+005F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_95.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0060;                                               | U+0060  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_96.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0061;                                               | U+0061  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_97.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0062;                                               | U+0062  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_98.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0063;                                               | U+0063  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_99.svg'" class="svgFontGlyph" loading="lazy" />    |       |
| &#x0064;                                               | U+0064  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_100.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0065;                                               | U+0065  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_101.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0066;                                               | U+0066  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_102.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0067;                                               | U+0067  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_103.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0068;                                               | U+0068  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_104.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0069;                                               | U+0069  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_105.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006A;                                               | U+006A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_106.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006B;                                               | U+006B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_107.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006C;                                               | U+006C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_108.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006D;                                               | U+006D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_109.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006E;                                               | U+006E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_110.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x006F;                                               | U+006F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_111.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0070;                                               | U+0070  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_112.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0071;                                               | U+0071  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_113.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0072;                                               | U+0072  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_114.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0073;                                               | U+0073  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_115.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0074;                                               | U+0074  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_116.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0075;                                               | U+0075  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_117.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0076;                                               | U+0076  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_118.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0077;                                               | U+0077  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_119.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0078;                                               | U+0078  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_120.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0079;                                               | U+0079  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_121.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007A;                                               | U+007A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_122.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007B;                                               | U+007B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_123.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007C;                                               | U+007C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_124.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007D;                                               | U+007D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_125.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x007E;                                               | U+007E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_126.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| <UnicodeCopyButton code="00A0" />                      | U+00A0  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_160.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A1;                                               | U+00A1  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_161.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A2;                                               | U+00A2  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_162.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A3;                                               | U+00A3  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_163.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A5;                                               | U+00A5  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_165.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A6;                                               | U+00A6  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_166.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A8;                                               | U+00A8  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_168.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00A9;                                               | U+00A9  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_169.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AB;                                               | U+00AB  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_171.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AC;                                               | U+00AC  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_172.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AD;                                               | U+00AD  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_173.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AE;                                               | U+00AE  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_174.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00AF;                                               | U+00AF  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_175.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B0;                                               | U+00B0  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_176.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B1;                                               | U+00B1  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_177.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B4;                                               | U+00B4  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_180.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B6;                                               | U+00B6  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_182.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B7;                                               | U+00B7  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_183.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00B8;                                               | U+00B8  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_184.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BB;                                               | U+00BB  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_187.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00BF;                                               | U+00BF  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_191.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C0;                                               | U+00C0  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_192.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C1;                                               | U+00C1  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_193.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C2;                                               | U+00C2  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_194.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C3;                                               | U+00C3  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_195.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C4;                                               | U+00C4  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_196.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C5;                                               | U+00C5  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_197.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C6;                                               | U+00C6  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_198.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C7;                                               | U+00C7  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_199.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C8;                                               | U+00C8  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_200.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00C9;                                               | U+00C9  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_201.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CA;                                               | U+00CA  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_202.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CB;                                               | U+00CB  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_203.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CC;                                               | U+00CC  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_204.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CD;                                               | U+00CD  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_205.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CE;                                               | U+00CE  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_206.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00CF;                                               | U+00CF  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_207.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D0;                                               | U+00D0  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_208.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D1;                                               | U+00D1  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_209.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D2;                                               | U+00D2  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_210.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D3;                                               | U+00D3  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_211.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D4;                                               | U+00D4  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_212.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D5;                                               | U+00D5  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_213.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D6;                                               | U+00D6  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_214.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D7;                                               | U+00D7  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_215.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D8;                                               | U+00D8  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_216.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00D9;                                               | U+00D9  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_217.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DA;                                               | U+00DA  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_218.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DB;                                               | U+00DB  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_219.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DC;                                               | U+00DC  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_220.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DD;                                               | U+00DD  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_221.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DE;                                               | U+00DE  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_222.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00DF;                                               | U+00DF  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_223.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E0;                                               | U+00E0  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_224.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E1;                                               | U+00E1  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_225.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E2;                                               | U+00E2  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_226.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E3;                                               | U+00E3  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_227.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E4;                                               | U+00E4  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_228.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E5;                                               | U+00E5  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_229.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E6;                                               | U+00E6  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_230.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E7;                                               | U+00E7  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_231.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E8;                                               | U+00E8  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_232.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00E9;                                               | U+00E9  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_233.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EA;                                               | U+00EA  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_234.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EB;                                               | U+00EB  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_235.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EC;                                               | U+00EC  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_236.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00ED;                                               | U+00ED  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_237.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EE;                                               | U+00EE  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_238.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00EF;                                               | U+00EF  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_239.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F0;                                               | U+00F0  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_240.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F1;                                               | U+00F1  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_241.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F2;                                               | U+00F2  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_242.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F3;                                               | U+00F3  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_243.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F4;                                               | U+00F4  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_244.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F5;                                               | U+00F5  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_245.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F6;                                               | U+00F6  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_246.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F7;                                               | U+00F7  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_247.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F8;                                               | U+00F8  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_248.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00F9;                                               | U+00F9  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_249.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FA;                                               | U+00FA  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_250.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FB;                                               | U+00FB  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_251.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FC;                                               | U+00FC  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_252.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FD;                                               | U+00FD  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_253.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FE;                                               | U+00FE  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_254.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x00FF;                                               | U+00FF  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_255.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0100;                                               | U+0100  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_256.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0101;                                               | U+0101  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_257.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0102;                                               | U+0102  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_258.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0103;                                               | U+0103  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_259.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0104;                                               | U+0104  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_260.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0105;                                               | U+0105  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_261.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0106;                                               | U+0106  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_262.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0107;                                               | U+0107  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_263.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0108;                                               | U+0108  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_264.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0109;                                               | U+0109  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_265.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010A;                                               | U+010A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_266.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010B;                                               | U+010B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_267.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010C;                                               | U+010C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_268.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010D;                                               | U+010D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_269.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010E;                                               | U+010E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_270.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x010F;                                               | U+010F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_271.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0110;                                               | U+0110  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_272.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0111;                                               | U+0111  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_273.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0112;                                               | U+0112  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_274.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0113;                                               | U+0113  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_275.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0114;                                               | U+0114  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_276.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0115;                                               | U+0115  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_277.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0116;                                               | U+0116  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_278.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0117;                                               | U+0117  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_279.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0118;                                               | U+0118  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_280.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0119;                                               | U+0119  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_281.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011A;                                               | U+011A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_282.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011B;                                               | U+011B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_283.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011C;                                               | U+011C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_284.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011D;                                               | U+011D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_285.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011E;                                               | U+011E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_286.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x011F;                                               | U+011F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_287.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0120;                                               | U+0120  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_288.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0121;                                               | U+0121  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_289.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0122;                                               | U+0122  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_290.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0123;                                               | U+0123  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_291.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0124;                                               | U+0124  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_292.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0125;                                               | U+0125  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_293.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0126;                                               | U+0126  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_294.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0127;                                               | U+0127  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_295.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0128;                                               | U+0128  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_296.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0129;                                               | U+0129  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_297.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012A;                                               | U+012A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_298.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012B;                                               | U+012B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_299.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012C;                                               | U+012C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_300.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012D;                                               | U+012D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_301.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012E;                                               | U+012E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_302.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x012F;                                               | U+012F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_303.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0130;                                               | U+0130  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_304.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0131;                                               | U+0131  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_305.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0132;                                               | U+0132  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_306.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0133;                                               | U+0133  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_307.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0134;                                               | U+0134  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_308.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0135;                                               | U+0135  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_309.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0136;                                               | U+0136  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_310.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0137;                                               | U+0137  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_311.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0138;                                               | U+0138  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_312.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0139;                                               | U+0139  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_313.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013A;                                               | U+013A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_314.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013B;                                               | U+013B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_315.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013C;                                               | U+013C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_316.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013D;                                               | U+013D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_317.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013E;                                               | U+013E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_318.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x013F;                                               | U+013F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_319.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0140;                                               | U+0140  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_320.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0141;                                               | U+0141  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_321.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0142;                                               | U+0142  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_322.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0143;                                               | U+0143  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_323.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0144;                                               | U+0144  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_324.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0145;                                               | U+0145  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_325.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0146;                                               | U+0146  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_326.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0147;                                               | U+0147  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_327.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0148;                                               | U+0148  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_328.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014A;                                               | U+014A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_330.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014B;                                               | U+014B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_331.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014C;                                               | U+014C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_332.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014D;                                               | U+014D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_333.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014E;                                               | U+014E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_334.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x014F;                                               | U+014F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_335.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0150;                                               | U+0150  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_336.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0151;                                               | U+0151  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_337.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0152;                                               | U+0152  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_338.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0153;                                               | U+0153  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_339.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0154;                                               | U+0154  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_340.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0155;                                               | U+0155  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_341.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0156;                                               | U+0156  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_342.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0157;                                               | U+0157  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_343.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0158;                                               | U+0158  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_344.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0159;                                               | U+0159  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_345.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015A;                                               | U+015A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_346.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015B;                                               | U+015B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_347.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015C;                                               | U+015C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_348.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015D;                                               | U+015D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_349.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015E;                                               | U+015E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_350.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x015F;                                               | U+015F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_351.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0160;                                               | U+0160  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_352.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0161;                                               | U+0161  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_353.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0162;                                               | U+0162  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_354.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0163;                                               | U+0163  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_355.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0164;                                               | U+0164  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_356.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0165;                                               | U+0165  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_357.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0166;                                               | U+0166  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_358.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0167;                                               | U+0167  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_359.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0168;                                               | U+0168  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_360.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0169;                                               | U+0169  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_361.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016A;                                               | U+016A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_362.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016B;                                               | U+016B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_363.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016C;                                               | U+016C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_364.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016D;                                               | U+016D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_365.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016E;                                               | U+016E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_366.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x016F;                                               | U+016F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_367.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0170;                                               | U+0170  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_368.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0171;                                               | U+0171  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_369.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0172;                                               | U+0172  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_370.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0173;                                               | U+0173  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_371.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0174;                                               | U+0174  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_372.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0175;                                               | U+0175  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_373.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0176;                                               | U+0176  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_374.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0177;                                               | U+0177  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_375.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0178;                                               | U+0178  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_376.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0179;                                               | U+0179  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_377.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017A;                                               | U+017A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_378.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017B;                                               | U+017B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_379.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017C;                                               | U+017C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_380.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017D;                                               | U+017D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_381.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x017E;                                               | U+017E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_382.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0192;                                               | U+0192  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_402.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FC;                                               | U+01FC  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_508.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FD;                                               | U+01FD  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_509.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FE;                                               | U+01FE  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_510.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x01FF;                                               | U+01FF  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_511.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0218;                                               | U+0218  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_536.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0219;                                               | U+0219  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_537.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x021A;                                               | U+021A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_538.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x021B;                                               | U+021B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_539.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0237;                                               | U+0237  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_567.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C6;                                               | U+02C6  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_710.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C7;                                               | U+02C7  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_711.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02C9;                                               | U+02C9  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_713.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02D8;                                               | U+02D8  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_728.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02D9;                                               | U+02D9  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_729.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DA;                                               | U+02DA  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_730.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DB;                                               | U+02DB  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_731.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DC;                                               | U+02DC  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_732.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x02DD;                                               | U+02DD  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_733.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0384;                                               | U+0384  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_900.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0385;                                               | U+0385  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_901.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0386;                                               | U+0386  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_902.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0388;                                               | U+0388  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_904.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0389;                                               | U+0389  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_905.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038A;                                               | U+038A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_906.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038C;                                               | U+038C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_908.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038E;                                               | U+038E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_910.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x038F;                                               | U+038F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_911.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0390;                                               | U+0390  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_912.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0391;                                               | U+0391  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_913.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0392;                                               | U+0392  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_914.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0393;                                               | U+0393  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_915.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0394;                                               | U+0394  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_916.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0395;                                               | U+0395  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_917.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0396;                                               | U+0396  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_918.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0397;                                               | U+0397  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_919.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0398;                                               | U+0398  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_920.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0399;                                               | U+0399  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_921.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039A;                                               | U+039A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_922.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039B;                                               | U+039B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_923.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039C;                                               | U+039C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_924.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039D;                                               | U+039D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_925.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039E;                                               | U+039E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_926.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x039F;                                               | U+039F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_927.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A0;                                               | U+03A0  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_928.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A1;                                               | U+03A1  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_929.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A3;                                               | U+03A3  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_931.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A4;                                               | U+03A4  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_932.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A5;                                               | U+03A5  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_933.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A6;                                               | U+03A6  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_934.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A7;                                               | U+03A7  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_935.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A8;                                               | U+03A8  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_936.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03A9;                                               | U+03A9  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_937.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AA;                                               | U+03AA  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_938.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AB;                                               | U+03AB  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_939.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AC;                                               | U+03AC  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_940.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AD;                                               | U+03AD  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_941.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AE;                                               | U+03AE  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_942.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03AF;                                               | U+03AF  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_943.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B0;                                               | U+03B0  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_944.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B1;                                               | U+03B1  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_945.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B2;                                               | U+03B2  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_946.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B3;                                               | U+03B3  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_947.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B4;                                               | U+03B4  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_948.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B5;                                               | U+03B5  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_949.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B6;                                               | U+03B6  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_950.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B7;                                               | U+03B7  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_951.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B8;                                               | U+03B8  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_952.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03B9;                                               | U+03B9  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_953.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BA;                                               | U+03BA  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_954.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BB;                                               | U+03BB  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_955.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BC;                                               | U+03BC  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_956.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BD;                                               | U+03BD  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_957.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BE;                                               | U+03BE  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_958.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03BF;                                               | U+03BF  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_959.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C0;                                               | U+03C0  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_960.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C1;                                               | U+03C1  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_961.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C2;                                               | U+03C2  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_962.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C3;                                               | U+03C3  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_963.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C4;                                               | U+03C4  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_964.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C5;                                               | U+03C5  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_965.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C6;                                               | U+03C6  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_966.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C7;                                               | U+03C7  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_967.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C8;                                               | U+03C8  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_968.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03C9;                                               | U+03C9  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_969.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CA;                                               | U+03CA  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_970.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CB;                                               | U+03CB  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_971.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CC;                                               | U+03CC  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_972.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CD;                                               | U+03CD  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_973.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x03CE;                                               | U+03CE  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_974.svg'" class="svgFontGlyph" loading="lazy" />   |       |
| &#x0400;                                               | U+0400  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1024.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0401;                                               | U+0401  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1025.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0402;                                               | U+0402  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1026.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0403;                                               | U+0403  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1027.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0404;                                               | U+0404  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1028.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0405;                                               | U+0405  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1029.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0406;                                               | U+0406  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1030.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0407;                                               | U+0407  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1031.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0408;                                               | U+0408  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1032.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0409;                                               | U+0409  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1033.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040A;                                               | U+040A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1034.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040B;                                               | U+040B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1035.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040C;                                               | U+040C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1036.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040D;                                               | U+040D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1037.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040E;                                               | U+040E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1038.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x040F;                                               | U+040F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1039.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0410;                                               | U+0410  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1040.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0411;                                               | U+0411  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1041.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0412;                                               | U+0412  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1042.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0413;                                               | U+0413  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1043.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0414;                                               | U+0414  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1044.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0415;                                               | U+0415  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1045.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0416;                                               | U+0416  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1046.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0417;                                               | U+0417  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1047.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0418;                                               | U+0418  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1048.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0419;                                               | U+0419  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1049.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041A;                                               | U+041A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1050.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041B;                                               | U+041B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1051.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041C;                                               | U+041C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1052.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041D;                                               | U+041D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1053.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041E;                                               | U+041E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1054.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x041F;                                               | U+041F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1055.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0420;                                               | U+0420  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1056.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0421;                                               | U+0421  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1057.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0422;                                               | U+0422  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1058.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0423;                                               | U+0423  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1059.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0424;                                               | U+0424  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1060.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0425;                                               | U+0425  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1061.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0426;                                               | U+0426  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1062.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0427;                                               | U+0427  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1063.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0428;                                               | U+0428  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1064.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0429;                                               | U+0429  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1065.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042A;                                               | U+042A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1066.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042B;                                               | U+042B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1067.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042C;                                               | U+042C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1068.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042D;                                               | U+042D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1069.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042E;                                               | U+042E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1070.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x042F;                                               | U+042F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1071.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0430;                                               | U+0430  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1072.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0431;                                               | U+0431  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1073.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0432;                                               | U+0432  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1074.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0433;                                               | U+0433  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1075.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0434;                                               | U+0434  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1076.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0435;                                               | U+0435  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1077.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0436;                                               | U+0436  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1078.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0437;                                               | U+0437  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1079.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0438;                                               | U+0438  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1080.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0439;                                               | U+0439  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1081.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043A;                                               | U+043A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1082.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043B;                                               | U+043B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1083.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043C;                                               | U+043C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1084.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043D;                                               | U+043D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1085.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043E;                                               | U+043E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1086.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x043F;                                               | U+043F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1087.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0440;                                               | U+0440  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1088.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0441;                                               | U+0441  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1089.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0442;                                               | U+0442  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1090.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0443;                                               | U+0443  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1091.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0444;                                               | U+0444  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1092.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0445;                                               | U+0445  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1093.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0446;                                               | U+0446  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1094.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0447;                                               | U+0447  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1095.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0448;                                               | U+0448  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1096.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0449;                                               | U+0449  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1097.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044A;                                               | U+044A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1098.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044B;                                               | U+044B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1099.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044C;                                               | U+044C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1100.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044D;                                               | U+044D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1101.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044E;                                               | U+044E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1102.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x044F;                                               | U+044F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1103.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0450;                                               | U+0450  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1104.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0451;                                               | U+0451  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1105.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0452;                                               | U+0452  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1106.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0453;                                               | U+0453  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1107.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0454;                                               | U+0454  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1108.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0455;                                               | U+0455  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1109.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0456;                                               | U+0456  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1110.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0457;                                               | U+0457  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1111.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0458;                                               | U+0458  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1112.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0459;                                               | U+0459  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1113.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045A;                                               | U+045A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1114.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045B;                                               | U+045B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1115.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045C;                                               | U+045C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1116.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045D;                                               | U+045D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1117.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045E;                                               | U+045E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1118.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x045F;                                               | U+045F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1119.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0490;                                               | U+0490  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1168.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x0491;                                               | U+0491  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_1169.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E02;                                               | U+1E02  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7682.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E03;                                               | U+1E03  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7683.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E0A;                                               | U+1E0A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7690.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E0B;                                               | U+1E0B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7691.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E1E;                                               | U+1E1E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7710.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E1F;                                               | U+1E1F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7711.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E22;                                               | U+1E22  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7714.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E23;                                               | U+1E23  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7715.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E30;                                               | U+1E30  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7728.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E31;                                               | U+1E31  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7729.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E40;                                               | U+1E40  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7744.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E41;                                               | U+1E41  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7745.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E56;                                               | U+1E56  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7766.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E57;                                               | U+1E57  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7767.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E60;                                               | U+1E60  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7776.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E61;                                               | U+1E61  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7777.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E6A;                                               | U+1E6A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7786.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E6B;                                               | U+1E6B  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7787.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E80;                                               | U+1E80  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7808.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E81;                                               | U+1E81  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7809.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E82;                                               | U+1E82  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7810.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E83;                                               | U+1E83  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7811.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E84;                                               | U+1E84  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7812.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E85;                                               | U+1E85  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7813.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1E9E;                                               | U+1E9E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7838.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1EF2;                                               | U+1EF2  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7922.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x1EF3;                                               | U+1EF3  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_7923.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2013;                                               | U+2013  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8211.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2014;                                               | U+2014  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8212.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2015;                                               | U+2015  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8213.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2018;                                               | U+2018  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8216.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2019;                                               | U+2019  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8217.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201A;                                               | U+201A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8218.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201C;                                               | U+201C  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8220.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201D;                                               | U+201D  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8221.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x201E;                                               | U+201E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8222.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2020;                                               | U+2020  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8224.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2021;                                               | U+2021  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8225.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2022;                                               | U+2022  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8226.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2026;                                               | U+2026  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8230.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2030;                                               | U+2030  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8240.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2039;                                               | U+2039  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8249.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x203A;                                               | U+203A  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8250.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2044;                                               | U+2044  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8260.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x20AC;                                               | U+20AC  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8364.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2122;                                               | U+2122  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8482.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2126;                                               | U+2126  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8486.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2206;                                               | U+2206  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8710.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x220F;                                               | U+220F  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8719.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2211;                                               | U+2211  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8721.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x2212;                                               | U+2212  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8722.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x221E;                                               | U+221E  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_8734.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#x25CA;                                               | U+25CA  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_9674.svg'" class="svgFontGlyph" loading="lazy" />  |       |
| &#xF6C3;                                               | U+F6C3  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_63171.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xF8FF;                                               | U+F8FF  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_63743.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xFB01;                                               | U+FB01  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_64257.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#xFB02;                                               | U+FB02  | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_64258.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10000;                                              | U+10000 | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_65536.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10001;                                              | U+10001 | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_65537.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10002;                                              | U+10002 | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_65538.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10003;                                              | U+10003 | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_65539.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10004;                                              | U+10004 | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_65540.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10005;                                              | U+10005 | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_65541.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10006;                                              | U+10006 | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_65542.svg'" class="svgFontGlyph" loading="lazy" /> |       |
| &#x10007;                                              | U+10007 | <img :src="'/assets/images/text/fonts/Minecraft-Ten/Minecraft-Ten_glyph_65543.svg'" class="svgFontGlyph" loading="lazy" /> |       |

</Spoiler>

<!-- This is stored as a style tag so that the tables don't need to inline these style for every preview glyph. -->

<style>
    .svgFontGlyph {
        height: 16px;
        filter: invert();
        image-rendering: pixelated;
    }
</style>

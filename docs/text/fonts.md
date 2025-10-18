---
title: Fonts
description: Learn the list of unicode characters supported by the Mojangles font in Minecraft.
category: Emojis & Symbols
nav_order: 1
mentions:
    - 8Crafter
---

:::warning Ore UI
The in-game supported unicode characters list only applies to JSON UI. Ore UI uses the `Minecraft-Seven.ttf` and `Minecraft-Seven-v4.ttf` files.
:::

Minecraft has 256 unicode characters that are supported by the in-game Mojangles font.

The unicode characters supported by the in-game Mojangles font, `Mojangles.ttf` file, `Minecraft-Seven.ttf` file, and `Minecraft-Seven-v4.ttf` file do differ.

## In-Game Supported Unicode Characters

These are the characters supported in JSON UI. Their textures are determined by the `default8.png` file (`rp/font/default8.png`).

:::tip Windows
If you are on Windows and you have a keyboard with a numpad, Minecraft actually remaps the Windows ALT codes to correspond to one of the supported characters, the formula to get the ALT code to get a character in `default8.png` is `column + (row * 16)` (where row and column are 0-15).

Example: The division symbol is at row 16 column 7 in `default8.png`, so we convert them to be 0-indexed and they become row 15 column 6, `6 + (15 * 16) = 6 + 240 = 246`, so the ALT code to get the division symbol is `246`.
:::

:::warning
Some of these characters cannot be typed through the chat, or get turned into another character when typing it into the chat, but they can be entered in add-ons or other text inputs and will be displayed correctly anywhere they are used.

Affected characters will be labeled as such.
:::

![](/assets/images/text/symbols/default8/default8.png){style="width: 512px; image-rendering: pixelated;"}

| Character | Unicode              | ALT Code | Preview                                                         | Width | Notes             |
| --------- | -------------------- | -------- | --------------------------------------------------------------- | ----- | ----------------- |
| &#x00C0;  | U+00C0 (also U+0000) | ALT+0    | ![](/assets/images/text/symbols/default8/default8_glyph_00.png) | 4     | See note 1 below. |
| &#x00C1;  | U+00C1 (also U+0001) | ALT+1    | ![](/assets/images/text/symbols/default8/default8_glyph_01.png) | 6     | See note 1 below. |
| &#x00C2;  | U+00C2 (also U+0002) | ALT+2    | ![](/assets/images/text/symbols/default8/default8_glyph_02.png) | 6     | See note 1 below. |
| &#x00C8;  | U+00C8 (also U+0003) | ALT+3    | ![](/assets/images/text/symbols/default8/default8_glyph_03.png) | 6     | See note 1 below. |
| &#x00CA;  | U+00CA (also U+0004) | ALT+4    | ![](/assets/images/text/symbols/default8/default8_glyph_04.png) | 6     | See note 1 below. |
| &#x00CB;  | U+00CB (also U+0005) | ALT+5    | ![](/assets/images/text/symbols/default8/default8_glyph_05.png) | 6     | See note 1 below. |
| &#x00CD;  | U+00CD (also U+0006) | ALT+6    | ![](/assets/images/text/symbols/default8/default8_glyph_06.png) | 4     | See note 1 below. |
| &#x00D3;  | U+00D3 (also U+0007) | ALT+7    | ![](/assets/images/text/symbols/default8/default8_glyph_07.png) | 6     | See note 1 below. |
| &#x00D4;  | U+00D4 (also U+0008) | ALT+8    | ![](/assets/images/text/symbols/default8/default8_glyph_08.png) | 6     | See note 1 below. |
| &#x00D5;  | U+00D5 (also U+0009) | ALT+9    | ![](/assets/images/text/symbols/default8/default8_glyph_09.png) | 6     | See note 1 below. |
| &#x00DA;  | U+00DA (also U+000A) | ALT+10   | ![](/assets/images/text/symbols/default8/default8_glyph_0a.png) | 6     | See note 2 below. |
| &#x00DF;  | U+00DF (also U+000B) | ALT+11   | ![](/assets/images/text/symbols/default8/default8_glyph_0b.png) | 6     |                   |
| &#x00E3;  | U+00E3 (also U+000C) | ALT+12   | ![](/assets/images/text/symbols/default8/default8_glyph_0c.png) | 6     |                   |
| &#x00F5;  | U+00F5 (also U+000D) | ALT+13   | ![](/assets/images/text/symbols/default8/default8_glyph_0d.png) | 6     | See note 2 below. |
| &#x011F;  | U+011F (also U+000E) | ALT+14   | ![](/assets/images/text/symbols/default8/default8_glyph_0e.png) | 6     |                   |
| &#x0130;  | U+0130 (also U+000F) | ALT+15   | ![](/assets/images/text/symbols/default8/default8_glyph_0f.png) | 4     |                   |

-   _Note 1: When the ALT code for this character is used, it does not type anything unless you put type an extra 0 at the beginning of the ALT code (ex. ALT+01 instead of ALT+1), except for ALT+0 which does not type anything even if you prepend an extra 0. However, the character can still be pasted into text fields (both the control character and non-control character versions)._
-   _Note 2: When typed or pasted in a text field through its ALT code or control character, it will behave like pressing the `Enter` key (ex. sending a chat message, running a command, or defocusing the text field), to type it in chat without it behaving like the enter key, use the non-control character version instead._

| Character                     | Unicode              | ALT Code | Preview                                                         | Width | Notes             |
| ----------------------------- | -------------------- | -------- | --------------------------------------------------------------- | ----- | ----------------- |
| &#x0131;                      | U+0131 (also U+0010) | ALT+16   | ![](/assets/images/text/symbols/default8/default8_glyph_10.png) | 4     |                   |
| &#x0152;                      | U+0152 (also U+0011) | ALT+17   | ![](/assets/images/text/symbols/default8/default8_glyph_11.png) | 6     |                   |
| &#x0153;                      | U+0153 (also U+0012) | ALT+18   | ![](/assets/images/text/symbols/default8/default8_glyph_12.png) | 7     |                   |
| &#x015E;                      | U+015E (also U+0013) | ALT+19   | ![](/assets/images/text/symbols/default8/default8_glyph_13.png) | 6     |                   |
| &#x015F;                      | U+015F (also U+0014) | ALT+20   | ![](/assets/images/text/symbols/default8/default8_glyph_14.png) | 6     |                   |
| &#x0174;                      | U+0174 (also U+0015) | ALT+21   | ![](/assets/images/text/symbols/default8/default8_glyph_15.png) | 6     |                   |
| &#x0175;                      | U+0175 (also U+0016) | ALT+22   | ![](/assets/images/text/symbols/default8/default8_glyph_16.png) | 6     |                   |
| &#x017E;                      | U+017E (also U+0017) | ALT+23   | ![](/assets/images/text/symbols/default8/default8_glyph_17.png) | 6     |                   |
| &#x0207;                      | U+0207 (also U+0018) | ALT+24   | ![](/assets/images/text/symbols/default8/default8_glyph_18.png) | 6     |                   |
| &#x00A7;                      | U+00A7 (also U+0019) | ALT+25   | ![](/assets/images/text/symbols/default8/default8_glyph_19.png) | 6     |                   |
| &#x00A9;                      | U+00A9 (also U+001A) | ALT+26   | ![](/assets/images/text/symbols/default8/default8_glyph_1a.png) | 9     |                   |
| &#x2122;                      | U+2122 (also U+001B) | ALT+27   | ![](/assets/images/text/symbols/default8/default8_glyph_1b.png) | 9     | See note 4 below. |
| &#x00AE;                      | U+00AE (also U+001C) | ALT+28   | ![](/assets/images/text/symbols/default8/default8_glyph_1c.png) | 9     | See note 4 below. |
| <span innerHTML="&#x001D;" /> | U+001D               | ALT+29   | ![](/assets/images/text/symbols/default8/default8_glyph_1d.png) | 1     | See note 5 below. |
| <span innerHTML="&#x001E;" /> | U+001E               | ALT+30   | ![](/assets/images/text/symbols/default8/default8_glyph_1e.png) | 1     | See note 5 below. |
| <span innerHTML="&#x001F;" /> | U+001F               | ALT+31   | ![](/assets/images/text/symbols/default8/default8_glyph_1f.png) | 1     | See note 5 below. |

<!-- Some characters have to use a span element so that the character is not replaced with U+FFFD because they are control characters. -->

-   _Note 3: If you use the ALT code or the U+0019 control character to type this, it will allow you to type a section sign (§) without it being hidden and used for formatting codes, great if you actually want to display that character._
-   _Note 4: This character was not added until the 1.21.2 hotfix._
-   _Note 5: This renders as a really thin (1px wide) space, great for aligning text._

| Character                                              | Unicode | ALT Code | Preview                                                         | Width | Notes |
| ------------------------------------------------------ | ------- | -------- | --------------------------------------------------------------- | ----- | ----- |
| <span innerHTML="&#x0020;" style="white-space:pre;" /> | U+0020  | ALT+32   | ![](/assets/images/text/symbols/default8/default8_glyph_20.png) | 4     |       |
| &#x0021;                                               | U+0021  | ALT+33   | ![](/assets/images/text/symbols/default8/default8_glyph_21.png) | 2     |       |
| &#x0022;                                               | U+0022  | ALT+34   | ![](/assets/images/text/symbols/default8/default8_glyph_22.png) | 5     |       |
| &#x0023;                                               | U+0023  | ALT+35   | ![](/assets/images/text/symbols/default8/default8_glyph_23.png) | 6     |       |
| &#x0024;                                               | U+0024  | ALT+36   | ![](/assets/images/text/symbols/default8/default8_glyph_24.png) | 6     |       |
| &#x0025;                                               | U+0025  | ALT+37   | ![](/assets/images/text/symbols/default8/default8_glyph_25.png) | 6     |       |
| &#x0026;                                               | U+0026  | ALT+38   | ![](/assets/images/text/symbols/default8/default8_glyph_26.png) | 6     |       |
| &#x0027;                                               | U+0027  | ALT+39   | ![](/assets/images/text/symbols/default8/default8_glyph_27.png) | 3     |       |
| &#x0028;                                               | U+0028  | ALT+40   | ![](/assets/images/text/symbols/default8/default8_glyph_28.png) | 5     |       |
| &#x0029;                                               | U+0029  | ALT+41   | ![](/assets/images/text/symbols/default8/default8_glyph_29.png) | 5     |       |
| \*                                                     | U+002A  | ALT+42   | ![](/assets/images/text/symbols/default8/default8_glyph_2a.png) | 5     |       |
| &#x002B;                                               | U+002B  | ALT+43   | ![](/assets/images/text/symbols/default8/default8_glyph_2b.png) | 6     |       |
| &#x002C;                                               | U+002C  | ALT+44   | ![](/assets/images/text/symbols/default8/default8_glyph_2c.png) | 2     |       |
| &#x002D;                                               | U+002D  | ALT+45   | ![](/assets/images/text/symbols/default8/default8_glyph_2d.png) | 6     |       |
| &#x002E;                                               | U+002E  | ALT+46   | ![](/assets/images/text/symbols/default8/default8_glyph_2e.png) | 2     |       |
| &#x002F;                                               | U+002F  | ALT+47   | ![](/assets/images/text/symbols/default8/default8_glyph_2f.png) | 6     |       |

<!-- The space character needs to use the span element so that it is rendered. -->

| Character | Unicode | ALT Code | Preview                                                         | Width | Notes |
| --------- | ------- | -------- | --------------------------------------------------------------- | ----- | ----- |
| &#x0030;  | U+0030  | ALT+48   | ![](/assets/images/text/symbols/default8/default8_glyph_30.png) | 6     |       |
| &#x0031;  | U+0031  | ALT+49   | ![](/assets/images/text/symbols/default8/default8_glyph_31.png) | 6     |       |
| &#x0032;  | U+0032  | ALT+50   | ![](/assets/images/text/symbols/default8/default8_glyph_32.png) | 6     |       |
| &#x0033;  | U+0033  | ALT+51   | ![](/assets/images/text/symbols/default8/default8_glyph_33.png) | 6     |       |
| &#x0034;  | U+0034  | ALT+52   | ![](/assets/images/text/symbols/default8/default8_glyph_34.png) | 6     |       |
| &#x0035;  | U+0035  | ALT+53   | ![](/assets/images/text/symbols/default8/default8_glyph_35.png) | 6     |       |
| &#x0036;  | U+0036  | ALT+54   | ![](/assets/images/text/symbols/default8/default8_glyph_36.png) | 6     |       |
| &#x0037;  | U+0037  | ALT+55   | ![](/assets/images/text/symbols/default8/default8_glyph_37.png) | 6     |       |
| &#x0038;  | U+0038  | ALT+56   | ![](/assets/images/text/symbols/default8/default8_glyph_38.png) | 6     |       |
| &#x0039;  | U+0039  | ALT+57   | ![](/assets/images/text/symbols/default8/default8_glyph_39.png) | 6     |       |
| &#x003A;  | U+003A  | ALT+58   | ![](/assets/images/text/symbols/default8/default8_glyph_3a.png) | 2     |       |
| &#x003B;  | U+003B  | ALT+59   | ![](/assets/images/text/symbols/default8/default8_glyph_3b.png) | 2     |       |
| &#x003C;  | U+003C  | ALT+60   | ![](/assets/images/text/symbols/default8/default8_glyph_3c.png) | 5     |       |
| &#x003D;  | U+003D  | ALT+61   | ![](/assets/images/text/symbols/default8/default8_glyph_3d.png) | 6     |       |
| &#x003E;  | U+003E  | ALT+62   | ![](/assets/images/text/symbols/default8/default8_glyph_3e.png) | 5     |       |
| &#x003F;  | U+003F  | ALT+63   | ![](/assets/images/text/symbols/default8/default8_glyph_3f.png) | 6     |       |

| Character | Unicode | ALT Code | Preview                                                         | Width | Notes |
| --------- | ------- | -------- | --------------------------------------------------------------- | ----- | ----- |
| &#x0040;  | U+0040  | ALT+64   | ![](/assets/images/text/symbols/default8/default8_glyph_40.png) | 7     |       |
| &#x0041;  | U+0041  | ALT+65   | ![](/assets/images/text/symbols/default8/default8_glyph_41.png) | 6     |       |
| &#x0042;  | U+0042  | ALT+66   | ![](/assets/images/text/symbols/default8/default8_glyph_42.png) | 6     |       |
| &#x0043;  | U+0043  | ALT+67   | ![](/assets/images/text/symbols/default8/default8_glyph_43.png) | 6     |       |
| &#x0044;  | U+0044  | ALT+68   | ![](/assets/images/text/symbols/default8/default8_glyph_44.png) | 6     |       |
| &#x0045;  | U+0045  | ALT+69   | ![](/assets/images/text/symbols/default8/default8_glyph_45.png) | 6     |       |
| &#x0046;  | U+0046  | ALT+70   | ![](/assets/images/text/symbols/default8/default8_glyph_46.png) | 6     |       |
| &#x0047;  | U+0047  | ALT+71   | ![](/assets/images/text/symbols/default8/default8_glyph_47.png) | 6     |       |
| &#x0048;  | U+0048  | ALT+72   | ![](/assets/images/text/symbols/default8/default8_glyph_48.png) | 6     |       |
| &#x0049;  | U+0049  | ALT+73   | ![](/assets/images/text/symbols/default8/default8_glyph_49.png) | 4     |       |
| &#x004A;  | U+004A  | ALT+74   | ![](/assets/images/text/symbols/default8/default8_glyph_4a.png) | 6     |       |
| &#x004B;  | U+004B  | ALT+75   | ![](/assets/images/text/symbols/default8/default8_glyph_4b.png) | 6     |       |
| &#x004C;  | U+004C  | ALT+76   | ![](/assets/images/text/symbols/default8/default8_glyph_4c.png) | 6     |       |
| &#x004D;  | U+004D  | ALT+77   | ![](/assets/images/text/symbols/default8/default8_glyph_4d.png) | 6     |       |
| &#x004E;  | U+004E  | ALT+78   | ![](/assets/images/text/symbols/default8/default8_glyph_4e.png) | 6     |       |
| &#x004F;  | U+004F  | ALT+79   | ![](/assets/images/text/symbols/default8/default8_glyph_4f.png) | 6     |       |

| Character | Unicode | ALT Code | Preview                                                         | Width | Notes |
| --------- | ------- | -------- | --------------------------------------------------------------- | ----- | ----- |
| &#x0050;  | U+0050  | ALT+80   | ![](/assets/images/text/symbols/default8/default8_glyph_50.png) | 6     |       |
| &#x0051;  | U+0051  | ALT+81   | ![](/assets/images/text/symbols/default8/default8_glyph_51.png) | 6     |       |
| &#x0052;  | U+0052  | ALT+82   | ![](/assets/images/text/symbols/default8/default8_glyph_52.png) | 6     |       |
| &#x0053;  | U+0053  | ALT+83   | ![](/assets/images/text/symbols/default8/default8_glyph_53.png) | 6     |       |
| &#x0054;  | U+0054  | ALT+84   | ![](/assets/images/text/symbols/default8/default8_glyph_54.png) | 6     |       |
| &#x0055;  | U+0055  | ALT+85   | ![](/assets/images/text/symbols/default8/default8_glyph_55.png) | 6     |       |
| &#x0056;  | U+0056  | ALT+86   | ![](/assets/images/text/symbols/default8/default8_glyph_56.png) | 6     |       |
| &#x0057;  | U+0057  | ALT+87   | ![](/assets/images/text/symbols/default8/default8_glyph_57.png) | 6     |       |
| &#x0058;  | U+0058  | ALT+88   | ![](/assets/images/text/symbols/default8/default8_glyph_58.png) | 6     |       |
| &#x0059;  | U+0059  | ALT+89   | ![](/assets/images/text/symbols/default8/default8_glyph_59.png) | 6     |       |
| &#x005A;  | U+005A  | ALT+90   | ![](/assets/images/text/symbols/default8/default8_glyph_5a.png) | 6     |       |
| &#x005B;  | U+005B  | ALT+91   | ![](/assets/images/text/symbols/default8/default8_glyph_5b.png) | 4     |       |
| &#x005C;  | U+005C  | ALT+92   | ![](/assets/images/text/symbols/default8/default8_glyph_5c.png) | 6     |       |
| &#x005D;  | U+005D  | ALT+93   | ![](/assets/images/text/symbols/default8/default8_glyph_5d.png) | 4     |       |
| &#x005E;  | U+005E  | ALT+94   | ![](/assets/images/text/symbols/default8/default8_glyph_5e.png) | 6     |       |
| \_        | U+005F  | ALT+95   | ![](/assets/images/text/symbols/default8/default8_glyph_5f.png) | 6     |       |

| Character | Unicode | ALT Code | Preview                                                         | Width | Notes |
| --------- | ------- | -------- | --------------------------------------------------------------- | ----- | ----- |
| &#x0060;  | U+0060  | ALT+96   | ![](/assets/images/text/symbols/default8/default8_glyph_60.png) | 3     |       |
| &#x0061;  | U+0061  | ALT+97   | ![](/assets/images/text/symbols/default8/default8_glyph_61.png) | 6     |       |
| &#x0062;  | U+0062  | ALT+98   | ![](/assets/images/text/symbols/default8/default8_glyph_62.png) | 6     |       |
| &#x0063;  | U+0063  | ALT+99   | ![](/assets/images/text/symbols/default8/default8_glyph_63.png) | 6     |       |
| &#x0064;  | U+0064  | ALT+100  | ![](/assets/images/text/symbols/default8/default8_glyph_64.png) | 6     |       |
| &#x0065;  | U+0065  | ALT+101  | ![](/assets/images/text/symbols/default8/default8_glyph_65.png) | 6     |       |
| &#x0066;  | U+0066  | ALT+102  | ![](/assets/images/text/symbols/default8/default8_glyph_66.png) | 5     |       |
| &#x0067;  | U+0067  | ALT+103  | ![](/assets/images/text/symbols/default8/default8_glyph_67.png) | 6     |       |
| &#x0068;  | U+0068  | ALT+104  | ![](/assets/images/text/symbols/default8/default8_glyph_68.png) | 6     |       |
| &#x0069;  | U+0069  | ALT+105  | ![](/assets/images/text/symbols/default8/default8_glyph_69.png) | 2     |       |
| &#x006A;  | U+006A  | ALT+106  | ![](/assets/images/text/symbols/default8/default8_glyph_6a.png) | 6     |       |
| &#x006B;  | U+006B  | ALT+107  | ![](/assets/images/text/symbols/default8/default8_glyph_6b.png) | 6     |       |
| &#x006C;  | U+006C  | ALT+108  | ![](/assets/images/text/symbols/default8/default8_glyph_6c.png) | 3     |       |
| &#x006D;  | U+006D  | ALT+109  | ![](/assets/images/text/symbols/default8/default8_glyph_6d.png) | 6     |       |
| &#x006E;  | U+006E  | ALT+110  | ![](/assets/images/text/symbols/default8/default8_glyph_6e.png) | 6     |       |
| &#x006F;  | U+006F  | ALT+111  | ![](/assets/images/text/symbols/default8/default8_glyph_6f.png) | 6     |       |

| Character                     | Unicode | ALT Code | Preview                                                         | Width | Notes |
| ----------------------------- | ------- | -------- | --------------------------------------------------------------- | ----- | ----- |
| &#x0070;                      | U+0070  | ALT+112  | ![](/assets/images/text/symbols/default8/default8_glyph_70.png) | 6     |       |
| &#x0071;                      | U+0071  | ALT+113  | ![](/assets/images/text/symbols/default8/default8_glyph_71.png) | 6     |       |
| &#x0072;                      | U+0072  | ALT+114  | ![](/assets/images/text/symbols/default8/default8_glyph_72.png) | 6     |       |
| &#x0073;                      | U+0073  | ALT+115  | ![](/assets/images/text/symbols/default8/default8_glyph_73.png) | 6     |       |
| &#x0074;                      | U+0074  | ALT+116  | ![](/assets/images/text/symbols/default8/default8_glyph_74.png) | 4     |       |
| &#x0075;                      | U+0075  | ALT+117  | ![](/assets/images/text/symbols/default8/default8_glyph_75.png) | 6     |       |
| &#x0076;                      | U+0076  | ALT+118  | ![](/assets/images/text/symbols/default8/default8_glyph_76.png) | 6     |       |
| &#x0077;                      | U+0077  | ALT+119  | ![](/assets/images/text/symbols/default8/default8_glyph_77.png) | 6     |       |
| &#x0078;                      | U+0078  | ALT+120  | ![](/assets/images/text/symbols/default8/default8_glyph_78.png) | 6     |       |
| &#x0079;                      | U+0079  | ALT+121  | ![](/assets/images/text/symbols/default8/default8_glyph_79.png) | 6     |       |
| &#x007A;                      | U+007A  | ALT+122  | ![](/assets/images/text/symbols/default8/default8_glyph_7a.png) | 6     |       |
| &#x007B;                      | U+007B  | ALT+123  | ![](/assets/images/text/symbols/default8/default8_glyph_7b.png) | 5     |       |
| &#x0021;                      | U+0021  | ALT+124  | ![](/assets/images/text/symbols/default8/default8_glyph_7c.png) | 2     |       |
| &#x007D;                      | U+007D  | ALT+125  | ![](/assets/images/text/symbols/default8/default8_glyph_7d.png) | 5     |       |
| &#x007E;                      | U+007E  | ALT+126  | ![](/assets/images/text/symbols/default8/default8_glyph_7e.png) | 7     |       |
| <span innerHTML="&#x007F;" /> | U+007F  | ALT+127  | ![](/assets/images/text/symbols/default8/default8_glyph_7f.png) | 6     |       |

<!-- The delete character has to use a span element so that the character is not replaced with U+FFFD because the delete character is a control character. -->

| Character | Unicode | ALT Code | Preview                                                         | Width | Notes |
| --------- | ------- | -------- | --------------------------------------------------------------- | ----- | ----- |
| &#x00C7;  | U+00C7  | ALT+128  | ![](/assets/images/text/symbols/default8/default8_glyph_80.png) | 6     |       |
| &#x00FC;  | U+00FC  | ALT+129  | ![](/assets/images/text/symbols/default8/default8_glyph_81.png) | 6     |       |
| &#x00E9;  | U+00E9  | ALT+130  | ![](/assets/images/text/symbols/default8/default8_glyph_82.png) | 6     |       |
| &#x00E2;  | U+00E2  | ALT+131  | ![](/assets/images/text/symbols/default8/default8_glyph_83.png) | 6     |       |
| &#x00E4;  | U+00E4  | ALT+132  | ![](/assets/images/text/symbols/default8/default8_glyph_84.png) | 6     |       |
| &#x00E0;  | U+00E0  | ALT+133  | ![](/assets/images/text/symbols/default8/default8_glyph_85.png) | 6     |       |
| &#x00E5;  | U+00E5  | ALT+134  | ![](/assets/images/text/symbols/default8/default8_glyph_86.png) | 6     |       |
| &#x00E7;  | U+00E7  | ALT+135  | ![](/assets/images/text/symbols/default8/default8_glyph_87.png) | 6     |       |
| &#x00EA;  | U+00EA  | ALT+136  | ![](/assets/images/text/symbols/default8/default8_glyph_88.png) | 6     |       |
| &#x00EB;  | U+00EB  | ALT+137  | ![](/assets/images/text/symbols/default8/default8_glyph_89.png) | 6     |       |
| &#x00E8;  | U+00E8  | ALT+138  | ![](/assets/images/text/symbols/default8/default8_glyph_8a.png) | 6     |       |
| &#x00EF;  | U+00EF  | ALT+139  | ![](/assets/images/text/symbols/default8/default8_glyph_8b.png) | 4     |       |
| &#x00EE;  | U+00EE  | ALT+140  | ![](/assets/images/text/symbols/default8/default8_glyph_8c.png) | 6     |       |
| &#x00EC;  | U+00EC  | ALT+141  | ![](/assets/images/text/symbols/default8/default8_glyph_8d.png) | 3     |       |
| &#x00C4;  | U+00C4  | ALT+142  | ![](/assets/images/text/symbols/default8/default8_glyph_8e.png) | 6     |       |
| &#x00C5;  | U+00C5  | ALT+143  | ![](/assets/images/text/symbols/default8/default8_glyph_8f.png) | 6     |       |

| Character | Unicode | ALT Code | Preview                                                         | Width | Notes             |
| --------- | ------- | -------- | --------------------------------------------------------------- | ----- | ----------------- |
| &#x00C9;  | U+00C9  | ALT+144  | ![](/assets/images/text/symbols/default8/default8_glyph_90.png) | 6     |                   |
| &#x00E6;  | U+00E6  | ALT+145  | ![](/assets/images/text/symbols/default8/default8_glyph_91.png) | 6     |                   |
| &#x00C6;  | U+00C6  | ALT+146  | ![](/assets/images/text/symbols/default8/default8_glyph_92.png) | 6     |                   |
| &#x00F4;  | U+00F4  | ALT+147  | ![](/assets/images/text/symbols/default8/default8_glyph_93.png) | 6     |                   |
| &#x00F6;  | U+00F6  | ALT+148  | ![](/assets/images/text/symbols/default8/default8_glyph_94.png) | 6     |                   |
| &#x00F2;  | U+00F2  | ALT+149  | ![](/assets/images/text/symbols/default8/default8_glyph_95.png) | 6     |                   |
| &#x00FB;  | U+00FB  | ALT+150  | ![](/assets/images/text/symbols/default8/default8_glyph_96.png) | 6     |                   |
| &#x00F9;  | U+00F9  | ALT+151  | ![](/assets/images/text/symbols/default8/default8_glyph_97.png) | 6     |                   |
| &#x00FF;  | U+00FF  | ALT+152  | ![](/assets/images/text/symbols/default8/default8_glyph_98.png) | 6     |                   |
| &#x00D6;  | U+00D6  | ALT+153  | ![](/assets/images/text/symbols/default8/default8_glyph_99.png) | 6     |                   |
| &#x00DC;  | U+00DC  | ALT+154  | ![](/assets/images/text/symbols/default8/default8_glyph_9a.png) | 6     |                   |
| &#x00F8;  | U+00F8  | N/A      | ![](/assets/images/text/symbols/default8/default8_glyph_9b.png) | 6     | See note 6 below. |
| &#x00A3;  | U+00A3  | ALT+156  | ![](/assets/images/text/symbols/default8/default8_glyph_9c.png) | 6     |                   |
| &#x00D8;  | U+00D8  | N/A      | ![](/assets/images/text/symbols/default8/default8_glyph_9d.png) | 6     | See note 7 below. |
| &#x00D7;  | U+00D7  | N/A      | ![](/assets/images/text/symbols/default8/default8_glyph_9e.png) | 4     | See note 8 below. |
| &#x0192;  | U+0192  | ALT+159  | ![](/assets/images/text/symbols/default8/default8_glyph_9f.png) | 6     |                   |

-   _Note 6: The ALT code for this character is broken (ALT+155), it maps to U+00A2 (¢) which is not supported by the in-game Mojangles font, to type this character you must copy and paste the U+00F8 character into the game instead of typing the ALT code._
-   _Note 7: The ALT code for this character is broken (ALT+157), it maps to U+00A5 (¥) which is not supported by the in-game Mojangles font, to type this character you must copy and paste the U+00D8 character into the game instead of typing the ALT code._
-   _Note 8: The ALT code for this character is broken (ALT+158), it maps to U+20A7 (₧) which is not supported by the in-game Mojangles font, to type this character you must copy and paste the U+00D7 character into the game instead of typing the ALT code._

| Character | Unicode | ALT Code | Preview                                                         | Width | Notes              |
| --------- | ------- | -------- | --------------------------------------------------------------- | ----- | ------------------ |
| &#x00E1;  | U+00E1  | ALT+160  | ![](/assets/images/text/symbols/default8/default8_glyph_a0.png) | 6     |                    |
| &#x00ED;  | U+00ED  | ALT+161  | ![](/assets/images/text/symbols/default8/default8_glyph_a1.png) | 3     |                    |
| &#x00F3;  | U+00F3  | ALT+162  | ![](/assets/images/text/symbols/default8/default8_glyph_a2.png) | 6     |                    |
| &#x00FA;  | U+00FA  | ALT+163  | ![](/assets/images/text/symbols/default8/default8_glyph_a3.png) | 6     |                    |
| &#x00F1;  | U+00F1  | ALT+164  | ![](/assets/images/text/symbols/default8/default8_glyph_a4.png) | 6     |                    |
| &#x00D1;  | U+00D1  | ALT+165  | ![](/assets/images/text/symbols/default8/default8_glyph_a5.png) | 6     |                    |
| &#x00AA;  | U+00AA  | ALT+166  | ![](/assets/images/text/symbols/default8/default8_glyph_a6.png) | 6     |                    |
| &#x00BA;  | U+00BA  | ALT+167  | ![](/assets/images/text/symbols/default8/default8_glyph_a7.png) | 6     |                    |
| &#x00BF;  | U+00BF  | ALT+168  | ![](/assets/images/text/symbols/default8/default8_glyph_a8.png) | 6     |                    |
| N/A       | N/A     | N/A      | ![](/assets/images/text/symbols/default8/default8_glyph_a9.png) | ?     | See note 9 below.  |
| &#x00AC;  | U+00AC  | ALT+170  | ![](/assets/images/text/symbols/default8/default8_glyph_aa.png) | 6     |                    |
| &#x00BD;  | U+00BD  | ALT+171  | ![](/assets/images/text/symbols/default8/default8_glyph_ab.png) | 6     |                    |
| &#x00BC;  | U+00BC  | ALT+172  | ![](/assets/images/text/symbols/default8/default8_glyph_ac.png) | 6     |                    |
| &#x00A1;  | U+00A1  | ALT+173  | ![](/assets/images/text/symbols/default8/default8_glyph_ad.png) | 2     |                    |
| &#x00AB;  | U+00AB  | ALT+174  | ![](/assets/images/text/symbols/default8/default8_glyph_ae.png) | 6     | See note 10 below. |
| &#x00BB;  | U+00BB  | ALT+175  | ![](/assets/images/text/symbols/default8/default8_glyph_af.png) | 6     | See note 10 below. |

-   _Note 9: This character is buged, although its ALT code should be `ALT+169`, when using it, it results in U+2310 (⌐) which is not supported by the in-game Mojangles font, as such, it is unknown what unicode character is used to display the associated character in the in-game Mojangles font, if you are able to find out, please add that information into the table. This character at this position in Java Edition's `ascii.png` used to be the ⌐ character (which is what the ALT code currently maps to), which is what the `default8.png` image is based off, but was changed to the current one which is a broken version of the © character before it was copied to Bedrock, so as a result Bedrock still has this broken character, but the © character it mapped to a different character which is a correct version of the © character._
-   _Note 10: When typed in-game through the chat, it is replaced with a quotation mark (when displayed using a method other than typing in the chat text box (ex. typing in a different text box, script API, lang files, or escape codes with `/tellraw`), it will not be replaced and will be displayed correctly)._

| Character | Unicode | ALT Code | Preview                                                         | Width | Notes |
| --------- | ------- | -------- | --------------------------------------------------------------- | ----- | ----- |
| &#x2591;  | U+2591  | ALT+176  | ![](/assets/images/text/symbols/default8/default8_glyph_b0.png) | 8     |       |
| &#x2592;  | U+2592  | ALT+177  | ![](/assets/images/text/symbols/default8/default8_glyph_b1.png) | 9     |       |
| &#x2593;  | U+2593  | ALT+178  | ![](/assets/images/text/symbols/default8/default8_glyph_b2.png) | 9     |       |
| &#x2502;  | U+2502  | ALT+179  | ![](/assets/images/text/symbols/default8/default8_glyph_b3.png) | 6     |       |
| &#x2524;  | U+2524  | ALT+180  | ![](/assets/images/text/symbols/default8/default8_glyph_b4.png) | 6     |       |
| &#x2561;  | U+2561  | ALT+181  | ![](/assets/images/text/symbols/default8/default8_glyph_b5.png) | 6     |       |
| &#x2562;  | U+2562  | ALT+182  | ![](/assets/images/text/symbols/default8/default8_glyph_b6.png) | 8     |       |
| &#x2556;  | U+2556  | ALT+183  | ![](/assets/images/text/symbols/default8/default8_glyph_b7.png) | 8     |       |
| &#x2555;  | U+2555  | ALT+184  | ![](/assets/images/text/symbols/default8/default8_glyph_b8.png) | 6     |       |
| &#x2563;  | U+2563  | ALT+185  | ![](/assets/images/text/symbols/default8/default8_glyph_b9.png) | 8     |       |
| &#x2551;  | U+2551  | ALT+186  | ![](/assets/images/text/symbols/default8/default8_glyph_ba.png) | 8     |       |
| &#x2557;  | U+2557  | ALT+187  | ![](/assets/images/text/symbols/default8/default8_glyph_bb.png) | 8     |       |
| &#x255D;  | U+255D  | ALT+188  | ![](/assets/images/text/symbols/default8/default8_glyph_bc.png) | 8     |       |
| &#x255C;  | U+255C  | ALT+189  | ![](/assets/images/text/symbols/default8/default8_glyph_bd.png) | 8     |       |
| &#x255B;  | U+255B  | ALT+190  | ![](/assets/images/text/symbols/default8/default8_glyph_be.png) | 6     |       |
| &#x2510;  | U+2510  | ALT+191  | ![](/assets/images/text/symbols/default8/default8_glyph_bf.png) | 6     |       |

| Character | Unicode | ALT Code | Preview                                                         | Width | Notes |
| --------- | ------- | -------- | --------------------------------------------------------------- | ----- | ----- |
| &#x2514;  | U+2514  | ALT+192  | ![](/assets/images/text/symbols/default8/default8_glyph_c0.png) | 9     |       |
| &#x2534;  | U+2534  | ALT+193  | ![](/assets/images/text/symbols/default8/default8_glyph_c1.png) | 9     |       |
| &#x252C;  | U+252C  | ALT+194  | ![](/assets/images/text/symbols/default8/default8_glyph_c2.png) | 9     |       |
| &#x251C;  | U+251C  | ALT+195  | ![](/assets/images/text/symbols/default8/default8_glyph_c3.png) | 9     |       |
| &#x2500;  | U+2500  | ALT+196  | ![](/assets/images/text/symbols/default8/default8_glyph_c4.png) | 9     |       |
| &#x253C;  | U+253C  | ALT+197  | ![](/assets/images/text/symbols/default8/default8_glyph_c5.png) | 9     |       |
| &#x255E;  | U+255E  | ALT+198  | ![](/assets/images/text/symbols/default8/default8_glyph_c6.png) | 9     |       |
| &#x255F;  | U+255F  | ALT+199  | ![](/assets/images/text/symbols/default8/default8_glyph_c7.png) | 9     |       |
| &#x255A;  | U+255A  | ALT+200  | ![](/assets/images/text/symbols/default8/default8_glyph_c8.png) | 9     |       |
| &#x2554;  | U+2554  | ALT+201  | ![](/assets/images/text/symbols/default8/default8_glyph_c9.png) | 9     |       |
| &#x2569;  | U+2569  | ALT+202  | ![](/assets/images/text/symbols/default8/default8_glyph_ca.png) | 9     |       |
| &#x2566;  | U+2566  | ALT+203  | ![](/assets/images/text/symbols/default8/default8_glyph_cb.png) | 9     |       |
| &#x2560;  | U+2560  | ALT+204  | ![](/assets/images/text/symbols/default8/default8_glyph_cc.png) | 9     |       |
| &#x2550;  | U+2550  | ALT+205  | ![](/assets/images/text/symbols/default8/default8_glyph_cd.png) | 9     |       |
| &#x256C;  | U+256C  | ALT+206  | ![](/assets/images/text/symbols/default8/default8_glyph_ce.png) | 9     |       |
| &#x2567;  | U+2567  | ALT+207  | ![](/assets/images/text/symbols/default8/default8_glyph_cf.png) | 9     |       |

| Character | Unicode | ALT Code | Preview                                                         | Width | Notes |
| --------- | ------- | -------- | --------------------------------------------------------------- | ----- | ----- |
| &#x2568;  | U+2568  | ALT+208  | ![](/assets/images/text/symbols/default8/default8_glyph_d0.png) | 9     |       |
| &#x2564;  | U+2564  | ALT+209  | ![](/assets/images/text/symbols/default8/default8_glyph_d1.png) | 9     |       |
| &#x2565;  | U+2565  | ALT+210  | ![](/assets/images/text/symbols/default8/default8_glyph_d2.png) | 9     |       |
| &#x2559;  | U+2559  | ALT+211  | ![](/assets/images/text/symbols/default8/default8_glyph_d3.png) | 9     |       |
| &#x2558;  | U+2558  | ALT+212  | ![](/assets/images/text/symbols/default8/default8_glyph_d4.png) | 9     |       |
| &#x2552;  | U+2552  | ALT+213  | ![](/assets/images/text/symbols/default8/default8_glyph_d5.png) | 9     |       |
| &#x2553;  | U+2553  | ALT+214  | ![](/assets/images/text/symbols/default8/default8_glyph_d6.png) | 9     |       |
| &#x256B;  | U+256B  | ALT+215  | ![](/assets/images/text/symbols/default8/default8_glyph_d7.png) | 9     |       |
| &#x256A;  | U+256A  | ALT+216  | ![](/assets/images/text/symbols/default8/default8_glyph_d8.png) | 9     |       |
| &#x2518;  | U+2518  | ALT+217  | ![](/assets/images/text/symbols/default8/default8_glyph_d9.png) | 6     |       |
| &#x250C;  | U+250C  | ALT+218  | ![](/assets/images/text/symbols/default8/default8_glyph_da.png) | 9     |       |
| &#x2588;  | U+2588  | ALT+219  | ![](/assets/images/text/symbols/default8/default8_glyph_db.png) | 9     |       |
| &#x2584;  | U+2584  | ALT+220  | ![](/assets/images/text/symbols/default8/default8_glyph_dc.png) | 9     |       |
| &#x258C;  | U+258C  | ALT+221  | ![](/assets/images/text/symbols/default8/default8_glyph_dd.png) | 5     |       |
| &#x2590;  | U+2590  | ALT+222  | ![](/assets/images/text/symbols/default8/default8_glyph_de.png) | 9     |       |
| &#x2580;  | U+2580  | ALT+223  | ![](/assets/images/text/symbols/default8/default8_glyph_df.png) | 9     |       |

| Character | Unicode | ALT Code | Preview                                                         | Width | Notes              |
| --------- | ------- | -------- | --------------------------------------------------------------- | ----- | ------------------ |
| &#x03B1;  | U+03B1  | ALT+224  | ![](/assets/images/text/symbols/default8/default8_glyph_e0.png) | 8     |                    |
| &#x03B2;  | U+03B2  | N/A      | ![](/assets/images/text/symbols/default8/default8_glyph_e1.png) | 7     | See note 11 below. |
| &#x0393;  | U+0393  | ALT+226  | ![](/assets/images/text/symbols/default8/default8_glyph_e2.png) | 7     |                    |
| &#x03C0;  | U+03C0  | ALT+227  | ![](/assets/images/text/symbols/default8/default8_glyph_e3.png) | 8     |                    |
| &#x03A3;  | U+03A3  | ALT+228  | ![](/assets/images/text/symbols/default8/default8_glyph_e4.png) | 7     |                    |
| &#x03C3;  | U+03C3  | ALT+229  | ![](/assets/images/text/symbols/default8/default8_glyph_e5.png) | 8     |                    |
| &#x03BC;  | U+03BC  | N/A      | ![](/assets/images/text/symbols/default8/default8_glyph_e6.png) | 8     | See note 12 below. |
| &#x03C4;  | U+03C4  | ALT+231  | ![](/assets/images/text/symbols/default8/default8_glyph_e7.png) | 8     |                    |
| &#x03A6;  | U+03A6  | ALT+232  | ![](/assets/images/text/symbols/default8/default8_glyph_e8.png) | 7     |                    |
| &#x0398;  | U+0398  | ALT+233  | ![](/assets/images/text/symbols/default8/default8_glyph_e9.png) | 8     |                    |
| &#x03A9;  | U+03A9  | ALT+234  | ![](/assets/images/text/symbols/default8/default8_glyph_ea.png) | 8     |                    |
| &#x03B4;  | U+03B4  | ALT+235  | ![](/assets/images/text/symbols/default8/default8_glyph_eb.png) | 7     |                    |
| &#x221E;  | U+221E  | ALT+236  | ![](/assets/images/text/symbols/default8/default8_glyph_ec.png) | 8     |                    |
| &#x2205;  | U+2205  | N/A      | ![](/assets/images/text/symbols/default8/default8_glyph_ed.png) | 9     | See note 13 below. |
| &#x2208;  | U+2208  | N/A      | ![](/assets/images/text/symbols/default8/default8_glyph_ee.png) | 6     | See note 14 below. |
| &#x2229;  | U+2229  | ALT+239  | ![](/assets/images/text/symbols/default8/default8_glyph_ef.png) | 7     |                    |

-   _Note 11: The ALT code for this character is broken (ALT+225), it maps to U+00Df (ß) which is for a different character in the in-game Mojangles font, to type this character you must copy and paste the U+03B2 character into the game instead of typing the ALT code._
-   _Note 12: The ALT code for this character is broken (ALT+230), it maps to U+00B5 (µ (Micro Sign)) which is not supported by the in-game Mojangles font, it was supposed to map to U+03BC (μ (Greek Small Letter Mu)), to type this character you must copy and paste the U+03BC character into the game instead of typing the ALT code._
-   _Note 13: The ALT code for this character is broken (ALT+237), it maps to U+03C6 (φ) which is not supported by the in-game Mojangles font, to type this character you must copy and paste the U+2205 character into the game instead of typing the ALT code._
-   _Note 14: The ALT code for this character is broken (ALT+238), it maps to U+03B5 (ε) which is not supported by the in-game Mojangles font, to type this character you must copy and paste the U+2208 character into the game instead of typing the ALT code._

| Character                                                                                       | Unicode | ALT Code | Preview                                                         | Width | Notes |
| ----------------------------------------------------------------------------------------------- | ------- | -------- | --------------------------------------------------------------- | ----- | ----- |
| &#x2261;                                                                                        | U+2261  | ALT+240  | ![](/assets/images/text/symbols/default8/default8_glyph_f0.png) | 6     |       |
| &#x00B1;                                                                                        | U+00B1  | ALT+241  | ![](/assets/images/text/symbols/default8/default8_glyph_f1.png) | 6     |       |
| &#x2265;                                                                                        | U+2265  | ALT+242  | ![](/assets/images/text/symbols/default8/default8_glyph_f2.png) | 6     |       |
| &#x2264;                                                                                        | U+2264  | ALT+243  | ![](/assets/images/text/symbols/default8/default8_glyph_f3.png) | 6     |       |
| &#x2320;                                                                                        | U+2320  | ALT+244  | ![](/assets/images/text/symbols/default8/default8_glyph_f4.png) | 9     |       |
| &#x2321;                                                                                        | U+2321  | ALT+245  | ![](/assets/images/text/symbols/default8/default8_glyph_f5.png) | 6     |       |
| &#x00F7;                                                                                        | U+00F7  | ALT+246  | ![](/assets/images/text/symbols/default8/default8_glyph_f6.png) | 7     |       |
| &#x2248;                                                                                        | U+2248  | ALT+247  | ![](/assets/images/text/symbols/default8/default8_glyph_f7.png) | 8     |       |
| &#x00B0;                                                                                        | U+00B0  | ALT+248  | ![](/assets/images/text/symbols/default8/default8_glyph_f8.png) | 7     |       |
| &#x2219;                                                                                        | U+2219  | ALT+249  | ![](/assets/images/text/symbols/default8/default8_glyph_f9.png) | 6     |       |
| &#x00B7;                                                                                        | U+00B7  | ALT+250  | ![](/assets/images/text/symbols/default8/default8_glyph_fa.png) | 6     |       |
| &#x221A;                                                                                        | U+221A  | ALT+251  | ![](/assets/images/text/symbols/default8/default8_glyph_fb.png) | 9     |       |
| &#x207F;                                                                                        | U+207F  | ALT+252  | ![](/assets/images/text/symbols/default8/default8_glyph_fc.png) | 7     |       |
| &#x00B2;                                                                                        | U+00B2  | ALT+253  | ![](/assets/images/text/symbols/default8/default8_glyph_fd.png) | 6     |       |
| &#x25A0;                                                                                        | U+25A0  | ALT+254  | ![](/assets/images/text/symbols/default8/default8_glyph_fe.png) | 7     |       |
| <button style="cursor: copy" onclick="navigator.clipboard.writeText('&#x00A0;');">Copy</button> | U+00A0  | ALT+255  | ![](/assets/images/text/symbols/default8/default8_glyph_ff.png) | 4     |       |

<!-- The non-breaking space character has to use a span element that has a click action so that it can be copied without being replaced with a regular space character. -->

## Mojangles.ttf Supported Unicode Characters

These are the characters supported in the Mojangles.ttf file. The file can be found in `data/fonts/Mojangles.ttf`.

Unicode Range: `U+000D, U+0020-007E, U+00A0-00FF, U+0131, U+0141-0142, U+0152-0153, U+0160-0161, U+0178, U+017D-017E, U+0192, U+02C6-02C7, U+02D8-02DD, U+0394, U+03A9, U+03C0, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122, U+2202, U+220F, U+2211-2212, U+221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+FB01-FB02`

## Minecraft-Seven.ttf Supported Unicode Characters

This file is used by Ore UI. Whenever you see the Mojangles font in Ore UI when not in a world/realm/server, this is usually the font file being used. The file can be found in `data/gui/dist/hbui/fonts/Minecraft-Seven-*.ttf`.

Unicode Range: `U+000D, U+0020-007E, U+00A0-00B1, U+00B4, U+00B6-00B8, U+00BA-00BB, U+00BF-0148, U+014A-017E, U+0192, U+01FC-01FF, U+0218-021B, U+0237, U+02C6-02C7, U+02C9, U+02D8-02DD, U+0384-0386, U+0388-038A, U+038C, U+038E-03A1, U+03A3-03CE, U+0400-045F, U+0490-0491, U+1E02-1E03, U+1E0A-1E0B, U+1E1E-1E1F, U+1E22-1E23, U+1E30-1E31, U+1E40-1E41, U+1E56-1E57, U+1E60-1E61, U+1E6A-1E6B, U+1E80-1E85, U+1E9E, U+1EF2-1EF3, U+2013-2015, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+20AC, U+2122, U+2126, U+2206, U+220F, U+2211-2212, U+221E, U+25CA, U+F6C3, U+F8FF, U+FB01-FB02`

## Minecraft-Seven-v4.ttf Supported Unicode Characters

This file is used by Ore UI. This is used mainly on gameplay Ore UI screens (Ore UI screens you see while you are in a world/realm/server). The file can be found in `data/gui/dist/hbui/fonts/Minecraft-Seven-v4-*.ttf`.

Unicode Range: `U+0020-007E, U+00A0-00AC, U+00AE-017E, U+0192, U+01FC-01FF, U+0218-021B, U+0237, U+02C6-02C7, U+02C9, U+02D8-02DD, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE, U+0400-045F, U+0490-0491, U+1E02-1E03, U+1E0A-1E0B, U+1E1E-1E23, U+1E30-1E31, U+1E40-1E41, U+1E56-1E57, U+1E60-1E61, U+1E6A-1E6B, U+1E80-1E85, U+1E9E, U+1EF2-1EF3, U+2013-2015, U+2017-2022, U+2026, U+2030, U+2039-203A, U+2044, U+20AC, U+2122, U+2126, U+2206, U+220F, U+2211-2212, U+221E, U+25CA, U+3000, U+F6C3, U+F8FF, U+FB01-FB02`

---
title: Custom Emojis
description: Learn how to add your own emojis to Minecraft.
category: Emojis & Symbols
mentions:
    - SirLich
    - MedicalJewel105
    - QuazChick
    - MaragiDev
    - DarkGamerYT
    - zheaEvyline
---

:::warning
This method is not officially supported. While many creators use it on the Marketplace, caution is advised.
:::
:::danger ORE UI
Emojis are not supported by Ore UI screens.
:::

To make a custom emoji, we use a very similar method to the pre-built emojis by overwriting the vanilla spritesheet with our own!
Some character cells are already occupied by vanilla emojis, but there are blank cells that we can use.

To get started, download the spritesheets below and move them into your resource pack's `font` folder.

Below, you'll find an edited sample with some custom emojis for free-use.

## Modifying Glyph Grids

### Glyph Grid Template

The provided template grid is 256×256 pixels but you could make it bigger to allow for larger emojis.

<WikiImage src="/assets/images/text/custom-emojis/glyph_grid.png" width="512" pixelated />

### Glyph E0

<WikiImage
    src="/assets/images/text/custom-emojis/glyph_E0.png"
    caption="RP/font/glyph_E0.png"
    pixelated
/>

### Glyph E1

<WikiImage
    src="/assets/images/text/custom-emojis/glyph_E1.png"
    caption="RP/font/glyph_E1.png"
    pixelated
/>

:::tip
`E0` and `E1` aren't the only code points available to achieve custom emojis.
You can also use `E2`, `E3`, `E4`, `E5`, `E6`, `E7`, `E8`, `E9`, `EA`, `EB`, `EC`, `ED`, `EE`, `EF`, `F0`, `F1`, `F2`, `F3`, `F4`, `F5`, `F6`, `F7` and `F8`, as these aren't being used by vanilla.

Using these code points can also help reduce conflicts with other packs to some extent.
:::

## Example

_Edited sample `glyph_E1.png` (CC0), shared by @zheaEvyline for free use:_

![](/assets/images/text/custom-emojis/glyph_E1_modified.png)

If you'd like to add existing vanilla textures or custom ones to the glyph and use them as emojis in-game, you can easily do so with the **[Textures to Glyph Web Tool](https://minato.beyondbedrock.org/web-apps/textures-to-glyph/)** created by @minato4743

Your file paths should look like this:

<FolderView :paths="[
    'RP/font/glyph_E0.png',
    'RP/font/glyph_E1.png'
]" />

## Using the Emojis In-Game

Once you have your custom emojis inside `glyph_E0.png` or `glyph_E1.png`, you need to obtain its corresponding letter/symbol which you will be able to copy-paste to display the emoji in-game using the converter below.

The first two characters of the input are `E0`, `E1`, or any other code point, depending on which file you added emojis to.

The next two characters are the position inside the image in the format `<row><column>`, where each character is a number in hexadecimal numeral system.
You can find this number by referencing the images above. For example, the top-right square in `E0` is `0F`, and the bottom right is `FF`.

So, after you are done, it might look like `E102` (`E1` + `02`).

Copy this code into the following field, and press **Convert**. The symbol on the right-hand side can be copy/pasted into Minecraft.

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

Alternatively, you can obtain the letter/symbol at this website **[here](https://everythingfonts.com/unicode/0xE300)** or with the help of this **[Glyph Web Tool](https://nhanaz.github.io/glyph/)** made by @NhanAZ.

## Positioning the Emoji

-   To position an emoji upwards/downwards, simply move it up/down within its own emoji slot.
-   To position an emoji towards the left or right, simply add any pixel of 5-10% opacity to its side (within its own slot), opposite to the direction you want to move it.
    -   Ex: to move an emoji to the right by 2 pixels, add any 5-10% opacity pixel connecting to it, anywhere on its left-most side and add another one to the left of that pixel.

_Note: The following steps apply only to emojis that do not fill their slot width (i.e., are smaller than the slot size)._

## Glyph Separation Space

Sometimes, displaying two glyphs close together in-game may leave a few empty pixels between them. The only way to fix this is by scaling the glyph (PNG file) so that your emoji, which originally spans multiple slots, fits within a single slot.

For example, if you created an emoji in the `glyph_E1` file using two 16×16 slots, you would need to double the resolution of the default file (from **256×256** to **512×512**). Then, simply align your **16×32** emoji into one of the **32×32** slots in the scaled glyph file.

## Resizing the Emoji

To resize the emoji, change the resolution of the glyph (PNG file) to 512×512. The reason for doubling the resolution is that it increases the number of pixels, providing more room for editing. Once you've done this, open an image editor of your choice, select the new emoji, resize it, and center it within the emoji slot. This will give the emoji more space around it when used in the game.

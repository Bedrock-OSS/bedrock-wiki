---
title: Splashes
description: Learn how to add your own splash texts to Minecraft.
category: General
license: true
mentions:
    - Peawies
    - QuazChick
---

Splashes are the yellow lines of text that appear next to the Minecraft logo on the title screen.
There are a bunch of splash texts that Minecraft has on its own, but you can modify these splashes too.

## Editing Splashes

It's very easy to create custom splash texts. All you have to do is to create a `splashes.json` file in your resource pack and edit it. Splash texts also support formatting (using `§`).

<CodeHeader>RP/splashes.json</CodeHeader>

```json
{
    "canMerge": true,
    "splashes": [
        "my custom splash text",
        "and my second custom splash text!",
        "§4red §rand §agreen §rsplash text",
        "§l§kblablabla"
    ]
}
```

<WikiImage
    src="/assets/images/concepts/splashes/A_splash_text_example.png"
    caption="A splash text example"
    width="300"
/>

The `canMerge` parameter determines whether the game will show vanilla splash texts alongside custom splash texts.
If you set this parameter to `true`{lang=json}, the splash text will be choosen from both vanilla splash texts and custom splash texts.
If you omit this parameter or set it to `false`{lang=json}, the splash text will be choosen only from custom splash texts.

If you leave the `splashes` array empty with `canMerge` set to `false`, the game will not show any splash text at all.

There isn't a limit to how long a splash text is, but it will be split into multiple lines if it's too long, or may become so small that it is not readable!

<WikiImage
    src="/assets/images/concepts/splashes/A_long_splash_text_example.png"
    caption="A long splash text example"
    width="300"
/>

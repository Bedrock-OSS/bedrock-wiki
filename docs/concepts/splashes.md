---
title: Splashes
description: Learn how to add your own splash texts to Minecraft.
license: true
mentions:
    - Peawies
---

Splash texts are the yellow lines that appear next to the Minecraft logo on the title screen. There are a bunch of splash texts that Minecraft has on its own, but you can modify these splashes too.

## Editing splashes

It's very easy to create custom splash texts. All you have to do is to create a `splashes.json` file in your resource pack and edit it. Splash texts support color symbols (`§`), so you can use them if you want.

<FolderView :paths="[
    'RP/splashes.json'
]" />

```json
{
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

There isn't a limit to how long a splash text is, but it will be split into multiple lines if it's too long, or not even be readable anymore!

<WikiImage
    src="/assets/images/concepts/splashes/A_long_splash_text_example.png"
    caption="A long splash text example"
    width="300"
/>

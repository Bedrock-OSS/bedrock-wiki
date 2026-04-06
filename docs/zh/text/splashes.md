---
title:  splash 文本
description: 学习如何添加自己的 splash 文本到 Minecraft 中。
category: 通用
license: true
mentions:
    - Peawies
    - QuazChick
---

Splash 文本是出现在主菜单 Minecraft logo 旁边的黄色文字行。Minecraft 自带有很多 splash 文本，但你也可以修改这些 splash。

## 编辑 splash 文本

创建自定义 splash 文本非常容易。你只需要在资源包中创建并编辑一个 `splashes.json` 文件即可。Splash 文本也支持格式代码（使用 `§`）。

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

<WikiImage src="splash_text_example.png" caption="A splash text example" width="400" />

`canMerge` 参数决定游戏是否会将原版 splash 文本与自定义 splash 文本一起显示。
如果将此参数设置为 `true`{lang=json}，splash 文本将从原版和自定义 splash 文本中随机选择。
如果省略此参数或设置为 `false`{lang=json}，splash 文本将仅从自定义 splash 文本中选择。

如果将 `splashes` 数组留空且 `canMerge` 设置为 `false`，游戏将不会显示任何 splash 文本。

Splash 文本没有长度限制，但如果太长会被分成多行，或者可能会变得太小而无法阅读！

<WikiImage src="long_splash_text_example.png" caption="A long splash text example" width="400" />

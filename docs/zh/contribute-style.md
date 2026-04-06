---
title: 编辑 Wiki 页面
description: 了解如何构建新页面并充分利用本 Wiki 的格式。
hidden: true
mentions:
    - TheItsNameless
    - MedicalJewel105
    - QuazChick
    - 8Crafter
---

现在你已经在本地设置好了 Wiki，你可以直接编辑设备上的文件。如果你不知道如何使用 VSCode，微软官方有一些非常好的视频[这里](https://code.visualstudio.com/docs)。

为了让我们的页面看起来更漂亮，我们有很多很棒的工具可以用来高亮部分、插入组件、插入图片等等！

## 页面设置

每个页面由两部分组成：frontmatter 和内容。

在 frontmatter 中写入关于你的文章的最重要的信息。

<CodeHeader>docs/section/page.md</CodeHeader>

```yaml
---
title: 一个很棒的页面标题
description: 做出你的第一个贡献！
license: true
mentions:
    - username
---
大量的内容！
```

### Frontmatter

| 字段               | 必填 | 默认值 | 描述                                                                                                                                                                                                                                                                                                                         |
| ------------------ | :--: | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`           |  ✔️  | 无     | 页面标题，将作为一级标题显示在主内容之前，并在发布到其他地方时在链接预览中显示。                                                                                                                                                                                                                                                  |
| `description`     |  ✔️  | 无     | 页面描述，将在发布到其他地方时在链接预览中显示。此处**不允许**使用 `:` 和 `"` 符号。                                                                                                                                                                                                                                            |
| `example`         |  ❌  | 无     | 将 [bedrock-examples](https://github.com/Bedrock-OSS/bedrock-examples) 仓库中的示例文件集合与此页面关联。值应该是 "resources" 中一个文件夹的名称。                                                                                                                                                                            |
| `category`        |  ❌  | 无     | 链接此页面的侧边栏分类。可用分类列在章节的 `section.yaml` 文件中。                                                                                                                                                                                                                                                            |
| `tags`            |  ❌  | `[]`   | 将在页面顶部显示的标签列表。部分将显示在侧边栏，如 "guide" 或 "info"。如果页面所在的章节或分类使该标签冗余，则不应包含在标签列表中。例如，如果页面在 "Tutorials" 分类中，则不需要 "guide" 标签。                                                                                                                           |
| `nav_order`       |  ❌  | 无     | 文章在侧边栏中显示的顺序。数字越低越靠前。所有有 nav_order 的页面将显示在没有 nav_order 的页面之上。                                                                                                                                                                                                                           |
| `outline_depth`   |  ❌  | `3`    | 页面大纲中应显示的最大标题级别。可以从默认值降低以隐藏重复的标题，或增加以显示更多层次结构的页面标题以便导航。                                                                                                                                                                                                                   |
| `related`         |  ❌  | `[]`   | 指向应显示在页面大纲中的相关主题页面的链接列表。                                                                                                                                                                                                                                                                               |
| `show_contributors` |  ❌ | `true` | 是否在页面末尾显示提供的 `mentions` 列表。                                                                                                                                                                                                                                                                                   |
| `show_edit_link` |  ❌  | `true` | 是否显示指向 GitHub 仓库中页面的链接。                                                                                                                                                                                                                                                                                        |
| `show_outline`   |  ❌  | `true` | 是否为页面生成标题链接列表。                                                                                                                                                                                                                                                                                                   |
| `hidden`          |  ❌  | `false`| 是否在侧边栏中隐藏页面。这应该用于不再受支持但仍可通过直接链接访问的内容。                                                                                                                                                                                                                                                    |
| `license`         |  ✔️  | 无     | 页面内容的许可证方式。这应该是引用许可证 ID 的字符串（如 `MIT`），或定义单独 `main` 和 `code` 许可证的对象。                                                                                                                                                                                                                  |
| `mentions`        |  ❌  | `[]`   | 对此页面做出贡献的所有 GitHub 用户的用户名。获得应有的荣誉！确保为你编辑的任何页面在此处添加你的用户名。                                                                                                                                                                                                                        |

标题是必填的，因为它显示在左侧栏中。mentions 不是必需的，但如果每个人都知道他们正在阅读的精彩文章的作者，那会很棒！

#### 可用分类

章节中可用分类列表在其 `section.yaml` 文件中，以及颜色和排序信息。
你也可以在那里添加新的分类。

以下是大多数章节中可以使用的一些常见分类，请查看页面侧边栏获取其他分类：

-   通用
-   教程
-   文档

#### 可用标签

标签定义在 `docs/tags.yaml` 文件中。如果你想添加新标签，应该去那里查找。

如果你只是在寻找现有标签，以下是本 Wiki 当前支持的标签列表：

-   <Tag name="beginner" />
-   <Tag name="beta" />
-   <Tag name="deprecated" />
-   <Tag name="easy" />
-   <Tag name="experimental" />
-   <Tag name="expert" />
-   <Tag name="function" />
-   <Tag name="guide" />
-   <Tag name="help" />
-   <Tag name="info" />
-   <Tag name="intermediate" />
-   <Tag name="method" />
-   <Tag name="outdated" />
-   <Tag name="scripting" />

### 内容

在 frontmatter 之后，你写入页面的主要内容。页面内容用 Markdown 编写，可以使用自定义[组件](#working-with-components) 来增强内容并使其与 Wiki 的其他部分保持一致。

这些组件可用于添加按钮、剧透或代码块等。也可以使用一些 HTML，但我们只推荐高级用户使用，不会在这篇指南中介绍。

:::tip 页面标题
每个人第一次都会犯的一个常见错误是在页面内容中将页面标题重复作为一级标题。
你不应该这样做，因为 frontmatter 中给出的标题将自动放置在你的页面顶部，在单个页面中有多个一级标题是无效的。
:::

## Bedrock Examples

有时我们需要在指南之后提供模板/示例包。为此我们使用单独的 GitHub 仓库：[bedrock-examples](https://github.com/Bedrock-OSS/bedrock-examples)。
请在那里添加你的资源包。这有助于我们维护所有 add-on 并保持它们最新。

## 本地预览 Wiki

很难知道你的文章完成后发布时是什么样子。为此，你可以在自己的设备上运行一个版本的网站！

在 VSCode 中，点击顶部菜单栏的 `Terminal`，然后在下拉菜单中点击 `New Terminal`。

:::info 安装依赖项
**第一次**想要在本地预览 Wiki 时，你必须运行 `npm install` 并等待它完成，以确保一切正确设置。
:::

要在本地预览 Wiki，输入 `npm run dev` 并按回车，等待加载完成。你会知道它已经准备就绪，当你看到这样的内容：

![](/assets/images/contribute/npm/npm_dev.png)

将光标悬停在显示 `http://localhost:5173/` 的部分，按住 `Ctrl` 并左键单击。
你的浏览器将打开一个包含本地版本 Wiki 的新标签页。

完成！每次在 VSCode 中更改和保存文件，它都会自动在浏览器中更新。

## 预览构建后的页面

上面的工具向你展示了 Wiki 构建后的样子。
但有时会出现一些错误，这些错误只有在你 `build` 页面时才会出现。

构建页面意味着将每个 Markdown 文件编译成 HTML 页面，这将托管在我们的服务器上。
如果你只是使用 `npm run dev`，页面不会以这种方式编译，可能会有一些在开发者视图中不显示的错误。

要构建页面，按照上述过程，除了需要输入 `npm run dev` 的步骤。相反，输入 `npm run build` 来构建页面。

:::tip
使用 `npm run build`，node 会编译 Wiki 内的**所有**页面，甚至是一些非常大的页面。
如果你没有编辑以下页面，应该运行 `npm run fastbuild`，它会构建除这些页面之外的所有页面。

```json
[
    "entities/vanilla-usage-components.md",
    "entities/vanilla-usage-spawn-rules.md",
    "entities/vuc-full.md",
    "entities/vusr-full.md"
]
```

:::

这可能需要一段时间。如果过程完成且没有错误，你可以运行 `npm run preview` 来查看构建好的 Wiki。
然后，打开终端中给出的链接，就完成了！

## 使用 Markdown

Wiki 使用 Markdown，一种强大的文本格式语法。
要了解更多关于 Markdown 的信息，请访问官方 [Markdown 指南](https://www.markdownguide.org/basic-syntax)！

我们不会教你整个 Markdown 语言，但有一些事情需要注意！

### 容器

容器用于通知或警告用户一些非常重要的事情。容器有四种类型：`info`、`tip`、`warning` 和 `danger`。

容器通过输入三个冒号和容器类型来创建。
然后，你可以写你的内容，最后通过再输入三个冒号来关闭容器。

```md
:::info
一些信息在这里
:::

:::tip
一个提示在这里
:::

:::warning
一个警告在这里
:::

:::danger
一个危险的地方
:::

:::details
一些必要的细节在这里
:::
```

:::info
一些信息在这里
:::

:::tip
一个提示在这里
:::

:::warning
一个警告在这里
:::

:::danger
一个危险的地方
:::

:::details
一些必要的细节在这里
:::

不建议使用 `details` 容器。
这个容器样式不正确，而且实际上不需要。

你也可以为容器添加标题：

```md
:::danger 停止！
一个危险的地方
:::
```

:::danger 停止！
一个危险的地方
:::

### 内联代码块的语法高亮

Wiki 支持内联代码块的语法高亮。

使用示例如下：

```md
`console.log("Hello World!");`{lang=js}
```

上面的示例将渲染为：

`console.log("Hello World!");`{lang=js}

### 链接

如果你想引用另一个网站，比如 Microsoft Docs，可以使用链接。

在 Markdown 中链接东西，你可以直接写出整个链接：

https://bedrock.dev

或者显示链接的其他一些文本：

[点击这里！](https://bedrock.dev)

#### 链接到 Wiki 外的来源

要链接到另一个来源，只需复制整个链接 URL（包括前面的 https 部分）并将其粘贴在圆括号之间：

```md
[官方创作者文档](https://learn.microsoft.com/minecraft/creator/)
```

[官方创作者文档](https://docs.microsoft.com/de-de/minecraft/creator/)

---

#### 链接到 Wiki 中的其他页面

你可以创建重定向到 Wiki 中其他页面的链接。这些称为"相对"链接。

```md
[重定向到贡献页面](/contribute)
```

[重定向到贡献页面](/contribute)

---

```md
[JSON 数组](/guide/understanding-json#arrays)
```

[JSON 数组](/guide/understanding-json#arrays)

---

```md
[转到使用 Markdown 标题](#working-with-markdown)
```

[转到使用 Markdown 标题](#working-with-markdown)

---

要重定向到另一个页面，只需查看 `docs` 文件夹中的文件浏览器。
要链接直接在此文件夹中的页面，只需写 `/pagename`，如 `/contribute` 链接到贡献页面。
每个在文件夹内的页面都需要写文件夹名称、一个斜杠，然后是页面名称（不带 `.md` 扩展名）：`/blocks/block-materials`。

:::warning
**永远不要**使用绝对链接来链接我们 Wiki 中的页面。确保你的链接中**不包含** `wiki.bedrock.dev`。
:::

### 列表

#### 无序列表

普通的项目符号列表。

```md
-   这
-   是
-   一
-   个
-   列表
```

-   这
-   是
-   一
-   个
-   列表

---

#### 有序列表

用连续数字代替项目符号的列表。

```md
1.  这
2.  是
3.  一
4.  个
5.  列表
```

1.  这
2.  是
3.  一
4.  个
5.  列表

---

#### 复选框列表

每个项目可以选中或未选中的列表。方括号之间的 `x` 表示该项目已选中。

```md
-   [x] 这
-   [x] 是
-   [ ] 一
-   [x] 列表
```

-   [x] 这
-   [x] 是
-   [ ] 一
-   [x] 列表

## 使用组件

我们的 Wiki 使用特殊的 Vue 组件，你可以用它们来添加按钮、剧透、代码块等。

:::tip 代码片段
我们有组件的代码片段。要查看它们，请在编辑页面时按 `Ctrl + 空格`。

![](/assets/images/contribute/snippets/snippets.png)
:::

### 强调颜色

一些组件支持可以用来增加视觉吸引力的 `color` 属性。
以下是 Wiki 当前支持的值：

-   <Label color="red">red</Label>
-   <Label color="orange">orange</Label>
-   <Label color="yellow">yellow</Label>
-   <Label color="green">green</Label>
-   <Label color="blue">blue</Label>
-   <Label color="purple">purple</Label>

### 按钮

按钮就像一个链接，但对用户来说更醒目。

```md
<Button link="/">
    主页
</Button>
```

<Button link="/">主页</Button>

也可以指定颜色让你的按钮更突出！

```md
<Button link="https://youtube.com" color="red">
    YouTube
</Button>
```

<Button link="https://youtube.com" color="red">
    YouTube
</Button>

| 属性   | 必填 | 类型                          | 备注                                                                                                                                                                                |
| ------ | ---- | ----------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| link   | 是   | String                        | 点击按钮时重定向的链接，你也可以将内容链接到从 Wiki 文件下载。如果是为图片添加此属性，请在链接值后添加 `download`。                                                               |
| color  | 否   | [AccentColor](#accent-colors) | 按钮的强调颜色。默认情况下，按钮将使用 Wiki 链接中看到的基础强调颜色。                                                                                                            |

两个 `Button` 标签之间的文本将显示在按钮上。

链接可以是外部网站，也可以是我们 Wiki 中的页面。对于最后一种情况，使用相对链接，如我们的[链接部分](/contribute-style#链接到-wiki-中的其他页面)中所述。

### 卡片

使用卡片你可以制作带有图片和包含链接的文字的花哨盒子。

卡片也可以有在两个 `Card` 标签之间定义的内容。

```md
<Card image="/assets/images/icons/logo.png" title="标题" link="https://google.com">

这是一些 _内容_。

</Card>
```

<Card image="/assets/images/icons/logo.png" title="标题" link="https://google.com">

这是一些 _内容_。

</Card>

| 属性   | 必填 | 类型   | 备注                           |
| ------ | ---- | ------ | ------------------------------ |
| image  | 是   | String | 显示在标题左侧的图片链接。       |
| title  | 是   | String | 显示在内容上方的标题。          |
| link   | 否   | String | 点击标题时重定向的链接。         |

不要过度使用它们！它们看起来很棒，但有人可能会给它们过多的关注而忘记关注文章的其他重要部分。

### 卡片网格

用于以网格布局显示多个卡片。

```md
<CardGrid>
<Card image="/assets/images/icons/logo.png" title="标题 1" link="https://google.com">

这是一些 _内容_。

</Card>
<Card image="/assets/images/icons/logo.png" title="标题 2" link="https://google.com">

这是一些 _内容_。

</Card>
<Card image="/assets/images/icons/logo.png" title="标题 3" link="https://google.com">

这是一些 _内容_。

</Card>
</CardGrid>
```

<CardGrid>
<Card image="/assets/images/icons/logo.png" title="标题 1" link="https://google.com">

这是一些 _内容_。

</Card>
<Card image="/assets/images/icons/logo.png" title="标题 2" link="https://google.com">

这是一些 _内容_。

</Card>
<Card image="/assets/images/icons/logo.png" title="标题 3" link="https://google.com">

这是一些 _内容_。

</Card>
</CardGrid>

### CodeHeader

CodeHeader 用于优雅地包装代码块，以便用户可以轻松地复制其中的代码。你也可以添加一些文本，比如文件路径，这样用户就知道把代码放在哪里。
记得格式化 json。你可以使用[这个](https://jsonformatter.curiousconcept.com)工具。

````json
<CodeHeader>BP/blocks/example.json</CodeHeader>

```json
{
    "some": "json"
}
```
````

<CodeHeader>BP/blocks/example.json</CodeHeader>

```json
{
    "some": "json"
}
```

文件路径放在两个 HTML 标签之间。确保在描述文件路径时遵循我们的[样式指南](/meta/style-guide)：

-   如果你在 Behavior-Pack 中链接，在所有其他文件前加上 `BP`：

    ✔️ `BP/blocks/example.json`

    ❌ `YourBehaviorPack/blocks/example.json`

-   同样对于 Resource-Pack，在所有其他文件前加上 `RP`：

    ✔️ `RP/manifest.json`

    ❌ `YourResourcePack/manifest.json`

在关闭标签后的下一行，你必须开始一个代码块才能使用此组件，如上面的示例所示。

### FolderView

文件夹视图可用于显示文件设置，如我们的[项目设置](/guide/project-setup)指南中所示。

```md
<FolderView :paths="[
    'com.mojang/development_resource_packs/guide_RP/texts/en_US.lang',
    'com.mojang/development_resource_packs/guide_RP/manifest.json',
    'com.mojang/development_resource_packs/guide_RP/pack_icon.png',
    'com.mojang/development_behavior_packs/guide_BP/texts/en_US.lang',
    'com.mojang/development_behavior_packs/guide_BP/manifest.json',
    'com.mojang/development_behavior_packs/guide_BP/pack_icon.png',
]" />
```

<FolderView :paths="[
    'com.mojang/development_resource_packs/guide_RP/texts/en_US.lang',
    'com.mojang/development_resource_packs/guide_RP/manifest.json',
    'com.mojang/development_resource_packs/guide_RP/pack_icon.png',
    'com.mojang/development_behavior_packs/guide_BP/texts/en_US.lang',
    'com.mojang/development_behavior_packs/guide_BP/manifest.json',
    'com.mojang/development_behavior_packs/guide_BP/pack_icon.png',
]" />

| 属性   | 必填 | 类型             | 备注                                                                      |
| ------ | ---- | ---------------- | ------------------------------------------------------------------------- |
| paths  | 是   | Array of strings | 表示应显示的所有文件和文件夹。前面的 `:` 是必需的。                         |

`paths` 属性是一个数组，包含所有独立文件路径的列表。每个文件路径必须完整写出，并用单引号包裹。

:::warning
记住不要在列表内放置任何空行！这会在编译页面时抛出错误。
:::

### 标签

标签是一种带有大写字母的小图标，可用于为你的文章增添魅力。

```md
<Label color="green">
    标签文本
</Label>
```

<Label color="green">标签文本</Label>

| 属性   | 必填 | 类型                          | 备注                    |
| ------ | ---- | ----------------------------- | ----------------------- |
| color  | 是   | [AccentColor](#accent-colors) | 盒子的背景颜色。         |

不要过度使用它们！它们看起来很棒，但有人可能会给它们过多的关注而忘记关注文章的其他重要部分。

### 剧透

剧透可用于隐藏一些内容，这样它就不会阻塞整个网站。

```md
<Spoiler title="标题">

这里的文字

还有这里

</Spoiler>
```

<Spoiler title="标题">

这里的文字

还有这里

</Spoiler>

| 属性   | 必填 | 类型   | 备注                                      |
| ------ | ---- | ------ | ----------------------------------------- |
| title  | 是   | String | 将在打开按钮中箭头之前显示。               |

两个标签之间的内容就是将被隐藏的内容。

注意内容和标签之间的空行！如果你忘记了，这个组件将无法工作。

### 标签

标签是一种基于其 frontmatter 默认显示在页面顶部的[标签](#label)类型。
如果你想在页面的某个位置手动包含一个标签，使用此组件比使用常规标签更好。

```md
<Tag name="beginner" />
```

<Tag name="beginner" />

| 属性  | 必填 | 类型                       | 备注                  |
| ----- | ---- | -------------------------- | --------------------- |
| name  | 是   | [TagName](#available-tags) | 要显示的标签名称。     |

### WikiImage

添加图片的默认方法如下：`![](/assets/images/...)`

WikiImage 是在文章中添加图片的另一种方式，提供比常规 Markdown 图片更多的参数，包括像素化渲染和标题。

请注意，图片放在 `docs/public/assets/images/` 文件夹中，但它们的路径定义时不带 `docs/public` 前缀。

```md
<WikiImage
    src="/assets/images/icons/logo.png"
    alt="替代文字"
    caption="一张漂亮的图片！"
    width="420"
    pixelated
/>
```

<WikiImage
    src="/assets/images/icons/logo.png"
    alt="替代文字"
    caption="一张漂亮的图片！"
    width="420"
    pixelated
/>

| 属性      | 必填 | 类型    | 备注                                                                                                                                 |
| --------- | ---- | ------- | -----------------------------------------------------------------------------------------------------------------------------------|
| src       | 是   | String  | 要显示的图片链接。                                                                                                                   |
| alt       | 是   | String  | 浏览器无法加载图片时显示的文本，也用于无障碍目的，例如屏幕阅读器的使用。                                                               |
| caption   | 否   | String  | 显示在图片下方作为标题的文本。                                                                                                        |
| width     | 否   | String  | 图片的宽度。如果只包含宽度，高度会自动缩放。                                                                                          |
| height    | 否   | String  | 图片的高度。如果只包含高度，宽度会自动缩放。                                                                                          |
| pixelated | 否   | Boolean | 图片是否应该像素化。                                                                                                                 |

### YouTubeEmbed

根据视频 ID 将 YouTube 视频嵌入页面。

```md
<YouTubeEmbed id="dQw4w9WgXcQ" />
```

<YouTubeEmbed id="dQw4w9WgXcQ" />

| 属性  | 必填 | 类型   | 备注              |
| ----- | ---- | ------ | ----------------- |
| id    | 是   | String | 要显示的视频 ID。   |

### 换行

**始终记得在组件前后添加换行！**

错误：

````
-   one
-   two
<CodeHeader>BP/blocks/example.json</CodeHeader>
```json
{
    "some": "json"
}
```
````

正确：

````md
-   one
-   two

<CodeHeader>BP/blocks/example.json</CodeHeader>

```json
{
    "some": "json"
}
```
````

## 格式指南

每个人都喜欢阅读完美且一致的 Wiki。

嗯，很难意识到这一点。我们不想要完美且一致的 Wiki。但如果每个人都试图遵循这些简单的规则，所有用户在阅读我们的 Wiki 时都会有更好的体验！

### 一般规则

1.  对于命名包、文件夹等，请参阅我们的[样式指南](/meta/style-guide)。

### 标题大小写

标题大小写是一种必须用于页面标题和标题的大小写样式。

1.  大多数单词无论长度都应该大写。
2.  冠词（a, an, the）、并列连词（and, but, or）和介词（in, on, at, of, to）不应该大写，除非满足以下任一条件：
    -   它们是标题的第一个或最后一个单词。
    -   它们构成一个名词（如 add-**_on_**）。

一些示例：

-   `欢迎来到 Wiki！`
-   `你的第一个 Add-On`
-   `它是如何工作的`

### 标题

1.  不要使用一级标题。你的页面以一个一级标题开始，它与写在 Front Matter 中的标题相同。
2.  尽量避免使用超过 4 级的标题。它们不会显示在右侧边栏（只有二级标题显示在那里），而且不会有正确的样式。
3.  使用 `标题大小写` 样式。
4.  不要在标题中使用 `:`！

一些示例：

-   ✔️ `## 一个页面`

    ❌ `# 一个页面`

-   ✔️ `### 其他一些层级`

    ❌ `###### 其他一些层级`

-   ✔️ `## 我自己的文章`

    ❌ `## my own: article`

-   ✔️ `## 下一步`

    ❌ `## 下一步：`

### JSON 代码

1.  除非不合理或不可能，否则使用 CodeHeader。
2.  如果可以提高可读性，完全展开 JSON 代码，即["格式化代码"](https://jsonformatter.curiousconcept.com/#)。
    -   不要展开 `.geo.json` 文件，因为它会太长。
3.  如果代码太长或不必要，将其包装在剧透组件中。
4.  使用 `RP` 和 `BP` 作为根文件夹。
5.  做注释但不要太多。

在 JSON 内部注释最重要的事情，你可以在代码之后讲述其他组件。也请遵循我们的注释样式。
示例：

<CodeHeader>BP/items/copper_coin.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            // 描述一个带有组件的对象。
            "identifier": "wiki:copper_coin",
            "menu_category": {
                "category": "construction"
            }
        },
        "components": {
            "minecraft:max_stack_size": 64, // 组件/值的简短描述。
            // 用这种方式在下面注释一组特定的组件（下面使用的图标和闪烁）。
            "minecraft:icon": "wiki:copper_coin",
            "minecraft:glint": 3.5
        }
    }
}
```

-   `minecraft:max_stack_size`

    ...

-   `minecraft:icon`

    ...

### Markdown 格式

本节仅用于你的 Markdown 文件的可读性。它不会在 Wiki 中显示。

1.  如果使用无序列表，在 `-` 后使用 3 个空格。
2.  格式化 Markdown 表格。使用空格和 `-` 将所有行扩展到相同长度。在每个单元格内容的前后使用一个空格。
3.  避免使用原始 HTML 标签，尽管它们是支持的。如果你知道自己在做什么可以使用它们，但只有在绝对不可避免的情况下才能使用。
    如果你有对每个人都有用的新组件的想法，请告诉我们，也许我们会添加它！

:::tip Prettier

如果你安装了 [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 扩展（强烈推荐），上述步骤将自动完成。

:::

✔️

```md
-   list
```

❌

```
- list
```

---

✔️

```md
| 一些数据 | 更多的数据 |
| --------- | ----------------- |
| 这里      | 还有这里          |
```

❌

```
| 一些数据 | 更多的数据 |
|----|---------|
| 这里      | 还有这里|
```

---

✔️

```md
![替代文字](/my/image.png)
```

```md
<WikiImage src="/my/image.png" alt="替代文字" />
```

❌

```md
<img src="/my/image.png" alt="替代文字" />
```

---

✔️

```md
`code`
```

❌

```md
    code
```

你可以这样在文本前加空格：

```md
> text
```

> text

---

有时你需要在 Markdown 中为其他贡献者添加注释。

```md
<!-- 评论！👀 --> ‹- 它在这里！
```

<!-- 评论！👀 --> ‹- 它在这里！

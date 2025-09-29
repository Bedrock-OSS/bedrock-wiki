---
title: Editing Wiki Pages
description: Learn how to structure new pages and make the most of this wiki's formatting.
hidden: true
mentions:
    - TheItsNameless
    - MedicalJewel105
    - QuazChick
    - Andexter8
---

Now that you have the wiki set up locally, you can edit the files right on your device. If you don't know how to work with VSCode, there are some very good videos from Microsoft itself [here](https://code.visualstudio.com/docs).

To make our pages look prettier, we have a lot of great tools that you can use to highlight sections, insert components, insert images, and much more!

## Page Setup

Each page consists of two parts: frontmatter and content.

Inside the frontmatter you write the most important information about your article.

```md
---
title: A Wonderful Page Title
description: Make your first contribution!
license: true
mentions:
    - username
---

Lots and lots of content!
```

### Frontmatter

| Field               | Required | Default | Description                                                                                                                                                                                                                                                                                                                           |
| ------------------- | :------: | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`             |    ✔️    | None    | The title of the page which will be displayed as a level 1 heading before the main content and in link embeds when posted somewhere.                                                                                                                                                                                                  |
| `description`       |    ✔️    | None    | The description of the page which will be displayed in link embeds when posted somewhere. `:`, `"` symbols are **not** allowed here.                                                                                                                                                                                                  |
| `category`          |    ❌    | None    | The sidebar category in which the link for this page will be displayed. Available categories are listed in the section's `index.md` file.                                                                                                                                                                                             |
| `tags`              |    ❌    | `[]`    | A list of tags that will be displayed at the top of the page. Some will be displayed on the sidebar, such as "guide" or "info". If a page is in a section or category that makes the tag redundant, it should not be included in the tags list. For example, if a page is in the "Tutorials" category, the "guide" tag is not needed. |
| `nav_order`         |    ❌    | None    | The order in which the article will appear in the sidebar. Lower number will be higher. All nav_order pages will appear above pages without a nav_order.                                                                                                                                                                              |
| `outline_depth`     |    ❌    | `3`     | The maximum heading level that should be displayed in the page's outline. This may be decreased from the default to hide headings that are repetitive or increased to show headings in pages that have more layers for easier navigation.                                                                                             |
| `show_contributors` |    ❌    | `true`  | Whether a list of the provided `mentions` should be shown at the end of the page.                                                                                                                                                                                                                                                     |
| `show_edit_link`    |    ❌    | `true`  | Whether a link should be shown which leads to the page in the GitHub repository.                                                                                                                                                                                                                                                      |
| `show_outline`      |    ❌    | `true`  | Whether a list of heading links should be generated for the page.                                                                                                                                                                                                                                                                     |
| `hidden`            |    ❌    | `false` | Whether the page should be hidden from the sidebar. This should be used on content that is no longer supported but may still be accessed through a direct link.                                                                                                                                                                       |
| `license`           |    ✔️    | None    | How content on the page is licensed. This should either be a string referencing a license ID such as `MIT`, or an object defining separate `main` and `code` licenses.                                                                                                                                                                |
| `mentions`          |    ✔️    | `[]`    | The usernames of all GitHub users that have contributed to this page. Get that credit! Make sure you add your username here for any pages you edit.                                                                                                                                                                                   |

The title is required, as it is the name shown in the bar on the left side. Mentions isn't needed, but it would be great if everyone knows who made the great article they are reading!

#### Available Categories

The list of available categories in a section can be found in the section's `index.md` file, along with color and ordering information. You may add new categories there as well.

Here are some of the common categories that you'll be able to use in most sections, check the page sidebar for others:

-   General
-   Tutorials
-   Documentation

#### Available Tags

Tags are defined in the `docs/.vitepress/tags.ts` file. If you'd like to add a new tag, that's where you should head!

If you're just looking for existing tags, here is the list of tags that this wiki currently supports:

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

### Content

After the frontmatter, you write the main content of your page. The page content is written in markdown and can make use of custom [components](#working-with-components) to enhance it and make it consistent with the rest of the wiki.

These components can be used to add things like buttons, spoilers or code blocks. It's also possible to use some HTML, but we only recommend this for advanced users and won't cover this in our guide.

:::tip PAGE TITLE
A common mistake everyone does the first time is to repeat the page title as a level 1 heading in their page content.
You should never do this because the title given in the frontmatter will already be placed at the top of your page automatically, and having multiple level 1 headings in a single page is invalid.
:::

## Bedrock Examples

Sometimes we need to give a template/example pack after a guide. For this purpose we use separate GitHub repository: [bedrock-examples](https://github.com/Bedrock-OSS/bedrock-examples).
Please, add your packs there. It helps us to maintain all add-ons and keep them up-to-date.

## Viewing the Wiki Locally

Its really hard to know how your article will look when its finished and published. To help with that, you can run a version of this website on your own device!

In VSCode, in the top menu bar, click on `Terminal`, then on `New Terminal` in the dropdown.

:::info INSTALLING DEPENDENCIES
The **first time** you want to view the wiki locally, you'll have to run `npm install` and wait until it's finished to make sure that everything is set up correctly.
:::

To view the wiki locally, type `npm run dev` and press enter and wait until it's finished loading. You'll know it's ready when you see this:

![](/assets/images/contribute/npm/npm_dev.png)

Hover your cursor over the part where it says `http://localhost:5173/`, hold `Ctrl` and left-click.
Your browser will open a new tab with your local version of the wiki.

Done! Every time you change and save a file in VSCode it will automatically be updated in your browser.

## Viewing the Built Page

The above tool shows you how the wiki will look when it is built.
But sometimes there are some errors arriving which you only get if you `build` the page.

Building the pages means compiling every markdown file to a HTML page, which will be hosted on our servers.
If you just use `npm run dev`, the pages are not compiled that way and there may be some errors which are not showing in the developer view.

To build a page, follow the above process, except for the step where you need to type `npm run dev`. Instead, type `npm run build` which will build the page.

:::tip
Using `npm run build`, node will compile **all** pages inside the wiki, even some pages which are _really_ big.
If you are not editing any of the following pages, you should run `npm run fastbuild`, which builds every pages except these pages.

```json
[
    "entities/vanilla-usage-components.md",
    "entities/vanilla-usage-spawn-rules.md",
    "entities/vuc-full.md",
    "entities/vusr-full.md"
]
```

:::

This might take a while. If the process finishes without any errors, you can view the built wiki by running `npm run preview`.
Then, open the link given in the terminal and you are done!

## Working with Markdown

The wiki uses Markdown, a powerful text-formatting syntax.
To learn more about Markdown, visit the official [Markdown Guide](https://www.markdownguide.org/basic-syntax)!

We won't teach you the whole Markdown language, but there are some things that you need to pay attention to!

### Containers

Containers are used to inform or warn the user about some really important stuff. There are four types of containers: `info`, `tip`, `warning` and `danger`.

Containers are created by typing three colons and the type of the container.
Then, you can write your content and at the end you close the container by typing three more colons.

```md
:::info
Some info here
:::

:::tip
A tip here
:::

:::warning
A warning here
:::

:::danger
A dangerous place
:::

:::details
Some necessary details here
:::
```

:::info
Some info here
:::

:::tip
A tip here
:::

:::warning
A warning here
:::

:::danger
A dangerous place
:::

:::details
Some necessary details here
:::

IT IS NOT RECOMMENDED TO USE `details` CONTAINER.
This container is not styled properly and not really needed.

You also can add headers for containers:

```md
:::danger STOP!
A dangerous place
:::
```

:::danger STOP!
A dangerous place
:::

### Syntax highlighting on inline code blocks

The wiki has support for syntax highlighting on inline code blocks.

Here is an example of how to use it:

```md
`console.log("Hello World!");`{lang=js}
```

The above example will render as:

`console.log("Hello World!");`{lang=js}

### Links

If you want to refer to another website, like the Microsoft Docs, you can use links.

To link something in Markdown, you can either just write out the whole link:

https://bedrock.dev

Or show some other text instead of the link:

[Click here!](https://bedrock.dev)

#### Linking to sources outside the wiki

To link to another source, just copy the whole link url (including the https part in front of it) and paste it between the round brackets:

```md
[Official Creator Docs](https://learn.microsoft.com/minecraft/creator/)
```

[Official Creator Docs](https://docs.microsoft.com/de-de/minecraft/creator/)

---

#### Linking to other pages in the wiki

You can create links that redirect you to other pages in the wiki. These are called "relative" links.

```md
[Redirect to the contribute page](/contribute)
```

[Redirect to the contribute page](/contribute)

---

```md
[JSON Arrays](/guide/understanding-json#arrays)
```

[JSON Arrays](/guide/understanding-json#arrays)

---

```md
[Go to Working with Markdown heading](#working-with-markdown)
```

[Go to Working with Markdown heading](#working-with-markdown)

---

To redirect to another page, just look in the file explorer inside the `docs` folder.
To link to a page thats directly inside this folder, you can just write `/pagename`, like `/contribute` to link to the contribute page.
Every page that is inside a folder has to be accessed by writing the name of the folder, a slash, and then the page name (without the `.md` extension): `/blocks/block-materials`.

:::warning
**NEVER** use absolute links to link to a page inside our wiki. Make sure you **don't** include `wiki.bedrock.dev` inside your links.
:::

### Lists

#### Unordered Lists

A regular bullet-pointed list.

```md
-   This
-   Is
-   A
-   List
```

-   This
-   Is
-   A
-   List

---

#### Ordered Lists

A list with consecutive numbers in place of bullet points.

```md
1.  This
2.  Is
3.  A
4.  List
```

1.  This
2.  Is
3.  A
4.  List

---

#### Checked Lists

A list where each item is either checked or unchecked. An `x` between the square brackets marks the item as checked.

```md
-   [x] This
-   [x] Is
-   [ ] A
-   [x] List
```

-   [x] This
-   [x] Is
-   [ ] A
-   [x] List

## Working with Components

Our wiki uses special Vue-Components, which you can use to add things like Buttons, Spoilers, CodeBlocks, etc.

:::tip Snippets
We have snippets for our components. To see them, start typing `wiki.` in Markdown file and then press `Ctrl + Space`.

![](/assets/images/contribute/snippets/snippets.png)
:::

### Accent Colors

Some components support a `color` attribute which can be used to add more visual flair!
Here are the values that the wiki currently supports:

-   <Label color="red">red</Label>
-   <Label color="orange">orange</Label>
-   <Label color="yellow">yellow</Label>
-   <Label color="green">green</Label>
-   <Label color="blue">blue</Label>
-   <Label color="purple">purple</Label>

### Button

A button works like a link, but is more noticeable for the user.

```md
<Button link="/">
    Homepage
</Button>
```

<Button link="/">Homepage</Button>

A color can also be specified to make your button pop out even more!

```md
<Button link="https://youtube.com" color="red">
    YouTube
</Button>
```

<Button link="https://youtube.com" color="red">
    YouTube
</Button>

| Attribute | Required | Type                          | Note                                                                                                                                                                   |
| --------- | -------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| link      | Yes      | String                        | Link to redirect when clicking on the button you can also link there content to download from wiki files. If doing this for pictures, add `download` after link value. |
| color     | No       | [AccentColor](#accent-colors) | Defines the accent color of the button. By default, the button will use the base wiki accent color seen in links.                                                      |

The text between the two `Button` tags is the text that will appear on the button.

The link can either be an external website, or a page in our wiki. For the last case, use relative links, as described in our [linking section](/contribute-style#linking-to-other-pages-in-the-wiki).

### Card

With cards you can make fancy boxes with an image and text which contains a link!

Cards may also have content which is defined between two `Card` tags.

```md
<Card image="/assets/images/icons/logo.png" title="Title" link="https://google.com">

This is some _content_.

</Card>
```

<Card image="/assets/images/icons/logo.png" title="Title" link="https://google.com">

This is some _content_.

</Card>

| Attribute | Required | Type   | Note                                            |
| --------- | -------- | ------ | ----------------------------------------------- |
| image     | Yes      | String | Link to the image to display left of the title. |
| title     | Yes      | String | Title to show above the content.                |
| link      | No       | String | Link to redirect on clicking the title          |

Don't overuse them! They look cool, but someone could really give them too much attention and forget to focus on other important parts of your article.

### CardGrid

Used to display multiple cards in a grid layout.

```md
<CardGrid>
<Card image="/assets/images/icons/logo.png" title="Title 1" link="https://google.com">

This is some _content_.

</Card>
<Card image="/assets/images/icons/logo.png" title="Title 2" link="https://google.com">

This is some _content_.

</Card>
<Card image="/assets/images/icons/logo.png" title="Title 3" link="https://google.com">

This is some _content_.

</Card>
</CardGrid>
```

<CardGrid>
<Card image="/assets/images/icons/logo.png" title="Title 1" link="https://google.com">

This is some _content_.

</Card>
<Card image="/assets/images/icons/logo.png" title="Title 2" link="https://google.com">

This is some _content_.

</Card>
<Card image="/assets/images/icons/logo.png" title="Title 3" link="https://google.com">

This is some _content_.

</Card>
</CardGrid>

### CodeHeader

CodeHeaders are used to nicely wrap codeblocks, so a user can easily copy the code inside them. You can also add some text, like a file path, so the users know exactly where to put this code.
Remember to format json. You can use [this](https://jsonformatter.curiousconcept.com) tool.

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

The filepath goes between the two HTML-Tags. Make sure to follow our [Style-Guide](/meta/style-guide) when describing filepaths:

-   If you link inside a Behavior-Pack, place `BP` in front of all other files:

    ✔️ `BP/blocks/example.json`

    ❌ `YourBehaviorPack/blocks/example.json`

-   Same for the Resource-Pack, use `RP` in front of all other files:

    ✔️ `RP/manifest.json`

    ❌ `YourResourcePack/manifest.json`

On the next line after the closing tag, you have to start a code block to use this Component, as shown in the example above.

### FolderView

Folder views can be used to show a setup of files, like in our [Project Setup](/guide/project-setup) guide.

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

| Attribute | Required | Type             | Note                                                                                     |
| --------- | -------- | ---------------- | ---------------------------------------------------------------------------------------- |
| paths     | yes      | Array of strings | Represents all files and folders which should be displayed. The leading `:` is required. |

The `paths` attribute is an array that contains a list of all separate file paths. Each file path must be written entirely and has to be wrapped inside single quotes.

:::warning
Remember not to put any empty lines inside the list! This will throw an error when compiling the page.
:::

### Label

A Label is a small icon with uppercase letters that can be used to give your articles more flair.

```md
<Label color="green">
    Label Text
</Label>
```

<Label color="green">Label Text</Label>

| Attribute | Required | Type                          | Note                         |
| --------- | -------- | ----------------------------- | ---------------------------- |
| color     | Yes      | [AccentColor](#accent-colors) | Background color of the box. |

Don't overuse them! They look cool, but someone could really give them too much attention and forget to focus on other important parts of your article.

### Spoiler

A spoiler can be used to hide some content, so it doesn't block the whole site.

```md
<Spoiler title="Title">

text here

and here

</Spoiler>
```

<Spoiler title="Title">

text here

and here

</Spoiler>

| Attribute | Required | Type   | Note                                                   |
| --------- | -------- | ------ | ------------------------------------------------------ |
| title     | Yes      | String | Will be displayed before the arrow in the open button. |

The content between the two tags is the content that will be hidden.

Pay attention to the empty lines between the content and the tags! If you forget these, this component will not work!

### Tag

A tag is a type of [label](#label) that appears by default at the top of your page based on its frontmatter.
If you'd like to manually include a tag at a certain point in your page, using this component is preferable over a regular label.

```md
<Tag name="beginner" />
```

<Tag name="beginner" />

| Attribute | Required | Type                       | Note                        |
| --------- | -------- | -------------------------- | --------------------------- |
| name      | Yes      | [TagName](#available-tags) | Name of the tag to display. |

### WikiImage

The default method to add an image is looks like the following: `![](/assets/images/...)`

WikiImage is a alternative way to add an image in your article, providing more parameters than a regular markdown image, including pixelated rendering and captions.

Note that images go in `docs/public/assets/images/` folder, but their path is defined without the `docs/public` prefix.

```md
<WikiImage
    src="/assets/images/icons/logo.png"
    alt="alternative text"
    caption="Such a beautiful image!"
    width="420"
    pixelated
/>
```

<WikiImage
    src="/assets/images/icons/logo.png"
    alt="alternative text"
    caption="Such a beautiful image!"
    width="420"
    pixelated
/>

| Attribute | Required | Type    | Note                                                                                                        |
| --------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| src       | Yes      | String  | Link to the image to show.                                                                                  |
| alt       | Yes      | String  | Text to show if the browser can't load the image and for accessibility purposes e.g. use of screen readers. |
| caption   | No       | String  | Text to show below the image as a caption.                                                                  |
| width     | No       | String  | Width of the image. If only the width is included, the height will automatically scale.                     |
| height    | No       | String  | Height of the image. If only the height is included, the width will automatically scale.                    |
| pixelated | No       | Boolean | Whether the image should be pixelated.                                                                      |

### YouTubeEmbed

Embeds a YouTube video into thepage based on a video ID.

```md
<YouTubeEmbed id="dQw4w9WgXcQ" />
```

<YouTubeEmbed id="dQw4w9WgXcQ" />

| Attribute | Required | Type   | Note                        |
| --------- | -------- | ------ | --------------------------- |
| id        | Yes      | String | ID of the video to display. |

### New Lines

**Always remember to add new lines before and after components!**

Wrong:

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

Correct:

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

## Formatting Guide

Everyone likes to read wikis that are perfectly and consistently formatted.

Well, its hard to realise that. And we don't want perfectly and consistently formatted wikis. But if everyone tries to follow these simple rules, all users will have a better time reading our wikis!

### General Rules

1.  For naming packages, folders, etc. consult our [Style-Guide](/meta/style-guide).

### Title Case

Title case is a casing style that must be used in page titles and headings.

1. Most words should be capitalised regardless of length.
2. Articles (a, an, the), coordinating conjunctions (and, but, or), and prepositions (in, on, at, of, to) should not be capitalised unless any of the following are true:
    - They're the first or last word of the title.
    - They make up a noun (such as add-**_on_**).

Some examples:

-   `Welcome to the Wiki!`
-   `Your First Add-On`
-   `How It Works`

### Headings

1.  Don't use level-1 headings. Your page starts with a level-1 heading which has the same title as written in the Front Matter.
2.  Try to avoid heading levels higher 4. They wont show in the right sidebar (only level-2 headings appear there) and won't have proper styling.
3.  Use the `Title Case` style.
4.  Don't use `:` in your headings!

Some examples:

-   ✔️ `## A Page`

    ❌ `# A Page`

-   ✔️ `### Some Other Layer`

    ❌ `###### Some Other Layer`

-   ✔️ `## My Own Article`

    ❌ `## my own: article`

-   ✔️ `## Next Steps`

    ❌ `## Next Steps:`

### JSON Code

1.  Use CodeHeaders, unless it is illogical or not possible.
2.  Fully extend JSON Code if it improves readability aka. as ["Prettified Code"](https://jsonformatter.curiousconcept.com/#).
    -   Do not extend `.geo.json` files as it would be too long.
3.  If the code is too long or not necessary, wrap it in a spoiler component.
4.  Use `RP` and `BP` as root folders.
5.  Make comments but not many.

Describe the most important things in comments inside the JSON, you can tell about other components after the code. Also follow our comments style.
Example:

<CodeHeader>BP/items/copper_coin.json</CodeHeader>

```json
{
    "format_version": "1.21.110",
    "minecraft:item": {
        "description": {
            // Describing an object with components.
            "identifier": "wiki:copper_coin",
            "menu_category": {
                "category": "construction"
            }
        },
        "components": {
            "minecraft:max_stack_size": 64, // Short description of a value/component.
            // Make notes about a group of specific components (icon and glint in our case) used below this way.
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

### Markdown Formatting

This section is only for the readability of your Markdown files. It wont be visible in the wiki.

1.  If you use unordered lists, use 3 spaces after the `-`.
2.  Prettify Markdown tables. Use spaces and `-` to extend all rows to the same lengths. Use one space before and after each cells content.
3.  Avoid using raw HTML tags, even though they are supported. You can use them if you know what you are doing, but only if it's absolutely unavoidable.
    If you have an idea for a new component that could be useful for everyone, let us know and maybe we will add it!

:::tip PRETTIER

The above steps will be done automatically if you install the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension (highly recommended).

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
| Some Data | Aaaaand More Data |
| --------- | ----------------- |
| here      | and here          |
```

❌

```
| Some Data | Aaaaand More Data |
|----|---------|
| here      | and here|
```

---

✔️

```md
![Alternate text](/my/image.png)
```

```md
<WikiImage src="/my/image.png" alt="Alternate text" />
```

❌

```md
<img src="/my/image.png" alt="Alternate text" />
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

You can do space before text this way:

```md
> text
```

> text

---

Sometimes you need to comment something in your markdown for other contributors to see.

```md
<!-- Comment! 👀 --> ‹- It is here!
```

<!-- Comment! 👀 --> ‹- It is here!

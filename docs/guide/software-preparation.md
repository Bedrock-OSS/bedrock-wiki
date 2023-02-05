---
title: Software and preparation
category: Guide
description: How to setup your developement environment
nav_order: 3
prefix: '3. '
---

Before you can start creating addons, you first have to install the required tools and applications. While development will be easiest on Windows 10, we have provided mobile alternatives for both Android and iOS, where applicable.

## Download Minecraft Bedrock Edition

-   [Windows 10](https://www.microsoft.com/en-us/p/minecraft-for-windows-10/9nblggh2jhxj?activetab=pivot:overviewtab)
-   [Android](https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&hl=en)
-   [iOS](https://apps.apple.com/us/app/minecraft/id479516143)
-   [Run MC on Linux](https://discord.gg/VJTZ3KaTx6)

## Picking an Editor

Addons can be created using any text editor, however it's much more comfortable to work in a dedicated editor. A good editor can give you code-completion, error-detection, and in-editor documentation.

There are strong opinions about the best editor for beginners, but generally speaking you cannot go wrong selecting either VSCode, or bridge. If you are mobile, you will need to use a mobile alternative.

### VSCode

VSCode is a general purpose text-editor and IDE. With VSCode, you will be able to edit your addons in plain-text, guided along by a powerful array of extensions and addons. VSCode is a great option for programmers and advanced users.

[⚙️Install VSCode](https://code.visualstudio.com/)

<Spoiler title="Configuring VSCode">

Many packages exist for VSCode that make editing addons easier:

-   [Blockceptions Minecraft Bedrock Development](https://marketplace.visualstudio.com/items?itemName=BlockceptionLtd.blockceptionvscodeminecraftbedrockdevelopmentextension)
-   [.mcfunction support](https://marketplace.visualstudio.com/items?itemName=arcensoth.language-mcfunction)
-   [.lang support](https://marketplace.visualstudio.com/items?itemName=zz5840.minecraft-lang-colorizer)
-   [Bedrock Definitions](https://marketplace.visualstudio.com/items?itemName=destruc7i0n.vscode-bedrock-definitions)
-   [Prettify-json](https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json)
-   [Spell Checker (for writing wiki)](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
-   [Snowstorm Particle Editor](https://marketplace.visualstudio.com/items?itemName=JannisX11.snowstorm)
-   [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
-   [UUID Generator](https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator)

</Spoiler>

### bridge.

[bridge.](https://bridge-core.app/) is a light-weight, dedicated IDE for Minecraft addons. It features [innovative features](https://bridge-core.app/guide/features/) such as [entity and block previews](https://bridge-core.app/guide/features/index.html#file-previews), [rich auto-completions and file validations](https://bridge-core.app/guide/features/index.html#auto-completions-and-validation) and [advanced file creation with presets](https://bridge-core.app/guide/features/index.html#advanced-file-creation).
bridge. includes a regular text editor for experienced addon creators and a tree editor to make it easy for beginners to get started with editing JSON files.

#### Next Steps
- [Read more on why you should use bridge.](https://bridge-core.app/guide/why-bridge.html)
- [Read our guide on getting started with bridge.](https://bridge-core.app/guide/index.html)
- [Try out bridge. online](https://editor.bridge-core.app/)

### Mobile Editors

#### Android
-  [ACode Editor](https://play.google.com/store/apps/details?id=com.foxdebug.acodefree)
-  [bridge. v2](https://bridge-core.app/)

#### iOS
-  [Kodex](https://apps.apple.com/us/app/kodex/id1038574481)
-  [bridge. v2](https://bridge-core.app/)

## Blockbench

-   [Blockbench](https://blockbench.net/) is a 'boxy 3D model editor' typically used to create Minecraft models, textures and animations. Also provides a web-browser version which is compatible with mobile.

## Image Editors

When choosing an image editor, it is important to keep in mind that the traditional Minecraft style is composed of simple 16X16 pixelart. There are plenty of powerful and free art programs available for you to use. However, many of these programs have more tools than you will need for Minecraft graphical design and these tools require time to learn. 

:::tip
Choose a program that feels comfortable and easy for you to use. Many Addon creators use different art programs for different tasks. (Example: One might use paint․net for most of the art, and piskel for Minecraft block animations). Choose what works best for you! 
:::

### Krita
Krita is a powerful open-source art programed with the goal of giving free powerful digital art tools to artists. Krita has more than enough features to cover your Minecraft needs and works on a MAC or PC.
**+ Pros:** Plenty of features including a pixel brush with an intuitive user interface.
**- Cons:** Requires a little time to become familar with the tools.

[Download Krita](https://krita.org/en/) 

### GIMP
Gimp is similar to Krita in that it is a free and open source digital art program that has a vast arrays of tools. Where Krita focuses more on illustration, GIMP focuses more on image manipulation (think Photoshop). Gimp also works on MAC or PC.
**+ Pros:** GIMP has more than enough tools for editing Minecraft art
**- Cons:** The interface is not intuitive. Even though GIMP is powerful, it requires a steep learning curve.

[Download Gimp](https://www.gimp.org/)

### Paint․net
Paint․net is a simple yet powerful image editing and art software. Paint․net may not have a vast array of tools like Krita and GIMP, but it does offer simplicity and ease of use. 
**+ Pros:** Easy to use and learn.
**- Cons:** Only works on Windows. 

[Download Paint.net](https://www.getpaint.net)

### Pixilart
Pixilart is a web-based pixel art software. It is extremely simple to use since it is focused on pixel art. It also has a powerful resize option that may come in handy, so that you can resize your art without losing the pixelart details.

**+ Pros:** Easy to use and learn. Curated specifically for pixel art.
**- Cons:** Must have internet connection. May be missing tools you want.

[Use Pixilart](https://www.pixilart.com/)

### Piskel
Piskel is a web-based pixel art software with a focus of making pixelated sprites (or video game charater animations). This tool, similar to Pixilart, is simple to use. This is also a great tool for making flipbooks (Minecraft block or skin animations).

**+ Pros:** Easy to use and learn. Perfect for flipbook animations
**- Cons:** Must have internet connection. Only offers the most basic tools.

[Download Piskel](https://www.piskelapp.com/)

### Libresprite

LibreSprite is a free and open source program for creating and animating your sprites. Based on the last GPLv2 commit of aseprite.

**+ Pros**: Basic & easy to use, customizable and curated for pixel artists.
**- Cons**: May not work on Mac, maintained only by a small community.

## Additional Materials

:::tip
This guide will walk you through the first stages of addon development, but it is not comprehensive! To learn more about addons, you will have to use and reference other sources of information, which we will link to here.
:::

### Join the Discord

The best place to get help with this guide is to join the [discord server](/discord).

### Vanilla Packs

Minecraft's vanilla files are a good source of reference material. You should download these packs, and store them on a convenient location on your computer. When you need an example of an item, or entity, or animation, you can reference these files for inspiration.

-   [Vanilla packs](https://github.com/Mojang/bedrock-samples/releases)

### Documentation

There are many good sources of Addon documentation. Familiarize yourself with all of them, and consider bookmarking them.

-   [bedrock.dev](https://bedrock.dev/): Reference documentation.
-   [wiki.bedrock.dev](https://wiki.bedrock.dev/): Tutorials and guides.
-   [MS Docs](https://docs.microsoft.com/en-us/minecraft/creator/): The official microsoft creator portal for addons.

### Troubleshooting and Additional Help

-   If the json format is very tricky for you, consider reading the [understanding-json guide](/guide/understanding-json).
-   If you get stuck with an odd error, consider reading the [troubleshooting guide](/guide/troubleshooting).
-   If you still haven't found a solution, feel free to join our [Discord server](/discord).

### Additional Links and Tools

-   You can explore additional tools [here](/meta/useful-links).

## Your progress so far

<Checklist>

-   [x] Installed the necessary software
-   [x] Downloaded the Vanilla Example files
-   [ ] Locate your `com.mojang` folder and create your addon's workspace.
-   [ ] Create the manifest and pack icon for your first addon

</Checklist>

---
title: Software and preparation
nav_order: 3
prefix: '3.'
---

Before you can start creating addons, you first have to install the required tools and applications. While development will be easiest on Windows 10, we have provided mobile alternatives for both Android and iOS, where applicable.

### Download Bedrock Minecraft

-   [Windows 10](https://www.microsoft.com/en-us/p/minecraft-for-windows-10/9nblggh2jhxj?activetab=pivot:overviewtab)
-   [Android](https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&hl=en)
-   [iOS](https://apps.apple.com/us/app/minecraft/id479516143)

## Picking an Editor

Addons can be created using any text editor, however it's much more comfortable to work in a dedicated editor. A good editor can give you code-completion, error-detection, and in-editor documentation.

There are strong opinions about the best editor for beginners, but generally speaking you cannot go wrong selecting either VSCode, or bridge. If you are mobile, you will need to use a mobile alternative.

### VSCode

VSCode is a general purpose text-editor and IDE. With VSCode, you will be able to edit your addons in plain-text, guided along by a powerful array of extensions and addons. VSCode is a great for programmers and advanced users.

[⚙️Install VSCode](https://code.visualstudio.com/)

<Spoiler title="Configuring VSCode">

Many packages exist for VSCode that make editing addons easier:

-   [Blockceptions Minecraft Bedrock Development](https://marketplace.visualstudio.com/items?itemName=BlockceptionLtd.blockceptionvscodeminecraftbedrockdevelopmentextension)
-   [.mcfunction support](https://marketplace.visualstudio.com/items?itemName=arcensoth.language-mcfunction)
-   [.lang support](https://marketplace.visualstudio.com/items?itemName=zz5840.minecraft-lang-colorizer)
-   [Bedrock Definitions](https://marketplace.visualstudio.com/items?itemName=destruc7i0n.vscode-bedrock-definitions)
-   [Prettt-json](https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json)
-   [Spell Checker (for writing wiki)](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
-   [Snowstorm Particle Editor](https://marketplace.visualstudio.com/items?itemName=JannisX11.snowstorm)
-   [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
-   [UUID Generator](https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator)

</Spoiler>

### Bridge

bridge. is a powerful add-on editor designed to speed up your development process. It provides a rich editing experience for all files inside behavior and resource packs (JavaScript, JSON and functions) and provides a powerful work environment. Unleash the full power of add-ons with bridge. plugins and make use of rich auto-completions provided as you navigate through a file. Creating Minecraft add-ons was never more convenient!

[⚙️ Install bridge.](https://github.com/bridge-core/bridge.)

<Spoiler title="Configuring bridge.">

You should be aware that it is a application that you benefit most from when you use it exclusively for editing your addon. Switching between a different editor and bridge. creates a bit of an overhead in your workflow (more later). The program builds up a knowledge base of your files as you use the editor. This enables very fast and dynamic auto-completions and file validation but also means that all of your files are cached in the background by default. There are two ways to workaround Bridge's caching strategy:

1. Increase or remove the `bridge-file-version: #11` comment the app leaves in your files after editing a file without bridge.
2. Add files that you want to edit without bridge. to a `.no-cache` file at the root of your behavior pack

Due to the nature of the file versioning system, most scripts and tools will continue to work as expected.

For further guidance on the editor, feel free to contact [solvedDev](https://twitter.com/solvedDev). bridge. also has an [official Discord server](https://discord.gg/wcRJZN3), with announcements, plugin discussion, addon help, and more.

</Spoiler>

### Mobile Editors

-   **Android**: [_ACode Editor_](https://play.google.com/store/apps/details?id=com.foxdebug.acodefree)
-   **iOS**: [_Kodex_](https://apps.apple.com/us/app/kodex/id1038574481)

## Additional Software

### Blockbench

-   [Blockbench](https://blockbench.net/) is a 'boxy 3D model editor' typically used to create Minecraft models, textures and animations. Also provides a web-browser version which is compatible with mobile.

### Image Editors

-   [Krita](https://krita.org/en/) _or_ [GIMP](https://www.gimp.org/)

## Reference Material

This guide will walk you through the first stages of addon development, but it is not comprehensive! To learn more about addons, you will have to use and reference other sources of information, which we will link to here.

### Join the Discord

The best place to get help with this guide is to join the [discord server](/discord).

### Vanilla Packs

Minecraft's vanilla files are a good source of reference material. You should download these packs, and store them on a convenient location on your computer. When you need an example of an item, or entity, or animation, you can reference these files for inspiration.

-   [Vanilla Resource Pack](https://aka.ms/resourcepacktemplate)
-   [Vanilla Behavior Pack](https://aka.ms/behaviorpacktemplate)

### Documentation

There are many good sources of Addon documentation. Familiarize yourself with all of them, and consider bookmarking them.

-   [bedrock.dev](https://bedrock.dev/): Reference documentation.
-   [wiki.bedrock.dev](https://wiki.bedrock.dev/): Tutorials and guides.
-   [MS Docs](https://docs.microsoft.com/en-us/minecraft/creator/): The official microsoft creator portal for addons.

## Your progress so far

**What you've done:**

-   [x] Installed the necessary software
-   [x] Downloaded the Vanilla Example files

**Whats next:**

-   [ ] Locate your `com.mojang` folder and create your addon's workspace.
-   [ ] Create the manifest and pack icon for your first addon

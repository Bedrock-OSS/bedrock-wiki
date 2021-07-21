---
title: Software and preparation
nav_order: 3
prefix: '3.'
---

Before you can start creating addons, you first have to install the required tools and applications. While development will be easiest on windows 10, we have provided mobile alternatives for both Android and ios, where applicable.

### A valid copy of Bedrock Minecraft

-   [Windows 10](https://www.microsoft.com/en-us/p/minecraft-for-windows-10/9nblggh2jhxj?activetab=pivot:overviewtab)
-   [Android](https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&hl=en)
-   [iOS](https://apps.apple.com/us/app/minecraft/id479516143)

## Picking an Editor

Addons can be created using any text editor, however it's much more comfortable to work in a dedicated editor. A good editor can give you code-completion, error-detection, and in-editor documentation.

There are strong opinions about the best editor for beginners, but generally speaking you cannot go wrong selecting any of the following editors.

_Recommendations are starred._

### Plaintext Editors

Plaintext editors are great for programmers, advanced users, and confident computer-users. Editors in this section are very powerful and customizable, but may be difficult to use.

-   ⭐[_VSCode_](https://code.visualstudio.com/) - is optimal in many cases, due to the fact that it has a variety of extensions for addon development. (_Warning: Do not install Visual Studio, which is something different_)
-   [_Sublime Text_](https://www.sublimetext.com/) - is another code editor with good theme customization capabilities.
-   [_Atom_](https://atom.io/) - is another solid editor, which can be thought of as the precursor to VSCode.

### Dedicated Editors

Dedicated editors are great for beginners. You will be somewhat limited in power and customization, but the development experience is very smooth.

-   ⭐[_bridge._](https://github.com/bridge-core/bridge.) - is a visual software for Minecraft addon development. It offers JSON in tree view. However, the process of creating addons in bridge. is parallel to creating them in a Code editor, so once you grasped the basics you could easily switch to using bridge.
-   [_CoreCoder (Free)_](https://hanprog.itch.io/core-coder-one) - is a unique Code Editor developed specifically for addon creation with JSON linting and autocomplete.

### Mobile Editors

-   **Android**: [_ACode Editor_](https://play.google.com/store/apps/details?id=com.foxdebug.acodefree)
-   **iOS**: [_Kodex_](https://apps.apple.com/us/app/kodex/id1038574481)

### Additional Notes

<Spoiler title="Features to look for in a Code Editor">
-   **Opening Folders:** When editing addons, it is very convenient to open an entire folder as a project, instead of just individual files. This allows you to edit the files in both the Behavior Pack and Resource Pack at the same time, and quickly switch between tasks.
-   **Json Linting/Prettify:** Linting is the ability to validate code as correct in real-time. Linting for json will mark things like missing commas, misplaced parens, or other formatting issues so that you can fix them. [Linting can also be found online](https://jsonlint.com/), but having real-time linting built directly into your editor is very much preferred.
-   **Built in Terminal:** I find a terminal built into my editor to be very useful. I often use python scripting to supplement my workflow, and having easy access to a terminal speeds up that workflow.

</Spoiler>

<Spoiler title="VSCode Extensions for Addon development">

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

<Spoiler title="If you choose to use bridge.">

You should be aware that it is a application that you benefit most from when you use it exclusively for editing your addon. Switching between a different editor and bridge. creates a bit of an overhead in your workflow (more later). The program builds up a knowledge base of your files as you use the editor. This enables very fast and dynamic auto-completions and file validation but also means that all of your files are cached in the background by default. There are two ways to workaround Bridge's caching strategy:

1. Increase or remove the `bridge-file-version: #11` comment the app leaves in your files after editing a file without bridge.
2. Add files that you want to edit without bridge. to a `.no-cache` file at the root of your behavior pack

Due to the nature of the file versioning system, most scripts and tools will continue to work as expected.

For further guidance on the editor, feel free to contact [solvedDev](https://twitter.com/solvedDev). bridge. also has an [official Discord server](https://discord.gg/wcRJZN3), with announcements, plugin discussion, addon help, and more.

</Spoiler>

<br>

### Additional Software

### Blockbench

-   ⭐ [**Blockbench**](https://blockbench.net/) is a 'boxy 3D model editor ' typically used to create Minecraft entity/block models, textures and animations. Also provides a web-browser version compatible with mobile.

### Image Editors

-   ⭐ [Krita](https://krita.org/en/)
-   [GIMP](https://www.gimp.org/)
-   [Photoshop _(≈$10/m)_](https://www.adobe.com/products/photoshop)

![](/assets/images/guide/blockbench_workspace.png)

## Setting up your workspace

_The remainder of this Guide assumes you are using VSCode. You may also follow along in other editors._

Let's create your first addon workspace in Visual Studio Code now.

1. Open VSCode (_Visual Studio Code, the code editor_)
2. Create a folder named "`your_pack_name_RP`" in `development_resource_packs`. **I'll refer to this folder as `RP`**, in accordance with the [Style Guide](https://wiki.bedrock.dev/knowledge/style-guide).
3. Create a folder "`your_pack_name_BP`" in `development_behavior_packs`. **I'll refer to this folder as `BP`**.
4. Go to `File > Add folder to workspace...` and choose `BP`. Do the same with `RP`.
5. Press `File > Save Workpsace as...` to save the workspace file to your Desktop. Whenever you're working on your addon, all you have to do is open the workspace by double-clicking, and you will get quick access to both BP and RP folders.

## Learning to reference

## Vanilla Packs

Referencing means looking at other addons to find out how certain results are achieved. Minecraft's unmodified files are a good place to start. Download the [Vanilla Resource Pack](https://aka.ms/resourcepacktemplate) and [Vanilla Behavior Pack](https://aka.ms/behaviorpacktemplate) and get creative! I recommend adding them to your workspace for easy referencing.

Once you complete this guide, you can download and reference some open-source addons from, for example, [MCPEDL](https://mcpedl.com/?cookie_check=1). You can also upload your own addons there.

## Documentation

The best tool you have when learning about addons is the documentation. [bedrock.dev](https://bedrock.dev/) contains the best, and most up to date addon documentation. Make sure you are using the documentation for the current edition (bedrock.dev/docs/stable).

---

## Your progress so far

**What you've done:**

-   [x] Installed the necessary software;
-   [x] Downloaded the Vanilla Example files;
-   [x] Located your com.mojang folder and created your addon's workspace.

**What you are to do next:**

-   [ ] Create your addons manifests, pack icons;
-   [ ] Learn to use `.mcfunction`, `.mcstructure`, `.mcpack` and `.mcaddon`.

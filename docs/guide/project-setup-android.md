---
title: Project Setup
category: Guide
nav_order: 4.1
prefix: '4.1 '
---

## Tools You'll Need
##### And by tools, they are applications from Google Play

For development on Android, you'll need a combination of 3 applications. Some good apps for this are provided below but any that have a similar function will work.
1. A file manager that can create ZIP archives if your device is running Android 12 or newer.
2. A code editor (any text editor will work, but only code editors will show syntax highlights)
3. A photo editor (no device comes with a editor that can go down to the pixel.)

### File Managers

These file managers are known to have ZIP archiving and view-only access to the `Android/data` folder.
1. **[X-Plore](https://play.google.com/store/apps/details?id=com.lonelycatgames.Xplore):** A powerful file manager with dual-pane tree view, a built-in text editor (not code), several file compression formats (ZIP, 7zip, RAR, etc.), and more. On rooted devices, X-Plore has edit acess to `Android/data` and root directories.
2. **[Total Commander](https://play.google.com/store/apps/details?id=com.ghisler.android.TotalCommander):** Not as powerful out of the box compared to X-Plore, but contains some of the same features including dual pane, ZIP and RAR archives, and view-only access to `Android/data`. Total Commander has list view instead of tree and many other features that require plugins (apps from Google Play) to use.

### Code Editors

1. **Acode:** [Free version](https://play.google.com/store/apps/details?id=com.foxdebug.acodefree) comes with ads that can be toggled off without paying. Supports GitHub integration using a Personal Access Token, FTP/SFTP, syntax highlighting for over 100+ languages including JSON, tab-view for multi-file editing, dozens of themes, and more. This app is open source and does have a [paid version](https://play.google.com/store/apps/details?id=com.foxdebug.acode) that allows a much deeper theme customization.

:::info
Acode is the only powerful code editor actively being developed on Android at this time. Other editors are very limited or have been abandoned long enough to vanish from the Google Play store. If you know of a code application, you can contribute to this guide on GitHub.
:::

### Photo Editors

:::warning
Your built-in Camera and Gallery applications do not have image creation nor pixel-by-pixel editing features. Google Play offers a variety of applications that do.
:::

1. **[Pocket Paint](https://play.google.com/store/apps/details?id=org.catrobat.paintroid):** Lightweight editor with the bare minimum features needed for any add-on creation. This app is easy to use and allows importing other images over others. Saves in JPG (compressed), PNG (lossless, with transparency), and ORA (multi-layer images). This app is open source.

:::info
Pocket Paint is currently the only photo editor that allows 16px by 16px editing that is easy to use and is free. Many others either limit the image size above 100 pixels, blurs 1px pen size across 4 other pixels, or simply lacks the ability to resize the image all together.
:::

## Creating Your Workspace

:::tip
In this version of the guide, "BP" refers to your behaviour pack folder and "RP" refers to your resource pack folder in your workspace. For locations in files or directories, `../<current location>` indicates "From last location" followed by the added space (e.g.: `/one/two/three/file.txt` would be shortened to `../three/file.txt`)

If your device is rooted, you can follow the main project setup using the `/Android/data/com.mojang.minecraftpe/files/games/com.mojang` development behaviour and resource pack folders directly. Otherwise, follow the steps below.
:::

Before we begin, you need a workspace. Using your file manager, navigate to your Internal Storage (In most cases, it's `/`. In others, the full path (e.g.: `/storage/emulated/0/`) is displayed. Both are acceptable.) and create a folder that will contain your packs. For this example, our full directory is `/Minecraft Packs/MyFirstAddon`. From there, you'll need one folder for both your behaviour and resource packs (e.g.: `../MyFirstAddon/addonBP` and `../MyFirstAddon/addonRP`).

Now that you have the workplace setup, code editors should have a way for you to open a folder as a workplace. In this guide, we'll be walking through Acode.
1. Open Acode.
2. Tap the file browser button (3 bars in the top-left), followed by "Open folder"
3. Tap "Add a storage", followed by "select folder"
4. This should have opened your device's file browser. Navigate to the *main* folder for your projects (for us, `/Minecraft Packs`) then tap "Use this folder". If your device asked you to allow Acode access, tap "Allow".
5. You should be back in Acode now. Tap "OK" and your folder should now be in the list. Tap on it and then "Select Folder" on the bottom of the screen.
6. Now when you open the file browser (3 bars in top-left), you should see your folder in the list. You now have quick access to your addon's behaviour and resource pack folders. The file browser uses tree view to display your active workspace.

:::tip
You can create new files and folders inside your packs from the file browser by tapping and holding on the folder you want to create the item in.
:::

## BP & RP Manifests

:::warning
From here on out, all files and folders have very specific names unless otherwise noted. Wrongly named files and/or folders are a common reason of an error. Please ensure you're checking your work carefully in accordance to the examples provided. If a file or folder mentioned has not yet been created, please create it in it's appropriate directory.

When creating a new file in a file manager or some text or code applications, the `.txt` extension is added automatically to the end of the file name. To ensure our files work as intended, be sure to remove `.txt`. Like names, the wrong file extension is also a common reason of an error. If you're using Acode, you'll notice `untitled.txt` is completely highlighted instead of just `untitled`. This is a common practice for naming programming language files.
:::

The manifest file is the file Minecraft uses to identify your packs. Every pack has one (and only one) manifest. A folder with a correctly formatted manifest will show up in Minecraft. Before we begin adding content, we will ensure our "minimal" pack is visible. Manifests are written in the `JSON` programming language. If you're unfamiliar with JSON, you can [learn more about it here](https://wiki.bedrock.dev/guide/understanding-json.html).

Create a new [text] file in your addon's behaviour pack folder called `manifest.json`. To begin, copy and paste the following code into the `manifest.json` file. A full breakdown of the manifest file is provided after creating these files.

<codeHeader>../addonBP/manifest.json</codeHeader>

```json
{
	"format_version": 2,
	"header": {
		"name": "pack.name",
		"description": "pack.description",
		"uuid": "...",
		"version": [0, 0, 1],
		"min_engine_version": [1, 16, 0]
	},
	"modules": [
		{
			"type": "data",
			"uuid": "...",
			"version": [0, 0, 1]
		}
	]
}
```

Now create another `manifest.json` file in your addon's resource pack folder. Again, copy and paste the following code inside the new file.

<codeHeader>../addonRP/manifest.json</codeHeader>

```json
{
	"format_version": 2,
	"header" {
		"name": "pack.name",
		"description": "pack.description",
		"uuid": "...",
		"version": [0, 0, 1],
		"min_engine_version": [1, 16, 0]
	},
	"modules": [
		{
			"type": "resources",
			"uuid": "...",
			"version": [0, 0, 1]
		}
	]
}
```

## Manifest Breakdown 

- `format_version` defines the version the syntax your manifest is written in. Version 2 is the most recent stable version. Always use this version.
- `name` is name of your pack. We will be defining the this in "code form" later so they can easily be translated into other languages, should you create a pack with multiple languages.
- `description` is a short description about your pack that will show up under the `name` in-game. This will also be defined later in "code form".
- `uuid` is required to help identify your pack from other packs and will have a breakdown of it's own below. Once explained, you'll need to replace all of the `...` with them.
- `version` is literally the version of your addon. Upon completing your addon, you can always change this to `[1, 0, 0]`. However, it'll be easier to use the hotfix spot while making your changes on mobile.
- `min_engine_version` tells Minecraft what the minimum version it needs to be in order for your pack to work. For example, if your pack has a crafting recipe that involves concrete, your pack can't run on Minecraft 1.5 because concrete doesn't exist in that version.
- Under `modules`, you have the `type` field. This tells Minecraft what your pack is. So `data` in your BP tells the game that pack is a behaviour pack and `resources` in your RP tells the game that pack is a resource pack.

## UUID Breakdown

A UUID, or **U**niversally **U**nique **ID**entifier, both identifies your pack for other programs (Minecraft, for example) and seperates your pack from someone else's pack for the program it's for. A version 4 UUID (UUID-4) is usually in the format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` and made of a random string of letters and numbers. For example: `5c830391-0937-44d6-9774-406de66b6984`.

You should **NEVER** use the same UUID twice! Use the [Online UUID Generator Tool](https://www.uuidgenerator.net/version4) to generate the UUID's needed for your manifest files. Every manifest file uses two different UUID's. So to ensure your packs will work correctly, get 4 different UUID's to replace all of the `...` in both manifests. When finished, each UUID entry should look similar like this: `"uuid": "5c830391-0937-44d6-9774-406de66b6984`

## Pack Icon 

Notice how other packs have a icon? It's a image file which can quickly identify how your addon will appear in-game. Got a low-resolution square image as a PNG? You can use it! Otherwise, you can use this [example icon](https://wiki.bedrock.dev/assets/images/guide/project-setup/pack_icon.png). You must place a copy of your desired image in both the behaviour and resource packs. In order for the image to be read correctly, the name must be `pack_icon.png`.

## Language Files 

Remember when we said we'll define the pack name and description in code form earlier? Now is that time as it's the last thing we need to do to setup your addon. You will need to create 4 new files and 2 new folders (2 files and 1 folder for each pack). You can [learn more about how Minecraft handles location here](https://wiki.bedrock.dev/concepts/text-and-translations.html). You can also format your definitions using the `§` symbol. You can view a list of colors and formats [here](https://htmlcolorcodes.com/minecraft-color-codes/). If you use any formatting, make sure you `§r`eset when changing formats: `§kl My pack l` will render "My pack" unreadable whereas `§kl §rMy pack §kl` can be read properly.

<codeHeader>../BP/texts/en_US.lang</codeHeader>

```lang
pack.name=§2My §lFIRST §r§2Addon's Behaviour Pack!
pack.description=This addon is made by a Wiki Contributer!
```

<codeHeader>../BP/texts/languages.json</codeHeader>

```json
["en_US"]
```

<codeHeader>../RP/texts/en_US.lang</codeHeader>

```lang
pack.name=§2My §lFIRST §r§2Addon's Resource Pack!
pack.description=This addon is made by a Wiki Contributer!
```

<codeHeader>../RP/texts/languages.json</codeHeader>

```json
["en_US"]
```

## Importing Your Addon 

Now that your addon has all of the required content, we need to import it to Minecraft. To do this, we need to create a file with the extension `.mcaddon`.
1. Open your preferred file manager and navigate to the folder containing your behaviour and resource packs.
2. Using multi-select, select both packs and create a ZIP file.
3. When asked for the name of the file, ensure that `.zip` is changed to `.mcaddon`.
![image](https://user-images.githubusercontent.com/55290878/172889083-c1b34f44-2467-48ba-b0e8-db5839ac7456.png)
5. When your file manager finishes, it should be a `MCADDON` file with Minecraft as it's icon. Tapping on this file should launch Minecraft.

If done correctly, Minecraft will display a banner for both packs. First is `Importing...`. After should be `Sucessfully imported "<your pack name>"`. You can also go to `Settings > Storage` if you don't see the import messages to verify your packs were imported. If you do not see either pack, check out our [troubleshooting guide](./troubleshooting).

## Creating In-Game Test Environment

The best tool available for debugging your addon is the Content Log in-game and is highly recommended that you turn it on. When you load your world with the Content Log and your addon, any error will appear. You can also view the Content Log in-game in the Setting menu or, if you've connected a keyboard and mouse to your device, the keyboard shortcut `Ctrl+H`. Note the path shown in the settings as this is where you will always find current and past logs in outside the game: `storage/emulated/0/Android/data/com.mojang.minecraftpe/files/games/com.mojang/logs`. You can learn more about the Content Log [here](/guide/troubleshooting).
![image](https://user-images.githubusercontent.com/55290878/172888562-0eddda4c-a6ce-4c3e-ab69-41fac8f17e93.png)


With the content log enabled, it's time to create a new world for testing your addon.
1. Navigate to `Play > Create new > Create new world...`
2. If you're planning on adding blocks, biomes, or other material that isn't normally in the game, ensure the following are enabled and your gamemode is set to `Creative`. Custom Biomes is optional unless you're planning on creating biomes.
![image](https://user-images.githubusercontent.com/55290878/172888683-bff0d28b-40d5-47c3-a1f9-1ea2c8813e7e.png)
3. Now activate your behaviour and resource packs. Under their respective categories, tap on the pack and then `apply`.
4. Tap `Create`!

## Final Notes

You have successfully created your first addon! Give yourself a pat on the back. Remember in the future testing your work requires importing the packs and you may need to increase the version numbers in the manifest each time. The `"version": [0, 0, 1]` lines. Each number can go up however high you need to. If that means over 100, so be it. You're becoming a content creator on your Android device! You should also remember that future guides will represent `/Minecraft Packs/MyFirstAddon/AddonBP` as `BP` and `/Minecraft Packs/MyFirstAddon/AddonRP` as `RP`.

Here's how your project should look, after completing this guide:

<FolderView :paths="[

	'/Minecraft Packs/MyFirstAddon/AddonBP/texts/en_US.lang',
	'/Minecraft Packs/MyFirstAddon/AddonBP/texts/languages.json',
	'/Minecraft Packs/MyFirstAddon/AddonBP/manifest.json',
	'/Minecraft Packs/MyFirstAddon/AddonBP/pack_icon.png',
	
	'/Minecraft Packs/MyFirstAddon/AddonRP/texts/en_US.lang',
	'/Minecraft Packs/MyFirstAddon/AddonRP/texts/languages.json',
	'/Minecraft Packs/MyFirstAddon/AddonRP/manifest.json',
	'/Minecraft Packs/MyFirstAddon/AddonRP/pack_icon.png',
	
]"></FolderView>

:::tip What you have learned:

- What and where your `com.mojang` folder is and what it contains
- How to setup your mobile workspace
- What a `manifest.json` file is
- What are, and how to use UUID's
- How to create icons for your addons
- What a `.lang` file is
:::

## Your progress so far

<Checklist>

- [x] Setup your pack
- [ ] Create a custom item
- [ ] Create a custom entity
- [ ] Create a custom block

</Checklist>

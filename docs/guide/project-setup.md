---
title: Project Setup
nav_order: 4
prefix: '4.'
---

## Your Workspace

First of all, you will need to create the proper folders in suitable locations and set up your workspace.
_The remainder of this guide assumes you are using VSCode. You may also follow along with other editors._

Let's create your first add-on workspace in Visual Studio Code now.

1. Open VSCode (_Visual Studio Code, the code editor_)
2. Create a folder named "`your_pack_name_RP`" in `development_resource_packs`. **I'll refer to this folder as `RP`**
3. Create a folder "`your_pack_name_BP`" in `development_behavior_packs`. **I'll refer to this folder as `BP`**.
4. Go to `File > Add folder to workspace...` and choose `BP`. Do the same with `RP`.
5. Press `File > Save Workpsace as...` to save the workspace file to your Desktop. Whenever you're working on your addon, all you have to do is open the workspace by double-clicking, and you will get quick access to both BP and RP folders.

:::tip
In this guide, you will often be instructed to create files with specific names, placed in specific folders. If the folder doesn't exist yet, please create it!
:::

:::tip
In this guide, BP refers to the folder you created in `development_behavior_packs` ("the behavior pack"), and RP refers to the folder you created in `development_resource_packs` ("the resource pack")
:::

## BP Manifest

The manifest is a file that identifies your pack to Minecraft. Every pack has one manifest. A folder with a correctly formatted manifest will show up in Minecraft, and we consider this the "minimal" pack before we can add additional content.

Manifest files are written in `json`. If this isn't familiar to you, you can [learn more about json here.](/guide/understanding-json)

First, create a new file in your BP folder by right-clicking on the folder and selecting `New File`. Call the file `manifest.json`. To begin, you can copy paste the following code into the file.

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
	"format_version": 2,
	"header": {
		"name": "pack.name",
		"description": "pack.description",
		"uuid": "...",
		"version": [1, 0, 0],
		"min_engine_version": [1, 16, 0]
	},
	"modules": [
		{
			"type": "data",
			"uuid": "...",
			"version": [1, 0, 0]
		}
	]
}
```

### Manifest Explained

-   "`format_version`" defines what version of manifest syntax you are using. Version 2 is the most recent stable version; use it.

-   "`name`" is the name of your behavior pack. "`description`" will show up under it in-game. We are defining these files in "code form" so we can translate them later into other languages.

-   The "`UUID`" field is **essential**, and will be discussed in more detail bellow.

-   "`version`" defines the version of your add-on. When you import an add-on with a newer version on a device with an older version installed, the more recent version will overwrite the older one. You don't need to change the version if you have the add-on in `development_*_packs` folders and only use them on private worlds.

-   "`min_engine_version`" defines the minimum Minecraft client version that'll be able to read your add-on.

-   In "`modules`", the "`type`" is defined to be "`data`". This makes your pack a _Behavior Pack_.

### UUID Explained

A UUID (_Universally Unique Identifier_) identifies your pack for other programs (in this case, Minecraft) to read. It looks something like this: `5c830391-0937-44d6-9774-406de66b6984`

**NEVER USE THE SAME UUID TWICE.** You can generate your own UUIDs [here](https://www.uuidgenerator.net/version4) or, if you use VSCode, you can install [this](https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator) extension. Many other tools like _bridge._ generate UUIDS automatically. Every manifest file uses two different UUIDs.

To ensure that your add-on will work correctly you should generate two new UUID's which you will paste into the BP `manifest.json` file, at each `"..."`. When you are finished, it should look something like this:

`"uuid": "5c830391-0937-44d6-9774-406de66b6984"`

## RP Manifest

The next step is to create the `manifest.json` for the RP. The format for a resource-pack manifest is nearly identical to a BP manifests except that the "`type`" is "`resources`".

Copy the following code into your newly created `RP/manifest.json`.

<CodeHeader>RP/manifest.json</CodeHeader>

```json
{
	"format_version": 2,
	"header": {
		"name": "pack.name",
		"description": "pack.description",
		"uuid": "...",
		"version": [1, 0, 0],
		"min_engine_version": [1, 16, 0]
	},
	"modules": [
		{
			"type": "resources",
			"uuid": "...",
			"version": [1, 0, 0]
		}
	]
}
```

## Pack Icon

The pack icon is an image file which identifies how your addon will look in-game. If you have a low-resolution square image, you can use it. Otherwise, download and use this example icon:

<WikiImage src="/assets/images/guide/pack_icon_BP.png" alt="Pack Icon" pixelated/>

You should place a copy of your desired image into both the RP and the BP. The image needs to be named `pack_icon.png`

## Language Files

The last thing to do is setup language support for your addon. You will need to create a language file for both the RP and the BP. [You can learn more about how Minecraft handles localization here.](/concepts/lang)

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```json
pack.name=Wiki Resource Pack
pack.description=My First Addon
```

<CodeHeader>BP/texts/en_US.lang</CodeHeader>

```json
pack.name=Wiki Behavior Pack
pack.description=My First Addon
```

## Checking your Work

If you have done everything correctly, your packs should show up in Minecraft now! If you don't see your pack, you should follow the [troubleshooting guide.](/meta/troubleshooting)

![](/assets/images/guide/behavior_pack_existing.jpg)

## Creating your testing world

Now to create a testing world to test your new add-on!

1. Click "**Create new world**";

2. Turn on both '**settings>profile>content_log_file**' and '**settings>profile>content_log_gui**'. This will show you any errors in your add-on when you enter a world with it applied. You can also open the content log GUI by pressing `ctrl+h`. [Learn more about the content log here.](/meta/troubleshooting)

TODO Replace these images
![](/assets/images/guide/world_params_1.jpg)
![](/assets/images/guide/world_params_2.jpg)
![](/assets/images/guide/world_params_3.jpg)

Now activate your behavior pack. If you haven't set up dependencies in the manifest, apply your resource pack too. Otherwise, it'll be applied automatically). Now click '**Create**'. You might need a separate '_Infinite_' world to test entity spawning too.
![](/assets/images/guide/behavior_pack_applied.png)

---

## Your progress so far:

**What you've done:**

-   [x] Setup your pack;

**What are you to do next:**

-   [ ] Create a custom item;
-   [ ] Create a custom entity;
-   [ ] Create the entity's loot, spawn rules and a custom recipe;

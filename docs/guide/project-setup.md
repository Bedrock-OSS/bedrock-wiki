---
title: Project Setup
nav_order: 4
prefix: '4.'
---

## Preparation

First of all, you will need to create the proper folders in suitable locations and set up your workspace.
_The remainder of this guide assumes you are using VSCode. You may also follow along with other editors._

Let's create your first add-on workspace in Visual Studio Code now.

1. Locate the com.mojang folder. Click [here](https://wiki.bedrock.dev/guide/software-preparation#the-commojang-folder) to find out how to get there.
2. Create a folder named "`your_pack_name_RP`" in `development_resource_packs`. **I'll refer to this folder as `RP` from now on**, following the [Style Guide](https://wiki.bedrock.dev/knowledge/style-guide).
3. Create a folder "`your_pack_name_BP`" in `development_behavior_packs`. **I'll refer to this folder as `BP` from now on**.
4. Open VSCode (_Visual Studio Code, the code editor_)
5. Go to `File > Add folder to workspace...` and choose `BP`. Do the same with `RP`.
6. Press `File > Save Workspace As...` to save the workspace file to your Desktop. Whenever you're working on your add-on, all you have to do is open the workspace by double-clicking, and you will get quick access to both BP and RP folders.

## Manifests

A manifest is a file that defines your pack to Minecraft. It stores all sorts of important info about your pack.
Like all other code files in your pack, it's written in [JSON](https://www.json.org/json-en).

---

Let's create our Behavior Pack manifest first by creating a new file in VSCode and copying the code below into that.
First, create a new file in your BP folder by right-clicking on the folder and selecting `New File`. Then name that file `manifest.json`

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
	"format_version": 2,
	"header": {
		"name": "Wiki Tutorial",
		"description": "Time to create your first add-on!",
		"uuid": "86a98bd8-1859-46b4-a8d8-b242b9a9fcc8",
		"version": [1, 0, 0],
		"min_engine_version": [1, 14, 0]
	},
	"modules": [
		{
			"type": "data",
			"uuid": "5c830391-0937-44d6-9774-406de66b6984",
			"version": [1, 0, 0]
		}
	],
	"dependencies": [
		{
			"uuid": "e31629b6-f587-4c78-9d8c-97ce40b29b85",
			"version": [1, 0, 0]
		}
	]
}
```

Let's break up the code now.

-   "`format_version`" defines what version of manifest syntax you are using. Version 2 is the most recent stable version; use it.

-   "`name`" is the name of your behavior pack. "`description`" will show up under it in-game.

-   The "`UUID`" field is an **essential** one. A UUID (_Universally Unique Identifier_) identifies your pack for other programs (in this case, Minecraft) to read. **NEVER USE THE SAME UUID TWICE.** You can generate your own UUIDs [here](https://www.uuidgenerator.net/version4) or, if you use VSC, you can install [this](https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator) extension. Many other tools like _Bridge_, _AJG_, and _CoreCoder_ generate UUIDS automatically. Every manifest file uses two different UUIDs.

So, to make sure your add-on will work correctly. Generate three new UUID's which you will paste into the BP manifest.json file.

-   "`version`" defines the version of your add-on. When you import an add-on with a newer version on a device with an older version installed, the more recent version will overwrite the older one. You don't need to change the version if you have the add-on in `development_*_packs` folders and only use them on private worlds.

-   "`min_engine_version`" defines the minimum Minecraft client version that'll be able to read your add-on.

-   In "`modules`", the "`type`" is defined to be "`data`". This makes your pack a _Behavior Pack_.

`Note:` if Mojang decides to add something else to the manifest syntax, they'll create a newer format version. Your manifests can stay unchanged, but it's recommended to create the new ones with "format_version" set to the new number and the new syntax used. If this ever happens, it will be mentioned in a changelog, and this site will be updated.

#

The next step is, naturally, creating your `RP/manifest.json`. It is very much like a Behavior Pack manifest, except the "`type`" is "`resources`".
Copy the code below into your newly created `manifest.json`.

<CodeHeader>RP/manifest.json</CodeHeader>

```json
{
	"format_version": 2,
	"header": {
		"name": "Wiki Tutorial",
		"description": "Time to create your first add-on!",
		"uuid": "e31629b6-f587-4c78-9d8c-97ce40b29b85",
		"version": [1, 0, 0],
		"min_engine_version": [1, 16, 0]
	},
	"modules": [
		{
			"type": "resources",
			"uuid": "a00c0603-e122-4d00-8ab8-18168bc5ca9a",
			"version": [1, 0, 0]
		}
	]
}
```

Now, we can add a little trick to creating add-ons. If you look at the UUIDs I put in both the BP and RP; you'll notice the UUID in the `dependencies` of the BP is the same as the UUID from the RP. This makes it so that if both the RP and BP are on your device, you will only need to assign the BP to your world, and the RP will get applied automatically too!

_Now, make sure you replaced all the UUIDs with NEW ones **and** that the UUID from the RP is the exact same as the one in the `dependencies` of the BP._

#

Next, add your `pack_icon.png` file to both the BP and RP folders.

I'm going to use this image here for both the BP and RP:
TODO Add new pack_icon
<WikiImage src="/assets/images/guide/pack_icon_BP.png" alt="Pack Icon" pixelated/>

The last thing to do is to validate the text in your packs for other languages. For this, create a file called `en_US.lang` in `RP/texts/` and copy these lines into it, defining your packs' name and descriptions for the mentioned language:

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```json
pack.name=Ghostly Guide
pack.description=Bedrock OSS Organization
```

If you have done everything correctly, your packs should show up in Minecraft now!
TODO Replace this image
![](/assets/images/guide/behavior_pack_existing.jpg)

---

## Creating your testing world

Now to create a testing world to test your new add-on!

1. Click "**Create new world**";

2. Turn on both '**settings>profile>content_log_file**' and '**settings>profile>content_log_gui**'. This will show you any errors in your add-on when you enter a world with it applied. You can also open the content log GUI by pressing `ctrl+h`.

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

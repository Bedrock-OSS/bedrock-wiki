---
layout: guide
title: Project Setup
parent: Beginners Guide
badge: 2
badge_color: guide
badge_justification: left
nav_order: 2
---

# Project Setup

## Manifests

A manifest is a file that defines your pack to Minecraft. It stores all sorts of important info about your pack.
Like all other code files in your pack, it's written in [JSON](https://www.json.org/json-en).

### **JSON Syntax Rules**

-   **Data is in name/value pairs;**
-   **Data is separated by commas;**
-   **Curly braces hold objects;**
-   **Square brackets hold arrays;**
-   **Every `{` must be closed by `}`, every `[` with `]`, same with `{}`, `[]`, `""`, `''`, etc.**

<Button color="blue" link="https://www.w3schools.com/whatis/whatis_json.asp">Learn more about JSON</Button>

---

Let's create our Resource Pack manifest first by copying the code below into `RP/manifest.json` (_In other words, in a `manifest.json` file in your resource pack folder, which is located in `development_resource_packs`_).

<CodeHeader>RP/manifest.json</CodeHeader>

```json
{
	"format_version": 2,
	"header": {
		"name": "kf:Tutorial Resources",
		"description": "A great place to start creating your very own addons. Organized by KaiFireborn#1551 on Discord.",
		"uuid": "2f85891a-bd3d-439d-a1ec-238ea8b22abf",
		"version": [1, 0, 0],
		"min_engine_version": [1, 16, 0]
	},
	"modules": [
		{
			"type": "resources",
			"uuid": "d7a1fd29-1e22-454e-94ba-50a13a4c10d9",
			"version": [1, 0, 0]
		}
	]
}
```

Let's break up the code now.

-   "`format_version`" defines what version of manifest syntax you are using. Version 2 is the most recent stable version, use it.

-   "`name`" is the name of your behavior pack. "description" will show up under it in-game.

-   The "`uuid`" field is a very important one. A UUID (_Universally Unique IDentifier_) identifies your pack for other programs (in this case, Minecraft) to read. NEVER USE THE SAME UUID TWICE. You can generate your own UUIDs [here](https://www.uuidgenerator.net/version4) or, if you use VSC, you can install [this](https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator) extension. Many other tools like _Bridge_, _AJG_ and _CoreCoder_ generate UUIDS automatically. Every manifest file uses 2 different UUIDs.

-   "`version`" defines the version of your addon. When you import an addon with a newer version on a device where an older version was installed, the newer version will overwrite the older one. You don't need to change the version if you have the addon in `development_*_packs` folders and only use them on private worlds.

-   "`min_engine_version`" defines the minimum Minecraft client version that'll be able to read your addon. Set it to `1.16.0` or the latest version of Minecraft.

-   In "`modules`", write the same "`version`" number, a new UUID under "uuid" and define the "`type`" to be "`resources`". This makes your pack a _Resource Pack_, also called a _Client pack_ or a _Texture pack_. It changes things in-game visually.

`Note:` if Mojang decides to add something else to the manifest syntax, they'll create a newer format version. Your manifests can left unchanged, but it's recommended to create the new ones with "format_version" set to the new number and the new syntax used. If this ever happens, it will be mentioned in a changelog, and this site will be updated.

#

The next step is, naturally, creating your `BP/manifest.json`. it is very much like a Resource pack manifest, except the "`type`" is "`data`" (for a _Data Pack_/_Behavior Pack_). There's also an optional field "`dependencies`", where you can define the needed resource packs by including their main UUID. Dependent resource packs will be applied to any world with the behavior pack automatically, if they exist on the device.

_Remember that same UUIDs cannot be used twice, which means that you have to generate NEW ones for the behavior manifest, and not use the ones already used in the resource manifest._

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
	"format_version": 2,
	"header": {
		"name": "kf:Tutorial Behaviors",
		"description": "A great place to start creating your very own addons. Organized by KaiFireborn#1551 on Discord.",
		"uuid": "1e77f741-228e-4085-af8d-cd53d4c6612b",
		"version": [1, 0, 0],
		"min_engine_version": [1, 14, 0]
	},
	"modules": [
		{
			"type": "data",
			"uuid": "b7d5851a-fa82-48cd-aaf4-6aea8e9d3d3b",
			"version": [1, 0, 0]
		}
	],
	"dependencies": [
		{
			"uuid": "2f85891a-bd3d-439d-a1ec-238ea8b22abf",
			"version": [1, 0, 0]
		}
	]
}
```

The last thing to do is to add your `pack_icon.png` file to both the BP and RP folders.

I'm going to use this image here for the BP:
<WikiImage src="/assets/images/guide/pack_icon_BP.png" alt="Pack Icon" pixelated/>

And this one for the RP:
<WikiImage src="/assets/images/guide/pack_icon_RP.png" alt="Pack Icon" pixelated/>

If you have done everything correctly, your packs should show up in Minecraft now!
![](/public/assets/images/guide/behavior_pack_existing.jpg)

---

## Creating your testing world

Now to create a testing world to test your new addon!

1. Click "**Create new world**";

2. Set the following settings like on the images below, so it'll be easier to test your addon in the future:

-   The '**Experimental Gameplay**' **MUST** be **on** for some addon features (_like Scripting, Biomes, Features, Feature Rules, etc_), double check if it's on after applying your packs.
-   You might need to turn some settings, like '_TNT explodes_', '_fire spreads_', '_do daylight cycle_', '_Mobs spawning_' etc, depending on what you're testing. It's easy to do with the `/gamerule` command in-game.

3. Turn on both '**settings>profile>content_log_file**' and '**settings>profile>content_log_gui**'. This will show you any errors in your addon when you enter a world with it applied. You can also open the content log GUI by pressing `ctrl+h`.

![](/public/assets/images/guide/world_params_1.jpg)
![](/public/assets/images/guide/world_params_2.jpg)
![](/public/assets/images/guide/world_params_3.jpg)

Now activate your behavior pack. If you haven't set up dependencies in the manifest, apply your resource pack too, otherwise, it'll be applied automatically). Check if **[EX]**(Experimental Gameplay) is turned on, and click '**Create**'. You might need a separate '_Infinite_' world to test entity spawning too.
![](/public/assets/images/guide/behavior_pack_applied.png)

---

---

## .mc file extensions

Now it's time to talk about some file extensions you'll be using during the development.

---

### .mcstructure

An `.mcstructure` file literally includes a Minecraft structure, consisting of blocks and entities. It can be exported via a Structure Block(`*/give @s structure_block*`) and is Win10 Edition only.
If you store one of these files in the `BP/structures` folder you'll be able to '**load**' the structure from structure blocks on any world with the pack applied. (_A reliable method to transfer structures between worlds!_). See the Custom Structures article to make your Structures automatically generate in your world!
![Structure Block Example](/public/assets/images/guide/structure_block_example.jpg)

---

### .mcfunction

An `.mcfunction` file is a file holding a function, a.k.a a bundle of commands.. Let's create one in `BP/functions/`. VSC will treat it like a normal .txt file.
Let's name the new text file `diamond_tools.mcfunction` and write a set of simple _slash commands_[but without slashes(`/`)], which can otherwise be executed from in-game chat, like these:
![.mcstructure in VSC](/public/assets/images/guide/function_code.png)

##### Note: if a command's syntax in the function is incorrect, the function won't parse. Watch your _content log_ for errors

Now you can run the function by typing `/function diamond_tools` (_`/function {filename}`_) in the in-game chat!
![function in-game](/public/assets/images/guide/function_in_game.jpg)

---

## .mcpack, .mcaddon & .mcworld

Next up are `.mcpack` files. These are used to _import external addons_. To create one, all you have to do is _right_click_ your `BP` or your `RP`, and zip it (_choose `send to>compressed(zipped) folder`_). Now simply change the extension [*by renaming the file*] from `.zip` to `.mcpack`, to create a file like on the image below. When a user clicks on the file, it'll be automatically opened by and imported to Minecraft, for them to use (Win10 and iOS). (It'll be located in `com.mojang/..._packs`)

![](/public/assets/images/guide/transpiled_mcpack.png)

What if you want both your resource pack and your behavior pack to be imported at once? Make both `.mcpacks`, then select them and choose `send to>compressed(zipped) folder`. Then change `.zip` to `.mcaddon`. Done!

##### Note: Some external programs like AJG and bridge do that automatically

*Note: same method can be used to compile a world folder from com.mojang/minecraftWorlds and changing the `.zip` to `.mcworld`. On Win10 devices one can click "*Export world*" in the world settings to achieve the same result. `.mcworld`s usually include all addons applied (as long as they come from `..._packs`.).*

---

## Your progress so far:

**What you've done:**

-   [x] Created the manifest and pack_icon files;
-   [x] Learned about all the different `.mc` file extensions and how to use them;
-   [x] Learned to transfer structures between worlds using Behavior Packs and `.mcstructure` files;
-   [x] Created your own function that can be ran like a normal command!

**What are you to do next:**

-   [ ] Learn to create custom items;
-   [ ] Learn to define texture short-names;

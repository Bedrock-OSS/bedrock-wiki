---
title: Skin Packs
---

<!-- - [Skin pack Manifest](#Skin pack Manifest)
- [skins.json](#skins.json)
- [texts/en_US.lang](#texts/en_US.lang)
- [What you learned](#What you learned:) -->

Many people wrongly assume that skin packs are only available for creation to Marketplace Partners. No! It's a very easy process, which can easily be fully automated by python. But that's not it: let's learn the syntax as usual:

-   The folder for creating skin packs is `com.mojang/skin_packs/SkinpackName`. For some unknown reason, `com.mojang/development_skin_packs` doesn't seem to function correctly, so you'll have to reload Minecraft every time between testing. You will not need a `pack_icon`, but you will need a `manifest.json` and a `skins.json`, as well as a `.lang` file in the `texts` folder.

_Note: On Android, the com.mojang folder is located in `Phone>games>com.mojang`_

## Skin pack Manifest

<CodeHeader>skin_packs/TutorialSkinPack/manifest.json</CodeHeader>

```json
{
	"format_version": 1,
	"header": {
		"name": "Tutorial Skin Pack",
		"uuid": "a2bd7cb4-ac3b-4e03-a337-8d6ca1c3a0df",
		"version": [1, 1, 0]
	},
	"modules": [
		{
			"type": "skin_pack",
			"uuid": "7bc272b7-b338-40c3-9003-421582127bd0",
			"version": [1, 1, 0]
		}
	]
}
```

-   `format_version` can be 1 in this scenario, as v2 didn't change much for skin packs.
-   `name` is self explanatory. however, it isn't of gret importance.
-   `uuid` and `version` are already familiar to us. Both UUIDs in the manifest need to be different. You can generate them via a generator linked in Links and Contact. As a reminder, you CANNOT use the same UUID TWICE.
-   `type` in `modules` needs to be set to `skin_pack`, of course.

## skins.json

is used to define the skin texture files. Most of the options are, however, hard-coded/unchangeable. The skin `.png` or other image files are located in the same folder as `manifest.json` and `skins.json`, which is `skin_packs/TutorialSkinpack` in this scenario. My example skin files are named `Niika.png` and `Senn_skin.png` ~~guess where I took the names from~~.

<CodeHeader>skin_packs//TutorialSkinPack/skins.json</CodeHeader>

```json
{
	"geometry": "skinpacks/skins.json",
	"skins": [
		{
			"localization_name": "NIIKA",
			"geometry": "geometry.humanoid.custom",
			"texture": "Niika.png",
			"type": "free"
		},
		{
			"localization_name": "SENN",
			"geometry": "geometry.humanoid.custom",
			"texture": "Senn_skin.png",
			"type": "free"
		}
	],
	"serialize_name": "TutorialSkinPack",
	"localization_name": "TutorialSkinPack"
}
```

-   The `geometry` object must be the same as on the example code in every object. Mojang revoked the ability to add custom geometries via skin packs, because the feature was abused.
-   `skins` array is where the object for every skin of yours are in. The skins will be displayed in the same order in minecraft as they are defined here.

In this example, I defined two skins. it is possible to define any number.

-   `localization_name` is going to be used in the .lang file. Think of it as the skins identifier.
-   `texture` is the name of the image file, located int eh main skin pack folder.
-   `type` is only accessible to marketplace partners, so leave it as `free`
-   `serialize_name` is for marketplace.
-   `localization_name` is the packs identifier, to be called in `.lang`.

## texts/en_US.lang

Finally, we'll define the names of the skin pack and every skin in the `.lang` file in `skin_packs/Skinpackname/texts/en_US.lang`. Of course "en_US" can be replaced with any language.

```
skinpack.TutorialSkinPack=guide.bedrock.dev Tutorial skin pack

skin.TutorialSkinPack.NIIKA=Niika
skin.TutorialSkinPack.SENN=SENN
```

The first line defines the pack's name itself. It's done in this format:

`skinpack.pack localization_name=ActualCustomName`

The other lines define the skins' names:

`skin.skin localization_name=ActualSkinName`

Done! Now, when you open Character Creator, you'll see your skins available to be chosen! These skins aren't affected by the "custom skins switching in multiplayer" v1.14 bug.

Exporting the pack is easy: simply zip everything in the SkinpackName folder and change the `.zip` extension to `.mcpack`.

_Note: Skin packs can be instantly generated from a folder with skins with [AJG](https://kaifireborn.itch.io/addon-json-generator)._

---

---

## What you learned

-   Creating a custom Skin Pack and exporting it
-   Defining skin and skinpack names in `.lang`

---
title: Skin Packs
mentions:
    - MedicalJewel105
    - SirLich
    - Joelant05
    - TheItsNameless
category: General
description: Create your own skin pack.
---

Many people wrongly assume that skin packs are only available for creation to Marketplace Partners. No! It's a very easy process, which can easily be fully automated by python. But that's not it. Let's learn how to make a skin pack!

:::warning
The `development_skin_packs` doesn't seem to function correctly. You need to use `skin_packs` folder and reload Minecraft every time you made a change.
:::

## What is needed

Here is what is needed:

<FolderView
	:paths="[
    'com.mojang/skin_packs/my_skin_pack/texts/en_US.lang',
	'com.mojang/skin_packs/my_skin_pack/my_skin.png',
	'com.mojang/skin_packs/my_skin_pack/manifest.json',
	'com.mojang/skin_packs/my_skin_pack/skins.json'
]"
></FolderView>

## manifest.json

<CodeHeader>skin_packs/tutorial_skin_pack/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "Tutorial Skin Pack",
        "uuid": "bb9616eb-327c-4a81-9f00-064cae820cd5",
        "version": [1, 0, 0]
    },
    "modules": [
        {
            "type": "skin_pack",
            "uuid": "e4bc71b6-8f9b-4094-9d47-dc3824f8a3dc",
            "version": [1, 0, 0]
        }
    ]
}
```

-   `format_version` can be 1 too, as v2 doesn't change much for skin packs.
-   `name` is self explanatory. However, it isn't of great importance.
-   `uuid` and `version` are already familiar to us. Both UUIDs in the manifest need to be different. You can generate them via a generator linked in [useful links](/meta/useful-links). As a reminder, you CANNOT use the same UUID TWICE.
-   `type` in `modules` needs to be set to `skin_pack`, of course.

## skins.json

This file is used to define textures and shortnames for skins. Most of the options are, however, hard-coded or unchangeable.

<CodeHeader>skin_packs/tutorial_skin_pack/skins.json</CodeHeader>

```json
{
    "geometry": "geometry.json",
    "serialize_name": "Tutorial Skin Pack",
    "localization_name": "tutorial",
    "skins": [
        {
            "localization_name": "tutorial_skin_1",
            "geometry": "geometry.humanoid.custom",
            "texture": "goggled_gecko_no_goggles.png",
            "type": "free"
        },
        {
            "localization_name": "tutorial_skin_2",
            "geometry": "geometry.humanoid.customSlim",
            "texture": "goggled_gecko.png",
            "type": "free"
        }
    ]
}
```

-   The `geometry` object must be the same as on the example code in every object. Mojang removed the ability to add custom geometries via skin packs, because the feature was abused.
-   `serialize_name` is for marketplace.
-   `localization_name` is a pack identifier. **Don't use in other skin packs** as it affects translations.
-   `skins` array, where you define your each skin. The skins will be displayed in the same order in minecraft as they are defined here.
    > -   `localization_name` is going to be used in the .lang file. Think of it as the skins identifier.
    > -   `geometry` you can use `geometry.humanoid.custom` and `geometry.humanoid.customSlim` here.
    > -   `texture` is the name of the image file, located in the main skin pack folder.
    > -   `type` is only accessible to marketplace partners, leave it as `free`, otherwise it will be locked.

## texts/en_US.lang

Finally, we'll define the names of the skin pack and every skin in the `.lang` file. Of course "en_US" can be replaced with any language.

<CodeHeader>skin_packs/tutorial_skin_pack/texts/en_US.lang</CodeHeader>

```lang
skinpack.tutorial=Tutorial Skin Pack

skin.tutorial.tutorial_skin_1=Skin 1
skin.tutorial.tutorial_skin_2=Skin 2
```

The first line defines the pack's name itself. It's done in this format:

`skinpack.[pack localization_name]=Actual Pack Name`

The other lines define the skins' names:

`skin.[pack localization_name].[skin localization_name]=Actual Skin Name`

Done! Now, when you open Character Creator, you'll see your skins available to be chosen!

## Troubleshooting

If you play on MC version lower than 1.18.30, you might experience a bug when "Equip" button is not showing. You need to download a special texture pack.

![](/assets/images/visuals/skin-packs/troubleshooting-1.png)

<Button link="/assets/packs/visuals/skin-packs/equip_button_fix.mcpack" download>
    Download Equip Button Fix
</Button>

![](/assets/images/visuals/skin-packs/troubleshooting-2.png)

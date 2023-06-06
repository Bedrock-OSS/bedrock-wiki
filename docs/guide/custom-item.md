---
title: 'Create a custom Item'
category: Guide
nav_order: 5
prefix: '5. '
mentions:
    - KaiFireborn
    - SirLich
    - cda94581
    - TheItsNameless
    - MedicalJewel105
    - ChibiMango
    - TheDoctor15
    - SmokeyStack
    - unickorn
    - Sprunkles317
    - ThomasOrs
    - davedavis
---

In Minecraft, we can create custom items, which can be dropped, traded, crafted, and otherwise used like a normal item. There is a lot of power in the system, including the ability to make food, fuel, and tools.

In this tutorial we are going to learn how to create a simple "ectoplasm" item, which we will later use as a loot-table drop for our ghost entity.

<br>
<img src="/assets/images/guide/custom_item/ectoplasm_view.png" width=150>
<br>
<br>

Conceptually, items are made up of two parts:

-   The visuals (texture, name)
-   The behaviors (how the item should behave)

First, we will learn how to create a new simple item & define its behaviors. In the next section we will assign a texture to this item, so you can see it in game.

:::warning
This guide requires experimental features toggled on.
:::

## Item Behavior

To make an item we will need a way to identify it and define how we want it to behave. To do this we will be making a file which tell Minecraft to apply certain behaviors to a specific item of our choice.

At the end of this section we will have fully defined the behavior of our item.

### Components

Different items behave differently; you can eat a porkchop, enchanted items glow & eggs can only stack to 16. These are all examples of how the item behaves.
We are able to define how our custom item will behave by using behavior components.

<Spoiler title="Example Components">
<CodeHeader>components/
```json
"minecraft:food":
"minecraft:foil": true,
"minecraft:max_stack_size": 16
```
</CodeHeader>
</Spoiler>

Components contain information which tells the game what our item should do. For example the component `"minecraft:foil"` determines whether the item should have an enchanted foil to it, so setting it to `true` will apply it.
All components have a `value` attached to it which we can edit to get the behaviour we want.

For our ectoplasm, we will set it to have a stack size of 16, similar to eggs. To do this we use the component `"minecraft:max_stack_size"` and set its value to `16`.

### Identifier

In order for the game to apply the correct components to the correct item, we need to be able to tell the game which item is ours. We do this by defining an identifier for our item.

An identifier is a name unique to this item. For a vanilla minecraft egg it's identifier is `minecraft:egg`. An identifier is made of two parts,

-   The namespace (`minecraft`)
-   The id (`egg`)

The namespace is unique to your addon and you will use it throughout the project. This is to reduce issues if someone adds two packs to your game which both add an ectoplasm item; the namespace reduces the chance of the identifier being the same.
The namespace that Minecraft use is `minecraft`. Your namespace should be unique to you, for example the authors initials or an abbreviation of the pack name. We will use the namespace `wiki` in our example; for more information on making a namespace check out our page [here](/concepts/namespaces).

The id is an informative shorthand name for your item. Here we will use `ectoplasm`.

Together our custom identifier becomes `wiki:ectoplasm`. Note that we use a colon, `:`, to spilt the namespace and id. When we want to reference our item we will use this identifier, for example using the `/give` command.

### Item File

Now that we have our components and identifier, we can now start defining our item. We define an item by creating an item definition file in our behavior pack. This is where all our information will go.

All item definitions go in `BP/items/`. The name of your file doesn't affect anything, but for ease of navigation it's recommend to name it after your id.
We will create a file `BP/items/ectoplasm.json`. Here is the the basic layout of the file:

<CodeHeader>BP/items/ectoplasm.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:item": {
		"description": {...},
		"components": {...}
	}
}
```

Most files in your pack will have 2 top level definitions, `"format_version"` and `"minecraft:<file_type>"`.
The format version defines which version of the Addon system Minecraft will use to read this file. For our item, we will be using `1.16.100` to allow us to use the experimental features. For more information on format version you can check [here](/guide/format-version).

The second definitions defines what kind of file this is. In our case, as this is an item definition, it is `minecraft:item`. Under this is where we will put all our information. This will always contain a `description` key.

Let us look closer at the `"description"`:

<CodeHeader>ectoplasm.json/minecraft:item/</CodeHeader>

```json
"description": {
	"identifier": "wiki:ectoplasm",
	"category": "Items"
},
```

The description key contains the `identifier` and any other information required. The `identifier` allows the file to know which item to apply the components to.
The `category` key defines which tab of the creative inventory the item would show up in. There are four tabs to choose from: `"Nature"`, `"Equipment"`, `"Construction"` and `"Items"`. If this key is not included, then the item will not show in the creative inventory, but you can still get the item by using `/give`.

Now we can actually define the behavior of our item, under `components`. Here we simply place any components we want our item to have.
This will be our `"minecraft:max_stack_size"` component. For other components you can use, check out our more in depth guide on Items [here](/items/items-16).

<CodeHeader>ectoplasm.json/minecraft:item/</CodeHeader>

```json
"components": {
	"minecraft:max_stack_size": 16
}
```

With that, we have now fully defined our item's behavior. This is what your file should currently look like.

<CodeHeader>BP/items/ectoplasm.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:item": {
		"description": {
			"identifier": "wiki:ectoplasm",
			"category": "Items"
		},
		"components": {
            "minecraft:max_stack_size": 16
		}
	}
}
```

If you open a world with your addon, your item should be in the correct menu but invisible and have a strange name.

This is because we haven't defined the visuals yet. However, you should see that it does stack as expected. In the next section, we will define the items texture and assign it to our item.

## Item Visuals

Now that we have an item that works, we want to add a texture and name to it.

Textures are stored in the resource pack under `RP/textures` as images. In order for Minecraft to know which texture to use where, we need to assign a shortname to it, so we can access it.

### Texture

To start we need a texture for our item. For our ectoplasm, we will be using this image.

![ectoplasm.png](https://raw.githubusercontent.com/Bedrock-OSS/wiki-addon/86b0380310d3d5748a43a4be1f93d4c59668e4bf/guide/guide_RP/textures/items/ectoplasm.png)

<BButton link="https://raw.githubusercontent.com/Bedrock-OSS/wiki-addon/86b0380310d3d5748a43a4be1f93d4c59668e4bf/guide/guide_RP/textures/items/ectoplasm.png">Download texture here</BButton>

All item textures are stored in `RP/texture/items/`. From here, you can create any subdirectories you wish.
It's best to name your texture image files with the items' _id_, in our case it will be `ectoplasm.png`.
It is recommended to have your images in `.png` format and be of size `16x16`, though Minecraft will accept other formats such as `.jpg` or `.tga`.

Your folder layout should look like this:

<FolderView
	:paths="[
		'RP/textures/items/ectoplasm.png'
	]"
/>

### Shortname

A shortname is essentially a name that is assigned to the folder path of the texture, so whenever we want to use a texture somewhere, we will use its shortname instead of its folder path.

All item shortnames are stored in one file called `item_texture.json` which is in `RP/textures`. This contains a list of shortnames and its assigned textures.

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
	"resource_pack_name": "Ghostly Guide",
	"texture_name": "atlas.items",
	"texture_data": {...}
}
```

Here we have 3 top level definitions, `texture_data` is where we will define our shortnames, the other two define the type of file this is.
The `resource_pack_name` is simply our resource pack's name and `texture_name` is what kind of texture file this is. Since this is for _items_, this will always be set to `atlas.items`.

Under `texture_data` will our list of item shortname definitions. An example definition looks like this:

<CodeHeader>RP/textures/item_texture.json/texture_data</CodeHeader>

```json
"wiki.ectoplasm": {
	"textures": "textures/items/ectoplasm"
}
```

Here `wiki.ectoplasm` is our shortname and under `textures` we have the path to our item. Notice that this is relative to the resource pack, and does not include the file extension. Your shortname should be short and unique. We recommend setting it as the namespace and id for the item we are assigning it to.

Now whenever we want to refer our image, we will use the shortname `wiki.ectoplasm`.

### Icon

To finally apply our texture to our item, we add the `minecraft:icon` component to our item definition and set its value to our shortname.

<CodeHeader>ectoplasm.json/minecraft:item/</CodeHeader>

```json
"components":{
	"minecraft:max_stack_size": 16,
	"minecraft:icon" : {
		"texture": "wiki.ectoplasm"
	}
}
```

Now your texture should appear on your item.

### Item Name

The last thing to add is a nice name to your item. Currently it will look like `item.wiki:ectoplasm`. This is the translation key for your item name, and it is used to allow for [localization](/concepts/text-and-translations). To set it, we just have to define it in our language files.

We already created these files when making our `RP` and `BP`, so we just need to add to them.

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```
item.wiki:ectoplasm=Ectoplasm
```

Now when you enter your world, your item should have a name.

## Overview

Now your first custom item, Ectoplasm, is complete! If everything has been done correctly, the item should now be obtainable through the `/give` command in-game, as well as appearing in your creative inventory.

Your folder structure should look like this:

<FolderView :paths="[
	'RP/textures/item_texture.json',
	'RP/textures/items/ectoplasm.png',
	'RP/texts/en_US.lang',
	'RP/texts/languages.json',
	'RP/manifest.json',
	'RP/pack_icon.png',
	'BP/items/ectoplasm.json',
	'BP/texts/en_US.lang',
	'BP/texts/languages.json',
	'BP/manifest.json',
	'BP/pack_icon.png',
]"></FolderView>

<Spoiler title="Full ectoplasm.json">
<CodeHeader>BP/items/ectoplasm.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:item": {
		"description": {
			"identifier": "wiki:ectoplasm",
			"category": "Items"
		},
		"components": {
			"minecraft:max_stack_size": 16,
			"minecraft:icon": {
				"texture": "wiki.ectoplasm"
			}
		}
	}
}
```

</Spoiler>

<Spoiler title="Full item_texture.json">
<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
	"resource_pack_name": "Ghostly Guide",
	"texture_name": "atlas.items",
	"texture_data": {
		"wiki.ectoplasm": {
			"textures": "textures/items/ectoplasm"
		}
	}
}
```

</Spoiler>

If you're having some trouble, check the [Troubleshooting page](/items/troubleshooting-items). If that doesn't help, compare your results with the [example files](https://github.com/Bedrock-OSS/wiki-addon/tree/main/guide).

## Your progress so far

<Checklist>

-   [x] Setup your pack
-   [x] Create a custom item
-   [x] How to format the behavior and resource files for an item
-   [x] What components are and how to use them
-   [x] How to set an items texture
-   [ ] Create a custom entity
-   [ ] Create the entity's loot, spawn rules, and a custom recipe

</Checklist>

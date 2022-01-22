---
title: 'Create a custom Item'
category: Guide
nav_order: 5
prefix: '5. '
---

This section will walk you through the creation of a simple custom item, the ectoplasm, for our custom entity, the Ghost, to drop.

<br>
<img src="/assets/images/guide/custom_item/ectoplasm_view.png" width=150>
<br>
<br>

Items consist of a BP file that defines how the item would function/behave.

:::warning
This guide requires expirimental features toggled on.
:::

## Behavior code

Let's start by defining the item's behaviors in the BP. Create a folder called `items` in your BP directory, then create a file called `ectoplasm.json` inside.

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
			"minecraft:icon": {
                            "texture": "wiki.ectoplasm"
                        },
                        "minecraft:max_stack_size": 16
		}
	}
}
```

Let's break up the code first:

-   `"format_version"` defines which version of the Addon system Minecraft will use to read this file. For this guide, we will be creating a "1.16.100" item, which refers to the current experimental release of items. To learn more about format versions and how they effect files, you can learn so [here](guide/format-version).
-   `"minecraft:item"` contains all of the item's server-side data:
    -   `"identifier"` in `"description"` is a name unique to this item. It should contain no upper-case letters, and `_` should be used instead of spaces. An identifier consists of two parts: a _namespace_ (before the `:`) and the _id_ (after the `:`). The _namespace_ should be the same in all files of the same add-on. Usually, either the author's initials or an abbreviation of the pack name is used as one. In our case, `wiki` is a short enough word to be used as well. The _id_ is the item's own name. All vanilla items use `minecraft` as their namespace, but one CANNOT use that or `minecon` as the namespace in an add-on.
        The most usual way to encounter an identifier is using the `/give` command in-game: for example, to acquire our Ectoplasm, you'd have to type `/give @s wiki:ectoplasm`. Learn more about namespaces [here](https://wiki.bedrock.dev/concepts/namespaces.html#top).
    -    `"category"` in `"description"` defines in which tab of the creative inventory the item would show up. There are four tabs to choose from: `"Nature"`, `"Equipment"`, `"Construction"` and `"Items"`.
    -   `"components"` is where all the data about the item's behavior is stored. There are a lot of different components for items, blocks, and entities each, but since Ectoplasm is very simple, we only need two, which is:
        -   `"minecraft:max_stack_size"` takes an integer (`16` in this case) for its value, but some other components might take JSON objects (`{}`). You can experiment by setting the max stack size value anywhere between 1 and 64. For example, a Diamond Sword would have it as 1, an Ender Pearl as 16.
        -   `"minecraft:icon"`, which, of course, references the item's texture; we'll get to that in just a moment. The component's value `"wiki.ectoplasm"` is the item texture's _shortname_, which brings us to our next section.

For more information on components, you can always refer to the documentation on [bedrock.dev/r/Item](https://bedrock.dev/r/Item).

If you were to open a world with the add-on now, the item would already be in-game, but it would be invisible since we haven't add a texture yet: let's do it now.

## Item texture and its shortname

### Texture

Navigate to `RP/textures/items/`, creating subdirectories as needed: this is where your item textures will be stored. It's best to name your texture image files with the items' _id_, which is why the texture of Ectoplasm is called `ectoplasm.png`.

`RP/textures/items/ectoplasm.png`

![ectoplasm.png](https://raw.githubusercontent.com/Bedrock-OSS/wiki-addon/86b0380310d3d5748a43a4be1f93d4c59668e4bf/guide/guide_RP/textures/items/ectoplasm.png)

<BButton link="https://raw.githubusercontent.com/Bedrock-OSS/wiki-addon/86b0380310d3d5748a43a4be1f93d4c59668e4bf/guide/guide_RP/textures/items/ectoplasm.png">Download texture here</BButton>

### Shortnames

Finally, we need to tell the game that an exact texture file belongs to a specific custom item. In Ectoplasm's RP file, we already defined its icon as `"wiki.ectoplasm"`. Now we have to establish a connection between this _shortname_ and the texture file `ectoplasm.png`.
This is done through the `item_texture.json` file, located in `RP/textures/`. Its base code is this:

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
	"resource_pack_name": "Ghostly Guide",
	"texture_name": "atlas.items",
	"texture_data": {}
}
```

-   `"resource_pack_name"` is quite self-explanatory: it's the RP name string.
-	`"texture_name"` is the type of textures this file holds. Since this is for `item_texture.json` we set it to `"atlas.items"`.
-   `"texture_data"` is an object where each item shortname is defined - for Ectoplasm, we need to put this code snippet inside of it:

<CodeHeader>RP/textures/item_texture.json/texture_data</CodeHeader>

```json
"wiki.ectoplasm": {
    "textures": "textures/items/ectoplasm"
}
```

This snippet tells the game that by typing `"wiki.ectoplasm"` in our add-on, you mean the _texture_ located in `textures/items/` and called `ectoplasm`. You do not need the `.png` extension here.

After you add the snippet in, `item_texture.json` should look like this:

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

## Final steps

The last thing to do is to give your item a name to show up in the toolbar. You should already have the text file `RP/texts/en_US.lang`. Add this line to it:

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```
item.wiki:ectoplasm.name=Ectoplasm
```

## Done!

Now your first custom item, Ectoplasm, is complete! If everything has been done correctly, the item should now be obtainable through the `/give` command in-game, as well as appearing in your creative inventory.
If you're having some trouble, check the [Troubleshooting page](/items/troubleshooting-items). If that doesn't help, compare your results with the [example files](https://github.com/Bedrock-OSS/wiki-addon/tree/main/guide).

## What you have learned

:::tip What you have learned:

-	How to format the behavior and resource files for an item
-	What components are and how to use them
-	How to set an items texture
:::

## Your progress so far

**What you've done:**

<Checklist>

-   [x] Setup your pack
-   [x] Create a custom item
-   [ ] Create a custom entity
-   [ ] Create the entity's loot, spawn rules, and a custom recipe

</Checklist>

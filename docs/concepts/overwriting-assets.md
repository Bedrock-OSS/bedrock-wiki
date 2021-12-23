---
title: Overwriting Assets
tags:
    - intermediate
mention:
    - SirLich
---

## Addon Layering

The addon system is built layer by layer, where each pack is added _on top_ of the ones before it. Even if you only have a single pack added, there is an implicit _vanilla_ pack which is always added. When you add custom content, this content will have full access to all vanilla files.

### Accessing Vanilla Files

This layered structure is very useful, because it allows us to access the files inside of vanilla, without copy/pasting them into our addon. For example you can access `blocks/stone.png` without moving it into your addon! Just set it as the texture for your custom entity - it will work out of the box. This is particularly useful for things like models, or render controllers, or sounds.

If the vanilla assets change, for example if [JAPPA](https://twitter.com/JasperBoerstra?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) updates the stone texture, your addon will also receive the update, since you are relying on the actual dynamic, vanilla resources.

You should try to use this system of layering as often as you can. If you don't *need* to copy/paste something into your addon, don't. 

:::warning
It is never OK to make an addon inside of a copy of the vanilla resource/behavior pack. This will make the download for your addon incredibly huge, and will reduce performance. Always begin with a blank addon, then copy/paste the files you want to overwrite. 
:::

## Overwriting Assets

Pack Layering also allows us to overwrite vanilla assets, by _overwriting_ them with a file that shares the same path, or the same identifier. Our new file will replace the one being used in vanilla, allowing us to change textures, sounds, entity behavior, etc.

:::warning
Different resources have different methods of overwriting, so be careful to use the right method for each type!
:::

### Overwriting by Path

Assets that are referenced by _path_, and do _not have an identifier_ can be overwritten by simply placing a new asset into the same path. The following can be overwritten in this way:

-   Functions
-   Loot tables
-   Textures
-   Sounds
-   Trade Tables

When you overwrite these files, the overwriting is absolute: The new asset will fully replace the old asset.

:::tip
**Example**: If you would like to replace the redstone ore texture, simply place a new file at `textures/blocks/redstone_ore.png`.
:::

### Overwriting by Identifier

Many assets are defined not by their name, but by their identifier! To overwrite these assets, simply create a new file that shares the same identifier, regardless of file-path. The following can be overwritten in this way:

-   BP Entities
-   RP Entities
-   Animations
-   Models
-   Animation Controllers
-   Spawn Rules
-   Recipes
-   Particles
-   Render Controllers

When you overwrite these files, the overwriting is absolute: The new asset will fully replace the old asset.

:::tip
**Example**: If you would like to make Ghasts have higher health, simply create a new BP entity with the `minecraft:ghast` identifier, and all the behaviors required to make the ghast function.

Remember, entity files do not merge together, so you will first need to copy/paste the entire BP Ghast file, and _then_ edit the health. Simply creating a `minecraft:ghast` with a high health component inside will not work.
:::

### Overwriting via Reference File

Many assets can also be registered into some kind of "registration system" file. These files are interesting, because unlike the other asset types, they are _merged together_ instead of _overwritten_. This means that when you define these files, you do not need to copy from the vanilla resources. You can simply start with a blank file, and then overwrite the specific definitions you want.

The following files work in this way:

-   All UI files
-   [All language files](/concepts/text-and-translations)
-   `item_textures.json`
-   `flipbook_textures.json`
-   `terrain_textures.json`
-   `sounds.json`
-   `music_definitions.json`
-   `sound_definitions.json`

:::tip
**Example:** Lets say you want to override the `sugar` texture, using the reference files. You can do so by creating a new `item_textures.json`, with the following contents:

<CodeHeader></CodeHeader>

```json
{
	"resource_pack_name": "vanilla",
	"texture_data": {
		"sugar": {
			"textures": "textures/path/to/my/sugar"
		}
	}
}
```

This _definition_ will be merged with the vanilla `item_textures.json`, and will override the short-name `sugar`. When the vanilla item accesses this short-name, it will get a reference to your custom texture path, instead of the actual texture path to sugar.
:::

## Overwriting Dangers

Since addons mostly _overwrite_ each other rather than _merge_, it can be very difficult to get two incompatible addons to work together. For example, if you try to combine two addons that overwrite the creeper behavior (for example, one makes them very fast, and one makes them very large) the addon you have applied _second_ will overwrite the first.

This is mostly a problem with `player.json` (in either the RP or the BP), since this file is often used for gameplay purposes.

## Things that Cannot be Overwritten

Not everything can be overwritten, the following is a list of things that cannot be overwritten using any of the described methods:

-   Vanilla items (Not all)
-   Vanilla blocks

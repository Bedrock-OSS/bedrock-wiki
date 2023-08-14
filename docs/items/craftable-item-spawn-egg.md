---
title: Craftable Item Spawn Eggs
category: Tutorials
tags: 
    - guide
mentions:
    - SirLich
    - solvedDev
    - MedicalJewel105
    - aexer0e
    - PepijnMC
    - ThomasOrs
---

In this tutorial, we are making a custom item that makes the spawn egg craftable! It means we can now obtain the spawn egg in survival, just follow the steps below. We will use the pig as an example.

:::tip ADDITIONAL TIP
This tutorial is also applicable on custom entities, Have fun.
:::

::: warning EXPERIMENTAL
This tutorial requires `Holiday Creator Features` in order to work.
:::

# BP: Item Spawn Egg

Making a craftable spawn eggs are easy. First, we will begin to make our custom spawn egg like this:

<CodeHeader>BP/items/pig_spawn_egg.json</CodeHeader>

```json
{
  "format_version": "1.16.100",
  "minecraft:item": {
    "description": {
      "identifier": "wiki:pig_spawn_egg",
      "category": "none" // Setting this to "none" will make the item to be obtained only by crafting.
    },
    "components": {
      "minecraft:icon": {
        "texture": "wiki_pig_spawn_egg" // Must be the same name in item_texture.json.
      },
      "minecraft:entity_placer": {
        "entity": "minecraft:pig" // an identifier of the mob to spawn.
      },
      "minecraft:max_stack_size": 64 // Makes the spawn egg stackable.
    }
  }
}
```

We finished the first step, lets proceed to the second step. We will make a crafting recipe for our item that looks like this:

<CodeHeader>BP/recipes/pig_spawn_egg.json</CodeHeader>

```json
{
	"format_version": "1.12",
	"minecraft:recipe_shaped": { // Setting this to "minecraft:recipe_shaped" will result in shaped recipe.
		"description": {
			"identifier": "wiki:pig_spawn_egg"
		},
		"tags": [
			"crafting_table" // A tag that tells where the recipe should made.
		],
		"key": {
			"#": {
				"item": "minecraft:porkchop"
			},
			"X": {
				"item": "minecraft:egg" // A key ingredients for the recipe to complete.
			}
		},
		"pattern": [
			" # ",
			"#X#", // A crafting pattern for the ingredients.
			" # "
		],
		"result": {
			"item": "wiki:pig_spawn_egg", // An item result when the recipe is completed.
			"count": 1
		}
	}
}
```

After this, this should make our item craftable.

# RP: Item Texture

Now, we will move the texture for our spawn egg in `RP/textures/items`. If you don't have a texture to use, you can download the texture below.

![egg_pig](https://github.com/Bedrock-OSS/bedrock-wiki/assets/124508167/d9e1d5cc-b648-4464-a092-de19a247ccdf)

<BButton
link="![egg_pig](https://github.com/Bedrock-OSS/bedrock-wiki/assets/124508167/434d03c7-777a-45f3-98dd-94311cc7484b)
">Download Texture</BButton>

Next, we will register our texture in `RP/textures/item_texture.json`.

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
	"resource_pack_name": "Craftable Spawn Egg",
	"texture_name": "atlas.items",
	"texture_data": {
		"wiki_pig_spawn_egg": {
			"textures": "textures/items/egg_pig"
		}
	}
}
```

We're almost done, just one more step. We will translate the item name correctly in `en_US.lang` file.

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```json
item.wiki:pig_spawn_egg=Spawn Pig
```
# Result

Congratulations! You have made a craftable spawn egg for entity(Example Mob:Pig). If everything went well, then it would show up in game looked like this.

![IMG_20230814_104225](https://github.com/Bedrock-OSS/bedrock-wiki/assets/124508167/9395f1be-4d45-4f03-bd18-d56dfacafb3f)

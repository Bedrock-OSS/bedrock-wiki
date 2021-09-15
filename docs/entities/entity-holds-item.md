---
title: 'Entity Holds Item'
tags:
	- intermediate
mention:
    - pieterdefour
---

::: tip
This tutorial assumes you have a basic understanding of entities, loot tables, and Blockbench.
:::

In this tutorial, you will learn to have an entity spawn with an item in its hand. I'll be using a custom `mandalorian_armorer' entity and a custom `hammer` item for the examples.

## Basic Usage

This section covers the main features of entities for them to spawn with an item in their hand.

### Setting up the model in Blockbench

First of all, you'll need to have a model in Blockbench that has a map called 'rightArm'. Within this map, there needs to be a submap called 'rightItem'. Position the pivot point of this submap, so it sits in the place you want the entity to hold the item at.

![](/assets/images/tutorials/entity-holds-item/blockbench.png)

### Setting up behavior pack-side entity

Now you'll need to add a `minecraft:equipment` component in the component list for your entity and add a loot table with the desired item.

In our example it will look like this:

<CodeHeader>BP/entity/mandolorian.json</CodeHeader>

```json
"components": {
    "minecraft:equipment": {
        "table": "loot_tables/entities/gear/mandolorian.json"
    }
}
```

### Setting up the loot table

Finally, add the loot table for the entity. It needs to be in `loot_tables/entities/<your_loot_table_name>.json` in the behavior pack. In our case, it's called `mandolorian.json`.

`Warning:` This isn't the same loot table as what it drops on death. So make sure it has a different name.
To have the entity always spawn with the same item, add the following loot table:

<CodeHeader>BP/loot_tables/entities/gear/mandolorian.json</CodeHeader>

```json
{
	"pools": [
		{
			"rolls": 1,
			"entries": [
				{
					"type": "item",
					"name": "dd:hammer", // Custom item named 'hammer' with the identifier 'dd'.
					"weight": 1
				}
			]
		}
	]
}
```

If everything went well, you'd have something looking like this:

![](/assets/images/tutorials/entity-holds-item/finished_result.png)

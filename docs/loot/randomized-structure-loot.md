---
title: Randomized Structure Loot
category: Tutorials
mentions:
    - MedicalJewel105
    - SirLich
    - SmokeyStack
    - Ciosciaa
    - rebrainertv
tags:
    - easy
---

Adding loot tables to containers in structure is easy, you need to have a PC and your choice of either [NBT Studio](https://github.com/tryashtar/nbt-studio/releases/download/v1.14.1/NbtStudio.exe) (executable) or [Loot Tabler](https://mcbe-essentials.github.io/structure-editor/loot-tabler) (browser application).

## Setup
### Creating the Loot Table

To start, create the directory `BP/loot_tables/chests` and create your loot table file here.

You can learn how to make loot tables in [Beginners Guide](/guide/loot-table)

<CodeHeader>BP/loot_tables/chests/my_structure_loot.json</CodeHeader>

```json
{
	"pools": [
		{
			"rolls": {
				"min": 8,
				"max": 10
			},
			"entries": [
				{
					"type": "item",
					"name": "minecraft:glass_bottle",
					"functions": [
						{
							"function": "set_count",
							"count": {
								"min": 4,
								"max": 6
							}
						}
					],
					"weight": 1
				},
				{
					"type": "item",
					"name": "minecraft:potion",
					"functions": [
						{
							"function": "set_count",
							"count": {
								"min": 4,
								"max": 6
							}
						}
					],
					"weight": 1
				}
			]
		}
	]
}
```

### Exporting Structure

Once you have created your loot table, export your structure into `BP/structures`. Then follow the steps for either NBT Studio or Loot Tabler

![](/assets/images/tutorials/randomised-structure-loot/export_structure.png)

## NBT Studio (Executable)
### Software Preparation

Download and launch [NBT Studio](https://github.com/tryashtar/nbt-studio/releases/download/v1.14.1/NbtStudio.exe)

### Adding the Loot Table

Launch NBT Studio and open file `(Ctrl + O)`

![](/assets/images/tutorials/randomised-structure-loot/open_file.png)

Find your container (Ctrl + F)

![](/assets/images/tutorials/randomised-structure-loot/find_container.png)

Navigate to your container, `block_position_data` > `block_entity_data`. Add a string tag

![](/assets/images/tutorials/randomised-structure-loot/add_string_tag1.png)

Add `LootTable` and the file path to your loot table

![](/assets/images/tutorials/randomised-structure-loot/add_string_tag2.png)

Save changes (Ctrl + S)

## Loot Tabler (Browser Application)
### Adding the Loot Table

Open the website and click "Upload". Choose your structure file.

![](/assets/images/tutorials/randomised-structure-loot/LootTable-step1.png)

Find your container in the containers list, making use of the information displayed under "Container Options"

![](/assets/images/tutorials/randomised-structure-loot/LootTable-step2.png)

Under "Loot Table", enter the path to your loot table. Set "Loot Table Seed" to blank or `0` if you want the loot to generate randomly. If you want the loot table to generate consistently, enter a specific value.

![](/assets/images/tutorials/randomised-structure-loot/LootTable-step3.png)

Download your structure file and place it in `BP/structures`.

## Testing

Load your structure and open the container

![](/assets/images/tutorials/randomised-structure-loot/test.png)

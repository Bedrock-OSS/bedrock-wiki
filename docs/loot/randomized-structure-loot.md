---
title: Randomized Structure Loot
category: Tutorials
mention:
- MedicalJewel105
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

![LootTable-step1](https://user-images.githubusercontent.com/67883592/167201252-ba0927fc-31f1-470f-b8c6-dfd11eb6b2e5.png)

Find your container in the containers list, making use of the information displayed under "Container Options"

![image](https://user-images.githubusercontent.com/67883592/167201650-cb7a9907-a6bc-4604-8f09-d66cae65c8de.png)

Under "Loot Table", enter the path to your loot table. Set "Loot Table Seed" to blank or `0` if you want the loot to generate randomly. If you want the loot table to generate consistently, enter a specific value.

![LootTable-step3](https://user-images.githubusercontent.com/67883592/167202148-cfa7bf0d-0c62-47d6-bfcf-4ada8d14655b.png)

Download your structure file and place it in `BP/structures`.

## Testing

Load your structure and open the container

![](/assets/images/tutorials/randomised-structure-loot/test.png)

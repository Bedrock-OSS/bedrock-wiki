```
behavior_pack/
├── blocks/
│   └── yangi_blok.json
├── loot_tables/
│   └── blocks/
│       └── yangi_blok.json
├── scripts/
│   └── main.js  (agar JavaScript ishlatilsa)
└── manifest.json
```

---

1️⃣ Blok fayli (blocks/yangi_blok.json)

```json
{
  "format_version": "1.16.0",
  "minecraft:block": {
    "description": {
      "identifier": "sizningmodingiz:yangi_blok",
      "is_experimental": false,
      "register_to_creative_menu": true
    },
    "components": {
      "minecraft:destroy_time": 2.0,
      "minecraft:explosion_resistance": 6.0,
      "minecraft:map_color": "#7B8B6B",
      "minecraft:block_light_emission": 0,
      "minecraft:block_light_absorption": 0,
      "minecraft:material_instances": {
        "*": {
          "texture": "yangi_blok",
          "render_method": "alpha_test"
        }
      },
      "minecraft:creative_category": {
        "category": "construction"
      },
      "minecraft:loot": "loot_tables/blocks/yangi_blok.json",
      "minecraft:on_player_destroy": {
        "condition": "query.get_equipped_item_name == 'wooden_pickaxe'",
        "event": "give_random_ore"
      }
    },
    "events": {
      "give_random_ore": {
        "run_command": {
          "command": [
            "function sizningmodingiz:random_ore"
          ]
        }
      }
    }
  }
}
```

---

2️⃣ Loot table (loot_tables/blocks/yangi_blok.json)

```json
{
  "pools": [
    {
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "minecraft:stone",
          "weight": 1
        }
      ]
    }
  ]
}
```

---

3️⃣ Funktsiya (tasodifiy ruda) — functions/random_ore.mcfunction

Fayl joyi: behavior_pack/functions/sizningmodingiz/random_ore.mcfunction

```mcfunction
# Tasodifiy ruda berish
scoreboard players random @s ore_chance 1 10

execute if score @s ore_chance matches 1 run give @s minecraft:iron_ore 1
execute if score @s ore_chance matches 2 run give @s minecraft:gold_ore 1
execute if score @s ore_chance matches 3 run give @s minecraft:coal_ore 1
execute if score @s ore_chance matches 4 run give @s minecraft:redstone_ore 1
execute if score @s ore_chance matches 5 run give @s minecraft:lapis_ore 1
execute if score @s ore_chance matches 6 run give @s minecraft:copper_ore 1
execute if score @s ore_chance matches 7 run give @s minecraft:emerald_ore 1
execute if score @s ore_chance matches 8 run give @s minecraft:diamond_ore 1
execute if score @s ore_chance matches 9 run give @s minecraft:nether_gold_ore 1
execute if score @s ore_chance matches 10 run give @s minecraft:ancient_debris 1
```

---

4️⃣ Manifest (manifest.json)

```json
{
  "format_version": 2,
  "header": {
    "name": "Yangi Blok Addon",
    "description": "Taxta ketmon bilan sindirsangiz ruda beradi",
    "uuid": "your-uuid-here",
    "version": [1, 0, 0],
    "min_engine_version": [1, 26, 0]
  },
  "modules": [
    {
      "type": "data",
      "uuid": "your-uuid-here-2",
      "version": [1, 0, 0]
    }
  ]
}
```

---

5️⃣ Texture (textures/blocks/yangi_blok.png)

· O‘zingiz xohlagan rangdagi 16x16 PNG rasm yarating.
· textures/terrain_texture.json ga qo‘shish kerak:

```json
{
  "texture_data": {
    "yangi_blok": {
      "textures": "textures/blocks/yangi_blok"
    }
  }
}
```
Although custom blocks are unable to make use of vanilla [block shapes](/blocks/block-shapes), we can create our own models which follow a similar format to entity models.
This tutorial will walk you through the process of creating a custom block model for a "paper bag" using [Blockbench](https://blockbench.net).
You should learn the main features of Minecraft geometry tailored towards creating custom blocks from this tutorial.

**NOTE:** Custom block models must be within the [model size limits](/blocks/block-components#geometry).

## Model Setup

Open Blockbench and create a new `Bedrock Block` project.

![New project panel with Bedrock Block selected](new_project.png)

Now you can give your model an identifier! Your file name can be decided here, or changed later.

The UV mode and texture size should remain unchanged.

:::danger NAMESPACES
Model identifiers are **not namespaced and cannot contain colons**.
Colons were previously used for model inheritance and are invalid in modern geometry formats.
:::

![](project_settings.png)

## Adding Cubes

Despite not necessarily being perfect cube shapes, elements in your model are called **cubes**.
All cubes must be contained within **bones**, which act as groups.

First, let's create a root bone for our model from the outliner by clicking on `Add Group`.
Bones can be renamed by pressing `F2`.

![](root_bone.png)

The "paper bag" model will need two cubes: one for the handle, and one for the main bag.
These can be added by selecting your root bone and clicking `Add Cube`.

<WikiImage src="new_cube.png" alt width="600" />

Cubes can be moved, resized and rotated from the top toolbar.
Below are the two cubes my "paper_bag" model will use.

<WikiImage src="paper_bag_cubes.png" alt="" width="300" />

## Removing Faces

Some of the faces of our cubes might not need to be visible.
In my example, the top face of the paper_bag should be removed so that you can see inside.

To remove a face, click on it in the preview and remove its UV.

<WikiImage src="paper_bag_top_removed.png" alt="" width="600" />

Additionally, only the north and south faces of the handle should be visible.
You can select multiple faces by holding Ctrl while clicking on the face names in the UV panel.

<WikiImage src="paper_bag_handle_faces_removed.png" alt="" width="600" />

## Previewing Textures

:::tip
Textures can be created in Blockbench by clicking `Create Texture` and selecting `Blank`.
:::

The "paper_bag" model has multiple pre-made textures, listed below:

<div style="display: grid; grid-template-columns: repeat(auto-fill, 256px); column-gap: 1em;">

<ExampleFile path="RP/textures/wiki/blocks/paper_bag.png" />
<ExampleFile path="RP/textures/wiki/blocks/paper_bag_bottom_fold.png" />
<ExampleFile path="RP/textures/wiki/blocks/paper_bag_side_gusset.png" />

</div>

These can be imported into Blockbench and then dragged onto each appropriate block face, although they likely won't look quite right...

<WikiImage src="preview_textures_applied.png" alt="" width="300" />

## Rearranging UVs

To get textures into the right positions, you may need to reposition/resize your faces' UV mapping.
This can be done by selecting the affected face and using the UV panel.

<WikiImage src="paper_bag_handle_uv.png" alt="" width="300" />

<WikiImage src="paper_bag_final.png" alt="" width="300" />

## Changing Material Instances

Applying custom material instance names can be used to easily define how certain faces are rendered.

They can be edited by right-clicking on a cube and opening `Edit Material Instances`

![](select_edit_material_instances.png)

For the "paper_bag" model, the east and west faces should have their own texture.
We can indicate this by giving them a material instance.

![](edit_material_instances.png)

## Applying Geometry & Textures

Once exported from `File > Export > Export Bedrock Geometry` into your `RP/models/blocks` folder, you can reference a model in your block JSON.

Then, textures can be applied by material instances through their `RP/textures/terrain_texture.json` shortname.

:::warning BLOCKS.JSON
Adding [`minecraft:geometry`](/blocks/block-components#geometry) to your block will cause the game to ignore texture definitions in `RP/blocks.json`.

If you have textures for your block defined in that file, make sure you move them to [`minecraft:material_instances`](/blocks/block-components#material-instances) for them to appear.
:::

<ExampleFile path="BP/blocks/paper_bag.json" />

## Result

You now know how to make a custom block that uses your own custom model!

## What's Next?

<CardGrid>
<Card
    title="Create Culling Rules"
    link="/blocks/block-culling"
    image="/assets/images/icons/crafting_table.png"
>

Creating culling rules for your model can aid performance by telling the game to hide parts of your model that are being unnecessarily rendered.

</Card>
<Card
    title="Conditional Bones"
    link="/blocks/block-components#bone-visibility"
    image="/assets/images/icons/levers.png"
>

Use the `bone_visibility` parameter of the [geometry](/blocks/block-components#geometry) component to render different model bones based on your block's current permutation.

</Card>
<Card
    title="Vanilla Models"
    link="/blocks/vanilla-block-models"
    image="/assets/images/icons/diamond_ore.png"
>

Use a vanilla model rather than making your own for simple blocks!
These models are especially useful when making full blocks and plants for your add-on.

</Card>
</CardGrid>

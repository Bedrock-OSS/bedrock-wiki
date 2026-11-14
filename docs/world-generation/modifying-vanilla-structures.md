---
title: Modifying Vanilla Structures
description: How to modify vanilla structures such as the Trail Ruins.
category: Tutorials
license: true
mentions:
    - Supernova3695
---

::: tip FORMAT VERSION 1.21.20
This tutorial assumes a understanding of jigsaw structures and their related files work.
:::
:::warning Only Trail Ruins and Abandoned Camps can be fully modified. Trial Chambers have limited customization due to files not being public and using some non-data-driven features.  :::

## Introduction
With the introduction of the jigsaw system in Preview 1.21.50.26 and its stabilization in 1.21.120 we have been able to modify Trail Ruins, Abandoned Camps, and to a more limited extent, Trial Chambers. Trail Ruins and Abandoned Camps have publicly accessible code however Trial Chambers do not. You can also add new structures to their structure sets, entirely replace the structure, or just outright remove it short of it's identifier which will still exist.

## Modifying Trail Ruins
You are able to modify the vanilla structure pieces that make up the Trail Ruins. However the game stores the vanilla structure files as NBT data making them not editable by us. But you can replace them by putting structure files in their exact path. You can also add new pieces to them. All you need to do is set the pieces up.

### Adding pieces
To add pieces is simple. Find the generating jigsaw that places pieces of the structure that you want your new piece to be a part of (or replace) and then find the target name field of that jigsaw block and set the name field of the jigsaw block in your structure to be that field. For example if you were adding a new large room set the name field to `minecraft:building_anchor`. Or if you wanted a new road you would have two jigsaw blocks with all 3 fields filled. You would set the first jigsaw block to have name as `minecraft:road_out`, target pool as `minecraft:trail_ruins/roads`, and target name as `minecraft:road_in`. The other jigsaw would have name as `minecraft:road_in`, target pool as `minecraft:trail_ruins/roads`, and target name as `minecraft:road_out`. Then after that you would save your new structure piece.

After you have saved the structure piece upload it to the trail_ruins subfolder of the structures folder and then from there nest it in other subfolders. In vanilla the folder is setup as trail_ruins/buildings, trail_ruins/decor, trail_ruins/roads, and trail_ruins/tower. Next is adding it to the template pool.

#### Template Pool
After the piece or pieces are in their folders you can add them to the structure using it's template pools. In order to do this you need to download the vanilla trail ruins files which can be found at the bottom of this page. Then you can find the template pool which has the identifier that the jigsaw was looking for and then add your element to the list. You can also remove other elements to prevent them from spawning. 

For example, to add a new road piece would you format it like this in side of the `minecraft:trail_ruins/roads` folder: 
<CodeHeader breadcrumbs="minecraft:template_pool/elements" />

```json
{
    "element": {
        "element_type": "minecraft:single_pool_element",
        "location": "trail_ruins/roads/road_section_5", //or whatever your piece is named. The biggest numbered one is 4 so following good name convention, your piece would be 5
        "processors": "minecraft:trail_ruins_roads_archaeology"
    },
    "weight": 1
},
```

### Replacing pieces
In order to replace pieces you can go and edit the template pools for the Trail Ruins and remove the piece you want to replace. You can then rebuild the piece how you like and add the vanilla jigsaw block settings to that piece and add it to the structure to make it generate. Do be advised that depending on the size of the piece it may not generate due to the space needed for it to spawn not being present where that piece is placed in the structure.

### Editing Processors
Editing the processor is simple. Just take the file and add more processors to it that you would like. You can also empty the `"processors": []` array and no changes will be made to structures with that piece applied even if you have modified nothing else in the structure. 

### Other files
The structure set and configuration file are both editable however the changes between editing them and editing other structures in minor. You can blank the `"structures": []` array in the structure set and the trail ruins will never spawn again. You can also increase the `max_depth` in the config file and the structure will spawn larger. 

## File Downloads

Download the vanilla jigsaw structure files for the trail ruins and trial chambers.
<Button
    download="Vanilla Jigsaws.mcaddon"
    link="/vanilla_jigsaws.zip"
    color="green"
    style="margin-right: 0.5em"
>
    Download as MCADDON
</Button>

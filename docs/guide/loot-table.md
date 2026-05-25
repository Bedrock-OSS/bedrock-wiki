---
title: Adding Loot Tables, Spawn Rules & Crafting Recipes
category: Guide
description: How to add your first Loot Table, Spawn Rules and Crafting Recipe
nav_order: 8
prefix: "8. "
mentions:
    - KaiFireborn
    - SirLich
    - sermah
    - cda94581
    - Ultr4Anubis
    - TheItsNameless
    - Ciosciaa
    - MedicalJewel105
    - ChibiMango
    - fraysdev
    - QuazChick
---

Next, we'll enhance the custom Ghost entity by adding some more basic mechanics to it:

## Loot Tables

First, we'll make the ghost drop Ectoplasm upon death: create the following file:

<ExampleFile path="BP/loot_tables/wiki/entities/ghost.json" />

-   Loot tables consist of `pools`.
    Each pool defines a different set of loot that will be dropped.
    A pool consists of 3 parts, `rolls`, `entries` and `conditions`.
    The `conditions` are optional and won't be covered in this guide.

-   The `rolls` section defines how many times a random entry will be chosen from the following `entries` object.

-   The `entries` part defines the items from which the loot table can choose.
    Each roll a new item will be chosen.

-   `type` defines what will be chosen.
    You can set it to `item` or `loot_table` to either chose an item or an different loot table.

-   `name` defines the identifier of the item (with its namespace) that will be selected.

-   `weight` is optional and defines how likely it is, that this item will be selected.
    If there is more than one item in the `entries` section, the `weight` attribute can be used to make the probability of one item more or less likely.
    If it isn't set, it defaults to 1.

-   `functions` provide a powerful way of customizing the item that will be returned.
    They can add enchantments to an item, set an item's name or simply setting the number of items that will be dropped.
    To define the number of items, we use `set_count`.
    It takes the `count` attribute, which sets the maximum and minimum amount of items that will be dropped.

For more information on loot tables, see our extended guide: [Loot Tables](/loot/loot-tables)!

## Spawn Rules

Next, we'll make the ghost spawn in deserts at night:

<ExampleFile path="BP/spawn_rules/ghost.json" />

-   You already know what `format_version` does.
-   Inside the `minecraft:spawn_rules` part we define our spawn rules.
-   The `description` defines the basic properties of the file.
    -   The `identifier` is used to define which entity these spawn rules apply to.
    -   `population_control` is used to limit the amount of entities that will be spawned.
        Once the pool that is defined inside of `population_control` is full, no more entities will be spawned.
-   With `conditions` we can define rules that limit the spawning of this entity to special cases. We will shortly describe each condition used here, but you can learn more conditions and how to use them [here](/entities/vanilla-usage-spawn-rules).
    -   `spawns_on_surface` allows the mob to only spawn on surfaces.
    -   `minecraft:brightness_filter` limits the spawning to areas with a lighting level thats between the defined values. If `adjust_for_weather` is `true`, the light level decrease during rain and storms will be ignored.
    -   `minecraft:difficulty_filter` defines the difficulty level needed to spawn the entity.
    -   `weight` defines how often this entity will spawn. The higher this value, the more often the mob will spawn.
    -   `minecraft:herd`defines how many entities will be spawned at once.
    -   With `minecraft:biome_filter` we define the biomes in which the entity is able to spawn.

To learn more about spawn rules, take a look at our list of [vanilla spawn rules](/entities/vanilla-usage-spawn-rules).

## Crafting Recipes

And finally, as an introduction to recipes, we'll make the Ectoplasm craftable into Ectoplasm Blocks:

<ExampleFile path="BP/recipes/ectoplasm_block.json" />

-   `format_version` is already known.
-   With `recipe_shaped` we define, that each ingredient has a set place in the crafting grid. There are some other types that can be used, you can find more information [here](/loot/recipes).
-   Inside `description` we define the `identifier` of this recipe, which is the name of the recipe.
-   `tags` is a list of crafting tags which determine the blocks (crafting table, furnace, etc) that are able to use this recipe.
-   `pattern` defines the arrangement of the items inside the crafting grid. Each `#` represents the item that is set under `key`.
    In this case, the whole 3x3 grid has to be filled with `"wiki:ectoplasm"`{lang=json}, our own item.
    It is possible to define more items, just add an entry to `key` and set the key to a character, that you can use inside `pattern`.
-   `result` contains an `item`, which is set to the item that will be the output of this recipe.

For more information on this topic, visit our page about [recipes](/loot/recipes)!

## What You Have Learned

:::tip What you have learned:

-   How to create a loot table and define which items a mob is able to drop
-   How to set the rules for a mob to spawn
-   How to create new crafting recipes

:::

## Your Progress So Far

**What you've done:**

-   [x] Setup your pack
-   [x] Create a custom item
-   [x] Create a custom entity
-   [x] Create the entity's loot, spawn rules, and a custom recipe

Congratulations! you have finished the Guide and created your first Add-on. 🎉

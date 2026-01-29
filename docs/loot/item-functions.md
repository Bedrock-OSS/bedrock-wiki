---
title: Item Functions
description: Item functions modify the nature of an item in loot tables and trade tables.
category: Documentation
nav_order: 4
mentions:
    - Ciosciaa
    - MedicalJewel105
    - ThomasOrs
    - Robotics-Modified
---

Item functions modify the nature of an item in [loot tables](/loot/loot-tables) and [trade tables](/loot/trade-tables).

TODO
can enchantments be prefixed with minecraft:/whatever?

# Functions

<CodeHeader>Example Entry with a function</CodeHeader>

```Json
{
  "type": "item",
  "name": "minecraft:diamond",
  "weight": 1,
  "functions": [
    {
      "function": "set_count",
      "count": {
        "min": 1,
        "max": 3
      }
    }
  ]
}
```
Most of the functions here were tested in trade tables only.

These functions are usable in trade tables and **loot tables only**.

These functions should be under the `functions` array.

None accept Molang.

No Java additional functions or properties were successful.

All may be prefixed with any sequence of text followed by a colon, like `minecraft:exploration_map` or `d1245436576u:fio2ejfoijfiowejf::::::exploration_map`

## Definitions

### Range Object

```Json
{
  "min": 1,
  "max": 2
}//Choose any value from 1-2
```

Range Objects are numberic values that chooses any value from a given range. If the function allows decimal values, they are included as valid values.

`min`: the minimum value(inclusive).
`max`: the maximum value(exclusive).

## General

A handful of functions are available for basic item properties. These functions are usable on any item.

| Function             | Container Loot | Block Drops | Fishing | Entity Drops | Entity Equipment | Trade Tables |
| -------------------- | -------------- | ----------- | ------- | ------------ | ---------------- | ------------ |
| `set_count`          | ✅             | ✅          | ✅      | ✅           | ✅               | ❌           |
| `set_name`           | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `set_lore`           | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `set_data`           | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `random_block_state` | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `random_aux_value`   | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `set_damage`         | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |

### Count

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ❌     |

::: tip NOTE
Trade tables use the [`"quantity"` property](/loot/trade-tables#quantity) to set their count.
:::

The `set_count` function sets the count for that item entry.

<CodeHeader>Count Function</CodeHeader>

```json
{
    "function": "set_count",

    "count": {
        "min": 2,
        "max": 4
    }
}
```

The `"count"` property determines how many of that item should be yielded; it can either be provided as an integer or a [range object](#range-object). Provided counts values may be larger than the stack size for that item. When this happens, the item will leak into other slots if in a container or separate into multiple different item stacks if dropped into the world. The count property actually defaults to `0`, so it should always be included.

### Name

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

The name of an item can be set using the `set_name` function. Names are visible in the user interface when hovering over an item. Names can be changed by players using anvils.

<CodeHeader>Name Function</CodeHeader>

```json
{
    "function": "set_name",
    
    "name": "Cursed Bow"
}
```

The name to give the item is given with the string `"name"` property. By default, name text appears italicized. However, item names support format codes, and `§r` can be inserted at the start of the text to reset it to non-italics. Raw text is unsupported in item names. `\n` can be used for newlines.

### Lore

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

The `set_lore` function sets the lore for an item.

<CodeHeader>Lore Function</CodeHeader>

```json
{
    "function": "set_lore",

    "lore": ["", ""]
}
```

The `"lore"` property configures the lore. It can be represented as either a string or an array of strings. All lore strings support format codes but do not support localization. In the array form, each string represents a new line of lore. Each such string's formatting context is independent, meaning formatting will reset with each string. By default, purple and italicized text is used for lore; this can be reset by prepending the reset format code (`§r`) to each string as necessary. `\n` can be used within any lore string to form a newline while preserving the current formatting context.

### Data

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`set_data` establishes the data for the given item, similar to the argument in the `/give` command. If used on a block, it will set the block's data value. If used on an item, it will set it's aux value. Unlike the command, however, `set_data` cannot set the durability of an item. For that, use [`durability`](#durability).

<CodeHeader>Data Function</CodeHeader>

```json
{
    "function": "set_data",

    "data": 2
}
```

The `"data"` property sets the item's data. If not provided, it will default to `0`. `"data"` can either be provided as an integer or a [range object](#range-object).

As an integer:

```json
"data": 1
```

As a range object:

```json
"data": {
	"min": 0,
	"max": 5
}
```

The object form will randomly select a data value inclusively between the provided minimum and maximum each instance this function's item entry is selected.

### Block State

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`random_block_state` sets an individual block state for a block.

<CodeHeader>Block State Function</CodeHeader>

```json
{
    "function": "random_block_state",

    "block_state": "wiki:color",
    "values": 3
}
```

Sets a block state for a block.

`block_state`: Required string name of block state.

`values`: Can be a number or a [range object](#range-object).

Defaults to 0… kinda required otherwise pointless? IDK…

### Aux Value

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`random_aux_value`

<CodeHeader>Aux Value Function</CodeHeader>

```json
{
    "function": "random_aux_value",

    "values": {
        "min": 2,
        "max": 4
    }
}
```

Sets the auxiliary value of an item.

`values`: Can be an integer or a [range object](#range-object).

If using a range object, it will randomly choose the values uniformly(each value has the same chance of being chosen).

Only used for **auxiliary value**; won't, for example, set damage of a tool but will set color of wool.

It overrides any provided auxiliary value as identifier `:suffix`, like `minecraft:wool:10`.

Also works for block data.

### Durability

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

Item durability can be set using the `set_damage` function.

<CodeHeader>Durability Function</CodeHeader>

```json
{
    "function": "set_damage",

    "damage": {
        "min": 0.5,
        "max": 1
    }
}
```

Sets the damage value of this item.

`damage`: Can either be a set number or a [range object](#range-object). Allowed values range from `0.0-1.0`.

Note that if this item has no durability component, this function will be ignored.


## Item-Specific Data

Some functions are only usable by a certain set of items. See each function for which items are relevant.

| Function             | Container Loot | Block Drops | Fishing | Entity Drops | Entity Equipment | Trade Tables |
| -------------------- | -------------- | ----------- | ------- | ------------ | ---------------- | ------------ |
| `furnace_smelt`      | ❌             | ❌          | ❌      | ✅           | ❌               | ❌           |
| `set_book_contents`  | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `exploration_map`    | ✅             | ✅          | ✅      | ✅           | ✅               | ⚠️           |
| `set_banner_details` | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `random_dye`         | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `set_actor_id`       | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `fill_container`     | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `set_potion`         | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `set_ominous_bottle_amplifier`| ✅             | ✅          | ✅      | ✅           | ✅               |⚠️       |

### Heat Item

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ❌     |
| Block drops      | ❌     |
| Fishing          | ❌     |
| Entity drops     | ✅     |
| Entity equipment | ❌     |
| Trade table      | ❌     |

`furnace_smelt`

<CodeHeader>Heat Item Function</CodeHeader>

```json
{
    "function": "furnace_smelt"
}
```

Auto-implies that the entity must’ve been on fire when they died.
Vanilla files use a function condition for this, but even removing that condition still implies that the entity must’ve died on fire for the `furnace_smelt` function to trigger.

### Book Contents

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`set_book_contents`

<CodeHeader>Book Contents Function</CodeHeader>

```json
{
    "function": "set_book_contents",

    "title": "Wiki Book",
    "author": "Bedrock Wiki",

    "pages": ["Example page number one", "Example page number 2"]
}
```

Sets the data for a book.

Can only be used on `minecrat:writable_book` or `minecraft:written_book`.

`author`: String name of the author.

`title`: String name of the book.

`pages`: Array of strings — each string is the contents of that page.

Supports up to 50 strings and 798 characters per string
12,800‌ character limit across all pages.
Use `\n` in the string (not `\\n`) to add newlines.

Can’t use tabs.

Can use color codes; Each different page string resets the color codes each time.

### Exploration Map

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`exploration_map`

<CodeHeader>Exploration Map Function</CodeHeader>

```json
{
    "function": "exploration_map",

    "destination": "village"
}
```

**Trade Table info**:

`destination`:

Currently only `monument` and `mansion` are allowed.

Nothing else, not even buried treasure (this one looks like it’ll work — names the map right instead of Unknown Map like the others, but it doesn’t point anywhere). :(

**Loot Table info**:

`destination`:

Works for any /locate location (see old recipe notes for caveats there; this is for container loot tables).

Only works if in the appropriate dimension.

If a mansion or monument, gets named, colored, and icon’d correctly, corresponding to the right marker decoration.

If invalid or no destination is given, shows no marker but still has the river and ocean lines on the map.

Works in both containers and entity equipment and drops.

Keep in mind how **only 2 locations** worked from traders.

### Banner Type

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`set_banner_details`

<CodeHeader>Banner Type Function</CodeHeader>

```json
{
    "function": "set_banner_details",
    "type": 1 //Illager Banner
}
```

Sets type of a `minecraft:banner` (only usable on this).

`type`: Can only be `0` or `1`.

- `0` is just a White Banner.
- `1` is an Illager Banner.

### Random Dyeing

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`random_dye`

<CodeHeader>Random Dyeing Function</CodeHeader>

```json
{
    "function": "random_dye"
}
```

Randomly dyes dyeable items. Such as leather horse armor, leather armor, and wolf armor.

It doesn’t work on wool or other related items.

### Spawn Eggs

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`set_actor_id`

<CodeHeader>Spawn Eggs Function</CodeHeader>

```json
{
    "function": "set_actor_id",
    "id": "minecraft:chicken"
}
```

Usable with spawn eggs.

`id`: The identifier for the mob.

In trade tables, if the `id` property is omitted, it defaults to the trader's identifier.

### Container Contents

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`fill_container`

<CodeHeader>Container Contents Function</CodeHeader>

```json
{
    "function": "fill_container",
    "loot_table": "loot_tables/chests/chest_loot.json"
}
```

Sets the contents of a container item/block. Allows container items such as shulker boxes and bundles to contain loot itself.

`loot_table`: Path to loot table file from behavior pack root.

The `loot_table` property is needed or it will just be the normal item.
It cannot point to the same loot table the item is in.
Works in containers and both entity stuff and blocks

### Potion Type

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`set_potion`

<CodeHeader>Potion Type Function</CodeHeader>

```json
{
  "function": "set_potion",
  "id": "poison"
}
```

Sets the potion type of this item. Allowed item types are: `minecraft:potion`, `minecraft:splash_potion`, `minecraft:lingering_potion`, and `minecraft:arrow`.

`id`: the name of the potion type. Here is the list of all the [Potion Types](#potion-types).

### Ominous Bottle Amplifier
| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ⚠️(Have not been tested yet)    |

`set_ominous_bottle_amplifier`

<CodeHeader>Ominous Bottle Amplifier Function</CodeHeader>

```json
{
  "function": "set_ominous_bottle_amplifier",
  "amplifier": {
  "min": 0,
  "max": 4
  }
}
```

Sets the `minecraft:ominous_bottle` potion effect amplifier.

`amplifier`: can be a set number or a [range object](#range-object). Allowed values are `0-4`.

## Enchanting

These functions control whether an item has an enchantment.

| Function                   | Container Loot | Block Drops | Fishing | Entity Drops | Entity Equipment | Trade Tables |
| -------------------------- | -------------- | ----------- | ------- | ------------ | ---------------- | ------------ |
| `enchant_book_for_trading` | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `enchant_with_levels`      | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `enchant_randomly`         | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `enchant_random_gear`      | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `specific_enchants`        | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |

### Enchant for Trading

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`enchant_book_for_trading`

<CodeHeader>Enchant for Trading Function</CodeHeader>

```json
{
    "function": "enchant_book_for_trading"
}
```

**Documented in trade tables.**

### Level-Based Enchantments

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`enchant_with_levels` enchants items using enchantment table logic, optionally allowing for treasure enchantments.

<CodeHeader>Level-Based Enchantments Function</CodeHeader>

```json
{
    "function": "enchant_with_levels",

    "levels": {
        "min": 15,
        "max": 21
    },
    "treasure": true
}
```

Enchants books as though off an Enchanting Table with the given levels.

Unlike the Enchanting Table, it doesn’t cap at `30`, otherwise seems symmetrical.

Level `99999` gives ludicrously powerful books… with pretty much every possible enchantment on them.

`treasure`: Enables treasure enchantments as possibilities for that item. **Boolean**, defaults to `false`. If `false`, curses can't appear as possibilities; if `true`, they can.

`levels`: Can be a number or a [range object](#range-object). Defaults to `0`.
Can be negative, but will just be remapped as though `0`.

### Random Enchantments

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`enchant_randomly`

<CodeHeader>Random Enchantments Function</CodeHeader>

```json
{
    "function": "enchant_randomly"
}
```

Randomly picks a count of enchantments and their strengths for the given item.

`treasure`:Enables treasure enchantments as possibilities for that item. **Boolean**, defaults to `false`.

### Enchant Gear

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`enchant_random_gear`

<CodeHeader>Enchant Gear Function</CodeHeader>

```json
{
    "function": "enchant_random_gear",
    "chance": 0.5 //50% chance of being enchanted
}
```

Randomly picks a count of enchantments and their strengths for the given item.

Pretty much like `enchant_randomly`, but seemingly no treasure enchantments.

Not working on shears, but does even work on carrot-on-a-stick.

`chance`: the probability of this item to get an enchanted at all. Allowed values ranges from `0.0-1.0`. Defaults to `0`.
Note that going over `1.0` doesn't make it more "enchanted".

### Specific Enchantments

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ✅     |
| Block drops      | ✅     |
| Fishing          | ✅     |
| Entity drops     | ✅     |
| Entity equipment | ✅     |
| Trade table      | ✅     |

`specific_enchants`

<CodeHeader>Specific Enchantments Function</CodeHeader>

```json
{
    "function": "specific_enchants",
    "enchants": [
      {
        "id": "unbreaking",
        "level": [1, 3]
      }
    ]
}
```

Applies a specific set of enchantments.

`enchants`:

Can be a string array or object. Here is the list of all [Enchantment Types](#enchantment-types).

For array, any mix of strings or objects (see below).

For string, an enchantment id.

For object:

`id`: The identifier for the enchantment.

`level`:

Optional, defaults to `1`
Can be an exact number or a 2-valued array, representing `min` and `max`, inclusive.

Example:

```Json
{
  "function": "specific_enchants",
  "enchants": [ 
    "mending",//string value
    {
      "id": "fortune",
      "level": [1, 3]
    }//object value
  ]
}
```

## External Factors

External conditions that affect item drops.

| Function                    | Container Loot | Block Drops | Fishing | Entity Drops | Entity Equipment | Trade Tables |
| --------------------------- | -------------- | ----------- | ------- | ------------ | ---------------- | ------------ |
| `looting_enchant`           | ❌             | ❌          | ❌      | ✅           | ❌               | ❌           |
| `explosion_decay`           | ❌             | ✅          | ❌      | ❌           | ❌               | ❌           |
| `set_data_from_color_index` | ❌             | ❌          | ❌      | ❌           | ❌               | ✅           |
| `trader_material_type`      | ❌             | ❌          | ❌      | ❌           | ❌               | ✅           |

### Held Tool Looting Enchantment

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ❌     |
| Block drops      | ❌     |
| Fishing          | ❌     |
| Entity drops     | ✅     |
| Entity equipment | ❌     |
| Trade table      | ❌     |

`looting_enchant`

<CodeHeader>Held Tool Looting Function</CodeHeader>

```json
{
    "function": "looting_enchant",

    "count": {
        "min": 0,
        "max": 1
    }
}
```

Increases the number of items dropped based on the Looting Enchantment level used to kill the entity.

Count can be an integer or a [range object](#range-object).

### Explosion Decay

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ❌     |
| Block drops      | ✅     |
| Fishing          | ❌     |
| Entity drops     | ❌     |
| Entity equipment | ❌     |
| Trade table      | ❌     |

`explosion_decay`

<CodeHeader>Explosion Decay Function</CodeHeader>

```json
{
    "function": "explosion_decay"
}
```

By default, always survives. If in an explosion, has a chance of not dropping based on explosion power at that block’s location

### Entity Color

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ❌     |
| Block drops      | ❌     |
| Fishing          | ❌     |
| Entity drops     | ❌     |
| Entity equipment | ❌     |
| Trade table      | ✅     |

`set_data_from_color_index`

<CodeHeader>Entity Color Function</CodeHeader>

```json
{
    "function": "set_data_from_color_index"
}
```

Sets the data value of the block to the value of the `minecraft:color` component on the entity

### Trader Material Type

| Usage            | Usable |
| ---------------- | ------ |
| Container loot   | ❌     |
| Block drops      | ❌     |
| Fishing          | ❌     |
| Entity drops     | ❌     |
| Entity equipment | ❌     |
| Trade table      | ✅     |

`trader_material_type`

<CodeHeader>Trader Material Type Function</CodeHeader>

```json
{
    "function": "trader_material_type"
}
```

Only in trades? Maybe it can work somewhere in loot.

# Type Identifiers

List of all string values used in functions that use string values such as potion types and enchantments.

:::warning 
Some of identifiers might not have been included or might be wrong. Always refer to official documentation, but otherwise some of these are usable.
:::

## Potion Types

Used by the `set_potion` function.

- "water"
- "mundane"
- "long_mundane"
- "awkward"
- "nightvision"
- "long_nightvision"
- "invisibility"
- "long_invisibility"
- "leaping"
- "long_leaping"
- "strong_leaping"
- "fire_resistance"
- "long_fire_resistance"
- "swiftness"
- "long_swiftness"
- "strong_swiftness"
- "slowness"
- "long_slowness"
- "strong_slowness"
- "water_breathing"
- "long_water_breathing"
- "healing"
- "strong_healing"
- "harming"
- "strong_harming"
- "poison"
- "long_poison"
- "strong_poison"
- "regeneration"
- "long_regeneration"
- "strong_regeneration"
- "strength"
- "long_strength"
- "strong_strength"
- "weakness"
- "long_weakness"
- "wither"
- "turtle_master"
- "long_turtle_master"
- "strong_turtle_master"
- "slow_falling"
- "long_slow_falling"
- "wind_charge"
- "weaving"
- "oozing"
- "infested"

## Enchantment Types

Used by the `specific_enchants` function.

- "protection"
- "fire_protection"
- "feather_falling"
- "blast_protection"
- "projectile_protection"
- "unbreaking"
- "mending"
- "respiration"
- "depth_strider"
- "frost_walker"
- "aqua_affinity"
- "soul_speed"
- "swift_sneak"
- "sharpness"
- "smite"
- "bane_of_arthropods"
- "fire_aspect"
- "knockback"
- "looting"
- "efficiency"
- "fortune"
- "silk_touch"
- "power"
- "punch"
- "flame"
- "infinity"
- "multishot"
- "piercing"
- "quick_charge"
- "luck_of_the_sea"
- "lure"
- "impaling"
- "riptide"
- "loyalty"
- "channeling"
- "curse_of_binding"
- "curse_of_vanishing"
- "density"
- "breach"
- "wind_burst"
- "lunge"

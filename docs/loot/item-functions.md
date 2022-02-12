---
title: Item Functions
category: Documentation
nav_order: 4
tags:
- Stable
- Last updated for Version 1.18.10
mention:
- Ciosciaa
toc_max_level: 1
---

Item functions modify the nature of an item in [loot tables](./loot-tables.html) and [trade tables](./trade-tables.html).

```json

```

TODO
can enchantments be prefixed with minecraft:/whatever?

Functions
Note that every single thing tested here was in trade tables only
Usable in loot tables and trade tables only
Are objects with `function` and other props…
None accept Molang
No Java additional functions or properties were successful
All may be prefixed with any sequence of text followed by a colon, like `minecraft:exploration_map` or `d1245436576u:fio2ejfoijfiowejf::::::exploration_map`

## General
A handful of functions are available for basic item properties. These functions are usable on any item.

|Function|Container Loot|Block Drops|Fishing|Entity Drops|Entity Equipment|Trade Tables|
|-|:-:|:-:|:-:|:-:|:-:|:-:|
|`set_count`|✅|✅|✅|✅|✅|❌|
|`set_name`|✅|✅|✅|✅|✅|✅|
|`set_lore`|✅|✅|✅|✅|✅|✅|
|`set_data`|✅|✅|✅|✅|✅|✅|
|`random_block_state`|✅|✅|✅|✅|✅|✅|
|`random_aux_value`|✅|✅|✅|✅|✅|✅|
|`set_damage`|✅|✅|✅|✅|✅|✅|

### Count
|Usage|Usable|
|-|:-:|
|Container loot|✅|
|Block drops|✅|
|Fishing|✅|
|Entity drops|✅|
|Entity equipment|✅|
|Trade table|❌|

::: tip NOTE
Trade tables use the [`"quantity"` property](./trade-tables.html#quantity) to set their count.
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

The `"count"` property determines how many of that item should be yielded; it can either be provided as an integer or a [range object](#). Provided counts values may be larger than the stack size for that item. When this happens, the item will leak into other slots if in a container or separate into multiple different item stacks if dropped into the world. The count property actually defaults to `0`, so it should always be included.

### Name
|Usage|Usable|
|-|:-:|
|Container loot|✅|
|Block drops|✅|
|Fishing|✅|
|Entity drops|✅|
|Entity equipment|✅|
|Trade table|✅|

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
|Usage|Usable|
|-|:-:|
|Container loot|✅|
|Block drops|✅|
|Fishing|✅|
|Entity drops|✅|
|Entity equipment|✅|
|Trade table|✅|

The `set_lore` function sets the lore for an item.

<CodeHeader>Lore Function</CodeHeader>

```json
{
	"function": "set_lore",
	
	"lore": [
		"",
		""
	]
}
```

The `"lore"` property configures the lore. It can be represented as either a string or an array of strings. All lore strings support format codes but do not support localization. In the array form, each string represents a new line of lore. Each such string's formatting context is independent, meaning formatting will reset with each string. By default, purple and italicized text is used for lore; this can be reset by prepending the reset format code (`§r`) to each string as necessary. `\n` can be used within any lore string to form a newline while preserving the current formatting context.

### Data
|Usage|Usable|
|-|:-:|
|Container loot|✅|
|Block drops|✅|
|Fishing|✅|
|Entity drops|✅|
|Entity equipment|✅|
|Trade table|✅|

`set_data` establishes the data for the given item, similar to the argument in the `/give` command. If used on a block, it will set the block's data value. If used on an item, it will set it's aux value. Unlike the command, however, `set_data` cannot set the durability of an item. For that, use [`durability`](#durability).

<CodeHeader>Data Function</CodeHeader>

```json
{
	"function": "set_data",
	
	"data": 2
}
```

The `"data"` property sets the item's data. If not provided, it will default to `0`. `"data"` can either be provided as an integer or a range object.

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
|Usage|Usable|
|-|:-:|
|Container loot|✅|
|Block drops|✅|
|Fishing|✅|
|Entity drops|✅|
|Entity equipment|✅|
|Trade table|✅|

`random_block_state` sets an individual block state for a block.

<CodeHeader>Block State Function</CodeHeader>

```json
{
	"function": "random_block_state",
	
	"block_state": "wiki:color",
	"values": 3
}
```

Sets a block state for a block
block_state
Required string name of block state
values
Can be number or min/max object
Defaults to 0… kinda required otherwise pointless? IDK…

### Aux Value
|Usage|Usable|
|-|:-:|
|Container loot|✅|
|Block drops|✅|
|Fishing|✅|
|Entity drops|✅|
|Entity equipment|✅|
|Trade table|✅|

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

Sets aux value of an item
values
Can be integer or min/max object
Min/max object chosen uniformly randomly
Only used for aux value; won't, for example, set damage of a tool but will set color of wool
Overrides any provided aux value as identifier `:suffix`, like `minecraft:wool:10`
Works on block data, too

### Durability
|Usage|Usable|
|-|:-:|
|Container loot|✅|
|Block drops|✅|
|Fishing|✅|
|Entity drops|✅|
|Entity equipment|✅|
|Trade table|✅|

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

The `"damage"` property sets the item's durability. It can be represented either as a number or a [range object](#). Values are intended to range from `0` to `1`, where `0` is the minimum possible durability for an item and `1` is undamaged.

## Item-Specific Data
Some functions are only usable by a certain set of items. See each function for which items are relevant.

|Function|Container Loot|Block Drops|Fishing|Entity Drops|Entity Equipment|Trade Tables|
|-|:-:|:-:|:-:|:-:|:-:|:-:|
|`furnace_smelt`|❌|❌|❌|✅|❌|❌|
|`set_book_contents`|✅|✅|✅|✅|✅|✅|
|`exploration_map`|✅|✅|✅|✅|✅|⚠️|
|`set_banner_details`|✅|✅|✅|✅|✅|✅|
|`random_dye`|✅|✅|✅|✅|✅|✅|
|`set_actor_id`|✅|✅|✅|✅|✅|✅|
|`fill_container`|✅|✅|✅|✅|✅|✅|

### Heat Item
|Usage|Usable|
|-|:-:|
|Container loot|❌|
|Block drops|❌|
|Fishing|❌|
|Entity drops|✅|
|Entity equipment|❌|
|Trade table|❌|

`furnace_smelt`

<CodeHeader>Heat Item Function</CodeHeader>

```json
{
	"function": "furnace_smelt"
}
```

auto-implies that the entity must’ve been on fire when they died
Vanilla files use a function condition for this, but even removing that condition still implies that the entity must’ve died on fire for the furnace_smelt function to trigger

### Book Contents
|Usage|Usable|
|-|:-:|
|Container loot|✅|
|Block drops|✅|
|Fishing|✅|
|Entity drops|✅|
|Entity equipment|✅|
|Trade table|✅|

`set_book_contents`

<CodeHeader>Book Contents Function</CodeHeader>

```json
{
	"function": "set_book_contents",
	
	"title": "",
	"author": "",
	
	"pages": [
		"",
		""
	]
}
```

Sets data for a book
Can only be used on `writable_book` or `written_book`
author
String name of the author
title
String name of the book
pages
Array of strings — each string is the contents of that page
Supports up to 50 strings and 798 characters per string
12,800‌ character limit across all pages
Use `\n` in the string (not `\\n`) to add newlines
Can’t use tabs
Can use color codes; Each different page string resets the color codes each time

### Exploration Map
|Usage|Usable|
|-|:-:|
|Container loot|✅|
|Block drops|✅|
|Fishing|✅|
|Entity drops|✅|
|Entity equipment|✅|
|Trade table|⚠️|

`exploration_map`

<CodeHeader>Exploration Map Function</CodeHeader>

```json
{
	"function": "exploration_map",
	
	"destination": "village"
}
```

trade table info:
destination
Currently only `monument` `mansion`.
Nothing else, not even buriedtreasure (this one looks like it’ll work — names the map right instead of Unknown Map like the others, but it doesn’t point anywhere). :(

Loot table info:
Destination
Works for any /locate location (see old recipe notes for caveats there; this is for container loot tables)
Only works if in the appropriate dimension
If a mansion or monument, gets named, colored, and icon’d correctly, corresponding to the right marker decoration
If invalid or no destination is given, shows no marker but still has the river and ocean lines on the map
Works in containers and both entity equipment and drops
Keep in mind how only 2 locations worked from traders

### Banner Type
|Usage|Usable|
|-|:-:|
|Container loot|✅|
|Block drops|✅|
|Fishing|✅|
|Entity drops|✅|
|Entity equipment|✅|
|Trade table|✅|

`set_banner_details`

<CodeHeader>Banner Type Function</CodeHeader>

```json
{
	"function": "set_banner_details"
}
```

Sets type of a `banner` (only usable on this)
type
Can only be 0 or 1
0 is just a white banner
1 is illager banner

### Random Dyeing
|Usage|Usable|
|-|:-:|
|Container loot|✅|
|Block drops|✅|
|Fishing|✅|
|Entity drops|✅|
|Entity equipment|✅|
|Trade table|✅|

`random_dye`

<CodeHeader>Random Dyeing Function</CodeHeader>

```json
{
	"function": "random_dye"
}
```

Randomly dyes leather armor or horse armor
Doesn’t work on wool or whatever

### Spawn Eggs
|Usage|Usable|
|-|:-:|
|Container loot|✅|
|Block drops|✅|
|Fishing|✅|
|Entity drops|✅|
|Entity equipment|✅|
|Trade table|✅|

`set_actor_id`

<CodeHeader>Spawn Eggs Function</CodeHeader>

```json
{
	"function": "set_actor_id"
}
```

Usable with spawn eggs
id
Should be the identifier for the mob
in trade tables, defaults to trader's entity type

### Container Contents
|Usage|Usable|
|-|:-:|
|Container loot|✅|
|Block drops|✅|
|Fishing|✅|
|Entity drops|✅|
|Entity equipment|✅|
|Trade table|✅|

`fill_container`

<CodeHeader>Container Contents Function</CodeHeader>

```json
{
	"function": "fill_container"
}
```

Sets the contents of a container block
loot_table
Path to loot table file from behavior pack root

loot_table needed or will just be the normal item
Cannot point to that current loot table
Works in containers and both entity stuff and blocks

## Enchanting
|Function|Container Loot|Block Drops|Fishing|Entity Drops|Entity Equipment|Trade Tables|
|-|:-:|:-:|:-:|:-:|:-:|:-:|
|`enchant_book_for_trading`|✅|✅|✅|✅|✅|✅|
|`enchant_with_levels`|✅|✅|✅|✅|✅|✅|
|`enchant_randomly`|✅|✅|✅|✅|✅|✅|
|`enchant_random_gear`|✅|✅|✅|✅|✅|✅|
|`specific_enchants`|✅|✅|✅|✅|✅|✅|

### Enchant for Trading
|Usage|Usable|
|-|:-:|
|Container loot|✅|
|Block drops|✅|
|Fishing|✅|
|Entity drops|✅|
|Entity equipment|✅|
|Trade table|✅|

`enchant_book_for_trading`

<CodeHeader>Enchant for Trading Function</CodeHeader>

```json
{
	"function": "enchant_book_for_trading"
}
```

documented in trade tables

### Level-Based Enchantments
|Usage|Usable|
|-|:-:|
|Container loot|✅|
|Block drops|✅|
|Fishing|✅|
|Entity drops|✅|
|Entity equipment|✅|
|Trade table|✅|

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

Enchants books as though off an enchantment table with the given levels
Unlike enchanting table, doesn’t cap at 30, otherwise seems symmetrical
level 99999 gives ludicrously powerful books… with pretty much every possible enchantment on them
treasure
	Enables treasure enchantments as possibilities for that item
	boolean, defaults to false
	If false, curses can't appear as possiblities; if true, they can	
levels
	Can be number or min/max object
	Defaults to 0
	Can be negative, but will just be reampped as though 0.
	
### Random Enchantments
|Usage|Usable|
|-|:-:|
|Container loot|✅|
|Block drops|✅|
|Fishing|✅|
|Entity drops|✅|
|Entity equipment|✅|
|Trade table|✅|

`enchant_randomly`

<CodeHeader>Random Enchantments Function</CodeHeader>

```json
{
	"function": "enchant_randomly"
}
```

Randomly picks a count of enchantments and their strengths for the given item
treasure
Enables treasure enchantments as possibilities for that item
boolean, defaults to false

### Enchant Gear
|Usage|Usable|
|-|:-:|
|Container loot|✅|
|Block drops|✅|
|Fishing|✅|
|Entity drops|✅|
|Entity equipment|✅|
|Trade table|✅|

`enchant_random_gear`

<CodeHeader>Enchant Gear Function</CodeHeader>

```json
{
	"function": "enchant_random_gear"
}
```

Randomly picks a count of enchantments and their strengths for the given item
Pretty much like enchant_randomly, but seemingly no treasure enchantments
Not working on shears, but does even work on carrot-on-a-stick
chance
Number from 0 to 1
Chance that the item is enchanted at all
Defaults to 0
Going over 1 doesn't make it "more" enchanted

### Specific Enchantments
|Usage|Usable|
|-|:-:|
|Container loot|✅|
|Block drops|✅|
|Fishing|✅|
|Entity drops|✅|
|Entity equipment|✅|
|Trade table|✅|

`specific_enchants`

<CodeHeader>Specific Enchantments Function</CodeHeader>

```json
{
	"function": "specific_enchants"
}
```

Applies a specific set of enchantments
enchants
Can be string array or object
For array, any mix of strings or objects (see below)
For string, an enchantment id
For object:
id
The identifier for the enchantment
See below for names
level
Optional, defaults to 1
Can be an exact number or a 2-valued array, representing min and max, inclusive

## External Factors
|Function|Container Loot|Block Drops|Fishing|Entity Drops|Entity Equipment|Trade Tables|
|-|:-:|:-:|:-:|:-:|:-:|:-:|
|`looting_enchant`|❌|❌|❌|✅|❌|❌|
|`explosion_decay`|❌|✅|❌|❌|❌|❌|
|`set_data_from_color_index`|❌|❌|❌|❌|❌|✅|
|`trader_material_type`|❌|❌|❌|❌|❌|✅|

### Held Tool Looting Enchantment
|Usage|Usable|
|-|:-:|
|Container loot|❌|
|Block drops|❌|
|Fishing|❌|
|Entity drops|✅|
|Entity equipment|❌|
|Trade table|❌|

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

Count can be an integer or min/max

### Explosion Decay
|Usage|Usable|
|-|:-:|
|Container loot|❌|
|Block drops|✅|
|Fishing|❌|
|Entity drops|❌|
|Entity equipment|❌|
|Trade table|❌|

`explosion_decay`

<CodeHeader>Explosion Decay Function</CodeHeader>

```json
{
	"function": "explosion_decay"
}
```

By default, always survives. If in an explosion, has a chance of not dropping based on explosion power at that block’s location

### Entity Color
|Usage|Usable|
|-|:-:|
|Container loot|❌|
|Block drops|❌|
|Fishing|❌|
|Entity drops|❌|
|Entity equipment|❌|
|Trade table|✅|

`set_data_from_color_index`

<CodeHeader>Entity Color Function</CodeHeader>

```json
{
	"function": "set_data_from_color_index"
}
```

Sets the data value of the block to the value of the `minecraft:color` component on the entity

### Trader Material Type
|Usage|Usable|
|-|:-:|
|Container loot|❌|
|Block drops|❌|
|Fishing|❌|
|Entity drops|❌|
|Entity equipment|❌|
|Trade table|✅|

`trader_material_type`

<CodeHeader>Trader Material Type Function</CodeHeader>

```json
{
	"function": "trader_material_type"
}
```

Only in trades? Maybe it can work somewhere in loot
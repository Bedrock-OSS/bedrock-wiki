---
title: Recipes
mention:
	- Ciosciaa
---

*Last updated for Version 1.17.41*

Recipes are the means of handling several item transactions, namely those occurring in crafting tables, furnaces and campfires, and brewing stands.

<CodeHeader>BP/recipes/crafting/weapons/cold_steel_sword.json</CodeHeader>
```json
{
	"format_version": "1.17.41",
	
	"minecraft:recipe_shaped": {
		"description": {
			"identifier": "wiki:cold_steel_sword"
		},
		"tags": ["crafting_table", "altar"],

		"pattern": [
			"X",
			"X",
			"I"
		],
		"key": {
			"X": "lichbane:cold_steel",
			"I": "minecraft:stick"
		},
		"result": "lichbane:cold_steel_sword"
	}
}
```

::: tip NOTE
Anvil interactions are handled within an [item definition](/items/items-16.html). Smithing table and loom transactions are currently unavailable.
:::

All recipes are stored in the `recipes` folder in the behavior pack root. The files can be named and organized under any folder hierarchy as desired. No experimental toggles are required to use recipes or any of their features.

## Shared Properties and Structures
### Format Version
The [format version](/concepts/format-version.html#top) is intended to version the schema used for the body of a recipe. It is provided with the top-level `"format_version"` property.

<CodeHeader>#/</CodeHeader>
```json
"format_version": "1.17.41"
```

In practice, the format version can be set to any value or even omitted.

::: warning
It's strongly recommended to include a format version anyway, choosing a value that represents an actual Minecraft version to help future-proof the code. Consider using the current release version or last major release version.
:::

### Description
The `"description"` object, required within any recipe type, holds the metadata of a recipe.

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>
```json
"description": {
	"identifier": "wiki:cold_steel_sword"
}
```

Its only child is the required `"identifier"` property, which is designed to uniquely identify a recipe across all packs applied to a world. There are no namespacing requirements for recipe identifiers except that no two full recipe identifiers in a single pack may match.

::: warning
It's strongly recommended to use a namespace. Namespaces are a standard in other add-on domains and assist in logically scoping the recipe to a pack, lessening possibilities of collisions for players wanting to use multiple behavior packs in their world.
:::

### Tags
Recipes are linked to crafting interfaces using the required `"tags"` array property, which must be placed within any recipe type. Any interface whose tag is provided in the array may use that recipe, if applicable. At least one tag must be provided.

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>
```json
"tags": ["crafting_table", "altar"]
```

Vanilla interfaces are exposed to tags for each set of recipe types.

Crafting:
- `crafting_table`
- `stonecutter`

Cooking and Smelting:
- `furnace`
- `blast_furnace`
- `smoker`
- `campfire`
- `soul_campfire`

Brewing
- `brewing_stand`

Additionally, [custom crafting blocks can declare a custom tag](/blocks/blocks-16.html#minecraft-crafting-table) for crafting recipes to use. Custom cooking and smelting blocks and custom brewing stands are not currently available.

::: tip
To effectively disable a recipe (useful for [overriding](#overrides) a prior recipe), set the tag array to `[""]`.
:::

### Item Descriptors
Working with recipes entails referencing items across a number of properties. Items may be provided in one of two formats: a string reference or an item object. Both formats have means of handling data values, but only the item object may be used to specify a count for that item (usable in recipe outputs). For recipe inputs, if no data value is provided, items with any data value under that identifier will be usable for that input. The data value for an output defaults to `0` if one is not explicitly provided. Selecting recipe inputs by item tags is not supported.

#### String Reference
Generally, a string reference is just the namespace and identifier combination for that item:
<CodeHeader>#/minecraft:recipe_shapeless/ingredients/0</CodeHeader>
```json
"minecraft:planks"
```

String references additionally support specification of a data value as a suffix:
<CodeHeader>#/minecraft:recipe_shapeless/ingredients/0</CodeHeader>
```json
"minecraft:planks:2"
```

#### Item Object
The item object is a more explicit construct for referencing items.

<CodeHeader>#/minecraft:recipe_shapeless/ingredients/0</CodeHeader>
```json
{
	"item": "minecraft:planks",
	"data": 2,
	
	"count": 3
}
```

The required `"item"` property functions the same as the string reference format. Although an explicit data field is available, the data suffix string format is still supported in the `"item"` property. However, unlike the suffix form, `"data"` can accept Molang. The Molang here is evaluated once on world load, not per-crafting attempt. Variables cannot be used to pass data between properties in a recipe. Furthermore, the nature of input items cannot be queried. Currently, the only known usable query in the `"data"` property is `query.get_actor_info_id`, used to look up the ID of an entity's spawn egg by its identifier:

<CodeHeader>#/minecraft:recipe_shapeless/result</CodeHeader>
```json
{
	"item": "minecraft:spawn_egg",
	"data": "query.get_actor_info_id('minecraft:chicken')"
}
```

The optional integer `"count"` property may be used to stack items. It defaults to `1`. Currently, setting the count only functions in [crafting](#crafting) and [heating](#heating) recipe outputs and [shapeless recipe ingredients](#ingredients). A provided count is ignored in other locations.

::: tip NOTE
If a count greater than `1` is provided for an item that does not stack, an error will be thrown. There is no way to force single-return recipe outputs, like those in shapeless recipes or brewing mixes, to return multiple items in one transaction.
:::

#### Identifier Additions
Additional identifiers not typically usable are available to recipes to describe basic potions.

<CodeHeader>#/minecraft:recipe_brewing_mix/input</CodeHeader>
```json
"minecraft:potion_type:strength"
```

These identifiers are not usable in the object notation, only the string notation. Variants are unavailable for splash and lingering potions. All such identifiers follow the format: <code>minecraft:potion_type:<em>potion_effect</em></code>, where <code><em>potion_effect</em></code> can be one of the following:

- `water`
- `awkward`
- `mundane`
- `thick`
- `healing`
- `regeneration`
- `swiftness`
- `strength`
- `harming`
- `poison`
- `slowness`
- `weakness`
- `water_breathing`
- `fire_resistance`
- `nightvision`
- `invisibility`
- `leaping`
- `slow_falling`
- `turtle_master`

Where supported, `long_` and `strong_` prefixes may be used to designate modified potions, such as `minecraft:potion_type:strong_poison`.

## Crafting
Crafting operations instantly transform inputs to outputs using crafting grids. Two crafting recipe types are available: [shapeless recipes](#shapeless-recipes), whose inputs may be arranged in any way, and [shaped recipes](#shaped-recipes), used to define strict arrangements of inputs.
Crafting recipes support both crafting tables and stonecutters:

<CodeHeader>#/minecraft:recipe_shapeless/</CodeHeader>
```json
"tags": ["crafting_table", "stonecutter"]
```

`"crafting_table"` applies to both vanilla crafting tables and the player 2 × 2 crafting grid in their inventory. There is currently no way to opt into one but not the other. Crafting recipes additionally support custom tags, linking recipes to a [crafting grid provided by a custom block](/blocks/blocks-16.html#minecraft-crafting-table).

### Shapeless Recipes
Shapeless recipes simply bind a collection of inputs to a single output on a crafting grid.

<CodeHeader>BP/recipes/decorations/knobs/brass.json</CodeHeader>
```json
{
	"format_version": "1.17.41",
	
	"minecraft:recipe_shapeless": {
		"description": {
			"identifier": "wiki:brass_door_knob"
		},
		"group": "handles",
		"tags": ["construction_bench"],
		
		"ingredients": [
			"manorisms:brass",
			{
				"item": "manorisms:screw",
				"data": 2
			}
		],
		"result": {
			"item": "manorisms:door_knob",
			"data": 3
		}
	}
}
```

#### Ingredients
The required `"ingredients"` array property lists the items required as inputs for the crafting recipe.

<CodeHeader>#/minecraft:recipe_shapeless/</CodeHeader>
```json
"ingredients": [
	"manorisms:brass",
	{
		"item": "manorisms:screw",
		"data": 2
	}
]
```

Each entry is an [item descriptor](#item-descriptors). If an ingredient provides a count, that count must be expressed across multiple crafting grid slots. Using stacked items in a single grid slot to yield a product is unsupported. If the items required for crafting are available but the count of ingredients is greater than the crafting interface being used supports, the recipe will automatically be made unavailable in the recipe book.

#### Shapeless Results
Shapeless recipe outputs are expressed using the required `"result"` property and may be expressed as either an [item descriptor](#item-descriptors) or an array of a single item descriptor.

<CodeHeader>#/minecraft:recipe_shapeless/</CodeHeader>
```json
"result": {
	"item": "manorisms:door_knob",
	"data": 3
}
```

### Shaped Recipes
Shaped recipes enforce that the ingredients used during crafting conform to a strict shape.

<CodeHeader>BP/recipes/covered_arch.json</CodeHeader>
```json
{
	"format_version": "1.17.41",
	
	"minecraft:recipe_shaped": {
		"description": {
			"identifier": "wiki:covered_arch"
		},
		"tags": ["crafting_table"],

		"pattern": [
			"SSS",
			"I I",
			"I I"
		]
		"key": {
			"S": "garden_dreams:cloth",
			"I": "garden_dreams:support"
		},
		"result": [
			{
				"item": "garden_dreams:covered_arch",
				
				"count": 3
			},
			"garden_dreams:crafting_scrap"
		]
	}
}
```

#### Patterns
The required `"pattern"` array property establishes the shape used for the recipe.

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>
```json
"pattern": [
	"SSS",
	"I I",
	"I I"
]
```

Each entry in the array is a string representing a row in the crafting grid. Each character in each string represents a slot within that row. Spaces by default represent slots that should be empty.

Characters act as a shorthand to visually describe an item. Each distinct character is matched with a [key](#keys) that dictates what item should be present in that slot.

::: tip
If the pattern is only comprised of spaces, empty crafting interfaces able to fit that pattern's size will constantly match the recipe. A player may retrieve an infinite amount of the crafting output, including immediately filling their inventory to the limit upon shift-retrieving the result.
:::

##### Row Normalization
The pattern grid must be at most 3 × 3 but may be smaller. If string lengths are mismatched, Minecraft will automatically extend shorter strings, implying spaces in filled slots. The following two are equivalent:

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>
```json
"pattern": [
	"MA",
	"IFI",
	"M"
]
```

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>
```json
"pattern": [
	"MA ",
	"IFI",
	"M  "
]
```

::: tip NOTE
Currently, no crafting grids, including those configurable from custom blocks, may be larger than 3 × 3. If the expressed pattern is unusable within the current crafting interface, the recipe will automatically be unavailable in the recipe book.
:::

##### Grid Freedom
Spaces are not automatically implied to fill in any remaining slots in the 3 × 3 space. If a provided pattern is smaller than the crafting grid being used, the pattern can be used anywhere so long as the structure and contents are maintained. As an example, consider the following pattern on a crafting table:
<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>
```json
"pattern": [
	"O"
	"OO"
]
```

The "L" shape isn't restricted to the upper-left corner of the crafting grid. Using a 3 × 3 grid as an example, the pattern would be usable with any of these configurations:

<Spoiler title="Possible Configurations">
*Underscores represent empty slots.*
```txt
O__
OO_
___
```
```txt
_O_
_OO
___
```
```txt
___
O__
OO_
```
```txt
___
_O_
_OO
```
</Spoiler>

To restrict placements to a particular location, use explicit spaces, which enforce empty slots in certain locations. The following is only usable in the upper-left corner of a grid:
<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>
```json
"pattern": [
	"O  "
	"OO "
	"   "
]
```

##### Symmetry
All shaped recipes are innately horizontally symmetric:
<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>
```json
"pattern": [
	"Z  "
	" Z "
	"  Z"
]
```

The preceding recipe may also be used by a player as though it were set to:
<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>
```json
"pattern": [
	"  Z"
	" Z "
	"Z  "
]
```

#### Keys
Keys provide meaning to characters in a [pattern](#patterns), done via the required `"key"` object property, which maps key names to [item descriptors](#item-descriptors).

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>
```json
"key": {
	"S": "garden_dreams:cloth",
	"I": "garden_dreams:support"
}
```

Every key present in the pattern should be accounted for here. Keys names are case-sensitive. If an item supports multiple data values and no data value is provided, any item of that identifier will be usable for that key. Any `"count"` property present in an item descriptor is ignored and regarded as `1`; stacked items in a crafting grid slot are only consumable one at a time.

::: tip NOTE
Any unicode character from `U+0020` to `U+07FF` may be used as a key name. If a key name has more than one character, only the first character is considered. Since spaces are by default used to signify empty slots on a grid and there's no way to re-designate a key for a blank slot, it's not recommended to use them as a key.
:::

::: warning
If a character in the pattern is not present in the key map, it will be treated as though it were a space, a designated empty tile.
:::

#### Shaped Results
Shaped crafting recipe outputs behave very similarly to their [shapeless counterparts](#shapeless-results). Unlike array results for shapeless recipes, however, shaped recipe result arrays may contain more than one [items descriptor](#item-descriptors).

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>
```json
"result": [
	{
		"item": "garden_dreams:covered_arch",
		
		"count": 3
	},
	"garden_dreams:crafting_scrap"
]
```
The first entry in the array will be used as the visible output of the crafting block. All other values are automatically placed in the player's inventory upon removing the visible result from the output slot. There does not seem to be a limit on the number of items that may be returned from a crafting action.

::: tip NOTE
Any items not able to fit in the player's inventory are instead placed in the input slots of the crafting table left-to-right and then top-to-bottom. Anything not able to fit there is then thrown from the player as though they had used the "Drop Item" action.
:::

### Recipe Book
The recipe book automatically indexes and displays available recipes to the player, intelligently accounting for [ingredient counts](#ingredients) in shapeless recipes or [pattern constraints](#patterns) in shaped recipes. When multiple recipes point to the same output, the recipe book uses its own unique prioritization system.

When both recipes being compared are shapeless recipes, the following rules determine prioritization in order:
- Lower ingredient count of the *first* listed ingredient
- More negative [priority](#priority)
- Lower-valued identifier string

For shaped recipes, recipes with "lesser" identifiers, when compared as strings, are always prioritized.

When comparing a shaped recipe to a shapeless recipe, the rules for comparing shapeless recipes are used; however, the interpreted count of ingredients for the shaped recipe is different from its actual ingredient count. Exactly how the ingredient count for a shaped recipe is determined is unknown.

### Grouping
This section is included informatively. Groups are present in crafting recipes in vanilla definitions, given with the optional `"group"` string property.

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>
```json
"group": "slingshots"
```

It is currently unknown what, if anything, this property achieves. Presumably, it would be used with the [recipe book](#recipe-book). Neither using new custom groups nor reusing groups from vanilla definitions appear to achieve anything.

### Priority
Crafting recipes support an additional property for handling input collisions, `"priority"`, which primarily acts as a [tiebreaker](#prioritization) when multiple recipes could possibly apply to the given situation. Priorities are provided directly within the crafting recipe type object.

<CodeHeader>#/minecraft:recipe_shaped/</CodeHeader>
```json
"priority": 2
```

Crafting recipes with lower priority values take precedence. So, if all else is equal, a recipe with a priority of `0` would be used over a recipe with priority `1`. Priorities may be negative if necessary. If `"priority"` is not provided, a priority of `0` is implied.

## Heating
Heating recipes are used to transform an item using a heat source over a period of time.

<CodeHeader>BP/recipes/magic/magic_ash.json</CodeHeader>
```json
{
	"format_version": "1.17.41",
	
	"minecraft:recipe_furnace": {
		"description": {
			"identifier": "wiki:magic_ash"
		},
		"tags": ["soul_campfire"],
		
		"input": "voodoo:bone_fragments"
		"output": {
			"item": "voodoo:magic_ash",
			
			"count": 4
		}
	}
}
```

All vanilla heating blocks are supported via tags.

<CodeHeader>#/minecraft:recipe_furnace/</CodeHeader>
```json
"tags": ["furnace", "blast_furnace", "smoker", "campfire", "soul_campfire"]
```

### Heating Transactions
Heating recipes bind exactly one input [item descriptor](#item-descriptors) to exactly one output item descriptor.

<CodeHeader>#/minecraft:recipe_furnace/</CodeHeader>
```json
"input": "voodoo:bone_fragments"
"output": {
	"item": "voodoo:magic_ash",
	
	"count": 4
}
```

Any count given in the input is ignored. XP returns and fuel sources for a cooking and smelting recipe cannot be altered. The time required to heat an item is set by the used block and is unchangeable.

## Brewing
Brewing recipes are used to transform an item using another item as a catalyst. Two brewing recipe types are available: [brewing mixes](#brewing-mixes), which do not transition data from input to output, and [brewing containers](#brewing-containers), which do.

Only one interface supports brewing recipes:
<CodeHeader>#/minecraft:recipe_brewing_container/</CodeHeader>
```json
"tags": ["brewing_stand"]
```

### Brewing Transactions
Brewing transactions are similar to [heating transactions](#heating-transactions), requiring an input and output, each pointing to a single [item descriptor](#item-descriptors). Brewing recipes, however, also require the `"reagent"` property as a catalyst, which also can only point to a single item descriptor.

<CodeHeader>#/minecraft:recipe_brewing_mix/</CodeHeader>
```json
"input": "moonsent:flask",
"reagent": "moonsent:jade",
"output": "moonsent:insanity_resistance"
```

Provided count values are ignored in these brewing properties. Items are meant to transform one at a time in a brew.

::: warning
If the input item for a brewing recipe has the ability to stack, the *entire* stack will be consumed in the transformation. There are currently no workarounds to avoid this.
:::

After the brewing time has passed, the catalyst is consumed, and output items directly replace input items.

::: warning
Currently, the stackability of the produced output is bugged, regardless of whether a data value was specified. In particular, the output is incompatible and will not stack with items of the same identifier and data value.
:::

### Brewing Mixes
Brewing mixes are simple brewing recipes theoretically designed to isolate the data value of the input from the data value of the output.

<CodeHeader>BP/recipes/brewing/negative/paralysis.json</CodeHeader>
```json
{
	"format_version": "1.17.41",
	
	"minecraft:recipe_brewing_mix": {
		"description": {
			"identifier": "wiki:paralysis_brew"
		},
		"tags": ["brewing_stand"],

		"input": "shakeshifted:amberglass_flask",
		"reagent": "shakeshifted:viporfly_poison",
		"output": "shakeshifted:paralysis_brew"
	}
}
```

::: warning
Unfortunately, assigned data values are broken for brewing mix recipes.

In general, a brewing recipe will never work if a data value is supplied to the input. The only exceptions are if the input is one of the following:

- `minecraft:potion`
- `minecraft:splash_potion`
- `minecraft:lingering_potion`
- [Potion identifier additions](#identifier-additions)

If a data value is specified for a reagent using the `"data"` property format, a brew occurs when any item with the given identifier is placed as a reagent for that recipe, regardless of data value. However, the brew only succeeds if the correct data value is matched. If it’s not, the brew will appear to succeed, but the input will not be transformed into the output; despite the brew failing, the reagent and a percentage of the blaze powder fuel are consumed anyway.
:::

### Brewing Containers
Brewing containers are designed to pass the data value of an input to the transformed output.

<CodeHeader>BP/recipes/illumination_potion.json</CodeHeader>
```json
{
	"format_version": "1.17.41",
	
	"minecraft:recipe_brewing_container": {
		"description": {
			"identifier": "wiki:illumination_potion"
		},
		"tags": ["brewing_stand"],

		"input": "minecraft:potion",
		"reagent": "ggx:radiant_berries",
		"output": "ggx:illumination_potion"
	}
}
```

Brewing containers are stricter than [brewing mixes](#brewing-mixes) about their inputs. Only the following item types are allowed in a brewing container recipe:

- `minecraft:potion`
- `minecraft:splash_potion`
- `minecraft:lingering_potion`
- [Potion identifier additions](#identifier-additions)

Because the data value is carried downstream from input to output in a brewing container recipe, assigned data values in `"input"` and `"output"` are ignored.

## Overrides
As with all domains in add-ons, the pack order in the behavior pack list affects how Minecraft chooses files to use during gameplay. Higher-listed behavior pack entries take priority over lower-listed ones, including the base vanilla pack.

To override a recipe in a lower-listed pack, the recipe type and identifiers must both match. The override file can be named and located in any way — only the contents matter. Partial overrides are not accepted in recipes; the entire recipe must be redefined.

::: warning
Overrides only work if the type is an *exact* match. In most cases, a mismatch results in a new recipe created alongside the existing one.

If attempting to construct an override that converts between the two crafting recipe types, an error will be thrown. To circumvent this, first copy the vanilla definition into the pack. Next, set the `"tags"` for that file to `[""]`; this effectively disables the recipe. Finally, set up a new file as the other crafting recipe type, choosing a different identifier to avoid the error.
:::

## Prioritization
After considering [overrides](#overrides), if multiple recipes would apply based on the inputs, the outputs are selected using the following tiebreakers, considered in order:
- Recipes declared in higher-ordered packs in the world behavior packs list
- If for crafting recipes, *lower*-valued [priority properties](#priority)
- If for crafting recipes, [shaped recipes](#shaped-recipes) over [shapeless ones](#shapeless-recipes)
- "Lesser" identifiers, as interpreted by string comparison
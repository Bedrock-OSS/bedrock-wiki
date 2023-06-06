---
title: Biomes
category: General
tags:
    - guide
    - experimental
mentions:
    - SirLich
    - solvedDev
    - stirante
    - Joelant05
    - destruc7ion
    - SmokeyStack
    - MedicalJewel105
    - aexer0e
    - Apex360
    - Luthorius
    - TheItsNameless
    - ThomasOrs
    - SmokeyStack
---

_Last updated for 1.16.210_

:::warning
As of 1.18, Custom Biomes are broken for Minecraft Bedrock
:::

:::warning
Biome customization is _experimental_. An experimental gameplay toggle must be enabled for each world that uses behavior packs containing biome definitions. What is currently available works well if declared correctly; however, incorrectly declared components and properties may result in crashing as opposed to just logged errors. Furthermore, due to issues caused by the [inheritance model](#inheritance), the schema used for custom biomes is currently not well constructed.
:::

:::warning
[Nether biome generation](#the-nether) is bugged as of version 1.16.210. Nether biomes are now customized via the `"multinoise_generation_rules"` component. Custom biomes, however, currently cannot generate with this component. Meanwhile, usage of the old `"nether_generation_rules"` component in vanilla overrides will result in no generation of that biome in the Nether.
:::

Behavior packs allow for the customization of biomes. A behavior pack can either create entirely new **custom biomes** or [**overrides** for previously declared biomes](#inheritance), such as the vanilla biomes. Biomes hook into critical gameplay features, such as mob spawning, data-driven gameplay, and presentation of custom blocks. Biomes also enable a powerful system for adding decorations like flowers and trees, or even structures like towers and houses; these decorations and structures are together known as [features](#/concepts/features/), which are crucial to world generation but (generally) separate in scope and construction from biomes.

While both overrides and custom biomes provide generally the same power, custom biomes are the recommended means for creating entirely new gameplay experiences. Overrides should retain the original biome’s identity and intentions and should only be reserved for:

-   Mild surface, heightmap, or climate adjustments
-   Redistribution of biome rarity in world generation
-   Addition of new features or mobs, but only if thematically appropriate

Custom biomes should be used when _any_ unique gameplay experience is desired or if an adjustment to a previously declared biome would fundamentally change its nature. Examples of situations where custom biomes shine include:

-   A new or radical terrain is required to achieve an aesthetic.
-   Custom features, like a new tree type, need somewhere to generate.
-   An alternate or more challenging gaming experience is desired, potentially using new mobs and structures.

> There are some exceptions to these recommendations due to oversights in the biomes schema. For example, it might seem as though only vanilla overrides are necessary when attempting to force a vanilla Overworld biome to generate in additional locations, but this may be impossible because of [how biomes register themselves to be generated](#regions). This means the biome’s aesthetic may have to be cloned over several iterations of biome definition files, each with their generation rules adjusted as needed.

## Biome Definitions

Biomes are declared in a file of the form `*biome_name*.json` or `*biome_name*.biome.json` in the top-level `biomes` directory of a behavior pack. Subdirectories may not be used within the `biomes` directory to group biome definitions; all definitions within sub-directories of `biomes` will be ignored.

[Because identifiers must match the filename](#description), namespace collisions may occur with other biome-declaring packs. One strategy to avoid collisions is to use a reverse-domain name scheme. _biome_name_ may contain periods for grouping biomes in nested order, like `biomes/fancycraft.fantasy_realms.magical_springs.hills.mutated.json`. Here, `fancycraft` is the developer, `fantasy_realms` is the behavior pack, `magical_springs` is the [top-level biome](#heirarchy) name, `hills` and `mutated` are the [sub-biome](#subbiome-types) types, and `json` is the required file extension. (The optional `.biome` extension was omitted from this example.)

> Invalid JSON files declared in the top-level `biomes` directory are more likely to log errors, but they may cause crashes. Non-JSON files directly placed inside this directory are ignored. If a file exists directly inside `biomes` that begins with a `.`, the game currently always crashes. This can cause problems with files such as those used for project configuration or even the infamous [.DS_Store file](https://en.wikipedia.org/wiki/.DS_Store) on macOS.

### Format

Like all constructed assets in a behavior pack, biome definitions are written in JSON, such as:

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.13.0",

	"minecraft:biome": {
		"description": {
			"identifier": "pumpkin_pastures"
		},

		"components": {
			"minecraft:surface_parameters": {
				"foundation_material": "minecraft:stone",

				"top_material": "minecraft:grass",
				"mid_material": "minecraft:dirt",

				"sea_floor_depth": 4,
				"sea_material": "minecraft:water",
				"sea_floor_material": "minecraft:sand"
			},
			"minecraft:overworld_height": {
				"noise_params": [0.125, 0.0625]
			},

			"minecraft:climate": {
				"temperature": 0.375,
				"downfall": 0.25,
				"snow_accumulation": [0, 0.5]
			},

			"minecraft:overworld_generation_rules": {
				"generate_for_climates": [["cold", 1]],

				"hills_transformation": "pumpkin_pastures_hills",
				"shore_transformation": "pumpkin_pastures"
			},

			"overworld": {},
			"pumpkin_pastures": {},

			"animal": {},
			"monster": {}
		}
	}
}
```

> Invalid JSON — like with all aspects of addons — causes a biome definition to fail; that biome will not generate in the world. Unfortunately, no error will be thrown. A JSON validator and/or syntax highlighter easily makes this a non-problem.

#### Format Version

<CodeHeader></CodeHeader>

```json
"format_version": "1.13.0"
```

The top-level property `"format_version"` describes the version specification to which the proceeding schema conforms. The latest issued `"format_version"` for biomes is `"1.13.0"`.

> A previous version for 1.12 existed but has been deprecated and is unusable in newer versions. In it, the biome identifier acted as the key for a top-level object property, which itself contained the format version, components, and tags directly. This document exclusively uses the `"1.13.0"` format, but the deprecated one may be seen elsewhere.

The version must be of the form `*release*.*major*.*minor*`, where either _minor_ or both _major_ and _minor_ are optional. All 3 identifiers must be integers, but the completed version numbers do not have to represent a real version of Minecraft. Currently, any version number greater than or equal to `1.13.0` may be used and will refer to the `1.13.0` specification, but it is recommended to only use the value `1.13.0` or the version targeted during development: future versions may affect the overall schema.

#### Biome Specification

<CodeHeader></CodeHeader>

```json
"minecraft:biome": {
	…
}
```

The other top-level property is `"minecraft:biome"`, which establishes the schema for the biome definition.

##### Description

<CodeHeader></CodeHeader>

```json
"description": {
	"identifier": "pumpkin_pastures"
}
```

The `"description"` property of the `"minecraft:biome"` property is used as the metadata for the biome. It currently contains only one property, `"identifier"`, which is used to uniquely identify a biome. The value here must match the file name, sans the `.json` or `.biome.json` extensions. For example, if the identifier is `prairie`, the filename must be either `prairie.json` or `prairie.biome.json`. This identifier is used for referencing from a number of biome definition properties.

> Unlike other aspects of addons, biomes do not accept a filename-ignored namespace prefix (such as `elysium:`) in their identifier. Such a prefix may be provided, but the file would have to contain the prefix, including the colon; such a filename is invalid on many Minecraft-supporting file systems, so this traditional namespace system should not be used. Consider a [reverse domain name system](#biome-definitions) instead.

##### Components

<CodeHeader></CodeHeader>

```json
"components": {
	…
}
```

The `"minecraft:biome"` property also holds the `"components"` property, which is the meat of a biome definition. The components declared here place, shape, and style biomes.

> Component details are scattered throughout the rest of this document; they cannot be as neatly described or organized as these wrapper properties due to intricacies in their interactions.

Components are always object properties, even those that should seemingly act as booleans. For example, the `"minecraft:ignore_automatic_features"` component property is not assigned `true` or `false`, but instead an empty object, `{}`:

```json
"components": {
	…

	"minecraft:ignore_automatic_features": {}
}
```

Although the JSON may be invalid, properties of the same name representing components may be used within the `"components"` object. Although this situation should be avoided, it should be noted that only the last provided instance of a component will be used by the game: the values inside the earlier defined component(s) will be completely ignored. For example:

```json
"components": {
	…

	"minecraft:overworld_height": {
		"noise_type": "ocean"
	},
	"minecraft:overworld_height": {
		"noise_params": [1.25, 0]
	}
}
```

Despite the fact that the `"noise_type"` property would [typically completely override](#heightmap) the `"noise_params"` property, the preset will be ignored in this example due to the order of the components within the `"components”` object.

When a component is used in a biome definition, _all_ of its required properties must be provided; if they aren’t, an error will be thrown and the biome will fail to generate.

> Because of how the inheritance model works, if incomplete components across the inheritance chain for a biome definition would contain the properties needed to complete the schema for that component, the component will work correctly. Interestingly, this situation is not true when both components reside inside the same biome definition file. As described before, only the latter component will be used, even if it is missing required properties.

###### Tags

<CodeHeader></CodeHeader>

```json
"components": {
	…

	"overworld": {},
	"pumpkin_pastures": {},

	"animal": {},
	"monster": {}
}
```

In addition to the components that work to create a biome, the `"components"` property also allows for the addition of arbitrary tags. Tags appear like empty components, e.g., `"animal": {}`. Tag names must conform to the regular expression `[a-z0-9_.:]+`, that is: lowercase Latin letters, Arabic numerals, underscores, periods, and colons.

> For future-proofing, it is not recommended to create a tag with the prefix `minecraft:` to ensure a tag does not clash with a future Mojang-defined component. Furthermore, it is suggested to use a pack-specific namespace with these tags to minimize collisions with other behavior packs, such as `"betterbiomes:arboreal"`.

### Inheritance

Biome definition files can act as initial definitions or overrides depending on behavior pack ordering. The earliest appearance of a biome definition in a behavior pack stack marks the creation of a custom biome; subsequent definitions of the same biome in the behavior pack stack can modify or override earlier definitions through inheritance.

Only components and tags in the `"components"` property are inherited. Properties within an individual component are also usually inherited. Unfortunately, some components or component property objects require complete redeclaration of all their properties to work, meaning it is often better to redeclare an entire component when overriding. Inheritance always occurs unless a new component would interfere with a previously existing component, as is typically the case with [surface builders](#inheritance-considerations).

There is no way to indicate a property should be removed from earlier definitions. This can especially be troublesome with [tags](#tagging) due to their usage in signifying biome placement and how they power other gameplay elements like mob spawning. If conflicts arise due to inheritance issues, it is recommended to extract the desired elements of a biome into a new custom biome and attempt to remove the old biome from [world generation](#generation).

Biome files may uselessly be empty if overriding a previously declared biome. If a biome definition, initial or override, contains any components, it must contain the top-level `"format_version"` property and down to the `"identifier"` property. Initial definitions of a biome must contain at least one component or tag; the required declaration is small because defaults for almost every biome aspect are available for fallback.

## Generation

The rules for how a biome is selected for placement in a world depend on 3 things:

1. The dimension(s) for which the biome registers itself
2. The potential for a biome to generate within a particular slot, relative to any other biomes also registered for that slot _across all behavior packs applied to a world at the time a chunk is loaded_
3. The immutable random noise surfaces used by that slot that are derived from the seed of the world

> A **slot** may represent an entire dimension or a subset of its surface area. The concept of slots does not exist in the actual documentation or schemas. This term is used here to represent a dedicated region for which a biome can be selected from a pool or where a collection of biomes are independently connected for a singular purpose.

_Biome layout is not randomized per world, only per seed._ This means that if the same addons containing the same custom biome definitions are applied to two new worlds with the same seed, each dimension in both worlds will contain the exact same biome layout. This is obvious for vanilla generation, as the same seed will always generate the same vanilla biomes in the same places.

Minecraft currently has no way of creating new dimensions. The End does not allow for either adding new biomes or removing the default one, leaving only Overworld and Nether customization possible.

> The `"minecraft:legacy_world_generation_rules"` component is noted in the Mojang-provided documentation to affect legacy limited worlds, but no schema is provided for this component and no vanilla biome definition uses it, leaving its purpose and behavior unknown.

### Overworld

<CodeHeader></CodeHeader>

```json
"minecraft:overworld_generation_rules": {
	"generate_for_climates": [
		["cold", 1]
	],

	"hills_transformation": "pumpkin_pastures_hills",
	"shore_transformation": "pumpkin_pastures"
}
```

The Overworld uses concepts of [**climates**](#climates), [**regions**](#regions), and [**hierarchy**](#hierarchy) to determine how to place biomes.

Biomes primarily interact with Overworld generation using the `"minecraft:overworld_generation_rules"` component. Here, they can register themselves as base biomes and declare their sub-biomes. The [tagging system](#tagging) unfortunately also comes into play for slotting into [regions](#regions).

Climates and regions form independent, non-configurable maps of slots that overlap across the Overworld. A biome with a specified climate slot and region slot can only generate in the relevant intersections of those slot maps for a seed. In other words, a biome can only generate into areas of the Overworld of matching climate and region types, the climate and region bindings restricting the surface area into which a biome may generate. Biomes can be slotted directly into these intersections as base biomes, while sub-biomes can be declared in these base biomes for finer terrain detailing.

Biomes compete over the available area of a slot intersection using [weighting](#climates). Biome instances are actually not predetermined based on the seed; instead, the available space in the relevant slot appears divided by the weights. Biome additions to a slot intersection will therefore result in _smaller_ biomes as opposed to _rarer_ biomes; the reverse is also true. Because the size of the climate and temperature maps are not configurable, adjusting biome weightings is the only way to modify biome sizing.

#### Climates

<CodeHeader></CodeHeader>

```json
"generate_for_climates": [
	["frozen", 2],
	["cold", 1]
]
```

Biomes must be aligned with temperature categories to generate as base biomes. To promote a biome to a base biome that will generate in the Overworld, the biome’s definition must have the `"generate_for_climates"` array property within the `"minecraft:overworld_generation_rules"` component. This array contains array values of the form `[*climate type*, *weight*]`, where `*climate type*` is one of five climate strings and `*weight*` is a whole number value reflecting the biome’s chance to generate. Biomes are generated by weight within each declared climate category _in the biomes’s declared [region](#regions)_, generating [sub-biomes](#hierarchy) within their bounds.

> The climate temperatures here are different from the [float property `"temperature"`](#temperature) in the `"minecraft:climate"` component, which is used for styling rather than placement. Traditionally, however, they correlate for gameplay purposes.

> If a float value is provided for _weight_, the value will be truncated, rounding down to the closest lesser integer. If _weight_ is set to a negative value, it will behave as though it was set to `0`.

The 5 climates are, by increasing temperature:

| Climate  | Property value |
| :------- | :------------- |
| Frozen   | `"frozen"`     |
| Cold     | `"cold"`       |
| Medium   | `"medium"`     |
| Lukewarm | `"lukewarm"`   |
| Warm     | `"warm"`       |

> The lukewarm climate is only usable in [oceans](#basic-oceans) and [deep oceans](#deep-oceans). Land only uses the other 4 climate types.

Biome weights act as numerators to a shared denominator for a slot intersection. As an example:

A fictional Biome X has a weight of 5. All the biomes placed in this target slot, including Biome X, have a combined weight of 20. Therefore, Biome X will have a 5 in 20, or 25%, chance of generating.

Vanilla biomes can typically be removed by **de-weighting**: setting the weights for their `"generate_for_climates"` property to `0` across all applicable climates. However, Minecraft actually has an [aggressive fallback system](#regions) in place to prevent generation failures caused by de-weighting, so such a strategy may not be enough to remove a biome. [De-slotting](#regions) or the addition of custom biomes may be necessary to remove a biome from generation.

> If all biomes for a climate are set not to generate, Minecraft will use biomes from other climates to fill that climate’s designated space. The fallback system can even generate biomes that were completely de-weighted or [de-slotted](#regions) into the unused climate slot, often prioritizing climate slotting over [region slotting](#regions). Because of this, it is recommended to always have at least one biome generating per climate for at least [common land](#common-land) and [oceans](#oceans). Due to its size, [rare land](#rare-land) can be ignored: vanilla generation does not even have rare land in the frozen climate.

Minecraft only allows the player’s first load in a select few biomes:

-   Plains
-   Forest
-   Taiga
-   Dark Forest
-   Savanna
-   Jungle

The variants of these biomes, such as Shattered Savannas and Flower Forests, also allow for player load-in. If none of these biomes are present due to de-weighting (and in the case of the Plains and Forest biomes, additionally being unlisted as [sub-biomes of Deep Oceans](#islands)), the player usually will not be able to load in to the world: the game most often will search for a valid spawn location endlessly.

> In some rare, inexplicable cases, the player will be thrown into a biome not ordained for player loading at the world origin after enough time has passed attempting to find a valid load-in spot.

Unlike [region slots](#regions), biomes can be registered for multiple climates. This can, for example, be used to spread a biome across different climates if it would be appropriate. An example is the Plains biome, which is spread across 3 climates:

<CodeHeader>biomes/plains.json</CodeHeader>

```json
"generate_for_climates": [
	["cold", 1],
	["medium", 3],
	["warm", 1]
]
```

If the same biome generates in two adjacent climates and these separate biome instances are next to each other, the biome will seem to combine into one with no indication of the boundaries of a climate region.

#### Regions

The Overworld is composed of many regions, which behave as slots for biome placement. Obviously split by land and oceans, the dedicated slots relate in a complicated fashion.

> The nature of a biome (its aesthetic and gameplay) do not have to conform to the intention of the region in which they are placed. The “land” and “ocean” region names used here are therefore slightly misleading: biomes slotted into the [land region](#land) can be aquatic, and those slotted into [oceans](#oceans) can represent land. These are only named as such here in reference to vanilla generation.

[As noted](#climates), biomes are directly placed into the Overworld using the `"generate_for_climates"` property in the `"minecraft:overworld_generation_rules"` component, but the values given here only affect the climate slot map. Configuring a biome to generate in a particular region is unintuitive and even undocumented by Mojang. The Overworld depends on the existence of [specific tags](#overworld-generation-aspects) to slot biomes on the region map.

In certain circumstances, biomes can be **de-slotted** from their region in the Overworld, forcing them to generate as part of a higher priority slot. This change is irreversible by later listed behavior packs, as it relies on the [biome definition inheritance model](#inheritance). Minecraft uses an aggressive fallback system that attempts to prevent generation failures when no biomes are registered for a slot intersection. Due to the aggressiveness of the fallback system, de-slotting is in some circumstances the only means of removing an unwanted biome; [de-weighting](#climates) may not be enough.

##### Land

Unlike the real world, land makes up the majority of the Overworld. Land technically contains several odd sub-slots because of a mix of interactions and restrictions with oceans. As noted above, land biomes do not actually have to represent land: this is only the designation for the slot; they can be aquatic or contain ocean sub-biomes.

There are a total of 56 vanilla land biomes, many of which are mutated or hilly forms of base biomes.

###### Common Land

<CodeHeader></CodeHeader>

```json
"generate_for_climates": [
	["cold", 1]
]
```

Common land is the largest slot in the game, making up the vast majority of land. The majority of biomes in Minecraft are slotted here, such as Deserts, Dark Forests, Plains, and Swamps. _By default, all custom biomes are slotted into common land unless marked otherwise._

```
	When all common land biomes are instructed not to generate by setting their climate weights to `0`, Minecraft fills this slot using biomes from the [rare land](#rare-land) slot, beginning with Eroded Badlands and Giant Tree Taigas. If these biomes are then de-slotted and also set not to generate, the game descends down a fallback list of biomes:

- Jungle variants
- The remaining Giant Tree Taiga variants
- Mushroom Fields
- Birch Forest variants
- The remaining Badlands variants
- Desert variants
- Custom biomes and their variants
- Forest variants
- Ocean variants

The fallback biome will then generate across the entirety of land in the Overworld. The variants selected for this list may even typically act as sub-biomes in unmodified generation. Ocean biomes are the final fallback for land because of tag inheritance: there is no way to de-slot ocean biomes into the ocean slot, as they already have the `"ocean"` tag in their vanilla definitions. Rare biomes will continue to be slotted in rare land slots until they are de-slotted into oceans.
```

###### Rare Land

<CodeHeader></CodeHeader>

```json
"minecraft:overworld_generation_rules": {
	"generate_for_climates": [
		["medium", 1]
	]

	…
},

"rare": {}
```

Rare land slots are somewhat large but very uncommon regions of the Overworld set aside for biomes. Biomes are slotted here when the `"rare"` tag is applied to them. Examples of rare biomes in vanilla generation include Jungles in the medium climate, Mesas in the warm climate, and Giant Tree Taigas in the cold climate. No rare land exists in vanilla generation for the frozen climate, but this can be added via customization:

<CodeHeader></CodeHeader>

```json
"minecraft:overworld_generation_rules": {
	"generate_for_climates": [
		["frozen", 1]
	]
},

"rare": {}
```

> Rare land biomes can be de-slotted by applying the `"ocean"` tag to the declaration. This is because the `"ocean"` tag takes precedence over the `"rare"` tag. If no `"rare"`-tagged biome is available for an instance of rare land in a given climate due to de-slotting, the game will fall back to compatible common land biomes. This situation naturally occurs in the frozen and lukewarm climates, where there are no vanilla rare biomes. If, however, a rare land biome was only [de-weighted](#climates) for a particular climate, it is still possible for that biome to generate if no other biomes are available for those climates.

##### Oceans

The rest of the Overworld is covered in oceans. Oceans are a misnomer as they do not fully connect through the world; in Minecraft, the land region instead behaves like this to give the player more room, causing oceans to behave more as seas or lakes. Biomes are slotted into the ocean region by using the `"ocean"` tag.

The oceans are prevalently split by normal and deep depths with about equal weight. Scattered islands can generate inside the ocean region. By default, there are ten ocean biomes in total: one for each combination of the five temperatures and two depths. Ocean biomes do not have to actually generate as aquatic biomes; they can be land. Furthermore, oceans can contain land sub-biomes. Plains, Forests, and Beaches, for example, are not exclusive to oceans but can generate as a part of ocean islands, themselves contained within the ocean regions.

> Ocean weighting behaves differently from other distributions. Seemingly, oceans weren’t intended to compete for space: vanilla biomes have exclusively one ocean biome for each depth-climate combination. Competing oceans of similar weights are separated on a very small scale: approximately several blocks across each instance. A greater difference in weights does more cleanly separate competing biomes, but the lesser-weighted biome will still only generate in very small clumps. Generally, it is wiser to use [surface adjustments](#surface-adjustments) or [features](#features) to transform oceans.

> If all oceans are set not to generate via [de-weighting](#climates), the game falls back to Frozen Ocean and Deep Frozen Ocean. Because of this fallback, the addition of a custom biome may be the only way to remove all the vanilla ocean biomes

###### Basic Oceans

<CodeHeader></CodeHeader>

```json
"minecraft:overworld_generation_rules": {
	"generate_for_climates": [
		["lukewarm", 1]
	]
},

"ocean": {}
```

The basic oceans make up about half of the ocean region. This region is intended to be used by aquatic biomes with a relatively shallow depth.

> [Despite how deep ocean slotting occurs](#deep-oceans), a vanilla basic ocean biome cannot be de-slotted using the `deep` tag. It will continue to generate unless it is [de-weighted](#climates).

###### Deep Oceans

<CodeHeader></CodeHeader>

```json
"minecraft:overworld_generation_rules": {
	"generate_for_climates": [
		["frozen", 1]
	]
},

"ocean": {},
"deep": {}
```

Biomes slotted into the deep ocean region use the `deep` tag in addition to the `ocean` tag. Deep oceans make up most of the space remaining in oceans. This slot is typically used with oceans extending deeper than others, often halfway to bedrock from the surface.

> The `"deep"` tag on its own has no effect on generation or spawning; it must be used alongside `"ocean"`.

###### Islands

<CodeHeader>biomes/ocean.json</CodeHeader>

```json
"minecraft:overworld_generation_rules": {
	"hills_transformation": "tropical_island"
},
```

Conceptually, islands are no different from sub-biomes in the land region. The islands that generate in vanilla are actually just “hills” in oceans!

> While these islands do not technically form a slot and are instead sub-biomes, due to what is either a bug or an oversight, they are noted as a slot due to how they must be declared. Islands are never declared for a custom ocean biome and can only be separately grouped by ocean depth. Islands are declared using either the `hills_transformation` or `mutate_transformation` properties in the `minecraft:overworld_generation_rules` component _only_ in override definitions for the `ocean` and `deep_ocean` biomes (even if these vanilla oceans have been [de-weighted](#climates)). Islands can also be declared as [mutated hills](#mutated-hills) if rarity is desired. Islands in vanilla only generate using hills sub-biomes and only in Deep Oceans; vanilla islands can therefore entirely be disabled by pointing the `hills_transformation` in an override for Deep Oceans to the Deep Ocean biome itself:

<CodeHeader>biomes/deep_ocean.json</CodeHeader>

<CodeHeader></CodeHeader>

```json
"minecraft:overworld_generation_rules": {
	"hills_transformation": "deep_ocean"
},
```

Because of [how shores are prioritized when generating land](#shores), islands in the ocean may form entirely as shores unless those shores are disabled. Islands may also have their own river sub-biome; the vanilla islands and all custom biomes by default use Rivers.

##### Mushroom Fields

Very rarely, Mushroom Fields generate within ocean regions as their own slot. The Mushroom Fields biome itself can be disabled via de-slotting by adding the `"ocean"` tag to the biome. The Mushroom Fields Shore biome, however, cannot be [disabled by any means](#exceptions) and will cover the slot in entirety when the main biome is de-slotted; this is the only biome in the Overworld whose placement is immutable. Attempting to de-slot the Mushroom Fields Shore biome into the ocean seems to work at first, but the biome will simultaneously continue generating in the mushroom fields slot.

> If Mushroom Fields are unwanted in a world, changing their style — most conveniently by making them to fit in with surrounding ocean — is the only course of action.

#### Hierarchy

<CodeHeader></CodeHeader>

```json
"minecraft:overworld_generation_rules": {
	…

	"hills_transformation": [
		["overgrown_forest_hills_short", 4],
		["overgrown_forest_hills_tall", 1]
	],
	"shore_transformation": "rocky_shore"
}
```

Overworld biomes may directly or indirectly be placed by the world generator. Biomes placed directly are here referred to as **base biomes**, while those that are placed indirectly via a base biome will be called **sub-biomes**.

If declaring a target climate temperature in the `"generate_for_climates"` property, a biome will behave as a base biome. Biomes placed directly are generally large.

All of a base biome’s sub-biomes will exist within the bounds of the base biome and lie within its associated slot intersection. These sub-biomes therefore are indirectly placed, not declaring their own generation in the Overworld but instead relying on a base biome’s generation.

> Biomes may be referenced without limitation: they may appear as a base biome and simultaneously be a sub-biome to multiple other biomes.

Sub-biomes _never_ inherit any aspects of their referencing biome. If the sub-biome should appear or behave in a manner similar to its referencing biome, it must redeclare the relevant components to do so.

##### Weighting

<CodeHeader></CodeHeader>

```json
"mutate_transformation": [
	["crater", 2],
	["lava_pit", 1]
]
```

Multiple sub-biomes may be declared for each transformation type. They may be given integer-valued weights when declared in a base biome to vary their occurrences. For example, the hills sub-biome is really just a small, common subregion of a base biome, so it can be used to form many different scenes. A single base biome may have, for example, both hill and lake “hills” sub-biomes.

> Truncation occurs when float values are used for the weights. A weight of `0.5`, therefore will behave as a weight of `0` and not generate.

The base biome may be referenced from its own weighted sub-biome declarations. [Like with base biome weights](#overworld), this has the effect of decreasing the available space afforded to actual sub-biomes, making them smaller in surface area as opposed to making them rarer by count. For a hilly base biome using hills sub-biomes, this could be used to make small, rare mountain peaks. For a dry, warm base biome using river sub-biomes, rivers could sporadically appear dried up without having to depend on hills or mutated sub-biomes.

##### Overriding

When overriding a previous biome definition, the value set to a particular sub-biome type — whether it is a direct biome reference or an array of weighted references — will fully replace any previous definitions for that type. This means that if multiple sub-biomes for a type were provided in both an earlier definition and a new override, the old sub-biomes will be completely overwritten with the new ones as opposed to adding to them.

For example, if an earlier definition declared:

<CodeHeader></CodeHeader>

```json
"hills_transformation": [
	["rolling_hills", 2],
	["spiky_hills", 1]
]
```

And a new definition declared:

<CodeHeader></CodeHeader>

```json
"hills_transformation": [
	["tall_hills", 1],
	["short_hills", 1]
]
```

Only the `"tall_hills"` and `"short_hills"` sub-biomes will generate as hills transformations. The previous listing is _entirely_ ignored. If both sets are to be used together, the previous sub-biomes must be redeclared in the new definition:

<CodeHeader></CodeHeader>

```json
"hills_transformation": [
	["rolling_hills", 2],
	["spiky_hills", 1],
	["tall_hills", 1],
	["short_hills", 1]
]
```

##### Sub-Biome Types

Base biomes may declare their own sub-biomes of these categories:

| Transformation | Property value            |
| :------------- | :------------------------ |
| Hills          | `"hills_transformation"`  |
| Mutated        | `"mutate_transformation"` |
| River          | `"river_transformation"`  |
| Shore          | `"shore_transformation"`  |

[Hills](#hills) and [mutations](#mutations) are fixed, scattered, bounded regions that may have their own sub-biomes, including [mutated hills](#mutated-hills). [Rivers](#rivers) form thin, unchangeable stretches that are spread throughout the world. The placement of [shores](#shores), meanwhile, is indirectly influenced by other biomes; they form the divide between land and oceans.

Nesting sub-biomes has no effect. Hills cannot have further hills. The same goes for all sub-biome types. Hills, mutations, and mutated hills may all declare their own river and shore sub-biomes allowing for finely tuned changes on a sub-biome scale. Rivers and shores do not generate any sub-biomes.

###### Hills

<CodeHeader></CodeHeader>

```json
"hills_transformation": "pumpkin_pastures_hills"
```

Hills sub-biomes are small, common subsets of a biome generally used for elevation shifts. Despite their name, they do not have to be used to generate hilly terrain. Their chance to generate within a base biome is common enough that they can reliably be used to form large, natural generations such as lakes, craters, and more. Hills sub-biomes are used in the vanilla Deep Ocean biome to generate islands. Hills have no default value; no changes occur in generation when not declaring a hills sub-biome.

###### Mutations

<CodeHeader></CodeHeader>

```json
"mutate_transformation": "mushroom_forest_dense"
```

Mutated sub-biomes are large, rare subsets of a base biome that are typically used for odd variations. One vanilla example is Sunflower Plains; another is Ice Spikes. Unlike the other dependently generated biome categories, mutated sub-biomes do not generate reliably. They should not be used with an expectation that they will generate within an instance of a base biome. Like hills sub-biomes, if no mutated sub-biome is declared, no transformation will occur.

###### Mutated Hills

<CodeHeader>biomes/mangrove_forest.json</CodeHeader>

```json
"hills_transformation": "mangrove_forest_hills"
```

<CodeHeader>biomes/mangrove_forest_hills.json</CodeHeader>

```json
"mutate_transformation": "mangrove_forest_hills_mutated"
```

Hills sub-biomes may declare their own mutated sub-biomes, effectively creating a mutated hills sub-biome. This very rare sub-biome generation allows all the same interactions as hills or mutated sub-biomes including having its own river and shore.

> Mutated hills **do not** generate if a _hills_ sub-biome is declared as part of a _mutated_ sub-biome.

###### Rivers

<CodeHeader></CodeHeader>

```json
"river_transformation": "riverbed_dry"
```

Rivers exist in dedicated spaces fixed to the seed of a world and are unchangeable via behavior packs. While the shape of rivers technically run everywhere in the Overworld, they only generate when intersecting with a land biome. The intersecting land biome declaration can specify a river sub-biome to apply to the stretches allocated for river generation. While the widths of rivers are not configurable, rivers may appear wider with lower [heightmap](#heightmap) configurations.

By default, Minecraft uses the River biome if the `"river_transformation"` property is not declared as part of the `"minecraft:overworld_generation_rules"` component or if this component is not declared at all. To effectively remove rivers from a biome, the `"river_transformation"` property can point to the declaring biome itself via its identifier:

<CodeHeader>biomes/ivory_shallows.json</CodeHeader>

```json
{
	"format_version": "1.13.0",

	"minecraft:biome": {
		"description": {
			"identifier": "ivory_shallows"
		},

		"components": {
			…

			"minecraft:overworld_generation_rules": {
				…

				"river_transformation": "ivory_shallows"
			}
		}
	}
}
```

This retains the biome’s surface builder and its specified blocks, heightmap, climate, etc., along the river’s route, generating the declaring biome smoothly without interruption. Rivers declared in a biome with the `ocean` tag have no effect on world generation; [slotting tags](#overworld-generation-aspects) added to a biome are ignored when it is used as a river.

When multiple rivers are given to the `"river_transformation"` property, river generation will transition rapidly between the listed biomes. At equal weights, the rivers will transition every 6–8 blocks. With greater discrepancy between weights or a greater number of river sub-biomes, rivers may only generate across a few blocks before transitioning to another river biome. Use care when generating multiple river sub-biomes: generally only one should be used per base biome.

###### Shores

<CodeHeader></CodeHeader>

```json
"shore_transformation": "cliffs_steep"
```

Shores are special stretches of land designated to generate between a land biome and ocean biomes: biomes without the `ocean` tag and those with it. Because these locations vary under customized biome definitions, shores are the only sub-biome whose location can be influenced. This is not merely restricted to the major land and ocean regions of the Overworld but can also be used between conflicting sub-biomes. Alternations such as these could be used to generate large, shallow lakes with shores or even a transition biome between [what appears to be](#oceans) two land biomes.

Like rivers, shores are declared as part of a land biome, this time using `"shore_transformation"`. The shores that generate between land and ocean biomes are _always_ selected from the land biome; adding shores to oceans has no effect on generation. [Slotting tag](#overworld-generation-aspects) additions have no effect on shores. Shores default to Beaches and can again be effectively removed by referencing the declaring biome:

<CodeHeader>biomes/lava_fields.json</CodeHeader>

```json
{
	"format_version": "1.13.0",

	"minecraft:biome": {
		"description": {
			"identifier": "lava_fields"
		},

		"components": {
			…

			"minecraft:overworld_generation_rules": {
				…

				"shore_transformation": "lava_fields"
			}
		}
	}
}
```

If removed, the base biome will ease into the ocean at a slightly steeper angle, ignoring sandy shores in favor of the blocks used by the base biome’s [surface builder](#surface-builders).

Shores are always prioritized against their referencing biome when space is small. If an area of the Overworld surface designated for a land biome would be sufficiently small, the resultant generation may just be shore, with no hint of the referencing biome in sight. This is often the case for vanilla ocean islands.

When multiple shores are given as sub-biomes, generation can rapidly transition between them. In the lightest case — 2 shores of equal weight — the game will switch biomes every dozen to 2 dozen blocks. With more shores or larger weight discrepancies between shores, sub-biomes may become too small to be useful. More than likely, only one shore will be enough for a base biome. There are, however, some exceptions to this, such as if one shore had simple sand and a second shore were to be lightly decorated with rocks or boulders.

##### Exceptions

The Mushroom Fields biome cannot have river or shore sub-biomes. [The shore that generates along its coast is unremovable](#mushroom-fields); the shores dividing Mushroom Fields from its sub-biomes marked as oceans will always be Mushroom Fields Shore. The mutations Mushroom Fields does allow can have their own river and shore sub-biomes, but this is not recommended, as the mix of biomes here can become messy in such a small space. If the Mushroom Fields biome [is de-slotted](#mushroom-fields), the Mushroom Fields Shore will act as a base biome in the mushroom fields slot and may then have its own sub-biomes.

### The Nether

<CodeHeader></CodeHeader>

```json
"minecraft:nether_generation_rules": {
	"target_temperature": 0.5,
	"target_humidity": 0.75,
	"target_altitude": -0.25,
	"target_weirdness": 0,
	"weight": 0.1
}
```

Nether generation is far more pure and allows for far greater control than the Overworld, but this comes at the cost of significantly increased complexity. [Arbitrary systems](#strategies-considerations) should be constructed on top of [the powerful provided mathematical system](#principles) for a functioning Nether layout system to work.

#### Principles

Unlike the Overworld, which defines fixed overlapping slot maps for placing biomes by random chance, the Nether uses a 4-dimensional “multi-noise” biome layout system where biomes are always placed directly; no sub-biomes exist in this dimension.

> As described in [Aspects & Targets](#aspects-targets), a biome may completely encapsulate another biome (akin to [sub-biomes](#sub-biome-types)) if both biomes are configured for this to happen.

> Despite its appearance, Nether biomes only generate depending on the _x_ and _z_ coordinates with all _y_ values at those coordinates belonging to the same biome; it is not currently possible to place a biome vertically adjacent to another biome in the Nether.

##### Aspects

In the Nether’s multi-noise system, 4 independent values are assigned to every _x_-_z_ location in the Nether based on the world seed using [Perlin noise](https://en.wikipedia.org/wiki/Perlin_noise) curves, which generate values on the closed interval [-1, 1]. These values remain constant across worlds of the same seed if the Nether-declaring biomes across all applied behavior packs remain constant — they will not change per world otherwise. For convenience, these independent values will be described here as **aspects**; the documentation does not use this vocabulary. These four aspects are assigned arbitrary names for usage in behavior packs and “targeted” by a biome definition with the following properties:

| Aspect      | Targeting property     |
| :---------- | :--------------------- |
| Temperature | `"target_temperature"` |
| Humidity    | `"target_humidity"`    |
| Altitude    | `"target_altitude"`    |
| Weirdness   | `"target_weirdness"`   |

> The names have no correlation to the properties of a biome, i.e., setting a larger `target_temperature` will not result in a warmer climate for that biome. These names are merely a way to refer to the independent aspects. [The names can be disregarded or reinterpreted as desired.](#separation-of-concerns)

###### Aspect Properties

Values generated by Perlin noise exist on the interval `[-1, 1]`, but the distribution between the extremes is not even. Perlin noise on such an interval tends to distribute similarly to a bell curve with a standard deviation of about 0.4, leading to a couple of obvious conclusions:

-   Values closer to `0` are more likely to generate; values closer and closer to the extremes become _much_ less likely.
-   The distribution is effectively symmetrical around `0`, yielding 2 even “paths” of rarity.

Because Perlin noise is an interpolated process, each aspect will be smoothly generated. This means that a generated noise curve for the Nether based on the _x_ and _z_ coordinates conforms to the [Intermediate Value Theorem](https://en.wikipedia.org/wiki/Intermediate_value_theorem): values for that dimension must smoothly transition between local maxima and minima.

> Currently, the way coordinates are mapped as inputs to the Perlin noise generators cannot be changed. This means that the distance along the horizontal plane (the _x_ and _z_ coordinates in the Nether) between local extrema is fixed; conveniently setting all biomes to be larger or smaller is impossible. Biomes may, however, appear sufficiently large with a small number of Nether-registered biomes and vice-versa.

As an example of these properties, consider a scenario where only the 5 vanilla Nether biomes generate. [Isolating a single aspect](#ignoring-aspects) for the example, temperature, all other aspect targets will be set to `0`. The vanilla biomes will be mapped to temperatures as such:

| Biome           | Temperature |
| :-------------- | ----------: |
| Soulsand Valley |        `-1` |
| Warped Forest   |      `-0.5` |
| Nether Wastes   |         `0` |
| Crimson Forest  |       `0.5` |
| Basalt Deltas   |         `1` |

This means that Soulsand Valleys and Basalt Deltas act as extremes; they will be isolated and uncommon and form simple, often convex shapes. In the middle, Nether Wastes will often wind seemingly endlessly in a loose, wavy shape. The two forests will form large rings between the mean and extremes. In other words, because of interpolation, a player would have to move through the Warped Forest, Nether Wastes, and Crimson Forest biomes in that order to reach a Basalt Delta from a Soulsand Valley.

Unfortunately, actual generation is much less convenient to understand. With 4 dimensions, configurability of target matching, and virtually no limit on biome count, it can be much more challenging to create a compelling Nether layout. However, by [understanding targeting](#targeting) and [constraining and isolating target values and fine-tuning the weightings](#strategies), an interesting layout can be achieved with minimal trial and error.

##### Targeting

With particular values set for each aspect at a spot in the Nether, Minecraft then uses biome definitions to determine which biome will be selected for generation. Unlike the Overworld, the same biomes will always generate for the same target values; there is no hidden randomness here. This is because the game uses a formula to determine the biome whose aspect targets most closely match the values at a given position. The declared targets never change in a game session, so that biome would always be selected for those values.

> The exact formula used to determine the closest matching biome to a set of values is unknown. It can be expected to be either a simple sum of absolute value differences or a 4-dimensional distance formula.

It can therefore be understood that every Nether biome shares a portion of the 4-dimensional space that is formed from the intersections of valid aspect values. The divides between these forms are derived from the aspect targets of “adjacent” and therefore competing biomes.

Again [considering a single aspect](#ignoring-aspects) (Aspect 1) for the sake of simplicity, imagine attempting to distribute 3 biomes: Biome A, Biome B, and Biome C. Because of how targeting finds a closest match, success intervals are formed based on the targeted values, which is what will ultimately decide where a biome generates.

As one specific example, imagine targeting the most extreme values on the range:

| Biome   | Aspect 1 target | Success interval |
| :------ | --------------: | ---------------: |
| Biome A |            `-1` |       [-1, -0.5] |
| Biome B |             `0` |      [-0.5, 0.5] |
| Biome C |             `1` |         [0.5, 1] |

In this case, even though the targeted values are evenly spread along the range, the intervals derived from these values are not the same size. This is because the targets are pushed to the limits of the range, with midpoints between the targets of means and extremes existing at -0.5 and 0.5; it is these 2 values that ultimately divide the resultant intervals. In this scenario, Biome B will be very prevalent across the Nether, while Biomes A and C will be noticeably less common.

Attempting to evenly distribute the intervals by approaching the problem in reverse reveals that the full noise range can be divided into thirds via [-1, -1/3], [-1/3, 1/3], [1/3, 1]. The targets must then be evenly spaced around the breakpoints, resulting in:

| Biome   | Targeted Value | Success Interval |
| :------ | -------------: | ---------------: |
| Biome A |       `-0.667` |     [-1, -0.333] |
| Biome B |            `0` |  [-0.333, 0.333] |
| Biome C |        `0.667` |       [0.333, 1] |

The space (in this case just intervals on a line segment) is now evenly divided, showing how the spatial boundaries are formed between targets.

> _However, even with the intervals being evenly spaced, [noise distribution](#aspect-properties) will still ensure the biomes don’t evenly take up 1/3 of the Nether!_ Biome B here will still be the most common, but Biomes B and C will appear more frequently than the first example. To truly evenly distribute biomes such that each would have about a 1 in 3 chance of generating, both the success interval and the noise distribution must be taken into consideration. In this example, intervals of [-1, -0.25], [-0.25, 0.25], and [0.25, 1] would approximately evenly distribute the three biomes across the Nether.

###### Targeting Adjustment

Biomes can also declare a fifth property in the `"minecraft:nether_generation_rules"` component to affect biome matching, `"weight"`, which can require the aspect values to more closely align with the biome’s aspect targets for the biome to generate. Weight is designed to behave on the interval [0, 1], where 0 causes the matching to behave as normal, and 1 will require an _exact_ match for the biome to generate.

```
Because exact matches are exceptionally rare and take up only an infinitesimal space on the map, a value of `1` will effectively disable a biome from generating unless all other biomes have radical weights, too. Using values outside the intended interval will result in further extreme situations, with only one biome of a set of radically weighted biomes being able to generate.

It is therefore not recommended to set this property outside its intended range unless removal of a previously declared biome is desired. In such a case, a value of `1` should suffice; this strategy is akin to [de-weighting Overworld biomes](#climates).

In the extreme case that all Nether-registered biomes are displaced with equal `"weight"`, Minecraft falls back to a single biome across the Nether in the following order based on availability:

- Nether Wastes
- Soulsand Valley
- Crimson Forset
- Warped Forest
- Basalt Deltas
- Custom biomes
```

Weight adjustments can therefore only decrease a biome’s size. These adjustments are helpful when using a biome to transition between two other biomes. While a biome may be made smaller by adjusting its aspect targets, this can cause a chain reaction of constantly having to revise targets in other biomes because of how they all influence each others’ generation. Using `"weight"` is a simple, singular action.

> Constantly using weight adjustments, however, can make the system even more complicated to understand, as an additional property will have to be taken into consideration everywhere it is used. For this reason, weight adjustments should be used sparingly. A general rule is to never use it in “successive” biomes: biomes that target more or less the same aspect values; leave the `"weight"` property to one side or the other.

If multiple Nether biomes have the same exact aspect targets, only one of them will generate. If a targeting adjustment is given with the `"weight"` property, the biome whose `"weight"` is closest to `0` will be selected, and the other biomes will never generate. If multiple biomes are equally distant from `0`, a fixed order is used to determine the single biome that will always generate for those targets.

> The system used for prioritizing a biome for generation under equal targets and effective weights is unknown. The biome selected does not change with each instance of a world or even a seed, so presumably it is based on the filename or biome identifier, perhaps taking behavior pack ordering into consideration, too.

#### Strategies & Considerations

In a vague mathematical system of unseeable values, it can be difficult to decide how to lay out the Nether. When going further and reinterpreting the aspects, there is no set direction, which can lead to an endless cycle of property readjustments. It is therefore paramount to establish strategies before beginning.

> Due to the arbitrary nature of meaning used in the Nether, any custom system only works when all Nether-declaring biome definitions are “on the same page”. Such a system fails when biome definitions from other behavior packs follow their own agenda. Interpretations must be conservative when Nether-altering behavior packs may compete.

> [Unlike the first player load in the Overworld](#climates), custom biomes to not need to be taken into consideration for when a player loads into the Nether anywhere via a portal; the player can enter any Nether-registered biome when first traveling through a Nether Portal.

##### Separation of Concerns

Because the aspects are completely independent and their given names are meaningless, the aspects can be reinterpreted as any system of independent properties. In a grimmer Nether, these aspects could be something like:

| Actual targeting property | Reinterpretation  |
| :------------------------ | :---------------- |
| `"target_temperature"`    | Corruption        |
| `"target_humidity"`       | Living/dead ratio |
| `"target_altitude"`       | Soul affinity     |
| `"target_weirdness"`      | Spitefulness      |

In a Nether reinterpreted as an extension of the bottom of the Overworld, the aspects could be:

| Actual targeting property | Reinterpretation   |
| :------------------------ | :----------------- |
| `"target_temperature"`    | Temperature (same) |
| `"target_humidity"`       | Darkness           |
| `"target_altitude"`       | Richness           |
| `"target_weirdness"`      | Dangerousness      |

So long as the arbitrary meanings always match the property names, any custom system can be used. Only after establishing the meaning of the aspects can the actual assignments of aspect targets commence.

###### Ignoring Aspects

Aspects can effectively be ignored for the sake of generation. By setting all targets of an aspect across all biomes definitions to the same value, such as `0`, that aspect will not play a role in determining biome layout. This can be the right option for several use cases:

-   A total of four independent parameters are not required to achieve an effect.
-   Only a small number of biomes need to be considered.
-   [Simple, dependable biome transitions](#containment-transitions) are desired.

If any of these conditions are true, some aspects should be ignored to ease development. Vanilla generation itself ignores 2 of the 4 aspects, altitude and weirdness.

###### Arbitrary Aspect Types

It can be challenging to ensure all biomes can generate [due to uniqueness requirements in biome generation under a multi-noise layout system](#targeting-adjustment). Values can be arbitrarily adjusted per-aspect, but it is cleaner and easier to impose uniqueness expectations onto each aspect, creating non-unique and unique aspects.

Non-unique aspects may have values that are not guaranteed to help uniquely place a biome. One usage of this is [tiered aspects](#tiering). Unique aspects, meanwhile, are to be used to find a distinct set of conditions in the Nether for a biome to generate.

When using such a methodology, at least one unique aspect must be used. Beyond the guaranteed one unique aspect, any of the other aspects may be unique or non-unique, but this system affords the most potential when only one aspect is expected to contain unique values.

##### Rarity

There are two primary means of establishing the rarity of Nether biomes: per-aspect rarity and the designation of one of the aspects to represent rarity itself. The latter method enables complete control over biome weighting, not too dissimilar to [the Overworld’s layout](#overworld).

###### Per-Aspect Rarity

Per-aspect rarity refers to how each aspect, no matter its functional use case or arbitrary interpretation, is [independently distributed](#aspect-properties). This distribution must be taken into consideration when targeting aspect values. With 2 symmetrical distributions of rarity with Perlin noise generations, competition for available space on an interval is typically a non-issue; the negative values can be targeted if the positive values become too cluttered. A [tiering](#tiering) plan for rarity can further ease pains caused by constrained space.

###### Independent Rarity Aspect (Weighting)

[Usage of a unique aspect](#arbitrary-aspect-types) works especially well for setting weights for Nether biomes like how the Overworld generation works. In this system, one aspect, such as weirdness, is [re-designated](#separation-of-concerns) to represent weight. Assuming the other 3 aspects are non-unique and used to represent standalone properties of a biome, this weighting can be used to pick a particular biome dependent upon the [distribution of Perlin noise](#aspect-properties) for that re-imagined aspect.

Generally, a meaningful selection of the other aspects shouldn’t necessitate great complexity within the weight aspect, but if there are a large number of possibilities desired for a given combination, the uniqueness of values and computed target intervals must also be considered. Essentially, every weight for a given combination of the other aspects must be unique [due to uniqueness requirements](#targeting). With this uniqueness in mind, the intervals derived from these targets need to be carefully spread to get the desired weightings exactly right. [Targeting adjustments](#targeting-adjustments) are useful here, but the weights may need to be adjusted across all biomes targeting the same combination when a new biome is added to the set.

When no weights are needed for a combination of the non-unique aspects because only one biome matches the conditions, a value of `0` should be targeted. This gives the maximum berth possible for that biome to generate, helping to avoid interference from unwanted biomes.

> Because masking of aspects does not exist in the Nether, this weighting system is susceptible to some minor failures caused by [the function that calculates distance in the 4-dimensional map of aspect target spaces](#targeting). For a given set of values for a point in the Nether, if a target weight is far enough from the actual value of that aspect at that point when the other 3 aspects are well-targeted, the discrepancy may cause the system to pick an undesired biome. In other words, usage of a weighting aspect is not rigid or guaranteed. However, the biome selected by the system will still be well-targeted and appropriate for the values, and the intended biome may very well show up with a smaller surface area nearby, so this system’s failures are mild.

##### Tiering

Tiering can be used to assign descriptive, qualified meaning to quantifiable values. Tiering further helps Nether biome development by imposing a sort of “schema” to which all targeting values for an aspect should conform.

Using the Overworld climates as an example, one could assign numbers to temperature meanings, like the following:

| Climate  | Temperature |
| :------- | ----------: |
| Frozen   |      `-0.6` |
| Cold     |     `-0.25` |
| Normal   |         `0` |
| Lukewarm |      `0.25` |
| Warm     |       `0.6` |

In this system, all values of this aspect across all Nether-declaring biomes should be expected to use these values. Such a system would both ensure “colder” biomes won’t generate near “warmer” biomes while also conveniently allowing for [clustering](#clustering-avoidance) of similar biomes without worrying about uniqueness. At any given time, this “schema” may be extended with additional meanings, like a “flaming hot” definition with a value of `0.8`.

##### Transitions

As described in [Aspect Properties](#aspect-properties), transitions are guaranteed to occur across a single aspect when all other aspects are [ignored](#ignoring-aspects). This can lead to long transitions or “shorelines” between biomes, depending upon the sizing of the intervals and the targeting adjustment. Achieving this effect becomes non-trivial when only adding one more aspect to consider and almost always unmanageable when using more than 2 aspects.

Regardless of implementation difficulty, the behaviors at play are simple to understand. Because the aspects are independent and each follows the Intermediate Value Theorem, transitions across the surface of the Nether are independently smooth _across every aspect_. When using multiple aspects in Nether generation, the transition between a point and another nearby point may result in changes across any of the aspects from one to another. [Because biomes always generate under the same conditions in the Nether](#targeting), every single aspect leading into to a target biome would have to be considered for a transition to occur to that target.

As an example, if a biome had the following Nether generation rules:

<CodeHeader></CodeHeader>

```json
"minecraft:nether_generation_rules": {
	"target_temperature": 0.2,
	"target_humidity": -0.6,
	"target_altitude": 0.4,
	"target_weirdness": 0,
	"weight": 0
}
```

Assuming the weirdness aspect was ignored, a transition biome would have to occur for every combination before and after each of the other 3 target aspects. Because a single biome definition cannot target multiple spots in the Nether, 8 different definitions (1 positive and 1 negative for each combination of the 3 relevant aspects) would have to be created and well adjusted to act as transitions into this target biome. Furthermore, if any of the aspect targets in this biome changed, all transition biome definitions would have to be updated to accommodate the change.

There are, however, two different scenarios where transition biomes can be used with minimal effort or complications.

###### Corner Transitions

Corner transitions can occur when the biome targeted for transitioning exists at the absolute extremes of the used aspects. An example is if the target biome targeted values of +/-1 for every used aspect. In this case, a transition biome could be created by placing values “right in front of” the target biome, like at +/- 0.8 for the same aspects.

As an example, if at target biome had the following targets (with the other 2 being ignored):

<CodeHeader></CodeHeader>

```json
"target_temperature": 1,
"target_humidity": -1
```

A transition biome could be established using:

<CodeHeader></CodeHeader>

```json
"target_temperature": 0.8,
"target_humidity": -0.8
```

###### Tiering Transitions

Tiering transitions can be used in a [tiering system](#tiering) to separate otherwise strongly opposing tiers. Unlike corner transitions, tiering transitions are fallible due to the nature of biome selection in the Nether and how available space is delegated for aspect targeting.

If a tiered aspect had the following schema:

| Life force | Value |
| :--------- | ----: |
| Undead     |  -0.8 |
| Virile     |   0.8 |

A transition mixing these two extremes would help the change between the two be less jarring. To achieve this, simply add a new transition tier, such as “Void” with a value of `0`.

In the case that this transition tier could be represented by more than one biome, the set of space dedicated to these transition biomes could end up being sufficiently large for the transition to almost always occur between the two extremes. If only one biome should act as this transition, however, the biome may need to be duplicated for combinations of other used aspects to reserve enough of the targeting space for the transition to frequently occur.

##### Arrangements

Because strict boundaries aren’t a given in the Nether’s multi-noise system, biomes are never absolutely arranged; the concept of [slotting](#regions) doesn’t exist in the Nether. However, biomes in this system can still be arranged relative to one another, so long as all targeted values across all Nether-declaring biomes are considered.

###### Clustering

Biome clustering is rather straightforward and becomes more obvious as the count of biomes registered for the Nether increases. Biome clustering occurs when a group of related biomes have sufficiently close aspect targets. To cluster biomes together, simply assign targets to each appropriate biome that are only mildly offset from one another, ensuring that each biome has its own unique values to avoid conflicts.

Due to the nature of the multi-noise system, there is no guarantee that all the biomes in a designed cluster will generate together in a cluster instance, but typically more than one will.

For biomes targeting values farther away from the averages for each aspect in the cluster, a small [target adjustment](#target-adjustment) may need to be provided to ensure the “outermost” biomes in the cluster don’t bleed too far into space that would typically be designated for biomes outside the cluster.

###### Isolation

Biomes may be isolated at the extremes of the values of an aspect. Setting a biome to target a value near the extremes (`-1` or `1`) of any aspect can help ensure the rarity of that biome. With a sufficiently large number of biomes per [used aspects](#ignoring-aspects), these isolated biomes will typically be smaller and form simple, discrete shapes due to Perlin noise interpolation. Such isolated biomes become increasingly smaller and rarer with each added aspect targeted with an extreme value.

###### Avoidance

The dual nature of the range of Perlin noise for aspects can be used to force biomes away from one another. If the biome count for the Nether is small, [transitions](#tiering-transitions) can be established to separate biomes. For larger biome counts, biomes can avoid each other by setting their targets _for a single aspect_ to opposing extremes, such as `-1` and `1`. This will effectively [isolate](#isolation) both biomes and prevent them from ever directly touching.

> Setting the values for more than one aspect target in opposing biomes to extremes is fruitless for the actual sake of avoidance. This would only work to further isolate each biome by constraining the conditions under which each could generate due to the independence of the aspects. At the same time, the minimum distance between two instances of these biomes would not decrease but would only serve to minimize the count of “close calls” due to the now compounded rarity of the biomes.

### Dimension Interactions

Dimension-specific tags used for slotting have no effect across dimensions; for example, the `"ocean"` and `"rare"` tags have no effect in generation for biomes in the Nether or The End.

Biomes may generate in multiple dimensions; they need only to register themselves for each desired place using the relevant components (currently only the Overworld and the Nether).

## Shape & Style

The actual look of a biome depends on its shape and its aesthetic. These concepts exist entirely separately from how a biome is placed, meaning that a single aesthetic can be reused in multiple places in the Overworld; as an example, vanilla Forests exist: independently as a base biome, as a sub-biome to Plains, or as an island in the ocean.

Biome aesthetic is controlled by the blocks comprising the biome and the [climate](#climate) features the biome declares. Blocks comprising a biome are predominantly declared using [surface builders](#surface-builders), but eligible surface builders also allow for noise-controlled [adjustments](#surface-adjustments).

Biome shape depends on the surface builder it declares and the biome’s heightmap settings. A biome’s shape will fluctuate per-block; these fluctuations are fixed per dimension per seed, meaning that the same shape settings for a biome at the same location in a dimension will then only vary per seed.

### Block Types

Blocks are declared using a simple notation or a stateful notation. The **simple notation** references the identifier for a block as a string, such as `"minecraft:grass"`. If no namespace is provided, the game attempts to find a registered block with that name across all declared namespaces.

> It is strongly advised to always use the complete name of a block, including the namespace, to avoid unexpected issues.

The **stateful notation** indicates block states for selecting a particular variant of a block.

> Unfortunately, block states for vanilla blocks do not currently cover every possible true state for every block; for example, not all directionally placeable blocks have a state for their orientation, like walls.

Stateful notations are objects with a `"name"` string property referring to the block identifier (like the basic notation) and a `"states"` object property providing state declarations. An example of a stateful declaration would be:

<CodeHeader></CodeHeader>

```json
{
	"name": "minecraft:concrete",

	"states": {
		"color": "red"
	}
}
```

### Heightmap

<CodeHeader></CodeHeader>

```json
"minecraft:overworld_height": {
	"noise_type": "lowlands"
}
```

Heightmaps are customized by affecting the noise a seed gives its terrain. The Overworld heightmap is adjusted using the `"minecraft:overworld_height"` component. Noises declared here can be customized using either numeric parameters passed to the noise generator or named presets of these parameters used in vanilla generation.

> **The heightmap for a biome can only be customized for the Overworld.** The Nether and The End set their biomes’ heightmaps to give themselves a consistent feel.

> If a preset is used anywhere in the inheritance chain for a biome, this preset will unconditionally override declarations of numeric parameters. This can occur if both described properties are declared in a biome definition’s `"minecraft:overworld_height"` component or when attempting to override a biome initially declared earlier in a behavior pack stack. Unfortunately, most vanilla biomes use presets, restricting heightmap adjustments in these biomes only to the set of available, non-extensible presets.

The world generator will smoothly transition between heightmaps of adjacent biomes. Gradual descents and diagonal changes in elevation are not reliably possible using heightmap adjustments. In other words, world painter-like biomes are not currently possible.

> Heightmaps cannot be used to bring the height of a biome above a _y_ of 128. The terrain will plateau out at this level. Similarly, the heightmap bottoms out near the lowest depths of deep oceans: at about a _y_ of 32. Only [features](#features) can reach outside these limits.

#### Noise Parameters

<CodeHeader></CodeHeader>

```json
"noise_params": [0.5, 0.125]
```

Noise parameters are declared as a 2-valued array using the `"noise_params"` property.

The first value represents the average height of a biome. Interestingly, this parameter does not directly use block height (the _y_ coordinate) and is scaled to where a ∆ of 1 in the value represents a ∆ of 16 blocks in the average height of a biome. Furthermore, this value is zero-set to a _y_-height of about 67, several blocks above sea level. This means that to set this value with a particular average _y_-height in mind, use the formula:

_f_(_y_) = (_y_ - 67) / 16

Therefore, setting this value to `1` will result in an average _y_-height of about 83, similar to the lesser hills in the Mountains biome. Setting this value to `-2` will result in a surface like that of a Deep Ocean, well under sea level.

> Values for the first parameters that are `-2` or less will result in bugged generation. At exactly `-2`, no heightmap is generated: only the Bedrock layer will be present. At lesser values, terrain may generate above the Bedrock layer, but giant spikes will form on biome transitions when other biomes have “normal” heightmaps. Avoid values of `-2` and less for this parameter.

The second value of the array determines height variation. Negative values behave erratically and should generally not be used; in many cases, no terrain is formed other than the bedrock foundation. A value of `0` will make terrain variance small but not make the biome completely flat. Values up to about `0.125` will generate particularly smooth terrain; values greater than this begin to form cliffs, coves, and hollows. Larger overhangs and small floating islands form beginning at `0.25`; by `0.5`, these terrain features become more common. At `1`, the terrain begins to become jagged and difficult to traverse; large, unnatural overhangs are common. Moving toward `4`, beautiful, massive floating islands dominate the landscape at the cost of player mobility. Additionally, much of the surface dips below sea level when the first noise parameter is tamer.

The terrain becomes more radical with larger values, which should generally not be used for several reasons:

-   If outside creative mode, player annoyance will be high due to limited mobility options in the early game.
-   Typically useful Molang queries, such as `"query.heightmap()"`, becomes less helpful as Nether-like shelves of land generate instead of smoother, simpler terrain.
-   Performance issues may arise with weaker computers.

The maximum and minimum offsets from the average height when using noise parameters depends on the height variation. In general, a ∆ of 1 in the second noise parameter will result in _at most_ a ∆ of +/- 16 blocks in these offsets.

> If a perfectly flat surface is desired within a biome, the second value given to `"noise_params"` should be set to `0` to minimize height variation. The first value should then be set to `4`, above the value of maximum effect, to guarantee unconditional height variations do not dip below the average height upper bound. Despite how flat these values will cause the biome interior to generate, the biome surface will still smoothly transition to lower adjacent biomes as needed, causing massive rises and falls unless all adjacent biomes are also modified to sit at this _y_-height of 128.

#### Noise Presets

<CodeHeader></CodeHeader>

```json
"noise_type": "ocean"
```

Noise presets provide a convenient way to emulate vanilla biome generation. It is not possible to create custom presets. While the exact values of these presets are hard to gauge, their names are descriptive enough to get an idea of what kind of heightmap a biome will have.

The built-in noise presets include:

| Preset          | Value               |
| :-------------- | :------------------ |
| Default         | `"default"`         |
| Mutated default | `"default_mutated"` |
| Lowlands        | `"lowlands"`        |
| Highlands       | `"highlands"`       |
| Mountains       | `"mountains"`       |
| Extreme         | `"extreme"`         |
| Less extreme    | `"less_extreme"`    |
| Taiga           | `"taiga"`           |
| Swamp           | `"swamp"`           |
| Mushroom        | `"mushroom"`        |
| Ocean           | `"ocean"`           |
| Deep ocean      | `"deep_ocean"`      |
| River           | `"river"`           |
| Beach           | `"beach"`           |
| Stone beach     | `"stone_beach"`     |

### Surface Builders

Whereas heightmaps are used to control the general shape of a biome, surface builders are used to style biomes. Surface builders provide two key mechanisms for this styling: a schema to which blocks can be assigned for actual terrain generation and optionally a set of large-scale adornments to make a biome stand out.

The optional adornments allow for biome terrain features that would otherwise be impossible using only heightmap adjustments or challenging using biome features; these adornments are either intricately shaped or massive in size. Unfortunately, there is no way to create a surface builder; the provided surface builders exist solely to represent complex vanilla biome surfaces.

> Adornmenrts created by surface builders are unfortunately fixed and not relative to the declared heightmap. This means that if the heightmap at the location of a given surface builder-created decoration is high or low enough, the decoration will not appear to exist, consumed by the land.

##### Surface Types

###### Default

###### Capped

###### Swamp

###### Mesa

###### Frozen Ocean

###### The Nether

###### The End

###### The End

The End surface is the designated surface for The End dimension and its lone biome. [Because the End’s foundation material is not configurable](#dimensional-considerations), the End surface only works to generate a top material

#### Dimensional Considerations

The Nether may be able to take on the actual surface materials of certain Overworld-specific surface builders, but the features of these surfaces, such as badlands spires, will never generate.

The End’s foundation material is not configurable in any way, even if using the only other surface type allowed in The End, [capped surfaces](#capped).

#### Inheritance Considerations

Due to biome inheritance, surface builders declared in later definitions of a biome may conflict with earlier definitions. Because each surface builder type is its own component, the default resolution system for inheritance pits the builders against each other, typically leading to some strange results.

Only the [default surface builder](#default) can be overridden. Overrides will fail if attempted for any other builder, but the inner schema of the failed override may actually yet have an effect on generation. This occurs when the schemas of two different builders share properties of the same name and type. The inheritance system here will still use the initial, un-overridable surface builder, but its block declarations will be overridden with those from matching properties from the latter-declared surface builder.

### Surface Adjustments

<CodeHeader></CodeHeader>

```json
"minecraft:surface_material_adjustments": {
	"adjustments": [
		{
			"materials": {
				"top_material": "minecraft:podzol"
			},

			"noise_range": [0, 0.5],
			"noise_frequency_scale": 0.0625,
			"height_range": [72, 255]
		}
	]
}
```

Surface adjustments allow for fine-tuning a biome's surface blocks. Despite being called "surface" adjustments, these adjustments can actually affect all blocks declared in an eligible surface builder. These adjustments cannot modify blocks outside the scope of a surface builder and therefore cannot be used to alter bedrock or air, whether the air generates in caves, above the heightmap, or between shelves of land (if the heightmap is radical enough). Currently, only the default and swamp surface builders support adjustments.

Surface adjustments declarations are implemented using objects in the `"adjustments"` property of the `"minecraft:surface_material_adjustments"` component. These declarations contain both overrides for blocks declared in the biome’s surface builder and the conditions under which these adjustments should occur.

Surface adjustment conditions can check against a [random noise surface](#noise-intersections) dependent on the _x_ and _z_ coordinates using `"noise_range"` and `"noise_frequency_scale"` or a [simple range](#height-restrictions) of _y_ coordinates via `"height_range"`. If all coordinates should be considered, both conditions can be used. For an adjustment to be applied to a location, every declared condition must succeed; it any fail, the condition check fails, and the game will fall back to the surface builder’s declared block for that location.

No default surface adjustments are forced automatically upon a biome. If no adjustments are listed anywhere along the inheritance chain for a biome, no adjustments will be observed in that biome.

#### Noise Intersections

<CodeHeader></CodeHeader>

```json
"noise_range": [-1, -0.5],
"noise_frequency_scale": 0.125,
```

A noise curve that is dependent upon the seed of a world can be used to restrict the _x_ and _z_ components of a surface adjustment. The origin of this noise curve is centered on the world origin and [can then optionally be scaled via `"noise_frequency_scale"`](#sizing) to map onto the horizontal plane of a dimension. The noise curve can therefore only work on this horizontal plane and not on the _y_ coordinate; for that, use [height restrictions](#height-restrictions). To actually use the noise curve to restrict adjustments, a success interval must be provided using `"noise_range"`.

The exact value generated from the noise curve at a particular location is inconsequential to the resultant surface adjustment. The only consideration is whether the value at that location meets the conditional check.

> Although both curves are formed based on the world seed, the noise curve used for surface adjustments is not equivalent to the noise curve used with `"query.noise"`. Their correspondence cannot be depended upon for generation.

##### Intervals

<CodeHeader></CodeHeader>

```json
"noise_range": [0.5, 1]
```

The noise curve used for surface adjustments generates values lying on the closed interval [-1, 1]. Values on this interval are targeted via a sub-interval using the `"noise_range"` property.

The noise curve itself has some notable properties that should be understood when using surface adjustments. Negative values generated by Perlin noise behave symmetrically with the positives; that is: an intersecting sub-interval to this curve [-0.8, -0.6] would theoretically have approximately the same shape and represent approximately the same ratio of the full range as the sub-interval [0.6, 0.8]. Intervals closer to `0` tend to form continually winding striations in the surface, while those further away tend to form small, discrete, well spread shapes. Intervals closer to `0` also intersect a larger range of the noise curve than intervals of equal length further from `0`; this means that if discrete shapes are desired, like those that are formed at the extremes of the noise curve’s range, a larger relative interval may be required than one targeting the winding paths close to `0`.

##### Sizing

<CodeHeader></CodeHeader>

```json
"noise_frequency_scale": 0.25
```

The surface adjustment noise curve uses a default mapping relative to the dimension coordinates that would form extremely small transformations. The noise intersections are actually made larger by setting the sizing value to be smaller. Smaller values, such as `0.125`, are key to forming large patches of transformations, such as podzol or coarse dirt clusters. Larger values of this property are typically used to create a messier feel to the terrain. Values greater than the default `1` are not recommended unless something akin to a checkerboard pattern is desired.

#### Height Restrictions

<CodeHeader></CodeHeader>

```json
"height_range": [
	"math.random_integer(30, 40)",
	"math.random_integer(60, 70)"
]
```

Height restrictions can be provided to limit the valid transformation region. These restrictions are independent of limitations using the noise curve and much simpler, too. Height restrictions are provided as an interval and simply target a range of _y_-heights to transform a region. The first value of the `"height_range"` array must be less than the second value or else the adjustment will fail.

Using integers directly will create boring layers of adjustments. However, unlike the properties establishing checks against the noise curve, the `"height_range"` property accepts Molang expressions for its elements. Using math functions, intervals can be created that are randomly spread for higher quality adjustments. Additionally, a `sea_level` variable is available that returns the sea level of the dimension for that individual instance of generation:

| Dimension  | Sea level |
| :--------- | --------: |
| Overworld  |        63 |
| The Nether |        32 |
| The End    |        63 |

> Unfortunately, queries cannot be used in these expressions, so adjustments cannot be made relative to either the heightmap a noise surface.

#### Removal

Surface adjustments from earlier definitions of a biome can be removed by matching the definitions from the biome’s [surface builder](#surface-builders) across the relevant conditions. Take, for example, the vanilla surface adjustments made to the Shattered Savanna:

<CodeHeader>biomes/savanna_mutated.json</CodeHeader>

```json
"minecraft:surface_parameters": {
	"foundation_material": "minecraft:stone",

	"top_material": "minecraft:grass",
	"mid_material": "minecraft:dirt",

	"sea_floor_depth": 7,
	"sea_material": "minecraft:water"
	"sea_floor_material": "minecraft:gravel",
},
"minecraft:surface_material_adjustments": {
	"adjustments": [
		{
			"materials": {
				"top_material": "minecraft:stone",
				"mid_material": "minecraft:stone"
			},

			"noise_range": [0.212, 1.0],
			"noise_frequency_scale": 0.0625
		},
		{
			"materials": {
				"top_material": {
					"name": "minecraft:dirt",

					"states": {
						"dirt_type": "coarse"
					}
				}
			},

			"noise_range": [-0.061, 0.212],
			"noise_frequency_scale": 0.0625
		}
	]
}
```

To revert the surface back to its original, “paint back over” the surface with the original blocks, like:

<CodeHeader></CodeHeader>

```json
"minecraft:surface_material_adjustments": {
	"adjustments": [
		{
			"materials": {
				"top_material": "minecraft:grass",
				"mid_material": "minecraft:dirt"
			},

			"noise_range": [0.212, 1.0],
			"noise_frequency_scale": 0.0625
		},
		{
			"materials": {
				"top_material": "minecraft:grass"
			},

			"noise_range": [-0.061, 0.212],
			"noise_frequency_scale": 0.0625
		}
	]
}
```

### Climate

<CodeHeader></CodeHeader>

```json
"minecraft:climate": {
	"temperature": 1,
	"downfall": 0.25,
	"snow_accumulation": [0.0, 0.125],
	"ash": 1
}
```

A biome’s climate mostly represents its ambient aesthetic. Aspects of a biome’s climate may have an effect on gameplay, but this is rarely used in vanilla. Climate adjustments work everywhere in Minecraft, even The End, but the adjustments may have no effect if a dimension doesn’t support a specific climate feature, such as [precipitation](#precipitation) outside the Overworld.

All aspects of a biome’s climate are optional. Defaults that are sensible for the Overworld are provided as fallbacks.

#### Temperature

<CodeHeader></CodeHeader>

```json
"minecraft:climate": {
	"temperature": 0.5
	…
}
```

The **temperature** of a biome affects various gameplay features like [precipitation type](#precipitation), the formation of ice and [snow layers](#snow-cover) when the appropriate blocks are directly exposed to sunlight, and the survivability of snow golems. It is implemented as the float property `"temperature"` and may be set without limitation: all possible float values may be used. Lower values represent colder temperatures. Freezing temperatures, such as where snow falls, occur below `0.15`. If no temperature is provided for a biome definition, the game will use a value of `0.5`; at this temperature, freezing effects cannot be observed anywhere blocks can be placed in any dimension.

> The effects of temperature are not restricted to the Overworld, but fewer effects may be available in other dimensions: Snow Golems may even survive in the Nether if the temperature at a _y_-height in the dimension is at freezing or below.

> The `"temperature"` property is unrelated to the climate temperatures given in either the `"generate_for_climates"` property in the `"minecraft:overworld_generation_rules"` component or the `"target_temperature"` property in the `"minecraft:nether_generation_rules"` component; the property here affects gameplay rather than biome placement.

The temperature established with this property is not the fixed temperature of a biome, only the basis; the actual temperature at a location also depends on the _y_-height. The temperature at or below sea level is fixed to this basis. Above sea level, however, the temperature decreases by 1 / 600 every block. The formula, therefore, of the temperature, _T_, at a given _y_-height, _y_, from a declared temperature basis, _t_, for _y_-heights above sea level, _s_, is given by:

_T_(_y_) = _t_ - ((_y_ - _s_) / 600)

To establish a _y_-height at which a biome will freeze, use the formula:

_t_(_y_) = 0.15 + ((_y_ - _s_) / 600)

The value of the sea level, _s_, depends on the dimension:

| Dimension  | Sea level |
| :--------- | :-------- |
| Overworld  | 63        |
| The Nether | 32        |
| The End    | 63        |

The constant 0.15 here represents the freezing temperature. Data-driven gameplay can use the temperature at the position of an entity to perform actions upon that entity using the `"is_temperature_value"` damage condition filter in an entity definition, but this is outside the scope of this document.

Vanilla biomes only use temperature values ranging from `-0.5` to `2`. Biomes to be completely covered in snow should use values less than `0.15`; `0` is the recommended value for this case. Warm biomes, such as those that would damage snow golems, should use values greater than `1`. Deserts and Nether biomes use `2`. For biomes that should only be capped with snow layers, a value between about `0.2` and about `0.4` should be used due to [how snow layer generation is affected by temperature](#snow-cover).

#### Precipitation

<CodeHeader></CodeHeader>

```json
"minecraft:climate": {
	"downfall": 0.5
	…
}
```

**Precipitation** is visible as rainfall or snowfall in the Overworld. The float property `"downfall"` controls the extent of precipitation within a biome. Currently, the property only behaves on the closed interval [0, 1]; values outside this interval are clamped to the nearest valid value. At `0` or less, this property disables all precipitation effects within a biome. At `1` or greater, precipitation effects will be maximized. Values between `0` and `1` scale accordingly.

> Due to a bug, adjustments to precipitation are _never_ reflected visually in the particles that fall when raining or snowing. Precipitation particles are never visible in Desert variants, Savanna variants, or Mesa variants, no matter their overrides; particles are _always_ visible in any other biome, including custom ones. Despite this, _most_ gameplay affected by precipitation will behave appropriately.

Examples of precipitation effects in vanilla gameplay include the addition of snow layers when snowing, the filling of exposed cauldrons in rain, and the time required for a fish to spawn when fishing. Some gameplay aspects that should consider this value will instead ignore it, such as entities with the `"in_water_or_rain"` damage filter. Lesser values of `"downfall"` will slow precipitation effects accordingly, i.e., snow layers will form a tenth as fast at a value of `0.1` as they would at `1`.

The type of precipitation occurring at a location depends on its _y_-coordinate. If the value is [freezing, `0.15`, or below](#temperature), snow will fall at that location; otherwise, rain will fall.

#### Snow Cover

<CodeHeader></CodeHeader>

```json
"minecraft:climate": {
	"snow_accumulation": [1, 0.5],
	…
}
```

When a biome is generated, blocks that are [at a freezing temperature](#temperature) typically have **snow cover** above them: snow layers stacked atop eligible blocks. The `"snow_accumulation"` property is used to adjust this snow cover. Snow covering seems to occur as one of the final passes to biome generation, meaning snow will cover features as well as the biome’s surface.

> Snow can also cover a biome post-generation as a part of [snow precipitation](#precipitation), but the `"snow_accumulation"` property has no effect in this situation. Use the [`"precipitation"` property](#precipitation) to adjust snow formation rate.

This property takes a two-valued array of float values, [*a*, *b*], where _a_ affects the average height of snow covering eligible blocks and _b_ seemingly affects the distribution of the snow.

In particular, _a_ represents the maximum block count of snow layers above blocks at a freezing temperature. On average, the snow layer block height will actually be about 40% of this value. Blocks having no snow covering will be uncommon, and blocks having the maximum snow covering will be almost impossibly rare. Because this value represents block height and each actual snow layer is only one-eighth of a block tall, float values must be used for targeting shallower snow covering. For example, to have snow cover that is at most 4 layers tall, use a value of `0.5`. At this value, almost all eligible blocks will have a covering that is either 2 or 3 layers thick.

The second value of the array, _b_, is intended to adjust snow distribution, but many values for _b_ cause erratic behavior, and even well-behaved values have little impact on generation. Values of `0` or less always result in a single layer of snow cover above eligible blocks, entirely disregarding the value set for _a_. Values exclusively between `0` and `0.125` cause a seemingly random spread of entire chunks to be only covered in a single layer of snow, while all other chunks respect the value set for _a_. Values at `0.125` or greater cause mild adjustments in snow cover that are not relative to the value set for _a_; in other words, extreme values of _a_ make alterations caused by _b_ to be virtually unnoticeable. Furthermore, the adjustments caused by _b_ only apply to a small spread of blocks, making this value rather useless at best and buggy at worst. _It is therefore recommended to just set this value to 0.5 wherever `"snow_acucmulation"` is declared._

> There is no way to conveniently avoid snow cover in frozen areas. Snow cover will not effect blocks not suitable for snow layer placement. To avoid snow, choose a warmer [`"temperature"` value](#temperature).

#### Particle Decorations

<CodeHeader></CodeHeader>

```json
"minecraft:climate": {
	…

	"white_ash": 0.5
}
```

**Particle decorations** are storms of ambient particles visible within a biome. These properties are solely decorative; unlike other aspects of a biome’s climate, particle decorations have no effect on gameplay. If not provided, no particle effects will be present in a biome. Custom particles currently may not be used. 4 different particle decorations from vanilla biomes are available to use anywhere:

| Decoration type | Property name   |
| :-------------- | :-------------- |
| Ash             | `"ash"`         |
| White ash       | `"white_ash"`   |
| Red spores      | `"red_spores"`  |
| Blue spores     | `"blue_spores"` |

These decorations will be a constant presence within a biome. If a player is within the bounds of a biome, these particles will be visible, even if underground or within water or lava. If undeclared, no particles will be used in a biome.

As they are represented as float properties in the `"minecraft:climate"` component, their intensities are adjustable. The float value works for any number greater than `0`. The larger the value, the more particles will be used simultaneously; negative values or `0` will disable the effect.

> It is not recommended to set this value too large, as the particle count may cause crashes to occur. By a value of `16`, the screen will be inundated with particles, but the biome will still be barely visible through the storm.

## Gameplay

Biomes are the starting point of much of the configurable gameplay in Minecraft. Features, such as trees and villages, can only generate as part of biomes. Automatic mob spawning can then be configured for biomes and structures. Feature attachments and mob spawning are outside the scope of this document, but there are a few configurations for biome definitions that power how biomes interact with other gameplay systems.

### Features

<CodeHeader></CodeHeader>

```json
"minecraft:forced_features": {
	"surface_pass": {
		"identifier": "pioneercraft:grasslands_caravan_feature",
		"places_feature": "pioneercraft:caravan_feature",

		"scatter_chance": "100 * math.pow(2, -4)",

		"x": {
			"distribution": "uniform",
			"extent": [0, 16]
		},
		"z": {
			"distribution": "uniform",
			"extent": [0, 16]
		},
		"y": "query.heightmap(variable.worldx, variable.worldz)"
	}
},
"minecraft:ignore_automatic_features": {}
```

If a collection of blocks generating in a world aren’t created by a surface builder, they are created from a feature. Features are fundamental to gameplay in Minecraft: vanilla features range from trees to villages to boulders. The features in a biome may handily determine that biome’s worth to a player.

Features are mostly outside the scope of biomes, but the two components within a biome’s schema affecting feature generation should be noted.

#### Forced Features

<CodeHeader></CodeHeader>

```json
"minecraft:forced_features": {
	"surface_pass": [
		{
			"identifier": "wiki:redwood_tree_feature",
			"places_feature": "wiki:redwood_tree",

			"iterations": "math.random_integer(2, 4)",

			"x": {
				"distribution": "uniform",
				"extent": [0, 16]
			},
			"z": {
				"distribution": "uniform",
				"extent": [0, 16]
			},
			"y": "query.heightmap(variable.worldx, variable.worldz)"
		}
	]
}
```

The `"minecraft:forced_features"` component can be used to force a feature to generate within a biome without using [feature rules](#/concepts/features/).

Forced features are placed in array order for each pass. When overriding a previously provided array of feature attachments for a placement pass, the previous feature attachments will be completely ignored by the override; only the new attachments will be used. To use the old attachments with the new ones, they must be redeclared within the override.

By default, no forced features are implied in a definition; if they are never declared down the inheritance chain, no additional features will exist. Note that [some features](#immutable-features) are hard-coded and cannot be removed easily.

#### External Features

The empty `"minecraft:ignore_automatic_features"` component is intended to indicate that a declaring biome will ignore all external feature rules attached to it, but this component currently does not work, whether for overrides or initial definitions.

##### Immutable Features

A few features may even generate in a custom biome with no attached tags. These features current cannot be removed conveniently:

-   Springs (water and lava “lakes”)
-   Ruined Portals
-   Mineshafts
-   Dungeons<sup>\*</sup>
-   Nether Fortresses

> The Dungeon structure may generate infrequently due to the air created from the other Overworld immutable features; its generation is typically dependent on cave systems, [which may be disabled](#caves).

These features occur before even the first placement pass of data-driven features and can even cut through the Bedrock layer. The immutable features can be overridden by data-driven features, but this is typically too challenging or expensive to consider.

One typically ubiquitous Overworld structure, Strongholds, cannot be configured to generate in custom biomes no matter what.

### Caves

Carvers generate cave-like features in the world. Unlike the Java Edition of Minecraft, the Bedrock Edition currently provides no way to customize carvers. However, cave generation can be influenced by the types of blocks used in a [biome’s surface](#surface-builders). A whitelist of blocks allow carvers to cut through them to generate caves. At minimum, these blocks include:

-   Stone
-   Dirt
-   Sandstone
-   Grass
-   Podzol
-   Mycelium
-   Sand

All of the variants of these blocks, such as Polished Andesite (a variant of Stone) can be culled by carvers. Custom blocks cannot currently be configured to be culled, often leaving heavily customized biomes without caves. Culling is not stopped by blocks not on the whitelist, so if only the top layer of a surface builder isn’t whitelisted, cave generation may resume underneath it, assuming those blocks below _are_ whitelisted.

Caves are created only after the heightmap of a surface (including its adjustments) has been constructed; decorations created from surface builders, such as icebergs, are not interrupted by cave generation. Caves are always generated in full before even the first placement pass of features occurs.

### Tagging

<CodeHeader></CodeHeader>

```json
"components": {
 …

 "urban": {},
 "city": {},
 "metro": {},

 "rare": {}
}
```

Tags power much of what brings a biome to life in Minecraft, including entity spawns, external feature attachment, and data-driven gameplay. [Because some tags are additionally used (by poor design) to determine where a biome may generate](#regions), issues may arise when attempting to separate placement from form and function. See [Tags](#tags) for the implementation details of tags.

No tags are implied based on the nature of a biome. For example, if a biome is set to generate in the Overworld, the `"overworld"` tag used on such biomes will need to be manually added to opt-in to the consequences of that tag. Another notable implication is that designated sub-biomes of a custom biome will need to redeclare the tags relevant to that biome cluster. As an example, imagine a base biome and its wooded mutated sub-biome. Regardless of the mutation, both biomes should have tall grass, which will be placed in these biomes using the `"highlands"` tag. For the base biome:

<CodeHeader>biomes/highlands.json</CodeHeader>

```json
{
	"format_version": "1.13.0",

	"minecraft:biome": {
		"description": {
			"identifier": "highlands"
		},

		"components": {
			…

			"minecraft:overworld_generation_rules": {
				"generate_for_climates": [
					["cold", 2]
				],

				"mutate_transformation": "highlands_forest"
			},

			"overworld": {},
			"highlands": {},

			"animal": {},
			"monster": {}
		}
	}
}
```

The sub-biome _must_ redeclare the `"highlands"` tag to opt in to its functionality — in this case, the addition of scattered tall grass across the surface:

<CodeHeader>biomes/highlands_forest.json</CodeHeader>

```json
{
	"format_version": "1.13.0",

	"minecraft:biome": {
		"description": {
			"identifier": "highlands_forest"
		},

		"components": {
			…

			"overworld": {},
			"highlands": {},
			"forest": {},

			"animal": {},
			"monster": {}
		}
	}
}
```

Without that tag, the sub-biome would appear barren. Transitions between the base biome and its mutation would appear strange and inconsistent.

#### Tagging Strategies

Due to the inheritance system for biome definitions, strategies should be used with tagging to separate concerns.

##### Biome Taxonomy

A taxonomical system can be created to bind biomes to other systems by putting the focus on the biome itself. Adding tags that help single out a biome by its generation rules can be useful for features that need to generate under conditions shared by a set of biomes due to their inherent nature. Some examples of a basic taxonomy would include using tags to specify:

-   A name for the basic type of biome
-   The dimension where a biome would generate
-   The [type of climate](#climates) or [strength of a defining characteristic](#separation-of-concerns) for the biome
-   [Variants](#hierarchy) of a biome

Example taxonomical tags for a theoretical Pumpkin Pastures Spooky Hills biome could include:

-   `"overworld"`
-   `"cold"`
-   `"pumpkin_pastures"`
-   `"hills"`
-   `"mutation"` (the “spooky” aspect)
-   `"spooky"`, but only if this mutated aspect were shared with other biomes

Vanilla biomes have historically relied exclusively on taxonomical systems for biome selection, often leading to verbose success conditions for spawning or generation. Here’s a snippet from the `wolf.json` spawn rules:

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
	"all_of": [
		{"test": "has_biome_tag", "operator":"==", "value": "forest"},
		{"test": "has_biome_tag", "operator":"!=", "value": "mutated"},
		{"test": "has_biome_tag", "operator":"!=", "value": "birch"},
		{"test": "has_biome_tag", "operator":"!=", "value": "roofed"},
		{"test": "has_biome_tag", "operator":"!=", "value": "mountain"}
	]
}
```

In cases such as this, another perspective can be used for tagging that eases authoring pains.

##### Spawning & Generating Perspective

Authoring spawning and generating conditions can be made much easier by shifting the tagging perspective onto feature and spawn rules. [Minecraft 1.16 began using such a system for mob spawning in the Nether.](#other-mobs) In this system, tags are attached to a biome with actual gameplay in mind. If a custom mob were to be created that wasn’t meant to neatly spawn in a convenient classification of biome taxonomy, alluding to spawn rules via tagging can keep condition checks simple.

Imagining bird mobs that could spawn in any area with trees, a tagging system could be developed dependent on how wooded a biome is. From another perspective, these biomes could also be tagged as `"forested"` and even go so far as to provide tags relating the density of trees:

| Forest cover | Feature-focused tag | Biome taxonomy-focused tag |
| :----------- | :------------------ | :------------------------- |
| Light        | `"few_birds"`       | `"lightly_forested"`       |
| Medium       | `"default_birds"`   | `"moderately_forested"`    |
| Heavy        | `"many_birds"`      | `"heavily_forested"`       |

The problem with the latter system is what can happen during development if some other gameplay aspect relies on trees existing in a biome. Continuing the scenario, pretend only the biome taxonomy system were to be used:

An abandoned forest shack structure feature meant to hide under the cover of trees is created; its feature rule will check for any of the 3 forested tags for generation. Later in behavior pack development, a new, heavily forested, toxic waste biome, Toxic Woods, is constructed with the `"heavily_forested"` tag. Abandoned shacks could make sense here to match the environment, but nature should be scarce or even missing; few or no birds should spawn. Unfortunately, the `"heavily_forested"` tag here would cause many birds to spawn, which is undesirable. The spawn rules for the birds would have to be updated to blacklist Toxic Woods.

With dozens or hundreds of biomes, features, and mobs across the game all relying on the same tagging system, such exceptions as this can add up. Consider using feature-focused tagging systems. These systems don’t have to compete with taxonomy; both types can be included and used as needed.

#### Vanilla Tags

The tags used on vanilla biomes should be noted for biome-altering behavior packs that only mildly change or add to vanilla generation. These tags could be used to emulate vanilla gameplay aspects in a custom biome.

##### Location & Variation

Most tags used in vanilla biomes are used to help organize biomes by location and variant, forming a sort of [taxonomy](#biome-taxonomy) for targeting biomes.

> A `"no_legacy_worldgen"` tag exists in the biome definition of Roofed Forests, but its behavior is unknown.

###### Dimensions

<CodeHeader></CodeHeader>

```json
"components": {
	…

	"overworld": {}
}
```

4 tags exists supporting the game’s dimensions:

| Dimension            | Tag                      |
| :------------------- | :----------------------- |
| Overworld            | `"overworld"`            |
| Overworld generation | `"overworld_generation"` |
| The Nether           | `"nether"`               |
| The End              | `"the_end"`              |

> The Overworld generation tag is required by Minecraft to support legacy features and behaviors. Features, entity spawning, and gameplay that needs to target all the Overworld should filter for both `"overworld"` _and_ `"overworld_generation"`, but the construction of this targeting is outside the scope of this document.

These tags have mixed effects on biomes but are predominantly used to further organize or filter biomes in combination with other tags. The most direct effect of any tag here is that the `"overworld"` tag is what enables ores and some other underground features to generate.

###### Biomes

<CodeHeader></CodeHeader>

```json
"components": {
	…

	"taiga": {},
	"mega": {},
	"hills": {}
}
```

A number of vanilla biome tags exist to support the specific nature of those biomes.

For the Overworld:

| Biome           | Tag                  |
| :-------------- | :------------------- |
| Plains          | `"plains"`           |
| Forest          | `"forest"`           |
| Mountains       | `"extreme_hills"`    |
| Taiga           | `"taiga"`            |
| Swamp           | `"swamp"`            |
| Flower Forest   | `"flower_forest"`    |
| Jungle          | `"jungle"`           |
| Desert          | `"desert"`           |
| Savanna         | `"savanna"`          |
| Badlands        | `"mesa"`             |
| Snowy Tundra    | `"ice_plains"`       |
| Mushroom Fields | `"mooshroom_island"` |
| Beach           | `"beach"`            |

For the Nether:

| Biome           | Tag                 |
| :-------------- | :------------------ |
| Nether Wastes   | `"nether_wastes"`   |
| Soulsand Valley | `"soulsand_valley"` |
| Basalt Deltas   | `"basalt_deltas"`   |
| Crimson Forest  | `"crimson_forest"`  |
| Warped Forest   | `"warped_forest"`   |

Two tags exists strictly to group related biomes:

| Group                          | Tag                   |
| :----------------------------- | :-------------------- |
| Snowy Tundra & Snowy Mountains | `"ice"`               |
| Crimson Forest & Warped Forest | `"netherwart_forest"` |

A few tags are used to single out unique variants:

| Variant                             | Tag         |
| :---------------------------------- | :---------- |
| Giant Tree Taiga variant            | `"mega"`    |
| Stone Shore variant                 | `"stone"`   |
| Birch Forest variant                | `"birch"`   |
| Dark Forest variant                 | `"roofed"`  |
| Bamboo Jungle variant               | `"bamboo"`  |
| Savanna & Badlands Plateaus variant | `"plateau"` |
| Jungle Edge variant                 | `"edge"`    |

###### Overworld Generation Aspects

<CodeHeader></CodeHeader>

```json
"components": {
	…

	"ocean": {},
	"deep": {},
	"warm": {}
}
```

Groups of tags exist for slotting and matching climates and transformations in the Overworld.

Three tags are used for the slotting of biomes in the Overworld. These slotting tags are:

| Slot                                                         | Tag       |
| :----------------------------------------------------------- | :-------- |
| Ocean                                                        | `"ocean"` |
| Deep ocean (when used in combination with the `"ocean"` tag) | `"deep"`  |
| Rare land                                                    | `"rare"`  |

> As described in [Regions](#regions), these tags have an actual effect on world generation. Only use these tags for biome placement.

4 tags exist for [Overworld temperature variations](#climates):

| Climate  | Tag          |
| :------- | :----------- |
| Frozen   | `"frozen"`   |
| Cold     | `"cold"`     |
| Lukewarm | `"lukewarm"` |
| Warm     | `"warm"`     |

A tag exists for [each type of Overworld sub-biome](#hierarchy):

| Sub-Biome type | Tag         |
| :------------- | :---------- |
| Hills          | `"hills"`   |
| Mutated        | `"mutated"` |
| River          | `"river"`   |
| Shore          | `"shore"`   |

##### Mob Spawning

Mob spawning is predominantly controlled by two tags: `"animal"` and `"monster"`. Finer control over the spawning of vanilla mob is provided in some special cases but often necessitates an intervention that involves both adding tags to biome definitions and overriding spawn rules to work with these new tags.

> Overriding spawn rules is outside the scope of this document.

Vanilla mobs not listed in this section are spawned via selection of vanilla biome-specific tags. As an example, Wolves only spawn in biomes tagged with `"forest"` or `"taiga"`. It is possible to tag a custom biome using one of these vanilla tags to spawn Wolves, but doing so may have unintended consequences. In this example, likely unwanted ground decorations from Forests and Taigas could generate in the custom biome. Instead, use custom tag additions, and adapt spawn rules to these new tags.

###### Animals

<CodeHeader></CodeHeader>

```json
"components": {
	…

	"animal": {}
}
```

Using the `"animal"` tag will allow Cows, Chickens, Sheep, Pigs, and Bats to spawn in a biome.

A `"bee_habitat"` tag exists, presumably to generate beehives, but it is unused.

###### Other Mobs

<CodeHeader></CodeHeader>

```json
"components": {
	…

	"monster": {}
}
```

The `"monster"` tag allows Zombies, Skeletons, Spiders, Creepers, Slime, Endermen, Witches, and Phantoms to spawn in a biome.

Beginning with Minecraft 1.16, a [new tagging strategy](#spawning-generating-perspective) was employed by Mojang in the new Nether biomes to separate biome type and location from functionality. A number of tags now exist for mob spawning in the Nether.

| Mob spawning rule                                                | Tag                             |
| :--------------------------------------------------------------- | :------------------------------ |
| Piglins                                                          | `"spawn_piglin"`                |
| Few Piglins                                                      | `"spawn_few_piglins"`           |
| Zombified Piglins                                                | `"spawn_zombified_piglin"`      |
| Few Zombified Piglins                                            | `"spawn_few_zombified_piglins"` |
| Ghasts                                                           | `"spawn_ghast"`                 |
| Magma Cubes                                                      | `"spawn_magma_cubes"`           |
| Many Magma Cubes                                                 | `"spawn_many_magma_cubes"`      |
| Endermen (only considered in biomes also tagged with `"nether"`) | `"spawn_endermen"`              |

##### Decorations

Currently, features and decorations are applied only through the [targeting of a a particular kind of biome](#location-variation); no dedicated tags exist for decorations.

---
title: Feature Types
---

# Feature Types
*Last updated for 1.17.2*

::: warning
Some links designed to reference external documents do not function, and will be updated at a later time to point to the correct resource.

Screenshots and other resources may be provided for many feature types given here at a later time.
:::

## Content Features
Content features are the fundamental feature type responsible for defining block placements in a feature system. They offer nothing in terms of arrangement or composition. Instead, they define basic arrangements of blocks and are often combined or positioned using [proxy features](#proxy-features).

### Single Block Features
```json
{
	"format_version": "1.13.0",

	"minecraft:single_block_feature": {
		"description": {
			"identifier": "beachside:pier_planks"
		},

		"places_block": "minecraft:planks",

		"enforce_placement_rules": true,
		"enforce_survivability_rules": true,
		"may_replace": ["minecraft:water"],
		"may_attach_to": {
			"top": "minecraft:air",
			"sides": [
				"minecraft:planks",
				"minecraft:water"
			]
		}
	}
}
```

**Single block features** place a single block in the world. Single block features are typically useless on their own; their real power comes in conjunction with [proxy features](#proxy-features) to construct builds.

The **target block**, the block to be placed, is specified by the `"places_block"` property. No variation capabilities are currently possible in the definition; [weighted random features](#weighted-random-features) over additional single block features must be used instead.

#### Conditions
**Conditions** can be specified to limit placement success. If any of the conditions would fail, the block will not be placed.

##### Innate Block Conditions
Single block features can allow block placement that wouldn’t be allowed in-game due to a block’s innate conditions.

When true, the required `"enforce_placement_rules"` boolean ensures a block’s innate placement check must succeed for the block to be placed; setting to false ignores this check. As an example, seeds can usually only be placed on farmland, but disabling this check can allow them to generate anywhere.

Additionally, the required "enforce_survivability_rules" boolean property will toggle whether the survivability checks of a block will succeed. If false, the block’s survivability conditions are ignored. One vanilla survivability example is living coral blocks requiring adjacent water.

::: tip NOTE
Just because the block’s survivability check was ignored for world generation does not mean it will maintain its invalid state during gameplay. Block updates will correct invalid block survivability.
:::

##### Replacement Conditions
```json
"may_replace": [
	"minecraft:air",
	"minecraft:leaves",
	"minecraft:leaves2"
]
```

Single block features may optionally specify a **replacement list** via the `"may_replace"` array to restrict the set of blocks the target block may replace. If the block at the [input position](#) of the single block feature is *not* in this list, the placement will fail.

::: warning
Unlike [attachment properties](#attachment-conditions), `"may_replace"` must be an array. It cannot be declared as a direct block reference.
:::

##### Attachment Conditions
```json
"may_attach_to": {
	"top": "minecraft:air",
	"sides": [
		"minecraft:planks",
		"minecraft:water"
	]
}
```

**Attachment specifications**, given via the optional `"may_attach_to"` property, restrict block adjacency. A property exists for each attachable side:

- `"top"`
- `"bottom"`
- `"north"`
- `"south"`
- `"east"`
- `"west"`

Each property accepts either a single direct block reference or an array of such references:

```json
"bottom": {
	"name": "minecraft:stone",

	"states": {
		"stone_type": "andesite"
	}
}
```

```json
"top": [
	"minecraft:netherrack",
	"minecraft:soul_sand"
]
```

A `"sides"` property is available as a catch-all to match `"north"`, `"west"`, `"east"`, and `"south"`. Finally, the `"all"` property matches all 6 faces. All 8 properties are optional, but at least one should be specified.

For attachment along the sides (`"north"`, `"south"`, `"east"`, `"west"`), 2 more optional properties are available for fine control.

`"min_sides_must_attach"` sets the minimum number of successes yielded by provided side properties that will result in side attachment being flagged as successful. Therefore, if this property is set to `4`, all four sides must match. If set to `2` and only 1 side matched, block placement would fail.

`"auto_rotate"` causes side definitions to be interpreted as relative associations instead of strict directions. As an example, if a block should be squeezed laterally in one dimension between two other blocks but the orientation doesn’t matter, enabling auto rotate and specifying opposing sides would allow either orientation to work.

```json
{
	"format_version": "1.13.0",

	"minecraft:single_block_feature": {
		"description": {
			"identifier": "aura_heights:force_conduit_block"
		},

		"places_block": "aura_heights:force_conduit",

		"enforce_placement_rules": true,
		"enforce_survivability_rules": true,
		"may_replace": ["minecraft:air"],
		"may_attach_to": {
			"north": "minecraft:glass",
			"south": "minecraft:glass",

			"auto_rotate": true
		}
	}
}
```

Specifically, with the preceding code, the force conduit block would be sandwiched between adjacent glass along opposing lateral sides — regardless of the orientation.

### Ore Features
```json
{
	"format_version": "1.13.0",

	"minecraft:ore_feature": {
		"description": {
			"identifier": "deepest_depths:starlite_ore_cluster"
		},

		"count": 4,
		"replace_rules": [
			{
				"places_block": "deepest_depths:starlite_ore",
				"may_replace": [
					"minecraft:stone"
				]
			}
		]
	}
}
```

**Ore features** place clusters of blocks around a target position. The blocks placed by ore features vary via [replacement rules](#replacement-rules). Only the **block count** in ore features is global, controlled by the `"count"` property.

::: tip NOTE
The shape of the cluster cannot be controlled; to achieve this, use [scatter features](#scatter-features) with a [custom distribution system](#).
:::

#### Replacement Rules
```json
"replace_rules": [
	{
		"places_block": "infinitum:exposed_pylon",
		"may_replace": [
			"minecraft:air"
		]
	},
	{
		"places_block": "infinitum:submerged_pylon",
		"may_replace": [
			"minecraft:water"
		]
	}
]
```

In ore features, **replacement rules** bind target blocks to replacement lists that restrict the target’s placement. **Target blocks** are the blocks placed by a replacement rule; **replacement lists** are optional arrays that only allow replacement of specific blocks. The block selected for a given position in the cluster will be the target block of the first matching rule.

### Structure Template Features
```json
{
	"format_version": "1.13.0",
	"minecraft:structure_template_feature": {
		"description": {
			"identifier": "forgotten_worlds:blackmoor_castle_feature"
		},

		"structure_name": "forgotten_worlds:blackmoor_castle",

		"facing_direction": "random",
		"constraints": {
			"block_intersection": {
				"block_allowlist": [
					"minecraft:air",
					"minecraft:stone",
					"minecraft:dirt",
					"minecraft:grass"
				]
			},
			"unburied": {}
		},
		"adjustment_radius": 4
	}
}
```

**Structure template features** generate structures by referencing saved structure files. These features trade power and flexibility for convenience.

The **target structure** is placed with the `"structure_name"` string property. This string follows a unique naming system to select a `.mcstructure` file from the behavior pack; it follows the form `namespace:path`. Structure files must be placed in the top-level `structures` directory; any hierarchy of folders from here is allowed but not required. If the structure file is placed directly in the `structures` directory, the default namespace `mystructure` is used. Otherwise, if placed in a directory inside `structures`, that directory name is used as the namespace. If any nesting is present within this directory, it is reflected in the path. Finally, the file extension (`.mcstructure`) is omitted.

For some examples:

| Structure file location | Associated `"structure_name"` |
|:--|:--|
| `/structures/well.mcstructure` | `"mystructure:well"` |
| `/structures/farmstead/silo.mcstructure` | `"farmstead:silo"` |
| `/structures/campsites/taiga/rustic/tents/wool.mcstructure` | `campsites:taiga/rustic/tents/wool` |

::: warning
[Due to constraints in the feature system](#), large structures may need to be pre-sliced into smaller structures and positioned together.
:::

#### Rotation
```json
"facing_direction": "south"
```

**Structure rotation** is performed using the `"facing_direction"` property, which accepts the four lateral directions: `"north"`, `"south"`, `"east"`, and `"west"`, and an additional `"random"` property to shuffle amongst them each instance. Unfortunately, rotation occurs around the [structure origin](#), so large structure may be cut off during this rotation.

::: warning
Because of how random rotation is handled, structure features typically need to be proxied by [weighted random features](#weighted-random-features) and [scatter proxies](#scatter-features) that offset position.
:::

#### Constraints
```json
"constraints": {
	"block_intersection": {
		"block_allowlist": [
			"minecraft:sand",
			"minecraft:sandstone",
			"minecraft:stone"
		]
	},
	"unburied": {},
	"grounded": {}
},
"adjustment_radius": 4
```

Structure features can enforce **constraints** using the required `"constraints"` property to restrict block intersection, adjust the placement position, and clear the space above the features using air. Although the property and its object (`{}`) are required, all sub-properties are optional.

##### Block Intersection
```json
"block_intersection": {
	"block_allowlist": [
		"minecraft:end_stone"
	]
},
```

The set of blocks the structure may replace are given by the **block allowlist**. If even one block within the structure’s attempted volume is not in the allowlist, the structure will not be placed at that position. If no block intersection is provided, the structure may replace all blocks.

To accommodate such intense placement restrictions, the `"adjustment_radius"` property is available (outside the scope of the constraints object); it accepts values from `0` (the default) to `16`. During placement, Minecraft will begin at the input position and radially search laterally outward up to the number of blocks specified by this property. Each corresponding volume will be checked for validity until a success is found.

##### Ground Projection
```json
"grounded": {}
```

The `"grounded"` component alters the vertical position of the structure by projecting it into the ground. In particular, the heightmap of each intersecting column of the structure’s volume is examined, and the lowest height is selected. This prevents structures from awkwardly overhanging over ledges by preventing any such ledge from existing at all.

##### Top Clearance
```json
"unburied": {}
```

The `"unburied"` component clears the space above a structure by several blocks using air. This can ensure a structure isn’t submerged by overhangs in the terrain.

### Growing Plant Features
```json

```

**Growing plant features** place columns of blocks divided in two parts: a body and a head. Both can be randomized per-block for fine-tuned customization.



### Tree Features
```json

```

**Tree features** generate tree-like shapes. Tree features allow for more customization than any other feature type, including:

- Setting wood and leaf blocks
- Adding tree face decorations
- Restricting foundation and intersection blocks
- Customizing branch frequency and angle

Tree features are composed of *many* sub-properties to reflect the many variations of tree shapes found in vanilla gameplay. In general, these properties are divided into [condition](#condition-properties), [wood](#wood-properties), and [leaf](#leaf-properties) properties.

#### Condition Properties
Attachment and intersection blocks for the tree are specified using **condition properties**.

#### Wood Properties
**Wood properties** establish the trunk and branches.

#### Leaf Properties
Tree canopies are constructed using **leaf properties**.

### Multiface Features
```json

```

::: warning
Multiface features are currently bugged and should not be used.
:::

Multiface features randomly place sequences of blocks based on the success of the previous element of the sequence; additionally, they automatically orient blocks designed to attach to multiple faces, such as glow lichen, on placement.

## Proxy Features
Proxy features group, arrange, or gate features, including other proxy features. Proxy features themselves are incapable of having a direct effect on world generation.

All proxy features must therefore point to one or multiple **target features**: the features that are placed, rearranged, or selected by proxy features. Target features are represented as string references to the identifier of the intended feature.

### Scatter Features
```json
{
	"format_version": "1.13.0",

	"minecraft:scatter_feature": {
		"description": {
			"identifier": "arboreal:flower_patch"
		},

		"places_feature": "arboreal:flowers",

		"scatter_chance": {
			"numerator": 2,
			"denominator": 3
		},
		"iterations": "v.flower_patch.size = math.random_integer(6, 14); return math.random_integer(math.pow(v.flower_patch.size, 2) / 4, math.pow(v.flower_patch.size, 2) / 3);",

		"project_input_to_floor": true,
		"x": {
			"distribution": "gaussian",
			"extent": [0, "v.flower_patch.size"]
		},
		"z": {
			"distribution": "gaussian",
			"extent": [0, "v.flower_patch.size"]
		},
		"y": 0
	}
}
```

**Scatter features** are the most flexible and useful feature type available. Scatter features can:
- Distribute or reposition a feature any number of times within a [chunk’s feature domain](#)
- Act as a gate to conditionally enable a feature to be placed
- Execute MoLang within the current [feature context](#)

Scatter features attempt to place a [target feature](#proxy-features) with each iteration:
```json
"places_feature": "lostlands:shimmerfields_spire"
```

If, where, and how an instance of the target is placed depend on the [generation potential](#generation-potential), [distribution](#distribution), and the [evaluation order](#evaluation-order)

#### Generation Potential
```json
"scatter_chance": 25,
"iterations": 12
```

A scatter feature will determine placement attempts of its target using the `"scatter_chance"` and `"iterations"` properties.

**Scatter chance** represents the potential for the scatter feature to succeed. It can be represented as…

A numeric literal:
```json
"scatter_chance": 12.5
```

::: warning
The numeric literal form is considered against 100, not 1. A scatter chance of `50`, therefore, has half a chance of success.
:::

A MoLang expression:
```json
"scatter_chance": "1 / 8"
```

A fraction object:
```json
"scatter_chance": {
	"numerator": 1,
	"denominator": 8
}
```

All 3 examples have a 12.5% chance for success. Use whichever form feels most appropriate for your case. If scatter chance is omitted, it defaults to a 100% chance for the scatter feature to attempt to place its target.


**Iterations** are the number of attempts a scatter feature will try to place its target. If an instance of a scatter feature would succeed (in other words, if its scatter chance check were successful), *all* of the iterations given by `"iterations"` will be attempted. Iterations may be represented as integer literals or MoLang expressions. Unlike scatter chance, iterations are required.

#### Distribution
```json
"x": {
	"distribution": "fixed_grid",
	"extent": [0, 15]
},
"z": {
	"distribution": "fixed_grid",
	"extent": [0, 15]
},
"y": 0
```

Distribution is predominantly handled using **coordinate properties**: `"x"`, `"z"`, and `"y"`. All these properties may be represented using…

An integer literal:
```json
"x": 0
```

A MoLang Expression:
```json
"x": "math.random_integer(0, v.surface_grass.spread - 1)"
```

Or a number of object forms for conveniently distributing a coordinate:
```json
"x": {
	"distribution": "uniform",
	"extent": [0, 16]
}
```

Literals and MoLang expressions are relative to the [feature origin](#). See [Distribution Types](#distribution-types) for the available pre-constructed distribution systems.

Because placement of features is so often relative to the heightmap, the incoming *y*-origin for the scatter feature may be **projected into the heightmap**:

```json
"project_input_to_floor": true
```

This means that the specified *y*-origin from the scatter feature’s parent is ignored in favor of the *y*-coordinate of the heightmap at an iteration’s *x*-*z* location ([assuming the *y*-coordinate would be evaluated after the lateral coordinates](#evaluation-order)). The `"y"` property may still be given a value that will represent the offset from the heightmap.

::: tip NOTE
Functionally, this is the same as using the MoLang expression `"query.heightmap(v.worldx, v.worldz) + *offset*"`.
:::

##### Distribution Types
Custom distribution systems can be constructed using MoLang expressions, but scatter features come pre-equipped with a few common **distribution types** for convenient authoring:

- Uniform
- Gaussian
- Inverse Gaussian
- Fixed grid
- Jittered grid

Each distribution type requires an **extent**, which represents the range of values on which that distribution operates, from minimum to maximum. Extents, like the basic forms of coordinate declarations, are relative to the [feature origin](#).

###### Uniform Distribution
```json
"z": {
	"distribution": "uniform",
	"extent": ["v.boulder_spread.start", "v.boulder_spread.end"]
}
```

**Uniform distribution** is uniformly random distribution on a half-open interval between two values. It is known as “uniform” because every value within the range has an equal chance of being selected and “half-open” because the extent minimum is a member of the range, while the extent maximum is not:

<i>minimum extent</i> <= <i>x</i> < <i>maximum extent</i>

Therefore, if an extent of `[0, 16]` were given for a uniform distribution, blocks may be placed in a range of size 16: from 0 to 15. The 1st possible position starts at 0 while the 15th possible position ends at 16, matching the extent.

###### Gaussian Distributions
```json
"y": {
	"distribution": "gaussian",
	"extent": [0, "2 * v.vine_cluster.radius"]
}
```

**Gaussian distribution** (`"gaussian"`) and its **inverse** (`"inverse_gaussian"`) are useful for grouping features together: toward or away from the center of the extent respectively. Gaussian distribution is so extreme that values will almost never be selected away from the center with normal Gaussian distribution or toward the center with inverse Gaussian distribution. The extents for Gaussian distribution behave the as with [uniform distribution](#uniform-distribution).

###### Grid Distributions
```json
"x": {
	"distribution": "jittered_grid",
	"extent": [0, 15],
	"step_size": 2,
	"grid_offset": 4
}
```

**Grid distributions** are powerful systems for placing blocks either directly on (`"fixed_grid"`) or randomly within (`"jittered_grid"`) evenly spaced intervals along a coordinate. Unlike the other distribution types, the extent of grids forms an interval that includes the maximum extent:

<i>minimum extent</i> <= <i>x</i> <= <i>maximum extent</i>

Two grid distribution-only properties are available for finer control over the grids used by these systems. The interval size, which defaults to 1, can be customized with the `"step_size"` property. An initial offset, defaulting to 0, can also be provided via the `"grid_offset"` property.

If the iteration count in conjunction with the step size and offset would push a coordinate beyond the maximum extent, the coordinate will be wrapped back to the minimum extent and continue from there.

While grids are useful on a coordinate independently, their true power shows when in combination with grid distributions on other coordinates. Placements prioritize incrementing the earliest evaluated grid system before later systems; the later layouts are only considered when wrapping occurs in the previous grid system. When a placement in an earlier evaluated coordinate would wrap, the next evaluated grid-powered coordinate will be offset by the number of wraps that occurred.

As a simple example:
```json
"iterations": 21,

"x": {
	"distribution": "fixed_grid",
	"extent": [0, 15]
},
"z": {
	"distribution": "fixed_grid",
	"extent": [0, 15]
}
```

Placements will first begin along *x*: (0, 0), (1, 0), etc., until reaching the end of the extent at (15, 0). However, only 16 of the 21 iterations have occurred; 5 remain. Now, the *x*-coordinate wraps back around to 0, while the *z*-coordinate increments to 1: (0, 1).

This wrapping occurs in three-dimensions, too, so when a plane along the earliest evaluated coordinates would wrap (assuming a high enough iteration count), another plane will begin formation based on the final coordinate’s step size.

::: warning
Grid extents behave in unexpected ways when 0 is not within the extent range. In particular, the extent will be projected into 0 by the closest bound. For example, the given extent `[-7, -2]` will be remapped as though it were `[-5, 0]`. `[13, 21]` would get remapped to `[0, 8]`. For this reason, it's recommended to just specify the extent as a length, such as using `[0, 8]` in the latter example, and proxying that scatter feature with another scatter feature that would position that coordinate using a literal `13`.

When using multiple grid distributions to form a surface or volume, extents for any coordinate that would extend below `0` will only work on the first pass of that coordinate. Later passes will be restricted to non-negative values.
:::

#### Evaluation Order
When a scatter chance is included, it is evaluated before any other properties. If the check against scatter chance fails for that instance of the scatter feature, nothing downstream within that instance is evaluated. No further MoLang is interpreted; no variables within the [feature context](#) are updated. The target feature is entirely disregarded.

Next, the iteration count is evaluated. Similarly to scatter chance, if the iteration count were not to resolve to a positive number of placement attempts, nothing further is evaluated.

Next, every iteration is attempted regardless of whether an early iteration would for some reason fail. For each iteration, each coordinate is evaluated using the same ordering across all iterations.

::: warning
The order of coordinate evaluation is *not* dependent upon the order the coordinate properties are declared in JSON.
:::

By default, the coordinate ordering is *x* then *z* then *y*. This covers the majority of use-cases: if the coordinates aren’t independent, more than likely the vertical position depends on the lateral coordinates. However, scatter features may declare an atypical **coordinate evaluation order** for full control over coordinate dependence:

```json
"coordinate_eval_order": "zyx"
```

After the coordinates for an iteration have been determined, world generation moves its focus within the target: acknowledging its restrictions, attempting its placement, evaluating its MoLang, and (if possible and relevant) continuing by placing its children and their children and so forth.

When finished with the target’s feature tree, if more iterations have yet to be run from the scatter feature, focus returns to the scatter feature beginning with the first-evaluated coordinate and execution is resumed.

### Conditional Lists
```json
{
	"format_version": "1.13.0",

	"minecraft:conditional_list": {
		"description": {
			"identifier": "olympus:columns_selection"
		},

		"conditional_features": [
			{
				"places_feature": "olympus:columns_unweathered",
				"condition": "query.noise(v.originx, v.originz) < 0"
			},
			{
				"places_feature": "olympus:columns_weathered",
				"condition": "query.noise(v.originx, v.originz) >= 0"
			}
		],

		"early_out_scheme": "placement_success"
	}
}
```

**Conditional lists** pick a single feature from a collection based on conditions; they are akin to if-else if blocks in programming languages. Once a condition has been evaluated as successful (as determined via [success determination](#success-determination), the conditional list will select *only that one feature* for placement.

::: tip NOTE
Instead, if *every* success should place a feature in the same location, use an [aggregate feature](#aggregate-features) pointing to [scatter features](#scatter-features) that proxy the target features.
:::

#### Conditions List
```json
"conditional_features": [
	{
		"places_feature": "summer_fun:beachadjustment_water",
		"condition": "query.heightmap(v.originx, v.originz) < 63 && query.noise(v.originx, v.originz) < 0"
	},
	{
		"places_feature": "summer_fun:beachadjustment_coral",
		"condition": "query.heightmap(v.originx, v.originz) < 63 && query.noise(v.originx, v.originz) >= 0"
	},
	{
		"places_feature": "summer_fun:beachadjustment_air",
		"condition": "query.noise(v.originx, v.originz) >= 63"
	}
]
```

The **conditions list**, `"conditional_features"`, is an ordered array comprised of **feature entries** objects. Feature entries bind [target features](#proxy-features) to their **conditions**:

```json
{
	"places_feature": "verona:evergreen_trees_stumps",
	"condition": "v.evergreen_forest.type == v.evergreen_forest.types.lumberjack_ruined"
}
```

The condition of each feature entry is evaluated by entry order in the conditions list. Once a feature entry [would succeed](#success-determination), no later-listed conditions will be evaluated.

#### Success Determination
```json
"early_out_scheme": "placement_success"
```

Condition success is considered in light of the optional **early out scheme**. Two mechanisms are provided for controlling if a feature entry would succeed. `"condition_success"` — the default if no `"early_out_scheme"` is provided — considers a success to occur when a condition evaluates to true. `"placement_success"` goes further: a condition must evaluate to true, and its target feature’s placement must succeed.

### Aggregate Features
```json
{
	"format_version": "1.13.0",

	"minecraft:aggregate_feature": {
		"description": {
			"identifier": "better_villages:village_center"
		},

		"features": [
			"better_villages:village_center_well",
			"better_villages:village_center_grass_path"
		],
		"early_out": "first_failure"
	}
}
```

**Aggregate features** successively place features from a given list at the input location. Aggregate features are typically used to build custom scenes comprised of many disparate features.

The features to be placed by the aggregate are given by the required **features list**. Each feature in this list — [if placed](#placement-escape) — will be positioned *in order of declaration* at the same spot. Aggregate features will often need to point to [scatter features](#scatter-features) to position elements of a scene.

#### Placement Escape
```json
"early_out": "first_success"
```

By default, every entry in the features list will attempt to be placed. A **placement escape** is provided via the `"early_out"` property, which accepts 3 values:

| Value | Description |
|:--|:--|
| `"none"` | Attempt to place each feature (default) |
| `"first_success"` | Stop placing features once the first successful placement occurs |
| `"first_failure"` | Stop placing features once the first failed placement occurs |

### Sequence Features
```json

```



### Snap-to-Surface Features
```json

```

Features can be pinned to a floor or ceiling when proxied by **snap-to-surface features**.

### Search Features
```json

```

**Search features** search a volume for valid placement locations for a target feature. These features are a great option when placing features with challenging placement conditions.

### Rect Layouts
```json

```

::: warning
Rect layouts are currently bugged and should not be used. No provable information has been provided about how they will work.
:::

### Scan Surface Features
```json

```

Every block across the surface of a chunk can be covered by a feature using **scan surface features**.

### Weighted Random Features
```json

```

**Weighted random features** randomly select a feature from a list. They are typically used to provide variation across a set of related features.

Weighted random features select from their **weighted feature list**. Each entry in the list is an array made of a feature reference and an integer weight. A weighted random feature can select a different feature each instance it is run.

::: tip NOTE
To understand how weights work, see [Probabilities](#).
:::

## Scene Features
Scene features are a sort of combination of content features and proxy features. They are opinionated feature types designed around an aesthetic necessary for vanilla generation.

Scene features only allow minimal customizations of their shapes to achieve their intended aesthetic. Like content features, though, their blocks are conveniently modifiable, and like proxy features, they can place their own sub-features.

### Geode Features
```json

```

**Geode features** construct spherical structures comprised of multiple block layers; they allow placement of features along walls of the interior.

### Beards and Shavers
```json

```

**Beards and shavers** simultaneously provide a platform (beard) and a clearance (shaver) for a feature to generate.

### Vegetation Patches
```json

```

**Vegetation patches** place sub-features (often vegetation) within a square-like boundary (the patch).

## Carver Features
Carver features are special feature types for modifying vanilla cave generation. Little can currently be customized using carvers.

::: warning
The block intersection set for carvers currently cannot be customized. Only natural vanilla blocks such as dirt, grass, and stone will be culled; custom blocks will not be stripped to form caves.
:::

All carver features require being placed in the [pregeneration pass](#). Carver features can therefore not be combined with any other features by any means, even by proxies.

### Cave Carver Features
```json

```

The classic Overworld caving system is controlled using **cave carver features**.

### Hell Cave Carver Features
```json

```

Nether-based caves are formed via **Hell cave carver features**.

### Underwater Cave Carver Features
```json

```

**Underwater cave carver features** generate caves at lower heights in the Overworld. Unlike the other carvers, underwater cave carver features support specifying the block that will replace culled blocks.
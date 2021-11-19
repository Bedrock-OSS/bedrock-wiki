---
title: Trade Tables
nav_order: 1
tags:
	- guide
mention:
	- Ciosciaa
---

*Last updated for Version 1.17.41*

Trade tables represent the fundamental data behind trading item transactions for an entity. Trade tables are not standalone; they must be referenced from an [entity component](https://bedrock.dev/docs/stable/Entities#minecraft%3Aeconomy_trade_table). Using the randomizing properties available to trade tables, trade offers, item counts, and cost calculations may vary across entity instances, even if all would point to the same trade table.

![](/assets/images/loot/trade_tables/trading.png)

Trade tables are not identified or versioned. Like loot tables, trade tables do not support Molang and instead rely on JSON constructs, like range objects and [functions](#functions). Despite their differences, trade tables still support comments.

## Integration
Trade tables don't represent a primary add-on system, like blocks or biomes. They aren't registered by being placed in a specific folder; instead, they're referenced (from entities). Trade tables may be placed anywhere within a behavior pack.

::: tip
It's recommended to follow vanilla convention and place all trade tables within the top-level `trading` directory in a behavior pack. From there, any hierarchy can be employed.
:::

<FolderView
	:paths="[
		'BP/trading/minister.json',
		'BP/trading/economy_trades/cleric_trades.json'
	]"
/>

The following example is referenced and analyzed throughout the document:

<Spoiler title="Trade Table File Example">
<CodeHeader>BP/trading/minister.json</CodeHeader>
```json
{
	"tiers": [
		{
			"groups": [
				{
					"num_to_select": 1,
					
					"trades": [
						{
							"wants": [
								{
									"item": "wiki:blessing_glyph",
									"quantity": {
										"min": 2,
										"max": 4
									},
									
									"price_multiplier": 0.5
								},
								{
									"item": "minecraft:book"
								}
							],
							"gives": [
								{
									"item": "minecraft:enchanted_book",
									"functions": [
										{
											"function": "enchant_book_for_trading",
											
											"base_cost": 4,
											"base_random_cost": 12,
											"per_level_cost": 4,
											"per_level_random_cost": 8
										}
									]
								}
							],
							"max_uses": 7,
							
							"trader_exp": 3
						},
						{
							"wants": [
								{
									"item": "wiki:crystalline_spiritite",
									"quantity": 32,
									
									"price_multiplier": 0.125
								}
							],
							"gives": [
								{
									"item": "wiki:exalted_blade",
									"functions": [
										{
											"function": "enchant_with_levels",
											
											"treasure": true,
											"levels": {
												"min": 15,
												"max": 25
											}
										}
									]
								}
							],
							"max_uses": 2,
							
							"reward_exp": false,
							"trader_exp": 8
						}
					]
				}
			]
		},
		{
			"total_exp_required": 28,
			
			"trades": [
				{
					"wants": [
						{
							"choice": [
								{
									"item": "wiki:sacred_stones",
									"quantity": {
										"min": 4,
										"max": 6
									},
									
									"price_multiplier": 0.5
								},
								{
									"item": "wiki:blessed_beads",
									"quantity": {
										"min": 16,
										"max": 24
									},
									
									"price_multiplier": 0.5
								}
							]
						}
					],
					"gives": [
						{
							"item": "wiki:aeleon_jewels",
							"quantity": {
								"min": 4,
								"max": 6
							}
						}
					],
					"max_uses": 2
				}
			]
		}
	]
}
```
</Spoiler>

## Structure
Trade tables are represented as un-versioned, un-namespaced objects.

<CodeHeader>#</CodeHeader>
```json
{
	"tiers": [
		{
			"groups": […]
		},
		{
			"total_exp_required": 28,
			
			"trades": […]
		}
	]
}
```

Trade tables use [tiers](#tiers) to structure trade organization. Tiers are defined with the required top-level `"tiers"` array property. Tiers appear in order in the trading interface.

### Tiers
Tiers act as an unlockable set of trades and represent the highest level of grouping in a trade table.

<CodeHeader>#/tiers/0</CodeHeader>
```json
{
	"groups": […]
}
```

<CodeHeader>#/tiers/1</CodeHeader>
```json
{
	"total_exp_required": 28,
	
	"trades": […]
}
```

Each tier must either represent a set of [trades](#trades) (as `"trades"`) or [trade groups](#groups) (as `"groups"`); one of these properties is required. If trades are specified, all such trades will appear for that tier. If instead groups are given, trades from all listed groups will be used for that tier; how each group selects its trades depends on its configuration.

::: tip NOTE
If both `"trades"` and `"groups"` are given in a tier, the trades declaration is ignored in favor of groups.
:::

Within a tier, trades appear in order in the trading interface. If trades are grouped, those groups will appear in their defined order as well, organized by group and then by trade. Trades in one group are not visually differentiable from trades in other groups; only tiers are visually separated and identifiable.

#### Experience Requirement
Tiers are unlocked when the *trader* meets experience thresholds. Each trader has its own internal lifetime experience that accumulates when trading with players. The amount of experience obtained per trade depends on that trade's [experience reward](#trader-experience). The optional `"total_exp_required"` property specifies how much experience the trader needs in order for that tier to unlock.

<CodeHeader>#/tiers/1/</CodeHeader>
```json
"total_exp_required": 28
```

By default, the amount of experience needed is set to the index of the trade tier. Therefore, the second tier would require the trader to have 1 XP; the third tier would require 2 XP; and so forth. The first tier is always unlocked automatically, [regardless of its set experience threshold](#initial-tier-experience).

#### Tier Unlocking
Tiers are unlocked in order. When a new tier is unlocked, the subsequent tier is additionally checked to see if its threshold is met by the current XP. If it is, it unlocks and checks its subsequent tier, and so forth. Tier unlocking is checked when the rewarded trader experience would suffice for multiple tiers or if a [provided initial experience](#initial-tier-experience) would unlock subsequent tiers when correctly updated by the game.

::: tip NOTE
Since tiers are checked one-at-a-time, if tier unlocking would stop due to the XP requirements of a tier not being met, no subsequent tiers will be checked, even if those later tiers' XP requirements have been met.
:::

##### Initial Tier Experience
Special handling occurs for a non-zero experience threshold in the first tier. If negative, *all* tiers will be unlocked. If greater than 0, the initial experience of the trader is set to the provided value.

::: warning
When the initial tier's experience threshold is non-zero, a manual update is required for a trader's trades to reflect the actual nature of their trade table. In these cases, performing a trade or closing and re-opening the trading interface will update the interface correctly. Initially, only the first tier will be available even if other tiers should be unlocked.
:::

##### Tier Freezing
Excluding the [initial tier](#initial-tier-experience), it's possible to freeze trades at a tier:
<CodeHeader>Example Tier Freeze</CodeHeader>
```json
"total_exp_required": -1
```

When its prior tier is unlocked, a tier with a negative XP requirement will immediately unlock, [as expected](#tier-unlocking). However, it will be impossible for the player to progress to any subsequent tiers.

### Trade Groups
Trade groups are a way to randomly select which trades an individual trader should use for a tier.

<CodeHeader>#/tiers/0/groups/0</CodeHeader>
```json
{
	"num_to_select": 1,
	
	"trades": […]
}
```

The trades from which to select are given with the required `"trades"` array; each entry is a [trade](#trades). A select number of these trades, indicated by the optional `"num_to_select"` property, will be picked for that tier for each trader. If `"num_to_select"` is `0`, all trades will be selected; this is the default.

::: tip NOTE
Trade groups cannot be nested for advanced chance selection.
:::

::: tip
Currently, no random selection count is possible. Nor is weighting by trade, but trades can be duplicated within the array to effectively increase their likelihood of being selected.
:::

### Trades
Trades represent a transaction between a trader and the player.

<CodeHeader>#/tiers/0/trades/1</CodeHeader>
```json
{
	"wants": […],
	"gives": […],
	"max_uses": 2,
	
	"reward_exp": false,
	"trader_exp": 8
}
```

Once a trade is picked for a trade slot, it will not fundamentally change. Only the [quantity](#quantity) can be modified in certain situations.

::: tip
Individual trade definitions can affect more than just trades themselves. Notably, an entity can [hold a particular item](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.trade_interest) in response to the player holding an item.
:::

#### Wanted and Given Items
The fundamental transactional units are declared using `"wants"` and `"gives"`; players trade with `"wants"` to receive `"gives"`. Both properties must be arrays and are required.

<CodeHeader>#/tiers/0/trades/1/</CodeHeader>
```json
"wants": […],
"gives": […]
```

A trade can have between 1 and 2 wanted entries and must have exactly 1 given entry. Each entry of either array may be either an [item](#items) or a [choice](#choices).

The trading interface will adapt depending on the number of items wanted. In some circumstances, some trading modifiers, such as [quantity-modifying enchantment functions](#quantity-modifying-enchantment-functions), only affect the first wanted item.

::: tip NOTE
If an object is provided as an entry that contains both item and choice properties, only the choice part is considered; the item parts will be ignored.
:::

#### Trade Limit
A trader can typically only perform an individual trade a set number of times before having to resupply. The numeric `"max_uses"` property configures this number.

<CodeHeader>#/tiers/0/trades/1/</CodeHeader>
```json
"max_uses": 2
```

Trade limits are specific to each trade. Diminishing supply in one trade won't affect another trade, even if both trades have the same wanted and given items. By default, a trader will be able to carry out an individual trade 7 times before needing to resupply.

::: tip NOTE
The act of resupplying is handled by an entity component (`"minecraft:trade_resupply": {}`).
:::

If a value of `0` is given, that trade will be shown in the trading interface but will be impossible to use. If a negative value is given, that trade will never need resupplying; it will be infinitely usable.

#### Player Experience
Experience orbs intended for the *player* can be disabled for a trade using the optional Boolean `"reward_exp"` property.

<CodeHeader>#/tiers/0/trades/1/</CodeHeader>
```json
"reward_exp": false
```

By default, `"reward_exp"` is true, and the player will be rewarded with some experience for trading. The amount of experience received is not modifiable within a trade table.

#### Trader Experience
Traders may receive experience when the player finalizes a trade. This property is the key to establishing a trade progression system with a trader using [tiers](#tiers).

<CodeHeader>#/tiers/0/trades/1/</CodeHeader>
```json
"trader_exp": 8
```

The amount of experience to reward the *trader* is given the the optional numeric property `"trader_exp"`. By default, the trader will receive 1 XP.

::: tip
For non-linearly spaced tiers, it's typical for the trader experience to increase in higher tiers. This way, lower-tier trades will have less leveling impact than higher-tier trades.
:::

### Choices
Choices are simple objects for randomly selecting an item to use for a trade. One item is selected with uniform randomness for that trade for each instance of a trader.

<CodeHeader>#/tiers/1/trades/0/wants/0</CodeHeader>
```json
{
	"choice": [
		{
			"item": "wiki:sacred_stones",
			…
		},
		{
			"item": "wiki:blessed_beads",
			…
		}
	]
}
```

Choices only contain the required `"choice"` array property. Each entry in the array is an [item](#items). At least one item must be provided.

::: tip NOTE
Choices cannot be nested.
:::

::: tip
There are currently no means of specifying a weight for a given item, but an item may be duplicated within the array to effectively increase its likelihood for being selected.
:::

### Items
Items are the subjects of a trade. Their definitions are shared between wanted and given items, but there are some various implications depending on location used.

<CodeHeader>#/tiers/1/trades/0/wants/0/choice/0</CodeHeader>
```json
{
	"item": "wiki:sacred_stones",
	"quantity": {
		"min": 4,
		"max": 6
	},
	
	"price_multiplier": 0.5
}
```
<CodeHeader>#/tiers/0/groups/0/trades/1/gives/0</CodeHeader>
```json
{
	"item": "wiki:exalted_blade",
	"functions": [
		{
			"function": "enchant_with_levels",
			
			"treasure": true,
			"levels": {
				"min": 15,
				"max": 25
			}
		}
	]
}
```

#### Item Reference
Items are referenced within trades using the required `"item"` string property.

<CodeHeader>#/tiers/1/trades/0/wants/0/choice/0/</CodeHeader>
```json
"item": "wiki:exalted_blade"
```

The item reference must point to the identifier of an item. A data value can be provided in-place to the reference as a suffix:
<CodeHeader>Example Data Assignment</CodeHeader>
```json
"item": "minecraft:log:2"
```

::: tip
Data values can also be set (and much more conveniently randomized) using the `set_data` function.
:::

If no data value is specified for a *wanted* item, any item with that identifier may be traded. If no data value is specified for a *given* item, a data value of `0` is implied.

#### Quantity
The optional `"quantity"` property specifies the count of items wanted or given in a trade.

<CodeHeader>#/tiers/1/trades/0/wants/0/choice/0/</CodeHeader>
```json
"quantity": {
	"min": 4,
	"max": 6
}
```

Quantity can be expressed as either an integer literal or a range object, such as seen above. If expressed as a range, a random value is selected uniformly inclusively within the specified limits. If no quantity is provided, the item count will default to 1.

::: tip NOTE
Quantity is always bounded by the stack size and can only affect a single slot in a trade. It's impossible to, for example, enforce a requirement of 100 planks from a single slot (although this can be done using 2 `"wants"`) or giving 2 un-stackable swords to the player in a single trade.
:::

#### Price Multiplier
The price multiplier dictates how an item's [base quantity](#quantity) is altered due to certain events.

<CodeHeader>#/tiers/1/trades/0/wants/0/choice/0/</CodeHeader>
```json
"price_multiplier": 0.5
```

`"price_multiplier"` is optional and defaults to `0`. Two systems exist that use the price multiplier: a modern and a legacy system. In the modern system, the given price multiplier can only affect the *first wanted item* in a trade. In the legacy system, any *wanted items* can be affected.

##### Fluctuation Factors
Trade prices fluctuate as a result of serval factors:
- An increased demand, occurring when trading for the same item across multiple [resupplies](#trade-limit)
- Being recently cured, such as villagers being cured from being zombie villagers
- Being *near* a trader who was recently cured
- Trading with a player who is affected with "Hero of the Village"

The price multiplier affects all these situations with the exception of a player having "Hero of the Village" when using the new pricing formula, which uses fixed values.

##### Cost Calculations
The price multiplier directly and solely affects cost increases in response to an increased demand for a trade. By default, demand is 0 and cannot decrease past that value. Demand for a trade stacks, increasing when resupplying after that trade [has been exhausted](#trade-limit) and decreasing if no trades occurred between resupplies.

Cost increase due solely to demand is linear, where each increase in demand adds a proportion of the base cost, given by the price multiplier. Assuming the following variables…

|Variable|Meaning|
|-|-|
|*c*|Total cost|
|*p*|Base cost, including [quantity overrides](#quantity-modifying-enchantment-functions)|
|*m*|Price multiplier|
|*d*|Current demand|

<br>
…The following formula can be used to calculate the total cost when no other factors are present:

*c* = *p* × (1 + *m* * *d*)

::: tip NOTE
Other situations additionally use entity properties for cost calculations and are not provided here.
:::

If the price multiplier is `0`, the quantity will remain constant in most situations (except the "Hero of the Village" modifier using the new pricing formula).

::: tip NOTE
A negative price multiplier is possible but can't affect increasing costs due to [demand](#trade-limit); the multiplier will effectively be capped to `0`. However, negative values do affect prices in response to the trader recently being cured, the trader being nearby another trader who was recently cured, or trading with a player affected with "Hero of the Village" *using the legacy pricing formulas*.
:::

#### Functions
Functions are used to modify the nature of the item. The optional `"functions"` array contains a collection of functions to be applied to the item.

<CodeHeader>#/tiers/0/groups/0/trades/1/gives/0/</CodeHeader>
```json
"functions": [
	{
		"function": "enchant_with_levels",
		
		"treasure": true,
		"levels": {
			"min": 15,
			"max": 25
		}
	}
]
```

The functions used by trade tables are shared with loot tables. When used ([where usable](#unusable-wanted-item-functions)) in a wanted item declaration, they act to restrict the nature of the wanted item. Such function restrictions can only affect the first wanted item.

##### Generally Unusable Functions
In general, functions behave well for trading; however, the following do not work anywhere in trade tables:

- `set_count`
- `furnace_smelt`
- `looting_enchant`
- `trader_material_type`

::: tip NOTE
`set_count`'s functionality is replaced by the [quantity property](#quantity).

`trader_material_type`, seen only in a single vanilla trade table, would theoretically set the data value of the item based on the mark variant of the entity, but this doesn't seem to be usable in any custom way.
:::

##### Unusable Wanted Item Functions
In general, using functions to specify item attributes for a wanted item will require the offered item to conform to those attributes. However, the following functions do not enforce a strict match and are therefore useless on wanted items:

- `set_name`
- `set_lore`
- `set_damage`
- `set_book_contents`
- `random_dye`
- `fill_container`

##### Quantity-Modifying Enchantment Functions
2 functions actually set the quantity for the first *wanted item* if being used as *given items*, potentially overriding any provided [quantity](#quantity) for that first wanted item:

- `enchant_with_levels`
- `enchant_book_for_trading`

::: tip NOTE
Despite overriding the quantity, all [modified trade prices](#fluctuation-factors) adapt correctly. These functions cannot affect the quantity of a second wanted item, even when using the legacy cost formulas. If these functions are used on a *wanted item*, the quantity is not overridden.
:::

###### Enchant with Levels Function
`enchant_with_levels` randomly enchants an item as through enchanted from an enchantment table.

<CodeHeader>#/tiers/0/groups/0/trades/1/gives/0/functions/0</CodeHeader>
```json
{
	"function": "enchant_with_levels",
	
	"treasure": true,
	"levels": {
		"min": 5,
		"max": 25
	}
}
```

The cost for the first wanted item is determined by adding this function's chosen level value (capped to `0` if it would be negative) to the original [quantity](#quantity). The level value is computed from the optional `"levels"` property. If a numeric literal is used, that value is the chosen level value. If a range object is used, as above, a random number is rolled inclusively between the provided minimum and maximum. That random number then acts as the chosen level value. In the above example, the first wanted item's cost would be increased by 5 to 25.

###### Enchant Book for Trading Function
`enchant_book_for_trading` is intended solely for trading. Its properties combine to determine the first wanted item's cost.

<CodeHeader>#/tiers/0/groups/0/trades/0/gives/0/functions/0</CodeHeader>
```json
{
	"function": "enchant_book_for_trading",
	
	"base_cost": 4,
	"base_random_cost": 12,
	"per_level_cost": 4,
	"per_level_random_cost": 8
}
```

This function was only designed to be used on books, rolling for a single enchantment across all possible non-curse enchantments, including treasure enchantments. The function doesn't adapt to the current item. If used on a book, an enchantment will always successfully be applied; if used on something else enchantable, it's possible the item won't be successfully enchanted.

::: tip NOTE
Presumably, when failing, the function rolls for an enchantment not applicable to the item and then fails to apply this irrelevant enchantment, resulting in an unenchanted item. The successfulness of enchanting a non-book is therefore proportional to the number of enchantments applicable to that item.
:::

The total cost is set from a base cost, which is independent of the rolled enchantment, and a per-level cost, which is dependent on the random roll. All cost configuration properties are optional.

The base cost is computed by summing a starting value and a random roll. The starting value is given with `"base_cost"`, which defaults to `2`. The random roll is provided via `"base_random_cost"`, which defaults to `4`. A number will be uniformly randomly selected inclusively between 0 and the `"base_random_cost"` when a trade is generated for a trader.

For each level on the chosen enchantment, the same process occurs as in the base cost calculations: a fixed value is added to a uniformly randomly selected value. In this case, the base per-level cost is given with `"per_level_cost"`, which defaults to `3`, and the random per-level cost is given with `"per_level_random_cost"`, which defaults to `10`. The random per-level roll may be different for each level.

Once the base cost and costs for each level are calculated, they are summed together to form the total cost. Finally, if the chosen enchantment is a treasure enchantment, the cost is then doubled. As usual, this cost cannot be less than 1 or greater than the stack size of that item. This formula holds true regardless of the pricing system being used by the trader.

::: warning
If either random cost property is negative, there seems to be a 50-50 chance that the cost will be either the given [quantity](#quantity) or the maximum stack size for that first wanted item.
:::

::: tip
If the total combined cost would be negative (assuming no negative random cost properties were used), the provided [quantity](#quantity) of the affected wanted item is used instead. The simplest means of guaranteeing this would be:

<CodeHeader>Example Quantity-Based Enchanted Book Cost</CodeHeader>
```json
{
	"function": "enchant_book_for_trading",
	
	"base_cost": -1,
	"base_random_cost": 0,
	"per_level_cost": 0,
	"per_level_random_cost": 0
}
```
:::

##### Spawn Egg Trader Binding
The `"set_actor_id"` function is used to set the data value of a spawn egg based on a provided entity identifier, given with `"id"`.

<CodeHeader>Example Spawn Egg Trader Binding</CodeHeader>
```json
{
	"function": "set_actor_id"
}
```

In trade tables, if no ID is provided, the trader's entity type will be assigned to the egg.

## Overrides
Because trade tables do not use in-data identifiers, they are overridden simply by replacing a prior trade table with a new one. Below are the currently used vanilla trade tables for each trader:
|Trader|Path|
|-|-|
|Stone Mason|`BP/trading/economy_trades/stone_mason_trades.json`|
|Farmer|`BP/trading/economy_trades/farmer_trades.json`|
|Fisherman|`BP/trading/economy_trades/fisherman_trades.json`|
|Butcher|`BP/trading/economy_trades/butcher_trades.json`|
|Shepherd|`BP/trading/economy_trades/shepherd_trades.json`|
|Leather Worker|`BP/trading/economy_trades/leather_worker_trades.json`|
|Librarian|`BP/trading/economy_trades/librarian_trades.json`|
|Cartographer|`BP/trading/economy_trades/cartographer_trades.json`|
|Cleric|`BP/trading/economy_trades/cleric_trades.json`|
|Tool Smith|`BP/trading/economy_trades/tool_smith_trades.json`|
|Weapon Smith|`BP/trading/economy_trades/weapon_smith_trades.json`|
|Fletcher|`BP/trading/economy_trades/fletcher_trades.json`|
|Armorer|`BP/trading/economy_trades/armorer_trades.json`|
|Wandering Trader|`BP/trading/economy_trades/wandering_trader_trades.json`|

::: tip NOTE
Additional trade tables exist directly within the `trading` folder, but these are deprecated. Only the tables in the `economy_trades` sub-folder are currently used.
:::

Alternatively, a trader entity definition can be updated to point to a new trade table location.
---
title: Custom Weapons
---

Making a custom weapon is pretty simple since the 1.16.100 beta changes, as these allow you to simply define an item entry for it in your `BP/items` folder and provide a corresponding texture in the `RP/textures/items` folder with a bit of config and you have a fully working weapon that you can customize however you see fit.

:::tip
Before starting this you should have already read over the [Beginners Guide > Items](/guide/custom-item) page and be familiar with the general layout of an item json file and how to create a custom item, if you are not sure how to do this go give that a quick read before attempting this.
:::

## Setting the manifest min version

As this is using beta functionality we need to make sure we set in our manifest files in the BP and RP that we require anything `1.16.100` or higher like so.

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
	"format_version": 2,
	"header": {
		"name": "My Custom Sword Behaviours",
		"description": "Adds a custom sword to the game",
		"uuid": "872849a3-408a-4919-9256-2a6f5a6537f0 ",
		"version": [0, 1, 0],
		// We make sure we target the min version with the beta item changes
		"min_engine_version": [1, 16, 100]
	},
	"modules": [
		{
			"type": "data",
			"uuid": "da3c8171-23ac-4da9-8cf7-ad45d6806c4e",
			"version": [0, 1, 0]
		}
	],
	// We are also depending on the RP as we need textures within there
	"dependencies": [
		{
			"uuid": "8653ca00-05fb-426b-b579-e56f1ec21102",
			"version": [0, 1, 0]
		}
	]
}
```

This at least lets us make sure the version of minecraft can understand the format changes for custom weapons.

## Creating a custom sword item json

Like with the other item tutorials we will start by making a simple custom sword like so.

<CodeHeader>BP/items/my_sword.json"</CodeHeader>

```json
{
	// This version is important as we need to be using beta version
	"format_version": "1.16.100",
	// We add in an additional "category" field with "equipment"
	"minecraft:item": {
		"description": {
			"identifier": "example:my_sword",
			"category": "equipment"
		},
		"components": {
			// This allows us to have the sword in the creative category of swords
			"minecraft:creative_category": {
				"parent": "itemGroup.name.sword"
			},
			"minecraft:max_stack_size": 1,
			// This is a new change as we want it to be equippable in the hand
			"minecraft:hand_equipped": true,
			"minecraft:durability": {
				"max_durability": 600
			},
			// Give it however much damage you want
			"minecraft:damage": 10,
			// We also let it be enchantable in the "sword" slot
			"minecraft:enchantable": {
				"value": 10,
				"slot": "sword"
			},
			// This texture is used for both inventory and the hand model
			"minecraft:icon": {
				"texture": "my_sword"
			},
			"minecraft:display_name": {
				"value": "My Custom Sword"
			},
			// Allow the sword to be repaired with sticks
			"minecraft:repairable": {
				"repair_items": [
					{
						"items": "minecraft:stick",
						"repair_amount": 50
					}
				]
			}
		}
	}
}
```

So at a bare minimum that is enough to get a sword put into the game, we still need to register the icon with the RP but thats not a massive issue as all we need to do is go to our RP folder and enter it in like so.

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
	"resource_pack_name": "vanilla",
	"texture_name": "atlas.items",
	"texture_data": {
		"my_sword": {
			// Make sure you have put an icon texture called my_sword.png here
			"textures": "textures/items/my_sword"
		}
	}
}
```

Here is an example texture if you do not have your own to use, just `Save As` and plop it in the `RP/textures/items` directory.

![](/assets/images/tutorials/custom-weapons/my_sword.png)

## Using the custom sword

So now we have a BP containing our items json data and an RP containing the texture, we can make a new level, and make sure we include our BP/RP, however we **also need to enable the Holday Creator Features** under experimental gameplay.

Once you have done all the above, go into creative mode and you should be able to find your sword by its name, or under the sword category as shown.

![](/assets/images/tutorials/custom-weapons/custom_sword.jpg)

Then if you put it in your hands you should see it in the game like this.

![](/assets/images/tutorials/custom-weapons/held_sword.jpg)

Now that wasn't too hard was it! and you can make as many custom swords as you want now, however there is far more fun stuff you can do from here if you feel up for it.

## Add tool-like functionality

You can also mix and match other components like `minecraft:digger` to allow you to go through web or bamboo quicker like this:

<CodeHeader></CodeHeader>

```json
"minecraft:digger": {
    "use_efficiency": true,
    "destroy_speeds": [
        {
            "block": "minecraft:web",
            "speed": 15
        },
        {
            "block": "minecraft:bamboo",
            "speed": 10
        }
    ],
	"on_dig":{
		"event": "example:my_sword.on_dig_damage"
		//Needed to change sword durability
	}
}
```

Also add `example:my_sword.on_dig_damage` event:

<CodeHeader></CodeHeader>

```json
// This is a separate section to "components"
"events": {
    // This is the event we named above
    "example:my_sword.on_dig_damage": {
		"damage":{
			//This part of event will make sword take damage when it was used to dig block
			"type":"durability",
			"target":"self",
			//By using "self" you define item as target to take damage
			"amount":1
		}
	}
}
```

You can also give it a default mining speed by adding `"minecraft:mining_speed": 1.5`, which would give it a generic mining speed letting you use your weapon like a pickaxe.
(It is currently broken)

## Adding the damage to the icon popup

The above was a bare bones approach, but you probably want to be able to show the damage a sword does when the user hovers over it.

To do this you need to add the `"minecraft:weapon": {}` component, even if its just empty this is enough to MC to know internally to treat your popup like a weapon popup when mouse over-ing.

So if you add the above component to your item json file when you mouse over your sword you will now see **+10 Attack Damage** listed in its tooltip.

> You may be thinking "why didnt you just add this above?" and the answer is because we will build off this component to add more cool stuff in the next section, so I wanted to keep it separate.

## Giving the sword a unique ability & durability

At this point you could call it a day, but what if you wanted to make a sword that could inflict status effects, or teleport an enemy when they attacked you?

Assuming you wanted to do something like this we will need to build off the `minecraft:weapon` component and raise an event when the weapon hits an entity.

<CodeHeader></CodeHeader>

```json
"minecraft:weapon": {
    "on_hurt_entity": {
        "event": "example:my_sword.hurt_entity"
    }
}
```

Once we add that then every time you hurt an entity it will raise the event `example:my_sword.hurt_entity`. You can name this whatever you want, but if you end up with lots of events its recommended to have some level of namespacing, so in this scenario `example` is my main namespace, `my_sword` is the item I want it to apply on and `hurt_entity` is the related event on that item.

> I could just as easily call the event **"space-noodle"** and it would work fine, but you want it to be easily searchable and self explaining, so keep that in mind

Now that we have an event being raised we can do what we want with it. In this example I am going to do 3 things, I will teleport the player 25% of the time, I will output a text message letting the player know that the swords done something and damaging the sword.

So if you go back into your my_sword.json and after your `components` section add a new section like so.

<CodeHeader></CodeHeader>

```json
// This is a separate section to "components"
"events": {
    // This is the event we named above
    "example:my_sword.hurt_entity": {
		"sequence":[
			//Sequence is needed to run two or more parts of event
			{
				// We will randomize the output
				"randomize": [
					{
						// Weights are relative, so this has 1
						"weight": 1,
						// Teleport the HOLDER (you) within an 8x8x8 range
						"teleport": {
							"target": "holder",
							"max_range": [8,8,8]
						},
						// Then output on the console "Your Sword Glows" in green text
						"run_command":{
							"command":[
								"tellraw @s{\"rawtext\":[{\"text\":\"§aYour Sword Glows\"}]}"
							]
						}
					},
					{
						// We have another dummy random element here which contains the max weight
						"weight": 4
					}
				]
			},
			{
				"damage":{
					//This part of event will make sword take damage when it was used to hurt an entity
					"type":"durability",
					"target":"self",
					//By using "self" you define item as target to take damage
					"amount":1
				}
			}
		]
    }
}
```

That was a bit to bite off, but as explained above this lets us randomly **1/4** of the time trigger a teleportation of the sword holder and show a text command when it happens.

You can do whatever you want here and get super creative, set enemies on fire, or spawn enemies or blocks etc. There is so much you can do with this basic approach to creating weapons!

> It's worth noting here that the dummy element is needed to scale the weightings, so we have one element with a weight of **1** and a 2nd one with a weight of **4** so this gives us the **1 in 4** chance of it proccing. If we were to have gone with the dummy element having a weight of **100** then we would have a **1 in 100** chance of proccing. If we didn't have a 2nd dummy element then the first weight would be ignored and it would happen 100% of the time.

## Anything Else?

You should probably make a recipe for it, which is covered in previous chapters, as there isn't anything really new in there, but incase you are unsure here is an example one to make the sword with ender eyes and ender pearls.

<CodeHeader>BP/recipes/my_sword.json</CodeHeader>

```json
{
	"format_version": "1.12.0",
	"minecraft:recipe_shaped": {
		"description": {
			"identifier": "example:my_sword"
		},
		"tags": ["crafting_table"],
		"pattern": ["e", "E", "#"],
		"key": {
			"#": {
				"item": "minecraft:stick"
			},
			"E": {
				"item": "minecraft:ender_eye"
			},
			"e": {
				"item": "minecraft:ender_pearl"
			}
		},
		"result": {
			"item": "example:my_sword"
		}
	}
}
```

![](/assets/images/tutorials/custom-weapons/sword_recipe.jpg)

If you whack that in then you can now craft your sword in the game and hopefully go off and make any other custom swords you fancy or even bows or tridents.

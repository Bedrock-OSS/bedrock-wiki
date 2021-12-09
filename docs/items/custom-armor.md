---
title: Custom Armor
category: Tutorials
tags:
	- experimental
---

::: tip
It is highly recommended that you look over [the BlockBench modelling and texturing](/guide/blockbench) section in the beginners guides before tackling these sections.
:::

Making custom armors is surprisingly easy to do, you need to do a bit of fiddling around as there are a few files that need to be added and there can be a little bit of texturing involved but you can do as much or as little as you want here.

## Creating a Chest Piece

Lets dive right into it and make sure our manifests are using the beta version.

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
	"format_version": 2,
	"header": {
		"name": "My Custom Armor Behaviours",
		"description": "Adds custom armor to the game",
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

Once done we can get on with creating our actual armor item piece like so.

<CodeHeader>BP/items/my_chest.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:item": {
		"description": {
			"identifier": "wiki:my_chest",
			// Notice we give it the equipment category
			"category": "equipment"
		},
		"components": {
			// Make sure it appears within the chestplate category
			"minecraft:creative_category": {
				"parent": "itemGroup.name.chestplate"
			},
			// The icon we want to use in our INVENTORY
			"minecraft:icon": {
				"texture": "my_chest"
			},
			// We give it a name
			"minecraft:display_name": {
				"value": "My Custom Armor"
			},
			// We dont want it to stack
			"minecraft:max_stack_size": 1,
			// We make sure it can only receive enchantments for chest pieces
			"minecraft:enchantable": {
				"value": 10,
				"slot": "armor_torso"
			},
			// This tells it how much protection it should give
			"minecraft:armor": {
				"protection": 5
			},
			// We want it to be repairable, and what to use to repair it
			"minecraft:repairable": {
				"repair_items": [
					{
						"items": ["minecraft:stick"],
						"repair_amount": 50
					}
				]
			},
			// Mark it as a wearable and that it goes in the chest slot
			"minecraft:wearable": {
				"dispensable": true,
				"slot": "slot.armor.chest"
			},
			// Provide its durability
			"minecraft:durability": {
				"max_durability": 200
			}
		}
	}
}
```

At this point you could just go and add an item texture into your `RP/textures/item_texture.json` with the key `my_chest` and you are on your way. We have attached a default item texture for your armor here if you want to just follow along.

![](/assets/images/tutorials/custom-armor/custom_chestplate.png)

## Adding attachables and textures

At this point your item would appear in game and would be wearable but it would not have any appearance. This is because we need to tell it how to handle the attachable equipment and give it a texture to show.

To start with you need to create an `attachables` folder in your RP (you may already have one).

<CodeHeader>RP/attachables/my_chest.json</CodeHeader>

```json
{
	"format_version": "1.8.0",
	"minecraft:attachable": {
		"description": {
			// The identifier of the item
			"identifier": "wiki:my_chest",
			// These 2 are default and are required
			"materials": {
				"default": "armor",
				"enchanted": "armor_enchanted"
			},
			"textures": {
				// This is our CUSTOM armor texture we need to make next
				"default": "textures/models/armor/custom_main",
				// This texture doesn't actually exist in our RP
				// but it will blow up without it so leave it in
				"enchanted": "textures/misc/enchanted_item_glint"
			},
			// We tell it what geometry to use for the chestplate
			"geometry": {
				"default": "geometry.player.armor.chestplate"
			},
			// We tell it to hide the chest layer as we will be showing our armor on top
			"scripts": {
				"parent_setup": "variable.chest_layer_visible = 0.0;"
			},
			// We tell it what controller to use (default armor one)
			"render_controllers": ["controller.render.armor"]
		}
	}
}
```

At this point we need to make sure we create a texture for our model, these live in `RP/textures/models/armor`. We however actually need 2 textures, as one is for the main armor as if it is being worn all together, and one is for the legs which when worn alone will often cover some of the boot area.

If you do not feel creative we have provided a recoloured diamond armour skin for use with this tutorial. So just `Save As` and plop them in the folder.

![](/assets/images/tutorials/custom-armor/custom_main.png)
![](/assets/images/tutorials/custom-armor/custom_legs.png)

> In the real world you would probably want to use `BlockBench` or some photo editing program to edit the textures and ideally see how they look on a model before you add them into the RP/addon.
> If you now go into the game and check what you have produced you should be able to wear your chest piece and pat yourself on the back for a job well done.

![](/assets/images/tutorials/custom-armor/armor-item-image.jpg)
![](/assets/images/tutorials/custom-armor/armor-model-image.jpg)

## Adding leggings

So while the chest piece alone is great, you probably want a whole set, so from here if you make another item json for the boots like so.

<CodeHeader>BP/items/my_leggings.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:item": {
		"description": {
			"identifier": "wiki:my_leggings",
			"category": "equipment"
		},
		"components": {
			// We give it the leggings category this time
			"minecraft:creative_category": {
				"parent": "itemGroup.name.leggings"
			},
			// Give it an applicable ITEM texture
			"minecraft:icon": {
				"texture": "my_leggings"
			},
			"minecraft:display_name": {
				"value": "My Custom Leggings"
			},
			"minecraft:max_stack_size": 1,
			// Make sure the enchantments are for legs
			"minecraft:enchantable": {
				"value": 10,
				"slot": "armor_legs"
			},
			"minecraft:armor": {
				"protection": 3
			},
			"minecraft:repairable": {
				"repair_items": [
					{
						"items": ["minecraft:stick"],
						"repair_amount": 50
					}
				]
			},
			// Make sure the wearable slot is legs
			"minecraft:wearable": {
				"dispensable": true,
				"slot": "slot.armor.legs"
			},
			"minecraft:durability": {
				"max_durability": 200
			}
		}
	}
}
```

This is great and like before you will need to add your own item texture, although here is one if you just want to continue.

![](/assets/images/tutorials/custom-armor/custom_leggings.png)

Once we are done here we need to create the attachables file like this.

<CodeHeader>RP/attachables/my_leggings.json</CodeHeader>

```json
{
	"format_version": "1.8.0",
	"minecraft:attachable": {
		"description": {
			"identifier": "wiki:my_leggings",
			// Notice this is the same as before
			"materials": {
				"default": "armor",
				"enchanted": "armor_enchanted"
			},
			"textures": {
				// Same as before
				"enchanted": "textures/misc/enchanted_item_glint",
				// This one is different as we are using the legging specific texture
				"default": "textures/models/armor/custom_legs"
			},
			// Tell it to use leggings geom
			"geometry": {
				"default": "geometry.humanoid.armor.leggings"
			},
			// Hide legs layer as we will be rendering over it
			"scripts": {
				"parent_setup": "variable.leg_layer_visible = 0.0;"
			},
			// Same as before
			"render_controllers": ["controller.render.armor"]
		}
	}
}
```

Given that we have already put in the textures needed we can run it and see our legs straight away.

## Adding a helmet

This is just like the chest piece, just we change some of the categories and slots like so.

<CodeHeader>BP/items/my_helm.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:item": {
		"description": {
			"identifier": "wiki:my_helm",
			"category": "equipment"
		},
		"components": {
			// Helmet category
			"minecraft:creative_category": {
				"parent": "itemGroup.name.helmet"
			},
			"minecraft:icon": {
				"texture": "my_helm"
			},
			"minecraft:display_name": {
				"value": "My Custom Helmet"
			},
			"minecraft:max_stack_size": 1,
			// Helm enchantment slot
			"minecraft:enchantable": {
				"value": 10,
				"slot": "armor_head"
			},
			"minecraft:armor": {
				"protection": 3
			},
			"minecraft:repairable": {
				"repair_items": [
					{
						"items": ["minecraft:stick"],
						"repair_amount": 50
					}
				]
			},
			// Wearable head slot
			"minecraft:wearable": {
				"dispensable": true,
				"slot": "slot.armor.head"
			},
			"minecraft:durability": {
				"max_durability": 200
			}
		}
	}
}
```

As you can see not much has changed, we just update the categories/slots to the correct ones for helms and then we add the attachables file (here is the item texture if you need it).

![](/assets/images/tutorials/custom-armor/custom_helmet.png)

<CodeHeader>RP/attachables/my_helm.json</CodeHeader>

```json
{
	"format_version": "1.8.0",
	"minecraft:attachable": {
		"description": {
			"identifier": "wiki:my_helm",
			"materials": {
				"default": "armor",
				"enchanted": "armor_enchanted"
			},
			"textures": {
				"enchanted": "textures/misc/enchanted_item_glint",
				// Notice how we just use the main texture
				"default": "textures/models/armor/custom_main"
			},
			// Set it to helmet
			"geometry": {
				"default": "geometry.humanoid.armor.helmet"
			},
			// Hide helm layer
			"scripts": {
				"parent_setup": "variable.helmet_layer_visible = 0.0;"
			},
			"render_controllers": ["controller.render.armor"]
		}
	}
}
```

There you go, you now have 3/4 of a complete set, we may as well go through the boots as well so you know all the categories etc.

## Adding the boots

You already know the pattern so lets make the item and attachable json files.

<CodeHeader>BP/items/my_boots.json</CodeHeader>

```json
{
	"format_version": "1.16.100",
	"minecraft:item": {
		"description": {
			"identifier": "wiki:my_boots",
			"category": "equipment"
		},
		"components": {
			// Boots category
			"minecraft:creative_category": {
				"parent": "itemGroup.name.boots"
			},
			"minecraft:icon": {
				"texture": "my_boots"
			},
			"minecraft:display_name": {
				"value": "My Custom Boots"
			},
			"minecraft:max_stack_size": 1,
			// Enchantable Feet
			"minecraft:enchantable": {
				"value": 10,
				"slot": "armor_feet"
			},
			"minecraft:armor": {
				"protection": 3
			},
			"minecraft:repairable": {
				"repair_items": [
					{
						"items": ["minecraft:stick"],
						"repair_amount": 50
					}
				]
			},
			// Feet slot
			"minecraft:wearable": {
				"dispensable": true,
				"slot": "slot.armor.feet"
			},
			"minecraft:durability": {
				"max_durability": 200
			}
		}
	}
}
```

The custom boots texture if you need it.

![](/assets/images/tutorials/custom-armor/custom_boots.png)

<CodeHeader>RP/attachables/my_boots.json</CodeHeader>

```json
{
	"format_version": "1.8.0",
	"minecraft:attachable": {
		"description": {
			"identifier": "wiki:my_boots",
			"materials": {
				"default": "armor",
				"enchanted": "armor_enchanted"
			},
			"textures": {
				"enchanted": "textures/misc/enchanted_item_glint",
				// Again main texture, only leggings are different
				"default": "textures/models/armor/custom_main"
			},
			// Boots geom
			"geometry": {
				"default": "geometry.humanoid.armor.boots"
			},
			// Hide boots layer
			"scripts": {
				"parent_setup": "variable.boot_layer_visible = 0.0;"
			},
			"render_controllers": ["controller.render.armor"]
		}
	}
}
```

Thats it, you now have a whole suit of custom armor you can swagger around in, and use this as a basis to make whatever other armors you want in the game.

> It is worth noting that we have used 2 separate textures here, and you could potentially use a texture per attachable, but each new texture consumes memory so its best to use as few as possible.
> So this is what you should end up with, and as a bonus there is one more section on making set effects using filters, which is a bit more advanced but its a fun thing to do.

![](/assets/images/tutorials/custom-armor/custom-set-image.jpg)

## Bonus - Making set effects

This is a bit more advanced but lets say you want your custom armor to act like it's a set from an RPG game. We can add some code to check if we have the set equipped and do some great stuff with it.

In this example we will just add a chance to teleport the attacker somewhere nearby and put a blurb on the console for flavour.

As we want this to trigger when the player is hit we need to add some logic to the `player.json` file. This is a huge file and we unfortunately need to make sure it has all the default content in there as well due to the way it will overwrite the default player components etc.

So rather than include the whole `player.json` I will just include the parts you will need to add to your `components` and `events` sections.

> If you have no idea what the `player.json` is then look in the vanilla behavior pack and look for it and just copy it over into your project.
> So first of all lets put in the damage sensor component (which goes in your component section) which listens for when you take damage and lets you raise an event from it.

<CodeHeader>BP/entities/player.json</CodeHeader>

```json
{
	// The damage sensor checks for when you take damage
	"minecraft:damage_sensor": {
		"triggers": {
			// Then when you take damage from a source
			"on_damage": {
				// We filter the damage trigger so we ignore any that dont match
				"filters": {
					// So this means we have to match ALL of the below critera
					"all_of": [
						// Each one of these represents an equipped item in the set
						{
							// This is what we are testing
							"test": "has_equipment",
							// The subject is the target, i.e self, damager etc
							"subject": "self",
							// Domain is the body part in this case
							"domain": "head",
							// We want to check that it matches our item
							"operator": "==",
							// The item identifier we want to check
							"value": "wiki:my_helm"
						},
						{
							"test": "has_equipment",
							"subject": "self",
							"domain": "torso",
							"operator": "==",
							// Worth noting you can omit prefix for minecraft internal items i.e stick
							"value": "wiki:my_chest"
						},
						{
							"test": "has_equipment",
							"subject": "self",
							"domain": "leg",
							"operator": "==",
							"value": "wiki:my_leggings"
						},
						{
							"test": "has_equipment",
							"subject": "self",
							"domain": "feet",
							"operator": "==",
							"value": "wiki:my_boots"
						}
					]
				},
				// If all the triggers match in the filter raise the event
				"event": "wiki:armor_sets.my_custom.taken_damage"
			},
			// This means if it matches the check it still applies damage
			// Can be good to ignore team damage or similar scenarios
			"deals_damage": true
		}
}
```

As you can see from the comments, there is a lot there but really all we are doing is listening out for something then making sure we only filter the results we care about then relay on an event.

> The event can be called anything but it is often better to have it more specific, incase you end up having multiple similar events etc, also it can help finding if you have multiple sections to it, i.e I could search on "armour_sets" and find all events related to it.
> Then once you are done, in the same file we decide what we want to do with the event, which we put into our `events` section.

<CodeHeader>BP/entities/player.json</CodeHeader>

```json
{
	// The event we want to handle
	"wiki:armor_sets.my_custom.taken_damage": {
		// Set a randomize so effects dont happen every time
		"randomize": [
			{
				"weight": 1,
				// We do a sequence here as we want to apply one command
				// on one entity and the other on ourselves
				"sequence": [
					{
						// This will take the attacker/other because it was in context
						// at time of raising the event in the damage_sensor
						"run_command": {
							// Teleport the entity away from us
							"command": "spreadplayers ~~ 5 20 @s",
							// Run the command on the attacker not us
							"target": "other"
						}
					},
					{
						// This command just notifies us that the armor did something
						"run_command": {
							"command": "tellraw @s{\"rawtext\":[{\"text\":\"§aYour Armor Glows And The Enemy Vanishes\"}]}"
						}
					}
				]
			},
			{
				// Dummy weighting so it happens semi frequently
				"weight": 20
			}
		]
	}
}
```

Thats it, you can rejig the bits how you see fit but ultimately you have all the pieces to apply effects to armor and check for if you have the whole set applied or check for other equipment.

> You can also change the equipment checks from self to other and check if whoever is attacking you has something equipped or even check if you are attacking a sort of block/entity and do different effects based on that. We haven't touched on that directly here but there is a good enough starting point to get you on your way and let you be creative with things.

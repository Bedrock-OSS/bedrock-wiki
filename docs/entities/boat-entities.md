---
title: Creating Boats
category: Tutorials
tags:
    - recipe
    - intermediate
---

## Requires Format Version 1.16.100 or below

The behavior format version now requires 1.16.100 or below for the `minecraft:behavior.rise_to_liquid_leve` and `minecraft:buoyant` methods to work.
If you find a new method that works in the newer format versions, you should consider helping to contribute by updating the wiki.

## Using Runtime Identifiers

You can read more about runtime identifiers [here](/entities/runtime-identifier). Using runtime identifiers, you can implement most of the boat's hard-coded behaviors. However, your boat won't rotate with you, and it will always face North.

## Using Components

Currently, the best way to create a boat entity is by using components. 1.16 introduced new components that we can use to our advantage: `minecraft:behavior.rise_to_liquid_level` and `minecraft:buoyant`. Striders use the first one in vanilla to make them float on lava, but we can repurpose it for water as well.

## 1st method: minecraft:behavior.rise_to_liquid_level

<CodeHeader>BP/entities/bar</CodeHeader>

```json
{
	"minecraft:entity": {
		"format_version": "1.14.0",
		"description": {
			"identifier": "foo:bar",
			"is_summonable": true,
			"is_spawnable": true,
			"is_experimental": false
		},
		"components": {
			//This is the component that does the magic
			"minecraft:behavior.rise_to_liquid_level": {
				"priority": 0,
				//This property can adjust how high your boat is above the water
				"liquid_y_offset": 0.5,
				//Positive vertical displacement, in other words, how much the boat will move up
				"rise_delta": 0.05,
				//Negative vertical displacement, in other words, how much the boat will move down
				"sink_delta": 0.05
				//Use rise_delta and sink_delta to simulate waves/bouncing effect
			},

			//Sets the boat speed in water
			"minecraft:underwater_movement": {
				"value": 5
			},
			//This component is important, without it the boat will sink
			"minecraft:navigation.walk": {
				"can_sink": false
			},
			"minecraft:rideable": {
				"seat_count": 1,
				"family_types": ["player"],
				"interact_text": "action.interact.enter_boat",
				"seats": {
					"position": [0, 0, 0]
				}
			},
			//Add this component if you want your boat to be controlled with WASD
			"minecraft:input_ground_controlled": {},
			"minecraft:health": {
				"value": 10,
				"max": 10
			},
			//Sets the boat speed on the ground (set this to zero if you don't want your boats to move on the ground)
			"minecraft:movement": {
				"value": 3
			},
			//This is to prevent the boat from not stopping whenever a player exits, said the boat
			"minecraft:movement.basic": {},
			"minecraft:collision_box": {
				"width": 1,
				"height": 1
			},
			"minecraft:physics": {}
		}
	}
}
```

## 2nd method: minecraft:buoyant

<CodeHeader></CodeHeader>

```json
{
	"minecraft:entity": {
		"format_version": "1.14.0",
		"description": {
			"identifier": "foo:bar",
			"is_summonable": true,
			"is_spawnable": true,
			"is_experimental": false
		},
		"components": {
			"minecraft:buoyant": {
				//Determines whether gravity should be taken into account (useful with waterfalls)
				"apply_gravity": true,
				//Range: 0-1. This controls how high the boat is above the water
				"base_buoyancy": 1.0,
				//A "wave" makes the entity bounce up and down. A big wave simply amplifies this effect. Note: setting simulate_waves to false won't make the effect go away completely.
				"simulate_waves": true,
				//How likely a "big" wave will hit this boat
				"big_wave_probability": 0.03,
				//How strong the "big" wave will be
				"big_wave_speed": 10.0,
				//How strong will the boat be dragged down in case this component is removed
				"drag_down_on_buoyancy_removed": 0,
				//Blocks this entity can be buoyant in. Only actual liquids are allowed: lava and water
				"liquid_blocks": ["water"]
			},

			//Sets the boat speed in water
			"minecraft:underwater_movement": {
				"value": 5
			},
			//This component is important, without it the boat will sink
			"minecraft:navigation.walk": {
				"can_sink": false
			},
			"minecraft:rideable": {
				"seat_count": 1,
				"family_types": ["player"],
				"interact_text": "action.interact.enter_boat",
				"seats": {
					"position": [0, 0, 0]
				}
			},
			//Add this component if you want your boat to be controlled with WASD
			"minecraft:input_ground_controlled": {},
			"minecraft:health": {
				"value": 10,
				"max": 10
			},
			//Sets the boat speed on the ground (set this to zero if you don't want your boats to move on the ground)
			"minecraft:movement": {
				"value": 3
			},
			//This is to prevent the boat from not stopping whenever a player exits the boat
			"minecraft:movement.basic": {},
			"minecraft:collision_box": {
				"width": 1,
				"height": 1
			},
			"minecraft:physics": {}
		}
	}
}
```

## What method to use?

Both methods are suitable but have their pros and cons. If you want to disable the bouncing effect, use the first method. If you want more control over it, use the second method. I use the second method for static objects, such as buoys, and the first method for movable entities, such as boats, emulating the vanilla behavior.

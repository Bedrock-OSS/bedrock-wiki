---
layout: page
title: Format Versions
parent: Concepts
---

In this article, we will go over what Format Versions are, and how to use them. Format Versions are a part of Minecraft: Bedrock Edition's Addon System, they allow us to keep backwards compatibility, inter-addon compatibility, and let us utilize new technologies/methods. They are the "breaking changes" of the API. It also manages how the piece of content is registered into the game with its data. A Piece of data won't be registered if the Format Version is missing from the JSON File. Running something of a specific Format Version also depends on your Minecraft version, that is, for example, you can't run `1.16.100` code in `1.16.0`, but can run `1.16.0` in `1.16.100`.

### Backwards Compatibility: 
Backwards Compatability refers to keeping something functional in regards to older versions of the software, In simpler words, it's a system to keep old code being able to be executed even in newer versions without breaking anything. In the case of Bedrock Edition, we can achieve this by using older Format Versions like: `1.10.0` for Items, `1.8.0` for Client Entities, however, they may or may not be limited depending on the use case, for example, you can use `animation_controllers` field in `1.8.0` but not `1.10.0` as they get replaced by the `scripts` object. 

### Inter-Addon Compatibility:
Inter-Addon Compatibility is a necessity when working on big content packs, it allows for better mixing of content for playing experience, and much more. This can be achieved by using Format Versions which are experimental as they usually offer a better API to work with.  For example: 

*Example: Running a Command after a Player consumes an item.*
- With `1.16.100`:
<CodeHeader>BP/Items/example_food.json<\CodeHeader>
```json
{
    "format_version": "1.16.100",
	"minecraft:item": {
		"description": {
			"identifier": "example:food",
			"category": "nature"
		},
		"components": {
            "minecraft:use_duration": 3.2,
			"minecraft:food": {
				"nutrition": 3,
				"saturation_modifier": "low",
				"on_consume": {
					"event": "on_consume"
				}
			},
			"minecraft:icon": {
				"texture": "food"
			},
            "minecraft:use_animation": "eat"
		},
		"events": {
			"on_consume": {
				"run_command": [
					"say Hi"
				]
			}
		}
	}
}
```
- With `1.10`:
<CodeHeader>BP/items/example_food.json<\CodeHeader>
```json
{
    "format_version": "1.10.0",
	"minecraft:item": {
		"description": {
			"identifier": "example:food"
		},
		"components": {
            "minecraft:use_duration": 32,
			"minecraft:food": {
				"nutrition": 3,
				"saturation_modifier": "low",
			},
            "minecraft:use_animation": "eat"
		}
	}
}
```
With: 
<CodeHeader>BP/animation_controllers/eating_state.json<\CodeHeader>
```json
{
	"format_version": "1.10",
	"animation_controllers": {
		"controller.animation.eating_state": {
			"states": {
				"default": {
					"transitions": [
						{
							"eating": "q.get_equipped_item_name == 'food' && q.is_using_item && q.main_hand_item_use_duration >= 3.2"
						}
					]
				},
				"eating": {
					"transitions": [
						{
							"default": "!q.get_equipped_item_name == 'food' && !q.is_using_item && !q.main_hand_item_use_duration >= 3.2"
						}
					],
					"on_entry": [
						"say Hi"
					]
				}
			}
		}
	}
}
```
And finally, an overwrite to Player:
<CodeHeader>BP/entities/player.json<\CodeHeader>
```json
{
	"minecraft:entity": {
		"description": {
			"identifier": "minecraft:player",
			"is_spawnable": false,
			"is_summonable": false,
			"is_experimental": false,
			"animations": {
				"eating": "controller.animation.eating_state"
			},
			"scripts": {
				"animate": [
					"eating"
				]
			}
		}
	}
}
```
 
When running the `1.16.0` method, compatibility is broken the moment the `player.json` comes into place. There's a way to prevent this but only if you're willing to merge thousands of `player.json`(s) into one, which, unsurprisingly is impossible. 
 
TL;DR: Older API methods are simply harder and breaks compatibility for big addon packs. 

### New Methods:
This is a simple one, think of it as removing deprecated code entirely and utilizing new technologies. When we think of "breaking changes", it means deprecating of code for the future, for example, on Java Edition, Mojang utilizes the `@Deprecated` Annotation to notify users that the piece of code will change. In the case of Bedrock Edition, it is usually marked deprecated on the documentation for addon developers. 

*Examples:*
- Needing events to add Status Effects to Entities (see: Food Item in Point #2)
- Utilizing new components like `"minecraft:digger"`, `minecraft:throwable`, `minecraft:material_instances`, and many more to come in the future.
- Shifting of Resource-Based Components to Behavior/Server Side. All Resource-Based components once `1.16.100` is in LTS/Stable will only be available for use in Behavior/Server Side. 
- Item and Blocks events are present in `1.16.100` but not prior. 

### Picking a Format Version:
This purely depends on your use case. If you're going for simpler things, and need backwards compatibility, `1.10.0` for Items and Blocks is the way to go. If you need complex stuff, `1.16.100` then. Another thing to note would be that Entities are barely effected by different format versions, meaning you can use almost anything without worrying about backwards compatibility.

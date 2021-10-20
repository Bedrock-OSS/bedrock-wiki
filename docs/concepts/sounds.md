---
title: Sounds
tags:
    - intermediate
---

In bedrock, we can add custom sounds without overwriting any vanilla sounds. This is done by adding files to the resource pack.

`protip:` The best way to learn about sounds is by downloading and playing around with the default resource pack.

### Folder Structure

There are two main files that we edit when we want to add sounds. Note how `sound_definition` is nestedinside `sounds`.

Sound files themselves are added inside of the `sounds` folder, and can be any of the following formats.

<FolderView :paths="[

'RP/sounds.json',
'RP/sounds/sound_definitions.json',
'RP/sounds/example.wav',
'RP/sounds/example.ogg',
'RP/sounds/example.mp3',
'RP/sounds/example.fsb',

]"></FolderView>

## sound_definitions.json

`sound_definitions.json` is where we define new sound short-names. This should be thought of as typing a `short-name` or `id` to a physical sound path. Here is an example, `sound_definitions.json`, that adds a new trumpet sound called `example.toot`.

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.14.0",
	"sound_definitions": {
		"example.toot": {
			"category": "neutral",
			"sounds": ["sounds/trumpet"]
		}
	}
}
```

Sounds added in this way can be triggered using `/playsound`. Please note that `playsound` does not auto-correct, so you will need to be careful in your typing.

:::note
New files referenced by file path, such as sounds, DO need a complete client restart to load. This means that if sounds don't work, you should restart your entire MC client rather than just reloading the world.
:::

### Top Level Keys

In the example above, I showed two `top-level` fields: `category` and `sounds`. Sounds will be discussed in further detail below, but the other `top-level` keys will be discussed here:

#### Categories

Categories are used internally by the engine to decide how each sound is played. We can utilize different channels to get other effects.

| Category | Note                                            |
| -------- | ----------------------------------------------- |
| weather  |                                                 |
| block    |                                                 |
| bucket   |                                                 |
| bottle   |                                                 |
| ui       | Sounds in this category will ignore range limit |
| player   |                                                 |
| hostile  |                                                 |
| music    |                                                 |
| record   |                                                 |
| neutral  |                                                 |

#### min_distance

The minimum distance **away** the source of the sound that the client needs to be within to hear. It must be a float (1.0), or the argument will be ignored.

#### max_distance

The maximum distance **to** the source of the client's sound needs to be within to hear. It must be a float (1.0), or the argument will be ignored.

### Sound definitions

In the example above, I showed `sounds` as simply a list with a single path. This is good for simple sounds but does not have much power. For starts, I can add multiple sounds to the list. These sounds will be randomized when played:

<CodeHeader></CodeHeader>

```json
"sounds": [
    "sounds/trumpet",
    "sounds/trumpet2",
    "sounds/trumpet3"
]
```

Additionally, we can define each sound as an object instead of a string. This allows us finer control and unlocks some new settings. The string/object style can be mixed and matched.

#### name

The path to the file, such as: `"sounds/music/game/creative/creative1"`

#### stream

Limits the sound only to be played a limited number of instances at a time. Good for improving performance on sound heavy worlds.

#### volume

How loud the sound should play, from `0.0` to `1.0`. Sounds cannot be made more audible than initially encoded.

#### load_on_low_memory

Forces the loading of the sound even when nearing low memory. "load_on_low_memory" is now deprecated as of 1.16.0

#### pitch

The pitch of the sound (how low/high it sounds). Ranges from `0.0` to `1.0` (standard), but can be higher, such as `1.48`.

### Example

Here is a more realistic example containing these options:

<CodeHeader></CodeHeader>

```json
"block.beehive.drip": {
    "category": "block",
    "max_distance": 8,
    "sounds": [
        {
            "name": "sounds/block/beehive/drip1",
            "load_on_low_memory": true
        },
        "sounds/block/beehive/drip2",
        "sounds/block/beehive/drip3",
        "sounds/block/beehive/drip4"
    ]
}
```

## sounds.json

If we want our sounds to run automatically, we can add them into the `sounds.json` file. This will tie the sound definitions directly to game events and cause them to play without needing to trigger with `/playsound`.

Sounds can be added into various categories:

| Category                | Note                                                                             |
| ----------------------- | -------------------------------------------------------------------------------- |
| individual_event_sounds | Contains sounds like beacon activation, chest-close, or explode                  |
| block_sounds            | Contains hit, step, and break sounds for blocks                                  |
| entity_sounds           | Contains death, ambient, hurt, etc. sounds for entities (Including custom ones!) |
| interactive_sounds      | WIP                                                                              |

### Adding Entity Sounds

I assume that sounds can be added in other categories, but I personally only have experience adding sounds into the `entities` category. Entity sounds are automatically played at various points in the entities life-cycle.

Common events:

| Events     | Note                                                     |
| ---------- | -------------------------------------------------------- |
| ambient    | Played randomly, such as grunts, clucks, or ghast noises |
| hurt       | Played when damaged                                      |
| death      | Played when it dies                                      |
| step       | Played when the entity moves along the ground            |
| fall.big   | For hitting the ground from a high height                |
| fall.small | For hitting the ground from a low height                 |
| splash     | For splashing in the water                               |
| attack     | For melee attacking                                      |
| shoot      | For shooting projectiles                                 |

There are also many sound events, which _most likely_ trigger automatically, but which I don't have details for, such as:

| Unknown Categories |
| ------------------ |
| breathe            |
| splash             |
| swim               |
| ambient.in.water   |
| death.in.water     |
| jump               |
| eat                |
| hurt.in.water      |
| mad                |
| stare              |
| sniff              |
| sleep              |
| spit               |
| warn               |
| scream             |

### Example

<CodeHeader></CodeHeader>

```json
{
	"entity_sounds": {
		"entities": {
			"wiki:elephant": {
				"volume": 1,
				"pitch": [0.9, 1.0],
				"events": {
					"step": {
						"sound": "elephant.step",
						"volume": 0.18,
						"pitch": 1.1
					},
					"ambient": {
						"sound": "elephant.trumpet",
						"volume": 0.11,
						"pitch": 0.9
					}
				}
			}
		}
	}
}
```

## Adding sounds to Animations

Sounds played in animations function based off of `short-name` definitions in the RP entity file.

This example shows playing a wing-flap sound, synced with an animation.

<CodeHeader>RP/entities/dragon.json#minecraft:client_entity/description</CodeHeader>

```json
"sound_effects": {
    "wing_flap": "wiki.dragon.wing_flap" //where wiki.dragon.roar is a sound definited in sound_definitions
}
```

<CodeHeader>RP/animations/dragon.json#animations/animation.dragon.flying</CodeHeader>

```json
"sound_effects": {
    "3.16": {
        "effect": "wing_flap"
    }
}
```

## Adding sounds to Animation Controllers

You can play sounds within animation controllers in a similar way that animations can be.

This example shows playing an explosion sound, synced using an animation controller.

<CodeHeader>RP/entities/custom_tnt.json#minecraft:client_entity/description</CodeHeader>

```json
"sound_effects": {
    "explosion": "wiki.custom_tnt.explosion" //where wiki.custom_tnt.explosion is a sound definited in sound_definitions just like animation sounds.
}
```

<CodeHeader>RP/animation_controllers/custom_tnt.animation_controllers.json#animation_controllers/custom_tnt.animation_controllers.json</CodeHeader>

```json
"states": {
  "default": {
    "transitions": [
      {
        "explode_state": "query.mark_variant == 1"
      }
    ]
  },
  "explode_state": {
    "sound_effects": [
      {
        "effect": "explosion"
      }
    ],
    "transitions": [
      {
        "default": "query.mark_variant == 0"
      }
    ]
  }
}
```

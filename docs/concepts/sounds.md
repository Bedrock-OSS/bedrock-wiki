---
title: Sounds
tags:
    - intermediate
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - aexer0e
    - MedicalJewel105
    - Justash01
    - DasEtwas
    - TheItsNameless
    - ThomasOrs
---

In bedrock, we can add custom sounds without overwriting any vanilla sounds. This is done by adding files to the resource pack.

:::tip
The best way to learn about sounds is by downloading and playing around with the default resource pack.
:::

### Folder Structure

There are two main files that we edit when we want to add sounds. Note how `sound_definition` is nested inside `sounds`.

Sound files themselves are added inside of the `sounds` folder, and can be any of the following formats.

<FolderView :paths="[
	'RP/sounds.json',
	'RP/sounds/sound_definitions.json',
	'RP/sounds/example.wav',
	'RP/sounds/example.ogg',
	'RP/sounds/example.fsb',
]"></FolderView>

## sound_definitions.json

`sound_definitions.json` is where we define new sound short-names. This should be thought of as typing a `short-name` or `id` to a physical sound path. Here is an example, `sound_definitions.json`, that adds a new trumpet sound called `example.toot`:

<CodeHeader>RP/sounds/sound_definitions.json</CodeHeader>

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

:::warning
New files referenced by file path, such as sounds, DO need a complete client restart to load. This means that if sounds don't work, you should restart your entire MC client rather than just reloading the world.
:::

### /playsound volume notes

The game will clamp the sound volume to at most 1.0 before multiplying it with the sound definition's volume.

For `/playsound`, the maximum hearable range of a sound is given by `min(max_distance, max(volume * 16, 16))`.
If `"max_distance"`is not given in the sound's definition, it is equivalent to `playsound_volume * 16`.

Approximate sound attenuation by distance. The actual graph might not be linear.

![](/assets/images/concepts/sounds/sound_graph.png)

Shown above is the approximate sound attenuation factor by distance **for playing sounds with a volume parameter greater than or equal to 1**. Notice how the playsound `<volume>` limits the sound's audible range.
The axis `distance` is the distance of the sound listener (player) to the sound source. The corresponding `volume` axis' value is the factor for the playsound volume capped to 1, multiplied by the sound definition's volume to get the final volume of the sound you hear. As an expression this could be written as: `final_volume = min(playsound_volume, 1) * graph_volume * sound_definition_volume`.

**Note:** Attenuation by distance of the hearable sound's volume is not affected by the volume parameter given in the command.

For example, `mob.ghast.affectionate_scream` sets `"min_distance": 100.0`, but can only be heard from at most 16 blocks away when using `/playsound` with volume 1 to play it. Specifying a greater volume value increases the audible range. When using a large enough volume to hear the sound farther away, the sound will get quieter only after a distance of more than 100.0.

To make a sound which can be heard far away but also drops in volume continuously over distance, one can add e.g. `"volume": 0.01`and use large `<volume>` values in the playsound command. The high value for the `/playsound` volume will produce a large audible range (e.g. a volume of 4 is 64 blocks as calculated above), while the low volume will prevent the played sound from capping at 1.0 too soon.

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

The distance from the sound source after which sound volume is attenuated. Default value: 0.0. It must be a float (eg. 1.0), or the property will be ignored.

#### max_distance

The distance from the sound source after which the sound volume is the quietest (if in range). It must be a float (eg. 1.0), or the property will be ignored.

### Sound definitions

In the example above, I showed `sounds` as simply a list with a single path. This is good for simple sounds but does not have much power. For starts, I can add multiple sounds to the list. These sounds will be randomized when played:

<CodeHeader>RP/sounds/sound_definitions.json</CodeHeader>

```json
{
	"format_version": "1.14.0",
	"sound_definitions": {
		"example.toot": {
			"category": "neutral",
			"sounds": [
				"sounds/trumpet",
				"sounds/trumpet2",
				"sounds/trumpet3"
			]
		}
	}
}
```

Additionally, we can define each sound as an object instead of a string. This allows us finer control and unlocks some new settings. The string/object style can be mixed and matched.

#### name

The path to the file, such as: `"sounds/music/game/creative/creative1"`

#### stream

Limits the sound only to be played a limited number of instances at a time. Will cause the game to not load the entire sound data into memory while playing, but rather in smaller parts while playing, thus using less memory. Good for improving performance on sound heavy worlds.

#### volume

How loud the sound should play, from `0.0` to `1.0`. Sounds cannot be made more audible than initially encoded. Set to `1.0` by default.
Sounds in custom resource packs can have working values greater than 1.0.

#### load_on_low_memory

Forces the loading of the sound even when nearing low memory. "load_on_low_memory" is now deprecated as of 1.16.0

#### pitch

The pitch of the sound (how low/high it sounds). Should be a positive value. For example, `2.3` will let the sound play 2.3 times as quickly and thus at higher pitch. Set to `1.0` by default.

#### is3D

`true` makes the sound directional. Set to `true` for all sounds by default. Ignored for `music` and `ui` sounds. Only sounds with `false` will play stereo sound.

#### interruptible

Set to `true` by default.

### weight

If there is more than one sound in the list, the sound to be played is chosen randomly. `"weight"` (integer value like 5) will give the relative chance that this sound is chosen from the list. For example, if there are two sounds in the list, one with `"weight": 10` and the other with `"weight": 2`, the first will be played approximately 5 times more likely than the second (accurately: `10 / (10 + 2) = 83.3%` chance vs. `2 / (10 + 2) = 16.7%` chance) . Set to `1` by default.

### Example

Here is a more realistic example containing these options:

<CodeHeader>RP/sounds/sound_definitions.json#sound_definitions</CodeHeader>

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

<CodeHeader>RP/sounds.json</CodeHeader>

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
    "wing_flap": "wiki.dragon.wing_flap" //where wiki.dragon.roar is a sound defined in sound_definitions
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
    "explosion": "wiki.custom_tnt.explosion" //where wiki.custom_tnt.explosion is a sound defined in sound_definitions just like animation sounds.
}
```

<CodeHeader>RP/animation_controllers/custom_tnt.animation_controllers.json#controller.animation.custom_tnt</CodeHeader>

```json
"states":{
    "default":{
        "transitions":[
            {
                "explode_state":"query.mark_variant == 1"
            }
        ]
    },
    "explode_state":{
        "sound_effects":[
            {
                "effect":"explosion"
            }
        ],
        "transitions":[
            {
                "default":"query.mark_variant == 0"
            }
        ]
    }
}
```

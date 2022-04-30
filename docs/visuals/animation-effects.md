---
title: Effects in Animations
mentions:
-	MedicalJewel105
---

## Effects in Animations

Sometimes it is much easier to use particles or sounds in animation rather than in animation controller.
Animations can have effects in them, such as:

-	Particles
-	Sounds

### Particles

Minecraft Particles can be used in entity animations. For example, the phantom has an animation which emits the minecraft:phantom_trail particle constantly. Let's try to add a particle to our entity's attack animation.

<CodeHeader>RP/entity/my_entity.json</CodeHeader>

```json
"particle_effects": {
	"flames": "minecraft:mobflame_emitter"
}
```

Here we defined a shortname for particle that we are going to use.

You can find a list of particles [here](https://minecraft.gamepedia.com/Particles) or [here](/particles/vanilla-particles).

:::warning Warning!
Not every particle works there. If you have problems, consider trying another particle. For example, use this one.
Also note that some particles emit constantly.
:::

### Sounds

If you want to use a sound, you need to define it too.

<CodeHeader>RP/entity/my_entity.json</CodeHeader>

```json
"sound_effects": {
	"meow": "mob.cat.meow"
}
```

:::warning Warning!
Not every sound works there. If you have problems, consider trying another sound. For example, use this one.
:::

## Adding Effects to Animation

You can add particles or sounds to your animation mainly or in Blockbench.

### Mainly

You need to add the following to your animation:

<CodeHeader>RP/animations/my_animation.json#my.animation</CodeHeader>

```json
"particle_effects": {
    "0.0": {
        "effect": "flames",
        "locator": "" //You need to add a locator in your model
    }
}
```

<CodeHeader>RP/animations/my_animation.json#my.animation</CodeHeader>

```json
"sound_effects": {
    "0.0": {
        "effect": "meow"
	}
}
```

<Spoiler title="Example">

<CodeHeader>RP/animations/my_animation.json</CodeHeader>

```json
{
	"format_version" : "1.8.0",
	"animations" : {
		"animation.sheep.grazing" : {
			"animation_length" : 2.0,
			"loop" : true,
			"particle_effects": {
                "0.0": {
                    "effect": "flames",
                    "locator": "body"
                }
            },
			"sound_effects": {
    			"0.0": {
    			    "effect": "meow"
				}
			},
			"bones" : {
				"head" : {
					"position" : {
						"0" : [ 0.0, 0.0, 0.0 ],
						"0.2" : [ 0.0, -9.0, 0.0 ],
						"1.8" : [ 0.0, -9.0, 0.0 ],
						"2" : [ 0.0, 0.0, 0.0 ]
					},
					"rotation" : {
						"0.2" : {
							"post" : [ "180.0 * (0.2 + 0.07 * math.sin(query.key_frame_lerp_time * 1644.39))", 0.0, 0.0 ],
							"pre" : [ 36.0, 0.0, 0.0 ]
						},
						"1.8" : {
							"post" : [ 36.0, 0.0, 0.0 ],
							"pre" : [ "180.0 * (0.2 + 0.07 * math.sin(query.key_frame_lerp_time * 1644.39))", 0.0, 0.0 ]
						}
					}
				}
			}
		}
	}
}
```

</Spoiler>

### In Blockbench

First let's add a locator for our particle. Go to "Edit" section, select a group, right-click and choose " Add Locator":

![](/assets/images/visuals/animation-effects/add-locator.png)

Rename it and move where you want.

Then go to "Animate" section, choose an animation and click on a magic stick icon:

![](/assets/images/visuals/animation-effects/add-effect.png)

Now click "+" to open menu and specify the data:

![](/assets/images/visuals/animation-effects/specify-data.png)

You can attach a sound to animation the same way.

Now save your animation and launch the game!

![](/assets/images/visuals/animation-effects/showcase.png)
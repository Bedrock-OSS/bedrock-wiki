---
title: Intro to Entities RP
category: General
nav_order: 2
tags:
    - guide
    - beginner
mentions:
    - SirLich
    - MedicalJewel105
    - Overload1252
    - ChibiMango
    - Luthorius
    - TheItsNameless
    - SmokeyStack
    - ThomasOrs
---

The resource-pack entity file holds references to assets which form the visuals of our entity. Additionally, it contains information on how and when to render these visuals.

This page will break down each part of the entity file and explain each part. For a walkthrough of making your own entity, you can check out our [Beginner's Guide](/guide/custom-entity).

## File Outline

<CodeHeader>RP/entity/example.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "wiki:example",
            "materials": {...},
            "textures": {...},
            "geometry": {...},
            "render_controllers": [...],

            "animations": {...},
            "scripts": {...},

            "sound_effects": {...},
            "particle_effects": {...},

            "spawn_egg": {...},
            "enable_attachables": false,
            "hide_armor": false
        }
    }
}
```

While it may look overwhelming, many of these sections are just *shortname definitions*. A shortname definition is where we assign an asset such as a texture path or a geometry identifier to a shortname which we can then reference later. This means if we change where an asset is located later, we only have to change it one place. Additionally, it allows our code to be cleaner without needing write out long path locations or identifiers.

## Materials
A material describes the way that a texture is rendered. For example, skeletons have a material which allows the texture to be transparent and endermen have one which allows their eyes to glow. There are many materials that you can use without needing to make your own.

<CodeHeader>RP/entity/spider.entity.json#minecraft:client_entity/description</CodeHeader>

```json
"materials": {
    "default": "spider",
    "invisible": "spider_invisible"
},

```
Here the materials are `spider` and `spider_invisible` and the shortnames are `default` and `invisible` respectively. Remember this key just *defines* what material is attached to the shortname, our entity still doesn't know when to use each one.
For a list of premade materials, you can check out our page [here](/documentation/materials).
For a guide on making your own material, you can check this [page](/visuals/materials). Be warned that this is quite advanced.

## Textures
A texture is an image which gets mapped onto our geometry. Each entity has a different texture. Similarly to materials, this key is also a shortname definition however here, the reference is the path to the texture.

<CodeHeader>RP/entity/bee.entity.json#minecraft:client_entity/description</CodeHeader>

```json
"textures": {
    "default": "textures/entity/bee/bee",
    "angry": "textures/entity/bee/bee_angry",
    "nectar": "textures/entity/bee/bee_nectar",
    "angry_nectar": "textures/entity/bee/bee_angry_nectar"
}

```
As before, we can define multiple textures. This can be useful if we want different variants of an entity, like for the bee above. Additionally, we can use multiple textures to layer different textures on different bases like how villagers have different biome bases and different profession layers. You can check out our page on render controllers [here](/entities/render-controllers) for more details on how to layer textures.

## Geometry
A geometry is a file which defines a collection of *bones* which make up the shape of our entity. This file can be made automatically using applications like Blockbench. You can check our [guide](/guide/blockbench) for more details on how to make your own models.

<CodeHeader>RP/entity/creeper.entity.json#minecraft:client_entity/description</CodeHeader>

```json
"geometry": {
    "default": "geometry.creeper",
    "charged": "geometry.creeper.charged"
}
```
Here our shortname references the identifier of our geometry.

<CodeHeader>RP/entity/creeper.entity.json#minecraft:client_entity/description</CodeHeader>

```json
{
	"format_version" : "1.12.0",
	"minecraft:geometry" : [
		{
			"description" : {
				"identifier" : "geometry.creeper",
                ...
            }
        }
}
```
Again, we can have multiple geometries such as for the creeper which has two models for its charged and non-charged form.

:::tip
Often if your are having trouble with visuals, it may be because of a typo with the shortname of the entity. Make sure you double check.
:::

## Render Controllers
A render controller simply controls how your entity will be rendered. This file takes the shortnames of your materials, textures and geometries and with them you define when it renders each element.

<CodeHeader>RP/render_controllers/example.rc.json</CodeHeader>

```json
{
	"format_version": "1.10.0",
	"render_controllers": {
		"controller.render.example": {
			"geometry": "geometry.default",
			"materials": [
				{
					"*": "material.default"
				}
			],
			"textures": ["texture.default"]
		}
	}
}
```
Here, this render controller says to always use the `default` material, texture and geometry. You can get much more complex render controllers which allow for switching textures or making certain parts of the geometry invisible. This is explained on our render controller page [here](/entities/render-controllers).

To tell our entity which render controller to use, we just add the render controller identifier to our file.

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"render_controllers": [
    "controller.render.example"
]
```

The most basic entity file requires these 4 keys in order to properly render an entity.

## Animations
Animations describe how our entity may move. This can include walking animations, attacks or the way entities look at the player. They are defined by code which describe how a geometry moves at certain times or using maths equations. You need a geometry in order for your animations to work.

<CodeHeader>RP/animations/example.a.json</CodeHeader>

```json
{
	"format_version" : "1.8.0",
	"animations" : {
		"animation.example.walk" : {...},
        "animation.example.attack" : {...}
	}
}
```
Each animation is defined by its identifier. Our animation key is then another shortname definition for our animations.

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"animations": {
    "walk": "animation.example.walk",
    "attack": "animation.example.attack",
    "attack_controller": "controller.animation.example"
}
```

Here you'll notice we also have referenced an animation controller. This controls when certain animations are played. This allows us to define different transitions between animations.

This controller uses the shortnames for animations defined in the animation key. We also additionally define our controller so we are able to reference when to run this controller later. I recommend checking out our guide for some more information on how the animation controller is structured.

:::tip IMPORTANT
Remember that this key just *defines* a shortname for our animation and do not run our animation. If you only have this key your animations will not run in the game.
:::

## Scripts
The scripts key defines certain scripts which the entity runs at certain times. This allows us to run animations, set up variables and even control the size of our entity. Additionally, we can use *Molang* to define these. For a more in depth look at Molang, you can check our page [here](/concepts/molang). Overall, Molang is essentially a type of math equation which uses variables.

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"scripts": {
    "initialize": [...],
    "pre_animation": [...],
    "animate": [...],

    "scale": "1",
}
```

Some useful things in Molang are:
- queries. These are values which change depending on the condition. For example the `query.time_of_day` or `q.time_of_day` query returns the time of day.
- variables. These are values can you edit to hold values to use later. For example, you can set the variable `variable.my_number` or `v.my_number` to be say 2.
- evaluating. In Molang, we can use operators to return values. For example, we can return the value 1 if `q.time_of_day` is greater than `v.my_number` by writing `q.time_of_day > v.my_number`.

### Initialize
This script runs when the entity is first initialize, that is when it spawns in and each time it is loaded. This means each time you log into your world it will run anything in this script. This is useful for setting default values for custom variables.

### Pre Animation
This script runs every frame before the animations play. This is useful for computing variables that will be used in animations that need to be calculated before the animation runs.

### Animate
This script runs every frame after `pre_animation`. This is where you run animations and animation controllers. Each frame every animation or animation controller in this key will be run.

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"scripts": {
    "animate": [
        "attack_controller",
        {
            "walk": "q.modified_move_speed"
        }
    ],
}
```

Here, `attack_controller` is the shortname for our animation controller. Each frame it will run our animation controller and any transitions that occur in the controller. Additionally, within animate we can define how quickly our animation plays using Molang. Remember that Molang evaluates to a value and here we have a query, `q.modified_move_speed`. This query returns the speed the entity is moving, returning `1` for a normal walking speed. So with this, our `walk` animation plays according to the speed that the entity is moving.

If we were instead to have `"walk": 2`, then walk animation would always play at twice the speed. We can also define this inside an animation controller which can give more control about when to play these animations. For more information on using Molang with animations check out our page [here](/visuals/math-based-animations).

If your animations aren't playing then it is a good idea to check if they are defined in `animate` using the correct shortname.

### Scale
Scale controls the size of the model. This is slightly different to the component `minecraft:scale` which you can define in an entity's behavior file. The component `minecraft:scale` scales the model and hitbox of an entity, whereas `scale` in the entity's resource file only scales the model. Depending on your case, either might be more useful.

Another difference of `scale` is that you can use Molang and there are 3 additional components: `scaleX`, `scaleY` and `scaleZ`.

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"scripts": {
    "scale": "q.variant",
    "scaleX": 2,
    "scaleY": 0.5
}
```

Here, our entity will scale depending on what variant it has determined by `minecraft:variant` component. This may be beneficial if you want to keep the hitbox the same but have the entity look larger.
Additionally, the model will be squashed in the `y` direction by a factor of 2 and stretched in the `x` direction by a factor of 2.

A use case of this may be having an atmospheric entity which has a random size.

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"scripts": {
    "initialize": [
        "v.scale = math.random_integer(1, 5);"
    ],
    "scale": "v.scale"
}
```

This code will make it so each time the entity is loaded, it will have a random size between the values we chose. Here `math.random_integer` is a Molang function which chooses a random integer between the numbers provided.

## Sound Effects
Sounds effects are sound files which can be played in game at certain times. This key again defines shortnames for sound effects which can be used by the entity in animations. This can be useful for creating more dynamic sounds when an entity interacts with the world. For example, you may want the entity to play 3 sounds as it attacks.

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"sound_effects": {
    "attack_1": "mob.entity.attack_1",
    "attack_2": "mob.entity.attack_2",
    "attack_3": "mob.entity.attack_3"
}
```

Here, the shortname references the sound shortname defined in the `sound_definitions.json` file. When using the sound elsewhere, such as in a command, you would use `mob.entity.attack_1`, but in an animation defined in the entity, you would use `attack_1`.

## Particle Effects
Particle effects are files which contain information about the movement of many small spires to create effects like smoke or fire. Similarly to sound effects, this key defines short names for particle effects to be used in animations. For example, the phantom has particle effects on its wings as it flies around.

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"particle_effects": {
    "smoke": "wiki:smoke_particle"
}
```

Here, the shortname references the identifier for the particle. For more information on particles and making your own, check out our particle pages [here](/particles/particles). For more information on using sound effects and particle effect in animations you can also check out our page [here](/visuals/animation-effects).

## Spawn Egg
The spawn egg key allows us to generate a spawn egg for our entity. When used this will spawn in our entity and is automatically added to the creative inventory. There are two options for the look of your spawn egg, colored and texture.

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"spawn_egg": {
    "base_color": "#db7500",
    "overlay_color": "#242222"
}
```

Using `base_color` and `overlay_color` will create a texture egg similar to the vanilla ones with the colors provided.

<CodeHeader>RP/entity/example.json#minecraft:client_entity/description</CodeHeader>

```json
"spawn_egg": {
    "texture": "wiki.example",
}
```

The `texture` key takes the texture shortname of an image, defined in `item_texture.json`, to use as the image for the spawn egg. If this key is omitted, then a spawn egg will not be generated.

## Additional Settings
`enable_attachments` determines whether or not the entity can use attachments. For example, setting this to false means that the entity cannot hold weapons like swords or bows.

`hide_armor` allows the entity to wear armor, but it will not be rendered.

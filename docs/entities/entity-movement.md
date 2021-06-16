---
layout: page
title: Entity Movement
parent: Knowledge
---

# Entity Movement

Entity movement is a confusing subject, with many pieces that must be done correctly, or your entity will not move. The following is required:

 - [Movement Speed](#movement-speed)
 - [Movement Type](#movement-type)
 - [Movement Modifiers](#movement-modifiers)
 - [Navigation](#navigation)
 - [Navigation Abilities](#navigation-abilities)
 - [AI](#ai)

# Movement Speed

The first thing your entity needs is a speed component. This sets how quickly your entity will move through the world.

| Component                     | Note                         |
|-------------------------------|------------------------------|
| minecraft:movement            | Set movement speed on land.  |
| minecraft:underwater_movement | Set movement speed in the water. |
| minecraft:flying_speed        | Set the speed in the air.    |

You should always include `minecraft:movement`. Add the other two as needed.

All vanilla swimming" entities like Dolphin include `underwater_movement`. Only some flying entities have `flying_speed`. It is not known why this is the case.

# Movement Type

Your entity will also need a movement type. Movement types set hard-coded behavior for *how* your entity will move through the world. 

You may only include one movement type in your entity. Select the component that most closely matches your needs. 

| Component                     | Note                                                                                        |
|-------------------------------|---------------------------------------------------------------------------------------------|
| [minecraft:movement.amphibious](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.amphibious) | This move control allows the mob to swim in the water and walk on land.                         |
| [minecraft:movement.basic](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.basic) | This component accents the movement of an entity.                                           |
| [minecraft:movement.fly](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.fly) | This move control causes the mob to fly.                                                    |
| [minecraft:movement.generic](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.generic) | This move control allows a mob to fly, swim, climb, etc.                                    |
| [minecraft:movement.hover](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.hover) | This move control causes the mob to hover.                                                  |
| [minecraft:movement.jump](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.jump) | Move control causes the mob to jump as it moves with a specified delay between jumps.  |
| [minecraft:movement.skip](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.skip) | This move control causes the mob to hop as it moves.                                        |
| [minecraft:movement.sway](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.sway) | This move control causes the mob to sway side to side, giving the impression it is swimming. |

# Movement Modifiers

Movement modifiers provide additional information about how your entity will move through the world.

| Component                   | Note                                               |
|-----------------------------|----------------------------------------------------|
| [minecraft:water_movement](https://bedrock.dev/docs/stable/Entities#minecraft%3Awater_movement)  | Sets the friction the entity experiences in water. |
| [minecraft:rail_movement](https://bedrock.dev/docs/stable/Entities#minecraft%3Arail_movement)     | Sets that the entity can move on rails (only).     |
| [minecraft:friction_modifier](https://bedrock.dev/docs/stable/Entities#minecraft%3Afriction_modifier) | Sets the friction the entity experiences on land.  |

# Navigation

The next thing your entity needs is a navigation component. Navigation components have quite a few fields, like whether the entity can open doors or avoid sunlight. How you set these fields is generally more important than the navigation component you pick. 

The reason there are so many navigation components is that each one gives a slightly different hard-coded behavior. Pick the navigation component whose name/description best matches the kind of navigation your entity will be doing.

You can only have one navigation component at any given time.

| Component                                                                                               | Note
|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------
| [minecraft:navigation.climb](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.climb)     |Allows this entity to generate paths that include vertical walls like the vanilla Spiders do.
| [minecraft:navigation.float](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.float)     |Allows this entity to generate paths by flying around the air like the regular Ghast.
| [minecraft:navigation.generic](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.generic) |Allows this entity to generate paths by walking, swimming, flying and climbing around, and jumping up and down a block.
| [minecraft:navigation.fly](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.fly)         |Allows this entity to generate paths in the air as the vanilla Parrots do.
| [minecraft:navigation.swim](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.swim)       |Allows this entity to generate paths that include water.
| [minecraft:navigation.walk](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.walk)       |Allows this entity to generate paths by walking around and jumping up and down a block like regular mobs.

# Navigation Abilities

On top of the movement and the navigation component, there exist many additional components to augment the abilities of your entity as they move through the world.


| Component                       | Note                                                                                                                              |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| [minecraft:annotation.break_door](https://bedrock.dev/docs/stable/Entities#minecraft%3Aannotation.break_door) | Allows entity to break doors. It must also be turned on in the navigation component.
| [minecraft:annotation.open_door](https://bedrock.dev/docs/stable/Entities#minecraft%3Aannotation.open_door)| Allows entity to open doors. It must also be turned on in the navigation component.
| [minecraft:buoyant](https://bedrock.dev/docs/stable/Entities#minecraft%3Abuoyant)| Specify which liquids the entity can float in.
| [minecraft:can_climb](https://bedrock.dev/docs/stable/Entities#minecraft%3Acan_climb)| Allows this entity to climb up ladders.
| [minecraft:can_fly](https://bedrock.dev/docs/stable/Entities#minecraft%3Acan_fly)| Marks the entity as being able to fly. The pathfinder won't be restricted to paths where a solid block is required underneath it. 
| [minecraft:can_power_jump](https://bedrock.dev/docs/stable/Entities#minecraft%3Acan_power_jump)| Allows the entity to power jump like the horse does in vanilla.
| [minecraft:floats_in_liquid](https://bedrock.dev/docs/stable/Entities#minecraft%3Afloats_in_liquid)| Sets that this entity can float in liquid blocks.

There are also components like `minecraft:preferred_path`, which will modify navigation based on block-based path-cost.

# AI

The navigation component tells the entity *how* to generate paths, but it doesn't say *when* or *where* to generate directions. This is what the AI components are for. 

AI components are prefixed with `behavior`.

There are too many AI components that generate paths to list in this document. A few will be provided as examples:

| Component                        |
|----------------------------------|
| [minecraft:behavior.random_stroll](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.random_stroll)|
| [minecraft:behavior.run_around_like_crazy](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.run_around_like_crazy)|

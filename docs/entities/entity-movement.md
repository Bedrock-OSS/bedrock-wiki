---
title: Entity Movement
category: Tutorials
mentions:
    - SirLich
    - sermah
    - MedicalJewel105
    - TheDoctor15
---

In Minecraft, entities have the ability to move through the world, either by walking, swimming or flying. To get these behaviors, your entity will generally need quite a few behaviors, broken out into various types.

As you read this tutorial, keep in mind that your entity will need at least:

-   [A component that sets the entities movement speed.](#movement-speed)
-   [A component to set how the entity will move (walking, flying, etc)](#movement-type)
-   [A component to set the entities navigation abilities, so it can generate paths.](#navigation-abilities)
-   [A component that sets where/when the entity should move (AI Goals).](#ai)

:::tip
The best way to create a moving entity is by picking a similar entity from the vanilla behavior pack, and copying the components into your entity.

For example entities like Phantom, or Ghast, or Parrot are all flying entities, but have very different in-game behavior! Use the closest-matching entity as a template.
:::

## Movement Speed

The first thing your entity needs is a speed component. This sets how quickly your entity will move through the world.

| Component                                                                                                        | Note                             |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [minecraft:movement](/entities/vanilla-usage-components#movement)                                         | Set movement speed (required)    |
| [minecraft:underwater_movement](/entities/vanilla-usage-components#underwater-movement)                   | Set movement speed in the water. |
| [minecraft:flying_speed](/entities/vanilla-usage-components#flying-speed)                                 | Set the speed in the air.        |

You should always include `minecraft:movement`. Add the other two as needed.

All vanilla "swimming" entities like Dolphin include `underwater_movement`. Only some flying entities have `flying_speed`. It is not known why this is the case.

## Movement Type

Your entity will also need a movement type. Movement types set hard-coded behavior for _how_ your entity will move through the world.

You may only include one movement type in your entity. Select the component that most closely matches your needs. Generally `basic`, `amphibious` and `fly` are good ones to use.

| Component                                                                                                 | Note                                                                                         |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [minecraft:movement.amphibious](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.amphibious) | This move control allows the mob to swim in the water and walk on land.                      |
| [minecraft:movement.basic](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.basic)           | This component accents the movement of an entity.                                            |
| [minecraft:movement.fly](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.fly)               | This move control causes the mob to fly.                                                     |
| [minecraft:movement.generic](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.generic)       | This move control allows a mob to fly, swim, climb, etc.                                     |
| [minecraft:movement.hover](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.hover)           | This move control causes the mob to hover.                                                   |
| [minecraft:movement.jump](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.jump)             | Move control causes the mob to jump as it moves with a specified delay between jumps.        |
| [minecraft:movement.skip](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.skip)             | This move control causes the mob to hop as it moves.                                         |
| [minecraft:movement.sway](https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.sway)             | This move control causes the mob to sway side to side, giving the impression it is swimming. |

## Movement Modifiers

Movement modifiers provide additional information about how your entity will move through the world. These components are not required for normal entities, but you should be aware of them.

| Component                                                                                             | Note                                               |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [minecraft:water_movement](https://bedrock.dev/docs/stable/Entities#minecraft%3Awater_movement)       | Sets the friction the entity experiences in water. |
| [minecraft:rail_movement](https://bedrock.dev/docs/stable/Entities#minecraft%3Arail_movement)         | Sets that the entity can move on rails (only).     |
| [minecraft:friction_modifier](https://bedrock.dev/docs/stable/Entities#minecraft%3Afriction_modifier) | Sets the friction the entity experiences on land.  |

## Navigation

The next thing your entity needs is a navigation component. Navigation components have quite a few fields, like whether the entity can open doors or avoid sunlight. How you set these fields is generally more important than the navigation component you pick!

The reason there are so many navigation components is that each one gives a slightly different hard-coded behavior. Pick the navigation component whose name/description best matches the kind of navigation your entity will be doing.

You can only have one navigation component at any given time.

:::tip
This component is very important. You should check vanilla examples for inspiration on what fields and values to use.
:::

| Component                                                                                               | Note                                                                                                                    |
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [minecraft:navigation.climb](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.climb)     | Allows this entity to generate paths that include vertical walls like the vanilla Spiders do.                           |
| [minecraft:navigation.float](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.float)     | Allows this entity to generate paths by flying around the air like the regular Ghast.                                   |
| [minecraft:navigation.generic](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.generic) | Allows this entity to generate paths by walking, swimming, flying and climbing around, and jumping up and down a block. |
| [minecraft:navigation.fly](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.fly)         | Allows this entity to generate paths in the air as the vanilla Parrots do.                                              |
| [minecraft:navigation.swim](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.swim)       | Allows this entity to generate paths that include water.                                                                |
| [minecraft:navigation.walk](https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.walk)       | Allows this entity to generate paths by walking around and jumping up and down a block like regular mobs.               |

## Navigation Abilities

On top of the movement and the navigation component, there exist many additional components to augment the abilities of your entity as they move through the world.

| Component                                                                                                     | Note                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [minecraft:annotation.break_door](https://bedrock.dev/docs/stable/Entities#minecraft%3Aannotation.break_door) | Allows entity to break doors. It must also be turned on in the navigation component.                                              |
| [minecraft:annotation.open_door](https://bedrock.dev/docs/stable/Entities#minecraft%3Aannotation.open_door)   | Allows entity to open doors. It must also be turned on in the navigation component.                                               |
| [minecraft:buoyant](https://bedrock.dev/docs/stable/Entities#minecraft%3Abuoyant)                             | Specifies which liquids the entity can float in.                                                                                    |
| [minecraft:can_climb](https://bedrock.dev/docs/stable/Entities#minecraft%3Acan_climb)                         | Allows this entity to climb up ladders.                                                                                           |
| [minecraft:can_fly](https://bedrock.dev/docs/stable/Entities#minecraft%3Acan_fly)                             | Marks the entity as being able to fly. The pathfinder won't be restricted to paths where a solid block is required underneath it. |
| [minecraft:can_power_jump](https://bedrock.dev/docs/stable/Entities#minecraft%3Acan_power_jump)               | Allows the entity to power jump like the horse does in vanilla.                                                                   |
| [minecraft:floats_in_liquid](https://bedrock.dev/docs/stable/Entities#minecraft%3Afloats_in_liquid)           | Sets that this entity can float in liquid blocks.                                                                                 |
| [minecraft:jump.dynamic](https://bedrock.dev/docs/stable/Entities#minecraft%3Ajump.dynamic)                   | Defines a dynamic type jump control that will change jump properties based on the speed modifier of the mob.                      |
| [minecraft:jump.static](https://bedrock.dev/docs/stable/Entities#minecraft%3Ajump.static)                     | Gives the entity the ability to jump.                                                                                             |

There are also components like `minecraft:preferred_path`, which will modify navigation based on block-based path-cost.

## AI Goals

The navigation component tells the entity _how_ to generate paths, but it doesn't say _when_ or _where_ to generate paths. This is what the AI components are for.

AI Goals are prefixed with `behavior` and follow a priority system to pick which behavior to run. The lower priorities will be picked first.

In general, you should usually add quite a few AI components, with different priorities. Layered together, these will create realistic movement and behavior for your entity. As always, vanilla entities provide a good template for which components to add, and with what properties/priorities.

There are too many AI components that generate paths to list in this document. A few will be provided as examples:

| Component                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------- |
| [minecraft:behavior.random_stroll](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.random_stroll)                   |
| [minecraft:behavior.follow_owner](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.follow_owner)                     |
| [minecraft:behavior.move_to_water](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.move_to_water)                   |
| [minecraft:behavior.stroll_towards_village](https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.stroll_towards_village) |

For a full list, visit [bedrock.dev](https://bedrock.dev/docs/stable/Entities#AI%20Goals).

### Pathfinding

Making entities go to specific places is one of the most common requests for Marketplace content.
The best way to do pathfinding uses a second entity, which the first entity will be attracted to. I am going to call this secondary entity the **marker**. If you are confused on how to create a marker, visit the [Dummy Entities](/entities/dummy-entities) page.

#### Idea

The way we are going to do pathfinding is actually fairly simple: Make our entity aggressive towards our marker, and then simply place our marker where we want our entity to path to. The hard part is knowing what components to add so we get really long-range pathing.

#### Components

These components can be edited as needed to create good pathing. Make sure to update the `nearest_attackable_target` to point to your marker entity. This takes a `family_type`, so you should set one of those on your marker.

Don't forget to add some basic movement and navigation components so your entity is able to move.

<CodeHeader></CodeHeader>

```json
"minecraft:behavior.nearest_attackable_target": {
    "priority": 0,
    "reselect_targets": true,
    "target_search_height": 1000,
    "within_radius": 1000,
    "must_see": false,
    "entity_types": [
        {
            "filters": [
                {
                    "test": "is_family",
                    "subject": "other",
                    "value": "waypoint_1"
                }
            ],
            "max_dist": 1000
        }
    ]
},
"minecraft:attack": {
    "damage": 0
},
"minecraft:behavior.melee_attack": {
    "priority": 0,
    "require_complete_path": true,
    "track_target": true
},
"minecraft:follow_range": {
    "value": 1000,
    "max": 1000
}
```

#### Detecting a reached waypoint

You can use `minecraft:target_nearby_sensor` to detect when you have reached the marker entity:

<CodeHeader></CodeHeader>

```json
"minecraft:target_nearby_sensor": {
    "inside_range": 2.0,
    "outside_range": 4.0,
    "must_see": true,
    "on_inside_range": {
        "event": "reached_waypoint"
    },
    "on_outside_range": {
        "event": "not_reached_waypoint"
    }
}
```

## Other

:::tip
You can trigger entity walking animation via command.
`/execute as @e[type=...] at @s run tp @s ^^^0.1`
This way you can control where entity goes and make it look natural.
:::

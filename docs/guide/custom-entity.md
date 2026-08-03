---
title: Create a Custom Entity
category: Guide
description: How to create your first custom entity.
nav_order: 6
prefix: "6. "
mentions:
    - ThijsHankelMC
    - TheItsNameless
    - SmokeyStack
    - MedicalJewel105
    - SirLich
    - ChibiMango
    - smell-of-curry
    - Hatchibombotar
    - Sephodious
    - LeGend077
    - Ascent817
    - BaHuu
    - Sprunkles137
    - ThomasOrs
    - QuazChick
---

Similarly to custom items, we can also make custom entities with many similar mechanics to the vanilla entities in the game. These entities can be incredibly powerful allowing you to make your own animals which can be bred and tamed or an aggressive mob that attacks anything it sees.

Here we will make a ghost entity which will float, attack the player and drop our ectoplasm item on death.

<WikiImage src="ghost_view.png" width="150" />

Just like items, entities are made up of two parts:

-   The visuals (texture, name, animations, sounds)
-   The behaviors (movement, attacks)

Differently though, we will need two main files for our entity called the _server_ file and the _client_ file which sit in our BP and RP respectively.
We will also need additional files to describe the geometry of our entity and its animations, but we will cover those in later sections.

First, we will cover how to create an entity & define its behavior. Next, we will look at how to add the visuals.

## Entity Behavior

Like with items, we need a file to tell our entity how to behave which points an identifier to certain components which define behavior. This file will be very similar to our item behavior file except with a lot more components.

We define our server file in our BP, under the `BP/entities` folder.
We will call this file `ghost.json`.

This is a basic overview of the file:

<CodeHeader path="BP/entities/ghost.json" />

```json
{
    "format_version": "1.26.40",
    "minecraft:entity": {
        "description": { ... },
        "components": { ... }
    }
}
```

Just like with the items, we have our format version and here we have `"minecraft:entity"` as this is an entity file. From now on we won't comment on the format version and recommend to use the version example that we give.

For entities we have a little bit more information under `description`:

<ExampleFile path="BP/entities/ghost.json" snippet="minecraft:entity/description" />

The `identifier` key serves the same purpose, to point to which entity we are talking about.
The other keys determine what ways we can add the entity to our world:

-   `is_summonable` — Whether it can be summoned using the `/summon` command.
-   `is_spawnable` — Whether a spawn egg is registered for the entity.

We recommend leaving the settings as they are here as any changes will make it harder to test your entity in game.

### Components

An entity has many more behaviors than an item, so we'll need to define more components for it.
Here, we will break down different types of components into groups and then look at them closer.
For more information about entity components, you can check out our page [here](/entities/entity-intro-bp).

### Stat Components

These are the components that you will generally have on every entity. This define some core attributes to your entity.

<CodeHeader path="BP/entities/ghost.json" breadcrumbs="minecraft:entity/components" />

```json
"minecraft:type_family": {
    "family": ["wiki:ghost", "monster"]
},
"minecraft:health": {
    "value": 20,
    "max": 20
},
"minecraft:attack": {
    "damage": 3
},
"minecraft:movement": {
    "value": 0.2
},
"minecraft:collision_box": {
    "width": 0.8,
    "height": 1.8
},
"minecraft:loot": {
    "table": "loot_tables/wiki/entities/ghost.json"
}
```

-   The components `minecraft:health` and `minecraft:attack` and `minecraft:movement` are straight forward and set the entities health, attack damage and movement speed.

-   The `minecraft:collision_box` component of an entity is the box within which the entity interacts with or collides with blocks or other entities, aligned to the bottom middle of the entity.
    This component also determines the area where the entity can be hit or interacted with.

-   The `minecraft:type_family` components determines the family of the entity which is used to group entities in a similar category together.

    For example `monster` includes zombies, skeletons and creepers.
    This allows us to be able to select all entities with the `monster` tag.

    Since the ghost family is custom, we've given it the `wiki:` namespace to avoid conflicts with other add-ons that may add their own ghosts with a similar family.

-   The `minecraft:loot` component defines the path to the loot table that the entity will drop on death. We will create this loot table in a later section using this path.

### Movement Components

In order for an entity to move around, we need to define two things, _how_ it moves and _where_ it can move to.
This is defined using the `movement` and `navigation` components respectively.

You will always need a `movement` and `navigation` component if you want your entity to be able to move.

<CodeHeader path="BP/entities/ghost.json" breadcrumbs="minecraft:entity/components" />

```json
"minecraft:physics": {},
"minecraft:jump.static": {},
"minecraft:movement.basic": {},
"minecraft:navigation.walk": {
    "can_walk": true,
    "avoid_sun": true,
    "can_pass_doors": true,
    "can_open_doors": true
}
```

-   `minecraft:physics` is used to apply gravity and collision to your entity. Note: you cannot change this component using component groups.
-   `minecraft:jump.static` allows your entity to jump up blocks for traversal. Both are used on almost every entity.

There are few different types of movement components which allow different types of movement such as `minecraft:movement.swim` used by dolphins, `minecraft:movement.fly` used by parrots and `minecraft:movement.hover` used by bees.

-   The `minecraft:movement.basic` component allows our entity to walk by moving over blocks.
    To make it seem like our entity is actually floating, we will use our geometry.

-   The `minecraft:navigation.walk` component is a pathfinder which defines what paths we allow our entity to follow.
    For example skeletons will try not to walk in sunlight, so their pathing stops them from taking paths that would put them in sunlight.
    Additionally, parrots can fly so they can path into the air unlike walking mobs.

These components have a lot of different settings which allow for interesting pathing.
The settings we've chosen let our ghost walk along the ground, avoid stepping into sunlight, pass through doorways and open doors.

### Behavior Components

While we have defined _how_ our entity does things, we haven't yet defined _when_ or _what_ they do.
This is where `behavior` (also known as AI goal) components come in.
These components define the specific actions that our entity will do.

For example, villagers will try to breed since they have the `minecraft:behavior.breed` component and tamed wolves follow their owners since they have the `minecraft:behavior.follow_owner` component.

We want our ghost to be able to idly walk and look around, target the player when nearby and then attack them. Here are the components that we use:

<CodeHeader path="BP/entities/ghost.json" breadcrumbs="minecraft:entity/components" />

```json
// Allow for random movement and looking around
"minecraft:behavior.random_stroll": { ... },
"minecraft:behavior.random_look_around": { ... },
"minecraft:behavior.look_at_player": { ... },
// Allow for targeting
"minecraft:behavior.hurt_by_target": { ... },
"minecraft:behavior.nearest_attackable_target": { ... },
// Allow for attacking
"minecraft:behavior.delayed_attack": { ... }
```

The first component, `minecraft:behavior.random_stroll` allows our entity to choose a random point nearby to path to periodically.
This path is created with our `navigation` component and then the type of movement is defined by our `movement` component.

The next two components allow our entity to randomly look around and to look at the player if they are within range.

For attacking, in order for our entity to attack, it needs a `target`.
The two behaviors `minecraft:behavior.hurt_by_target` and `minecraft:behavior.nearest_attackable_target` will cause the entity to target any entity that hurts it and target any the nearest enemy to it within range.

Finally, the `minecraft:behavior.delayed_attack` is how our entity actually attacks it target.

Each of these behaviors have further settings to tweak the exact behavior we want.

<CodeHeader path="BP/entities/ghost.json" breadcrumbs="minecraft:entity/components" />

```json
// Allow for random movement and looking around
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 1
},
"minecraft:behavior.random_look_around": {
    "priority": 7
},
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6,
    "probability": 0.02
},
// Allow for targeting
"minecraft:behavior.hurt_by_target": {
    "priority": 1
},
"minecraft:behavior.nearest_attackable_target": {
    "priority": 2,
    "within_radius": 25,
    "reselect_targets": true,
    "entity_types": [
        {
            "filters": {
                "any_of": [
                    {
                        "test": "is_family",
                        "subject": "other",
                        "value": "player"
                    }
                ]
            },
            "max_dist": 35
        }
    ]
},
// Allow for attacking
"minecraft:behavior.delayed_attack": {
    "priority": 0,
    "attack_once": false,
    "track_target": true,
    "require_complete_path": false,
    "random_stop_interval": 0,
    "reach_multiplier": 1.5,
    "speed_multiplier": 1,
    "attack_duration": 0.75,
    "hit_delay_pct": 0.5
}
```

For more details about what each of these options do, you can read about them on the official documentation, [bedrock.dev](https://bedrock.dev/docs/stable/Entities).

#### Priority

All behaviors contain a `"priority"` field. This field is used to decide which behavior to run when many can.

When the entity is picking something to do, it searches all its behaviors from lowest priority to the highest priority and picks the first one that it can do. For this reason, you need to make important behaviors like `minecraft:behavior.nearest_attackable_target` lower than behaviors like `minecraft:behavior.look_at_player`. If the `look_at_player` behavior is lower, it will always run this first when the player is close, and the entity will never attack.

In general, important behaviors will have a priority of `0` or `1`.

### Full Entity Behavior File

<Spoiler title="Full ghost.json">

<ExampleFile path="BP/entities/ghost.json" />

</Spoiler>

With that we have completed our entity behavior file.

More complex entities can also have different _states_, where they will behave differently depending on what state they are in. For example, a wild wolf will walk around freely, but once it is tamed it will follow the player. An _event_ (being tamed) caused the wolf to change _states_. This feature allows us to create dynamic entities which can perform different actions when different events occurs. You can learn more about this in our guide [here](/entities/entity-intro-bp).

If you open your world and try to summon in your entity using `/summon wiki:ghost`, it should behave like we expect but there will only be a shadow on the ground. You might also see its name as a translation key, similar to how it happened with our item.

Next we will learn how to create our resource or client file and how to assign our texture, geometry and animations.

## Entity Resources

Applying visuals to an entity is very different to an item. Since there are a lot more pieces, we have a separate file dedicated to defining the resources.
This is the called entity _client file_ which we will name `ghost.entity.json`. These files go in the folder `RP/entity`.

In this section, we will use the example resources created for our ghost entity to demonstrate how to add them to an entity. In the next section of the guide, we explain how to use Blockbench, a dedicated 3D editor, to create your own entity geometry and animations.

### Model

The 'model' for our entity is the shape of our entity, also called the 'geometry'.
This describes the visual shape of our entity, like how a pig is a box with 4 legs and a head whereas a chicken has 2 legs, a head and wings.
The geometry is stored as a JSON file in the `RP/models/entity` folder and ours will be named `ghost.geo.json`.

This file is automatically generated by Blockbench for us, so there is no need to learn or modify its JSON format by hand.
As such, we won't go into full detail when looking at the file. It stores the data about each block in our model, such as size, position and rotation.

<ExampleFile path="RP/models/entity/ghost.geo.json" />

The important information that we need is the `identifier` which we will use to reference our geometry file, which here is `geometry.ghost`.

### Texture

Our entity now has its shape, but it also needs a texture.
This texture can also be created in Blockbench and is simply a `.png` file.

<ExampleFile path="RP/textures/wiki/entity/ghost.png" />

You may recall, when we made our item, we assigned a shortname to our texture to reference later.
We will be doing something similar for our entity within our entity file, so make sure you keep the file path to the texture.

### Animations

Animations allow our entity to have more life and move in different ways.
We can have as many animations for an entity as we want and we can also trigger them at different types using an _animation controller_ which we will cover in the next section.

Depending on your entity, you may want different animations.
For our ghost we will have an `idle`, `attack` and `move` animation.
These files are also created automatically in Blockbench, so we won't look into it in full detail.

An animation file can contain one or multiple animations within it. Our animations will all be under one file called `ghost.animations.json` inside the `RP/animations` folder.

<CodeHeader path="RP/animations/ghost.animations.json" />

```json
{
    "format_version": "1.8.0",
    "animations": {
        "animation.ghost.idle": {...},
        "animation.ghost.attack": {...},
        "animation.ghost.move": {...}
    }
}
```

Each animation is defined by the key, so here our three animation identifiers are `animation.ghost.idle`, `animation.ghost.attack` and `animation.ghost.move`.

:::tip NOTE
If you have multiple animation files for one entity, consider moving them all into one file to keep your folders easy to read and navigate.
If not, ensure that when you are referencing the animation in your entity file, you use the animation identifier and _not_ the file name.
:::

<Spoiler title="Full Animation File">

<ExampleFile path="RP/animations/ghost.animations.json" />

</Spoiler>

### Animation Controllers

We have our animations but our entity won't know when to play them. This is where animation controllers are used.
These controllers at their core, _control_ how the animations are played.
An animation controller is made up of _states_ and _transitions_ between states.
This allows us to play certain animations when the entity is in certain states, which we can transition between when certain conditions are met.

For example, while an entity is moving, transition to the moving state which plays the `move` animation
Or while an entity is attacking, transition to the attack state which plays the `attack` animation.

Let us look at our animation controller for attacking.

<ExampleFile
    path="RP/animation_controllers/ghost.ac.json"
    snippet="animation_controllers/controller.animation.ghost.attack"
/>

You can see we have two states, `default` and `attacking`.
Our entity begins in the `default` state.

You can see under `transitions`, we have a condition, which when true will transfer the entity to a state.

<ExampleFile
    path="RP/animation_controllers/ghost.ac.json"
    snippet="animation_controllers/controller.animation.ghost.attack/states/default/transitions/0"
/>

Here, `attacking` is the state that will be transitioned to, and `q.is_delayed_attacking`{lang=molang} is the condition that needs to be true for the transition to occur.
This condition is called a _query_. These queries can tell us things about the entity such as if it is attacking or moving. The query `q.is_delayed_attacking`{lang=molang} will return `true`{lang=molang} when the entity is performing the attack behavior.

When the entity is in the `attacking` state, it also has a transition back to the default state.
Now the condition is `!q.is_delayed_attacking`{lang=molang}.
Here the `!` means _not_, so it will return the opposite result of `q.is_delayed_attacking`{lang=molang} (if `q.is_delayed_attacking`{lang=molang} returns `true`{lang=molang} then `!q.is_delayed_attacking`{lang=molang} returns `false`{lang=molang}).

This state also has `animations`. These are the animations that will always play while in this state.
Note that we are using the _shortname_ for our animation here, which we will reference in our entity file later.
If you don't, the animations will not play.
There is also the `blend_transition` key, which allows the animations to slowly fade into each other.
A higher number means a longer blending time.

We can also make a similar controller for our `move` and `idle` animation.

<ExampleFile
    path="RP/animation_controllers/ghost.ac.json"
    snippet="animation_controllers/controller.animation.ghost.walk"
/>

This follows a similar pattern with some additions.
We now have `initial_state` which tells the controller which state to start on.
If none is listed then it will start on the state `default`.

You'll also notice our queries look slightly different.
Here the query `q.modified_move_speed` returns a value, so in order to return a boolean (i.e. true or false) we look at when the value is above or below `0.1`.
For more in depth information on animation controllers, you can read [here](/animation-controllers/animation-controllers-intro).

Now that we have our animation controllers, we can add them to our animation controller file.
Similarly to animations, the key is the identifier for our animation controller; `controller.animation.ghost.attack` and `controller.animation.ghost.walk`.

Our file will be called `ghost.ac.json` and will be placed in the `RP/animation_controllers` folder.

<Spoiler title="Full Animation Controller File">

<ExampleFile path="RP/animation_controllers/ghost.ac.json" />

</Spoiler>

With that, we have created all the resources we need for our entity. We will now create our entity file.

### Client Entity File

The client file contains all the references to the visual components of our entity.
Our client file will go in `RP/entity` and we name this file `ghost.entity.json`.
This file will have all our information under the `description` key.

We begin with the familiar formatting:

<CodeHeader path="RP/entity/ghost.entity.json" />

```json
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "wiki:ghost"
        }
    }
}
```

We use the same identifier as for our behavior file in order to point to the correct entity.

To begin, we need to define the visuals of our entity in our file so we know which models and textures we are using. We also need to do the same for our animations and animation controllers.

#### Render Controller

In order to display our entity it needs to be _rendered_.
For this to happen, it needs a material, texture and geometry. We have already made a texture and geometry.
A material defines how our texture will be displayed.
For example, a skeleton uses a material to allow for transparency and an enderman uses a material to allow its eyes to glow.

Since our ghost has some transparency, we need a material which will render this correctly. Luckily, Minecraft has many pre-built materials for us to use such as `entity_alphatest` which will allow us to do this. You can create your own materials but be warned it is very advanced. If you are interested though, you can begin [here](/documentation/materials).

For us to now use these resources, we need to define a reference to them with a shortname. This is similar to how we did for items within the `item_texture.json` file, except here we do it in the entity client file. Here is the layout.

<CodeHeader path="RP/entity/ghost.entity.json" />

```json
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "wiki:ghost",
            "materials": {
                "default": "entity_alphatest"
            },
            "textures": {
                "default": "textures/wiki/entity/ghost"
            },
            "geometry": {
                "default": "geometry.ghost"
            }
        }
    }
}
```

Here for each category we have assigned the shortname `default` for each of our resources, ensuring to use the correct paths and identifiers.
We are able to define multiple of these, though that is more advanced. Now we can use these shortnames to reference our resources.

In order for these resources to be rendered, we need to tell the game which resources to render in. This is controlled with a _render controller_.
The controller tells the game which geometry, material and texture to render for the entity, allowing us to see it in game.

The render controller is defined in a separate file and uses the shortnames we defined in our entity file.
The file is called `ghost.rc.json` and is in the `RP/render_controllers` folder:

<ExampleFile path="RP/render_controllers/ghost.rc.json" />

This follows a similar structure to the animation controller and animation file, with our render controller identifier being `controller.render.ghost`.
This tells the game that the resource rendered should be the resource with shortname `default`.

Render controllers can also allow you to display different textures or apply different materials to different parts of our model.
Under `materials`, we use `"*"` to mean that we apply this material to all _bones_ in our model (i.e. each cube in our model).
For more information on render controllers, you can check our page [here](/entities/render-controllers).

:::tip
If you keep your shortnames consistent, you can actually reference the same render controller for multiple entities.
:::

Now to tell your entity to use this render controller, we add it to our entity file like so:

<ExampleFile
    path="RP/entity/ghost.entity.json"
    snippet="minecraft:client_entity/description/render_controllers"
/>

With that our entity file should look like this.

<CodeHeader path="RP/entity/ghost.entity.json" />

```json
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "wiki:ghost",
            "materials": {
                "default": "entity_alphatest"
            },
            "textures": {
                "default": "textures/wiki/entity/ghost"
            },
            "geometry": {
                "default": "geometry.ghost"
            },
            "render_controllers": ["controller.render.ghost"]
        }
    }
}
```

Now if we spawn our entity into a world, we should be able to see it.

#### Scripts

Now let us add our animations. Like with our other resources, we need to define shortnames for them. Keep in mind, we also need to define shortnames our animation controllers as well.

<ExampleFile
    path="RP/entity/ghost.entity.json"
    snippet="minecraft:client_entity/description/animations"
/>

You'll recall, these are the shortnames we used in our animation controllers; any animations we want to use in animation controllers, must be defined with a shortname in the entity client file.

Now that we have animations and animation controllers referenced, we need to decide when the entity will run them. This is done using `scripts`:

<ExampleFile
    path="RP/entity/ghost.entity.json"
    snippet="minecraft:client_entity/description/scripts"
/>

Here, `scripts` tell the entity to perform certain actions at certain times.
The `animate` key will run any animation or controller referenced every tick.
This means that each tick our animation controller will check whether to transition to a new state and perform any animations in the state they are in.

With this our animations should be working correctly.

#### Spawn Egg

The final step to finalize our entity client file, is to create a spawn egg for our entity.
Luckily, our file can generate one for us with the key `spawn_egg`.

<ExampleFile
    path="RP/entity/ghost.entity.json"
    snippet="minecraft:client_entity/description/spawn_egg"
/>

This will generate a spawn egg which will summon our entity when used. It uses the hex codes in `base_color` and `overlay_color` to color the egg.
If you want a custom icon for your spawn egg, instead use the key `texture` and put in the shortname to the texture you want.
Follow the method in the item tutorial on how to define an texture shortname for an item.

<CodeHeader breadcrumbs="minecraft:client_entity/description" />

```json
"spawn_egg": {
    "texture": "wiki:texture_shortname"
}
```

With that, we have completed our entity client file.

<Spoiler title="Full ghost.entity.json">

<ExampleFile path="RP/entity/ghost.entity.json" />

</Spoiler>

### Entity Name

The final steps are to add our entity's name to the language files.
You may have also noticed that if you created a spawn egg, it will also have a translation key for a name; we will also add this.
Within `en_US.lang`, make sure you add names for both the entity and entity spawn egg item.

They should look similar to this:

<CodeHeader path="RP/texts/en_US.lang" />

```lang
entity.wiki:ghost.name=Ghost
item.spawn_egg.entity.wiki:ghost.name=Ghost
```

## Overview

Done! Your entity should now show up in Minecraft, complete with all behaviors and visuals, including animations!
You should be able to summon your entity using `/summon` or by finding the spawn egg in the creative menu.

Your folder structure should look like this:

<FolderView :paths="[
    'RP/animation_controllers/ghost.ac.json',
    'RP/animations/ghost.animations.json',
    'RP/entity/ghost.entity.json',
    'RP/models/entity/ghost.geo.json',
    'RP/render_controllers/ghost.rc.json',
    'RP/texts/en_US.lang',
    'RP/texts/languages.json',
    'RP/textures/wiki/entity/ghost.png',
    'RP/textures/wiki/items/ectoplasm.png',
    'RP/textures/item_texture.json',
    'RP/manifest.json',
    'RP/pack_icon.png',
    'BP/entities/ghost.json',
    'BP/items/ectoplasm.json',
    'BP/texts/en_US.lang',
    'BP/texts/languages.json',
    'BP/manifest.json',
    'BP/pack_icon.png',
]" />

## Your Progress So Far

:::tip What you have learned

-   [x] Set up your pack
-   [x] Create a custom item
-   [x] Create a custom entity
-   [x] How to format the behavior and resource files for an item
-   [x] How to set an entities texture
-   [x] How to use models, animations, and animation controllers to make your entity more exciting
-   [ ] Create the entity's loot, spawn rules, and a custom recipe

:::

<Button link="/guide/loot-table">Next: Loot Table, Spawn Rules & Recipe</Button>

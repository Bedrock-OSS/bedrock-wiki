---
title: Intro to Entities BP
category: General
nav_order: 1
tags:
    - guide
    - beginner
---

Three main structures make up the base of a behavior-pack entity file. This document will explain what each of them means and how to use them.

Confusing component groups with components is a widespread source of errors. Pay attention closely to understand the difference.

## Components

Components are logical building blocks that make up Minecraft entities. All components are written by Mojang and provided to us for use. Components can do all sorts of things, like set the size of an entity or give it the ability to swim. The complete list of components can be found [here](https://bedrock.dev/docs/stable/Entities).

It is _impossible_ to create your own components. The entire list of components is hard-coded and provided by Microsoft.

When you want to add behavior to your entity, you add `components` into the `components` object of the `minecraft:entity` object. For example, if we want to give the entity the ability to climb, we can do so by adding this component: `"minecraft:can_climb": {}`.

All components are formatted like `"minecraft:<name>": { <setting> }`. Every component takes different kinds of settings.

Here is an example of a few components, inside an entity:

<CodeHeader>BP/entities/example.json#minecraft:entity</CodeHeader>

```json
"components": {
    "minecraft:type_family": {
        "family": [
            "player"
        ]
    },
    "minecraft:collision_box": {
        "width": 0.6,
        "height": 1.8
    },
    "minecraft:can_climb": {},
}
```

Notice how the `components` list _only_ contains components.

## Component groups

Component groups are "folders" for components. They group components and can be added or removed using `events` to create custom game-play.

Here is an example:

<CodeHeader>BP/entities/example.json#minecraft:entity</CodeHeader>

```json
"component_groups": {

    //the name of the component group
    "minecraft:cat_persian": {

        //A list of valid components. Add as many as you like.
        "minecraft:variant": {
            "value": 6
        },
        "minecraft:physics": {}
    },

    //the name of a second component group
    "wiki:example_group": {
        "minecraft:type_family": {
            "family": [
                "wiki_is_awesome!"
            ]
        }
    }
}
```

All component groups are custom-created. You cannot use component groups from other entities in your entity.

In vanilla Minecraft entities, component groups are namespaced with `minecraft:`, like `minecraft:cat_persian` above. But it is important to remember that they are _not components_. When you create your component groups, you can use whatever name/namespace:name combination you want. For example, `wiki:example_group` above. [Here](/concepts/namespaces)'s more info on namespaces.

When a component is placed into a group, is it _not_ automatically added to your entity. It won't do anything at all until the group is added. When the group is added, the component will become active and start affecting the behavior of your entity. You can also have multiple component groups added at once.

## Events

Events are a special syntax for adding and removing component groups that can be called by components when certain criteria are met. By adding/removing groups, we can create dynamic behavior for our entities.

An example:

<CodeHeader>BP/entities/example.json#minecraft:entity#events</CodeHeader>

```json
"minecraft:ageable_grow_up": { //Name of the event
    "remove": { //list of component groups to remove
        "component_groups": [
            "minecraft:cat_baby"
        ]
    },
    "add": {
        "component_groups": [
            "minecraft:cat_adult" //list of component groups to add.
        ]
    }
},
```

Like component groups, events are 100% custom-created inside each entity. You cannot use events from other entities on your own. Do not be tempted to use `"minecraft:ageable_grow_up"` in your own entity. If you want grow-up functionality, you need to define the component groups and events yourself.

The only thing you can add/remove from an entity is `component groups`. As tempting as it is to try and add/remove components directly, this is not possible.

Events are activated inside of certain components when some criteria is met. Below is an example:

<CodeHeader>BP/entities/example.json#minecraft:entity</CodeHeader>

```json
"components": {
    "minecraft:interact": {
        "interactions": [
            {
                "on_interact": {
                    "filters": [
                        {
                            "test":"is_family",
                            "subject": "other",
                            "value": "player"
                        }
                    ],
                    "target": "self",
                    "event": "wiki:on_interact"
                }
            }
        ]
    }
},
"component_groups": {
    "wiki:interacted": {
        "minecraft:scale": {
            "value": 2
        }
    }
},
"wiki:on_interact":{
    "add": {
        "component_groups": [ "wiki:interacted" ]
    }
}
```
Here, when the entity is interacted with by the player, it will activate the `"wiki:on_interact"` event. The event will then add the component group `"wiki:interacted"`. This will then apply the component `"minecraft:scale"`.

For a more in depth tutorial on what events can do check out our page on entity events. 

<BButton link="/entities/entity-events">Entity Events</BButton>

## Uses in vanilla

Component groups and events are the primary tools that vanilla entities use to create custom and adaptable behavior. Here are some vanilla features that are created using component groups and events:

- The zombie is programmed to turn into a `drowned` if it spends too long under the water.

- The fox has two component groups `minecraft:fox_red` and `minecraft:fox_active` to have the two color variants depending on where they spawn.

- The enderman will become agressive to the player when looked at.
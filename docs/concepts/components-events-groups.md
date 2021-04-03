---
layout: page
title: Components/Groups/Events
parent: Concepts
---

# Component Groups Vs. Components Vs. Events



Three main structures make up the base of a behavior-pack entity file. This document will explain what each of them means, and how to use them. 

Confusing component groups with components is a very common source of errors. Pay attention closely to understand the difference.

# Components

Components are logical building blocks that make up Minecraft-entities. All components are written by Mojang, and provided to us for use. Components can do all sorts of things, like set the size of an entity, or give it the ability to swim. The [full list of components can be found here](https://bedrock.dev/docs/stable/Entities).

It is *impossible* to create your own components. The entire list of components is hard-coded and provided by Microsoft. 

When you want to add behavior to your entity, you do so by adding `components` into the `components` object of `minecraft:entity`. For example, if we want to give the entity the ability to climb, we can do so by adding this component: `"minecraft:can_climb": {}`. 

All components are formatted like `"minecraft:<name>": { <setting> }`. Every component takes different kinds of settings.

Here is an example of a few components, inside an entity:

{% include filepath.html path="BP/entities/example.json" local_path="minecraft:entity"%}
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

Notice how the `components` list *only* contains components. 

# Component groups

Component groups are "folders" for components. They group components together, and can be added or removed using `events` to create custom game-play.

Here is an example:

{% include filepath.html path="BP/entities/example.json" local_path="minecraft:entity"%}
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

In vanilla minecraft entities, component groups are namespaced with `minecraft:` -like `minecraft:cat_persian` above. But it is important to remember that they are *not components*. When you create your own component groups, you can use whatever name/namespace:name combination you want. For example `wiki:example_group` above. [Here's more info on namespaces](/knowledge/namespaces).

When a component is placed into a group, is it *not* automatically added to your entity. In fact, it won't do anything at all until the group is added. When the group is added, the component will become active, and start effecting the behavior of your entity.


# Events

Events are a special syntax for adding and removing component-groups. By adding/removing groups, we can create dynamic behavior for our entities.


An example:
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

Like component-groups, events are 100% custom created inside each entity. You cannot use events from other entities on your own. Do not be tempted to use `"minecraft:ageable_grow_up"` in your own entity. If you want grow-up functionality, you need to define the component-groups and events yourself.

The only thing you can add/remove from an entity is `component groups`. As tempting as it is to try and add/remove components directly, this is not possible. 

<Label color="yellow">Advanced</Label>

## Conditional Events

Conditional events are events using "filters" to return a component group depending on your filter see the below example.
We are testing if a tag exists and if it doesn't return the "prefix:is_false" component but if it does exist return "prefix:is_true".

An example:
```json
      "prefix:event_name": {//Name of the event
        "sequence": [//Sequence 1 >>> 2 >>> 3 this follows top to bottom order.
          {
            "filters": {//filter this checks if the filter conditions are false.
              "test": "has_tag",
              "subject": "self",
              "operator": "not",
              "value": "tag_name"
            },
            "add": {//list of component groups to remove.
              "component_groups": [
                "prefix:is_false"
              ]
            },
            "remove": {//list of component groups to add.
              "component_groups": [
                "prefix:is_true"
              ]
            }
          },
          {
            "filters": {//filter this checks if the filter conditions are true.
              "test": "has_tag",
              "subject": "self",
              "operator": "equals",
              "value": "tag_name"
            },
            "add": {//list of component groups to add.
              "component_groups": [
                "prefix:is_true"
              ]
            },
            "remove": {//list of component groups to remove.
              "component_groups": [
                "prefix:is_false"
              ]
            }
          }
        ]
      }
```

## Triggering events

Many components can trigger events. Particularly, components like the [environment sensor](/vanilla-usage/components.html#minecraftenvironment_sensor) or [timer](/vanilla-usage/components.html#minecrafttimer).

`Note:` You can also use the `/event <target> <prefix:event_name>` to trigger an event directly off an entity. In the below example we run the "minecraft:become_charged" event to turn all creepers in loaded chunks into charged creepers.

An example.
```json
        //Command usage to send an event to all creepers.
        /event entity @e[type=creeper] minecraft:become_charged
```

The flow is:
 - Add the component to the entity
 - Component triggers event or /event triggers event
 - Which adds component group
 - Which adds the component
 - Which affects the entity in some form or another.

# Uses in vanilla

Component groups and events are the main tools that vanilla entities use to create custom and adaptable behavior. For a specific example, look at the zombie.

The zombie is programmed to turn into a `drowned` if it spends too long in the water. Look at the component-groups and events, and see if you can work out how this is done!



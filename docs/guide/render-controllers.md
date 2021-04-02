---
layout: guide
title: Render controllers
parent: Beginners Guide
badge: 8
badge_color: guide
badge_justification: left
nav_order: 8
---



___

# Basic Render Controller

A render controller is a file that controls what is rendered in-game. They define the material, the texture and the model to be used on the entity. Render Controller files are located in `RP/render_controllers` (the `render_controllers` folder in your resource pack). Let's look at a simple render controller's structure.

`RP/render_contollers/skeleton.render_controllers.json`
```json
{
  "format_version": "1.8.0",
  "render_controllers": {
    "controller.render.skeleton": {
      "geometry": "Geometry.default",
      "materials": [ { "*": "Material.default" } ],
      "textures": [ "Texture.default" ]
    }
  }
}
```

- `contoller.render.skeleton` is the identifier of this render controller. Typically the last word in a render controller identifier is the name of the entity the render controller is to be applied to.
- Next come the definitions of the geometry, the materials, and the textures:
-- `"geometry": "Geometry.default"` - this means that the geometry that is to be rendered on this entity is the one with the shortname "default".(Shortnames are defined in the .entity file).
-- Materials define how something is rendered in-game. Different materials can be rendered on different bones. The asterisk ( * ) can be replaced by a bone's name. The asterisk itself refers to all bones. If you were to put something like "left_\*" there, all bones with names that start with "left_" will be rendered with this material.
-- `"textures": "Texture.default"`: this means that the texture that is to be rendered on this entity is the one with the shortname "default".

As you can see, the skeleton render controller simply renders all textures, materials and models with the shortnames "default". Thus it can be used in all entities that have a single model, texture, and material.


# Render controller Arrays - creating an entity with texture variants

It can be made so entities spawn with random skin (texture) or model (geometry) variants with the help of render controllers.

To better understand this, let's add a texture variant to our custom entity

*Note: even though we'll be using the fox as an example here, I removed some of the fox-specific parameters from the code. In order to view the full fox code, simply open your Example Vanilla packs. The code showcased here can be used to give any entity skin or model variants, but make sure you've completed [Custom entity](/guide/custom-entity-full.html) page in order to understand what's going on.*

```json
{
  "format_version": "1.8.0",
  "render_controllers": {
    "controller.render.fox": {
      "arrays": {
        "textures": {
          "Array.skins": [
            "Texture.red",
            "Texture.arctic"
          ]
        }
      },
      "geometry": "Geometry.default",
      "materials": [ { "*": "Material.default" } ],
      "textures": [ "Array.skins[query.variant]" ]
    }
  }
}
```

As you can see, we have a new "arrays" object in place. Let's add two texture variants,  their shortnames (red" and "arctic") to be " defined in the .entity file like this:

```json
  "textures": {
    "red": "textures/entity/skele_yaklin",
    "arctic": "textures/entity/skele_yaklin_arctic"
  },
```

As you can see, we defined custom shortnames to the entity instead of using "default".

"Red" will be the default texture, don't forget to create an arctic texture file in `RP/textures.entity`!

- "Array.skins" holds both "Texture.red"(under the index of 0) and "Texture.arctic"(under the index of 1).
- "textures" normally holds something like `[ "Texture.default" ]`, but we don't have a texture with the shortname "default" in our skins array. Thus, we have this: `[ "Array.skins[query.variant]" ]`

If you have some programming basics, you'll know that you can get an element from an array using [] - arrayName[elementIndex]. Here we take the element from Array.skins that has the same index as the value of "variant". If the variant is 0, we'll get "Texture.red",  and if 1 we'll get "Texture.arctic". Let's see how we can set the variant in the entity's behavior file in `BP/entities/entityName.json`.

*Note 1: If you use a query that returns true or false(like query.is_charged) true will mean the same as 1 and false the same as 0.*

*Note 2: You can do the same with geometries in `Array.geos`. Check `RP/render_contrllers.sheep.render_controllers.json` for more details on how that would work.*


```json
  "tut:red": {
    "minecraft:variant": {
      "value": 0
    }
  },
  "tut:arctic": {
    "minecraft:variant": {
      "value": 1
    }
  }
```

Add these two component groups into "component_groups" of the entity behavior's file, same as you'd add a baby variant, for example.

"minecraft:variant" is a component created specifically for interacting with render and animation controllers - you can set it's "value" for anything and then test for it when controlling something with `query.variant`. "minecraft:mark_variant" and "minecraft:skin_id" can be used likewise.

```json
  "minecraft:entity_spawned": {
    "sequence": [
      {
        "randomize": [
          {
            "weight": 56,
            "add": {
              "component_groups": [
                "tut:red"
              ]
            }
          },
          {
            "weight": 15,
            "add": {
              "component_groups": [
                "tut:arctic"
              ]
            }
          }
        ]
      }
    ]
  }
```

Now you have to make sure the entity gets one of the "variant" component groups randomly upon spawn.

Put this in your "entity_spawned" event's sequence.. A sequence is an array [] that contains multiple objects {} which contain what normally would be in an event. If this is a bit confusing, check [Entity behavior definitions: Events](/guide/custom-entity-full) again and/or the guide [GitHub repository](https://github.com/KaiFireborn/Minecraft-Bedrock-Full-Beginner-Add-on-development-Guide-FILES).

The sequence itself is quite self-explanatory, it adds one of the two components. "red" will be added more often, as it's weight is higher.

*Note: It's not necessary to add the variant component upon spawn. You could for example, add an interact component(see cow behaviors) to launch an event which adds the arctic variant component group when the player interacted with ice in hand.*

![](/assets/images/guide/render_controllers_1.jpg)

Now that you've updated your render controller, your .entity file(with the new texture shortnames), added the new component groups and the randomizing of the skin variants, you will observe your entities sometimes spawning with the arctic texture variant!

*If something doesn't work, watch your content log (You can enable it in Settings>Profile) or compare your files with the ones on this website [GitHub repository](https://github.com/KaiFireborn/Minecraft-Bedrock-Full-Beginner-Add-on-development-Guide-FILES)!*


# Part Visibility of bones

`RP/render_controllers/fox.render_controllers.json`
```json
{
  "format_version": "1.8.0",
  "render_controllers": {
    "controller.render.fox": {
      "arrays": {
        "textures": {
          "Array.skins": [
            "Texture.red",
            "Texture.arctic"
          ]
        }
      },
      "geometry": "Geometry.default",

      "part_visibility": [
        { "leg*": "!query.is_sleeping" },
        { "head": "!query.is_sleeping" },
        { "head_sleeping": "query.is_sleeping" }
      ],

      "materials": [ { "*": "Material.default" } ],
      "textures": [ "Array.skins[query.variant]" ]
    }
  }
}
```

With render controllers, you can hide certain bones in the "part_visibility" array. It's syntax is very similar to the "materials" array.

Let's analyze "part_visibility" in this fox's render_controller:

```json
{ "leg*": "!query.is_sleeping" }
```

All bones that start with "leg" will visible when !query.is_sleeping returns true (the `!` reverts the value: when `query.is_sleeping` is **true**, `!query.is_sleeping` is **false**), or, in other words, the fox isn't sleeping. When the fox IS sleeping, the !query will return false and legs won't be visible.

```json
{"head_sleeping": "query.is_sleeping"}
```

If the fox IS sleeping, the query will turn to true and the bone named "head_sleeping" will become visible. Otherwise it will be invisible.


If you wanted the "arctic" variant to be headless, you could include this in "part_visibility":

```json
{ "head": "!query.variant == 1"}
```

which would do practically the same as:

```json
{ "head": "query.variant == 0"}
```

___
___


# Your progress so far

**What you've done:**
- Learned ~~a lot~~ everything about Render Controllers;
- Made your custom entity spawn with random textures;
- Learned how to hide certain parts of an entity when needed.

**What are you to do next:**
- Learn Animation Controllers, which are state machines;
-  your own sounds for the entities;
- Create custom biomes and structures;
- Much more!

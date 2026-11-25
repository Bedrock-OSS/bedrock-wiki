---
title: Render Controllers
category: General
tags:
    - beginner
mentions:
    - SirLich
    - MedicalJewel105
    - Overload1252
    - ChibiMango
    - TrueTemm
description: Learn about render controllers.
---

Render controllers are an often-misunderstood part of the resource pack. But you don't need to be afraid! It would help if you considered render controllers as logic packs that take short-name definitions from the RP Entity File and determine how they will be combined/layered/rendered in-game.

## Defining short-names

Render controllers work based on the short-name definitions of the RP entity file. Short-names are local identifiers, which we define in the RP entity file, and can then use in the render controller (and other places!). Variables such as `geometry`, `materials`, and `textures` can be defined in the entity,

Lets look at a simplified version of the spider RP entity file:

<CodeHeader path="RP/entity/spider.json" />

```json
{
    "format_version": "1.8.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "minecraft:cave_spider",
            "materials": {
                "default": "spider",
                "invisible": "spider_invisible"
            },
            "textures": {
                "default": "textures/entity/spider/cave_spider"
            },
            "geometry": {
                "default": "geometry.spider.v1.8"
            },
            "render_controllers": ["controller.render.spider"]
        }
    }
}
```

In this case, four short-name definitions have been created:

-   `default`, in the materials array
-   `invisible`, in the materials array
-   `default`, in the textures array
-   `default`, in the geometry array

You can define multiple short-names in each array, such as in the `materials` example above.

It would help if you thought of short-name definitions as `importing` the assets you want. At this stage, you are defining the textures, geometry, and materials that you want to use in your entity. In the render-controller stage, you won't import anything. You will simply use the assets you already imported to create the rendered entity.

## Simple render-controller

A simple render controller looks like this:

<CodeHeader path="RP/render_controllers/cow.render.json" />

```json
{
    "format_version": "1.8.0",
    "render_controllers": {
        "controller.render.cow": {
            "geometry": "Geometry.default",
            "materials": [
                {
                    "*": "Material.default"
                }
            ],
            "textures": ["Texture.default"]
        }
    }
}
```

This controller is taking the short-name definitions from the entity file and `rendering` them. For example, the line: `"textures": [ "Texture.default"]` says: "Take the default texture, and apply it to the entity". The render controller doesn't know what the default texture is; it simply applies it.

## Re-using render controllers

Since render controllers work based on short-names, it is possible to re-use the same render controller for all of your entities. Custom render controllers are not necessary for simple entities with one material, one texture, and one geometry.

For example, the render controller above is used for the `minecraft:cow` entity. If you want to use this render controller in your own pack, simply define it as: `"render_controllers": [ "controller.render.cow" ]` in your entity file.

:::warning Remember!

Render controllers work based on short-names. If you want to use the cow render controller, you need to provide the short-names it is using. In this case, you will need to provide:

-   `default` geometry
-   `default` texture
-   `default` material

:::

## Creating custom render controllers

Often we want more power over the rendering of our entities, such as rendering layered textures, multiple geometries, or applying different materials to different bones. To create a custom render controller, simply copy and paste the vanilla render controller into the `render_controllers` folder, and edit to your liking!

## Part Visibility

The `part_visibility` array controls which bones of the selected geometry are rendered. Each entry maps a bone name or wildcard pattern to a Molang expression. A non-zero result shows the bone, while zero hides it. Entries are applied in order, so a later entry can override an earlier wildcard.

For example, a model can have a `helmet` bone that should only be visible when a [client-synced entity property](/entities/entity-properties#client-sync) is true. Define the property in the behavior pack:

<CodeHeader path="BP/entities/my_entity.json" breadcrumbs="minecraft:entity/description/properties" />

```json
"wiki:has_helmet": {
    "type": "bool",
    "default": false,
    "client_sync": true
}
```

Then add `part_visibility` to the render controller:

<CodeHeader path="RP/render_controllers/my_entity.render_controllers.json" breadcrumbs="render_controllers/controller.render.my_entity" />

```json
"part_visibility": [
    { "*": "true" },
    { "helmet": "q.property('wiki:has_helmet')" }
]
```

The first entry makes all bones visible. The second overrides the visibility of the `helmet` bone based on the property. Use the bone name from your geometry, not the geometry identifier.

To change the visibility in-game, define entity events that set the property:

<CodeHeader path="BP/entities/my_entity.json" breadcrumbs="minecraft:entity/events" />

```json
"wiki:show_helmet": {
    "set_property": {
        "wiki:has_helmet": true
    }
},
"wiki:hide_helmet": {
    "set_property": {
        "wiki:has_helmet": false
    }
}
```

Triggering these events shows or hides the helmet after the property is synchronized to the client. This affects rendering only, not the entity's collision box or equipment.

The vanilla [copper golem render controllers](https://github.com/Mojang/bedrock-samples/blob/main/resource_pack/render_controllers/copper_golem.render_controllers.json) use a similar pattern to show a flower based on the `minecraft:has_flower` property.

## Multiple Render Controllers

Each render controller selects one geometry, but an entity can use multiple render controllers at the same time. For example, instead of including a helmet bone in the body geometry as above, you can render a separate helmet geometry with its own material and texture.

Register both controllers in the client entity. The second entry is conditional and only renders the helmet when the property from the previous example is true:

<CodeHeader path="RP/entity/my_entity.json" breadcrumbs="minecraft:client_entity/description" />

```json
"render_controllers": [
    "controller.render.my_entity",
    { "controller.render.my_entity.helmet": "q.property('wiki:has_helmet')" }
]
```

Define the helmet short-names alongside the existing short-names:

<CodeHeader path="RP/entity/my_entity.json" breadcrumbs="minecraft:client_entity/description" />

```json
"geometry": {
    "default": "geometry.my_entity",
    "helmet": "geometry.my_entity.helmet"
},
"materials": {
    "default": "entity_alphatest",
    "helmet": "entity_alphatest"
},
"textures": {
    "default": "textures/entity/my_entity",
    "helmet": "textures/entity/my_entity_helmet"
}
```

The helmet controller can then reference these short-names:

<CodeHeader path="RP/render_controllers/my_entity_helmet.render_controllers.json" />

```json
{
    "format_version": "1.10.0",
    "render_controllers": {
        "controller.render.my_entity.helmet": {
            "geometry": "Geometry.helmet",
            "materials": [{ "*": "Material.helmet" }],
            "textures": ["Texture.helmet"]
        }
    }
}
```

Keep the body controller separate and remove the helmet from its geometry. If the separate geometry needs to follow existing animations, use matching bone names, pivots and hierarchy where appropriate. Avoid overlapping identical surfaces, which can cause z-fighting.

The vanilla [creeper client entity](https://github.com/Mojang/bedrock-samples/blob/main/resource_pack/entity/creeper.entity.json) uses an unconditional controller for its body and a conditional controller for its charged overlay.

## Texture layering

Sometimes, it is helpful to create layered textures for custom entities. Layered in this context simply means multiple textures overlaid on top of each other, where the top texture has alpha pixels and allows the bottom texture to show through.

As a straightforward example, imagine a **painting** entity. The frame of the painting is always the same, but the picture itself can change. While you _could_ duplicate the frame 10 times and paint in 10 paintings, you now created a problem: What if you want to change the frame? Now you need to edit 10 textures.

This can be solved by layering textures. Simply place the frame texture on first, and then add the different paintings on top. You can now edit the frame in one simple location.

Or, you could even create multiple frames for each painting! This allows you to make more variety in your panting entity since the player can independently change two textures.

### Render Controllers

Texture layering is achieved through the use of render controllers. If you aren't comfortable with render controllers, you should do some looking through the vanilla usages. Entities such as the `horse`, which contains multiple textures, are outstanding to look at.

### Texture Layering

#### Render Controller

<CodeHeader path="RP/render_controllers/controller.render.texture_layering.json" />

```json
{
    "format_version": "1.10.0",
    "render_controllers": {
        "controller.render.texture_layering": {
            "geometry": "Geometry.default",
            "materials": [
                {
                    "*": "Material.default"
                }
            ],
            "textures": [
                //You can add as many layers as you like. Layers are added top to bottom.
                "Texture.bottom_layer",
                "Texture.top_layer"
            ]
        }
    }
}
```

#### Entity

You need to define all textures in the entity and also use `villager_v2_masked` material.

<CodeHeader path="RP/entity/my_entity.json" />

```json
"materials": {
	"default": "villager_v2_masked"
},
"textures": {
	"top_layer": "textures/top",
	"bottom_layer": "textures/bottom"
  //Add more texture short-name definitions here.
}
```

### Texture Layering with Variance

While I guess hard-coding layered textures are cool, the real fun comes when you make the textures dynamic:

#### Entity

Set multiple top textures, which we will index later.

<CodeHeader path="RP/entity/my_entity.json" breadcrumbs="minecraft:entity/description" />

```json
"textures": {
	"top_1": "textures/top_1",
	"top_2": "textures/top_2",
	"top_3": "textures/top_3",
	"bottom_layer": "textures/bottom"
}
```

#### Render Controller

<CodeHeader path="RP/render_controllers/controller.render.wool_only" />

```json
{
    "format_version": "1.10.0",
    "render_controllers": {
        "controller.render.wool_only": {
            "arrays": {
                "textures": {
                    "Array.top": ["Texture.top_1", "Texture.top_2", "Texture.top_3"]
                }
            },
            "geometry": "Geometry.default",
            "materials": [
                {
                    "*": "Material.default"
                }
            ],
            "textures": [
                "Texture.bottom", //static bottom texture
                "Array.top[q.variant]" //pick top texture based on entity variant.
            ]
        }
    }
}
```

Using arrays and then `q.variant`, we can select the top texture based on the `variant` of the entity.

#### Setting variant

Now, to select which layer will show up, we can simply set the variant component in the entity:

<CodeHeader path="BP/entities/my_entity.json" breadcrumbs="minecraft:entity/components" />

```json
"minecraft:variant": {
	"value": 0
}
```

Remember that components like variants are zero-indexed, which means `0` is our first texture, and then `1` and `2` point to the second and third.

#### Dynamically Changing Texture

If you want to change the texture of an entity during gameplay dynamically, you simply need to change the `variant`. This can be done using component groups and events.

#### Dynamic Layered Textures

Use additional texture arrays and [entity properties](/entities/entity-properties) to select layers independently. For example, define an integer property named `wiki:top_layer` with `range` set to `[0, 2]`, a default of `0`, and `client_sync` set to `true`. You can then replace `Array.top[q.variant]` with `Array.top[q.property('wiki:top_layer')]`.

### Dynamic Alternate Geometries

Altering geometry dynamically works almost the same way as altering the texture.

In the following example you can see a render controller set up to change the entity's geometry based on variant.
Just the same way as in textures, the order in which you write down your geometries is what determines their numbering order. Top being 0.
As we change the variant it will use a different geometry.

Unlike textures, a single render controller cannot select multiple geometries. Use [multiple render controllers](#multiple-render-controllers) if you want to render a base model and an additional geometry together.
This still requires the use of `villager_v2_masked` material.

<CodeHeader path="RP/render_controllers/controller.render.player.third_person.json" />

```json
{
    "format_version": "1.8.0",
    "render_controllers": {
        "controller.render.player.third_person": {
            "materials": [
                {
                    "*": "Material.default"
                }
            ],
            "textures": ["Texture.bottom", "Array.top[q.variant]"],
            "arrays": {
                "geometries": {
                    "Array.geo": ["Geometry.default", "Geometry.custom_1", "Geometry.custom_2"]
                },
                "textures": {
                    "Array.top": ["Texture.bottom", "Texture.top_1", "Texture.top_2"]
                }
            },
            "geometry": "Array.geo[q.variant]"
        }
    }
}
```

#### Entity

Remember to include the geometry variants in your entity's file

```json
"geometry": {
	"default": "geometry.entity.default",
	"custom_1": "geometry.entity.custom_1",
	"custom_2": "geometry.entity.custom_2"
}
```

## Common Mistakes

A render controller can select multiple textures but only one geometry at a time. Geometry arrays provide alternatives to select from, not additional layers.

```json
"arrays": {
    "textures": {
        "array.skin": [],
        "array.dress": []
    },
    "geometries": {
        "array.geo": []
    }
}
```

Followed by:

```json
"textures": [
    "array.skin[q.variant]",
    "array.dress[q.skin_id]"
],
"geometry": "array.geo[q.mark_variant]"
```

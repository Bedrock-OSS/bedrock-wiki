---
title: Fake Blocks
description: Learn how to create an entity which replicates characteristics of a block.
category: Tutorials
tags:
    - intermediate
    - scripting
mentions:
    - SirLich
    - solvedDev
    - Joelant05
    - MedicalJewel105
    - aexer0e
    - ThijsHankelMC
    - QuazChick
    - SmokeyStack
---

Sometimes your block needs to have features which Minecraft doesn't allow. A possible solution is to create an entity which replicates characteristics of a block.

## Creating the Collision

The [solid entities](/entities/solid-entities) tutorial outlines four different ways to create a collision, with `runtime_identifiers`, blocks, and components.

## Basic Components

Those components below are required to make the entity act as a block, and also don't add the `"minecraft:physics": {}` component in there, because this will make your entity fall or have a collision with some blocks like water or lava.

<CodeHeader path="BP/entities/your_entity.json" breadcrumbs="minecraft:entity/components" />

```json
// Knockback resistance is needed to make it not be Knocked off by an entity.
"minecraft:knockback_resistance": {
    "value": 1
},
// Tells if the entity can be pushed or not.
"minecraft:pushable": {
    "is_pushable": false,
    "is_pushable_by_piston": true
},
// Sets the distance through which the entity can push through.
"minecraft:push_through": {
    "value": 1
},
// Makes it invincible.
"minecraft:damage_sensor": {
    "triggers": [
        {
            "deals_damage": "no",
            "cause": "all"
        }
    ]
}
```

## Aligning the Entity Rotation

To align your entity in rotation, you will need some math.

<CodeHeader
    path="RP/animations/your_entity.json"
    breadcrumbs="animations/animation.your_entity.rotation/bones"
/>

```json
"root": {
    "rotation": [0, "-q.body_y_rotation + (math.round(q.body_y_rotation / 90) * 90)", 0]
}
```

Apply that code on the core folder (that has all the other groups inside) of your model in an animation, make sure the pivot point is 0 in the X and Z Axis, to avoid visual bugs. And also you don't need to add components like:

-   `"minecraft:behavior.look_at_entity": {}`{lang=json}
-   `"minecraft:behavior.look_at_player": {}`{lang=json}
-   `"minecraft:behavior.look_at_target": {}`{lang=json}

The reason why is because this will change the target Y yotation, causing it to move the body Y rotation so the model will move. Don't add walk components too.

## Aligning the Entity Position

To align the position of the entity this will be more tricky.

First, in the `minecraft:entity_spawned` event, make a custom block with a queue_command, and make a new dummy-entity with a transformation event to transform the dummy entity to the original entity, so we avoid triggering the `minecraft:entity_spawned` again.

<CodeHeader path="BP/entities/your_entity.json" breadcrumbs="minecraft:entity/events" />

```json
// Event in the original entity.
"minecraft:entity_spawned": {
    "add": {
        "components_groups": ["wiki:despawn"] // We will also need to despawn the first entity.
    },
    "queue_command": {
        "command": ["setblock ~~~ wiki:align"]
    }
}
```

<CodeHeader path="BP/entities/your_entity.json" breadcrumbs="minecraft:entity/component_groups" />

```json
// Component group in the original entity.
"wiki:despawn": {
    "minecraft:despawn": {}
}
```

Block used to summon the dummy entity right on the block, and as the block is centered, the entity will center too:

<CodeHeader path="BP/blocks/your_dummy_block.json" />

```json
{
    "format_version": "1.26.40",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:align"
        },
        "components": {
            "minecraft:light_dampening": 0,
            "minecraft:collision_box": false,
            "minecraft:selection_box": false,
            "minecraft:loot": "loot_tables/empty.json",
            "minecraft:geometry": "geometry.empty",
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:empty"
                }
            },
            "minecraft:destructible_by_mining": {
                "seconds_to_destroy": 2
            },
            "wiki:align_entity": {}
        }
    }
}
```

For our custom component script, we'll utilize the `beforeOnPlayerPlace` event. We use this event to prevent the block from being placed and just summon our entity instead.

<CodeHeader path="BP/scripts/alignEntity.js" />

```js
import { system } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockAlignEntityComponent = {
    beforeOnPlayerPlace(event) {
        event.cancel = true;

        const location = event.block.center();
        event.dimension.spawnEntity("wiki:dummy_align", location);
    },
};

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent("wiki:align_entity", BlockAlignEntityComponent);
});
```

<CodeHeader path="BP/entities/your_dummy_entity.json" />

```json
{
    "format_version": "1.26.40",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:dummy_align", // The dummy entity is used to avoid triggering the entity_spawned event in the original entity.
            "is_spawnable": false,
            "is_summonable": true
        },
        "component_groups": {
            "transform": {
                "minecraft:transformation": {
                    "into": "wiki:your_entity",
                    "delay": 0
                }
            }
        },
        "components": {
            "minecraft:physics": {
                "has_gravity": false
            },
            "minecraft:collision_box": {
                "width": 0.1,
                "height": 0.1
            },
            "minecraft:damage_sensor": {
                "triggers": {
                    "cause": "all",
                    "deals_damage": "no"
                }
            }
        },
        "events": {
            "minecraft:entity_spawned": {
                "add": {
                    "component_groups": ["transform"]
                }
            }
        }
    }
}
```

## Cracking Texture

Vanilla blocks have a cracking texture that appears when you break them. Here I will show you how to add this effect to your entity.

First, we have to add some textures to your entity file, make sure that you are using the vanilla textures instead of custom ones(this is to make it compatible with your resource packs)

<CodeHeader path="RP/entity/your_entity.json" breadcrumbs="minecraft:client_entity/description" />

```json
"textures": {
    "default": "textures/wiki/entity/custom_entity",
    "destroy_stage_0": "textures/environment/destroy_stage_0",
    "destroy_stage_1": "textures/environment/destroy_stage_1",
    "destroy_stage_2": "textures/environment/destroy_stage_2",
    "destroy_stage_3": "textures/environment/destroy_stage_3",
    "destroy_stage_4": "textures/environment/destroy_stage_4",
    "destroy_stage_5": "textures/environment/destroy_stage_5",
    "destroy_stage_6": "textures/environment/destroy_stage_6",
    "destroy_stage_7": "textures/environment/destroy_stage_7",
    "destroy_stage_8": "textures/environment/destroy_stage_8",
    "destroy_stage_9": "textures/environment/destroy_stage_9"
}
```

And add a geometry that has to inflate 0.1 in all their cubes to avoid Z-fighting.

<CodeHeader path="RP/entity/your_entity.json" breadcrumbs="minecraft:client_entity/description" />

```json
"geometry": {
    "default": "geometry.your_geometry",
    "broken": "geometry.broken"
}
```

And now we have to add a new render controller. This is going to select different textures between the destroy stages. (Remember not to replace your actual controller, you need two controllers, the first one is just the one that adds model, textures, and material to your normal entity, and the second one is this one that defines the cracking texture)

<CodeHeader path="RP/render_controllers/your_entity.json" />

```json
{
    "format_version": "1.8.0",
    "controller.render.broken": {
        "arrays": {
            "textures": {
                "array.broken": [
                    "texture.destroy_stage_9",
                    "texture.destroy_stage_8",
                    "texture.destroy_stage_7",
                    "texture.destroy_stage_6",
                    "texture.destroy_stage_5",
                    "texture.destroy_stage_4",
                    "texture.destroy_stage_3",
                    "texture.destroy_stage_2",
                    "texture.destroy_stage_1",
                    "texture.destroy_stage_0",
                    "texture.default"
                ]
            }
        },
        "geometry": "geometry.broken",
        "materials": [
            {
                "*": "material.default"
            }
        ],
        "textures": [
            "array.broken[q.health * 1]" // Here you can calculate the health of your entity to make sure it isn't buggy. If your entity has 10 health, leave it as it. If it has 20, it should be `q.health * 0.5`. If it is 40, it has to be 0.25, etc...
        ]
    }
}
```

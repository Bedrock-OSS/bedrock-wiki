---
layout: page
title: Cancelling Death Animations
parent: Tutorials
---

# Cancelling Death Animations



Intermediate
{: .label .label-yellow }

Death animation refers to the rotation of the entity as it dies. This is accompanied by a red coloring, and followed shortly after by the disappearance of the entity geometry, and the appearance of the death particles.

# Teleporting the Entity

A fairly common way to remove entities without causing death-effects, is to simply teleport them into the void. This can be done from animation controllers like:
`/teleport @s ~ ~-1000 ~`

Please note that this will remove all death-effects, including sound, particles, loot, and the visual death of the entity.

# Transforming the Entity

Similar to teleporting the entity is triggering an entity transform on death. Query is_alive and transform the entity to another entity if is_alive == false. The new entity can have the despawn component with no filter, causing the entity to immediately despawn on creation.

Plesea note that this will remove all death-effects, including sound, particles, loot, and the visual death of the entity.

# Cancelling the Animation

We can also cancel the rotational value of the entity, allowing the entity to die more conventionally (particles, red-coloring, loot) without the 90 degree spin. This could be useful for things like furniture, where the tipping over effect of entity-death is not desirable.

If you need more information about triggering animations from entity death, [see this document on death effects](/tutorials/death-effects).

Rotation needs to be applied to a bone parent to all other bones, with a pivot at [0,0,0], and the animation should only start when `!query.is_alive`.

Animation:
```json
"rotation" : [ 0, 0, "Math.min(Math.sqrt(Math.max(0, query.anim_time * 20 - 0.5) / 20 * 1.6), 1) * -90" ]
```

Animation Controller: (query.all_animations_finished is only needed for respawning entities, like players)

```json
{
  "format_version": "1.10.0",
  "animation_controllers": {
    "controller.animation.player.cancel_death_animaton": {
      "initial_state": "default",
      "states": {
        "default": {
          "transitions": [
            {
              "cancel_animation": "query.is_alive"
            }
          ]
        },
        "cancel_animation": {
          "animations": [
          	"my.animation"
          ],
          "transitions": [
            {
              "default": "query.is_alive && query.all_animations_finished"
            }
          ]
        }
      }
    }
  }
}
```

# Changing Damage Color Overlay

You can also cancel the death animation  of any entity by removing their damage color overlay.

Before starting you must have the basics of render controller so check out the  [tutorial](/concepts/render-controller) of render controller.

To remove the damage overlay color  of any entity you want when it gets damage  we will use `is_hurt_color` and to remove damage overlay color when an entity gets damage due to lava and fire we will use `on_fire _color`.
First you need to make the rgba values to 0
Here's the example on removing the damage and fire overlay color.
```json
{
    "format_version": "1.8.0",
    "render_controllers": {
        "controller.render.sample": {
            "geometry": "Geometry.default",
            "materials": [ { "*": "Material.default" } ],
            "textures": [ "Texture.default" ],
            "is_hurt_color": {},
            "on_fire_color": {}
        }
    }
}
```
The code above will remove the red damage overlay color.

You can also change the damage color overlay to different colors just by putting different values in rgba.You can check out different websites to get the rgba values of all colors.
Here's another example in which the damage color overlay becomes pink.
  ```json
{
    "format_version": "1.8.0",
    "render_controllers": {
        "controller.render.kbg": {
            "geometry": "Geometry.default",
            "materials": [ { "*": "Material.default" } ],
            "textures": [ "Texture.default" ],
               "is_hurt_color": {
                "r": "1.0",
                "g": "0.4",
                "b": "0.7",
                "a": "0.5"
            },
            "on_fire_color": {
                "r": "1.0",
                "g": "0.4",
                "b": "0.7",
                "a": "0.5"
            }
        }
    }
    }
```
# Using Damage Sensor to Trigger Instant Despawn and One Item Drop

You can use the damage_sensor component to trigger an event upon fatal damage; this event adds a special despawning component group containing the spawn_entity and instant_despawn components. Spawn_entity with 0 wait time will drop an item just before the entity is despawned. For simple entities like furniture, which only need one item, this is very convenient.

Please note that you will have to find another work to drop multiple loot or for entities with inventory. You should also ensure that the despawn component group is not added when the entity is spawned using the entity_spawned event.

Heres an example file in the BP 
```json
{
  "format_version": "1.14.0",
  "min_engine_version": "1.16.100",
  "minecraft:entity": {
    "description": {
      "identifier": "example:entity",
      "is_spawnable": true,
      "is_summonable": true,
      "is_experimental": true
    },
    "component_groups": {
      "beluga:despawn": {
        "minecraft:spawn_entity": {
          "max_wait_time": 0,
          "min_wait_time": 0,
          "spawn_item": "egg",
          "single_use": true
        },
        "minecraft:instant_despawn": {}
      }
    },
    "components": {
      "minecraft:type_family": {
        "family": [ "cart", "inanimate" ]
      },
      "minecraft:collision_box": {
        "width": 0.8,
        "height": 0.5
      },
      "minecraft:health": {
        "value": 8,
        "max": 8
      },
      "minecraft:physics": {},
      "minecraft:pushable": {
        "is_pushable": true,
        "is_pushable_by_piston": true
      },
      "minecraft:damage_sensor": {
        "triggers": {
          "on_damage": {
            "filters": {
              "test": "has_damage",
              "value": "fatal"
            },
            "event": "beluga:despawn",
            "target": "self"
          }
        }
      }
    },
    "events": {
      "beluga:despawn": {
        "add": {
          "component_groups": [
            "beluga:despawn"
          ]
        }
      }
    }
  }
}
```

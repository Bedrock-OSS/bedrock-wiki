---
title: Throwable Items
category: Tutorials
tags:
    - intermediate
mentions:
    - Fabrimat
    - MedicalJewel105
    - Luthorius
    - IlkinQafarov
    - seeit360
    - TheItsNameless
    - SmokeyStack
    - ThomasOrs
---

::: tip
This tutorial assumes you have a basic understanding of Molang, animation controllers and entity definitions.
:::

Items like the Splash Potion or the Trident are special items that can be thrown.

### The Item

First, you'll want to make the actual item:

<CodeHeader>BP/items/throwable_item.item.json</CodeHeader>

```json
{
    "format_version": "1.20.80",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:throwable_item"
        },
        "components": {
            "minecraft:max_stack_size": 16,
            "minecraft:throwable": {
                "do_swing_animation": true
            },
            "minecraft:projectile": {
                "projectile_entity": "wiki:throwable_item_entity"
            },
            "minecraft:icon": "throwable_item"
        }
    }
}
```

### The Entity

The entity will be the actual thrown item, and it will behave like a projectile.
Make sure to add snowball runtime identifier to make your projectile to actually be shoot, not spawned. You can also experiment with other projectile runtime id's.

<CodeHeader>BP/entities/throwable_item_entity.se.json</CodeHeader>

```json
{
    "format_version": "1.16.0",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:throwable_item_entity",
            "is_spawnable": false,
            "is_summonable": true,
            "is_experimental": false,
            "runtime_identifier": "minecraft:snowball"
        },
        "components": {
            "minecraft:collision_box": {
                "width": 0.25,
                "height": 0.25
            },
            "minecraft:projectile": {
                "on_hit": {
                    "grant_xp": {
                        "minXP": 3,
                        "maxXP": 5
                    },
                    "impact_damage": {
                        "damage": 16
                    },
                    "remove_on_hit": {}
                },
                "power": 0.7,
                "gravity": 0.03,
                "angle_offset": -20,
                "hit_sound": "glass"
            },
            "minecraft:physics": {},
            "minecraft:pushable": {
                "is_pushable": true,
                "is_pushable_by_piston": true
            },
            "minecraft:conditional_bandwidth_optimization": {
                "default_values": {
                    "max_optimized_distance": 80,
                    "max_dropped_ticks": 10,
                    "use_motion_prediction_hints": true
                }
            }
        }
    }
}
```

This entity is based on the Vanilla splash potion.

You can then customize its behavior by editing the `minecraft:projectile` component, in this case the thrown item will grant some exp and will damage any entity it will hit.

## Conclusion

Once you have your throwable item you can start trying several things, like playing with its power, effects, animations or combining it with an [AOE Cloud](/entities/introduction-to-aec). The only limit is your imagination.

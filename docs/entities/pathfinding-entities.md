---
title: Pathfinding
tags:
    - recipe
    - beginner
---

Making entities go places is one of the most common requests for Marketplace content. This tutorial will show you the most common way to do pathfinding.

## Using marker entities

The best way to do pathfinding uses a second entity, which the first entity will be attracted to. I am going to call this secondary entity the **marker**. If you are confused on how to create a marker, go review the "Dummy Entities" section.

## Pathfinding explained

The way we are going to do pathfinding is actually fairly simple: Make our entity aggressive towards our marker, and then simply place our marker where we want our entity to path to. The hard part is knowing what components to add so we get really long-range pathing.

## The JSON

These components can be edited as needed to create good pathing. Make sure to update the `nearest_attackable_target` to point to your marker entity. This takes a `family_type`, so you should set one of those on your marker.

The attack radius in `ranged_attack` can be updated. This number sets how close the entity will pathfind to the marker before stopping. A value of 0 will cause the entity to pathfind as close as possible.

<CodeHeader></CodeHeader>

```json
"minecraft:movement": {
    "value": 0.3
},
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
                    "value": "an_entity"
                }
            ],
            "max_dist": 1000
        }
    ]
},
"minecraft:attack": {
    "damage": 0
},
"minecraft:behavior.ranged_attack": {
    "priority": 4,
    "attack_radius": 2
},
"minecraft:movement.basic": {},
"minecraft:follow_range": {
    "value": 1000,
    "max": 1000
},
"minecraft:navigation.generic": {
    "can_path_over_water": true,
    "avoid_water": true,
    "can_pass_doors": true,
    "can_walk": true,
    "avoid_damage_blocks": true,
    "can_open_doors": true
},
"minecraft:jump.static": {},
```

## Detecting a reached waypoint

You can use `minecraft:entity_sensor` to detect when you have reached the marker entity.

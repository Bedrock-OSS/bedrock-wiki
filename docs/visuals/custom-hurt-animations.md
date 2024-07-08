---
title: Hurt Animations
tags:
    - intermediate
mentions:
    - MedicalJewel105
category:
    - Tutorials
description: Tutorial on how to trigger custom animation when entity is hurt.
---

This guide will teach you to trigger custom hurt animations for entities.
There is no really good way to make custom hurt animations as for now (at least from I know).

## BP Entity Part

First you need to setup entity file. Make sure to use file version that supports properties.

Add the following to entity description:

<CodeHeader>BP/entity/my_entity.json#description</CodeHeader>

```json
"properties": {
    "wiki:is_hurt": {
        "client_sync": true, // so we can use it in RP
        "type": "bool",
        "default": false
    }
}
```

And this in component groups:

<CodeHeader>BP/entity/my_entity.json#component_groups</CodeHeader>

```json
"wiki:hurt_group": {
    "minecraft:timer": {
        "time": 0.1,
        "time_down_event": {
            "event": "wiki:on_not_hurt_event"
        }
    }
}
```

Events to add this component group and switch properties:

<CodeHeader>BP/entity/my_entity.json#events</CodeHeader>

```json
"wiki:on_hurt_event": {
    "set_property": {
        "wiki:is_hurt": true
    },
    "add": {
        "component_groups": [
            "wiki:hurt_group"
        ]
    }
},
"wiki:on_not_hurt_event": {
    "remove": {
        "component_groups": [
            "wiki:hurt_group"
        ]
    },
    "set_property": {
        "wiki:is_hurt": false
    }
}
```

To call this event add `damage_sensor` to components:

<CodeHeader>BP/entity/my_entity.json#components</CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "all",
        "on_damage": {
            "event": "nubs:on_hurt_event"
        }
    }
}
```

## RP AC Part

You can transition to state with hurt animation this way: `"damage_state": "q.property('wiki:is_hurt')"` and from there use `"default": "q.all_animations_finished"`.

This could be useful for creating custom boats.
---
layout: page
title: Invulnerable Entities
parent: Tutorials
---

# Invulnerable Entities

<Label color="green">Beginner</Label>

## Using Damage Sensor

The best and most flexible way of disabling damage for entities is using the `minecraft:damage_sensor` component. The component allows us to use `filters` to determine which damage sources are allowed to damage our entity.

The best way to learn about this component is by using the [vanilla examples for damage sensor.](https://sirlich.github.io/technical-bedrock/vanilla-usage/components-1.14.html#minecraftdamage_sensor)

### Completely Invulnerable Entity

<CodeHeader>BP/entities/entity.json#minecraft:entity/components</CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "all",
        "deals_damage": false
    }
}
```

### Disable Damage from Player

<CodeHeader>BP/entities/entity.json#minecraft:entity/components</CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "on_damage": {
            "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "player"
            }
        },
        "deals_damage": false
    }
}
```

## Min Health

The `min` property in the `minecraft:health` component allows us to make invincible entities that cannot die. This includes when using `./kill @e`. This is not considered a good solution, because entities like this are hard to get rid of.

If you do choose to use this component, please make sure you have another method for killing the entity. Triggering `minecraft:instant_despawn` from something like an environment sensor, a timer, or an interact is a good solution.

<CodeHeader>BP/entities/entity.json#minecraft:entity/components</CodeHeader>

```json
"minecraft:health": {
    "value": 1,
    "max": 1,
    "min": 1
}
```

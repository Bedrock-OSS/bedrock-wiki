---
title: Vanilla Usage Spawn Rules
category: Documentation
mentions:
    - MedicalJewel105
---

This page was created with [Wiki Content Generator](https://github.com/Bedrock-OSS/bedrock-wiki-content-generator). If there are issues, contact us on [Bedrock OSS](https://discord.gg/XjV87YN) Discord server.
Note that not more than 8 examples are shown for each component to keep this page fast to load. Namespace `minecraft` was also removed.If you want to see full page, you can do it [here](/entities/vusr-full). *Last updated for 1.19.10*

## biome_filter

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "lush_caves"
}
```

bat

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "animal"
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "plains"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "sunflower_plains"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "flower_forest"
    }
]
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "animal"
}
```

cod

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "ocean"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "warm"
    }
]
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "animal"
}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "monster"
}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "ocean"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "frozen"
    }
]
```

</Spoiler>

## brightness_filter

<Spoiler title="Show">

bat

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 4,
    "adjust_for_weather": true
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

donkey

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

</Spoiler>

## delay_filter

<Spoiler title="Show">

pillager_patrol

<CodeHeader></CodeHeader>

```json
"minecraft:delay_filter": {
    "min": 600,
    "max": 660,
    "identifier": "minecraft:pillager_patrol_easy",
    "spawn_chance": 20
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:delay_filter": {
    "min": 600,
    "max": 660,
    "identifier": "minecraft:pillager_patrol_normal",
    "spawn_chance": 20
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:delay_filter": {
    "min": 600,
    "max": 660,
    "identifier": "minecraft:pillager_patrol_hard",
    "spawn_chance": 20
}
```

</Spoiler>

## density_limit

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "underground": 5
}
```

bat

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 5
}
```

cod

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 20
}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 5
}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 5,
    "underground": 0
}
```

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 2
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 2
}
```

</Spoiler>

## difficulty_filter

<Spoiler title="Show">

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

enderman

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

ghast

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

</Spoiler>

## disallow_spawns_in_bubble

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:disallow_spawns_in_bubble": {}
```

</Spoiler>

## distance_filter

<Spoiler title="Show">

cod

<CodeHeader></CodeHeader>

```json
"minecraft:distance_filter": {
    "min": 12,
    "max": 32
}
```

pillager_patrol

<CodeHeader></CodeHeader>

```json
"minecraft:distance_filter": {
    "min": 24,
    "max": 48
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:distance_filter": {
    "min": 24,
    "max": 48
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:distance_filter": {
    "min": 24,
    "max": 48
}
```

pufferfish

<CodeHeader></CodeHeader>

```json
"minecraft:distance_filter": {
    "min": 12,
    "max": 32
}
```

salmon

<CodeHeader></CodeHeader>

```json
"minecraft:distance_filter": {
    "min": 12,
    "max": 32
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:distance_filter": {
    "min": 12,
    "max": 32
}
```

tropicalfish

<CodeHeader></CodeHeader>

```json
"minecraft:distance_filter": {
    "min": 12,
    "max": 32
}
```

</Spoiler>

## height_filter

<Spoiler title="Show">

bat

<CodeHeader></CodeHeader>

```json
"minecraft:height_filter": {
    "min": -63,
    "max": 63
}
```

cod

<CodeHeader></CodeHeader>

```json
"minecraft:height_filter": {
    "min": 0,
    "max": 64
}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:height_filter": {
    "min": 0,
    "max": 64
}
```

glow_squid

<CodeHeader></CodeHeader>

```json
"minecraft:height_filter": {
    "min": -64,
    "max": 30
}
```

pufferfish

<CodeHeader></CodeHeader>

```json
"minecraft:height_filter": {
    "min": 0,
    "max": 64
}
```

salmon

<CodeHeader></CodeHeader>

```json
"minecraft:height_filter": {
    "min": 0,
    "max": 64
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:height_filter": {
    "min": 50,
    "max": 64
}
```

stray

<CodeHeader></CodeHeader>

```json
"minecraft:height_filter": {
    "min": 60,
    "max": 66
}
```

</Spoiler>

## herd

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 6,
    "event": "minecraft:entity_born",
    "event_skip_count": 2
}
```

bat

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 2
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 1
}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

cod

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 7
}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 3
}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 3,
    "max_size": 5
}
```

donkey

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 6
}
```

</Spoiler>

## mob_event_filter

<Spoiler title="Show">

pillager_patrol

<CodeHeader></CodeHeader>

```json
"minecraft:mob_event_filter": {
    "event": "minecraft:pillager_patrols_event"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:mob_event_filter": {
    "event": "minecraft:pillager_patrols_event"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:mob_event_filter": {
    "event": "minecraft:pillager_patrols_event"
}
```

</Spoiler>

## permute_type

<Spoiler title="Show">

pillager_patrol

<CodeHeader></CodeHeader>

```json
"minecraft:permute_type": [
    {
        "weight": 100,
        "entity_type": "minecraft:pillager<minecraft:spawn_as_patrol_follower>"
    }
]
```

<CodeHeader></CodeHeader>

```json
"minecraft:permute_type": [
    {
        "weight": 100,
        "entity_type": "minecraft:pillager<minecraft:spawn_as_patrol_follower>"
    }
]
```

<CodeHeader></CodeHeader>

```json
"minecraft:permute_type": [
    {
        "weight": 100,
        "entity_type": "minecraft:pillager<minecraft:spawn_as_patrol_follower>"
    }
]
```

zombie

<CodeHeader></CodeHeader>

```json
"minecraft:permute_type": [
    {
        "weight": 95
    },
    {
        "weight": 5,
        "entity_type": "minecraft:zombie_villager_v2"
    }
]
```

</Spoiler>

## player_in_village_filter

<Spoiler title="Show">

pillager_patrol

<CodeHeader></CodeHeader>

```json
"minecraft:player_in_village_filter": {
    "distance": 48,
    "village_border_tolerance": 32
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:player_in_village_filter": {
    "distance": 48,
    "village_border_tolerance": 32
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:player_in_village_filter": {
    "distance": 48,
    "village_border_tolerance": 32
}
```

</Spoiler>

## spawn_event

<Spoiler title="Show">

stray

<CodeHeader></CodeHeader>

```json
"minecraft:spawn_event": {
    "event": "change_to_skeleton"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawn_event": {
    "event": "change_to_skeleton"
}
```

</Spoiler>

## spawns_lava

<Spoiler title="Show">

strider

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_lava": {}
```

</Spoiler>

## spawns_on_block_filter

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": "minecraft:clay"
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

donkey

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

goat

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": [
    "minecraft:stone",
    "minecraft:snow",
    "minecraft:powder_snow",
    "minecraft:snow_layer",
    "minecraft:packed_ice",
    "minecraft:gravel"
]
```

horse

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

</Spoiler>

## spawns_on_block_prevented_filter

<Spoiler title="Show">

hoglin

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

magma_cube

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

piglin

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

skeleton

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

zombie_pigman

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

</Spoiler>

## spawns_on_surface

<Spoiler title="Show">

bee

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

cod

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

donkey

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

</Spoiler>

## spawns_underground

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

bat

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

enderman

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

ghast

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

glow_squid

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

</Spoiler>

## spawns_underwater

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underwater": {}
```

cod

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underwater": {}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underwater": {}
```

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underwater": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underwater": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underwater": {}
```

glow_squid

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underwater": {}
```

guardian

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underwater": {}
```

</Spoiler>

## weight

<Spoiler title="Show">

axolotl

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 10
}
```

bat

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 10
}
```

bee

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 10
}
```

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 10
}
```

cod

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 75
}
```

cow

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 8
}
```

creeper

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 100
}
```

dolphin

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 7
}
```

</Spoiler>

## world_age_filter

<Spoiler title="Show">

pillager_patrol

<CodeHeader></CodeHeader>

```json
"minecraft:world_age_filter": {
    "min": 6000
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:world_age_filter": {
    "min": 6000
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:world_age_filter": {
    "min": 6000
}
```

</Spoiler>


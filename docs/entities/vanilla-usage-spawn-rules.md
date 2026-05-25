---
title: Vanilla Usage Spawn Rules
category: Documentation
mentions:
    - MedicalJewel105
description: Automatically generated list of spawn rules components used in vanilla.
---

This page was created with [Wiki Content Generator](https://github.com/Bedrock-OSS/bedrock-wiki-content-generator). If there are issues, contact us on [Bedrock OSS](https://discord.gg/XjV87YN) Discord server.
Note that not more than 8 examples are shown for each component to keep this page fast to load. Namespace `minecraft` was also removed.If you want to see full page, you can do it [here](/entities/vusr-full). _Last updated for 1.21.60_

## biome_filter

<Spoiler title="Show">

armadillo

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "value": "savanna"
}
```

```json
"minecraft:biome_filter": {
    "all_of": [
        {
            "test": "has_biome_tag",
            "value": "mesa"
        },
        {
            "test": "has_biome_tag",
            "operator": "not",
            "value": "plateau"
        }
    ]
}
```

```json
"minecraft:biome_filter": {
    "all_of": [
        {
            "test": "has_biome_tag",
            "value": "mesa"
        },
        {
            "test": "has_biome_tag",
            "value": "plateau"
        }
    ]
}
```

axolotl

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "lush_caves"
}
```

bat

```json
"minecraft:biome_filter": {
    "any_of": [
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "caves"
        },
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "animal"
        }
    ]
}
```

bee

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

bogged

```json
"minecraft:biome_filter": {
    "any_of": [
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "swamp"
        },
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "mangrove_swamp"
        }
    ]
}
```

chicken

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "animal"
}
```

</Spoiler>

## brightness_filter

<Spoiler title="Show">

armadillo

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

bat

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 4,
    "adjust_for_weather": true
}
```

bee

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

bogged

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

chicken

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

cow

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

</Spoiler>

## delay_filter

<Spoiler title="Show">

pillager_patrol

```json
"minecraft:delay_filter": {
    "min": 600,
    "max": 660,
    "identifier": "minecraft:pillager_patrol_easy",
    "spawn_chance": 20
}
```

```json
"minecraft:delay_filter": {
    "min": 600,
    "max": 660,
    "identifier": "minecraft:pillager_patrol_normal",
    "spawn_chance": 20
}
```

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

```json
"minecraft:density_limit": {
    "underground": 5
}
```

bat

```json
"minecraft:density_limit": {
    "surface": 5
}
```

cod

```json
"minecraft:density_limit": {
    "surface": 20
}
```

creeper

```json
"minecraft:density_limit": {
    "surface": 5
}
```

dolphin

```json
"minecraft:density_limit": {
    "surface": 5,
    "underground": 0
}
```

drowned

```json
"minecraft:density_limit": {
    "surface": 5
}
```

```json
"minecraft:density_limit": {
    "surface": 2
}
```

```json
"minecraft:density_limit": {
    "underground": 5
}
```

</Spoiler>

## difficulty_filter

<Spoiler title="Show">

bogged

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

creeper

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

drowned

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

enderman

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

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

```json
"minecraft:disallow_spawns_in_bubble": {}
```

</Spoiler>

## distance_filter

<Spoiler title="Show">

cod

```json
"minecraft:distance_filter": {
    "min": 12,
    "max": 32
}
```

pillager_patrol

```json
"minecraft:distance_filter": {
    "min": 24,
    "max": 48
}
```

```json
"minecraft:distance_filter": {
    "min": 24,
    "max": 48
}
```

```json
"minecraft:distance_filter": {
    "min": 24,
    "max": 48
}
```

pufferfish

```json
"minecraft:distance_filter": {
    "min": 12,
    "max": 32
}
```

salmon

```json
"minecraft:distance_filter": {
    "min": 12,
    "max": 32
}
```

```json
"minecraft:distance_filter": {
    "min": 12,
    "max": 32
}
```

tropicalfish

```json
"minecraft:distance_filter": {
    "min": 12,
    "max": 32
}
```

</Spoiler>

## height_filter

<Spoiler title="Show">

cod

```json
"minecraft:height_filter": {
    "min": 0,
    "max": 64
}
```

dolphin

```json
"minecraft:height_filter": {
    "min": 0,
    "max": 64
}
```

glow_squid

```json
"minecraft:height_filter": {
    "min": -64,
    "max": 30
}
```

pufferfish

```json
"minecraft:height_filter": {
    "min": 0,
    "max": 64
}
```

salmon

```json
"minecraft:height_filter": {
    "min": 0,
    "max": 64
}
```

```json
"minecraft:height_filter": {
    "min": 50,
    "max": 64
}
```

stray

```json
"minecraft:height_filter": {
    "min": 60,
    "max": 66
}
```

tropicalfish

```json
"minecraft:height_filter": {
    "min": 0,
    "max": 64
}
```

</Spoiler>

## herd

<Spoiler title="Show">

armadillo

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 3
}
```

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

axolotl

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 6,
    "event": "minecraft:entity_born",
    "event_skip_count": 2
}
```

bat

```json
"minecraft:herd": {
    "min_size": 8,
    "max_size": 8
}
```

bee

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 1
}
```

bogged

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

chicken

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

</Spoiler>

## mob_event_filter

<Spoiler title="Show">

pillager_patrol

```json
"minecraft:mob_event_filter": {
    "event": "minecraft:pillager_patrols_event"
}
```

```json
"minecraft:mob_event_filter": {
    "event": "minecraft:pillager_patrols_event"
}
```

```json
"minecraft:mob_event_filter": {
    "event": "minecraft:pillager_patrols_event"
}
```

</Spoiler>

## permute_type

<Spoiler title="Show">

pillager_patrol

```json
"minecraft:permute_type": [
    {
        "weight": 100,
        "entity_type": "minecraft:pillager<minecraft:spawn_as_patrol_follower>"
    }
]
```

```json
"minecraft:permute_type": [
    {
        "weight": 100,
        "entity_type": "minecraft:pillager<minecraft:spawn_as_patrol_follower>"
    }
]
```

```json
"minecraft:permute_type": [
    {
        "weight": 100,
        "entity_type": "minecraft:pillager<minecraft:spawn_as_patrol_follower>"
    }
]
```

zombie

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

```json
"minecraft:player_in_village_filter": {
    "distance": 48,
    "village_border_tolerance": 32
}
```

```json
"minecraft:player_in_village_filter": {
    "distance": 48,
    "village_border_tolerance": 32
}
```

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

```json
"minecraft:spawn_event": {
    "event": "change_to_skeleton"
}
```

```json
"minecraft:spawn_event": {
    "event": "change_to_skeleton"
}
```

</Spoiler>

## spawns_lava

<Spoiler title="Show">

strider

```json
"minecraft:spawns_lava": {}
```

</Spoiler>

## spawns_on_block_filter

<Spoiler title="Show">

armadillo

```json
"minecraft:spawns_on_block_filter": [
    {
        "name": "minecraft:grass_block"
    },
    {
        "name": "minecraft:red_sand"
    },
    {
        "name": "minecraft:coarse_dirt"
    },
    {
        "name": "minecraft:brown_terracotta"
    },
    {
        "name": "minecraft:hardened_clay"
    },
    {
        "name": "minecraft:orange_terracotta"
    },
    {
        "name": "minecraft:light_gray_terracotta"
    },
    {
        "name": "minecraft:red_terracotta"
    },
    {
        "name": "minecraft:white_terracotta"
    },
    {
        "name": "minecraft:yellow_terracotta"
    }
]
```

```json
"minecraft:spawns_on_block_filter": [
    {
        "name": "minecraft:grass_block"
    },
    {
        "name": "minecraft:red_sand"
    },
    {
        "name": "minecraft:coarse_dirt"
    },
    {
        "name": "minecraft:brown_terracotta"
    },
    {
        "name": "minecraft:hardened_clay"
    },
    {
        "name": "minecraft:orange_terracotta"
    },
    {
        "name": "minecraft:light_gray_terracotta"
    },
    {
        "name": "minecraft:red_terracotta"
    },
    {
        "name": "minecraft:white_terracotta"
    },
    {
        "name": "minecraft:yellow_terracotta"
    }
]
```

```json
"minecraft:spawns_on_block_filter": [
    {
        "name": "minecraft:grass_block"
    },
    {
        "name": "minecraft:red_sand"
    },
    {
        "name": "minecraft:coarse_dirt"
    },
    {
        "name": "minecraft:brown_terracotta"
    },
    {
        "name": "minecraft:hardened_clay"
    },
    {
        "name": "minecraft:orange_terracotta"
    },
    {
        "name": "minecraft:light_gray_terracotta"
    },
    {
        "name": "minecraft:red_terracotta"
    },
    {
        "name": "minecraft:white_terracotta"
    },
    {
        "name": "minecraft:yellow_terracotta"
    }
]
```

axolotl

```json
"minecraft:spawns_on_block_filter": "minecraft:clay"
```

bat

```json
"minecraft:spawns_on_block_filter": [
    "minecraft:stone",
    "minecraft:granite",
    "minecraft:diorite",
    "minecraft:andesite",
    "minecraft:tuff",
    "minecraft:deepslate"
]
```

chicken

```json
"minecraft:spawns_on_block_filter": "minecraft:grass_block"
```

cow

```json
"minecraft:spawns_on_block_filter": "minecraft:grass_block"
```

donkey

```json
"minecraft:spawns_on_block_filter": "minecraft:grass_block"
```

</Spoiler>

## spawns_on_block_prevented_filter

<Spoiler title="Show">

hoglin

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

magma_cube

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

piglin

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

skeleton

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

zombie_pigman

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

</Spoiler>

## spawns_on_surface

<Spoiler title="Show">

armadillo

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

bee

```json
"minecraft:spawns_on_surface": {}
```

bogged

```json
"minecraft:spawns_on_surface": {}
```

chicken

```json
"minecraft:spawns_on_surface": {}
```

cod

```json
"minecraft:spawns_on_surface": {}
```

cow

```json
"minecraft:spawns_on_surface": {}
```

</Spoiler>

## spawns_underground

<Spoiler title="Show">

axolotl

```json
"minecraft:spawns_underground": {}
```

bat

```json
"minecraft:spawns_underground": {}
```

creeper

```json
"minecraft:spawns_underground": {}
```

drowned

```json
"minecraft:spawns_underground": {}
```

enderman

```json
"minecraft:spawns_underground": {}
```

```json
"minecraft:spawns_underground": {}
```

```json
"minecraft:spawns_underground": {}
```

ghast

```json
"minecraft:spawns_underground": {}
```

</Spoiler>

## spawns_underwater

<Spoiler title="Show">

axolotl

```json
"minecraft:spawns_underwater": {}
```

cod

```json
"minecraft:spawns_underwater": {}
```

dolphin

```json
"minecraft:spawns_underwater": {}
```

drowned

```json
"minecraft:spawns_underwater": {}
```

```json
"minecraft:spawns_underwater": {}
```

```json
"minecraft:spawns_underwater": {}
```

glow_squid

```json
"minecraft:spawns_underwater": {}
```

guardian

```json
"minecraft:spawns_underwater": {}
```

</Spoiler>

## weight

<Spoiler title="Show">

armadillo

```json
"minecraft:weight": {
    "default": 10
}
```

```json
"minecraft:weight": {
    "default": 6,
    "rarity": 3
}
```

```json
"minecraft:weight": {
    "default": 6,
    "rarity": 2
}
```

axolotl

```json
"minecraft:weight": {
    "default": 10
}
```

bat

```json
"minecraft:weight": {
    "default": 10
}
```

bee

```json
"minecraft:weight": {
    "default": 10
}
```

bogged

```json
"minecraft:weight": {
    "default": 40
}
```

chicken

```json
"minecraft:weight": {
    "default": 10
}
```

</Spoiler>

## world_age_filter

<Spoiler title="Show">

pillager_patrol

```json
"minecraft:world_age_filter": {
    "min": 6000
}
```

```json
"minecraft:world_age_filter": {
    "min": 6000
}
```

```json
"minecraft:world_age_filter": {
    "min": 6000
}
```

</Spoiler>

---
title: Vanilla Usage Spawn Rules - Full
category: Documentation
mentions:
    - MedicalJewel105
hidden: true
---

This page was created with [Wiki Content Generator](https://github.com/Bedrock-OSS/bedrock-wiki-content-generator). If there are issues, contact us on [Bedrock OSS](https://discord.gg/XjV87YN) Discord server.
Includes all examples. Namespace `minecraft` and some formatting has been removed to make the page load quickly. *Last updated for 1.19.70*

## biome_filter

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
    "test": "has_biome_tag",
    "operator": "==",
    "value": "animal"
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

chicken

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "animal"
}
```

cod

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

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "animal"
}
```

creeper

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "monster"
}
```

dolphin

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

donkey

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "plains"
}
```

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "meadow"
}
```

drowned

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "ocean"
}
```

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "river"
}
```

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "dripstone_caves"
}
```

enderman

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "monster"
}
```

```json
"minecraft:biome_filter": {
    "all_of": [
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "nether"
        },
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "spawn_endermen"
        }
    ]
}
```

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "warped_forest"
}
```

```json
"minecraft:biome_filter": [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "the_end"
    }
]
```

fox

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "taiga"
}
```

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "grove"
}
```

frog

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

ghast

```json
"minecraft:biome_filter": {
    "all_of": [
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "nether"
        },
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "spawn_ghast"
        }
    ]
}
```

goat

```json
"minecraft:biome_filter": {
    "any_of": [
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "snowy_slopes"
        },
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "jagged_peaks"
        },
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "frozen_peaks"
        }
    ]
}
```

hoglin

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "crimson_forest"
}
```

horse

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "plains"
}
```

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "savanna"
}
```

husk

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "desert"
}
```

llama

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "extreme_hills"
}
```

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "savanna"
}
```

magma_cube

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "spawn_magma_cubes"
}
```

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "spawn_many_magma_cubes"
}
```

mooshroom

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "mooshroom_island"
}
```

ocelot

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "jungle"
}
```

panda

```json
"minecraft:biome_filter": [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "jungle"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "bamboo"
    }
]
```

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "bamboo"
}
```

parrot

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "jungle"
}
```

phantom

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "monster"
}
```

pig

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "animal"
}
```

piglin

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "spawn_piglin"
}
```

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "spawn_few_piglins"
}
```

pillager_patrol

```json
"minecraft:biome_filter": {
    "all_of": [
        {
            "test": "has_biome_tag",
            "operator": "!=",
            "value": "mooshroom_island"
        },
        {
            "test": "has_biome_tag",
            "operator": "!=",
            "value": "nether"
        },
        {
            "test": "has_biome_tag",
            "operator": "!=",
            "value": "the_end"
        }
    ]
}
```

```json
"minecraft:biome_filter": {
    "all_of": [
        {
            "test": "has_biome_tag",
            "operator": "!=",
            "value": "mooshroom_island"
        },
        {
            "test": "has_biome_tag",
            "operator": "!=",
            "value": "nether"
        },
        {
            "test": "has_biome_tag",
            "operator": "!=",
            "value": "the_end"
        }
    ]
}
```

```json
"minecraft:biome_filter": {
    "all_of": [
        {
            "test": "has_biome_tag",
            "operator": "!=",
            "value": "mooshroom_island"
        },
        {
            "test": "has_biome_tag",
            "operator": "!=",
            "value": "nether"
        },
        {
            "test": "has_biome_tag",
            "operator": "!=",
            "value": "the_end"
        }
    ]
}
```

polar_bear

```json
"minecraft:biome_filter": [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "frozen"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "ocean"
    }
]
```

```json
"minecraft:biome_filter": [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "frozen"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "ocean"
    }
]
```

pufferfish

```json
"minecraft:biome_filter": [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "ocean"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "warm"
    }
]
```

rabbit

```json
"minecraft:biome_filter": {
    "any_of": [
        {
            "all_of": [
                {
                    "test": "has_biome_tag",
                    "operator": "==",
                    "value": "taiga"
                },
                {
                    "test": "has_biome_tag",
                    "operator": "!=",
                    "value": "mega"
                }
            ]
        },
        {
            "test": "is_snow_covered",
            "operator": "==",
            "value": true
        },
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "desert"
        }
    ]
}
```

```json
"minecraft:biome_filter": {
    "any_of": [
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "flower_forest"
        },
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "grove"
        },
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "snowy_slopes"
        }
    ]
}
```

```json
"minecraft:biome_filter": {
    "any_of": [
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "meadow"
        }
    ]
}
```

salmon

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

```json
"minecraft:biome_filter": [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "river"
    }
]
```

sheep

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "animal"
}
```

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "meadow"
}
```

skeleton

```json
"minecraft:biome_filter": {
    "any_of": [
        {
            "all_of": [
                {
                    "test": "has_biome_tag",
                    "operator": "==",
                    "value": "monster"
                },
                {
                    "test": "has_biome_tag",
                    "operator": "!=",
                    "value": "frozen"
                }
            ]
        },
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "soulsand_valley"
        }
    ]
}
```

slime

```json
"minecraft:biome_filter": {
    "any_of": [
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "monster"
        },
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "swamp"
        },
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "mangrove_swamp"
        },
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "frozen"
        }
    ]
}
```

spider

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "monster"
}
```

squid

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "ocean"
}
```

```json
"minecraft:biome_filter": {
    "any_of": [
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "river"
        }
    ]
}
```

stray

```json
"minecraft:biome_filter": [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "frozen"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "ocean"
    }
]
```

```json
"minecraft:biome_filter": [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "frozen"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "ocean"
    }
]
```

strider

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "nether"
}
```

tropicalfish

```json
"minecraft:biome_filter": [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "ocean"
    },
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "warm"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "lukewarm"
            }
        ]
    }
]
```

```json
"minecraft:biome_filter": [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "ocean"
    },
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "warm"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "lukewarm"
            }
        ]
    }
]
```

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "lush_caves"
}
```

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "lush_caves"
}
```

```json
"minecraft:biome_filter": [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mangrove_swamp"
    }
]
```

turtle

```json
"minecraft:biome_filter": [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "beach"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "warm"
    }
]
```

witch

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "monster"
}
```

wolf

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "taiga"
}
```

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "grove"
}
```

```json
"minecraft:biome_filter": {
    "all_of": [
        {
            "test": "has_biome_tag",
            "operator": "==",
            "value": "forest"
        },
        {
            "test": "has_biome_tag",
            "operator": "!=",
            "value": "mutated"
        },
        {
            "test": "has_biome_tag",
            "operator": "!=",
            "value": "birch"
        },
        {
            "test": "has_biome_tag",
            "operator": "!=",
            "value": "roofed"
        },
        {
            "test": "has_biome_tag",
            "operator": "!=",
            "value": "mountain"
        }
    ]
}
```

zombie

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "monster"
}
```

zombie_pigman

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "spawn_zombified_piglin"
}
```

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "spawn_few_zombified_piglins"
}
```

## brightness_filter

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

creeper

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

donkey

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

drowned

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

enderman

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

fox

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

goat

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

horse

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

husk

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

llama

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

mooshroom

```json
"minecraft:brightness_filter": {
    "min": 9,
    "max": 15,
    "adjust_for_weather": false
}
```

ocelot

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

panda

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

parrot

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

phantom

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

pig

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

pillager_patrol

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": false
}
```

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": false
}
```

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": false
}
```

polar_bear

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

rabbit

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

sheep

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

skeleton

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

spider

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

stray

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

turtle

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

witch

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

wolf

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

zombie

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

zombie_pigman

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 11,
    "adjust_for_weather": true
}
```

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 11,
    "adjust_for_weather": true
}
```

## delay_filter

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

## density_limit

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
    "surface": 2
}
```

ghast

```json
"minecraft:density_limit": {
    "surface": 0,
    "underground": 2
}
```

phantom

```json
"minecraft:density_limit": {
    "surface": 5
}
```

pufferfish

```json
"minecraft:density_limit": {
    "surface": 3
}
```

salmon

```json
"minecraft:density_limit": {
    "surface": 10
}
```

```json
"minecraft:density_limit": {
    "surface": 4
}
```

squid

```json
"minecraft:density_limit": {
    "surface": 4
}
```

```json
"minecraft:density_limit": {
    "surface": 2
}
```

strider

```json
"minecraft:density_limit": {
    "surface": 3
}
```

tropicalfish

```json
"minecraft:density_limit": {
    "surface": 20
}
```

```json
"minecraft:density_limit": {
    "surface": 20
}
```

```json
"minecraft:density_limit": {
    "underground": 20
}
```

```json
"minecraft:density_limit": {
    "underground": 20
}
```

```json
"minecraft:density_limit": {
    "surface": 20
}
```

## difficulty_filter

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

ghast

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

hoglin

```json
"minecraft:difficulty_filter": {
    "min": "peaceful",
    "max": "hard"
}
```

husk

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

magma_cube

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

phantom

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

piglin

```json
"minecraft:difficulty_filter": {
    "min": "peaceful",
    "max": "hard"
}
```

```json
"minecraft:difficulty_filter": {
    "min": "peaceful",
    "max": "hard"
}
```

pillager_patrol

```json
"minecraft:difficulty_filter": {
    "max": "easy"
}
```

```json
"minecraft:difficulty_filter": {
    "min": "normal",
    "max": "normal"
}
```

```json
"minecraft:difficulty_filter": {
    "min": "hard"
}
```

skeleton

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

slime

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

spider

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

stray

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

strider

```json
"minecraft:difficulty_filter": {
    "min": "peaceful",
    "max": "hard"
}
```

witch

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

zombie

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

zombie_pigman

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

## disallow_spawns_in_bubble

axolotl

```json
"minecraft:disallow_spawns_in_bubble": {}
```

## distance_filter

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

## height_filter

bat

```json
"minecraft:height_filter": {
    "min": -63,
    "max": 63
}
```

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

```json
"minecraft:height_filter": {
    "min": 50,
    "max": 64
}
```

```json
"minecraft:height_filter": {
    "min": 0,
    "max": 64
}
```

turtle

```json
"minecraft:height_filter": {
    "min": 60,
    "max": 67
}
```

## herd

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
    "min_size": 2,
    "max_size": 2
}
```

bee

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 1
}
```

chicken

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

cod

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 7
}
```

cow

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 3
}
```

dolphin

```json
"minecraft:herd": {
    "min_size": 3,
    "max_size": 5
}
```

donkey

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 6
}
```

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

drowned

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

enderman

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 1
}
```

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 1
}
```

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 4
}
```

fox

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4,
    "event": "minecraft:entity_born",
    "event_skip_count": 2
}
```

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4,
    "event": "minecraft:entity_born",
    "event_skip_count": 2
}
```

frog

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 5
}
```

glow_squid

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

goat

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 3
}
```

hoglin

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 4
}
```

horse

```json
"minecraft:herd": [
    {
        "min_size": 2,
        "max_size": 6,
        "event": "minecraft:make_white"
    },
    {
        "min_size": 2,
        "max_size": 6,
        "event": "minecraft:make_creamy"
    },
    {
        "min_size": 2,
        "max_size": 6,
        "event": "minecraft:make_chestnut"
    },
    {
        "min_size": 2,
        "max_size": 6,
        "event": "minecraft:make_brown"
    },
    {
        "min_size": 2,
        "max_size": 6,
        "event": "minecraft:make_black"
    },
    {
        "min_size": 2,
        "max_size": 6,
        "event": "minecraft:make_gray"
    },
    {
        "min_size": 2,
        "max_size": 6,
        "event": "minecraft:make_darkbrown"
    }
]
```

```json
"minecraft:herd": [
    {
        "min_size": 2,
        "max_size": 6,
        "event": "minecraft:make_white"
    },
    {
        "min_size": 2,
        "max_size": 6,
        "event": "minecraft:make_creamy"
    },
    {
        "min_size": 2,
        "max_size": 6,
        "event": "minecraft:make_chestnut"
    },
    {
        "min_size": 2,
        "max_size": 6,
        "event": "minecraft:make_brown"
    },
    {
        "min_size": 2,
        "max_size": 6,
        "event": "minecraft:make_black"
    },
    {
        "min_size": 2,
        "max_size": 6,
        "event": "minecraft:make_gray"
    },
    {
        "min_size": 2,
        "max_size": 6,
        "event": "minecraft:make_darkbrown"
    }
]
```

husk

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

llama

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 6
}
```

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 4
}
```

magma_cube

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 4
}
```

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 5
}
```

mooshroom

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 8
}
```

ocelot

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

panda

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

parrot

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

pig

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 3
}
```

piglin

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 4
}
```

pillager_patrol

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 5,
    "initial_event": "minecraft:promote_to_patrol_captain",
    "initial_event_count": 1,
    "event": "minecraft:spawn_as_patrol_follower",
    "event_skip_count": 1
}
```

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 5,
    "initial_event": "minecraft:promote_to_patrol_captain",
    "initial_event_count": 1,
    "event": "minecraft:spawn_as_patrol_follower",
    "event_skip_count": 1
}
```

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 5,
    "initial_event": "minecraft:promote_to_patrol_captain",
    "initial_event_count": 1,
    "event": "minecraft:spawn_as_patrol_follower",
    "event_skip_count": 1
}
```

polar_bear

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2,
    "event": "minecraft:entity_born",
    "event_skip_count": 1
}
```

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2,
    "event": "minecraft:entity_born",
    "event_skip_count": 1
}
```

pufferfish

```json
"minecraft:herd": {
    "min_size": 3,
    "max_size": 5
}
```

rabbit

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 3
}
```

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 3
}
```

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 6
}
```

salmon

```json
"minecraft:herd": {
    "min_size": 3,
    "max_size": 5
}
```

```json
"minecraft:herd": {
    "min_size": 3,
    "max_size": 5
}
```

sheep

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 3
}
```

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

skeleton

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

squid

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

stray

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

strider

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

tropicalfish

```json
"minecraft:herd": [
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_anenonme"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_black_tang"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_blue_dory"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_butterfly_fish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_cichlid"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_clownfish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_cc_betta"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_dog_fish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_e_red_snapper"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_goat_fish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_moorish_idol"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_ornate_butterfly"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_parrot_fish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_queen_angel_fish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_red_cichlid"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_red_lipped_benny"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_red_snapper"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_threadfin"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_tomato_clown"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_triggerfish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_yellow_tang"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_yellow_tail_parrot"
    }
]
```

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 3
}
```

```json
"minecraft:herd": [
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_anenonme"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_black_tang"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_blue_dory"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_butterfly_fish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_cichlid"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_clownfish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_cc_betta"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_dog_fish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_e_red_snapper"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_goat_fish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_moorish_idol"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_ornate_butterfly"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_parrot_fish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_queen_angel_fish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_red_cichlid"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_red_lipped_benny"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_red_snapper"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_threadfin"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_tomato_clown"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_triggerfish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_yellow_tang"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_yellow_tail_parrot"
    }
]
```

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 3
}
```

```json
"minecraft:herd": [
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_anenonme"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_black_tang"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_blue_dory"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_butterfly_fish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_cichlid"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_clownfish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_cc_betta"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_dog_fish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_e_red_snapper"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_goat_fish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_moorish_idol"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_ornate_butterfly"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_parrot_fish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_queen_angel_fish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_red_cichlid"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_red_lipped_benny"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_red_snapper"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_threadfin"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_tomato_clown"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_triggerfish"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_yellow_tang"
    },
    {
        "min_size": 3,
        "max_size": 5,
        "event": "minecraft:become_yellow_tail_parrot"
    }
]
```

turtle

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 6
}
```

wolf

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 4
}
```

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 4
}
```

zombie

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

zombie_pigman

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

## mob_event_filter

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

## permute_type

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

## player_in_village_filter

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

## spawn_event

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

## spawns_lava

strider

```json
"minecraft:spawns_lava": {}
```

## spawns_on_block_filter

axolotl

```json
"minecraft:spawns_on_block_filter": "minecraft:clay"
```

chicken

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

cow

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

donkey

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

goat

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

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

llama

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

ocelot

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

panda

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

parrot

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

pig

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

polar_bear

```json
"minecraft:spawns_on_block_filter": "minecraft:ice"
```

rabbit

```json
"minecraft:spawns_on_block_filter": [
    "minecraft:grass",
    "minecraft:snow",
    "minecraft:sand",
    "minecraft:snow_layer"
]
```

```json
"minecraft:spawns_on_block_filter": [
    "minecraft:grass",
    "minecraft:snow",
    "minecraft:sand",
    "minecraft:snow_layer"
]
```

```json
"minecraft:spawns_on_block_filter": [
    "minecraft:grass",
    "minecraft:snow",
    "minecraft:sand",
    "minecraft:snow_layer"
]
```

sheep

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

turtle

```json
"minecraft:spawns_on_block_filter": "minecraft:sand"
```

wolf

```json
"minecraft:spawns_on_block_filter": [
    "minecraft:grass",
    "minecraft:podzol",
    "minecraft:dirt"
]
```

```json
"minecraft:spawns_on_block_filter": [
    "minecraft:grass",
    "minecraft:podzol",
    "minecraft:dirt"
]
```

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

## spawns_on_block_prevented_filter

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

## spawns_on_surface

bee

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

creeper

```json
"minecraft:spawns_on_surface": {}
```

dolphin

```json
"minecraft:spawns_on_surface": {}
```

donkey

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

drowned

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

enderman

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

fox

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

frog

```json
"minecraft:spawns_on_surface": {}
```

goat

```json
"minecraft:spawns_on_surface": {}
```

horse

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

husk

```json
"minecraft:spawns_on_surface": {}
```

llama

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

mooshroom

```json
"minecraft:spawns_on_surface": {}
```

ocelot

```json
"minecraft:spawns_on_surface": {}
```

panda

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

parrot

```json
"minecraft:spawns_on_surface": {}
```

phantom

```json
"minecraft:spawns_on_surface": {}
```

pig

```json
"minecraft:spawns_on_surface": {}
```

pillager_patrol

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

polar_bear

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

pufferfish

```json
"minecraft:spawns_on_surface": {}
```

rabbit

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

salmon

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

sheep

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

skeleton

```json
"minecraft:spawns_on_surface": {}
```

slime

```json
"minecraft:spawns_on_surface": {}
```

spider

```json
"minecraft:spawns_on_surface": {}
```

squid

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

stray

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

tropicalfish

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

turtle

```json
"minecraft:spawns_on_surface": {}
```

witch

```json
"minecraft:spawns_on_surface": {}
```

wolf

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

```json
"minecraft:spawns_on_surface": {}
```

zombie

```json
"minecraft:spawns_on_surface": {}
```

## spawns_underground

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

glow_squid

```json
"minecraft:spawns_underground": {}
```

hoglin

```json
"minecraft:spawns_underground": {}
```

magma_cube

```json
"minecraft:spawns_underground": {}
```

```json
"minecraft:spawns_underground": {}
```

piglin

```json
"minecraft:spawns_underground": {}
```

```json
"minecraft:spawns_underground": {}
```

skeleton

```json
"minecraft:spawns_underground": {}
```

slime

```json
"minecraft:spawns_underground": {}
```

spider

```json
"minecraft:spawns_underground": {}
```

stray

```json
"minecraft:spawns_underground": {}
```

strider

```json
"minecraft:spawns_underground": {}
```

tropicalfish

```json
"minecraft:spawns_underground": {}
```

```json
"minecraft:spawns_underground": {}
```

witch

```json
"minecraft:spawns_underground": {}
```

zombie

```json
"minecraft:spawns_underground": {}
```

zombie_pigman

```json
"minecraft:spawns_underground": {}
```

```json
"minecraft:spawns_underground": {}
```

## spawns_underwater

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

pufferfish

```json
"minecraft:spawns_underwater": {}
```

salmon

```json
"minecraft:spawns_underwater": {}
```

```json
"minecraft:spawns_underwater": {}
```

squid

```json
"minecraft:spawns_underwater": {}
```

```json
"minecraft:spawns_underwater": {}
```

tropicalfish

```json
"minecraft:spawns_underwater": {}
```

```json
"minecraft:spawns_underwater": {}
```

```json
"minecraft:spawns_underwater": {}
```

```json
"minecraft:spawns_underwater": {}
```

```json
"minecraft:spawns_underwater": {}
```

## weight

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

chicken

```json
"minecraft:weight": {
    "default": 10
}
```

cod

```json
"minecraft:weight": {
    "default": 75
}
```

cow

```json
"minecraft:weight": {
    "default": 8
}
```

creeper

```json
"minecraft:weight": {
    "default": 100
}
```

dolphin

```json
"minecraft:weight": {
    "default": 7
}
```

donkey

```json
"minecraft:weight": {
    "default": 1
}
```

```json
"minecraft:weight": {
    "default": 1
}
```

drowned

```json
"minecraft:weight": {
    "default": 100
}
```

```json
"minecraft:weight": {
    "default": 5
}
```

```json
"minecraft:weight": {
    "default": 100
}
```

enderman

```json
"minecraft:weight": {
    "default": 10
}
```

```json
"minecraft:weight": {
    "default": 6
}
```

```json
"minecraft:weight": {
    "default": 10
}
```

```json
"minecraft:weight": {
    "default": 10
}
```

fox

```json
"minecraft:weight": {
    "default": 8
}
```

```json
"minecraft:weight": {
    "default": 8
}
```

frog

```json
"minecraft:weight": {
    "default": 10
}
```

ghast

```json
"minecraft:weight": {
    "default": 40
}
```

glow_squid

```json
"minecraft:weight": {
    "default": 10
}
```

goat

```json
"minecraft:weight": {
    "default": 5
}
```

hoglin

```json
"minecraft:weight": {
    "default": 20
}
```

horse

```json
"minecraft:weight": {
    "default": 4
}
```

```json
"minecraft:weight": {
    "default": 1
}
```

husk

```json
"minecraft:weight": {
    "default": 240
}
```

llama

```json
"minecraft:weight": {
    "default": 5
}
```

```json
"minecraft:weight": {
    "default": 8
}
```

magma_cube

```json
"minecraft:weight": {
    "default": 10
}
```

```json
"minecraft:weight": {
    "default": 100
}
```

mooshroom

```json
"minecraft:weight": {
    "default": 8
}
```

ocelot

```json
"minecraft:weight": {
    "default": 30
}
```

panda

```json
"minecraft:weight": {
    "default": 10
}
```

```json
"minecraft:weight": {
    "default": 40
}
```

parrot

```json
"minecraft:weight": {
    "default": 40
}
```

phantom

```json
"minecraft:weight": {
    "default": 100
}
```

pig

```json
"minecraft:weight": {
    "default": 10
}
```

piglin

```json
"minecraft:weight": {
    "default": 5
}
```

```json
"minecraft:weight": {
    "default": 15
}
```

polar_bear

```json
"minecraft:weight": {
    "default": 1
}
```

```json
"minecraft:weight": {
    "default": 5
}
```

pufferfish

```json
"minecraft:weight": {
    "default": 25
}
```

rabbit

```json
"minecraft:weight": {
    "default": 4
}
```

```json
"minecraft:weight": {
    "default": 4
}
```

```json
"minecraft:weight": {
    "default": 2
}
```

salmon

```json
"minecraft:weight": {
    "default": 26
}
```

```json
"minecraft:weight": {
    "default": 16
}
```

sheep

```json
"minecraft:weight": {
    "default": 12
}
```

```json
"minecraft:weight": {
    "default": 2
}
```

skeleton

```json
"minecraft:weight": {
    "default": 80
}
```

slime

```json
"minecraft:weight": {
    "default": 100
}
```

spider

```json
"minecraft:weight": {
    "default": 100
}
```

squid

```json
"minecraft:weight": {
    "default": 8
}
```

```json
"minecraft:weight": {
    "default": 8
}
```

stray

```json
"minecraft:weight": {
    "default": 120
}
```

```json
"minecraft:weight": {
    "default": 120
}
```

strider

```json
"minecraft:weight": {
    "default": 20
}
```

tropicalfish

```json
"minecraft:weight": {
    "default": 75
}
```

```json
"minecraft:weight": {
    "default": 25
}
```

```json
"minecraft:weight": {
    "default": 75
}
```

```json
"minecraft:weight": {
    "default": 25
}
```

```json
"minecraft:weight": {
    "default": 25
}
```

turtle

```json
"minecraft:weight": {
    "default": 8
}
```

witch

```json
"minecraft:weight": {
    "default": 5
}
```

wolf

```json
"minecraft:weight": {
    "default": 8
}
```

```json
"minecraft:weight": {
    "default": 8
}
```

```json
"minecraft:weight": {
    "default": 5
}
```

zombie

```json
"minecraft:weight": {
    "default": 100
}
```

zombie_pigman

```json
"minecraft:weight": {
    "default": 100
}
```

```json
"minecraft:weight": {
    "default": 1
}
```

## world_age_filter

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


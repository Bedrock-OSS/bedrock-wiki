---
title: Vanilla Usage Spawn Rules
category: Documentation
mentions:
    - MedicalJewel105
---

This page was created with [Wiki Content Generator](https://github.com/Bedrock-OSS/bedrock-wiki-content-generator). If there are issues, contact us on [Bedrock OSS](https://discord.gg/XjV87YN) Discord server.
Includes all examples. Namespace `minecraft` was also removed. *Last updated for 1.19.10*

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

donkey

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "plains"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "meadow"
}
```

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "ocean"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "river"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "dripstone_caves"
}
```

enderman

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "monster"
}
```

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "warped_forest"
}
```

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "taiga"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "grove"
}
```

frog

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "crimson_forest"
}
```

horse

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "plains"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "savanna"
}
```

husk

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "desert"
}
```

llama

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "extreme_hills"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "savanna"
}
```

magma_cube

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "spawn_magma_cubes"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "spawn_many_magma_cubes"
}
```

mooshroom

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "mooshroom_island"
}
```

ocelot

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "jungle"
}
```

panda

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "bamboo"
}
```

parrot

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "jungle"
}
```

phantom

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "monster"
}
```

pig

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "animal"
}
```

piglin

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "spawn_piglin"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "spawn_few_piglins"
}
```

pillager_patrol

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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
        "operator": "==",
        "value": "warm"
    }
]
```

rabbit

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "animal"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "meadow"
}
```

skeleton

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "monster"
}
```

squid

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "ocean"
}
```

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "nether"
}
```

tropicalfish

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "lush_caves"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "lush_caves"
}
```

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "monster"
}
```

wolf

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "taiga"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "grove"
}
```

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "monster"
}
```

zombie_pigman

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "spawn_zombified_piglin"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "spawn_few_zombified_piglins"
}
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

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

enderman

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

fox

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

goat

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

horse

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

husk

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

llama

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

mooshroom

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 9,
    "max": 15,
    "adjust_for_weather": false
}
```

ocelot

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

panda

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

parrot

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

phantom

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

pig

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

pillager_patrol

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": false
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": false
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": false
}
```

polar_bear

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

rabbit

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

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

sheep

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

skeleton

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

spider

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

stray

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

turtle

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

witch

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

wolf

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

<CodeHeader></CodeHeader>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

zombie

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

ghast

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 0,
    "underground": 2
}
```

phantom

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 5
}
```

pufferfish

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 3
}
```

salmon

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 10
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 4
}
```

squid

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 2
}
```

strider

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 3
}
```

tropicalfish

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 20
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 20
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 20
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 20
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:density_limit": {
    "surface": 20
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

hoglin

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "peaceful",
    "max": "hard"
}
```

husk

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

magma_cube

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

phantom

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

piglin

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "peaceful",
    "max": "hard"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "peaceful",
    "max": "hard"
}
```

pillager_patrol

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "max": "easy"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "normal",
    "max": "normal"
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "hard"
}
```

skeleton

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

slime

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

spider

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

stray

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

strider

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "peaceful",
    "max": "hard"
}
```

witch

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

zombie

<CodeHeader></CodeHeader>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

zombie_pigman

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

tropicalfish

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

<CodeHeader></CodeHeader>

```json
"minecraft:height_filter": {
    "min": 0,
    "max": 64
}
```

turtle

<CodeHeader></CodeHeader>

```json
"minecraft:height_filter": {
    "min": 60,
    "max": 67
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

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

enderman

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 1
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 1
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 4
}
```

fox

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4,
    "event": "minecraft:entity_born",
    "event_skip_count": 2
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4,
    "event": "minecraft:entity_born",
    "event_skip_count": 2
}
```

frog

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 5
}
```

glow_squid

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

goat

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 3
}
```

hoglin

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 4
}
```

horse

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

llama

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 6
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 4
}
```

magma_cube

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 5
}
```

mooshroom

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 8
}
```

ocelot

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

panda

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

parrot

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

pig

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 3
}
```

piglin

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 4
}
```

pillager_patrol

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2,
    "event": "minecraft:entity_born",
    "event_skip_count": 1
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2,
    "event": "minecraft:entity_born",
    "event_skip_count": 1
}
```

pufferfish

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 3,
    "max_size": 5
}
```

rabbit

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 3
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 3
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 6
}
```

salmon

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 3,
    "max_size": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 3,
    "max_size": 5
}
```

sheep

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 3
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

skeleton

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

squid

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

stray

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

strider

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

tropicalfish

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 3
}
```

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 3
}
```

<CodeHeader></CodeHeader>

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

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 6
}
```

wolf

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 4
}
```

zombie

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

zombie_pigman

<CodeHeader></CodeHeader>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

<CodeHeader></CodeHeader>

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

llama

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

ocelot

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

panda

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

parrot

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

pig

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

polar_bear

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": "minecraft:ice"
```

rabbit

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": [
    "minecraft:grass",
    "minecraft:snow",
    "minecraft:sand",
    "minecraft:snow_layer"
]
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": [
    "minecraft:grass",
    "minecraft:snow",
    "minecraft:sand",
    "minecraft:snow_layer"
]
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": [
    "minecraft:grass",
    "minecraft:snow",
    "minecraft:sand",
    "minecraft:snow_layer"
]
```

sheep

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

turtle

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": "minecraft:sand"
```

wolf

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": [
    "minecraft:grass",
    "minecraft:podzol",
    "minecraft:dirt"
]
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_block_filter": [
    "minecraft:grass",
    "minecraft:podzol",
    "minecraft:dirt"
]
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

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

enderman

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

fox

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

frog

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

goat

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

horse

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

husk

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

llama

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

mooshroom

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

ocelot

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

panda

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

parrot

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

phantom

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

pig

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

pillager_patrol

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

polar_bear

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

pufferfish

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

rabbit

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

salmon

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

sheep

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

skeleton

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

slime

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

spider

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

squid

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

stray

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

tropicalfish

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

turtle

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

witch

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

wolf

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_on_surface": {}
```

zombie

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

hoglin

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

magma_cube

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

piglin

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

skeleton

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

slime

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

spider

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

stray

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

strider

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

tropicalfish

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

witch

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

zombie

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

zombie_pigman

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underground": {}
```

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

pufferfish

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underwater": {}
```

salmon

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underwater": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underwater": {}
```

squid

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underwater": {}
```

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underwater": {}
```

tropicalfish

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

<CodeHeader></CodeHeader>

```json
"minecraft:spawns_underwater": {}
```

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

donkey

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 1
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 1
}
```

drowned

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 100
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 100
}
```

enderman

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 10
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 6
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 10
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 10
}
```

fox

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 8
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 8
}
```

frog

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 10
}
```

ghast

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 40
}
```

glow_squid

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 10
}
```

goat

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 5
}
```

hoglin

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 20
}
```

horse

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 1
}
```

husk

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 240
}
```

llama

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 8
}
```

magma_cube

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 10
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 100
}
```

mooshroom

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 8
}
```

ocelot

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 30
}
```

panda

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 10
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 40
}
```

parrot

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 40
}
```

phantom

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 100
}
```

pig

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 10
}
```

piglin

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 5
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 15
}
```

polar_bear

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 1
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 5
}
```

pufferfish

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 25
}
```

rabbit

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 4
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 2
}
```

salmon

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 26
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 16
}
```

sheep

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 12
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 2
}
```

skeleton

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 80
}
```

slime

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 100
}
```

spider

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 100
}
```

squid

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 8
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 8
}
```

stray

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 120
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 120
}
```

strider

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 20
}
```

tropicalfish

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 75
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 25
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 75
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 25
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 25
}
```

turtle

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 8
}
```

witch

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 5
}
```

wolf

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 8
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 8
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 5
}
```

zombie

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 100
}
```

zombie_pigman

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 100
}
```

<CodeHeader></CodeHeader>

```json
"minecraft:weight": {
    "default": 1
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


---
title: Vanilla Usage Spawn Rules
---

This documentation is stripped from the vanilla files using an automated script.`

## minecraft:biome_filter

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/bat.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "animal"
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/bee.json)</small>

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

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/chicken.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "animal"
}
```

#### cod

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/cod.json)</small>

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

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/cow.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "animal"
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/creeper.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "monster"
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/dolphin.json)</small>

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

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/donkey.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "plains"
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/drowned.json)</small>

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

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/enderman.json)</small>

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

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/fox.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "taiga"
}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/ghast.json)</small>

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

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/goat.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "extreme_hills"
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/hoglin.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "crimson_forest"
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/horse.json)</small>

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

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/husk.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "desert"
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/llama.json)</small>

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

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/magma_cube.json)</small>

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

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/mooshroom.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "mooshroom_island"
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/ocelot.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "jungle"
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/panda.json)</small>

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

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/parrot.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "jungle"
}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/phantom.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "monster"
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pig.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "animal"
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/piglin.json)</small>

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

#### pillager_patrol

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pillager_patrol.json)</small>

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

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/polar_bear.json)</small>

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

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pufferfish.json)</small>

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

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/rabbit.json)</small>

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
    "test": "has_biome_tag",
    "operator": "==",
    "value": "flower_forest"
}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/salmon.json)</small>

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

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/sheep.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "animal"
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/skeleton.json)</small>

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

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/slime.json)</small>

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
            "value": "frozen"
        }
    ]
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/spider.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "monster"
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/squid.json)</small>

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

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/stray.json)</small>

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

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/strider.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "nether"
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/tropicalfish.json)</small>

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

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/turtle.json)</small>

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

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/witch.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "monster"
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/wolf.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "taiga"
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

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/zombie.json)</small>

```json
"minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "monster"
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/zombie_pigman.json)</small>

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

## minecraft:brightness_filter

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/axolotl.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 0,
    "adjust_for_weather": false
}
```

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/bat.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 4,
    "adjust_for_weather": true
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/bee.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/chicken.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/cow.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/creeper.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/donkey.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/drowned.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/enderman.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/fox.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/goat.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/horse.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/husk.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/llama.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/mooshroom.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 9,
    "max": 15,
    "adjust_for_weather": false
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/ocelot.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/panda.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/parrot.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/phantom.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pig.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

#### pillager_patrol

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pillager_patrol.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": false
}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/polar_bear.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/rabbit.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/sheep.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/skeleton.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/spider.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/stray.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/turtle.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/witch.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/wolf.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 7,
    "max": 15,
    "adjust_for_weather": false
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/zombie.json)</small>

```json
"minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
}
```

## minecraft:delay_filter

#### pillager_patrol

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pillager_patrol.json)</small>

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

## minecraft:density_limit

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/bat.json)</small>

```json
"minecraft:density_limit": {
    "surface": 5
}
```

#### cod

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/cod.json)</small>

```json
"minecraft:density_limit": {
    "surface": 20
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/creeper.json)</small>

```json
"minecraft:density_limit": {
    "surface": 5
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/dolphin.json)</small>

```json
"minecraft:density_limit": {
    "surface": 5,
    "underground": 0
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/drowned.json)</small>

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

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/ghast.json)</small>

```json
"minecraft:density_limit": {
    "surface": 0,
    "underground": 2
}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/phantom.json)</small>

```json
"minecraft:density_limit": {
    "surface": 5
}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pufferfish.json)</small>

```json
"minecraft:density_limit": {
    "surface": 3
}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/salmon.json)</small>

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

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/squid.json)</small>

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

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/strider.json)</small>

```json
"minecraft:density_limit": {
    "surface": 3
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/tropicalfish.json)</small>

```json
"minecraft:density_limit": {
    "surface": 20
}
```

## minecraft:difficulty_filter

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/creeper.json)</small>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/drowned.json)</small>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/enderman.json)</small>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/ghast.json)</small>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/hoglin.json)</small>

```json
"minecraft:difficulty_filter": {
    "min": "peaceful",
    "max": "hard"
}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/husk.json)</small>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/magma_cube.json)</small>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/phantom.json)</small>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/piglin.json)</small>

```json
"minecraft:difficulty_filter": {
    "min": "peaceful",
    "max": "hard"
}
```

#### pillager_patrol

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pillager_patrol.json)</small>

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

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/skeleton.json)</small>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/slime.json)</small>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/spider.json)</small>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/stray.json)</small>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/strider.json)</small>

```json
"minecraft:difficulty_filter": {
    "min": "peaceful",
    "max": "hard"
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/witch.json)</small>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/zombie.json)</small>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/zombie_pigman.json)</small>

```json
"minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
}
```

## minecraft:distance_filter

#### cod

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/cod.json)</small>

```json
"minecraft:distance_filter": {
    "min": 12,
    "max": 32
}
```

#### pillager_patrol

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pillager_patrol.json)</small>

```json
"minecraft:distance_filter": {
    "min": 24,
    "max": 48
}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pufferfish.json)</small>

```json
"minecraft:distance_filter": {
    "min": 12,
    "max": 32
}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/salmon.json)</small>

```json
"minecraft:distance_filter": {
    "min": 12,
    "max": 32
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/tropicalfish.json)</small>

```json
"minecraft:distance_filter": {
    "min": 12,
    "max": 32
}
```

## minecraft:height_filter

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/axolotl.json)</small>

```json
"minecraft:height_filter": {
    "min": 0,
    "max": 63
}
```

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/bat.json)</small>

```json
"minecraft:height_filter": {
    "min": -63,
    "max": 63
}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/glow_squid.json)</small>

```json
"minecraft:height_filter": {
    "min": 0,
    "max": 63
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/stray.json)</small>

```json
"minecraft:height_filter": {
    "min": 60,
    "max": 66
}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/turtle.json)</small>

```json
"minecraft:height_filter": {
    "min": 60,
    "max": 67
}
```

## minecraft:herd

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/axolotl.json)</small>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 4,
    "event": "minecraft:entity_born",
    "event_skip_count": 2
}
```

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/bat.json)</small>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 2
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/bee.json)</small>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 1
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/chicken.json)</small>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

#### cod

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/cod.json)</small>

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 7
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/cow.json)</small>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 3
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/dolphin.json)</small>

```json
"minecraft:herd": {
    "min_size": 3,
    "max_size": 5
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/donkey.json)</small>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 6
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/drowned.json)</small>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/enderman.json)</small>

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
    "min_size": 4,
    "max_size": 4
}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/fox.json)</small>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4,
    "event": "minecraft:entity_born",
    "event_skip_count": 2
}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/glow_squid.json)</small>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/goat.json)</small>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 3
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/hoglin.json)</small>

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 4
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/horse.json)</small>

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

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/husk.json)</small>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/llama.json)</small>

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

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/magma_cube.json)</small>

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

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/mooshroom.json)</small>

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 8
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/ocelot.json)</small>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/panda.json)</small>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/parrot.json)</small>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pig.json)</small>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 3
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/piglin.json)</small>

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

#### pillager_patrol

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pillager_patrol.json)</small>

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

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/polar_bear.json)</small>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2,
    "event": "minecraft:entity_born",
    "event_skip_count": 1
}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pufferfish.json)</small>

```json
"minecraft:herd": {
    "min_size": 3,
    "max_size": 5
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/rabbit.json)</small>

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

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/salmon.json)</small>

```json
"minecraft:herd": {
    "min_size": 3,
    "max_size": 5
}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/sheep.json)</small>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 3
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/skeleton.json)</small>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/squid.json)</small>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/stray.json)</small>

```json
"minecraft:herd": {
    "min_size": 1,
    "max_size": 2
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/strider.json)</small>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/tropicalfish.json)</small>

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

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/turtle.json)</small>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 6
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/wolf.json)</small>

```json
"minecraft:herd": {
    "min_size": 4,
    "max_size": 4
}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/zombie.json)</small>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/zombie_pigman.json)</small>

```json
"minecraft:herd": {
    "min_size": 2,
    "max_size": 4
}
```

## minecraft:mob_event_filter

#### pillager_patrol

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pillager_patrol.json)</small>

```json
"minecraft:mob_event_filter": {
    "event": "minecraft:pillager_patrols_event"
}
```

## minecraft:permute_type

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
        "weight": 80,
        "entity_type": "minecraft:pillager<minecraft:spawn_as_patrol_follower>"
    },
    {
        "weight": 20,
        "entity_type": "minecraft:vindicator"
    }
]
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/zombie.json)</small>

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

## minecraft:player_in_village_filter

#### pillager_patrol

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pillager_patrol.json)</small>

```json
"minecraft:player_in_village_filter": {
    "distance": 48,
    "village_border_tolerance": 32
}
```

## minecraft:spawn_event

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/stray.json)</small>

```json
"minecraft:spawn_event": {
    "event": "change_to_skeleton"
}
```

## minecraft:spawns_lava

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/strider.json)</small>

```json
"minecraft:spawns_lava": {}
```

## minecraft:spawns_on_block_filter

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/chicken.json)</small>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/cow.json)</small>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/donkey.json)</small>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/horse.json)</small>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/llama.json)</small>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/ocelot.json)</small>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/panda.json)</small>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/parrot.json)</small>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pig.json)</small>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/polar_bear.json)</small>

```json
"minecraft:spawns_on_block_filter": "minecraft:ice"
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/rabbit.json)</small>

```json
"minecraft:spawns_on_block_filter": [
    "minecraft:grass",
    "minecraft:snow",
    "minecraft:sand"
]
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/sheep.json)</small>

```json
"minecraft:spawns_on_block_filter": "minecraft:grass"
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/turtle.json)</small>

```json
"minecraft:spawns_on_block_filter": "minecraft:sand"
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/wolf.json)</small>

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

## minecraft:spawns_on_block_prevented_filter

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/hoglin.json)</small>

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/magma_cube.json)</small>

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/piglin.json)</small>

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/skeleton.json)</small>

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/zombie_pigman.json)</small>

```json
"minecraft:spawns_on_block_prevented_filter": [
    "minecraft:nether_wart_block",
    "minecraft:shroomlight"
]
```

## minecraft:spawns_on_surface

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/bee.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/chicken.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### cod

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/cod.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/cow.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/creeper.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/dolphin.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/donkey.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/drowned.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/enderman.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/fox.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/goat.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/horse.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/husk.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/llama.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/mooshroom.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/ocelot.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/panda.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/parrot.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/phantom.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pig.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### pillager_patrol

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pillager_patrol.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/polar_bear.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pufferfish.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/rabbit.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/salmon.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/sheep.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/skeleton.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/slime.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/spider.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/squid.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/stray.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/tropicalfish.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/turtle.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/witch.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/wolf.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/zombie.json)</small>

```json
"minecraft:spawns_on_surface": {}
```

## minecraft:spawns_underground

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/axolotl.json)</small>

```json
"minecraft:spawns_underground": {}
```

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/bat.json)</small>

```json
"minecraft:spawns_underground": {}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/creeper.json)</small>

```json
"minecraft:spawns_underground": {}
```

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/enderman.json)</small>

```json
"minecraft:spawns_underground": {}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/ghast.json)</small>

```json
"minecraft:spawns_underground": {}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/glow_squid.json)</small>

```json
"minecraft:spawns_underground": {}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/hoglin.json)</small>

```json
"minecraft:spawns_underground": {}
```

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/magma_cube.json)</small>

```json
"minecraft:spawns_underground": {}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/piglin.json)</small>

```json
"minecraft:spawns_underground": {}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/skeleton.json)</small>

```json
"minecraft:spawns_underground": {}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/slime.json)</small>

```json
"minecraft:spawns_underground": {}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/spider.json)</small>

```json
"minecraft:spawns_underground": {}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/stray.json)</small>

```json
"minecraft:spawns_underground": {}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/strider.json)</small>

```json
"minecraft:spawns_underground": {}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/witch.json)</small>

```json
"minecraft:spawns_underground": {}
```

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/zombie.json)</small>

```json
"minecraft:spawns_underground": {}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/zombie_pigman.json)</small>

```json
"minecraft:spawns_underground": {}
```

## minecraft:spawns_underwater

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/axolotl.json)</small>

```json
"minecraft:spawns_underwater": {}
```

#### cod

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/cod.json)</small>

```json
"minecraft:spawns_underwater": {}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/dolphin.json)</small>

```json
"minecraft:spawns_underwater": {}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/drowned.json)</small>

```json
"minecraft:spawns_underwater": {}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/glow_squid.json)</small>

```json
"minecraft:spawns_underwater": {}
```

#### guardian

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/guardian.json)</small>

```json
"minecraft:spawns_underwater": {}
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pufferfish.json)</small>

```json
"minecraft:spawns_underwater": {}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/salmon.json)</small>

```json
"minecraft:spawns_underwater": {}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/squid.json)</small>

```json
"minecraft:spawns_underwater": {}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/tropicalfish.json)</small>

```json
"minecraft:spawns_underwater": {}
```

## minecraft:weight

#### axolotl

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/axolotl.json)</small>

```json
"minecraft:weight": {
    "default": 8
}
```

#### bat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/bat.json)</small>

```json
"minecraft:weight": {
    "default": 10
}
```

#### bee

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/bee.json)</small>

```json
"minecraft:weight": {
    "default": 10
}
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/chicken.json)</small>

```json
"minecraft:weight": {
    "default": 10
}
```

#### cod

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/cod.json)</small>

```json
"minecraft:weight": {
    "default": 75
}
```

#### cow

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/cow.json)</small>

```json
"minecraft:weight": {
    "default": 8
}
```

#### creeper

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/creeper.json)</small>

```json
"minecraft:weight": {
    "default": 100
}
```

#### dolphin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/dolphin.json)</small>

```json
"minecraft:weight": {
    "default": 7
}
```

#### donkey

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/donkey.json)</small>

```json
"minecraft:weight": {
    "default": 1
}
```

#### drowned

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/drowned.json)</small>

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

#### enderman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/enderman.json)</small>

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

#### fox

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/fox.json)</small>

```json
"minecraft:weight": {
    "default": 8
}
```

#### ghast

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/ghast.json)</small>

```json
"minecraft:weight": {
    "default": 40
}
```

#### glow_squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/glow_squid.json)</small>

```json
"minecraft:weight": {
    "default": 10
}
```

#### goat

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/goat.json)</small>

```json
"minecraft:weight": {
    "default": 20
}
```

#### hoglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/hoglin.json)</small>

```json
"minecraft:weight": {
    "default": 20
}
```

#### horse

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/horse.json)</small>

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

#### husk

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/husk.json)</small>

```json
"minecraft:weight": {
    "default": 240
}
```

#### llama

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/llama.json)</small>

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

#### magma_cube

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/magma_cube.json)</small>

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

#### mooshroom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/mooshroom.json)</small>

```json
"minecraft:weight": {
    "default": 8
}
```

#### ocelot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/ocelot.json)</small>

```json
"minecraft:weight": {
    "default": 30
}
```

#### panda

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/panda.json)</small>

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

#### parrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/parrot.json)</small>

```json
"minecraft:weight": {
    "default": 40
}
```

#### phantom

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/phantom.json)</small>

```json
"minecraft:weight": {
    "default": 100
}
```

#### pig

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pig.json)</small>

```json
"minecraft:weight": {
    "default": 10
}
```

#### piglin

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/piglin.json)</small>

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

#### polar_bear

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/polar_bear.json)</small>

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

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pufferfish.json)</small>

```json
"minecraft:weight": {
    "default": 25
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/rabbit.json)</small>

```json
"minecraft:weight": {
    "default": 4
}
```

```json
"minecraft:weight": {
    "default": 20
}
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/salmon.json)</small>

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

#### sheep

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/sheep.json)</small>

```json
"minecraft:weight": {
    "default": 12
}
```

#### skeleton

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/skeleton.json)</small>

```json
"minecraft:weight": {
    "default": 80
}
```

#### slime

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/slime.json)</small>

```json
"minecraft:weight": {
    "default": 100
}
```

#### spider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/spider.json)</small>

```json
"minecraft:weight": {
    "default": 100
}
```

#### squid

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/squid.json)</small>

```json
"minecraft:weight": {
    "default": 8
}
```

#### stray

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/stray.json)</small>

```json
"minecraft:weight": {
    "default": 120
}
```

#### strider

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/strider.json)</small>

```json
"minecraft:weight": {
    "default": 20
}
```

#### tropicalfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/tropicalfish.json)</small>

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

#### turtle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/turtle.json)</small>

```json
"minecraft:weight": {
    "default": 8
}
```

#### witch

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/witch.json)</small>

```json
"minecraft:weight": {
    "default": 5
}
```

#### wolf

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/wolf.json)</small>

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

#### zombie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/zombie.json)</small>

```json
"minecraft:weight": {
    "default": 100
}
```

#### zombie_pigman

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/zombie_pigman.json)</small>

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

## minecraft:world_age_filter

#### pillager_patrol

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/spawn_rules/pillager_patrol.json)</small>

```json
"minecraft:world_age_filter": {
    "min": 6000
}
```

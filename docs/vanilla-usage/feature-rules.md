---
layout: page
title: Feature Rules
parent: Vanilla Usage
---

# Vanilla Feature Rules
This documentation is stripped from the vanilla files using an automated script. If there is an issue, please bring it to the authors attention by contacting him on discord: `SirLich#1658`

# Table of contents
 - [minecraft:biome_filter](#minecraft:biome_filter)
 - [placement_pass](#placement_pass)
# minecraft:biome_filter
### bamboo_jungle_after_surface_bamboo_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "bamboo"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "jungle"
    }
]
```

### bamboo_jungle_surface_tall_grass_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "bamboo"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "jungle"
    }
]
```

### bamboo_jungle_surface_trees_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "bamboo"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "jungle"
    }
]
```

### basalt_columns_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "basalt_deltas"
    }
]
```

### basalt_pillar_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "soulsand_valley"
    }
]
```

### birch_forest_mutated_surface_trees_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "forest"
    },
    {
        "all_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "birch"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "mutated"
            }
        ]
    }
]
```

### birch_forest_surface_trees_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "forest"
    },
    {
        "all_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "birch"
            },
            {
                "test": "has_biome_tag",
                "operator": "!=",
                "value": "mutated"
            }
        ]
    }
]
```

### cold_taiga_first_sweet_berry_bush_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "taiga"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "mega"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "cold"
    }
]
```

### crimson_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "crimson_forest"
    }
]
```

### crimson_roots_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "crimson_forest"
            }
        ]
    }
]
```

### crimson_roots_soul_sand_valley_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "soulsand_valley"
            }
        ]
    }
]
```

### delta_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "basalt_deltas"
    }
]
```

### desert_after_surface_desert_well_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "desert"
    }
]
```

### desert_or_swamp_after_surface_fossil_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "desert"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "swamp"
            }
        ]
    }
]
```

### desert_surface_cactus_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "desert"
    }
]
```

### desert_surface_dead_bush_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "desert"
    }
]
```

### desert_surface_reeds_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "desert"
    }
]
```

### extreme_hills_after_surface_emerald_ore_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "extreme_hills"
    }
]
```

### extreme_hills_after_surface_silverfish_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "extreme_hills"
    }
]
```

### extreme_hills_plus_trees_surface_trees_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "forest"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "edge"
            }
        ]
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "extreme_hills"
    }
]
```

### flower_forest_first_foliage_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "flower_forest"
    }
]
```

### flower_forest_surface_flowers_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "flower_forest"
    }
]
```

### flower_forest_surface_trees_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "flower_forest"
    }
]
```

### forest_first_foliage_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "forest"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "forest_generation"
            }
        ]
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "roofed"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "extreme_hills"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "taiga"
    }
]
```

### forest_surface_flowers_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "forest"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "forest_generation"
            }
        ]
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "extreme_hills"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "taiga"
    }
]
```

### forest_surface_trees_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "forest"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "forest_generation"
            }
        ]
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
        "value": "extreme_hills"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "taiga"
    }
]
```

### frozen_ocean_after_surface_ice_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "frozen"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "ocean"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "monster"
    }
]
```

### huge_crimson_fungus_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "crimson_forest"
    }
]
```

### huge_warped_fungus_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "warped_forest"
    }
]
```

### ice_plains_spikes_first_ice_patch_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "ice_plains"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mutated"
    }
]
```

### ice_plains_spikes_first_ice_spike_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "ice_plains"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mutated"
    }
]
```

### ice_surface_trees_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "ice"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "mutated"
    }
]
```

### jungle_after_surface_bamboo_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "bamboo"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "jungle"
    }
]
```

### jungle_after_surface_melon_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "jungle"
    }
]
```

### jungle_after_surface_vines_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "jungle"
    }
]
```

### jungle_edge_surface_trees_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "bamboo"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "jungle"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "edge"
    }
]
```

### jungle_surface_flowers_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "jungle"
    }
]
```

### jungle_surface_tall_grass_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "bamboo"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "jungle"
    }
]
```

### jungle_surface_trees_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "bamboo"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "jungle"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "edge"
    }
]
```

### mega_taiga_first_forest_rock_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "taiga"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mega"
    }
]
```

### mega_taiga_surface_dead_bush_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "taiga"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mega"
    }
]
```

### mega_taiga_surface_mushrooms_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "taiga"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mega"
    }
]
```

### mega_taiga_surface_tall_grass_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "taiga"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mega"
    }
]
```

### mega_taiga_surface_trees_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "taiga"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mega"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "mutated"
    }
]
```

### mesa_before_surface_gold_ore_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mesa"
    }
]
```

### mesa_plateau_stone_surface_trees_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "stone"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mesa"
    }
]
```

### mesa_surface_cactus_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mesa"
    }
]
```

### mesa_surface_dead_bush_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mesa"
    }
]
```

### mesa_surface_reeds_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mesa"
    }
]
```

### mushroom_island_surface_huge_mushroom_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mooshroom_island"
    }
]
```

### mushroom_island_surface_mushrooms_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mooshroom_island"
    }
]
```

### netherwart_forest_trees_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "netherwart_forest"
    }
]
```

### nether_soul_sand_underground_feature_rules.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "soulsand_valley"
            }
        ]
    }
]
```

### nether_sprouts_feature_rules.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "warped_forest"
            }
        ]
    }
]
```

### ocean_surface_kelp_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "ocean"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "warm"
    },
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "!=",
                "value": "frozen"
            },
            {
                "test": "has_biome_tag",
                "operator": "!=",
                "value": "monster"
            }
        ]
    }
]
```

### ocean_surface_seagrass_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "ocean"
    }
]
```

### overworld_surface_clay_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    }
]
```

### overworld_surface_extra_brown_mushroom_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    }
]
```

### overworld_surface_extra_red_mushroom_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    }
]
```

### overworld_surface_flowers_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "jungle"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "flower_forest"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "swamp"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "mesa"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "mooshroom_island"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "plains"
    },
    {
        "any_of": [
            {
                "all_of": [
                    {
                        "test": "has_biome_tag",
                        "operator": "!=",
                        "value": "forest"
                    },
                    {
                        "test": "has_biome_tag",
                        "operator": "!=",
                        "value": "forest_generation"
                    }
                ]
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "extreme_hills"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "taiga"
            }
        ]
    },
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "!=",
                "value": "savanna"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "mutated"
            }
        ]
    }
]
```

### overworld_surface_gravel_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "swamp"
    }
]
```

### overworld_surface_kelp_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "all_of": [
                    {
                        "any_of": [
                            {
                                "test": "has_biome_tag",
                                "operator": "==",
                                "value": "overworld"
                            },
                            {
                                "test": "has_biome_tag",
                                "operator": "==",
                                "value": "overworld_generation"
                            }
                        ]
                    },
                    {
                        "test": "has_biome_tag",
                        "operator": "!=",
                        "value": "ocean"
                    }
                ]
            },
            {
                "all_of": [
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
                                "all_of": [
                                    {
                                        "test": "has_biome_tag",
                                        "operator": "==",
                                        "value": "frozen"
                                    },
                                    {
                                        "test": "has_biome_tag",
                                        "operator": "==",
                                        "value": "monster"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
```

### overworld_surface_pumpkin_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    }
]
```

### overworld_surface_reeds_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    }
]
```

### overworld_surface_sand_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "swamp"
    }
]
```

### overworld_surface_springs_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    }
]
```

### overworld_surface_tall_grass_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "taiga"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "jungle"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "mooshroom_island"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "savanna"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "swamp"
    },
    {
        "any_of": [
            {
                "all_of": [
                    {
                        "test": "has_biome_tag",
                        "operator": "!=",
                        "value": "forest"
                    },
                    {
                        "test": "has_biome_tag",
                        "operator": "!=",
                        "value": "forest_generation"
                    }
                ]
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "extreme_hills"
            }
        ]
    }
]
```

### overworld_underground_andesite_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    }
]
```

### overworld_underground_coal_ore_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    }
]
```

### overworld_underground_diamond_ore_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    }
]
```

### overworld_underground_diorite_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    }
]
```

### overworld_underground_dirt_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    }
]
```

### overworld_underground_extra_gravel_ore_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    }
]
```

### overworld_underground_gold_ore_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    }
]
```

### overworld_underground_granite_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    }
]
```

### overworld_underground_gravel_ore_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    }
]
```

### overworld_underground_iron_ore_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    }
]
```

### overworld_underground_lapis_ore_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    }
]
```

### overworld_underground_redstone_ore_feature.json
```JSON
minecraft:biome_filter: [
    {
        "any_of": [
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            },
            {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld_generation"
            }
        ]
    }
]
```

### plains_first_double_plant_grass_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "plains"
    }
]
```

### plains_first_double_plant_sunflower_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "plains"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mutated"
    }
]
```

### plains_surface_flowers_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "plains"
    }
]
```

### plains_surface_tall_grass_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "plains"
    }
]
```

### plains_surface_trees_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "plains"
    }
]
```

### redwood_taiga_hills_mutated_surface_trees_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "taiga"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mega"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "hills"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mutated"
    }
]
```

### redwood_taiga_mutated_surface_trees_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "taiga"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mega"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "hills"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mutated"
    }
]
```

### river_surface_seagrass_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "river"
    }
]
```

### roofed_forest_first_foliage_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "forest"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "roofed"
    }
]
```

### savanna_first_double_plant_grass_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "savanna"
    }
]
```

### savanna_mutated_surface_tall_grass_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "savanna"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mutated"
    }
]
```

### savanna_mutated_surface_trees_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "savanna"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "mutated"
    }
]
```

### savanna_surface_flowers_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "savanna"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "mutated"
    }
]
```

### savanna_surface_tall_grass_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "savanna"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "mutated"
    }
]
```

### savanna_surface_trees_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "savanna"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "mutated"
    }
]
```

### soulsand_valley_fossil_surface_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "soulsand_valley"
    }
]
```

### swamp_surface_dead_bush_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "swamp"
    }
]
```

### swamp_surface_flowers_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "swamp"
    }
]
```

### swamp_surface_mushrooms_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "swamp"
    }
]
```

### swamp_surface_reeds_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "swamp"
    }
]
```

### swamp_surface_swamp_foliage_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "swamp"
    }
]
```

### swamp_surface_tall_grass_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "swamp"
    }
]
```

### swamp_surface_waterlily_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "swamp"
    }
]
```

### taiga_first_double_plant_fern_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "taiga"
    }
]
```

### taiga_first_sweet_berry_bush_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "taiga"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "mega"
    },
    {
        "test": "has_biome_tag",
        "operator": "!=",
        "value": "cold"
    }
]
```

### taiga_surface_mushrooms_feature.json
```JSON
minecraft:biome_filter: [
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
```

### taiga_surface_tall_grass_feature.json
```JSON
minecraft:biome_filter: [
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
```

### taiga_surface_trees_feature.json
```JSON
minecraft:biome_filter: [
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
```

### twisting_vines_cluster_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "warped_forest"
    }
]
```

### warm_ocean_after_surface_coral_crust_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "warm"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "ocean"
    }
]
```

### warm_ocean_after_surface_coral_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "warm"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "ocean"
    }
]
```

### warm_ocean_after_surface_coral_hang_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "warm"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "ocean"
    }
]
```

### warm_ocean_after_surface_pickle_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "warm"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "ocean"
    }
]
```

### warm_ocean_after_surface_sea_anemone_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "warm"
    },
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "ocean"
    }
]
```

### warped_fungus_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "warped_forest"
    }
]
```

### warped_roots_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "warped_forest"
    }
]
```

### weeping_vines_cluster_feature.json
```JSON
minecraft:biome_filter: [
    {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "crimson_forest"
    }
]
```

# placement_pass
### bamboo_jungle_after_surface_bamboo_feature.json
```JSON
placement_pass: "after_surface_pass"
```

### bamboo_jungle_surface_tall_grass_feature.json
```JSON
placement_pass: "surface_pass"
```

### bamboo_jungle_surface_trees_feature.json
```JSON
placement_pass: "surface_pass"
```

### basalt_columns_feature.json
```JSON
placement_pass: "surface_pass"
```

### basalt_pillar_feature.json
```JSON
placement_pass: "surface_pass"
```

### birch_forest_mutated_surface_trees_feature.json
```JSON
placement_pass: "surface_pass"
```

### birch_forest_surface_trees_feature.json
```JSON
placement_pass: "surface_pass"
```

### cold_taiga_first_sweet_berry_bush_feature.json
```JSON
placement_pass: "first_pass"
```

### crimson_feature.json
```JSON
placement_pass: "surface_pass"
```

### crimson_roots_feature.json
```JSON
placement_pass: "surface_pass"
```

### crimson_roots_soul_sand_valley_feature.json
```JSON
placement_pass: "surface_pass"
```

### delta_feature.json
```JSON
placement_pass: "surface_pass"
```

### desert_after_surface_desert_well_feature.json
```JSON
placement_pass: "after_surface_pass"
```

### desert_or_swamp_after_surface_fossil_feature.json
```JSON
placement_pass: "after_surface_pass"
```

### desert_surface_cactus_feature.json
```JSON
placement_pass: "surface_pass"
```

### desert_surface_dead_bush_feature.json
```JSON
placement_pass: "surface_pass"
```

### desert_surface_reeds_feature.json
```JSON
placement_pass: "surface_pass"
```

### extreme_hills_after_surface_emerald_ore_feature.json
```JSON
placement_pass: "after_surface_pass"
```

### extreme_hills_after_surface_silverfish_feature.json
```JSON
placement_pass: "after_surface_pass"
```

### extreme_hills_plus_trees_surface_trees_feature.json
```JSON
placement_pass: "surface_pass"
```

### flower_forest_first_foliage_feature.json
```JSON
placement_pass: "first_pass"
```

### flower_forest_surface_flowers_feature.json
```JSON
placement_pass: "surface_pass"
```

### flower_forest_surface_trees_feature.json
```JSON
placement_pass: "surface_pass"
```

### forest_first_foliage_feature.json
```JSON
placement_pass: "first_pass"
```

### forest_surface_flowers_feature.json
```JSON
placement_pass: "surface_pass"
```

### forest_surface_trees_feature.json
```JSON
placement_pass: "surface_pass"
```

### frozen_ocean_after_surface_ice_feature.json
```JSON
placement_pass: "after_surface_pass"
```

### huge_crimson_fungus_feature.json
```JSON
placement_pass: "surface_pass"
```

### huge_warped_fungus_feature.json
```JSON
placement_pass: "surface_pass"
```

### ice_plains_spikes_first_ice_patch_feature.json
```JSON
placement_pass: "first_pass"
```

### ice_plains_spikes_first_ice_spike_feature.json
```JSON
placement_pass: "first_pass"
```

### ice_surface_trees_feature.json
```JSON
placement_pass: "surface_pass"
```

### jungle_after_surface_bamboo_feature.json
```JSON
placement_pass: "after_surface_pass"
```

### jungle_after_surface_melon_feature.json
```JSON
placement_pass: "after_surface_pass"
```

### jungle_after_surface_vines_feature.json
```JSON
placement_pass: "after_surface_pass"
```

### jungle_edge_surface_trees_feature.json
```JSON
placement_pass: "surface_pass"
```

### jungle_surface_flowers_feature.json
```JSON
placement_pass: "surface_pass"
```

### jungle_surface_tall_grass_feature.json
```JSON
placement_pass: "surface_pass"
```

### jungle_surface_trees_feature.json
```JSON
placement_pass: "surface_pass"
```

### mega_taiga_first_forest_rock_feature.json
```JSON
placement_pass: "first_pass"
```

### mega_taiga_surface_dead_bush_feature.json
```JSON
placement_pass: "surface_pass"
```

### mega_taiga_surface_mushrooms_feature.json
```JSON
placement_pass: "surface_pass"
```

### mega_taiga_surface_tall_grass_feature.json
```JSON
placement_pass: "surface_pass"
```

### mega_taiga_surface_trees_feature.json
```JSON
placement_pass: "surface_pass"
```

### mesa_before_surface_gold_ore_feature.json
```JSON
placement_pass: "before_surface_pass"
```

### mesa_plateau_stone_surface_trees_feature.json
```JSON
placement_pass: "surface_pass"
```

### mesa_surface_cactus_feature.json
```JSON
placement_pass: "surface_pass"
```

### mesa_surface_dead_bush_feature.json
```JSON
placement_pass: "surface_pass"
```

### mesa_surface_reeds_feature.json
```JSON
placement_pass: "surface_pass"
```

### mushroom_island_surface_huge_mushroom_feature.json
```JSON
placement_pass: "surface_pass"
```

### mushroom_island_surface_mushrooms_feature.json
```JSON
placement_pass: "surface_pass"
```

### netherwart_forest_trees_feature.json
```JSON
placement_pass: "surface_pass"
```

### nether_soul_sand_underground_feature_rules.json
```JSON
placement_pass: "underground_pass"
```

### nether_sprouts_feature_rules.json
```JSON
placement_pass: "surface_pass"
```

### ocean_surface_kelp_feature.json
```JSON
placement_pass: "surface_pass"
```

### ocean_surface_seagrass_feature.json
```JSON
placement_pass: "surface_pass"
```

### overworld_surface_clay_feature.json
```JSON
placement_pass: "surface_pass"
```

### overworld_surface_extra_brown_mushroom_feature.json
```JSON
placement_pass: "surface_pass"
```

### overworld_surface_extra_red_mushroom_feature.json
```JSON
placement_pass: "surface_pass"
```

### overworld_surface_flowers_feature.json
```JSON
placement_pass: "surface_pass"
```

### overworld_surface_gravel_feature.json
```JSON
placement_pass: "surface_pass"
```

### overworld_surface_kelp_feature.json
```JSON
placement_pass: "surface_pass"
```

### overworld_surface_pumpkin_feature.json
```JSON
placement_pass: "surface_pass"
```

### overworld_surface_reeds_feature.json
```JSON
placement_pass: "surface_pass"
```

### overworld_surface_sand_feature.json
```JSON
placement_pass: "surface_pass"
```

### overworld_surface_springs_feature.json
```JSON
placement_pass: "surface_pass"
```

### overworld_surface_tall_grass_feature.json
```JSON
placement_pass: "surface_pass"
```

### overworld_underground_andesite_feature.json
```JSON
placement_pass: "underground_pass"
```

### overworld_underground_coal_ore_feature.json
```JSON
placement_pass: "underground_pass"
```

### overworld_underground_diamond_ore_feature.json
```JSON
placement_pass: "underground_pass"
```

### overworld_underground_diorite_feature.json
```JSON
placement_pass: "underground_pass"
```

### overworld_underground_dirt_feature.json
```JSON
placement_pass: "underground_pass"
```

### overworld_underground_extra_gravel_ore_feature.json
```JSON
placement_pass: "underground_pass"
```

### overworld_underground_gold_ore_feature.json
```JSON
placement_pass: "underground_pass"
```

### overworld_underground_granite_feature.json
```JSON
placement_pass: "underground_pass"
```

### overworld_underground_gravel_ore_feature.json
```JSON
placement_pass: "underground_pass"
```

### overworld_underground_iron_ore_feature.json
```JSON
placement_pass: "underground_pass"
```

### overworld_underground_lapis_ore_feature.json
```JSON
placement_pass: "underground_pass"
```

### overworld_underground_redstone_ore_feature.json
```JSON
placement_pass: "underground_pass"
```

### plains_first_double_plant_grass_feature.json
```JSON
placement_pass: "first_pass"
```

### plains_first_double_plant_sunflower_feature.json
```JSON
placement_pass: "first_pass"
```

### plains_surface_flowers_feature.json
```JSON
placement_pass: "surface_pass"
```

### plains_surface_tall_grass_feature.json
```JSON
placement_pass: "surface_pass"
```

### plains_surface_trees_feature.json
```JSON
placement_pass: "surface_pass"
```

### redwood_taiga_hills_mutated_surface_trees_feature.json
```JSON
placement_pass: "surface_pass"
```

### redwood_taiga_mutated_surface_trees_feature.json
```JSON
placement_pass: "surface_pass"
```

### river_surface_seagrass_feature.json
```JSON
placement_pass: "surface_pass"
```

### roofed_forest_first_foliage_feature.json
```JSON
placement_pass: "first_pass"
```

### savanna_first_double_plant_grass_feature.json
```JSON
placement_pass: "first_pass"
```

### savanna_mutated_surface_tall_grass_feature.json
```JSON
placement_pass: "surface_pass"
```

### savanna_mutated_surface_trees_feature.json
```JSON
placement_pass: "surface_pass"
```

### savanna_surface_flowers_feature.json
```JSON
placement_pass: "surface_pass"
```

### savanna_surface_tall_grass_feature.json
```JSON
placement_pass: "surface_pass"
```

### savanna_surface_trees_feature.json
```JSON
placement_pass: "surface_pass"
```

### soulsand_valley_fossil_surface_feature.json
```JSON
placement_pass: "surface_pass"
```

### swamp_surface_dead_bush_feature.json
```JSON
placement_pass: "surface_pass"
```

### swamp_surface_flowers_feature.json
```JSON
placement_pass: "surface_pass"
```

### swamp_surface_mushrooms_feature.json
```JSON
placement_pass: "surface_pass"
```

### swamp_surface_reeds_feature.json
```JSON
placement_pass: "surface_pass"
```

### swamp_surface_swamp_foliage_feature.json
```JSON
placement_pass: "surface_pass"
```

### swamp_surface_tall_grass_feature.json
```JSON
placement_pass: "surface_pass"
```

### swamp_surface_waterlily_feature.json
```JSON
placement_pass: "surface_pass"
```

### taiga_first_double_plant_fern_feature.json
```JSON
placement_pass: "first_pass"
```

### taiga_first_sweet_berry_bush_feature.json
```JSON
placement_pass: "first_pass"
```

### taiga_surface_mushrooms_feature.json
```JSON
placement_pass: "surface_pass"
```

### taiga_surface_tall_grass_feature.json
```JSON
placement_pass: "surface_pass"
```

### taiga_surface_trees_feature.json
```JSON
placement_pass: "surface_pass"
```

### twisting_vines_cluster_feature.json
```JSON
placement_pass: "surface_pass"
```

### warm_ocean_after_surface_coral_crust_feature.json
```JSON
placement_pass: "after_surface_pass"
```

### warm_ocean_after_surface_coral_feature.json
```JSON
placement_pass: "after_surface_pass"
```

### warm_ocean_after_surface_coral_hang_feature.json
```JSON
placement_pass: "after_surface_pass"
```

### warm_ocean_after_surface_pickle_feature.json
```JSON
placement_pass: "after_surface_pass"
```

### warm_ocean_after_surface_sea_anemone_feature.json
```JSON
placement_pass: "after_surface_pass"
```

### warped_fungus_feature.json
```JSON
placement_pass: "surface_pass"
```

### warped_roots_feature.json
```JSON
placement_pass: "surface_pass"
```

### weeping_vines_cluster_feature.json
```JSON
placement_pass: "surface_pass"
```


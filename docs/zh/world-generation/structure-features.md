---
title: 生成自定义结构
description: 了解如何添加将结构放置到世界中的世界生成特征。
category: 教程
mentions:
    - DerpMcaddon
    - SirLich
    - Supernova3695
---

结构模板特征是最基本的特征之一，将导出的 `.mcstructure` 文件放置到世界中。

本教程将教你如何制作：

-   地表结构
-   地下结构
-   浮空结构
-   水下结构
-   水面结构

:::warning
从 1.21.130 开始，安卓设备无法导出结构文件。
:::
:::tip
对于与 `locate structure` 命令兼容的更复杂结构，请使用[jigsaw结构](/world-generation/jigsaw-structures)。
:::

确保将你的 `.mcstructure` 文件放在 `BP/structures` 文件夹中！
第一个子文件夹用作结构的命名空间，这意味着 `BP/structures/wiki/house.mcstructure` 的结构名称将是 `wiki:house`。

## 地表结构

### 特征文件

<CodeHeader>BP/features/house_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:structure_template_feature": {
        "description": {
            "identifier": "wiki:house_feature"
        },
        "structure_name": "wiki:house",
        "adjustment_radius": 4,
        "facing_direction": "random",
        "constraints": {
            "grounded": {},
            "unburied": {},
            "block_intersection": {
                "block_allowlist": [
                    "minecraft:air" // 该结构只能替换空气
                ]
            }
        }
    }
}
```

### 特征规则

<CodeHeader>BP/feature_rules/plains_house_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:feature_rules": {
        "description": {
            "identifier": "wiki:plains_house_feature",
            "places_feature": "wiki:house_feature"
        },
        "conditions": {
            "placement_pass": "first_pass",
            "minecraft:biome_filter": {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "plains"
            }
        },
        "distribution": {
            "iterations": 1,
            "x": {
                "extent": [0, 16],
                "distribution": "uniform"
            },
            "y": "q.heightmap(v.worldx, v.worldz)", // 在列的最高方块上生成特征
            "z": {
                "extent": [0, 16],
                "distribution": "uniform"
            },
            "scatter_chance": {
                "numerator": 1,
                "denominator": 25
            }
        }
    }
}
```

![](house.png)

## 地下结构

### 特征文件

<CodeHeader>BP/features/bunker_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:structure_template_feature": {
        "description": {
            "identifier": "wiki:bunker_feature"
        },
        "structure_name": "wiki:bunker",
        "adjustment_radius": 4,
        "facing_direction": "random",
        "constraints": {
            "block_intersection": {
                "block_allowlist": [
                    "minecraft:air", // 使该特征只替换空气和石头
                    "minecraft:stone"
                ]
            }
        }
    }
}
```

### 特征规则

<CodeHeader>BP/feature_rules/overworld_bunker_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:feature_rules": {
        "description": {
            "identifier": "wiki:overworld_bunker_feature",
            "places_feature": "wiki:bunker_feature"
        },
        "conditions": {
            "placement_pass": "first_pass",
            "minecraft:biome_filter": {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            }
        },
        "distribution": {
            "iterations": 1,
            "x": {
                "extent": [0, 16],
                "distribution": "uniform"
            },
            "y": {
                "extent": [
                    11,
                    50 // 使结构在y11到y50之间生成
                ],
                "distribution": "uniform"
            },
            "z": {
                "extent": [0, 16],
                "distribution": "uniform"
            },
            "scatter_chance": {
                "numerator": 1,
                "denominator": 15
            }
        }
    }
}
```

![](bunker.png)

## 浮空特征

### 特征文件

<CodeHeader>BP/features/balloon_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:structure_template_feature": {
        "description": {
            "identifier": "wiki:balloon_feature"
        },
        "structure_name": "wiki:balloon",
        "adjustment_radius": 4,
        "facing_direction": "random",
        "constraints": {
            "block_intersection": {
                "block_allowlist": [
                    "minecraft:air" // 使该结构只替换空气
                ]
            }
        }
    }
}
```

### 特征规则

<CodeHeader>BP/feature_rules/overworld_balloon_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:feature_rules": {
        "description": {
            "identifier": "wiki:overworld_baloon_feature",
            "places_feature": "wiki:balloon_feature"
        },
        "conditions": {
            "placement_pass": "first_pass",
            "minecraft:biome_filter": {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "overworld"
            }
        },
        "distribution": {
            "iterations": 1,
            "x": {
                "extent": [0, 16],
                "distribution": "uniform"
            },
            "y": {
                "extent": [
                    100, // 使结构从y100生成到y200
                    200
                ],
                "distribution": "uniform"
            },
            "z": {
                "extent": [0, 16],
                "distribution": "uniform"
            },
            "scatter_chance": {
                "numerator": 1,
                "denominator": 25
            }
        }
    }
}
```

![](balloon.png)

## 水下结构

:::tip
对于水下结构，请确保为结构添加水方块，因为 Minecraft 不会自动为其添加水方块！
:::

### 特征文件

<CodeHeader>BP/features/aqua_temple_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:structure_template_feature": {
        "description": {
            "identifier": "wiki:aqua_temple_feature"
        },
        "structure_name": "wiki:aqua_temple",
        "adjustment_radius": 4,
        "facing_direction": "random",
        "constraints": {
            "block_intersection": {
                "block_allowlist": [
                    "minecraft:water" // 使该结构只替换水
                ]
            }
        }
    }
}
```

### 特征规则

<CodeHeader>BP/feature_rules/ocean_aqua_temple_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:feature_rules": {
        "description": {
            "identifier": "wiki:ocean_aqua_temple_feature",
            "places_feature": "wiki:aqua_temple_feature"
        },
        "conditions": {
            "placement_pass": "first_pass",
            "minecraft:biome_filter": {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "ocean"
            }
        },
        "distribution": {
            "iterations": 1,
            "x": {
                "extent": [0, 16],
                "distribution": "uniform"
            },
            "y": "q.above_top_solid(v.worldx, v.worldz)", // 将特征放置在列的最高固体方块顶部，因此不会将其放置在水面上
            "z": {
                "extent": [0, 16],
                "distribution": "uniform"
            },
            "scatter_chance": {
                "numerator": 1,
                "denominator": 25
            }
        }
    }
}
```

![](aqua_temple.png)

## 水面结构

### 特征文件

<CodeHeader>BP/features/raft_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:structure_template_feature": {
        "description": {
            "identifier": "wiki:raft_feature"
        },
        "structure_name": "wiki:raft",
        "adjustment_radius": 4,
        "facing_direction": "random",
        "constraints": {
            "block_intersection": {
                "block_allowlist": [
                    "minecraft:water", // 使该结构只替换空气和水
                    "minecraft:air"
                ]
            }
        }
    }
}
```

### 特征规则

<CodeHeader>BP/feature_rules/ocean_raft_feature.json</CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:feature_rules": {
        "description": {
            "identifier": "wiki:ocean_raft_feature",
            "places_feature": "wiki:raft_feature"
        },
        "conditions": {
            "placement_pass": "first_pass",
            "minecraft:biome_filter": {
                "test": "has_biome_tag",
                "operator": "==",
                "value": "ocean"
            }
        },
        "distribution": {
            "iterations": 1,
            "x": {
                "extent": [0, 16],
                "distribution": "uniform"
            },
            "y": 62, // 使特征仅在y62生成，这是Minecraft的水位
            "z": {
                "extent": [0, 16],
                "distribution": "uniform"
            },
            "scatter_chance": {
                "numerator": 1,
                "denominator": 25
            }
        }
    }
}
```

![](raft.png)
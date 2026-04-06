---
title: 特征类型
category: 通用
mentions:
    - SirLich
    - MedicalJewel105
    - Lufurrius
    - TheItsNameless
    - QuazChick
description: 世界生成特征类型解释。
---

_最后更新于 1.17.10_

:::warning
一些设计用于引用外部文档的链接目前无法工作，稍后将更新以指向正确的资源。
:::

稍后可能会为此处提供的许多特征类型提供截图和其他资源。

## 内容特征

内容特征是特征系统中负责定义方块放置的基本特征类型。它们在排列或组合方面不提供任何内容。相反，它们定义方块的基本排列，通常使用[代理特征](#代理特征)进行组合或定位。

### 单方块特征

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",

    "minecraft:single_block_feature": {
        "description": {
            "identifier": "wiki:pier_planks"
        },

        "places_block": "minecraft:planks",

        "enforce_placement_rules": true,
        "enforce_survivability_rules": true,
        "may_replace": ["minecraft:water"],
        "may_attach_to": {
            "top": "minecraft:air",
            "sides": ["minecraft:planks", "minecraft:water"]
        }
    }
}
```

**单方块特征**在世界中方放置一个单独的方块。单方块特征通常本身无用；它们的真正力量在于与[代理特征](#代理特征)结合来构建内容。

**目标方块**，即要放置的方块，由 `"places_block"` 属性指定。在定义中目前无法实现变化；必须使用[加权随机特征](#加权随机特征)对额外的单方块特征进行加权。

#### 条件

可以指定**条件**来限制放置成功。如果任何条件失败，方块将不会被放置。

:::warning
为了放置成功，单方块特征被认为在替换自身时失败。这对于[聚合特征](#聚合特征)和其他特征是一个重要的区别。当只考虑放置限制成功时，请使用[搜索特征](#搜索特征)代理单方块特征。
:::

##### 固有方块条件

单方块特征可以允许由于方块的固有条件而无法在游戏中放置的方块放置。

当为真时，所需的 `"enforce_placement_rules"` 布尔值确保方块的固有放置检查必须成功才能放置方块；设置为false将忽略此检查。例如，种子通常只能放置在耕地上，但禁用此检查可以允许它们在任何地方生成。

此外，所需的 "enforce_survivability_rules" 布尔值属性将切换方块的生存性检查是否成功。如果为false，方块的生存性条件将被忽略。一个原版的生存性例子是活着的珊瑚块需要相邻的水。

:::tip注意
即使在世界生成时忽略了方块的生存性检查，并不意味着它在游戏过程中会保持其无效状态。方块更新将纠正无效的方块生存性。
:::

##### 替换条件

<CodeHeader></CodeHeader>

```json
"may_replace": [
	"minecraft:air",
	"minecraft:leaves",
	"minecraft:leaves2"
]
```

单方块特征可以选择指定一个**替换列表**通过 `"may_replace"` 数组来限制目标方块可以替换的方块集。如果单方块特征的[输入位置](#)处的方块不在此列表中，放置将失败。

:::warning
与[附加条件](#附加条件)不同，`"may_replace"` 必须是一个数组。它不能声明为直接方块引用。
:::

##### 附加条件

<CodeHeader></CodeHeader>

```json
"may_attach_to": {
	"top": "minecraft:air",
	"sides": [
		"minecraft:planks",
		"minecraft:water"
	]
}
```

**附加规格**，通过可选的 `"may_attach_to"` 属性给出，限制方块邻接。每个可附加侧都有一个属性：

-   `"top"`
-   `"bottom"`
-   `"north"`
-   `"south"`
-   `"east"`
-   `"west"`

每个属性接受单个直接方块引用或此类引用的数组：

<CodeHeader></CodeHeader>

```json
"bottom": {
	"name": "minecraft:stone",

	"states": {
		"stone_type": "andesite"
	}
}
```

<CodeHeader></CodeHeader>

```json
"top": [
	"minecraft:netherrack",
	"minecraft:soul_sand"
]
```

`"sides"` 属性可用作匹配 `"north"`、`"west"`、`"east"` 和 `"south"` 的总称。最后，`"all"` 属性匹配所有6个面。所有8个属性都是可选的，但至少应指定一个。

对于沿侧面（`"north"`、`"south"`、`"east"`、`"west"`）的附加，还有2个额外的可选属性可用于精细控制。

`"min_sides_must_attach"` 设置提供的**侧面**属性将产生的成功最小数量，这将导致侧面附加被标记为成功。因此，如果此属性设置为 `4`，则所有四个侧面必须匹配。如果设置为 `2` 且只有1个侧面匹配，方块放置将失败。无论 `"min_sides_must_attach"` 如何，`"top"` 和 `"bottom"` 属性必须始终满足。

`"auto_rotate"` 导致侧面定义被解释为相对关联而非严格方向。例如，如果一个方块应该在一维中被两个其他方块横向挤压，但方向不重要，启用自动旋转并指定相对侧面将允许任一方向工作。

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",

    "minecraft:single_block_feature": {
        "description": {
            "identifier": "wiki:force_conduit_block"
        },

        "places_block": "wiki:force_conduit",

        "enforce_placement_rules": true,
        "enforce_survivability_rules": true,
        "may_replace": ["minecraft:air"],
        "may_attach_to": {
            "north": "minecraft:glass",
            "south": "minecraft:glass",

            "auto_rotate": true
        }
    }
}
```

具体来说，使用上述代码，力量导管方块将夹在相对的横向侧面的玻璃之间——无论方向如何。

### 矿石特征

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",

    "minecraft:ore_feature": {
        "description": {
            "identifier": "wiki:starlite_ore_cluster"
        },

        "count": 4,
        "replace_rules": [
            {
                "places_block": "infinitum:exposed_pylon",
                "may_replace": [
                    "minecraft:air"
                ]
            },
            {
                "places_block": "infinitum:submerged_pylon",
                "may_replace": [
                    "minecraft:water"
                ]
            }
        ]
    }
}
```

**矿石特征**在目标位置周围放置方块群。矿石特征放置的方块通过[替换规则](#替换规则)变化。只有矿石特征中的**方块计数**是全局的，由 `"count"` 属性控制。

:::tip注意
无法控制群的形状；要实现这一点，请使用具有[自定义分布系统](#)的[散布特征](#散布特征)。
:::

#### 替换规则

<CodeHeader></CodeHeader>

```json
"replace_rules": [
	{
		"places_block": "infinitum:exposed_pylon",
		"may_replace": [
			"minecraft:air"
		]
	},
	{
		"places_block": "infinitum:submerged_pylon",
		"may_replace": [
			"minecraft:water"
		]
	}
]
```

在矿石特征中，**替换规则**将目标方块绑定到限制目标放置的替换列表；这些规则用 `"replace_rules"` 给出。**目标方块**是替换规则放置的方块，由所需的 `"places_block"` 属性提供；**替换列表**（通过 `"may_replace"`）是仅允许替换特定方块的可选数组。群中给定位置选择的方块将是第一个匹配规则的目标方块。如果未提供替换列表，该规则将在其他规则中始终在其位置成功，所有未来规则将被忽略。

### 结构模板特征

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:structure_template_feature": {
        "description": {
            "identifier": "wiki:blackmoor_castle_feature"
        },

        "structure_name": "wiki:blackmoor_castle",

        "facing_direction": "random",
        "constraints": {
            "block_intersection": {
                "block_allowlist": [
                    "minecraft:air",
                    "minecraft:stone",
                    "minecraft:dirt",
                    "minecraft:grass"
                ]
            },
            "unburied": {}
        },
        "adjustment_radius": 4
    }
}
```

**结构模板特征**通过引用保存的结构文件生成结构。这些特征以便利换取力量和灵活性。

:::warning
与数据驱动的特征不同，结构特征中的方块在水中放置时**不会**自动添加水方块。
:::

**目标结构**使用 `"structure_name"` 字符串属性放置。这个字符串遵循独特的命名系统从行为包中选择 `.mcstructure` 文件；它采用 `namespace:path` 的形式。结构文件必须放置在顶级 `structures` 目录；从此处的任何文件夹层次结构都是允许的，但不是必需的。如果结构文件直接放置在 `structures` 目录中，则使用默认命名空间 `mystructure`。否则，如果放置在 `structures` 内的目录中，则该目录名称用作命名空间。如果此目录内存在任何嵌套，它将反映在路径中。最后，文件扩展名（`.mcstructure`）被省略。

例如：

| 结构文件位置                                     | 关联的 `"structure_name"`         |
| :---------------------------------------------------------- | :------------------------------------ |
| `/structures/well.mcstructure`                              | `"mystructure:well"`                  |
| `/structures/farmstead/silo.mcstructure`                    | `"farmstead:silo"`                    |
| `/structures/campsites/taiga/rustic/tents/wool.mcstructure` | `"campsites:taiga/rustic/tents/wool"` |

:::warning
由于[特征系统中的约束](#)，大型结构可能需要预先切片成较小的结构并组合在一起。
:::

#### 旋转

<CodeHeader></CodeHeader>

```json
"facing_direction": "south"
```

**结构旋转**使用 `"facing_direction"` 属性执行，它接受四个横向方向：`"north"`、`"south"`、`"east"` 和 `"west"`，以及一个额外的 `"random"` 属性在每个实例中随机切换其中之一。南是"默认"方向；结构使用此方向向正_x_和_z_方向延伸。

:::warning
对于非南方向的结构，并非所有方块状态都会更新以适应旋转，导致某些可旋转方块（如藤蔓）悬挂在无效位置。
:::

旋转从俯视角度顺时针执行。不幸的是，旋转是围绕[结构原点](#)而非中心进行的，因此由于[特征限制](#)，大型结构可能在随机旋转中被切断。但是，使用固定旋转将以可靠（尽管不方便）的方式定向。所有旋转从[特征原点](#)开始包含，并按以下方向生成：

| 旋转  | _x_ 投影 | _z_ 投影 | 从上方顺时针旋转 |
| :-------- | :------------- | :------------- | :---------------------------- |
| `"east"`  | 正数       | 负数       | 270°                          |
| `"south"` | 正数       | 正数       | 0°                            |
| `"west"`  | 负数       | 正数       | 90°                           |
| `"north"` | 负数       | 负数       | 180°                          |

因此，如果一个 7 × 6 的特征从原点 (64, 64) 生成，向东旋转将在侧向区域从 (64, 58) 到 (70, 65) 占据。

:::warning
由于旋转的处理方式，结构特征通常需要由[加权随机特征](#加权随机特征)和[散布代理](#散布特征)代理，这些代理会偏移位置。
:::

#### 约束

<CodeHeader></CodeHeader>

```json
"constraints": {
	"block_intersection": {
		"block_whitelist": [
			"minecraft:sand",
			"minecraft:sandstone",
			"minecraft:stone"
		]
	},
	"unburied": {},
	"grounded": {}
}
```

结构特征可以使用所需的 `"constraints"` 属性强制执行**约束**来限制方块交叉、调整放置位置以及使用空气清除特征上方的空间。虽然属性及其对象 (`{}`) 是必需的，但所有子属性都是可选的。

##### 方块交叉

<CodeHeader></CodeHeader>

```json
"block_intersection": {
	"block_whitelist": [
		"minecraft:end_stone"
	]
},
```

结构可以替换的方块集由**方块白名单**给出，使用 `"block_whitelist"`。如果结构尝试放置的位置内即使有一个方块不在白名单中，结构将不会放置在该位置。如果未提供方块交叉，结构可以替换所有方块。

:::tip注意
奇怪的是，`"block_whitelist"` 属性也可以用 `"block_allowlist"` 给出。两者功能相同。
:::

##### 地面附着

<CodeHeader></CodeHeader>

```json
"grounded": {}
```

可选的 `"grounded"` 组件确保结构的底部不会悬空到开放空间——空气、水或熔岩。结构底部层的所有非结构空方块、非空气方块都被考虑；如果即使这样一个方块下面有空气、水或熔岩，生成将失败。

##### 顶部净空

<CodeHeader></CodeHeader>

```json
"unburied": {}
```

`"unburied"` 组件确保结构的顶部暴露在空气中以便生成成功。只考虑结构顶层上的非结构空方块、非空气方块，并且所有必须在上面暴露于空气才能成功生成结构。

:::tip注意
与[地面附着](#地面附着)不同，暴露于水**不被**考虑。
:::

#### 放置调整

<CodeHeader></CodeHeader>

```json
"adjustment_radius": 4
```

为了适应可能严格的[约束](#约束)，可以使用可选的 `"adjustment_radius"` 属性；它接受从 `0`（默认值）到 `16` 的值。在放置期间，Minecraft 将从输入位置开始并在横向方向上向外径向搜索直到此属性指定的方块数；不尝试垂直调整。每个相应体积都将检查有效性；[方块交叉](#方块交叉)、[地面附着](#地面附着)和[顶部净空](#顶部净空)都会被考虑。如果存在，第一个成功的位置将被使用。

:::tip
如果应该使用垂直调整，请使用[搜索特征](#搜索特征)代理结构特征。
:::

### 生长植物特征

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:growing_plant_feature": {
        "description": {
            "identifier": "wiki:bulbous_cerulon"
        },

        "body_blocks": [
            ["wiki:bulbous_cerulon_stem", 1],
            ["wiki:bulbous_cerulon_spiked_stem", 1]
        ],
        "head_blocks": [
            ["wiki:bulbous_cerulon_bulb", 1],
            ["wiki:bulbous_cerulon_bulb_exposed", 1]
        ],
        "age": { "range_min": 1, "range_max": 15 },

        "growth_direction": "up",
        "height_distribution": [[{ "range_min": 4, "range_max": 12 }, 1]]
    }
}
```

**生长植物特征**放置由头部方块结尾的方块柱。两者都可以按方块随机化以进行精细的自定义。

:::tip
对于高级柱生成，请使用具有[固定网格分布](#网格分布)的[散布特征](#散布特征)。
:::

#### 柱方块

<CodeHeader></CodeHeader>

```json
"body_blocks" : [
	["arctica:ice", 4],
	["arctica:ice_crystallized", 1]
],
"head_blocks" : [
	["arctica:growing_ice", 1]
],
"age": 3
```

生长植物分为**体方块**，它们构成特征的大部分，以及**头方块**，它们只是作为植物一部分生成的最后一个方块。两者都给出为**方块条目**的数组。每个方块条目是一个将方块引用绑定到整数[权重](#)的数组：

<CodeHeader></CodeHeader>

```json
["crestfallen:fungi_stem", 2]
```

每个方块独立为体或头选择。使用生长植物特征无法使所有体方块相同。

可选的 `"age"` 属性存在来设置头方块的年龄方块状态。它接受两种形式，整数和范围对象。当使用范围对象时，年龄在特征的每个实例中在两个提供的整数边界之间统一随机选择。

整数：

<CodeHeader></CodeHeader>

```json
"age": 12
```

范围对象：

<CodeHeader></CodeHeader>

```json
"age": {"range_min": 4, "range_max": 8}
```

:::warning
年龄配置目前仅适用于洞穴藤蔓。
:::

#### 柱生成

<CodeHeader></CodeHeader>

```json
"growth_direction": "down",
"height_distribution":  [
	[{"range_min": 8, "range_max": 12}, 4],
	[{"range_min": 4, "range_max": 8}, 2],
	[2, 1]
],
"allow_water": true
```

列从特征原点在由必需的 `"growth_direction"` 属性指定的垂直方向生成，向上或向下。

生长植物特征的可能最大长度由 `"height_distribution"` 数组给出。与[之前声明的方块](#列方块)一样，高度分布中的每个条目是一个将高度绑定到权重的**高度条目**。高度可以给定为固定整数或[范围对象](#列方块)。

作为整数：

<CodeHeader></CodeHeader>

```json
[6, 3]
```

作为范围对象：

<CodeHeader></CodeHeader>

```json
[{ "range_min": 2, "range_max": 8 }, 1]
```

根据[权重](#)选择高度分布中的一个条目，如果提供了范围，则在给定的限制之间均匀随机选择 inclusively。

生长植物特征从[输入位置](#)开始并根据 `"growth_direction"` 向上或向下进行。默认情况下，只沿生成的列替换空气。如果不是在空气中开始，列生成将在正确方向上的第一个可用空气块开始。由于路径中的非空气块而错过的方块机会不会重新尝试。这意味着如果特征原点必须搜索两个非空气块才能到达空气，高度将减少2。

到达（或开始于）空气后，列生成体方块直到到达非空气块，此时列生成永久停止。当穿越从特征原点计算确定的高度时，列生成当然也会停止。无论如何，列中的最后一个方块将是头方块，即使列最终只有一个方块的高度。

为真时，可选的 `"allow_water"` 布尔值允许_第一个可用的替换_是水而不是空气。如果此属性为 `true` 且第一个水块上方没有连接到空气，则仅为整个列生成单个头方块；否则，列生成照常继续。

### 树特征

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:tree_feature": {
        "description": {
            "identifier": "wiki:grand_oak"
        },

        "base_block": ["minecraft:dirt", "minecraft:coarse_dirt"],
        "base_cluster": {
            "num_clusters": 4,
            "cluster_radius": 3,
            "may_replace": ["minecraft:air"]
        },

        "may_replace": ["minecraft:air"],

        "fancy_trunk": {
            "trunk_block": "minecraft:log",

            "trunk_height": {
                "base": 24,
                "variance": 9,
                "scale": 1
            },
            "trunk_width": 3,
            "width_scale": 2,

            "foliage_altitude_factor": 0.5,
            "branches": {
                "slope": 0.33,
                "density": 0.25,
                "min_altitude_factor": 0
            }
        },

        "fancy_canopy": {
            "height": 3,
            "radius": 4,
            "leaf_block": "minecraft:leaves"
        }
    }
}
```

**树特征**生成树状形状。树特征允许比任何其他特征类型更多的自定义，包括：

-   设置木头和树叶方块
-   添加树面装饰
-   限制基础和交叉方块
-   自定义树枝频率和角度

树特征由许多子属性组成，以反映原版游戏中发现的许多树形变化。通常，这些属性分为[设置](#设置属性)、[树干](#树干属性)和[树冠](#树冠属性)属性。

#### 设置属性

<CodeHeader></CodeHeader>

```json
"base_block": [
	"minecraft:dirt",
	"minecraft:grass"
],
"base_cluster": {
	"may_replace": [

	],
	"num_clusers": 2,
	"cluster_radius": 3
},

"may_grow_on": [

],
"may_replace": [

],
"may_grow_through": [

]
```

使用**设置属性**指定树的基础和交叉方块。

#### 树干属性

**树干属性**建立树干和树枝。

##### 树干

<CodeHeader></CodeHeader>

```json

```

##### 金合欢树干

<CodeHeader></CodeHeader>

```json

```

##### 华丽树干

<CodeHeader></CodeHeader>

```json

```

##### 巨型树干

<CodeHeader></CodeHeader>

```json

```

##### 倒树干

<CodeHeader></CodeHeader>

```json

```

#### 树冠属性

树冠使用**树冠属性**构建。

##### 树冠

<CodeHeader></CodeHeader>

```json

```

##### 华丽树冠

<CodeHeader></CodeHeader>

```json

```

##### 巨型树冠

<CodeHeader></CodeHeader>

```json

```

##### 云杉树冠

<CodeHeader></CodeHeader>

```json

```

##### 松树冠

<CodeHeader></CodeHeader>

```json

```

##### 巨型松树冠

<CodeHeader></CodeHeader>

```json

```

##### 金合欢树冠

<CodeHeader></CodeHeader>

```json

```

##### 树冠树冠

<CodeHeader></CodeHeader>

```json

```

##### 随机散布树冠

<CodeHeader></CodeHeader>

```json

```

### 多面特征

:::warning
多面特征目前存在bug，不应使用。最多只放置2次迭代——无论散布概率如何。[散布特征](#散布特征)是可行的替代方案。
:::

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:multiface_feature": {
        "description": {
            "identifier": "wiki:decay_spread"
        },

        "places_block": "wiki:decay",

        "search_range": 8,
        "chance_of_spreading": 0.5,

        "can_place_on_ceiling": false,
        "can_place_on_floor": false,
        "can_place_on_wall": true,
        "can_place_on": ["minecraft:stone", "minecraft:deepslate", "minecraft:tuff"]
    }
}
```

多面特征根据序列前一个元素的成功随机在表面上放置方块序列。**表面**定义为空气或水与任何其他方块之间。

#### 散布机制

<CodeHeader></CodeHeader>

```json
"search_range": 4,
"chance_of_spreading": 0.75
```

多面特征首先尝试在多面特征的[输入位置](#)放置**目标方块**（通过 `"places_block"` 属性）。对于每次后续尝试，都会根据**散布概率**进行掷值。散布概率由 `"chance_of_spreading"` 浮点属性给出；它范围从 `0`（永远不会成功）到 `1`（始终成功）。如果成功，序列中的下一个方块将随机放置在以输入位置为中心、边长等于 `"search_range"` 值的一半的立方体内。序列将继续直到一个方块放置失败。搜索范围可以在1到64之间。

#### 放置限制

<CodeHeader></CodeHeader>

```json
"can_place_on_ceiling": true,
"can_place_on_floor": false,
"can_place_on_wall": true,
"can_place_on": [
	"minecraft:log",
	"minecraft:log2",
	"minecraft:leaves"
]
```

多面特征使用**放置限制**来限制方块附加。包含第一次在内的任何迭代，如果放置检查失败，序列将终止。3个必需的布尔属性控制目标可以放置在哪里：

-   "can_place_on_floor"
-   "can_place_on_ceiling"
-   "can_place_on_wall"

当这些属性为真时，它们相应的表面符合附加条件。当然，至少一个属性必须为真，否则序列永远不会开始。

:::tip注意
这些属性_不_决定方块状态，只决定附加。多面方块（如火把）不会自动定向到适当的 face。此外，如果目标方块支持同时附加到多个面，并将附加到这些属性白名单中的面，它也可能自动附加到_非_白名单的面。
:::

可以通过 `"can_place_on"` 数组属性提供目标可以附加的方块的可选白名单。省略此属性默认为允许所有方块附加。

## 代理特征

代理特征分组、排列或控制特征，包括其他代理特征。代理特征本身无法对世界生成产生直接影响。

因此，所有代理特征必须指向一个或多个**目标特征**：由代理特征放置、重排或选择的特征。目标特征表示为对预期特征标识符的字符串引用。

### 散布特征

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",

    "minecraft:scatter_feature": {
        "description": {
            "identifier": "wiki:flower_patch"
        },

        "places_feature": "wiki:flowers",

        "scatter_chance": {
            "numerator": 2,
            "denominator": 3
        },
        "iterations": "v.flower_patch.size = math.random_integer(6, 14); return math.random_integer(math.pow(v.flower_patch.size, 2) / 4, math.pow(v.flower_patch.size, 2) / 3);",

        "project_input_to_floor": true,
        "x": {
            "distribution": "gaussian",
            "extent": [0, "v.flower_patch.size"]
        },
        "z": {
            "distribution": "gaussian",
            "extent": [0, "v.flower_patch.size"]
        },
        "y": 0
    }
}
```

**散布特征**是可用中最灵活和有用的特征类型。散布特征可以：

-   在[chunk的特征域](#)内任意次数分发或重新定位特征
-   作为条件门以有条件地启用要放置的特征
-   在当前[特征上下文](#)中执行 Molang

散布特征每次迭代尝试放置一个[目标特征](#代理特征)：

<CodeHeader></CodeHeader>

```json
"places_feature": "lostlands:shimmerfields_spire"
```

目标实例的放置位置、时间和方式取决于[生成潜力](#生成潜力)、[分布](#分布)和[评估顺序](#评估顺序)

#### 生成潜力

<CodeHeader></CodeHeader>

```json
"scatter_chance": 25,
"iterations": 12
```

散布特征将使用 `"scatter_chance"` 和 `"iterations"` 属性确定其目标的放置尝试次数。

**散布概率**表示散布特征成功的可能性。它可以表示为…

数值文字：

<CodeHeader></CodeHeader>

```json
"scatter_chance": 12.5
```

:::warning
数值文字形式针对100而非1。因此，`50` 的散布概率有一半的成功机会。
:::

Molang 表达式：

<CodeHeader></CodeHeader>

```json
"scatter_chance": "1 / 8"
```

分数对象：

<CodeHeader></CodeHeader>

```json
"scatter_chance": {
	"numerator": 1,
	"denominator": 8
}
```

这3个例子都有12.5%的成功机会。使用最适合你情况的形式。如果省略散布概率，默认为100%的机会尝试放置其目标。

**迭代**是散布特征尝试放置其目标的次数。如果散布特征的实例会成功（换句话说，如果其散布概率检查成功），**所有**由 `"iterations"` 给出的迭代都将被尝试。迭代可以表示为整数文字或 Molang 表达式。与散布概率不同，迭代是必需的。

#### 分布

<CodeHeader></CodeHeader>

```json
"x": {
	"distribution": "fixed_grid",
	"extent": [0, 15]
},
"z": {
	"distribution": "fixed_grid",
	"extent": [0, 15]
},
"y": 0
```

分布主要使用**坐标属性**处理：`"x"`、`"z"` 和 `"y"`。所有这些属性可以表示为…

整数文字：

<CodeHeader></CodeHeader>

```json
"x": 0
```

Molang 表达式：

<CodeHeader></CodeHeader>

```json
"x": "math.random_integer(0, v.surface_grass.spread - 1)"
```

或者方便分发坐标的多种对象形式：

<CodeHeader></CodeHeader>

```json
"x": {
	"distribution": "uniform",
	"extent": [0, 16]
}
```

文字和 Molang 表达式相对于[特征原点](#)。有关可用的预构建分布系统，请参阅[分布类型](#分布类型)。

因为特征放置经常相对于高度图，散布特征的传入_y_原点可以**投影到高度图**：

<CodeHeader></CodeHeader>

```json
"project_input_to_floor": true
```

这意味着忽略散布特征父级指定的_y_原点，转而使用迭代的_x_-_z_位置的高度图的_y_坐标（假设_y_坐标将在横向坐标之后评估）。`"y"` 属性仍然可以给出一个值，表示从高度图的偏移。

:::tip注意
从功能上讲，这与使用 Molang 表达式 `"q.heightmap(v.worldx, v.worldz) + *offset*"` 相同。
:::

##### 分布类型

可以使用 Molang 表达式构建自定义分布系统，但散布特征配备了几个常见的**分布类型**以便于创作：

-   Uniform（均匀分布）
-   Gaussian（高斯分布）
-   Inverse Gaussian（逆高斯分布）
-   Fixed grid（固定网格）
-   Jittered grid（抖动网格）

每种分布类型需要一个**范围**，表示该分布运行的值的范围，从最小到最大。范围，像坐标声明的基本形式一样，相对于[特征原点](#)。

###### 均匀分布

<CodeHeader></CodeHeader>

```json
"z": {
	"distribution": "uniform",
	"extent": ["v.boulder_spread.start", "v.boulder_spread.end"]
}
```

**均匀分布**是在两个值之间的半开区间上均匀随机分布。它被称为"均匀"，因为范围内的每个值都有相等的机会被选择，"半开"是因为范围最小值是范围的成员，而范围最大值不是：

_minimum extent_ <= _x_ < _maximum extent_

因此，如果为均匀分布给出一个范围 `[0, 16]`，方块可以放置在大小为16的范围内：从0到15。第一个可能的位置从0开始，第15个可能的位置在16结束，与范围匹配。

###### 高斯分布

<CodeHeader></CodeHeader>

```json
"y": {
	"distribution": "gaussian",
	"extent": [0, "2 * v.vine_cluster.radius"]
}
```

**高斯分布**（`"gaussian"`）及其**逆**（`"inverse_gaussian"`）用于将特征分组在一起：分别朝向或远离范围的中心。高斯分布非常极端，以至于在正常高斯分布下值几乎永远不会偏离中心，或者在逆高斯分布下几乎不会朝向中心。高斯分布的范围与[均匀分布](#均匀分布)一样处理。

###### 网格分布

<CodeHeader></CodeHeader>

```json
"x": {
	"distribution": "jittered_grid",
	"extent": [0, 15],
	"step_size": 2,
	"grid_offset": 4
}
```

**网格分布**是在坐标上均匀间隔的间隔内直接放置（`"fixed_grid"`）或随机放置（`"jittered_grid"`）方块的强大系统。与其他分布类型不同，网格的范围是一个包含最大范围的区间：

_minimum extent_ <= _x_ <= _maximum extent_

两个网格分布专用属性可用于更好地控制这些系统使用的网格。间隔大小（默认为1）可以使用 `"step_size"` 属性自定义。初始偏移（默认为0）也可以通过 `"grid_offset"` 属性提供。

如果迭代次数与步长和偏移结合会将坐标推过最大范围，坐标将回绕到最小范围并从那里继续。

虽然网格在独立坐标上有用，但当与其他坐标上的网格分布结合时，它们的真正力量才显示出来。放置优先增加最早评估的网格系统；仅当之前的网格系统发生回绕时才考虑后面的布局。当早期评估的坐标中的放置发生回绕时，下一个评估的网格动力坐标将按发生回绕的次数偏移。

作为一个简单的例子：

<CodeHeader></CodeHeader>

```json
"iterations": 21,

"x": {
	"distribution": "fixed_grid",
	"extent": [0, 15]
},
"z": {
	"distribution": "fixed_grid",
	"extent": [0, 15]
}
```

放置将首先沿_x_开始：(0, 0)、(1, 0)等，直到在 (15, 0) 到达范围末端。然而，只有16次迭代发生；还有5次。现在，_x_坐标回绕到0，而_z_坐标递增到1：(0, 1)。

这种回绕也发生在三维中，所以当沿最早评估的坐标的平面会发生回绕（假设迭代次数足够高），另一个平面将根据最终坐标的步长开始形成。

:::warning
当0不在范围范围内时，网格范围的行为出乎意料。特别是，范围将投影到最近的边界。例如，给出的范围 `[-7, -2]` 将被重新映射，就像它是 `[-5, 0]` 一样。`[13, 21]` 将被重新映射到 `[0, 8]`。因此，建议只指定范围为长度，例如在后者示例中使用 `[0, 8]`，并用另一个散布特征代理该坐标，使用文字 `13` 定位该坐标。
:::

当使用多个网格分布形成表面或体积时，任何低于 `0` 的坐标范围只能在该坐标的第一次传递上工作。后续传递将限制为非负值。
:::

#### 评估顺序

当包含散布概率时，它会在任何其他属性之前评估。如果针对散布概率的检查对该散布特征的实例失败，则该实例内下游的什么都不评估。没有进一步解释 Molang；[特征上下文](#)内的变量不更新。完全忽略目标特征。

接下来，评估迭代次数。同样，如果迭代次数没有解析为正数的放置尝试次数，则不评估 further。

接下来，每次迭代都会尝试，无论早期迭代是否出于某种原因失败。对于每次迭代，每个坐标都使用所有迭代相同的排序进行评估。

:::warning
坐标评估的顺序_不_依赖于坐标属性在JSON中声明的顺序。
:::

默认情况下，坐标顺序是_x_然后_z_然后_y_。这涵盖了大多数用例：如果坐标不是独立的，垂直位置很可能依赖于横向坐标。但是，散布特征可以声明异常的**坐标评估顺序**以完全控制坐标依赖性：

<CodeHeader></CodeHeader>

```json
"coordinate_eval_order": "zyx"
```

在迭代的坐标确定之后，世界生成将焦点移入目标：确认其限制，尝试其放置，评估其 Molang，以及（如果可能和相关）继续放置其子项及其子项等等。

当完成目标特征的特征树后，如果散布特征还有更多迭代要运行，焦点返回到散布特征从第一个评估的坐标开始并恢复执行。

### 聚合特征

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",

    "minecraft:aggregate_feature": {
        "description": {
            "identifier": "wiki:village_center"
        },

        "features": ["wiki:village_center_well", "wiki:village_center_grass_path"],
        "early_out": "first_failure"
    }
}
```

**聚合特征**在输入位置依次放置给定列表中的特征。聚合特征通常用于构建由许多不同特征组成的自定义场景。

要由聚合放置的特征由必需的**特征列表**给出。此列表中的每个特征——如果[放置](#放置转义)——将在声明顺序的同一点定位。聚合特征通常需要指向[散布特征](#散布特征)来定位场景的元素。

#### 放置转义

<CodeHeader></CodeHeader>

```json
"early_out": "first_success"
```

默认情况下，特征列表中的每个条目都将尝试放置。通过 `"early_out"` 属性提供**放置转义**，它接受3个值：

| 值             | 描述                                                      |
| :---------------- | :--------------------------------------------------------------- |
| `"none"`          | 尝试放置每个特征（默认）                          |
| `"first_success"` | 一旦第一次成功放置发生就停止放置特征 |
| `"first_failure"` | 一旦第一次失败放置发生就停止放置特征 |

### 序列特征

:::warning
序列特征目前存在bug，不应使用。目前，特征列表中的所有特征都在同一输入位置生成，就像[聚合特征](#聚合特征)一样。
:::

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",

    "minecraft:sequence_feature": {
        "description": {
            "identifier": "wiki:totem_pole"
        },

        "features": ["wiki:totem_pole_base", "wiki:totem_pole_body", "wiki:totem_pole_head"]
    }
}
```

**序列特征**在空间序列中放置特征集合。

特征通过**特征列表**排序，由 `"features"` 属性给出。上一特征的输出位置成为下一特征的输入位置。例如，如果序列特征的源在 (0, 67, 0)，而第一个列出的特征是一个延伸10个方块的列，那么下一个列出的特征的输入位置将是 (0, 77, 0)。

### 表面吸附特征

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.16.0",

    "minecraft:snap_to_surface_feature": {
        "description": {
            "identifier": "wiki:underground_silas_plant_snap"
        },

        "feature_to_snap": "wiki:underground_silas_plant",

        "surface": "floor",
        "vertical_search_range": 12
    }
}
```

当被代理时，特征可以固定在地板或天花板上。**表面吸附特征**目前，目标特征，由 `"feature_to_snap"` 给出，只能通过空气投影到固体表面。

#### 表面搜索

<CodeHeader></CodeHeader>

```json
"surface": "ceiling",
"vertical_search_range": 16
```

表面吸附特征有效地将输入_y_坐标重新映射到代理特征可用的表面。这个**目标表面**由可选的 `"surface"` 属性给出，接受 `"floor"` 或 `"ceiling"`，默认为 `"floor"`。重新映射从[特征原点](#)开始并在垂直方向上向下（如果目标是地板）或向上（如果目标是天花板）搜索表面，这似乎必须是固体方块。

:::warning
特征原点必须从空气开始（即使只是其中一块），否则表面搜索将立即失败。
:::

应该搜索的距离由必需的 `"vertical_search_range"` 属性给出，这没有合理的限制。不幸的是，实际范围并不特别直观。该范围表现得好像它比此值小2。例如，从_y_ 70 开始并使用范围 `5` 可以将特征放置在 67 到 70 之间。如果从 48 目标天花板使用范围 `6`，特征可以放置在 48 到 52 之间。

### 搜索特征

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",

    "minecraft:search_feature": {
        "description": {
            "identifier": "wiki:search_feature"
        },

        "places_feature": "wiki:search_feature_obsidian",

        "search_volume": {
            "min": [0, 0, 0],
            "max": [7, 7, 7]
        },

        "search_axis": "y",
        "required_successes": 512
    }
}
```

**搜索特征**在体积中搜索目标特征的有效放置位置。这些特征是放置具有挑战性放置条件的特征时的绝佳选择。

**目标特征**使用 `"places_feature"` 属性放置。其放置成功取决于在[搜索体积](#搜索体积)内是否满足[成功阈值](#搜索规范)。在发生任何放置之前，目标特征的放置条件在体积内的每个位置依次检查。

#### 搜索体积

<CodeHeader></CodeHeader>

```json
"search_volume": {
	"min": [-12, 0, -12],
	"max": [11, 11, 11]
},
```

**搜索体积**声明将进行搜索的空间。两个向量定义此体积的边界： `"min"`，指向坐标最低的角，和 `"max"`，指向棱镜相对角的_方块原点_。因此，最大角的坐标因此在每个维度上比 `"max"` 向量给出的多延伸1个方块。例如，以下搜索体积实际上覆盖8个方块（每个维度2个），而不是1个：

<CodeHeader></CodeHeader>

```json
"search_volume": {
	"min": [0, 0, 0],
	"max": [1, 1, 1]
},
```

这些向量只接受数字，相对于[特征原点](#)

#### 搜索规范

<CodeHeader></CodeHeader>

```json
"search_axis": "z",
"required_successes": 16
```

在给定搜索体积内，位置根据 `"search_axis"` 属性逐层检查，该属性接受 `"+x"`、`"-x"`、`"+y"`、`"-y"`、`"+z"` 或 `"-z"`。指定搜索轴层内的其他维度在到达各自的边界之前以网格检查，然后检查下一个搜索轴层。特别要检查的坐标顺序是：

-   最早的不是搜索轴的 _x_ 或 _y_
-   最早的剩余的 _y_ 或 _z_ 不是搜索轴
-   指定的搜索轴

仅当在扫描搜索体积时找到可选 `"required_successes"` 属性给定的数字时，才放置特征。如果省略该属性，必须在整个体积中找到一次成功才能使特征放置成功。

#### 搜索过程

搜索从相对于[特征原点](#)的[最小向量](#搜索体积)给定的位置开始。此位置一次更新一个坐标，由[搜索轴](#搜索轴)确定。当达到坐标的最大值时，位置回绕到下一个坐标的开始；如果遍历搜索轴，则考虑指定的方向（`+` 或 `-`）。在每个位置，检查[目标特征](#搜索特征)固有的搜索条件。一旦找到的成功次数达到[所需成功阈值](#搜索规范)（或者如果未提供阈值则找到这样一个成功），目标特征将放置在_每个_这样的成功处。在达到阈值之前不放置任何特征。

### 加权随机特征

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",

    "minecraft:weighted_random_feature": {
        "description": {
            "identifier": "wiki:gelatin"
        },

        "features": [
            ["wiki:gelatin_green", 3],
            ["wiki:gelatin_red", 3],
            ["wiki:gelatin_blue", 2],
            ["wiki:gelatin_purple", 1]
        ]
    }
}
```

**加权随机特征**从列表中随机选择一个特征。它们通常用于在一组相关特征中提供变化。

加权随机特征从其**加权特征列表**中选择。列表中的每个条目是一个由特征引用和整数权重组成的数组。加权随机特征可以在每次运行中选择不同的特征。

:::tip注意
要了解权重如何工作，请参阅[概率相关部分](#)。
:::

## 场景特征

场景特征是内容特征和代理特征的某种组合。它们是围绕原版生成所需的审美设计的固执特征类型。

场景特征只允许对其形状进行最小程度的自定义以实现其预期的审美。与内容特征一样，它们的方块可以方便地修改，与代理特征一样，它们可以放置自己的子特征。

### 晶洞特征

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",
    "minecraft:geode_feature": {
        "description": {
            "identifier": "wiki:wasp_hive"
        },

        "max_radius": 12,

        "filler": "minecraft:air",

        "inner_layer": "wiki:wasp_hive_inside",
        "alternate_inner_layer": "wiki:wasp_hive_spawner_base",
        "use_alternate_layer0_chance": 0.125,

        "middle_layer": "wiki:wasp_hive_inside",

        "outer_layer": "wiki:wasp_hive_shell",

        "inner_placements": ["wiki:wasp_hive_spawner"],
        "placements_require_layer0_alternate": true,
        "use_potential_placements_chance": 1,

        "min_distribution_points": 2,
        "max_distribution_points": 4,
        "min_outer_wall_distance": 2,
        "max_outer_wall_distance": 4,
        "min_point_offset": 0,
        "max_point_offset": 2,
        "noise_multiplier": 0.125,
        "invalid_blocks_threshold": 64,

        "crack_point_offset": 0,
        "generate_crack_chance": 1,
        "base_crack_size": 1
    }
}
```

**晶洞特征**构建由多个方块层组成的球形结构；它们允许沿内壁放置子特征。

### 植被斑块特征

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",

    "minecraft:vegetation_patch_feature": {
        "description": {
            "identifier": "wiki:shiitake_patch"
        },

        "horizontal_radius": 4,
        "extra_edge_column_chance": 0.5,

        "surface": "floor",
        "vertical_range": 5,

        "ground_block": "minecraft:mycelium",
        "replaceable_blocks": ["minecraft:dirt", "minecraft:grass"],
        "depth": 4,
        "extra_deep_block_chance": 0.5,

        "vegetation_feature": "wiki:shiitake_mushroom",
        "vegetation_chance": 0.125
    }
}
```

**植被斑块**在类方形边界（斑块）内放置子特征（通常是植被）。

植被斑块基本上执行4个操作：

-   从给定半径确定横向斑块形状
-   从形状每个方块的[输入位置](#)垂直搜索表面（地板或天花板）
-   将方块柱放置到表面中
-   在创建的斑块内随机生成子特征

#### 斑块形状

<CodeHeader></CodeHeader>

```json
"horizontal_radius": 3,
"extra_edge_column_chance": 0.25
```

植被斑块首先构建斑块的横向形状。此形状以[输入位置](#)的_x_和_z_为中心。从这里，必需的 `"horizontal_radius"` 指定初始形状应该在所有横向方向上延伸多远。这个形状不使用[曼哈顿距离](#)；相反，角落被填充，构建一个简单的正方形。正方形的大小由以下公式给出：

_horizontal radius_ * 2 + 1

因此，水平半径为4将生成边长为9的正方形，以输入的_x_和_z_为中心。

可以使用可选的 `"extra_edge_column_chance"` 属性稍微随机化斑块形状。此属性接受介于 `0`（默认值）和 `1` 之间的值，表示周长外部任何方块包含在斑块形状中的几率。这些周边方块不包括外角。如果忽略角，将此属性设置为 `1` 等同于将水平半径增加1。

#### 斑块搜索

<CodeHeader></CodeHeader>

```json
"surface": "ceiling",
"vertical_range": 8
```

然后，植被斑块从[输入位置](#)的_y_分量在确定的斑块形状内的每个列中垂直搜索适当的表面，由可选的 `"surface"` 属性给出。可以提供 `"floor"`（如果未指定则默认为）或 `"ceiling"`。表面搜索仅针对空气功能；不能使用其他方块对比。然而，搜索本身可以从任何方块内开始。

搜索的距离由 `"vertical_range"` 给出，它是必需的且没有有形的限制。搜索是双向的。例如，如果从 _y_ 70 开始并使用垂直范围 `5`，65到75之间的表面将成功。

列中只有第一个匹配的表面将被使用。当目标是地板表面时，第一个匹配是最高的表面。如果目标是天花板，第一个匹配是最低的表面。

#### 斑块列放置

<CodeHeader></CodeHeader>

```json
"ground_block": "arabia:lush_sand",
"waterlogged": true,
"replaceable_blocks": [
	"minecraft:sand",
	"minecraft:sandstone"
],
"depth": 2,
"extra_deep_block_chance": 0.75
```

然后，在每个表面搜索成功的列中尝试斑块列生成。列从输入位置开始并继续进入表面程序化生成。

形成斑块 solid 基底的方块由 `"ground_block"` 给出。它进入表面的长度由 `"depth"` 给出。正如预期的那样，深度为 `0` 将不生成作为斑块列部分的任何方块，但负值将生成一个继续直到到达非白名单方块的列。

可选的 `"extra_deep_block_chance"` 属性为每个列提供额外生成一个方块的机会，增加该列的深度1。它接受介于 `0` 和 `1` 之间的值，默认为0。将属性设置为 `1` 与将深度增加1具有相同的效果。

:::tip注意
[垂直范围](#斑块搜索)在搜索阶段之后不再影响生成。如果一个列刚好在搜索范围内，它的整个深度仍将尝试。此外，如果表面在垂直范围之外，但该列中的方块将在范围内，这些方块仍将被忽略。放置从表面开始，当目标是[地板表面](#斑块搜索)时继续向下，反之亦然。
:::

必须通过 `"replaceable_blocks"` 属性提供方块白名单。当生成斑块列时，每个方块都被检查并按顺序放置。如果检测到非白名单方块，该列的生成就会停止。因此，列可能无法达到其目标深度。单个列生成失败对其他列没有影响。

最后，可选的布尔 `"waterlogged"` 属性在设置为 true 且 `"surface"` 为 `"floor"` 时尝试用水的顶部块替换斑块列的顶部块。因此，水将沿表面暴露于空气。如果水的任一侧 faces 附加到空气，水将不会被替换；如果省略 `"waterlogged"`，默认禁用水生成。当 `"depth"` 为 `0` 且启用了水生成，非白名单方块仍可能用水替换。对于所有其他深度值，只有白名单方块将用水替换。

#### 植被放置

<CodeHeader></CodeHeader>

```json
"vegetation_feature": "tension:shiitake_mushroom",
"vegetation_chance": 0.125
```

最后，植被斑块需要植被特征和相应的生成 chance，以在斑块表面的随机位置放置子特征。子特征由必需的 `"vegetation_feature"` 属性给出。每个生成的表面方块都有机会支持此植被特征。

:::warning
高度为多个方块并附加到天花板表面的植被特征仍会自然向上生成。它们必须以从天花板向下的方式构建或代理。
:::

任何方块表面被选为子特征输入位置的概率由可选的 `"vegetation_chance"` 浮点属性给出，默认为 `0`。与其他植被斑块特征中的概率一样，它范围从0到1，其中0将不生成子特征，1将尝试为每个方块表面生成一个。请注意，高度超过单列的植被特征可能会发生碰撞，将单个特征聚集成单一质量。

对于[地板绑定](#斑块搜索)的斑块，如果 [`"waterlogged"`](#斑块列放置) 为 `false`，植被特征直接生成在表面上，并有可能生成在表面边缘。如果启用了水生成，然而，植被特征不能在表面边缘生成，但可以在水中生成，如果支持则将方块水logged。当 [`"depth"`](#斑块列放置) 为 `0` 时，即使没有斑块方块支持它们，子特征也可以放置。

:::warning
如果在天花板目标植被斑块特征上启用了水生成，则不会放置任何植被特征。
:::

## 雕刻特征

雕刻特征是用于修改原版洞穴生成的特殊特征类型。目前几乎无法使用雕刻特征进行自定义。雕刻特征仅包括经典的意大利面洞穴，不包括峡谷或结构。

所有雕刻特征都需要放置在[预生成传递](#)。因此，雕刻特征不能通过任何方式与其他特征组合，即使是代理。

雕刻的工作原理是剔除围绕预定路径的方块；这些路径是不可变的。相反，雕刻特征允许自定义**宽度修饰符**，添加到游戏提供的基础宽度方差。此属性在所有雕刻特征类型中可用，作为 `"width_modifier"`。宽度修饰符仅影响雕刻路径周围的横向距离，而不是高度。负值表现为正常减法：缩小雕刻而不是膨胀它；足够低的值，大约 `-16`，可用于在原版雕刻特征上移除洞穴。

:::warning
虽然在特征模式中列为可选，但应始终提供 `"width_modifier"`；否则会抛出错误，整个块可能会显示为损坏。此外，宽度修饰符的大值（大于约16）不应使用：世界加载变慢，块可能被完全剔除。
:::

雕刻特征并非真正_剔除_方块；而是替换现有方块（如来自生物群系地表生成器或更早放置的雕刻特征）与**填充方块**。填充方块可以通过可选的 `"fill_with"` 属性提供，其默认值取决于雕刻特征类型；此属性也可用于所有雕刻特征类型。

:::warning
雕刻特征的方块交叉集目前无法自定义。只有特定于每种雕刻特征类型的原版方块将被替换；无法剥离自定义方块形成洞穴。
:::

### 洞穴雕刻特征

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",

    "minecraft:cave_carver_feature": {
        "description": {
            "identifier": "wiki:massive_cave"
        },

        "width_modifier": 4
    }
}
```

经典的地下洞穴系统使用**洞穴雕刻特征**控制。这些雕刻特征仅在主世界工作时有效。

地下洞穴自然从 bedrock 层上方just above _y_-3 延伸到超过100的不确定_y_值。洞穴雕刻特征的填充方块如果省略默认为空气。洞穴雕刻特征剥离典型的地下表层和基础方块，如石头变体、泥土变体、沙子变体和沙岩。然而，水不会被剔除，海洋和河流中的水会被积极避免。

### 水下洞穴雕刻特征

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",

    "minecraft:underwater_cave_carver_feature": {
        "description": {
            "identifier": "wiki:underwater_thick_caves"
        },

        "width_modifier": 8
    }
}
```

**水下洞穴雕刻特征**在主世界较低高度生成洞穴——低于63的海平面。这些雕刻特征也只在主世界工作。水下雕刻特征接受一个额外的可选属性 `"replace_air_with"`，用于用给定方块替换预先存在的空气交叉。

:::warning
此属性目前似乎无法正常工作。无论是作用于基础为空气的生物群系还是与更早放置的使用空气的[洞穴雕刻特征](#洞穴雕刻特征)交叉，在测试中交叉的空气从未成功替换。
:::

水下雕刻特征替换与[洞穴雕刻特征](#洞穴雕刻特征)相同的天然原版方块，外加一个：水。这意味着可以在水下设置中从填充方块构建螺旋状质量。水下雕刻特征可以从高度3开始；它们永远不会在_y_-63（主世界海平面）上方运行，即使有机会。

:::warning
水下洞穴雕刻特征在自定义生物群系中无法工作——即使该生物群系使用原版方块。
:::

### 地狱洞穴雕刻特征

<CodeHeader></CodeHeader>

```json
{
    "format_version": "1.13.0",

    "minecraft:hell_cave_carver_feature": {
        "description": {
            "identifier": "wiki:nether_caves"
        },

        "fill_with": "minecraft:magma",
        "width_modifier": 1
    }
}
```

基于下界的洞穴通过**地狱洞穴雕刻特征**形成。令人惊讶的是，这些雕刻特征除了在下界还可以在主世界使用；必须将生物群系过滤器应用于特征规则以限制这种情况。

下界雕刻特征从_y_ 5到121延伸，它们的填充方块默认为空气。地狱雕刻特征剥离与[洞穴雕刻特征](#洞穴特征)相同的一组方块，但有一些例外：地狱雕刻特征不会剥离沙子变体或沙岩，但会移除下界岩和水。
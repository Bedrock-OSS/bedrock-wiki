---
title: 自定义作物
example: custom_crops
description: 了解如何创建自己的作物方块，像 vanilla 作物一样生长！
category: 原版重制
tags:
    - intermediate
    - scripting
license: true
mentions:
    - Ivyman1992
    - Provedule
    - ThomasOrs
    - QuazChick
    - SmokeyStack
---

:::tip 格式版本 1.26.10
本教程假设你对方块和脚本有很好的理解。
在开始之前请查看[方块指南](/blocks/blocks-intro)、[方块状态](/blocks/block-states)和[方块事件](/blocks/block-events)。
:::

如果你不喜欢胡萝卜——没关系。你可以制作自己的（更棒的）作物！

制作作物并不像你想象的那么难，只需要一点点练习和在编码特定事件系列方面的深思熟虑。
本页面将指导你创建一个独特的作物方块，以及它的种子和食物物品。

**问题：**

-   自定义作物无法被流动的熔岩破坏。
-   自定义作物无法通过蜜蜂携带的花粉生长。
-   自定义作物在 surrounded by 完整方块时会变暗。
-   自定义作物在使用带有"精准采集"附魔的物品破坏时会作为物品掉落。
-   自定义作物掉落率与 vanilla 不匹配，不受"时运"附魔影响。
-   即使玩家没有持有骨粉等肥料，也可以与自定义作物交互。
-   在看自定义作物时按下"选择方块"会给玩家作物方块而不是种子。

## 作物模型

如果你在游戏中观察胡萝卜和土豆，你会发现它们由4个平面组成，每个平面距离边缘4像素，如下方的截图所示。

值得注意的是，每个平面都比传统方块低1像素。
如果你忘记将平面降低一个像素，作物就会比耕地顶部高1像素出现，耕地模型更短。

通过将位置降低一个像素，它会完美地坐在耕地上，让我们方块世界的一切都正确。
以下是作物的模板模型：

![](model.png)

<Spoiler title="示例作物模型">

<ExampleFile path="RP/models/blocks/custom_crop.geo.json" />

</Spoiler>

## 初始方块 JSON

首先，我们希望我们的作物像 vanilla 作物一样有8个生长阶段，所以方块应该包含一个包含8个值的状态。

此代码示例还包括我们作物将在每个置换中活动的基础组件。

<CodeHeader>BP/blocks/custom_crop.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_crop",
            "states": {
                "wiki:growth": {
                    "values": { "min": 0, "max": 7 }
                }
            }
        },
        "components": {
            "tag:minecraft:crop": {},
            "minecraft:collision_box": false,
            // 视觉效果
            "minecraft:destruction_particles": {
                "particle_count": 48
            },
            "minecraft:geometry": "geometry.custom_crop", // 上一步提供的模型
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_crop_0",
                    "render_method": "alpha_test_single_sided",
                    "ambient_occlusion": false,
                    "face_dimming": false
                }
            },
            // 如果没有放置在耕地上则破坏作物
            "minecraft:placement_filter": {
                "conditions": [
                    {
                        "allowed_faces": ["up"],
                        "block_filter": ["minecraft:farmland"]
                    }
                ]
            },
            // 阻止雨滴在方块顶部溅射和雪积累
            "minecraft:precipitation_interactions": {
                "precipitation_behavior": "none"
            },
            // 当水流入时破坏作物
            "minecraft:liquid_detection": {
                "detection_rules": [
                    {
                        "liquid_type": "water",
                        "on_liquid_touches": "popped"
                    }
                ]
            },
            // 当被活塞推动时破坏作物
            "minecraft:movable": {
                "movement_type": "popped"
            },
            // 阻止栅栏和玻璃板等方块连接
            "minecraft:connection_rule": {
                "accepts_connections_from": "none"
            }
        }
    }
}
```

## 作物生长组件

Minecraft 没有暴露用于自定义方块的 vanilla 作物生长功能，所以我们必须使用自定义组件从头重新创建生长系统！

### 参数

在接下来的几个标题中，我们将探索使用以下参数复制 vanilla 作物生长的代码。
之后，你将获得完整的脚本，可以复制到你的包中。

<Spoiler title="作物生长参数">

-   `growth_state` — 字符串
    -   用于作物当前生长阶段的状态名称。
    -   在本教程中，我们将使用 `wiki:growth`，但你应该将命名空间更改为你附加包唯一标识的内容。
-   `max_growth` — 整数
    -   生长状态的最大值。
-   `min_light_level` — 整数
    -   通过随机刻生长所需的最小光照等级。
-   `farmland_search_range` — 整数
    -   X 和 Z 轴每个方向可以找到耕地的最大偏移。
-   `farmland_speed_modifier` — 浮点
    -   找到的每个耕地方块增加的生长速度。
-   `farmland_moisture_speed_modifier` — 浮点
    -   如果耕地是湿润的，除了 `farmland_speed_modifier` 外还要增加的生长速度。
-   `neighboring_farmland_speed_multiplier` — 浮点
    -   每个不直接在作物下方的耕地方块的总速度修正值在添加到生长速度之前乘以此值。
-   `crowding_speed_multiplier` — 浮点
    -   如果作物被相同类型的其他作物包围，在搜索耕地后的总速度乘以此值。
-   `growth_on_fertilize` — 整数范围 `[min, max]`{lang=js}
    -   非创造模式玩家使用骨粉与方块交互时可以添加的最小和最大生长量。

</Spoiler>

这是我们将用于自定义作物的配置：

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"wiki:crop_growth": {
    "growth_state": "wiki:growth",
    "max_growth": 7,
    // 需要光照等级为9或以上才能在随机刻生长
    "min_light_level": 9,
    // 匹配 vanilla 作物的生长速度
    "farmland_search_range": 1,
    "farmland_speed_modifier": 1,
    "farmland_moisture_speed_modifier": 2,
    "neighboring_farmland_speed_multiplier": 0.25,
    "crowding_speed_multiplier": 0.5,
    // 当非创造模式玩家使用骨粉时随机添加2-5个生长阶段
    "growth_on_fertilize": [2, 5]
}
```

### 初始脚本

以下是将被包含在行为包中的作物生长脚本的基础。
它从 `@minecraft/server` 模块导入所需的内容，并设置自定义组件的注册以用于方块JSON定义。

<CodeHeader>BP/scripts/cropGrowth.js</CodeHeader>

```js
import { system, EquipmentSlot, GameMode } from "@minecraft/server";

export const cropGrowthComponentName = "wiki:crop_growth";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const BlockCropGrowthComponent = {
    // 事件钩子将放在这里
};

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        cropGrowthComponentName,
        BlockCropGrowthComponent
    );
});
```

### 计算生长速度

<CodeHeader>BP/scripts/cropGrowth.js</CodeHeader>

```js
function getGrowthSpeed(crop, growthParams) {
    let speed = 1;

    // 根据附近的耕地及其湿润程度增加生长速度
    for (const farmland of getFarmlandIterator(crop, growthParams.farmland_search_range)) {
        let speedModifier = growthParams.farmland_speed_modifier;

        const moisture = farmland.permutation.getState("moisturized_amount");
        if (moisture > 0) {
            speedModifier += growthParams.farmland_moisture_speed_multiplier;
        }

        const isDirectlyBelowCrop = farmland.x === crop.x && farmland.z === crop.z;
        if (!isDirectlyBelowCrop) {
            speedModifier *= growthParams.neighboring_farmland_speed_multiplier;
        }

        speed += speedModifier;
    }

    // 在 vanilla 中，如果周围有同类型作物（其中 "crowding_speed_multiplier" 为0.5），生长速度减半
    if (isCrowded(crop)) {
        speed *= growthParams.crowding_speed_multiplier;
    }

    return speed;
}

function* getFarmlandIterator(crop, searchRange) {
    for (let x = -searchRange; x <= searchRange; x++) {
        for (let z = -searchRange; z <= searchRange; z++) {
            const block = crop.offset({ x, y: -1, z });

            // 如果是耕地则产生该方块
            const isFarmland = block?.typeId === "minecraft:farmland";
            if (isFarmland) yield block;
        }
    }
}

function isCrowded(crop) {
    const northBlock = crop.north();
    const southBlock = crop.south();
    const westBlock = crop.west();
    const eastBlock = crop.east();

    const isEnclosed =
        (westBlock?.typeId === crop.typeId || eastBlock?.typeId === crop.typeId) &&
        (northBlock?.typeId === crop.typeId || southBlock?.typeId === crop.typeId);

    if (isEnclosed) return true;

    const isCropDiagonallyAdjacent =
        northBlock?.west()?.typeId === crop.typeId ||
        northBlock?.east()?.typeId === crop.typeId ||
        southBlock?.west()?.typeId === crop.typeId ||
        southBlock?.east()?.typeId === crop.typeId;

    if (isCropDiagonallyAdjacent) return true;

    return false;
}
```

现在我们可以使用 `getGrowthSpeed()`{lang=js} 函数创建另一个函数，根据计算的速度随机返回 `true`{lang=js} 或 `false`{lang=js}。

```js
function randomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

export function randomShouldCropGrow(crop, growthParams) {
    const growthSpeed = getGrowthSpeed(crop, growthParams);
    const growthChanceRange = Math.floor(25 / growthSpeed);

    return randomInt(0, growthChanceRange) === 0;
}
```

### 随机刻

每个随机刻，我们将确保作物有足够的光照生长，并且还没有完全生长。

然后，我们使用 `randomShouldCropGrow()`{lang=js} 函数根据计算的生长速度确定作物是否应该在随机刻生长。

<CodeHeader>BlockCropGrowthComponent</CodeHeader>

```js
onRandomTick({ block }, { params }) {
    // 生长参数
    const growthState = params.growth_state;
    const maxGrowth = params.max_growth;
    const minLightLevel = params.min_light_level;

    // 确保满足最小光照等级
    if (block.getLightLevel() < minLightLevel) return;

    const { permutation } = block;

    // 获取作物的当前生长
    const growth = permutation.getState(growthState) ?? maxGrowth;

    // 确保作物还没有完全生长
    if (growth === maxGrowth) return;

    // 仅在某些随机刻生长
    if (!randomShouldCropGrow(block, params)) return;

    // 增加生长状态
    block.setPermutation(permutation.withState(growthState, growth + 1));
}
```

### 施肥

施肥是指使用肥料（如骨粉）使作物立即生长。

为此，我们将使用 [`onPlayerInteract()`{lang=js}](/blocks/block-events#玩家交互) 事件钩子在使用骨粉时为 `wiki:growth` 添加一个随机值，或者在创造模式或使用 Minecraft Education 的"超级肥料"时完全生长作物。

<CodeHeader>BlockCropGrowthComponent</CodeHeader>

```js
onPlayerInteract({ block, dimension, player }, { params }) {
    if (!player) return;

    const equippable = player.getComponent("minecraft:equippable");
    if (!equippable) return;

    const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
    if (!mainhand.hasItem()) return;

    const hasBoneMeal = mainhand.typeId === "minecraft:bone_meal"; // 玩家是否持有骨粉
    const hasRapidFertilizer = mainhand.typeId === "minecraft:rapid_fertilizer"; // 玩家是否持有超级肥料（来自 Minecraft Education）

    // 如果玩家没有持有骨粉或超级肥料则退出
    if (!hasBoneMeal && !hasRapidFertilizer) return;

    const isCreative = player.getGameMode() === GameMode.Creative; // 玩家是否在创造模式

    // 生长参数
    const growthState = params.growth_state;
    const growthRange = params.growth_on_fertilize;
    const maxGrowth = params.max_growth;

    const { permutation } = block;

    if (hasRapidFertilizer || isCreative) {
        // 当玩家持有超级肥料或在创造模式时完全生长作物
        block.setPermutation(permutation.withState(growthState, maxGrowth));
    }
    else {
        // 当玩家使用骨粉且不在创造模式时添加随机生长量
        let growth = permutation.getState(growthState);

        growth += randomInt(...growthRange); // 在 "growth_on_fertilize" 范围内添加随机生长量
        growth = Math.min(growth, maxGrowth); // 防止新生长超过最大值

        block.setPermutation(permutation.withState(growthState, growth));
    }

    // 当玩家不在创造模式时减少物品堆叠
    if (!isCreative) {
        if (mainhand.amount > 1) mainhand.amount--;
        else mainhand.setItem(undefined);
    }

    // 播放特效
    const effectLocation = block.center();
    dimension.playSound("item.bone_meal.use", effectLocation);
    dimension.spawnParticle("minecraft:crop_growth_emitter", effectLocation);
}
```

### 最终脚本

<Spoiler title="作物生长脚本">

<ExampleFile path="BP/scripts/cropGrowth.js" />

</Spoiler>

## 生长置换

我们知道如何设置我们的方块状态，当我们的方块有特定置换时会发生什么？

下面的 `置换` 数组根据其 `wiki:growth` 状态设置方块的选择框、战利品表和纹理。
例如，如果 `wiki:growth` 是 `7`{lang=json}，纹理设为 `"wiki:custom_crop_3"`{lang=json}，并且作物可以掉落食物。

<CodeHeader>minecraft:block</CodeHeader>

```json
"permutations": [
    {
        "condition": "q.block_state('wiki:growth') < 7",
        "components": {
            // 作物未完全生长时的战利品表；vanilla 作物在年轻时只掉落种子
            "minecraft:loot": "loot_tables/wiki/blocks/custom_crop_young.json"
        }
    },
    {
        "condition": "q.block_state('wiki:growth') == 0",
        "components": {
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 1.6, 16]
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') == 1",
        "components": {
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 3.2, 16]
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') >= 2",
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_crop_1",
                    "render_method": "alpha_test_single_sided",
                    "ambient_occlusion": false,
                    "face_dimming": false
                }
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') == 2",
        "components": {
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 4.8, 16]
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') == 3",
        "components": {
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 6.4, 16]
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') >= 4",
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_crop_2",
                    "render_method": "alpha_test_single_sided",
                    "ambient_occlusion": false,
                    "face_dimming": false
                }
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') == 4",
        "components": {
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 8, 16]
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') == 5",
        "components": {
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 9.6, 16]
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') == 6",
        "components": {
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 11.2, 16]
            }
        }
    },
    {
        "condition": "q.block_state('wiki:growth') == 7",
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": "wiki:custom_crop_3",
                    "render_method": "alpha_test_single_sided",
                    "ambient_occlusion": false,
                    "face_dimming": false
                }
            },
            "minecraft:selection_box": {
                "origin": [-8, 0, -8],
                "size": [16, 12.8, 16]
            },
            // 完全生长时掉落不同的战利品
            "minecraft:loot": "loot_tables/wiki/blocks/custom_crop_mature.json"
        }
    }
]
```

:::tip 生长阶段
你可以根据想要的作物阶段数量拥有更多或更少的生长置换。
但是，不要忘记还要更改状态的 `max` 参数和组件的 `max_growth` 参数。
:::

## 最终方块 JSON

这是整个 `wiki:custom_crop` 文件以供参考。

<Spoiler title="自定义作物方块 JSON">

<ExampleFile path="BP/blocks/custom_crop.json" />

</Spoiler>

## 作物战利品

以下是自定义作物可以使用的示例战利品表：

### 未成熟作物战利品表

<ExampleFile path="BP/loot_tables/wiki/blocks/custom_crop_young.json" />

### 成熟作物战利品表

<ExampleFile path="BP/loot_tables/wiki/blocks/custom_crop_mature.json" />

## 自定义种子

手中拿着作物方块看起来不太对，所以我们用种子放置作物。
以下是放置作物的自定义物品的JSON。

<ExampleFile path="BP/items/custom_seeds.json" />

## 自定义食物

你的作物不能只掉落种子！使用以下模板创建自定义食物。

<ExampleFile path="BP/items/custom_food.json" />

## 结果

你的包现在应该包含以下文件：

<FolderView :paths="[
    'BP/blocks/custom_crop.json',
    'BP/items/custom_food.json',
    'BP/items/custom_seeds.json',
    'BP/loot_tables/wiki/blocks/custom_crop_mature.json',
    'BP/loot_tables/wiki/blocks/custom_crop_young.json',
    'BP/scripts/cropGrowth.js'
]" />

在本教程/模板的帮助下，你现在拥有创建自己的自定义作物及其种子和食物物品的知识和技能。
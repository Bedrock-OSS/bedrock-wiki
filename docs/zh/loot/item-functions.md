---
title: 物品函数
description: 物品函数修改战利品表和交易表中物品的性质。
category: 文档
nav_order: 4
mentions:
    - Ciosciaa
    - MedicalJewel105
    - ThomasOrs
    - Robotics-Modified
    - Supernova3695
---

物品函数修改[战利品表](/loot/loot-tables)和[交易表](/loot/trade-tables)中物品的性质。

TODO
附魔是否可以带有 minecraft:/ 前缀？

<CodeHeader>战利品条目</CodeHeader>

```json
{
    "type": "item",
    "name": "minecraft:diamond",
    "weight": 1,
    "functions": [
        {
            "function": "set_count",
            "count": {
                "min": 1,
                "max": 3
            }
        }
    ]
}
```

这里的大多数函数只在交易表中测试过。

这些函数在交易表和**战利品表**中可用。

这些函数应该放在 `functions` 数组中。

都不接受 Molang。

没有 Java 附加函数或属性是成功的。

所有函数都可以用任何文本序列后跟冒号作为前缀，如 `minecraft:exploration_map` 或 `d1245436576u:fio2ejfoijfiowejf::::::exploration_map`。

## 通用

少量函数可用于基本物品属性。这些函数可用于任何物品。

| 函数             | 容器战利品 | 方块掉落 | 钓鱼 | 生物掉落 | 生物装备 | 交易表 |
| -------------------- | -------------- | ----------- | ------- | ------------ | ---------------- | ------------ |
| `set_count`          | ✅             | ✅          | ✅      | ✅           | ✅               | ❌           |
| `set_name`           | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `set_lore`           | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `set_data`           | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `random_block_state` | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `random_aux_value`   | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `set_damage`         | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |

### 数量

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ❌     |

::: tip NOTE
交易表使用 [`"quantity"` 属性](/loot/trade-tables#quantity) 来设置数量。
:::

`set_count` 函数设置该物品条目的数量。

<CodeHeader>数量函数</CodeHeader>

```json
{
    "function": "set_count",
    "count": {
        "min": 2,
        "max": 4
    }
}
```

`"count"` 属性决定该物品应该产出多少；它可以作为整数或[范围对象](/documentation/shared-constructs#range-objects)提供。提供的数量值可能大于该物品的堆叠大小。当这种情况发生时，如果物品在容器中，它将泄漏到其他槽中；如果掉落到世界中，它将分成多个不同的物品堆。该 count 属性实际上默认为 `0`，所以它应该始终被包含。

### 名称

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ✅     |

可以使用 `set_name` 函数设置物品的名称。名称在用户界面中鼠标悬停在物品上时可见。名称可以通过铁砧由玩家更改。

<CodeHeader>名称函数</CodeHeader>

```json
{
    "function": "set_name",
    "name": "Cursed Bow"
}
```

要给予物品的名称由字符串 `"name"` 属性给出。默认情况下，名称文本显示为斜体。但是，物品名称支持格式代码，并且可以在文本开头插入 `§r` 将其重置为非斜体。不支持物品名称中的原始文本。`\n` 可用于换行。

### Lore

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ✅     |

`set_lore` 函数为物品设置 lore。

<CodeHeader>Lore 函数</CodeHeader>

```json
{
    "function": "set_lore",
    "lore": ["", ""]
}
```

`"lore"` 属性配置 lore。它可以表示为字符串或字符串数组。所有 lore 字符串支持格式代码但不支持本地化。在数组形式中，每个字符串表示一行 lore。每个字符串的格式化上下文是独立的，意味着格式化会随着每个字符串重置。默认情况下，lore 使用紫色和斜体文本；如有必要，可以通过在每个字符串前加上重置格式代码（`§r`）来重置。`\n` 可以在任何 lore 字符串中使用以在保持当前格式化上下文的同时形成换行符。

### 数据

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ✅     |

`set_data` 为给定物品设置数据值，类似于 `/give` 命令中的参数。如果用于方块，它将设置方块的数据值。如果用于物品，它将设置它的 aux 值。但是，与命令不同，`set_data` 不能设置物品的耐久度。为此，请使用[`durability`](#durability)。

<CodeHeader>数据函数</CodeHeader>

```json
{
    "function": "set_data",
    "data": 2
}
```

`"data"` 属性设置物品的数据。如果未提供，默认为 `0`。`"data"` 可以作为整数或[范围对象](/documentation/shared-constructs#range-objects)提供。

作为整数：

```json
"data": 1
```

作为范围对象：

```json
"data": {
	"min": 0,
	"max": 5
}
```

对象形式将在每次选择此函数的物品条目时在提供的最小值和最大值之间随机选择 inclusively。

### 方块状态

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ✅     |

`random_block_state` 为方块设置单个方块状态。

<CodeHeader>方块状态函数</CodeHeader>

```json
{
    "function": "random_block_state",
    "block_state": "wiki:color",
    "values": 3
}
```

为方块设置方块状态。

`block_state`：方块状态的必需字符串名称。

`values`：可以是数字或[范围对象](/documentation/shared-constructs#range-objects)。

默认为0……有点必需否则毫无意义？IDK……

### 辅助值

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ✅     |

`random_aux_value`

<CodeHeader>辅助值函数</CodeHeader>

```json
{
    "function": "random_aux_value",
    "values": {
        "min": 2,
        "max": 4
    }
}
```

设置物品的辅助值。

`values`：可以是整数或[范围对象](/documentation/shared-constructs#range-objects)。

如果使用范围对象，它将均匀随机选择值（每个值被选中的机会相同）。

仅用于**辅助值**；例如，不会设置工具的损坏，但会设置羊毛的颜色。

它会覆盖作为标识符后缀提供的任何辅助值，如 `minecraft:wool:10`。

也适用于方块数据。

### 耐久度

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ✅     |

可以使用 `set_damage` 函数设置物品的耐久度。

<CodeHeader>耐久度函数</CodeHeader>

```json
{
    "function": "set_damage",
    "damage": {
        "min": 0.5,
        "max": 1
    }
}
```

设置此物品的损坏值。

`damage`：可以是固定数字或[范围对象](/documentation/shared-constructs#range-objects)。允许值范围从 `0.0` 到 `1.0`。

请注意，如果此物品没有耐久度组件，此函数将被忽略。


## 物品特定数据

某些函数只能由特定的一组物品使用。参见每个函数的相关物品。

| 函数                       | 容器战利品 | 方块掉落 | 钓鱼 | 生物掉落 | 生物装备 | 交易表 |
| ------------------------------ | -------------- | ----------- | ------- | ------------ | ---------------- | ------------ |
| `furnace_smelt`                | ❌             | ❌          | ❌      | ✅           | ❌               | ❌           |
| `set_book_contents`            | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `exploration_map`              | ✅             | ✅          | ✅      | ✅           | ✅               | ⚠️           |
| `set_banner_details`           | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `random_dye`                   | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `set_actor_id`                 | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `fill_container`               | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `set_potion`                   | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `set_ominous_bottle_amplifier` | ✅             | ✅          | ✅      | ✅           | ✅               | ⚠️           |
| `set_stew_effect`              | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |

### 加热物品

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ❌     |
| 方块掉落      | ❌     |
| 钓鱼          | ❌     |
| 生物掉落     | ✅     |
| 生物装备 | ❌     |
| 交易表      | ❌     |

`furnace_smelt`

<CodeHeader>加热物品函数</CodeHeader>

```json
{
    "function": "furnace_smelt"
}
```

自动意味着该实体必须在着火时死亡。
原版文件对此使用函数条件，但即使移除该条件仍然意味着实体必须在着火时死亡，`furnace_smelt` 函数才会触发。

### 书的内容

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ✅     |

`set_book_contents`

<CodeHeader>书的内容函数</CodeHeader>

```json
{
    "function": "set_book_contents",
    "title": "Wiki Book",
    "author": "Bedrock Wiki",
    "pages": ["Example page number one", "Example page number 2"]
}
```

设置书的数据。

只能用于 `minecraft:writable_book` 或 `minecraft:written_book`。

`author`：作者的字符串名称。

`title`：书名的字符串名称。

`pages`：字符串数组——每个字符串是该页的内容。

最多支持50个字符串，每个字符串798个字符。
所有页之间12,800个字符限制。
在字符串中使用 `\n`（不是 `\\n`）添加换行符。

不能使用制表符。

可以使用颜色代码；每个不同的页面字符串每次都会重置颜色代码。

### 探索地图

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ✅     |

`exploration_map`

<CodeHeader>探索地图函数</CodeHeader>

```json
{
    "function": "exploration_map",
    "destination": "village"
}
```

**交易表信息**：

`destination`：

目前只允许 `monument` 和 `mansion`。

其他都不行，甚至不是埋藏的宝藏（这个看起来它能工作——它正确命名地图而不是像其他的那样显示"未知地图"，但它不指向任何地方）。:(

**战利品表信息**：

`destination`:

适用于任何 /locate 位置（有关注意事项请参阅旧配方说明；这是用于容器战利品表）。

仅在适当的维度中有效。

如果是 mansion 或 monument，会正确命名、着色并显示对应的标记装饰。

如果给出无效或没有目的地，不显示标记但地图上仍有河流和海洋线。

在容器和生物装备及掉落中都有效。

请记住交易商只有**2个位置**有效。

### 旗帜类型

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ✅     |

`set_banner_details`

<CodeHeader>旗帜类型函数</CodeHeader>

```json
{
    "function": "set_banner_details",
    "type": 1 // 不祥旗帜
}
```

设置 `minecraft:banner` 或 `minecraft:shield` 上的旗帜类型（仅适用于这些）。

`type`：只能是 `0` 或 `1`。

- `0` 是白色旗帜。
- `1` 是不祥旗帜。

`base_color`: 可以为类型0的旗帜设置，设置旗帜的颜色。
`patterns`: 是要应用于旗帜的旗帜图案和颜色数组。最多可以应用6个图案。

### 随机染色

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ✅     |

`random_dye`

<CodeHeader>随机染色函数</CodeHeader>

```json
{
    "function": "random_dye"
}
```

随机为可染色的物品染色。如皮革马甲、皮革盔甲和狼盔甲。

它不适用于羊毛或其他相关物品。

### 生成蛋

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ✅     |

`set_actor_id`

<CodeHeader>生成蛋函数</CodeHeader>

```json
{
    "function": "set_actor_id",
    "id": "minecraft:chicken"
}
```

可用于生成蛋。

`id`：生物的标识符。

在交易表中，如果省略 `id` 属性，它默认为交易者的标识符。

### 容器内容

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ✅     |

`fill_container`

<CodeHeader>容器内容函数</CodeHeader>

```json
{
    "function": "fill_container",
    "loot_table": "loot_tables/chests/chest_loot.json"
}
```

设置容器物品/方块的内容。允许容器物品如潜影盒和 bundles 本身包含战利品。

`loot_table`：从行为包根目录到战利品表文件的路径。

需要 `loot_table` 属性，否则它只是普通物品。
它不能指向该物品所在的同一个战利品表。
在容器和生物及方块中都有效。

### 药水类型

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ✅     |

`set_potion`

<CodeHeader>药水类型函数</CodeHeader>

```json
{
    "function": "set_potion",
    "id": "poison"
}
```

设置此物品的药水类型。允许的物品类型有：`minecraft:potion`、`minecraft:splash_potion`、`minecraft:lingering_potion` 和 `minecraft:arrow`。

`id`：药水类型的名称。以下是所有[药水类型](#potion-types)的列表。

### 不祥瓶放大器

| 用法            | 可用                       |
| ---------------- | ---------------------------- |
| 容器战利品   | ✅                           |
| 方块掉落      | ✅                           |
| 钓鱼          | ✅                           |
| 生物掉落     | ✅                           |
| 生物装备 | ✅                           |
| 交易表      | ⚠️（尚未测试） |

`set_ominous_bottle_amplifier`

<CodeHeader>不祥瓶放大器函数</CodeHeader>

```json
{
    "function": "set_ominous_bottle_amplifier",
    "amplifier": {
        "min": 0,
        "max": 4
    }
}
```

设置 `minecraft:ominous_bottle` 药水效果放大器。

`amplifier`：可以是固定数字或[范围对象](/documentation/shared-constructs#range-objects)。允许值为 `0-4`。

###可疑炖菜效果

| 用法            | 可用                       |
| ---------------- | ---------------------------- |
| 容器战利品   | ✅                           |
| 方块掉落      | ✅                           |
| 钓鱼          | ⚠️（尚未测试） |
| 生物掉落     | ✅                           |
| 生物装备 | ⚠️（尚未测试） |
| 交易表      | ⚠️（尚未测试） |

`set_ominous_bottle_amplifier`

<CodeHeader>设置炖菜效果函数</CodeHeader>

```json
{
    "function": "minecraft:set_stew_effect",
    "effects": [
        {
            "id": 0 // 夜视
        },
        {
            "id": 3 // 失明
        }
    ]
}
```

设置 `minecraft:suspicious_stew` 物品的效果。

`id` 可以设置为0到12之间的任何整数。

## 附魔

这些函数控制物品是否有附魔。

| 函数                   | 容器战利品 | 方块掉落 | 钓鱼 | 生物掉落 | 生物装备 | 交易表 |
| -------------------------- | -------------- | ----------- | ------- | ------------ | ---------------- | ------------ |
| `enchant_book_for_trading` | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `enchant_with_levels`      | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `enchant_randomly`         | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `enchant_random_gear`      | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |
| `specific_enchants`        | ✅             | ✅          | ✅      | ✅           | ✅               | ✅           |

### 交易附魔

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ✅     |

`enchant_book_for_trading`

<CodeHeader>交易附魔函数</CodeHeader>

```json
{
    "function": "enchant_book_for_trading"
}
```

**在交易表中记录。**

### 基于等级的附魔

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ✅     |

`enchant_with_levels` 使用附魔台逻辑为物品附魔，可选择允许收藏附魔。

<CodeHeader>基于等级的附魔函数</CodeHeader>

```json
{
    "function": "enchant_with_levels",
    "levels": {
        "min": 15,
        "max": 21
    },
    "treasure": true
}
```

如同从附魔台附魔一样为书籍附魔。

与附魔台不同，它不会限制在 `30`，否则看起来是对称的。

等级 `99999` 给出非常强大的书籍……几乎所有可能的附魔都在上面。

`treasure`：启用该物品的收藏附魔可能性。**布尔值**，默认为 `false`。如果为 `false`，诅咒不能作为可能性出现；如果为 `true`，它们可以。

`levels`：可以是数字或[范围对象](/documentation/shared-constructs#range-objects)。默认为 `0`。
可以为负，但只会重新映射为 `0`。

### 随机附魔

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ✅     |

`enchant_randomly`

<CodeHeader>随机附魔函数</CodeHeader>

```json
{
    "function": "enchant_randomly"
}
```

随机为给定物品选择附魔数量及其强度。

`treasure`：启用该物品的收藏附魔可能性。**布尔值**，默认为 `false`。

### 附魔装备

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ✅     |

`enchant_random_gear`

<CodeHeader>附魔装备函数</CodeHeader>

```json
{
    "function": "enchant_random_gear",
    "chance": 0.5 // 50% 附魔机会
}
```

随机为给定物品选择附魔数量及其强度。

与 `enchant_randomly` 几乎相同，但似乎没有收藏附魔。

不适用于剪刀，但甚至可以在胡萝卜钓竿上工作。

`chance`：该物品获得附魔的概率。允许值范围从 `0.0` 到 `1.0`。默认为 `0`。
请注意，超过 `1.0` 不会使其更加"附魔"。

### 特定附魔

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ✅     |
| 方块掉落      | ✅     |
| 钓鱼          | ✅     |
| 生物掉落     | ✅     |
| 生物装备 | ✅     |
| 交易表      | ✅     |

`specific_enchants`

<CodeHeader>特定附魔函数</CodeHeader>

```json
{
    "function": "specific_enchants",
    "enchants": [
        {
            "id": "unbreaking",
            "level": [1, 3]
        }
    ]
}
```

应用特定的附魔集。

`enchants`：

可以是字符串数组或对象。以下是所有[附魔类型](#enchantment-types)的列表。

对于数组，字符串或对象的任何混合（见下文）。

对于字符串，附魔 id。

对于对象：

`id`：附魔的标识符。

`level`：

可选，默认为 `1`
可以是精确数字或2值数组，表示 `min` 和 `max`，包含在内。

示例：

```json
{
    "function": "specific_enchants",
    "enchants": [ 
        "mending",
        {
            "id": "fortune",
            "level": [1, 3]
        }
    ]
}
```

## 外部因素

影响物品掉落的外部条件。

| 函数                    | 容器战利品 | 方块掉落 | 钓鱼 | 生物掉落 | 生物装备 | 交易表 |
| --------------------------- | -------------- | ----------- | ------- | ------------ | ---------------- | ------------ |
| `looting_enchant`           | ❌             | ❌          | ❌      | ✅           | ❌               | ❌           |
| `explosion_decay`           | ❌             | ✅          | ❌      | ❌           | ❌               | ❌           |
| `set_data_from_color_index` | ❌             | ❌          | ❌      | ❌           | ❌               | ✅           |
| `trader_material_type`      | ❌             | ❌          | ❌      | ❌           | ❌               | ✅           |

### 持有的工具抢夺附魔

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ❌     |
| 方块掉落      | ❌     |
| 钓鱼          | ❌     |
| 生物掉落     | ✅     |
| 生物装备 | ❌     |
| 交易表      | ❌     |

`looting_enchant`

<CodeHeader>持有的工具抢夺函数</CodeHeader>

```json
{
    "function": "looting_enchant",
    "count": {
        "min": 0,
        "max": 1
    }
}
```

根据用于杀死该生物的抢夺附魔等级增加掉落物品的数量。

Count 可以是整数或[范围对象](/documentation/shared-constructs#range-objects)。

### 爆炸衰减

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ❌     |
| 方块掉落      | ✅     |
| 钓鱼          | ❌     |
| 生物掉落     | ❌     |
| 生物装备 | ❌     |
| 交易表      | ❌     |

`explosion_decay`

<CodeHeader>爆炸衰减函数</CodeHeader>

```json
{
    "function": "explosion_decay"
}
```

默认情况下，总是存活。如果在爆炸中，基于该方块位置的爆炸力量，有机会不掉落。

### 生物颜色

| 用法            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ❌     |
| 方块掉落      | ❌     |
| 钓鱼          | ❌     |
| 生物掉落     | ❌     |
| 生物装备 | ❌     |
| 交易表      | ✅     |

`set_data_from_color_index`

<CodeHeader>生物颜色函数</CodeHeader>

```json
{
    "function": "set_data_from_color_index"
}
```

将方块的数据值设置为实体的 `minecraft:color` 组件的值。

### 交易者材质类型

| 用期            | 可用 |
| ---------------- | ------ |
| 容器战利品   | ❌     |
| 方块掉落      | ❌     |
| 钓鱼          | ❌     |
| 生物掉落     | ❌     |
| 生物装备 | ❌     |
| 交易表      | ✅     |

`trader_material_type`

<CodeHeader>交易者材质类型函数</CodeHeader>

```json
{
    "function": "trader_material_type"
}
```

只在交易中？也许它可以在战利品中工作。

# 类型标识符

函数中使用字符串值的列表，如药水类型和附魔。

:::warning
某些标识符可能未包含或可能不正确。始终参考官方文档，但否则其中一些是可用的。
:::

## 药水类型

由 `set_potion` 函数使用。

- "water"
- "mundane"
- "long_mundane"
- "awkward"
- "nightvision"
- "long_nightvision"
- "invisibility"
- "long_invisibility"
- "leaping"
- "long_leaping"
- "strong_leaping"
- "fire_resistance"
- "long_fire_resistance"
- "swiftness"
- "long_swiftness"
- "strong_swiftness"
- "slowness"
- "long_slowness"
- "strong_slowness"
- "water_breathing"
- "long_water_breathing"
- "healing"
- "strong_healing"
- "harming"
- "strong_harming"
- "poison"
- "long_poison"
- "strong_poison"
- "regeneration"
- "long_regeneration"
- "strong_regeneration"
- "strength"
- "long_strength"
- "strong_strength"
- "weakness"
- "long_weakness"
- "wither"
- "turtle_master"
- "long_turtle_master"
- "strong_turtle_master"
- "slow_falling"
- "long_slow_falling"
- "wind_charge"
- "weaving"
- "oozing"
- "infested"

## 附魔类型

由 `specific_enchants` 函数使用。

- "protection"
- "fire_protection"
- "feather_falling"
- "blast_protection"
- "projectile_protection"
- "unbreaking"
- "mending"
- "respiration"
- "depth_strider"
- "frost_walker"
- "aqua_affinity"
- "soul_speed"
- "swift_sneak"
- "sharpness"
- "smite"
- "bane_of_arthropods"
- "fire_aspect"
- "knockback"
- "looting"
- "efficiency"
- "fortune"
- "silk_touch"
- "power"
- "punch"
- "flame"
- "infinity"
- "multishot"
- "piercing"
- "quick_charge"
- "luck_of_the_sea"
- "lure"
- "impaling"
- "riptide"
- "loyalty"
- "channeling"
- "curse_of_binding"
- "curse_of_vanishing"
- "density"
- "breach"
- "wind_burst"
- "lunge"

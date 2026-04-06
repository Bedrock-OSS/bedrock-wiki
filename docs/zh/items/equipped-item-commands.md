---
title: 基于装备的命令
description: 在装备某些物品时运行命令。
category: 教程
tags:
    - intermediate
mentions:
    - Chikorita-Lover
    - MedicalJewel105
    - Lufurrius
    - TheItsNameless
    - QuazChick
---

附加包的一个常见概念是实现具有独特效果的新盔甲套装，就像海龟壳一样。
物品没有在某些条件下施加生物效果、发射粒子等的组件。
但是，使用`hasitem`命令选择器或服务器动画，可以轻松实现！

## 命令选择器方法

[`hasitem`](https://minecraft.wiki/w/Target_selectors#Selecting_targets_by_item)选择器参数可用于根据实体装备槽中的物品来定位实体。

你可以在[Minecraft Wiki](https://minecraft.wiki/w/Slot#Bedrock_Edition)查看其他槽标识符列表。

<CodeHeader>目标选择器</CodeHeader>

```c
@e[hasitem={item=wiki:custom_helmet,location=slot.armor.head}]
```

通过使用列入`tick.json`文件的函数，我们可以每刻使用此选择器运行命令。

例如，要让自定义头盔给佩戴者提供跳跃提升，可以使用以下函数：

<CodeHeader>RP/functions/wiki/custom_helmet_effects.mcfunction</CodeHeader>

```c
effect @e[hasitem={item=wiki:custom_helmet,location=slot.armor.head}] jump_boost 10
```

<CodeHeader>BP/functions/tick.json</CodeHeader>

```json
{
    "values": ["wiki/custom_helmet_effects"]
}
```

## 服务器动画方法

请记住，这需要修改玩家行为，这是许多附加包的常见主题；因此，如果你愿意这样做，你的附加包可能与其他附加包不兼容。

第一步是创建一个服务器动画，这是一个在某些关键帧运行命令或事件的文件。虽然客户端动画在资源包中，但服务器动画在行为包中。你可以在这里阅读更多内容[这里](/entities/timers#animation-based-timers)。我们可以从使用以下内容作为模板开始：

<CodeHeader>BP/animations/player.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animations": {
        "animation.player.emerald_armor": {
            "animation_length": 0.05,
            "loop": true,
            "timeline": {
                "0.0": []
            }
        }
    }
}
```

让我们看看这个模板中的内容以及每个部分的作用：

-   `animation.player.emerald_armor`是我们动画的标识符；你可以将其更改為其他内容，例如`animation.player.phantom_armor`。
-   `animation_length`是动画持续的时间；我们将使用0.05秒，因为这是游戏中一刻的长度。
-   `loop`非常简单；将其设置为true会使动画循环。
-   `timeline`在给定关键帧运行命令和事件。

我们可以将命令添加到时间线中的`0.0`数组来执行，例如一个`/effect`命令，如下所示：

```json
{
    "0.0": ["/effect @s speed 1 0"]
}
```

当然，我们不仅限于`/effect`。如果你想使用其他命令，如`/function`或`/particle`，请直接使用！

之后，我们在服务器动画中完成，接下来我们将在物品的行为文件中进行快速添加。

### 应用物品标签

为了实际检查我们的物品是否已装备，我们可以使用检查物品标签的Molang查询。

你可以跳过此部分，如果你：

-   想要检查原版物品，例如通过`minecraft:iron_tier`标签检查铁盔甲片
-   想通过`q.is_item_name_any`检查物品，该查询检查任何槽中的物品标识符

在物品的行为中，我们需要添加一个标签。
例如，如果我们想添加`wiki:emerald_tier`标签，我们将以下内容添加到tags组件：

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:tags": {
    "tags": ["wiki:emerald_tier"]
}
```

就是这样，现在你的物品有了你分配的标签！如果你愿意，可以添加更多标签，但这是我们需要的全部内容。

### 玩家行为

最后，我们需要修改玩家行为来运行服务器动画。我们将完全在`description`中工作。

首先，我们需要为动画设置一个简称。如果你有客户端动画的经验，这个过程将非常相似。将`animations`添加到`description`，并设置一个简称，如下所示：

<CodeHeader>BP/entities/player.json > minecraft:entity > description</CodeHeader>

```json
{
    "identifier": "minecraft:player",
    "spawn_category": "creature",
    "is_spawnable": false,
    "is_summonable": false,
    "animations": {
        "emerald_armor": "animation.player.emerald_armor"
    }
}
```

现在设置了简称，我们可以运行动画了。

将`scripts`添加到`description`，并设置一个Molang查询来运行。为了检查物品，我们可以使用以下之一：

-   `q.is_item_name_any`，检查任意槽中给定的物品标识符。此示例将检查任一手中的`wiki:totem_of_retreat`：

```molang
q.is_item_name_any('slot.weapon.mainhand', 'wiki:totem_of_retreat') || q.is_item_name_any('slot.weapon.offhand', 'wiki:totem_of_retreat')
```

-   `q.equipped_item_any_tag`，检查给定槽中至少有一个给定标签。此示例将允许使用翡翠或幻影 tier盔甲片：

```molang
q.equipped_item_any_tag('slot.armor.head', 'wiki:emerald_tier', 'wiki:phantom_tier')
```

-   `q.equipped_item_all_tags`，检查给定槽中的所有给定标签。此示例将仅允许既是翡翠又是远古 tier的盔甲片：

```molang
q.equipped_item_all_tags('slot.armor.head', 'wiki:ancient_tier', 'wiki:emerald_tier')
```

让我们看一个使用`q.equipped_item_any_tag`的示例：

<CodeHeader>BP/entities/player.json > minecraft:entity > description</CodeHeader>

```json
{
    "identifier": "minecraft:player",
    "spawn_category": "creature",
    "is_spawnable": false,
    "is_summonable": false,
    "animations": {
        "emerald_armor": "animation.player.emerald_armor"
    },
    "scripts": {
        "animate": [
            {
                "emerald_armor": "q.equipped_item_any_tag('slot.armor.head', 'wiki:emerald_tier')"
            }
        ]
    }
}
```

此示例将在头盔槽中装备翡翠 tier物品时运行具有`emerald_armor`简称的服务器动画。你可以更改Molang字段以匹配你的物品标签，使用不同的查询，或添加额外的查询。

你可以在[Minecraft Wiki](https://minecraft.wiki/w/Slot#Bedrock_Edition)查看其他槽标识符列表。

### 总结

通过设置服务器动画、玩家行为和物品标签，你的装备物品现在可以运行命令了！这种技术允许比受限物品组件更大的物品自定义。如果你想为效果或附加包添加更多内容，请查看下一部分；否则，恭喜，你完成了！

### 附加内容

#### 多个需求物品

如果你想在装备多套盔甲部件时运行命令，我们可以扩展之前的Molang：

<CodeHeader>BP/entities/player.json > minecraft:entity > description > scripts</CodeHeader>

```json
"animate": [
    {
        "emerald_armor": "q.equipped_item_any_tag('slot.armor.head', 'wiki:emerald_tier') && q.equipped_item_any_tag('slot.armor.chest', 'wiki:emerald_tier') && q.equipped_item_any_tag('slot.armor.legs', 'wiki:emerald_tier') && q.equipped_item_any_tag('slot.armor.feet', 'wiki:emerald_tier')"
    }
]
```

此示例将检查所有四个盔甲槽中的翡翠 tier盔甲，如果全部装备则运行动画。

#### 进一步条件

海龟壳并不总是施加水下呼吸，而是仅在玩家首次进入水中时持续10秒。如果我们希望我们的翡翠盔甲仅在生命值较低时运行动画，我们可以向Molang添加另一个查询：

<CodeHeader>BP/entities/player.json > minecraft:entity > description > scripts</CodeHeader>

```json
"animate": [
    {
        "emerald_armor": "q.equipped_item_any_tag('slot.armor.head', 'wiki:emerald_tier') && q.health <= 5"
    }
]
```

此示例将在剩余2.5颗心或更少时运行动画，允许玩家在危险时快速逃跑。

我们也可以将其应用于需要多件盔甲的情况，Molang更长：

<CodeHeader>BP/entities/player.json > minecraft:entity > description > scripts</CodeHeader>

```json
{
    "animate": [
        {
            "emerald_armor": "q.equipped_item_any_tag('slot.armor.head', 'wiki:emerald_tier') && q.equipped_item_any_tag('slot.armor.chest', 'wiki:emerald_tier') && q.equipped_item_any_tag('slot.armor.legs', 'wiki:emerald_tier') && q.equipped_item_any_tag('slot.armor.feet', 'wiki:emerald_tier') && q.health <= 5"
        }
    ]
}
```

你可以在[bedrock.dev](https://bedrock.dev/docs/stable/Molang#List%20of%20Entity%20Queries)查看已记录的Molang查询列表。

#### 带效果的多个物品

如果你想添加更多具有独特效果的物品，不要担心；这很容易做到。你可以创建一个新的服务器动画文件，或像这样添加到之前的文件中：

<CodeHeader>BP/animations/player.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animations": {
        "animation.player.emerald_armor": {
            "timeline": {
                "0.0": ["..."]
            },
            "animation_length": 0.05,
            "loop": true
        },
        "animation.player.phantom_armor": {
            "timeline": {
                "0.0": ["..."]
            },
            "animation_length": 0.05,
            "loop": true
        }
    }
}
```

在玩家行为中，你还需要在`animations`和`scripts`中添加内容。

<CodeHeader>BP/entities/player.json > minecraft:entity > description</CodeHeader>

```json
{
    "identifier": "minecraft:player",
    "spawn_category": "creature",
    "is_spawnable": false,
    "is_summonable": false,
    "animations": {
        "emerald_armor": "animation.player.emerald_armor",
        "phantom_armor": "animation.player.phantom_armor"
    },
    "scripts": {
        "animate": [
            {
                "emerald_armor": "q.equipped_item_any_tag('slot.armor.head', 'wiki:emerald_tier')"
            },
            {
                "phantom_armor": "q.equipped_item_any_tag('slot.armor.head', 'wiki:phantom_tier')"
            }
        ]
    }
}
```

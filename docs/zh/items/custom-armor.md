---
title: 自定义盔甲
example: custom_armor
description: 学习如何制作一套自定义盔甲。
category: 教程
license: true
mentions:
    - SirLich
    - Dreamedc2015
    - sermah
    - yanasakana
    - Joelant05
    - MedicalJewel105
    - aexer0e
    - Brougud
    - XxPoggyisLitxX
    - LeGend077
    - SmokeyStack
    - QuazChick
---

:::tip 格式版本 1.26.10
本文档假定你具备自定义物品和可装备物品的基础知识。
开始之前请查看[物品指南](/items/items-intro)!
:::

制作自定义盔甲出乎意料地简单，尽管需要处理一些文件，可能还需要一点纹理工作。

## 盔甲纹理

每套自定义盔甲都需要四个物品图标纹理，以及三个应用于穿戴时盔甲模型的单独纹理。

第一个盔甲模型纹理（这里命名为`custom_1.png`）应用于头盔、护胸和靴子，而第二个纹理（这里命名为`custom_2.png`）应用于护腿。

<div style="display: grid; grid-template-columns: repeat(auto-fill, 256px); column-gap: 1em;">

<ExampleFile path="RP/textures/wiki/items/custom_helmet.png" />
<ExampleFile path="RP/textures/wiki/items/custom_chestplate.png" />
<ExampleFile path="RP/textures/wiki/items/custom_leggings.png" />
<ExampleFile path="RP/textures/wiki/items/custom_boots.png" />
<ExampleFile path="RP/textures/wiki/models/armor/custom_baby.png" />
<ExampleFile path="RP/textures/wiki/models/armor/custom_1.png" />
<ExampleFile path="RP/textures/wiki/models/armor/custom_2.png" />

</div>

你还需要使用`item_texture.json`文件将每个物品图标添加到[物品纹理图集](/concepts/texture-atlases#items)中：

<ExampleFile path="RP/textures/item_texture.json" />

## 自定义头盔

### 物品JSON

<ExampleFile path="BP/items/custom_helmet.json" />

### 可装备物品JSON

此时你的物品会在游戏中出现并且可以穿戴，但在玩家模型上不会有任何外观。

这种外观可以通过使用称为_可装备物品_的功能来实现，它们会根据实体的装备_附加_到另一个实体上。首先，你需要在资源包中创建一个`attachables`文件夹（可能已经有一个）。

本指南中的可装备物品示例主要基于原版盔甲可装备物品，它们支持盔甲纹理、附魔光泽和幼体生物专用模型。

<ExampleFile path="RP/attachables/custom_helmet.json" />

### 物品名称

最后，让我们通过在资源包中添加翻译来定义物品名称，格式为`item.<identifier>=<name>`{lang=xml}。

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_helmet=Custom Helmet
```

如果现在进入游戏查看你制作的东西，你应该能够戴上头盔并为自己干得漂亮而鼓掌！

![](inventory.png)

## 自定义护胸

### 物品JSON

<ExampleFile path="BP/items/custom_chestplate.json" />

### 可装备物品JSON

<ExampleFile path="RP/attachables/custom_chestplate.json" />

### 物品名称

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_chestplate=Custom Chestplate
```

## 自定义护腿

### 物品JSON

<ExampleFile path="BP/items/custom_leggings.json" />

### 可装备物品JSON

<ExampleFile path="RP/attachables/custom_leggings.json" />

### 物品名称

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_leggings=Custom Leggings
```

## 自定义靴子

### 物品JSON

<ExampleFile path="BP/items/custom_boots.json" />

### 可装备物品JSON

<ExampleFile path="RP/attachables/custom_boots.json" />

### 物品名称

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
item.wiki:custom_boots=Custom Boots
```

## 结果

就是这样，你现在有一套完整的自定义盔甲可以炫耀了！你可以以此为基础制作游戏中任何其他盔甲。

![盔甲架和幼体僵尸都穿戴着一整套自定义盔甲。](armor_stand.png)

## 奖励 - 制作套装效果

这稍微高级一点，但假设你想让自定义盔甲表现得像RPG游戏中的套装。我们可以添加一些代码来检查是否装备了套装并实现一些很棒的效果。

请注意，对于效果，你可以使用`tick.json`和带有hasitem选择器参数的函数来避免使用player.json。

在这个例子中，我们只是添加了一个将攻击者传送到附近某处的机会，并在控制台添加了一些文字作为调味。

因为我们希望这在玩家被击中时触发，所以我们需要在`player.json`文件中添加一些逻辑。这是一个很大的文件，不幸的是我们需要确保它里面包含所有默认内容，因为它会覆盖默认的玩家组件等。

因此，我只会包含你需要添加到`components`和`events`部分的内容。如果你不知道`player.json`是什么，请在原版行为包中查找它并将其复制到你的项目中。

首先，让我们放入伤害传感器组件（放在你的组件部分中），它监听你受到伤害的时候并让你从中触发一个事件。

<CodeHeader>BP/entities/player.json#components</CodeHeader>

```json
"minecraft:damage_sensor": {
    "triggers": {
        "on_damage": {
            "filters": {
                "all_of": [
                    {
                        "test": "has_equipment",
                        "subject": "self",
                        // Domain is the body part in this case
                        "domain": "head",
                        "operator": "==",
                        // The item identifier we want to check
                        "value": "wiki:custom_helm"
                    },
                    {
                        "test": "has_equipment",
                        "subject": "self",
                        "domain": "torso",
                        "operator": "==",
                        // Worth noting you can omit prefix for minecraft internal items i.e stick
                        "value": "wiki:custom_chest"
                    },
                    {
                        "test": "has_equipment",
                        "subject": "self",
                        "domain": "leg",
                        "operator": "==",
                        "value": "wiki:custom_leggings"
                    },
                    {
                        "test": "has_equipment",
                        "subject": "self",
                        "domain": "feet",
                        "operator": "==",
                        "value": "wiki:custom_boots"
                    }
                ]
            },
            // If all the triggers match in the filter raise the event
            "event": "wiki:armor_sets.custom.taken_damage"
        },
        // This means if it matches the check it still applies damage
        // Can be good to ignore team damage or similar scenarios
        "deals_damage": true
    }
}
```

从注释中可以看到，虽然内容很多，但实际上我们只是在监听某些内容，然后确保只过滤我们关心的结果，然后依赖于一个事件。

事件可以叫任何名字，但通常最好让它更具体一些，以防你最终有多个类似的事件，等等，也可以帮助找到它的多个部分。例如，我可以搜索"armour_sets"并找到所有相关事件。然后完成后，在同一文件中决定我们想对这个事件做什么，我们把它放在`events`部分。

<CodeHeader>BP/entities/player.json#events</CodeHeader>

```json
"wiki:armor_sets.my_custom.taken_damage": {
    "randomize": [
        {
            "weight": 1,
            // We do a sequence here as we want to apply one command on one entity and the other on ourselves
            "sequence": [
                {
                    // This will take the attacker/other because it was in context at time of raising the event in the damage_sensor
                    "queue_command": {
                        // Teleport the entity away from us
                        "command": "spreadplayers ~~ 5 20 @s",
                        // Run the command on the attacker not us
                        "target": "other"
                    }
                },
                {
                    "queue_command": {
                        "command": "tellraw @s { \"rawtext\": [{ \"text\": \"§aYour armor glows and the enemy vanishes\" }] }"
                    }
                }
            ]
        },
        {
            // Dummy weighting so it happens semi frequently
            "weight": 20
        }
    ]
}
```

就是这样，你可以按你认为合适的方式调整各部分，但最终你已经有了将效果应用到盔甲并检查是否穿戴了整套装备或检查其他装备的所有部件。

你还可以将装备检查从self改为other，检查攻击你的人是否穿戴了某些东西，甚至可以检查你是否在攻击某种方块/实体并根据不同情况做不同的效果。我们没有在这里直接涉及这些，但有一个足够好的起点让你走上正轨，并在事物上发挥创意。

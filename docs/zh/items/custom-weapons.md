---
title: 自定义武器
description: 学习如何制作自定义武器。
category: 教程
tags:
    - easy
mentions:
    - SirLich
    - solvedDev
    - MedicalJewel105
    - aexer0e
    - PepijnMC
    - ThomasOrs
    - Xterionix
    - QuazChick
---

跟着本指南创建一个自定义剑物品。自行更改它来创建任何你想要的武器！

查看[攻击实体](/items/item-events#hit-entity)事件来为你的武器添加更多功能。

## 自定义剑物品

与其他物品教程一样，我们先制作一个简单的自定义剑，如下所示。

<CodeHeader>BP/items/my_sword.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:item": {
        "description": {
            "identifier": "wiki:my_sword",
            "menu_category": {
                "category": "equipment",
                "group": "minecraft:itemGroup.name.sword"
            }
        },
        "components": {
            "minecraft:max_stack_size": 1,
            // Give the item the correct positioning in third person
            "minecraft:hand_equipped": true,
            "minecraft:durability": {
                "max_durability": 600
            },
            // How much additional damage this weapon will deal to entities
            "minecraft:damage": 10,
            // We also let it be enchantable in the "sword" slot
            "minecraft:enchantable": {
                "value": 10,
                "slot": "sword"
            },
            // This texture is used for both inventory and the hand model
            "minecraft:icon": "wiki:my_sword",
            "minecraft:display_name": {
                "value": "My Custom Sword"
            },
            // Allow the sword to be repaired with sticks
            "minecraft:repairable": {
                "repair_items": [
                    {
                        "items": ["minecraft:stick"],
                        "repair_amount": "context.other->q.remaining_durability + 0.05 * context.other->q.max_durability"
                    }
                ]
            }
        }
    }
}
```

这至少是让剑进入游戏所需的最低限度，我们仍然需要在RP中注册图标，但这不是什么大问题，因为我们只需要进入RP文件夹并像这样输入它。

<CodeHeader>RP/textures/item_texture.json</CodeHeader>

```json
{
    "texture_data": {
        "wiki:my_sword": {
            // Make sure you have put an icon texture called my_sword.png here
            "textures": "textures/wiki/items/my_sword"
        }
    }
}
```

如果你没有自己的纹理可以使用，这里有一个示例纹理，只需"另存为"并放入`RP/textures/items`目录。

<WikiImage
    src="my_sword.png"
    alt=""
    caption="RP/textures/wiki/items/my_sword"
    width="128"
    pixelated
/>

## 游戏中

现在我们有了一个包含物品JSON定义的BP和一个包含纹理的RP，我们可以创建一个新世界，确保应用了我们的附加包。

完成上述所有操作后，进入创造模式，你应该能够通过名称找到你的剑，或在剑类别下找到它，如图所示。

![](custom_sword.jpg)

然后，如果把它放在手中，你应该会在游戏中看到它像这样。

![](held_sword.jpg)

现在这并不太难，不是吗？你现在可以制作任意数量的自定义剑，然而，如果你愿意，这里还有更多有趣的事情可以做。

## 类似工具的功能

你也可以混合搭配其他组件，如`minecraft:digger`，让你更快地穿过蜘蛛网或竹子，如下所示：

<CodeHeader>minecraft:item > components</CodeHeader>

```json
"minecraft:digger": {
    "use_efficiency": true,
    "destroy_speeds": [
        {
            "block": "minecraft:web",
            "speed": 15
        },
        {
            "block": "minecraft:bamboo",
            "speed": 10
        }
    ]
}
```

## 物品配方

你可能应该为它制作一个配方，这在之前的章节中有介绍，因为那里没有什么真正新东西，但以防你不确定，这里有一个用末影之眼和末影珍珠制作剑的示例。

<CodeHeader>BP/recipes/my_sword.json</CodeHeader>

```json
{
    "format_version": "1.26.10",
    "minecraft:recipe_shaped": {
        "description": {
            "identifier": "wiki:my_sword"
        },
        "tags": ["crafting_table"],
        "pattern": ["e", "E", "#"],
        "key": {
            "#": {
                "item": "minecraft:stick"
            },
            "E": {
                "item": "minecraft:ender_eye"
            },
            "e": {
                "item": "minecraft:ender_pearl"
            }
        },
        "result": {
            "item": "wiki:my_sword"
        },
        "unlock": [
            {
                "item": "minecraft:ender_eye"
            }
        ]
    }
}
```

![](sword_recipe.jpg)

如果把它放进去，你现在可以在游戏中合成你的剑，并希望你能继续制作任何你喜欢的其他自定义剑，甚至弓或三叉戟。

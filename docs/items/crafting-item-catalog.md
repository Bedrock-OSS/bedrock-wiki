---
title: Crafting Item Catalog
description: A guide in making item groups in the creative inventory
category: General
nav_order: 1
tags:
    - guide
mentions:
    - Supernova3695
---

The crafting item catalog file can create custom expandable groups within the creative inventory allowing groups on items to be shrunk.

## Setup 

First of all you need to create a file named crafting_item_catalog.json in the item_catalog folder in order for this to work. The add this to the file: 

<CodeHeader>BP/item_catalog/crafting_item_catalog.json</CodeHeader>

```json
{
    "format_version": "1.21.60",
    "minecraft:crafting_items_catalog": {
        "categories": []
    }
}
```
The categories array is where all the custom groups will go. The setup is like this: 

<CodeHeader>BP/item_catalog/crafting_item_catalog/minecraft:crafting_items_catalog</CodeHeader>

```json
"categories": [
    {
        "category_name": "construction",
        "groups": [
            {
                "group_identifier": {
                    "icon": "wiki:silver_ore",
                    "name": "wiki:itemGroup.name.ore"
                },
                "items": [
                    "wiki:silver_ore",
                    "wiki:steel_ore"
                ]
            }
        ]
    }
]   
```

The `group_identfier` section determines the item that will represent the group when it is collapsed and the name of the field.
-    `icon` determines the item/block to display
-    `name` is the localization key to use as the name of the group. It is also used in items and blocks group field to set the block in a group.

The `category_name` determines the tab of the inventory that the item group will be found in. In this case it is found in the construction category but it can be any of the following:
-    `construction`
-    `nature`
-    `items`
-    `equipment`

And thats it! You now have a custom category for your items in the creative inventory.

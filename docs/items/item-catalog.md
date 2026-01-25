---
title: Item Catalog
description: Learn how to specify where items appear in the creative menu and recipe book, as well as how to add your own expandable groups to the creative menu.
category: General
license: true
mentions:
    - Supernova3695
    - QuazChick
---

The crafting item catalog file is used to specify where items appear in the creative menu and recipe book.

First of all, you need to create a file named `crafting_item_catalog.json` in the `item_catalog` folder of your behavior pack.
Below is the basic JSON format which you should include in the file:

<CodeHeader>BP/item_catalog/crafting_item_catalog.json</CodeHeader>

```json
{
    "format_version": "1.26.0",
    "minecraft:crafting_items_catalog": {
        "categories": []
    }
}
```

## Adding Items

First, you need to decide which category your items should be placed into.
This determines which tab the items are under in the creative menu and recipe book.

The four available categories are:

-   `"construction"`{lang=json}
-   `"equipment"`{lang=json}
-   `"items"`{lang=json}
-   `"nature"`{lang=json}

For example, if we were adding items to the "Nature" tab, a new entry would be created in the `categories` array specifying `"nature"`{lang=json} as the `category_name`:

<CodeHeader>BP/item_catalog/crafting_item_catalog.json</CodeHeader>

```json
{
    "format_version": "1.26.0",
    "minecraft:crafting_items_catalog": {
        "categories": [
            {
                "category_name": "nature",
                "groups": []
            }
        ]
    }
}
```

Items are added to each category of the item catalog in groups.
To add a new group of items, you'll need to make a new entry in the category's `groups` array.

The following example adds two custom ore blocks to the "Nature" category.
Note that custom groups in the item catalog will appear after vanilla groups.

<CodeHeader>minecraft:crafting_items_catalog > categories</CodeHeader>

```json
{
    "category_name": "nature",
    "groups": [
        {
            "items": ["wiki:silver_ore", "wiki:steel_ore"]
        }
    ]
}
```

### Expandable Groups

For creative mode players, you have the option to make groups of items expandable and collapsible.
This can be achieved by adding the `group_identifier` parameter to the group.

-   `icon` determines the item to display as the group's icon.
-   `name` is the localization key to use as the name of the group. It can also be used to reference the group in the `menu_category` parameter of items and blocks.

Let's use the `group_identifier` parameter to make our custom ore group take up less space in the creative menu!

<CodeHeader>minecraft:crafting_items_catalog > categories</CodeHeader>

```json
{
    "category_name": "nature",
    "groups": [
        {
            "group_identifier": {
                "icon": "wiki:silver_ore",
                "name": "wiki:itemGroup.name.ore"
            },
            "items": ["wiki:silver_ore", "wiki:steel_ore"]
        }
    ]
}
```

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
wiki:itemGroup.name.ore=Custom Ores
```

And that's it! You now know how to add a custom group for your items to the item catalog.

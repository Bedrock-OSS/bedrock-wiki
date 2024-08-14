---
title: Custom Pottery Sherds
description: Learn how to make custom pottery sherds.
category: Tutorials
mentions:
    - SmokeyStack
---

Minecraft Bedrock allows us to add custom pottery sherds. This article will cover how to create them.

## Registering the Sherd

Pottery Sherds are controlled by an item tag! Specifically the `"minecraft:decorated_pot_sherds"`. Simply add this tag to your existing item. If you don't know how to make a custom item, please refer to our [guide](/items/items-intro.md). If you do not know how to add item tags, please refer to this [article](/items/item-tags.md).

Now that we have registered our sherd, we can test it by putting the sherd in a crafting table. If you applied the tag correctly, the crafting table should output a deocrated pot!

![Image of the crafting output](/assets/images/items/custom-pottery-sherd/crafting.png)

However, the decorated pot still will not display the sherd itself. This is because we haven't told the decorated pot what image to display!

## Displaying the Sherd

To tell the game what image the sherd is supposed to display, we need to edit the decorated pot's client entity file. Add the following JSON file:

<CodeHeader>RP/entity/decorated_pot.json</CodeHeader>

```json
{
    "format_version": "1.8.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "minecraft:decorated_pot",
            "textures": {
                "custom_item": "path/to/the/display"
            }
        }
    }
}
```

- `custom_item` is the identifier of your custom pottery sherd. Replace this with the identifier of your item.
- `path/to/the/display` refers to the path that points to your display. Since this is a reference path, you can point it to any image in the `textures` folder. Please note that decorated pots does not support transparency.

If you've done everything right, your decorated pot will now display the sherd you want instead of being a blank pot!

**Q: Won't editing the client entity file make my add-on incompatible?**

**A: It does not! Client entity files actually merge definitions together. So long your item identifier is unique, other add-ons won't override them! As a good practice, prefix your identifier with your namespace.**
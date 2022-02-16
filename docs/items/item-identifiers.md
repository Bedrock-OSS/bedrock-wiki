---
title: Vanilla Item Identifiers
category: Documentation
---

`identifier` is an required parameter that sits inside the description of the item's behavior file.
It accepts Vanilla Minecraft names, like `namespace:totem_of_undying`, allowing to acces hardcoded item effects.


<CodeHeader>Behavior Item Description</CodeHeader>

```json
        "description": {
            "identifier": "wiki:totem_of_undying",
            "category": "items"
        }
```

:::warning
Not every vanilla identifier/effect is mentioned here. Try experimenting yourself to find new vanilla identifier/effects and also consider adding them here.
:::

## Known runtime-identifier effects:

The namespace is allowed to be changed, learn more about namespaces [here](https://wiki.bedrock.dev/concepts/namespaces.html#top).

### namespace:spyglass

-   Makes it zoom-able like a spyglass, for the zoom to work it requires the item to be usable.

---

### namespace:bow

-   Adds a small increasing zoom on use, for the zoom to work it requires the item to be usable.

---

### namespace:crossbow

-   The item will be rotated horizontaly on your arm.

---

### namespace:map

-   Will add the holding map animation.

---

### namespace:filled_map

-   Will add the holding map animation.
-   Can be put in a cartography table.

---

### namespace:totem_of_undying

-   Will behave like a Totem Of Undying.

---

### namespace:lead

-   Will behave like a lead.

---

### namespace:shield

-   The item icon will be changed to the shield one.
-   Adds the shield animation.

---

### namespace:netherite_ingot

-   The item will be allowed to put in a Smithing table.
-   The item can be used in Smithing Table recipes

---

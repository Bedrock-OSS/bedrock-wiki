---
title: Vanilla Item Identifiers
category: Documentation
---

An `identifier` is a required parameter that sits inside the description of the item's behaviour file.
It accepts Vanilla Minecraft names, like so, `<namespace>:<vanilla item>`, which will apply certain hardcoded item behaviours, depending on the identifier used.

<CodeHeader>BP/items/custom_item.json#minecraft:item</CodeHeader>

```json
"description": {
    "identifier": "wiki:totem_of_undying",
    "category": "items"
}
```

:::warning
Not every Vanilla Identifier and their behaviours are documented. The following list may be missing important points about the known Identifiers that do affect items.

Consider experimenting with them.
:::

## Known Identifier Effects

The namespace is allowed to be changed, learn more about namespaces [here](/concepts/namespaces).

### namespace:banner

-   The item icon and model will be changed to that of the Vanilla Banner. 

---

### namespace:bow

-   Adds a small increasing zoom on use, for the zoom to work it requires the item to be usable.

---

### namespace:crossbow

-   The item will be rotated horizontally on your arm.

---

### namespace:diamond

-   Is accepted as a valid item to change the effect given off by a Beacon.

---

### namespace:emerald

-   Is accepted as a valid item to change the effect given off by a Beacon.

---

### namespace:filled_map

-   Will add the holding map animation.
-   Can be put in a cartography table.

---

### namespace:gold_ingot

-   Is accepted as a valid item to change the effect given off by a Beacon.

---

### namespace:iron_ingot

-   Is accepted as a valid item to change the effect given off by a Beacon.

---

### namespace:lapis_lazuli

-   Makes the Item usable with Enchantment Tables, to enchant your items in place of Lapis Lazuli.

---

### namespace:lead

-   Will behave like a Lead.

---

### namespace:map

-   Will use the holding map animation.

---

### namespace:netherite_ingot

-   Is accepted in custom Smithing Recipes as the secondary item.
-   Is accepted as a valid item to change the effect given off by a Beacon.

---

### namespace:shield

-   The item icon will be permanently changed to that of the Vanilla Shield.
-   Adds the shield animation and behavior.

---

### namespace:spyglass

-   Makes it zoom-able like a spyglass, for the zoom to work it requires the item to be usable.

---

### namespace:skull

-   The item icon will be changed to that of the Vanilla Skull.
-   The item will be able to put on a armorstand and a player, the model and textures of the skull will be applied only then.

---

### namespace:totem_of_undying

-   Will behave like a Totem of Undying.

---

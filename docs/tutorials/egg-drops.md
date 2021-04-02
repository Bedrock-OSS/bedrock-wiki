---
layout: page
title: Egg Drops
parent: Tutorials
---

# Egg Drops in loot tables

<details id="toc" open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

Beginner
{: .label .label-green }

Here is how to make entities drop their own eggs when killed:

## Add loot table to BP entity

```json
"minecraft:loot": {
    "table": "loot_tables/entities/your_entity.json"
},
```

## Create the loot table

```json
{
    "pools": [
        {
            "rolls": 1,
            "entries": [
                {
                    "type": "item",
                    "name": "minecraft:spawn_egg",
                    "weight": 1,
                    "functions": [
                        {
                            "function": "set_actor_id",
                            "id": "namespace:your_entity" // View notes below
                        }
                    ]
                }
            ]
        }
    ]
}
```

**Notes:** Change this to match your entity, or remove it to automatically use the ID of the entity that drops this loot table.




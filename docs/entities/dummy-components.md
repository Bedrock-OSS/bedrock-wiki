---
title: Dummy Components
category: Documentation
---

Dummy components are useless components that are only used for data storage. Dummy components **don't** do anything on their own. They need to be paired with secondary mechanics to have any function. Dummy components are useful because they allow us to store information on the entities, and use the information to drive graphics/gameplay mechanics.

Good examples are `variant` and `mark_variant`. These components can be set with an Integer value. In the vanilla resource pack, this Integer is used to pick the textures for the Cat, and Horse. Another good example is `is_tamed`, which is used by the Horse to handle whether he is ridable or not.

Dummy components are good because they allow us to save data about our entity, and then query this data using Molang.

## Integer Dummies

Integer dummies are set with an integer value, which allows you to store numbers, such as 1, 10, or 1423. These integers can be read using queries. Integer dummies are the most useful.

## Bit Dummies

Bit dummies store a single bit of information. Namely `True` or `False`. For example `is_tamed`, which is either `False` (not added to the entity), or `True` (Added to the entity).

## Dummies

| Type      | Query                                                         | Component                    | Notes                                                                                                                             |
| --------- | ------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Int**   | query.variant                                                 | minecraft:variant            |                                                                                                                                   |
| **Int**   | query.mark_variant                                            | minecraft:mark_variant       |                                                                                                                                   |
| **Int**   | query.skin_id                                                 | minecraft:skin_id            |                                                                                                                                   |
| **Int\*** | Filter like: `"test": "is_color"`, colors are provided below. | minecraft:color              | Also sets color in materials.                                                                                                     |
| **Int\*** | No known filter, but can be used with `"has_component"`       | minecraft:color2             | Also sets color in materials.                                                                                                     |
| Bit       | query.is_illager_captain                                      | minecraft:is_illager_captain |                                                                                                                                   |
| Bit       | query.is_baby                                                 | minecraft:is_baby            | Disables use of `minecraft:breedable`                                                                                             |
| Bit       | query.is_sheared                                              | minecraft:is_sheared         |                                                                                                                                   |
| Bit       | query.is_saddled                                              | minecraft:is_saddled         |                                                                                                                                   |
| Bit       | query.is_tamed                                                | minecraft:is_tamed           |                                                                                                                                   |
| Bit       | query.is_chested                                              | minecraft:is_chested         | Will drop chest on death                                                                                                          |
| Bit       | query.is_powered                                              | minecraft:is_charged         |                                                                                                                                   |
| Bit       | query.is_stunned                                              | minecraft:is_stunned         |                                                                                                                                   |
| Bit       | query.can_climb                                               | minecraft:can_climb          | Will allow entities to climb ladders                                                                                              |
| Bit       | query.can_fly                                                 | minecraft:can_fly            | Marks the entity as being able to fly, the pathfinder won't be restricted to paths where a solid block is required underneath it. |
| Bit       | query.can_power_jump                                          | minecraft:can_power_jump     | Allows the entity to power jump like the horse does in vanilla.                                                                   |
| Bit       | query.is_ignited                                              | minecraft:is_ignited         |                                                                                                                                   |
| Bit       | query.out_of_control                                          | minecraft:out_of_control     | New, used by code for hardcoded boat movement/particle stuff, and the Molang query. Probably safe                                 |
| Bit   | query.has_any_family('monster')                            | minecraft:type_family         | Can use a family type and return a bit value from a family such as 'monster' as true or false.
### Colors for the color and color2 components

-   black
-   blue
-   brown
-   cyan
-   gray
-   green
-   light_blue
-   light_green
-   magenta
-   orange
-   pink
-   purple
-   red
-   silver
-   white
-   yellow

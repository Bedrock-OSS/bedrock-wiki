---
layout: page
title: Queries
parent: Documentation
---

# Molang

<details id="toc" class="top-level" open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>


The bedrock documentation for Molang is notoriously bad. This page will attempt to remedy this by providing additional details for individual queries, *where possible*. This page is intended to be searched, not read in full. Use the side-bar, or use `ctrl-f` to navigate.

[This list is limited. The full list of queries can be found here!](https://bedrock.dev/docs/stable/MoLang#List%20of%20Entity%20Queries)

# query.get_equiped_item_name

Formatted like: `query.get_equiped_item_name(hand) = 'name'`

Takes one optional hand slot as a parameter (0 or 'main_hand' for main hand, 1 or 'off_hand' for off hand), and a second parameter (0=default) if you would like the equipped item or any non-zero number for the currently rendered item, and returns the name of the item in the requested slot (defaulting to the main hand if no parameter is supplied) if there is one, otherwise returns ''.

Where `hand` is the hand you would like to query for, 

Where `name` is the item you want to test for. No namespace, and please notice the quotes.

Example: `"query.get_equipped_item_name == 'diamond'"`

Can you test for items in the inventory? No. You can't. You can only test for the two slots defined here.

# query.armor_texture_slot

Formatted like: `query.armor_texture_slot(x) = y`. 

Where `x` and `y` are both integer arguments, from the following table:

### X

| Argument | Slot       |
|----------|------------|
| 0        | Helmet     |
| 1        | Chestplace |
| 2        | Leggings   |
| 3        | Boots      |

### Y

| Argument | Type                  |
|----------|-----------------------|
| -1       | none                  |
| 0        | Chain armor piece     |
| 1        | Iron armor piece      |
| 2        | Diamond armor piece   |
| 3        | Boots of any type     |
| 4        | Gold armor piece      |
| 5        | Elytra                |
| 6        | Turtle helmet         |
| 7        | Netherite armor piece |

### Example

`query.armor_texture_slot(3) == 1`: queries for Iron Boots.

# query.armor_material_slot

Formatted like: `query.armor_material_slot(x) = y`. 

Where `x` and `y` are both integer arguments, from the following table:

### X

| Argument | Slot       |
|----------|------------|
| 0        | Helmet     |
| 1        | Chestplace |
| 2        | Leggings   |
| 3        | Boots      |

### Y
Unknown, possibly:

| Argument | Slot                       |
|----------|----------------------------|
| 0        | Default armor material     |
| 1        | Enchanted armor material   |
| 2        | Leather armor material     |
| 3        | Leather enchanted material |

# query.armor_color_slot

*Notice: As of version `1.16.100.51`, this query is crashing minecraft. It might be fixed in later versions.*

Formatted like: `color = query.armor_color_slot(slot, channel)`. 

Where `slot` and `channel` are both integer arguments, from the following tables:

### Slot

| Argument | Slot       |
|----------|------------|
| 0        | Helmet     |
| 1        | Chestplace |
| 2        | Leggings   |
| 3        | Boots      |

### Channel

| Argument | Slot                       |
|----------|----------------------------|
| 0        | Red channel                |
| 1        | Green channel              |
| 2        | Blue channel               |
| 3        | Alpha channel              |

### Color

Query returns color value in specified channel.

# query.is_ghost

Formatted like: `is_ghost = query.is_ghost`. 

Return 1.0 or 0.0 based on whether the entity is a ghost.

*Currently, only returns 1.0 for a guardian ghost and is used by its renderer.*

# query.is_grazing

Formatted like: `is_grazing = query.is_grazing`. 

Return 1.0 or 0.0 based on whether the entity is eating a block.

*Currently, only returns 1.0 for a sheep and entities using runtime identifier of a sheep.*

# query.is_jumping

Formatted like: `is_jumping = query.is_jumping`. 

Return 1.0 or 0.0 based on whether the entity is jumping.

For the player, conditions for its activation are:
 - the jump button is pressed (includes being in water and climbing a scaffolding)
 - OR auto-jump is triggered
 - OR swimming with auto-jump

# query.modified_move_speed

Formatted like: `modified_move_speed = query.modified_move_speed`. 

Returns the current walk speed of the entity modified by status flags such as is_baby or on_fire

Value example:
 - Player is walking: around 0.86
 - Player is sprinting: 1.0
 - Player is sprinting and jumping: 0.35
 - Player is walking on fire: 1.0
 - Player is sprinting on fire: 1.0
 - Player is sprinting and jumping on fire: 0.525

# query.on_fire_time

Formatted like: `on_fire_time = query.on_fire_time`. 

Returns the time in ticks since the entity started or stopped being on fire, else it returns 0.0

Value example:
 - Entity is summoned: value is 0
 - Entity is ignited: value is 0 and starts counting up 1 every tick
 - Entity is on fire for 2 seconds already: value is 40 and still counts up 1 every tick
 - Entity stops being on fire: value resets to 0 and continues to count up 1 every tick despite not being on fire
 - Entity is ignited second time: value resets to 0 and continues counting up 1 every tick
 - Entity stops being on fire the second time: value resets to 0 and continues to count up 1 every tick despite not being on fire

Basically it's tick timer that starts after entity is first ignited and resets every time it changes from/to being on fire.

# query.structural_integrity

Formatted like: `structural_integrity = query.structural_integrity`. 

Used by boats and minecarts for destroying it. It will decrease when attacking the entity and will recover with time. 
Probably unusable by anything other than boats and minecarts.

# variable.attack_time

### Explanation
This variable is setup as IF it was a query. In other words, it can be used on any entity, both on the client and server, regardless of whether you setup/define the variable correctly. 

### For entities
The variable tracks when the entity is swinging to attack. When not attacking, it will return 0.0, when attacking it will range from 0.0 to the total attack time, which may be around 0.3 or something similar. For players, this value ranges from 0.0 to 1.0. The variable returns a percentage, in the form of a decimal, for how far into the attack the entity is. For example, if an entity is halfway into its attack swing, then the variable will return 0.5. It increments linearly.

### For the Player
For the player, the variable will track whenever the arm bones are swinging, this includes:
 - placing blocks
 - placing entities
 - interacting (when swing is enabled)
 - melee attack

# query.is_roaring

Evaluates to true when a `knockback_roar` attack is happening.

# query.head_x_rotation

Formatted like: `query.head_x_rotation(x)` 

Where `x` specifies the head of the entity. It is not really relevant for any entity but the wither. 

Returns head pitch. looking up returns `-89.9`, looking all the way down returns `89.9`. 

# query.head_y_rotation
Formatted like: `query.head_y_rotation(x)`

Where `x` specifies the head of the entity. It is not really relevant for any entity but the wither. 

Returns yaw of the head from `-179.9` to `179.9`. the values wrap around so like if you are at `-179.9` and you turn just a little bit, it instantly goes to `179.9`.

# query.target_x_rotation and query.target_y_rotation

Identical to the respective `query.head_*_rotation`, however has no optional argument for selecting head.

# query.eye_target_x_rotation and query.eye_target_y_rotation

Not valid for player. not really sure what its good for.

# variable.short_arm_offset_right

Returns the offset factor for the player's rightarm bone compared to the default skin geometry. Slim-armed (3 pixel wide) skins will return `0.5` when equipped on the player. Normal (4 pixel wide) skins will return `0.0` when equipped on the player. Note: the player must go into 1st person perspective at least once for this variable to be initialized and usable elsewhere on the entity.

# variable.short_arm_offset_left 

Identical behavior to `variable.short_arm_offset_right` except it references the player leftarm bone.

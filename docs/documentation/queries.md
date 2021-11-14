---
title: Molang Queries
---

The bedrock documentation for Molang is notoriously bad. This page will attempt to remedy this by providing additional details for individual queries, _where possible_. This page is intended to be searched, not read in full. Use the side-bar, or use `ctrl-f` to navigate.

:::warning
This page is not an exhaustive list list! It only contains queries we've written extra information for. The full list of queries can be found [here](https://bedrock.dev/docs/stable/Molang#List%20of%20Entity%20Queries)!
:::

## query.get_equiped_item_name

Formatted like: `query.get_equiped_item_name(hand) = 'name'`

Takes one optional hand slot as a parameter (0 or 'main_hand' for main hand, 1 or 'off_hand' for off hand), and a second parameter (0=default) if you would like the equipped item or any non-zero number for the currently rendered item, and returns the name of the item in the requested slot (defaulting to the main hand if no parameter is supplied) if there is one, otherwise returns ''.

Where `hand` is the hand you would like to query for,

Where `name` is the item you want to test for. No namespace, and please notice the quotes.

Example: `"query.get_equipped_item_name == 'diamond'"`

Can you test for items in the inventory? No. You can't. You can only test for the two slots defined here.

## query.armor_texture_slot

Formatted like: `query.armor_texture_slot(x) = y`.

Where `x` and `y` are both integer arguments, from the following table:

### X

| Argument | Slot       |
| -------- | ---------- |
| 0        | Helmet     |
| 1        | Chestplace |
| 2        | Leggings   |
| 3        | Boots      |

### Y

| Argument | Type                  |
| -------- | --------------------- |
| -1       | none                  |
| 0        | Leather armor piece   |
| 1        | Chain armor piece     |
| 2        | Iron armor piece      |
| 3        | Diamond armor piece   |
| 4        | Gold armor piece      |
| 5        | Elytra                |
| 6        | Turtle helmet         |
| 7        | Netherite armor piece |

### Example

`query.armor_texture_slot(3) == 1`: queries for Iron Boots.

## query.armor_material_slot

Formatted like: `query.armor_material_slot(x) = y`.

Where `x` and `y` are both integer arguments, from the following table:

### X

| Argument | Slot       |
| -------- | ---------- |
| 0        | Helmet     |
| 1        | Chestplace |
| 2        | Leggings   |
| 3        | Boots      |

### Y

Unknown, possibly:

| Argument | Slot                       |
| -------- | -------------------------- |
| 0        | Default armor material     |
| 1        | Enchanted armor material   |
| 2        | Leather armor material     |
| 3        | Leather enchanted material |

## query.armor_color_slot

_Notice: As of version `1.16.100.51`, this query is crashing minecraft. It might be fixed in later versions._

Formatted like: `color = query.armor_color_slot(slot, channel)`.

Where `slot` and `channel` are both integer arguments, from the following tables:

### Slot

| Argument | Slot       |
| -------- | ---------- |
| 0        | Helmet     |
| 1        | Chestplace |
| 2        | Leggings   |
| 3        | Boots      |

### Channel

| Argument | Slot          |
| -------- | ------------- |
| 0        | Red channel   |
| 1        | Green channel |
| 2        | Blue channel  |
| 3        | Alpha channel |

### Color

Query returns color value in specified channel.

## query.is_enchanted

Formatted like: `is_enchanted = query.is_enchanted`.

Return 1.0 or 0.0 based on whether the entity is enchanted.

_Currently, can be only used in materials._


## query.is_ghost

Formatted like: `is_ghost = query.is_ghost`.

Return 1.0 or 0.0 based on whether the entity is a ghost.

_Currently, only returns 1.0 for a guardian ghost and is used by its renderer._

## query.is_grazing

Formatted like: `is_grazing = query.is_grazing`.

Return 1.0 or 0.0 based on whether the entity is eating a block.

_Currently, only returns 1.0 for a sheep and entities using runtime identifier of a sheep._

## query.is_jumping

Formatted like: `is_jumping = query.is_jumping`.

Return 1.0 or 0.0 based on whether the entity is jumping.

For the player, conditions for its activation are:

-   the jump button is pressed (includes being in water and climbing a scaffolding)
-   OR auto-jump is triggered
-   OR swimming with auto-jump

## query.modified_move_speed

Formatted like: `modified_move_speed = query.modified_move_speed`.

Returns the current walk speed of the entity modified by status flags such as is_baby or on_fire

Value example:

-   Player is walking: around 0.86
-   Player is sprinting: 1.0
-   Player is sprinting and jumping: 0.35
-   Player is walking on fire: 1.0
-   Player is sprinting on fire: 1.0
-   Player is sprinting and jumping on fire: 0.525

## query.on_fire_time

Formatted like: `on_fire_time = query.on_fire_time`.

Returns the time in ticks since the entity started or stopped being on fire, else it returns 0.0

Value example:

-   Entity is summoned: value is 0
-   Entity is ignited: value is 0 and starts counting up 1 every tick
-   Entity is on fire for 2 seconds already: value is 40 and still counts up 1 every tick
-   Entity stops being on fire: value resets to 0 and continues to count up 1 every tick despite not being on fire
-   Entity is ignited second time: value resets to 0 and continues counting up 1 every tick
-   Entity stops being on fire the second time: value resets to 0 and continues to count up 1 every tick despite not being on fire

Basically it's tick timer that starts after entity is first ignited and resets every time it changes from/to being on fire.

## query.scoreboard

Formatted like: `query.scoreboard('score_name') > 0`

Returns 1.0 or 0.0 based on score count, molang operator and number.

Note that sometimes it might not work because of unknown reasons.

## query.structural_integrity

Formatted like: `structural_integrity = query.structural_integrity`.

Used by boats and minecarts for destroying it. It will decrease when attacking the entity and will recover with time.
Probably unusable by anything other than boats and minecarts.

## variable.attack_time

### Explanation

This variable is setup as IF it was a query. In other words, it can be used on any entity, both on the client and server, regardless of whether you setup/define the variable correctly.

### For entities

The variable tracks when the entity is swinging to attack. When not attacking, it will return 0.0, when attacking it will range from 0.0 to the total attack time, which may be around 0.3 or something similar. For players, this value ranges from 0.0 to 1.0. The variable returns a percentage, in the form of a decimal, for how far into the attack the entity is. For example, if an entity is halfway into its attack swing, then the variable will return 0.5. It increments linearly.

### For the Player

For the player, the variable will track whenever the arm bones are swinging, this includes:

-   placing blocks
-   placing entities
-   interacting (when swing is enabled)
-   melee attack

## query.is_roaring

Evaluates to true when a `knockback_roar` attack is happening.

## query.head_x_rotation

Formatted like: `query.head_x_rotation(x)`

Where `x` specifies the head of the entity. It is not really relevant for any entity but the wither.

Returns head pitch. looking up returns `-89.9`, looking all the way down returns `89.9`.

## query.head_y_rotation

Formatted like: `query.head_y_rotation(x)`

Where `x` specifies the head of the entity. It is not really relevant for any entity but the wither.

Returns yaw of the head from `-179.9` to `179.9`. the values wrap around so like if you are at `-179.9` and you turn just a little bit, it instantly goes to `179.9`.

## query.target_x_rotation and query.target_y_rotation

Identical to the respective `query.head_*_rotation`, however has no optional argument for selecting head.

## query.eye_target_x_rotation and query.eye_target_y_rotation

Not valid for player. not really sure what its good for.

## variable.short_arm_offset_right

Returns the offset factor for the player's rightarm bone compared to the default skin geometry. Slim-armed (3 pixel wide) skins will return `0.5` when equipped on the player. Normal (4 pixel wide) skins will return `0.0` when equipped on the player. Note: the player must go into 1st person perspective at least once for this variable to be initialized and usable elsewhere on the entity.

## variable.short_arm_offset_left

Identical behavior to `variable.short_arm_offset_right` except it references the player leftarm bone.

## query.movement_direction

Essentially, returns the ratio between speed in the specified argument, over the total speeds in all 3 axis combined. For example, you are moving 5 blocks/second in the x-axis, 0 blocks/second in the y-axis, and 3 blocks/second in the z-axis -> `5 / ( 5 + 0 + 3 ) = 0.625`.

| Argument | Axis |
| -------- | ---- |
| 0        | X    |
| 1        | Y    |
| 2        | Z    |

If stationary, the values will return as `0`. When you are moving along the positive X/Y/Z axis, the returned value is positive. If you are moving in the opposite direction, the returned value is negative. The return value should never exceed `1` or `-1`.

It's worth noting that the `Y` axis may not work as expected. When you stay in the same spot, and are not hovering, the query returns `-1`. When you stay on the same X and Z coordinates and move downwards on the Y axis, the query also returns `-1`. If you are hovering on a constant Y coordinate, it returns `0`.

## query.block_neighbor_has_any_tag and query.relative_block_has_any_tag

Requires `'Experimental Molang Features` to use. From the docs `Takes a relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has any of the tags provided`. This is useful for using connecting blocks or detecting entities.

`query.block_neighbor_has_any_tag` - Takes block position
`query.relative_block_has_any_tag` - Takes entity position

The syntax for it is `q.block_neighbor_has_any_tag(x,y,z,'tag_name')` and `q.relative_block_has_any_tag(x,y,z,'tag_name')`.

Example:
- `q.relative_block_has_any_tag(0,-1,0,'grass')` would try to detect a block with the grass tag one block under the entity.
- `q.block_neighbor_has_any_tag(0,-1,0,'grass')` would try to detect a block with the grass tag one block under the block.

To do multiple tags you would use `q.correct_query(0,-1,0,'grass', 'plant')` with `correct_query` being replaced by the right query.

Note that this can also detect custom tags and [vanilla tags](/blocks/block-tags)

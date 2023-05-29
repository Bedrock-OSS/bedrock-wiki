---
title: Molang Queries
toc_max_level: 2
---

The bedrock documentation for Molang is notoriously bad. This page will attempt to remedy this by providing additional details for individual queries, _where possible_. This page is intended to be searched, not read in full. Use the side-bar, or use `ctrl-f` to navigate.

:::tip
This page is not an exhaustive list list! It only contains queries we've written extra information for. The full list of queries can be found [here](https://bedrock.dev/docs/stable/Molang#List%20of%20Entity%20Queries)!
:::

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

## query.get_equipped_item_name

:::warning
**DEPRECATED QUERY:** It is recommended to use the new query (`query.is_item_name_any`) if possible as it is more of an updated version of this query. However, this query will still continue to work in the future for backwards compatibility.
:::

Formatted like: `query.get_equipped_item_name('main_hand') = 'item_name'`

Takes one optional hand slot as a parameter (0 or 'main_hand' for main hand, 1 or 'off_hand' for off hand), and a second parameter (0=default) if you would like the equipped item or any non-zero number for the currently rendered item, and returns the name of the item in the requested slot (defaulting to the main hand if no parameter is supplied) if there is one, otherwise returns ''.

Where `item_name` is the item you want to test for. No namespace, and please notice the quotes.

Example: `"query.get_equipped_item_name == 'diamond'"`

**Can you test for items in the inventory? Yes! Using the new query `query.is_item_name_any`.**

## query.get_name

:::warning
**DEPRECATED QUERY:** It is recommended to use the new query (`query.is_name_any`) if possible as it is more of an updated version of this query. However, this query will still continue to work in the future for backwards compatibility.
:::

Formatted like: `query.get_name == 'Name'`

Turns true if actual in-game displayed name matches name (use OnixClient to see names in third view).
Needs to be used in special conditions.

<Spoiler title="Show">

<CodeHeader>animation_controllers/ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.ac": {
            "initial_state": "default",
            "states": {
                "default": {
                    "transitions": [
                        {
                            "active": "query.is_alive"
                        }
                    ]
                },
                "active": {
                    "transitions": [
                        {
                            "default": "(1.0)"
                        }
                    ],
                    "animations": [
                        {
                            "anim": "query.get_name == '...'" // You can use it only here!
                        }
                    ]
                }
            }
        }
    }
}
```

</Spoiler>

## query.is_name_any

Formatted like: `query.get_name('Name1', 'Name2')`.
Takes one or more arguments.
Turns true if actual in-game displayed name matches one of the given names.
Needs to be used in special conditions.

<Spoiler title="Show">

<CodeHeader>animation_controllers/ac.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "animation_controllers": {
        "controller.animation.ac": {
            "initial_state": "default",
            "states": {
                "default": {
                    "transitions": [
                        {
                            "active": "query.is_alive"
                        }
                    ]
                },
                "active": {
                    "transitions": [
                        {
                            "default": "(1.0)"
                        }
                    ],
                    "animations": [
                        {
                            "anim": "query.is_name_any(...)" // You can use it only here!
                        }
                    ]
                }
            }
        }
    }
}
```

</Spoiler>

## query.is_item_name_any

Formatted like: `query.is_item_name_any('slot.weapon.mainhand', 0, 'namespace:item_name')`

Takes the equipment slot name first, followed by the slot index value, and then the list of item names with namespaces after it.

Possible equipment slot are as follows:
| Slot Name              | Slot Counts | Description                                                                         |
| ---------------------- | ----------- | ----------------------------------------------------------------------------------- |
| `slot.weapon.mainhand` | 0           | Usually any held items are in here                                                  |
| `slot.weapon.offhand`  | 0           | Offhand slot for things like `Shield`, `Totem of Undying` or a `Map`                |
| `slot.armor.head`      | 0           | Head armor piece                                                                    |
| `slot.armor.chest`     | 0           | Chestplate armor piece                                                              |
| `slot.armor.legs`      | 0           | Leggings armor piece                                                                |
| `slot.armor.feet`      | 0           | Boots armor piece                                                                   |
| `slot.armor`           | 0           | Horse armor                                                                         |
| `slot.saddle`          | 0           | Saddle slot                                                                         |
| `slot.hotbar`          | 0 to 8      | Player hotbar slots                                                                 |
| `slot.inventory`       | 0+ (varies) | Entities that has an inventory, like the player, minecart with chests, donkey, etc. |
| `slot.enderchest`      | 0 to 26     | Ender chest inventory for players only                                              |

### Test for items within the player's inventory

Formatted like: `t.val = 0; t.i = 0; loop(27, {t.val = q.is_item_name_any('slot.inventory', t.i, 'namespace:item_name'); t.val ? {return t.val;}; t.i = t.i+1;});`

Replace `namespace:item_name` with any item you wish to check for. This simply loops through all 27 slots of the inventory and returns `1.0` if it has found any slot that has the specified item provided. Note that the hotbar is in a different slot from the main inventory slot so you will have to check that separately.

## query.is_enchanted

Formatted like: `is_enchanted = query.is_enchanted`.

Return 1.0 or 0.0 based on whether the entity is enchanted.

_Currently, can be only used in materials._

## query.is_eating

This query tracks when certain entities are 'eating'. It's not used for the player. To trigger, use one of the following components:
    - `minecraft:behavior.eat_carried_item`
    - `minecraft:behavior.snacking`

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
-   OR charging the jump of a ridable entity

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

## query.log

Content log is NOT debug log, they're different files. `query.log` outputs to the debug log only.

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

Formatted like: `query.scoreboard('objective_name') > 0`

Returns 1.0 or 0.0 if the queried value is within the specified range provided. Or based on score count, molang operator and number.

Note that sometimes it might not work because of unknown reasons. One of which is that this cannot query scoreboard objective names with uppercase letters. In this case, for example, objective `testfoo` will work but **not** `testFoo`.

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

## query.time_of_day

Returns the time of day (midnight=0.0, sunrise=0.25, noon=0.5, sunset=0.75) of the dimension the entity is in.
Day time is calculated via this formula:

`f(x) = (x*0.25/2400)mod 1`

query.time_of_day - day time table

<Spoiler title="Show">

| `query.time_of_day` | Day Time |
| ------------------- | -------- |
| 0.00                | 18000    |
| 0.01                | 18240    |
| 0.02                | 18480    |
| 0.03                | 18720    |
| 0.04                | 18960    |
| 0.05                | 19200    |
| 0.06                | 19440    |
| 0.07                | 19680    |
| 0.08                | 19920    |
| 0.09                | 20162    |
| 0.10                | 20400    |
| 0.11                | 20640    |
| 0.12                | 20880    |
| 0.13                | 21120    |
| 0.14                | 21360    |
| 0.15                | 21602    |
| 0.16                | 21840    |
| 0.17                | 22080    |
| 0.18                | 22322    |
| 0.19                | 22560    |
| 0.20                | 22800    |
| 0.21                | 23040    |
| 0.22                | 23280    |
| 0.23                | 23520    |
| 0.24                | 23760    |
| 0.25                | 0        |
| 0.26                | 240      |
| 0.27                | 480      |
| 0.28                | 720      |
| 0.29                | 960      |
| 0.30                | 1202     |
| 0.31                | 1440     |
| 0.32                | 1680     |
| 0.33                | 1922     |
| 0.34                | 2160     |
| 0.35                | 2400     |
| 0.36                | 2642     |
| 0.37                | 2880     |
| 0.38                | 3120     |
| 0.39                | 3360     |
| 0.40                | 3600     |
| 0.41                | 3840     |
| 0.42                | 4080     |
| 0.43                | 4320     |
| 0.44                | 4560     |
| 0.45                | 4800     |
| 0.46                | 5040     |
| 0.47                | 5280     |
| 0.48                | 5520     |
| 0.49                | 5760     |
| 0.50                | 6000     |
| 0.51                | 6240     |
| 0.52                | 6480     |
| 0.53                | 6720     |
| 0.54                | 6960     |
| 0.55                | 7200     |
| 0.56                | 7440     |
| 0.57                | 7680     |
| 0.58                | 7920     |
| 0.59                | 8160     |
| 0.60                | 8402     |
| 0.61                | 8640     |
| 0.62                | 8880     |
| 0.63                | 9120     |
| 0.64                | 9360     |
| 0.65                | 9600     |
| 0.66                | 9842     |
| 0.67                | 10080    |
| 0.68                | 10320    |
| 0.69                | 10560    |
| 0.70                | 10800    |
| 0.71                | 11040    |
| 0.72                | 11282    |
| 0.73                | 11520    |
| 0.74                | 11760    |
| 0.75                | 12000    |
| 0.76                | 12240    |
| 0.77                | 12480    |
| 0.78                | 12720    |
| 0.79                | 12962    |
| 0.80                | 13200    |
| 0.81                | 13440    |
| 0.82                | 13680    |
| 0.83                | 13920    |
| 0.84                | 14160    |
| 0.85                | 14402    |
| 0.86                | 14640    |
| 0.87                | 14880    |
| 0.88                | 15120    |
| 0.89                | 15360    |
| 0.90                | 15600    |
| 0.91                | 15842    |
| 0.92                | 16080    |
| 0.93                | 16320    |
| 0.94                | 16560    |
| 0.95                | 16800    |
| 0.96                | 17040    |
| 0.97                | 17282    |
| 0.98                | 17520    |
| 0.99                | 17760    |
| 1.00                | 18000    |

Credit: [Analysis of query.time_of_day.md](https://gist.github.com/DoubleF3lix/a03afde0a979dfa41e8525ee92f12ca5)

</Spoiler>

## query.eye_target_x_rotation and query.eye_target_y_rotation

Not valid for player. not really sure what its good for.

## variable.short_arm_offset_right

Returns the offset factor for the player's rightarm bone compared to the default skin geometry. Slim-armed (3 pixel wide) skins will return `0.5` when equipped on the player. Normal (4 pixel wide) skins will return `0.0` when equipped on the player. Note: the player must go into 1st person perspective at least once for this variable to be initialized and usable elsewhere on the entity.

## variable.short_arm_offset_left

Identical behavior to `variable.short_arm_offset_right` except it references the player leftarm bone.

## query.movement_direction

Returns one of the 3 components from the normalized vector of the entity movement meaning the magnitude/modulus/length of the vector is between 0 and 1.

**Note**: As of writing the documentation, the value returned from any of the axis will change depending on the speed of the entity (If the entity is on the ground the value will be less than the value of the entity if it were in the air even if it is moving in the same direction).

To get the actual normalized velocity vector of the entity movement you will have to normalize the values. Here is the Molang setup:

```
variable.mag = math.sqrt( math.pow( query.movement_direction(0), 2 ) + math.pow( query.movement_direction(1), 2) + math.pow( query.movement_direction(2), 2));
variable.xNorm = query.movement_direction(0) / variable.mag;
variable.yNorm = query.movement_direction(1) / variable.mag;
variable.zNorm = query.movement_direction(2) / variable.mag;
```

For more information on normalized vectors you can play around with this <a href=https://www.desmos.com/calculator/hhoamwgve2>Desmos graph</a>

| Argument | Axis |
| -------- | ---- |
| 0        | X    |
| 1        | Y    |
| 2        | Z    |

## query.block_neighbor_has_any_tag and query.relative_block_has_any_tag

Requires `Experimental Molang Features` to use. From the docs `Takes a relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has any of the tags provided`. This is useful for using connecting blocks or detecting entities.

`query.block_neighbor_has_any_tag` - Takes block position
`query.relative_block_has_any_tag` - Takes entity position

The syntax for it is `q.block_neighbor_has_any_tag(x,y,z,'tag_name')` and `q.relative_block_has_any_tag(x,y,z,'tag_name')`.

Example:
- `q.relative_block_has_any_tag(0,-1,0,'grass')` would try to detect a block with the grass tag one block under the entity.
- `q.block_neighbor_has_any_tag(0,-1,0,'grass')` would try to detect a block with the grass tag one block under the block.

To do multiple tags you would use `q.correct_query(0,-1,0,'grass', 'plant')` with `correct_query` being replaced by the right query.

Note that this can also detect custom tags and [vanilla tags](/blocks/block-tags)

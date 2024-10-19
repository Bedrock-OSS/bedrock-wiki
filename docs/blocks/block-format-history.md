---
title: Block Format History
description: A list of all the changes to the data-driven block format over each Minecraft version.
category: Documentation
outline_depth: 2
mentions:
    - QuazChick
---

## 1.21.50

### Components

<Label color="green">Versioned</Label>

-   Updated `minecraft:destructible_by_mining`
    -   Released `item_specific_speeds` parameter from experimental

## 1.21.40

### Components

<Label color="green">Versioned</Label>

-   Released `minecraft:redstone_conductivity` from experimental

## 1.21.30

### Components

<Tag name="experimental" />
<Label color="blue">Upcoming Creator Features</Label>

-   Updated `minecraft:destructible_by_mining`
    -   Added `item_specific_speeds` which determines the `destroy_speed` for each `item` descriptor in an array.
-   Added `minecraft:redstone_conductivity`
    -   Contains `redstone_conductor` which determines whether this block conducts redstone.
    -   Contains `allows_wire_to_step_down` which determines whether redstone wire can travel down the side of this block.

## 1.21.10

### Components

<Label color="green">Versioned</Label>

-   Released `minecraft:custom_components` from experimental
-   Released `minecraft:entity_fall_on` from experimental
-   Released `minecraft:tick` from experimental

## 1.20.80

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>
<Label color="green">Versioned</Label>

-   Removed `events`

### Components

<Tag name="experimental" />
<Label color="yellow">Beta APIs</Label>

-   Added `minecraft:custom_components`
    -   Lists all the custom components that should be applied to this block.
-   Added `minecraft:entity_fall_on`
    -   Contains `min_fall_distance` which determines the minimum distance an entity must fall to trigger the entity fall on event.
-   Renamed `minecraft:queued_ticking` to `minecraft:tick`
    -   Removed `on_tick` parameter

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>
<Label color="green">Versioned</Label>

-   Removed `minecraft:on_fall_on` trigger
-   Removed `minecraft:on_interact` trigger
-   Removed `minecraft:on_placed` trigger
-   Removed `minecraft:on_player_destroyed` trigger
-   Removed `minecraft:on_player_placing` trigger
-   Removed `minecraft:on_step_off` trigger
-   Removed `minecraft:on_step_on` trigger
-   Removed `minecraft:random_ticking` trigger

### Events

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>
<Label color="green">Versioned</Label>

-   Removed `add_mob_effect` response
-   Removed `damage` response
-   Removed `decrement_stack` response
-   Removed `die` response
-   Removed `play_effect` response
-   Removed `play_sound` response
-   Removed `remove_mob_effect` response
-   Removed `run_command` response
-   Removed `set_block` response
-   Removed `set_block_at_pos` response
-   Removed `set_block_state` response
-   Removed `spawn_loot` response
-   Removed `swing` response
-   Removed `teleport` response
-   Removed `transform` response
-   Removed `trigger` response

## 1.20.60

### Components

-   Updated `minecraft:geometry`
    -   Added `culling` parameter which determines which culling rules to apply to this block's model.

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>
<Label color="green">Versioned</Label>

-   Removed `minecraft:unit_cube`

## 1.20.20

### Description

-   Released `traits` from experimental

#### Traits

<Label color="green">Versioned</Label>

-   Released `minecraft:placement_direction` from experimental
-   Released `minecraft:placement_position` from experimental

## 1.20.10

### Description

-   Renamed `properties` to `states`

### Components

-   Updated `minecraft:geometry`
    -   Added Molang permutation condition support to `bone_visibility` entries.

### Events

<Tag name="experimental" />
<Label color="blue">Upcoming Creator Features</Label>

-   Renamed `set_block_property` response to `set_block_state`

## 1.20.0

### Description

<Tag name="experimental" />
<Label color="blue">Upcoming Creator Features</Label>

-   Added `traits`
    -   Block traits are shortcuts for creators to add vanilla states and value setters to data-driven blocks.

#### Traits

-   Added `minecraft:placement_direction`
    -   Can enable the states `minecraft:cardinal_direction` and `minecraft:facing_direction`.
-   Added `minecraft:placement_position`
    -   Can enable the states `minecraft:block_face` and `minecraft:vertical_half`.

## 1.19.80

### Components

<Label color="green">Versioned</Label>

-   Added `minecraft:transformation`
    -   Contains `rotation`, `scale` and `translation` which determine the transformation of the block's model and collisions.
-   Updated `minecraft:geometry`
    -   Added `bone_visibility` parameter which determines whether the cubes of bones are visible based on boolean values.

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>

-   Removed `minecraft:part_visibility`

## 1.19.70

### Description

-   Released `properties` from experimental

### Permutations

-   Released from experimental
-   Blocks will now fail to load if a `condition` parameter is not a valid Molang permutation condition.

## 1.19.60

### Components

<Label color="green">Versioned</Label>

-   Released `minecraft:display_name` from experimental
-   Released `minecraft:placement_filter` from experimental
-   Released `minecraft:selection_box` from experimental

## 1.19.50

### Components

<Label color="green">Versioned</Label>

-   Released `minecraft:crafting_table` from experimental
-   Released `minecraft:collision_box` from experimental

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>

-   Removed `minecraft:breathability`

## 1.19.40

### Description

-   Updated `menu_category`
    -   Added `is_hidden_in_commands` parameter which determines whether the block is treated as invalid when used in commands.

### Components

<Label color="green">Versioned</Label>

-   Released `minecraft:geometry` from experimental
-   Released `minecraft:material_instances` from experimental
-   Removed `minecraft:breathability`
-   Renamed `minecraft:block_light_filter` to `minecraft:light_dampening`

## 1.19.30

### Description

-   Added `menu_category`
    -   Contains `category` which determines which tab this block is placed into.
    -   Contains `group` which determines which other items this block is grouped with.

### Components

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>

-   Removed `minecraft:creative_category`
-   Updated `minecraft:display_name`
    -   No longer prepends `tile.` and no longer appends `.name` to the given display name.

## 1.19.20

### Components

<Label color="green">Versioned</Label>

-   Renamed `minecraft:block_light_emission` to `minecraft:light_emission`
    -   Now determines emitted light in integer light levels (0-15) rather than decimal (0.0-1.0).
-   Replaced `minecraft:destroy_time` with `minecraft:destructible_by_mining`
    -   Setting to `false` prevents the block from being destroyed through mining.
    -   Setting to `true` allows the block to be mined and destroyed instantly.
    -   Setting to an object allows `seconds_to_destroy` to be determined.
-   Replaced `minecraft:explosion_resistance` with `minecraft:destructible_by_explosion`
    -   Setting to `false` prevents the block from being destroyed through explosion.
    -   Setting to `true` allows the block to be destroyed through explosion easily.
    -   Setting to an object allows `explosion_resistance` to be determined.
-   Value of `minecraft:friction` now represents movement resistance instead of movement.

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>

-   Removed `minecraft:unwalkable`
-   Renamed `minecraft:aim_collision` to `minecraft:selection_box`

## 1.19.10

### Components

<Label color="green">Versioned</Label>

-   Renamed `minecraft:block_light_filter` to `minecraft:light_dampening`
-   Updated `minecraft:flammable`
    -   Can now be set to a boolean, with `false` meaning the block is non-flammable and `true` using the default flammability values.
    -   Renamed `flame_odds` parameter to `catch_chance_modifier`
    -   Renamed `burn_odds` parameter to `destroy_chance_modifier`

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>

-   Renamed `minecraft:block_collision` to `minecraft:collision_box`
-   Updated `minecraft:crafting_table`
    -   Renamed `custom_description` parameter to `table_name`
    -   Removed `grid_size` parameter
-   Renamed `minecraft:ticking` to `minecraft:queued_ticking`
    -   Replaced `range` parameter with `interval_range` which is now measured in ticks rather than seconds.

<Tag name="experimental" />
<Label color="blue">Upcoming Creator Features</Label>

-   Updated `minecraft:part_visibility`
    -   Renamed `rules` parameter to `conditions`

## 1.18.30

### Components

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>

-   Removed `minecraft:breakonpush`
-   Removed `minecraft:immovable`
-   Removed `minecraft:onlypistonpush`
-   Removed `minecraft:preventsjumping`

## 1.18.10

### Components

<Label color="green">Versioned</Label>

-   Renamed `minecraft:block_light_absorption` to `minecraft:block_light_filter`

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>

-   Renamed `minecraft:entity_collision` to `minecraft:block_collision`
-   Renamed `minecraft:pick_collision` to `minecraft:aim_collision`

## 1.18.0

### Components

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>

-   Added `minecraft:crafting_table`
    -   Contains `crafting_tags` which determines which recipes are supported by tag.
    -   Contains `custom_description` which will be displayed in the UI instead of "Crafting Table".
    -   Contains `grid_size` which determines how many slots across and down the crafting grid is. The only supported value is `3`.

## 1.17.30

### Components

<Tag name="experimental" />
<Label color="blue">Upcoming Creator Features</Label>

-   Added `minecraft:part_visibility`
    -   Determines whether direct children of bones in a model are visible based on molang permutation conditions.

## 1.17.20

### Components

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>

-   Added `minecraft:creative_category`
    -   Determines where this block appears in the creative menu.

## 1.16.210

### Events

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>

-   Updated `decrement_stack` response
    -   Added `ignore_game_mode` parameter which determines whether the stack will be decremented when the player is in creative mode.

## 1.16.100

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>
<Label color="green">Versioned</Label>

-   Added `events`

### Description

-   Removed `is_experimental`
-   Removed `register_to_creative_menu`

### Components

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>
<Label color="green">Versioned</Label>

-   Added `minecraft:breakonpush`
    -   Determines whether this block will break when a piston attempts to push it.
-   Added `minecraft:breathability`
    -   Determines whether the block causes suffocation (`solid`) or is breathable (`air`).
-   Added `minecraft:display_name`
    -   Determines a localization id for this block which will be used in the format `tile.<id>.name`.
-   Added `minecraft:entity_collision`
    -   Determines the entity collision box of this block.
    -   Can be set to false to remove the collision completely.
    -   Contains `origin` which determines the starting position of the box.
    -   Contains `size` which determines the dimensions of the box from the `origin`.
-   Added `minecraft:geometry`
    -   Defines the geometry identifier that this block should use as its model.
-   Added `minecraft:immovable`
    -   Determines whether this block is immovable by pistons.
-   Added `minecraft:material_instances`
    -   Contains rendering configuration for use with the `minecraft:geometry` or `minecraft:unit_cube` components.
-   Added `minecraft:on_fall_on` trigger
-   Added `minecraft:on_interact` trigger
-   Added `minecraft:on_placed` trigger
-   Added `minecraft:on_player_destroyed` trigger
-   Added `minecraft:on_player_placing` trigger
-   Added `minecraft:on_step_off` trigger
-   Added `minecraft:on_step_on` trigger
-   Added `minecraft:onlypistonpush`
    -   Determines whether this block can only be pushed by pistons and not pulled by sticky pistons.
-   Added `minecraft:pick_collision`
    -   Determines the player selection bounds for this block.
    -   Can be set to false to remove the collision completely.
    -   Contains `origin` which determines the starting position of the box.
    -   Contains `size` which determines the dimensions of the box from the `origin`.
-   Added `minecraft:placement_filter`
    -   Determines where the block can be placed by the player and survive without popping off.
    -   Contains `conditions` of which at least one must match.
    -   Each condition may contain `allowed_faces` and/or `block_filter`.
-   Added `minecraft:preventsjumping`
    -   Determines whether entities have limited jumping abilities when on this block.
-   Added `minecraft:random_ticking` trigger
-   Added `minecraft:rotation`
    -   Rotates this block's collision boxes and model by axis-aligned angles.
-   Added `minecraft:ticking`
    -   Determines the interval at which this block will tick, with pending tick data saved.
    -   Contains `looping` which determines whether ticking will continue indefinitely.
    -   Contains `range` which determines the random delay of the interval.
    -   Contains `on_tick` which can trigger an event when this block ticks.
-   Added `minecraft:unit_cube`
    -   Causes this block to display as a full block unit in size.
-   Added `minecraft:unwalkable`
    -   Determines whether entities should avoid walking over this block.

### Events

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>
<Label color="green">Versioned</Label>

-   Added `add_mob_effect` response
-   Added `damage` response
-   Added `decrement_stack` response
-   Added `die` response
-   Added `play_effect` response
-   Added `play_sound` response
-   Added `remove_mob_effect` response
-   Added `run_command` response
-   Added `set_block` response
-   Added `set_block_at_pos` response
-   Added `set_block_property` response
-   Added `spawn_loot` response
-   Added `swing` response
-   Added `teleport` response
-   Added `transform` response
-   Added `trigger` response

## 1.10.0

### Description

-   Added `identifier`
    -   Defines the identifier of the block. Must have a namespace that isn't `minecraft`.
-   Added `is_experimental`
    -   Only registers the block if the `Use Experimental Gameplay` toggle is enabled in world settings.
-   Added `register_to_creative_menu`
    -   Causes the block to appear in the `Construction` category of the creative menu.
    -   Custom blocks cannot be added to the recipe book at this time.

### Components

-   Added `minecraft:block_light_absorption`
    -   Determines how much light (in integer light levels from 0-15) will be absorbed when passing through the block.
-   Added `minecraft:block_light_emission`
    -   Determines how much light (as a float from 0.0-1.0) is emitted by this block.
-   Added `minecraft:destroy_time`
    -   Determines how long it takes to mine this block in survival or adventure mode.
-   Added `minecraft:explosion_resistance`
    -   Determines how resistant this block is to explosions.
-   Added `minecraft:flammable`
    -   Contains `burn_odds` which determines how likely this block is to be destroyed when on fire.
    -   Contains `flame_odds` which determines how likely this blocks is to catch on fire when fire is nearby.
-   Added `minecraft:friction`
    -   Determines the movement speed of entities on this block.
    -   Note that this is not a measure of resistance unlike in modern formats.
-   Added `minecraft:loot`
    -   Determines the path of the loot table that will be dropped when this block is destroyed.
    -   This component is ignored if the used tool has the `Silk Touch` enchantment.
-   Added `minecraft:map_color`
    -   Determines the color this block appears as on a map.

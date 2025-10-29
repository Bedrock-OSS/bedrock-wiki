---
title: Block Format History
description: A list of all the changes to the data-driven block format over each Minecraft version.
category: Documentation
outline_depth: 2
license: true
mentions:
    - QuazChick
---

:::info <Label color="green">Versioned</Label> CHANGES
The file's `format_version` field must be updated for versioned changes to take effect.
:::

:::info <Tag name="experimental" /> CHANGES
An experiment must be enabled in your world for experimental changes to take effect.
:::

## 1.21.120

### Components

-   Released `minecraft:embedded_visual` from experimental
-   Released `minecraft:flower_pottable` from experimental
-   Released `minecraft:redstone_producer` from experimental
-   Updated `minecraft:material_instances`
    -   Released [texture variation](/blocks/block-texture-variation) support for `texture` instance parameter from experimental.

<Tag name="experimental" />
<Label color="blue">Upcoming Creator Features</Label>
<Label color="green">Versioned</Label>

-   Added `minecraft:precipitation_interactions`
    -   Determines how this block interacts with precipitation (rain and snow).
    -   Contains `precipitation_behavior` which can be one of the following values:
        -   `obstruct_rain_accumulate_snow` (default) prevents rain from passing through the block, instead splashing on top of it and causes snow layers to build up above the block if it is snowing.
        -   `obstruct_rain` prevents rain from passing through the block, instead splashing on top of it.
        -   `none` allows rain and snow to pass through the block.
-   Updated `minecraft:material_instances`
    -   Added `alpha_masked_tint` instance parameter which determines whether the intensity of the tint applied by [tint methods](/blocks/block-tinting#tint-methods) should be based on the alpha channel of the texture.
        -   This requires a `tint_method` to specified (that is not `none`) as well as a `render_method` of `opaque`.
    -   Added `emissive` instance parameter which determines whether faces using the material instance should appear emissive.

## 1.21.110

### Components

<Tag name="experimental" />
<Label color="blue">Upcoming Creator Features</Label>

-   Added `minecraft:embedded_visual`
    -   Determines how this block is displayed when in a Flower Pot.
    -   Contains `geometry` which determines the displayed geometry component.
    -   Contains `material_instances` which determines the displayed material instances component.
-   Added `minecraft:flower_pottable`
    -   An empty object which allows this block to be placed in a Flower Pot.
-   Added `minecraft:redstone_producer`
    -   Causes the block to produce redstone power.
    -   Contains `power` which determines the power level produced by the block as an integer (0-15).
    -   Contains `connected_faces` which determines which directions power is produced in.
        -   Defined as an array of faces which may include `down`, `up`, `north`, `south`, `west` and `east`.
        -   By default, all faces are connected.
    -   Contains `strongly_powered_face` which determines the direction where strong power is produced.
        -   If strong power is received by a [redstone conductor](/blocks/block-components#redstone-conductivity), blocks surrounding the conductor will be powered (connected to the circuit).
        -   By default, no face is strongly powered.
    -   Contains `transform_relative` which determines whether face directions should be relative to the `rotation` value in the [transformation](/blocks/block-components#transformation) component.
        -   By default, faces are not transform-relative.

<Tag name="experimental" />
<Label color="blue">Upcoming Creator Features</Label>
<Label color="green">Versioned</Label>

-   Updated `minecraft:material_instances`
    -   Updated `texture` instance parameter to support [texture variation](/blocks/block-texture-variation).
    -   In previous format versions, the first variation of the referenced atlas entry would always be selected.

## 1.21.100

### Components

-   Updated `minecraft:destruction_particles`
    -   Released `particle_count` parameter from experimental
-   Updated `minecraft:geometry`
    -   Released `uv_lock` parameter from experimental

<Label color="green">Versioned</Label>

-   Released `minecraft:movable` from experimental
-   Released `minecraft:random_offset` from experimental

## 1.21.90

### Components

-   Updated `minecraft:geometry`
    -   Released `culling_layer` parameter from experimental
-   Updated `minecraft:material_instances`
    -   Updated the `*` instance to be optional.

<Label color="green">Versioned</Label>

-   Removed `minecraft:custom_components`

    -   Custom components should now be applied in the same way as vanilla components, as entries in the `components` object:

        <CodeHeader>minecraft:block</CodeHeader>

        ```json
        "components": {
            "minecraft:friction": 0.4,
            "wiki:custom_component": {
                "parameter": "value"
            }
        }
        ```

<Tag name="experimental" />
<Label color="blue">Upcoming Creator Features</Label>

-   Added `minecraft:movable`
    -   Determines how a block can be moved by pistons.
    -   Contains `movement_type` which can be one of the following values: `immovable`, `popped`, `push` or `push_pull` (default).
    -   Contains `sticky` which can be set to `same` to replicate Slime/Honey Block functionality.
-   Added `minecraft:random_offset`
    -   Causes a random offset to be applied to the block based on its position in the world
    -   Affects the block's collision box, selection box and geometry.
    -   Contains `x`, `y` and `z` which determine the possible offsets via the following parameters:
        -   `range` which is a [range object](/documentation/shared-constructs#range-objects) that determines how large offsets can be on each axis.
        -   `steps` which determines how many equally-spaced random values can be chosen across the `range`.
            -   A value of `0` means that any value within the `range` can be used.

<Tag name="experimental" />
<Label color="blue">Upcoming Creator Features</Label>
<Label color="green">Versioned</Label>

-   Updated `minecraft:destruction_particles`
    -   Added `particle_count` parameter which determines how many particles are created when the block is destroyed (0-255).
    -   By default, 100 particles are created.
-   Updated `minecraft:geometry`
    -   Added `uv_lock` parameter which determines whether UVs should be locked to their original rotation when rotation from the [transformation](/blocks/block-components#transformation) component is applied.

## 1.21.80

### Components

-   Released `minecraft:destruction_particles` from experimental
-   Updated `minecraft:destruction_particles`
    -   Updated the `texture` parameter to be optional.
    -   By default, particles will use the texture of the `down` material instance (or `*` if not specified).
-   Updated `minecraft:map_color`
    -   Released `tint_method` parameter from experimental
-   Updated `minecraft:material_instances`
    -   Updated `render_method` instance parameter, adding 3 new render methods:
        -   `alpha_test_to_opaque` renders faces with `alpha_test` when they're within half the render distance, and `opaque` when they're far away.
        -   `alpha_test_single_sided_to_opaque` renders faces with `alpha_test_single_sided` when they're within half the render distance, and `opaque` when they're far away.
        -   `blend_to_opaque` renders faces with `blend` when they're within half the render distance, and `opaque` when they're far away.
    -   Released `isotropic` instance parameter from experimental
    -   Released `tint_method` instance parameter from experimental

<Tag name="experimental" />
<Label color="blue">Upcoming Creator Features</Label>

-   Updated `minecraft:geometry`
    -   Added `culling_layer` parameter which determines the culling layer identifier to be checked for by the [`same_culling_layer`](/blocks/block-culling#same-culling-layer) culling rule condition.
        -   Culling layer identifiers should take the form `<namespace>:culling_layer.<name>`.
        -   When using the `minecraft` namespace, the only allowed culling layer identifiers are `minecraft:culling_layer.undefined` and `minecraft:culling_layer.leaves`.

<Tag name="experimental" />
<Label color="red">Custom Components V2</Label>
<Label color="green">Versioned</Label>

-   Removed `minecraft:custom_components`
    -   Custom components should now be applied in the same way as vanilla components, as entries in the `components` object.

## 1.21.70

### Components

-   Added `minecraft:replaceable`
    -   An empty object which allows this block to be replaced by attempting to place another block in its position.
    -   Does not allow the block to be replaced by a block of the same permutation.
-   Updated `minecraft:map_color`
    -   Can now be defined as an object containing the following parameters:
        -   `color` which is the base HEX string color of this block on a map.

<Tag name="experimental" />
<Label color="blue">Upcoming Creator Features</Label>

-   Updated `minecraft:map_color`
    -   Added `tint_method` parameter which allows the `color` to be tinted based on the biome the block is in.
-   Updated `minecraft:material_instances`
    -   Added `isotropic` instance parameter which determines whether face UVs should randomly rotate based on the block's position in the world.
    -   Added `tint_method` instance parameter which causes the `texture` to be tinted based on the biome the block is placed in, which is always `plains` when an item.

<Tag name="experimental" />
<Label color="blue">Upcoming Creator Features</Label>
<Label color="green">Versioned</Label>

-   Added `minecraft:destruction_particles`
    -   Determines the appearance of the particles created when hitting, destroying, stepping on and falling onto blocks.
    -   Contains `texture` which specifies the texture atlas shortname to use from `RP/textures/terrain_texture.json`.
    -   Contains `tint_method` which causes the `texture` to be tinted based on the biome the block is placed in.

## 1.21.60

### Description

<Label color="green">Versioned</Label>

-   Updated `menu_category`
    -   Updated `group` parameter to require a namespace e.g. `minecraft:itemGroup.name.concrete`

### Components

<Label color="green">Versioned</Label>

-   Released `minecraft:item_visual` from experimental
-   Released `minecraft:liquid_detection` from experimental
-   Updated `minecraft:material_instances`
    -   Released float value support for `ambient_occlusion` from experimental

## 1.21.50

### Components

<Label color="green">Versioned</Label>

-   Updated `minecraft:destructible_by_mining`
    -   Released `item_specific_speeds` parameter from experimental

<Tag name="experimental" />
<Label color="blue">Upcoming Creator Features</Label>

-   Added `minecraft:item_visual`
    -   Determines how this block is displayed as an item.
    -   Contains `geometry` which determines the displayed geometry component.
    -   Contains `material_instances` which determines the displayed material instances component.
-   Added `minecraft:liquid_detection`
    -   Determines how this blocks behaves with different types of liquid.
    -   Contains `detection_rules` which each contain the following parameters:
        -   `liquid_type` determines which type of liquid this rule applies to. Currently only `water` is supported.
        -   `can_contain_liquid` determines whether the liquid type can occupy the same space as this block e.g., waterlogging.
        -   `on_liquid_touches` determines what happens when the liquid type flows into the block.
        -   `stops_liquid_flowing_from_direction` determines an array of directions that the liquid cannot flow out of this block from.
-   Updated `minecraft:material_instances`
    -   Updated `ambient_occlusion` instance parameter to support a float which determines ambient occlusion intensity (0.0-10.0).

## 1.21.40

### Components

<Label color="green">Versioned</Label>

-   Released `minecraft:redstone_conductivity` from experimental

## 1.21.30

### Components

<Tag name="experimental" />
<Label color="blue">Upcoming Creator Features</Label>

-   Added `minecraft:redstone_conductivity`
    -   Contains `redstone_conductor` which determines whether this block conducts redstone.
    -   Contains `allows_wire_to_step_down` which determines whether redstone wire can travel down the side of this block.
-   Updated `minecraft:destructible_by_mining`
    -   Added `item_specific_speeds` which determines the `destroy_speed` for each `item` descriptor in an array.

## 1.21.10

### Components

<Label color="green">Versioned</Label>

-   Released `minecraft:custom_components` from experimental
-   Released `minecraft:entity_fall_on` from experimental
-   Released `minecraft:tick` from experimental

## 1.21.0

### Components

<Label color="green">Versioned</Label>

-   Updated `minecraft:transformation`
    -   Added `scale_pivot` parameter
    -   Added `rotation_pivot` parameter

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
<Label color="red">Holiday Creator Features</Label>

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

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>

-   Removed `minecraft:breathability`

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

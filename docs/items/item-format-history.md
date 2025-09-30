---
title: Item Format History
description: A list of all the changes to the data-driven item format over each Minecraft version.
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

### Description

<Label color="green">Versioned</Label>

-   Updated `menu_category`
    -   Items with no category can now be used in commands.
    -   If `is_hidden_in_commands` is set to `true`, the item will still be invalid in commands.

### Components

-   Added `minecraft:swing_duration`
    -    Determines the duration, in seconds, of the player's swing animation when mining, attacking or using the item.
-   Updated `minecraft:use_modifiers`
    -    Added `emit_vibrations` parameter which determins whether the item emits vibrations when it starts and stops being used.

## 1.21.110

### Components

-   Added `minecraft:fire_resistant`
    -   Determines whether the item cannot be destroyed by fire and lava.

## 1.21.100

### Components

-   Updated `minecraft:wearable`
    -   Added `hides_player_location` parameter which determines whether a player wearing the item will be hidden from the Locator Bar and Locator Maps.
    -   By default, wearable items do not hide the player.

<Label color="green">Versioned</Label>

-   Removed `minecraft:custom_components`

    -   Custom components should now be applied in the same way as vanilla components, as entries in the `components` object:

        <CodeHeader>minecraft:block</CodeHeader>

        ```json
        "components": {
            "minecraft:glint": true,
            "wiki:custom_component": {
                "parameter": "value"
            }
        }
        ```

## 1.21.80

### Components

<Tag name="experimental" />
<Label color="red">Custom Components V2</Label>
<Label color="green">Versioned</Label>

-   Removed `minecraft:custom_components`
    -   Custom components should now be applied in the same way as vanilla components, as entries in the `components` object.

## 1.21.60

### Description

<Label color="green">Versioned</Label>

-   Updated `menu_category`
    -   Updated `group` parameter to require a namespace e.g. `minecraft:itemGroup.name.concrete`

### Components

<Label color="green">Versioned</Label>

-   Added `minecraft:storage_weight_limit`
    -   Determines the maximum allowed total weight of all items in the storage item container.
    -   Replaces the `max_weight_limit` storage item parameter.
-   Added `minecraft:storage_weight_modifier`
    -   Determines the additional weight the item adds when inside a storage item.
    -   A value of 0 means that this item is not allowed inside a storage item.
    -   Replaces the `weight_in_storage_item` storage item parameter.
-   Released `minecraft:compostable` from experimental
-   Updated `minecraft:block_placer`
    -   Released `replace_block_item` parameter from experimental
-   Updated `minecraft:storage_item`
    -   Removed `max_weight_limit` parameter
    -   Removed `weight_in_storage_item` parameter

## 1.21.50

### Components

<Tag name="experimental" />
<Label color="blue">Upcoming Creator Features</Label>

-   Added `minecraft:compostable`
    -   Allows this item to be used in a composter.
    -   Contains `composting_chance` which determines how likely the compost level is to increase as a percentage (0-100).

## 1.21.40

<Label color="green">Versioned</Label>

-   Numbers can no longer be used to represent boolean values.
-   Floats can no longer be used to represent integer values.

### Components

<Label color="green">Versioned</Label>

-   Released `minecraft:bundle_interaction` from experimental
-   Released `minecraft:storage_item` from experimental

<Tag name="experimental" />
<Label color="blue">Upcoming Creator Features</Label>

-   Updated `minecraft:block_placer`
    -   The specified `block` will now be used as the item's icon if the `minecraft:icon` component is not applied.
    -   Added `replace_block_item` parameter which replaces the default item for the specified `block` with this item.
        -   For this to function, the item and block identifiers must be the same.
        -   Learn more about replacing block items [here](/blocks/blocks-as-items#replacing-block-items)!

## 1.21.30

### Components

<Label color="green">Versioned</Label>

-   Added `minecraft:dyeable`
    -   Allows the item to be dyed by cauldron water.
    -   Contains `default_color` which determines an optional color to use before the item is dyed.
    -   Once dyed, the item will display the `dyed` texture defined in the `minecraft:icon` component rather than `default`.
-   Added `minecraft:rarity`
    -   Defines the base rarity of the item (displayed by the color of the item name).
    -   Accepts the following rarity levels: `common`, `uncommon`,`rare` and `epic`.
    -   When an item is enchanted, its rarity will increase to the next level if possible.
    -   This component has no functional effect and can be overrided with `minecraft:hover_text_color`.

<Tag name="experimental" />
<Label color="orange">Bundles</Label>

-   Added `minecraft:bundle_interaction`
    -   Enables the bundle interface and functionality on the item.
    -   Contains `num_viewable_slots` which
    -   Requires the `minecraft:storage_item` component to be applied.
-   Added `minecraft:storage_item`
    -   Allows this item to contain other items.
    -   Contains `allow_nesed_storage_items` which determines whether other storage items can be placed into the container.
    -   Contains `allowed_items` which defines the items that are exclusively allowed in the container.
        -   If empty all items are allowed in the container.
    -   Contains `banned_items` which defines the items that are not allowed in the container.
    -   Contains `max_slots` which defines the number of slots in the container.
    -   Contains `max_weight_limit` which defines the maximum allowed total weight of all items in the container.
    -   Contains `weight_in_storage_item` which defines the additional weight the item adds when inside another storage item.
        -   A value of 0 means that this item is not allowed inside another storage item.

## 1.21.20

### Components

<Label color="green">Versioned</Label>

-   Added `minecraft:damage_absorption`
    -   Causes the item to absorb damage that would otherwise be dealt to its wearer.
    -   Contains `absorbable_causes` which determines a list of damage causes (such as `entity_attack` and `magma`) that can be absorbed by the item.
    -   Requires the `minecraft:durability`and`minecraft:wearable` components.
-   Added `minecraft:durability_sensor`
    -   Enables an item to emit effects when it receives damage.
    -   Contains `durability_thresholds` which determines both the durability thresholds, and the effects emitted when each threshold is met.

## 1.21.10

### Components

<Label color="green">Versioned</Label>

-   Released `minecraft:custom_components` from experimental

## 1.21.0

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>
<Label color="green">Versioned</Label>

-   Removed `events`

### Components

<Tag name="experimental" />
<Label color="yellow">Beta APIs</Label>

-   Added `minecraft:custom_components`
    -   Lists all the custom components that should be applied to this block.

### Events

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>
<Label color="green">Versioned</Label>

-   Removed `add_mob_effect` response
-   Removed `damage` response
-   Removed `decrement_stack` response
-   Removed `remove_mob_effect` response
-   Removed `run_command` response
-   Removed `teleport` response
-   Removed `transform_item` response

## 1.20.60

### Components

<Label color="green">Versioned</Label>

-   Updated `minecraft:icon`
    -   Removed `texture` parameter
    -   Added `textures` parameter which lists the different textures the item can use in its icon, including armor trims.
        -   Contains `default` which replaces the `texture` parameter.

## 1.20.50

### Components

<Label color="green">Versioned</Label>

-   Added `minecraft:tags`
    -   Lists the tags applied to this item.
    -   Replaces `tag:*` components.
-   Added `minecraft:use_modifiers`
    -   Contains `use_duration` which determines the length (in seconds) of a complete item use.
        -   Replaces the `minecraft:use_duration` component.
    -   Contains `movement_modifier` which applies a multiplier to the holder's speed when the item is being used.
-   Removed `minecraft:use_duration`
-   Removed the ability to apply tags using `tag:*`

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>
<Label color="green">Versioned</Label>

-   Removed `minecraft:chargeable`
-   Updated `minecraft:digger`
    -   Removed `on_dig` trigger parameter

## 1.20.40

### Components

<Label color="green">Versioned</Label>

-   Updated `minecraft:icon`
    -   Single string values can now be used once again e.g. `"minecraft:icon": "stick"`.

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>
<Label color="green">Versioned</Label>

-   Removed `minecraft:on_use` trigger
-   Removed `minecraft:on_use_on` trigger
-   Removed `minecraft:weapon`

## 1.20.30

### Components

<Label color="green">Versioned</Label>

-   Added `minecraft:interact_button`
    -   Enable and set text on a button that is displayed when using touch controls.
    -   If set to `true`, the button displays "Use Item".
-   Released `minecraft:allow_off_hand` from experimental
-   Released `minecraft:damage` from experimental
-   Released `minecraft:digger` from experimental
-   Released `minecraft:enchantable` from experimental
-   Released `minecraft:food` from experimental
-   Released `minecraft:hand_equipped` from experimental
-   Released `minecraft:liquid_clipped` from experimental
-   Released `minecraft:should_despawn` from experimental
-   Released `minecraft:stacked_by_data` from experimental
-   Released `minecraft:use_animation` from experimental
-   Released `minecraft:use_duration` from experimental

## 1.20.10

### Components

<Label color="green">Versioned</Label>

-   Released `minecraft:block_placer` from experimental
-   Released `minecraft:can_destroy_in_creative` from experimental
-   Released `minecraft:cooldown` from experimental
-   Released `minecraft:hover_text_color` from experimental
-   Released `minecraft:max_stack_size` from experimental
-   Released `minecraft:projectile` from experimental
-   Released `minecraft:record` from experimental
-   Released `minecraft:repairable` from experimental
-   Released `minecraft:shooter` from experimental
-   Released `minecraft:throwable` from experimental

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>
<Label color="green">Versioned</Label>

-   Removed `minecraft:render_offsets`

## 1.20.0

### Components

<Label color="green">Versioned</Label>

-   Released `minecraft:display_name` from experimental
-   Released `minecraft:durability` from experimental
-   Released `minecraft:fuel` from experimental
-   Released `minecraft:entity_placer` from experimental
-   Released `minecraft:icon` from experimental

<Tag name="experimental" />
<Label color="red">Holiday Creator Features</Label>
<Label color="green">Versioned</Label>

-   Removed `minecraft:dye_powder`
-   Updated `minecraft:repairable`
    -   Removed `on_repaired` trigger parameter

---

:::danger UNDOCUMENTED
Format changes in versions prior to `1.20.0` haven't been listed yet.
:::

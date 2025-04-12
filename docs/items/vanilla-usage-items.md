---
title: Vanilla Usage Components
category: Documentation
mentions:
    - MedicalJewel105
description: Automatically generated list of item components used in vanilla.
---

This page was created with [Wiki Content Generator](https://github.com/Bedrock-OSS/bedrock-wiki-content-generator). If there are issues, contact us on [Bedrock OSS](https://discord.gg/XjV87YN) Discord server.
Note that not more than 8 examples are shown for each component to keep this page fast to load. Namespace `minecraft` was also removed.
If you want to see full page, you can do it [here](/items/vui-full). *Last updated for 1.21.60*

## block

<Spoiler title="Show">

camera

<CodeHeader></CodeHeader>

```json
"minecraft:block": "minecraft:camera"
```

</Spoiler>

## bundle_interaction

<Spoiler title="Show">

black_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:bundle_interaction": {
    "num_viewable_slots": 12
}
```

blue_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:bundle_interaction": {
    "num_viewable_slots": 12
}
```

brown_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:bundle_interaction": {
    "num_viewable_slots": 12
}
```

bundle

<CodeHeader></CodeHeader>

```json
"minecraft:bundle_interaction": {
    "num_viewable_slots": 12
}
```

cyan_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:bundle_interaction": {
    "num_viewable_slots": 12
}
```

gray_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:bundle_interaction": {
    "num_viewable_slots": 12
}
```

green_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:bundle_interaction": {
    "num_viewable_slots": 12
}
```

light_blue_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:bundle_interaction": {
    "num_viewable_slots": 12
}
```

</Spoiler>

## camera

<Spoiler title="Show">

camera

<CodeHeader></CodeHeader>

```json
"minecraft:camera": {
    "black_bars_duration": 0.2,
    "black_bars_screen_ratio": 0.08,
    "shutter_duration": 0.2,
    "picture_duration": 1.0,
    "slide_away_duration": 0.2
}
```

</Spoiler>

## cooldown

<Spoiler title="Show">

wind_charge

<CodeHeader></CodeHeader>

```json
"minecraft:cooldown": {
    "category": "wind_charge",
    "duration": 0.5
}
```

</Spoiler>

## display_name

<Spoiler title="Show">

apple

<CodeHeader></CodeHeader>

```json
"minecraft:display_name": {
    "value": "item.apple.name"
}
```

breeze_rod

<CodeHeader></CodeHeader>

```json
"minecraft:display_name": {
    "value": "item.breeze_rod.name"
}
```

ominous_trial_key

<CodeHeader></CodeHeader>

```json
"minecraft:display_name": {
    "value": "item.ominous_trial_key.name"
}
```

trial_key

<CodeHeader></CodeHeader>

```json
"minecraft:display_name": {
    "value": "item.trial_key.name"
}
```

wind_charge

<CodeHeader></CodeHeader>

```json
"minecraft:display_name": {
    "value": "item.wind_charge.name"
}
```

</Spoiler>

## foil

<Spoiler title="Show">

appleEnchanted

<CodeHeader></CodeHeader>

```json
"minecraft:foil": true
```

golden_apple

<CodeHeader></CodeHeader>

```json
"minecraft:foil": false
```

</Spoiler>

## food

<Spoiler title="Show">

apple

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 4,
    "saturation_modifier": 0.3
}
```

appleEnchanted

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 4,
    "saturation_modifier": "supernatural",
    "can_always_eat": true,
    "effects": [
        {
            "name": "regeneration",
            "chance": 1.0,
            "duration": 30,
            "amplifier": 1
        },
        {
            "name": "absorption",
            "chance": 1.0,
            "duration": 120,
            "amplifier": 3
        },
        {
            "name": "resistance",
            "chance": 1.0,
            "duration": 300,
            "amplifier": 0
        },
        {
            "name": "fire_resistance",
            "chance": 1.0,
            "duration": 300,
            "amplifier": 0
        }
    ]
}
```

baked_potato

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 5,
    "saturation_modifier": "normal"
}
```

beef

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 3,
    "saturation_modifier": "low"
}
```

beetroot

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 1,
    "saturation_modifier": "normal"
}
```

beetroot_soup

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "normal",
    "using_converts_to": "bowl"
}
```

bread

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 5,
    "saturation_modifier": "normal"
}
```

carrot

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 3,
    "saturation_modifier": "normal"
}
```

</Spoiler>

## hand_equipped

<Spoiler title="Show">

appleEnchanted

<CodeHeader></CodeHeader>

```json
"minecraft:hand_equipped": false
```

breeze_rod

<CodeHeader></CodeHeader>

```json
"minecraft:hand_equipped": true
```

</Spoiler>

## icon

<Spoiler title="Show">

apple

<CodeHeader></CodeHeader>

```json
"minecraft:icon": {
    "texture": "apple"
}
```

black_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:icon": {
    "textures": {
        "default": "bundle_black"
    }
}
```

blue_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:icon": {
    "textures": {
        "default": "bundle_blue"
    }
}
```

breeze_rod

<CodeHeader></CodeHeader>

```json
"minecraft:icon": {
    "texture": "breeze_rod"
}
```

brown_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:icon": {
    "textures": {
        "default": "bundle_brown"
    }
}
```

bundle

<CodeHeader></CodeHeader>

```json
"minecraft:icon": {
    "textures": {
        "default": "bundle"
    }
}
```

cyan_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:icon": {
    "textures": {
        "default": "bundle_cyan"
    }
}
```

gray_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:icon": {
    "textures": {
        "default": "bundle_gray"
    }
}
```

</Spoiler>

## max_damage

<Spoiler title="Show">

clownfish

<CodeHeader></CodeHeader>

```json
"minecraft:max_damage": 0
```

cooked_fish

<CodeHeader></CodeHeader>

```json
"minecraft:max_damage": 0
```

cooked_salmon

<CodeHeader></CodeHeader>

```json
"minecraft:max_damage": 0
```

fish

<CodeHeader></CodeHeader>

```json
"minecraft:max_damage": 0
```

pufferfish

<CodeHeader></CodeHeader>

```json
"minecraft:max_damage": 0
```

salmon

<CodeHeader></CodeHeader>

```json
"minecraft:max_damage": 0
```

</Spoiler>

## max_stack_size

<Spoiler title="Show">

beetroot_soup

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
```

black_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
```

blue_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
```

brown_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
```

bundle

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
```

cyan_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
```

gray_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
```

green_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
```

</Spoiler>

## projectile

<Spoiler title="Show">

wind_charge

<CodeHeader></CodeHeader>

```json
"minecraft:projectile": {
    "projectile_entity": "wind_charge_projectile"
}
```

</Spoiler>

## seed

<Spoiler title="Show">

beetroot_seeds

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "beetroot"
}
```

carrot

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "carrots"
}
```

glow_berries

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "cave_vines",
    "plant_at": [
        "cave_vines",
        "cave_vines_head_with_berries"
    ],
    "plant_at_any_solid_surface": true,
    "plant_at_face": "DOWN"
}
```

melon_seeds

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "melon_stem"
}
```

nether_wart

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "plant_at": "soul_sand",
    "crop_result": "nether_wart"
}
```

pitcher_pod

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "pitcher_crop"
}
```

potato

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "potatoes"
}
```

pumpkin_seeds

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "pumpkin_stem"
}
```

</Spoiler>

## stacked_by_data

<Spoiler title="Show">

appleEnchanted

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

clownfish

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

cooked_fish

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

cooked_salmon

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

fish

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

golden_apple

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

pufferfish

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

salmon

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

</Spoiler>

## storage_item

<Spoiler title="Show">

black_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:storage_item": {
    "max_slots": 64,
    "max_weight_limit": 64,
    "weight_in_storage_item": 4,
    "allow_nested_storage_items": true,
    "banned_items": [
        "minecraft:shulker_box",
        "minecraft:undyed_shulker_box"
    ]
}
```

blue_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:storage_item": {
    "max_slots": 64,
    "max_weight_limit": 64,
    "weight_in_storage_item": 4,
    "allow_nested_storage_items": true,
    "banned_items": [
        "minecraft:shulker_box",
        "minecraft:undyed_shulker_box"
    ]
}
```

brown_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:storage_item": {
    "max_slots": 64,
    "max_weight_limit": 64,
    "weight_in_storage_item": 4,
    "allow_nested_storage_items": true,
    "banned_items": [
        "minecraft:shulker_box",
        "minecraft:undyed_shulker_box"
    ]
}
```

bundle

<CodeHeader></CodeHeader>

```json
"minecraft:storage_item": {
    "max_slots": 64,
    "max_weight_limit": 64,
    "weight_in_storage_item": 4,
    "allow_nested_storage_items": true,
    "banned_items": [
        "minecraft:shulker_box",
        "minecraft:undyed_shulker_box"
    ]
}
```

cyan_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:storage_item": {
    "max_slots": 64,
    "max_weight_limit": 64,
    "weight_in_storage_item": 4,
    "allow_nested_storage_items": true,
    "banned_items": [
        "minecraft:shulker_box",
        "minecraft:undyed_shulker_box"
    ]
}
```

gray_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:storage_item": {
    "max_slots": 64,
    "max_weight_limit": 64,
    "weight_in_storage_item": 4,
    "allow_nested_storage_items": true,
    "banned_items": [
        "minecraft:shulker_box",
        "minecraft:undyed_shulker_box"
    ]
}
```

green_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:storage_item": {
    "max_slots": 64,
    "max_weight_limit": 64,
    "weight_in_storage_item": 4,
    "allow_nested_storage_items": true,
    "banned_items": [
        "minecraft:shulker_box",
        "minecraft:undyed_shulker_box"
    ]
}
```

light_blue_bundle

<CodeHeader></CodeHeader>

```json
"minecraft:storage_item": {
    "max_slots": 64,
    "max_weight_limit": 64,
    "weight_in_storage_item": 4,
    "allow_nested_storage_items": true,
    "banned_items": [
        "minecraft:shulker_box",
        "minecraft:undyed_shulker_box"
    ]
}
```

</Spoiler>

## tags

<Spoiler title="Show">

apple

<CodeHeader></CodeHeader>

```json
"minecraft:tags": {
    "tags": [
        "minecraft:is_food"
    ]
}
```

</Spoiler>

## throwable

<Spoiler title="Show">

wind_charge

<CodeHeader></CodeHeader>

```json
"minecraft:throwable": {
    "do_swing_animation": true,
    "launch_power_scale": 1.5,
    "max_launch_power": 1.5
}
```

</Spoiler>

## use_animation

<Spoiler title="Show">

apple

<CodeHeader></CodeHeader>

```json
"minecraft:use_animation": "eat"
```

</Spoiler>

## use_duration

<Spoiler title="Show">

appleEnchanted

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

baked_potato

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

beef

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

beetroot

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

beetroot_soup

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

bread

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

camera

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 100000
```

carrot

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

</Spoiler>

## use_modifiers

<Spoiler title="Show">

apple

<CodeHeader></CodeHeader>

```json
"minecraft:use_modifiers": {
    "use_duration": 1.6,
    "movement_modifier": 0.35
}
```

</Spoiler>


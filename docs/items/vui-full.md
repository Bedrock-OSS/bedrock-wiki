---
title: Vanilla Usage Components - Full
category: Documentation
mentions:
    - MedicalJewel105
hidden: true
---

This page was created with [Wiki Content Generator](https://github.com/Bedrock-OSS/bedrock-wiki-content-generator). If there are issues, contact us on [Bedrock OSS](https://discord.gg/XjV87YN) Discord server.
Includes all examples. Namespace `minecraft` was removed. *Last updated for 1.19.10*

## block

<Spoiler title="Show">

camera

<CodeHeader></CodeHeader>

```json
"minecraft:block": "minecraft:camera"
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
    "saturation_modifier": "low"
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
            "amplifier": 4
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

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "low",
    "effects": [
        {
            "name": "hunger",
            "chance": 0.3,
            "duration": 30,
            "amplifier": 0
        }
    ]
}
```

chorus_fruit

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 4,
    "saturation_modifier": "low",
    "on_use_action": "chorus_teleport",
    "on_use_range": [
        8,
        8,
        8
    ],
    "cooldown_type": "chorusfruit",
    "cooldown_time": 20,
    "can_always_eat": true
}
```

clownfish

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 1,
    "saturation_modifier": "poor"
}
```

cooked_beef

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 8,
    "saturation_modifier": "good"
}
```

cooked_chicken

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "normal"
}
```

cooked_fish

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 5,
    "saturation_modifier": "normal"
}
```

cooked_porkchop

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 8,
    "saturation_modifier": "good"
}
```

cooked_rabbit

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 5,
    "saturation_modifier": "normal"
}
```

cooked_salmon

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "good"
}
```

cookie

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "poor"
}
```

dried_kelp

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 1,
    "saturation_modifier": "poor"
}
```

fish

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "poor"
}
```

glow_berries

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "low",
    "is_meat": false
}
```

golden_apple

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
            "duration": 5,
            "amplifier": 1
        },
        {
            "name": "absorption",
            "chance": 1.0,
            "duration": 120,
            "amplifier": 0
        }
    ]
}
```

golden_carrot

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "supernatural"
}
```

honey_bottle

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "poor",
    "can_always_eat": true,
    "using_converts_to": "glass_bottle",
    "remove_effects": [
        "poison"
    ]
}
```

melon

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "low"
}
```

mushroom_stew

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "normal",
    "using_converts_to": "bowl"
}
```

muttonCooked

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "good"
}
```

muttonRaw

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "low"
}
```

poisonous_potato

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "low",
    "effects": [
        {
            "name": "poison",
            "chance": 0.6,
            "duration": 5,
            "amplifier": 0
        }
    ]
}
```

porkchop

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 3,
    "saturation_modifier": "low"
}
```

potato

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 1,
    "saturation_modifier": "low"
}
```

pufferfish

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 1,
    "saturation_modifier": "poor",
    "effects": [
        {
            "name": "poison",
            "duration": 60,
            "amplifier": 1
        },
        {
            "name": "nausea",
            "duration": 15,
            "amplifier": 1
        },
        {
            "name": "hunger",
            "duration": 15,
            "amplifier": 2
        }
    ]
}
```

pumpkin_pie

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 8,
    "saturation_modifier": "low"
}
```

rabbit

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 3,
    "saturation_modifier": "low"
}
```

rabbit_stew

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 10,
    "saturation_modifier": "normal",
    "using_converts_to": "bowl"
}
```

rotten_flesh

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 4,
    "saturation_modifier": "poor",
    "effects": [
        {
            "name": "hunger",
            "chance": 0.8,
            "duration": 30,
            "amplifier": 0
        }
    ]
}
```

salmon

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "poor"
}
```

spider_eye

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "good",
    "effects": [
        {
            "name": "poison",
            "chance": 1.0,
            "duration": 5,
            "amplifier": 0
        }
    ]
}
```

suspicious_stew

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "normal",
    "using_converts_to": "bowl",
    "on_use_action": "suspicious_stew_effect"
}
```

sweet_berries

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "low",
    "is_meat": false
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

honey_bottle

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 16
```

mushroom_stew

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
```

rabbit_stew

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
```

suspicious_stew

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
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

sweet_berries

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "sweet_berry_bush",
    "plant_at": [
        "grass",
        "dirt",
        "podzol",
        "moss_block",
        "mycelium",
        "mud",
        "muddy_mangrove_roots",
        "dirt_with_roots"
    ]
}
```

wheat_seeds

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "wheat"
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

## use_duration

<Spoiler title="Show">

apple

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

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

chicken

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

chorus_fruit

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

clownfish

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

cooked_beef

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

cooked_chicken

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

cooked_fish

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

cooked_porkchop

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

cooked_rabbit

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

cooked_salmon

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

cookie

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

dried_kelp

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 16
```

fish

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

glow_berries

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

golden_apple

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

golden_carrot

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

honey_bottle

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 40
```

melon

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

mushroom_stew

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

muttonCooked

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

muttonRaw

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

poisonous_potato

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

porkchop

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

potato

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

pufferfish

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

pumpkin_pie

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

rabbit

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

rabbit_stew

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

rotten_flesh

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

salmon

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

spider_eye

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

suspicious_stew

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

sweet_berries

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

</Spoiler>


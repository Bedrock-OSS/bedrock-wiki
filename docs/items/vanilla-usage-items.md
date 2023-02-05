---
title: Vanilla Usage Components
category: Documentation
mentions:
    - MedicalJewel105
---

This page was created with [Wiki Content Generator](https://github.com/Bedrock-OSS/bedrock-wiki-content-generator). If there are issues, contact us on [Bedrock OSS](https://discord.gg/XjV87YN) Discord server.
Note that not more than 8 examples are shown for each component to keep this page fast to load. Namespace `minecraft` was also removed.
If you want to see full page, you can do it [here](/items/vui-full). *Last updated for 1.19.40*

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
        "farmland",
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

</Spoiler>


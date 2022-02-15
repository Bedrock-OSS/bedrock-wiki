---
title: Vanilla Usage Item Components
category: Documentation
---

This documentation is stripped from the vanilla files, using an [automated script](https://github.com/Bedrock-OSS/bedrock-harvester).

## minecraft:block

#### camera

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/camera.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:block": "minecraft:camera"
```

<CodeHeader></CodeHeader>

## minecraft:camera

#### camera

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/camera.json)</small>

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

<CodeHeader></CodeHeader>

## minecraft:foil

#### appleEnchanted

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/appleEnchanted.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:foil": true
```

<CodeHeader></CodeHeader>

#### golden_apple

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/golden_apple.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:foil": false
```

<CodeHeader></CodeHeader>

## minecraft:food

#### apple

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/apple.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 4,
    "saturation_modifier": "low"
}
```

<CodeHeader></CodeHeader>

#### appleEnchanted

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/appleEnchanted.json)</small>

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

<CodeHeader></CodeHeader>

#### baked_potato

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/baked_potato.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 5,
    "saturation_modifier": "normal"
}
```

<CodeHeader></CodeHeader>

#### beef

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beef.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 3,
    "saturation_modifier": "low"
}
```

<CodeHeader></CodeHeader>

#### beetroot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beetroot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 1,
    "saturation_modifier": "normal"
}
```

<CodeHeader></CodeHeader>

#### beetroot_soup

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beetroot_soup.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "normal",
    "using_converts_to": "bowl"
}
```

<CodeHeader></CodeHeader>

#### bread

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/bread.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 5,
    "saturation_modifier": "normal"
}
```

<CodeHeader></CodeHeader>

#### carrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/carrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 3,
    "saturation_modifier": "normal"
}
```
<CodeHeader></CodeHeader>

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/chicken.json)</small>

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

<CodeHeader></CodeHeader>

#### chorus_fruit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/chorus_fruit.json)</small>

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

<CodeHeader></CodeHeader>

#### clownfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/clownfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 1,
    "saturation_modifier": "poor"
}
```

<CodeHeader></CodeHeader>

#### cooked_beef

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_beef.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 8,
    "saturation_modifier": "good"
}
```

<CodeHeader></CodeHeader>

#### cooked_chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "normal"
}
```

<CodeHeader></CodeHeader>

#### cooked_fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 5,
    "saturation_modifier": "normal"
}
```

<CodeHeader></CodeHeader>

#### cooked_porkchop

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_porkchop.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 8,
    "saturation_modifier": "good"
}
```

<CodeHeader></CodeHeader>

#### cooked_rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 5,
    "saturation_modifier": "normal"
}
```

<CodeHeader></CodeHeader>

#### cooked_salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "good"
}
```

<CodeHeader></CodeHeader>

#### cookie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cookie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "poor"
}
```

<CodeHeader></CodeHeader>

#### dried_kelp

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/dried_kelp.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 1,
    "saturation_modifier": "poor"
}
```

<CodeHeader></CodeHeader>

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "poor"
}
```

<CodeHeader></CodeHeader>

#### glow_berries

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/glow_berries.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "low",
    "is_meat": false
}
```

<CodeHeader></CodeHeader>

#### golden_apple

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/golden_apple.json)</small>

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

<CodeHeader></CodeHeader>

#### golden_carrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/golden_carrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "supernatural"
}
```

<CodeHeader></CodeHeader>

#### honey_bottle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/honey_bottle.json)</small>

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

<CodeHeader></CodeHeader>

#### melon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/melon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "low"
}
```

<CodeHeader></CodeHeader>

#### mushroom_stew

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/mushroom_stew.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "normal",
    "using_converts_to": "bowl"
}
```

<CodeHeader></CodeHeader>

#### muttonCooked

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/muttonCooked.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "good"
}
```

<CodeHeader></CodeHeader>

#### muttonRaw

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/muttonRaw.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "low"
}
```

<CodeHeader></CodeHeader>

#### poisonous_potato

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/poisonous_potato.json)</small>

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

<CodeHeader></CodeHeader>

#### porkchop

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/porkchop.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 3,
    "saturation_modifier": "low"
}
```

<CodeHeader></CodeHeader>

#### potato

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/potato.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 1,
    "saturation_modifier": "low"
}
```

<CodeHeader></CodeHeader>

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 1,
    "saturation_modifier": "poor",
    "effects": [
        {
            "name": "poison",
            "duration": 60,
            "amplifier": 3
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

<CodeHeader></CodeHeader>

#### pumpkin_pie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pumpkin_pie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 8,
    "saturation_modifier": "low"
}
```

<CodeHeader></CodeHeader>

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 3,
    "saturation_modifier": "low"
}
```

<CodeHeader></CodeHeader>

#### rabbit_stew

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rabbit_stew.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 10,
    "saturation_modifier": "normal",
    "using_converts_to": "bowl"
}
```

<CodeHeader></CodeHeader>

#### rotten_flesh

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rotten_flesh.json)</small>

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

<CodeHeader></CodeHeader>

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "poor"
}
```

<CodeHeader></CodeHeader>

#### spider_eye

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/spider_eye.json)</small>

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

<CodeHeader></CodeHeader>

#### suspicious_stew

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/suspicious_stew.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "normal",
    "using_converts_to": "bowl",
    "on_use_action": "suspicious_stew_effect"
}
```

<CodeHeader></CodeHeader>

#### sweet_berries

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/sweet_berries.json)</small>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "low",
    "is_meat": false
}
```

## minecraft:hand_equipped

#### appleEnchanted

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/appleEnchanted.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hand_equipped": false
```

<CodeHeader></CodeHeader>

## minecraft:max_damage

#### clownfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/clownfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_damage": 0
```

<CodeHeader></CodeHeader>

#### cooked_fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_damage": 0
```

<CodeHeader></CodeHeader>

#### cooked_salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_damage": 0
```

<CodeHeader></CodeHeader>

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_damage": 0
```

<CodeHeader></CodeHeader>

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_damage": 0
```

<CodeHeader></CodeHeader>

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_damage": 0
```

<CodeHeader></CodeHeader>

## minecraft:max_stack_size

#### beetroot_soup

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beetroot_soup.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
```

<CodeHeader></CodeHeader>

#### honey_bottle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/honey_bottle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 16
```

<CodeHeader></CodeHeader>

#### mushroom_stew

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/mushroom_stew.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
```

<CodeHeader></CodeHeader>

#### rabbit_stew

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rabbit_stew.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
```

<CodeHeader></CodeHeader>

#### suspicious_stew

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/suspicious_stew.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
```

<CodeHeader></CodeHeader>

## minecraft:seed

#### beetroot_seeds

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beetroot_seeds.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "beetroot"
}
```

<CodeHeader></CodeHeader>

#### carrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/carrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "carrots"
}
```

<CodeHeader></CodeHeader>

#### glow_berries

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/glow_berries.json)</small>

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

<CodeHeader></CodeHeader>

#### melon_seeds

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/melon_seeds.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "melon_stem"
}
```

<CodeHeader></CodeHeader>

#### nether_wart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/nether_wart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "plant_at": "soul_sand",
    "crop_result": "nether_wart"
}
```

<CodeHeader></CodeHeader>

#### potato

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/potato.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "potatoes"
}
```

<CodeHeader></CodeHeader>

#### pumpkin_seeds

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pumpkin_seeds.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "pumpkin_stem"
}
```

<CodeHeader></CodeHeader>

#### sweet_berries

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/sweet_berries.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "sweet_berry_bush",
    "plant_at": [
        "grass",
        "dirt",
        "podzol",
        "moss_block"
    ]
}
```

<CodeHeader></CodeHeader>

#### wheat_seeds

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/wheat_seeds.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "wheat"
}
```

<CodeHeader></CodeHeader>

## minecraft:stacked_by_data

#### appleEnchanted

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/appleEnchanted.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

<CodeHeader></CodeHeader>

#### clownfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/clownfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

<CodeHeader></CodeHeader>

#### cooked_fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

<CodeHeader></CodeHeader>

#### cooked_salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

<CodeHeader></CodeHeader>

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

<CodeHeader></CodeHeader>

#### golden_apple

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/golden_apple.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

<CodeHeader></CodeHeader>

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

<CodeHeader></CodeHeader>

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

<CodeHeader></CodeHeader>

## minecraft:use_duration

#### apple

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/apple.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### appleEnchanted

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/appleEnchanted.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### baked_potato

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/baked_potato.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### beef

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beef.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### beetroot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beetroot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### beetroot_soup

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beetroot_soup.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### bread

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/bread.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### camera

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/camera.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 100000
```

<CodeHeader></CodeHeader>

#### carrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/carrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### chorus_fruit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/chorus_fruit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### clownfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/clownfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### cooked_beef

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_beef.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### cooked_chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### cooked_fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### cooked_porkchop

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_porkchop.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### cooked_rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### cooked_salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### cookie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cookie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### dried_kelp

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/dried_kelp.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 16
```

<CodeHeader></CodeHeader>

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### glow_berries

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/glow_berries.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### golden_apple

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/golden_apple.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### golden_carrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/golden_carrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### honey_bottle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/honey_bottle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 40
```

<CodeHeader></CodeHeader>

#### melon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/melon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### mushroom_stew

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/mushroom_stew.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### muttonCooked

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/muttonCooked.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### muttonRaw

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/muttonRaw.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### poisonous_potato

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/poisonous_potato.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### porkchop

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/porkchop.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### potato

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/potato.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### pumpkin_pie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pumpkin_pie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### rabbit_stew

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rabbit_stew.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### rotten_flesh

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rotten_flesh.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### spider_eye

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/spider_eye.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### suspicious_stew

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/suspicious_stew.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

#### sweet_berries

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/sweet_berries.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

<CodeHeader></CodeHeader>

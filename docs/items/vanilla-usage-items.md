---
title: Vanilla Usage Items Components
category: Documentation
toc_max_level: 1
---

# Items

This documentation is stripped from the vanilla files using an automated script. If there is an issue, you can tell us about it in [Bedrock OSS](https://discord.gg/XjV87YN) Discord server.

## block

<Spoiler title="Show">

#### camera

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/camera.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:block": "minecraft:camera"
```

</Spoiler>

## camera

<Spoiler title="Show">

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

#### appleEnchanted

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/appleEnchanted.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:foil": true
```

#### golden_apple

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/golden_apple.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:foil": false
```

</Spoiler>

## food

<Spoiler title="Show">

#### apple

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/apple.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 4,
    "saturation_modifier": "low"
}
```

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

#### baked_potato

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/baked_potato.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 5,
    "saturation_modifier": "normal"
}
```

#### beef

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beef.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 3,
    "saturation_modifier": "low"
}
```

#### beetroot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beetroot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 1,
    "saturation_modifier": "normal"
}
```

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

#### bread

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/bread.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 5,
    "saturation_modifier": "normal"
}
```

#### carrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/carrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 3,
    "saturation_modifier": "normal"
}
```

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

#### clownfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/clownfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 1,
    "saturation_modifier": "poor"
}
```

#### cooked_beef

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_beef.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 8,
    "saturation_modifier": "good"
}
```

#### cooked_chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "normal"
}
```

#### cooked_fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 5,
    "saturation_modifier": "normal"
}
```

#### cooked_porkchop

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_porkchop.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 8,
    "saturation_modifier": "good"
}
```

#### cooked_rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 5,
    "saturation_modifier": "normal"
}
```

#### cooked_salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "good"
}
```

#### cookie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cookie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "poor"
}
```

#### dried_kelp

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/dried_kelp.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 1,
    "saturation_modifier": "poor"
}
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "poor"
}
```

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

#### golden_carrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/golden_carrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "supernatural"
}
```

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

#### melon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/melon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "low"
}
```

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

#### muttonCooked

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/muttonCooked.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "good"
}
```

#### muttonRaw

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/muttonRaw.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "low"
}
```

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

#### porkchop

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/porkchop.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 3,
    "saturation_modifier": "low"
}
```

#### potato

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/potato.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 1,
    "saturation_modifier": "low"
}
```

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

#### pumpkin_pie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pumpkin_pie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 8,
    "saturation_modifier": "low"
}
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 3,
    "saturation_modifier": "low"
}
```

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

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "poor"
}
```

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

#### sweet_berries

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/sweet_berries.json)</small>

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

#### appleEnchanted

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/appleEnchanted.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:hand_equipped": false
```

</Spoiler>

## max_damage

<Spoiler title="Show">

#### clownfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/clownfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_damage": 0
```

#### cooked_fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_damage": 0
```

#### cooked_salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_damage": 0
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_damage": 0
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_damage": 0
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_damage": 0
```

</Spoiler>

## max_stack_size

<Spoiler title="Show">

#### beetroot_soup

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beetroot_soup.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
```

#### honey_bottle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/honey_bottle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 16
```

#### mushroom_stew

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/mushroom_stew.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
```

#### rabbit_stew

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rabbit_stew.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
```

#### suspicious_stew

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/suspicious_stew.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:max_stack_size": 1
```

</Spoiler>

## seed

<Spoiler title="Show">

#### beetroot_seeds

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beetroot_seeds.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "beetroot"
}
```

#### carrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/carrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "carrots"
}
```

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

#### melon_seeds

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/melon_seeds.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "melon_stem"
}
```

#### nether_wart

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/nether_wart.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "plant_at": "soul_sand",
    "crop_result": "nether_wart"
}
```

#### potato

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/potato.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "potatoes"
}
```

#### pumpkin_seeds

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pumpkin_seeds.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "pumpkin_stem"
}
```

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
        "moss_block",
        "mycelium"
    ]
}
```

#### wheat_seeds

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/wheat_seeds.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:seed": {
    "crop_result": "wheat"
}
```

</Spoiler>

## stacked_by_data

<Spoiler title="Show">

#### appleEnchanted

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/appleEnchanted.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

#### clownfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/clownfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

#### cooked_fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

#### cooked_salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

#### golden_apple

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/golden_apple.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:stacked_by_data": true
```

</Spoiler>

## use_duration

<Spoiler title="Show">

#### apple

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/apple.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### appleEnchanted

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/appleEnchanted.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### baked_potato

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/baked_potato.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### beef

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beef.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### beetroot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beetroot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### beetroot_soup

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beetroot_soup.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### bread

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/bread.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### camera

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/camera.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 100000
```

#### carrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/carrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### chorus_fruit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/chorus_fruit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### clownfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/clownfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### cooked_beef

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_beef.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### cooked_chicken

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_chicken.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### cooked_fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### cooked_porkchop

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_porkchop.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### cooked_rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### cooked_salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### cookie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cookie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### dried_kelp

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/dried_kelp.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 16
```

#### fish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/fish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### glow_berries

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/glow_berries.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### golden_apple

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/golden_apple.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### golden_carrot

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/golden_carrot.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### honey_bottle

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/honey_bottle.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 40
```

#### melon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/melon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### mushroom_stew

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/mushroom_stew.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### muttonCooked

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/muttonCooked.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### muttonRaw

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/muttonRaw.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### poisonous_potato

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/poisonous_potato.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### porkchop

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/porkchop.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### potato

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/potato.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### pufferfish

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pufferfish.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### pumpkin_pie

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pumpkin_pie.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### rabbit

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rabbit.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### rabbit_stew

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rabbit_stew.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### rotten_flesh

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rotten_flesh.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### salmon

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/salmon.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### spider_eye

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/spider_eye.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### suspicious_stew

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/suspicious_stew.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

#### sweet_berries

<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/sweet_berries.json)</small>

<CodeHeader></CodeHeader>

```json
"minecraft:use_duration": 32
```

</Spoiler>
---
title: Vanilla Usage
---

# Items
This documentation is stripped from the vanilla files using an automated script. If there is an issue, please bring it to the authors attention by contacting him on discord: `SirLich#1658`

# Table of contents
 - [minecraft:block](#minecraftblock)
 - [minecraft:camera](#minecraftcamera)
 - [minecraft:foil](#minecraftfoil)
 - [minecraft:food](#minecraftfood)
 - [minecraft:hand_equipped](#minecrafthand_equipped)
 - [minecraft:max_damage](#minecraftmax_damage)
 - [minecraft:max_stack_size](#minecraftmax_stack_size)
 - [minecraft:seed](#minecraftseed)
 - [minecraft:stacked_by_data](#minecraftstacked_by_data)
 - [minecraft:use_duration](#minecraftuse_duration)


<Spoiler title="Code">

# minecraft:block
### camera
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/camera.json)</small>
```json
"minecraft:block": "minecraft:camera"
```

</Spoiler>

<Spoiler title="Code">

# minecraft:camera
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

<Spoiler title="Code">

# minecraft:foil
### appleEnchanted
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/appleEnchanted.json)</small>
```json
"minecraft:foil": true
```

</Spoiler>
### golden_apple
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/golden_apple.json)</small>
```json
"minecraft:foil": false
```

</Spoiler>

<Spoiler title="Code">

# minecraft:food
### apple
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/apple.json)</small>
```json
"minecraft:food": {
    "nutrition": 4,
    "saturation_modifier": "low"
}
```

</Spoiler>
### appleEnchanted
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/appleEnchanted.json)</small>
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

</Spoiler>
### baked_potato
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/baked_potato.json)</small>
```json
"minecraft:food": {
    "nutrition": 5,
    "saturation_modifier": "normal"
}
```

</Spoiler>
### beef
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beef.json)</small>
```json
"minecraft:food": {
    "nutrition": 3,
    "saturation_modifier": "low"
}
```

</Spoiler>
### beetroot
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beetroot.json)</small>
```json
"minecraft:food": {
    "nutrition": 1,
    "saturation_modifier": "normal"
}
```

</Spoiler>
### beetroot_soup
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beetroot_soup.json)</small>
```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "normal",
    "using_converts_to": "bowl"
}
```

</Spoiler>
### bread
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/bread.json)</small>
```json
"minecraft:food": {
    "nutrition": 5,
    "saturation_modifier": "normal"
}
```

</Spoiler>
### carrot
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/carrot.json)</small>
```json
"minecraft:food": {
    "nutrition": 3,
    "saturation_modifier": "normal"
}
```

</Spoiler>
### chicken
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/chicken.json)</small>
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

</Spoiler>
### chorus_fruit
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/chorus_fruit.json)</small>
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

</Spoiler>
### clownfish
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/clownfish.json)</small>
```json
"minecraft:food": {
    "nutrition": 1,
    "saturation_modifier": "poor"
}
```

</Spoiler>
### cooked_beef
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_beef.json)</small>
```json
"minecraft:food": {
    "nutrition": 8,
    "saturation_modifier": "good"
}
```

</Spoiler>
### cooked_chicken
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_chicken.json)</small>
```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "normal"
}
```

</Spoiler>
### cooked_fish
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_fish.json)</small>
```json
"minecraft:food": {
    "nutrition": 5,
    "saturation_modifier": "normal"
}
```

</Spoiler>
### cooked_porkchop
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_porkchop.json)</small>
```json
"minecraft:food": {
    "nutrition": 8,
    "saturation_modifier": "good"
}
```

</Spoiler>
### cooked_rabbit
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_rabbit.json)</small>
```json
"minecraft:food": {
    "nutrition": 5,
    "saturation_modifier": "normal"
}
```

</Spoiler>
### cooked_salmon
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_salmon.json)</small>
```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "good"
}
```

</Spoiler>
### cookie
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cookie.json)</small>
```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "poor"
}
```

</Spoiler>
### dried_kelp
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/dried_kelp.json)</small>
```json
"minecraft:food": {
    "nutrition": 1,
    "saturation_modifier": "poor"
}
```

</Spoiler>
### fish
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/fish.json)</small>
```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "poor"
}
```

</Spoiler>
### glow_berries
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/glow_berries.json)</small>
```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "low",
    "is_meat": false
}
```

</Spoiler>
### golden_apple
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/golden_apple.json)</small>
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

</Spoiler>
### golden_carrot
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/golden_carrot.json)</small>
```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "supernatural"
}
```

</Spoiler>
### honey_bottle
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/honey_bottle.json)</small>
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

</Spoiler>
### melon
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/melon.json)</small>
```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "low"
}
```

</Spoiler>
### mushroom_stew
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/mushroom_stew.json)</small>
```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "normal",
    "using_converts_to": "bowl"
}
```

</Spoiler>
### muttonCooked
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/muttonCooked.json)</small>
```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "good"
}
```

</Spoiler>
### muttonRaw
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/muttonRaw.json)</small>
```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "low"
}
```

</Spoiler>
### poisonous_potato
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/poisonous_potato.json)</small>
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

</Spoiler>
### porkchop
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/porkchop.json)</small>
```json
"minecraft:food": {
    "nutrition": 3,
    "saturation_modifier": "low"
}
```

</Spoiler>
### potato
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/potato.json)</small>
```json
"minecraft:food": {
    "nutrition": 1,
    "saturation_modifier": "low"
}
```

</Spoiler>
### pufferfish
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pufferfish.json)</small>
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

</Spoiler>
### pumpkin_pie
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pumpkin_pie.json)</small>
```json
"minecraft:food": {
    "nutrition": 8,
    "saturation_modifier": "low"
}
```

</Spoiler>
### rabbit
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rabbit.json)</small>
```json
"minecraft:food": {
    "nutrition": 3,
    "saturation_modifier": "low"
}
```

</Spoiler>
### rabbit_stew
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rabbit_stew.json)</small>
```json
"minecraft:food": {
    "nutrition": 10,
    "saturation_modifier": "normal",
    "using_converts_to": "bowl"
}
```

</Spoiler>
### rotten_flesh
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rotten_flesh.json)</small>
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

</Spoiler>
### salmon
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/salmon.json)</small>
```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "poor"
}
```

</Spoiler>
### spider_eye
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/spider_eye.json)</small>
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

</Spoiler>
### suspicious_stew
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/suspicious_stew.json)</small>
```json
"minecraft:food": {
    "nutrition": 6,
    "saturation_modifier": "normal",
    "using_converts_to": "bowl",
    "on_use_action": "suspicious_stew_effect"
}
```

</Spoiler>
### sweet_berries
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/sweet_berries.json)</small>
```json
"minecraft:food": {
    "nutrition": 2,
    "saturation_modifier": "low",
    "is_meat": false
}
```

</Spoiler>

<Spoiler title="Code">

# minecraft:hand_equipped
### appleEnchanted
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/appleEnchanted.json)</small>
```json
"minecraft:hand_equipped": false
```

</Spoiler>

<Spoiler title="Code">

# minecraft:max_damage
### clownfish
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/clownfish.json)</small>
```json
"minecraft:max_damage": 0
```

</Spoiler>
### cooked_fish
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_fish.json)</small>
```json
"minecraft:max_damage": 0
```

</Spoiler>
### cooked_salmon
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_salmon.json)</small>
```json
"minecraft:max_damage": 0
```

</Spoiler>
### fish
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/fish.json)</small>
```json
"minecraft:max_damage": 0
```

</Spoiler>
### pufferfish
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pufferfish.json)</small>
```json
"minecraft:max_damage": 0
```

</Spoiler>
### salmon
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/salmon.json)</small>
```json
"minecraft:max_damage": 0
```

</Spoiler>

<Spoiler title="Code">

# minecraft:max_stack_size
### beetroot_soup
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beetroot_soup.json)</small>
```json
"minecraft:max_stack_size": 1
```

</Spoiler>
### honey_bottle
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/honey_bottle.json)</small>
```json
"minecraft:max_stack_size": 16
```

</Spoiler>
### mushroom_stew
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/mushroom_stew.json)</small>
```json
"minecraft:max_stack_size": 1
```

</Spoiler>
### rabbit_stew
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rabbit_stew.json)</small>
```json
"minecraft:max_stack_size": 1
```

</Spoiler>
### suspicious_stew
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/suspicious_stew.json)</small>
```json
"minecraft:max_stack_size": 1
```

</Spoiler>

<Spoiler title="Code">

# minecraft:seed
### beetroot_seeds
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beetroot_seeds.json)</small>
```json
"minecraft:seed": {
    "crop_result": "beetroot"
}
```

</Spoiler>
### carrot
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/carrot.json)</small>
```json
"minecraft:seed": {
    "crop_result": "carrots"
}
```

</Spoiler>
### glow_berries
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/glow_berries.json)</small>
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

</Spoiler>
### melon_seeds
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/melon_seeds.json)</small>
```json
"minecraft:seed": {
    "crop_result": "melon_stem"
}
```

</Spoiler>
### nether_wart
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/nether_wart.json)</small>
```json
"minecraft:seed": {
    "plant_at": "soul_sand",
    "crop_result": "nether_wart"
}
```

</Spoiler>
### potato
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/potato.json)</small>
```json
"minecraft:seed": {
    "crop_result": "potatoes"
}
```

</Spoiler>
### pumpkin_seeds
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pumpkin_seeds.json)</small>
```json
"minecraft:seed": {
    "crop_result": "pumpkin_stem"
}
```

</Spoiler>
### sweet_berries
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/sweet_berries.json)</small>
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

</Spoiler>
### wheat_seeds
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/wheat_seeds.json)</small>
```json
"minecraft:seed": {
    "crop_result": "wheat"
}
```

</Spoiler>

<Spoiler title="Code">

# minecraft:stacked_by_data
### appleEnchanted
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/appleEnchanted.json)</small>
```json
"minecraft:stacked_by_data": true
```

</Spoiler>
### clownfish
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/clownfish.json)</small>
```json
"minecraft:stacked_by_data": true
```

</Spoiler>
### cooked_fish
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_fish.json)</small>
```json
"minecraft:stacked_by_data": true
```

</Spoiler>
### cooked_salmon
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_salmon.json)</small>
```json
"minecraft:stacked_by_data": true
```

</Spoiler>
### fish
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/fish.json)</small>
```json
"minecraft:stacked_by_data": true
```

</Spoiler>
### golden_apple
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/golden_apple.json)</small>
```json
"minecraft:stacked_by_data": true
```

</Spoiler>
### pufferfish
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pufferfish.json)</small>
```json
"minecraft:stacked_by_data": true
```

</Spoiler>
### salmon
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/salmon.json)</small>
```json
"minecraft:stacked_by_data": true
```

</Spoiler>

<Spoiler title="Code">

# minecraft:use_duration
### apple
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/apple.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### appleEnchanted
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/appleEnchanted.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### baked_potato
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/baked_potato.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### beef
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beef.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### beetroot
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beetroot.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### beetroot_soup
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/beetroot_soup.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### bread
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/bread.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### camera
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/camera.json)</small>
```json
"minecraft:use_duration": 100000
```

</Spoiler>
### carrot
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/carrot.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### chicken
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/chicken.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### chorus_fruit
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/chorus_fruit.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### clownfish
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/clownfish.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### cooked_beef
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_beef.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### cooked_chicken
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_chicken.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### cooked_fish
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_fish.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### cooked_porkchop
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_porkchop.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### cooked_rabbit
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_rabbit.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### cooked_salmon
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cooked_salmon.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### cookie
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/cookie.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### dried_kelp
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/dried_kelp.json)</small>
```json
"minecraft:use_duration": 16
```

</Spoiler>
### fish
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/fish.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### glow_berries
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/glow_berries.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### golden_apple
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/golden_apple.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### golden_carrot
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/golden_carrot.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### honey_bottle
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/honey_bottle.json)</small>
```json
"minecraft:use_duration": 40
```

</Spoiler>
### melon
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/melon.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### mushroom_stew
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/mushroom_stew.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### muttonCooked
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/muttonCooked.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### muttonRaw
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/muttonRaw.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### poisonous_potato
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/poisonous_potato.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### porkchop
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/porkchop.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### potato
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/potato.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### pufferfish
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pufferfish.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### pumpkin_pie
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/pumpkin_pie.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### rabbit
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rabbit.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### rabbit_stew
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rabbit_stew.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### rotten_flesh
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/rotten_flesh.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### salmon
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/salmon.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### spider_eye
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/spider_eye.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### suspicious_stew
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/suspicious_stew.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>
### sweet_berries
<small>[View file](https://github.com/bedrock-dot-dev/packs/tree/master/stable/behavior/items/sweet_berries.json)</small>
```json
"minecraft:use_duration": 32
```

</Spoiler>

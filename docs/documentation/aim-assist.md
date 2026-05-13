# Aim Assist

Aim assist in Minecraft Bedrock Edition can be customized through behavior packs using two separate JSON files: an **aim assist preset** and an **aim assist categories** file. These work together to control what gets targeted and how.

Requires format version `1.21.50` or higher.

---

## Aim Assist Categories

The categories file defines the priority weights for blocks and entities. Higher weight = higher priority for the aim assist.

**File location:** `behavior_pack/aim_assist/categories/your_category.json`

```json
{
    "format_version": "1.21.50",
    "minecraft:aim_assist_categories": {
        "categories": [
            {
                "name": "yourpack:category_name",
                "priorities": {
                    "block_default": 30,
                    "entity_default": 30,
                    "blocks": {},
                    "entities": {
                        "minecraft:end_crystal": 30,
                        "minecraft:armor_stand": 40
                    }
                }
            }
        ]
    }
}
```

### Priority Fields

| Field | Description |
|---|---|
| `block_default` | Weight applied to all blocks by default |
| `entity_default` | Weight applied to all entities by default |
| `blocks` | Override weight for specific blocks |
| `entities` | Override weight for specific entities |

Specific entries inside `blocks` or `entities` override their respective default values. Setting a specific entity to a lower value than `entity_default` makes it less prioritized than other entities.

### Example: PVE Aim Assist

To make the aim assist heavily favor entities over blocks (useful for combat):

```json
"priorities": {
    "block_default": 25,
    "entity_default": 80,
    "blocks": {},
    "entities": {
        "minecraft:end_crystal": 30,
        "minecraft:armor_stand": 40
    }
}
```

---

## Aim Assist Preset

The preset file ties everything together — it controls which category is used by default, per item, and when the hand is empty.

**File location:** `behavior_pack/aim_assist/presets/your_preset.json`

```json
{
    "format_version": "1.21.50",
    "minecraft:aim_assist_preset": {
        "identifier": "yourpack:your_preset",
        "item_settings": {
            "minecraft:bucket": "minecraft:bucket"
        },
        "default_item_settings": "minecraft:default",
        "hand_settings": "minecraft:empty_hand",
        "exclusion_list": [
            "minecraft:bedrock",
            "minecraft:arrow"
        ],
        "liquid_targeting_list": [
            "minecraft:bucket",
            "minecraft:oak_boat"
        ]
    }
}
```

### Preset Fields

| Field | Description |
|---|---|
| `identifier` | Unique identifier for this preset |
| `item_settings` | Maps specific items to a specific aim assist category |
| `default_item_settings` | The aim assist category used by default when holding any item |
| `hand_settings` | The aim assist category used when the hand is empty |
| `exclusion_list` | Items or blocks excluded from aim assist targeting |
| `liquid_targeting_list` | Items that enable liquid block targeting when held (e.g. buckets, boats) |

---

## Activating via Script API or Commands

You can activate a custom aim assist preset on a player using the `/aimassist` command through scripts:

```js
player.runCommand("aimassist set @s 60 10 16 angle yourpack:your_preset");
```
or in commands:
```txt
/aimassist set @s 60 10 16 angle yourpack:your_preset
```

This lets you use script logic to control **when** and **on whom** the aim assist is active, while the JSON files handle what gets prioritized.

### Adding Aim Assist in your Camera Preset
You can directly active your Aim Assist using your Camera Preset
```json
{
	"format_version": "1.20.10",
	"minecraft:camera_preset": {
		"identifier": "yourpack:your_camera_preset",
		"inherit_from": "minecraft:free",
		"player_effects": true,
		"aim_assist": {
			"preset": "yourpack:your_preset"
		}
	}
}
```
With this you'll automatically active Aim Assist after switch to your Custom Camera Preset

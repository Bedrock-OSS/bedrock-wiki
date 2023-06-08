---
title: Experimental Blocks
category: General
nav_order: 3
tags:
    - experimental
mentions:
    - SirLich
    - solvedDev
    - yanasakana
    - MedicalJewel105
    - aexer0e
    - SmokeyStack
    - Chikorita-Lover
    - Luthorius
    - TheDoctor15
    - XxPoggyisLitxX
    - TheItsNameless
    - ThomasOrs
    - Kaioga5
    - QuazChick
---

Better documentation on the new block format introduced in the Minecraft Beta 1.16.100 and newer versions.

:::warning
This document covers experimental features for blocks. If you would like to learn about stable blocks, you can do so [here](/blocks/blocks-stable).
:::

## Block Events

<CodeHeader></CodeHeader>

```json
{
  "format_version": "1.19.80",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_block"
    },
    "components": {
      "minecraft:on_step_on": {
        "event": "wiki:drop_loot",
        "target": "self"
      }
    },
    "events": {
      "wiki:drop_loot": {
        "spawn_loot": {
          "table": "loot_tables/blocks/my_loot_table.json"
        }
      }
    }
  }
}
```

_This example spawns a loot table when an entity stands on the block._

## Event Responses

### add_mob_effect

Adds a mob effect to a target when triggered.

<CodeHeader></CodeHeader>

```json
{
  "wiki:effect_event": {
    "add_mob_effect": {
      "effect": "poison",
      "target": "other",
      "duration": 8,
      "amplifier": 3
    }
  }
}
```

### remove_mob_effect

Removes a target's mob effect when triggered.

<CodeHeader></CodeHeader>

```json
{
  "wiki:remove_effect_event": {
    "remove_mob_effect": {
      "effect": "poison",
      "target": "other"
    }
  }
}
```

### spawn_loot

Summons a loot table.

<CodeHeader></CodeHeader>

```json
{
  "wiki:drop_loot": {
    "spawn_loot": {
      "table": "loot_tables/blocks/my_loot_table.json"
    }
  }
}
```

### set_block

Removes the current block and replaces it with the defined block in the same position.

<CodeHeader></CodeHeader>

```json
{
  "wiki:place_block": {
    "set_block": "minecraft:grass"
  }
}
```

### set_block_property

Sets the block's property.

<CodeHeader></CodeHeader>

```json
{
  "wiki:change_color": {
    "set_block_property": {
      "wiki:string_property_example": "'red'"
    }
  }
}
```

### set_block_at_pos

Sets a block at a specified position relative to the block.

<CodeHeader></CodeHeader>

```json
{
  "wiki:trigger_event": {
    "set_block_at_pos": {
      "block_type": "minecraft:stone",
      "block_offset": [0, 0, 0]
    }
  }
}
```

### run_command

Runs command(s) onto a target in context.

<CodeHeader></CodeHeader>

```json
{
  "wiki:execute_event": {
    "run_command": {
      "target": "self",
      "command": "summon pig"
    }
  }
}
```


<CodeHeader></CodeHeader>

```json
{
  "wiki:execute_event": {
    "run_command": {
      "target": "self",
      "command": ["summon pig", "say Ooh... A pig!!1!"]
    }
  }
}
```

### damage

Inflicts a specified damage unto a target in context.

<CodeHeader></CodeHeader>

```json
{
  "wiki:damage_event": {
    "damage": {
      "type": "magic",
      "target": "other",
      "amount": 4
    }
  }
}
```

### decrement_stack

Decrements the player's current item stack.

<CodeHeader></CodeHeader>

```json
{
  "wiki:remove_one": {
    "decrement_stack": {}
  }
}
```

### die

Kills the specified target in context, making the block disappear with no loot. (Destroying the block, if specified).

<CodeHeader></CodeHeader>

```json
{
  "wiki:destroy": {
    "die": {
      "target": "self"
    }
  }
}
```

### play_effect

Play a particle effect at a specified contextual target's position.

<CodeHeader></CodeHeader>

```json
{
  "wiki:particle_effect": {
    "play_effect": {
      "effect": "minecraft:campfire_smoke",
      "target": "self"
    }
  }
}
```

### play_sound

Play a sound to a specified contextual target.

<CodeHeader></CodeHeader>

```json
{
  "wiki:play_sound": {
    "play_sound": {
      "sound": "mob.enderman.death",
      "target": "self"
    }
  }
}
```

### trigger

Triggers an event unto a specified contextual target.

<CodeHeader></CodeHeader>

```json
{
  "wiki:trigger_event": {
    "trigger": {
      "event": "wiki:my_event",
      "target": "self"
    }
  }
}
```

### sequence

Sequences event functions

<CodeHeader></CodeHeader>

```json
{
  "wiki:sequence_event": {
    "sequence": [
      {
        "set_block_property": {
          "wiki:my_prop": true
        }
      },
      {
        "condition": "q.block_property('wiki:my_prop')", //Optional
        "trigger": {
          "event": "wiki:my_entity_event",
          "target": "other"
        }
      }
    ]
  }
}
```

### randomize

Randomizes event functions

<CodeHeader></CodeHeader>

```json
{
  "wiki:randomize_events": {
    "randomize": [
      {
        "weight": 1, //Defines the rarity
        "set_block_property": {
          "wiki:boolean_property_example": false
        }
      },
      {
        "weight": 2,
        "set_block_property": {
          "wiki:boolean_property_example": true
        }
      },
      {
        "weight": 4,
        "set_block": "minecraft:stone"
      }
    ]
  }
}
```

## Triggering Events

Block event-trigger components:

-   `minecraft:on_interact`
-   `minecraft:on_step_on`
-   `minecraft:on_step_off`
-   `minecraft:on_fall_on`
-   `minecraft:on_placed`
-   `minecraft:on_player_placing`
-   `minecraft:on_player_destroyed`

-   `minecraft:queued_ticking` and `minecraft:random_ticking` may be used to trigger events after a time either set or random, respectively


## Block Components

List of experimental block components, with usage examples.

### minecraft:random_ticking

Allows for behavior like random crop growth.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:random_ticking": {
    "on_tick": {
      "event": "block_event",
      "target": "self",
      "condition": "q.block_property('wiki:block_property')" //Optional
    }
  }
}
```

### minecraft:queued_ticking

Ticks when the values between x and y values randomly inside `interval_range`.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:queued_ticking": {
      "looping": true,
        "interval_range": [20, 20], //range changed to this.
        "on_tick": {
            "event": "set_particles_and_effect",
            "target": "block"
        }
  }
}
```

### minecraft:transformation

Allows for rotation, scaling and translation.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:transformation": {
    "translation": [0.0, 0.1, -0.1],
    "scale": [0.5, 1, 1.5],
    "rotation": [90, 180, 0]
  }
}
```

For block rotations like logs, see [this](/blocks/rotatable-blocks)

### minecraft:unit_cube

Forces the block to be a cube with face culling.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:unit_cube": {}
}
```

### minecraft:on_step_on

Runs an event when an entity stepped on the block.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:on_step_on": {
    "event": "block_event",
    "target": "self",
    "condition": "q.block_property('wiki:block_property')" //Optional
  }
}
```

Note: you need entity collision not to be set false to trigger event.

### minecraft:on_step_off

Runs an event when an entity stepped off of the block.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:on_step_off": {
    "event": "block_event",
    "target": "self",
    "condition": "q.block_property('wiki:block_property')" //Optional
  }
}
```

Note: you need entity collision not to be set false to trigger event.

### minecraft:on_fall_on

Runs an event when an entity fell on the block.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:on_fall_on": {
    "event": "block_event",
    "target": "self",
    "condition": "q.block_property('wiki:block_property')", //Optional
    "min_fall_distance": 5
  }
}
```

### minecraft:on_placed

Runs an event when an entity placed the block.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:on_placed": {
    "event": "block_event",
    "target": "self",
    "condition": "q.block_property('wiki:block_property')" //Optional
  }
}
```

### minecraft:on_player_placing

Runs an event when The Player placed the block.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:on_player_placing": {
    "event": "block_event",
    "target": "self",
    "condition": "q.block_property('wiki:block_property')" //Optional
  }
}
```

### minecraft:on_player_destroyed

Runs an event when The Player destroys the block.
_currently bugged as of 1.19.50_

<CodeHeader></CodeHeader>

```json
{
  "minecraft:on_player_destroyed": {
    "event": "block_event",
    "target": "self",
    "condition": "q.block_property('wiki:block_property')" //Optional
  }
}
```

### minecraft:on_interact

Runs an event when The Player uses the block.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:on_interact": {
    "event": "block_event",
    "target": "self",
    "condition": "q.block_property('wiki:block_property')" //Optional
  }
}
```

## Block Tags

Block tags can be given to blocks to be queried or referenced with `any_tag` or `all_tags`, which is used inside item and entity files.
A tag can be applied like this:

<CodeHeader></CodeHeader>

```json
{
  "format_version": "1.16.100",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_block"
    },
    "components": {
      "tag:wiki:my_tag": {},
      "tag:my_other_tag": {}
    }
  }
}
```

and this tag can be queried with:

-   `q.all_tags`
-   `q.any_tag`
-   `q.block_has_all_tags`
-   `q.block_has_any_tag`
-   `q.relative_block_has_all_tags`
-   `q.relative_block_has_any_tag`

Example of querying a tag:

<CodeHeader></CodeHeader>

```json
{
  "format_version": "1.16.100",
  "minecraft:item": {
    "description": {
      "category": "equipment",
      "identifier": "wiki:pickaxe"
    },
    "components": {
      "minecraft:digger": {
        "use_efficiency": true,
        "destroy_speeds": [
          {
            "speed": 5,
            "block": {
              "tags": "q.any_tag('wiki:my_tag', 'stone', 'metal')"
            }
          }
        ]
      }
    }
  }
}
```

## Additional Notes

-   The following event triggers require the `minecraft:collision_box` component to be 4 or higher on the Y-axis:
    -   `minecraft:on_step_on`
    -   `minecraft:on_step_off`
    -   `minecraft:on_fall_on`
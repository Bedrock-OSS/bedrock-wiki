---
title: Block Events & Triggers
description: Block events allow you to manipulate the game world when certain conditions are met.
category: General
nav_order: 8
tags:
    - experimental
mentions:
    - QuazChick
---

:::tip FORMAT & MIN ENGINE VERSION `1.20.20`
Using the latest format version when creating custom blocks provides access to fresh features and improvements. The wiki aims to share up-to-date information about custom blocks, and currently targets format version `1.20.20`.
:::
:::warning EXPERIMENTAL
Block events require the `Holiday Creator Features` experiment to be enabled.
:::

## Defining Events

Block events allow you to manipulate the game world when certain conditions are met, and are defined in the `events` child of `minecraft:block`. Within the event, [event responses](#event-responses) are listed to configure what you want to happen when the event is triggered.

[Event triggers](#event-triggers) run events when appropriate, carrying out all of their event responses.

<CodeHeader>BP/blocks/loot_dropper.json</CodeHeader>

```json
{
  "format_version": "1.20.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:loot_dropper"
    },
    "components": {
      "minecraft:on_step_on": {
        "event": "wiki:drop_loot"
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

_This example spawns loot when an entity steps onto the block._

## Sequenced Responses

Sequences allow you to run the same response multiple times, or to only trigger certain aspects of your event when conditions are met.

All event responses should be contained within the sequence.

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:my_sequence": {
  "sequence": [
    {
      "set_block_state": {
        "wiki:my_state": true
      }
    },
    {
      "condition": "q.block_state('wiki:my_state')", // Optional
      "trigger": {
        "event": "wiki:my_entity_event",
        "target": "other"
      }
    }
  ]
}
```

## Random Responses

Randomly run event responses.

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:random_action": {
  "randomize": [
    {
      "weight": 1, // 1/4 chance
      "set_block_state": {
        "wiki:my_state": true
      }
    },
    {
      "weight": 3, // 3/4 chance
      "trigger": {
        "event": "wiki:my_entity_event",
        "target": "other"
      }
    }
  ]
}
```

## Event Responses

-   [`add_mob_effect`](#add-mob-effect)
-   [`damage`](#damage)
-   [`decrement_stack`](#decrement-stack)
-   [`die`](#die)
-   [`play_effect`](#play-effect)
-   [`play_sound`](#play-sound)
-   [`remove_mob_effect`](#remove-mob-effect)
-   [`run_command`](#run-command)
-   [`set_block`](#set-block)
-   [`set_block_at_pos`](#set-block-at-pos)
-   [`set_block_state`](#set-block-state)
-   [`spawn_loot`](#spawn-loot)
-   [`swing`](#swing)
-   [`teleport`](#teleport)
-   [`transform_item`](#transform-item)
-   [`trigger`](#trigger)

### add_mob_effect

Adds a mob effect to a target when triggered.

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:effect_event": {
  "add_mob_effect": {
    "effect": "poison",
    "target": "other",
    "duration": 8,
    "amplifier": 3
  }
}
```

### damage

Inflicts a specified damage unto a target in context.

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:damage_event": {
  "damage": {
    "type": "magic",
    "target": "other",
    "amount": 4
  }
}
```

### decrement_stack

Removes one item from the player's selected stack.

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:remove_one": {
  "decrement_stack": {
    "ignore_game_mode": true // Optional - Should this affect creative mode players (default is false)
  }
}
```

### die

Kills the specified target, making the block disappear with no loot or effects if `self` is the target.

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:destroy": {
  "die": {
    "target": "self"
  }
}
```

### play_effect

Play a particle effect at a specified contextual target's position.

Supported `effect` values are unknown. Using the `playsound` command with the [`run_command`](#run-command) event response can be used as an alternative.

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:particle_effect": {
  "play_effect": {
    "effect": "???",
    "target": "self"
  }
}
```

### play_sound

Plays a sound from a specified contextual target.

Supports most vanilla individual sound event IDs from `RP/sounds.json`, however custom entries will not function.

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:play_sound": {
  "play_sound": {
    "sound": "beacon.power",
    "target": "self"
  }
}
```

### remove_mob_effect

Removes a target's mob effect when triggered.

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:remove_effect_event": {
  "remove_mob_effect": {
    "effect": "poison",
    "target": "other"
  }
}
```

### run_command

Runs a command onto a target in context.

Use an array to run multiple commands.

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:execute_event": {
  "run_command": {
    "target": "self", // Optional - 'self' is default (targets block)
    "command": "summon pig"
  }
}
```

Or...

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:execute_event": {
  "run_command": {
    "target": "self", // Optional - 'self' is default (targets block)
    "command": [
      "summon pig",
      "say Everybody welcome the pig!"
    ]
  }
}
```

### set_block

Removes the current block and replaces it with the defined block in the same position.

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:place_block": {
  "set_block": {
      "block_type": "minecraft:grass"
  }
}
```

### set_block_at_pos

Sets a block at a specified position relative to the block.

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:generate_stone_above": {
  "set_block_at_pos": {
    "block_type": "minecraft:stone",
    "block_offset": [0, 1, 0]
  }
}
```

### set_block_state

Set block state value(s) (Can be set to the returned value of a Molang expression string).

:::warning
String values are evaluated as Molang. This means, to set a string state, you must wrap the value in `'`s (example below).
:::

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:change_state": {
  "set_block_state": {
    "wiki:boolean_state_example": false,
    "wiki:integer_state_example": "q.block_state('wiki:integer_state_example') + 1",
    "wiki:string_state_example": "'red'"
  }
}
```

### spawn_loot

Summons a loot table.

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:drop_loot": {
  "spawn_loot": {
    "table": "loot_tables/blocks/my_loot_table.json"
  }
}
```

### swing

Causes the involved actor to swing.

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:swing_arm": {
  "swing": {}
}
```

### teleport

Teleport a target randomly around a destination point.

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:go_away": {
  "teleport": {
    "target": "other", // Teleporting entity
    "avoid_water": true, // Avoid teleporting into water
    "land_on_block": true, // Place target on block
    "destination": [0, 0, 0], // Origin destination
    "max_range": [5, 6, 7] // Maximum offsets from the origin destination
  }
}
```

### transform_item

Replace the target's selected item.

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:replace": {
  "transform_item": {
    "transform": "iron_sword"
  }
}
```

### trigger

Trigger an event on a specified target.

<CodeHeader>minecraft:block > events</CodeHeader>

```json
"wiki:trigger_crack": {
  "trigger": {
    "event": "wiki:crack",
    "target": "self"
  }
}
```

## Event Triggers

Event triggers are defined as [components](/blocks/block-components) in your block, so can be added, changed or removed with [permutations](/blocks/block-permutations).

-   [`minecraft:on_fall_on`](#on-fall-on)
-   [`minecraft:on_interact`](#on-interact)
-   [`minecraft:on_placed`](#on-placed)
-   [`minecraft:on_player_destroyed`](#on-player-destroyed)
-   [`minecraft:on_player_placing`](#on-player-placing)
-   [`minecraft:on_step_off`](#on-step-off)
-   [`minecraft:on_step_on`](#on-step-on)
-   [`minecraft:queued_ticking`](#queued-ticking)
-   [`minecraft:random_ticking`](#random-ticking)

### On Fall On

Runs an event when an entity fell on the block.

**Note**: Requires the `minecraft:collision_box` component to be 4 or higher on the Y-axis.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:on_fall_on": {
  "event": "wiki:example_event",
  "target": "self", // Optional - 'self' is default (targets block)
  "condition": "q.block_state('wiki:boolean_state_example')", // Optional
  "min_fall_distance": 5
}
```

### On Interact

Runs an event when the player interacts with / uses the block.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:on_interact": {
  "event": "wiki:example_event",
  "target": "self", // Optional - 'self' is default (targets block)
  "condition": "q.block_state('wiki:boolean_state_example')" // Optional
}
```

### On Placed

Runs an event when the block is placed.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:on_placed": {
  "event": "wiki:example_event",
  "target": "self", // Optional - 'self' is default (targets block)
  "condition": "q.block_state('wiki:boolean_state_example')" // Optional
}
```

### On Player Destroyed

Runs an event when the player destroys the block from mining. This event doesn't trigger if the player is in creative mode.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:on_player_destroyed": {
  "event": "wiki:example_event",
  "target": "self", // Optional - 'self' is default (targets block)
  "condition": "q.block_state('wiki:boolean_state_example')" // Optional
}
```

### On Player Placing

Runs an event as the player places the block.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:on_player_placing": {
  "event": "wiki:example_event",
  "target": "self", // Optional - 'self' is default (targets block)
  "condition": "q.block_state('wiki:boolean_state_example')" // Optional
}
```

### On Step Off

Runs an event when an entity steps off the block.

**Note**: Requires the `minecraft:collision_box` component to be 4 or higher on the Y-axis.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:on_step_off": {
  "event": "wiki:example_event",
  "target": "self", // Optional - 'self' is default (targets block)
  "condition": "q.block_state('wiki:boolean_state_example')" // Optional
}
```

### On Step On

Runs an event when an entity stepped onto the block.

**Note**: Requires the `minecraft:collision_box` component to be 4 or higher on the Y-axis.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:on_step_on": {
  "event": "wiki:example_event",
  "target": "self", // Optional - 'self' is default (targets block)
  "condition": "q.block_state('wiki:boolean_state_example')" // Optional
}
```

### Queued Ticking

Triggers between X and Y amount of ticks inside `interval_range`.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:queued_ticking": {
  "looping": true,
  "interval_range": [20, 20], // Two values (in ticks) which will be randomly decided between to determine delay duration.
  "on_tick": {
    "event": "wiki:example_event",
    "target": "self", // Optional - 'self' is default (targets block)
    "condition": "q.block_state('wiki:boolean_state_example')" // Optional
  }
}
```

### Random Ticking

Triggers event on every random tick, allowing for behavior like random crop growth.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:random_ticking": {
  "on_tick": {
    "event": "wiki:example_event",
    "target": "self", // Optional - 'self' is default (targets block)
    "condition": "q.block_state('wiki:boolean_state_example')" // Optional
  }
}
```

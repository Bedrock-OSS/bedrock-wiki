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

Documentation on block features which require experiments to function.

:::warning
This document covers experimental features for blocks. If you would like to learn about stable blocks, you can do so [here](/blocks/blocks-stable).
:::

## Block Traits

:::warning EXPERIMENTAL
Block traits require the `Upcoming Creator Features` experiment to be enabled.
:::

Block traits can be used to apply vanilla block states (such as direction) to your custom blocks easily, without the need for events and triggers.

<CodeHeader></CodeHeader>

```json
{
  "format_version": "1.20.0",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:directional_example",
      "traits": {
        "minecraft:placement_direction": {
          "enabled_states": ["minecraft:facing_direction"],
          "y_rotation_offset": 180
        }
      }
    },
    "components": {...},
    "permutations": [...]
  }
}
```

_This example will set the `minecraft:facing_direction` block state when placed to either `'down'`, `'up'`, `'north'`, `'south'`, `'east'` or `'west'` - depending on where the player is facing._

**Permutations are still required for this state to make a functional difference, e.g. by using the `minecraft:transformation` component with conditions querying**

```c
q.block_property('minecraft:facing_direction')
```

### Available Block Traits

-   [`minecraft:placement_direction`](#minecraft-placement-direction)
-   [`minecraft:placement_position`](#minecraft-placement-position)

### minecraft:placement_direction

Contains information about the player's rotation when the block was placed.

#### May enable the following states

| State                          | Values                                                                           | Description                                      |
| ------------------------------ | -------------------------------------------------------------------------------- | ------------------------------------------------ |
| `minecraft:cardinal_direction` | `"north"` _(default)_<br>`"south"`<br>`"west"` <br>`"east"`                      | Cardinal facing direction of player when placed. |
| `minecraft:facing_direction`   | `"down"`<br>`"up"`<br>`"north"` _(default)_<br>`"south"`<br>`"west"`<br>`"east"` | Overall direction of player when placed.         |

#### Additional properties

-   `y_rotation_offset` - This rotation offset only applies to the horizontal state values (north, south, east, west) . Only axis-aligned angles may be specified (e.g. 90, 180, -90).

### minecraft:placement_position

Contains information about where the player placed the block.

#### May enable the following states

| State                     | Values                                                                           | Description                                   |
| ------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------- |
| `minecraft:block_face`    | `"down"`<br>`"up"`<br>`"north"` _(default)_<br>`"south"`<br>`"west"`<br>`"east"` | Face on which the block was placed.           |
| `minecraft:vertical_half` | `"top"`<br>`"bottom"` _(default)_                                                | The vertical half where the block was placed. |

<br>

_This trait has no additional properties._

## Block Events

:::warning EXPERIMENTAL
Block events require the `Holiday Creator Features` experiment to be enabled.
:::

<CodeHeader></CodeHeader>

```json
{
  "format_version": "1.20.0",
  "minecraft:block": {
    ...
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

-   [`add_mob_effect`](#add-mob-effect)
-   [`damage`](#damage)
-   [`decrement_stack`](#decrement-stack)
-   [`die`](#die)
-   [`play_effect`](#play-effect)
-   [`play_sound`](#play-sound)
-   [`randomize`](#randomize)
-   [`remove_mob_effect`](#remove-mob-effect)
-   [`run_command`](#run-command)
-   [`sequence`](#sequence)
-   [`set_block`](#set-block)
-   [`set_block_at_pos`](#set-block-at-pos)
-   [`set_block_property`](#set-block-property)
-   [`spawn_loot`](#spawn-loot)
-   [`swing`](#swing)
-   [`teleport`](#teleport)
-   [`transform_item`](#transform-item)
-   [`trigger`](#trigger)

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

Kills the specified target in context, making the block dissapear with no loot. (Destroying the block, if specified).

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

### randomize

Randomizes event functions

<CodeHeader></CodeHeader>

```json
{
  "wiki:randomize_events": {
    "randomize": [
      {
        "weight": 1, // Defines the rarity
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

### run_command

Runs a command onto a target in context.

Use an array to run multiple commands.

<CodeHeader></CodeHeader>

```json
{
  "wiki:execute_event": {
    "run_command": {
      "target": "self", // Optional - 'self' is default (targets block)
      "command": "summon pig"
    }
  }
}
```

Or...

<CodeHeader></CodeHeader>

```json
{
  "wiki:execute_event": {
    "run_command": {
      "target": "self", // Optional - 'self' is default (targets block)
      "command": [
          "summon pig",
          "say Everybody welcome the pig!"
      ]
    }
  }
}
```

### sequence

Sequences event responses.

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
        "condition": "q.block_property('wiki:my_prop')", // Optional
        "trigger": {
          "event": "wiki:my_entity_event",
          "target": "other"
        }
      }
    ]
  }
}
```

### set_block

Removes the current block and replaces it with the defined block in the same position.

<CodeHeader></CodeHeader>

```json
{
  "wiki:place_block": {
    "set_block": {
        "block_type": "minecraft:grass"
    }
  }
}
```

### set_block_at_pos

Sets a block at a specified position relative to the block.

<CodeHeader></CodeHeader>

```json
{
  "wiki:generate_stone_above": {
    "set_block_at_pos": {
      "block_type": "minecraft:stone",
      "block_offset": [0, 1, 0]
    }
  }
}
```

### set_block_property

Set block property value(s) (Can be set to the returned value of a Molang expression string).

:::warning
String values are evaluated as Molang. This means, to set a string property, you must wrap the value in `'`s (example below).
:::

<CodeHeader></CodeHeader>

```json
{
  "wiki:change_state": {
    "set_block_property": {
      "wiki:boolean_property_example": false,
      "wiki:integer_property_example": "q.block_property('wiki:integer_property_example') + 1",
      "wiki:string_property_example": "'red'"
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

### swing

Causes the involved actor to swing.

<CodeHeader></CodeHeader>

```json
{
  "wiki:swing_arm": {
    "swing": {}
  }
}
```

### teleport

Teleport a target randomly around a destination point.

<CodeHeader></CodeHeader>

```json
{
  "wiki:go_away": {
    "target": "other", // Teleporting entity
    "avoid_water": true, // Avoid teleporting into water
    "land_on_block": true, // Place target on block
    "destination": [0, 0, 0], // Origin destination
    "max_range": [5, 6, 7] // Maximum offsets from the origin destination
  }
}
```

### transform_item

<CodeHeader></CodeHeader>

```json
{
  "transform_item":{
    "transform" : "iron_sword"
  }
}
```

### minecraft:on_step_off

Triggers an event unto a specified contextual target.

<CodeHeader></CodeHeader>

```json
{
  "wiki:trigger_event": {
    "trigger": {
      "condition": "q.block_property('wiki:string_property_example') == 'red'", // Optional
      "event": "wiki:my_event", // Event to trigger
      "target": "self" // Optional - 'self' is default (targets block)
    }
  }
}
```

Or...

```json
{
  "wiki:trigger_event": {
    "trigger": "wiki:my_event" // Trigger another block event
  }
}
```

### minecraft:on_fall_on

:::warning EXPERIMENTAL
This component requires the `Holiday Creator Features` experiment to be enabled.
:::

Runs an event when an entity fell on the block.

**Note**: Requires the `minecraft:collision_box` component to be 4 or higher on the Y-axis.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:on_fall_on": {
    "event": "wiki:example_event",
    "target": "self", // Optional - 'self' is default (targets block)
    "condition": "q.block_property('wiki:boolean_property_example')", // Optional
    "min_fall_distance": 5
  }
}
```

### minecraft:on_interact

:::warning EXPERIMENTAL
This component requires the `Holiday Creator Features` experiment to be enabled.
:::

Runs an event when the player interacts with / uses the block.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:on_interact": {
    "event": "wiki:example_event",
    "target": "self", // Optional - 'self' is default (targets block)
    "condition": "q.block_property('wiki:boolean_property_example')" // Optional
  }
}
```

### minecraft:on_placed

:::warning EXPERIMENTAL
This component requires the `Holiday Creator Features` experiment to be enabled.
:::

Runs an event when an entity placed the block.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:on_placed": {
    "event": "wiki:example_event",
    "target": "self", // Optional - 'self' is default (targets block)
    "condition": "q.block_property('wiki:boolean_property_example')" // Optional
  }
}
```

### minecraft:on_player_destroyed

:::warning EXPERIMENTAL
This component requires the `Holiday Creator Features` experiment to be enabled.
:::

Runs an event when the player destroys the block.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:on_player_destroyed": {
    "event": "wiki:example_event",
    "target": "self", // Optional - 'self' is default (targets block)
    "condition": "q.block_property('wiki:boolean_property_example')" // Optional
  }
}
```

### minecraft:on_player_placing

:::warning EXPERIMENTAL
This component requires the `Holiday Creator Features` experiment to be enabled.
:::

Runs an event as the player places the block.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:on_player_placing": {
    "event": "wiki:example_event",
    "target": "self", // Optional - 'self' is default (targets block)
    "condition": "q.block_property('wiki:boolean_property_example')" // Optional
  }
}
```

### minecraft:on_step_off

:::warning EXPERIMENTAL
This component requires the `Holiday Creator Features` experiment to be enabled.
:::

Runs an event when an entity stepped off of the block.

**Note**: Requires the `minecraft:collision_box` component to be 4 or higher on the Y-axis.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:on_step_off": {
    "event": "wiki:example_event",
    "target": "self", // Optional - 'self' is default (targets block)
    "condition": "q.block_property('wiki:boolean_property_example')" // Optional
  }
}
```

### minecraft:on_step_on

:::warning EXPERIMENTAL
This component requires the `Holiday Creator Features` experiment to be enabled.
:::

Runs an event when an entity stepped onto the block.

**Note**: Requires the `minecraft:collision_box` component to be 4 or higher on the Y-axis.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:on_step_on": {
    "event": "wiki:example_event",
    "target": "self", // Optional - 'self' is default (targets block)
    "condition": "q.block_property('wiki:boolean_property_example')" // Optional
  }
}
```

### minecraft:queued_ticking

:::warning EXPERIMENTAL
This component requires the `Holiday Creator Features` experiment to be enabled.
:::

Triggers between x and y amount of ticks inside `interval_range`.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:queued_ticking": {
    "looping": true,
    "interval_range": [20, 20], // Two values (in ticks) which will be randomly decided between to determine delay duration.
    "on_tick": {
      "event": "wiki:example_event",
      "target": "self", // Optional - 'self' is default (targets block)
      "condition": "q.block_property('wiki:boolean_property_example')" // Optional
    }
  }
}
```

### minecraft:random_ticking

:::warning EXPERIMENTAL
This component requires the `Holiday Creator Features` experiment to be enabled.
:::

Allows for behavior like random crop growth.

<CodeHeader></CodeHeader>

```json
{
  "minecraft:random_ticking": {
    "on_tick": {
      "event": "wiki:example_event",
      "target": "self", // Optional - 'self' is default (targets block)
      "condition": "q.block_property('wiki:boolean_property_example')" // Optional
    }
  }
}
```

### minecraft:unit_cube

:::warning EXPERIMENTAL
This component requires the `Holiday Creator Features` experiment to be enabled and is expected to be removed/changed in the future.
:::

Turns the block in to a unit-sized cube (16×16×16) with face culling and other performance gains, overriding `minecraft:geometry`.

```json
{
  "minecraft:unit_cube": {}
}
```
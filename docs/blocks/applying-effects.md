---
title: Applying Constant Effects
category: Tutorials
tags:
    - experimental
    - easy
mentions:
    - MysticChair
    - QuazChick
    - SirLich
    - MedicalJewel105
    - QuazChick
---

::: tip
This tutorial assumes you have a basic understanding of blocks.
Check out the [blocks guide](/blocks/blocks-intro) before starting and ensure your block is using format versions `1.20.0`+.
:::

::: warning EXPERIMENTAL
Requires `Holiday Creator Features` to trigger events.
:::

This tutorial aims to show how to apply status effects to entities as long as these entities stand on the block.

## Setup

We will need to add a couple things to our code, first let's start with property that will hold `true` and `false` values:

<CodeHeader>BP/blocks/wither_block.json</CodeHeader>

```json
{
  "properties": {
    "wiki:stood_on": [false, true]
  }
}
```

Now we need `minecraft:queued_ticking` component that will check if our property is set to `true` and if so, trigger the event causing the effect to apply:

<CodeHeader>BP/blocks/wither_block.json</CodeHeader>

```json
{
  "minecraft:queued_ticking": {
    "looping": true,
    "interval_range": [1, 1],
    "on_tick": {
      "event": "wiki:add_effect",
      "target": "self",
      "condition": "query.block_property('wiki:stood_on`)"
    }
  }
}
```

We will use the `minecraft:on_step_on` event trigger component to fire the event that will set our `wiki:stood_on` property to `true`...

<CodeHeader>BP/blocks/wither_block.json</CodeHeader>

```json
{
  "minecraft:on_step_on": {
    "event": "wiki:step_on"
  }
}
```

...and the `minecraft:on_step_off` component to fire the event that will set our `wiki:stood_on` to `false`:

<CodeHeader>BP/blocks/wither_block.json</CodeHeader>

```json
{
  "minecraft:on_step_off": {
    "event": "wiki:step_off"
  }
}
```

Time to setup our `events`. First, let's set the `wiki:step_on` and `wiki:step_off` events:

<CodeHeader>BP/blocks/wither_block.json</CodeHeader>

```json
{
  "events": {
    "wiki:step_on": {
      "set_block_property": {
        "wiki:stood_on": true
      }
    },
    "wiki:step_off": {
      "set_block_property": {
        "wiki:stood_on": false
      }
    }
  }
}
```

The last thing to add is event that will trigger the effect:

<CodeHeader>BP/blocks/damage_block.json</CodeHeader>

```json
{
  "wiki:add_effect": {
    "run_command": {
      "command": "effect @e[r=1] wither 2 2"
    }
  }
}
```

And done! The code above will trigger the desired status effect as long as the entity is standing on a block.

## Example JSON

<Spoiler title="Example Wither Block">

<CodeHeader>BP/blocks/wither_block.json</CodeHeader>

```json
{
  "format_version": "1.20.0",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:wither_block",
      "menu_category": {
        "category": "nature"
      },
      "properties": {
        "wiki:stood_on": [false, true]
      }
    },
    "components": {
      "minecraft:geometry": "geometry.wither_block",
      "minecraft:material_instances": {
        "*": {
          "texture": "wither_block"
        }
      },
      "minecraft:loot": "loot_tables/empty.json",
      "minecraft:on_step_on": {
        "event": "wiki:step_on"
      },
      "minecraft:on_step_off": {
        "event": "wiki:step_off"
      },
      "minecraft:queued_ticking": {
        "looping": true,
        "interval_range": [1, 1],
        "on_tick": {
          "event": "wiki:add_effect",
          "target": "self",
          "condition": "query.block_property('wiki:stood_on`)"
        }
      },
      "minecraft:map_color": "#181818"
    },
    "events": {
      "wiki:step_on": {
        "set_block_property": {
          "wiki:stood_on": true
        }
      },
      "wiki:step_off": {
        "set_block_property": {
          "wiki:stood_on": false
        }
      },
      "wiki:add_effect": {
        "run_command": {
          "command": "effect @e[r=1] wither 2 2"
        }
      }
    }
  }
}
```

</Spoiler>

## Additional Notes

Some context for the last part of the code:

-   **Q**: Why does the status effect is triggered via `run_command` event function if there's already `add_mob_effect` event function that does that?

-   **A**: `add_mob_effect` seems to not work if triggered from `minecraft:queued_ticking`, that's why we use `run_command` as a workaround.

Depending on the desired outcome, there is a potential issue if effect duration is set to less than 2 seconds. If the effect is causing damage to an entity (for example via poison), that damage will be applied as soon as the effect is triggered. This results in the situation where entity receives damage faster than in vanilla Minecraft, since applying effect is quicker than damage that occurs from effects applied for more than 2 seconds (considering the entity is moving). To better understand this, simply set the effect duration in `command` to 1 second and compare the results.
Having a 2 second duration allows the game to apply the damage in correct pace.

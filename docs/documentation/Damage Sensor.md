# minecraft:damage_sensor
minecraft:damage_sensor defines what events to call when this entity is damaged by specific entities or items.

## Parameters
Name | Default Value | Type| Description
------- | ---------------- | ---------- | ---------:
List| triggers |  | List of triggers with the events to call when taking specific kinds of damage.
## triggers
<table class="table">
<thead>
<tr>
<th style="text-align: center;">Name</th>
<th style="text-align: center;">Default Value</th>
<th style="text-align: center;">Type</th>
<th style="text-align: center;">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">cause</td>
<td style="text-align: center;">none</td>
<td style="text-align: center;">String</td>
<td style="text-align: center;">Type of damage that triggers the events.</td>
</tr>
<tr>
<td style="text-align: center;">damage_modifier</td>
<td style="text-align: center;">0.0</td>
<td style="text-align: center;">Decimal</td>
<td style="text-align: center;">A modifier that adds to/removes from the base damage from the damage cause. It does not reduce damage to less than 0.</td>
</tbody>
</table>

## on_damage
<table class="table"><caption class="visually-hidden">on_damage</caption>
<thead>
<tr>
<th style="text-align: center;">Name</th>
<th style="text-align: center;">Default Value</th>
<th style="text-align: center;">Type</th>
<th style="text-align: center;">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><a href="../filterlist" data-linktype="relative-path">filters</a></td>
<td style="text-align: center;"><em>not set</em></td>
<td style="text-align: center;">Minecraft Filter</td>
<td style="text-align: center;">filters to use to define specific tests</td>
</tr>
<tr>
<td style="text-align: center;">event</td>
<td style="text-align: center;"><em>not set</em></td>
<td style="text-align: center;">String</td>
<td style="text-align: center;">Defines what event to run</td>
</tr>
</tbody>
</table>

## Examples
### Goat

```
"minecraft:damage_sensor": {
  "triggers": {
    "cause": "fall",
    "deals_damage": true,
    "damage_modifier": -20
  }
}
```
### Pillagers

```
"minecraft:damage_sensor": {
  "triggers": {
    "on_damage": {
      "filters": {
        "all_of": [
          {
            "test": "has_damage",
            "value": "fatal"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "player"
          }
        ]
      },
      "event": "minecraft:gain_bad_omen",
      "target": "other"
    }
  }
}
```

### Custom Damage Sensor to trigger event (like slapper for example)
```
     "minecraft:damage_sensor": {
        "triggers": [
          {
            "on_damage": {
              "filters":{
                "all_of": [
                  {
                    "test": "is_family",
                    "subject": "other",
                    "operator": "==",
                    "value": "player"
                  },
                  {
                    "test": "has_tag",
                    "operator": "==",
                    "subject": "other",
                    "value": "example"
                  }
                ]
              },
              "event": "event:example"
            },
            "deals_damage": false
          },
          {
            "on_damage": {
              "filters":{
                "all_of": [
                  {
                    "test": "is_family",
                    "subject": "other",
                    "value": "player"
                  }
                ]
              }
            },
            "deals_damage": false
          },
          {
            "on_damage": {
              "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "example2"
              },
            "event": "event:example2"
            },
            "deals_damage": false
          }
        ]
      }
```
## All Damage Sources
<table class="table">
<tbody><tr> <th style="border-style:solid; border-width:4;">Damage Source</th></tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">all</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">anvil</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">block_explosion</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">charging</td>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">contact</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">drowning</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">entity_attack</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">entity_explosion</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">fall</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">falling_block</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">fire</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">fire_tick</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">fireworks</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">fly_into_wall</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">freezing</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">lava</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">lightning</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">magic</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">magma</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">none</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">override</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">piston</td>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">projectile</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">stalactite</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">stalagmite</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">starve</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">suffocation</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">suicide</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">temperature</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">thorns</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">void</td>
</tr>
<tr>
<td style="border-style:solid; border-width:4; padding:6px">wither</td>
</tr>
</tbody></table>
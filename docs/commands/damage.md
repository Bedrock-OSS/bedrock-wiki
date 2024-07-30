---
title: Damage
category: Commands
mentions:
    - BedrockCommands
    - cda94581
    - jordanparki7
    - zheaEvyline
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

Introduced in Minecraft Release `1.18.10`, the /damage command deals precise damage to specified entities. With this change, the clunky methods like using `/effect` command to damage entities are rendered obsolete, making maps and other creations more powerful.

## Syntax

- There are two ways the damage command can be used:
    - `/damage <Target> <Amount> [Cause]`
    - `/damage <Target> <Amount> <Cause> entity <Damager>`

## Arguments

- Phrases not contained in angle  <>  or square  []  brackets instruct you to type it as-is.
- Phrases contained within brackets are variables, these need to be replaced:
    - **` <> `** Angle brackets mean the variable is required.
    - **` [] `** Square brackets mean the variable is optional.

## Variables

- **` Target `** This is your typical entity selector, such as `@s` , `@e` , or `"cda94581"` . Multiple entities may be selected at a time to deal the damage to multiple targets.

- **` Amount `** This is a whole number, which specifies the amount of damage to deal to the targets. The minimum value is  `0`  and the maximum value is `2147483647`, or the signed 32-bit integer limit.

- **` Cause `** This specifies the "reason" the damage was dealt. This cause will appear in death messages (`X hit the ground too hard for cause: fall`) be used in damage calculation with armor (`the value dealt in Amount may be different depending on the worn armor`), and used in a large variety of other things, such as in Behavior Pack/Add-ons. A full list of all the damage causes can be found [below](/commands/damage#damage-cause-list)

- **` Damager `** If Cause was something to do with entities `(such as entity_attack)`, this specifies where the damage came from `(the entity that dealt the attack)`. This is limited to only 1 target. An error will be thrown if multiple targets are found from the selector.

> Note: the  `<Cause>  entity  <Damager>`  is only required when the Cause has to do with another entity `(entity_attack)`. Otherwise, follow the first syntax.

## Examples

<CodeHeader>mcfunction</CodeHeader>
```yaml
#Deal 4 damage to all players
/damage @a 4

#Deal 3 'fire' damage to all entities of type 'sheep'
/damage @e [type=sheep] 3 fire

#Deal 40 'entity attack' damage from a random player to all entities of type 'sheep'
/damage @a 40 entity_attack entity @r [type=sheep]
```

## Damage Cause List

Listed below are all the 'damage sources' in MCBE for the `/damage` command currently available:
```
arrow
bad_respawn_point
cactus
campfire
cramming
dragon_breath
drown
dry_out
explosion
fall
falling_anvil
falling_block
falling_stalactite
fireball
fireworks
fly_into_wall
freeze
generic
generic_kill
hot_floor
in_fire
in_wall
indirect_magic
lava
lightning_bolt
magic
mob_attack
mob_attack_no_aggro
mob_projectile
none
on_fire
out_of_world
outside_border
player_attack
player_explosion
sonic_boom	
spit
stalagmite
starve
sting
sweet_berry_bush
thorns
thrown
trident
unattributed_fireball
wind_charge
wither
wither_skull
```

For an up-to-date list, visit the [Damage type](https://minecraft.wiki/w/Damage_type) page on the Official Minecraft Wiki.

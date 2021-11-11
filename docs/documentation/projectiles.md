---
title: Projectiles
---

## Overview

This page intends to document all different fields you can use inside `minecraft:projectile` entity behavior component.

:::warning
_Disclaimer: this component has been mostly documented based on projectiles found in the game or reverse engineering the game._
:::

| Name                      | Type             | Default Value | Description                                                                                                                                       |
| ------------------------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| anchor                    | Integer          |               |                                                                                                                                                   |
| angle_offset              | Decimal          | 0             | Determines the angle at which the projectile is thrown                                                                                            |
| catch_fire                | Boolean          | false         | If true, the entity hit will be set on fire                                                                                                       |
| crit_particle_on_hurt     | Boolean          | false         | If true, the projectile will produce critical hit particles when it happens                                                             |
| destroy_on_hurt           | Boolean          | false         | If true, this entity will be destroyed when hit                                                                                                   |
| filter                    | String           |               | Entity Definitions defined here can't be hurt by the projectile                                                                                   |
| fire_affected_by_griefing | Boolean          | false         | If true, whether the projectile causes fire is affected by the mob griefing game rule                                                             |
| gravity                   | Decimal          | 0.05          | The gravity applied to this entity when thrown. The higher the value, the faster the entity falls                                                 |
| hit_ground_sound          | String           |               | The sound that plays when the projectile hits ground                                                                                              |
| hit_sound                 | String           |               | The sound that plays when the projectile hits an entity                                                                                           |
| homing                    | Boolean          | false         | If true, the projectile homes in to the nearest entity                                                                                            |
| inertia                   | Decimal          | 0.99          | The fraction of the projectile's speed maintained every frame while traveling in air                                                              |
| is_dangerous              | Boolean          | false         | If true, the projectile will be treated as dangerous to the players                                                                               |
| knockback                 | Boolean          | true          | If true, the projectile will knock back the entity it hits                                                                                        |
| lightning                 | Boolean          | false         | If true, the entity hit will be struck by lightning                                                                                               |
| liquid_inertia            | Decimal          | 0.6           | The fraction of the projectile's speed maintained every frame while traveling in water                                                            |
| multiple_targets          | Boolean          | true          | If true, the projectile can hit multiple entities per flight                                                                                      |
| offset                    | Vector [a, b, c] | [0, 0.5, 0]   | The offset from the entity's anchor where the projectile will spawn                                                                               |
| on_fire_time              | Decimal          | 5             | Time in seconds that the entity hit will be on fire for                                                                                           |
| on_hit                    | Object           |               | Projectile's behavior on hit. More info [below](#on_hit)                                                                                          |
| particle                  | String           | iconcrack     | Particle to use upon collision                                                                                                                    |
| potion_effect             | Integer          | -1            | Defines the effect the arrow will apply to the entity it hits                                                                                     |
| power                     | Decimal          | 1.3           | Determines the velocity of the projectile                                                                                                         |
| reflect_on_hurt           | Boolean          | false         | If true, this entity will be reflected back when hit                                                                                              |
| semi_random_diff_damage   | Boolean          | false         | If true, damage will be randomized based on damage and speed                                                                                      |
| shoot_sound               | String           |               | The sound that plays when the projectile is shot                                                                                                  |
| shoot_target              | Boolean          | true          | If true, the projectile will be shot towards the target of the entity firing it                                                                   |
| should_bounce             | Boolean          | false         | If true, the projectile will bounce upon hit                                                                                                      |
| splash_potion             | Boolean          | false         | If true, the projectile will be treated like a splash potion                                                                                      |
| splash_range              | Decimal          | 4             | Radius in blocks of the 'splash' effect                                                                                                           |
| stop_on_hurt              | Boolean          |               |                                                                                                                                                   |
| uncertainty_base          | Decimal          | 0             | The base accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel \* uncertaintyMultiplier                               |
| uncertainty_multiplier    | Decimal          | 0             | Determines how much difficulty affects accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel \* uncertaintyMultiplier |

## on_hit

This object contains all behaviors, that can be executed, when projectile hits something.

### arrow_effect

_Exact behavior unknown_

### teleport_owner

Teleports shooter to the hit location.

### catch_fire

_Exact behavior unknown_

Sets target on fire

### ignite

_Exact behavior unknown_

Sets target on fire

### remove_on_hit

Removes the projectile when it hits something.

### douse_fire

_Exact behavior unknown_

### impact_damage

Deals damage on hit.

| Name                           | Type                             | Description                   |
| ------------------------------ | -------------------------------- | ----------------------------- |
| damage                         | Integer/Integer Array [min, max] | Damage dealt to entity on hit |
| semi_random_diff_damage        | Boolean                          |                               |
| max_critical_damage            | Decimal                          |                               |
| min_critical_damage            | Decimal                          |                               |
| power_multiplier               | Decimal                          |                               |
| channeling                     | Boolean                          |                               |
| set_last_hurt_requires_damage  | Boolean                          |                               |
| destroy_on_hit_requires_damage | Boolean                          |                               |
| filter                         | String                           |                               |
| destroy_on_hit                 | Boolean                          |                               |
| knockback                      | Boolean                          |                               |
| catch_fire                     | Boolean                          |                               |

### definition_event

Calls an event on hit.

| Name               | Type    | Description                                         |
| ------------------ | ------- | --------------------------------------------------- |
| affect_projectile  | Boolean | Event will be triggered for projectile entity       |
| affect_shooter     | Boolean | Event will be triggered for shooter entity          |
| affect_target      | Boolean | Event will be triggered for hit entity              |
| affect_splash_area | Boolean | Event will be triggered for all entities in an area |
| splash_area        | Decimal | Area of entities                                    |
| event_trigger      | Object  | Event to trigger. Structure below.                  |

| Name    | Type   | Description         |
| ------- | ------ | ------------------- |
| event   | String | Event to trigger    |
| target  | String | Target of the event |
| filters | Object |                     |

### stick_in_ground

Sticks the projectile into the ground.

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| shake_time | Decimal |             |

### spawn_aoe_cloud

Spawns an area of effect cloud of potion effect.

| Name                | Type                    | Description                                             |
| ------------------- | ----------------------- | ------------------------------------------------------- |
| radius              | Decimal                 | Radius of the cloud                                     |
| radius_on_use       | Decimal                 |                                                         |
| potion              | Integer                 | Lingering Potion ID                                     |
| particle            | String                  | Particle emitter of the cloud                           |
| duration            | Integer                 | Duration of the cloud in seconds                        |
| color               | Integer array [r, g, b] | Color of the particles                                  |
| affect_owner        | Boolean                 | Is potion effect affecting the shooter                  |
| reapplication_delay | Integer                 | Delay in ticks between application of the potion effect |

Potion IDs

_Note, that crossed out IDs were not working, when tested on 1.16.100.60_

| Potion                    | Regular | Extended | Enhanced (Level II) |
| ------------------------- | ------- | -------- | ------------------- |
| Water Bottle              | 0       |          |                     |
| Mundane Potion            | 1       | 2        |                     |
| Thick Potion              | 3       |          |                     |
| Awkward Potion            | 4       |          |                     |
| Potion of Night Vision    | 5       | ~~6~~    |                     |
| Potion of Invisibility    | 7       | 8        | ~~9~~               |
| Potion of Leaping         | 10      | 11       |                     |
| Potion of Fire Resistance | 12      | 13       |                     |
| Potion of Swiftness       | 14      | 15       | 16                  |
| Potion of Slowness        | 17      | 18       |                     |
| Potion of Water Breathing | 19      | 20       |                     |
| Potion of Healing         | ~~21~~  |          | ~~22~~              |
| Potion of Harming         | 23      |          | 24                  |
| Potion of Poison          | 25      | 26       | 27                  |
| Potion of Regeneration    | 28      | 29       | 30                  |
| Potion of Strength        | 31      | 32       | 33                  |
| Potion of Weakness        | 34      | 35       |                     |
| Potion of Decay           | 36      |          |                     |
| Potion of Turtle Master   | 37      | 38       | 39                  |
| Potion of Slow Falling    | 40      | 41       |                     |
| Potion of Slowness IV     | 42      |          |                     |
| Potion of Crashing        | 43+     |          |                     |

### spawn_chance

Spawns an entity on hit.

| Name                        | Type    | Description                                 |
| --------------------------- | ------- | ------------------------------------------- |
| first_spawn_percent_chance  | Decimal |                                             |
| second_spawn_percent_chance | Decimal |                                             |
| first_spawn_count           | Integer |                                             |
| second_spawn_count          | Integer |                                             |
| spawn_definition            | String  | ID of the entity to spawn                   |
| spawn_baby                  | Boolean | Whether the spawned entity should be a baby |

### particle_on_hit

Spawns particles on hit.

| Name          | Type    | Description                                     |
| ------------- | ------- | ----------------------------------------------- |
| particle_type | String  | Particles to use                                |
| num_particles | Integer | Number of particles                             |
| on_entity_hit | Boolean | Whether it should spawn particles on entity hit |
| on_other_hit  | Boolean | Whether it should spawn particles on other hit  |

### mob_effect

Applies a mob effect to the target.

| Name           | Type    | Description                                 |
| -------------- | ------- | ------------------------------------------- |
| effect         | String  | Effect                                      |
| duration       | Integer | Duration of the effect                      |
| durationeasy   | Integer | Duration of the effect on easy difficulty   |
| durationnormal | Integer | Duration of the effect on normal difficulty |
| durationhard   | Integer | Duration of the effect on hard difficulty   |
| amplifier      | Integer | Effect amplifier                            |
| ambient        | Boolean |                                             |
| visible        | Boolean |                                             |

### grant_xp

Spawns experience orbs giving a set amount of experience.

| Name  | Type    | Description                                                                                     |
| ----- | ------- | ----------------------------------------------------------------------------------------------- |
| minXP | Integer | Minimum amount of experience to give                                                            |
| maxXP | Integer | Maximum amount of experience to give                                                            |
| xp    | Integer | Constant amount of experience to give. When set, it will be used instead of min and max values. |

### freeze_on_hit

_Exact behavior unknown_

_Requires education edition to be enabled._
Freezes water on hit.

| Name          | Type    | Description                   |
| ------------- | ------- | ----------------------------- |
| shape         | String  | "sphere" or "cube"            |
| snap_to_block | Boolean |                               |
| size          | Integer | The size of the freeze effect |

### hurt_owner

_Exact behavior unknown. Right now it crashes minecraft probably because of wrong parameters_

| Name         | Type    | Description |
| ------------ | ------- | ----------- |
| owner_damage | Integer |             |
| knockback    | Boolean |             |
| ignite       | Boolean |             |

### thrown_potion_effect

_Exact behavior unknown. Right now it crashes minecraft probably because it's only valid for thrown potions_
 
## Aditional Information
When it comes to creating a custom projectile, such as an arrow or trident variant, or something entirely your own, you may want to consider defining a [`runtime identifier`](https://wiki.bedrock.dev/entities/runtime-identifier.html) to ensure that it acts as intended. Not doing so may result in unintended behaviour, from odd visuals to incorrect knockback direction and arrows that you can kill with your bare hands.
---
title: Non-Mob Runtime Identifiers
category: Documentation
mentions:
    - Ciosciaa
    - SmokeyStack
    - ThomasOrs
---

_Last updated for 1.19.10_

Non-mobs are unconventional entities used for gameplay or utility. Some examples include projectiles, transportation entities, and entities standing in for blocks. Attributes of these runtime identifiers are often radically different from normal entities. Their special attributes may prove useful in some situations.

## Overview
### Server Attributes
| Attribute                                                     | Registered | Configurable behaviors | Configurable collision box | Configurable block collision | Configurable gravity | Configurable entity pushability | Configurable piston pushability | Can be portaled | Hit points           | Damageable | Flammable | Can be knocked back | Effectible | Selectable | Hookable | Targetable | Can be projectile | Can move along rails | Automatically rides | Configurable loot | Spawn behavior   |
|---------------------------------------------------------------|------------|------------------------|----------------------------|------------------------------|----------------------|---------------------------------|---------------------------------|-----------------|----------------------|------------|-----------|---------------------|------------|------------|----------|------------|-------------------|----------------------|---------------------|-------------------|------------------|
| `minecraft:arrow`                                             | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ❌               | None                 | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:thrown_trident`                                    | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ❌               | None                 | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:snowball`                                          | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Projectile       |
| `minecraft:egg`                                               | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Projectile       |
| `minecraft:splash_potion` & `minecraft:lingering_potion`      | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Projectile       |
| `minecraft:ice_bomb`                                          | ⚠️          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Projectile       |
| `minecraft:llama_spit`                                        | ✅          | ❌                      | ⚠️                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ⚠️          | ⚠️        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:fireball`                                          | ✅          | ❌                      | ⚠️                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ⚠️          | ⚠️        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:small_fireball`                                    | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:shulker_bullet`                                    | ✅          | ❌                      | ❌                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ❌         | ❌                   | ❌          | ⚠️          | ⚠️        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:dragon_fireball`                                   | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:wither_skull` & `minecraft:wither_skull_dangerous` | ✅          | ❌                      | ⚠️                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ❌         | ❌                   | ❌          | ⚠️          | ⚠️        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:ender_pearl`                                       | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Projectile       |
| `minecraft:fishing_hook`                                      | ✅          | ❌                      | ✅                          | ❌                            | ❌                    | ✅                               | ❌                               | 🐛               | None                 | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:xp_bottle`                                         | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Projectile       |
| `minecraft:boat` & `minecraft:chest_boat`                     | ✅          | ❌                      | ✅                          | ✅                            | ⚠️                    | ✅                               | ❌                               | ✅               | Structural integrity | ✅          | ✅         | ❌                   | ❌          | ✅          | ⚠️        | ❌          | ✅                 | ⚠️                    | ❌                   | ⚠️                 | Targeted surface |
| `minecraft:minecart` & Variants                               | ✅          | ❌                      | ✅                          | ❌                            | ⚠️                    | ❌                               | ✅                               | ✅               | Structural integrity | ✅          | ✅         | ❌                   | ❌          | ✅          | ⚠️        | ❌          | ⚠️                 | ✅                    | ❌                   | ⚠️                 | Rail             |
| `minecraft:balloon`                                           | ⚠️          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ❌         | ❌                   | ❌          | ✅          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:tnt`                                               | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ✅                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ✅          | ✅        | ❌          | ✅                 | ⚠️                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:armor_stand`                                       | ✅          | ✅                      | ✅                          | ✅                            | ✅                    | ✅                               | ✅                               | ✅               | Structural integrity | ⚠️          | ✅         | ❌                   | ✅          | ✅          | ✅        | ⚠️          | ✅                 | ⚠️                    | ✅                   | ⚠️                 | Targeted surface |
| `minecraft:painting`                                          | ✅          | ❌                      | ❌                          | ❌                            | ❌                    | ✅                               | ❌                               | ⚠️               | None                 | ✅          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ❌                 | ❌                    | ❌                   | ⚠️                 | Targeted surface |
| `minecraft:falling_block`                                     | ✅          | ❌                      | ❌                          | ❌                            | ❌                    | ✅                               | ❌                               | ❌               | None                 | ⚠️          | ✅         | ❌                   | ❌          | ⚠️          | ⚠️        | ❌          | 🐛                 | ❌                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:ender_crystal`                                     | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ⚠️          | ⚠️        | ❌          | ⚠️                 | ❌                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:leash_knot`                                        | ✅          | ❌                      | ❌                          | ❌                            | ❌                    | ✅                               | ✅                               | ⚠️               | None                 | ✅          | ❌         | ❌                   | ❌          | ⚠️          | ❌        | ❌          | ❌                 | ❌                    | ❌                   | ✅                 | Rail             |
| `minecraft:chalkboard`                                        | ✅          | ✅                      | ✅                          | ✅                            | ✅                    | ✅                               | ✅                               | ✅               | Health               | ✅          | ✅         | ✅                   | ✅          | ✅          | ✅        | ✅          | ✅                 | ⚠️                    | ✅                   | ✅                 | Targeted surface |
| `minecraft:tripod_camera`                                     | ❌          | ✅                      | ✅                          | ✅                            | ✅                    | ✅                               | ✅                               | ✅               | Health               | ❌          | ✅         | ❌                   | ✅          | ✅          | ❌        | ✅          | ✅                 | ⚠️                    | ✅                   | ✅                 | Targeted surface |
| `minecraft:area_effect_cloud`                                 | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ❌         | ❌                   | ❌          | ❌          | ❌        | ❌          | ❓                 | ❌                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:lightning_bolt`                                    | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ❌                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:evocation_fang`                                    | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ❌                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:item`                                              | ✅          | ❌                      | ❌                          | ❌                            | ❌                    | ❌                               | ❌                               | ✅               | Item                 | ❌          | ⚠️         | ❌                   | ❌          | ❌          | ❌        | ❌          | ❓                 | ⚠️                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:xp_orb`                                            | ✅          | ❌                      | ✅                          | ❌                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ❌                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:fireworks_rocket`                                  | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ✅                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ✅                 | ⚠️                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:eye_of_ender_signal`                               | ✅          | ❌                      | ❌                          | ❌                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:elder_guardian_ghost`                              | ✅          | ⚠️                      | ✅                          | ✅                            | ✅                    | ✅                               | ✅                               | ✅               | Health               | ✅          | ✅         | ✅                   | ✅          | ✅          | ✅        | ✅          | ✅                 | ✅                    | ✅                   | ✅                 | Targeted surface |
| `minecraft:npc`                                               | ✅          | ✅                      | ✅                          | ✅                            | ✅                    | ✅                               | ✅                               | ✅               | Health               | ❌          | ✅         | ⚠️                   | ❌          | ✅          | ❌        | ✅          | ✅                 | ⚠️                    | ❌                   | ❌                 | Targeted surface |
| `minecraft:agent`                                             | ❌          | ❌                      | ⚠️                          | ❌                            | ❌                    | ❌                               | ✅                               | ✅               | Health               | ✅          | ✅         | ❌                   | ❌          | ⚠️          | ⚠️        | ✅          | ❌                 | ✅                    | ❌                   | ⚠️                 | Targeted surface |
| `minecraft:shield`                                            | ✅          | ✅                      | ✅                          | ✅                            | ✅                    | ✅                               | ✅                               | ✅               | Health               | ✅          | ✅         | ✅                   | ✅          | ✅          | ✅        | ✅          | ✅                 | ⚠️                    | ✅                   | ✅                 | Targeted surface |

### Client Attributes
| Attribute                                                     | Client entity | Positional updates | Interpolated movement | Oriented | Shadow | Death effects | Step sounds |
|---------------------------------------------------------------|---------------|--------------------|-----------------------|----------|--------|---------------|-------------|
| `minecraft:arrow`                                             | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:thrown_trident`                                    | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ✅           |
| `minecraft:snowball`                                          | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:egg`                                               | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:splash_potion` & `minecraft:lingering_potion`      | ❌             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:ice_bomb`                                          | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:llama_spit`                                        | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ✅           |
| `minecraft:fireball`                                          | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:small_fireball`                                    | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:shulker_bullet`                                    | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ✅           |
| `minecraft:dragon_fireball`                                   | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:wither_skull` & `minecraft:wither_skull_dangerous` | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:ender_pearl`                                       | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:fishing_hook`                                      | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ✅           |
| `minecraft:xp_bottle`                                         | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:boat` & `minecraft:chest_boat`                     | ✅             | ✅                  | ❌                     | ❌        | ⚠️      | ❌             | ❌           |
| `minecraft:minecart` & Variants                               | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:balloon`                                           | ✅             | ✅                  | ✅                     | ❌        | ✅      | ❌             | ✅           |
| `minecraft:tnt`                                               | ✅             | ✅                  | ❌                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:armor_stand`                                       | ✅             | ✅                  | ✅                     | ✅        | ❌      | ⚠️             | ✅           |
| `minecraft:painting`                                          | ❌             | ✅                  | ❓                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:falling_block`                                     | ⚠️             | ❌                  | ❌                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:ender_crystal`                                     | ✅             | ❌                  | ❌                     | ❌        | ⚠️      | ❌             | ❌           |
| `minecraft:leash_knot`                                        | ✅             | ✅                  | ❓                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:chalkboard`                                        | ✅             | ✅                  | ✅                     | ⚠️        | ✅      | ✅             | ✅           |
| `minecraft:tripod_camera`                                     | ✅             | ✅                  | ✅                     | ✅        | ⚠️      | ✅             | ✅           |
| `minecraft:area_effect_cloud`                                 | ✅             | ❌                  | ❌                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:lightning_bolt`                                    | ✅             | ❌                  | ❌                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:evocation_fang`                                    | ✅             | ❌                  | ❌                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:item`                                              | ❌             | ✅                  | ✅                     | ❌        | ⚠️      | ❌             | ❌           |
| `minecraft:xp_orb`                                            | ✅             | ❌                  | ❌                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:fireworks_rocket`                                  | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:eye_of_ender_signal`                               | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ✅           |
| `minecraft:elder_guardian_ghost`                              | ✅             | ✅                  | ✅                     | ✅        | ✅      | ✅             | ❌           |
| `minecraft:npc`                                               | ✅             | ✅                  | ✅                     | ✅        | ✅      | ✅             | ✅           |
| `minecraft:agent`                                             | ⚠️             | ✅                  | ❓                     | ⚠️        | ⚠️      | ✅             | ✅           |
| `minecraft:shield`                                            | ✅             | ✅                  | ✅                     | ⚠️        | ✅      | ✅             | ✅           |

## Attribute Definitions & Section Information
These definitions are used throughout this document to describe some aspect of the behavior of an entity using the runtime identifier in question. Assigned to each is a value and (possibly) additional notes. Notes are used to highlight conditions on and anomalies with the associated definition.

Most attributes use emojis for terseness and readability:
| Value | Explanation                                                  |
|:-----:|--------------------------------------------------------------|
| ✅     | **Active/Usable**<br>The attribute is generally active or usable on entities using this runtime identifier. Additional notes may be used for clarifications, specifics, or especially extreme circumstances in which this attribute may be unusable. |
| ⚠️     | **Warning**<br>The attribute is conditionally active or usable on entities using this runtime identifier. Attributes marked with a warning may require special handling. Additional notes specify exceptions and specifics. |
| ❌     | **Inactive/Unusable**<br>The attribute is inactive or unusable on entities using this runtime identifier. If necessary, additional notes will clarify how the entity handles the attribute. Attributes with especially impractical or narrow conditions may also be marked as unusable; additional notes in this case will specify such conditions. |
| ❓     | **Unknown**<br>The behavior of the attribute is unknown or not understood in the context of this runtime identifier. |
| 🐛     | **Bugged**<br>The attribute currently causes a crash or other bug to occur when active or used on an entity using this runtime identifier. Additional notes describe the nature and conditions of the bug. |

### NBT Extensions
When present, this section lists NBT fields used by entities with this runtime identifier that aren’t used by other entities. In most cases, the nature of these NBT fields is noted in the general notes of the runtime identifier.

### Notable Queries
When Molang queries would have behaviors very specific to this runtime identifier, this section will be given. The queries thoroughly explain return values. All notable queries in this document are usable on both the client and the server.

### Hardcoded Variables
Molang variables that are bound to specific runtime identifiers in a hardcoded fashion are listed here. In other contexts, without proper declaration, the variables would be undefined. All hardcoded variables in this document are usable on both the client and the server. In all but one case (`v.armor_stand.pose_index` on [`minecraft:armor_stand`](#minecraft:armor_stand)), the variables available to custom entities are generally worthless.

### Effects
Particle and sound effects bound to entities in a hardcoded manner are described in this optional section. In all but one case (the particle effect on [￼`minecraft:fireworks_rocket`￼](#minecraft:fireworks_rocket)), the effects can nevertheless be configured by editing the associated data-driven particle or sound effects definitions.

### Server Attributes
Server attributes dictate the core behavior of an entity for the sake of gameplay. These attributes are not presentational in nature, instead affecting canonical information about an entity on the server, such as position, state, and interactions.

**Registered**
An entity using this runtime identifier is considered “registered” if it is available to be targeted using the `type` command selector argument and spawned via `/summon` (assuming `is_summonable` is `true`). Regardless of this attribute, the spawn egg will still be available and usable if `is_spawnable` is `true`.

**Configurable behaviors**
If usable, the entity may employ universal entity behaviors, such as `minecraft:behavior.panic`.

**Configurable collision box**
The provided `minecraft:collision_box` values are used if this attribute is active. Some runtime identifiers enforce a hardcoded collision box or even modify how the collision box values are interpreted.

**Configurable block collision**
When this attribute is active, the value of `minecraft:physics`’s `has_collision` is respected. The existence of `minecraft:projectile` on some runtime identifiers causes this attribute to be overridden; in these cases, this attribute is still flagged as active.

**Configurable gravity**
When this attribute is active, the value of `minecraft:physics`’s `has_gravity` is respected. All entities, even those that would not have configurable gravity, may declare the `minecraft:projectile` component with a non-`0` `gravity` value to opt-in to simulated gravity, even if “Can be projectile” is flagged as inactive. Note, however, that projectile gravity cannot be made to imitate regular gravity one-to-one. While `minecraft:buoyant`’s `apply_gravity` field being `true` normally alters gravity on entities, it cannot be set to add gravity on entities for which this attribute is marked as inactive.

**Configurable entity pushability**
When this attribute is active, the value of `minecraft:pushable`’s `is_pushable` is generally respected. If `minecraft:projectile` is declared, the entity will be forced to respect `is_pushable` even if this attribute is inactive and even if the “Can be projectile” attribute is flagged as inactive; in these cases, this attribute will still be flagged as inactive.

**Configurable piston pushability**
When this attribute is active, the value of `minecraft:pushable`’s `is_pushable_by_piston` is respected.

**Can be portaled**
By default, `minecraft:portal` and `minecraft:end_portal` will teleport entities within their blockspace to and from the Nether and End respectively. Some entities are not teleported by one or both blocks.

**Hit points**
“Hit points” dictates how, if at all, hit points are used on the entity. This attribute uses its own enumeration to describe its behavior:
| Value                | Explanation                                                  |
|----------------------|--------------------------------------------------------------|
| Health               | The entity uses health, configurable via the `minecraft:health` component. Health can be evaluated using entity filters, components, and `q.health`. Health is serialized via NBT.<br><br>Structural integrity is always reported as `0` for entities using this hit point system. |
| Structural integrity | The entity uses a hardcoded structural integrity system that cannot be configured. Structural integrity can only be queried, via `q.structural_integrity`. `minecraft:damage_sensor` has no functionality with entities that use structural integrity. Structural integrity is not serialized.<br><br>`q.hurt_time` and `q.hurt_direction` work with these entities.<br><br>With [one exception](#minecraft:armor_stand), health is always reported as `0` for entities using this hit point system. |
| Item                 | The entity uses a special hit point system that serializes data into the `Health` top-level NBT field. This hit point system is only configurable via NBT. Configurations to `minecraft:health` are ignored. `minecraft:damage_sensor` has no functionality with entities that use item health.<br><br>Both health and structural integrity are always reported as `0` for entities using this hit point system. |
| None                 | The entity does not use hit points, at least not in a conventional sense. It may despawn on being hit or be immune to such damage.<br><br>Both health and structural integrity are always reported as `0` for entities using this hit point system. |

Assuming the entity is damageable, `/damage` is able to work for “health”, “structural integrity”, and “item” systems. For entities using the “item” system, although `/damage` functionally works and updates the `Health` NBT field correctly, feedback is always erroneously given saying the damage could not be applied.

**Damageable**
Some runtime identifiers’ entities cannot be damaged by any means (including via `/damage`). Such runtime identifiers are marked as inactive under this attribute. Note that `minecraft:damage_sensor` cannot make undamageable entities damageable. In this document, “gameplay” damage is damage taken through normal gameplay, e.g., not commands.

**Flammable**
Entities whose runtime identifier have this attribute flagged as active can be set on fire. When flammable entities are on fire, `q.is_on_fire` will return `true` and `on_fire_color` will be used as the overlay color from a render controller. However, the entity may not actually be damageable by fire, lava, or fire ticks. This attribute is also flagged as inactive if the entity can take fire, lava, or fire tick damage but would die or despawn from it.

**Can be knocked back**
When noted as active, entities can be knocked back when taking damage from entity attacks or explosions, and this can be tuned using the universal `minecraft:knockback_resistance` component. When noted as inactive, `minecraft:knockback_resistance` cannot make stationary entities able to be knocked back.

**Effectible**
Effects — such as levitation and night vision — can be applied to entities whose runtime identifiers are "effectible". Many non-mob runtime identifiers enforce that effects cannot be applied to entities using them.

**Selectable**
In general, entities are “selectable”. For such entities, all of the following are true:
- They can be be selected using the crosshair, preventing selection of occluded blocks.
- Their selection box can be interacted with by a player or other entity.
	- They can take gameplay entity attack damage.
	- They can respond to general interactions, via `minecraft:interact`.
	- They can be traded with (assuming `minecraft:behavior.trade_with_player` and the associated trade table is configured).
	- They can be named using name tags (assuming `minecraft:nameable` is configured).
	- They can be leashed using leads (assuming `minecraft:leashable` is configured).

Some non-mob runtime identifiers enforce that their entities are not selectable; in these cases, all of the above will be false. Note that even if an entity cannot be selected, it can still be named via `/summon` if `minecraft:nameable` is configured for such. However, if `always_show` is `false`, the name tag will never show because the entity won’t be selectable. Using `true` for this property is the only way to show the name of such entities. Also note that some interactable entities may attach to leads but not be pulled by them; these situation is noted for those runtime identifiers.

If selectable, the selection box is generally determined from the collision box. `minecraft:custom_hit_test`’s hitboxes will instead be used as the selection boxes if it is given. `minecraft:custom_hit_test` can never make an unselectable entity able to be selected.

If an unselectable entity is configured to use `minecraft:projectile`, any provided `on_hurt` projectile properties will not function.

**Hookable**
Entities will attach to fishing hooks if this attribute is active. When inactive, certain runtime identifiers wholly ignore the fishing hook. Entities of some others may die or despawn on attachment, with the fishing hook continuing its prior trajectory. Additionally, entities of some runtime identifiers that are hookable cannot be pulled.

**Targetable**
If this attribute is active on a runtime identifier, its entities may be targeted by other entities using behavioral components such as `minecraft:behavior.hurt_by_target`. If inactive, the entity cannot be targeted and will be completely ignored.

**Can be projectile**
Some runtime identifiers cannot be used as projectiles when `minecraft:projectile` is declared; they will not be fired with projectile motion from shooter events. This attribute will be flagged as inactive on such runtime identifiers.

If `stuck_in_ground` is set in `minecraft:projectile` for an entity that can be a projectile, the entity will collide with terrain, disregarding a `false` `has_collision` in `minecraft:physics`, even if “Configurable block collision” is flagged as inactive. Furthermore, some runtime identifiers’ entities ignore their `minecraft:physics` block collision declaration when acting as projectiles.

Entities that have innate accelerations, such as `minecraft:firework_rocket` and `minecraft:eye_of_ender_signal`, move in conjunction with projectile motion.

**Can move along rails**
Entities of runtime identifiers for which this attribute is true become laterally soft attached to rails if `minecraft:rail_movement` is active. Runtime identifiers have a wide range of rail frictions. These friction values cannot be altered via the `max_speed` property, `minecraft:friction_modifier` component, or other movement components.

For entities for which this attribute is active and that are using `minecraft:rail_movement`, innate movement behaviors (such as `minecraft:elder_guardian_ghost`’s flopping out of water) and innate accelerations (like `minecraft:firework_rocket`’s innate acceleration) will still run even when attached to rails. If an entity would intrinsically move fast enough (such as entities using `minecraft:eye_of_ender_signal` far enough away from the world origin) attachment to a rail may be broken.

In general, rail movement will not re-orient the server facing direction of an entity, unless that entity is using a `minecraft:minecart` runtime identifier. Most rail-eligible entities are set 0.5 blocks above the baseline of the rail blockspace when using `minecraft:rail_movement`; exceptions are noted elsewise.

**Automatically rides**
If a runtime identifier signals this attribute as active, its entities can be automatically pulled in by rideable entities whose `pull_in_entities` field is `true`.

**Configurable loot**
This attribute is active if the table referenced in `minecraft:loot` is used. In circumstances in which an entity is said to “despawn”, no loot will be dropped. In all but [one exception](#minecraft:npc),  `/kill` and `minecraft:projectile`’s `remove_on_hit` are guaranteed to dispense the configured loot drops regardless of runtime ID. In this document, if an entity is said to despawn in some situation — unless noted otherwise — it will not drop loot. If an entity is said to die, break, or be destroyed, it will generally drop loot unless otherwise stated.

**Spawn Behavior**
This attribute generally determines how entities are spawned and under what conditions an initial velocity may be applied to an entity. It uses a unique enumeration to describe its behavior:

| Value            | Explanation                                                  |
|------------------|--------------------------------------------------------------|
| Targeted surface | The spawn egg will summon an entity along the crosshair-targeted surface based on the orientation and perspective of the placing player.<br><br>If the entity uses `minecraft:projectile`, spawning via either a spawn egg or `minecraft:spawn_entity` will not give the entity an initial velocity. |
| Projectile       | The entity is spawned 1.32 blocks above the server position of the spawning player when using a spawn egg. If `minecraft:projectile` is present, a starting `offset` of `[0, 0, 0]` will still be considered as 1.32 blocks above the server position of the spawning player.<br><br>For spawning via either a spawn egg or `minecraft:spawn_entity`:<br>- If the entity uses `minecraft:projectile`, the entity an initial velocity as though thrown.<br>- If the entity doesn’t use `minecraft:projectile` but does declare `minecraft:rail_movement`, the entity may shoot off imprecisely similar to when being shot as a projectile. |
| Rail             | For spawning with a spawn egg:<br>- If targeting a rail with the crosshair, the entity will be set 0.5 blocks above the rail, unless using `minecraft:rail_movement` and a runtime identifier that would modify its offset on rails.<br>- Otherwise, if the spawn egg is used along the top of a surface, the entity will be spawned near and generally behind the spawning player. Targeting other faces typically behaves similarly to “targeted surface”.<br><br>If the entity uses `minecraft:projectile`, spawning via either a spawn egg or `minecraft:spawn_entity` will not give the entity an initial velocity. |

For any of the above values, if `minecraft:projectile` is declared on an entity, `/summon` and `behavior.summon_entity` *never* provide an initial velocity to an entity while `minecraft:behavior.ranged_attack` and the entity and item `shoot` event *always* give an initial velocity.

### Client Attributes
Client attributes describe how a runtime identifier behaves on a client. Due to server-client desync and optimizations, these attributes may not reflect the true ongoings of the game according to the server. These attributes are generally only for sensory feedback to the player. However, some entity mechanisms require the client to signal a gameplay change to the server. Positional updates, for example, would be important to hitbox detection and interaction signaling to the server.

**Client entity**
If usable, a corresponding resource pack client entity and its render controllers, geometries, textures, materials, and animations will be used as usual. In all but one noted case, these client entities may also use particle and sound effects. If unusable, the entity may be invisible. Otherwise, the entity will use hardcoded mechanisms specific to that runtime identifier to determine how to render the entity on the client.

**Positional updates**
Positional updates being active means that the position of the entity on the client reflects the server. For some entities, this is disabled to optimize performance. These entities are generally stationary; however, these entities are also especially prone to glaringly obvious server-client desyncs.

If desynced, the correct position will not be reflected until fully reloading the world; even reloading chunks is not enough to update the entity’s position on the client. Entities that would move out of simulation distance will immediately disappear from clients. If the entity would fall back into simulation distance, it can still only appear at its first client-loaded location in that instance of loading the world. `minecraft:conditional_bandwidth_optimization` cannot be used to force positional updates on entities whose runtime identifier has this attribute set to inactive.

Other updates to an entity — such as `minecraft:variant` changing or if the entity dies — are still forwarded. An entity’s position can be forced to be synced to the client when getting pushed by a piston or when getting stuck in the ground as a projectile. For riding pairs of entities, only the ridden entity’s positional updatability is regarded for the sake of client synchronization; the riding entity will update according to the ride. Gameplay will still be determined by the ridden entity’s server position, even if the ride and its rider are not receiving positional updates on the client. If, for example, a player in survival is mounting an entity not receiving positional updates and the ride is teleported nearby into lava, the player (and ride if eligible) will begin to burn seemingly in place according to the client. Even the player’s camera will remain in place while such a ride is moved around.

**Interpolated movement**
Entity positional changes are generally interpolated on the client when the entity moves small distances on the server between ticks. This technique ensures a fluid appearance in movement, especially when the entity is running its usual behaviors, i.e., not being teleported. If this is inactive, entities using such runtime identifiers will appear to stutter around. This is generally inactive on runtime identifiers that are not expected to move much in order to improve performance.

**Oriented**
Normally, entities on the client automatically update their orientation to match the server. If this attribute is inactive, the client entity will by default appear in a fixed direction (with the geometry rotated 180° about the *y*-axis) even if the server entity is being oriented some specific way. All entities have server-configurable rotations, and rotational updates are always sent to the client. Therefore, animations can always be used to force a client entity’s orientation to match the server using `q.body_x_rotation` and `q.body_y_rotation`.

**Shadow**
When active, the entity will have a shadow rendered underneath it. For a few runtime identifiers, a shadow will be present, but the shadow size will use a fixed size and disregard the provided collision box in the server entity definition.

**Death effects**
By default, the entity will despawn 1 second after taking fatal damage, with a few a hardcoded effects occurring before despawning:
* The `minecraft:death_explosion_emitter` particle effect is played.
* `is_hurt_color` properties from the active render controllers are used as the overlay color until the entity despawns.
* The entity is rotated around the *z*-axis 90° counterclockwise over the first 0.5 seconds after taking fatal damage.
* The entity’s death sound effect (or a fallback, if not present) is played.

When this is inactive on a runtime identifier, none of the above effects will be played and the entity will (if applicable) despawn immediately.

#### Step sounds
When active, entities with this runtime identifier will automatically play step sound effects when traversing terrain. Most non-mob runtime identifiers do not play step sound effects, even if specifically configured to do so via `sounds.json`.

## Projectiles
Most core behaviors of projectiles are handled via the `minecraft:projectile` component. Notably, however, initial velocity on spawn is handled by the “projectile” [spawn behavior](#spawn-behavior), applicable to many runtime identifiers in this category.

### Server Attributes
| Attribute                                                     | Registered | Configurable behaviors | Configurable collision box | Configurable block collision | Configurable gravity | Configurable entity pushability | Configurable piston pushability | Can be portaled | Hit points | Damageable | Flammable | Can be knocked back | Effectible | Selectable | Hookable | Targetable | Can be projectile | Can move along rails | Automatically rides | Configurable loot | Spawn behavior   |
|---------------------------------------------------------------|------------|------------------------|----------------------------|------------------------------|----------------------|---------------------------------|---------------------------------|-----------------|------------|------------|-----------|---------------------|------------|------------|----------|------------|-------------------|----------------------|---------------------|-------------------|------------------|
| `minecraft:arrow`                                             | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ❌               | None       | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:thrown_trident`                                    | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ❌               | None       | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:snowball`                                          | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None       | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Projectile       |
| `minecraft:egg`                                               | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None       | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Projectile       |
| `minecraft:splash_potion` & `minecraft:lingering_potion`      | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None       | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Projectile       |
| `minecraft:ice_bomb`                                          | ⚠️          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None       | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Projectile       |
| `minecraft:llama_spit`                                        | ✅          | ❌                      | ⚠️                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None       | ❌          | ✅         | ❌                   | ❌          | ⚠️          | ⚠️        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:fireball`                                          | ✅          | ❌                      | ⚠️                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None       | ❌          | ✅         | ❌                   | ❌          | ⚠️          | ⚠️        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:small_fireball`                                    | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None       | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:shulker_bullet`                                    | ✅          | ❌                      | ❌                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None       | ❌          | ❌         | ❌                   | ❌          | ⚠️          | ⚠️        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:dragon_fireball`                                   | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None       | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:wither_skull` & `minecraft:wither_skull_dangerous` | ✅          | ❌                      | ⚠️                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None       | ❌          | ❌         | ❌                   | ❌          | ⚠️          | ⚠️        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:ender_pearl`                                       | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None       | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Projectile       |
| `minecraft:fishing_hook`                                      | ✅          | ❌                      | ✅                          | ❌                            | ❌                    | ✅                               | ❌                               | 🐛               | None       | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:xp_bottle`                                         | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None       | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Projectile       |

### Client Attributes
| Attribute                                                     | Client entity | Positional updates | Interpolated movement | Oriented | Shadow | Death effects | Step sounds |
|---------------------------------------------------------------|---------------|--------------------|-----------------------|----------|--------|---------------|-------------|
| `minecraft:arrow`                                             | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:thrown_trident`                                    | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ✅           |
| `minecraft:snowball`                                          | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:egg`                                               | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:splash_potion` & `minecraft:lingering_potion`      | ❌             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:ice_bomb`                                          | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:llama_spit`                                        | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ✅           |
| `minecraft:fireball`                                          | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:small_fireball`                                    | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:shulker_bullet`                                    | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ✅           |
| `minecraft:dragon_fireball`                                   | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:wither_skull` & `minecraft:wither_skull_dangerous` | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:ender_pearl`                                       | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:fishing_hook`                                      | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ✅           |
| `minecraft:xp_bottle`                                         | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |

### `minecraft:arrow`
* Has special considerations if declaring `stuck_in_ground` in `minecraft:projectile`
	* Players touching the projectile when it’s stuck in the ground (and at no other point) will receive a `minecraft:arrow` item
		* Entity instantly despawns when item is received, dropping no loot.
		* Cannot be picked up if loaded via NBT structure
		* `mob_effect` cannot be set to give an alternate drop.

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ❌                |                                                              |
| Configurable collision box      | ✅                |                                                              |
| Configurable block collision    | ✅ |  |
| Configurable gravity            | ❌                |                                                              |
| Configurable entity pushability | ❌ |                     |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ❌                |                                                              |
| Hit points                      | None             |                                                              |
| Damageable                      | ❌                |                                                              |
| Flammable                       | ✅                |                                                              |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ❌                |                                                              |
| Selectable                      | ❌                |                                                              |
| Hookable                        | ❌                |                                                              |
| Targetable                      | ❌                |                                                              |
| Can be projectile               | ⚠️                | Block collision always treated as `false` unless `stick_in_ground` is provided                    |
| Can move along rails            | ✅                | Decelerates slowly                                           |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ✅                |                                                              |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ❌     |

### `minecraft:thrown_trident`
* Has special considerations if declaring `stuck_in_ground` in `minecraft:projectile`
	* Players touching the projectile when it’s stuck in the ground (and at no other point) will receive an undamaged, unenchanted `minecraft:trident` item
		* Entity instantly despawns when item is received, dropping no loot.
		* Cannot be picked up if loaded via NBT structure
		* Neither `lightning` nor `impact_damage`’s `channeling` can be set to give a modified drop.
	* Will not automatically despawn after being stuck in the ground

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ❌                |                                                              |
| Configurable collision box      | ✅                |                                                              |
| Configurable block collision    | ✅ |  |
| Configurable gravity            | ❌                |                   |
| Configurable entity pushability | ❌ |                     |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ❌                |                                                              |
| Hit points             | None                |                                                    |
| Damageable                      | ❌                |                                                              |
| Flammable                       | ✅                |                                                              |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ❌                |                                                              |
| Selectable                      | ❌                |                                                              |
| Hookable                        | ❌                |                                                              |
| Targetable                      | ❌                |                                                              |
| Can be projectile               | ⚠️                | Block collision always treated as `false` unless `stick_in_ground` is provided                    |
| Can move along rails            | ✅                | Decelerates slowly                                           |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ✅                |  |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ✅     |

### `minecraft:snowball`
#### Server Attributes
| Attribute                       | Value      | Additional Notes                                             |
|--------------------------------:|:----------:|--------------------------------------------------------------|
| Registered                      | ✅          |                                                              |
| Configurable behaviors          | ❌          |                                                              |
| Configurable collision box      | ✅          |                                                              |
| Configurable block collision    | ✅ |  |
| Configurable gravity            | ❌          |                   |
| Configurable entity pushability | ❌ |                     |
| Configurable piston pushability | ✅          |                                                              |
| Can be portaled                 | ✅          |                                                              |
| Hit points             | None          |                                                    |
| Damageable                      | ❌          |                                                              |
| Flammable                       | ✅          |                                                              |
| Can be knocked back             | ❌          |                                                              |
| Effectible                      | ❌          |                                                              |
| Selectable                      | ❌          |                                                              |
| Hookable                        | ❌          |                                                              |
| Targetable                      | ❌          |                                                              |
| Can be projectile               | ⚠️          | Block collision always treated as `false` unless `stick_in_ground` is provided                    |
| Can move along rails            | ✅          | Decelerates slowly                                           |
| Automatically rides             | ❌          |                                                              |
| Configurable loot               | ✅          |  |
| Spawn behavior                  | Projectile |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ❌     |

### `minecraft:egg`
#### Server Attributes
| Attribute                       | Value      | Additional Notes                                             |
|--------------------------------:|:----------:|--------------------------------------------------------------|
| Registered                      | ✅          |                                                              |
| Configurable behaviors          | ❌          |                                                              |
| Configurable collision box      | ✅          |                                                              |
| Configurable block collision    | ✅ |  |
| Configurable gravity            | ❌          |                   |
| Configurable entity pushability | ❌ |                     |
| Configurable piston pushability | ✅          |                                                              |
| Can be portaled                 | ✅          |                                                              |
| Hit points             | None          |                                                    |
| Damageable                      | ❌          |                                                              |
| Flammable                       | ✅          |                                                              |
| Can be knocked back             | ❌          |                                                              |
| Effectible                      | ❌          |                                                              |
| Selectable                      | ❌          |                                                              |
| Hookable                        | ❌          |                                                              |
| Targetable                      | ❌          |                                                              |
| Can be projectile               | ⚠️          | Block collision always treated as `false` unless `stick_in_ground` is provided                    |
| Can move along rails            | ✅          | Decelerates slowly                                           |
| Automatically rides             | ❌          |                                                              |
| Configurable loot               | ✅          |  |
| Spawn behavior                  | Projectile |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ❌     |

### `minecraft:splash_potion` & `minecraft:lingering_potion`
* `minecraft:variant` is overloaded for entities using this runtime identifier. While the `is_variant` entity filter will reflect the correct variant as normal, `q.variant` will return a different value (on both the server and the client) based on the `potionId` top-level NBT field on the entity. The type of effect `potionId` [represents](/documentation/projectiles#potion-ids), regardless of effect strength, determines the value:

| Effect          | `q.variant` Value |
|-----------------|-----------------------|
| Slowness        | `0`                   |
| Swiftness       | `1`                   |
| Mining Fatigue  | `2`                   |
| Haste           | `3`                   |
| Strength        | `4`                   |
| Healing         | `5`                   |
| Harming         | `6`                   |
| Leaping         | `7`                   |
| Nausea          | `8`                   |
| Regeneration    | `9`                   |
| Resistance      | `10`                  |
| Fire Resistance | `11`                  |
| Water Breathing | `12`                  |
| Invisibility    | `13`                  |
| Blindness       | `14`                  |
| Night Vision    | `15`                  |
| Hunger          | `16`                  |
| Weakness        | `17`                  |
| Poison          | `18`                  |
| Decay           | `19`                  |
| Health Boost    | `20`                  |
| Absorption      | `21`                  |
| Saturation      | `22`                  |
| Levitation      | `23`                  |
| Turtle Master   | `24`                  |
| Slow Falling    | `25`                  |
| Other           | `26`                  |

#### NBT Extensions
* `PotionId`

#### Server Attributes
| Attribute                       | Value      | Additional Notes                                             |
|--------------------------------:|:----------:|--------------------------------------------------------------|
| Registered                      | ✅          |                                                              |
| Configurable behaviors          | ❌          |                                                              |
| Configurable collision box      | ✅          |                                                              |
| Configurable block collision    | ✅ |  |
| Configurable gravity            | ❌          |                   |
| Configurable entity pushability | ❌ |                     |
| Configurable piston pushability | ✅          |                                                              |
| Can be portaled                 | ✅          |                                                              |
| Hit points             | None          |                                                    |
| Damageable                      | ❌          |                                                              |
| Flammable                       | ✅          |                                                              |
| Can be knocked back             | ❌          |                                                              |
| Effectible                      | ❌          |                                                              |
| Selectable                      | ❌          |                                                              |
| Hookable                        | ❌          |                                                              |
| Targetable                      | ❌          |                                                              |
| Can be projectile               | ⚠️          | Block collision always treated as `false` unless `stick_in_ground` is provided                    |
| Can move along rails            | ✅          | Decelerates slowly                                           |
| Automatically rides             | ❌          |                                                              |
| Configurable loot               | ✅          |  |
| Spawn behavior                  | Projectile |                                                              |

#### Client Attributes
| Attribute             | Value | Additional Notes                                             |
|----------------------:|:-----:|--------------------------------------------------------------|
| Client entity         | ❌     | Renders as a horizontally flipped water splash potion billboard |
| Positional updates    | ✅     |                                                              |
| Interpolated movement | ✅     |                                                              |
| Oriented              | ❌     |                                                              |
| Shadow                | ❌     |                                                              |
| Death effects         | ❌     |                                                              |
| Step sounds           | ❌     |                                                              |

### `minecraft:ice_bomb`
#### Server Attributes
| Attribute                       | Value      | Additional Notes                                             |
|--------------------------------:|:----------:|--------------------------------------------------------------|
| Registered                      | ⚠️          | Only when Education Edition is active                        |
| Configurable behaviors          | ❌          |                                                              |
| Configurable collision box      | ✅          |                                                              |
| Configurable block collision    | ✅ |  |
| Configurable gravity            | ❌          |                   |
| Configurable entity pushability | ❌ |                     |
| Configurable piston pushability | ✅          |                                                              |
| Can be portaled                 | ✅          |                                                              |
| Hit points                      | None       |                                                              |
| Damageable                      | ❌          |                                                              |
| Flammable                       | ✅          |                                                              |
| Can be knocked back             | ❌          |                                                              |
| Effectible                      | ❌          |                                                              |
| Selectable                      | ❌          |                                                              |
| Hookable                        | ❌          |                                                              |
| Targetable                      | ❌          |                                                              |
| Can be projectile               | ⚠️          | Block collision always treated as `false` unless `stick_in_ground` is provided                    |
| Can move along rails            | ✅          | Decelerates slowly                                           |
| Automatically rides             | ❌          |                                                              |
| Configurable loot               | ✅          |  |
| Spawn behavior                  | Projectile |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ❌     |

### `minecraft:llama_spit`
#### Effects
* Emits `minecraft:llama_spit_smoke` continuously half a block above its position, about a dozen times per second

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ❌                |                                                              |
| Configurable collision box      | ⚠️                | Actual width is `width` + 1; actual height extends from 1 block beneath position to `height` + 1 blocks above position |
| Configurable block collision    | ✅ |  |
| Configurable gravity            | ❌                |                   |
| Configurable entity pushability | ❌ |                     |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ✅                |                                                              |
| Hit points                      | None             |                                                              |
| Damageable                      | ❌                |                                                              |
| Flammable                       | ✅                |                                                              |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ❌                |                                                              |
| Selectable                      | ⚠️                | Lead attaches but cannot pull entity                       |
| Hookable                        | ⚠️                | Attaches but cannot pull entity              |
| Targetable                      | ❌                |                                                              |
| Can be projectile               | ⚠️                | Block collision always treated as `false` unless `stick_in_ground` is provided                    |
| Can move along rails            | ✅                | Decelerates slowly                                           |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ✅                |  |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ✅     |

### `minecraft:fireball`
#### Effects
* Emits `minecraft:basic_smoke_particle` continuously half a block above its position via manual emission

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ❌                |                                                              |
| Configurable collision box      | ⚠️                | Actual width is `width` + 1; actual height extends from 1 block beneath position to `height` + 1 blocks above position |
| Configurable block collision    | ✅ |  |
| Configurable gravity            | ❌                |                   |
| Configurable entity pushability | ❌ |                     |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ✅                |                                                              |
| Hit points                      | None             |                                                              |
| Damageable                      | ❌                |                                                              |
| Flammable                       | ✅                | Always innately on fire unless in a water block or rain; splash water bottles will not disable this innate effect |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ❌                |                                                              |
| Selectable                      | ⚠️                | Lead attaches but cannot pull entity                       |
| Hookable                        | ⚠️                | Attaches but cannot pull entity              |
| Targetable                      | ❌                |                                                              |
| Can be projectile               | ⚠️                | Block collision always treated as `false` unless `stick_in_ground` is provided                    |
| Can move along rails            | ✅                | Decelerates slowly                                           |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ✅                |  |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ❌     |

### `minecraft:small_fireball`
#### Effects
* Emits `minecraft:basic_smoke_particle` continuously half a block above its position via manual emission

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ❌                |                                                              |
| Configurable collision box      | ✅                |                                                              |
| Configurable block collision    | ✅ |  |
| Configurable gravity            | ❌                |                   |
| Configurable entity pushability | ❌ |                     |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ✅                |                                                              |
| Hit points                      | None             |                                                              |
| Damageable                      | ❌                |                                                              |
| Flammable                       | ✅                | Always innately on fire unless in a water block or rain; splash water bottles will not disable this innate effect |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ❌                |                                                              |
| Selectable                      | ❌                |                                                              |
| Hookable                        | ❌                |                                                              |
| Targetable                      | ❌                |                                                              |
| Can be projectile               | ⚠️                | Block collision always treated as `false` unless `stick_in_ground` is provided                    |
| Can move along rails            | ✅                | Decelerates slowly                                           |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ✅                |  |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ❌     |

### `minecraft:shulker_bullet`
#### Effects
* Emits `minecraft:shulker_bullet` particle continuously at its exact location via manual emission

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ❌                |                                                              |
| Configurable collision box      | ❌                | Always has width and height of `0.5`            |
| Configurable block collision    | ✅ |  |
| Configurable gravity            | ❌                |                   |
| Configurable entity pushability | ❌ |                     |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ✅                |                                                              |
| Hit points                      | None             |                                                              |
| Damageable                      | ❌                |                                                              |
| Flammable                       | ❌                |                                                              |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ❌                |                                                              |
| Selectable                      | ⚠️                | Lead attaches but cannot pull entity                       |
| Hookable                        | ⚠️                | Attaches but cannot pull entity              |
| Targetable                      | ❌                |                                                              |
| Can be projectile               | ⚠️                | Block collision always treated as `false` unless `stick_in_ground` is provided                    |
| Can move along rails            | ✅                | Decelerates slowly                                           |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ✅                |  |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ✅     |

### `minecraft:dragon_fireball`
#### Effects
* Emits `minecraft:dragon_breath_trail` continuously half a block above its position via manual emission

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ❌                |                                                              |
| Configurable collision box      | ✅                |                                                              |
| Configurable block collision    | ✅ |  |
| Configurable gravity            | ❌                |                   |
| Configurable entity pushability | ❌ |                     |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ✅                |                                                              |
| Hit points                      | None             |                                                              |
| Damageable                      | ❌                |                                                              |
| Flammable                       | ✅                |                                                              |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ❌                |                                                              |
| Selectable                      | ❌                |                                                              |
| Hookable                        | ❌                |                                                              |
| Targetable                      | ❌                |                                                              |
| Can be projectile               | ⚠️                | Block collision always treated as `false` unless `stick_in_ground` is provided                    |
| Can move along rails            | ✅                | Decelerates slowly                                           |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ✅                |  |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ❌     |

### `minecraft:wither_skull` & `minecraft:wither_skull_dangerous`
#### Effects
* Emits `minecraft:basic_smoke_particle` continuously half a block above its position via manual emission

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ❌                |                                                              |
| Configurable collision box      | ⚠️                | Actual width is `width` + 1; actual height extends from 1 block beneath position to `height` + 1 blocks above position |
| Configurable block collision    | ✅ |  |
| Configurable gravity            | ❌                |                   |
| Configurable entity pushability | ❌ |                     |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ✅                |                                                              |
| Hit points                      | None             |                                                              |
| Damageable                      | ❌                |                                                              |
| Flammable                       | ❌                |                                                              |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ❌                |                                                              |
| Selectable                      | ⚠️                | Lead attaches but cannot pull entity                       |
| Hookable                        | ⚠️                | Attaches but cannot pull entity              |
| Targetable                      | ❌                |                                                              |
| Can be projectile               | ⚠️                | Block collision always treated as `false` unless `stick_in_ground` is provided                    |
| Can move along rails            | ✅                | Decelerates slowly                                           |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ✅                |  |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ❌     |

### `minecraft:ender_pearl`
#### Server Attributes
| Attribute                       | Value      | Additional Notes                                             |
|--------------------------------:|:----------:|--------------------------------------------------------------|
| Registered                      | ✅          |                                                              |
| Configurable behaviors          | ❌          |                                                              |
| Configurable collision box      | ✅          |                                                              |
| Configurable block collision    | ✅ |  |
| Configurable gravity            | ❌          |                   |
| Configurable entity pushability | ❌ |                     |
| Configurable piston pushability | ✅          |                                                              |
| Can be portaled                 | ✅          |                                                              |
| Hit points                      | None       |                                                              |
| Damageable                      | ❌          |                                                              |
| Flammable                       | ✅          |                                                              |
| Can be knocked back             | ❌          |                                                              |
| Effectible                      | ❌          |                                                              |
| Selectable                      | ❌          |                                                              |
| Hookable                        | ❌          |                                                              |
| Targetable                      | ❌          |                                                              |
| Can be projectile               | ⚠️          | Block collision always treated as `false` unless `stick_in_ground` is provided                    |
| Can move along rails            | ✅          | Decelerates slowly                                           |
| Automatically rides             | ❌          |                                                              |
| Configurable loot               | ✅          |  |
| Spawn behavior                  | Projectile |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ❌     |

### `minecraft:fishing_hook`
* Despawns after a server tick unless the player deploying it is holding a `minecraft:fishing_rod` item
	* Custom items with the same name can’t be used for this functionality.
	* Will not trigger zero-timed commands or effects
* Multiple fishing hooks may be deployed from the same player simultaneously.
* A fishing line will be drawn to a single fishing hook.
	* The line will be used with the first hook cast after no hooks are present from a player.
	* The line will connect to a new hook if one is available if the attached hook were to be despawned or killed.
* Hooks are despawned when the player travels too far away from the hook or if switching away from `minecraft:fishing_rod` in their hotbar.
* If the fishing rod is recast when hooks are present, the hook attached via the line is despawned without dropping loot (unless successfully fishing).
	* Recasting is bugged when multiple fishing hooks are deployed: multiple hooks may be despawned simultaneously on recast. Often, other hooks will remain present.
* Can be used to fish out of water
	* Luring of fish will occur with independent timers at all deployed hooks simultaneously.
	* Successful fishing can only occur on the individual hooks pulled in that were attached to fish.
	* Upon successful fishing, the declared loot table for the entity is used as the fishing reward.
		* All rolled items will be projected from the hook toward the fisher’s position.
* Can latch onto entities and potentially pull them in when recast
	* Will not pull in entities if the attached hook is despawned or killed
	* Only one hook from an individual player may be attached to a different entity at the same time.
	* Attachment is separate from riding an entity.
		* Will not pull in entities the fishing rod is riding
* Despawns when reloading the world

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ❌                |                                                              |
| Configurable collision box      | ✅                |                                                              |
| Configurable block collision    | ❌                | Always `true`                                                |
| Configurable gravity            | ❌                | Always `true`                                                |
| Configurable entity pushability | ✅                |                                                              |
| Configurable piston pushability | ❌                | Always `false`                                               |
| Can be portaled                 | 🐛                | Currently always crashes the game when coming in contact with any portal |
| Hit points                      | None             |                                                              |
| Damageable                      | ❌                |                                                              |
| Flammable                       | ✅                |                                                              |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ❌                |                                                              |
| Selectable                      | ❌                |                                                              |
| Hookable                        | ❌                |                                                              |
| Targetable                      | ❌                |                                                              |
| Can be projectile               | ⚠️                | Block collision always treated as `true`<br>Acts innately as a projectile even without declaring `minecraft:projectile` |
| Can move along rails            | ✅                | Decelerates slowly                                           |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ✅                |                                                              |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ✅     |

### `minecraft:xp_bottle`
#### Server Attributes
| Attribute                       | Value      | Additional Notes                                             |
|--------------------------------:|:----------:|--------------------------------------------------------------|
| Registered                      | ✅          |                                                              |
| Configurable behaviors          | ❌          |                                                              |
| Configurable collision box      | ✅          |                                                              |
| Configurable block collision    | ✅ |  |
| Configurable gravity            | ❌          |                   |
| Configurable entity pushability | ❌ |                     |
| Configurable piston pushability | ✅          |                                                              |
| Can be portaled                 | ✅          |                                                              |
| Hit points                      | None       |                                                              |
| Damageable                      | ❌          |                                                              |
| Flammable                       | ✅          |                                                              |
| Can be knocked back             | ❌          |                                                              |
| Effectible                      | ❌          |                                                              |
| Selectable                      | ❌          |                                                              |
| Hookable                        | ❌          |                                                              |
| Targetable                      | ❌          |                                                              |
| Can be projectile               | ⚠️          | Block collision always treated as `false` unless `stick_in_ground` is provided                    |
| Can move along rails            | ✅          | Decelerates slowly                                           |
| Automatically rides             | ❌          |                                                              |
| Configurable loot               | ✅          |  |
| Spawn behavior                  | Projectile |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ❌     |

## Transportation
Transportation entities move other entities. Most of the core behavior of transportation entities can be handled via the `minecraft:rideable` component or `/tp` command.

### Server Attributes
| Attribute                                 | Registered | Configurable behaviors | Configurable collision box | Configurable block collision | Configurable gravity | Configurable entity pushability | Configurable piston pushability | Can be portaled | Hit points           | Damageable | Flammable | Can be knocked back | Effectible | Selectable | Hookable | Targetable | Can be projectile | Can move along rails | Automatically rides | Configurable loot | Spawn behavior   |
|-------------------------------------------|------------|------------------------|----------------------------|------------------------------|----------------------|---------------------------------|---------------------------------|-----------------|----------------------|------------|-----------|---------------------|------------|------------|----------|------------|-------------------|----------------------|---------------------|-------------------|------------------|
| `minecraft:boat` & `minecraft:chest_boat` | ✅          | ❌                      | ✅                          | ✅                            | ⚠️                    | ✅                               | ❌                               | ✅               | Structural integrity | ✅          | ✅         | ❌                   | ❌          | ✅          | ⚠️        | ❌          | ✅                 | ⚠️                    | ❌                   | ⚠️                 | Targeted surface |
| `minecraft:minecart` & Variants           | ✅          | ❌                      | ✅                          | ❌                            | ⚠️                    | ❌                               | ✅                               | ✅               | Structural integrity | ✅          | ✅         | ❌                   | ❌          | ✅          | ⚠️        | ❌          | ⚠️                 | ✅                    | ❌                   | ⚠️                 | Rail             |
| `minecraft:balloon`                       | ⚠️          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ❌         | ❌                   | ❌          | ✅          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |

### Client Attributes
| Attribute                                 | Client entity | Positional updates | Interpolated movement | Oriented | Shadow | Death effects | Step sounds |
|-------------------------------------------|---------------|--------------------|-----------------------|----------|--------|---------------|-------------|
| `minecraft:boat` & `minecraft:chest_boat` | ✅             | ✅                  | ❌                     | ❌        | ⚠️      | ❌             | ❌           |
| `minecraft:minecart` & Variants           | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:balloon`                       | ✅             | ✅                  | ✅                     | ❌        | ✅      | ❌             | ✅           |

### `minecraft:boat` & `minecraft:chest_boat`
* Uses structural integrity
	* Effectively has 40 starting hit points for being broken by players not in creative mode or by the environment
	* Damage increases (such as via the strength effect) affect hit point loss greater. Critical hits and other factors do not apply.
	* Instantly despawns if attacked (even indirectly, such as via TNT) by a player in creative mode
* Has hard, block-like collision dependent on the collision box size
* `minecraft:boat` (but not `minecraft:chest_boat`) innately floats in water without needing `minecraft:buoyant`
* `minecraft:boat` (but not `minecraft:chest_boat`) is innately ridable without declaring `minecraft:rideable`.
	* Can be overridden with custom `minecraft:rideable` declaration
* Has innate boat controls usable by the principal rider
	* Moving left or right rotates the boat. Moving forward or backward strictly moves those directions according to the rotation.
	* Moves and turns faster in water than on land
	* Cannot be controlled when not in water or on the ground
	* Cannot configure rideable speed
	* `minecraft:input_ground_controlled` ignored if declared
	* `minecraft:chest_boat` is significantly slower in all situations than `minecraft:boat`.
* `minecraft:chest_boat` has reduced friction when pushed and will continue sliding along even solid ground indefinitely until colliding with a vertical obstacle

#### Notable Queries
* `q.structural_integrity`
	* Reflects the effective hit points of the entity
	* Entity dies when reaching 0
	* Ranges from `1` to `40`, starting at `40` by default
	* Because structural integrity is not serialized, reset to `40` when reloading the world or when reloading the chunks the entity is in
* `q.hurt_time`
	* Normally `0`; when the entity is attacked by a player (even indirectly) in survival mode, instantly becomes and stays at `1` for 0.5 seconds before resetting to `0`
* `q.hurt_direction`
	* Starts at `1` and alternates between `1` and `-1` with each attack by a player (even indirectly) in survival mode

#### Server Attributes
| Attribute                       | Value                | Additional Notes                                             |
|--------------------------------:|:--------------------:|--------------------------------------------------------------|
| Registered                      | ✅                    |                                                              |
| Configurable behaviors          | ❌                    |                                                              |
| Configurable collision box      | ✅                    |                                                              |
| Configurable block collision    | ✅                    |                                                              |
| Configurable gravity            | ⚠️                    | Always `true` for `minecraft:boat`<br>`minecraft:chest_boat` ignores `has_gravity`. Gravity is determined by `minecraft:buoyant`’s existence; if provided, will act as `true` |
| Configurable entity pushability | ✅                    | While generally immovable due to innate hard collision, `is_pushable` being `true` makes the entity slightly pushable very close to the hard edge |
| Configurable piston pushability | ❌                    | Always `true`                                                |
| Can be portaled                 | ✅                    |                                                              |
| Hit points                      | Structural integrity |                                                              |
| Damageable                      | ✅                    | Cannot take gameplay fall damage<br>Breaks immediately when taking gameplay contact damage |
| Flammable                       | ✅                    | Instantly destroyed if in fire or lava                       |
| Can be knocked back             | ❌                    | Takes knockback from explosions                              |
| Effectible                      | ❌                    |                                                              |
| Selectable                      | ✅                    |                                                              |
| Hookable                        | ⚠️                    | Despawns on hook attachment if hook was cast by player in creative mode<br>Otherwise, hookable normally |
| Targetable                      | ❌                    |                                                              |
| Can be projectile               | ✅                    |                                                              |
| Can move along rails            | ⚠️                    | Aligns to rails when not being ridden; ignores them when being ridden<br>`minecraft:boat` bounces along rails, even when stopped.<br>`minecraft:chest_boat` does not bounce along rails and is set 0.12 blocks above the rail baseline. |
| Automatically rides             | ❌                    |                                                              |
| Configurable loot               | ⚠️                    | Drops specified loot if killed via `/kill`<br><br>If not killed via `/kill`, drops a boat (if using `minecraft:boat`) or chest boat (if using `minecraft:chest_boat`) whose type is based on the `minecraft:variant` value:<br>`1`: spruce<br>`2`: birch<br>`3`: jungle<br>`4`: acacia<br>`5`: dark oak<br>All other values: oak |
| Spawn behavior                  | Targeted surface     |                                                              |

#### Client Attributes
| Attribute             | Value | Additional Notes                                        |
|----------------------:|:-----:|---------------------------------------------------------|
| Client entity         | ✅     |                                                         |
| Positional updates    | ✅     |                                                         |
| Interpolated movement | ❌     |                                                         |
| Oriented              | ❌     |                                                         |
| Shadow                | ⚠️     | Size is fixed as if having a collision box width of `1` |
| Death effects         | ❌     |                                                         |
| Step sounds           | ❌     |                                                         |

### `minecraft:minecart` & Variants
* Uses structural integrity
	* Despawns in a single hit if attacked (including indirectly) by a player in creative mode
	* Destroyed in multiple hits if melee attacked by a player enough in survival mode
		* Effectively has 5 starting hit points
		* Uses a scaling destruction system based on frequency of attacks
			* If attacks are too spread out, the entity will never be destroyed.
			* The closer attacks are in time, the faster the entity will be destroyed.
			* See `q.structural_integrity` notes below for specifics.
		* Damage increases (such as via the strength effect) affect hit point loss greater. Critical hits and other factors do not apply.
	* Destroyed in a single hit if ranged attacked by a player in survival mode
	* Destroyed immediately if blown up or in fire or lava
* Activates detector rails when on top of them
	* Doesn’t have to be affixed directly to the rail to activate
* Using `minecraft:on_instant_prime` event to detonate TNT minecarts instantly under various circumstances is not automatically handled via the runtime identifier. Only the vanilla `minecraft:tnt_minecart` entity is targeted by this event trigger.
* Other minecart behaviors handled by general-use data-driven components
	* Bringing up a command block interface from a command block minecart is inaccessible either using data-driven components or the runtime identifier.
* Plays a fragment of the `minecart.base` sound effect approximately every second while moving by any means, even when teleporting

#### Notable Queries
* `q.structural_integrity`
	* Reflects the effective hit points of the entity
	* Entity dies when reaching 0
	* Ranges from `1` to `40`, starting at `40` by default
	* 8 is subtracted from this value for each point of damage received. When below 20, 1 is added to this value every tick until reaching 20.
	* Reset to `40` when reloading the world, but even though structural integrity is not serialized, doesn’t reset when reloading the chunks the entity is in
* `q.hurt_time`
	* Normally `0`; when the entity is attacked by a player (even indirectly) in survival mode, instantly becomes and stays at `1` for 0.5 seconds before resetting to `0`
* `q.hurt_direction`
	* Starts at `1` and alternates between `1` and `-1` with each attack by a player (even indirectly) in survival mode

#### Server Attributes
| Attribute                       | Value                | Additional Notes                                             |
|--------------------------------:|:--------------------:|--------------------------------------------------------------|
| Registered                      | ✅                    |                                                              |
| Configurable behaviors          | ❌                    |                                                              |
| Configurable collision box      | ✅                    |                                                              |
| Configurable block collision    | ❌                    | Always `false`                                               |
| Configurable gravity            | ⚠️                    | Ignore `has_gravity`. Gravity is determined by `minecraft:rail_movement`’s existence; if provided, will act as `true` |
| Configurable entity pushability | ❌                    | Always `false`                                               |
| Configurable piston pushability | ✅                    |                                                              |
| Can be portaled                 | ✅                    |                                                              |
| Hit points                      | Structural integrity |                                                              |
| Damageable                      | ✅                    | Does not take gameplay fall damage<br>Immediately destroyed when taking gameplay explosion or contact damage |
| Flammable                       | ✅                    | Instantly destroyed if in fire or lava                       |
| Can be knocked back             | ❌                    |                                                              |
| Effectible                      | ❌                    |                                                              |
| Selectable                      | ✅                    |                                                              |
| Hookable                        | ⚠️                    | Destroyed on hook attachment if hook was cast by player in creative mode<br>Otherwise, attaches but cannot pull entity |
| Targetable                      | ❌                    |                                                              |
| Can be projectile               | ⚠️                    | Block collision always treated as `false` unless `stick_in_ground` is provided                    |
| Can move along rails            | ✅                    | Positioned directly on the rail's baseline<br>Rail movement automatically orients entity on the server. (The client still requires an animation using `q.body_y_rotation` since “Oriented” client attribute is ❌.)<br>Decelerates gradually |
| Automatically rides             | ❌                    |                                                              |
| Configurable loot               | ⚠️                    | Drops provided loot table when `/kill` is used on it<br>Drops nothing if destroyed (even indirectly) by a player in creative mode<br>Drops intrinsic loot when destroyed otherwise. Variations drop their corresponding item form, with the exception of command block minecarts, which only drop a `minecraft:minecart`. |
| Spawn behavior                  | Rail                 |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ❌     |

### `minecraft:balloon`
* Custom entities using the balloon runtime identifier cannot attach to or lift entities like `minecraft:balloon`; entities using this runtime identifier do not interact in any way with entities with `minecraft:balloonable`.

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ⚠️                | Only when Education Edition is active                        |
| Configurable behaviors          | ❌                |                                                              |
| Configurable collision box      | ✅                |                                                              |
| Configurable block collision    | ✅                |                                                              |
| Configurable gravity            | ❌                | Always `false`                                               |
| Configurable entity pushability | ❌                | Always `false`                                               |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ✅                |                                                              |
| Hit points                      | None             |                                                              |
| Damageable                      | ❌                |                                                              |
| Flammable                       | ❌                | Despawns immediately if on fire or in lava<br>Watchers do not trigger before despawning. |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ❌                |                                                              |
| Selectable                      | ✅                |                                                              |
| Hookable                        | ❌                | Despawns on hook attachment |
| Targetable                      | ❌                |                                                              |
| Can be projectile               | ⚠️                | Block collision always treated as `false` unless `stick_in_ground` is provided                    |
| Can move along rails            | ✅                | Decelerates slowly                                           |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ✅                |                                                              |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ❌     |
| Shadow                | ✅     |
| Death effects         | ❌     |
| Step sounds           | ✅     |

## Block-Like Entities
Block-like entities act as stationary fake blocks or otherwise act as a workaround for blocks to achieve some advanced functionality blocks alone can’t support. In most situations, a generic entity can be bound to a custom block for handling edge cases.

### Server Attributes
| Attribute                 | Registered | Configurable behaviors | Configurable collision box | Configurable block collision | Configurable gravity | Configurable entity pushability | Configurable piston pushability | Can be portaled | Hit points           | Damageable | Flammable | Can be knocked back | Effectible | Selectable | Hookable | Targetable | Can be projectile | Can move along rails | Automatically rides | Configurable loot | Spawn behavior   |
|---------------------------|------------|------------------------|----------------------------|------------------------------|----------------------|---------------------------------|---------------------------------|-----------------|----------------------|------------|-----------|---------------------|------------|------------|----------|------------|-------------------|----------------------|---------------------|-------------------|------------------|
| `minecraft:tnt`           | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ✅                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ✅          | ✅        | ❌          | ✅                 | ⚠️                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:armor_stand`   | ✅          | ✅                      | ✅                          | ✅                            | ✅                    | ✅                               | ✅                               | ✅               | Structural integrity | ⚠️          | ✅         | ❌                   | ✅          | ✅          | ✅        | ⚠️          | ✅                 | ⚠️                    | ✅                   | ⚠️                 | Targeted surface |
| `minecraft:painting`      | ✅          | ❌                      | ❌                          | ❌                            | ❌                    | ✅                               | ❌                               | ⚠️               | None                 | ✅          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ❌                 | ❌                    | ❌                   | ⚠️                 | Targeted surface |
| `minecraft:falling_block` | ✅          | ❌                      | ❌                          | ❌                            | ❌                    | ✅                               | ❌                               | ❌               | None                 | ⚠️          | ✅         | ❌                   | ❌          | ⚠️          | ⚠️        | ❌          | 🐛                 | ❌                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:ender_crystal` | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None                 | ❌          | ✅         | ❌                   | ❌          | ⚠️          | ⚠️        | ❌          | ⚠️                 | ❌                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:leash_knot`    | ✅          | ❌                      | ❌                          | ❌                            | ❌                    | ✅                               | ✅                               | ⚠️               | None                 | ✅          | ❌         | ❌                   | ❌          | ⚠️          | ❌        | ❌          | ❌                 | ❌                    | ❌                   | ✅                 | Rail             |
| `minecraft:chalkboard`    | ✅          | ✅                      | ✅                          | ✅                            | ✅                    | ✅                               | ✅                               | ✅               | Health               | ✅          | ✅         | ✅                   | ✅          | ✅          | ✅        | ✅          | ✅                 | ⚠️                    | ✅                   | ✅                 | Targeted surface |
| `minecraft:tripod_camera` | ❌          | ✅                      | ✅                          | ✅                            | ✅                    | ✅                               | ✅                               | ✅               | Health               | ❌          | ✅         | ❌                   | ✅          | ✅          | ❌        | ✅          | ✅                 | ⚠️                    | ✅                   | ✅                 | Targeted surface |

### Client Attributes
| Attribute                 | Client entity | Positional updates | Interpolated movement | Oriented | Shadow | Death effects | Step sounds |
|---------------------------|---------------|--------------------|-----------------------|----------|--------|---------------|-------------|
| `minecraft:tnt`           | ✅             | ✅                  | ❌                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:armor_stand`   | ✅             | ✅                  | ✅                     | ✅        | ❌      | ⚠️             | ✅           |
| `minecraft:painting`      | ❌             | ✅                  | ❓                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:falling_block` | ⚠️             | ❌                  | ❌                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:ender_crystal` | ✅             | ❌                  | ❌                     | ❌        | ⚠️      | ❌             | ❌           |
| `minecraft:leash_knot`    | ✅             | ✅                  | ❓                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:chalkboard`    | ✅             | ✅                  | ✅                     | ⚠️        | ✅      | ✅             | ✅           |
| `minecraft:tripod_camera` | ✅             | ✅                  | ✅                     | ✅        | ⚠️      | ✅             | ✅           |

### `minecraft:tnt`
* Stutters during any movement
	* `minecraft:conditional_bandwidth_optimization` cannot improve this.
* Hops slightly in a random direction when placed
* Explosive behavior not intrinsic: handled using data-driven component `minecraft:explode`
	* Using `from_explosion` event to detonate TNT more swiftly if triggered from a nearby explosion is not automatically handled via the runtime identifier. Only the vanilla `minecraft:tnt` entity responds to this.

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ❌                |                                                              |
| Configurable collision box      | ✅                |                                                              |
| Configurable block collision    | ✅                |                                                              |
| Configurable gravity            | ❌                | Always `true`                                                |
| Configurable entity pushability | ✅                |                                                              |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ✅                |                                                              |
| Hit points                      | None             |                                                              |
| Damageable                      | ❌                |                                                              |
| Flammable                       | ✅                |                                                              |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ❌                |                                                              |
| Selectable                      | ✅                |                                                              |
| Hookable                        | ✅                |                                                              |
| Targetable                      | ❌                |                                                              |
| Can be projectile               | ✅                |                                                              |
| Can move along rails            | ⚠️                | Decelerates swiftly<br>May get stuck on inclines due to stuttering movement |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ✅                |                                                              |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ❌     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ❌     |

### `minecraft:armor_stand`
* Uses structural integrity uniquely
	* May have declare `minecraft:health` and alter it via component groups
		* Will be serialized correctly into entity data
		* Will return the correct value in `q.health`
	* Doesn’t actually use health to determine when it breaks, working more like other entities that use structural integrity
		* Despawns in a single hit if attacked (including indirectly) by a player in creative mode
		* Destroyed in multiple hits if melee attacked by a player enough in survival mode
			* Uses a scaling destruction system based on frequency of attacks
				* At least two attacks are required.
				* If attacks are too spread out, the entity will never be destroyed.
				* The closer attacks are in time, the faster the entity will be destroyed.
				* Melee damage boosts are irrelevant.
		* Destroyed in a single hit if ranged attacked by a player in survival mode
		* Despawns immediately if blown up
* Has innate damage proxy overrides
	* Most damage sources can’t be applied.
	* `fire` may be applied, but the entity will not actually take damage by default
		* Can be overridden by a `minecraft:damage_sensor` trigger
	* `fire_tick` may be applied, and the entity will be damaged.
	* May be damaged and killed via effects
	* Generally takes at most `1` damage from the above damage sources in a single instance
		* However, will take full damage instantly from the `instant_harming` effect
	* Can’t respond to additional damage sources or amounts using `minecraft:damage_sensor` triggers
* Requires NBT editing to alter pose values
* Will not automatically hold equipment when interacted with by players

#### NBT Extensions
* `Pose`

#### Notable Queries
* `q.structural_integrity`
	* `1` by default; after ever being hit, set to `-10`.
	* Reset to `1` when reloading the world or when reloading the chunks the entity is in
* `q.hurt_time`
	* Normally `0`; when the entity is attacked by a player (even indirectly) in survival mode, instantly becomes and stays at `1` for 0.5 seconds before resetting to `0`
* `q.hurt_direction`
	* Starts at `1` and alternates between `1` and `-1` with each attack by a player (even indirectly) in survival mode

#### Hardcoded Variables
* `v.armor_stand.hurt_time`
	* Reflects `q.hurt_time`
* `v.armor_stand.pose_index`
	* Reflects NBT `Pose`’s `PoseIndex` integer tag
		* Able to use full scale of integer tag values, not just the poses handled by vanilla

#### Effects
* Plays sounds `mob.armor_stand.hit` when attacked and `mob.armor_stand.break` when broken
	* Doesn’t play `mob.armor_stand.break` when `/kill`-ed

#### Server Attributes
| Attribute                       | Value                | Additional Notes                                             |
|--------------------------------:|:--------------------:|--------------------------------------------------------------|
| Registered                      | ✅                    |                                                              |
| Configurable behaviors          | ✅                    |                                                              |
| Configurable collision box      | ✅                    |                                                              |
| Configurable block collision    | ✅                    |                                                              |
| Configurable gravity            | ✅                    |                                                              |
| Configurable entity pushability | ✅                    |                                                              |
| Configurable piston pushability | ✅                    |                                                              |
| Can be portaled                 | ✅                    |                                                              |
| Hit points                      | Structural integrity | Health still serialized and queryable; can be modified via component groups<br>Health not used for breaking |
| Damageable                      | ⚠️                    | Only damageable via fire sources and effects<br>Breaks immediately when exploded |
| Flammable                       | ✅                    |                                                              |
| Can be knocked back             | ❌                    |                                                              |
| Effectible                      | ✅                    |                                                              |
| Selectable                      | ✅                    |                                                              |
| Hookable                        | ✅                    |                                                              |
| Targetable                      | ⚠️                    | Cannot be damaged by targeting entity                        |
| Can be projectile               | ✅                    |                                                              |
| Can move along rails            | ⚠️                    | Bounces along rail, even when stopped<br>Decelerates swiftly |
| Automatically rides             | ✅                    |                                                              |
| Configurable loot               | ⚠️                    | Drops provided loot table when `/kill` is used on it<br>Drops an armor stand when destroyed (even indirectly) by a player in survival mode, except when destroyed by an explosion<br>Drops nothing otherwise |
| Spawn behavior                  | Targeted surface     |                                                              |

#### Client Attributes
| Attribute             | Value | Additional Notes                                             |
|----------------------:|:-----:|--------------------------------------------------------------|
| Client entity         | ✅     |                                                              |
| Positional updates    | ✅     |                                                              |
| Interpolated movement | ✅     |                                                              |
| Oriented              | ✅     |                                                              |
| Shadow                | ❌     |                                                              |
| Death effects         | ⚠️     | Only triggers via `/kill`, despawning about 0.2 seconds into the animation |
| Step sounds           | ✅     |                                                              |

### `minecraft:painting`
* Breaks when taking any damage
	* Only uses the top-leftmost 16 × 16 of the painting texture (`textures/painting/kz.png`) for showing broken particles
	* Plays `block.itemframe.break` sound when broken or killed
* Will break shortly after supporting block is removed or becomes invalid
* Will break after being teleported even if the anchored position is valid.
* `minecraft:damage_sensor`’s `deals_damage` field being `false` for paintings doesn’t prevent painting destruction

#### NBT Extensions
* `Motive`
* `Direction`
* `Dir`
	* May no longer be used

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ❌                |                                                              |
| Configurable collision box      | ❌                | Uses collision box sized according to the associated painting with a depth of `0.15625` |
| Configurable block collision    | ❌                | Always `false`                                               |
| Configurable gravity            | ❌                | Always `false`                                               |
| Configurable entity pushability | ✅                | Breaks when being pushed if `is_pushable` is `true`          |
| Configurable piston pushability | ❌                | Always breaks when pushed by a piston                        |
| Can be portaled                 | ⚠️                | By Nether portals, no<br>By End portals, yes                 |
| Hit points                      | None             |                                                              |
| Damageable                      | ✅                | Breaks when taking any damage<br><br>Cannot take gameplay fall or contact damage |
| Flammable                       | ✅                | Breaks immediately when on fire or in lava<br>Events/triggers don’t have time to catch being on fire |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ❌                |                                                              |
| Selectable                      | ❌                |                                                              |
| Hookable                        | ❌                | Breaks on hook attachment |
| Targetable                      | ❌                |                                                              |
| Can be projectile               | ❌                | Block collision always treated as `false` unless `stick_in_ground` is provided<br>Effectively unusable due to movement constraints |
| Can move along rails            | ❌                |                                                              |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ⚠️                | Drops specified loot when killed by `/kill`<br>Drops item frame if broken by environment or (even indirectly) by a player in survival, except when destroyed by an explosion<br>Drops nothing otherwise |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value | Additional Notes                                             |
|----------------------:|:-----:|--------------------------------------------------------------|
| Client entity         | ❌     | Renders as painting described by `Motive` NBT field<br>If associated painting is invalid or not present, will be invisible until reloading the world |
| Positional updates    | ✅     |                                                              |
| Interpolated movement | ❓     |                                                              |
| Oriented              | ❌     |                                                              |
| Shadow                | ❌     |                                                              |
| Death effects         | ❌     |                                                              |
| Step sounds           | ❌     |                                                              |

### `minecraft:falling_block`
* Places block upon collision with terrain
	* Block to be placed on collision with terrain determined by `FallingBlock` NBT field
		* If not available, the variant determines the placed block.
			* Unknown how to map the variant to a particular block
	* Cannot be used to render an entity as a particular block

#### NBT Extensions
* `FallingBlock`
* `Time`

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ❌                |                                                              |
| Configurable collision box      | ❌                | Always has width and height of `1`                         |
| Configurable block collision    | ❌                | Always `true`                                                |
| Configurable gravity            | ❌                | Always `true`                                                |
| Configurable entity pushability | ✅                |                                                              |
| Configurable piston pushability | ❌                | Always breaks on contact with a piston head                  |
| Can be portaled                 | ❌                |                                                              |
| Hit points                      | None             |                                                              |
| Damageable                      | ⚠️                | Unkillable from taking damage<br>Cannot take fall or contact damage<br>Despawns when taking gameplay explosion damage |
| Flammable                       | ✅                |                                                              |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ❌                |                                                              |
| Selectable                      | ⚠️                | When leashed, lead will be invisible, and positional mismatches will occur between server and client. |
| Hookable                        | ⚠️                | Attaches but cannot pull entity              |
| Targetable                      | ❌                |                                                              |
| Can be projectile               | 🐛                | Cannot be a projectile<br>Infrequently appears to shoot on the client, but isn’t actually shot on the server |
| Can move along rails            | ❌                |                                                              |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ✅                |                                                              |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value | Additional Notes                                             |
|----------------------:|:-----:|--------------------------------------------------------------|
| Client entity         | ⚠️     | Renders as given client entity and not block specified by NBT<br>Does not play particle or sound effects |
| Positional updates    | ❌     |                                                              |
| Interpolated movement | ❌     |                                                              |
| Oriented              | ❌     |                                                              |
| Shadow                | ❌     |                                                              |
| Death effects         | ❌     |                                                              |
| Step sounds           | ❌     |                                                              |

### `minecraft:ender_crystal`
* When summoned or placed in The End, sets the block at its position to `minecraft:fire` if possible
* The nearest `minecraft:ender_crystal` or entity using its runtime identifier to an Ender Dragon will heal it if the dragon is close enough.
	* A channeling beam is displayed from this entity to that dragon.
	* Can target and heal multiple dragons simultaneously if more than one would be present
	* A dragon can only be healed by one Ender crystal (or entity using its runtime identifier) at a time.
* Cannot be used to resurrect the Ender Dragon

#### NBT Extensions
* `BlockTargetX`, `BlockTargetY`, and `BlockTargetZ`
	* Serialized into entity data but unused by custom entities

#### Server Attributes
| Attribute                       | Value            | Additional Notes                          |
|--------------------------------:|:----------------:|-------------------------------------------|
| Registered                      | ✅                |                                           |
| Configurable behaviors          | ❌                |                                           |
| Configurable collision box      | ✅                |                                           |
| Configurable block collision    | ✅                |                                           |
| Configurable gravity            | ❌                | Always `false`                            |
| Configurable entity pushability | ❌                | Always `false`                            |
| Configurable piston pushability | ✅                |                                           |
| Can be portaled                 | ✅                |                                           |
| Hit points                      | None             |                                           |
| Damageable                      | ❌                |                                           |
| Flammable                       | ✅                |                                           |
| Can be knocked back             | ❌                |                                           |
| Effectible                      | ❌                |                                           |
| Selectable                      | ⚠️                | Lead attaches but cannot pull entity     |
| Hookable                        | ⚠️                | Attaches but cannot pull entity             |
| Targetable                      | ❌                |                                           |
| Can be projectile               | ⚠️                | Block collision always treated as `false` unless `stick_in_ground` is provided |
| Can move along rails            | ❌                |                                           |
| Automatically rides             | ❌                |                                           |
| Configurable loot               | ✅                |                                           |
| Spawn behavior                  | Targeted surface |                                           |

#### Client Attributes
| Attribute             | Value | Additional Notes                                             |
|----------------------:|:-----:|--------------------------------------------------------------|
| Client entity         | ✅     |                                                              |
| Positional updates    | ❌     |                                                              |
| Interpolated movement | ❌     |                                                              |
| Oriented              | ❌     |                                                              |
| Shadow                | ⚠️     | Size is fixed as if having a collision box width of `0.5` |
| Death effects         | ❌     |                                                              |
| Step sounds           | ❌     |                                                              |

### `minecraft:leash_knot`
* Must be in the block space of a type of fence block not to despawn
	* If not in a fence block, despawns automatically after at most 5 seconds without dropping loot.
* Despawns immediately when teleported, even if teleported to the block space of a fence block

#### Server Attributes
| Attribute                       | Value | Additional Notes                                             |
|--------------------------------:|:-----:|--------------------------------------------------------------|
| Registered                      | ✅     |                                                              |
| Configurable behaviors          | ❌     |                                                              |
| Configurable collision box      | ❌     | Always has width of `0.6875` and height of `0.5` |
| Configurable block collision    | ❌     | Always `false`                                               |
| Configurable gravity            | ❌     | Always `false`                                               |
| Configurable entity pushability | ✅     | Always despawns from being pushed if `is_pushable` is `true` |
| Configurable piston pushability | ✅     | Always despawns from being pushed if `is_pushable_by_piston` is `true` |
| Can be portaled                 | ⚠️     | By Nether portals, no<br>By End portals, yes                 |
| Hit points                      | None  |                                                              |
| Damageable                      | ✅     | Despawns immediately when damaged<br>Cannot take gameplay fall or contact damage |
| Flammable                       | ❌     | Despawns immediately if on fire or in lava                   |
| Can be knocked back             | ❌     |                                                              |
| Effectible                      | ❌     |                                                              |
| Selectable                      | ⚠️     | Only selectable for the sake of attacking or interacting. Naming and leashing are effectively prohibited; in both these cases, the entity despawns immediately and plays the sound effect `leashknot.break`. Additional interactions and base interacting behavior cannot be overridden with `minecraft:interact` `interactions`. |
| Hookable                        | ❌     | Despawns on hook attachment |
| Targetable                      | ❌     |                                                              |
| Can be projectile               | ❌     | Block collision always treated as `false` unless `stick_in_ground` is provided<br>Effectively unusable due to movement constraints |
| Can move along rails            | ❌     |                                                              |
| Automatically rides             | ❌     |                                                              |
| Configurable loot               | ✅     |                                                              |
| Spawn behavior                  | Rail  | Positioned one block above targeted rail                     |

#### Client Attributes
| Attribute             | Value | Additional Notes         |
|----------------------:|:-----:|--------------------------|
| Client entity         | ✅     |                          |
| Positional updates    | ✅     |                          |
| Interpolated movement | ❓     | Despawns when teleported |
| Oriented              | ❌     |                          |
| Shadow                | ❌     |                          |
| Death effects         | ❌     |                          |
| Step sounds           | ❌     |                          |

### `minecraft:chalkboard`
#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ✅                |                                                              |
| Configurable collision box      | ✅                |                                                              |
| Configurable block collision    | ✅                |                                                              |
| Configurable gravity            | ✅                |                                                              |
| Configurable entity pushability | ✅                |                                                              |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ✅                |                                                              |
| Hit points                      | Health           |                                                              |
| Damageable                      | ✅                |                                                              |
| Flammable                       | ✅                |                                                              |
| Can be knocked back             | ✅                |                                                              |
| Effectible                      | ✅                |                                                              |
| Selectable                      | ✅                |                                                              |
| Hookable                        | ✅                |                                                              |
| Targetable                      | ✅                |                                                              |
| Can be projectile               | ✅                |                                                              |
| Can move along rails            | ⚠️                | Bounces along rail, even when stopped<br>Decelerates swiftly |
| Automatically rides             | ✅                |                                                              |
| Configurable loot               | ✅                |                                                              |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value | Additional Notes                                             |
|----------------------:|:-----:|--------------------------------------------------------------|
| Client entity         | ✅     |                                                              |
| Positional updates    | ✅     |                                                              |
| Interpolated movement | ✅     |                                                              |
| Oriented              | ⚠️     | Only updated when reloading the world or leaving and reentering chunks |
| Shadow                | ✅     |                                                              |
| Death effects         | ✅     |                                                              |
| Step sounds           | ✅     |                                                              |

### `minecraft:tripod_camera`
* Cannot take be configured to take pictures like the vanilla `minecraft:tripod_camera` entity

#### Hardcoded Variables
* `v.isFlashing`
	* Always `0` since custom entities cannot be used to take pictures

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ❌                |                                                              |
| Configurable behaviors          | ✅                |                                                              |
| Configurable collision box      | ✅                |                                                              |
| Configurable block collision    | ✅                |                                                              |
| Configurable gravity            | ✅                |                                                              |
| Configurable entity pushability | ✅                |                                                              |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ✅                |                                                              |
| Hit points                      | Health           |                                                              |
| Damageable                      | ❌                | Despawns if attacked (even indirectly) by a player           |
| Flammable                       | ✅                |                                                              |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ✅                |                                                              |
| Selectable                      | ✅                |                                                              |
| Hookable                        | ❌                | Despawns and plays death particle effect and sound on hook attachment |
| Targetable                      | ✅                |                                                              |
| Can be projectile               | ✅                |                                                              |
| Can move along rails            | ⚠️                | Bounces along rail, even when stopped<br>Decelerates swiftly |
| Automatically rides             | ✅                |                                                              |
| Configurable loot               | ✅                |                                                              |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value | Additional Notes                                        |
|----------------------:|:-----:|---------------------------------------------------------|
| Client entity         | ✅     |                                                         |
| Positional updates    | ✅     |                                                         |
| Interpolated movement | ✅     |                                                         |
| Oriented              | ✅     |                                                         |
| Shadow                | ⚠️     | Size is fixed as if having a collision box width of `0.5` |
| Death effects         | ✅     |                                                         |
| Step sounds           | ✅     |                                                         |

## Damage & Status Effects
A few entity types are predominantly used for applying damage or status effects to other entities. Such behaviors can often be trivially imitated via server animation controllers and animations using `/damage` and `/effect`.

### Server Attributes
| Attribute                     | Registered | Configurable behaviors | Configurable collision box | Configurable block collision | Configurable gravity | Configurable entity pushability | Configurable piston pushability | Can be portaled | Hit points | Damageable | Flammable | Can be knocked back | Effectible | Selectable | Hookable | Targetable | Can be projectile | Can move along rails | Automatically rides | Configurable loot | Spawn behavior   |
|-------------------------------|------------|------------------------|----------------------------|------------------------------|----------------------|---------------------------------|---------------------------------|-----------------|------------|------------|-----------|---------------------|------------|------------|----------|------------|-------------------|----------------------|---------------------|-------------------|------------------|
| `minecraft:area_effect_cloud` | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None       | ❌          | ❌         | ❌                   | ❌          | ❌          | ❌        | ❌          | ❓                 | ❌                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:lightning_bolt`    | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None       | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ❌                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:evocation_fang`    | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ❌                               | ✅                               | ✅               | None       | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ❌                    | ❌                   | ✅                 | Targeted surface |

### Client Attributes
| Attribute                     | Client entity | Positional updates | Interpolated movement | Oriented | Shadow | Death effects | Step sounds |
|-------------------------------|---------------|--------------------|-----------------------|----------|--------|---------------|-------------|
| `minecraft:area_effect_cloud` | ✅             | ❌                  | ❌                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:lightning_bolt`    | ✅             | ❌                  | ❌                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:evocation_fang`    | ✅             | ❌                  | ❌                     | ❌        | ❌      | ❌             | ❌           |

### `minecraft:area_effect_cloud`
* Principally altered via manual configuration of NBT fields
	* Will instantly despawn if left unconfigured
* Applies effects given by `mobEffects` NBT field to all entities in a disc
* When the cloud’s radius or lifetime would dissipate, the entity will despawn

#### NBT Extensions
* `Duration`
* `DurationOnUse`
* `Radius`
* `InitialRadius`
* `RadiusOnUse`
* `RadiusPerTick`
* `RadiusChangeOnPickup`
* `PickupCount`
* `mobEffects`
* `PotionId`
	* Deprecated in favor of `mobEffects`
* `ReapplicationDelay`
* `ParticleId`
* `ParticleColor`
* `SpawnTick`
* `OwnerId`

#### Server Attributes
| Attribute                       | Value            | Additional Notes |
|--------------------------------:|:----------------:|------------------|
| Registered                      | ✅                |                  |
| Configurable behaviors          | ❌                |                  |
| Configurable collision box      | ✅                |                  |
| Configurable block collision    | ✅                |                  |
| Configurable gravity            | ❌                | Always `false`   |
| Configurable entity pushability | ❌                | Always `false`   |
| Configurable piston pushability | ✅                |                  |
| Can be portaled                 | ✅                |                  |
| Hit points                      | None             |                  |
| Damageable                      | ❌                |                  |
| Flammable                       | ❌                |                  |
| Can be knocked back             | ❌                |                  |
| Effectible                      | ❌                |                  |
| Selectable                      | ❌                |                  |
| Hookable                        | ❌                |                  |
| Targetable                      | ❌                |                  |
| Can be projectile               | ❓                |                  |
| Can move along rails            | ❌                |                  |
| Automatically rides             | ❌                |                  |
| Configurable loot               | ✅                |                  |
| Spawn behavior                  | Targeted surface |                  |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ❌     |
| Interpolated movement | ❌     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ❌     |

### `minecraft:lightning_bolt`
* Triggers a lightning effect on spawn
	* Instantly deals damage in a prism 9 long by 9 wide by 8 high, with the entity at the lateral center and vertical bottom of this prism
	* All eligible entities hit take 4 `lightning` damage and are set on fire for 7 fire ticks.
		* Block cover from above is irrelevant: the damage and fire ticks will happen to all entities in that prism even if they are totally isolated by blocks.
	* Won’t automatically ignite nearby flammable blocks
	* Causes the sky to flash
* Despawns after about a quarter to three-quarters of a second
	* Existence timer not handled by NBT

#### Effects
* `random.explode` played when spawned

#### Server Attributes
| Attribute                       | Value            | Additional Notes                          |
|--------------------------------:|:----------------:|-------------------------------------------|
| Registered                      | ✅                |                                           |
| Configurable behaviors          | ❌                |                                           |
| Configurable collision box      | ✅                |                                           |
| Configurable block collision    | ✅                |                                           |
| Configurable gravity            | ❌                | Always `false`                            |
| Configurable entity pushability | ❌                | Always `false`                            |
| Configurable piston pushability | ✅                |                                           |
| Can be portaled                 | ✅                |                                           |
| Hit points                      | None             |                                           |
| Damageable                      | ❌                |                                           |
| Flammable                       | ✅                |                                           |
| Can be knocked back             | ❌                |                                           |
| Effectible                      | ❌                |                                           |
| Selectable                      | ❌                |                                           |
| Hookable                        | ❌                |                                           |
| Targetable                      | ❌                |                                           |
| Can be projectile               | ⚠️                | Block collision always treated as `false` unless `stick_in_ground` is provided |
| Can move along rails            | ❌                |                                           |
| Automatically rides             | ❌                |                                           |
| Configurable loot               | ✅                |                                           |
| Spawn behavior                  | Targeted surface |                                           |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ❌     |
| Interpolated movement | ❌     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ❌     |

### `minecraft:evocation_fang`
* Instantly deals 5 `magic` damage to all eligible entities in its collision box when spawned
* Despawns 0.6 seconds after spawning
	* Uses the NBT compound tag `ActorLimitedLifetimeComponent` `internalComponent` to indicate despawn time
		* If `limitedLife` is invalid or `ActorLimitedLifetimeComponent` is not present, the entity will live for 0.6 seconds.
		* If `limitedLife` is not present, the entity will despawn after a server tick.

#### NBT Extensions
* `ActorLimitedLifetimeComponent` in `internalComponent`

#### Effects
* When spawned, emits dozens of instances of `minecraft:evocation_fang_particle` in a rectangular prism laterally the same as the specified collision box and vertically bounded from 1 to 2 blocks above the entity’s position.

#### Server Attributes
| Attribute                       | Value            | Additional Notes                          |
|--------------------------------:|:----------------:|-------------------------------------------|
| Registered                      | ✅                |                                           |
| Configurable behaviors          | ❌                |                                           |
| Configurable collision box      | ✅                |                                           |
| Configurable block collision    | ✅                |                                           |
| Configurable gravity            | ❌                | Always `false`                            |
| Configurable entity pushability | ❌                | Always `false`                            |
| Configurable piston pushability | ✅                |                                           |
| Can be portaled                 | ✅                |                                           |
| Hit points                      | None             |                                           |
| Damageable                      | ❌                |                                           |
| Flammable                       | ✅                |                                           |
| Can be knocked back             | ❌                |                                           |
| Effectible                      | ❌                |                                           |
| Selectable                      | ❌                |                                           |
| Hookable                        | ❌                |                                           |
| Targetable                      | ❌                |                                           |
| Can be projectile               | ⚠️                | Block collision always treated as `false` unless `stick_in_ground` is provided |
| Can move along rails            | ❌                |                                           |
| Automatically rides             | ❌                |                                           |
| Configurable loot               | ✅                |                                           |
| Spawn behavior                  | Targeted surface |                                           |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ❌     |
| Interpolated movement | ❌     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ❌     |

## Collectibles
Items and XP orbs are “picked up” by eligible nearby entities automatically. In reality, on acquisition, the entities are despawned, and data on the acquiring entities is updated. Such behaviors can be matched with `/give` and `/xp` in server animation controllers or animations.

### Server Attributes
| Attribute          | Registered | Configurable behaviors | Configurable collision box | Configurable block collision | Configurable gravity | Configurable entity pushability | Configurable piston pushability | Can be portaled | Hit points | Damageable | Flammable | Can be knocked back | Effectible | Selectable | Hookable | Targetable | Can be projectile | Can move along rails | Automatically rides | Configurable loot | Spawn behavior   |
|--------------------|------------|------------------------|----------------------------|------------------------------|----------------------|---------------------------------|---------------------------------|-----------------|------------|------------|-----------|---------------------|------------|------------|----------|------------|-------------------|----------------------|---------------------|-------------------|------------------|
| `minecraft:item`   | ✅          | ❌                      | ❌                          | ❌                            | ❌                    | ❌                               | ❌                               | ✅               | Item       | ❌          | ⚠️         | ❌                   | ❌          | ❌          | ❌        | ❌          | ❓                 | ⚠️                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:xp_orb` | ✅          | ❌                      | ✅                          | ❌                            | ❌                    | ❌                               | ✅                               | ✅               | None       | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ❌                    | ❌                   | ✅                 | Targeted surface |

### Client Attributes
| Attribute          | Client entity | Positional updates | Interpolated movement | Oriented | Shadow | Death effects | Step sounds |
|--------------------|---------------|--------------------|-----------------------|----------|--------|---------------|-------------|
| `minecraft:item`   | ❌             | ✅                  | ✅                     | ❌        | ⚠️      | ❌             | ❌           |
| `minecraft:xp_orb` | ✅             | ❌                  | ❌                     | ❌        | ❌      | ❌             | ❌           |

### `minecraft:item`
* Uses `Health` NBT field to manage effective health
* Can be picked up by eligible entities, giving them the item or block specified by the NBT compound `Item` tag
	* Despawns when picked up
	* Used name in the user interface will be the localized value of this item or block
	* Custom entity not retained in inventories after being picked up; when dropped again, will be an instance of `minecraft:item`
* Requires the NBT compound `Item` tag
	* Instantly despawns if not present
* Despawns when its NBT short tag `Age` reaches `6000`
* Can be absorbed by hoppers and hopper minecarts
* Will automatically stack (if appropriate) with other `minecraft:item` entities or entities using that runtime identifier
	* When stacking, the combined item counts will be merged into one of the two merging stacks; the other entity will despawn
* For non-players, pick up range is determined by the behavior being used to pick up the items.
* For players, the pick up range varies according to their collision box size, approximately the sum of:
	* Half the item collision box (0.125)
	* Half the player collision box (0.3 by default)
	* A block of extra padding (1)
* The item collision box size itself cannot be modified, for pick up or any other purposes. The pick up range is cubic in form, so the above sum (1.425 by default) reflects half the side length of a cube centered on the item’s server position.

#### NBT Extensions
* `Item`
* `Age`
* `Health`

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ❌                |                                                              |
| Configurable collision box      | ❌                | Always has width and height of `0.25`     |
| Configurable block collision    | ❌                | Always `true`                                                |
| Configurable gravity            | ❌                | Always `true`                                                |
| Configurable entity pushability | ❌                | Always `false`                                               |
| Configurable piston pushability | ❌                | Always `true`                                                |
| Can be portaled                 | ✅                |                                                              |
| Hit points                      | Item             |                                                              |
| Damageable                      | ❌                |                                                              |
| Flammable                       | ⚠️                | Despawns if on fire or in lava<br>Watchers trigger before despawning. |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ❌                |                                                              |
| Selectable                      | ❌                |                                                              |
| Hookable                        | ❌                |                                                              |
| Targetable                      | ❌                |                                                              |
| Can be projectile               | ❓                |                                                              |
| Can move along rails            | ⚠️                | Bounces along rail, even when stopped<br>Decelerates swiftly |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ✅                |                                                              |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value | Additional Notes                                             |
|----------------------:|:-----:|--------------------------------------------------------------|
| Client entity         | ❌     | If representing an item, uses texture mesh from associated icon<br>If representing a block, uses block model |
| Positional updates    | ✅     |                                                              |
| Interpolated movement | ✅     |                                                              |
| Oriented              | ❌     |                                                              |
| Shadow                | ⚠️     | Size is fixed as if having a collision box width of `0.25`  |
| Death effects         | ❌     |                                                              |
| Step sounds           | ❌     |                                                              |

### `minecraft:xp_orb`
* Attracted to and absorbed by players on contact
	* Only applies to real players; disregards other entities with the `player` family or `minecraft:player` runtime identifier

#### NBT Extensions
* `experience value`
	* Sets the orb’s experience worth to absorbing players

#### Notable Queries
* `q.texture_frame_index`
	* Returns integers inclusively between `0` and `10` depending on the value of the NBT tag `experience value`:

| `experience value` minimum | `experience value` maximum | Return value |
|----------------------------|----------------------------|--------------|
| `-2147483648`              | `2`                        | `0`          |
| `3`                        | `6`                        | `1`          |
| `7`                        | `16`                       | `2`          |
| `17`                       | `36`                       | `3`          |
| `37`                       | `72`                       | `4`          |
| `73`                       | `148`                      | `5`          |
| `149`                      | `306`                      | `6`          |
| `307`                      | `616`                      | `7`          |
| `617`                      | `1236`                     | `8`          |
| `1237`                     | `2476`                     | `9`          |
| `2477`                     | `2147483647`               | `10`         |

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ❌                |                                                              |
| Configurable collision box      | ✅                | Affects XP absorption range                                  |
| Configurable block collision    | ❌                | Always `true`                                                |
| Configurable gravity            | ❌                | Always `true`                                                |
| Configurable entity pushability | ❌                | Always `false`                                               |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ✅                |                                                              |
| Hit points                      | None             |                                                              |
| Damageable                      | ❌                |                                                              |
| Flammable                       | ✅                | Instantly despawns<br>Watchers trigger before despawning.    |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ❌                |                                                              |
| Selectable                      | ❌                |                                                              |
| Hookable                        | ❌                |                                                              |
| Targetable                      | ❌                |                                                              |
| Can be projectile               | ⚠️                | Block collision always treated as `true`<br><br>Moves erratically when `minecraft:projectile` is active |
| Can move along rails            | ❌                |                                                              |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ✅                |                                                              |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value | Additional Notes                                             |
|----------------------:|:-----:|--------------------------------------------------------------|
| Client entity         | ✅     |                                                              |
| Positional updates    | ❌     | Often appears to follow the player to be absorbed even if the entity has a different position on the server |
| Interpolated movement | ❌     |                                                              |
| Oriented              | ❌     |                                                              |
| Shadow                | ❌     |                                                              |
| Death effects         | ❌     |                                                              |
| Step sounds           | ❌     |                                                              |

## Visual Effects
A few entities exclusively handle visual effects that may or may not act as gameplay signals to players. Such effects can be performed using a generic client entity.

### Server Attributes
| Attribute                        | Registered | Configurable behaviors | Configurable collision box | Configurable block collision | Configurable gravity | Configurable entity pushability | Configurable piston pushability | Can be portaled | Hit points | Damageable | Flammable | Can be knocked back | Effectible | Selectable | Hookable | Targetable | Can be projectile | Can move along rails | Automatically rides | Configurable loot | Spawn behavior   |
|----------------------------------|------------|------------------------|----------------------------|------------------------------|----------------------|---------------------------------|---------------------------------|-----------------|------------|------------|-----------|---------------------|------------|------------|----------|------------|-------------------|----------------------|---------------------|-------------------|------------------|
| `minecraft:fireworks_rocket`     | ✅          | ❌                      | ✅                          | ✅                            | ❌                    | ✅                               | ✅                               | ✅               | None       | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ✅                 | ⚠️                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:eye_of_ender_signal`  | ✅          | ❌                      | ❌                          | ❌                            | ❌                    | ❌                               | ✅                               | ✅               | None       | ❌          | ✅         | ❌                   | ❌          | ❌          | ❌        | ❌          | ⚠️                 | ✅                    | ❌                   | ✅                 | Targeted surface |
| `minecraft:elder_guardian_ghost` | ✅          | ⚠️                      | ✅                          | ✅                            | ✅                    | ✅                               | ✅                               | ✅               | Health     | ✅          | ✅         | ✅                   | ✅          | ✅          | ✅        | ✅          | ✅                 | ✅                    | ✅                   | ✅                 | Targeted surface |

### Client Attributes
| Attribute                        | Client entity | Positional updates | Interpolated movement | Oriented | Shadow | Death effects | Step sounds |
|----------------------------------|---------------|--------------------|-----------------------|----------|--------|---------------|-------------|
| `minecraft:fireworks_rocket`     | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ❌           |
| `minecraft:eye_of_ender_signal`  | ✅             | ✅                  | ✅                     | ❌        | ❌      | ❌             | ✅           |
| `minecraft:elder_guardian_ghost` | ✅             | ✅                  | ✅                     | ✅        | ✅      | ✅             | ❌           |

### `minecraft:fireworks_rocket`
* Has intrinsic vertical acceleration upward
	* Can be mitigated by teleporting the entity every server tick.
* Despawns approximately 1.5 seconds after being spawned, dropping no loot.
	* Configurable via `Life` and `Lifetime` NBT tags

#### NBT Extensions
* `Life`
* `Lifetime`

#### Effects
* Plays sound `firework.launch` when summoned, assuming `Life` NBT tag hasn’t been configured to be any value other than `0`
* Plays particle effect similar to `minecraft:sparkler_emitter` for approximately the first 8 seconds either the entity is present after being spawned or when the entity is reloaded with the world
	* Manually emits approximately 4 particles per second over this time span
	* Won’t replay particles when unloading and reloading chunks
	* Cancelled early if the entity would die or despawn
	* Although similar in behavior to the `minecraft:sparkler_emitter` definition, changing that effect definition is not reflected in these particles. Presumably, the effect is actually hardcoded.

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ❌                |                                                              |
| Configurable collision box      | ✅                |                                                              |
| Configurable block collision    | ✅                |                                                              |
| Configurable gravity            | ❌                | Always `false`                                               |
| Configurable entity pushability | ✅                |                                                              |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ✅                |                                                              |
| Hit points                      | None             |                                                              |
| Damageable                      | ❌                |                                                              |
| Flammable                       | ✅                |                                                              |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ❌                |                                                              |
| Selectable                      | ❌                |                                                              |
| Hookable                        | ❌                |                                                              |
| Targetable                      | ❌                |                                                              |
| Can be projectile               | ✅                | Initial velocity from `minecraft:projectile` used in conjunction with innate vertical acceleration |
| Can move along rails            | ⚠️                | Bounces along rail, even when stopped                        |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ✅                |                                                              |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ❌     |

### `minecraft:eye_of_ender_signal`
* Attempts to move to the world origin (0, 0, 0) in any dimension over a fixed duration of 4.25 seconds, exploding with effects and despawning at the end.
	* Prioritizes lateral movement; when nearing the origin laterally, will turn to vertically approach its target
	* When spawned from far away from the origin, it may move so fast it seems to teleport from its spawn location.
	* Can be overridden by teleporting the entity every server tick

#### Effects
* Any time before exploding, emits `minecraft:basic_portal_particle` approximately a dozen times per second at random locations laterally within about half a block of the entity’s position
* When reaching the end of its natural lifetime, plays the sound `block.itemframe.break` and the particle effect `minecraft:eyeofender_death_explode_particle`

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ❌                |                                                              |
| Configurable collision box      | ❌                | Always has `width` and `height` of `1`                       |
| Configurable block collision    | ❌                | Always `false`                                               |
| Configurable gravity            | ❌                | Always `false`                                               |
| Configurable entity pushability | ❌                | Always `false`                                               |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ✅                |                                                              |
| Hit points                      | None             |                                                              |
| Damageable                      | ❌                |                                                              |
| Flammable                       | ✅                |                                                              |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ❌                |                                                              |
| Selectable                      | ❌                |                                                              |
| Hookable                        | ❌                |                                                              |
| Targetable                      | ❌                |                                                              |
| Can be projectile               | ⚠️                | Majority of projectile functionality masked by innate movement<br>Will accelerate movement towards world origin |
| Can move along rails            | ✅                |                                                              |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ✅                |                                                              |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ❌     |
| Shadow                | ❌     |
| Death effects         | ❌     |
| Step sounds           | ✅     |

### `minecraft:elder_guardian_ghost`
The core behavior of `minecraft:elder_guardian_ghost` (applying mining fatigue and triggering visual and sound effects to alert the player) is not automatically handled by this runtime identifier.

* Flops around randomly when not in water
	* To be considered in water, any portion of the collision box must be in water, flowing water, or bubble columns
		* Rain ignored for this collision detection
	* Doesn’t require static movement components (i.e., `minecraft:movement`) for this to occur
	* Takes unconditional behavioral priority, meaning custom behaviors when not in water cannot be used.
	* Can (mostly) be disabled by teleporting the entity every server tick
	* Does not occur when being launched as a projectile, even if launched outside water
		* Will, however, begin flopping if `stick_in_ground` is `true` when it would get stuck in the ground after being shot
* Will not automatically despawn after being stuck in the ground when shot as a projectile

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ⚠️                | Ignores custom behaviors when not in water: will always flop randomly |
| Configurable collision box      | ✅                |                                                              |
| Configurable block collision    | ✅                |                                                              |
| Configurable gravity            | ✅                |                                                              |
| Configurable entity pushability | ✅                |                                                              |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ✅                |                                                              |
| Hit points                      | Health           |                                                              |
| Damageable                      | ✅                |                                                              |
| Flammable                       | ✅                |                                                              |
| Can be knocked back             | ✅                |                                                              |
| Effectible                      | ✅                |                                                              |
| Selectable                      | ✅                |                                                              |
| Hookable                        | ✅                |                                                              |
| Targetable                      | ✅                |                                                              |
| Can be projectile               | ✅                |                                                              |
| Can move along rails            | ✅                |                                                              |
| Automatically rides             | ✅                |                                                              |
| Configurable loot               | ✅                |                                                              |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ✅     |
| Shadow                | ✅     |
| Death effects         | ✅     |
| Step sounds           | ❌     |

## Other
### Server Attributes
| Attribute          | Registered | Configurable behaviors | Configurable collision box | Configurable block collision | Configurable gravity | Configurable entity pushability | Configurable piston pushability | Can be portaled | Hit points | Damageable | Flammable | Can be knocked back | Effectible | Selectable | Hookable | Targetable | Can be projectile | Can move along rails | Automatically rides | Configurable loot | Spawn behavior   |
|--------------------|------------|------------------------|----------------------------|------------------------------|----------------------|---------------------------------|---------------------------------|-----------------|------------|------------|-----------|---------------------|------------|------------|----------|------------|-------------------|----------------------|---------------------|-------------------|------------------|
| `minecraft:npc`    | ✅          | ✅                      | ✅                          | ✅                            | ✅                    | ✅                               | ✅                               | ✅               | Health     | ❌          | ✅         | ⚠️                   | ❌          | ✅          | ❌        | ✅          | ✅                 | ⚠️                    | ❌                   | ❌                 | Targeted surface |
| `minecraft:agent`  | ❌          | ❌                      | ⚠️                          | ❌                            | ❌                    | ❌                               | ✅                               | ✅               | Health     | ✅          | ✅         | ❌                   | ❌          | ⚠️          | ⚠️        | ✅          | ❌                 | ✅                    | ❌                   | ⚠️                 | Targeted surface |
| `minecraft:shield` | ✅          | ✅                      | ✅                          | ✅                            | ✅                    | ✅                               | ✅                               | ✅               | Health     | ✅          | ✅         | ✅                   | ✅          | ✅          | ✅        | ✅          | ✅                 | ⚠️                    | ✅                   | ✅                 | Targeted surface |

### Client Attributes
| Attribute          | Client entity | Positional updates | Interpolated movement | Oriented | Shadow | Death effects | Step sounds |
|--------------------|---------------|--------------------|-----------------------|----------|--------|---------------|-------------|
| `minecraft:npc`    | ✅             | ✅                  | ✅                     | ✅        | ✅      | ✅             | ✅           |
| `minecraft:agent`  | ⚠️             | ✅                  | ❓                     | ⚠️        | ⚠️      | ✅             | ✅           |
| `minecraft:shield` | ✅             | ✅                  | ✅                     | ⚠️        | ✅      | ✅             | ✅           |

### `minecraft:npc`
* Actual NPC behavior is handled via the universal `minecraft:npc` component.

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ✅                |                                                              |
| Configurable collision box      | ✅                |                                                              |
| Configurable block collision    | ✅                |                                                              |
| Configurable gravity            | ✅                |                                                              |
| Configurable entity pushability | ✅                |                                                              |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ✅                |                                                              |
| Hit points                      | Health           |                                                              |
| Damageable                      | ❌                | Can be damaged via `/damage` by a player in creative mode, causing the entity to despawn |
| Flammable                       | ✅                |                                                              |
| Can be knocked back             | ⚠️                | Can be knocked back by explosions but not entity attacks     |
| Effectible                      | ❌                | `/effect` erroneously indicate success                      |
| Selectable                      | ✅                |                                                              |
| Hookable                        | ❌                |                                                              |
| Targetable                      | ✅                |                                                              |
| Can be projectile               | ✅                |                                                              |
| Can move along rails            | ⚠️                | Bounces along rail, even when stopped<br>Decelerates swiftly |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ❌                | Unlike all other runtime identifiers, never drops loot, even with `/kill` or when colliding when using `minecraft:projectile`’s `remove_on_hit` |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value |
|----------------------:|:-----:|
| Client entity         | ✅     |
| Positional updates    | ✅     |
| Interpolated movement | ✅     |
| Oriented              | ✅     |
| Shadow                | ✅     |
| Death effects         | ✅     |
| Step sounds           | ✅     |

### `minecraft:agent`
* Always set in the lateral center and vertical bottom of a block space.
	* Teleportation values are rounded to the nearest block to conform to this. Teleportations must therefore move the entity at least 0.5 blocks along any axis to move at all.
		* Teleportations not matching this condition still indicate command success.
* Has special naming considerations, allowing naming even without `minecraft:nameable`
	* If `minecraft:nameable` is not active, `allow_name_tag_renaming` is considered as `false` and `always_show` is considered as `true`.
	* If `minecraft:nameable` is active, `always_show` may be overridden, but `allow_name_tag_renaming` cannot be.
	* On being owned, is named `§9Player.Agent`, where `Player` is the name of the owning player
* Can only be used as a player's actual agent through the use of an NPC, the `/execute` command, and the `/agent` command, you can put this command into an npc button commands to make your agent turn left or to spawn in an agent if you don't already have one: "/execute as @initiator run /agent turn left", this command only works when run by an NPC. 

#### Hardcoded Variables
All variables are fixed due to custom entities not being able to use core agent functionality.
* `v.agent.swinganimationtick`
	* Always `0`
* `v.agent.ishovering`
	* Always `0`
* `v.agent.swinganimationduration`
	* Always `6`
* `v.agent.easein`
	* Always `0`
* `v.agent.movespeedscalar`
	* Always `1`

#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ❌                |                                                              |
| Configurable behaviors          | ❌                |                                                              |
| Configurable collision box      | ⚠️                | If unowned, yes<br>If owned, always has width of `0.75` and height of `0.5` |
| Configurable block collision    | ❌                | Always `false`                                               |
| Configurable gravity            | ❌                | Always `false`                                               |
| Configurable entity pushability | ❌                | Always `false`                                               |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ✅                |                                                              |
| Hit points                      | Health           |                                                              |
| Damageable                      | ✅                | Can never be damaged through attacks in game, only by the environment or `/damage` |
| Flammable                       | ✅                |                                                              |
| Can be knocked back             | ❌                |                                                              |
| Effectible                      | ❌                | Commands erroneously indicate successful application         |
| Selectable                      | ⚠️                | If unowned, no<br>If owned, yes<br>Has special naming considerations<br>Is never leashable |
| Hookable                        | ⚠️                | If unowned, not hookable<br>If owned, attaches but cannot pull entity |
| Targetable                      | ✅                |                                                              |
| Can be projectile               | ❌                |                                                              |
| Can move along rails            | ✅                | Decelerates swiftly                                          |
| Automatically rides             | ❌                |                                                              |
| Configurable loot               | ⚠️                | If unowned, no<br>If owned, yes                              |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value | Additional Notes                                             |
|----------------------:|:-----:|--------------------------------------------------------------|
| Client entity         | ⚠️     | Model only rendered if owned<br>Particle and sound effects always trigger. |
| Positional updates    | ✅     |                                                              |
| Interpolated movement | ❓     |                                                              |
| Oriented              | ⚠️     | Will quickly automatically reorient to face the nearest cardinal direction on both the server and the client |
| Shadow                | ⚠️     | If unowned, no<br>If owned, yes                              |
| Death effects         | ✅     |                                                              |
| Step sounds           | ✅     |                                                              |

### `minecraft:shield`
#### Server Attributes
| Attribute                       | Value            | Additional Notes                                             |
|--------------------------------:|:----------------:|--------------------------------------------------------------|
| Registered                      | ✅                |                                                              |
| Configurable behaviors          | ✅                |                                                              |
| Configurable collision box      | ✅                |                                                              |
| Configurable block collision    | ✅                |                                                              |
| Configurable gravity            | ✅                |                                                              |
| Configurable entity pushability | ✅                |                                                              |
| Configurable piston pushability | ✅                |                                                              |
| Can be portaled                 | ✅                |                                                              |
| Hit points                      | Health           |                                                              |
| Damageable                      | ✅                |                                                              |
| Flammable                       | ✅                |                                                              |
| Can be knocked back             | ✅                |                                                              |
| Effectible                      | ✅                |                                                              |
| Selectable                      | ✅                |                                                              |
| Hookable                        | ✅                |                                                              |
| Targetable                      | ✅                |                                                              |
| Can be projectile               | ✅                |                                                              |
| Can move along rails            | ⚠️                | Bounces along rail, even when stopped<br>Decelerates swiftly |
| Automatically rides             | ✅                |                                                              |
| Configurable loot               | ✅                |                                                              |
| Spawn behavior                  | Targeted surface |                                                              |

#### Client Attributes
| Attribute             | Value | Additional Notes                                             |
|----------------------:|:-----:|--------------------------------------------------------------|
| Client entity         | ✅     |                                                              |
| Positional updates    | ✅     |                                                              |
| Interpolated movement | ✅     |                                                              |
| Oriented              | ⚠️     | Only updated when reloading the world or leaving and reentering chunks |
| Shadow                | ✅     |                                                              |
| Death effects         | ✅     |                                                              |
| Step sounds           | ✅     |                                                              |

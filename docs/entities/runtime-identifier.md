---
title: Runtime Identifiers
category: Documentation
---

`runtime_identifier` is an optional parameter that sits inside the description of the entity's behavior file, and is used to imitate a vanilla entity's hard-coded elements.
It accepts Vanilla Minecraft identifiers, like `minecraft:shulker`.

<CodeHeader>Behavior Entity Description</CodeHeader>

```json
"description": {
    "identifier": "wiki:my_box",
    "runtime_identifier": "minecraft:shulker", // This is the runtime. It will add hard-coded behaviors from Shulker to this entity.
    "is_spawnable": true,
    "is_summonable": true,
    "is_experimental": false
}
```

:::tip
It's important to remember that `runtime_identifier` will only parse the _hard-coded properties of an entity_. This means that using a 100% datadriven mob as the Runtime Identifier will not add any new properties to your entity. Additionally, some entity runtimes may overwrite properties found in datadriven components even if they are added in the components section, such as the collision box size for the shulker entity.
:::

:::warning
Not every runtime id/effect is mentioned here. Try experimenting yourself to find new runtime id/effects and also consider adding them here.
:::

## Known runtime-identifier effects:

-   All runtime ID change name of entity to one which runtime ID's entity it is using

### minecraft:area_effect_cloud

-   Breaks the entity.

---

### minecraft:armor_stand

-   Disables entity shadows.
-   Punching the entity will cause it to instantly despawn.
-   Equipment placeable on/removable from entity.
-   Makes the entity drop an armor stand item on death.

---

### minecraft:arrow

-   Adds face to player animation to projectile entity.
-   Disables death animation, sound, and particles.
-   Makes entity's shadow small, but it doesn't make it disappear.
-   Cannot be interacted with.
-   If spawned through an egg or /summon command, gives the player an arrow when the player comes into contact with the entity, then removes itself.
-   Travel physics and knockback dealing similar to that of an arrow.

---

### minecraft:axolotl
-   Doesn't affect any swimming/movement/gravitational behavior.
-   Same case as tropical fish, different variant and mark variant values give a different bucket name, such as `Bucket of Adult Leucistic Axolotl` or `Bucket of Baby Yellow Axolotl`.
Age: Adult, Baby
Color Variant: Leucistic, Wild, Yellow, Cyan, Blue.

---

### minecraft:bee

-   Adds bee sounds to entity.

---

### minecraft:blaze

-   Adds blaze burning sound effect and particles.
-   Entity will fly like blaze (even if you don't have fly behavior).

---

### minecraft:boat

-   Adds the pocket boat UI when ridden.
-   Prevents the entity from rotating.
-   Solid, boat shaped hitbox.

---

### minecraft:chest_minecart

-   Breaks the entity.
-   Punching entity will make it despawn.
-   Spawns strangely.
-   Drops chest and minecart.

---

### minecraft:chicken

-   Breaks some of the animations.
-   Updates move speed.
-   Entity will fall slowly but still receives fall damage.
-   Spawns without gear (if it was).

---

### minecraft:cod

-   Makes entity flop when not in water.
-   Interacting with bucket of water will give you a bucket of cod, but when the bucket of cod is placed, it will place bucketed entity instead of cod.
-   Gives the entity special swimming and gravitational behavior.

---

### minecraft:command_block_minecart

-   Breaks the entity.
-   Punching entity will make it despawn.
-   Spawns strangely.
-   Drops minecart.

---

### minecraft:cow

-   Breaks some of the animations.
-   Updates move speed.
-   Spawns without gear (if it was).

---

### minecraft:dolphin

-   Adds `minecraft:movement.dolphin` component.

---

### minecraft:donkey

-  Changes texture, model and animations to the donkey's one.

---

### minecraft:dragon_fireball

-   Completely breaks your entity.
-   Emits dragon fireball trail particle.

---

### minecraft:egg

-   Adds face to player animation to projectile entity.
-   Breaks the entity.
-   When spawning such entity using its spawn egg, it will spawn at player's position rather than where you place it. It will also look at the sky.

---

### minecraft:elder_guardian

-   Changes texture, model and animations to the elder guardian's one.
-   Changes some of the behavior.

---

### minecraft:ender_crystal

-   The entity will stick to the center of the block it's spawned in.
-   Unless teleported, the entity will always maintain its positions.
-   Can be placed on any surface.
-   Will always be pushable through by other entities.
-   Cannot be configured to receive damage.
-   Cannot change the direction it faces.
-   Can revive the Ender Dragon.
-   Will be spawned with fire.

---

### minecraft:ender_dragon

-   Adds the Ender Dragon death effect to the entity.
-   Inherits Ender Dragon hitbox.
-   Destroys blocks within hitbox, including blocks below the entity. To prevent it from falling to bedrock either, add a indutructible block below it, remove gravity from the entity or disable the `mobGriefing` gamerule.
-   Damages players within 2 blocks of hitbox.
-   Increases distance it is rendered.
-   Only able to be killed using /kill.

---

### minecraft:ender_pearl

-   Breaks the behavior of entity.
-   Summons particles when entity receives damage.

---

### minecraft:endermite

-   Summons particles when entity receives damage.
-   Causes rotation glitch.
-   Breaks some of the animations.

---

### minecraft:evocation_fang

-   Damages entities on contact.
-   Disables collision at all.

---

### minecraft:falling_block

-   Breaks the entity also makes it fall.
-   When entity touches ground, it despawns with no animations at all. Just drops acacia button.
-   Removes the ability to have effects.

### minecraft:horse

-   Changes texture, model and animations to the horse's one.

---


### minecraft:iron_golem

-   Allows launching attack (attacks deal increased knockback with a vertical amplification).
-   Speeds up arm and leg animation (can be fixed manually, ~1/4 speed).
-   May interact poorly with village/villager logic.

---

### minecraft:llama_spit

- Adds llama spit's particles

---

### minecraft:minecart

-   Disables entity shadow.
-   Makes the entity drop a minecart on death.
-   Prevents the entity from rotating.

---

### minecraft:panda

-   Allows `query.is_grazing` and `query.sit_mount` to function with the `minecraft:behavior.random_sitting` component.

---

### minecraft:parrot

-   Makes the wing flap animation able to work.
-   Makes the mob fall slowly.
-   Makes it dance to music discs.

---

### minecraft:piglin

-   Allows `minecraft:celebrate_hunt` to function (which activates query.is_celebrating).

---

### minecraft:player

-   Activates `query.movement_direction`.

---

### minecraft:pufferfish

-   Makes entity flop when not in water.
-   Interacting with bucket of water will give you a bucket of pufferfish, but when the bucket of pufferfish is placed, it will place bucketed entity instead of pufferfish.
-   Gives the entity special swimming and gravitational behavior.

---

### minecraft:salmon

-   Makes entity flop when not in water.
-   Interacting with bucket of water will give you a bucket of salmon, but when the bucket of salmon is placed, it will place bucketed entity instead of salmon.
-   Gives the entity special swimming and gravitational behavior.

---

### minecraft:sheep

-   Allows `query.is_grazing` to function with the `behavior.eat_block` component.

---

### minecraft:shulker

Perfect for imitating a block, as long as the player is in Adventure Mode.

-   A solid collision box of 1x1x1.
-   The entity will stick to the center of the block it's spawned in.
-   If the block it's attached to is removed, the entity will teleport to another unobstructed location nearby.
-   If the entity is spawned on a non-full block (e.g. bed, slab, etc...), it will teleport to another unobstructed location nearby.
-   The solid collision box's width and height cannot be changed.

---

### minecraft:shulker_bullet

-   The entity will leave a trail of `minecraft:shulker_bullet` particles.

---

### minecraft:slime

-   The entity will create slime particles when falling.

---

### minecraft:snowball

-   Removes hitbox.
-   You can't interact with entity anymore.
-   Spawns at player's head.
-   Entity ignores gravity.
-   Removes entity shadow.
-   Entity only faces South.
-   Cannot make step sounds.

---

### minecraft:spider

-   Allows cobwebs to not slow down entity.

---

### minecraft:skeleton

-   Makes the entity receive damage from Healing effect, heal from Instant Damage effect and become immune to Regeneration and Poison effect.
-   Makes the entity receive increased damage from weapons with Smite enchantment.
-   Inflicts Wither status effect with both melee and ranged attacks if Variant is 1 or greater.

---

### minecraft:stray

-   Makes the entity receive damage from Healing effect, heal from Instant Damage effect and become immune to Regeneration and Poison effect.
-   Makes the entity receive increased damage from weapons with Smite enchantment.
-   Makes entity do not receive freezing damage.

---

### minecraft:squid

-   Allows to use special behavior components (see squid.json).
-   Emits ink particles when entity receives damage.

---

### minecraft:thrown_trident

-   Adds face to player animation to projectile entity.
-   Disables death animation, sound, and particles.
-   Makes entity's shadow small, but it doesn't make it disappear.
-   Cannot be interacted with.
-   Travel physics and knockback dealing similar to that of a thrown trident.

---

### minecraft:tropicalfish

-   Makes entity flop when not in water.
-   Gives the entity special swimming and gravitational behavior.
-   When right clicked with a bucket of water it gives you a bucket of tropical fish. If the entity doesn't have any minecraft:variant, minecraft:mark_variant, minecraft:color and minecraft:color2, it sets the name to White Kob, which is (probably) the 0 variant of tropical fish. If one or more of the components listed above is applied then it'll change the name of the bucket to something else (and that bucket places the entity, not a tropical fish with that name/data value).

---

### minecraft:wither_skull_dangerous

-   Makes the entity drop a wither rose on death.
-   Any entity killed by the entity will have a wither rose placed where it dies. Strangely, zombies seem to drop the wither rose instead of having it placed at the spot they die at.
-   Makes the entity constantly generate particles(the identifier of the particles it generates is `minecraft:basic_smoke_particle`).
-   Makes the entity unaffected by gravity(this seems to cause entities with `minecraft:projectile` to move in a straight line).
-   Prevents the entity from taking damage.
-   only works for entities with no ai goals(so it's only useful for dummy entities and projectiles).

---

### minecraft:xp_orb

-   Disables collision at all
-   On contact with player increases xp

### minecraft:zombie

-   Makes the entity receive damage from Healing effect, heal from Instant Damage effect and become immune to Regeneration and Poison effect.
-   Makes the entity receive increased damage from weapons with Smite enchantment.

---

### minecraft:wither

-   Explodes on death.

---

---
title: Runtime Identifiers
---

`runtime_identifier` is an optional parameter that sits inside the description of the entity's behavior file, and is used to imitate a vanilla entity's hard-coded elements.
It accepts Vanilla Minecraft identifiers, like `minecraft:shulker`.

```json
"description": {
    "identifier": "assassin:my_box",
    "is_spawnable": true,
    "is_summonable": true,
    "is_experimental": false,
    "runtime_identifier": "minecraft:shulker"
}
```

It's important to remember that `runtime_identifier` will only parse the hard-coded properties of an entity. This means that using a 100% datadriven mob as the Runtime Identifier will not add any new properties to your entity. Additionally, some entity runtimes may overwrite properties found in datadriven components even if they are added in the components section, such as the collision box size for the shulker entity.

# Known runtime-identifier effects:

---

## minecraft:shulker

Perfect for imitating a block, as long as the player is in Adventure Mode.

-   A solid collision box of 1x1x1.
-   The entity will stick to the center of the block it's spawned in.
-   If the block it's attached to is removed, the entity will teleport to another unobstructed location nearby.
-   If the entity is spawned on a non-full block (e.g. bed, slab, etc...), it will teleport to another unobstructed location nearby.
-   The solid collision box's width and height cannot be changed.

---

## minecraft:ender_crystal

-   The entity will stick to the center of the block it's spawned in.
-   Unless teleported, the entity will always maintain its positions.
-   Can be placed on any surface
-   Will always be pushable through by other entities.
-   Cannot be configured to receive damage.
-   Cannot change the direction it faces.

---

## minecraft:parrot

-   makes the wing flap animation able to work.
-   makes the mob fall slowly.
-   makes it dance to music discs.

---

## minecraft:armor_stand

-   Disables entity shadows
-   Punching the entity will cause it to instantly despawn
-   Equipment placeable on/removable from entity

---

## minecraft:iron_golem

-   Allows launching attack (attacks deal increased knockback with a vertical amplification)
-   Speeds up arm and leg animation (can be fixed manually, ~1/4 speed)
-   May interact poorly with village/villager logic.

---

## minecraft:arrow

-   Disables death animation, sound, and particles
-   Makes entity's shadow small, but it doesn't make it disappear
-   Cannot be interacted with
-   If spawned through an egg or /summon command, gives the player an arrow when the player comes into contact with the entity, then removes itself

---

## minecraft:thrown_trident

-   Disables death animation, sound, and particles
-   Makes entity's shadow small, but it doesn't make it disappear
-   Cannot be interacted with

--

## minecraft:piglin

-   Allows `minecraft:celebrate_hunt` to function (which activates query.is_celebrating)

---

## minecraft:spider

-   Allows cobwebs to not slow down entity

---

## minecraft:minecart

-   Disables entity shadow
-   Makes the entity drop a minecart on death
-   Prevents the entity from rotating

---

## minecraft:boat

-   Adds the pocket boat UI when ridden
-   Prevents the entity from rotating

---

## minecraft:sheep

-   Allows `query.is_grazing` to function with the `behavior.eat_block` component

---

## minecraft:panda

-   Allows `query.is_grazing` and `query.sit_mount` to function with the `minecraft:behavior.random_sitting` component

---

## minecraft:wither_skull_dangerous

-   Makes the entity drop a wither rose on death
-   Any entity killed by the entity will have a wither rose placed where it dies. Strangely, zombies seem to drop the wither rose instead of having it placed at the spot they die at.
-   Makes the entity constantly generate particles(the identifier of the particles it generates is `minecraft:basic_smoke_particle`)
-   Makes the entity unaffected by gravity(this seems to cause entities with `minecraft:projectile` to move in a straight line)
-   Prevents the entity from taking damage
-   only works for entities with no ai goals(so it's only useful for dummy entities and projectiles)

---

## minecraft:zombie

-   Makes the entity receive damage from Healing effect, heal from Instant Damage effect and become immune to Regeneration and Poison effect
-   Makes the entity receive increased damage from weapons with Smite enchantment

---

## minecraft:skeleton

-   Makes the entity receive damage from Healing effect, heal from Instant Damage effect and become immune to Regeneration and Poison effect
-   Makes the entity receive increased damage from weapons with Smite enchantment

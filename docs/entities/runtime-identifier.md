---
title: Runtime Identifiers
---

`runtime_identifier` is an optional parameter that sits inside the description of the entity's behavior file, and is used to imitate a vanilla entity's hard-coded elements.
It accepts Vanilla Minecraft identifiers, like `minecraft:shulker`.

"within_radius": 1000,

```json
"description": {
    "identifier": "wiki:my_box",
    "is_spawnable": true,
    "is_summonable": true,
    "is_experimental": false,
    "runtime_identifier": "minecraft:shulker"
}
```

It's important to remember that `runtime_identifier` will only parse the hard-coded properties of an entity. This means that using a 100% datadriven mob as the Runtime Identifier will not add any new properties to your entity. Additionally, some entity runtimes may overwrite properties found in datadriven components even if they are added in the components section, such as the collision box size for the shulker entity.

## Known runtime-identifier effects:

-   All runtime ID change name of tamed entity to name of entity which runtime ID it is using

### minecraft:armor_stand

-   Disables entity shadows
-   Punching the entity will cause it to instantly despawn
-   Equipment placeable on/removable from entity

---

### minecraft:arrow

-   Disables death animation, sound, and particles
-   Makes entity's shadow small, but it doesn't make it disappear
-   Cannot be interacted with
-   If spawned through an egg or /summon command, gives the player an arrow when the player comes into contact with the entity, then removes itself
-   Travel physics and knockback dealing similar to that of an arrow

---

### minecraft:boat

-   Adds the pocket boat UI when ridden
-   Prevents the entity from rotating
-   Solid, boat shaped hitbox

---

### minecraft:cod

-   Makes entity flop when not in water
-   Interacting with bucket of water will give you a bucket of cod, but when the bucket of cod is placed, it will place bucketed entity instead of cod

---

### minecraft:egg

-   When spawning such entity using its spawn egg, it will spawn at player's position rather than where you place it

---

### minecraft:ender_crystal

-   The entity will stick to the center of the block it's spawned in
-   Unless teleported, the entity will always maintain its positions
-   Can be placed on any surface
-   Will always be pushable through by other entities
-   Cannot be configured to receive damage
-   Cannot change the direction it faces

---

### minecraft:iron_golem

-   Allows launching attack (attacks deal increased knockback with a vertical amplification)
-   Speeds up arm and leg animation (can be fixed manually, ~1/4 speed)
-   May interact poorly with village/villager logic

---

### minecraft:minecart

-   Disables entity shadow
-   Makes the entity drop a minecart on death
-   Prevents the entity from rotating

---

### minecraft:panda

-   Allows `query.is_grazing` and `query.sit_mount` to function with the `minecraft:behavior.random_sitting` component

---

### minecraft:parrot

-   makes the wing flap animation able to work
-   makes the mob fall slowly
-   makes it dance to music discs

---

### minecraft:piglin

-   Allows `minecraft:celebrate_hunt` to function (which activates query.is_celebrating)

---

### minecraft:pufferfish

-   Makes entity flop when not in water
-   Interacting with bucket of water will give you a bucket of pufferfish, but when the bucket of pufferfish is placed, it will place bucketed entity instead of pufferfish

---

### minecraft:salmon

-   Makes entity flop when not in water
-   Interacting with bucket of water will give you a bucket of salmon, but when the bucket of salmon is placed, it will place bucketed entity instead of salmon

---

### minecraft:sheep

-   Allows `query.is_grazing` to function with the `behavior.eat_block` component

---

### minecraft:shulker

Perfect for imitating a block, as long as the player is in Adventure Mode.

-   A solid collision box of 1x1x1.
-   The entity will stick to the center of the block it's spawned in
-   If the block it's attached to is removed, the entity will teleport to another unobstructed location nearby
-   If the entity is spawned on a non-full block (e.g. bed, slab, etc...), it will teleport to another unobstructed location nearby
-   The solid collision box's width and height cannot be changed

---

### minecraft:spider

-   Allows cobwebs to not slow down entity

---

### minecraft:skeleton

-   Makes the entity receive damage from Healing effect, heal from Instant Damage effect and become immune to Regeneration and Poison effect
-   Makes the entity receive increased damage from weapons with Smite enchantment

---

### minecraft:thrown_trident

-   Disables death animation, sound, and particles
-   Makes entity's shadow small, but it doesn't make it disappear
-   Cannot be interacted with
-   Travel physics and knockback dealing similar to that of a thrown trident

---

### minecraft:tropicalfish

-   Makes entity flop when not in water
-   Interacting with bucket of water will give you a bucket of tropicalfish with name "Bucket of White Kob", when the bucket of tropicalfish is placed, it will crash the game

---

### minecraft:wither_skull_dangerous

-   Makes the entity drop a wither rose on death
-   Any entity killed by the entity will have a wither rose placed where it dies. Strangely, zombies seem to drop the wither rose instead of having it placed at the spot they die at
-   Makes the entity constantly generate particles(the identifier of the particles it generates is `minecraft:basic_smoke_particle`)
-   Makes the entity unaffected by gravity(this seems to cause entities with `minecraft:projectile` to move in a straight line)
-   Prevents the entity from taking damage
-   only works for entities with no ai goals(so it's only useful for dummy entities and projectiles)

---

### minecraft:zombie

-   Makes the entity receive damage from Healing effect, heal from Instant Damage effect and become immune to Regeneration and Poison effect
-   Makes the entity receive increased damage from weapons with Smite enchantment


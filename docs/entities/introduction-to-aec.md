---
title: Introduction to AOE Clouds
category: Tutorials
tags:
    - intermediate
mentions:
    - Sprunkles137
    - MedicalJewel105
description: Introduction to area-of-effect clouds.
---

**Area-of-effect clouds**, also known as AOE clouds and `minecraft:area_effect_cloud` internally, are special entities that have many unique properties. Normally these entities are created through throwing lingering potions, but with structures and some NBT editing magic we can manipulate them in very powerful ways for map-making.

## Overview

AOE clouds have several special features we can take advantage of:

-   As [dummy entities](/entities/dummy-entities), AOE clouds are highly performant. They are optimized to have no collision with the world or other entities. This makes them perfect for situations around players or other entities.
-   AOE clouds are perfectly static and can only be moved with commands. This is ideal for situations where precise positioning is important.
-   AOE clouds can be configured to apply potion effects. The duration can be set down to the tick, as well as whether or not the effect is ambient, if it displays on the screen, if it emits particles, etc.
-   Entities with a runtime identifier of `minecraft:area_effect_cloud` inherit these same properties.

## Placing AOE Clouds

To create an AOE cloud, we need to first create a structure to contain one. An AOE cloud must have specific NBT data in order to exist properly.

### NBT Editors

One of the following NBT editors are recommended for editing structure files:

-   [NBT Studio](https://github.com/tryashtar/nbt-studio) (a standalone program by tryashtar)
-   [NBT Viewer](https://marketplace.visualstudio.com/items?itemName=Misodee.vscode-nbt) (a Visual Studio Code extension by Misode)

### Structure file

For convenience, this article contains a premade structure file you can download and use. Inside is an AOE cloud with the smallest possible radius (0.5 blocks) that exists for the maximum possible time (`2^31 - 1` ticks, or about 29,826 hours).

<Button link="/assets/packs/entities/aec/aec.mcstructure" download>
    Download MCSTRUCTURE
</Button>

Refer to this article for editing structure files: [.mcstructure](/nbt/mcstructure)

### NBT Format

| Tag                  | Type    | Description                                                                                                          |
| -------------------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| Duration             | Integer | How long the cloud will exist for before expiring, in ticks. A value of 0 will cause the cloud to despawn instantly. |
| DurationOnUse        | Integer | How much the duration should change when effects are applied.                                                        |
| InitialRadius        | Float   | The size of this cloud's radius when created. Values below 0.5 cause the cloud to despawn instantly.                 |
| RadiusChangeOnPickup | Float   | Unknown.                                                                                                             |
| RadiusOnUse          | Float   | How much the radius should change when effects are applied.                                                          |
| RadiusPerTick        | Float   | How much the radius changes every tick.                                                                              |
| ParticleColor        | Integer | The color of the particle effect, stored in decimal.                                                                 |
| ParticleId           | Integer | Legacy value for storing a component particle ID. Has no effect.                                                     |
| PotionId             | Short   | This cloud's potion effect ID when created. Has no effect.                                                           |
| ReapplicationDelay   | Integer | The interval at which effects can be applied, in ticks.                                                              |
| mobEffects           | List    | Describes what potion effects should be applied.                                                                     |

Below are the parameters for the `mobEffects` tag.

| Tag                             | Type    | Description                                                           |
| ------------------------------- | ------- | --------------------------------------------------------------------- |
| Ambient                         | Byte    | Defines whether this effect's particles should be translucent or not. |
| Amplifier                       | Byte    | The strength of this potion effect.                                   |
| DisplayOnScreenTextureAnimation | Byte    | Unknown.                                                              |
| Duration                        | Integer | The amount of time this effect is applied for, in ticks.              |
| DurationEasy                    | Integer | Unknown, seemingly unused.                                            |
| DurationNormal                  | Integer | Unknown, seemingly unused.                                            |
| DurationHard                    | Integer | Unknown, seemingly unused.                                            |
| Id                              | Byte    | The potion effect ID for this effect.                                 |
| ShowParticles                   | Byte    | Defines whether this effect's particles should appear or not.         |

## Using AOE Clouds

Once an AOE cloud is placed, we can then use it like any other marker/dummy entity.

Some things to consider when using an AOE cloud:

-   They use the particle emitter `minecraft:mobspell_lingering`. To avoid seeing particles, a resource pack must alter this particle emitter.
-   The entity `minecraft:area_effect_cloud` does not send the client updates about its position; this means it will appear fixed to where it spawned in. It can still be moved around with `/teleport`.

### Scripting Utility

To make manipulating AOE clouds easier, the following utility is provided. It exports a function, `registerOnEntityLoad`, that invokes a callback when an entity loads in. This can be used to access the AOE cloud after deferring its spawning to the structure manager.

<Button link="/assets/packs/entities/aec/entity_load_handler.js" download>
    Download utility
</Button>

<CodeHeader>Example usage:</CodeHeader>

```js
import { world, DimensionLocation } from "@minecraft/server";
import { registerOnEntityLoad } from "./entity_load_handler.js";

/**
 * @param {DimensionLocation} location
 */
function spawnMarker(location) {
    const Structure_Location = {
        x: Math.floor(location.x),
        y: Math.floor(location.y),
        z: Math.floor(location.z)
    };
    world.structureManager.place(
        "mystructure:aec",
        location.dimension,
        Structure_Location,
    );
    registerOnEntityLoad(
        "minecraft:area_effect_cloud",
        function initializeMarker(entity) {
            const Entity_Location = {
                x: location.x,
                y: location.y,
                z: location.z
            };
            entity.teleport(Entity_Location);
            entity.addTag("origin");
            // etc.
        }
    );
}

```

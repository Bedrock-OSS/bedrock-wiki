---
title: Introduction to AOE Clouds
category: Tutorials
tags:	
	- intermediate
---

**Area-of-effect clouds**, also known as AOE clouds and `minecraft:area_effect_cloud` internally, are special entities that have many unique properties. Normally these entities are created through throwing lingering potions, but with structures and some NBT editing magic we can manipulate them in very powerful ways for map-making.

## Overview

Area-of-effect clouds have several special features we can take advantage of:

- As [dummy entities](/entities/dummy-entities), they are highly performant and barely affect framerate, and they are also completely static and have no collision with the world. This makes them perfect for situations around players or where precise positioning is important.
- It does not send the client updates. Once it spawns in, it will visually appear to be frozen in place until it despawns. However, it can still be moved around through commands just fine.
- It can apply any potion effect in highly configurable ways. The duration can be set down to the tick, as well as whether or not the effect is ambient, or displays on the screen, if it emits particles, etc.
- Entities with a runtime identifier of `minecraft:area_effect_cloud` inherit these same properties.

## Method 1: Projectile Component

The projectile component supports spawning in area-of-effect clouds on hit. Minecraft uses this to spawn in AOE clouds from lingering potions.

[Projectiles Documentation](/documentation/projectiles.html#spawn-aoe-cloud)

## Method 2: NBT Editing

Another way to spawn in these area-of-effect clouds is through structure files. This grants us finer control over the potion effects the cloud can have. So, our first order of business is getting a means to edit these structures.

### NBT Editors

One of the following NBT editors are recommended:

-   [NBT Studio](https://github.com/tryashtar/nbt-studio) (a standalone program by tryashtar)
-   [NBT Viewer](https://marketplace.visualstudio.com/items?itemName=Misodee.vscode-nbt) (a Visual Studio Code extension by Misode)

### Structure file

For convenience, this article contains a premade structure file you can download and use. Inside is an AOE cloud that exists for the maximum possible time.

<a href="https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/structures/aec.mcstructure?raw=true">📄 Structure file</a>

Refer to this article for editing structure files: [.mcstructure](/nbt/mcstructure)

### NBT Format

| Tag										| Type		|	Description				|
| --------------------- | -------	|	----------------- |
| Duration							| Integer	| How long the cloud exists for before expiring, in ticks.	|
| DurationOnUse					| Integer	| How much the duration should change when effects are applied.	|
| InitialRadius					| Float		| The size of this cloud's radius when created.	|
| ParticleColor					| Integer	| The color of the particle effect, in decimal.	|
| ParticleId						| Integer	| The particle effect this cloud emits. 0 emits no particles.	|
| PotionId							| Short		| This cloud's potion effect ID when created. Has no effect.	|
| RadiusChangeOnPickup	| Float		| Unknown.	|
| RadiusOnUse						| Float		| How much the radius should change when effects are applied.	|
| RadiusPerTick					| Float		| How much the radius changes every tick.	|
| ReapplicationDelay		| Integer	| The interval at which effects can be applied, in ticks.	|
| mobEffects						| List		| Describes what potion effects should be applied.	|

Below are the parameters for the `mobEffects` tag.

|	Tag															|	Type		|	Description			|
| -------------------------------	|	-------	|	---------------	|
|	Ambient													|	Byte		| Defines whether this effect's particles should be translucent or not.	|
|	Amplifier												|	Byte		| The strength of this potion effect.	|
|	DisplayOnScreenTextureAnimation	|	Byte		| Unknown.	|
|	Duration												|	Integer	| The amount of time this effect is applied for, in ticks.	|
|	DurationEasy										|	Integer	| Unknown, seemingly unused.	|
|	DurationNormal									|	Integer	| Unknown, seemingly unused.	|
|	DurationHard										|	Integer	| Unknown, seemingly unused.	|
|	Id															|	Byte		| The potion effect ID for this effect.	|
|	ShowParticles										|	Byte		|	Defines whether this effect's particles should appear or not.	|

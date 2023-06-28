---
title: 'Intro to Particles'
category: General
tags:
    - guide
mentions:
    - SirLich
    - MedicalJewel105
    - TheItsNameless
---

## Particle Systems

A [particle system](https://www.wikiwand.com/en/Particle_system) is a technique in game physics, motion graphics, and computer graphics that uses many small sprites to create convincing effects such as smoke, fire, or swarms of insects. You can create new particle systems in the Bedrock Edition of Minecraft by using your own custom textures, and your own movement logic. This makes particles extremely fun and powerful!

The Molang integration in particles is also extremely well developed, which allows you to pass data between different particles, or between an entity and a particle.

### Particles

A 'particle', or a 'particle instance' is a single sprite (texture) which is placed in 3D space, and has its own logic for how to move about and change its appearance. Some examples of a particle could include:

-   A single snowflake
-   A single raindrop
-   A single wisp of smoke

### Emitters

An 'emitter' or 'particle emitter' is a system that can spawn many particles, either all at once (explosion), or over time (steady). Emitters have their own logic for how to move, how many particles to spawn, and where. Some examples of emitters could include:

-   A snowstorm (creates snowflakes)
-   A rainstorm (creates raindrops)
-   A smokey chimney (creates smoke wisps)

## Creating your First Particle

To create a particle, you need a resource pack, a texture, and a particle definition file:

<FolderView
:paths="[
    'RP/particles/snowflake.json',
    'RP/textures/particles/snowflake.png'
]"
> </FolderView>

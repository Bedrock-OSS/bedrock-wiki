---
title: Redstone Components
description: Learn about the different types of components that can make up a redstone circuit.
category: Documentation
tags:
    - intermediate
license: true
mentions:
    - QuazChick
---

:::tip FORMAT VERSION 1.21.130
Using the latest format version when creating custom blocks provides access to the newest redstone features.
:::
:::danger REDSTONE INPUT
Currently it is impossible to cause custom blocks to activate when they receive redstone power.
:::

This page will help you learn about the different types of components that can make up a redstone circuit.
Only types of components that can be created with add-ons are documented.

## Redstone Insulators

:::tip
Generally, if a vanilla block is not full and opaque, it will act as an insulator.
However, it is important to remember that a block's functionality is not determined by its appearance so there can be exceptions.
For example, despite being translucent, slime blocks are not insulators and will instead [conduct](#redstone-conductors) redstone power.
:::

While they technically do not form part of a circuit, **redstone insulators** are very useful when building compact redstone circuits as they do _not_ conduct a redstone signal when powered.

In the diagram below, the powered repeater on the left is strongly powering the stonecutter block. However, given that the stonecutter is a redstone insulator, the repeater to the right of it is not connected to the circuit so remains unpowered.

<WikiImage
    src="/assets/images/blocks/redstone-components/insulator.png"
    alt="Diagram of a stonecutter block with a powered repeater pointing into the left of it and an unpowered repeater pointing out of the right of it."
    width="512"
    pixelated
/>

### Creating Redstone Insulators

Creating custom redstone insulators couldn't be easier, since that's how custom blocks behave by default!

You don't need to add anything to your block's JSON definition.

### Preventing Wire Step-Down

By default, wires of redstone dust are allowed to step down the side of insulators to carry power downwards.
However, unlike other insulators such as glass, vanilla slabs do not allow wire to step down the side of them.

You can prevent wire from stepping down your own block by using the [redstone conductivity](/blocks/block-components#redstone-conductivity) component.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_conductivity": {
    "allows_wire_to_step_down": false
}
```

## Redstone Conductors

:::tip
Generally, if a vanilla block is full and opaque, it will act as a conductor.
However, it is important to remember that a block's functionality is not determined by its appearance so there can be exceptions.
For example, despite being full and opaque, observers are [insulators](#redstone-insulators) so will not conduct redstone power.
:::

**Redstone conductors** are the opposite of insulators, they _do_ conduct a redstone signal to adjacent blocks when powered.

-   **Strongly powering** a conductor (using a [redstone producer](#redstone-producers)) will connect adjacent redstone dust and components to the circuit, causing them to receive the power that was conducted.

-   **Weakly powering** a conductor (by powering redstone dust that is on top of or pointing into the conductor) will connect adjacent redstone components to the circuit, causing them to receive the power that was conducted without connecting adjacent redstone dust.

If a block is a redstone conductor, it will **prevent wire from stepping down** to the block directly below it, cutting the wire off from that part of the circuit.

In the diagram below, the powered repeater on the left is strongly powering the concrete block. Given that concrete is a redstone conductor, the repeater to the right of it is connected to the circuit so also becomes powered.

<WikiImage
    src="/assets/images/blocks/redstone-components/conductor.png"
    alt="Diagram of a concrete block with a powered repeater pointing into the left of it and another powered repeater pointing out of the right of it."
    width="512"
    pixelated
/>

### Creating Redstone Conductors

To create custom redstone conductors, you'll need to include the [redstone conductivity](/blocks/block-components#redstone-conductivity) component in your block.

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_conductivity": {
    "redstone_conductor": true
}
```

## Redstone Producers

A block that supplies redstone power to a circuit is known as a **redstone producer**.
Other redstone components can connect to producers to receive their power in the directions that the producer allows.

Excluding redstone blocks, all producers also strongly power one direction. This strong power can be conducted by [redstone conductors](#redstone-conductors) to add more components to the circuit.

In the diagram below, the redstone torch is acting as the redstone producer of the circuit and can be connected to from all directions except down.
Additionally, it is strongly powering the block above it.

<WikiImage
    src="/assets/images/blocks/redstone-components/producer.png"
    alt="Diagram of a redstone torch with two powered repeaters pointing outwards to the left and right and a strongly powered concrete block above it."
    width="384"
    pixelated
/>

### Creating Redstone Producers

To create custom redstone producers, you'll need to include the [redstone producer](/blocks/block-components#redstone-producer) component in your block.

Here's how the redstone producer component of the lit redstone torch in the above diagram would look:

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:redstone_producer": {
    "power": 15,
    "strongly_powered_face": "up",
    "connected_faces": ["up", "north", "south", "west", "east"]
}
```

---
title: Compass Display
category: Useful Creations
tags:
   - easy
mentions:
  - BedrockCommands
  - fantasy9967
description: Create a compass display using commands.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

Create a compass display on the actionbar using commands.

![Demonstration GIF](/assets/images/commands/compass-display/demo.gif)

## Commands

<CodeHeader>BP/functions/wiki/displays/compass.mcfunction</CodeHeader>

```yaml
title @a[rym=157.5,ry=-157.5] actionbar North (N)
title @a[rym=-22.5,ry=22.5] actionbar South (S)
title @a[rym=-112.5,ry=-67.5] actionbar East (E)
title @a[rym=67.5,ry=112.5] actionbar West (W)
title @a[rym=-157.5,ry=-112.5] actionbar Northeast (NE)
title @a[rym=112.5,ry=157.5] actionbar Northwest (NW) 
title @a[rym=-67.5,ry=-22.5] actionbar Southeast (SE)
title @a[rym=22.5,ry=67.5] actionbar Southwest (SW)
```
![Chain of 8 Command Blocks](/assets/images/commands/command-block-chain/8.png)

To understand how rotation selector arguments 'ry' and 'rym' work, refer to this page **[here](/commands/selectors#rotation)**.

:::tip

You may use the above commands in combination with **[Crouch Detection](/commands/movement-detections#is-sneaking)** or the **[hasitem](/commands/selectors#items)** selector argument to apply additional conditions in order for the display to activate.

:::
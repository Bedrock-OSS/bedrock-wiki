---
title: Item Drop Detection
category: Techniques
tags:
   - easy
mentions:
  - BedrockCommands
  - PipiSpamton
description: This technique allows you to differentiate player dropped items from other dropped items.
---

## Introduction

[Sourced by the Bedrock Commands Community (BCC) Discord](https://bedrockcommands.org/)

This technique allows you to differentiate player dropped items from other dropped items.

## Commands

<CodeHeader>BP/functions/wiki/detect_state/item/is_dropped_by.mcfunction</CodeHeader>

```yaml
## Tag Items From Other
### Facing precisely 0° south
tag @e[type=item,ry=0,rym=0,tag=!wiki:source.player] add wiki:source.other

## Tag Items Dropped by Players
tag @e[type=item,tag=!wiki:source.other] add wiki:source.player
```
![Chain of 2 Command Blocks](/assets/images/commands/command-block-chain/2.png)

:::tip NOTE
Interestingly, even items dropped by players facing 0° south will correctly be tagged 'wiki:source.player'
:::
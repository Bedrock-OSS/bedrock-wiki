---
title: 禁用粒子
description: 移除游戏中显示的原版粒子。
category: 教程
show_outline: false
tags:
    - beginner
mentions:
    - SirLich
    - Joelant05
    - MedicalJewel105
---

如果你想禁用某个粒子，建议直接在该粒子文件进行操作，而不是简单地让粒子纹理在 `particles.png` 中透明化。此外，禁用粒子可能会比让它透明化提供轻微的性能提升，因为透明粒子仍然会被发射（但不可见）。

禁用粒子发射的基本思路如下：

<CodeHeader>RP/particles/some_vanilla_particle.json</CodeHeader>

```json
{
    "format_version": "1.10.0",
    "particle_effect": {
        "description": {
            "identifier": "minecraft:some_vanilla_particle",
            "basic_render_parameters": {
                "material": "particles_alpha",
                "texture": "textures/particle/particles"
            }
        },
        "components": {
            "minecraft:emitter_lifetime_expression": {
                "activation_expression": 0,
                "expiration_expression": 1
            },
            "minecraft:emitter_rate_manual": {
                "max_particles": 0
            }
        }
    }
}
```

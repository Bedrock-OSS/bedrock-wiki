---
title: Vanilla Block Models
description: Block models that are built into the game for use with custom blocks.
category: Documentation
tags:
    - beginner
license: true
mentions:
    - QuazChick
---

Although custom blocks are unable to make use of vanilla [block shapes](/blocks/block-shapes), Mojang provides several `minecraft` namespaced models that replicate their look!

:::danger HARDCODED
Currently, vanilla block models are not data-driven, so cannot be modified nor found as JSON files in the vanilla resource pack.

This also means that they are not compatible with the `bone_visibility` and `culling` parameters of the [geometry](/blocks/block-components#geometry) component.
:::

## Applying Vanilla Models

Vanilla block models are applied in the same way as [custom block models](/blocks/block-models), using the [geometry](/blocks/block-components#geometry) component, with textures defined in [material instances](/blocks/block-components#material-instances):

<CodeHeader>minecraft:block > components</CodeHeader>

```json
"minecraft:geometry": "minecraft:geometry.full_block",
"minecraft:material_instances": {
    "*": {
        "texture": "cobblestone"
    }
}
```

## List of Vanilla Models

| Preview                                                                                          | Identifier                      | Additional Notes                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <WikiImage src="/assets/images/blocks/vanilla-block-models/cross.png" alt="" width="100" />      | `minecraft:geometry.cross`      | <p>When used on a block, `ambient_occlusion` and `face_dimming` should be set to `false` in any [material instances](/blocks/block-components#material-instances).</p><p>This model should only be used with render methods that have backface culling (`alpha_test_single_sided`, `blend` and `opaque`) to avoid texture flickering.</p> |
| <WikiImage src="/assets/images/blocks/vanilla-block-models/full_block.png" alt="" width="100" /> | `minecraft:geometry.full_block` | When used for a block with the `opaque` render method, a shadow is cast onto surrounding blocks and adjacent block faces are culled.                                                                                                                                                                                                      |

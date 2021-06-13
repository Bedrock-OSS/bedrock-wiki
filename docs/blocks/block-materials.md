---
title: Block Materials
tags:
    - experimental
---

# Block Model Materials

<Label color="yellow">Experimental</Label>

| Argument     | Slot                                                                                                                                                                                                                                                              |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| opaque       | Used for a regular block texture without an alpha layer. Does not allow for transparency or translucency. This material enables AO (ambient occlusion) for the block, creating shadows around and underneath it.                                                  |
| alpha_test   | Used for a block like the vanilla (unstained) glass. Does not allow for translucency, only either fully opaque or fully transparent pixels. This material disables AO for the block. Removing those ugly shadows if you're making a non-full or decorative block. |
| blend        | Used for a block like stained glass. Allows for transparency and translucency (slightly transparent pixels). This material disables AO for the block. Removing those ugly shadows if you're making a non-full or decorative block.                                |
| double_sided | double-sided is a blending material without "backface culling".                                                                                                                                                                                                   |

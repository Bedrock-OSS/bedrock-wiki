---
title: Vanilla Materials
show_toc: false
---

:::warning
Materials are not for the faint of heart. Be prepared for potential crashes, content log errors, and long loading times.
:::

Materials are extremely useful for making entities more unique. You can make new ones for your addons, or use pre-existing vanilla materials.

You can learn more about creating materials [here](/visuals/materials).

## List of Vanilla Materials

| Vanilla_Material                                                                        |
| --------------------------------------------------------------------------------------- |
| [alpha_block](#alpha_block)                                                             |  
| [alpha_block_color](#alpha_block_color)                                                 |  
| [banner](#banner)                                                                       |
| [banner_pole](#banner_pole)                                                             |
| [beacon_beam](#beacon_beam)                                                             | 
| [beacon_beam_transparent](#beacon_beam_transparent)                                     | 
| [charged_creeper](#charged_creeper)                                                     | 
| [conduit_wind](#conduit_wind)                                                           |
| [entity](#entity)                                                                       |
| [entity_alphablend](#entity_alphablend)                                                 |
| [entity_alphablend_nocolorentity_static](#entity_alphablend_nocolorentity_static)       |
| [entity_alphatest](#entity_alphatest)                                                   |
| [entity_alphatest_change_color](#entity_alphatest_change_color)                         |
| [entity_alphatest_change_color_glint](#entity_alphatest_change_color_glint)             | 
| [entity_alphatest_glint](#entity_alphatest_glint)                                       | 
| [entity_alphatest_glint_item](#entity_alphatest_glint_item)                             | 
| [entity_alphatest_multicolor_tint](#entity_alphatest_multicolor_tint)                   | 
| [entity_beam](#entity_beam)                                                             | 
| [entity_beam_additive](#entity_beam_additive)                                           | 
| [entity_change_color](#entity_change_color)                                             | 
| [entity_change_color_glint](#entity_change_color_glint)                                 | 
| [entity_custom](#entity_custom)                                                         | 
| [entity_dissolve_layer0](#entity_dissolve_layer0)                                       | 
| [entity_dissolve_layer1](#entity_dissolve_layer1)                                       | 
| [entity_emissive](#entity_emissive)                                                     | 
| [entity_emissive_alpha](#entity_emissive_alpha)                                         | 
| [entity_emissive_alpha_one_sided](#entity_emissive_alpha_one_sided)                     | 
| [entity_flat_color_line](#entity_flat_color_line)                                       | 
| [entity_glint](#entity_glint)                                                           | 
| [entity_lead_base](#entity_lead_base)                                                   | 
| [entity_loyalty_rope](#entity_loyalty_rope)                                             | 
| [entity_multitexture](#entity_multitexture)                                             | 
| [entity_multitexture_alpha_test](#entity_multitexture_alpha_test)                       | 
| [entity_multitexture_alpha_test_color_mask](#entity_multitexture_alpha_test_color_mask) | 
| [entity_multitexture_color_mask](#entity_multitexture_color_mask)                       | 
| [entity_multitexture_masked](#entity_multitexture_masked)                               | 
| [entity_multitexture_multiplicative_blend](#entity_multitexture_multiplicative_blend)   | 
| [entity_nocull](#entity_nocull)                                                         | 
| [guardian_ghost](#guardian_ghost)                                                       | 
| [item_in_hand](#item_in_hand)                                                           | 
| [item_in_hand_entity_alphatest](#item_in_hand_entity_alphatest)                         | 
| [item_in_hand_entity_alphatest_color](#item_in_hand_entity_alphatest_color)             | 
| [item_in_hand_glint](#item_in_hand_glint)                                               | 
| [item_in_hand_multicolor_tint](#item_in_hand_multicolor_tint)                           | 
| [map](#map)                                                                             |
| [map_decoration](#map_decoration)                                                       | 
| [map_marker](#map_marker)                                                               | 
| [moving_block](#moving_block)                                                           | 
| [moving_block_alpha](#moving_block_alpha)                                               | 
| [moving_block_alpha_seasons](#moving_block_alpha_seasons)                               | 
| [moving_block_alpha_single_side](#moving_block_alpha_single_side)                       | 
| [moving_block_blend](#moving_block_blend)                                               |
| [moving_block_double_side](#moving_block_double_side)                                   | 
| [moving_block_seasons](#moving_block_seasons)                                           | 
| [opaque_block](#opaque_block)                                                           | 
| [opaque_block_color](#opaque_block_color)                                               |
| [opaque_block_color_uv2](#opaque_block_color_uv2)                                       |

## Properties

Materials can have a range of different properties which affect their appearence, including:

### Backface-Culling

This makes the inside faces of models **not** render.

### Alpha Channel

Enables analogue translucency, usage of the alpha channel of textures.

### Emissive

Causes the texture to not be affected by dim lighting, and appear to glow. If there is usage of the alpha channel, the emissiveness is in direct proportion to how transparent each individual pixel is.

### Set Translucency

Regardless of other properties, is always completely rendered at a pre-determined translucency.

### Texture Blending

When multiple textures are present, may use a filter of sorts to change the entities appearance, based on the textures.

## Details on the Materials

The following is a last of each material, along with general known properties. The names are vague pointers to what each will do, some may act rather unpredictably, or have undocumented usages, so this only is what's certain for each:

:::warning
The following section has currently **only** been tested for with single textures. Take it all with a pinch of salt. It is highly recommended to experiment with the materials yourself.
:::

### alpha_block 

-   Backface-culling
-   Completely Opaque

### alpha_block_color 

-   Backface-Culling
-   Translucencies as Transparent

### banner

Inconsistently renders objects with transparency behind.

-   N/A

### banner_pole

Inconsistently renders objects with transparency behind.

-   Backface-Culling
-   Transparency

### beacon_beam

-   Completely Opaque

### beacon_beam_transparent

This one is rather different. Particles that are behind it are rendered in front, and it appears to have "Frontface-Culling".

-   Alpha Channel

### charged_creeper

Inconsistently renders objects with transparency behind.

-   Emissive
-   Set Translucency

### conduit_wind

-   Transparency
-   Translucency as Transparency

### entity

-   Completely Opaque
-   Backface Culling

### entity_alphablend  

Inconsistently renders objects with transparency behind.

-   Backface-Culling
-   Alpha Channel

### entity_alphablend_nocolorentity_static

-   Unknown
-   Potential Crash

### entity_alphatest

-   Transparency
-   Translucency as Transparency

### entity_alphatest_change_color

-   Transparency
-   Translucency as Opaque

### entity_alphatest_change_color_glint

-   Unknown

### entity_alphatest_glint

-   Unknown

### entity_alphatest_glint_item

-   Unknown

### entity_alphatest_multicolor_tint

-   Greyscale
-   Backface-Culling
-   Transparency
-   Translucency as Opaque

### entity_beam

-   Transparency
-   Translucency as Transparency

### entity_beam_additive

Particles always render on top

-   Transparency
-   Emissive
-   Backface-Culling
-   Set Translucency

### entity_change_color

-   Completely Opaque

### entity_change_color_glint

-   Unknown

### entity_custom  

Inconsistently renders objects with transparency behind.

-   Backface-Culling
-   Alpha Channel

### entity_dissolve_layer0

Inconsistently renders objects with transparency behind.

-   Unknown

### entity_dissolve_layer1

-   Unknown

### entity_emissive

-   Emissive
-   Completely Opaque
-   Backface-Culling

### entity_emissive_alpha

-   Emissive
-   Alpha Channel
-   Transparency

### entity_emissive_alpha_one_sided

-   Emissive
-   Alpha Channel
-   Transparency
-   Backface-Culling

### entity_flat_color_line

-   Backface-Culling
-   Completely Opaque

### entity_glint

-   Unknown

### entity_lead_base

Inconsistently renders objects with transparency behind.

-   Alpha Channel

### entity_loyalty_rope

-   Unknown

### entity_multitexture

-   Unknown

### entity_multitexture_alpha_test

-   Unknown

### entity_multitexture_alpha_test_color_mask

-   Unknown

### entity_multitexture_color_mask

-   Unknown

### entity_multitexture_masked

-   Unknown

### entity_multitexture_multiplicative_blend

-   Unknown

### entity_nocull

-   Completely Opaque

### guardian_ghost

Inconsistently renders objects with transparency behind.

-   Backface-Culling
-   Alpha Channel

### item_in_hand

-   Completely Opaque
-   Backface-Culling

### item_in_hand_entity_alphatest

-   Transparency
-   Translucency into either Opaque or Transparent depends on level.

### item_in_hand_entity_alphatest_color

-   Transparency
-   Translucency into either Opaque or Transparent depends on level.

### item_in_hand_glint

-   Unknown

### item_in_hand_multicolor_tint

-   Greyscale
-   Completely Opaque
-   Backface-Culling

### map

-   Transparency
-   Translucency into either Opaque or Transparent depends on level.

### map_decoration

-   Backface-Culling
-   Transparency
-   Translucency into either Opaque or Transparent depends on level.

### map_marker

-   Backface-Culling
-   Transparency
-   Translucency into either Opaque or Transparent depends on level.
-   Potential Crash

### moving_block

-   Completely Opaque
-   Backface-Culling

### moving_block_alpha

-   Backface-Culling
-   Transparency
-   Translucency into either Opaque or Transparent depends on level.

### moving_block_alpha_seasons

-   Translucency into either Opaque or Transparent depends on level.
-   Transparency

### moving_block_alpha_single_side

-   Backface-Culling
-   Transparency
-   Translucency into either Opaque or Transparent depends on level.

### moving_block_blend

Inconsistently renders objects with transparency behind.

-   Backface-Culling
-   Alpha Channel

### moving_block_double_side

-   Completely Opaqe

### moving_block_seasons

-   Completely Opaque
-   Backface-Culling

### opaque_block

-   Completely Opaque
-   Backface-Culling

### opaque_block_color

-   Completely Opaque
-   Backface-Culling

### opaque_block_color_uv2

-   Completely Opaque
-   Backface-Culling


:::warning
Please note, that these have also only been tested using a RenderDragon platform. Non-RenderDragon visuals may differ.
:::


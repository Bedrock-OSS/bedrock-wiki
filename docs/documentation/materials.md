---
title: Vanilla_Materials
show_toc: false
---

Materials are extremely usefull for 

You can learn more about materials [here](/visuals/materials).

text

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

This makes the inside faces of moodels **not** render.


### Alpha

Enables transparency, usage of the alpha channel of textures.


### Emissive

Causes the texture to not be affected by dim lighting, and appear to glow. If there is usage of the alpha channel, the emissiveness is in direct proportion to how transparrent each induvidual pixel is.


### Set Transparency

Regardless of other properties, is always completely rendered at a pre-determined transparrency.


### Texture Blending




### Centered Geometry

Each part of the entity's geometry is rendered at the same location on it's the Y and Z coordinates. This isn't usually a particularly desireble effect.


## Details on the Materials

The following is a last of each material, along with general known properies. The names are vague pointers to what each will do, some may act rather unpredictably, or have undocumented usages, so this only is what's certain for each:

:::warning
The following section has currently **only** been tested for with single textures. Take it all with a pinch of salt. It is highly recomended to experiment with the materials yourself.
:::


### alpha_block 




### alpha_block_color 




### banner




### banner_pole




### beacon_beam




### beacon_beam_transparent




### charged_creeper




### conduit_wind




### entity




### entity_alphablend  




### entity_alphablend_nocolorentity_static

-   Unknown


### entity_alphatest




### entity_alphatest_change_color




### entity_alphatest_change_color_glint




### entity_alphatest_glint




### entity_alphatest_glint_item




### entity_alphatest_multicolor_tint

-   Greyscale
-   Backface-Culling


### entity_beam




### entity_beam_additive




### entity_change_color

-   N/A


### entity_change_color_glint




### entity_custom  




### entity_dissolve_layer0

-   Unknown


### entity_dissolve_layer1

-   Unknown


### entity_emissive




### entity_emissive_alpha




### entity_emissive_alpha_one_sided




### entity_flat_color_line




### entity_glint




### entity_lead_base




### entity_loyalty_rope




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




### guardian_ghost




### item_in_hand

-   N/A


### item_in_hand_entity_alphatest




### item_in_hand_entity_alphatest_color




### item_in_hand_glint

-   N/A


### item_in_hand_multicolor_tint

-   N/A


### map




### map_decoration




### map_marker




### moving_block

-   Unknown


### moving_block_alpha

-   Unknown


### moving_block_alpha_seasons

-   Unknown


### moving_block_alpha_single_side

-   Unknown


### moving_block_blend


-   Unknown

### moving_block_double_side

-   Unknown


### moving_block_seasons

-   Unknown


### opaque_block




### opaque_block_color




### opaque_block_color_uv2





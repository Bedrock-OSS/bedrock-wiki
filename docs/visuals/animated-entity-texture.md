---
title: Entity Texture Animation
description: Learn how to make an animated texture for an entity that works similarly to flipbook texture for blocks.
category: Tutorials
mentions:
    - MedicalJewel105
    - IlkinQafarov
    - TheItsNameless
    - SmokeyStack
    - QuazChick
tags:
    - intermediate
---

From this page you will learn how to make an animated texture for an entity that works similarly to flipbook texture for blocks.

## Source

This page is based on content by [AgentMindStorm](https://www.youtube.com/channel/UC-ljddYkFdTQl-MVEaVvbuQ).

<YouTubeEmbed id="F6e-w1rCEi4" />

## Textures

First let's draw some new texture frames for our entity. In this tutorial it will be a cow, which is looking around.

<WikiImage
    src="/assets/images/visuals/animated-entity-texture/cow.png"
    alt="Frames of an animated cow texture stacked on top of each other"
    width="180"
    pixelated
/>

We need to place our textures vertically, like for blocks in flipbook textures.
In this case we have 4 frames.

## Animated Material

### Creating the Material

We will need to modify materials in this guide. However due to render dragon materials became outdated, so **use it at your own risk**.

To use animated texture, we need to change the entity material to one, that has `USE_UV_ANIM` property.
Let's simply add a new material:

<CodeHeader>RP/materials/entity.material</CodeHeader>

```json
{
    "materials": {
        "version": "1.0.0",
        "custom_animated:entity": {
            "+defines": ["USE_UV_ANIM"]
        }
    }
}
```

Or you can add this to existing ones, check default material file.

<CodeHeader></CodeHeader>

```json
"+defines": [
    "USE_UV_ANIM"
]
```

<Button link="/assets/packs/visuals/animated-entity-texture/entity.material" download>
    Download default entity.material file
</Button>

:::warning
It is not that easy for every entity!
Some entities have multiple materials and if you want to make its texture animated, you will need to add this property to all materials of this entity.
:::

### Applying the Material

Before we go next, we need to define a new material in our client entity file.

<CodeHeader>minecraft:client_entity > description</CodeHeader>

```json
"materials": {
	"default": "custom_animated"
}
```

## Render Controller

After that all, we need to edit a render controller.

Here we will add `uv_anim` component with offset and scale properties:

<CodeHeader>RP/render_controllers/cow.render_controllers.json > controller.render.cow</CodeHeader>

```json
"uv_anim": {
    "offset": [0, "math.mod(math.floor(q.life_time * frames_per_second), frame_count) / frame_count"],
    "scale": [1, "1 / frame_count"]
}
```

…where `frames_per_second` is a count of frames you want to change in one second and `frame_count` is a total frame count.
This formula calculates the offset and the size of the texture depending on life time.

## Result

Now, it is time to test your creation!

![](/assets/images/visuals/animated-entity-texture/result.gif)

## Download Example Pack

<Button link="https://github.com/Bedrock-OSS/bedrock-examples/releases/download/download/animated_entity_texture.mcpack">
    Download MCPACK
</Button>

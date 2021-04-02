---
layout: page
title: .textures_list
parent: Concepts
---
# Understanding textures_list.json

<details id="toc" open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## General Overview

The textures_list file is Minecraft's way of *caching* each texture so that it can retrieve it faster than looking through each image in your textures folder. This is especially important when you have an abundance of textures, where Minecraft could potentially mess up and swap textures, or even not load them at all. Minecraft tends to throw a content log *warning* if you don't have the textures listed in the file. You can just ignore it if you have a small amount, but it is recommended that you list the textures anyway.

## What textures can be used in the file?

Any texture! Any and all textures can and *should* be used in the textures_list.json file for best practice and performance.

## File Structure

The structure is simple, the file itself is in `RP/textures` and is named `textures_list.json`. The file just includes the filepath to every texture you want in the file:

{% include filepath.html path="RP/textures/textures_list.json"%}
```json
[
    "textures/blocks/foo",
    "textures/blocks/bar",

    "textures/items/foo",
    "textures/items/bar",

    "textures/models/foo",
    "textures/models/bar",

    "textures/entity/foo",
    "textures/entity/bar"
]
```

## Automating

If you have a lot of textures, this could obviously be tedious to go and list all the texture paths. In this case, we can use **Python** (or another language if you prefer) to help us with automating these paths. Here is an example code in python:

```python
def list_textures_v2():
  for texture in glob.glob("./textures/**/*.png")+glob.glob("./textures/**/*.tga):
    bn = os.path.splitext(os.path.basename(texture))[1]
    print(texture.replace(bn,"").replace("./","").replace("\\","/"))
```

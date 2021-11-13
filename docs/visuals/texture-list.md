---
title: texture_list
---

## General Overview

The texture_list file is Minecraft's way of *caching* each texture so that it can retrieve it faster than looking through each image in your textures folder. This is especially important when you have an abundance of textures, where Minecraft could potentially mess up and swap textures or even not load them at all. Minecraft tends to throw a content log _warning_ if you don't have the textures listed in the file. You can ignore it if you have a small amount, but it is recommended that you list the textures anyway.

## What textures can be used in the file?

Any texture! Any textures can and _should_ be used in the texture_list.json file for best practice and performance.

## File Structure

The structure is simple. The file itself is in `RP/textures` and is named `texture_list.json`. The file includes the file path to every texture you want in the file:

<CodeHeader>RP/textures/texture_list.json</CodeHeader>

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

<CodeHeader></CodeHeader>

```python
def list_textures_v2():
  for texture in glob.glob("./textures/**/*.png")+glob.glob("./textures/**/*.tga):
    bn = os.path.splitext(os.path.basename(texture))[1]
    print(texture.replace(bn,"").replace("./","").replace("\\","/"))
```

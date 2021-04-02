---
layout: page
title: Subpacks
parent: Documentation
---

# Subpacks

<details id="toc" open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## What are subpacks?

Subpacks are what cause the gear icon to appear on packs. They are intended for texture resolutions to load on different memory capacities, but can also be used to create file variations in behavior and resource packs which can then be chosen by clicking the gear icon and adjusting the slider.

## Creating subpacks

- To start adding a subpack you need to create a `subpacks` folder inside the root of your BP or RP.
- Then inside the `subpacks` folder add a folder for each subpack you want to have
e.g.

<div markdown="0" class="folder-structure">
    <ul>
        <li><span class="folder">RP</span>
            <ul>
                <li><span class="folder">subpacks</span>
                    <ul>
                        <li><span class="folder">subpack_1</span></li>
                        <li><span class="folder">subpack_2</span></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>

- Inside each of these folders you can add the content of each subpack.
This can be anything that normally goes in your behavior or resource pack.
e.g.
<div markdown="0" class="folder-structure">
    <ul>
        <li><span class="folder">RP</span>
            <ul>
                <li><span class="folder">subpacks</span>
                    <ul>
                        <li><span class="folder">subpack_1</span>
                            <ul>
                                <li><span class="folder">textures</span>
                                    <ul>
                                        <li><span class="folder">blocks</span>
                                            <ul>
                                                <li><span class="image">dirt.png</span></li>
                                            </ul>
                                        </li>
                                        <li><span class="folder">items</span>
                                            <ul>
                                                <li><span class="image">example_item.png</span></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><span class="folder">subpack_2</span>
                            <ul>
                                <li><span class="folder">textures</span>
                                    <ul>
                                        <li><span class="folder">blocks</span>
                                            <ul>
                                                <li><span class="image">dirt.png</span></li>
                                            </ul>
                                        </li>
                                        <li><span class="folder">items</span>
                                            <ul>
                                                <li><span class="image">example_item.png</span></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>

## Adding subpacks to manifests

To register the subpacks in the manifest you need to add `subpacks` and this contains an array of subpacks.

Example:

{% include filepath.html path="RP/manifest.json" %}
```json
{
     "format_version": 2,
     "header": {
          "name": "Pack Name",
          "description": "Pack Description",
          "uuid": "2fc2dd6f-86cb-4370-af70-21490a1ae471",
          "version": [1, 0, 0],
          "min_engine_version": [1, 13, 0]
     },
     "modules": [
          {
               "type": "resources",
               "uuid": "f6821b4a-1854-44fc-a8a4-0c2847ffda46",
               "version": [1, 0, 0]
          }
     ],
     "subpacks": [
          {
               "folder_name": "subpack_1",
               "name": "First Subpack",
               "memory_tier": 0
          },
          {
               "folder_name": "subpack_2",
               "name": "Second Subpack",
               "memory_tier": 1
          }
     ]
}

```
- `name`

Defines the name that will show when selecting the subpacks.

- `memory_tier`

A number specifying the order of the subpacks on the slider. (Starts at 0)

- `folder_name`

This corresponds to the name of the folder to be used in this subpack, for example in the examples above this would be `subpack_1` or `subpack_2`. These names can be anything you want, they don't need to follow the `subpack_n` format.

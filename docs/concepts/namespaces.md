---
title: Namespaces
mentions:
    - SirLich
    - MedicalJewel105
description: Namespaces are identifiers that mark content ownership and are helpful because they keep naming conflicts from happening.
---

Namespaces are identifiers that mark content ownership. You can think of them as folders. Namespaces are helpful because they keep naming conflicts from happening.

Namespaces in add-on creation can essentially be thought of as "the part to the left of the colon". For example, `minecraft` is the namespace of `minecraft:zombie`. The general form is `namespace:name`.

As a concrete example of why namespaces are helpful, let's imagine you create a new Mob. You name it `minecraft:shark`, not aware that you should create your own namespace for custom content. Next year, Mojang decides to add sharks into the game! Now there is a naming conflict since there are two definitions of `minecraft:shark`. Your add-on will break. It would have been wiser to pick a unique namespace for your shark, so you don't collide with Mojang, or any other creator.

## Picking a namespace

A suitable namespace is unique to you, and unique to the project. Something like `mob` or `cars` or `content` or `custom` would be a **bad** namespace since another developer might come up with the same namespace as you.

A suitable namespace is short. You will be writing your namespace a **LOT**, so the shorter, the better. `my_amazing_mobs_addon` would be a lousy namespace for this reason.

It is recommended to use a convenient version of your player/company name, combined with the product name.

Some good examples:
-   `wiki_mobsplus`
-   `cubeworld_mto`
-   `bworks_ftp`

**DO NOT ATTEMPT** to use  `minecraft` or `minecon` as a namespace.

## Where to use namespaces?

In short, you should use namespaces as often as you can.

For starters, you should use a namespace when adding custom entities to the game. For example `wiki:shark`. It is also recommended to use namespaces for components and events. Just like Mojang uses `minecraft:pig_saddled` you should use `namespace:my_mob_event`, and `namespace:my_component_group`. The same applies to animation controllers, render controllers, and animations.

For example: `controller.animation.namespace.entity_name.action` is better than `controller.animation.my_action`.

## Where NOT to use namespaces.

The actual file structure does not need namespaces, unless it's the filepath is used in game. For example: `animations/namespace/my_entity/animation` is more confusing than `animations/my_entity/animation`.

The following folders contain files that are referenced by path, and thus should contain a namespace: `functions`, `structures`, `loot_tables`, `trade_tables`, `sounds`, and `textures`.
- **Example:** `BP/functions/namespace/test.mcfunction`

You may also refer to the [Style Guide](/meta/style-guide) for information about namespaces.

## Namespace Registry

The Bedrock OSS organization maintains a mapping betweeen namespaces, and the author/addon name. You can consider [registering your namespaces there.](https://github.com/Bedrock-OSS/add-on-registry)


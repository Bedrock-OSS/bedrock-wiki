---
title: Look at Entity
category: Tutorials
tags:
    - intermediate
mention:
    - shanewolf38
---

The following provides a resource pack method to detect when the player is looking at an entity. The code below must be placed inside the entity that will be looked at by the player, and will provide a variable `v.look_at_entity` which will return true when the entity is being looked at.

<CodeHeader>RP/entity/mob.entity.json</CodeHeader>

```json
"pre_animation": [
  "v.look_at_entity = Math.abs(Math.abs(q.rotation_to_camera(1) - q.camera_rotation(1)) - 180) < (20 / q.distance_from_camera) && Math.abs(q.rotation_to_camera(0) + q.camera_rotation(0)) < (10 / q.distance_from_camera);"
],
```

**NOTE:** Because the query `q.rotation_to_camera` is based at the origin of the entity (their feet), the vertical detection range will be based around the bottom of the entity. The code below creates a modified variable for the vertical angle which takes a positional offset into account to allow the vertical detection range to be based around the center of the entity.

<CodeHeader>RP/entity/mob.entity.json</CodeHeader>

```json
"pre_animation": [
  "v.rotation_to_camera_0 = -Math.atan2(-q.distance_from_camera * Math.sin(q.rotation_to_camera(0)) - 1, q.distance_from_camera * Math.cos(q.rotation_to_camera(0)));",
  "v.look_at_entity = Math.abs(Math.abs(q.rotation_to_camera(1) - q.camera_rotation(1)) - 180) < (20 / q.distance_from_camera) && Math.abs(v.rotation_to_camera_0 + q.camera_rotation(0)) < (60 / q.distance_from_camera);"
],
```

**Adjustments:** The provided code is very accurate for the standard Minecraft mob size of 1 block wide and 2 blocks tall, but for entities of different sizes the parameters should be changed. The `- 1` controls the positional offset of the center of the mob (- is upward, + is downward), the `20` controls the horizontal angle sensitivity, and the `60` controls the vertical angle sensitivity.

**Explanation:** The variable detects when the player is looking at the entity by checking if the rotation angle required for the entity to look at the player is opposite the rotation angle required for the player to look at the entity. The horizontal and vertical angle sensitivity are modified by the distance of the entity from the camera to maintain accuracy. 

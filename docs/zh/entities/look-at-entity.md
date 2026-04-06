---
title: 注视实体
category: 教程
tags:
    - intermediate
mentions:
    - shanewolf38
    - MedicalJewel105
    - TheItsNameless
    - SmokeyStack
description: 以下教程提供了一种资源包方法，用于检测玩家何时注视实体。
---

以下教程提供了一种资源包方法，用于检测玩家何时注视实体。下面的代码必须放置在将被玩家注视的实体内部，并将提供一个变量 `v.look_at_entity`，当实体被注视时返回 true。

## 变量

<CodeHeader>RP/entity/mob.entity.json</CodeHeader>

```json
"pre_animation": [
  "v.look_at_entity = Math.abs(Math.abs(q.rotation_to_camera(1) - q.camera_rotation(1)) - 180) < (20 / q.distance_from_camera) && Math.abs(q.rotation_to_camera(0) + q.camera_rotation(0)) < (10 / q.distance_from_camera);"
],
```

:::tip
由于查询 `q.rotation_to_camera` 基于实体的原点（脚部），垂直检测范围将基于实体底部。下面的代码创建了一个修改后的垂直角度变量，考虑了位置偏移，使垂直检测范围基于实体中心。
:::

<CodeHeader>RP/entity/mob.entity.json</CodeHeader>

```json
"pre_animation": [
  "v.rotation_to_camera_0 = -Math.atan2(-q.distance_from_camera * Math.sin(q.rotation_to_camera(0)) - 1, q.distance_from_camera * Math.cos(q.rotation_to_camera(0)));",
  "v.look_at_entity = Math.abs(Math.abs(q.rotation_to_camera(1) - q.camera_rotation(1)) - 180) < (20 / q.distance_from_camera) && Math.abs(v.rotation_to_camera_0 + q.camera_rotation(0)) < (60 / q.distance_from_camera);"
],
```

## 修改

提供的代码对于标准 Minecraft 生物大小（1 格宽，2 格高）非常准确，但对于不同大小的实体，应更改参数。`- 1` 控制生物中心的位置偏移（- 为向上，+ 为向下），`20` 控制水平角度灵敏度，`60` 控制垂直角度灵敏度。

## 解释

该变量通过检查实体看向玩家所需的旋转角度是否与玩家看向实体所需的旋转角度相反，来检测玩家是否正在注视实体。水平和垂直角度灵敏度会根据实体与摄像机的距离进行修改，以保持准确性。

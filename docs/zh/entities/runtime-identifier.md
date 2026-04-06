---
title: 运行时标识符
category: 文档
mentions:
    - MedicalJewel105
    - aexer0e
    - Lufurrius
    - SirLich
    - TheDoctor15
    - ChibiMango
    - stirante
    - epxzzy
    - IlkinQafarov
    - TheItsNameless
    - SmokeyStack
    - ThomasOrs
    - Goatfu
    - MRBBATES1
description: runtime_identifier 是实体行为文件描述中的可选参数，用于模拟 vanilla 实体的硬编码元素。
---

`runtime_identifier` 是实体行为文件描述中的可选参数，用于模拟 vanilla 实体的硬编码元素。
它接受 Vanilla Minecraft 标识符，如 `minecraft:shulker`。

<CodeHeader>行为实体描述</CodeHeader>

```json
"description": {
    "identifier": "wiki:my_box",
    "runtime_identifier": "minecraft:shulker", // 这是运行时。它将为实体添加潜影盒的硬编码行为。
    "is_spawnable": true,
    "is_summonable": true,
    "is_experimental": false
}
```

:::tip
请务必记住，`runtime_identifier` 只解析实体的_硬编码属性_。这意味着使用 100% 数据驱动的生物作为运行时标识符不会为您的实体添加任何新属性。此外，某些实体运行时可能会覆盖在组件部分添加的数据驱动组件中的属性，例如潜影盒实体的碰撞箱大小。
:::

:::warning
此处未提及每个运行时 ID/效果。请自行尝试以发现新的运行时 ID/效果，并考虑在这里添加它们。
:::

## 已知的运行时标识符效果

-   所有运行时 ID 都会将实体名称更改为使用该运行时 ID 的实体的名称

### minecraft:area_effect_cloud

-   禁用与世界和其他实体的碰撞。
-   使实体继承 vanilla [效果云](/entities/area-effect-clouds) 的属性，即在计时器上存在、施加药水效果和发射粒子。

---

### minecraft:armor_stand

-   禁用实体阴影。
-   拳击实体会导致它立即消失。
-   可以在实体上放置/移除装备。
-   使实体在死亡时掉落盔甲架物品。

---

### minecraft:arrow

-   为投射物实体添加面向玩家的动画。
-   禁用死亡动画、声音和粒子。
-   使实体的阴影变小，但不会让它消失。
-   无法交互。
-   如果通过生成蛋或 /summon 命令生成，当玩家接触该实体时会给予玩家一支箭，然后移除自身。
-   类似箭的抛射物理和击退。

---

### minecraft:axolotl

-   不影响任何游泳/移动/重力行为。
-   与热带鱼的情况相同，不同的变种和标记变种值会给出不同的桶名称，例如 "Bucket of Adult Leucistic Axolotl" 或 "Bucket of Baby Yellow Axolotl"。
    年龄：成年，幼年
    颜色变种：Leucistic, Wild, Yellow, Cyan, Blue。

---

### minecraft:bee

-   为实体添加蜜蜂声音。

---

### minecraft:blaze

-   添加火焰燃烧的声音效果和粒子。
-   实体会像火焰一样飞行（即使您没有飞行行为）。

---

### minecraft:boat

-   添加骑乘时的口袋船 UI。
-   防止实体旋转。
-   实心，船形碰撞箱。

---

### minecraft:chest_minecart

-   破坏实体。
-   拳击实体会使其消失。
-   生成方式奇怪。
-   掉落胸箱和矿车。

---

### minecraft:chicken

-   破坏一些动画。
-   更新移动速度。
-   实体会慢慢掉落，但仍会收到摔落伤害。
-   生成时不带装备（如果有的话）。

---

### minecraft:cod

-   使实体不在水中时挣扎。
-   用水桶交互会给您一桶鳕鱼，但当放置鳕鱼桶时，它将放置桶化的实体而不是鳕鱼。
-   为实体提供特殊的游泳和重力行为。

---

### minecraft:command_block_minecart

-   破坏实体。
-   拳击实体会使其消失。
-   生成方式奇怪。
-   掉落矿车。

---

### minecraft:cow

-   破坏一些动画。
-   更新移动速度。
-   生成时不带装备（如果有的话）。

---

### minecraft:creeper

-   防止具有 `minecraft:owner_hurt_target` 的其他实体以 "creeper" 为目标
-   限制实体在方块亮度为 0 时生成

---

### minecraft:dolphin

-   添加 `minecraft:movement.dolphin` 组件。

---

### minecraft:donkey

-   将纹理、模型和动画更改为驴的。

---

### minecraft:dragon_fireball

-   完全破坏您的实体。
-   发射龙火球尾迹粒子。

---

### minecraft:egg

-   为投射物实体添加面向玩家的动画。
-   破坏实体。
-   使用其生成蛋生成此类实体时，它将在玩家位置生成而不是您放置它的位置。它还会看向天空。

---

### minecraft:elder_guardian

-   将纹理、模型和动画更改为远古守卫者的。
-   更改一些行为。

---

### minecraft:ender_crystal

-   实体将粘在其生成的方块中心。
-   除非传送，否则实体将始终保持其位置。
-   可以放置在任何表面上。
-   始终可以被其他实体推开。
-   无法配置为接受伤害。
-   无法更改其面向的方向。
-   可以复活末影龙。
-   生成时会有火。

---

### minecraft:ender_dragon

-   为实体添加末影龙死亡效果。
-   继承末影龙碰撞箱。
-   销毁碰撞箱内的方块，包括实体下方的方块。要防止其掉落到基岩，请在下方添加不可破坏的方块，或移除实体的重力，或禁用 `mobGriefing` 游戏规则。
-   伤害碰撞箱内 2 块内的玩家。
-   增加其渲染距离。
-   只能使用 /kill 杀死。

---

### minecraft:ender_pearl

-   破坏实体的行为。
-   当实体受到伤害时发射粒子。

---

### minecraft:endermite

-   当实体受到伤害时发射粒子。
-   导致旋转故障。
-   破坏一些动画。

---

### minecraft:evocation_fang

-   接触时伤害实体。
-   完全禁用碰撞。

---

### minecraft:falling_block

-   破坏实体并使其下落。
-   当实体触地时，它会完全消失并掉落一个金合欢按钮。
-   移除拥有效果的能力。

---

### minecraft:ghast

-   使使用 `minecraft:behavior.random_look_around` 的实体偶尔会直直向上看

---

### minecraft:horse

-   将纹理、模型和动画更改为马的。

---

### minecraft:iron_golem

-   允许发动攻击（攻击会造成增强击退的击退）。
-   加速手臂和腿部动画（可以手动修复，约为 1/4 速度）。
-   可能与村庄/村民逻辑交互不佳。

---

### minecraft:llama_spit

-   添加骆驼唾液粒子

---

### minecraft:minecart

-   禁用实体阴影。
-   使实体在死亡时掉落矿车。
-   防止实体旋转。

---

### minecraft:npc

-   在创造模式下；拳击实体会导致它立即消失。
-   在生存或冒险模式下；拳击实体不会造成伤害，也不会施加击退。
-   在所有模式下忽略 `minecraft:health` 组件。

---

### minecraft:panda

-   允许 `q.is_grazing` 和 `q.sit_mount` 与 `minecraft:behavior.random_sitting` 组件一起使用。

---

### minecraft:parrot

-   使翅膀扇动动画能够工作。
-   使生物慢慢掉落。
-   使其随唱片跳舞。

---

### minecraft:piglin

-   允许 `minecraft:celebrate_hunt` 发挥作用（激活 q.is_celebrating）。
-   允许 `minecraft:behavior.charge_held_item` 在为十字弓充能时播放声音

---

### minecraft:pillager

-   允许 `minecraft:behavior.charge_held_item` 在为十字弓充能时播放声音

---

### minecraft:player

-   激活 `q.movement_direction`。

---

### minecraft:pufferfish

-   使实体不在水中时挣扎。
-   用水桶交互会给您一桶河豚，但当放置河豚桶时，它将放置桶化的实体而不是河豚。
-   为实体提供特殊的游泳和重力行为。

---

### minecraft:salmon

-   使实体不在水中时挣扎。
-   用水桶交互会给您一桶鲑鱼，但当放置鲑鱼桶时，它将放置桶化的实体而不是鲑鱼。
-   为实体提供特殊的游泳和重力行为。

---

### minecraft:sheep

-   允许 `q.is_grazing` 与 `behavior.eat_block` 组件一起使用。

---

### minecraft:shulker

-   非常适合模拟方块，只要玩家处于冒险模式。

-   1x1x1 的实心碰撞箱。
-   实体将粘在其生成的方块中心。
-   如果它所附着的方块被移除，实体将传送到附近的另一个无障碍位置。
-   如果实体生成在非完整方块（例如床、台阶等）上，它将传送到附近的另一个无障碍位置。
-   实心碰撞箱的宽度和高度无法更改。

---

### minecraft:shulker_bullet

-   实体将留下 `minecraft:shulker_bullet` 粒子痕迹。

---

### minecraft:slime

-   实体掉落时会创建史莱姆粒子。
-   实体死亡时会根据变种生成较低阶的史莱姆（变种 1 到 5 作为默认史莱姆等级，值高于 5 将作为默认中型史莱姆）
-   允许实体同时进行攻击并激活史莱姆跳跃机制（没有此标识符，史莱姆在攻击时无法旋转，实体将沿着直线路径跳跃，直到失去目标）

---

### minecraft:snowball

-   移除碰撞箱。
-   您无法再与实体交互。
-   在玩家头部生成。
-   实体忽略重力。
-   移除实体阴影。
-   实体只面向南。
-   无法发出脚步声。

---

### minecraft:spider

-   允许蜘蛛网不减缓实体速度。
-   限制实体在方块亮度为 0 时生成

---

### minecraft:phantom

-   阻止实体使用生成规则生成。

---

### minecraft:skeleton

-   使实体能够从治疗效果中受到伤害，从即时伤害效果中治疗，并对再生和中毒效果免疫。
-   使实体受到带有锋利附魔的武器的伤害增加。
-   如果变种为 1 或更大，则近战和远程攻击都会施加凋零状态效果。
-   限制实体在方块亮度为 0 时生成

---

### minecraft:stray

-   使实体能够从治疗效果中受到伤害，从即时伤害效果中治疗，并对再生和中毒效果免疫。
-   使实体受到带有锋利附魔的武器的伤害增加。
-   使实体不受冻结伤害。
-   限制实体在方块亮度为 0 时生成

---

### minecraft:squid

-   允许使用特殊行为组件（参见 squid.json）。
-   当实体受到伤害时发射墨水粒子。

---

### minecraft:thrown_trident

-   为投射物实体添加面向玩家的动画。
-   禁用死亡动画、声音和粒子。
-   使实体的阴影变小，但不会让它消失。
-   无法交互。
-   类似投掷三叉戟的抛射物理和击退。

---

### minecraft:tropicalfish

-   使实体不在水中时挣扎。
-   为实体提供特殊的游泳和重力行为。
-   用水桶右键交互会给您一桶热带鱼。如果实体没有任何 minecraft:variant、minecraft:mark_variant、minecraft:color 和 minecraft:color2，它会将名称设置为 White Kob，这可能是热带鱼的 0 变种。如果应用了上述组件中的一个或多个，则会更改桶的名称（并且该桶放置实体，而不是具有该名称/数据值的热带鱼）。

---

### minecraft:wither_skull_dangerous

-   使实体在死亡时掉落凋零玫瑰。
-   被该实体杀死的任何实体都将在其死亡处放置凋零玫瑰。奇怪的是，僵尸似乎会掉落凋零玫瑰，而不是将其放置在死亡位置。
-   使实体持续生成粒子（生成的粒子标识符是 `minecraft:basic_smoke_particle`）。
-   使实体不受重力影响（这似乎会导致具有 `minecraft:projectile` 的实体直线移动）。
-   防止实体受到伤害。
-   仅适用于没有 AI 目标的实体（因此仅对虚拟实体和投射物有用）。

---

### minecraft:xp_orb

-   完全禁用碰撞
-   与玩家接触时增加经验值

### minecraft:zombie

-   使实体能够从治疗效果中受到伤害，从即时伤害效果中治疗，并对再生和中毒效果免疫。
-   使实体受到带有锋利附魔的武器的伤害增加。
-   限制实体在方块亮度为 0 时生成

---

### minecraft:wither

-   死亡时爆炸。

---

---
title: 物品格式历史
description: 每个Minecraft版本中数据驱动物品格式的所有更改列表。
category: 文档
outline_depth: 2
license: true
mentions:
    - QuazChick
---

:::info <Label color="green">版本化</Label> 更改
文件的`format_version`字段必须更新才能使版本化更改生效。
:::

:::info <Tag name="experimental" /> 更改
必须在你世界中启用实验性功能才能使实验性更改生效。
:::

## 1.26.10

### 组件

<Label color="green">版本化</Label>

-   更新了`minecraft:block_placer`
    -   添加了`aligned_placement`参数，决定方块是否应该放置在先前放置的方块上，位于玩家开始移动方向的面。
    -   默认情况下，此参数设置为`false`{lang=json}。
    -   尽管在版本1.26.10中引入，但此参数在格式版本1.26.0及更高版本中可用。

## 1.26.0

### 组件

<Label color="green">版本化</Label>

-   更新了`minecraft:damage`
    -   现在正确支持超过`255`{lang=json}的值，最大可达`32767`{lang=json}。

## 1.21.130

### 组件

-   添加了`minecraft:kinetic_weapon`
    -   导致物品在玩家向其移动（或玩家向其移动）而物品正在被使用时伤害（以及击落并施加击退）每个实体。
    -   包含`delay`，决定动能伤害和效果开始应用之前的持续时间（以tick为单位）。
    -   包含`hitbox_margin`，决定每个目标的碰撞需要距离玩家视线方向多近（以方块为单位）才能受到动能攻击的影响。
        -   默认情况下，没有额外的碰撞箱边距。
    -   包含`reach`，决定实体必须距离玩家多远（以方块为单位）才能受到动能攻击的影响。
        -   默认情况下，距离玩家0到3个方块之间的实体将受到动能攻击的影响。
    -   包含`creative_reach`，决定在玩家处于创造模式时应用的`reach`。
        -   默认情况下，处于创造模式的玩家将被限制在正常的`reach`范围内。
    -   包含`damage_multiplier`，动能攻击的基础伤害乘以多少得到乘以后的伤害值。
    -   包含`damage_modifier`，添加到乘以后的伤害值以获得要施加给每个目标的最终伤害值。
    -   包含`damage_conditions`，列出需要满足才能造成伤害的条件。
    -   包含`dismount_conditions`，列出需要满足每个目标从其骑乘的实体上被击落的条件。
        -   默认情况下，实体永远不会被击落。
    -   包含`knockback_conditions`，列出需要满足每个目标受到动能攻击击退的条件。
        -   默认情况下，击退永远不会应用。
-   添加了`minecraft:piercing_weapon`
    -   导致物品在攻击时伤害玩家视线方向上一条直线中的所有实体。
    -   如果玩家和其他实体之间有方块碰撞，伤害将被阻止。
    -   阻止物品用于挖掘方块。
    -   包含`hitbox_margin`，决定每个实体的碰撞需要距离玩家视线方向多近才能受到伤害。
        -   默认情况下，没有额外的碰撞箱边距。
    -   包含`reach`，决定实体必须距离玩家多远（以方块为单位）才能受到伤害。
        -   默认情况下，距离玩家0到3个方块之间的实体将受到伤害。
    -   包含`creative_reach`，决定在玩家处于创造模式时应用的`reach`。
        -   默认情况下，处于创造模式的玩家将被限制在正常的`reach`范围内。
-   添加了`minecraft:swing_sounds`
    -   决定玩家手持物品攻击时触发的原版声音事件。
    -   包含`attack_miss`，决定未命中实体或未造成伤害时触发的声音事件。
    -   包含`attack_hit`，决定命中实体并造成非暴击伤害时触发的声音事件。
    -   包含`attack_critical_hit`，决定命中实体并造成暴击伤害时触发的声音事件。
-   更新了`minecraft:cooldown`
    -   添加了`type`参数，决定以下哪种类型的输入会受到影响：
        -   `use`（默认）在物品使用时触发，并防止在冷却激活期间使用物品。
        -   `attack`在玩家手持物品攻击时触发，并防止在冷却激活期间使用物品进行攻击。
-   更新了`minecraft:use_modifiers`
    -   添加了`start_sound`参数，决定物品开始使用时触发的原版声音事件。

## 1.21.120

### 描述

<Label color="green">版本化</Label>

-   更新了`menu_category`
    -   没有类别的物品现在可以在命令中使用。
    -   如果`is_hidden_in_commands`设置为`true`，物品在命令中仍然无效。

### 组件

-   添加了`minecraft:swing_duration`
    -   决定玩家在挖掘、攻击或使用物品时摆动动画的持续时间（以秒为单位）。
-   更新了`minecraft:use_modifiers`
    -   添加了`emit_vibrations`参数，决定物品在开始和停止使用时是否发出振动。

## 1.21.110

### 组件

-   添加了`minecraft:fire_resistant`
    -   决定物品是否不能被火焰和熔岩销毁。

## 1.21.90

### 组件

-   更新了`minecraft:wearable`
    -   添加了`hides_player_location`参数，决定穿戴物品的玩家是否在定位器和定位地图上隐藏。
    -   默认情况下，可穿戴物品不会隐藏玩家。

<Label color="green">版本化</Label>

-   移除了`minecraft:custom_components`
    -   自定义组件现在应该以与原版组件相同的方式应用，作为`components`对象中的条目：

        <CodeHeader>minecraft:block</CodeHeader>

        ```json
        "components": {
            "minecraft:glint": true,
            "wiki:custom_component": {
                "parameter": "value"
            }
        }
        ```

## 1.21.80

### 组件

<Tag name="experimental" />
<Label color="red">自定义组件 V2</Label>
<Label color="green">版本化</Label>

-   移除了`minecraft:custom_components`
    -   自定义组件现在应该以与原版组件相同的方式应用，作为`components`对象中的条目。

## 1.21.60

### 描述

<Label color="green">版本化</Label>

-   更新了`menu_category`
    -   更新了`group`参数，要求使用命名空间，例如`minecraft:itemGroup.name.concrete`

### 组件

<Label color="green">版本化</Label>

-   添加了`minecraft:storage_weight_limit`
    -   决定储物物品容器中所有物品允许的总重量最大值。
    -   替换了`max_weight_limit`储物物品参数。
-   添加了`minecraft:storage_weight_modifier`
    -   决定物品在储物物品中时的附加重量。
    -   值为0意味着此物品不允许放入储物物品中。
    -   替换了`weight_in_storage_item`储物物品参数。
-   `minecraft:compostable`从实验性功能中发布
-   更新了`minecraft:block_placer`
    -   `replace_block_item`参数从实验性功能中发布
-   更新了`minecraft:storage_item`
    -   移除了`max_weight_limit`参数
    -   移除了`weight_in_storage_item`参数

## 1.21.50

### 组件

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>

-   添加了`minecraft:compostable`
    -   允许此物品在堆肥桶中使用。
    -   包含`composting_chance`，决定堆肥等级增加的可能性百分比（0-100）。

## 1.21.40

<Label color="green">版本化</Label>

-   数字不能再用于表示布尔值。
-   浮点数不能再用于表示整数值。

### 组件

<Label color="green">版本化</Label>

-   `minecraft:bundle_interaction`从实验性功能中发布
-   `minecraft:storage_item`从实验性功能中发布

<Tag name="experimental" />
<Label color="blue">即将推出的创作者功能</Label>

-   更新了`minecraft:block_placer`
    -   如果未应用`minecraft:icon`组件，指定的`block`现在将用作物品的图标。
    -   添加了`replace_block_item`参数，用此物品替换指定`block`的默认物品。
        -   要使其功能生效，物品和方块标识符必须相同。
        -   在此处了解更多关于替换方块物品的信息[here](/blocks/blocks-as-items#replacing-block-items)！

## 1.21.30

### 组件

<Label color="green">版本化</Label>

-   添加了`minecraft:dyeable`
    -   允许物品通过炼药锅的水染色。
    -   包含`default_color`，决定物品染色前使用的可选颜色。
    -   染色后，物品将显示`minecraft:icon`组件中定义的`dyed`纹理而不是`default`。
-   添加了`minecraft:rarity`
    -   定义物品的基础稀有度（通过物品名称的颜色显示）。
    -   接受以下稀有度等级：`common`、`uncommon`、`rare`和`epic`。
    -   当物品被附魔时，如果可能，其稀有度将升级到下一等级。
    -   此组件没有功能效果，可以被`minecraft:hover_text_color`覆盖。

<Tag name="experimental" />
<Label color="orange">Bundles</Label>

-   添加了`minecraft:bundle_interaction`
    -   在物品上启用bundles界面和功能。
    -   包含`num_viewable_slots`
    -   需要应用`minecraft:storage_item`组件。
-   添加了`minecraft:storage_item`
    -   允许此物品包含其他物品。
    -   包含`allow_nested_storage_items`，决定是否可以将其他储物物品放入容器中。
    -   包含`allowed_items`，定义容器中专门允许的物品。
        -   如果为空，所有物品都允许放入容器中。
    -   包含`banned_items`，定义容器中不允许的物品。
    -   包含`max_slots`，定义容器中的槽位数。
    -   包含`max_weight_limit`，定义容器中所有物品允许的最大总重量。
    -   包含`weight_in_storage_item`，定义物品在另一个储物物品中时的附加重量。
        -   值为0意味着此物品不允许放入另一个储物物品中。

## 1.21.20

### 组件

<Label color="green">版本化</Label>

-   添加了`minecraft:damage_absorption`
    -   导致物品吸收原本会施加给其穿戴者的伤害。
    -   包含`absorbable_causes`，决定可以被物品吸收的伤害原因列表（如`entity_attack`和`magma`）。
    -   需要`minecraft:durability`和`minecraft:wearable`组件。
-   添加了`minecraft:durability_sensor`
    -   使物品能够在受到伤害时发出效果。
    -   包含`durability_thresholds`，决定耐久度阈值以及在满足每个阈值时发出的效果。

## 1.21.10

### 组件

<Label color="green">版本化</Label>

-   `minecraft:custom_components`从实验性功能中发布

## 1.21.0

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>
<Label color="green">版本化</Label>

-   移除了`events`

### 组件

<Tag name="experimental" />
<Label color="blue">Beta API</Label>

-   添加了`minecraft:custom_components`
    -   列出应该应用于此方块的所有自定义组件。

### 事件

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>
<Label color="green">版本化</Label>

-   移除了`add_mob_effect`响应
-   移除了`damage`响应
-   移除了`decrement_stack`响应
-   移除了`remove_mob_effect`响应
-   移除了`run_command`响应
-   移除了`teleport`响应
-   移除了`transform_item`响应

## 1.20.60

### 组件

<Label color="green">版本化</Label>

-   更新了`minecraft:icon`
    -   移除了`texture`参数
    -   添加了`textures`参数，列出物品图标可以使用的不同纹理，包括盔甲修剪。
        -   包含`default`，替换`texture`参数。

## 1.20.50

### 组件

<Label color="green">版本化</Label>

-   添加了`minecraft:tags`
    -   列出应用于此物品的标签。
    -   替换了`tag:*`组件。
-   添加了`minecraft:use_modifiers`
    -   包含`use_duration`，决定完整物品使用的长度（以秒为单位）。
        -   替换了`minecraft:use_duration`组件。
    -   包含`movement_modifier`，在物品使用时应用于持有者速度的乘数。
-   移除了`minecraft:use_duration`
-   移除了使用`tag:*`应用标签的能力

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>
<Label color="green">版本化</Label>

-   移除了`minecraft:chargeable`
-   更新了`minecraft:digger`
    -   移除了`on_dig`触发器参数

## 1.20.40

### 组件

<Label color="green">版本化</Label>

-   更新了`minecraft:icon`
    -   单字符串值现在可以再次使用，例如`"minecraft:icon": "stick"`。

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>
<Label color="green">版本化</Label>

-   移除了`minecraft:on_use`触发器
-   移除了`minecraft:on_use_on`触发器
-   移除了`minecraft:weapon`

## 1.20.30

### 组件

<Label color="green">版本化</Label>

-   添加了`minecraft:interact_button`
    -   在使用触摸控制时启用并在按钮上设置文本。
    -   如果设置为`true`，按钮显示"使用物品"。
-   `minecraft:enchantable`从实验性功能中发布
-   `minecraft:food`从实验性功能中发布

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>
<Label color="green">版本化</Label>

-   移除了`minecraft:mining_speed`

## 1.20.20

### 描述

<Label color="green">版本化</Label>

-   添加了`menu_category`
    -   包含`category`，决定物品放在哪个标签页。
    -   包含`group`，决定物品与哪些其他物品分组。
    -   包含`is_hidden_in_commands`，决定物品在命令中使用时是否被视为无效。

### 组件

<Label color="green">版本化</Label>

-   `minecraft:allow_off_hand`从实验性功能中发布
-   `minecraft:damage`从实验性功能中发布
-   `minecraft:digger`从实验性功能中发布
-   `minecraft:enchantable`从实验性功能中发布
-   `minecraft:glint`从实验性功能中发布
-   `minecraft:hand_equipped`从实验性功能中发布
-   `minecraft:liquid_clipped`从实验性功能中发布
-   `minecraft:should_despawn`从实验性功能中发布
-   `minecraft:stacked_by_data`从实验性功能中发布
-   `minecraft:use_animation`从实验性功能中发布
-   `minecraft:use_duration`从实验性功能中发布
-   `minecraft:wearable`从实验性功能中发布

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>
<Label color="green">版本化</Label>

-   移除了`minecraft:creative_category`
-   将`minecraft:foil`重命名为`minecraft:glint`
-   更新了`minecraft:digger`
    -   移除了`on_dig`触发器参数

## 1.20.10

### 组件

<Label color="green">版本化</Label>

-   `minecraft:block_placer`从实验性功能中发布
-   `minecraft:can_destroy_in_creative`从实验性功能中发布
-   `minecraft:cooldown`从实验性功能中发布
-   `minecraft:hover_text_color`从实验性功能中发布
-   `minecraft:max_stack_size`从实验性功能中发布
-   `minecraft:projectile`从实验性功能中发布
-   `minecraft:record`从实验性功能中发布
-   `minecraft:repairable`从实验性功能中发布
-   `minecraft:shooter`从实验性功能中发布
-   `minecraft:throwable`从实验性功能中发布

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>
<Label color="green">版本化</Label>

-   移除了`minecraft:render_offsets`

## 1.20.0

### 组件

<Label color="green">版本化</Label>

-   `minecraft:display_name`从实验性功能中发布
-   `minecraft:durability`从实验性功能中发布
-   `minecraft:fuel`从实验性功能中发布
-   `minecraft:entity_placer`从实验性功能中发布
-   `minecraft:icon`从实验性功能中发布

<Tag name="experimental" />
<Label color="red">假日创作者功能</Label>
<Label color="green">版本化</Label>

-   移除了`minecraft:dye_powder`
-   更新了`minecraft:repairable`
    -   移除了`on_repaired`触发器参数

---

:::danger 未记录
`1.20.0`之前版本的格式更改尚未列出。
:::

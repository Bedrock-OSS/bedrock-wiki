---
title: 交易行为
category: 通用
nav_order: 2
mentions:
    - Ciosciaa
    - MedicalJewel105
description: 使你的实体具有像村民一样交易的能力。
---

让一个实体成为商人是通过 `minecraft:trade_table` 或 `minecraft:economy_trade_table` 组件来实现的。两者都会从给定路径打开一个交易界面，但经济交易组件有一些额外的选项，涉及到一些村庄与掠夺更新的交易机制。你还需要其他AI目标：`minecraft:behavior.trade_with_player`，可选 `minecraft.behavior:trade_interest`（允许生物持有/展示物品），以及可能需要的 `"minecraft:trade_resupply": {}`。

对于一个简单的交易界面，`trade_table` + `trade_with_player` 组件应该能完成工作。

1. 在你的实体的组件中添加 `"minecraft:behavior.trade_with_player": {}`。
2. 将以下代码复制到你实体的组件组中。我把它叫做 `"wiki:trader"`：

<CodeHeader>BP/entities/trader.json</CodeHeader>

```json
"minecraft:trade_table": {
	"display_name": "Trading Entity", // 要显示的文本。
	"table": "trading/trading_entity_trades.json" // 交易表文件的路径
	"new_screen": true //如果设为false，界面将显示为村庄与掠夺更新前的版本。
}
```

3. 现在确保该组件组通过事件添加到实体中。最好将其添加到 `minecraft:entity_spawned` 事件中，因为它在生成时触发。
   如果你对事件和组件组不太熟悉，请确保熟悉实体定义规则/概念。请参阅[实体入门](/entities/entity-intro-bp)。

:::warning
如果你将组件直接添加到 components 中，会导致各种问题，包括世界上所有实体的交易界面显示为空白。由于交易AI目标存在的一个问题，它们必须被添加到组件组中。
:::

---
title: Trading Behavior
category: General
nav_order: 2
mentions:
    - Ciosciaa
    - MedicalJewel105
---

Making an entity a trader is accomplished via `minecraft:trade_table` or `minecraft:economy_trade_table` components. Both of them will open a trading UI from the given path, but the economy trades component has some more options referring to some Village and Pillage trading mechanics. Other AI goals you'll need are `minecraft:behavior.trade_with_player`, optionally `minecraft.behavior:trade_interest` (allows the mob to hold/offer an item) and, potentially, `"minecraft:trade_resupply": {}`.

For a simple trading UI, `trade_table` + `trade_with_player` components should do the trick.

1. Add `"minecraft:behavior.trade_with_player": {}` to your entity's components.
2. Copy the following code into a component group of your entity. I'll call mine `"wiki:trader"`;

<CodeHeader>BP/entities/trader.json</CodeHeader>

```json
"minecraft:trade_table": {
	"display_name": "Trading Entity", // Text to be displayed.
	"table": "trading/trading_entity_trades.json", // Path to the trade table file
	"new_screen": true //If set to false, the UI will display as the pre-Village&Pillage one.
}
```

3. Now make sure the component group is added to the entity via an event. It's a good idea to add it in `minecraft:entity_spawned` event, since it triggers on spawn.
If you don't feel confident with events and component groups, make sure you're familiar with entity definition rules/concepts: {LINK TO CUSTOM ENTITY BEHAVIOR DEFINITION SUBGUIDE}.

:::warning
If you add the component in components, it will cause all kinds of problems, including blank trading UIs for all entities in the world. Because of an issue with the trading AI goals, they must be added in component groups.
:::
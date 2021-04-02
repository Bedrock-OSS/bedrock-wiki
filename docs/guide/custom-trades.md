---
layout: guide
title: Trade Tables
parent: Beginners Guide
nav_order: 9
badge: 9
badge_color: guide
badge_justification: left
---

<details id="toc" open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

___

A Trade Table is a file that controls an entity's trading UI and functionality. Vanilla example: Villager. As of right now, trading entities are often used to simulate UI blocks.
___
___
# Adding the trading AI to an entity
This goal is accomplished via `minecraft:trade_table` or `minecraft:economy_trade_table` components. Both of them will open a trading UI from the given path, but the economy trades component has some more options referring to some Village and Pillage trading mechanics. Other AI goals you'll need are `minecraft:behavior.trade_with_player`, optionally `minecraft.behavior:trade_interest` (allows the mob to hold/offer an item) and, potentially, `"minecraft:trade_resupply": {}`.

For a simple trading UI, `trade_table` + `trade_with_player` components should do the trick.


1. Add `"minecraft:behavior.trade_with_player": {}` to your entity's components.
2. Copy the following code into a component group of your entity. I'll call mine `"tut:trader"`;

```jsonc
"minecraft:trade_table": {
  "display_name": "Trading Entity", //String can be replaced with any text to be displayed.
  "table": "trading/trading_entity_trades.json", //path to the Trade Table file
  "new_screen": true //If set to false, the UI will display as the pre-Village&Pillage one.
}
```

3. Now make sure the component group is added to the entity via an event. It's a good idea to add it in `minecraft:entity_spawned` event, since it triggers on spawn.
If you don't feel confident with events and component groups, make sure you're familiar with entity definition rules/concepts: {LINK TO CUSTOM ENTITY BEHAVIOR DEFINITION SUBGUIDE}.

**Note:** If you add the component in components, it will cause all kinds of problems, including blank trading UIs for all entities in the world. Because of an issue with the trading AI goals, they must be added in component groups. !!!

# Writing the Trade Table itself
The Trade Table syntax is somewhat similar to that of Loot Tables. It's located in any subfolder of BP/trades/. The trade table file name is important, since it's path is referenced/called in the behavior file. Let's break it up somewhat:

![](/assets/images/guide/trade_table_tree_1.png)

First, the main object opens. Then comes an array under keyword *tiers*, including however many arrays needed.

A *tier* is an object holding trades. Initially, only the first *tier* is unlocked, and when the trading entity [villager] gains xp, next tiers get unlocked. The Wandering Trader, for example, only has one tier.\

Every tier has two keys ("parameters").
- "`total_exp_required`" is quite self-explanatory: the number of *xp* the entity needs to gain while trading before the *tier* unlocks. The first tier in the array must have this set to `0`. Typically, the higher the tier, the higher the xp number that needs to be unlocked. If this is set to `0` for all tiers, all tiers will be initially unlocked.

- "`groups`" array holds *trade groups*. They're also objects. There must be at least 1 Trade group in every groups array, otherwise an error will be returned.
![](/assets/images/guide/trade_table_tree_2.png)
![](/assets/images/guide/trade_table_tree_3.png)

Lower you can see how a *group* looks inside. As you can see, it holds "`trades`" objects in the array. The other parameter is "`num_to_select`". This number defines the number of trades from this group to be applied (randomly selected), and cannot be more then the number of defined trades. For example, here we have two *trade*s in the *trade group* and `num_to_select` set to `1`. This means that only one trade from the two will be selected for the entity with equal chances. See Wandering Trader file for clear examples.
![](/assets/images/guide/trade_table_tree_4.png)

```json
{
              "wants": [
                {
                  "item": "minecraft:string",
                  "quantity": 20,
                  "price_multiplier": 0.05
                }
              ],
              "gives": [
                {
                  "item": "minecraft:emerald",
                  "quantity": 1
                }
              ],
              "trader_exp": 1,
              "max_uses": 6,
              "reward_exp": true
}
```

Finally, we'll look through the trade object itself. It's quite self-explanatory.
- "`wants`" array holds **1** or **2** objects that define the price items. Each of them have these parameters:
- "`item`": the full item identifier.
- "`quantity`": self-explanatory, cannot exceed `64`.
- "`price_multiplier`": optional: by how much the price will rise if you're buying too much of the items. Will only work with "`economy_trade_table_` component.
- "`gives`" array holds a single object, which defines what the entity sells. It takes two parameters, which have the same meaning as for the previous array.
- "`trader_exp`" defines how much xp the trading entity will gain. Typically, the lower the tier, the less xp the villagers gain.
- "`max_uses`" is how many times you can trade this offer until it expires. If you don't want it to expire, set it to a very big number or -1 [second option untested]
- "`reward_exp`" is a random hard-coded quantity of xp the player will egt from the trade (unless it's set to false).

___
```jsonc
//Example trade table.
{
  "tiers": [
    {
      "total_exp_required": 0,
      "groups": [
        {
          "num_to_select": 1,
          "trades": [
            {
              "wants": [
                {
                  "item": "minecraft:string",
                  "quantity": 20,
                  "price_multiplier": 0.05
                }
              ],
              "gives": [
                {
                  "item": "minecraft:emerald",
                  "quantity": 1
                }
              ],
              "trader_exp": 1,
              "max_uses": 6,
              "reward_exp": true
            }
          ]
        }
      ]
    }
  ]
}
```

This example Trade Table has a single *tier*, which is unlocked by default, a single *group* inside, with a single *trade* that is always going to be selected.
The Trade Table "*hierarchy*" should be pretty well understood by now.

![](/assets/images/guide/trade_table_tree_5.png)


For more examples/info, I recommend checking out the Vanilla trades/villagers files in the Example behavior pack.

To some it all up, the Trades are divided into **Tiers**, which get unlocked when the entity earns trading **xp**. Tiers include **Groups**, which can either be single **Trades** or an array of **trades, `num_to_select`** of them to randomly chosen.

___
___
## Your progress so far
**What you've done:**
- [x] Creating Trade Tables;
- [x] Adding the ability to trade to custom Entities;
- [x] More details related to trading;

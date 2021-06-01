---
layout: page
title: FAQ
parent: Knowledge
---

# FAQ

This page contains a list of frequently asked questions in the technical-bedrock community that does not deserve a long-form wiki entry. Please contribute your questions/answers so that we can grow this resource!

`tip:` Use ctrl+f to find content quickly.

---

### How can I remove a spawn egg of an entity from the creative menu?

-   Make the spawnable component false inside the behavior file
-   And delete the spawn egg component inside the resource file

---

### What is the default friction of vanilla blocks?

0.6

---

### Can I make custom, transparent blocks?

Yes, starting from the beta 1.16.100, it is possible by including this component: `"render_method": "alpha_test"`

---

### Why is my entity moving chaotically/aimlessly/fast?

Your entity is missing a navigation component or a movement speed component. Make sure your entity behavior file includes them.

---

### How can I make an animation that always runs?

Make the animation looping, and don't let it transition to another animation.

---

### Where can I find the error/output logs for Bedrock?

`C:\Users\YOUR_USERNAME\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\logs`

---

### How can I make an utterly invisible shadow under the entity without changing the collision boxes?

-   1. use runtime of armor stand
-   2. edit the shadow.material

---

### How can I remove clouds?

Change the RP cloud texture to be completely alpha.

---

### Can I add knockback to entity's attack without using minecraft:behavior.knockback_roar?

No

---

### Can I make a directional facing custom block?

No

---

### How can I test if a player is in the Nether or End?

A detailed explanation of how to do it:
Create a component group for each dimension, or just one if you're only testing one dimension. Then add an environment sensor to the player.json file testing for the `is_biome` query. Set the tested biome to `the_end` if you are testing for the End dimension. If you are doing the Nether, change the `all_of` statement at the beginning of the sensor to `any_of` and then run five different biome tests for the five other biome IDs of the 1.16 Nether: `hell`, `crimson_forest`, `warped_forest`, `soulsand_valley` and `basalt_deltas`. Then make an `is_in_nether` (or is_in_end, depending on which you do) component group for the player, and make the environment sensor run an event that adds the respective dimension's component group to the player, removing any others if necessary. Each component group will spawn its own custom entity, which will run an animation controller to add a tag to the player, indicating they are in a particular dimension (for example, /tag @p add inNether), removing other dimensions' tags if necessary. The entity(s) doesn't matter much; make it despawn after a tick or two. After that, feel free to do whatever you want with the players tagged in their respective dimensions. Back to the previous example, identifying all the players in the Nether dimension will look like @a[tag=inNether].

Tl;dr version:
It can be done through an environment sensor and a bit of JSON magic.

---

### How do I stop my entity from being pushed around?

```json
"minecraft:push_through": {
  "value": 0
}
```

---

### How do I stop my entity from being pushed by water?

You can't

---

### Are variables saved?

No, they are reset when the entity unloads (like on world exit or chunk-unload)

---

### How can I make a mob glow?

Use the `entity_emissive` or `entity_emissive_alpha` material; it uses the alpha layer of images to make things "glow". See spider eyes for an example.

---

### Is it possible to give yourself a spawner with already mobs inside?

No

---

### Is it possible to do "on_entry":["/execute @e[name=variable.some_name] ..."]?

No

---

### Where can I download the bedrock resources?

The [bedrock resources can be found here](https://discordapp.com/channels/523663022053392405/523663022498250762/715962598843089008).

---

### Is it possible only to damage an entity when holding a specific item?

Set up a damage_sensor and set deals_damage to false when they're not holding the item.

---

### Where do I find the molang variable list?

The [molang variable list can be found here](https://bedrock.dev/docs/stable/MoLang).

---

### Can I use /give to get shulker box with items?

-   No
-   The workaround: Clone a chest to the player and /fill destroy it.
-   Another workaround: Spawn a dummy entity with a loot table and then kill it.

---

### What are the max seconds in the /effect command?

-   2147483647

### How can I freeze an animation when it completes?

-   Use `"loop": "hold_on_last_frame"`. This will pause the animation on its last frame instead of resetting back to the base pose. Useful for things like chests, which need to open and _stay open_ until closed.

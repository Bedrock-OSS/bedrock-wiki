---
title: Blocks and Items Q&A 2024/08/30
category: Q&A
mentions:
    - SmokeyStack
---

This Q&A took place in the [Bedrock Add-Ons discord](https://discord.gg/uZF75ZxcJq). Nine Mojang/Microsoft employees joined us to answer questions about the custom blocks and items API. Questions were community sourced.

:::warning
Not all messages were copied over, and some were copy-edited. If you want to see everything, join the above discord, and get the "events archive" role.
:::

## HCF Deprecated/Removed Features Replacement?

-   **Q**: Are there any plans to bring back all or some of the deprecated/removed features from the HCF experiment whether a straight up reintroduction or via a new method? Two components as an example are `minecraft:knockback_resistance` for items and `minecraft:unwalkable` for blocks.
-   **A**: When we were working through this, we prioritized the pieces of HCF that were being used, and the ones that were not, were not included with the initial work, however this should be in our backlog to go after in the future (and if it isn't, it will be after this Q&A) thank you for the feedback!

## Why the Recent Changes?

-   **Q**: How did you come up with the very interesting recent changes and what motivated you? Why was replacing hcf with custom components a good idea in your opinion?
-   **A**: HCF events had some issues with stability, expandability, and was overall (we felt) clunky to use. Eventually it was decided that we needed a completely different solution for long term support of the feature. Scripting is far more stable, easier to expand with more functionality, and is more inline with other existing features in addition to being more powerful. We iterated on several approaches to integrating scripting and JSON events which eventually led us to what we have today with custom components. We do have a few improvements coming to custom components sometime next year that we are excited to share with you all! Overall, custom components we thought provided more power to creators and had far better long term support from the Bedrock platform than HCF events did.

## Custom Tile Entities

-   **Q**: Will there be such an opportunity to create your own blocks - chests?
-   **A**: That's not on our near term roadmap, but we are actively looking at all of the block behaviors that can't be replicated in data!
-   **Q**: Are there any plans of adding tile entities? Or, at least, block animations?
-   **A**: Definitely a neat area to explore. I think with custom block components (script) it makes it a _lot_ easier to "fake" this. I think most of the features of block entities can be emulated with that. One thing you can't easily do is block-specific storage (like a chest inventory) so that would be really nice to enable somehow.

## Item Description Component

-   **Q**: Are there any plans to add an item component to items that allows us to add descriptions to them? A good example in vanilla are music discs and goat horns. A pretty good use-case would be for custom music discs, or an item that has a short description on how to use it. It can even be useful if we make our own potions, because this way we can list our effects using this component.
-   **A**: This is an interesting idea to explore! It is not currently in our near term roadmap though. As mentioned, the scripting API `getLore` can assist here but wont work in the creative menu

## Custom Components

-   **Q**: Are there any plans to allow data binding to custom components instead of the has or does not have interface we have currently?
-   **A**: This is a feature we are looking forward to doing and will be coming sometime next year. We want to flatten custom components into something that looks and feels more like other components.
-   **Q**: Does this include parameters or will they be coming sooner? Paramaters would make custom components much more shareable across items and blocks, as well as between projects.
-   **A**: Both custom component flattening and parameters are likely to be released together, and yes will also likely require scripting version 2.0.0. For now we are saying that both of these features will be coming sometime next year

## Work more with the ScriptAPI:

-   **Q**: Idk about the others here what they have been doing before creating Addons, but I'm coming from a JavaScript Website Creation/ Discord Bot Creation background and I find it relatively hard to work with all those JSON files well I'm not suggesting to completely abolish them but I would love to leave the Visual Features of the Block and Items into the JSON files and move everything else that has to do with Events, Functions etc into the API, that's a common thing in developing mostly anything that the main part is in a Coding Language like JavaScript or for Minecraft Java well Java. I might make some people angry while saying that (The HCF Removal also had some hate) but yeah me as a general development found it weird and confusing when starting with Addon Creation

In my Head it would be something like this

-   Your JSON File ( Got the Basic information about your Block/ Item like Texture, Geometry, Category etc.)
-   Import that JSON file into your Script
-   Register the Block/Item
-   And use API Features. (Idk for example item.attackDamage(Int) etc. or generally everything that has nothing to do with the Visual side of it so mostly the behavior of the Block/Item)

-   **A**: I think in general we've been slowly moving towards "JSON is definition, scripting is logic" which I _think_ is the idea of your post (although with more "magic hookups", no need to import the JSON into script).

## Documentation

-   **Q**: Are there plans to update MS learn or wiki.bedrock with working examples of JavaScript?
-   **A**: From my team side, we recognized the gap in some of the documentation and moving forward part of our definition of done will be to add better usage examples to the learning portal as we release more APIs. That being said, for now it will probably be TypeScript examples. I also recognize the learning curve for TypeScript can be kind of steep, so I will take this idea back to the teams to see if we could provide multiple ways (e.g. TypeScript and JavaScript) but no commitments on that yet, but really good feedback, thank you!
-   **A**: We're also working to make the scripts and samples more accessible and easy to use from the docs.. as early as next week 😉
-   **Q**: Document How Falling Blocks Work. I asked this is a question because the sand in Minecraft functions rather like an entity with gravity but when I have tried to recreate it in the past I have not been successful so it would be good to have a template file for sand so that we could create our own sand types
-   **A**: I'll take this one as a doc request, thanks!

## Custom Music Discs

-   **Q**: We already have the ability to make custom music discs using "minecraft:record" , but are there any plans on making the component compatible with custom music
-   **A**: This is unfortunately not in our near term roadmap 😦

## Waterlogging

-   **Q**: Any plans to add in waterlog/snowlog components for custom blocks?
-   **A**: Yes! Waterlogging is part of our short-term roadmap (6 months ~ish), while snow logging is still a part of the long-term plan (+6 months).
-   **Q**: Lava logging as well?
-   **A**: That is also part of the long-term plan <:bao_doggo_happy:939767354261372978>

## Item Properties

-   **Q**: Are item properties ever going to be considered for the future? Being able to store per-item data that can be queried through the client would be really useful- if this was added only for unstackable items (like item dynamic properties currently function in script API), that would be cool 👍
-   **A**: Thanks for the requests in this area!

    We have more infrastructure likely to do in the area of items first (item stacks don't have an "identity" in the same way that blocks or entities do) that i think would be a pre-req for giving them systems kind-of like properties on blocks.. so it's probably more of a medium term thing to beef up items before we get to (the longer term) adding of new capabilities.

## Items with Flipbook Animations

-   **Q**: Will it be possible to create an item with flipbook animation or at least with several textures?
    Like vanilla compass or watch.
-   **A**: I'll take this as a feature request. IIRC I think the flipbook stuff is more deeply intertwined with blocks such that it's probably not super easy to adapt to items. Also, there is some work we need to do in the medium term to items to "beef them up a bit" before we can begin to give them things like item properties, etc.. sorry about that, tl:dr, not in the short or medium term 😦

## A Method to Break Blocks on Contact with Water

-   **Q**: In-game examples:

    -   Carpets
    -   Farmable blocks/plants

    This is a feature I have been wanting to implement with my add-on for quite some time. I attempted at one point to build out this system using Scripting API. However, water in Minecraft behaves in a way that can be drastically manipulated in all sorts of weird shapes and patterns, which makes it impossible to detect every scenario.

    Thanks

-   **A**: This will be a block component as part of our short-term roadmap (less than 6months ~ish)!

## Redstone

-   **Q**: `redstone_conductivity` was a good start, but to make a true redstone device, it must be able to respond to redstone signals. And while you can read redstone power via scripting, the process in doing it is inefficient since you have to use queued ticks to constantly check. There's also no ability to generate redstone power, so for you can't make a sensor that responds to stimuli like daylight sensors.
-   **A**: Thanks for the ideas, I'll bring it to the team to discuss how it fits into our existing plans!

## Future Plans for `blocks.json`

-   **Q**: What are the future development plans for the `blocks.json` file? Currently, it has a few significant limitations, including its incompatibility with custom geometry blocks, which is one of the most known issues. Will this file be upgraded or replaced? Additionally, what were the original intentions behind its availability for creators? I'm intrigued!
-   **A**: short answer though is we are planning on getting rid of blocks.json, as far as the intention behind it initially, that is before my time 😆. But once it is gone, time heals all wounds

## `onBlockUpdate` and `onBlockDestroyed` (any) custom component

-   **Q**: I really wish these two events would get added as they'd make some things easier to make
    `onBlockUpdate`, which would make connecting blocks and doors easier to make
    `beforeBlockBroken`, for whenever the block is broken in any way including mobs or commands
-   **A**: This is something that we have looked into, unfortunately it is more complex that it appears to support. Block updates when a neighboring block changes is not in our near term roadmap. `onBlockDestroyed` before event however is a great feature request we can look into doing but is not currently on our roadmap

## Colourmap in Custom Blocks

-   **Q**: Are there any plans to make custom blocks use colormap, like grass and leaves?
-   **A**: Yes we have that on our internal roadmap. somewhere between medium and long term, not ready to share exact timing yet. it will be next year sometime though

## Get Inventories of Items with `minecraft:storage_item` Component via ScriptAPI

-   **Q**: Just as we can do with entities, do it with the inventory of items and have the ability to remove, add items, etc.
-   **A**: It's in the backlog! Not sure exactly when we will get to it though. Ideally in the future they will be more "coupled" and come out closer together 😄

## Custom Creative Category and Item Groups

-   **Q**: the ability to add items and blocks to an existing or new category in the creative inventory
-   **A**: You can currently create your own item groups, if you add a unique name it will bundle the items you add to it together BUT it doesn't do the cool "collapse the group and add the plus" icon, it just moves them all together.

    Bringing inline the custom group system to function like the vanilla groups do is on our short term roadmap!

    We don't currently have custom categories in our roadmap.

## Rotation Component for Items

-   **Q**: The purpose of this component is to allow players to rotate the item in their hand in x, y and z values at any angle they want (it allows to rotate items without using attachable method).
-   **A**: We have this with item display transforms for block items and for other 3d items it should be possible with attachables?

## More Block Geometry Capabilities

-   **Q**: I love working with blocks, but there are sometimes where I would really like to have some features or tools that we don't have right now. But specially regarding the block geometry these are my questions <:bao_icon_entities:937567566442922084> :

    -   Will we be able to rotate bones and textures independently? using the `minecraft:transformation` component or even `minecraft:geometry` itself?
    -   Are there any plans to improve block geometry right now? something like `item_display_transforms`.
    -   Will it be possible to modify the block geometry via scripts in the future?

-   **A**: So improving data driven geo we are actively working on, and some of the item transform work is in preview. So short answer is yes. As far as modifying geo via scripts, that currently is not in the plans
-   **Q**: `full_block` and `cross` are great. It'd be super great to get more than that, though. There are _tons_ of shapes both hobbyists and professionals would love to imitate from the base game, such as slabs and stairs. Having to incorporate these into nearly every resource pack that includes custom blocks also just feels like unnecessary bloat.
-   **A**: So currently we don't have any other vanilla geometries data driven but that's definitely one of our goals in the long term. A lot of the features like item transforms and UV lock and things have been part of an effort to reach a level of parity with vanilla functionality that would let us expose more of the vanilla geometries.

Are there any vanilla geos you think would be particularly useful to focus on?

## Lock Mode for Blocks with Storage

-   **Q**: As we know items lock mod don't work on storage blocks. any plan on changing that?
-   **A**: You could try making the block you want be placed by an item using the block_placer component.

    And use an attachable to have the block appearance in hand

## Immovable Blocks

-   **Q**: This was a thing that got removed for some reason. I would love to have a way to make blocks immovable again. this can be either with a component or event that we can cancel.
-   **A**: This is in our backlog but not sure when we'll get to it

## Block Polymesh Model Support

-   **Q**: At the moment we have an experimental opportunity to use polymesh models only for entity models
-   **A**: polymesh is cursed. definitely no plans to extend this.

## Custom Armour Trims

-   **Q**: Would like to be able to create my own templates for patterns, as well custom items as colors for patterns.
-   **A**: Hi, thanks for the request!

    What do you mean by "custom items as colors for patterns"?

    We do have thoughts to expand armor trim but nothing on the roadmap in the near term.

## Storing Entities in Items

-   **Q**: It would be very useful to have items and blocks that can store entity data.
    Examples:

    -   custom mob buckets
    -   custom bee hives

    this could be handled with components and scripts

    ```json
    "minecraft:entity_storage": {
    "release_on_destroyed": true,
    "max_entities": 1,
    }
    ```

    not sure how viable this syntax is, but something like this would be good

    ```js
    const storage = block.getComponent("minecraft:entity_storage");
    let stored_entity = storage.entities[0];
    dimension.spawnEntity(block.location, stored_entity);
    ```

-   **A**: I really like this idea! When I've thought about this in the past I've envisioned we'd allow creators to "opaquely" snapshot blocks (Blocks + Block Entities), Items (whole item stacks), and Entities (who entity NBT) in a way that allows you to "persist" the data. But we wouldn't allow parsing/data sniffing/etc. to prevent some very spooky behavior.

## Are there plans for onEquip/onUnequip events?

-   **Q**: It would be very helpful if the item custom components interface (or world.afterEvents) supported an event that fired when one of the `equippable` slots changed.

    Perhaps `onEquip(arg: {slot: ContainerSlot})` and
    `onUnequip(arg:{slot: ContainerSlot, previousItemStack: ItemStack})`

    This would enable the creation of efficient passive effects (helmet that gives night vision, etc.) without the performance impact of constantly checking each player's equippable slots using runInterval, as is required now.

-   **A**: We have the concept of inventory events - including equipment events. We'd want to consider this both at the "custom item component" event.

    It's not something we're working on right now but something I think we'd like to get to in the medium or longer term

## Custom Keybinds/Buttons Functions for Items

-   **Q**: I would like to see the ability making an item run a script when a specific Key/button is pressed. This would be so cool when making maps, or combat add-ons!
-   **A**: We are investigating some _very primitive_ input APIs around movement. Mostly the things that "just work" for all of our input modes. Custom bindings (which would need to include touch screen UI) are on our minds but not currently in the backlog.

## More Rendering Options for Blocks

-   **Q**: Currently, we are given 4 render methods: `alpha_test`, `opaque`, `blend`, `double_sided`. Each of them comes with their ups and downs. However, blocks with transparent pixels required either `alpha_test` or `blend`. Both of these have their own issues, `alpha_test` will completely unrender when you're 70 blocks away and `blend` has some issues as well according to other people in this discord. Neither of these options to my knowledge as well allow face culling lke vanilla glass.

    Does Mojang plan to add support for blocks to change render method the further away you are such as vanilla leaves?
    Does Mojang plan to allow block culling to occur not just when a face is covered by an opaque block allowing things like vanilla glass to occur?

-   **A**: We have a new article coming to the learning portal soon that covers that covers the render distance per render_method, so you won't have to guess.

    The render_method that <@905553488510079026> called out will also get added to the existing learning portal page with the other methods (probably in one documentation update). For Block culling, you can totally replicate the vanilla glass functionality with the faces on a full block.

    Replicating Glass requires two things, you need to use the render_method: alpha_test_single_side\*

    This will do the visual appearance that you are expecting when you look through the block and will cull the backfaces of the block. The culling rules will literally remove the face when next to a full face (like dirt), but the visual you want should be achievable just by changing the render_method

\*Editor's Note: This is a typo on Mojang's behalf, it was meant to say `alpha_test_single_sided`

-   **Q**: I decided to fork this into its own question. Related to https://discord.com/channels/523663022053392405/1277725678539640852/1277725678539640852:

    -   I'm wondering if we could control our own block rendering like how vanilla leaves dynamically change their render method _based on adjacency_. For example, if a vanilla leaves block is surrounded by solid blocks on all sides, it'll change its render method to be more performant.
    -   Thoughts on render methods like those used by barriers, light blocks, and structure voids? I have to make invisible collision-only or placeholder blocks for Marketplace all the time, and it'd be great to have some billboards floating to see where they are.

-   **A**: Re render method based on adjacency: There are lots of adjacency/connection features that we are looking into and trying to figure out how best to support and this is certainly part of that.

## PlayerInteractWithBlock

-   **Q**: I haven’t been involved in addons much for the last month or two, however I remember (at least then) that we couldn’t have interactions with vanilla blocks in stable - you’d have to use itemUseOn which requires a held item, as PlayerInteractWithBlock was still in beta despite being listed as stable on the docs. Has this changed and if not, should we expect to see this in stable in the future?
-   **A**: We know this one has been in beta for way longer than we intended 😕 but we're hoping PlayerInteractWithBlock should be moving into stable in an upcoming release. We feel it.
-   **Q**: Care to share what y'all found was wrong with it along the way?
-   **A**: For the player interact events we wrestle/wrestled with the issue that they repeat frequently in ways that are hard to predict or even are device dependent... it makes for an unpredictable API.

    We considered a bigger refactor for the area but I think that's "risky" given all the behaviors and devices that are tied up in it. What we landed on is having additional data (an isFirst property) which can help a creator know whether it's the first interaction in a series of events. Creators will probably still need to have some sort of internal tracker for "is this the _first_ event I'm seeing" which is not awesome.

-   **Q**: If canceled, the block cannot be interacted, so player can be able to place blocks onto it without sneaking. This is helpful if we want to make block to be interactable only on certain condition.

    For example, we can make the south face of the block to be interactable, but not the other face of the block.

    Because currently, when `onPlayerInteract` is present, the whole block becomes interactable.

-   **A**: The `onPlayerInteract` event is an after event, but if it was a before event we may be able to cancel the interaction. An interesting idea, unfortunately it is not currently on our roadmap but is worth a look into.

## Summoning Entities with Block Arrangements

-   **Q**: Suggest adding a feature where players can summon entities using specific block arrangements, similar to the Wither or Iron Golem. This would expand gameplay by introducing new creatures summoned through unique block patterns
-   **A**: Yeah, for this one what I'd probably recommend is something like the player place block before event (https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerplaceblockbeforeevent?view=minecraft-bedrock-experimental) and do a bit of pattern matching of nearby blocks to see if it matches something and then summon an entity if there is a match. Not sure we'd necessarily have a JSON "data driven" feature for that any time soon.

## Block Tags Java parity

-   **Q**: It would be great to get a variety of tags to make it easier to filter blocks using scripts instead of being selected individually, as well as making custom item functions easier, as custom tools, so when interacting with blocks it would be through several with some vanilla tag
-   **A**: I think we are going to poke this area soon:tm:.

## Allows transformation -> rotation to be set in any rotation.

-   **Q**: Currently, we can only rotate blocks divisible by 90 (such as 0, 90, 180, 270, and negative values). So we can't choose to rotate them 45° for example, to make our block rotate 45° we have to create a new model that is rotated 45°. I suggest for flexibility of this field, so we don't have to create new model just to rotate our block with more precision.
-   **A**: I also think this would break Minecraft visual design guidelines. So definitely no desire to do the tech work to make this work.

## Texture Variation For Modelled Blocks

-   **Q**: Are there any plans to allow custom blocks to have varying textures?
-   **A**: Texture variants for Custom Blocks using material_instances is on our long term roadmap!

## Support for Ambient Occlusion on/cast by full-block geometries

-   **Q**: As it stands now, blocks utilising the `minecraft:geometry.full_block` model (or equivalent) are not treated in the same way as a typical full block for the sake of ambient occlusion. They appear to catch shading from other blocks, but do not catch other blocks' ambient occlusion, nor cast their own shading or ambient occlusion.

    Most notably his impacts any block that needs to apply rotational states with textures per face.

    Here is an example created with a custom log, as compared to Vanilla's Oak Logs:
    https://media.discordapp.net/attachments/1215333861362237470/1278887412747079722/Kaleidoscope_003041.gif?ex=66d27037&is=66d11eb7&hm=65795e2b03ca8de6407dc969454b49caa6858443128815294641747f61fe7301&=&width=1258&height=702

    Having this fixed would enable creators to properly recreate a plethora of natural Vanilla blocks, without sacrificing that bit of immersion lost in a visual bug. (And I'd finally be able to add my beloved Redwoods!!)

-   **A**: So this actually seems like a bug to me? Would you be willing to add that block Json to this thread and I can take a look? But overall in terms of the mix of other "solidity" concepts and the full block geo, we are looking at how to split "solidity" up into more logical chunks of behavior that can be customized.

## Camera Collision Component

-   **Q**: Some blocks - such as glass blocks, for example - have a different rules for collision with the camera than for entities. It'd be neat to be able recreate this behaviour, such as:

    "minecraft:camera_collision": false

    …Or perhaps with the same properties as the `collision_box` or `selection_box` components.

-   **A**: Oooooh, interesting.

    To be clear, would you like collision rules to be more like entities or more like glass?
    Said another way, what is the exact behavior you want to recreate?

## Custom Block Sounds and Block/Item Sound Events

-   **Q**: I think it's really strange that at the moment, there isn't any way to add custom sound types to `blocks.json` definitions. There are shortnames for Vanilla blocks, referencing their set of sound events triggered by gameplay ( step, break, place, etc. ).

    For example:

    ```json
    "dirt_with_roots" : {
        "sound" : "dirt_with_roots",
        ...
    }
    ```

    It would be very, very nice to able to at least define _custom_ names to use in these definitions, with links to custom sounds for the default block events.

    Similarly, it would be even nicer to have **custom** sound events, to reference here and in other places such as the `minecraft:record`'s `sound_event` property, and perhaps adding new similar properties included on:

    -   `minecraft:shooter`:
    -   A sound event for completing the use, built into the definition
    -   `minecraft:food`:
    -   Sound events for actively using and completing use, similarly to, for example, the Honey Bottle from Vanilla
    -   `minecraft:wearable`:
    -   A sound event for equipping the item, similarly to, for example, the Netherite armour from Vanilla

    ...And perhaps a means to play attached sound events from Custom Block/Item components in the Script API?

-   **A**: Yeah, I believe this all comes back to the ability to add custom sound events (vs. override vanilla ones), yeah? We're tracking this one... I'll take this as an additional +1. It's not on the short term roadmap though

## Multi-Collision Blocks

-   **Q**: Will there be a way in the future to have a custom hitbox, or a better way of making them.

    Like how stairs have a different collision box than a normal blocks

-   **A**: We know the interest in being able to do stairs that require more than the current collision (and selection) box component is capable of, so we're looking at some options that will allow us to bring that functionality to you! It's on our longterm roadmap

## Disabling Silk Touch

-   **Q**: We can already do this with scripts, but it doesn't feel "vanilla"
    It would be nice if we had a way to disable a block dropping on silk touch, or changing the loot for silk touch
-   **A**: On a custom block this can be done in the loot table by adding a match_tool condition that includes the silk touch enchantment.
    https://learn.microsoft.com/en-us/minecraft/creator/documents/loottableconditions?view=minecraft-bedrock-stable#match_tool

    On our short term roadmap is a way to change a vanilla block's loot table on destroy.


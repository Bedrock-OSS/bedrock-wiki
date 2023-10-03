---
title: Scripting and Editor Q&A 2023/09/22
category: Documentation
mentions:
    - McMelonTV
    - SmokeyStack
---

This Q&A took place in the [Bedrock Addons discord](https://discord.gg/uZF75ZxcJq). Ten Microsoft/Mojang employees joined us to answer questions about the Scripting and Editor API. Questions were community sourced.

:::warning
Not all messages were copied over, and some were copy-edited. If you want to see everything, join the above discord, and get the "events archive" role.
:::

## Scripting

## Better Cameras
-   **Q**: Will we get point rotation with cameras using script api in the future? Will camera mode be integrated into Editor mode as an editing suite?
-   **A**: Visualization of camera paths (and just paths in general) is a great idea and something we've been considering
-   **A**: We do have future plans for an orbit camera preset, so it's great to know you would find it valuable.

## Any updates on additional languages?
-   **Q**: In our last QnA we discussed the topic of additional languages and the response was you can't commit to adding official support for other languages. Has anything changed or are we stuck with JS for another year
-   **A**: Nothing has changed here.  Our scripting stuff is pretty abstracted away from Javascript but it would still be a huge dev cost to support multiple language runtimes.

## World Generation via ScriptAPI
-   **Q**: I've ranted about this for a while. My time learning and modding Legends, I've discovered Villages and Biomes are placed via their B# scripting system. Is there a plan for Minecraft's ScriptAPI to support this as well?
-   **A**: For features in the game we try to figure out what is the best API surface to allow customizability and modifications on top of it. Scripting is incredibly powerful and might be the right choice for world generation, but so might something like data driven JSON definitions for customizations. I will say that world generation is a scenario we've heard a lot about and we will consider the various API surfaces available to figure out the right way to expose stuff in the future.
-   **Q**: Get biome values like biome climate, biome id, noise type, also with the method getTags, get all the tags of the biome,
-   **A**: Got the feedback - "biome discovery" APIs would be a nice area of future investment..

## QuickJS
-   **Q**: Are there any plans on adding jit compilation to let scripting run more smoothly?
-   **A**: The challenge is that even with JS engines which do support JIT (like V8), it is not supported on all of our target devices.
-   **A**: Mentioned elsewhere and in this thread but our Javascript engine doesn't support JIT-ing.  If one day we move to a different JS engine we can look into JIT (on some platforms anyways, many of our platforms don't support JIT-ing unforunately).
-   **Q**: Are there any plans for moving away from QuickJS anytime soon?
-   **A**: We currently don't have any plans to move away from QuickJS any time soon.
-   **A**: We do aim to make scripting cover as many scenarios as possible, and yes getting the right performance baseline is an important part of that and something we hope to continue improving. There are two halves two this: ensuring the API paradigms we create are performant for the common use case and improvements to the fundamental QJS integration (and bedrock engine itself).
-   We are a sharp contrast to Java modding frameworks though, especially things like fabric, because at the end of the day we are a versioned contract on top of the engine and not a way to modify the engine directly. But we hope it is easy to use and powerful as well!

## Read and (or) Write json with js
-   **Q**: Do you have plans to allow reading and writing JSON with JavaScript?
-   **A**: Yeah, if you stick JSON files in your scripts folder, you can read them as an import, though were there questions about reading JSON from outside the scripts folder? It is very unlikely we'd support writing of the JSON though.
-   **A**: If you want to have your own data file for your own usage and want to use .json as the format for authoring it, you should be able to do that by putting it into your scripts directory.  But it's read-only data.
You can't save arbitrary files (.json or otherwise) anywhere.
You can't directly load/parse .json file from elsewhere in the behavor_pack.
-   **A**: I might chat with a few folks about this since I may have just been prototyping in the engine, i'll get back to you on this 😅 . But I totally get this targeted scenario within script itself, and I hear the feedback for outside of the scripts folder, but this is more complicated.

## Scripting replacing more than JSON events
-   **Q**: Would scripting replace more than just json events? If this is  the case, would we be able to make behaviors by using scripting or will it just stick to replacing JSON events? I could see a need where we could make advanced entity component or even item and block components, and maybe even control how they behave when other script events are fired or returns true.
-   **A**: Yeah, scripting is more than just JSON events, but the paradigm of scripting is still very event driven (it's just not limited to what JSON events have had). This is a huge generalization, but the way I see it is a split of definition in JSON and logic in scripting roughly. So scripting will continue to get more powerful and hopefully integrate with more of our systems.
-   **A**: Haha I didn't say take over, just that I think it's important that we make the responsibilities of scripting vs. JSON clear, and they interact well together. It should be easy for y'all to know what to do in JSON and when to jump and work in script as well (and vice versa)🙂 

## Scripting API storage system
-   **Q**: What leads to a decision that dynamic properties is now not required to be registered through the worldInitialize event?
-   **A**: We basically came to the conclusion that any restrictions could be worked around (by placing data on blocks or signs for example), users might suddenly run into limits in long-lived maps, and that we were making the API too restrictive to the point that creators were still using scoreboards for databases, which is something we want to avoid.

## Custom ScriptAPI modules
-   **Q**: Will we ever get the ability to create a custom ScriptAPI module? Something like the @minecraft/server-editor module 
-   **A**: Bundling!

## OreUI
-   **Q**: Will we be able to use external React Libraries with OreUi
-   **A**: Unfortunately, our in-engine web renderer (which underpins OreUI) is optimized for performance and is not 100% standards-compatible.  Consequently, 3rd-party react libraries won't generally render the same way they do in full web browsers.

## Community Help
-   **Q**: How can we as a community help introduce more people to scripting API?
-   **A**: Scripting-related with re: to the Editor ... 😉 We'd LOVE to see videos of you using the Editor, what you're creating, and seeing in real time (in a video) what your wishes and pains are! It's super helpful for the team!
-   **A**: Help us identify the tools and documentation the community needs to learn this stuff! We know it's hard, we know it's difficult.
-   **A**: Be excellent to each other. Know that if someone is struggling, they are vulnerable. So try not to act superior if you are using scripting and they aren't. Try to help and encourage where you can.
-   **A**: And on video content - I know this would help a lot of people. Stable APIs should be safe here since we need to provide backcompat on these.

## Entity AI
-   **Q**: Will we ever see the depth of entity behavior control like there is for simulated player (minecraft/server-gametest)?
-   **A**: It's not something we're working on right now, but yeah, I definitely hope we can make a good start with AI APIs soon.  Standard disclaimers though - we wouldn't be getting AI APIs out any time soon. 
-   **Q**: We should be able to force ai goals to start stop, change priority
-   **A**: Noted - would love to see AI APIs in future waves (nothing in the short term though), and I might imagine that the quickest way to do that is through some form of manipulation of AI goal components directly or indirectly.
-   Just spitballing, but I suspect there maybe a good subset of AI primitives we could offer (+ entities that probably work without AI goals) without having to bite off an API for every single AI goal - maybe like SimulatedPlayer APIs+++? -- and then you all could build libraries that do higher level things on top of that;  but would love folks' thoughts if that's useful vs. "just give me a way to create/read/update/delete all the AI goals".

## Saving Data
-   **Q**: Are there plans for storing data per unique item?
-   **A**: This is good feedback, and definitely something that we are thinking about. We are currently working on world and entity dynamic properties, and plan to start thinking about ItemStack dynamic properties soon!
-   **A**: We'd love to get creators away from storing metadata on lore. 😄 
We recently removed registration from entity dynamic properties, so item dynamic properties would likely work the same way.
-   **A**: We're looking into it! We definitely don't want lore to be the data storage solution for item stacks, especially since lore gets synced with clients.
-   **Q**: Access to item IDs from the ItemStack Class?
-   **A**: Unlike entities, item stacks can get copied around, merged and split so it's difficult to assign a reliable ID. As an alternative, we might consider adding item tags at runtime or simply wait until dynamic properties are available on items.
-   We'd love to hear the specific scenarios around why item IDs would be useful.
-   **Q**: A new data structure for saving data upon leaving the world
-   **A**: As mentioned above, entity and world dynamic properties are our current solution for storage. We recently lifted size restrictions on dynamic properties and are working towards getting the APIs into a stable release for all creators.
-   File APIs are something we've been discussing. One of  our main goals is to get players off of scoreboards for storage, so let us know if there's anything we can do.
-   **A**: Per the original question above, we've also been a little hesitant to add a worldUnloadingSaveAllYourStuff event because we can't control all the unload dynamic of unloading at all times on all platforms (to say nothing of things like crashes, etc.)  So I think our recommended strategy is to use things like dynamic properties to persist state as you go. That has it is own downsides for sure (can be painful to make your code robust against).  tl:dr; I'm not sure we have a strategy we love about how to save lots of game state; we'll have to evolve this strategy to see where your feedback takes us.  We may yet still have some world unload events where I could see some "persistence" happening

## Worker Threads
-   **Q**: Will we ever see worker threads being implemented or having options for another scripting language where I can use multiple threads?
-   **A**: We've thought about worker threads, nothing in the immediate plans, but hearing about the use cases today has been valuable.

## More Power to the Scripting Engine
-   **Q**: Is there any plans that allow for some sort of lower level access to world data on the server? So instead of having to call setblock/fill we can get whole chunks from a function call modify them then put them back into the world.
-   **A**: We would love to provide more performant block APIs. I agree that setBlock can be a bit too costly for multiblock operations and fill is too restrictive when trying to set different block types. We've also discussed the possibility of having worker threads to perform large computations without bogging down the main server thread.
-   **Q**: Are there any plans that allow users to change how many commands are able to be in the command queue? Because 128 can be limiting for some jobs.
-   **A**: The command queue restriction is something we can look into. Would it be helpful for you to have an API to query the command queue size?  I'd love to here more about the scenarios where you're impacted by the limit.
-   **Q**: Is there a possibility that there will be a way of at world startup running JS before the RP and BP get loaded? This would allow for things like dynamically generating textures and items at run time and make doing stuff like tinkers construct much much much faster
-   **A**: We haven't looked into this yet but it's something we'll consider.

## Ender Chest Component
-   **Q**: Would there be an Ender Chest component in the Script API?
-   **A**: I don't think we have this in our backlog but this is great feedback!

## Boss Bar APIs
-   **Q**: Will we ever get any bossbar APIs? It's great for showcasing a smooth cooldown, or a progress bar in general.
-   **A**: Thank you for the suggestion!
-   **A**: yep, it's a gap we've talked about.
-   **A**: (don't get too hype folks, when I request things from mammerla he ignores me for about 18 months before any work starts 😛)

## Slash Commands
-   **Q**: When can we expect custom slash command registration
-   **A**: Likely not anytime soon but it's something we've talked about.
-   **A**: Use /scriptevent 😛

## New Events
-   **Q**: Will there be more before events like before event for entityHurt, entityDie, etc.?
-   **A**: We have this in mind and there are internal discussions about it 🙂
-   **Q**: Are item transfer events planned? For example, item moved, item dropped, item picked up, item given, item removed, item modified, item merged, etc.
-   **A**: Thanks for the reminder. It's definitely something we want to take a look at adding eventually.
-   **Q**: Any plans to add a BeforeCommandExecute event
-   **A**: I don't believe this is one we have considered yet. What scenarios do you have in mind?

## Client Side Scripting
-   **Q**: Are there ever going to be ways for use to make client side mods? or ways for scripts on realms/world to be able use client side? if that makes sense?
-   **A**: Client side scripting is something that comes up regularly, and we recognize the value of it.  Creating a JS instance that runs on the client isn't difficult, but designing/creating/supporting a whole new client-side API is an enormous piece of work.  It's difficult for API design (because we need to work through UI controls and input schemes across many form factors), but is also a burden for authoring script, because it brings the complexity of two different script contexts and the need to explictly synchronize between them
-   **Q**: It is apparent that a number of Client side scripting modules are under development, but what exactly is the roadmap for them? The intentions and extent of their capabilities? Please tell us anything and everything about it!
-   **A**: For the most part we've been focused on server-side scripting API, and honestly, where we can keep things simple for most developers we'd want to add APIs on the server side (e.g., /server-ui as an example). 
-   At some point we know there are scenarios that will need client side scripting - client side validation, UI, input management maybe - so we'll probably cross that bridge and have more formal client scripting support, but probably not in the short or medium term.  There are a few hairy problems there. And again, our bias is to try to put as much into server APIs as we possibly can just to keep things simple.
-   **A**: I know a big thought of mine is also minimizing confusion. In a scenario where we consider client side scripting, it needs to be providing distinct value and not be simply a parallel to the server since they are fundamentally different. We hope the vast amount of scenarios can be handled by the server (and even editor has it's own input management on the server too!) but we are aware of the interest in client side scripting and that there are areas that may be best served by that.

## Better Script -> Data Driven Interactions
-   **Q**: Can we get more ways to send information between scripts and data-driven files on the resource and behavior packs?
It would be nice to be able to add something like a query to the molang for a given entity/attachable from a script.  For example, if you wanted to set the angle of an entity's bone in a script, you could do:
```js
entity.setMolangFunction("wiki", "getMyAngle", () => {
   return 32;
})
```
-   Then in the animation, you would write `rotation: [0, "script.wiki:getMyAngle()", 0]`
-   This would allow for things like inverse kinematics and running animations from behavior packs without wasting q.skin_id or q.variant or editing player.json.
-   **A**: Entity properties are the way! Let us know if there are any scenarios where entity properties don't meet your needs. 
The idea of callbacks from client to server is interesting, however we'd like to avoid introducing more client-authoritative behaviors.

## Vector class additions
-   **Q**: Could we get some more functions for vectors?
-   **A**: This is a great suggestion though and something i've been thinking a lot about. ConMaster is right that we don't want to promote a pattern that requires hopping from JS to our engine too much in tight loops, because that can be costly, but we are thinking about whether we provide helpers to y'all as a baseline too

## Beta APIs
-   **Q**: Are there any plans to get beta-apis out of beta and into the game as a normal feature?
-   **A**: Yes! We are actively moving many APIs from beta into "stable"!  Check out the change logs per release as we normally include those changes in there.
-   1.20.30 is and 1.20.40 will be a pretty big drop for non-beta APIs!

## Soon to be released API features
-   **Q**: What are some of the APIs/features that you are currently working on or that are going to be released soon?
-   **A**: Haha okayy I'll give you some! I'll preface this with a disclaimer that these are some APIs we are currently working on/going to start looking at soon, and we hope to get out soonish, but further investigations may cause changes to these APIs and/or prolong their release.
-   With that said, in addition to world/entity dynamic properties, we're currently working on explosion events, player interact events,  effect add events, and plan to look at NPC dialog APIs in the near future!

## Block Data
-   **Q**: Similar to Entity.prototype.setProperty and ItemStack.prototype.setLore,
would it be possible to cache/save dynamic data in a block in the future?
-   **A**: I might recommend dynamic properties or entity properties (sometimes referred to as 'actor properties') as the way of persisting state. 
-   I think we'd want to bring concepts like dynamic properties to itemstacks and blocks (though blocks can maybe be equivalently done by storing properties at the world level with coordinates in them.)  ItemStacks and Blocks need a bit more infrastructure under the covers though which makes this a bit longer in the pipeline.
-   (and also blocks have block states which might be a good way to store simple data for a block.)

## Marketplace
-   **Q**: Do you guys plan to support scripts in marketplace?
-   **A**: Spellrune was the first marketplace map to support scripting summer 2022. scripting has been available for all marketplace maps since early this year. There are a bunch of maps using scripting in the marketplace today. 
And if you haven't played Spellrune, it's awesome and it's free: https://www.minecraft.net/en-us/marketplace/pdp?id=f5cc05fc-616a-4963-a02b-5db3fcc9e311

## Websockets
-   **Q**: Any plans for adding WebSockets to ScriptAPI?
-   **A**: I'm personally a fan of websockets for some scenarios but I don't think we'll be doing much there officially any time soon, if at all.  It's an unsupported surface 😦
-   I would definitely want to review websockets one more time to make sure there is a script equivalent of all the data within it (e.g. events where websockets have events, etc.) And then you could pump out data via server-net on dedicated server.

## Entity Health APIs
-   **Q**: Are there any plans on adding more customization to entity health from the script api? Like changing the max health, canceling damage events, etc
-   **A**: This is something we have in mind and we have discussed

## Dynamic Properties
-   **Q**: Can we expect some improvements to Dynamic Properties, with more complex types in the future such as:
-   Items: We are not able to serialize item to string properly because we dont have access to all data related to these types
-   TypedArrays: Chance to save the byte array directly to Dynamic Properties as we are able to have bigger arrays then strings are allowed too. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
-   **A**: Great ideas!

## NBT
-   **Q**: There should be a special function that we can use to get raw data related  to entity, item or block. I am not talking about writing nbt(if we can, it can be cool).
or a nbt api can be made which allows read and modify(not create or insert) nbt tags.
-   **A**: Yep, I think just raw access - even if read-only would leave folks open to version over version breaks too much (e.g., if a property changes its function). And there is a lot of confusing stuff in there.
-   We'd probably prefer to facade stuff in NBT with methods and APIs more directly where we can help it. e.g., with itemstack some of those members are comparatively thin facade on NBT.

## How did you design the API?
-   **Q**: What decisions did you have to make relating to the structure of the API like how the API sometimes uses a method to retrieve information instead of a property, and why did you make these decisions?
-   **A**: For methods vs properties specifically we have an internal thought process for how to decide.  I will say that we aren't 100% consistent (it's an evolving flow) but we are trying to get to more consistency.
-   **Q**: What is the design process for building out new/reworking existing scripting features?
-   **A**: Our first step in creating an API is thinking through the scenarios in which it will be used. What gameplay will creators want to achieve with this API? Which pieces of this system will be important to expose? Which pieces of this system will creators want to be able to modify, and why? This helps a lot with brainstorming the shape of an API. If an API is in beta, we try to reconsider these questions in case any important scenarios were missed during the creation of the beta API.
-   Another important thing we look at during this phase is how this will be implemented in our codebase. Sometimes we come across certain limitations that cause us to have to design an API in a different way than we expected. And sometimes we come across more interesting properties/capabilities that a system has that we end up adding to the API.
-   While we're thinking about the above areas (scenarios and implementation), we try to shape the API based on creator needs and what we are capable of implementing in the engine. We then come up with a spec document that outlines all of the above, as well as a proposal for how the APIs should look. We then review it all as a team and iterate on it together. Once there are no further concerns and questions, we begin implementation.
-   Of course, discoveries during implementation sometimes raises further questions and concerns, causing us to further alter the design.
-   The jist for methods vs properties is "is it simple (not complex to calculate/set)? Make it a property, else make it a method"
-   **Q**: What qualities do you aim for when making the API?
-   **A**: There are a bunch of things really, but I think it can be distilled to a few major points:

1. Are we able to properly guarantee backwards compatibility of this API? Does it have deterministic behavior and timing?
2. Does it cover the desired scenario adequately and interact well with other existing APIs?
3. Is it easy to use, well typed (for easy intellisense guidance), and clear? We have a large amount of tests and internally we write demos of APIs to make sure they are easy to use. And i'm a huge advocate for making the typescript types help you write code faster as well.
4. How does the script API interact with or compare with existing functionality from commands, JSON, or molang?

-   A really big aim of scripting is a super stable platform to build experiences off of, but we also know that scripting is a part the broader extensibility surfaces of the game. So the combination of usability + reliability and compatibility is hugely important.
-   **Q**: What is your least favourite part of implementing a new api? Is it hard/complicated integrating it into the existing code base?
-   **A**: As a non-dev, I enjoy the whole process of helping design an API. From deciding which APIs are the most important to the community to create or pull out of beta, to having design discussions to decide how to make the API just right, to shipping it out to you lovely folks and getting feedback on it. Maybe the most difficult part of that process is when implementation begins and we find caveats in our codebase that limit an API design that we had planned, causing us to pivot our design plans. But I think the challenge is part of the fun! 🤪
-   **Q**: How do you decide how to design interfaces for systems that already exist in add-ons?
-   **A**: We make a best effort to maintain parity between existing JSON components and scripting when it comes to naming, primarily for the sake of creator familiarity. However, there are occasionally cases where feel that the API could benefit from a divergence in naming and/or interface, so it's not a hard rule. 
-   As for when we make an API a getter vs a read-only property, we make a best effort to be consistent by following a series of rules. For example, APIs that perform a complex computation are generally getters and APIs that simply return a constant or precomputed value are properties. That said, it's a bit of an art, and early on in development we weren't super consistent so there are a handful of exceptions.

## Localization
-   **Q**: Currently we can only represents blocks, items, entities, effects, and enchants by its typeId, but I think this is not user-friendly.
I suggest adding properties or methods to get lang key defined in `texts` folder. By using that, we can put it into RawMessage and show users proper name based on their language.

ex:
```js
Block.rawName; // tile.dirt.name
ItemStack.rawName; // item.bow.name
Entity.rawName; // entity.cow.name
Enchantment.rawName; // enchantment.durability
```
-   **A**: Good feedback!  We definitely want to support localized text strings in as many places as possible and if we don't expose the localize keys for items/blocks/etc. it would be hard to use them 😛

## Future of JSON in Add-Ons
-   **Q**: Are you planning to future to make json less used language to create an add-on?
-   **A**: I wouldn't say we necessarily want to make "JSON less used", but certainly for cases where you want to do gameplay logic I think there is a ceiling of expressiveness that is possible from JSON, vs. providing something more open ended like scripting. So for some events we ultimately want to connect them to scripting as the main way of doing logic. We still may have "shortcuts" though in the area of logic for keeping simple scenarios simple (start a particle when this event fires, etc.).
-    **Q**: What about custom item/block/entity registries done by scripts? Is that planned?
-    **A**: no, I wouldn't expect that there would be a script-only way of registering a new entity or item or block. There will always likely be a healthy amount of JSON for that.  I might hope that there can be tooling to save time in crafting JSON in the future (not near term, for sure.)

## "minecraft:equippable"
-   **Q**: I know you guys just made an update to make an error message when putting weird items in the offhand slot, such as blocks and mainhand items. However this update limits mods like my "Offhand Anything" mod. While the error message is useful, having a way to *bypass* the error and equip any item to any slot would be helpful. I'd suggest you would add a "forceEquip" line. And I'd suggest to add more functionality to the offhand in general.
-   **A**: Feedback noted. It ultimately comes down to finding the right balance between enabling creators with unlimited flexibility, and putting in constraints to reduce the number of unintended gameplay side-effects, graphical bugs, etc.
-   For your particular scenario, you might be able to work around it by adding the offhand component to all items, though I can see why that might be a bit of a pain.

## @minecraft/vanilla-data module
-   **Q**: Are there any plans to build in this module? Including it manually is both an inconvenience and a confusing hoop for beginners to go through. 
-   **A**: No, there are no plans to move the vanilla-data module into server. In fact, we wanted to pull it out of server initially for one big reason: decoupling the API contract from a data contract. Specifically, we think of all of our script API modules as a strong API contract that we are guaranteeing backwards compatibility for when a specific version is selected. This contract really defines the behavior and functionality that is available for y'all, and not the type of content that is currently in the game at any given point in time.
-   A good example here is you can use @minecraft/server 1.5.0 on a base game version of 1.19.40 or 1.20.40, and the "vanilla-data" (i.e. the block or item types available to you) will be different between those two version. Our API contract does not have any guarantees about that contract, only the functionality. So when we used to have that data in the server module, we would be churning the API way too often for unnecessary reasons, and added problematic issues if using the module on different base game versions.
-   But! We do really think that there is a lot of value in known the vanilla data available to you at any given base game version, and it does make calling an API with an enum much easier, so separating it out and versioning it by the game makes a ton of sense.
-   It does introduce a little bit of a tooling problem though, because now it is JS that needs to be included as part of your behavior packs in order to really work. In general, the baseline tooling story is something we think about often (and definitely want to hear feedback about this!) and we want to make things like easily bundling code very easy as well for your workflows.
-   Plus, right now i've set up vanilla data so that it is pre-bundled in a single file, so if you don't want to do any TS or bundling tooling, just grab the JS from the package and drop it into your scripts folder and it should work.
-   But typescript is great 😄
-   **Q**: Any thoughts on new or extended modules for NPM-only, like such for containing more data? Impulse values? Walk speeds on different blocks? Mining speeds? Or would those be data-driven with getting block components via scripting?
-   **A**: I love data! We have plans for more non-native (TypeScript-based) modules (like `@minecraft/vanilla-data`) but don't have any firm plans to share.
-   The examples you gave are a little more "data-driven"/run-time introspection IMO but would love to hear any other examples of utility modules that people have

## Chunk Function
-   **Q**:  I Just Want Something Similar In Scripting That's Replicates The Minecraft Command "/tickingarea". So We Could Avoid Errors From Unloaded Chunks. And Maybe Have A Unload Chunk Function As Well
-   **A**: I think we *wanted* to try to live on a world where scripters didn't have to think about chunks, but I don't think that's possible lol. So I expect we might come to some basic APIs for chunk loading/unloading. I would imagine a scripting equivalent to the tickingarea command will probably be the first step.  All disclaimers around commitments, and I don't think we'd have anything short-termish, but probably maybe medium-termish.

## Favourite Creation
-   **Q**: What is your favorite thing you've seen created with the Scripting API?
-   **A**: For me one of the weirder ones was a ChatGPT integration demo (https://github.com/microsoft/minecraftcodex) that was done about a year before ChatGPT was a thing. I'm not really an AI expert; that was my first walkthrough with ChatGPT-like stuff so it was me getting awed (and maybe a little freaked out) by AI stuff.
-   **A**: I am both impressed and scared of the item stack lore databases that I've seen 😂

## Realms
-   **Q**: Why player.isOp() doesn't work in Realm?
-   **A**: This is something we'll have to think about more.  Our initial `isOP` implementation (beta) is pretty naive and a permissions API likely needs to be more robust to match how the game is actually working under the hood.

## Runtime component editing
-   **Q**: Are there any plans to introduce being able to edit components on entities, itemstacks or blocks using script api like the old script api?
-   **A**: We debate this question a lot.  A lot of the components aren't.. well, maybe up to where we want them to be... of being added on or removed or updated willy-nilly (e.g., they may not update the client properly, resulting in glitches; or they may not work in an expected fashion because other components are not set in the right ways)  Secondly, we debate about what level of "internals" there should be for things like an entity.  E.g., if I create a mob that is a MikeMob, should a bit of code completely unrelated to my behavior pack be able to "mess with the internals" of the MikeMob in a way that might confuse my code? Are the component states of component groups considered the "internal" design of a mob? I don't think we've settled here but we're at least moving in a direction of more things being an open-for-all and less in the direction of "protected internals". Sorry for the ramble.
-   But nothing in the short or medium term "below" triggerEvent for entities. and BeforeDataDrivenEntityTriggerEvent which had some interesting facilities for messing with component groups probably won't be moving to Stable any time soon, sorry 😦

## External Data Storing
-   **Q**: Will we ever be able to store data externally with for example json files or things like MongoDB/mongoose
-   **A**: Right now, we try to keep a level of insulation around what comes in add-ons (.mcaddons, stuff from marketplace) etc. and so likely there won't be a capability any time soon for that for script that comes in those sources - i.e., within the game. 
(unless we can think of a clever way to keep it isolated.)  Maybe as with browsers there could be some form of isolated indexed storage, but with dynamic properties (especially now with fewer limits) I might expect other folks will probably do a good wrapper.
-   Dedicated server is a bit more of a playground there - it's where we have more stuff like server/net. I could see us adding disk access or other passthroughs there.. but, I don't think it's the top priority so probably won't see things  in the short or medium term; (especially since there kinda-is a way to connect  out with server/net)

## Forms
-   **Q**: Will it be possible to open a website from a form? Like in npc dialogues in education edition
-   **A**: If it's hyperlinks, we'd definitely have to be careful about that as you can imagine but this is a good feature request, noted!

## Replay capabilities
-   **Q**: So I'm a small content creator and i find it difficult to make good and cool cutscenes like those who make java content. Other bedrock content creators have the same problem as well. So..is it possible to have some sort of replay capability like the java replay mod ( or the codes so we maybe can make one ourselves)?
-   **A**: Big fan of the replay mod and I know that it would be hugely beneficial to Bedrock video creators. I know our camera work gets us part of the way there, but there would still be a lot more platform work we need to do to allow for a replay mod to be developed on Bedrock.

## Player Velocity Control
-   **Q**: Are there any plans to:
1. Allow for `applyImpulse` for the player? I don't see a reason for disabling it, provided that `applyKnockback` works ok
2. Allow for `clearVelocity` for the player?
3. Allow for `keepVelocity` option when teleporting the player?
-   **A**: Due to technical limitations we were unable to provide these APIs for players at the same time as other entities but it's something we would like to make available in the future.
-   **A**: We're trying to avoid adding new APIs to beta that don't have a short-term release plan. We don't like having APIs sit around in beta for a year plus.

## Command Parity
-   **Q**: Is the future of scripting looking to make the `runCommand` and `runCommandAsync` functions obsolete?
-   **A**: In some cases we tried to prioritize APIs that either covered core capabilities or  went beyond what you could do with commands - which kind of left a hole "in the middle" where there are still some key tasks you need to do with commands. In the fullness of time I'd hope that we have an API for everything you can do in commands. I wouldn't expect we'd deprecate runCommand, but certainly it's a lower-priority goal to get to a point where you don't need them
-   **Q**: I don't think using commands is bad practice. It's totally based on what we are doing, like giving all players an item via command will be far better than by scripting, iterating through player list, getting inventory, placing item by finding empty slot. Command will be better here because most of it will be handled by native code
-   **A**: A goal we have is to ensure that when you are in script, there is very little need to have to jump out of script and execute a command, since doing that sort of cross paradigm work is more of a cognitive load. Your example here is a great example though that there may be value in APIs that provide some "niceties" on top of the more granular APIs we have today.  Thanks for calling our this scenario!

## Minecraft Debugger
-   **Q**: Are there any plans to address the open issues on the repo? 
-   **A**: Thanks for calling that out. We are going to take passes to further improve and fix bugs in the debugger, and we probably should be more on top of addressing reported issues, so sorry about that! We have a few improvements and bug fixes that just recently went in and are in the pipe, so definitely keep reporting issues as you hit them, especially if your workflow runs into any sort of tension with the currently available configuration.

## Error Logs
-   **Q**: More detailed error log? Sometimes we only get a short error like this: `TypeError:  is not a function` and we don't know where the error is.
-   **A**: This is great feedback.  We're always trying to improve error messages like this.  If you have specific code examples of where a call stack is not included please let us know.
-   Those errors can be very frustrating!

## Script Templates
-   **Q**: Are we gonna have example script templates?
-   **A**: Oh definitely, we know there is a lot of gaps there. That's a big focus.  We do have https://github.com/microsoft/minecraft-scripting-samples (and in particular the How To Gallery (https://github.com/microsoft/minecraft-scripting-samples/tree/main/howto-gallery) which are OSS projects if you want to submit edits and samples (these ultimately work their way into our docs too.) We do have some ideas on how we can make them more accessible :), stay tuned.
-   The bigger gap is on the JSON side IMHO - getting started with templateified JSON files is a pain and we want to make it easier, no plans in the short term but we definitely want to focus on that.

## Releasing BlockPermutation APIs into stable
-   **Q**: What's stopping from releasing BlockPermutation block states into stable APIs?
-   **A**: We have been hesitant to release these into stable as the flattening of blocks is happening (e.g. "stained_hardened_clay" ---> "white_terracotta", "orange_terracotta", etc, terracotta example in this changelog: https://feedback.minecraft.net/hc/en-us/articles/19545277817357-Minecraft-1-20-30-Bedrock-), due to the changing nature of block states at this time. But we know block states are super important so we will probably start doing some work here soon anyway, just have to make sure our code is permanently robust against changing block states.

## Module Versioning
-   **Q**: What, if anything, could you guys imagine would bump `@minecraft/server` to `2.0`? What about Editor reaching `1.0`? How do you decide to bump major verison numbers?
-   **A**: Ah that's a good question, but i'll answer for the non-editor modules. We don't want to do a major breaking change lightly, because it becomes a hard line break in compatibility, which for us also means increasing the support set we have. For example, if we go to 2.0, we still need to make sure that maps using the 1.0 range continue to function! But moving to 2.0 will also mean that support to 1.0 becomes purely a bug fix thing, and future work is in 2.0.
-   The big thing for us is that if we are introducing new major features that fundamentally change how the API works or how you should be using the API, that will be a breaking change. Another big thing, if you are using typescript then a breaking change will absolutely break your build, that's another good indication 😄 . So it's very unlikely we will do a major change for simply a new feature, and it's more likely it will be a major change for things that we have to break to improve the API as a whole. And this applies to all API modules (including editor as well after it hits 1.0.0).
-   **A**: For Editor reaching version 1.0: It is robust enough in its feature set that creators can use it in their day-to-day workflow easily, and the Editor API has enough functionality that tool makers can make their own really cool custom extensions!
-   **Q**: Y'all would never drop support for an older version? (End-of-life or whatever programmers call it?)
-   **A**: I'm not saying never, just that we are not going to suddenly have a situation where we suddenly break folk's content on an old major version. We are thinking about things like deprecation plans for old API versions after a support lifecycle has happened, but luckily we still have time to think about these problems because we have no current plans for a major version breaks right now 🙂


## Editor

## Better Block APIs?
-   **Q**: Could we expect more complex Blocks API for editor mode? or for Base API as well?
-   **A**: I like the idea of using the BlockPaletteDefinition and ShapeTransformer from script - I can say that Editor specific multi-block API's are under consideration for various reasons (performance, memory, etc...)

## DEV Build
-   **Q**: Will Editor eventually be on par with the DEV Build (or better) in helping creators produce content?
-   **A**: Like all games, we have internal builds that have debugging tools. Some of these tools would absolutely benefit creators. We would love to bring some of these features to creators, but nothing to talk about today.

## Mobile
-   **Q**: Any plans on porting Editor to mobile
-   **A**: We're focusing on PC to make that the best experience first.

## New Features
-   **Q**:  What visual elements are planning to be added in? What new and easier tools suggested from the community are being looked into.
-   **A**: I’m going to answer with the caveat that what I state below may change as we prototype, develop, and get feedback! 
-   All of that out of the way…here are a few things we are thinking for visualization support: 

1. **More gizmos!** We have the move gizmo and resize gizmos, but we want to add rotation gizmos and also have gizmos appear on paste preview volumes. 
2. **Paste preview with an actual preview:** Right now it’s an empty volume, which isn’t super informative! We want to add actual visuals of what you’re pasting within that volume. 
3. **Brush preview and structure placement:** Imagine the brush tip wasn’t just a single cube, but the shape and size of what you’re going to be painting! And imagine a world when you go to place a structure, you could click-to-drag the structure into the world and precisely place it. 

-   Let us know what **you** think and provide your own feedback on more visuals that would be helpful for us to add into our plans!!

## Build Process
-   **Q**: I see a lot of references to Webpack in your Editor JavaScript files. Why Webpack over, say, Rollup or ESBuild? Do you like your current tooling for deploying these?
-   **A**: Good catch on that! In fact, if you look at the recent @minecraft/vanilla-data package we are using esbuild there as an alternative. Really it comes down to how heavy weight the tool is and whether it has the customizations we need.
-   Editor is where we are exploring different ways to package our libraries, so it was the first to use bundling tooling, but we want to keep trying alternatives to improve our internal build time and minimize configuration.

## Editor Naming
-   **Q**: Is it Editor Mode or Minecraft: Editor?
-   **A**: Internally we refer to it as the "Bedrock Editor" or "Editor," but we haven't locked in on an official branded name yet 😉
-   **Q**: So externally yall just dont call it anything?
-   **A**: Good catch, haha! Externally we use these interchangeably: 

1. Minecraft: Bedrock Editor
2. Editor
3. Bedrock Editor

-   We don't really say "Editor Mode" ever, but we don't mind if others call it that!
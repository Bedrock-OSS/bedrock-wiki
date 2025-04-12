---
title: World Generation Q&A 2024/11/15
category: Q&A
mentions:
    - SmokeyStack
---

This Q&A took place in the [Bedrock Add-Ons discord](https://discord.gg/uZF75ZxcJq). A few Mojang/Microsoft employees joined us to answer questions about the custom blocks and items API. Questions were community sourced.

:::warning
Not all messages were copied over, and some were copy-edited. If you want to see everything, join the above discord, and get the "events archive" role.
:::

## Plans Regarding Locator Maps?

-   **Q**: I've seen that locator maps for custom jigsaws are possible, but are there any plans for more 'official' support (i.e custom icons / map names)?
-   **A**: This is on our radar - but it's not on the short term roadmap.

## Any plans to update vanilla structures to use the current Jigsaw system?

-   **Q**: It'd be cool if one day we can modify all vanilla structures, like villages, pillager outposts, etc. From what I understand, they use a legacy version of Jigsaws, or a totally different system. But it'll be awesome if these were moved over to our current Jigsaw system like trail ruins and trial chambers. It's like the one thing I think the community would love if they can change every vanilla structure.
-   **A**: We would like to convert more vanilla structures to use the new system, but it is not in the short or medium term roadmap. The current vanilla structures that can be used are Trial Chambers and Trail Ruins. Which would you like to see first?
-   **A**: It's also worth noting that the folks on this Q&A can't speak on behalf of the Vanilla team and their intents.

## Custom Biomes in Other Dimensions

-   **Q**: When custom biomes return to Bedrock, will there be more support for the Nether and The End? as far as i know, custom end biomes never existed before..
-   **A**: The client_biome settings in resource packs (for visuals and audio) should work in any biome now, including in the nether and the end. For things that affect behavior and world generation, we agree it'd be great to affect those dimensions as well, but don't have anything on the roadmap for it.

## Will the option to add custom environment particles be added to custom biomes?

-   **Q**: When custom biomes could still be created, the only particles that could be added to them without external methods was by adding the particles from the nether, but it would be great if in the future we could add any custom particle to set the biomes.
-   **A**: Custom environment particles are something we've taken a look at in the past, and would be something we could consider. Any information that you can give us about how you'd like to use them we're happy to have.

## Custom Dimensions

-   **Q**: The ability to introduce new dimensions for futuristic add-ons, having the ability to edit the entire dimension from the height limit to the dimension generation system, just like the java one, in java we can create custom dimensions very easily, it would be very nice to have that on bedrock.
-   **A**: We definitely see that custom dimensions are important for creators, but in the meanwhile we're focusing on a lot of the elements of world gen.

    In the immediate term, we're looking to build on features and jigsaw structures, and more capabilities, to move up towards more biome customization.

## `/place feature` command

-   **Q**: Will there be an option to place features with commands in the future?
-   **A**: This is on our short-term roadmap!

## Can we get a block width increase for Jigsaw?

-   **Q**: 128 is too small, and personally I need a number 6x that size for a Marketplace project. If not, have the ability to customize this per jigsaw structure.
-   **A**: 128 isn't a strict limit. However, when we generate a level chunk we will check up to 8 chunks away to allow larger structures to generate and build in to that chunk. However because of perf concerns for anything past 128 might be a bit worrisome. Another point to make is that this is from center, not total! Meaning 128 is the half width not the full width, which is - you guessed it - 256. 😄

## Will Molang be receiving any performance enhancements?

-   **Q**: Using 3D noise with Molang for custom terrain generation can easily cause worlds to take 5 minutes to load or longer, even if ur only using 1 block type and 1 feature and feature rule, which is honestly ridiculously long.
-   **A**: We're looking at the performance of q.noise specifically and seeing if we can do more things like maybe cache it so it works more performantly. In the meanwhile I might avoid using it heavily.

## Why did jigsaws take so long?

-   **Q**: We've had the jigsaw block since a long long time... why was it never fully functional/why did making it functional take so long?

    I'm just curious why we were left with a half baked solution for ages, like was there a reason you abandoned adding the jigsaw back then?

    And what was your motivation behind finally enabling creators to use them?

-   **A**: Honestly in times past sometimes we would work on a platform feature but not finish it in a satisfying or timely way - e.g., holiday creator features. In most cases it means we need to get better at getting things into stable platform, though in some cases it might mean cutting experiments more quickly if it looks like they won't pan out. We're trying to do better at getting things into the platform if we start them, though I'm sure we won't be perfect.

    RE: Why jigsaws now, we have a backlog of capabilities that we work towards to get to add to the platform for people to use, and now we working though some of the elemental worldgen stuff. Before bringing out these capabilities, a lot of times we need to do a lot of updates to stabilize the area to make it more upgradeable, performant, and tolerant to all the things you all will build (and even the, there will be lots of ways that these things can break)..

## Spawn Spots in Custom Structures

-   **Q**: One of the caveats of the previous structure framework is that we cannot place entities or create spawn spots (which is how nether fortresses, ocean monuments, and other structures repeatedly spawn entities). I usually create a ticking block that spawns an entity and deletes itself, but this can lead to some problems.

    With structures getting some love and jigsaws becoming usable, we are now able to place entities in structures, but is there a plan to add spawn spot support to the world generation framework?

-   **A**: Hi all! Loving the discussion here. This is currently in the works! Tho given that the mob spawn system is slightly delicate (**cough** farms), we want to make sure we do everything in our power to smooth out the edges. So... that means more testing. Look forward to more stuff coming out in experimental soon!
-   **Q**: Does this mean that spawn rates could be in parity with Java too?
-   **A**: That's the goal! Once we get it into experimental (soon), we'll definitely need all the help we can get to make sure the world still seems balanced and spawning isn't off. That includes any impact/improvements on mob farms

## Structure Colliding

-   **Q**: Systems people have been using as workarounds, like spawning an entity, or using a command block to spawn in a structure (or a line of them for example when creating dungeons), always have a chance, especially for underground structures, to collide.

    For example with the trial chambers, it can intersect with other structure’s, destroying them. I would love to see a feature with the jigsaw block as well as general structures, where you can prevent this collision from occurring.

    I’d like to know what the mojang teams thoughts are on this

-   **A**: Hi all! This is definitely on our radar, tho we have no concrete work planned so far. especially given there's a deeper problem at root here.

## Directory Structure Concerns

-   **Q**: With the new Jigsaw system, all the related files are placed under `worldgen`. Are there any plans to move `structures`, `features`, `feature_rules`, and `biomes` into this folder? Is there any reason why the Jigsaw sets are under `worldgen` or was it just for parity sake?
-   **A**: We grouped the jigsaw things together as the files were logically grouped for jigsaw things. "worldgen" as the name of the grouping folder was.. an interesting choice if features and feature rules are outside of it; we may adjust other files or folders in the future, but no plans currently exist to move things like features and feature rules into it.

## Jigsaw Utility Inquiry

-   **Q**: Would jigsaw blocks be an effective way to make custom Massive Ore Veins (akin to Iron and Copper Mega veins)?

    Or would the Partially Exposed Blob Feature be the preferred method?

-   **A**: We have the minecraft:ore_feature to support custom ore veins, are there missing features there that would help you achieve the result you are looking for?

## Scripting

-   **Q**: Are there any plans to enable scripting integration within world generation? For example scripts that can modify structure placement or contents based on world events.
-   **A**: We're looking to explore some ways to maybe integrate scripting with world gen, but as you all note, it's a bit hard because it wouldn't be performant to, say, have scripting "take over" significant parts of chunk generation. Three-deep for loops of a set of blocks can get slow quickly 🙂

    But maybe there are places where we can call out to script to "make a decision" about something. Not aware of a place where script will be in the short term roadmap for worldgen though.

    One of the first demos I tried to build with scripting a couple of years ago was a dungeon generator in script, but it was hard to make it work because most of the logic was about how do you timeslice all of the block placement (and also deal with chunk load semantics) across ticks to get the thing built.

    Since then there is a bit more support in scripting for things like generator functions to take advantage of spare cycles in a tick - and maybe if you limit its usage to highly performant devices (a beefy dedicated server) or you really optimize - it could be pretty workable and awesome. I know some people in the community have built some cool things along those lines.

-   **A**: I've chatted about it elsewhere, but a fun prototype for us to do would be to use the webworker model to spin off JavaScript to actually run on other threads for stuff like world generation.

    A neat idea would be to provide a different API surface (a different module you can import) with specific world-gen related APIs.

    All just fun ideas at this point, but maybe one day!

## What does the Mojang team look forward most to seeing as these new tools are given to creators?

-   **A**: I am SO looking forward to the various dungeons, legends, and lores. So much coming, so much to be unlocked.. 👀

## Structure Orientation

-   **Q**: Will we be able to handle Jigsaw structures rotation?, if so, how will that work?, will we be able to ensure that the structure always aligns correctly with certain features?, like mountain slopes or rivers. or will it be just a simple conditional handler?.
-   **A**: We received feedback from Creators from our last preview and is on our radar! That being said, what specific scenarios are you thinking?
-   **Q**:

    > what specific scenarios are you thinking?

    Random structure rotations are a must have, unless you have a deeper lore to why every structure faces north. And like Ciosciaa said, another issue that comes with this is that custom blocks don't rotate.

-   **A**: Makes sense. I believe we've had conversations regarding structure rotations. I'll start the conversation to get that added onto the list of structure improvements we have already!

## Why don't you allow the conditinal_list and sculk_patch_feature features to be used?

-   **Q**: I know conditional_list was removed, but why isn't it back yet? And why did they never allow sculk_patch_feature to be used?
-   **A**: Conditional_list needs more work to make it robust - and we're seeing about where that might slot in. Sculk_patch_feature turned out to be too vanilla focused; we might look at a more general alternative at some point.
-   **Q**: Does this mean you guys are against very vanilla-centric feature types in the future? Tree features are a thing after all.
-   **A**: Generally, I'll say there is a bit of a fuzzy line between when a capability is a generic platform feature (great!), vanilla-ish, and too-vanilla-focused-to-be-a-robust-platform-item-and-so-we-should-rethink-it. I guess that's where the boundary lies right now 🙂

## Will missing jigsaw features from java edition be added?

-   **Q**: Jigsaw structures in Java edition have a few features that seem to not exist:
    -   placing features from structure (i.e. `minecraft:feature_pool_element`)
    -   template pool aliasing (java edition uses that to select which set of trial spawners a trial chamber has, how does that work in bedrock?)
-   **A**: Hi all! As you've noticed, we have spawn overrides in the new jigsaw system, but not currently data driven yet with data driven jigsaw structures. The team is currently working to simplify spawn rules before we fully expose that spawn system.
-   **Q**:

    > The team is currently working to simplify spawn rules

    The entire system? That is, the elusive `spawn_category` in the entity BP JSON file and the whole `spawn_rules` folder? Does it mean simplify then expand the functionality?

-   **A**: Yep - as with all refactors, gotta start at the base system first. We're close to getting the mob spawn system at parity with Java. At the same time, we're simplifying spawn rules so that when we do expose the functionalities, they'll be cleaner to play with!

## Option to update world to new generation

-   **Q**: Would there be an option for updating your world more smart? Since the structure generation is kinda trouble to me when there is an update with new structure, I would need to travel to new chunks to find them, some of them even being "eaten" by existing chunks.

    The point of this question is, will there be an option that it'll detect empty chunks (remained unchanged, been explored only, or slightly changed chunks) to be updated with new structures? That'll be good

-   **A**: We've considered this! But making it work in a way without a lot of odd side effects would be really hard (as some of you have mentioned above).
    But we are curious! In case this were possible, would you use this capability for testing purposes, or would you need it for in-game world purposes?

## Custom superflat generator

-   **Q**: In Java Edition there is the custom superflat generator. On Bedrock such system doesn't exist, which is highly requested on the feedback site as well: https://feedback.minecraft.net/hc/en-us/community/posts/360009373731--Java-Parity-Custom-World-generator-Superflat-worlds

    It will be useful for all kinds of play, also for the Marketplace (some Marketplace maps already do have a sort of superflat by copying a world from Java)

    If such system is implemented, will it also allow things like biomes and structure support?

-   **A**: It's not currently on the roadmap. If we did bring it over from Java we'd probably need to do some Bedrock specific design changes with the Vanilla team like we did in adapting Hardcore Mode.

## Place above block feature rule

-   **Q**: Sometime ago I wanted to create a rock I wanted to make it replace air but only air that is above A a stone block I would be happy if there was a new statement added to feature rule like

    place_above

    place_under

    Those would help with worldgen so much

-   **A**: I believe you are looking for the minecraft:single_block_feature with the may_attach_to "top" & "bottom" option. Let us know if that option doesn't give you enough control.

    You could bundle that into the aggregate feature or sequential feature if you want to do something else with more features at that location.

## changing biome via command or addons

-   **Q**: So, we have a feature(I give a guess) that you can change biome via world file, is there going to be ability to change them in game right away or even via addons?
    For example

    /Fill biome ~50 ~50 ~50 ~-50 ~-50 ~-50 plains

    And now everything around me in this coordinates will be plain biome.

    This can be used to change type of weather such as snow and rain between unless Mojang adds more in the future.

    (Other example is mobs)

-   **A**: We have looked at the fillbiome command in Java, but need to solve a lot of things on the Bedrock side before we can know how this might become available.

## What is the mindset behind world gen improvements?

-   **Q**: I am curious how the team thinks about world gen (data-driving biomes, dimensions, jigsaw improvements, etc.) in a broader sense.

    Are improvements trying to be shipped into betas as quickly as possible or taken slow, and why or why not?

    Is the team worried about breaking worlds in preview versions?

    (Long term) is world gen working toward full customization? Which parts are being favored in development first?

    What have been hurdles in any world gen processes (deciding best practices, long term vs short term, technical hardships)?

    How does thinking about bedrock world gen relate and differ from how it’s done on Java?

    Sorry for a lot of sub-questions, I’m curious!❤️<:bao_logo_mojang:1071082722807791696>

-   **A**: Lots of sub-questions! I'll try a few.

    As a team, we always try to work in an iterative way. We want to ship small things regularly so we can get feedback from you all.

    Breaking worlds in Preview - we try to avoid doing this as much as possible. But we don't hold ourselves to the same rigor as we do on retail builds. So Preview builds will always be a bit more risky for players.

    Long-term, one of our principles is that creators should be able to do almost anything we (Mojang) can do with the Vanilla game. So that's pretty extensive customization. But this is aspirational, and it'll be a long road for us to travel down together here. We'll release incremental features as we go.

    Which parts are being favored first? I think that's being discussed in other threads.

    Bedrock vs. Java - there are a lot more things we need to consider on Bedrock. A lot of the differences boil down to:

    -   multi-platform, and differing compute capabilities
    -   backwards compatibility and multi-add-on compatibility

    This requires us to spend a lot more time thinking through how to do things in Bedrock since it has to work in so many more situations.

## Roadmap For worldgen

-   **Q**: For a while the players got to know what Mojang is working and what is in the vault or what it is considering
    But creators that aren't marketplace affiliated don't know what will be happing untill either someone asks for a timeline or it gets released I'm hoping we get a 1 year timeline so that we can start to learn stuff or prepare around it.

    I don’t mind if things get delayed; I’d just like to have a sense of what you’re considering or actively working on

-   **A**: The roadmap for worldgen is going to be a bit long. We're starting now with some of the elements - improving block features and capabilities (see the previous Q&A :), then moving onto ways to embed things into the world (features, jigsaw structures). Then, we do want to start with biome capabilities.

    The way biomes works in vanilla now is complex, and finding a workable solution has been challenging, but we're actively working on it. We don't know what the timeline might be, but we hope to share more on the potential designs in the next year.

    As far as what might be included for biomes, we are aware of many technical needs: noise maps, scale, weather, fog, audio, etc. Our goal is a robust solution that takes your needs into account. We'd love to know your top 5-10 must have or should have needs for biomes!

## Any plans fixing structure template feature size limit?

-   **Q**: Actually the limit is 48x48 because of chunks, any plans to fixing this or increasing the size limit?
-   **A**: Sorry for the late response, but based on the limits of the size of chunks and the way world generation works, upping this limit is a bit tricky. I think we'd recommend for larger structures that folks consider the jigsaw structure system.

## Why no generated structures toggle?

-   **Q**: I am very excited about more possible world generation features in the future and I was wondering if the lack of a generated structures toggle on bedrock is somehow related to custom world generation being a WIP, or if it's just been low priority. When using add-ons to customize my game I often find myself wishing I could change or remove vanilla structures. Sorry if this can't be answered, idk how intertwined development of addons and world settings are.

-   **A**: Loving the discussion here. To truly unlock the power of customizing various aspects of world gen, we'll need custom biomes. This will hopefully allow us to add APIs to parts of world gen that we normally couldn't touch without being hacky about it.

## Subchunks?

-   **Q**: I’m curious about your thoughts on subchunks. Do you plan on ever switching features to them? Maybe the base generation? Both? Have you considered what you might change if you were to do that (q.heightmap, for instance)?

    I feel like if we were to get custom dimension support later on, using conventional chunks would be a slog for dimensions with large bounds. I know rewriting the entire worldgen system to use subchunks is easier said than done, but I think it would be a worthwhile investment moving forward.

-   **A**: With the coordinate range functionality of a feature_rule you could manually do this today. You would need to generate 4 features_rules to do it, to have different extents for the that 16 x 16 sections (ie: "extent": [ 0, 15 ], "extent": [ 16, 32 ], for the X & Z).

    We don't currently have any specific subchunk related functionality on our roadmap.

## Marketplace

-   **Q**: Do you intend to add structure and mineral generation to the marketplace?
-   **A**: Yes, we're looking to allow for the usage of Features/Feature Rules in marketplace add-on content.

    There will likely be some guardrails on things like performance. But.. it's also hard to legislate through policy "please don't go too overboard with this, in unfun ways." I think we'll have to see if there are patterns that emerge that are bad for players that we need to mitigate.

## More custom feature types

-   **Q**: Will mojang expand the actual customizable features? Like creating a Custom bone meal patch and using a /place feature to use It, or create a custom dripstone collumn feature instead of using structures
-   **A**: We aren't currently planning anymore feature types, but alot of what you are suggesting can be accomplished with combinations of existing features. Like a dripstone column could be a sequential_feature or single_block features instead. Or a combination of weighted_random features of sequential_features (if you wanted different heights)

    And /place feature is on our short-term roadmap!

## Plans to stabilize jigsaws

-   **Q**: I wonder if there are plans to stabilize jigsaws in the next couple of months? Surely the API still needs a lot of adjustments, but will we see jigsaws getting out of experimental in a few months? (2-4 months)
-   **A**: Hi Lucy - love your question! We're actively learning from community feedback on what needs tweaking. So to all the lovely jigsaw builders out there - plz go ham! We won't know what needs tweaking without the stress-testing.

## Broader Application of Processor Lists

-   **Q**: These are amazing. Right now, there's really aren't any systems that conveniently allow modifications of globs of block data. It would be incredible to see processor lists in the following places:

    -   As part of the `fill` command and related scripting APIs
    -   As part of the `structure` command and related scripting APIs
    -   As part of structure template features (or maybe _any_ feature type?)
    -   Even _standalone_, as a way to transform a given volume already in the world (like the fill command over specified coordinates)

    Integrations into existing systems would massively boost the functionality of those systems and make block processing/transformation much more convenient.

-   **A**: Hi Ciosciaa - I agree! That seems like an awesome idea and we don't have that on our roadmap right now, but making sure to note this down <:bao_bee:937587347124535346>

## Jigsaw File Structure is Strange?

-   **Q**: The jigsaw systems implemented a couple of weeks ago are nearly direct copies of Java in a Bedrock versioned registered file wrapper. I'm wondering why that is. I took a look at this a week ago over at https://discord.com/channels/523663022053392405/1303973556476055592.

    Essentially, I'm wondering about the team's thoughts on whether the more obtuse, unfamiliar Java-style interface outweighs something more intuitive and familiar.

-   **A**: Hi Ciosciaa! Great question and good insights. We have been working to make the Bedrock system more at parity with Java. ~~~~I believe the current Bedrock system actually looks like the idea you proposed below!~~ Sorry - that was probably from one of our prototypes or designs. Are there specific suggestions you had in mind?

    Ah sorry, that "Possible Idea" one looked like something we've been looking into on the side, but what you have under "Existing" is what we have right now. Has the current system been inconvenient or confusing to navigate?

-   **Q**: It's mostly just obtuse and unfamiliar. But it's also just bizarre at times…

    -   Why are randomization tests bundled with block testing via `minecraft:random_block_match`?
    -   And even if the above _should exist_, why is `minecraft:random_block_match` even a thing? Why not just have `probability` on `minecraft:block_match` and default it to `1`?
    -   Why is `output_state` required on rules processors if all I want to do is bind loot to block types I selected via `input_predicate`?
    -   `{"predicate_type": "minecraft:always_true"}` as a bit much as a baseline/default. 😅
    -   `location_predicate` vs. `position_predicate` is confusion naming-wise, but they mean 2 completely different things.

    I'd say, as much as I love the idea of processor lists (https://discord.com/channels/523663022053392405/1307025062830014535), this has got to be the most alienating file schema on Bedrock right now.

-   **A**: Great insights and input Ciosciaa! Bringing it to the team 🫡

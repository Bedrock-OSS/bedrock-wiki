---
title: GameTest Q&A 2021/08/06
---

## Realms

-   **Q**: Is Gametest designed to work on Realms?

-   **A**: Yes

## QuickJS Vs. V8

-   **Q**: What were the reasons for choosing QuickJS over other JS choices like V8? QuickJS is much slower (mostly because it lacks JIT) and in some communities that is a big con to using it

-   **A**: A few of us have used QuickJS in past projects and its very easy to integrate. We have looked at V8 (and others) and we may move to them in the future. JIT is very desirable but not all platforms support it (easily, or at all).

## File & Network access

-   **Q**: Would there be a file or network interface for gametest?

-   **A**: We want to default to keeping the scripting APIs more limited and add functionality over time. File and network APIs would require privileges and likely consent by the game owner, so those probably won't be in the default set of APIs, but we may add those capabilities down the road (e.g., potentially for server owners)

-   **Q**: So such interface will only be implemented on part of all available platforms?

-   **A:** We strive to implement all APIs across all platforms. The only exception would be if we introduce some editor specific APIs that may be desktop only.

## Slash Commands

-   **Q:** when are we able to registrate custom slash commands?

-   **A:** While we don't have a concrete timeline, this is high up in our list of things to build.

-   **A:** It was pretty clear that we need this when people started making their own !commands

## Testing Vanilla

-   **Q:** Are you currently using GameTests framework to test the Vanilla Behavior pack? Or, in what ways are you utilizing the testing API on your own content?

-   **A:** Yes! We have lots of tests for vanilla content right now and want to expand that to more and more over time. We actually ship some of the tests we have for vanilla content in our public builds (vanilla_gametest).

-   **A:** Ideally, over time, the community would also help us by using GameTest to report bugs with vanilla and we could incorporate those tests (once we fix the issue) and make sure we don't break that stuff again 🙂

## Timeline

-   **Q:** Could we get a timeline of what events are planned for the API next?

-   **A:** Our team is still deciding which events to add next so there isn't much of a timeline we can share. Which events would you like to see added?

-   **A:** Definitely agree with block breaking/placing being a high priority

## Politics of GameTests

-   **Q:** What technical, structural, or political reasons has allowed GameTests API to flourish, while the original Scripting API has not? Can you talk about "what you did different" this time? Additionally, what needs to happen for GameTest to be considered "successful" (and therefor not abandoned). Is there anything we can do to help with that?

-   **A:** In general we're trying to be pretty focused on the scenarios we're targeting, starting with content testing and validation which we can always use more of not just for core Minecraft but also for custom content in Minecraft. We really want to make it simpler for folks to scaffold and build tests around their content. That scenario also has more limited requirements (e.g., we can be on fewer platforms, perf is not as much an issue, etc.) So, we are focused on GameTest and for that to be successful we'd want to see that it's easy for content creators to test their stuff.

-   **A:** Of course, we do see the potential for more scenarios down the road - including gameplay - but we really don't want to get anyones expectations high (or have people take a bet on scripting/gametest APIs for gameplay) until we have a bit more validation on things like perf, and getting support for more platforms, and responding to your feedback as well.

-   **A:** RE: Is there anything we can do to help with that? - Keep engaging with us on improving and adding new stuff! 🙂 The creator community is the driver for all of this.

## Consoles

-   **Q:** What is the reason that consoles cannot run gametests, and will consoles eventually support the gametest API in the future?

-   **A:** Yes! we plan to support all our platforms, a couple of platforms didn't have all the API's our JS Engine Required, aligned_alloc was one. We are actively working on enabling those platforms.

## Additional Languages

-   **Q:** Will there be any support for gametests to support different languages?

-   **A:** We've implemented the binding layer generically enough to fit into other programming/scripting languages. Internally we've done some fun things like play around with Lua and even something like Blockly. I don't think we can commit to adding any official support for other languages at the moment though 🙂

-   **Q:** Have you considered Kotlin

-   **A:** I haven't looking into Kotlin much (all of our Android platform is still written in Java 🙂 ) but that sounds sweet! I'll take a peak some time.

## Event System

-   **Q:** Seeing there is also an event system in data-driven. How do you position the relationship between the event system in the gametest framework and the event system in data-driven? Will an interface between the two be provided in the future?

-   **A:** We want the systems to play well together. If you're familiar with building with data driving , we'd like you to be able to sprinkle in script in a way that makes sense. We're still working out exactly what that looks like.

## Anything in our NOT list?

-   **Q:** Can you share anything from your 'Not List' (things you've discussed, and decided unilaterally NOT to implement)? This could be certain devices you won't support, or certain directions you don't want to take the API. Pretty much anything off the table.

-   **A:** Great question. There's little in our list of "absolutely not" list.

-   **A:** Here are some things in our "use extreme caution" list:

    -   Network access
    -   File access
    -   Platform specific APIs

-   **A:** Network access is something that we might allow through very structured APIs to specific targets. Same with files: we will likely have some kind of persistent storage, but not free form files.

-   **A:** Platform specific APIs are something we'd like to avoid. But we can imagine implementing desktop specific APIs for editor scenarios. We'd avoid that for gameplay and gametest scenarios.

-   **A:** Another thing that I'd love to expose that is super hard is custom shaders. PlayStation requires that shaders are built into the submission. So we'll have to approach this by providing a physically based materials system where we hard code very flexible shaders.

-   **Q:** with said "persistent storage" are we gonna have a method to write and read simple int variables in a instance-indipendent manner? or is it still gonna be in the instance and deleted when runtime ends?

-   **A:** Yes we have plans to add key value pair storage maybe Json storage. One would be with a Javascript Api for accessing tags and scoreboards. but going further would be to allow for generic read write storage (still not direct File system access). There are some security issues we'd want to work through around ensuring storage is sand boxed per pack.

## Custom Dimensions

-   **Q:** Plans to support GameTests on custom dimensions, if that ever happened?

-   **A:** While designing the GameTest APIs we've been keeping custom content in mind. That's actually why Commands.run takes the dimension as a string, rather than a hard-coded dimension variable for example. So we're definitely leaving open the possibility for integration with custom dimensions and other custom content down the road.

## Old Scripting API

-   **Q:** What will happen to the old scripting api? Is it still going to stay available but with no updates? (That is it will never become unsupported)

-   **A:** The original scripting API will be available (and as you've noticed, it hasn't gotten really any updates in the recent past.) As gametest APIs and other systems of gameplay logic evolve to potentially cover the capabilities of scripting v1, we'd remove the scripting V1 functionality.

-   **A:** The old scripting API was experimental, so there isn't nearly as much (well, any) guarantee of backwards compatibility. And the old scripting API wasn't available on mobile devices, and we'd not expand its platform support at this point.

-   **A:** We do want to support client-side experiences and things like UI - we have a number of ideas on how to do that not a firm plan as yet

## World Generation

-   **Q:** Any plans for exposing the world noise in GameTests? Noise libraries exist for JS, but what's needed is the noise used in biome generation/the MoLang query.

-   **A:** We haven't taken a hard look at how we want to allow world generation to exist in scripting. Chunks generation runs on task threads and currently our gametest implementation doesn't allow for migration to other threads safely.
    We have some ideas to create something similar to web workers, but haven't gone further than conversations yet.

## GameTests BDS

-   **Q:** Will gametest work smoothly on BDS soon?

-   **A:** We currently use BDS in our CI pipeline to run GameTest and validate the results!

-   **A:** Are there any areas where BDS and GameTest don't place nicely?

-   **A:** One reason GameTest might not work is that the world needs to have the experiment enabled, which is not easy to do via dedicated server. The easiest way to do it today is use a Minecraft client to generate the world w/ the GameTest experiment turned on, and then transfer the world over to dedicated server.

## Learning JS

-   **Q:** As someone who is just starting to learn JavaScript, is there anything you can recommend that would help new coders to learn gametests? Talking more about in the context of gametests, not JS in general.

-   **A:** Awesome! JavaScript is a great way to start programming 🙂

-   **A:** We have a super small article here on building your first game test: https://docs.microsoft.com/en-us/minecraft/creator/documents/gametestbuildyourfirstgametest

-   **A:** Hopefully we'll have more content soon!

-   **Q:** NOTE: If you want to contribute to these guides, we'd love that!

## Beta BDS

-   **Q:** Are there any plans to release beta builds of BDS to the public to help us better debug and diagnose issues in Gametests?

-   **A:** Thanks for the suggestion. I'd like to do that. I'll follow up with our release management team to see if it's possible.

## NPM

-   **Q:** Can gametest support npm libraries?

-   **A:** Natively we don't support NPM libraries but we have had some limited successes when playing around with WebPack to "bake" down the packages.

-   **A:** Also!! our official TypeScript bindings are coming soon 🙂 We've shared some early versions on here but we are getting much closer to publishing them

-   **Q:** Will there be a package manager for the gametest like npm?

-   **A:** We've thought about it, but it's a lot of work. We'll keep thinking about it 🙂 I think as more and more people start using the scripting stuff we'll see some natural dev. patterns emerge and we'll want to lean into those

## Ultimate Goal of GameTests

-   **Q:** What exactly is the ultimate goal for GameTests? Will it remain as a testing tool, or will it extend beyond, perhaps, to add totally new content?

-   **A:** For GameTest, we're looking to make the testing of content and validation much easier. We want it to be simple for folks to build tests around their content, their contraptions, and their scripts. Part of that is a rich script API for mocking and testing assertions, which we've built out with the GameTest modules. We will be adding some new APIs as well to GameTest including some really cool methods for simulating players in the environment. We are also trying to figure out ways to make it even easier to create those JavaScript based tests.

-   **A:** Of course, a happy byproduct of GameTest is the opportunity to build out more of a generalized server-based scripting API which helps us explore how it could be used in scenarios down the road, as well.

## Experimental Modules

-   Q you've indicated in the past that there is hope all commands will become API's. If an experimental feature arrives, will it get api support and if so will that be in an experimental module?

-   **A:** We definitely want to have APIs for experimental features. We haven't decided exactly how we'll do that. Maybe a separate module, mojang-minecraft-experimental or something like that? This would mirror how C++ handles not yet standardized types in experimental namespaces.

## Working on GameTests API

-   **Q:** What is the coolest part of working on GameTests API? Any particular design-decision or technical aspect that was really satisfying or fun to implement?

-   **A:** For me personally it was creating a Binding layer + Consumer which allows for support of multiple scripting languages.

-   **A:** The idea is that each pack would be able to chose which scripting runtime to use 🙂

-   **Q:** Hype! Any chance we get Python some time in the future?

-   **A:** In a Game Jam I actually did get Python 2.7 working in a very hacked manner, but we don't have a product plan for it at the moment.

## API Coverage

-   **Q:** Are some of the current methods going to also be available to the player? Such as the item stack method

-   **A:** You can see the latest list of APIs here: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/player

-   **A:** Note: The API surface is still a bit small, we are slowing adding more and more as we go!

## GameTests replacing CommandBlocks

-   **Q:** Will GameTests replace command blocks?

-   **A:** I don't see the scripting stuff replacing command blocks, but I do see it shifting a lot of the "heavy logic" to script. Ideally they'd work closely with each other (think something like registering a custom command in script and having a command block execute it)

## EDU Edition Code Builder

-   **Q:** Are there any plans to make the gametest API more accessible like the education edition code builder?

-   **A:** We've started looking into something like Blockly (visual programming) for GameTest. Nothing concrete to report right now, but I think it'd be super cool!

## Funniest Bug

-   **Q:** What was the funniest bug that has happened while working on gametest?

-   **A:** A funny one that happened a while back was I was testing the taming API and wanted to see what would happen if I spawned and tamed 100 or so wolves... https://imgur.com/a/NIF7D4x

## Marketplace

-   **Q:** How much of an impact will GameTests have on the marketplace?

-   **A:** Right now, GameTest is an experimental feature so it can't be included with marketplace content. We do think GameTest would be great "on the side" for helping to validate content before it goes into the marketplace.

## Realms

-   **Q:** What is the future of game test on realms? Is it going to remain on realms or be removed like the old scripting API?

-   **A:** It is our intention to ship Gametest (and subsequent gameplay scripting) on Realms. Therefore we would not expect to subsequently deprecate it.

## Is GameTests General Purpose?

-   **Q:** Seeing how the community's utilization of gametests has mostly been to include them as part of a final product (like what the scripting engine was designed for) as oppose to strictly using them during production to catch bugs, do you see gametests being repurposed to serve more general applications and grow to become considered a supported feature of add-ons?

-   **A:** We're focused on GameTest for content testing right now. Ahead of supporting the scripting APIs for general gameplay purposes, we want to make sure we do more testing and add more infrastructure behind the scenes to determine when and how those scripting APIs can come out of experimental so they can be used in those roles.

## Molang

-   **Q:** Can you test MoLang through the GameTest API?

-   **A:** You can test entity behavior in a variety of ways. And of course entities can have Molang in their animation controllers and conditions for entity state transitions.

-   **A:** Do you have something specific in mind that you'd like to cover?

-   **A:** Should have mentioned that you can use GameTest on custom entities by having your custom entity's behavior pack in the stack while you're running game tests.

## Community Feedback

-   **Q:** Are new Gametest Features planed/going to be added based on what Mojang needs for testing purposes or community feedback/request? Will this change?

-   **A:** Definitely a mix of both! We have been adding some new GameTest APIs to test some Vanilla behaviors, but we also want to know which APIs you all are interested in.

-   **A:** A good example of this is a custom commands API. It's high on our list to add because the community has been asking for it :smile:

-   **A:** Just a couple of other features coming to make gametests more powerful and easier to create: simulated player APIs, and script debugging in Visual Studio Code

## Efficiency of Platforms

-   **Q:** How compatible will it be with other platforms/generally efficent?

-   **A:** We expect to enable it on all platforms. Re: performance, we do have to work across both platforms that support Just in Time compilation and platforms that don't. So that is a big area of known analysis and performance tuning for us.

-   **Q:** By generally efficent i mean how "close to the metal" the api is

-   **A:** Thanks for the clarification on efficient: Our API will attempt to "play well" with data driven systems to start out. And therefore operate at a Minecraft entity, item, block, chunk, etc. level of abstraction. If you're familiar with Bukkit we're attempting to have a similar level of abstraction to that (plus client side additions also within our ambitions).

## Why the name?

-   **Q:** what was the reason for the name GameTest?

-   **A:** We were building off work that Java had done. They built an initial GameTest framework that they use in their testing process.

-   **A:** Sort of a follow up on this, is the plan to refer to the whole system as gametests or something else?

-   **A:** I don't think it would make sense to refer to the whole JS API set as GameTest if we extend beyond testing scenarios. You can see some of this thinking surface in the overall API naming.

## Why Gametests?

-   **Q:** What was your guys intention with the gametest or things that you thought of while coming up about it's uses

-   **A:** Basically: Test the game! Allowing tests to be added to the game without needing to re-compile is a great tool. We can work faster on tests and community members can write tests when they report bugs.

-   **A:** GameTest is also a great "proving ground" for us in terms of getting script to run in Minecraft.

## What are the limits of gametest?

-   **Q:** What are the limits of gametest?
-   **A:** Only your imagination!

-   **A:** Seriously though, we have some limits: structures are limited to 64x64x64. We presently only run in the overworld dimension, but we'd like to broaden that.

-   **A:** We don't support interactions with player right now but that's deep in the works.

-   **A:** Gametest does work on mobile. And we're working on the only two platforms that it doesn't presently work on: Switch and PlayStation.

-   **Q:** how many for loops will i be able to nest before crashing the game?

-   **A:** Actually, that's a good question. Right now if you while (true) you will hang the game. But we prototyped and plan to build a "watchdog" that will be able to detect and stop this case.

-   **A:** Our watchdog prototype did more than that. It was also able to monitor script object count and memory in addition to cycles.
    (and worked across language runtimes, so that's cool)

## Hot Reloading

-   **Q:** Will there ever be any easy way to re-load the gametest api files from within the game similar to the /reload command used for functions? The ability to reload quickly really makes debugging and just working on things in general much easier and more enjoyable.

-   **A:** speaking as someone who has written a bunch of gametest JS, definitely on our mind and roadmap to have an easier way to reload JS

## Documentation

-   **Q:** The documentation of gametests has been one of the things that's made it difficult for me to get into. Are there plans to make the documentation more accessible to allow people to more easily understand how to use this framework from a ground up perspective?

-   **A:** We recently released a new creator portal which includes articles on how to get started with GameTest. https://docs.microsoft.com/en-us/minecraft/creator/documents/gametestgettingstarted

-   **A:** The API docs are fairly new so we have a long way to go in terms of providing detailed documentation and samples. The docs are hosted on GitHub so we're welcome to pull requests if people from the community wish to contribute. https://github.com/MicrosoftDocs/minecraft-creator/tree/main/creator/ScriptAPI

## Hummingbird UI

-   **Q:** Would gametest succeed scripting's role as the engine for Hummingbird UI?

-   **A:** Hummingbird is for former name for GameFace (https://coherent-labs.com/products/coherent-gameface/). It's a UI tech we're working with to build new Bedrock UI.

-   **A:** We certainly plan to allow scripts to create or modify UI. However, we want it to work with the built in UI in a natural way and we're still working out how that will work.

-   **A:** We don't expect to run in the same sandbox as GameFace JS. Also, right now we're focused server first and GameFace is only running on the client.

## External Scripts

-   **Q:** will gametest work with external scripts? so they could communicate with scripts that are run in another directory

-   **A:** We do want to provide a way for scripts to have dependencies on other scripts - e.g., maybe a really good script for doing testing, or for doing terrain gen -- but that'd probably be through the behavior pack dependency system. I don't think we've have a way to load JS from arbitrary locations.

-   **A:** Yeah, making external scripts work across all platforms would be challenging. And potentially a security challenge as well.

## Marketplace

-   Q:Will gametests be available for marketplace content? If yes, is there an approximate date?

-   **A:** Currently our focus is on testing scenarios. While we have lots of future thoughts and plans, we don't want to get folks making plans or counting on anything we can't promise yet.

## Discord

-   **Q:** will gametest be able to connect discord to mc?

-   **A:** not in the first versions, probably, no 🙂

## Java Parity

-   **Q:** Many of the vanilla game tests marked with suite:java_parity are disabled, presumably because the behavior does not work correctly. Were these tests ported from Java's testing suite? What is the intent of these tests?

-   **A:** We were building this off some of the GameTest work inside of Java, and some of those tests were ported as well. We also wanted to pull over and track some of the tests that Java had, even if there are parity differences between Java and Bedrock that might prevent them from working in the same way

-   **Q:** It would be great to see the disabled parity tests as a to-do list for porting more java behavior, and we could definitely provide some more, ahaha...

-   **A:** If you write a game test that demonstrates a Java parity issue, we'd love to have it: https://aka.ms/gametestsamples

-   **A:** And yes, we're tracking parity issues that were discovered through game test with bugs.

-   **Q:** If gametests are open for contribution in this way, is there any way we could contribute to the actual Vannila Behavior/Resource packs?

-   **A:** We're currently discussing whether or not we should move the "built in" game tests to the same repository and make it easier to get the open source behavior pack package(s)

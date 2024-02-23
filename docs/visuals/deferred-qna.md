---
title: Scripting and Editor Q&A 2024/02/23
mentions:
    - SmokeyStack
---

This Q&A took place in the [Bedrock Add-Ons discord](https://discord.gg/uZF75ZxcJq). Six Mojang/Microsoft employees joined us to answer questions about the Deferred Technical Preview API. Questions were community sourced.

:::warning
Not all messages were copied over, and some were copy-edited. If you want to see everything, join the above discord, and get the "events archive" role.
:::

## How Long Has the Deferred Rendering Pipeline Been in Development

- **Q**: How long has the Deferred Rendering Pipeline been in development? What were the challenges in making this pipeline?
- **A**: The Deferred pipeline has been in development in various forms since 2020.  Parts of it were born out of optimizations to the RTX pipeline but other parts were born out of the pipeline used for Minecraft Legends.  Development started in earnest in March of 2022.

## Supported Platforms

- **Q**: Will any platforms not be supported?
- **A**: There's no official announcements right now on what will or will not be supported. As mentioned in another thread, we aim to make deferred as widely available as possible on devices that can support it, but ensure that the visuals and perf are where they should be for a good playing experience.

- **Q**: I solely play Minecraft on my phone and ray tracing, shaders, etc look so cool! But I have never been able to experience them 😞 Will deferred lighting be available for Android devices?
- **A**: Yes! The deferred preview is currently available on Android and can be accessed as part of the Beta program. Also available in Preview on Xbox, iOS, and PC!

- **Q**: Is deferred available on chrome book?
- **A**: We don't have any news to share on when new platforms will be available right now, but we are definitely testing and looking into adding additional platforms that can handle deferred. We want to make sure as many players as possible can experience the new graphics mode but also that the playing experience will be solid.

## Molang in Deferred Rendering

- **Q**: Please add the ability to use Molang queries in global.json or any other files! It would be useful for detecting specific moon phases and create local/unique experiences!
- **A**: Appreciate the suggestion, but we don't have any news to share on Molang integration right now. We have quite a few constraints with perf and other things that we have to be mindful of with deferred.

## Features Left

- **Q**: How many features are left for deferred?
- **A**: There's some hints across the other threads, but I'll make a cheat sheet here 🙂 
    Right now, in the works to share with you we have: Color grading, Water lighting + movement, Subsurface scattering, Reflections, and Texture Set support for Items and particles.

## Optimization

- **Q**: I wonder when optimization for deferred will begin aajabrams said it would be when y’all get all of deferreds features implemented but idk when that is.
- **A**: AJ is right, we're definitely working on getting all the features out before really hammering at optimizations. No timeline to share right now, but definitely on our roadmap!

## Pom Effects

- **Q**: Will Pom Effects Such As Paralax Be Added?
- **A**: We don't have anything to share on POM techniques at this time, but thank you for the suggestion!

## Deferred PBR

- **Q**: Can you expand deferred PBR capabilities with e.g. subsurface scattering, porosity, POM/tessellation, etc.?
- **A**: Been answered in a few places already, mostly here: https://discord.com/channels/523663022053392405/1209533667224068188/1210658737103048805
- **A**: Yes!  We will be expanding the current model to include a Sub Surface Scattering approximation, and we will also be enabling a unique lighting model for water geometry.  Water will operate on properties like how much algae is present.

- **Q**: "unique lighting model for water geometry" what about POM/tessellation for blocks?
- **A**: We don't have any plans regarding POM/tessellation to share at this time.  Thank you for the suggestion, though!

## Super Duper Graphics Pack Cancellation

- **Q**: Why was the super duper graphics package canceled?
- **A**: This [link](https://www.minecraft.net/en-us/article/super-duper-graphics-pack-ceasing-development) is probably still the best info for what happened with SDGP.

## Data Driven Renderer Folder

- **Q**: Will the renderer folder be exposed for us to use in resource packs? Doing so will allow many unique packs and configs for creators to experiment with.
- **A**: Not the renderer folder itself, but there will be more data-driving capabilities that we expose to resource packs over time, yes.

## Weirdest Bugs

- **Q**: What is the weirdest rendering bug you have seen while developing the Deferred Rendering Pipeline?
- **A**: Early experiments with indirect specular ended up lighting the whole scene! ![](/assets/images/visuals/deferred-qna/deferred-qna-media1.gif)
- **A**: We also see NaNs that get seeded and sometimes spread through the world.  Don't divide by zero, friends.  😉 ![](/assets/images/visuals/deferred-qna/deferred-qna-media2.png)
- **A**: Who's that ~~Pokemon~~ Minecraft mob? ![](/assets/images/visuals/deferred-qna/deferred-qna-media3.png)
- **A**: No screenshot, but another was when we had phantom shadows from mobs on the other side of the world!  At first we thought they were mobs with invisibility status and their shadow just needed to be hidden, but the corresponding mob was sometimes 1000s of blocks away with no invisibility!  Ended up being a transform-inversion issue.  That was a fun one to track down.

## Light Contrast and Saturation For the Sun/Moon and Pointlight

- **Q**: Will deferred ever see the likes of contrast and/or saturation control for all lights? For example increasing the contrast and/or saturation for colors from the sun/moon to have more bright and/or a somewhat vibrant color, or increasing Saturation for colors to standout.

    I have noticed that colors from the sun is quite dull, and not even changing the tone-mapper helps a bit.
- **A**: Not per light source, but, like Veka mentioned, we will be doing it on the full scene as part of tonemapping. And why stop at contrast and saturation?  We are working on a full HDR color grading suite, complete with contrast, saturation, gain, offset and split-tone grading. This feature will be data-drivable in your resource packs.

## Focus Parameter

- **Q**: Will a focus mode be added to the Object ?
- **A**: We don't have anything to share regarding focus or other camera-related properties at this time.  Thank you for the suggestion!

## Customizable Clouds

- **Q**: As of right now, Clouds are not really customizeable for deferred, is there plans to add volumetric Clouds.
- **A**: No plans on clouds to share right now, but appreciate the suggestion here! Definitely lots to explore here.

- **Q**: Will deferred have a multiple clouds layers like SDGP as config? that's feels more like aesthetic things that might gonna fit well with some packs.
- **A**: Thanks for the suggestion! Nothing to share right now on clouds

## Any Plans for Deferred to be Scriptable

- **Q**: When client side apis come out, are their any plans to add a api for deferred to allow us to manipulate it through scripting?
- **A**: The answer to this is similar to our Molang response: https://discord.com/channels/523663022053392405/1209532356403142656

    > Appreciate the suggestion, but we don't have any news to share on Molang integration right now. We have quite a few constraints with perf and other things that we have to be mindful of with deferred.

## Global Illumination

- **Q**: Are there any plans for implementing some form of global illumination? Something for more accurate skylight, reflected sunlight or ambient blocklight. Perhaps you already have a specific technique in mind? 👀
- **A**: Global Illumination is such a broad topic, so technically the answer is, yes!  More specifically, we are working on adding reflections, both IBL-based and screen-space. We have discussed many other forms of GI internally, but don't have anything to share on other applications at this time.

## Is the graphical team fully dedicated to the DRP?

- **Q**: This is an indirect way to ask if we can finally have some non-official confirmation that a certain other graphical system we have explicitly asked not to talk about in <#1208794326361055324> is not being worked on at all by the team.

    Actually also curious what percentage of the graphics team is dedicated to the DRP knowing that there are at the same time a fair number of graphical bugs, quirks and optimizations to be had in the base RenderDragon.
- **A**: No.  The graphics team owns initiatives like DTP, but also is responsible for maintaining the RenderDragon engine as well as the rendering of the core game.  We do have a dedicated group of engineers within the graphics team that is fully dedicated to the DTP however.

## Accurate Sky Model

- **Q**: As of right now , deferred uses vanilla style sky model which stitches the moon and sun sky semi globes together which is fine for vanilla but looks unappealing in deferred and causes issues when stitching the sky in deferred.
    Are there any plans you have in mind to deal with it?
- **A**: Thanks for the feedback! There are definitely some visual bugs and enhancements to the sky we've got to buff out. 🙂

## Unique Techniques and Features

- **Q**: Were there any graphical techniques developed in-house rather than relying on existing solutions? For example, deferred atmosphere seems quite unique, was it created from scratch or is it an implementation of already existing model?
- **A**: Many of the techniques we've employed are derived from whitepapers and talks presented at various technical conventions (like Siggraph, GDC, etc.), so nothing we've done is technically truly novel (this is usually the case for Graphics development in the game industry in general). 

    That said, we've put a Minecraft specific slant on many of the techniques employed to ensure parity with Vanilla lighting (e.g. light falls off in a similar way, some visual emphasis on "blockiness", scenes that are dark in Vanilla lighting look dark in Deferred lighting too, etc.)

    There are also opportunities for novel approaches (like lighting in the nether/end dimensions) but at this time we don't have any additional information we can share.

## Deferred Upscaling

- **Q**: Could you implement other optional upscaling techniques (like AMD FSR or Intel XeSS) and sharpness slider  like many games that implement upscaling
- **A**: Thanks for the suggestion, it could be valuable for performance. We'll be taking this into consideration!

## Better Water

- **Q**: Deferred now still uses the default water from the initial release in the preview and there are only a few changes, so will there be additional features such as screenspace reflection, caustic, waves and underwater effects which are much better than before?
- **A**: Yes! We are definitely working on updating the water lighting model and other effects in deferred. These are some great suggestions, and would love to hear more about what other effects and control you'd like to have with water in the deferred preview!
** A**: These are all great ideas for water improvement!  I'm happy to say that many of these are already on our roadmap:  caustics, noise, volumetric rays, reflections, refractions.

- **Q**: I know I'm asking a lot, but you might consider adding snell's window?
- **A**: Yes.  😉

## Will We See Items Getting Material Support?

- **Q**: Items are now the last *major* thing to not receive any official PBR support in deferred. It is still *possible* to give items PBR capabilities with some workarounds (ex: attachables, as well as tools like MIAM1 ), but I’m curious if it stay that way, or if there is a plan to eventually give items these PBR features.
- **A**: Yes!  This is something we are working on. And don't forget about Particles!  Those will be getting PBR support as well, likely sooner than Items.

## Enable/disable Deferred Graphics Options For Each Packs?

- **Q**: I would like to ask wether there is any plan to add support for the toggle that is enabling and disabling deferred-graphics for each packs. 
    Since shader packs are too heavy for some devices, I thought it would be wonderful if there were such option for each packs.
- **A**: Deferred graphics resource packs will stack like any other resource pack with the pack being higher on the stack overriding the properties of the pack below it. Your description of pack overriding behavior sounds right!

## Are There Any Plans To Fix Volumetric Fogs That Use Height Rather Than Uniformity From Blinding You?

- **Q**: To add more context. When you set up a fog and it uses the height parameters rather than being uniform, their thickness goes to the maximum upon entering the biome then fades into the proper height the further in you go. Is this intentional or a bug?
- **A**: Interpolation at biome transitions aren't the most polished right now (what you're describing is likely a bug). We'll be working on more polished transitions closer to final release!

## Entities: Spot/Point lights

- **Q**: Are entities planned to be involved? such as conditionally shining flashlights from players, glowing mobs, etc. 
    (I just imagine a lethal company style flashlight through fog in minecraft and get excited lol)
- **A**: No, we do not have plans to include spot lights or attachable lights to entities at this point in time.  Thank you for your suggestion!

## How Customizable Will Deferred Be On Release?

- **Q**: Seeing that there are **a lot** of configs for deferred inside the game’s files, will we be able to edit those fully through resource packs in the future? 
Something else I was wondering is if we will get more customizations in the future (for example: More lighting Config, Renderer Config, etc).
- **A**: While we won't end up exposing everything, we are still looking into expanding some of the data-driving to give Creators additional control. What are some of the specific configurations that you would like to see exposed that would give you the most additional creative control?

## Reloading Resource Packs
- **Q**: Will there ever be a F3+T feature in bedrock edition? i feel like the ability to reload resource packs without leaving the world should be added to bedrock edition, it's already in java from the start but never made it to bedrock.
- **A**: We definitely know that reloading resource packs is a pain. Not a great development flow. We want to do things here to make this easier, but nothing really to announce today. And this sort of thing is pretty gnarly to work on.

- **Q**: What about `/reload all` in Editor mode? (I'm not even sure if that's related in any way.)
- **A**: Yeah we have some tech that can reload some things, but not all things. And yeah, you're on the right line of thinking that if we do light up these features, Editor would be the safest place for us to do it.

## Identifier-Based Configuration

- **Q**: More of a feature request with the "Are there any plans to…" prefix, but identifier-based configurations would be quite useful. There are times when I want to change lighting configurations based on gameplay. Some command or something to switch configurations would be needed. Maybe scripting only.

    Directional lights especially come to mind as something I'd like to change due to world events. Maybe a "world destroyer" boss should change the very way that light is cast in the Overworld. As an example of these identifier-based files:

    ```json
    {
      "format_version": "1.20.80",
    
      "minecraft:directional_lights": {
        "description": {"identifier": "bao:world_destroyer_event"},

        "sun": {},
        "moon": {}
      }
    }
    ```

    And then something like:

    ```swift
    /renderer lighting set bao:world_destroyer_event
    ```

    Essentially, this would be using the same kind of ideas as fogs, wherein it isn't enough to just map them to biomes. They need to be freestanding for application when appropriate.
- **A**: Yes!  This is something we are working on and will be enabling in both our lighting and atmospherics JSONs.  The identification will be very similar to how Fog is identified. Creators should expect that when this change comes out, that they will have to update their current PBR packs to make use of the identifiers as it will be a breaking schema change.  Though it will be straight forward and we will provide guidance on how to do it.

## Dimension Based Config

- **Q**: Similar to <https://discord.com/channels/523663022053392405/1210250265895243807>, I think it would be cool if blocks could have 3 pbr textures and config, one for each dimension. This would help enhance each dimension to be unique.

    Having point light emit different colours based on dimension as one example

    This is similar to my Molang post, but currently there is no molang query to detect dimension as far as I know
- **A**: We're currently working on being able to provide unique configurations per biome and I believe these will allow you to configure properties unique to other dimensions like the nether or the end dimensions.

    We're still exploring how lighting will work in other dimensions with a big focus on the overworld presently!
- **A**: And as we also look at custom biomes and custom dimensions (no timeline or promises, just things on the list) we will also consider how deferred graphics will be utilized by these creator things.

## Vanilla PBR

- **Q**: Is Mojang planning on releasing PBRs for the *massive* collection of textures in this game? Getting started with PBR as a "technical artist" without just ripping PBRs with someone else's pack sucks if not just because of the sheer volume.

    (This is not a request for vanilla features. I figured the team had some internal pack they use for testing when in deferred. So I'm more asking for this as a developer resource.)
- **A**: Unfortunately we don't have any plans to share a PBR resource pack anytime soon for testing, I hear your feedback though and apologize it's not so easy to test right now.
You can however set default values for all blocks and entities that don't have a specific texture set in the global lighting file, which may help in some scenarios!

## Preview Atmosphere in Real Time

- **Q**: Currently, as a creator, when authoring atmosphere config there is no way to preview changes in real time. The workflow is: edit json -> reload the world -> observe changes. This process is quite annoying, as you don't see the changes instantly - it makes it harder to know how json changes translate to atmosphere visuals, as well as makes the iteration process take much longer than necessary.

    It would've been better if we could preview how different json configs and values affect atmosphere look in real time. Are there any plans (that you can share) that address this issue? E.g. some kind of in-game atmosphere editor or a plugin for <#1084090299120373760>? Or even an official (or not) standalone tool/webapp similar to blockbench or snowstorm. And if someone like me wanted to make such tool, what are the conditions or requirements for that, specific license to use for Bedrock's shader code?
- **A**: Yes, we hear you and feel your pain.  🙏  We do intend to integrate the Deferred Technical Preview more with the Bedrock Editor so that creators can more easily customize their packs and see changes in real-time.

## Trailer

- **Q**: Will deferred be getting a trailer anytime soon?
- **A**: Good question! It's still too early to think about marketing materials. Right now our focus is just building these features and getting feedback from you all! But I'd love to see community made trailers, hint hint! 😄
- **A**: I frequently search YouTube for videos of the latest updates and community packs! Also all the tutorials that help others get the deferred preview on their own devices too 🙂

## Increases to Keyframe Periods

- **Q**: Any plans to customize keyframes *across days*? (I'm hoping this didn't change since the last time I tested it.) I'd noticed before I was limited with keyframes to a single looping day. I was hoping I could vary directional lights by moon phases and was disappointed when I couldn't.

    I figured that the period could automatically be adjusted based on the largest resolved time key in the keyframe object. For example, `7.5` would cause a period of 8 days, with *all* of the listed times for that one keyframe object adhering to that period.

    Essentially, this would be not too dissimilar to how an animation automatically sets its total duration by looking at the largest given timeline value. Except these will be rounded up to a full day.
- **A**: Unfortunately we don't have plans to expand keyframing outside of a single day in the near to mid term. But that idea around moon phases is super awesome, something I hadn't thought of yet!
# The Bedrock Dialogue Designer



Whats in this article:

[The Good Stuff](#the-good-stuff)

[How it works and the basics](#how-it-works-and-the-basics)

[Navigation](#navigation)

[Wrapping it up](#wrapping-it-up)



## The Good Stuff

I'm sure we have all played those DLCs where NPC mobs have huge dialogues that you just can't create in the game. Well, if you are one of the more geeky ones, you may know that they use JSON dialogue in addons, bringing new dialogue files into the game. But, JSON dialogue files are also quite difficult to make, as they are complicated. If someone is just trying to have fun in the learning process, the task of making one of these might be a little daunting.



Thankfully, we have an online application made by [JannisX11](https://github.com/jannisx11), creator of [Blockbench](www.blockbench.net), a widely know low-poly 3D model editor. But today we are going to look at something called [Dialogue Designer](https://jannisx11.github.io/dialogue-designer). It is a tool that simplifies the creation of dialogue addons by adding a UI editor for you.



## How it works and the basics



The dialogue designer is made for Minecraft: Bedrock Edition and makes JSON dialogue files.



> Note: DIalogue Designer only works for the latest version of Minecraft: Bedrock Edition. Please make sure that your game is properly updated.

To begin, you should see a screen like this:

![](Media/DialogueDesigner.png)

Click the "New Dialogue" button to get started. If you have already have a dialogue file and want to edit it, click the open file button. You should now be taken to a menu like this:

![](Media/DialogueDesignerMenu.png)

Your file name should go in the top left corner. And for the dialogue to work, you should click the "+" button under the "Scenes" tab in the sidebar. From there you should be able to add text in the text section, re-name the NPC, and add a button that can either execute a command or take you to another scene or both. For organization, you can rename the scene by double clicking them in the sidebar.



## Navigation



Once you have created all your scenes, you probably want them to be opened when you click certain buttons right? Well there is an easy way to do that. Simply add a button with the "+" button in the dialogue menu and click the six dots on the right. In the drop down menu, click on navigation.

![](Media/Navigation.png)

You see my options are "Keep Open", "Close", and one that you will probably not see "OneButton". Unless you named any of your scenes this, you will not see it. Because the scenes show up in the navigation menu. Once you select a scene, when the button is pressed, it will take you to that scene. Under the commands tab, you can click which button to use (It will number them based on their position) and have a command execute when one is pressed. Alternatively, you can use "On Open" and "On Close" as well, and I think they are pretty self explanitory but if not, "On Open" is for when the dialogue is opened and "On Close" is for when the dialogue is closed.



## Wrapping it up



Once you are satisfied with the dialogue, you can export it with the button in the top right corner. It will download the file and give you the command to open it in game once the addon has been installed.

![](Media/Export.png)

For more information on how to inport a dialogue into the game, check out [this page](https://learn.microsoft.com/en-us/minecraft/creator/documents/npcdialogue?view=minecraft-bedrock-stable).

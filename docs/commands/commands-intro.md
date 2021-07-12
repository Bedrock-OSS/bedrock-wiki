---
title: Intro to Commands
nav_order: 1
tags:
    - guide
---

<Label color="green">Beginner</Label>

Written by VideoCarp<br>

Estimated Read Time: 6:58 (minutes)<br>
Firstly, since you're new I recommend **reading to full**.<br>
<br>

## What are commands?

Commands are bits of text that the game Minecraft understands, they can get quite advanced, but they're **easy** to pick up and learn.<br>

## Why commands?

Commands are handy. They're great to work with; even when making addons written in JSON, they can help.<br>
Most maps are also made using Minecraft commands.

## Beginning

Firstly I'm going to cover some logic. This is probably the **most important** part. There's a lot to cover, but I'm mostly going to be covering the beginner's basics.<br>
In Minecraft, there are two types of things, as a summary. Those two things are entities and blocks.
You might've heard of those a lot, and they're essential.<br>
<br>

## Basics

Here are some of the basics; read above for a bit of how to read this.

### What is a block?

A block is essentially an object that takes up a 1x1 space. An example of a block would be, say, grass, dirt, etc.
Everything in the below image is a block, don't worry about the water just yet.<br>

![grassblock](https://i.ibb.co/TqZjJ4m/FBB40-ECF-D2-F9-476-D-B56-B-1-EAA3-C6-D5-E08.png)<br>

### What is an entity?

As I like to think of it, an entity is an object that is not fixed to its position and can take damage.
Water isn't set to its place; is it an entity? No, the reason for that is because water cannot take damage.<br>
**All mobs, but NOT only mobs** are entities.
Below is an example of an entity.<br>

![chicken.png](https://i.ibb.co/DGbPNgQ/Webp-net-resizeimage.png)<br>

<br>
<br>
Now that you know what entities and blocks are, that's a step forward.<br>

### What is the syntax?

A quick explanation I'll give about syntaxes is that they're the format of the command if your command doesn't <br>
execute, then there's a chance it's that. Give all syntax errors a full read; if they don't work, take reference<br>
from either the wiki, gamepedia, or the `/help <command-name>` command while in-game.<br>
An example of a syntax error is: `/kill @ e`. That specific one will be raised because there is a space between the
`@` and the `e`. We'll go deeper into these `@` things in a bit. Below is an example of a syntax error.
This most likely happened because the person didn't put an argument afterward, but don't worry too much.<br>
![error example](https://i.ibb.co/y590bt1/D20-D2-B44-1-A2-E-4-DF9-BB91-9238320-F5-A4-C.jpg)

### How do I read syntax?

Here's a quick summary. It isn't accurate (I don't read them and somehow know it):<br>
** Don't** try to memorize the `something: type` ones if you don't understand.<br>

-   `<text_here>`. These brackets mean that this argument is **required**.
-   `[text_here]`. These brackets mean that this argument is **optional**.
-   `(option1 | option2)`. These brackets mean that this argument **must be one in the list**.
-   `|`. This character in a bracket means'**or** '.
-   `something: int`. If `: int` is after something, that means the argument **must be a whole number**, also known as integers.
-   `something: string`. If these are after something, that means the argument **must be text**, also known as string or str.
-   `something: float` or `something: double`. If these are after something, that means the argument **has a decimal place**.

## Coordinate Management

This is a crucial part of commands.

### What are coordinates?

To put it in my way, coordinates are just the location of an object. But how do you know the coordinates?<br>
How are coordinates formatted? Well, regarding both of them, there are three [axes](https://www.dictionary.com/browse/axis), namely X, Y, and Z.<br>
**How are they formatted?**<br>
They are formatted in the standard way, `x y z`, and you'll see more about those later.<br>
**How does one get the coordinates of something?**<br>
It's quite simple to do this. You **do not need to teleport** yourself. You can run this command:<br>
`/gamerule showcoordinates true` and your coordinates should show **at the top left**. Once they're showing, read the numbers after<br>
`Position`. It should look somewhat like this: `Position: X, Y, Z`. If it doesn't show exactly like that, don't panic.
X, Y, and Z represent the number. Whatever it is, it is where your legs are. We'll be getting into<br>
tildes on the next section, they will be necessary.

### What are Tildes?

Tildes are the `~` character, which in English means **about**, **near**, or **here**.<br>
The same thing goes for coordinates in Minecraft.<br>
Each tilde in a command represents where the command is being executed, and math can be done.<br>
To add to the coordinate: `~<number>`. This goes for all X, Y, and Z axes. You can also use `~+<number>`.<br>
To remove from the coordinate: `~-<number>`. Note the `-`. This goes for all axes.<br>

Say you want the player to teleport 10 blocks upwards, remember the Y axis is vertical.<br>
`tp <target> ~ ~10 ~`.<br>
Now, what is `target`, you may ask. Target means the entity the command is being executed on.<br>
This command moves the player 10 blocks up from the command block if one or the person executing it.<br>
Don't worry yet about making the player do it; we'll cover it now.<br>

### Local Coordinates (Caret Notation)

'Caret Notation' is another essential part of Minecraft commands; local coordinates are a bit like tildes. However, it's based on direction. Here's a quick summary:

-   `X` The X-axis moves player **to the left**.
-   `Y` The Y-axis moves player **up**.
-   `Z` The Z-axis moves player **forward**.

You may have thought that not all directions are covered in Caret notation, but really, they are. Tildes and Carets both take
`+` and `-`, so to go backward, you can teleport the player using `^ ^ ^-1`, and that will send the player 1 block backward.<br>
Adding `-` in carets will go to the opposite direction of the axis, `right` and `down` are done the same way as backward, except with the different coordinate. Both carets and tildes are `X Y Z` (`^ ^ ^`).

## Entity Management

This section is on how to manage entities.
There are a lot of commands that can affect entities, but here I'll cover the crucial ones.<br>

### Deleting an Entity

It's effortless to delete an entity. You can simply use the kill command to delete an entity.
But what if you wanted to delete a dropped item, or perhaps a specific mob? Below is more info.<br>

### Targetting

You can use the target selector argument, which I will be specifying information about right here.
You can use the `@e` targetting, but further than that is what we'll be focusing on.<br>

#### Target Selectors

What are these? Well, I like to explain these as the main argument in selecting which entity to use.<br>
A list of each one of them and what they do is below:

-   `@p` This selects the nearest player from where the command was executed.
-   `@r` This selects a random player in the world who is online.
-   `@s` This selects the **entity** that executed the command. All entities, not only players included.
-   `@a` This selects all the players.
-   `@e` This selects all entities.

For example, I want a creeper to say `Aww man` in the chat, I'd use:<br>
`execute @e[type=creeper,name="creep.er"] ~ ~ ~ say Aww man`.<br>
You see those things in the `[]` brackets? They will be covered next.<br>

`@e[type=<entity_type>` will select a specific type of entity, this could be TNT, a dropped item, a
specific mob type, etc., it can find any entity type. But what if you wanted a specific entity?<br>
`@e[type=<entity_type>,name=<name>`. With that, you'll find one of a name.<br>
I find others doing a widespread issue when they're getting the name. They usually
forget to add quotes after the `=` sign. If the mob has a space in the name, simply
instead of `<name>`, imagine it becomes `" <name>" `.<br>
The `name` argument may be ugly, so here is an alternative. This is also a way to group entities.
`/tag <target> (add | remove) <name: string>`.<br>
This will add a new group to the targetted entity. After adding it, you can remove the name if there is one.<br>
Now `string` means to add quotes, just like the name in the target selector. In commands and programming, `string` is just
text data, which in most cases are set by `" `. In Minecraft, use `"`.<br>
An example of a string is: `"Hello World!"`. In Minecraft, if you wrap with these quotes, you can use any character for any argument, including spaces.
You may want to check for the range. Here's how:<br>
`@e[r=<range number>]`<br>
In most guides, `number` will be represented as `int` or `integer`. They both mean a number. However, an `int` is not
`float` nor `double` (if you're unsure, ignore those two words). It cannot take a decimal value. `1.01`, for example, is not an integer. An integer is just a whole number.<br>

## Execute

**This is an essential section!**
This section is fully dedicated to making entities execute a command, think of it as `sudo`, but for commands.<br>
The execute command is the **most powerful** command in the entire game, but don't worry, it isn't hard to
pick up on.
`/execute <target> <location> <selected command syntax>` is the syntax. `<selected command syntax>`<br>
refers to the command you're getting the entity to execute. I always have my location as `~ ~ ~` and when it's<br>
like that, it executes anywhere, that's at least what I use for myself.<br>
But what if you wanted to check if someone was on a specific block type?<br>
`execute <target> <position> detect <detectPos> <block_to_detect> <data value> <command>`.<br>
That would be your syntax. `detect` isn't in brackets, this means to just put it there, regardless.<br>
Say you wanted a creeper walking on grass to kill nearby ocelots, you'd use this:
` /execute @e[type=creeper] ~ ~ ~ detect ~ ~-1 ~ grass kill @e[type=ocelot]`

Short notice, when stuck, try to use effect, armor stands, tags and names.

## Exporting a Map

Visit [here](https://gist.github.com/VideoCarp/e6ac9264b545580c95f93ce76d12cc71) to see how to.

## Functions Structure

Functions are straightforward to make. Here's a basic folder structure:
Functions are a way to import a ton of commands into new worlds easily. Unlike command blocks, however, they cannot be conditional.<br>
When you run the `function` command, it executes the .mcfunction file named by your argument.<br>
<br>
For example, a file named `cool_file.mcfunction` will execute if you return the argument as `cool_file` in other words,<br>
`/function cool_file`. However, if a different argument is written, the game will search for the `.mcfunction` file named by that. If none, the command will fail.<br>

`.mcfunction` files are always filled with nothing but commands.<br>

Now for the folder setup.<br>

Function Pack Structure:

<div markdown="0" class="folder-structure">
    <ul>
        <li><span class="folder">BP</span>
            <ul>
                <li><span class="file">manifest.json</span></li>
                <li><span class="image">pack_icon.png</span></li>
                <li><span class="folder">functions</span>
                    <ul>
                        <li><span class="file">filename.mcfunction</span></li>
                        <li><span class="file">tick.json</span></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>

Here are [some open-source examples](https://github.com/VideoCarp/carpcorps/tree/master/function_packs) of basic commands on GitHub.

Learn about [tick.json](https://wiki.bedrock.dev/concepts/mcfunction#creating-tickjson)

---
layout: page
title: Text Localization
parent: Tutorials
---

# Text Localization Tips & Tricks

<Label color="green">Beginner</Label>

## What is localization?

Language localization is the process of translating a game or software product for a specific country or region.

As an example let's take the `Gold Ingot` from Minecraft. In the code of the game, the developers referred to it as `item.gold_ingot.name`.
That's not a very nice way to call it all the time is it? So for each language that has a Minecraft translation, the developers created a translation(or Localization) file that assigns the proper name to that `item.gold_ingot.name`.

For example for US English they created a `en_US.lang` file and inside it you can find the line: `item.gold_ingot.name=Gold Ingot`
For Spanish we have the `es_ES.lang` file and inside that one you can find the line: `item.gold_ingot.name=Lingote de oro`
For French Canadian we have `fr_CA.lang` and the line: `item.gold_ingot.name=Lingot d'or`

You get the point! For more information about these localization files I recommend our [.lang](https://wiki.bedrock.dev/concepts/lang) section.

## Why would you want to use localization?

The boring and responsible answer is that you want to use localization so that your project can be easily translated into many languages and reach a much larger audience.

The real answer: because like many of us you're lazy! Made a spelling mistake? You don't even need to open the game, just open the `.lang` file and fix it! That's it! DONE! You don't have to break and replace signs, you don't have to re-write books, you don't have to find that one command for that one NPC that said that one thing.

## A quick example

Ok, before we get too bored, let's do a fast example to peak your curiosity!
Go inside your Resource Pack and find the `texts` folder. Here you should already see a `en_US.lang` file. This is a simple text file that you can open with Notepad. If you can't find it, just create a new `.txt` file and rename it to `en_US.lang`.

Inside the file, find the line with `item.gold_ingot.name=Gold Ingot`. If you can't find it just write it yourself.
Now change it to `item.gold_ingot.name=Shiny Yellow Ingot` and save the file.

Exit and re-enter your world and hover over a Gold Ingot, it should now say Shiny Yellow Ingot. Pretty cool isn't it?!

## Writing on a sign

Let's say you want to have a sign in your world that says `House of terrors` but you want to make sure your French friend Gaston sees the French translation on that sign: `Maison des terreurs`. He has his game in French so that should be easy.

Inside your Resource Pack find the `texts` folder and make sure you have inside it the `en_US.lang` file and the `fr_FR.lang` file. If not, just make 2 simple `.txt` files and rename them.

As with our quick example we need a code for this text, let's go with `sign.house_of_terrors`. Now let's paste this code inside the 2 files and assign the translation to each one:  
Inside `en_US.lang` write a new line with `sign.house_of_terrors=House of terrors`  
Inside `fr_FR.lang` write a new line with `sign.house_of_terrors=Maison des terreurs`

Before we get inside the game, do a quick restart of Minecraft just to make sure the game registered the new `.lang` files.

Now for the most complicated part! Put down a sign and paste this inside it:  
`{"rawtext":[{"translate":"sign.house_of_terrors"}]}`

When you exit the sign interface, you should see `House of terrors` written on it. AMAZING!!! And your friend should see `Maison des terreurs`.

As you can see we can't just put `sign.house_of_terrors` inside the sign and hope Minecraft understands what we mean. We have to wrap our code inside a special formula.

## Writing a book

-   This book will have 2 pages with multiple paragraphs on each page.

Getting to some serious stuff now! Let's say you want to write a fancy story inside a book, and make sure your friend from Italy can read it in his native tongue.

As per usual go inside your Resource Pack and find the `texts` folder. Make sure you have in there the `en_US.lang` file and the `it_IT.lang` file. If not, just make 2 simple `.txt` files and rename them.

Each page in our book will have a different localization code, let's say `book.mystory.page1` and `book.mystory.page2`.

For the first page we want to show something like this:

```
Now this is the story all about how

My life got flipped, turned upside down
```

For the second page we want to show this:

```
And I'd like to take a minute just sit right there

I'll tell you how I became the prince

of a town called Bel-air
```

Unfortunately we can't put the text like that inside our `.lang` files. Everything has to be on a single row/line. To do that we need to tell Minecraft _"Listen, I have a line here for you to display but I want you to add some line breaks inside it"_. We do that by putting a `%1` instead of a new line.

For the sake of learning let's transform our text step by step:

-   **Step 1**: replace all new lines with a `%1`:
    -   First page:
        ```
        Now this is the story all about how%1
        %1
        My life got flipped, turned upside down
        ```
    -   Second page:
        ```
        And I'd like to take a minute just sit right there%1
        %1
        I'll tell you how I became the prince%1
        %1
        of a town called Bel-air
        ```
-   **Step 2**: make it all one row:
    -   First page:
        ```
        Now this is the story all about how%1%1My life got flipped, turned upside down
        ```
    -   Second page:
        ```
        And I'd like to take a minute just sit right there%1%1I'll tell you how I became the prince%1%1of a town called Bel-air
        ```

Now we're getting somewhere! Let's put it all together with our code and see how this whole text would fit inside out `.lang` files:  
**en_US.lang**

```
book.mystory.page1=Now this is the story all about how%1%1My life got flipped, turned upside down
book.mystory.page2=And I'd like to take a minute just sit right there%1%1I'll tell you how I became the prince%1%1of a town called Bel-air
```

**it_IT.lang**

```
book.mystory.page1=Ora questa è tutta la storia su come%1%1La mia vita è stata capovolta, capovolta
book.mystory.page2=E mi piacerebbe prendere un minuto seduto proprio lì%1%1Ti dirò come sono diventato il principe%1%1di una città chiamata Bel-air
```

Like we did before, let's do a complete restart of Minecraft just to make sure the game registered the new `.lang` files.

Now go inside the game, open a book to write in and paste this on the first page:  
`{"rawtext":[{"translate":"book.mystory.page1","with":["\n"]}]}`  
And this on the second page:  
`{"rawtext":[{"translate":"book.mystory.page2","with":["\n"]}]}`

When you click outside the pages you should see the story just like we wanted it to show. So again, like with the sign, we can't just paste `book.mystory.page1` and hope it works. We have to wrap our code inside a special formula and tell minecraft _"I want you to replace each `%1` with a new line"_

<Label color="yellow">Intermediate</Label>

-   Making the next few examples **Intermediate** level because we're going to use commands and stop mentioning all the restarts you have to do and what files to create.

## Make an NPC talk

Usually when we want an NPC to talk we have to name it and use the `/say` or `/tell` commands. For localization purposes we are going to use the `/tellraw` command. This allows us to use that special formula to tell Minecraft we want something translated.

For this example I want Bob the NPC to say hi to me. As usual we'll have a code in our `.lang` file:  
`npcdialogue.bob.msg1=Hey there stranger!`  
You know what, let's make it even more fancy! Let's have Bob's name in colors for this one:  
`npcdialogue.bob.msg1=<§6Bob§r> Hey there stranger!`

-   See the [official wiki](https://minecraft.gamepedia.com/Formatting_codes) for info on text formatting

Now let's create that command:  
`/tellraw @a {"rawtext":[{"translate":"npcdialogue.bob.msg1"}]}`

Go ahead and run it! Since we used the `@a` selector, Bob is saying hi to all the players. If we want him to say hi only to the closes player we have to extend the command a little bit and also replace `@a` with `@p`.  
So the updated command would be:  
`/execute @e[name=Bob] ~~~ tellraw @p {"rawtext":[{"translate":"npcdialogue.bob.msg1"}]}`  
This new command is saying _"Find the entity called Bob and run the tellraw command for the closest player to that location."_

## Localize the Actionbar

So far we've put text on a sign, in a book and in the chat. Let's expand our horizons with the Actionbar. You know how you can turn on subtitles for movies? That's exactly what the Actionbar is! The place above your Hotbar where you can put some text!

Usually to show text in the Actionbar we do a quick `/title @a actionbar "Hello there!"` command. For localization we are going to use the `/titleraw` command. Let's do a quick example!

Inside the `.lang` file:  
`actionbar.status.gamemode=You are now in Survival Mode`  
The final command:  
`/titleraw @a actionbar {"rawtext":[{"translate" : "actionbar.status.gamemode"}]}`

## Localize Titles and Subtitles

This is one of the best things in terms of localization since fried rice! So listen up!
You know how the Title is this **H U G E** piece of text on the screen that blocks your view right? What if it would be possible to only show the Subtitle? It's a pretty big text in it's own right, and it's not that intrusive.

Ok, so usually to show a Title and Subtitle you would have to use 2 command in a specific order.  
First you run the Subtitle command: `/title @a subtitle The Hero has won!`  
Next you run the Title command: `/title @a title Victory`

Let's move those lines inside the `.lang` file:  
`quest1.subtitle=The Hero has won!`  
`quest1.title=Victory`

Now let's use the `/titleraw` command again:  
`/titleraw @a subtitle {"rawtext":[{"translate" : "quest1.subtitle"}]}`  
`/titleraw @a title {"rawtext":[{"translate" : "quest1.title"}]}`

But like I said, I want it all just in the subtitle! Do achieve that I simply put an empty space instead of "Victory"  
`quest1.subtitle=Victory! The Hero has won!`  
`quest1.title= ` <-- that there is an empty space after `=`  
`quest1.title=§r` if you're OCD and need to see something there, just put in a reset code. It won't show anything on screen.

And now we run the same 2 commands again:  
`/titleraw @a subtitle {"rawtext":[{"translate" : "quest1.subtitle"}]}`  
`/titleraw @a title {"rawtext":[{"translate" : "quest1.title"}]}`

## Using player names with localization

<Label color="red">Expert</Label>

-   Now we're getting into some really advanced stuff that have to do with scoreboards and selectors. These are features that were introduces in [Bedrock Edition v1.16.100](https://minecraft.gamepedia.com/Bedrock_Edition_1.16.100)

So you want to have an NPC that greets you when you get near it. Usually we'd have it say something like _"Hey there adventurer! Glad to see you again!"_. It has a nice ring to it, but it would be awesome if the NPC would call you by name! So how do we go from that to  
`"Hey there <insert player name here>! Glad to see you again!"`

First of all we have to prepare the line in the `.lang` file:  
`npcdialogue.guard.msg1=Hey there %1! Glad to see you again!`  
Notice how we put `%1` where we want the NPC to call us by our name.

Now let's create the command:  
`/tellraw @a {"rawtext":[{"translate":"npcdialogue.guard.msg1","with":{"rawtext":[{ "selector" : "@p" }]}}]}`

Just like we replaced `%1` with the new line when we created a book, now we replace it with the name of the closest player by using a `selector`.

If we want to go one step further and **make sure** the NPC talks only to the closest player, we run that command from an `/execute`:  
`/execute @e[type=NPC] ~~~ tellraw @p {"rawtext":[{"translate":"npcdialogue.guard.msg1","with":{"rawtext":[{ "selector" : "@p" }]}}]}`

## Using scoreboards with localization

And just like that we reached the final form of what can be done with localization! Let's say you have a friendly competition between a few players. You do some scoreboard magic and manage to find the highest scoring player and record his/her score inside the `winner` objective.
Let's announce the winner in style! Let's do it with a Title and Subtitle!

**.lang** file:  
`winner.subtitle=They won with %1 points!`

**Commands:**  
`/titleraw @a subtitle {"rawtext":[{"translate":"winner.subtitle","with":{"rawtext":[{"score" : {"name":"*","objective":"winner"}}]}}]}`  
`/titleraw @a title {"rawtext":[{ "selector" : "@e[scores={winner=0..}]" }]}`

Since this objective has only 1 player attached to it, notice how we used a wildcard `*` for selection: `"name":"*"`.

Let's add to this and paint the name of the player in a bright green!

**.lang** file:  
`winner.subtitle=They won with %1 points!`  
`winner.title=§a%1`

**Commands:**  
`/titleraw @a subtitle {"rawtext":[{"translate":"winner.subtitle","with":{"rawtext":[{"score" : {"name":"*","objective":"winner"}}]}}]}`  
`/titleraw @a title {"rawtext":[{"translate":"winner.title","with":{"rawtext":[{ "selector" : "@a[scores={winner=0..}]" }]}}]}`

Ok now let's combine all those commands and do a quick chat message to thank all the players for participating, and also to show them their scores. We'll use `gamescore` as our objective name that includes all the players.

**.lang** file:  
`players.thankyou.chat=Thank you all for participating %1! These are your scores: %2.`

**Command:**  
`/tellraw @a {"rawtext":[{"translate":"players.thankyou.chat","with":{"rawtext":[{ "selector" : "@a[scores={gamescore=0..}]" },{"score" : {"name":"@a[scores={gamescore=0..}]","objective":"gamescore"}}]}}]}`

Notice how we told Minecraft that we have 2 different items we want replaced inside that translation with the help of `%1` and `%2`.  
Also notice how we replaced the wildcard `*` and went from `"name":"*"` to `"name":"@a[scores={gamescore=0..}]"` for a more precise(and totally unnecessary) selection.

So there you have it folks! All you need to know about localization in Minecraft Bedrock Edition. Hope you have a blast renaming stuff for your friends!

## Quick reference

-   **Simple text on a sign:**  
    `sign.house_of_terrors=House of terrors`  
    `{"rawtext":[{"translate":"sign.house_of_terrors"}]}`

-   **Writing inside a book with new lines:**  
    `book.mystory.page1=Now this is the story all about how%1%1My life got flipped, turned upside down`  
    `{"rawtext":[{"translate":"book.mystory.page1","with":["\n"]}]}`

-   **Text in chat:**  
    `npcdialogue.bob.msg1=Hey there stranger!`  
    `/tellraw @a {"rawtext":[{"translate":"npcdialogue.bob.msg1"}]}`

-   **Actionbar:**  
    `actionbar.status.gamemode=You are now in Survival Mode`  
    `/titleraw @a actionbar {"rawtext":[{"translate" : "actionbar.status.gamemode"}]}`

-   **Title and Subtitle:**  
    `quest1.subtitle=The Hero has won!`  
    `quest1.title=Victory`  
    `/titleraw @a subtitle {"rawtext":[{"translate" : "quest1.subtitle"}]}`  
    `/titleraw @a title {"rawtext":[{"translate" : "quest1.title"}]}`

-   **Localization + Player names**  
    `npcdialogue.guard.msg1=Hey there %1! Glad to see you again!`  
    `/tellraw @a {"rawtext":[{"translate":"npcdialogue.guard.msg1","with":{"rawtext":[{ "selector" : "@p" }]}}]}`

-   **Localization + Scoreboards + Player names**  
    `players.thankyou.chat=Thank you all for participating %1! These are your scores: %2.`  
    `/tellraw @a {"rawtext":[{"translate":"players.thankyou.chat","with":{"rawtext":[{ "selector" : "@a[scores={gamescore=0..}]" },{"score" : {"name":"@a[scores={gamescore=0..}]","objective":"gamescore"}}]}}]}`

## External links

-   For more info on the JSON format used, check the [official wiki](https://minecraft.gamepedia.com/Raw_JSON_text_format).
-   For more info on `.lang` file composition/preparation check the [official Compass](https://compass.minecraft.partners/hc/en-us/articles/360052473054-Preparing-Raw-Text-for-Localization).
-   For more info on text formatting see the [official wiki](https://minecraft.gamepedia.com/Formatting_codes).

## Credits

-   Created by Scai([Scai Quest](https://twitter.com/ScaiQuest)) [2020.Sep.20]

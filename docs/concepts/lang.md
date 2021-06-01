---
layout: page
title: .lang
parent: Concepts
---

# Understanding .lang 



Bedrock Minecraft allows us to write the text in our addons as codes: For example, `action.hint.exit.pig`. Then in the language files, we define these codes: `action.hint.exit.pig=Tap sneak to dismount`.

This workflow has two main advantages:
 - Consolidates all of your text into one location, allowing you to more easily check for spelling mistakes and change the text after the fact
 - Allows internationalization. We can provide `.lang` files for multiple languages, allowing us to translate the text in our addon.

## Where can lang-codes be used? 

Lang-codes can be used in any of the following places:
 - pack name
 - pack description
 - entity name
 - item name
 - books
 - signs
 - tellraw commands

As you can see, lang-codes can be used pretty much wherever you write text in your addon.

When using lang codes in addons, you can usually use the string.

In game (signs, books, etc), use tellraw: `{"rawtext":[{"translate" : "my.lang.code"}]}`

## Why use lang?

Even if you don't plan on translating your addon, using the `.lang` structure is advantageous since it keeps all of your text in the same place and makes it easier to edit, proofread, and maintain.

## What is the structure?

Lang files are found under `my_pack/texts/`. You should download and view the vanilla packs to understand this structure better. There are two main file types that you should be concerned with:

`my_pack/texts/languages.json`: This contains a list of languages that your addon supports.
`language_LOCALIZATION.lang`: Contains the lang-codes for a specific language/localization (for example, `en_US.lang` is for the USA)

It would be best to create `languages.json`, and then one `.lang` file for each language you want to support. If you are only writing for English, you HIGHLY recommended supporting both `en_US` and `en_GB` (great Britain), even if you only copy/paste the `.lang` file.

## RP Vs. BP?

`.lang` files can be placed in both the resource pack and the behavior pack. This is presumably to allow behavior packs to function stand-alone without requiring a resource pack. In practice, though, all localization should be done inside the resource pack. The only strings you should have in your BP `.lang` files are the `pack.title` and `pack.description`.

## Overriding vanilla lang-codes

It is completely allowed and encouraged to override vanilla language strings. For example, if you want to rename `Iron Ingots` to `Iron Rods`, you can do so with the lang file:

`item.iron_ingot.name=Iron Rod`

## Undefined lang-codes

Sometimes, undefined lang codes will show up in-game. When this happens, they will show the entire lang code instead of a string. A widespread place where you will see this is with an entity name:

`entity.sirlich:my_entity.name`

When you see these codes, you can simply copy them down into your `.lang` files. For example:

`entity.sirlich:my_entity.name=MY VERY COOL ENTITY`

## What's with the %s?

Some lang-codes contain the concept of arguments. These are things the game passes into your lang-code. You represent these arguments with `%s. These normally occur in dynamic strings, like commands:

Example: (`/say`)
`chat.type.announcement=[%s] %s`

In the example above, the first `%s` is replaced by the entity's name doing the `/say`. The second `%s` is replaced by the string after they say.

## Useful vanilla-overrides

Remove the `[Entity Name]` from `/say` commands: `chat.type.announcement=%2` 

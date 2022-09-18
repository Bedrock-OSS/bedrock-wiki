---
title: Text and Localization
mention:
  - ThijsHankelMC
  - SirLich
  - aexer0e
  - MedicalJewel105
  - Luthorius
  - Fabrimat
---

Bedrock Minecraft allows us to display text on the screen through many different methods, typically through Lang-codes, defined in .lang files in the `texts` directory of a resource pack. This page will go into the process of creating, displaying and translating custom text.

## Lang-Codes

Are effectively just variables used to contain text. They are defined in `.lang` files, and are used for their advantages such as potentially decreasing overall pack size, providing translations, and make it so that all of your texts are stored in one place, proving for easy access, proof-reading, and ammendments.

### The Structure

The `.lang` can be found under `RP/texts`, and inside these files are where the codes are defined.

Locate `vanilla_resources/texts/en_US.lang` and take a look at it. Here is all of the text that you will ever see in Minecraft! You'll notice that there is a **lot** of them, all separated into different categories.

### Creating Lang-Codes

They are extremely simple to create, it’s just the code, followed by the desired text.

<CodeHeader></CodeHeader>

```
langcode.wiki.custom.1=A Custom Lang-Code for the Wiki!
langcode.wiki.custom.2=A Custom Lang-Code for the Wiki!
```

The Lang-Code itself is typically formatted in a similar fashion to the above

### Overriding vanilla Lang-Codes

It is completely allowed and encouraged to override vanilla language strings. For example, if you want to rename `Iron Ingots` to `Iron Rods`, you can do so within .lang files:

`item.iron_ingot.name=Iron Rod`

### Undefined Lang-Codes

Sometimes, undefined lang codes will show up in-game. When this happens, they will show the entire lang code instead of a string. A widespread place where you will see this is with an entity name, and in your hotbar/inventory:

`entity.wiki:my_entity.name`

When you see similar codes, you can simply copy them down into your `.lang` files. For example:

`entity.wiki:my_entity.name=MY VERY COOL ENTITY`

Blocks are the same as entities, just replacing `entity.` with `tile.`, though the 1.16.100+ items translation are different:

`item.wiki:my_item=My Item`

You will see these because of the way Minecraft handles the subjects, entities, blocks, and items alike all have their own identifiers in Behaviour Packs, so specific lang codes based off of that are generated for these, as they are required, unlike generic text. Booting up the game is the easiest way of finding out what the required Lang-Codes are for your addon.

### What's with the %s?

Some lang-codes contain the concept of arguments. These are things the game passes into your lang-code. You represent these arguments with `%s. These normally occur in dynamic strings, like commands:

Example: (`/say`)
`chat.type.announcement=[%s] %s`

In the example above, the first `%s` is replaced by the entity's name doing the `/say`. The second `%s` is replaced by the string after they say.

### Useful Vanilla-Overrides

Remove the `[Entity Name]` from `/say` commands: `chat.type.announcement=%2`

### Where to use them

Lang-codes can be used in any of the following places:

-   pack name
-   pack description
-   entity name
-   item name
-   block name
-   books
-   signs
-   tellraw commands
-   dialogues

As you can see, lang-codes can be used pretty much wherever you write text in your addon.

When using lang codes in addons, you can usually use the string.

In game (signs, books, etc), use [tellraw](/commands/tellraw): `{"rawtext":[{"translate" : "my.lang.code"}]}`

You can also create a text directory and .lang files in Behaviour Packs, but only to define pack.title and pack.description for the BP.

## Localization

Now you know about .lang files in general, you can look into internationalisation of you text. Translations that show depending on what language the player is using. In the `RP/texts` directory, there are quite a number of .lang files, each representing and containing a different language, and their name is based on the language and nation, for example en_GB (English, Great Britain), en_US (English, United States), de_DE (Deutsch, Deutschland), etc. All of the Lang-Codes are present in each individual .lang file, and contain text related to the language stated in the files name.

For example, you could state this: 

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```
langcode.wiki:my_text.words=My Block
```

And also this:

<CodeHeader>RP/texts/de_DE.lang</CodeHeader>

```json
langcode.wiki:my_text.words=Meinblock
```

The result would be that anyone using English (United States) would see the text "My Block" when `langcode.wiki:my_text.words` is used, but also anyone wih German selected as their language would see "Meinblock".

:::tip
If you do not plan on creating translations for your packs, it is advised that if you are working in English, you create both a `en_GB.lang` *and* `en_US.lang`, with identical content
:::

When editing lang file you have also to add a `languages.json` file in the `RP/texts` folder containing an array with each of the languages you plan to change:
<CodeHeader>RP/texts/languages.json</CodeHeader>

```json
[
  "en_US",
  "en_GB",
  "fr_FR"
]
```

### Vanilla Languages

| .lang File | Language              | Country        |
| ---------- | --------------------- | -------------- |
| id_ID      | Indonesian            | Indonesia      |
| da_DK      | Danish                | Denmark        |
| de_DE      | German                | Germany        |
| en_GB      | English               | Great Britain  |
| en_US      | English               | North America  |
| es_ES      | Spanish               | Spain          |
| es_MX      | Mexican Spanish       | Mexico         |
| fr_CA      | Canadian French       | Canada         |
| fr_FR      | French                | France         |
| it_IT      | Italian               | Italy          |
| hu_HU      | Hungarian             | Hungary        |
| nl_NL      | Dutch                 | Netherlands    |
| nb_NO      | Bokmål                | Norway         |
| pl_PL      | Polish                | Poland         |
| pt_BR      | Brazilian Portuguese  | Brazil         |
| pt_PT      | Portuguese            | Portugal       |
| sk_SK      | Slovak                | Slovakia       |
| fi_FI      | Finnish               | Finland        |
| sv_SE      | Swedish               | Sweden         |
| tr_TR      | Turkish               | Turkey         |
| cs_CZ      | Czech                 | Czech Republic |
| el_GR      | Greek                 | Greece         |
| bg_BG      | Bulgarian             | Bulgaria       |
| ru_RU      | Russian               | Russia         |
| uk_UA      | Ukrainian             | Ukraine        |
| ja_JP      | Japanese              | Japan          |
| zh_CN      | Chinese (Simplified)  | China          |
| zh_TW      | Chinese (Traditional) | Taiwan         |
| ko_KR      | Korean                | Korea          |

## Custom Languages

You may have noticed that there are 2 files in `RP/texts` that are not `.lang`. One is `languages.json` and the other `language_names.json`, these can be used to add more languages to the game, being selectable in the "languages" tab of the in-game settings when the Resource Pack is applied globaly, in addition to the 29 pre-existing vanilla languages.

For the following examples, lets assume that we have 2 fully functional .lang files, one names `xx_XX.lang`, and anothe `yy_YY.lang`

### Languages

Simply just an array of `.lang` files for Minecraft to register as available languages.

<CodeHeader>RP/texts/languages.json</CodeHeader>

```json
[
  "xx_XX",
  "yy_YY"
]
```

### Language Names

Another array, but this time defines the name to show for the languages

<CodeHeader>RP/texts/language_names.json</CodeHeader>

```json
[
  [ "xx_XX", "New Language (Custom Language #1)" ],
  [ "yy_YY", "Wiki-Speak (Custom Language #2)" ]
]
```

:::warning
 It is good practice whenever using a custom language, to make sure that if you disable the Resource Pack which it is stored in, that you change the selected language to a vanilla one, else Minecraft **will** crash.
:::

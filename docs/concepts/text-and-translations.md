---
title: Text and Localization
mentions:
    - ThijsHankelMC
    - SirLich
    - aexer0e
    - MedicalJewel105
    - Luthorius
    - Fabrimat
    - TheDoctor15
    - Hatchibombotar
    - ChibiMango
    - SmokeyStack
    - Sprunkles
---

Minecraft is a game with fully localized text in languages all over the world. To achieve this, Minecraft employs a system where internal **translation keys** are assigned values on a per-language basis. Minecraft will generate translation keys for custom entities, items, and blocks, and it is up to us to assign them a localized name in our resource pack.

## Language Files

### File Location

Language files typically go within the resource pack in the "texts" folder as files with the `.lang` file extension. These files can be placed in the behavior pack, but the only translatable text it can change is the pack manifest's name and description.

<FolderView :paths="[
  'RP/texts/en_US.lang',
  'RP/texts/languages.json',
  'RP/manifest.json'
]"
></FolderView>

Minecraft supports 29 languages currently, as described in [§ Vanilla Languages](/concepts/text-and-translations#vanilla-languages).

### Format

The format for a language file is rather straightforward. Translations are supplied as key-value pairs separated by an equals sign (`=`), the key being a translation key and the value being a string. Values cannot contain newline characters.

```toml
wiki.example_translation.line_1=The first line!
wiki.example_translation.line_2=Some more information following the first line.
```

Comments may be added with two pound signs (`##`), either as line comments or in-line comments. All text after the pound signs are a comment until the next line.

:::warning
Trailing spaces are not trimmed for in-line comments. If you want to indent a comment, use the Tab character.
:::

```toml
## Translator note: I thought this would be funny to put here.
item.flint_and_steel.name=Flint and Steve	##[sic]
```

A translation can contain substitutions in place of text. Substitutions can either be ordered (`%1`, `%2`, etc.) or not ordered (`%s`). Vanilla translations have their values filled in by the game, while players can manually set the substitutions' values with commands that use the raw JSON text format, like with [`/tellraw`](/commands/tellraw).

```toml
commands.op.success=Opped: %s
immersive_reader.book_page_header=Page %1 of %2
```

### Usage

Localization can be done just about anywhere text can be used, including (but not limited to):

-   Pack name and description
-   Entity, item, or block names
-   Pages in a book
-   Lines on a sign
-   `/tellraw` and `/titleraw` commands
-   Text in dialogue

Some text cannot be translated however, such as for an item renamed in an anvil.

## Localization

:::tip
It is good practice create a copy of your language file for each major language your pack supports. For example, to support full English one should create both an `en_US.lang` and an `en_GB.lang` file, to cover English in both the United States and Great Britain countries, respectively.
:::

When editing language files one must also add a `languages.json` file in the `texts` folder containing an array with each of the languages you plan to change. This lets Minecraft know that it should apply localization for these languages.

<CodeHeader>RP/texts/languages.json</CodeHeader>

```json
[
  "en_US",
  "en_GB",
  "fr_FR"
]
```

### Custom Languages

With a global resource pack, custom languages may be introduced through the `languages.json` and `language_names.json` files. Once the pack is applied globally the language can be changed in the "Language" tab of the in-game settings.

For the following examples, lets assume that we have 2 fully functional language files, one named `xx_XX.lang`, and another named `yy_YY.lang`.

<CodeHeader>RP/texts/languages.json</CodeHeader>

```json
[
  "xx_XX",
  "yy_YY"
]
```

`language_names.json` is an array as well, but this time to define the names to display for the languages.

<CodeHeader>RP/texts/language_names.json</CodeHeader>

```json
[
  [ "xx_XX", "New Language (Custom Language #1)" ],
  [ "yy_YY", "Wiki-Speak (Custom Language #2)" ]
]
```

:::warning
 Whenever using a custom language, make sure to unequip the language before you disable the Resource Pack which it is stored in, or else Minecraft will crash.
:::

### Vanilla Languages

The following is a table of the 29 languages Minecraft supports by default.

| File ID    | Language              | Country        |
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

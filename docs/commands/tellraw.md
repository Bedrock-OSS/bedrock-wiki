---
title: Tellraw
category: General
---

tellraw sends a JSON message to selected or all players being useful for sending plain messages to players ingame

**The titleraw command follows the same theme**

![](/assets/images/documentation/tellrawshow.png)


## Format

this is how the tell raw command is formatted

```
tellraw <target: target> <raw json message: json>
```

-   ` <target: target>`: The target is expressed as a playername or player groups such as `@a` `@r` `@s` `@p`
-   `<raw json message: json>`: This is a json schema that tells how the message is structured or constructed. expressed with for example:
    `{"rawtext":[{"text":""}]}`


## Examples

This sends the words in the last set of quotes

<CodeHeader></CodeHeader>

```json
/tellraw @a {"rawtext":[{"text":"Hello"}]}
```


## Escaping Characters

To use quotations in a tellraw message place a backslash to the left side of the quotation mark.

<CodeHeader></CodeHeader>

```json
/tellraw @a {"rawtext":[{"text":"Quote me: \"I am here\"."}]}
```


## Line breaks

To insert a line break use `\n`

<CodeHeader></CodeHeader>

```json
/tellraw @a { "rawtext": [ { "text":"I am line one\nI am line two" } ] }
```


## Displaying entities / player

You can use the following to use selector to display names.

<CodeHeader></CodeHeader>

```json
/tellraw @a {"rawtext": [{"text": "§6The winner is: §a"}, {"selector": "@a[r=5,c=1]"}]}
```


## Displaying scores

You can use the following to use selector to display names.

<CodeHeader></CodeHeader>

```json
/tellraw @a {"rawtext": [{"text": "§6The winner is: §a"}, {"selector": "@a[r=5,c=1]"}, {"text": "§6With a score of: "}, {"score":{"name": "@s","objective": "value"}}]}
```


## Translate text

To have a language dependant text you can use the translate component and [translation keys](/concepts/text-and-translations). please note you will need relevant information in each of the desired .lang files for this to work.


<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```
example.langcode.1=I am line one
```

<CodeHeader>RP/texts/de_DE.lang</CodeHeader>

```
example.langcode.1=Ich bin strich eins
```


The command:

<CodeHeader></CodeHeader>

```json
/tellraw @a { "rawtext": [ { "translate": "example.langcode.1" } ] }
```


## Translate text with selectors/scores

language files:

<CodeHeader></CodeHeader>

```
example.langcode.2=The winner is: %s. With a score of %s
```

<CodeHeader></CodeHeader>

```json
/tellraw @a {"rawtext":[{"translate":"example.langcode.2","with":{"rawtext":[{"selector":"@a[r=5,c=1]"},{"text":"§6With a score of: "},{"score":{"name":"@s","objective":"value"}}]}}]}
```

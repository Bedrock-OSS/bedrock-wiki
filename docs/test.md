---
title: Wiki Developer's Test Page
description: A page with a description just for being a page with a description.
outline_depth: 6
hidden: true
mentions:
    - TheItsNameless
    - MedicalJewel105
    - SirLich
    - SmokeyStack
    - QuazChick
---

:::danger SECRET
This is the special place thats used by the developers to develop new features and find bugs. Don't worry if this place is really messy, it doesn't need to look good!
:::

Hey, what are you doing here? How did you get here? Get back to editing the wiki!

## Blockquotes

You can make a space using `>`:

> Moved?
>
> > Double

Not actually moved

Indentation works like `code`:

    Not actually moved

## Buttons

### Default

<Button link="#buttons">Some Text</Button>

### Colored

<Button link="#buttons" color="red">
    Some Text
</Button>

## Code Blocks

### Code Header

<CodeHeader
    path="loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong.json"
    breadcrumbs="loooooooooooooooo/loooooong/loooooooooooooooong/looooooooooong/loooooooooong/looooooooooooooooooooooooooong/loooooooooooong/looooooooooooooong/loooooooooooooooong"
/>

```json
{
    "var": "a very very very loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong value"
}
```

### No Line Numbers

```json
"a very very very loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong value"
```

## Comments

Can you see the text (no)?

<!-- Comment! 👀 -->

## Containers

:::info Header?!
You can make info containers like this
:::

:::tip Header?!
You can make tip containers like this
:::

:::warning Header?!
You can make warning containers like this
:::

:::danger Header?!
You can make danger containers like this
:::

## Folder Views

<FolderView :paths="[
    'path/to/folder/with/file.mcfunction',
    'path/to/file.json',
    'get/out/of/my/swamp.mcstructure'
]" />

## Heading 2

Text

### Heading 3

Text

#### Heading 4

Text

##### Heading 5

Text

###### Heading 6

Text

## Horizontal Rule

Some text...

---

...and some more!

## Lists

### Checked

-   [x] a
-   [x] b
-   [ ] c

### Ordered

1. a
2. b
3. c

### Unordered

-   a
-   b
-   c

## Molang

```molang
false
true

0
0.0
0.0f
-0
-0.0
-0.0f

2.5e2
2.5e+2
2.5e-2

'string'

this

break
continue
return

!
=
<
>
!=
==
<=
>=
? :
*
/
+
-
&&
||
??
->

loop()
for_each()

c.my_value
context.my_value

q.my_value
query.my_value
query.my_value()

math.my_value
math.my_value()

t.my_value
temp.my_value

v.my_value
variable.my_value

array.my_value
array.textures[v.texture_index]

geometry.my_value

material.my_value

texture.my_value

,
;
```

## Snippets

`Ctrl + Space`

![](/assets/images/contribute/snippets/snippets.png)

## Spoilers

<Spoiler title="Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Title">

## Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong

### Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong

#### Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong

`somelongsinglecodeline:rjseut;lwkporiv;jr;oiU;OIRJB;OUBSOIU;LJ;OIJLj;fgdhokfdxhlpjklfjoijselvjlisue;vltjvzsa\dfhgz\dfgiuszehgiushezdgiuhsdghiksdaghkdsgaghkjsdhksdauhugkysdiuhiui`

</Spoiler>

## Tables

<Table data="my_table.json" />

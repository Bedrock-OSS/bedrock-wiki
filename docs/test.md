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

<CodeHeader>
    loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong.json
</CodeHeader>

```json
{
    "var": "a very very very loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong value"
}
```

<CodeHeader>func</CodeHeader>

```mcfunction
scoreboard players add @a joined 0


#Your Commands Here (example)
tp @a[scores={joined=0}] 0 65 0


scoreboard players reset * joined
scoreboard players set @a joined 1

scoreboard objectives add world dummy
scoreboard players add initialised world 0


#Your Commands Here (example)
execute if score initialised world matches 0 run say New world created!


scoreboard players set initialised world 1
```

<CodeHeader>func</CodeHeader>

```yaml
scoreboard players add @a joined 0


#Your Commands Here (example)
tp @a[scores={joined=0}] 0 65 0


scoreboard players reset * joined
scoreboard players set @a joined 1

scoreboard objectives add world dummy
scoreboard players add initialised world 0


#Your Commands Here (example)
execute if score initialised world matches 0 run say New world created!


scoreboard players set initialised world 1
```

### No Line Numbers

```json
{
    "var": "a very very very loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong value"
}
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

```mermaid
stateDiagram-v2
    noAnimation: play no animaton
    flyAnimation: play fly animaton
    explodeAnimation: play explode animaton

    state Ground {
        noAnimation
    }

    state Air {
        flyAnimation
    }

    state Explode {
        explodeAnimation
    }

    direction TB
    Ground --> Air : Is in Air
    Air --> Ground: Is on ground
    Ground --> Explode: Is dead
    Air --> Explode: Is dead

```

```mermaid
pie title SPets adopted by volunteers
  "Dogs" : 386
  "Cats" : 85
  "Rats" : 15
```

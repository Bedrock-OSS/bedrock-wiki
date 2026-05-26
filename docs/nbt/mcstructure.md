---
title: .mcstructure
description: Learn about the file format of structure templates.
category: General
mentions:
    - SirLich
    - MedicalJewel105
    - Misledwater79
    - SmokeyStack
    - Robotics-Modified
    - QuazChick
---

[compound]: /assets/images/nbt/compound.png
[int]: /assets/images/nbt/int.png
[list]: /assets/images/nbt/list.png
[string]: /assets/images/nbt/string.png

## Saving and Loading Structures

The **Export** button can be used to create `.mcstructure` files from a structure block **exclusively on Windows** (other platforms cannot export structures).
The files can then be placed into a behavior pack to load them in-game with a structure block or the `/structure` command.

The file path of the structure determines the structure identifier, which can be typed into the structure block to load the structure.

**Examples:**

-   `BP/structures/house.mcstructure` → `mystructure:house`
-   `BP/structures/dungeon/entrance.mcstructure` → `dungeon:entrance`
-   `BP/structures/stuff/towers/diamond.mcstructure` → `stuff:towers/diamond`

The first subfolder defines the namespace, and subsequent folders define the path, ending with the structure file's name.

Note that any files directly in the `BP/structures` folder are given the `mystructure` namespace.
If a structure with the same file name exists in both the `BP/structures` folder and an explicit `BP/structures/mystructure` folder, the game produces the following content log warning:

```
[structure][warning]-There was a conflict loading a structure in the default namespace. A structure with the name <name> was found both in the root directory and the mystructure directory.
```

In this case, the file in the `mystructure` folder overrides the file directly in the `structures` folder.

## File Format

<Spoiler title="NBT Format" open>

![Compound][compound] — Root tag of the structure template.

> ![Integer][int] `format_version`{lang=js} — Currently always set to `1`{lang=json}.
>
> ![List][list] `size`{lang=js} — List of three integers describing the size of the structure's bounds.
>
> > ![Integer][int] — Size of the structure in the X direction.
> >
> > ![Integer][int] — Size of the structure in the Y direction.
> >
> > ![Integer][int] — Size of the structure in the Z direction.
>
> ![Compound][compound] `structure`{lang=js} — Contains the blocks and entities in the structure.
>
> > ![List][list] `block_indices`{lang=js} — Associates block permutations from the block palette with positions in the structure.
> > See more details [here](#block-indices).
> >
> > ![List][list] `entities`{lang=js} — List of entities as NBT, stored in the same way as entities in the world file itself.
> > Tags like `Pos`{lang=js} and `UniqueID`{lang=js} are saved, but replaced upon loading.
> >
> > ![Compound][compound] `palette`{lang=js} — Contains named palettes of block permutation and position data.
> > It is presumably formatted in this way to support multiple variants of the same structure, however currently only `default`{lang=js} is saved and loaded.
> >
> > > ![Compound][compound] `default`{lang=js} — A single palette (currently only `default`{lang=js} is supported).
> > >
> > > > ![List][list] `block_palette`{lang=js} — A [block palette](#block-palette) listing block permutations in the structure.
> > > >
> > > > ![Compound][compound] `block_position_data`{lang=js} — Associates additional data with block positions in the structure. See more details [here](#block-position-data).
>
> ![List][list] `structure_world_origin`{lang=js} — List of three integers describing where in the world the structure was initially saved.
>
> -   Equal to the position of the saving structure block, plus its offset settings.
> -   This is used to determine where entities should be placed when loading.
>     An entity's new absolute position is equal to its old position, minus these values, plus the origin of the structure's loading position.
>
> > ![Integer][int] — Structure origin X position.
> >
> > ![Integer][int] — Structure origin Y position.
> >
> > ![Integer][int] — Structure origin Z position.

</Spoiler>

### Block Indices

Each structure contains two lists of block indices, which are integers that correspond to a block permutation from the [block palette](#block-palette) for a given block position.
Having two lists of block indices creates a primary and secondary block layer, allowing for [co-located blocks](/blocks/block-colocation) (such as those that are waterlogged) to be stored.

-   Each sublist proceeds in ZYX order from the bottom north-west corner of the structure to the top south-east corner.
    For example, if the structure is 2×3×4 blocks in size, then the 24 (product of the dimensions) values in each layer list represent the blocks located at `0 0 0`, `0 0 1`, `0 0 2`, `0 0 3`, `0 1 0`, `0 1 1`, `0 1 2`, `0 1 3`, `0 2 0`, `0 2 1`, `0 2 2`, `0 2 3`, `1 0 0`, `1 0 1`, `1 0 2`, `1 0 3`, `1 1 0`, `1 1 1`, `1 1 2`, `1 1 3`, `1 2 0`, `1 2 1`, `1 2 2`, `1 2 3` relative to the origin.

-   An index of `-1`{lang=json} indicates a void in the structure where no block exists, causing any existing block to remain upon loading.
    This occurs when structure voids are saved, and is the case for most blocks in the secondary layer.

<Spoiler title="NBT Format" open>

![List][list] `block_indices`{lang=js} — List containing two sublists, one for each block layer. Both layers share the same palette.

> ![List][list] — List of block palette indices in the primary layer.
>
> ![List][list] — List of block palette indices in the secondary layer.

</Spoiler>

### Block Palette

The block palette is a list of all [block permutations](/blocks/block-permutations) that are included in the structure.

<Spoiler title="NBT Format" open>

![List][list] `block_palette`{lang=js} — List containing block permutations

> ![Compound][compound] — A single block permutation, following a similar format to [block descriptors](/documentation/shared-constructs#block-descriptors).
>
> > ![String][string] `name`{lang=js} — The identifier of the block type, such as `"minecraft:planks"`{lang=json}.
> >
> > ![Compound][compound] `states`{lang=js} — The block's states as keys and values.
> >
> > -   The values are the appropriate NBT type for the state: strings for string states, integers for integer states, and bytes for boolean states.
> > -   Examples: `"minecraft:cardinal_direction": "north"`{lang=json}, `"bite_counter": 3`{lang=json}, `"open_bit": 1b`{lang=json}.
> >
> > ![Integer][int] `version`{lang=js} — Compatibility versioning number for this block.
> >
> > -   As of 1.26.30, this version is set to `18168865`{lang=json} which is hex `01 15 3C 21`, meaning `1.21.60.33`.

</Spoiler>

### Block Position Data

<Spoiler title="NBT Format" open>

![Compound][compound] `block_palette`{lang=js} — Maps block positions to their additional data.

> ![Compound][compound] `<index>`{lang=xml} — Contains additional block data of the block at the index position.
>
> > ![Compound][compound] `block_entity_data`{lang=js} — Block entity data as NBT, stored exactly the same as block entities in the world file itself.
> >
> > -   Position tags are saved but replaced upon loading.
> > -   Layer is unspecified as multiple block entities cannot coexist in a block space.
> >
> > ![List][list] `tick_queue_data`{lang=js} — Contains one more compounds of queued (also known as pending or scheduled) tick information.
> >
> > -   This is used for blocks like coral to make it die, water to make it flow, and other various queued updates such as custom blocks with the [`minecraft:tick`](/blocks/block-components#tick) component.
> >
> > > ![Compound][compound] — A single queued tick.
> > >
> > > > ![Integer][int] `tick_delay`{lang=js} — The number of game ticks remaining until this block should tick.

</Spoiler>

## What Happens If…

Results from testing to see what happens when modified structure files are loaded:

-   If the dimensions in `size`{lang=js} exceed the vanilla save the limit of 64×256×64, the structure can still be loaded just as expected.
-   If the values in the block layer lists are not int tags, all values are treated as `0`{lang=json}.
-   If a value in the block layer list is equal to or larger than the palette size or less than `-1`{lang=json}, an air block is placed.
-   If the `default`{lang=js} palette is not present, loading the structure results in no blocks being placed.
-   If any of the tags that have constant names are unspecified or are the wrong tag type, the structure fails to load with the following content log error:

    ```
    [Structure][error]-Loading structure '<identifier>` from behavior pack: '<path>' | "<tag>" field, a required field, is missing from the structure.
    ```

-   If `block_indices`{lang=js} does not contain exactly two values, the structure fails to load with the following content log error:

    ```
    [Structure][error]-Loading structure '<identifier>` from behavior pack: '<path>' | The "block_indices" field should be an array with 2 arrays and instead we have <count> arrays.
    ```

-   If the values inside of `block_indices`{lang=js} do not list tags, the structure fails to load with the following content log error:

    ```
    [Structure][error]-Loading structure '<identifier>` from behavior pack: '<path>' | The "block_indices" field's first array is either missing or not a list.
    ```

-   If the length of the two lists in `block_indices`{lang=js} are not equal, the structure fails to load with the following content log error:

    ```
    [Structure][error]-Loading structure '<identifier>` from behavior pack: '<path>' | The "block_indices" field's arrays need to both be the same size.
    ```

-   If the length of the two lists in `block_indices`{lang=js} does not equal the product of the structure's dimensions, the structure fails to load with the following content log error:

    ```
    [Structure][error]-Loading structure '<identifier>` from behavior pack: '<path>' | The "block_indices" field should have as many elements as defined by the "size" field.
    ```

## Bedrock & Java Comparison

[NBT files](https://minecraft.wiki/w/NBT_format), as adapted by Java and Bedrock's .mcstructure files have many major differences.
However, they do have some things in common: they're stored in NBT format and use index arrays and palettes.

Here are a few main differences:

| Feature                | Bedrock Edition                                                      | Java Edition                                                                               |
| ---------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| File extension         | `.mcstructure`                                                       | `.nbt`                                                                                     |
| Compression            | None                                                                 | Gzip                                                                                       |
| Endianness             | Little-endian                                                        | Big-endian                                                                                 |
| Uncompressed file size | Smaller as the order of blocks hardcoded, only palette indexes saved | Larger as each block is stored as (location, palette index, optional NBT)                  |
| Compressed file size   | Larger as no compression is used                                     | Smaller as the use of Gzip compression outperforms the more compact `.mcstructure` format. |

## NBT Editors

You can find download links for some NBT editors [here](/meta/useful-links#software-installed).

---

[Original Credit](https://gist.github.com/tryashtar/87ad9654305e5df686acab05cc4b6205)

---
title: .mcstructure
category: General
---

[int]: /assets/images/nbt/int.png
[list]: /assets/images/nbt/list.png
[compound]: /assets/images/nbt/compound.png
[string]: /assets/images/nbt/string.png

### Saving and Loading

The **Export** button creates `.mcstructure` files in a structure block. The files must be placed in a behavior pack to load them in-game with a load structure block. The path determines the structure identifier, which is typed into the structure block to load the structure.

**Examples:**  
`BP/structures/house.mcstructure` → `mystructure:house`  
`BP/structures/dungeon/entrance.mcstructure` → `dungeon:entrance`  
`BP/structures/stuff/towers/diamond.mcstructure` → `stuff:towers/diamond`

The first subfolder defines the namespace, and subsequent folders define the path, ending with the structure file's name.

Note that any files directly in the `structures` folder are given the `mystructure` namespace. If a structure exists in the `structures` folder and shares a name with a structure in an explicit `mystructure` folder, the game produces the following content log warning:

```
[structure][warning]-There was a conflict loading a structure in the default namespace. A structure with the name <name> was found both in the root directory and the mystructure directory.
```

In this case, the file in the `mystructure` folder is the one that "wins," resulting in the file directly in the `structures` folder being ignored.

### File Format

`mcstructure` files are uncompressed [NBT files](https://wiki.vg/NBT#Specification). Like all Bedrock Edition NBT files, they are stored in little-endian format. The tag structure is as follows:

> ![Integer][int] `format_version`: Currently always set to `1`.  
> ![List][list] `size`: List of three integers describing the size of the structure's bounds.
>
> > ![Integer][int] Size of the structure in the X direction.  
> > ![Integer][int] Size of the structure in the Y direction.  
> > ![Integer][int] Size of the structure in the Z direction.
>
> ![Compound][compound] `structure`: Actual data compound.
>
> > ![List][list] `block_indices`: List containing two sublists, one for each layer. These contain the blocks in the structure. Each block is stored as an integer index into the palette (see below). Proceeds in ZYX order from the lowest corner to the highest one. For example, if the structure size is `[2,3,4]`, then the 24 (product of the dimensions) values in each layer list represent the blocks located at `[(0,0,0), (0,0,1), (0,0,2), (0,0,3), (0,1,0), (0,1,1), (0,1,2), (0,1,3), (0,2,0), (0,2,1), (0,2,2), (0,2,3), (1,0,0), (1,0,1), (1,0,2), (1,0,3), (1,1,0), (1,1,1), (1,1,2), (1,1,3), (1,2,0), (1,2,1), (1,2,2), (1,2,3)]` relative to the origin. Index values equal to `-1` indicate no block, causing any existing block to remain upon loading. This occurs when structure voids are saved, and is the case for most blocks in the second layer. Both layers share the same palette.
> >
> > > ![List][list] of ![Integer][int] Indices for blocks in the primary layer.  
> > > ![List][list] of ![Integer][int] Indices for blocks in the secondary layer. This layer is usually empty, except for water when the block here is waterlogged.
> >
> > ![List][list] of ![Compound][compound] `entities`: List of entities as NBT, stored exactly the same as entities in the world file itself. Tags like `Pos` and `UniqueID` are saved, but replaced upon loading.
> >
> > ![Compound][compound] `palette`: Contains multiple named palettes, presumably to support multiple variants of the same structure. However, currently, only `default` is saved and loaded.
> >
> > > ![Compound][compound] A single palette (currently only named `default`).
> > >
> > > > ![List][list] `block_palette`: List of block states. This list contains the ordered entries that the block indices are referring to.
> > > >
> > > > > ![Compound][compound] A single block state.
> > > > >
> > > > > > ![String][string] `name`: The block's identifier, such as `minecraft:planks`.  
> > > > > > ![Compound][compound] `states`: The block's states as keys and values. Examples: `wood_type:"acacia"`, `bite_counter:3`, `open_bit:1b`. The values are the appropriate NBT type for the state: strings for enum values, integers for scalar numbers, and bytes for boolean values.  
> > > > > > ![Integer][int] `version`: Compatibility versioning number for this block (currently `17825806` as of writing, in 1.16).
> > > >
> > > > ![Compound][compound] `block_position_data`: Contains additional data for individual blocks in the structure. Each key is an integer index into the flattened list of blocks inside of `block_indices`. Layer is unspecified as it is irrelevant.
> > > >
> > > > > ![Compound][compound] `<index>`: A single piece of additional block data, applied to the block at its index position.
> > > > >
> > > > > > ![Compound][compound] `block_entity_data`: Block entity data as NBT, stored the same as block entities in the world file itself. Position tags are saved, but replaced upon loading. No other objects seem to exist adjacent to this one at this time.
>
> ![List][list] `structure_world_origin`: List of three integers describing where in the world the structure was initially saved. Equal to the position of the saving structure block, plus its offset settings. This is used to determine where entities should be placed when loading. An entity's new absolute position is equal to its old position, minus these values, plus the origin of the structure's loading position.
>
> > ![Integer][int] Structure origin X position.  
> > ![Integer][int] Structure origin Y position.  
> > ![Integer][int] Structure origin Z position.

### What Happens If...

Results from testing to see what happens when modified structure files are loaded:

-   If the dimensions in `size` exceed the vanilla save the limit of `64*256*64`, the structure can still be loaded just as expected.
-   If the values in the block layer lists are not int tags, all values are treated as `0`.
-   If a value in the block layer list is equal to or larger than the palette size or less than `-1`, an air block is placed.
-   If the `default` palette is not present, loading the structure results in no blocks being placed.
-   If any of the tags that have constant names are unspecified or are the wrong tag type, the structure fails to load with the following content log error:

```
[Structure][error]-Loading structure '<identifier>` from behavior pack: '<path>' | "<tag>" field, a required field, is missing from the structure.
```

-   If `block_indices` does not contain exactly two values, the structure fails to load with the following content log error:

```
[Structure][error]-Loading structure '<identifier>` from behavior pack: '<path>' | The "block_indices" field should be an array with 2 arrays and instead we have <count> arrays.
```

-   If the values inside of `block_indices` do not list tags, the structure fails to load with the following content log error:

```
[Structure][error]-Loading structure '<identifier>` from behavior pack: '<path>' | The "block_indices" field's first array is either missing or not a list.
```

-   If the length of the two lists in `block_indices` are not equal, the structure fails to load with the following content log error:

```
[Structure][error]-Loading structure '<identifier>` from behavior pack: '<path>' | The "block_indices" field's arrays need to both be the same size.
```

-   If the length of the two lists in `block_indices` does not equal the product of the structure's dimensions, the structure fails to load with the following content log error:

```
[Structure][error]-Loading structure '<identifier>` from behavior pack: '<path>' | The "block_indices" field should have as many elements as defined by the "size" field.
```

## NBT Editors

You can find download links for some NBT editors [here](/meta/useful-links#software-installed).

---

[Original Credit](https://gist.github.com/tryashtar/87ad9654305e5df686acab05cc4b6205)

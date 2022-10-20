---
title: About NBT (Named Binary Tag)
category: NBT in Depth
mention:
    - ConsoleTerm
tags:
    - expert
---

NBT (Named Binary Tag) is a name for data encoding format at the binary level, you certainly know format JSON which is based on the text level. Therefore, we will be able to use the JSON format for some examples, you may also notice that minecraft itself uses JSON to represent NBT in commands such as java commands or simplified bedrock commands ( `/give`, `/replaceitem`). See [NBT Commands](/commands/nbt-commands.md) . In this article, we will show NBT in much more detail than you will ever expect, because what you could see in the commands is far from NBT, and we will show you how NBT works and how to read it, also how `Minecraft BE` itself uses it as well.

## NBT Tags and Data Types
NBT, just like JSON, has given types and knows how to read them, for example JSON knows that a compound object starts with the symbol `{` and ends with `}`, it also knows that when it has to read a string, the string always starts with the symbol ", this means that we want to learn to read and understand NBT so you need to know when a composite object starts, and how to read individual types. 
Now let's look at the table of NBT tags for NBT types and how they are marked in NBT.
As it was said, NBT works on a binary level, so you need to know that the smallest data type is a byte, which is 8 bits in size. And individual types can contain multiple bytes, but they can never be 1/2 byte extra or less, not possible! : )
We also cannot say how the tags should be named, because everyone can call NBT tags differently, but they must always have the same binary base (`id`), id is represented by one byte.

|       Name           |   Binary ID   |    Binary  Size   |         Description       |
|:--------------------:|--------------:|:------------------|:--------------------------|
|      Byte            | 0x01          | 1 byte (8-bits)   | One byte size type        |
|Int16 (short)         | 0x02          | 2 bytes (16-bits) | A two-byte type           |
|Int32 (intiger)       | 0x03          | 4 bytes (32-bits) | A four-byte type          |
|Int64 (long)          | 0x04          | 8 bytes (64-bits) | An eight-byte type        |
|     Float            | 0x05          | 4 bytes (32-bits) | A four-byte type with regular decimal precision    |
|    Double            | 0x06          | 8 bytes (64-bits) |  An eight-byte type with higher decimal precision  |
|    String            | 0x08          | Predefined        | A string type that has a predefined size. Text uses UTF-8 encoding                 |
|    List              | 0x09          | Predefined        | A list type with a predefined size and defining type for the elements in the list  |
|  Compoud             | 0x0A (10)     | Undefined         | Type compound, the compound does not have a predefined size, so it is necessary to read the keys and values until we do not encounter the tag for ending the compound. |
|End of the Compoud    | 0x00          | 0 bytes           | This tag is not a type but only a tag and can only be used depending on the compound. It marks the end of a compound  |
|    Byte List         | 0x07          | Predefined        | List type of Byte and predefined size, not commonly used by Minecraft BE  |
|    Int List          | 0x0B (11)     | Predefined        | List type of Int and predefined size, not commonly used by Minecraft BE   |
|    Long List         | 0x0C (12)     | Predefined        | List type of Long and predefined size, not commonly used by Minecraft BE  |

You may notice that there is no boolean value like in JSON and that means we will express true false values as 1 and 0 using Byte.

## How to read/write NBT tags   
The same reading method applies to all numbers, read as many bytes as the number tag type is large, such as: Int16 (short) is 2 bytes in size, so I will read 2 bytes, but you need to know that Minecraft BE uses the [little-endian](#little-endian), unlike Java, it uses big-endian.  [Little-endian](#little-endian) is a way to write or read bytes of numbers.

### Reading Types
Type is always one byte in size, so we read the type and find out what to read next for the tag.

### Reading Numbers
When reading a number, it is necessary to know what type of number we are reading, we can find out by reading the type *([Reading types](#reading-types))*. Then when we know what type of number we have to read, we read it, for example, if we know that we want type `3`, then we look in the table and we know that type 3 is a number of 4-bytes size, so we read 4 bytes. All numbers ***BE*** reads/writes with [little-endian](#little-endian) method.

### Reading Strings
When reading a string, you need to know its length in bytes, this string length is always written with Int16 (short) `2 bytes` ([how to read numbers](#reading-numbers)) before the string, i.e. first we read the number, then we read the number of bytes of the number we read before, after we know the bytes we can stuff them through UTF-8 encoding and we get text from them.

### Reading Lists
When reading a list, we must first read the list ([type](#reading-types)), whether this list contains numbers or other lists or strings, etc. So first we read the type of this list, then we read the [number](#reading-numbers) of elements which is written as an Int32 (int) number, so we read 4 bytes, now we know the type of our elements and their count, so we read this type as many times as we know from the readed number before. Reading the size of a list is not the same as reading the size of a string! Should read Int32 no Int16! This solution does not apply to `Byte-List, Int-List, Long-List`!

### Reading Compouds
Compound has all properties named so when reading an property it is always necessary to read its name as well. The procedure for reading Compoud is rather simple. First, we read the type, the type can be anything, but if it is equal to an empty byte, then it is the end of the compound and then we jut stop reading, but if the type is not equal to the Compoud Ending tag, then the significant type of the property that we will read. The read property is always followed by the name (key), which needs to be read as a [string](#reading-strings), and after the string is read, then we can read value.

## Minecrft BE NBT files
When reading Minecraft NBT files, it is always important to be careful if there is no Bedrock Header at the beginning of the file, see [Bedrock NBT Header](#bedrock-nbt-file-header), but not all MCBE NBT files contain this header, for example `.mcstructure` also does not contain a Bedrock NBT header, unlike `level.dat`.
You also need to pay attention to the root element in the file, i.e. the list or compoud,
The root element also looks like a property, so you need to read the name of this root property, although Bedrock does not use these names, so these names are empty, but they are there.
Here is how .mcstructure looks like where JSON represents NBT.
```json
"":{
    "format_version":1,
    "size":[],//...
    "structure":{},//...
    "structure_world_origin":[]//..
}
```
:::warning
This example shows that it is also necessary to read the name of the basic element, although it is usually unused and empty.
:::

## Writing NBT
There is no certain procedure for writing, because it is the same mothods as when reading, but backwards. That's why we recommend first understanding NBT and learning to read it correctly, then it won't be difficult to write NBT.

## Bedrock NBT File header
The NBT bedrock Header is indicated by two 4-byte numbers, the first is always 8 and the second indicates the size of the nbt structure in bytes. E.g.
 - `08 00 00 00` - `bf 00 00 00`
 - < always 8 > < always the size of the NBT structure - exclude headers 8 bytes>

## Little-Endian
Little-Endian is the common method of writing numbers in bytes to streams or files.
It's not a science and it's easy to understand. So if Int16 `(short)` of value `0x5a72` then we convert it to bytes [`0x5a`, `0x72`] and then reverse their order that means [`0x72`, `0x5a`] and write d file: `72 5a`. It may seem illogical, but little-endian is almost always used when writing and reading from files. A single `byte` is the same in both methods because it is one byte in size. For example: 
- Int16 (long) `0x11223344aabbccdd`
- Split to 8 bytes `0x11 0x22 0x33 0x44 0xAA 0xBB 0xCC 0xDD`
- Reverse `0xDD 0xCC 0xBB 0xAA 0x44 0x33 0x22 0x11`
- Write `dd cc bb aa   44 33 22 11`
- Done (when reading the number just go backwards this example.)
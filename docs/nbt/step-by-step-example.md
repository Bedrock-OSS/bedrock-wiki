---
title: Reading NBT Example
category: NBT in Depth
mention:
    - ConsoleTerm
tags:
    - expert
---


## Step by step example (Reading NBT)

Before going through this example, it is necessary to first familiarize yourself with NBT in its full beauty. [NBT in Depth](nbt-in-depth.md)
Now we will show you how to read NBT, step by step, the format of what we will read will look something like this:

```json
"":{
    "myText":"My NBT text",
    "my Int32 Number":456,
}
```
When we don't know what to read, we always read only the next byte.

![](/assets/images/nbt/VS_Editor_images/step1.png)

What did we read? we read number 10 and that means we will read compoud. We also know that we are at the root element of this file now, so we need to read the name of our root element. Name is string, so first we have to read the length of the text in bytes, and that is written in Int16 *(Short)*.

![](/assets/images/nbt/VS_Editor_images/step2.png)

The name size of our root element is zero so we won't read any more bytes. We don't know what to read, so let's read another byte.

![](/assets/images/nbt/VS_Editor_images/step3.png)

We already know that the next property in our compound is of type string. but before we read our property value, we first read its name written in the string. So we read another 2 bytes and bachom found the length of the string name from our compound.

![](/assets/images/nbt/VS_Editor_images/step4.png)

We see that the length of our text is 6 bytes. So let's read the next 6 bytes.

![](/assets/images/nbt/VS_Editor_images/step5.png)

So we have read the Name of our property, which we can get in text form using UTF-8 encoding, that is: `myText`, then remember that the type of our property is string, so we repeat the process.
I'll read the next Int16 (2 bytes) again and we'll find out the length of our property.

![](/assets/images/nbt/VS_Editor_images/step6.png)

The string length of our property is 0x0B, so 11, so read another 11 bytes.

![](/assets/images/nbt/VS_Editor_images/step7.png)

When we push our read bytes through UTF-8 encoding, it returns the value: `My NBT text`,
what now? You don't know?, so read the next byte to find out what to do next.

![](/assets/images/nbt/VS_Editor_images/step8.png)

So we read type 3, that is Int16 which contains 4 bytes. But before we read our number I need to find out the name of our property again. So?
Read an Int32 to get the length of the name for our property.

![](/assets/images/nbt/VS_Editor_images/step9.png)

So we know the size of the name 0x0f (15) so let's read the next 15 bytes and convert through UTF-8 encoding.

![](/assets/images/nbt/VS_Editor_images/step10.png)

So we have the name of another property: `my Int32 Number`. Next let's read Int32, so 4 bytes.

![](/assets/images/nbt/VS_Editor_images/step11.png)

We read an Int32 that has the value `0x01c8` (456).
So we don't know what to do next, so let's read another type od next element, so 1 byte.

![](/assets/images/nbt/VS_Editor_images/step12.png)

We read 0 (an empty byte), and that marks the end of our root compound. Thus, the reading of the compound ends, and since it is the root compound, we can finish reading it completely and have the entire NBT file read.



:::tip Important points to keep in mind
 - The file may contain an NBT Bedrock Header, so be aware that such a situation may occur. See [NBT in Depth](nbt-in-depth.md)>[NBT Bedrock Headers](nbt-in-depth.md#bedrock-nbt-file-header).
 - The closing null byte does not terminate the reading of the NBT as such, but merely marks the end of the current compound.
 - All the numbers you read need to be read with little-endian, See [NBT in Depth](nbt-in-depth.md)>[little-endian](nbt-in-depth.md#little-endian).
 - The first NBT element in a file can only be a compound or a list. The first element in NBT files also has its own name, even though it is mostly empty, but it still needs to be read and avoid complications.

:::
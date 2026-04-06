---
title: 读取 NBT 示例
category: NBT 深入
mentions:
    - conmaster2112
tags:
    - expert
description: 逐步讲解 NBT 读取过程。
---

在阅读此示例之前，建议先熟悉 NBT 的完整内容。参见_[NBT 深入详解](/nbt/nbt-in-depth)_。
现在我们将逐步展示如何读取 NBT，我们将要读取的数据格式如下：

```json
"":{
    "myText":"My NBT text",
    "my Int32 Number":456,
}
```

当我们不知道要读取什么时，就读取下一个字节。

![](step1.png)

我们读取到了数字 10，这意味着我们要读取一个 compound。我们还知道现在处于文件的根元素属性位置，因此需要读取根元素属性的名称。名称是字符串类型，所以首先要读取文本的字节长度，这个长度由 Int16 _(Short)_ 表示。

![](step2.png)

根元素属性的名称大小为零，因此我们不需要再读取任何字节。我们不知道接下来要读取什么，所以再读取一个字节。

![](step3.png)

我们已知根 compound 中的下一个属性是字符串类型，但在读取属性值之前，需要先读取它的名称，名称也是字符串类型。因此再读取 2 个字节来获取属性名称字符串的长度。

![](step4.png)

我们看到属性名称的长度是 6 字节，因此读取接下来的 6 个字节。

![](step5.png)

我们已经读取了属性的名称，可以通过 UTF-8 编码转换为文本形式：`myText`。然后记住该属性的类型是字符串，所以重复这个过程。
再次读取下一个 Int16（2 字节），就能得知字符串值的长度。

![](step6.png)

该属性的字符串长度为 0x0B，即 11，所以再读取 11 个字节。

![](step7.png)

将这些读取的字节通过 UTF-8 编码后，得到值：`My NBT text`。
接下来怎么办？你不知道？那就读取下一个字节来确定接下来要做什么。

![](step8.png)

我们读取到了类型 3，即 Int16，包含 4 个字节。但在读取这个数字之前，需要先找出这个属性的名称。
读取接下来的两个字节来获取该属性名称的长度。

![](step9.png)

我们知道了名称长度是 0x0f（15），读取接下来的 15 个字节并通过 UTF-8 编码。

![](step10.png)

现在我们有了这个属性的名称：`my Int32 Number`。接下来读取这个 Int32，需要 4 个字节。

![](step11.png)

我们读取到了一个值为 `0x01c8`（456）的 Int32。
你又不知道接下来要做什么？那就读取下一个属性的类型，需要 1 个字节。

![](step12.png)

我们读取到了 0x00（一个空字节），这标志着根 compound 的结束。然后 compound 的读取结束，由于这是**_根_** compound，我们可以完全结束读取，整个 NBT 文件就读完了。

### NBT 示例文件

这是本示例中使用的文件。

<Button link="/assets/nbt/nbt_example_file.nbt" download>
    下载 NBT 文件
</Button>

:::tip 需要记住的要点
- 文件可能包含 NBT Bedrock 头，遇到这种情况请注意。参见 [NBT 深入详解](/nbt/nbt-in-depth) > [NBT Bedrock 头](/nbt/nbt-in-depth#bedrock-nbt-file-header)。
- 结束的 null 字节并不会终止 NBT 的读取，而只是标记当前 compound 的结束。
- 读取所有数字时都需要使用小端序，参见 [NBT 深入详解](/nbt/nbt-in-depth) > [小端序](/nbt/nbt-in-depth#little-endian)。
- 文件中的第一个根 NBT 元素只能是 compound 或 list。NBT 文件中的根元素/属性也有自己的名称，虽然通常为空，但仍需要读取以避免出现问题。
:::

(End of file - total 84 lines)
---
title: JavaScript 故障排除
category: 文档
mentions:
    - Herobrine643928
    - JaylyDev
    - SmokeyStack
    - ThomasOrs
description: JS 故障排除。
---

本文将教你调试任何 JavaScript 问题的基本工作流程。

## 错误参考

这些错误可以帮助你调试代码，但报告的问题并不总是立即清楚。这些错误大多在 JavaScript 引擎中很常见，所以可以通过搜索引擎（例如 Google 搜索）找到。

你可以通过单击每个错误名称下面的链接在 `MDN` 上了解更多关于每个 Error 类的信息。

-   [`EvalError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError)
    -   创建一个表示关于全局函数 `eval()` 发生错误的实例。
-   [`RangeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
    -   创建一个表示数值变量或参数超出其有效范围时发生错误的实例。
-   [`ReferenceError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
    -   创建一个表示取消引用无效引用时发生错误的实例。在 Minecraft 脚本引擎中，有一个没有明确原因的 ReferenceError：
    -   绑定到原型的原生对象不存在。
-   [`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
    -   创建一个表示语法错误的实例。
-   [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
    -   创建一个表示变量或参数不是有效类型时发生错误的实例。
-   [`URIError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError)
    -   创建一个表示传入 `encodeURI`、`encodeURI()` 或 `decodeURI`、`decodeURI()` 无效参数时发生错误的实例。
-   [`AggregateError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)
    -   创建一个表示当操作需要报告多个错误时（例如通过 `Promise.any()`）将多个错误包装在单个错误中的实例。
-   [`InternalError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError)
    -   创建一个表示 JavaScript 引擎抛出内部错误时发生错误的实例。在 Minecraft JS 中，错误如下：
        -   栈溢出
        -   内存不足

## Minecraft JS 错误

由于 Minecraft Bedrock Edition 使用自己的 JavaScript 版本（基于 QuickJS），存在一些仅在 Minecraft 中存在的错误，这些错误很常见，因为 API 是基于原生 C++ 构建的。

### InternalError: out of memory

当组合内存使用超过 250 兆字节时发生此错误。

这会通过看门狗终止保存和关闭世界，无法使用 `BeforeWatchdogTerminateEvent` 取消。

可以通过修改 `server.properties` 中的 `script-watchdog-memory-limit` 来调整内存限制。（将此值设置为 0 可禁用限制。）

### InternalError: stack overflow

当存在递归函数（调用自身的函数）没有退出点时发生。

示例代码：

```js
function loop(x) {
    // The base case is missing
    loop(x + 1); // Recursive call
}
loop(0);
// InternalError: stack overflow
```

### InternalError: interrupted

发生于运行时成本可忽略不计时。这取决于你的脚本如何设置。

### TypeError: no setter for property

当尝试为仅定义了 getter 的属性设置新值时发生此错误。

这在尝试设置原生模块中的原生对象属性时很常见。

### TypeError: value is not iterable

当对不可迭代的值进行迭代时发生此错误。

单击[**这里**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/is_not_iterable)了解更多信息。

### TypeError: not a function

当尝试调用一个值，但该值实际上不是函数时发生此错误。这非常常见，因为脚本 API 不断删除或重命名方法，而未在 Minecraft 更新日志中提及它们。

单击[**这里**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function)了解更多信息。

### TypeError: Native Type Conversion Failed

当你将错误类型的值输入原生方法中的必需参数时发生此错误。

### TypeError: Native Variant Type Conversion Failed

当你将错误类型的值输入原生方法中的可选参数时发生此错误。

### TypeError: Object did not have a native handle

::: warning
此错误未公开文档化，因此解释是估计的。
:::

当脚本尝试从 JavaScript 对象获取原生句柄，但句柄实例已被清除时抛出错误。

### ReferenceError: Native object bound to prototype does not exist.

::: warning
此错误未公开文档化，因此解释是估计的。

此错误在某些情况下由于意外原因导致方法不受原生代码库支持时会抛出。在某些情况下，重新启动游戏应该可以解决此问题。

## 调试

调试允许你找到 JavaScript 代码中出错的确切位置。Minecraft 有一个内置的 JavaScript 调试器，你可以通过打开位于 `设置 > 创作者` 中的内容日志 GUI 来启用。

### 日志级别

-   **[Scripting][Inform]**

    你可以使用 `console.log()` 或 `console.info()` 显示 JavaScript 值，但它们仅在[内容日志文件](/guide/troubleshooting#content-log-file)中显示，你可以在[这里](/guide/troubleshooting#content-log-file)查看。

    `00:00:00-[Scripting][Inform]-`：当使用 `console.log()` 或 `console.info()` 时会触发此文本。

-   **[Scripting][Warning]**

    这会在内容日志 GUI 和内容日志文件中输出警告消息。触发功能时显示以下文本。

    `00:00:00-[Scripting][Warning]-`：当使用 `console.warn()` 时会触发此文本。

-   **[Scripting][Error]**

    这会在内容日志 GUI 和内容日志文件中输出错误消息。触发功能时显示以下文本。

    `00:00:00-[Scripting][Error]-`：当使用 `console.error()` 时会触发此文本。

### 堆栈跟踪

堆栈跟踪是按顺序排列的函数列表，导致软件程序中的断点。

这对于找出代码中问题的原因很有用。

示例：

```
[Scripting][error]-SyntaxError: unexpected character
    at <anonymous> (index.js:16)
    at parse (native)
    at r (bundle.js)
    at <anonymous> (bundle.js)
```

-   错误名称：SyntaxError
-   错误消息：unexpected character
-   错误原因位置：`index.js` 文件的第 16 行

---

[原始来源](https://github.com/JaylyDev/ScriptAPI/blob/main/docs/JavaScript/Error.md)
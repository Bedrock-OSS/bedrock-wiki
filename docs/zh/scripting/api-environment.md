---
title: 脚本引擎环境
description: Minecraft Bedrock 脚本引擎环境。
category: 文档
mentions:
    - conmaster2112
    - JaylyDev
    - ThomasOrs
    - MuhammadRestu999
    - QuazChick
    - MinecraftBedrockArabic
    - 8Crafter
---

Minecraft: Bedrock Edition 使用自己的 JavaScript 版本，基于 QuickJS。
它使用 ECMAScript 模块（ESM）系统来组织和加载代码，这使得为游戏编写脚本更加模块化和有条理。

## 常见问题

### 超时支持

初学者在使用 Minecraft 脚本时经常遇到的问题是计时问题。
计时代码的标准（如你所知）是 `setTimeout`{lang=js} 和 `setInterval`{lang=js} 函数及其取消函数。

这些标准方法由帧系统使用，你可以将延迟设置为毫秒精度，但 Minecraft 使用刻（tick）来处理世界中的变化。
因此这些方法不可用，也不会可用。

Minecraft 转而使用 [`system.runTimeout`{lang=js}](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/system#runtimeout) 和 [`system.runInterval`{lang=js}](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/system#runinterval) 系统方法（首次添加于 1.19.70 版），延迟精度为一个刻。
你可以在[我们的教程](/scripting/script-server#scheduling)或 [Microsoft Learn](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/system) 上了解更多。

### Eval 支持

并非每个人都会遇到这个问题，因为使用 eval 和 Function 方法以字符串格式运行代码并不好。

一些浏览器也禁止使用这些方法，主要是 eval 方法，因为使用 eval 时存在恶意代码的风险，这就是为什么它默认被禁用。

要启用这些评估代码的方法，你必须在清单中添加它。此功能还增加了 `Function()`{lang=js} 构造函数的用法。

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "capabilities": ["script_eval"]
}
```

## 支持

-   **_支持的内容_**

    -   `BigInt`{lang=js} – 全局支持任意精度整数（例如 `123n`{lang=js}）。
    -   `Object`{lang=js} - 标准函数构造函数，用于对象
    -   `Function`{lang=js} - 标准函数构造函数。注意：使用此函数必须在包清单中添加 `script_eval` 能力。
    -   `Error`{lang=js} - (`EvalError`{lang=js}, `RangeError`{lang=js}, `ReferenceError`{lang=js}, `SyntaxError`{lang=js}, `TypeError`{lang=js}, `URIError`{lang=js}, `InternalError`{lang=js}, `AggregateError`{lang=js}) - 错误构造类
    -   `Array`{lang=js} - (`Int8Array`{lang=js}, `UInt8Array`{lang=js}, `Int16Array`{lang=js}, `UInt16Array`{lang=js}, `Int32Array`{lang=js}, `UInt32Array`{lang=js}, `Float32Array`{lang=js}, `Float64Array`{lang=js}, `SharedArrayBuffer`{lang=js}, `ArrayBuffer`{lang=js}, `UInt8ClampedArray`{lang=js}) 标准的数组对象构造函数
    -   `parseInt`{lang=js}, `parseFloat`{lang=js} - 解析字符串为数字的标准方法
    -   `isNaN`{lang=js}, `isFinite`{lang=js} - 检查数字类型的标准方法
    -   `decodeURI`{lang=js}, `encodeURI`{lang=js} - 解码和编码 URI 路径的标准方法
    -   `decodeURIComponent`{lang=js}, `encodeURIComponent`{lang=js} - 解码和编码 URI 组件的标准方法
    -   `escape`{lang=js}, `unescape`{lang=js} - 非标准方法！请尽可能使用 decodeURI/encodeURI
    -   `NaN`{lang=js}, `Infinity`{lang=js}, `undefined`{lang=js} - 代码中使用的标准变量
    -   `__date_clock`{lang=js} - QuickJS 内置方法，获取当前时间（微秒）
    -   `Number`{lang=js}, `Boolean`{lang=js}, `String`{lang=js}, `Symbol`{lang=js} - JS 原语的标准函数构造函数
    -   `Math`{lang=js} - 包含主要数学函数的标准对象，如三角函数和幂函数
    -   `Reflect`{lang=js} - 包含内置方法的标准对象
    -   `eval`{lang=js} - 将字符串评估为代码的标准方法。注意：使用此方法必须在包清单中添加 `script_eval` 能力。
    -   `globalThis`{lang=js} - 访问全局作用域变量的标准对象
    -   `Date`{lang=js} - 日期实例的标准函数构造函数
    -   `RegExp`{lang=js} - 正则实例的标准函数构造函数
    -   `JSON`{lang=js} - 包含 stringify 和 parse 方法的标准对象，用于 JSON 交互
    -   `Proxy`{lang=js} - 内置代理处理器的标准函数构造函数
    -   `Map`{lang=js}, `Set`{lang=js}, `WeakMap`{lang=js}, `WeakSet`{lang=js} - 数据组织对象的标准函数构造函数
    -   `DataView`{lang=js} - 二进制数组交互的标准函数构造函数
    -   `Promise`{lang=js} - 异步交互的标准函数构造函数
    -   `console`{lang=js} - 包含基本输出方法的标准对象（`log`{lang=js}, `warn`{lang=js}, `error`{lang=js}, `info`{lang=js}）
    -   `print`{lang=js} - `console.log`{lang=js} 的别名

-   **_不支持的内容_**

    -   `setTimeout`{lang=js} - 计时代码运行的标准函数
    -   `setInterval`{lang=js} - 间隔计时代码运行的标准函数
    -   `clearTimeout`{lang=js} - 取消 setTimeout 运行的标准函数
    -   `clearInterval`{lang=js} - 取消 setInterval 运行的标准函数

-   **扩展方法**

    我们有一些 QuickJS 暴露的额外方法，但不要期待有什么游戏性的改变！

我们确实有一些额外的字符串方法可以将字符串包装在 html 格式中。例如：`"text".bolt()`{lang=js} → `<b>text<b>`{lang=html}。
这些方法毫无用处且未文档化，我们也不会对它们进行文档化。

## JavaScript 引擎更新历史

-   **_1.21 (Tricky Trials)_**

    -   `BigInt`{lang=js} – 全局支持任意精度整数（例如 `123n`{lang=js}）。
    -   `Object.hasOwn(obj, prop)`{lang=js} – 检查 `obj`{lang=js} 是否有自己的属性 `prop`{lang=js}。
    -   `Array.prototype.findLast(callbackFn, thisArg?)`{lang=js} – 返回最后一个匹配条件的项。
    -   `Array.prototype.at(index)`{lang=js} – 返回给定 `index`{lang=js} 处的元素。
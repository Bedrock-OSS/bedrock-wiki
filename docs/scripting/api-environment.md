---
title: Engine Environment
description: Minecraft Bedrock scripting engine environment.
category: Documentation
mentions:
    - conmaster2112
    - JaylyDev
    - ThomasOrs
    - MuhammadRestu999
    - QuazChick
    - MinecraftBedrockArabic
    - Andexter8
---

Minecraft: Bedrock Edition uses its own version of JavaScript, which is based on QuickJS.
It uses the ECMAScript module (ESM) system for organizing and loading code, which allows for a more modular and organized approach to writing scripts for the game.

## Common Problems

### Timeout Support

What people often run into when starting out with Minecraft Scripting is the problem with timing.
The standards for timing code, as you may know, are the `setTimeout`{lang=ts} and `setInterval`{lang=ts} functions and their cancel functions.

These standardized methods are used by the frame system where you can set the delay to millisecond precision, but minecraft uses a tick to process changes in the world.
That's why these methods are not and will not be available.

Minecraft instead uses the [`system.runTimeout`{lang=ts}](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/system#runtimeout) and [`system.runInterval`{lang=ts}](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/system#runinterval) system methods, first added in version 1.19.70, which delay to the precision of one tick.
You can read more about this in [our tutorial](/scripting/script-server#scheduling) or on [Microsoft Learn](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/system).

### Eval Support

Not everyone can encounter this problem because the use of eval and Function method for running code in string format is not great.

Some browsers also prohibit the use of these methods, mainly the eval method, as when using eval there is a risk of malicious code which is why it is disabled by default.

To enable these methods that evaluate code, you must add it in the manifest. This capability also adds the usage of the `Function()`{lang=ts} constructor.

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "capabilities": ["script_eval"]
}
```

## Support

-   **_What is supported_**

    -   `Object`{lang=ts} - Standard function constructor for objects
    -   `Function`{lang=ts} - Standard function constructor for functions. Note that to use this the `script_eval` capability must be added to the pack manifest.
    -   `Error`{lang=ts} - (`EvalError`{lang=ts}, `RangeError`{lang=ts}, `ReferenceError`{lang=ts}, `SyntaxError`{lang=ts}, `TypeError`{lang=ts}, `URIError`{lang=ts}, `InternalError`{lang=ts}, `AggregateError`{lang=ts}) - Classes for error construction
    -   `Array`{lang=ts} - (`Int8Array`{lang=ts}, `UInt8Array`{lang=ts}, `Int16Array`{lang=ts}, `UInt16Array`{lang=ts}, `Int32Array`{lang=ts}, `UInt32Array`{lang=ts}, `Float32Array`{lang=ts}, `Float64Array`{lang=ts}, `SharedArrayBuffer`{lang=ts}, `ArrayBuffer`{lang=ts}, `UInt8ClampedArray`{lang=ts}) Standard function constructor for Array objects
    -   `parseInt`{lang=ts}, `parseFloat`{lang=ts} - Standard methods for parsing string to number
    -   `isNaN`{lang=ts}, `isFinite`{lang=ts} - Standard methods for checking number types
    -   `decodeURI`{lang=ts}, `encodeURI`{lang=ts} - Standard methods for decoding and encoding URI paths
    -   `decodeURIComponent`{lang=ts}, `encodeURIComponent`{lang=ts} - Standard methods for decoding and encoding URI components
    -   `escape`{lang=ts}, `unescape`{lang=ts} - Non-standard methods! Please use decodeURI/encodeURI if possible
    -   `NaN`{lang=ts}, `Infinity`{lang=ts}, `undefined`{lang=ts} - Standard variables for in-code usage
    -   `__date_clock`{lang=ts} - Built-in QuickJS method for getting current time in microseconds
    -   `Number`{lang=ts}, `Boolean`{lang=ts}, `String`{lang=ts}, `Symbol`{lang=ts} - Standard function constructor for JS primitives
    -   `Math`{lang=ts} - Standard object having primary math functions, such as trig ratios & powers
    -   `Reflect`{lang=ts} - Standard object having built-in methods
    -   `eval`{lang=ts} - Standard method for evaluating string as code. Note that to use this the `script_eval` capability must be added to the pack manifest.
    -   `globalThis`{lang=ts} - Standard object with access to global scoped variables
    -   `Date`{lang=ts} - Standard function constructor for date instance
    -   `RegExp`{lang=ts} - Standard function constructor for regex instance
    -   `JSON`{lang=ts} - Standard object having stringify and parse methods for JSON interaction
    -   `Proxy`{lang=ts} - Standard function constructor for build-in proxy handler
    -   `Map`{lang=ts}, `Set`{lang=ts}, `WeakMap`{lang=ts}, `WeakSet`{lang=ts} - Standard function constructors for data organisation objects
    -   `DataView`{lang=ts} - Standard function constructor for binary array interactions
    -   `Promise`{lang=ts} - Standard function constructor for async interaction
    -   `console`{lang=ts} - Standard object having base output methods (`log`{lang=ts}, `warn`{lang=ts}, `error`{lang=ts}, `info`{lang=ts})
    -   `print`{lang=ts} - Alias of `console.log`{lang=ts}

-   **_What is not supported_**

    -   `setTimeout`{lang=ts} - Standard function for timing code runs
    -   `setInterval`{lang=ts} - Standard function for timing code runs in intervals
    -   `clearTimeout`{lang=ts} - Standard function for canceling setTimeout runs
    -   `clearInterval`{lang=ts} - Standard function for canceling setInterval runs

-   **Extended Methods**

    We have bunch of additional methods exposed by QuickJS, but do not expect anything game-changing!
    We do have some additional string methods to wrap string in html formats. For example: `"text".bolt() `{lang=ts noRightCodeBlock=true}-> "`<b>text<b>`{lang=html noLeftCodeBlock=true noRightCodeBlock=true}`"`{noLeftCodeBlock=true}.
    These methods are useless and not documented and we are not going to either.

## JavaScript Engine Update History

- **_1.21 (Tricky Trials)_**

    - `BigInt`{lang=ts} – Global support for arbitrary-precision integers (e.g. `123n`{lang=ts}).
    - `Object.hasOwn(obj, prop)`{lang=ts} – Checks if `obj`{lang=ts} has its own property `prop`{lang=ts}.
    - `Array.prototype.findLast(callbackFn, thisArg?)`{lang=ts} – Returns the last item matching the condition.
    - `Array.prototype.at(index)`{lang=ts} – Returns the element at the given `index`{lang=ts}.

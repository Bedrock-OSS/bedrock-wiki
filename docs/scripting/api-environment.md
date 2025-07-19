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
The standards for timing code, as you may know, are the `setTimeout`{lang=js} and `setInterval`{lang=js} functions and their cancel functions.

These standardized methods are used by the frame system where you can set the delay to millisecond precision, but minecraft uses a tick to process changes in the world.
That's why these methods are not and will not be available.

Minecraft instead uses the [`system.runTimeout`{lang=js}](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/system#runtimeout) and [`system.runInterval`{lang=js}](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/system#runinterval) system methods, first added in version 1.19.70, which delay to the precision of one tick.
You can read more about this in [our tutorial](/scripting/script-server#scheduling) or on [Microsoft Learn](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/system).

### Eval Support

Not everyone can encounter this problem because the use of eval and Function method for running code in string format is not great.

Some browsers also prohibit the use of these methods, mainly the eval method, as when using eval there is a risk of malicious code which is why it is disabled by default.

To enable these methods that evaluate code, you must add it in the manifest. This capability also adds the usage of the `Function()`{lang=js} constructor.

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "capabilities": ["script_eval"]
}
```

## Support

-   **_What is supported_**

    -   `BigInt`{lang=js} – Global support for arbitrary-precision integers (e.g. `123n`{lang=js}).
    -   `Object`{lang=js} - Standard function constructor for objects
    -   `Function`{lang=js} - Standard function constructor for functions. Note that to use this the `script_eval` capability must be added to the pack manifest.
    -   `Error`{lang=js} - (`EvalError`{lang=js}, `RangeError`{lang=js}, `ReferenceError`{lang=js}, `SyntaxError`{lang=js}, `TypeError`{lang=js}, `URIError`{lang=js}, `InternalError`{lang=js}, `AggregateError`{lang=js}) - Classes for error construction
    -   `Array`{lang=js} - (`Int8Array`{lang=js}, `UInt8Array`{lang=js}, `Int16Array`{lang=js}, `UInt16Array`{lang=js}, `Int32Array`{lang=js}, `UInt32Array`{lang=js}, `Float32Array`{lang=js}, `Float64Array`{lang=js}, `SharedArrayBuffer`{lang=js}, `ArrayBuffer`{lang=js}, `UInt8ClampedArray`{lang=js}) Standard function constructor for Array objects
    -   `parseInt`{lang=js}, `parseFloat`{lang=js} - Standard methods for parsing string to number
    -   `isNaN`{lang=js}, `isFinite`{lang=js} - Standard methods for checking number types
    -   `decodeURI`{lang=js}, `encodeURI`{lang=js} - Standard methods for decoding and encoding URI paths
    -   `decodeURIComponent`{lang=js}, `encodeURIComponent`{lang=js} - Standard methods for decoding and encoding URI components
    -   `escape`{lang=js}, `unescape`{lang=js} - Non-standard methods! Please use decodeURI/encodeURI if possible
    -   `NaN`{lang=js}, `Infinity`{lang=js}, `undefined`{lang=js} - Standard variables for in-code usage
    -   `__date_clock`{lang=js} - Built-in QuickJS method for getting current time in microseconds
    -   `Number`{lang=js}, `Boolean`{lang=js}, `String`{lang=js}, `Symbol`{lang=js} - Standard function constructor for JS primitives
    -   `Math`{lang=js} - Standard object having primary math functions, such as trig ratios & powers
    -   `Reflect`{lang=js} - Standard object having built-in methods
    -   `eval`{lang=js} - Standard method for evaluating string as code. Note that to use this the `script_eval` capability must be added to the pack manifest.
    -   `globalThis`{lang=js} - Standard object with access to global scoped variables
    -   `Date`{lang=js} - Standard function constructor for date instance
    -   `RegExp`{lang=js} - Standard function constructor for regex instance
    -   `JSON`{lang=js} - Standard object having stringify and parse methods for JSON interaction
    -   `Proxy`{lang=js} - Standard function constructor for build-in proxy handler
    -   `Map`{lang=js}, `Set`{lang=js}, `WeakMap`{lang=js}, `WeakSet`{lang=js} - Standard function constructors for data organisation objects
    -   `DataView`{lang=js} - Standard function constructor for binary array interactions
    -   `Promise`{lang=js} - Standard function constructor for async interaction
    -   `console`{lang=js} - Standard object having base output methods (`log`{lang=js}, `warn`{lang=js}, `error`{lang=js}, `info`{lang=js})
    -   `print`{lang=js} - Alias of `console.log`{lang=js}

-   **_What is not supported_**

    -   `setTimeout`{lang=js} - Standard function for timing code runs
    -   `setInterval`{lang=js} - Standard function for timing code runs in intervals
    -   `clearTimeout`{lang=js} - Standard function for canceling setTimeout runs
    -   `clearInterval`{lang=js} - Standard function for canceling setInterval runs

-   **Extended Methods**

    We have bunch of additional methods exposed by QuickJS, but do not expect anything game-changing!

    We do have some additional string methods to wrap string in html formats. For example: `"text".bolt()`{lang=js} → `<b>text<b>`{lang=html}.
    These methods are useless and not documented and we are not going to either.

## JavaScript Engine Update History

- **_1.21 (Tricky Trials)_**

    - `BigInt`{lang=js} – Global support for arbitrary-precision integers (e.g. `123n`{lang=js}).
    - `Object.hasOwn(obj, prop)`{lang=js} – Checks if `obj`{lang=js} has its own property `prop`{lang=js}.
    - `Array.prototype.findLast(callbackFn, thisArg?)`{lang=js} – Returns the last item matching the condition.
    - `Array.prototype.at(index)`{lang=js} – Returns the element at the given `index`{lang=js}.

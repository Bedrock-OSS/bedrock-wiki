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
---

Minecraft: Bedrock Edition uses its own version of JavaScript, which is based on QuickJS.
It uses the ECMAScript module (ESM) system for organizing and loading code, which allows for a more modular and organized approach to writing scripts for the game.

## Common Problems

### Timeout Support

What people often run into when starting out with Minecraft Scripting is the problem with timing.
The standards for timing code, as you may know, are the `setTimeout` and `setInterval` functions and their cancel functions.

These standardized methods are used by the frame system where you can set the delay to millisecond precision, but minecraft uses a tick to process changes in the world.
That's why these methods are not and will not be available.

Minecraft instead uses the [`system.runTimeout`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/system#runtimeout) and [`system.runInterval`](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/system#runinterval) system methods, first added in version 1.19.70, which delay to the precision of one tick.
You can read more about this in [our tutorial](/scripting/script-server#scheduling) or on [Microsoft Learn](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/system).

### Eval Support

Not everyone can encounter this problem because the use of eval and Function method for running code in string format is not great.

Some browsers also prohibit the use of these methods, mainly the eval method, as when using eval there is a risk of malicious code which is why it is disabled by default.

To enable these methods that evaluate code, you must add it in the manifest. This capability also adds the usage of the `Function()` constructor.

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "capabilities": ["script_eval"]
}
```

## Support

-   **_What is supported_**

    -   `Object` - Standard function constructor for objects
    -   `Function` - Standard function constructor for functions. Note that to use this the `script_eval` capability must be added to the pack manifest.
    -   `Error` - (`EvalError`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError`, `URIError`, `InternalError`, `AggregateError`) - Classes for error construction
    -   `Array` - (`Int8Array`, `UInt8Array`, `Int16Array`, `UInt16Array`, `Int32Array`, `UInt32Array`, `Float32Array`, `Float64Array`, `SharedArrayBuffer`, `ArrayBuffer`, `UInt8ClampedArray`) Standard function constructor for Array objects
    -   `parseInt`, `parseFloat` - Standard methods for parsing string to number
    -   `isNaN`, `isFinite` - Standard methods for checking number types
    -   `decodeURI`, `encodeURI` - Standard methods for decoding and encoding URI paths
    -   `decodeURIComponent`, `encodeURIComponent` - Standard methods for decoding and encoding URI components
    -   `escape`, `unescape` - Non-standard methods! Please use decodeURI/encodeURI if possible
    -   `NaN`, `Infinity`, `undefined` - Standard variables for in-code usage
    -   `__date_clock` - Built-in QuickJS method for getting current time in microseconds
    -   `Number`, `Boolean`, `String`, `Symbol` - Standard function constructor for JS primitives
    -   `Math` - Standard object having primary math functions, such as trig ratios & powers
    -   `Reflect` - Standard object having built-in methods
    -   `eval` - Standard method for evaluating string as code. Note that to use this the `script_eval` capability must be added to the pack manifest.
    -   `globalThis` - Standard object with access to global scoped variables
    -   `Date` - Standard function constructor for date instance
    -   `RegExp` - Standard function constructor for regex instance
    -   `JSON` - Standard object having stringify and parse methods for JSON interaction
    -   `Proxy` - Standard function constructor for build-in proxy handler
    -   `Map`, `Set`, `WeakMap`, `WeakSet` - Standard function constructors for data organisation objects
    -   `DataView` - Standard function constructor for binary array interactions
    -   `Promise` - Standard function constructor for async interaction
    -   `console` - Standard object having base output methods (`log`, `warn`, `error`, `info`)
    -   `print` - Alias of `console.log`

-   **_What is not supported_**

    -   `setTimeout` - Standard function for timing code runs
    -   `setInterval` - Standard function for timing code runs in intervals
    -   `clearTimeout` - Standard function for canceling setTimeout runs
    -   `clearInterval` - Standard function for canceling setInterval runs

-   **Extended Methods**

    We have bunch of additional methods exposed by QuickJS, but do not expect anything game-changing!
    We do have some additional string methods to wrap string in html formats. For example: `"text".bolt() -> "<b>text<b>"`.
    These methods are useless and not documented and we are not going to either.

## JavaScript Engine Update History

- **_1.21 (Tricky Trials)_**

    - `BigInt` – Global support for arbitrary-precision integers (e.g. `123n`).
    - `Object.hasOwn(obj, prop)` – Checks if `obj` has its own property `prop`.
    - `Array.prototype.findLast(callbackFn, thisArg?)` – Returns the last item matching the condition.
    - `Array.prototype.at(index)` – Returns the element at the given `index`.

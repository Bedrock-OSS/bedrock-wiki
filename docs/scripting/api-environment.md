---
title: Engine Environment
category: Documentation
tags:
    - stable
---


## Common problems

- **SetTimeout support**

What people often run into when starting out with Minecraft Scripting is the problem with timing, the standards for timing code as you may have noticed are the `setTimeout` and `setInterval` functions and their cancel functions.

These standardized methods are used by the frame system where you can set the delay to millisecond precision, but minecraft uses a tick to process changes in the world, right? That's why even these methods are not and will not be available, instead we got the [`system.runTimeout`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/system#runtimeout) and [`system.runInterval`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/system#runinterval) system methods from version 1.19.70, which delay to the precision of one tick, you can read more about on [Microsoft Docs](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/system) or [Wiki Tutorial](/scripting/script-server#scheduling)

- **Eval permission**

Not everyone can encounter this problem because the use of eval and Function method for running code in string format is not great.

Some browsers also prohibit the use of these methods, mainly the eval method, when using eval there is a risk of malicious code that can harm the problem in your add-on, which is why it is disabled by default.

To enable these methods that evaluate code, you must mention it in the manifest. What and how you can find here. [Start with Script API](/scripting/starting-scripts.md).

- **Native handles**

Some objects passed to us by the API have their own native handle, in some cases these objects are released before the javascript object is released, which then results in an error being reported when calling native methods, Native object bound to prototype doesn´t exist.

That means the only function you called with a non-natively released object, the function tries to find a native handle on an object that is no longer there.

You will encounter this most often when using events, because in every data events are natively released after the event ends, therefore you cannot save the object that was given by the event; if you have a player object, after the player leaves, the native handle of the object is released and you can no longer call the methods and properties of the object that used to be the player.

## Support

- ***What is supported***
  - `Object` - Standart function constructor for objects
  - `Function` - Standart function constructor for functions
  - `Error` - (`EvalError`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError`, `URIError`, `InternalError`, `AggregateError`) - Classes for error construction
  - `Array` - (`Int8Array`, `UInt8Array`, `Int16Array`, `UInt16Array`, `Int32Array`, `UInt32Array`, `Float32Array`, `Float64Array`, `SharedArrayBuffer`, `ArrayBuffer`, `UInt8ClampedArray`) Standart funtion constructor for Array objects
  - `parseInt`, `parseFloat` - Standart methods for parsing string to number
  - `isNaN`, `isFinite` - Standart Methods for checking number types
  - `decodeURI`, `encodeURI` - Standart methods for decoding and encoding URI paths
  - `decodeURIComponent`, `encodeURIComponent` - Standart methods for decoding and encoding URI components
  - `escape`, `unescape` - Non-Standart methods please use decodeURI/encodeURI if its possible
  - `NaN`, `Infinity`, `undefined` - Standart variables for incode usage,
  - `__date_clock` - Build-in QuickJS method for getting current time
  - `(Number`, Boolean, String, Symbol) - Standart functon constructor for JS primitives
  - `Math` - Standart Object having primary math functions
  - `Reflect` - Standart Object having build-in methods
  - `eval` - Standart Method for evaluating string as code
  - `globalThis` - Standart Object with access to global scoped variables
  - `Date` - Standart function constructor for date instance
  - `RegExp` - Standart function constructor for regex instance
  - `JSON` -  Standart Object having stringgify and parse methods for JSON interaction
  - `Proxy` - Standart function constructor for build-in proxy handler
  - `Map`, `Set`, `WeakMap`, `WeakSer` - Standart function constructors for data organisation objects
  - `DataView` - Standart function constructor for binary arrays interactions
  - `Promise` - Standart funcrion constructor for async interaction
  - `console` - standart object having base output methods (`log`, `warn`, `error`, `info`)

- ***What is not supported***
  - `BigInt` - Standart function constructor for big ints
  - `setTimeout` - Standart function for timing code runs
  - `setInterval` - Standart function for timing code runs in intervals
  - `clearTimeout` - Standart function for canceling setTimeout runs
  - `clearInterval` - Standart functuon for canceling setInterval runs
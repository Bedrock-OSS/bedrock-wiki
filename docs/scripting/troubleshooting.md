---
title: Troubleshooting JavaScript
category: Documentation
---

This article teaches you the basic workflow for debugging any JavaScript issue.

## Error Reference

These errors can be a helpful debugging your code, but the reported problem isn't always immediately clear. Most of these errors are common in JavaScript engines, so they can be found with a search on a search engine (e.g. Google Search).

You can learn more about each Error class in `MDN` by clicking the link below each error names.

- [`EvalError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError)
  - Creates an instance representing an error that occurs regarding the global function `eval()`.
- [`RangeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
  - Creates an instance representing an error that occurs when a numeric variable or parameter is outside its valid range.
- [`ReferenceError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
  - Creates an instance representing an error that occurs when de-referencing an invalid reference. In Minecraft Script Engine, there is a reference error with no clear reason of why this error triggers:
    - Native object bound to prototype does not exist.
- [`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
  - Creates an instance representing a syntax error.
- [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
- [`URIError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError)
  - Creates an instance representing an error that occurs when `encodeURI", "encodeURI()` or `decodeURI", "decodeURI()` are passed invalid parameters.
- [`AggregateError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)
  - Creates an instance representing several errors wrapped in a single error when multiple errors need to be reported by an operation, for example by `Promise.any()`.
- [`InternalError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError)
  - Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. In Minecraft JS, the errors are the following:
    - stack overflow
    - out of memory

## Minecraft JS Errors

Since Minecraft Bedrock Edition uses a their own version of JavaScript, which is based on QuickJS, there are some errors that only exist in Minecraft and these errors are quite common since the API is built on native C++.

### InternalError: out of memory

This error occurs when the combined memory usage exceeds 250 megabytes.

This saves and shuts down the world by Watchdog termination and cannot be canceled using `BeforeWatchdogTerminateEvent`.

The memory limit can be adjusted in `server.properties` by modifying `script-watchdog-memory-limit`. (Setting this value to 0 disables the limit.)

### InternalError: stack overflow

Occurs when there is a recursive function (a function that calls itself) without an exit point.

Example code:

```js
function loop(x) {
  // The base case is missing
  loop(x + 1); // Recursive call
}
loop(0);
// InternalError: stack overflow
```

### InternalError: interrupted

Occurs when runtime has a negligible cost. This happens depend on how your script is setup.

### TypeError: no setter for property

This occurs when trying to set a new value to a property, for which only a getter is defined.

This is common when attempting to set property on native objects from native modules.

### TypeError: value is not iterable

This occurs when an iteration happens over a value that is not an iterable object.

Click [**here**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/is_not_iterable) for more information.

### TypeError: not a function

This occurs when there was an attempt to call a value from a function, but the value is not actually a function. This is very common as script API constantly remove or rename methods without mentioning them in Minecraft changelog.

Click [**here**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function) for more information.

### TypeError: Native Type Conversion Failed

This error occurs when you input the wrong type of value into a required parameter in a native method.

### TypeError: Native Variant Type Conversion Failed

This error occurs when you input the wrong type of value into an optional parameter in a native method.

### TypeError: Object did not have a native handle

::: warning
This error is not documented publicly, so the explanation is an estimate.
:::

The error throws when the script tries to fetch a native handle from a JavaScript object, but the handle instance was cleared.

### ReferenceError: Native object bound to prototype does not exist.

::: warning
This error is not documented publicly, so the explanation is an estimate.
:::

This error throws when a method is not supported by native codebase due to unexpected reasons. In some circumstances restarting the game should fix the issue.

## Debugging

Debugging allows you to find the exact point where you made a mistake on your JavaScript code. Minecraft has a built-in JavaScript debugger which you can enable by turning on Content Log GUI located in `Settings > Creator`.

### Logging level

- **[Scripting][Inform]**

  you can use `console.log()` or `console.info()` to display JavaScript values, however they are only displayed in [Content Log file](https://wiki.bedrock.dev/guide/troubleshooting.html#content-log-file), which you can see them [here](https://wiki.bedrock.dev/guide/troubleshooting.html#content-log-file).

  `00:00:00-[Scripting][Inform]-`: This text is triggered when `console.log()` or `console.info()` is used.

- **[Scripting][Warning]**

  This outputs a warning message in both Content Log GUI and Content log file. The following text is displayed when the function is triggered.

  `00:00:00-[Scripting][Warning]-`: This text is triggered when `console.warn()` is used.

- **[Scripting][Error]**

  This outputs an error message in both Content Log GUI and Content log file. The following text is displayed when the function is triggered.

  `00:00:00-[Scripting][Error]-`: This text is triggered when `console.error()` is used.

### Stack trace

A stack trace is a list of the functions, in order, that lead to a breakpoint in a software program.

This is useful to find the cause of the problem in your code.

Example:

```
[Scripting][error]-SyntaxError: unexpected character
    at <anonymous> (index.js:16)
    at parse (native)
    at r (bundle.js)
    at <anonymous> (bundle.js)
```
- Error name: SyntaxError
- Error message: unexpected character
- Where the error cause: line 16 in file `index.js`


---

[Original Credit](https://github.com/JaylyDev/ScriptAPI/blob/main/docs/JavaScript/Error.md)
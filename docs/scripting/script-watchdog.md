---
title: Script Watchdog
category: Documentation
tags:
	- experimental
---

Watchdog is a performance system for script engine that is enabled in Minecraft script plugins by default.

## Watchdog Configuration

There is a set of watchdog configuration that governs the performance of the script environment since 1.19.20. These options cannot be modified in world or realms, but they can be modified via `server.properties` in [Dedicated Server](https://www.minecraft.net/en-us/download/server/bedrock). Below is default watchdog settings, whicih are the same on all devices for world and realms.

<CodeHeader>bedrock-server/server.properties</CodeHeader>

```ini
# Enables the watchdog (default = true)
script-watchdog-enable=true

# Sets the watchdog threshold for single tick hangs (default = 3000 ms)
script-watchdog-hang-threshold=3000

# Sets the watchdog threshold for single tick spikes (default = 100 ms)
script-watchdog-spike-threshold=100

# Sets the watchdog threshold for slow scripts over multiple ticks (default = 2ms)
script-watchdog-slow-threshold=2

# Saves and shuts down the world when the combined memory usage exceeds the given threshold (in megabytes).
# Setting this value to 0 disables the limit. (default = 250)
script-watchdog-memory-limit=250

# Produces a content log warning when the combined memory usage exceeds the given threshold (in megabytes).
# Setting this value to 0 disables the warning. (default = 100)
script-watchdog-memory-warning=100

# Enables watchdog exception handling via the events.beforeWatchdogTerminate event (default = true)
script-watchdog-enable-exception-handling=true

# Enables server shutdown in the case of an unhandled watchdog exception (default = true)
script-watchdog-enable-shutdown=true

# Throws a critical exception when a hang occurs (default = true)
script-watchdog-hang-exception=true
```

## Watchdog Messages

These watchdog messages are thrown with `[Watchdog]` label in error or warning. They're displayed in a warning or an error. These error should never be ignored.

### Slow-running script detected in behavior pack '%s' (x ms average)

  Script runtime is delayed by over a certain timeframe.


### x ms script spike detected in behavior pack '%s'

  There is a spike in script runtime.


### Out of memory exception detected in behavior pack '%s'

  This error occurs when the combined memory usage exceeds.

  This saves and shuts down the world by Watchdog termination and cannot be canceled using `BeforeWatchdogTerminateEvent`.


### x ms script hang detected in behavior pack '%s'

  The scripts freezes at a certain location of your script for more than the watchdog threshold for single tick.

  This is usually caused by iteration, such as `while` loop and `for` loop.


### Stack overflow detected in behavior pack '%s'

  Occurs when there is a recursive function (a function that calls itself) without an exit point.


### High memory usage detected

  Produces a content log warning when the combined memory usage exceeds the given threshold in megabytes.


### Unhandled critical exception of type '%s' in behavior pack '%s'

  Produces a content log error when an unhandled critical exception occurs.

  There are multiple reason that a watchdog is deciding to terminate execution of a behavior pack's script.
  - `hang`: script is not responsive due to a hang or infinite loop.
  - `stackOverflow`: a long, and potentially infinite chain of function calls.

## Cancel Watchdog Termination

Using Minecraft's scripting API, you are able to connect to a callback that will be called when a script runtime is being terminated due to a violation of the performance watchdog system.

This event allows you to cancel the termination of the script runtime to prevent from the watchdog from stopping the server from running. Note that depending on server configuration settings, cancellation of the termination may not be allowed.

```js
import { system } from '@minecraft/server';

system.events.beforeWatchdogTerminate.subscribe((event) => {
  event.cancel = true;
});
```

## Watchdog Commands

Watchdog implementation comes with Minecraft's slash commands, which can be used with the `/script watchdog` command.

- `/script watchdog exportstats`: Exports performance profiling of scripting environment, this includes plugin handles and runtime infomation.

---

[Original Credit](https://github.com/JaylyDev/ScriptAPI/blob/main/docs/MinecraftApi/Watchdog.md)
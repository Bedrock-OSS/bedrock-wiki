---
title: 脚本看门狗
category: 文档
tags:
    - experimental
mentions:
    - JaylyDev
    - SmokeyStack
    - ThomasOrs
description: 看门狗是 Minecraft 脚本插件默认启用的脚本引擎性能系统。
---

看门狗是 Minecraft 脚本插件默认启用的脚本引擎性能系统。

## 看门狗配置

自 1.19.20 以来，有一组看门狗配置来管理脚本环境的性能。这些选项无法在世界或领地中修改，但可以通过[专用服务器](https://www.minecraft.net/en-us/download/server/bedrock)中的 `server.properties` 进行修改。以下是默认的看门狗设置，在所有设备上对世界和领地都是相同的。

<CodeHeader>bedrock-server/server.properties</CodeHeader>

```ini
# 启用看门狗（默认 = true）
script-watchdog-enable=true

# 设置单个刻挂起的看门狗阈值（默认 = 3000 ms）
script-watchdog-hang-threshold=3000

# 设置单个刻尖峰的看门狗阈值（默认 = 100 ms）
script-watchdog-spike-threshold=100

# 设置多个刻慢脚本的看门狗阈值（默认 = 2ms）
script-watchdog-slow-threshold=2

# 当组合内存使用超过给定阈值（以 megabytes 为单位）时保存并关闭世界。
# 将此值设置为 0 可禁用限制。（默认 = 250）
script-watchdog-memory-limit=250

# 当组合内存使用超过给定阈值（以 megabytes 为单位）时产生内容日志警告。
# 将此值设置为 0 可禁用警告。（默认 = 100）
script-watchdog-memory-warning=100

# 通过 events.beforeWatchdogTerminate 事件启用看门狗异常处理（默认 = true）
script-watchdog-enable-exception-handling=true

# 在未处理的看门狗异常情况下启用服务器关闭（默认 = true）
script-watchdog-enable-shutdown=true

# 在挂起发生时抛出关键异常（默认 = true）
script-watchdog-hang-exception=true
```

## 看门狗消息

这些看门狗消息带有 `[Watchdog]` 标签在错误或警告中显示。这些错误永远不应该被忽略。

### 在行为包 '%s' 中检测到运行缓慢的脚本（平均 x ms）

脚本运行时间延迟超过一定时间范围。

### 在行为包 '%s' 中检测到 x ms 脚本尖峰

脚本运行时间出现尖峰。

### 在行为包 '%s' 中检测到内存溢出异常

当组合内存使用超过时发生此错误。

这会通过看门狗终止保存和关闭世界，无法使用 `BeforeWatchdogTerminateEvent` 取消。

### 在行为包 '%s' 中检测到 x ms 脚本挂起

脚本在你的脚本的某个位置冻结超过单个刻的看门狗阈值。

这通常是由迭代引起的，例如 `while` 循环和 `for` 循环。

### 在行为包 '%s' 中检测到栈溢出

当存在递归函数（调用自身的函数）没有退出点时发生。

### 检测到高内存使用

当组合内存使用超过给定阈值（以 megabytes 为单位）时产生内容日志警告。

### 在行为包 '%s' 中发生未处理的关键异常（类型 '%s'）

当发生未处理的关键异常时产生内容日志错误。

看门狗决定终止行为包的脚本执行有多种原因：

-   `hang`：脚本由于挂起或无限循环而无响应。
-   `stackOverflow`：一个长的且可能是无限的函数调用链。

## 取消看门狗终止

使用 Minecraft 的脚本 API，你可以连接一个回调，当脚本运行时由于违反性能看门狗系统而被终止时将调用该回调。

此事件允许你取消脚本运行时的终止，以防止看门狗停止服务器运行。请注意，根据服务器配置设置，可能不允许取消终止。

```js
import { system } from "@minecraft/server";

system.events.beforeWatchdogTerminate.subscribe((event) => {
    event.cancel = true;
    console.warn(`[Watchdog] Canceled critical exception of type '${event.cancelationReason}`);
});
```

## 看门狗命令

Minecraft 的斜杠命令附带看门狗实现，可用于 `/script watchdog` 命令。

-   `/script watchdog exportstats`：导出脚本环境的性能分析，包括插件句柄和运行时信息。

---

[原始来源](https://github.com/JaylyDev/ScriptAPI/blob/main/docs/MinecraftApi/Watchdog.md)
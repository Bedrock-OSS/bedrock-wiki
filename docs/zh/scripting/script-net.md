---
title: 脚本请求 API
category: 教程
tags:
    - experimental
mentions:
    - JaylyDev
    - conmaster2112
    - SmokeyStack
    - ThomasOrs
description: Bedrock 专用服务器的脚本请求 API。
---

::: warning
脚本 API 目前正在积极开发中，突破性更改很频繁。本页假设 Minecraft 1.21.20 的格式
:::

::: warning
此模块只能用于 Bedrock 专用服务器。
:::

在脚本 API 中，你可以发送和接收基于 HTTP 的请求来与互联网交互。更详细的信息请访问 [Microsoft 文档](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-net/minecraft-server-net)。

## 设置

**依赖项**

与其他模块一样，你需要将依赖项添加到你的 `manifest.json`

```json
{
    "dependencies": [
        {
            "module_name": "@minecraft/server-net",
            "version": "1.0.0-beta"
        }
    ]
}
```

## 在 Bedrock 专用服务器中启用模块

1. 从 [Minecraft 网站](https://www.minecraft.net/en-us/download/server/bedrock) 下载 Bedrock 专用服务器包

2. 将 zip 文件解压到一个文件夹中

这是默认 Bedrock 专用服务器的目录树：

<FolderView :paths="[
    'BedrockServer/behavior_packs',
    'BedrockServer/config/default/permissions.json',
    'BedrockServer/definitions',
    'BedrockServer/development_behavior_packs',
    'BedrockServer/development_resource_packs',
    'BedrockServer/development_skin_packs',
    'BedrockServer/resource_packs',
    'BedrockServer/structures',
    'BedrockServer/worlds/BedrockLevel/behavior_packs',
    'BedrockServer/worlds/BedrockLevel/db',
    'BedrockServer/worlds/BedrockLevel/resource_packs',
    'BedrockServer/world_templates',
]"></FolderView>

3. 在位于 `config/<pack_id>/permissions.json` 或 `config/default/permissions.json` 的 `permissions.json` 文件中，通过在 `allowed_modules` 键中添加 `"@minecraft/server-net"` 来启用 `@minecraft/server-net` 模块。此模块在服务器上默认未启用。

-   修改默认配置文件夹中的文件允许每个带有 server-net 模块的附加包访问 `@minecraft/server-net` 模块。
-   建议为每个脚本行为包分配单独的权限。

<CodeHeader>BedrockServer/config/default/permissions.json</CodeHeader>

```json
{
    "allowed_modules": [
        "@minecraft/server-gametest",
        "@minecraft/server",
        "@minecraft/server-ui",
        "@minecraft/server-admin",
        "@minecraft/server-editor",
        "@minecraft/server-net"
    ]
}
```

## HTTP 请求方法

脚本 API 支持以下 HTTP 请求方法：

-   [`DELETE`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE)
-   [`GET`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)
-   [`HEAD`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD)
-   [`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)
-   [`PUT`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT)

## 简单的 HTTP 请求

`http.get(url)` - 在行为包中执行简单的 HTTP get 请求。

-   `url`: `string`
-   返回: `Promise<`[`HttpResponse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-net/httpresponse)`>`

由于大多数请求是不带正文的 GET 请求，@minecraft/server-net 提供了这个便捷方法。此方法与 `http.request()` 的唯一区别在于它会自动将方法设置为 `GET`。

示例：

```js
import { http } from "@minecraft/server-net";

http.get("http://example.com/").then((response) => {
    // Body content of the HTTP response.
    // Type: string
    const body = response.body;
});
```

## 高级 HTTP 请求

### http.request

向 Web 服务器发出请求。

-   `config`: [`HttpRequest`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-net/httprequest)
-   返回: `Promise<`[`HttpResponse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-net/httpresponse)`>`

Config 必须是新的 HttpRequest 实例才能构建请求。

## 示例

以下是向 Web 服务器发送请求的方式，包括每个可用的 http 请求方法。

**创建 HttpRequest 对象**

```js
import { HttpRequest } from "@minecraft/server-net";

const request = new HttpRequest("http://localhost:8000/"); // You must put a url as the parameter
```

**设置 HTTP 方法**

有关 HTTP 请求方法的更多信息：https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

**GET**

```js
import { HttpRequestMethod } from "@minecraft/server-net";
request.method = HttpRequestMethod.Get;
```

**HEAD**

```js
import { HttpRequestMethod } from "@minecraft/server-net";
request.method = HttpRequestMethod.Head;
```

**POST**

```js
import { HttpRequestMethod } from "@minecraft/server-net";
request.method = HttpRequestMethod.Post;
```

**PUT**

```js
import { HttpRequestMethod } from "@minecraft/server-net";
request.method = HttpRequestMethod.Put;
```

**DELETE**

```js
import { HttpRequestMethod } from "@minecraft/server-net";
request.method = HttpRequestMethod.Delete;
```

**设置 HTTP 头**

HTTP 头可用于 HTTP 请求中，以提供关于请求上下文的信息，以便服务器可以定制响应。

```js
import { HttpHeader } from "@minecraft/server-net";
request.headers = [
    new HttpHeader("Content-Type", "application/json"),
    new HttpHeader("auth", "my-auth-token"),
];
```

HttpHeader 值参数也接受 '@minecraft/server-admin' 模块中的 SecretString 对象。

```js
import { HttpHeader } from "@minecraft/server-net";
import { secrets } from "@minecraft/server-admin";

const secret = secrets.get("TOKEN");
request.headers = [new HttpHeader("Authorization", secret)];
```

**设置请求正文**

HTTP 请求正文的内容，此信息将发送到 Web 服务器。

```js
request.body = "Message";
```

**设置响应超时**

设置请求超时并被放弃的时间（以秒为单位）。

此属性在 HTTP 请求中不常用。

```js
request.timeout = 10; // 10 seconds
```

**发送请求**

向 Web 服务器发送请求，返回一个 promise HttpResponse。

```js
http.request(request).then((response) => {
    // Body content of the HTTP request response.
    // Type: string
    response.body;
});
```

**示例**：

一个简单的脚本，将发送的聊天消息发布到 Discord webhook。

```js
import { world } from "@minecraft/server";
import { http, HttpRequest, HttpRequestMethod, HttpHeader } from "@minecraft/server-net";

// Note that this event requires server module version 1.14.0-beta.
world.afterEvents.chatSend.subscribe((data) => {
    // The message a player sent.
    const chatMsg = data.message;

    // Create a new request to a discord webhook URL.
    const request = new HttpRequest("https://discord.com/api/webhooks/your-webhook-here");

    // Set the method to a post type (sending only)
    request.method = HttpRequestMethod.Post;

    // Set the body of the request to the format discord requires.
    // More on this topic can be found here: https://discord.com/developers/docs/resources/webhook
    request.body = JSON.stringify({
        content: chatMsg,
    });

    // Set the headers of the request.
    request.headers = [new HttpHeader("Content-Type", "application/json")];

    // Perform the request.
    http.request(request).then((response) => {
        // Body of the HTTP request response.
        response.body;
    });
});
```

---

[原始来源](https://github.com/JaylyDev/ScriptAPI/tree/main/docs/MinecraftApi/%40minecraft/server-net)
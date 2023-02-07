---
title: Script Requests API
category: Tutorials
tags:
    - experimental
---

::: warning
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft beta 1.19.70
:::

::: warning
This module can only be used on Bedrock Dedicated Server.
:::

In Scripting API, you can send and receive HTTP-based requests to interact with the internet. For more detailed infomation please visit [Microsoft docs](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-net/minecraft-server-net).

## Setup

**Dependencies**

Like other modules, you will need to add the dependency into your `manifest.json`

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

# Enable module in Bedrock Dedicated Server

1. Download the Bedrock Server from the [Minecraft website](https://www.minecraft.net/en-us/download/server/bedrock)

2. Extract the zip file on a folder.

This is the tree for default Bedrock Dedicated Server:

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

3. In the `permissions.json` file located in `config/<pack_id>/permissions.json` or `config/default/permissions.json`, enable `@minecraft/server-net` module by adding `"@minecraft/server-net"` in the `allowed_modules` key.

> Modify files in default folder allows every add-ons with server-net module enabled in dependencies have access to @minecraft/server-net module.
> 
> It is recommended to assign appropriate permissons for each script behavior pack.

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

## Http Request Methods

Minecraft API supports the following HTTP request methods:

- [`DELETE`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE)
- [`GET`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)
- [`HEAD`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD)
- [`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)
- [`PUT`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT)

# Simple HTTP Request

`http.get(url)` - Performs a simple HTTP get request in behavior packs.

- `url`: `string`
- Returns: `Promise<`[`HttpResponse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-net/httpresponse)`>`

Since most requests are GET requests without bodies, @minecraft/server-net provides this convenience method. The only difference between this method and `http.request()` is that it sets the method to `GET` automatically.

Example:

```js
import { http } from '@minecraft/server-net';

http.get('http://example.com/').then((response) => {
  // Body content of the HTTP response.
  // Type: string
  const body = response.body;
});
```

## Advanced HTTP Request

# http.request

Makes a request to a web server.

- `config`: [`HttpRequest`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-net/httprequest)
- Returns: `Promise<`[`HttpResponse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-net/httpresponse)`>`

Config must be a new HttpRequest instance in order to structuring a request.

## Examples

Here are the following ways to send a request to a web server, includes each available http request methods.

**Create a HttpRequest object**

```js
import { http } from "@minecraft/server-net";

const request = new HttpRequest("http://localhost:8000/"); // You must put a url in parameter
```

**Set HTTP method**

More infomation on HTTP request methods: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

**GET**

```js
import { HttpRequestMethod } from '@minecraft/server-net';
request.method = HttpRequestMethod.GET;
```

**HEAD**

```js
import { HttpRequestMethod } from '@minecraft/server-net';
request.method = HttpRequestMethod.HEAD;
```

**POST**

```js
import { HttpRequestMethod } from '@minecraft/server-net';
request.method = HttpRequestMethod.POST;
```

**PUT**

```js
import { HttpRequestMethod } from '@minecraft/server-net';
request.method = HttpRequestMethod.PUT;
```

**DELETE**

```js
import { HttpRequestMethod } from '@minecraft/server-net';
request.method = HttpRequestMethod.DELETE;
```

**Set HTTP headers**

A HTTP header can be used in an HTTP request to provide information about the request context, so that the server can tailor the response.

```js
import { HttpHeader } from '@minecraft/server-net';
request.headers = [
    new HttpHeader("Content-Type", "application/json"),
    new HttpHeader("auth", "my-auth-token"),
];
```

HttpHeader value parameter also accept SecretString object in '@minecraft/server-admin' module.

```js
import { HttpHeader } from '@minecraft/server-net';
import { secrets } from '@minecraft/server-admin';

const secret = secrets.get('TOKEN');
request.headers = [
  new HttpHeader('Authorization', secret)
];
```

**Set request body**

Content of the body of the HTTP request, this infomation will be sent to a web server.

```js
request.body = 'Message';
```

**Set response timeout**

Set the amount of time, in seconds, before the request times out and is abandoned.

This property is not frequently used in HTTP requests.

```js
request.timeout = 10; // 10 seconds
```


**Send request**

Send the request to a web server, returns a promise HttpResponse.

```js
http.request(request).then((response) => {
  // Body content of the HTTP response.
  // Type: string
  response.body;
});
```

**Example**:

```js
import { http } from "@minecraft/server-net";

const request = new HttpRequest("http://example.com/");
request.method = HttpRequestMethod.POST;
request.body = 'body';
request.headers = [
  new HttpHeader("Content-Type", "application/json"),
  new HttpHeader("auth", "my-auth-token"),
];

http.request(request).then((response) => {
  // Body content of the HTTP response.
  // Type: string
  response.body;
});

```

---

[Original Credit](https://github.com/JaylyDev/ScriptAPI/tree/main/docs/MinecraftApi/%40minecraft/server-net)
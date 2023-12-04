---
title: Script Modules
category: General
mentions:
    - cda94581
---

::: warning
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft 1.19.80
:::

## Overview

Script API has modules for developers to interact with Minecraft. Additionally, dependencies will need to be set based on modules used.

-   **`@minecraft/server`** - Core module to manipulate a Minecraft world, including entities, blocks, dimensions, and more.

    | Module UUID                            | Versions                                         | Previous names                  | Release Version    |
    | -------------------------------------- | ------------------------------------------------ | ------------------------------- | ------------------ |
    | `b26a4d4c-afdf-4690-88f8-931846312678` | `1.4.0-beta , 1.3.0`, `1.2.0`, `1.1.0`, `1.0.0`, `0.1.0` | `Minecraft`, `mojang-minecraft` | `Beta 1.16.210.60` |

-   **`@minecraft/server-gametest`** - A module that provides a scaffolding toolset for you to build, test, and run your custom Add-ons and worlds.

    | Module UUID                            | Versions     | Previous names                | Release version    |
    | -------------------------------------- | ------------ | ----------------------------- | ------------------ |
    | `6f4b6893-1bb6-42fd-b458-7fa3d0c89616` | `1.0.0-beta` | `GameTest`, `mojang-gametest` | `Beta 1.16.210.60` |

-   **`@minecraft/server-ui`** - A module provides ways to show dialogs to players.

    | Module UUID                            | Versions              | Previous names        | Release version                       |
    | -------------------------------------- | --------------------- | --------------------- | ------------------------------------- |
    | `2bd50a27-ab5f-4f40-a596-3641627c635e` | `1.1.0-beta`, `1.0.0` | `mojang-minecraft-ui` | `Beta 1.18.20.21+ (Release 1.18.30+)` |

-   **`@minecraft/server-admin`** - BDS module for configuration of variables and secrets. This module is only available in [Bedrock Dedicated Servers](https://www.minecraft.net/en-us/download/server/bedrock) and cannot be used on realms and worlds.

    | Module UUID                            | Versions     | Previous names                  | Release version    |
    | -------------------------------------- | ------------ | ------------------------------- | ------------------ |
    | `53d7f2bf-bf9c-49c4-ad1f-7c803d947920` | `1.0.0-beta` | `mojang-minecraft-server-admin` | `Release 1.19.10+` |

-   **`@minecraft/server-net`** - BDS module for executing HTTP-based requests. This module is only available in [Bedrock Dedicated Servers](https://www.minecraft.net/en-us/download/server/bedrock) and cannot be used on realms and worlds.

    | Module UUID                            | Versions     | Previous names | Release version    |
    | -------------------------------------- | ------------ | -------------- | ------------------ |
    | `777b1798-13a6-401c-9cba-0cf17e31a81b` | `1.0.0-beta` | `mojang-net`   | `Release 1.19.10+` |

-   **`@minecraft/server-editor`** and **`@minecraft/server-editor-bindings`**

    | Versions     | Release version    |
    | ------------ | ------------------ |
    | `0.1.0-beta` | `Preview 1.19.80+` |

## Script Versioning

Script API modules all have their own versions and since 1.19.20 they follow semantic versioning (which follows the format of X.Y.Z) to determine new features that have released into the API. You can learn how Minecraft script module versioning works [here](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptversioning)

-   Before 1.19.20

    All API modules use `[ 0, 1, 0 ]`. GameTest Framework experiment must be activated to use in world.

-   1.19.20+

    All API modules have their versions incremented to `"1.0.0-beta"`, new features/changes are available in the beta version, and `0.1.0` has old developments and features in the API. GameTest Framework experiment must be activated to use in world.

-   1.19.50+

    **Stable API modules**, these do not require the Beta APIs experiment to be turned on. The initial API set is narrow, but more features will be added over the coming months.

    -   `@minecraft/server`:
        -   [1.0.0](https://stirante.com/script/server/1.0.0/)

    **Beta API modules**, requires the Beta APIs experiment to be turned on in world settings, with lots of experimental features in the API.

    -   `@minecraft/server`:

        -   `1.1.0-beta`
        -   `0.1.0` (use `mojang-minecraft`, NOT `@minecraft/server` when importing module for this version)

    -   `@minecraft/server-ui`:
        -   `1.0.0-beta`
        -   `0.1.0` (use `mojang-minecraft-ui`, NOT `@minecraft/server-ui` when importing module for this version)
    -   `@minecraft/server-gametest`:

        -   `1.0.0-beta`

    -   `@minecraft/server-net`:

        -   `1.0.0-beta` (Bedrock Dedicated Server module only, must enable in `permission.json`)

    -   `@minecraft/server-admin`:
        -   `1.0.0-beta` (Bedrock Dedicated Server module only)

-   1.19.80+

    -   New stable release in `@minecraft/server`:

        -   Release stable version [1.1.0](https://stirante.com/script/server/1.1.0/)
        -   Incremented beta version to [1.2.0-beta](https://stirante.com/script/server/1.2.0-beta.1.19.80-stable/index.html)

    -   New API modules: `@minecraft/server-editor` and `@minecraft/server-editor-bindings`

-   1.20.0

    -   New stable release in `@minecraft/server`:

        -   Release stable version [1.2.0](https://stirante.com/script/server/1.2.0/)
        -   Incremented beta version to [1.3.0-beta](https://stirante.com/script/server/1.3.0-beta.1.20.0-stable/index.html)

    -   New stable API module: `@minecraft/server-ui`.

        -   Release stable version `1.0.0`
        -   Incremented beta version to `1.1.0-beta`
-   1.20.10+
    -   New stable release in `@minecraft/server`:
        -   Release stable version [1.3.0](https://stirante.com/script/server/1.3.0/)
        -   Incremented beta version to [1.4.0-beta](https://stirante.com/script/server/1.4.0-beta.1.20.10-stable/index.html)

As of release 1.19.30, you can also specify dependencies using the `module_name`:

::: warning
Do not add `"uuid"` and `"module_name"` properties into dependency, add one or the other.
:::

<CodeHeader>BP/manifest.json#dependencies[0]</CodeHeader>

```json
{
	"module_name": "@minecraft/server",
	"version": "1.4.0-beta"
}
```

(Beta 1.19.40.23+) In order to use the `eval()` function or `Function()` constructors, you can add the following in the manifest capabilities:

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
	"capabilities": [
		"script_eval"
	]
}
```

(1.19.80+, Preview only) In order to use the editor extensions, you can add the following in the manifest capabilities:

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
	"capabilities": [
		"editorExtension"
	]
}
```

###Module Version compatiblity
From 1.20.10 until 1.20.40.20-Preview (current at time of writing). Module have opaque compatiblity matrix that appears to be set at the last time the oldest library was updated. For instance:
|Server        | Server=UI    |            Compatibility|
|------------|------|-----------------------|
|1.0.0|1.0.0|True|
|1.1.0|1.0.0|True|
|1.2.0|1.0.0 |True|
|1.3.0+|1.0.0|False|
|1.0.0|1.1.0 |True|
|1.1.0|1.1.0 |True|
|1.2.0|1.1.0|True|
|1.3.0+|1.1.0|False|
|1.X.0-Beta|1.0.0|False|
|1.X.0-Beta|1.1.0|False|
|1.3.0+|1.2.0-Beta|False|

At the time of writing this only impacts Sever and Server-UI as they are the only 2 thave have stable versions. Testing was completed on 1.20.10 to 1.20.40-preview this bug may be fixed in future version of minecraft.

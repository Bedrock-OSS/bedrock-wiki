---
title: Project Setup (non-JavaScript)
description: Learn how to set up your project for non-JavaScript sources.
category: Extra
prefix: "g. "
nav_order: 7
mentions:
    - JohnScience
---

# Project Setup (non-JavaScript)

This guide will walk you through setting up your project to use non-JavaScript sources, such as TypeScript and/or Rust source code. It is meant for more advanced users who are comfortable with using the terminal and setting up their own build systems. However, with the help of ChatGPT or similar tools, you should be able to ask ChatGPT questions and follow along even if you are new to these technologies.

## Preliminaries

* <https://wiki.bedrock.dev/guide/addons>
* <https://wiki.bedrock.dev/scripting/scripting-intro>

## Behavior Pack Scripts

One important part of the Behavior Pack is _scripts_. These are JavaScript files that run in the isolated JavaScript _runtime environment_ provided by Minecraft: Bedrock Edition and call various APIs to manipulate the game world.

### About the runtime environment

As <https://wiki.bedrock.dev/scripting/api-environment> mentions,

> Minecraft: Bedrock Edition uses its own version of JavaScript, which is based on QuickJS. It uses the ECMAScript module (ESM) system for organizing and loading code, which allows for a more modular and organized approach to writing scripts for the game.

This means that any code you write must be [transpileable](https://medium.com/@edgington.m.w/what-is-transpiling-4438f33697ed) to the JavaScript code compatible with the QuickJS engine and the ESM module system.

To learn more about the environment itself, see <https://wiki.bedrock.dev/scripting/api-environment>.

To learn more about CommonJS vs ESM modules, see <https://betterstack.com/community/guides/scaling-nodejs/commonjs-vs-esm/>.

## TypeScript Setup

### Why TypeScript?

Oftentimes, software developers prefer to write their code in TypeScript instead of JavaScript. There are many reasons for that. [\[1\]](https://dev.to/laxminarayana31/reasons-to-choose-typescript-over-javascript-16nd) TypeScript is a superset of JavaScript that adds static types and other features.

### How to set up a TypeScript project

To set up a TypeScript project for Minecraft: Bedrock Edition scripting, you should do the following:

1. **Install Visual Studio Code, Node.js, and npm**: Make sure you have Visual Studio Code, Node.js, and npm installed on your machine (`code --version`, `node --version` and `npm --version` should print version numbers).
2. **Pick a directory for your project**: Create a new directory for your project and navigate to it in your terminal.

```bash
cd <path-to-your-project-directory>
mkdir my-bedrock-addon
cd my-bedrock-addon
```

3. **Create a project scaffolding**: Create the following directories:

* `BP/` - for your Behavior Pack files
* `RP/` - for your Resource Pack files
* `bp_scripts/` - for your source TypeScript files that will be eventually [transpiled](https://medium.com/@edgington.m.w/what-is-transpiling-4438f33697ed) to JavaScript.

```bash
mkdir BP
mkdir RP
mkdir bp_scripts
```

For now, we'll focus on the `bp_scripts/` directory.

```bash
cd bp_scripts
```

For this guide, we will use `npm`, which is the default package manager that comes with Node.js. However, you can choose to use Yarn, PNPM, or Bun if you prefer.

::: details Choosing a package manager

Quoting from the [Medium article "The Evolution of Package Managers: NPM, Yarn, PNPM, and Bun"](https://medium.com/@ankitacode11/the-evolution-of-package-managers-npm-yarn-pnpm-and-bun-cf16906ef37e),

> Package managers are tools that automate the process of installing, upgrading, configuring, and removing software dependencies in a project. They provide developers with an easy way to manage libraries (also known as packages), ensuring that software dependencies are consistent across different environments.
> 
> When working with JavaScript or Node.js, package managers are essential for maintaining libraries and frameworks, especially in larger projects. They help avoid the common “it works on my machine” problem by ensuring that every developer on a project works with the same dependencies.

There are several popular package managers available for JavaScript/TypeScript projects, including npm, Yarn, PNPM, and Bun. Each has its own strengths and weaknesses, and the choice of which one to use often depends on personal preference or project requirements.

:::

4. **Initialize a new npm project**: Create a [`package.json`](https://nodesource.com/blog/the-basics-of-package-json) file

```bash
code package.json
```

Add the following content to the `package.json` file:

```json
{
    "type": "module",
    "devDependencies": {},
    "dependencies": {},
    "scripts": {}
}
```

Save and close the file.

::: details About the `package.json`

* `devDependencies`: This section lists the packages that are only needed during development, such as types for [`@minecraft/server`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/minecraft-server?view=minecraft-bedrock-stable) or [`@minecraft/server-ui`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-ui/minecraft-server-ui?view=minecraft-bedrock-stable). 
* `dependencies`: This section lists the packages that are needed at _runtime_. For example, [`@minecraft/math`](https://www.npmjs.com/package/@minecraft/math) is not provided by the Minecraft: Bedrock Edition runtime environment, so if you use it in your code, you need to ship its code as well.
* `scripts`: This section lists the commands that you can run using `npm run <command-name>`. For example, we will add a `build` command to transpile your TypeScript code to JavaScript.
* `type`: this field specifies the module system used in the project. Setting it to `"module"` indicates that the project uses ECMAScript modules (ESM) as opposed to CommonJS modules.

Eventually, we hopefully should see a transition to `package.jsonc` (JSON with comments) or similar formats that allow comments directly in the file. But for now, we have to rely on external documentation like this to explain the fields.

:::

5. **Add TypeScript configuration**: Create a `tsconfig.json` file

```bash
code tsconfig.json
```

with the following content:

```json
{
    "compilerOptions": {
        "module": "ES2020",
        "target": "ES2021",
        "strict": true,
        "removeComments": true,
        "moduleResolution": "Node",
        "allowSyntheticDefaultImports": true,
        "baseUrl": "./src",
        "paths": {
            "@/*": [
                "./*"
            ]
        },
        "rootDir": "./src",
        "outDir": "../BP/scripts",
    },
    "exclude": [
        "node_modules"
    ],
    "include": [
        "src"
    ]
}
```

::: details About the `tsconfig.json`

The `tsconfig.json` file configures the TypeScript compiler. Here's what each important field does:

**Compiler Options:**
* `module`: `"ES2020"` - Specifies the module system for the output JavaScript. ES2020 ensures compatibility with modern JavaScript features while maintaining ESM (ECMAScript Module) format required by Minecraft: Bedrock Edition.
* `target`: `"ES2021"` - Sets the JavaScript language version for the output. ES2021 provides modern JavaScript features that are supported by QuickJS.
* `strict`: `true` - Enables all strict type checking options, helping catch potential errors at compile time.
* `removeComments`: `true` - Strips comments from the output JavaScript to reduce file size.
* `moduleResolution`: `"Node"` - Uses Node.js-style module resolution, which is standard for npm packages.
* `allowSyntheticDefaultImports`: `true` - Allows default imports from modules that don't explicitly have a default export, improving compatibility with some libraries.
* `baseUrl`: `"./src"` - Sets the base directory for resolving non-relative module names.
* `paths`: Configures path aliases. `"@/*"` allows you to import with `@/` relative to `./src` instead of paths like `../../` relative to the current file path.
* `rootDir`: `"./src"` - Specifies where your source TypeScript files are located.
* `outDir`: `"../BP/scripts"` - Defines where the compiled JavaScript files will be placed (directly in your Behavior Pack's scripts folder).

**Other Options:**
* `exclude`: Lists directories to ignore during compilation. `node_modules` should always be excluded.
* `include`: Specifies which directories contain the TypeScript files to compile.

**Note:** The author of this guide does not possess enough knowledge about the Minecraft: Bedrock Edition scripting environment to provide the best possible `module` and `target` settings. However, the provided settings should work fine for most use cases. If you have more information about the exact JavaScript features supported by the QuickJS engine used in Minecraft: Bedrock Edition, please consider contributing to this guide and sharing your knowledge with the community.

:::

For this guide, we will use [`rolldown`](https://rolldown.rs/) as our [bundler](https://dev.to/sayanide/the-what-why-and-how-of-javascript-bundlers-4po9), which is up to 20x faster than its competitors. You can choose to use other bundlers like `esbuild`, `webpack`, or `rollup` if you prefer.

6. **Install rolldown**: Run the following command to install `rolldown` as a development dependency:

```bash
npm install --save-dev rolldown
```

After running the command, your `package.json` file should look approximately like this:

```json
{
    "type": "module",
    "devDependencies": {
        "rolldown": "^0.24.3"
    },
    "dependencies": {},
    "scripts": {}
}
```

7. **Add rolldown configuration**: Add a `rolldown.config.js` file

```bash
code rolldown.config.js
```

with the following content:

```js
import { defineConfig } from 'rolldown';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    input: './src/main.ts',
    output: {
        dir: '../BP/scripts',
        entryFileNames: 'main.js',
        format: 'esm',
    },
    external: ['@minecraft/server', '@minecraft/server-ui'],
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@': resolve(__dirname, 'src'),
            '@minecraft/math': resolve(__dirname, 'node_modules/@minecraft/math/lib/src/index.js'),
        },
    },
});
```

::: details About the `rolldown.config.js`

This configuration file sets up Rolldown, a fast JavaScript bundler written in Rust, to bundle your TypeScript code for Minecraft: Bedrock Edition.

**Key Configuration Sections:**

* `input`: `'./src/main.ts'` - Specifies the entry point of your application. Rolldown starts bundling from this file and includes all its dependencies.

* `output`: Configures how the bundled files are generated:
  * `dir`: `'../BP/scripts'` - Output directory for bundled files (your Behavior Pack's scripts folder).
  * `entryFileNames`: `'main.js'` - Name of the output file.
  * `format`: `'esm'` - Outputs in ECMAScript Module format, which is required by Minecraft: Bedrock Edition.

* `external`: `['@minecraft/server', '@minecraft/server-ui']` - Lists packages that should NOT be bundled. These modules are provided by Minecraft's runtime environment, so including them in your bundle would be redundant and cause conflicts.

* `resolve`: Controls module resolution:
  * `extensions`: `['.ts', '.js']` - File extensions Rolldown will resolve when importing modules without extensions.
  * `alias`: Maps import paths to specific file locations:
    * `'@'` - Allows you to import from the `src` directory using `@/` prefix (e.g., `import { foo } from '@/utils'`).
    * `'@minecraft/math'` - Points to the actual file location of the math module, which needs to be bundled since it's not provided by Minecraft's runtime.

:::

8. **Add the `@minecraft/server` as a development dependency**: Run the following command to install the type definitions for the Minecraft server API:

```bash
npm install --save-dev @minecraft/server
```

9. **Add index.ts**: Create a `src/` directory and add a `main.ts` file

```bash
mkdir src
code src/main.ts
```

with the following content:

```ts
import { world } from '@minecraft/server';

world.afterEvents.playerSpawn.subscribe((event) => {
    const player = event.player;
    player.sendMessage('Hello, world! This message is from TypeScript code.');
});
```

This is a simple script that sends a message to the players when they spawn in the game.

10. **Add build script**: Update the `scripts` section of your `package.json` file to include a `build` command:

```json
{
    "type": "module",
    "devDependencies": {
        "rolldown": "^0.24.3"
    },
    "dependencies": {},
    "scripts": {
        "build": "rolldown -c rolldown.config.js"
    }
}
```

This allows you to run `npm run build` to transpile and bundle your TypeScript code, generating the `BP/scripts/main.js`.

11. **Build your project**: Run the following command to build your project:

```bash
npm run build
```

This will transpile your TypeScript code to JavaScript and place the output in `BP/scripts/main.js`.

12. **Include the Behavior Pack script**: in order to include the generated script in your Behavior Pack, make sure your `BP/manifest.json` includes a reference to `scripts/main.js`:

```json
{
    "format_version": 2,
    "header": {
        "name": "My Bedrock Addon",
        "description": "An example Bedrock addon using TypeScript",
        "uuid": "YOUR-BEHAVIOR-PACK-UUID",
        "version": [1, 0, 0],
        "min_engine_version": [1, 16, 0]
    },
    "modules": [
        {
            "type": "script",
            "uuid": "YOUR-SCRIPT-MODULE-UUID",
            "version": [1, 0, 0],
            "entry": "scripts/main.js"
        }
    ]
}
``` 

You can grab UUIDs from <https://www.uuidgenerator.net/>.

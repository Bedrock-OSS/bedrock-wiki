---
title: Intro to Scripting
category: Legacy Scripting
nav_order: 1
tags:
    - outdated
---

:::danger Stop!

This scripting API is no longer supported. Refer to the new [Scripting API](/scripting/starting-scripts.html).

:::

This tutorial will teach you how to get up and running as a Minecraft Bedrock Edition (Windows 10) script modder!

:::warning As of 1.17.40, Scripting is only supported in Windows, and doesn't support mobile platforms (Android/iOS) or Console devices.
:::

## Prerequisites

1. Minecraft Bedrock Edition (Windows 10)
2. a code editor like [Visual Studio Code](https://code.visualstudio.com/) (although Notepad will technically be sufficient, I will be assuming the usage of VSCode going forward)
3. basic knowledge of Javascript (this tutorial will not be teaching you how to code in Javascript and presumes a baseline knowledge of it)

## Setting up your environment

### Find Minecraft installation folder

You will need access to the Minecraft installation folder - this is where we will be doing most of our work. You can find it here (replace `<USERNAME>` with your Windows 10 username):

`C:\Users\<USERNAME>\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang`

You should probably make a shortcut to this directory as it'll make development quicker as time goes on.

The sub-folders that we are most interested in are:

-   `development_behavior_packs`
-   `development_resource_packs`
-   `development_skin_packs`

These are the folders that our packs will exist in during development.
Behavior packs hold server code, resource packs have client code, and skin packs hold skins for your in-game character.
You might have noticed that some other folders are named something very similar:

-   `behavior_packs`
-   `resource_packs`
-   `skin_packs`

These folders are where completed Minecraft Bedrock Edition packs go.
For this tutorial, we will only focus on creating a behavior pack (not a resource or skin pack).

### Set up Visual Studio Code (VSCode)

Let's get your code editor set up:

1. Create a folder inside of `development_behavior_packs` named `HelloWorld`
2. Open Visual Studio Code (VSCode)
3. Go to `File > Add folder to workspace...` and select that newly created `HelloWorld` folder

Sweet, everything is set up, and now we can get to work. 😎

## Getting Started

From now on, the rest of our work is going to be from within the `HelloWorld` folder we created in the last section.
First things first, let's create some new folders and files.

Inside of `HelloWorld`, create a file called `manifest.json`.
Next, create a folder called `scripts`.
Inside of that folder, create two more folders called `server` and `client`, respectively.
Create a file called `serverScript.js` inside of the `server` folder.
Similarly, create a file called `clientScript.js` inside of the `client` folder.

Last but not least, download this image and place it in the `HelloWorld` folder:

![](/assets/images/scripting/hello-world-tutorial/pack_icon.png)

Your folder structure should now look like this:

```
/development_behavior_packs
    /HelloWorld
        > manifest.json
        > pack_icon.png
        /scripts
            /server
                > serverScript.js
            /client
                > clientScript.js
```

Here is what each file does:

-   `manifest.json`
    -   The manifest JSON file contains metadata that describes your behavior pack and how its resources are connected.
-   `pack_icon.png`
    -   This image will be shown next to your pack's listing on the Create New World screen.
-   `serverScript.js`
    -   This Javascript file will be where you write all the code that should be running on the server-side.
-   `clientScript`
    -   This Javascript file will be where you write all the code that should be running on the client-side.

### What's the difference between 'server-side' and 'client-side'?

When we say “client” or “server”, it usually follows with a relatively intuitive understanding of what part of the game we’re talking about.
After all, a client is what the user interacts with, and a server is where the user connects for a multiplayer game.
Easy, right?

As it turns out, there can be some ambiguity even with two such terms.
Here we disambiguate the four possible meanings of “client” and “server”:

-   physical client
    -   The physical client is the entire program that runs whenever you launch [Minecraft from the Windows 10 store](https://www.minecraft.net/en-us/store/minecraft-windows10). All threads, processes, and services that run during the game’s graphical, interactable lifetime are part of the physical client.
-   physical server
    -   Often known as the dedicated server, the physical server is the entire program that runs whenever you launch any [bedrock_server.exe](https://www.minecraft.net/en-us/download/server/bedrock) that does not bring up a playable GUI.
-   logical server
    -   The logical server runs game logic: mob spawning, weather, updating inventories, health, AI, and all other game mechanics. The logical server is present within the physical server and can also run inside a physical client with a logical client, as a single-player world. The logical server always runs in a thread named the Server Thread.
-   logical client
    -   The logical client is what accepts input from the player and relays it to the logical server. In addition, it also receives information from the logical server and makes it available graphically to the player. The logical client runs in the Client Thread, though several other threads are often spawned to handle things like audio and chunk render batching.

Our `clientScript.js` will run within the logical client and handle most things that interact with the visual world that a player may see through their physical client.
Our `serverScript.js` will run within the logical server and do most of the heavy lifting for your larger packs.
Most code will be written here because it is the safest (and sometimes the only) way to get certain things done.

For instance, we don't want to let just anybody write code in their own client script that lets them know exactly where all players are in the world (e.g., in PvP matches) or allows them to fly/teleport all over the place at will.
Only the server script can do those things, which makes sense because the server script is the most trusted resource in an add-on. It knows all and does all.

## manifest.json

To recap, your `manifest.json` file defines your behavior pack; its name, definition, authors, how it ties in with other behavior/resource/skin packs, etc.

Copy/paste this into your `manifest.json`:

<CodeHeader></CodeHeader>

```json
{
	"format_version": 2,
	"metadata": {
		"authors": ["<your-name>"],
		"url": "<your-github-repo-url>",
		"license": "TBD"
	},
	"header": {
		"name": "Hello World",
		"description": "Hello World scripting tutorial addon!",
		"uuid": "<uuid-1>",
		"version": [0, 0, 1],
		"min_engine_version": [1, 14, 0]
	},
	"modules": [
		{
			"description": "Hello World behavior pack module",
			"type": "data",
			"uuid": "<uuid-2>",
			"version": [0, 0, 1]
		},
		{
			"description": "Hello World client scripts module",
			"type": "client_data",
			"uuid": "<uuid-3>",
			"version": [0, 0, 1]
		}
	],
	"dependencies": []
}
```

Replace:

-   `<your-name>`
    -   with your name
-   `<your-github-repo-url>`
    -   with the URL of the GitHub/GitLab/etc. a repository that you're pushing your code to

But what about `<uuid-1>`, `<uuid-2>`, and `<uuid-3>`?
What even are UUIDs?
UUIDs are "Universally Unique Identifiers" which means a fancy string of characters (letters and numbers) separated by a couple of hyphens.
UUIDs don't hold any unique value intrinsically - for our usage, they're just random numbers.
You can generate UUIDs via an online tool like this, https://www.uuidgenerator.net/.
You can either choose UUID version 1 or version 4; it's up to you.
Generate 3 UUIDs and replace `<uuid-1>`, `<uuid-2>`, and `<uuid-3>` with them.

### the "metadata" section

The section labeled `"metadata"` provides information about you and your repository of code.
You can provide it your name via the array of `"authors"`, the `"url"` of your GitHub/GitLab/etc. repository where you're pushing your add-on's code, and also a `"license"` to protect your code from copyright. 😈

### the "header" section

The section labelled `"header"` provides information about your addon like the addon's `"name"`, `"description"`, `"version"` (e.g. `[0,0,1]` which means `version 0.0.1`), and `"min_engine_version"` (which is the minimum Minecraft version your addon is aiming for - e.g. `Minecraft v1.14.9`).

### the "modules" section

The section labeled `"modules"` provides information about the code that will be running on the server (`"data"`) and the client (`"client_data"`).
Nothing too special is happening here - remember to generate distinct UUIDs for both of them, and when you increase the version of your add-on, increase the version numbers here as well.

### the "dependencies" section

The section labeled `"dependencies"` provides information about other behavior/resource/skin packs that this behavior pack depends on.
When a user selects your add-on in Minecraft when creating a new world, the game will automatically load up every other pack defined in this section into your new world (as long as those packs have also been installed alongside yours).

For example, let's say that you created a resource pack with new blocks, items, and crafting recipes, and you want to make sure that it is always loaded into a world every time a user loads your add-on.
Here's what that would look like:

<CodeHeader></CodeHeader>

```json
"dependencies": [
  {
    "uuid": "<your-resource-packs-uuid>",
    "version": [0, 0, 1]
  }
]
```

You specify the UUID of your resource pack and the version.
This is, so Minecraft knows exactly which pack and what version to load.
You don't have to worry about this for this tutorial.

## Testing your behavior pack

Now that you have a valid `manifest.json` and a `pack_icon.png`, you now have the bare-minimum behavior pack contents that Minecraft will be able to recognize and load!
Let's open Minecraft Bedrock Edition and see what happens.

Go to "Create New World" and click on the "Behavior Packs" button in the lower-left "Add-Ons" sub-menu.

![](/assets/images/scripting/hello-world-tutorial/addons-menu.png)

Your Hello World add-on should show up in the list of behavior packs!

Clicking on your add-on should bring up a button titled "Activate". Click it.

![](/assets/images/scripting/hello-world-tutorial/load-pack-menu-activate.png)

After clicking "Activate", a pop-up should appear titled "Turn Off Achievements?".
For apparent reasons, achievement getting has to be turned off when add-ons are loaded as they could potentially make it easier to achieve them.

![](/assets/images/scripting/hello-world-tutorial/turn-off-achievements-popup.png)

After clicking "Continue", your behavior pack should have been moved to the "Active" section!

![](/assets/images/scripting/hello-world-tutorial/active-hello-world-addon.png)

The next most important part is to enable "Additional Modding Capabilities" under "Experiments".
If you don't enable this, then none of your scripts will work at all!
Scroll down until you see this toggle button and turn it on.

![](/assets/images/scripting/hello-world-tutorial/additional-modding-capabilities-toggle.png)

After turning it on, you will see a pop-up titled "Activate Experimental Gameplay?".
Select "Continue".

![](/assets/images/scripting/hello-world-tutorial/activate-experimental-gameplay-popup.png)

While you're down here, you can toggle any other options that will make development easier.
Here are some that I prefer to have on.

World Options:

![](/assets/images/scripting/hello-world-tutorial/world-options.png)

World Cheats:

![](/assets/images/scripting/hello-world-tutorial/world-cheats.png)

That should be it!

Now that you have selected your add-on to be loaded in with your new world, please hit "Create" and start it up!

The first thing that you should see when your world is loading is another pop-up titled "Enable Scripts?".
This appears so that everyone knows for a fact that some non-official code will be running when they join your world.
This is helpful to prepare other players for random bugs that could appear due to an arbitrary add-on or just any other hijinks that you as a mod-maker will put them through :)

![](/assets/images/scripting/hello-world-tutorial/enable-scripts-popup.png)

After selecting "Enter World", you will finally join with your new Minecraft Bedrock Edition world with your latest behavior pack installed, and ........ nothing happens, lol.

![](/assets/images/scripting/hello-world-tutorial/addon-loaded-scripts-off.png)

That's because we haven't written code yet! Let's do that now - on to the fun part!

## serverScript.js

Copy and paste this into your `serverScript.js` file.

```js
// this signs-up this script to run on the server-side of the Minecraft Bedrock Edition engine
const systemServer = server.registerSystem(0, 0)

// the server runs this as soon as the scripts are all fully loaded
systemServer.initialize = function () {
	// turn on logging of information, warnings, and errors
	const scriptLoggerConfig = this.createEventData(
		'minecraft:script_logger_config'
	)
	scriptLoggerConfig.data.log_errors = true
	scriptLoggerConfig.data.log_information = true
	scriptLoggerConfig.data.log_warnings = true
	this.broadcastEvent('minecraft:script_logger_config', scriptLoggerConfig)

	// register event data, register components, register queries, listen for events, . . .

	this.counter = 0
}

// the server runs this update function 20 times per second
systemServer.update = function () {
	// print hello world to the world's chat once per second
	this.counter++
	if (this.counter === 20) {
		this.log('Server!')
		this.counter = 0
	}

	// update other stuff . . .
}

// the server only runs this when the world is shutting down
systemServer.shutdown = function () {
	// clean up stuff . . .
}

// This is just a helper function that simplifies logging data to the console.
systemServer.log = function (...items) {
	// Convert every parameter into a legible string and collect them into an array.
	const toString = (item) => {
		switch (Object.prototype.toString.call(item)) {
			case '[object Undefined]':
				return 'undefined'
			case '[object Null]':
				return 'null'
			case '[object String]':
				return `"${item}"`
			case '[object Array]':
				const array = item.map(toString)
				return `[${array.join(', ')}]`
			case '[object Object]':
				const object = Object.keys(item).map(
					(key) => `${key}: ${toString(item[key])}`
				)
				return `{${object.join(', ')}}`
			case '[object Function]':
				return item.toString()
			default:
				return item
		}
	}

	// Join the string array items into a single string and print it to the world's chat.
	const chatEvent = this.createEventData('minecraft:display_chat_event')
	chatEvent.data.message = items.map(toString).join(' ')
	this.broadcastEvent('minecraft:display_chat_event', chatEvent)
}
```

I heavily commented on every section of this server script, but I will delve deeper into the different areas.

### .registerSystem()

The very first line, `const systemServer = server.registerSystem(0, 0);`, at the top of the script is the most pivotal.
This signs the script up to be either on the client or server threads of the game.
Generally speaking, you will choose whether you put the script file in the client or server folders.
In this case, it signs it up on a server thread.
To do that, call registerSystem on either the client or server and give it the API version you require.

### .initialize()

The `systemServer.initialize = function() {` function is the first method that gets called immediately after the system is registered.
It will run as soon as the script loads at world start.
You can use this to set up the environment for your script: register custom components and events, sign up event listeners, etc.
This will run BEFORE the world is ready and the player has been added to it.
This function should be used to initialize variables and set up event listeners.
You shouldn't try to spawn or interact with any entities at this point!
It would be best to avoid interaction with UI elements or send messages to the chat window since this is called before the player is ready.

### .update()

The `systemServer.update = function() {` function gets called once every game tick.
The server and client tick at 20 times per second.
This is an excellent place to get, check, and react to component changes.

### .shutdown()

The `systemServer.shutdown = function() {` function gets called when the Minecraft Script Engine is shutting down.
For the client, this is when they leave the world; for the server, this is after the last player has exited the planet.

### .log()

The `systemServer.log = function(...items) {` function is just a custom function I have set up to make logging things to the world's chat easier.
You can create any number of custom functions and tie them to the `systemServer` object.
Just make sure not to overwrite any methods that come pre-installed on it.

### testing the server Javascript code

So, for the sake of keeping this tutorial extremely simple, the only actual functionality this server script provides is printing out "Server!" to the world's chat once per second.
First, we use the `.initialize()` method to set up our `counter` variable.
Then, in the `.update()` function, if it has the value `20` we print `Server!`, the increment `counter`.
We chose `20` because the `.update()` function ticks 20 times per second.
If we instead printed a message every single tick, the chat would just become a blur!
We never use the `.shutdown()` method because nothing we used needs to be cleaned up.

Now that we know everything about this script let's test it out!
Load up the Minecraft world you created earlier!

![](/assets/images/scripting/hello-world-tutorial/addon-loaded-scripts-on-server-only.png)

You should end up seeing something like this!

Now, we go to the client Javascript.

## clientScript.js

Copy and paste this into your `clientScript.js` file. I will delve into its contents in a second.

```js
// this signs-up this script to run on the client-side of the Minecraft Bedrock Edition engine
const systemClient = client.registerSystem(0, 0)

// the client runs this as soon as the scripts are all fully loaded
systemClient.initialize = function () {
	// turn on logging of information, warnings, and errors
	const scriptLoggerConfig = this.createEventData(
		'minecraft:script_logger_config'
	)
	scriptLoggerConfig.data.log_errors = true
	scriptLoggerConfig.data.log_information = true
	scriptLoggerConfig.data.log_warnings = true
	this.broadcastEvent('minecraft:script_logger_config', scriptLoggerConfig)

	// register event data, register components, register queries, listen for events, . . .

	this.counter = 0
}

// the client runs this update function 20 times per second
systemClient.update = function () {
	// print hello world to the world's chat once per second
	this.counter++
	if (this.counter === 20) {
		this.log('Client!')
		this.counter = 0
	}

	// update other stuff . . .
}

// the client only runs this when the world is shutting down
systemClient.shutdown = function () {
	// clean up stuff . . .
}

// This is just a helper function that simplifies logging data to the console.
systemClient.log = function (...items) {
	// Convert every parameter into a legible string and collect them into an array.
	const toString = (item) => {
		switch (Object.prototype.toString.call(item)) {
			case '[object Undefined]':
				return 'undefined'
			case '[object Null]':
				return 'null'
			case '[object String]':
				return `"${item}"`
			case '[object Array]':
				const array = item.map(toString)
				return `[${array.join(', ')}]`
			case '[object Object]':
				const object = Object.keys(item).map(
					(key) => `${key}: ${toString(item[key])}`
				)
				return `{${object.join(', ')}}`
			case '[object Function]':
				return item.toString()
			default:
				return item
		}
	}

	// Join the string array items into a single string and print it to the world's chat.
	const chatEvent = this.createEventData('minecraft:display_chat_event')
	chatEvent.data.message = items.map(toString).join(' ')
	this.broadcastEvent('minecraft:display_chat_event', chatEvent)
}
```

You should see many similarities between the `clientScript.js` and the `serverScript.js`.
The only difference between them is that we switched it to' client' wherever you see the word `server`.

-   `systemServer` becomes `systemClient`
-   `this.log("Server!");` becomes `this.log("Client!");`

That should be it!
Load backs up your Minecraft world.

![](/assets/images/scripting/hello-world-tutorial/addon-loaded-scripts-on-both.png)

You should see something like this!

The game should print "Server!" and "Client!" to the chat once per second.

## Bundling your behavior pack into an Add-on

So how can other people play your brand new, never before seen Minecraft Bedrock Edition add-on?
Microsoft created a super simple way to bundle up your behavior pack into a single file.

### .mcpack

Go into File Explorer and find your behavior pack.
Remember, you can find that here (replace `<USERNAME>` with your Windows 10 username):

`C:\Users\<USERNAME>\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang/development_behavior_packs/HelloWorld`

Right-click the `HelloWorld` folder and and zip it (choose send to > compressed(zipped) folder).
Now change the extension [by renaming the file] from `.zip` to `.mcpack`.

When a user double-clicks on the file, it'll be automatically opened by, and imported to, Minecraft for them to use (it'll be located in `.../com.mojang/behavior_packs`).
Remember: Some experimental features in version 1.17.30 may not work.

## The End

If you made it this far - congrats!
You're now an official Minecraft Bedrock Edition modder!

If you want the source code from this tutorial, you can download the pack [here](https://github.com/Bedrock-OSS/wiki-addon/releases/download/download/legacy_scripting_hello_world.mcpack).
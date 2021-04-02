---
layout: page
title: Saving and Loading Data
parent: Scripting
---
# Saving and Loading data

<details id="toc" open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

Saving and loading data in Bedrock is tricky because currently scripts cannot access the local file system directly.

Nonetheless, we can save data by [tagging](https://www.youtube.com/watch?v=tjragqkAlMc) a [dummy entity](https://wiki.bedrock.dev/tutorials/dummy-entities.html).  

Read about the ```executeCommand``` and the ```broadcastEvent``` functions [here](https://bedrock.dev/docs/stable/Scripting).

Be sure to take note of how to create a custom event

We will use ```executeCommand``` to create and modify tags - note that this function can only be called in a server script.

For saving tags, you can either use one tag which is a JSON string for all your data or multiple tags and remember what the order of them means. I personally go with a single JSON string so I don't have to remember anything as the keys will tell me what the values are for.

If your data is meant to be displayed to the user, make sure they've entered the world first! For example, you could have a listener  for ```"minecraft:client_entered_world"```


In Bedrock we can create or listen for events, but we don't send events to a specific consumer directly.  
 Just remember to have the listener and broadcast events setup everywhere they need to be. For example, if I want data loaded for the client to handle, I'd do:
client -> server -> client

Client broadcasts an event the server listens for

AND

Server broadcasts an event the client listens for, so it can reply


## Saving

1. Add the dummy json files from the [dummy entity tutorial](https://wiki.bedrock.dev/tutorials/dummy-entities.html) to your behavior and resource packs
2. Add a save function to your server script, calling ```executeCommand```.  This function will check if the dummy entity is created, if not it will create it and save to it.
3. Add a listener to your server's initialize function which will listen to a save event broadcast by your client script, call your save code here
4. broadcast an event in your client to let the server know when we want to save data

## Loading
1. Add a listener to your server script's call to initialize. This listener will be for for a load request from the client and broadcast the saved data after reading it
2. In your client script you will want to broadcast a load event to let the server know saved data is needed.
3. In your client script, add a listener to receive the save data the server read

## Boilerplate Code
Example code coming soon...

---
title: Saving and Loading Data
category: Legacy Scripting
tags:
    - outdated
---

:::danger Stop!

This scripting API is no longer supported. Refer to the new [Scripting API](/scripting/starting-scripts.html).

:::

Saving and loading data in Bedrock is tricky because scripts cannot access the local file system directly.

Nonetheless, we can save data by [tagging](https://www.youtube.com/watch?v=tjragqkAlMc) a [dummy entity](/entities/dummy-entities).

Read about the `executeCommand` and the `broadcastEvent` functions [here](https://bedrock.dev/docs/stable/Scripting).

Be sure to take note of how to create a custom event.

We will use `executeCommand` to create and modify tags - note that this function can only be called in a server script.

For saving tags, you can either use one tag, a JSON string for all your data, or multiple tags and remember what the order of them means. I go with a single JSON string, so I don't remember anything as the keys will tell me what the values are for.

If your data is meant to be displayed to the user, make sure they've entered the world first! For example, you could have a listener for `"minecraft:client_entered_world"`

In Bedrock, we can create or listen to events, but we don't send events directly to a specific consumer.
 Just remember to have the listener and broadcast events set up everywhere they need to be. For example, if I want data loaded for the client to handle, I'd do:
client -> server -> client

The client broadcasts an event the server listens for

AND

The server broadcasts an event the client listens for, so it can reply

## Saving

1. Add the dummy JSON files from the [dummy entity tutorial](/entities/dummy-entities) to your behavior and resource packs
2. Add a save function to your server script, calling `executeCommand`. This function will check if the dummy entity is created. If not, it will create it and save to it.
3. Add a listener to your server's initialize function, which will listen to a save event broadcast by your client script. Call your save code here
4. broadcast an event in your client to let the server know when we want to save data

## Loading

1. Add a listener to your server script's call to initialize. This listener will be for a load request from the client and broadcast the saved data after reading it
2. In your client script, you will want to broadcast a load event to let the server know saved data is needed.
3. In your client script, add a listener to receive the saved data the server read

## Boilerplate Code

Example code coming soon...
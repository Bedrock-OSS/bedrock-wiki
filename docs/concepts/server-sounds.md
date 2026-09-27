---
title: Sounds (Server)
description: Learn how to declare sound metadata in your behavior pack for sounds played from script.
tags:
    - experimental
    - intermediate
related:
    - /concepts/sounds
mentions:
    - SmokeyStack
---

<Label color="blue">Upcoming Creator Features</Label>

Server sound definitions lets behavior packs declare server-side sound definitions for sounds played from script. The game uses this metadata to track how long a sound plays, describe music, and limit how far a broadcast sound reaches.

:::warning
Server sound definitions do **not** register any audio. The sound event named in a definition must still exist as a custom sound added in a resource pack's `RP/sounds/sound_definitions.json`. See the [Sounds](/concepts/sounds) page for how to add custom audio.
:::

:::warning
Vanilla does **not** ship a server sound definitions file, so no vanilla sound has duration, music, or tag metadata. You also cannot add definitions for vanilla sounds yourself: every `sound_event_name` must be namespaced, and vanilla sound events such as `random.pop` have no namespace. Only your own namespaced sounds can be defined here.
:::

## Folder Structure

Server sound definitions live in a file called `sound_definitions.json` inside the behavior pack's `sounds` folder. This file shares its name with the resource pack file but has a completely different format, and the two are not related.

<FolderView :paths="[
	'BP/sounds/sound_definitions.json',
]" />

## Format

The file contains a single `minecraft:server_sound_definitions` array. Each entry in the array is one definition.

<CodeHeader path="BP/sounds/sound_definitions.json" />

```json
{
    "format_version": "beta",
    "minecraft:server_sound_definitions": [
        {
            "sound_event_name": "wiki:my_cool_song",
            "duration_info": {
                "mode": "game_time",
                "seconds": 180.0
            }
        },
        {
            "sound_event_name": "wiki:my_other_song",
            "duration_info": {
                "mode": "real_time",
                "seconds": 12.5
            }
        },
        {
            "sound_event_name": "wiki:ambient_loop"
        }
    ]
}
```

### sound_event_name

<Label color="red">Required</Label>

The sound event this definition applies to. This is the same identifier you would pass to `/playsound` or `playSound()` in script. The identifier must include a namespace (for example `wiki:my_cool_song`), which means vanilla sound events cannot be given a server sound definition. It may not contain whitespace, and it is matched case-insensitively.

### duration_info

<Label color="green">Optional</Label>

Tells the game how long the sound lasts so it can track playback. Without this, the game has no idea when a sound ends. If present, both fields are required.

-   `seconds` - Length of the sound as a float.
-   `mode` - How elapsed time is measured:
    -   `"game_time"` counts game ticks. Playback progress pauses while the game is paused or the tick rate slows.
    -   `"real_time"` counts wall-clock time regardless of tick rate.

When set, the sound's progress is available through `SoundInstance.durationInfo` in script, and the `world.afterEvents.soundCompleted` event fires once the declared duration has elapsed.

### music_info

<Label color="green">Optional</Label>

Describes the musical content of the sound. All fields are optional.

-   `genres` - Array of strings.
-   `moods` - Array of strings.
-   `artist` - String.
-   `title` - String.

```json
{
    "sound_event_name": "wiki:my_cool_song",
    "duration_info": {
        "mode": "real_time",
        "seconds": 180.0
    },
    "music_info": {
        "genres": ["electronic", "ambient"],
        "moods": ["calm"],
        "artist": "Wiki Composer",
        "title": "My Cool Song"
    }
}
```

### tags

<Label color="green">Optional</Label>

A map of arbitrary metadata. Each key is a tag name, and each value is either a single string or an array of strings. Neither keys nor values may contain whitespace. The game does not interpret tags itself; they exist so scripts can filter and look up definitions.

```json
{
    "sound_event_name": "wiki:ambient_loop",
    "tags": {
        "category": "background",
        "regions": ["overworld", "nether"]
    }
}
```

### broadcast_range

<Label color="green">Optional</Label>

An XZ distance in blocks, as a float. When a sound with this definition is played as a broadcast (for example, `dimension.playSound()` with no target player), only players within this horizontal range of the sound's location receive it.

```json
{
    "sound_event_name": "wiki:village_bell",
    "broadcast_range": 64
}
```

## Script API

Server sound definitions are exposed to `@minecraft/server` in the `beta` version of the module. The main entry points are:

-   `world.soundDefinitionRegistry.getDefinitions(filter?)` - Returns the loaded `SoundDefinition` objects, optionally narrowed by a `SoundDefinitionFilter`. Filters can match on `minDuration`, `maxDuration`, `genres`, `moods`, `artists`, `titles`, and `tags`. String comparisons are case-insensitive, and an array matches when any provided value overlaps the definition's values.
-   `SoundDefinition` - Has `soundEventId`, `durationInfo`, `musicInfo`, and `tags` properties mirroring the JSON above.
-   `player.playSound(definition)` - Accepts a `SoundDefinition` in addition to a sound ID string.
-   `SoundInstance` - Returned when a sound is played. Exposes `id`, `soundEventId`, `recipient`, and `durationInfo`, which includes `isActive` and `getPlaybackPosition()`.
-   `world.afterEvents.soundCompleted` - Fires when a tracked sound's declared duration elapses. The event's `soundInstanceId` matches the `id` of the `SoundInstance` that finished.

The example below plays a random calm song for a player and logs when it finishes.

<CodeHeader path="BP/scripts/main.js" />

```js
import { world } from "@minecraft/server";

world.afterEvents.playerSpawn.subscribe(({ player, initialSpawn }) => {
    if (!initialSpawn) return;

    const songs = world.soundDefinitionRegistry.getDefinitions({
        moods: ["calm"],
        minDuration: 60,
    });
    if (songs.length === 0) return;

    const song = songs[Math.floor(Math.random() * songs.length)];
    const instance = player.playSound(song);

    const completed = world.afterEvents.soundCompleted.subscribe(({ soundInstanceId }) => {
        if (soundInstanceId !== instance.id) return;
        world.afterEvents.soundCompleted.unsubscribe(completed);
        player.sendMessage(`Finished playing ${song.musicInfo?.title ?? song.soundEventId}`);
    });
});
```

:::tip
For the full and current API surface, see the [Microsoft Learn documentation](https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/minecraft-server). These classes are in beta and may change between previews.
:::


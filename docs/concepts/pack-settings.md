---
title: Pack Settings
description: Pack settings allow you to add toggles, sliders and dropdowns to your pack.
license: true
mentions:
    - Cavell1234
---

## What are Pack Settings?

Pack Settings allow you to add configurable options to a behavior or resource pack. These options can be shown as labels, toggles, sliders, or dropdowns.

Pack settings can be used to let players or world owners customize how a pack behaves without leaving the world or server. 
 
Pack settings are configured through the pack's "manifest.json" and can be accessed using Molang in resource packs or the Script API in behavior packs.

## Manifest Part

To register the pack settings in the manifest you need to add `settings` and this contains an array of settings.

Example:

<CodeHeader path="RP/manifest.json" />

```json
{
  "format_version": 3,

  "header": {
    "name": "Pack Name",
    "description": "Pack Description.",
    "uuid": "7f3b2c91-5e84-4a16-bd73-91c8e52f604a",
    "version": "1.0.0",
    "min_engine_version": "1.21.130"
  },

  "modules": [
    {
      "type": "resources",
      "uuid": "c6a94725-1f3d-4e82-9b61-54e8f7a203dc",
      "version": "1.0.0"
    }
  ],

  "settings": [
    {
      "type": "label",
      "text": "Text Settings"
    },
    {
      "type": "toggle",
      "name": "wiki:show_text",
      "text": "Show Text",
      "default": true
    },
    {
      "type": "slider",
      "name": "wiki:text_scale",
      "text": "Text Scale",
      "min": 0.5,
      "max": 2.0,
      "step": 0.1,
      "default": 1.0
    },
    {
      "type": "dropdown",
      "name": "wiki:text",
      "text": "Text Options",
      "options": [
        {
          "name": "text_1",
          "text": "This is text 1"
        },
        {
          "name": "text_2",
          "text": "This is text 2"
        },
        {
          "name": "text_3",
          "text": "This is text 3"
        }
      ],
      "default": "text_2"
    }
  ]
}
```
-   `label` - Displays read-only text in the settings menu.

-   `toggle`- A toggle that stores a boolean value.

-   `slider` - Adds a slider that stores a numeric value. Sliders can use either integer or decimal values.

-   `dropdown` - Adds a list of predefined options that the user can choose from.

## Requirements

Pack Settings require Manifest `format_version` 3.

The Molang pack-setting queries require a Molang format version of at least `1.21.130`.

Pack Settings are still subject to change and some functionality, particularly Behavior Pack support, is experimental.

Manifest v3 uses SemVer strings for the version fields instead of arrays.

## How do I access the values?

Resource pack settings can be configured individually by each player.

They can be accessed using Molang:

`query.is_pack_setting_enabled('wiki:show_text')`{lang=molang}

`query.get_pack_setting('wiki:text_scale')`{lang=molang}

`query.is_pack_setting_selected('wiki:text', 'text_2')`{lang=molang}

Behavior pack settings are configured per-world and can be changed by the world or server owner.

Behavior packs can access pack settings through the Script API's world.getPackSettings() API.

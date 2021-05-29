---
layout: page
title: Format Versions
parent: Concepts
---

# Format Versions

Most Addon files contain a `format_version` field, often in the description. Here is an example:

<CodeHeader>BP/entities/dragon.json</CodeHeader>

```json
{
	"format_version": "1.13.0",
	"minecraft:entity": {
		"description": {
			"identifier": "wiki:dragon",
			"is_spawnable": false,
			"is_summonable": true,
			"is_experimental": false
		}
	}
}
```

Format versions exist so that Mojang can add new functionality into the Addon system without breaking old addons. In the example above, the format version is `1.13.0`. This means that the entity will be processed using the `1.13.0` entity mechanics.

When you pick a format version to use, you are tying that file _to_ a specific version. You cannot use new components or functionality

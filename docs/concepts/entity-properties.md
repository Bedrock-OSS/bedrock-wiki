---
layout: page
title: Entity Properties
parent: Concepts
badge: BETA
badge_color: red
---

# Entity Properties [BETA]

-   Documentation on the new Entity Properties, also known as Actor Properties introduced in the 1.16.230.52 Minecraft: Bedrock Edition beta version.
-   Entity Properties were implemented to save data, or store values on entities efficiently without needing the use of components, or attributes (For example "minecraft:variant") in server-side of the entity (Behavior Pack), similar to Block Properties.

---

## Entity Properties Definition

### Defining Properties on Entities

-   Entity Properties Definition:

```json
{
	"minecraft:entity": {
		"description": {
			"identifier": "entity:properties_example",
			"properties": {
				"property:number_range_example": {
					"values": {
						"min": 0,
						"max": 100
					}
				},
				"property:number_enum_example": {
					"values": [1, 2]
				},
				"property:string_enum_example": {
					"values": ["first", "second", "third"]
				},
				"property:boolean_enum_example": {
					"values": [true, false]
				}
			}
		}
	}
}
```

---

### Entity Properties Object Fields

#### `values`

-   `values` property is required, and omitting this field may cause error and fail to register the property.
-   `values` field can be evaluated as an array of enum values, or a range of minimum and maximum values (Note that integer, float, and boolean enum values currently supports only two values):

```json
"property:range_example": {
    "values": {
      "min": 0,
      "max": 5
    }
}
```

**OR**

```json
"property:enum_example": {
    "values": [1, 2]
}
```

#### `default`

-   You can set the default value of the entity property (By default, the first value of the enum array index), through the <code>default</code> field inside the defined property object:

```json
"property:default_value_example": {
    "values": [true, false],
    "default": false
}
```

-   As you can observe, the default property is set to `false` instead of `true` when the entity is spawned in the world.

#### `client_sync`

-   To sync through the Resource Pack (client-side), <code>client_sync</code> field can be used to allow the Client Entity access the Entity Properties. By default, the value is set to `false`.

```json
"property:client_sync_example": {
    "values": {
      "min": 0,
      "max": 20
    },
    "client_sync": true
}
```

---

### Manipulating and Accessing Entity Properties

-   You can access entity properties though MoLang Entity Queries (Note, these MoLang Entity Queries are a part of Experimental features):

    -   `query.actor_property`
    -   `query.has_actor_property`

-   With entity events, you may set the entity property to a value with the `set_actor_property` event response:

```json
"events": {
    "event:set_entity_property": {
      "set_actor_property": {
        "property:number_enum_example": 2,
        "property:string_enum_example": "'second'",
        "property:boolean_enum_example": "!query.actor_property('property:boolean_enum_example')"
      }
    }
}
```

---

## Entity Aliases

-   You can define aliases for your entity to summon the entity with set entity property values through the `summon` command.
-   Entity can have various aliases with custom entity identifier to use:

```json
{
	"format_version": "1.16.0",
	"minecraft:entity": {
		"description": {
			"identifier": "entity:properties_example",
			"is_spawnable": true,
			"is_summonable": true,
			"is_experimental": false,
			"properties": {
				"property:property_index": {
					"client_sync": true,
					"values": {
						"min": 0,
						"max": 2
					},
					"default": 0
				}
			},
			"aliases": {
				"entity:default_alias": {},
				"entity:first_alias": {
					"property:property_index": 1
				},
				"entity:second_alias": {
					"property:property_index": 2
				}
			}
		}
	}
}
```

-   Now, the entity has multiple aliases, and you can use the defined alias identifier through the `summon` command to spawn the entity with the properties set:
    -   `/summon entity:first_alias` will spawn the entity with the entity property `property:property_index` set to 1.

---

## Entity Permutations

-   Entity Permutations are implemented to apply a set of components every tick if the condition met.
-   `permutations` array is inserted in the `minecraft:entity` object, the same level as `components` object:

```json
"permutations": [
    {
      "condition": "query.actor_property('property:string_enum_example') == 'first'",
      "components": {
        "minecraft:scale": {
          "value": 1.0
        }
      }
    },
    {
      "condition": "query.actor_property('property:string_enum_example') == 'second'",
      "components": {
        "minecraft:scale": {
          "value": 2.0
        }
      }
    },
    {
      "condition": "query.actor_property('property:string_enum_example') == 'third'",
      "components": {
        "minecraft:scale": {
          "value": 3.0
        }
      }
    }
]
```

-   As we observed, if the entity property "`property:string_enum_example`" value is "`first`", then the "`minecraft:scale`" entity component with a scale of 1 is applied on the entity. Otherwise, if the entity property "`property:string_enum_example`" value is "`second`", the entity's scale is twice as it was. Then, it is similar to how it goes for the `third` value, with three times from the original scale.

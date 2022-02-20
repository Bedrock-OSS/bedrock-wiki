---
title: Understanding JSON
category: Extra
nav_order: 1
prefix: 'a. '
---

::: tip
This is an appendix page. You can start the guide from the beginning [here](/guide/index).
:::

JSON is a simple "language" that is used for lots of things in Computer Science... including making Minecraft Bedrock Addons! If you have never heard of JSON before, you are encouraged to read through [this tutorial](https://www.digitalocean.com/community/tutorials/an-introduction-to-json). It will teach you everything you need to know about writing valid JSON files.

## Valid JSON

The important thing to remember when writing JSON is that it must be _completely error free_, or it won't work at all. Even one wrong character, or one extra comma will cause the entire file to fail. For this reason, it's super important you write valid JSON.

We can use an online tool called [json lint](https://jsonlint.com/) to tell us whether our JSON is valid. Simply paste your code into the website, and press `Validate JSON`. You will get a response indicating whether your code is correct or not, as well as the location and type of any errors.

## Data Structures

In JSON, data can be written in a number of formats. Each format is specialized for the kind of data it wants to represent. Here are the structures we have available:

| Name   | Example  | Explanation                            |
| ------ | -------- | -------------------------------------- |
| String | "hello!" | Words, or characters. Requires quotes. |
| Int    | 15       | A number. No quotes.                   |
| Float  | 1.2      | A fractional number. No quotes.        |
| Bool   | true     | Either true or false. No quotes.       |

In addition to these simple structures, we also have access to two special structures. Special structures are used to nest structures together.

### Arrays

Arrays are written as two square brackets `[]`. They represent a _list_. We can put _other data structures_ inside of the list. Each _element_ of the list should be separated by a comma.

Some examples:

| Structure       | Comment                               |
| --------------- | ------------------------------------- |
| [1, 2, 3]       | A list of integers.                   |
| ["Red", "blue"] | A list of strings. Notice the quotes! |

### Objects

Objects are written as two curly-brackets `{}`. Objects are a special syntax which contains _named_ data structures. The name is called a `key`, and the structure is called a `value`.

This key-value syntax looks like this: `"key": <any structure>`. Notice the quotes around the key, and the colon.

Here is an example of an object, which contains a few _key-value-pairs_.

<CodeHeader></CodeHeader>

```json
{
	"a_list_of_integers": [1, 2, 3],
	"is_json_cool": true
}
```

We need to separate each key-value pair with a comma.

We call the key-value pairs of an object as its _child_ or as being _inside_ the object.

## JSON Structure

In Minecraft, JSON files always begin with an _object_, which you can remember is two curly brackets:`{}`. We call this the _top level object_. We write our code _inside_ of this object, in the form of key-value pairs.

Here is an example of a simple json file, used for Minecraft addons:

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.12.0",
	"animations": {
		"animation.car.wheel_spin": {
			"loop": true,
			"animation_length": 1.0,
			"bones": {
				"front_wheels": {
					"rotation": ["query.modified_distance_moved * -30", 0, 0]
				},
				"back_wheels": {
					"rotation": ["query.modified_distance_moved * -30", 0, 0]
				}
			}
		}
	}
}
```

Take a careful look at the format. You will see that the entire structure is built out the data-structures that we have already learned. If you want to practice your json skills, try to answer these questions:

-   How many keys are there in the _top level object_. Can you name them?
-   What is the value of `format_version`?
-   What `structure` is the value for: `"loop": true`?

## Troubleshooting Examples

---

You wrote: `"format_version": 1.12`

They said: "_The value for format_version is the wrong type. It should be a string._

Remember that `type` means one of the structures: `String`, `Int`, `Float`, `Array` or `Object`. If we examine our code, we will see that we put `format_version` to an `Int`, instead of a `String`. We can fix this problem by adding quotes around the `1.12`.

---

You wrote: `[1 2 5 6]`

They said: "_Your array is missing commas._"

Remember that array elements need to be separated by commas. Your array should look like this: `[1, 2, 5, 6]`

---

They said: _"You accidentally put the format version inside your description. It should go outside at the top level_".

This means that the key-value pair for `"format_version"` as a _child_ of the description. You should copy/paste the key-value pair out from the description object, and place it at the top level.

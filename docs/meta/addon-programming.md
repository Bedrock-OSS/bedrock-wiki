---
title: Creating addons with Programming
---

Addons in Bedrock Edition (except for scripts) are entirely written using JSON-config files. Often, these files can and should be written by hand. Possibly with the help of a dedicated editor like [bridge.](https://bridge-core.github.io/).

However, in some instances, writing the JSON by hand is very time-consuming. In these cases, we can consider using a programming language to do the work for us. This guide will be written for _python_, but can be extrapolated to a language you are familiar with.

## When should you automate a task?

You should consider automating a task if one (or more!) of the following conditions are met:

-   The desired output is very long
-   The task is repetitive and can be abstracted
-   The _input_ often changes, requiring you to edit a single file very often

## How to get started with programming?

This guide assumes you are slightly familiar with the command line and have a programming language installed. If this isn't the case, you should follow [this guide](https://www.programiz.com/python-programming/first-program) to get started.

I often write python scripts alongside my `RP`/`BP` folders and then run via the command line in [VSCode](https://code.visualstudio.com/).

## Creating sound_definitions.json

We will use automating `sound_definitions.json` as a case study for general automation tasks.

### Picking the Topic

We will be automating the creation of `sound_definitions.json`. We chose this topic because `sound_definitions.json` can be directly generated based on the paths of our sound files. As we add/remove sound files, it would be super nice if we didn't always have to edit `sound_definitions.json` by hand!

Another good automation topic could be:

-   `texture_list.json`
-   creating simple RP/BP item pairs based on textures in textures/items
-   creating the `canPlaceOn` JSON for blocks that need to be placed on lots of surfaces

### Inspect the Format

The first thing you need to do is inspect the format of the file you want to create. Here is a simple `sound_definitions.json` file:

<CodeHeader></CodeHeader>

```json
{
	"dragon.roar": {
		"category": "ui",
		"sounds": ["sounds/dragon/roar"]
	},
	"dragon.wing_flap": {
		"category": "ui",
		"sounds": ["sounds/dragon/wing_flap"]
	}
}
```

The next step, is to look at the file, and select a _chunk_. Our goal will be to generate this chunk programmatically, based on some _input_. In this case, our chunk is a single sound_definition:

<CodeHeader></CodeHeader>

```json
"$folder.$sound:": {
    "category": "$category",
    "sounds": [
        "sounds/$folder/$sound"
    ]
}
```

Now, we can annotate this JSON with the _variables_ we want to inject. In other words, the content that we want to change programmatically. Notice how some variables are used multiple times. I'm using `$var` to annotate the JSON, but this is just for information-gathering. We will replace this with proper python soon.

### Creating a Python Script

Now is the time to create your script. I use a `projects` folder, following this [version control tutorial](/meta/version-control). That means I will be placing my script inside `projects/scripts`, but please place it anywhere convenient.

You can test your python script by quickly adding a `hello_world` print and running it. At this point, I also paste in my prepared JSON snippet, as a comment:\

```py

# "$folder.$sound:": {
#     "category": "$category",
#     "sounds": [
#         "sounds/$folder/$sound"
#     ]
# }

print("Hello world!")
```

### Creating a processing function

I think it is always a good idea to work with functions. Functions are a nice abstraction and allow us to break out work into meaningful chunks. Since we have three variables, let's create a function that takes three variables. For testing, we can print these variables out:

```py
def create_sound_definition(folder, sound, category):
    print("Folder: " + folder)
    print("Sound: " + sound)
    print("Category: " + category)

create_found_definition("Example Folder", "A sound for testing", "Some category :)")
```

### Outputting proper json

Now that we have our process function and test case, let's update the function to print actual JSON. We will be using the `.format` specifier for python strings, as well as multiline strings. These are hugely helpful for generating JSON! Please read up on these concepts if you aren't familiar.

```py
def create_sound_definition(folder, sound, category):
    print("""
        "{0}.{2}:": {
            "category": "{2}",
            "sounds": [
                "sounds/{0}/{1}"
            ]
        }
    """.format(folder, sound, category))

create_found_definition("Example Folder", "A sound for testing", "Some category :)")
```

Instead of printing nonsense, we are printing a JSON object with values where we want them!

### Using create_sound_definition

Our goal is to look into the file system and make calls to `create_sound_definition`. Let's make a new function, called `create_sound_definitions` which will handle this task. We will need to import some python modules.

```py
import os

def create_sound_definitions(path):
    paths = [x[0] for x in os.walk(directory)]
    for path in paths:
        print(path)
```

This code will generate a list of paths. If we pass in the sounds folder containing these files:

-   `sounds/dragon/roar.mp4`
-   `sounds/dragon/wing_flap.mp4`

The result would be:

-   `dragon/roar.mp4`
-   `dragon/wing_flap.mp4`

### Structuring our folder

Now, let's go into our sounds folder, and order our files so that all the information we need can be pulled from the folder directly. Let's use this format:

`sounds/category/folder/sound`

For example:

`sounds/ui/dragon/roar`

### String processing

We can use string processing to gather all the information we need out of `create_sound_definitions` strings.

```py
test = "ui/dragon/roar.mp4"
split = test.split("/")
category = split[0]
folder = split[1]
sound = split[2]
```

### Sorry, I will write more soon!

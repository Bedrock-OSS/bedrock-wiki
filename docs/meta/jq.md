---
layout: page
title: Building and Editing JSON with jq
parent: Knowledge
---

# Building and Editing JSON with jq

## Introduction

> "jq is like sed for JSON data - you can use it to slice and filter and map and transform structured data with the same ease that sed, awk, grep and friends let you play with text."

_— https://stedolan.github.io/jq/_

jq is a JSON editing program written in C. It can be thought of similarly to Perl. Because it was explicitly written to parse JSON, however, it has many valuable features that are not present in other text processors. jq defines its programs as filters, as they take an input, your JSON data, and produce an output, your modified JSON data. Though seemingly simple, jq contains many advanced features that can be extremely useful when procedurally generating addon files.

I'll be explaining jq from the perspective that jq is a command-line interface. However, wrappers have been designed for jq in essentially every programming language, so you can easily incorporate jq filters into the programing language of your choice, including Go, JavaScript, Java, Ruby, Python, and R. Given that, I will primarily focus on filter design from the perspective of Minecraft addons, and I'll leave the implementation to your specific use case. I'll be including embeds from [jqterm.com](https://jqterm.com/?query=.), which uses a JavaScript implementation of jq to display filters in a web browser.

## Getting jq

The official source to download the jq binaries is https://stedolan.github.io/jq/download/. The executables downloaded here should be essentially portable and just "run".

You may also use your system package manager, though if you take this approach, ensure that the version installed is the latest, jq-1.6.

A community-maintained list of the wrappers available for jq in various languages is available [here](https://github.com/fiatjaf/awesome-jq).

## Defining Syntax

### The Dot

The simplest possible filter in jq is the dot (`.`), which will take the input JSON and return it unchanged. jq uses the standardized path notation for JSON files. Consider the following structure of a resource pack manifest:

<JQEmbed content="c35537fac79dfd77cd89551b7487abed?query=." />

### Paths

Here, we see that our `.` filter returns what we expected: the entire JSON file. Now, let's say we wanted to return some specific part of the JSON file, the header UUID, for example. We would then construct a filter that contains the full path to that value. In this case, that would be `.header.uuid`. Let's see that in action:

<JQEmbed content="c35537fac79dfd77cd89551b7487abed?query=.header.uuid" />

### Array Access

We can access arrays in jq similarly to how we would in other languages. Let's say we wanted to return the last number in our minimum engine version array. We would construct the following filter: `.header.min_engine_version[-1]`. Note that, of course, we could also specify the positive position 2 if we always wanted to return to the second position. Simply using empty brackets, `.[]`, will return all array elements in a line separated list. Feel free to play around with this and learn the basics:

<JQEmbed content="c35537fac79dfd77cd89551b7487abed?query=.header.min_engine_version[-1]" />

### Editing Values

Now let's get into the real meat of jq and start manipulating our JSON data. The way we do this is with the plain assignment operator (`=`). There are a few variants of this operator, referred to as update-assignment operators, such as `|=` and `+=`, which you can read more about in jq's official [manual](https://stedolan.github.io/jq/manual/#Assignment), and experiment within the example below:

<JQEmbed content="c35537fac79dfd77cd89551b7487abed?query=.format_version%20%3D%203" />

### The Pipe

Similar to UNIX command-line interfaces, jq makes use of the pipe, `|`. When you use the pipe character, you are essentially telling jq to take the result of your filter on the left of the pipe and run it through the filter to the pipe's right. Let's go back to our array access example, except this time. We will output the entire array apply some filter to the output array. We'll use jq's built-in map function to demonstrate this, which is a handy function as it can be used to apply a specified filter to every value in an input array. We'll add 1 to each value in the minimum engine version array:

<JQEmbed content="c35537fac79dfd77cd89551b7487abed?query=.header.min_engine_version%20%7C%20map%28.%20%2B%201%29" />

### Logical Operations

#### If, Then, Else

Logical statements in jq are essentially written in a human-readable format. They take the form `if A then B else C end`. 'A' in this case could test for a specific value or test if some key exists. More conditions can be added with elif in the form `if A then B elif C then D else E end`. For comparisons, the operators are essentially the same as Molang, utilizing `==`, `!=`, `>`, `>=`, `<`, and `<=`. In the example below, we'll conditionally change the description of the pack based on the format version. If the format version is greater than 1, we'll set the description to "Big Format". Otherwise, we'll leave the description alone:

<JQEmbed content="199ed596c0f7158cdb7d2da8510690c5?query=if%20.format_version%20>%201%20then%20.header.description%20%3D%20%22Big%20Format%22%20else%20.%20end" />

#### And, Or, Not

The operations `and` and `or` are also written in plain English. If we wanted to test for condition 'A' and condition 'B', we'd write `if (A and B) then C else D`.

The operation `not` behaves like a single argument function, which we'll discuss in further depth below. When we pipe some boolean into `not`, it will return the opposite value. We'll demonstrate this by setting our header description to "Little Version" only if both our header version and module version are not greater than 1:

<JQEmbed content="199ed596c0f7158cdb7d2da8510690c5?query=if%20%28.header.version%5B0%5D%20>%201%20and%20.modules%5B0%5D.version%5B0%5D%20>%201%20%7C%20not%29%20%0A%0Athen%20.header.description%20%3D%20%22Little%20Version%22%20else%20.%20end" />

### Variables

Variables can be defined anywhere in filter. When a variable is defined, it is valid for use anywhere downstream in the pipe from where it was initially defined. They are defined in the form: `.input as $var | $var`, which would effectively return `.input`. Any valid JSON type can also serve as an input, such as objects, arrays, strings, and numbers. Take the simple example:

<JQEmbed content="f99c7ad63286e1813cebc4a6dac1df1d?query=%7B%22hello%22%3A%20%22world%22%7D%20as%20%24var%20%7C%20%24var%20%7C%20.hello&slurp=true" />

## Builtin Functions

### Syntax

jq comes with a variety of built-in functions. We've already encountered the function `map` while explaining the pipe. One thing of note regarding jq functions is that their syntax differs depending on the number of arguments they take. Multi-argument functions will take their values enclosed in parentheses and separated by semicolons. In contrast, for single-argument functions, the input is piped in. Take the example below, in which we use the multi-argument function pow to raise the format version to the third power, while we also use the single argument function sqrt to find the square root of the format version. In this example, you'll also note that we introduce the concept of building an entirely new JSON structure within our jq filter. This is extremely useful in situations where we'd like to reshape some input files somehow. It's always important to keep in mind that any valid JSON is valid anywhere in a jq filter:

<JQEmbed content="c35537fac79dfd77cd89551b7487abed?query=%7B%0A%20%20%22multi-argument%22%3A%20pow%28.format_version%3B%203%29%2C%0A%20%20%22single-argument%22%3A%20.format_version%20%7C%20sqrt%0A%7D" />

### Math

jq incorporates C-style math functions and generally carries over all built-in C math functions from your system. Refer to the [manual](https://stedolan.github.io/jq/manual/#Math) for a complete list of these.

### Map and Map Values

We've already seen a bit of what `map` can do, as seen in the pipe section. I'll explain a bit about its cousin, `map_values`. While `map` can apply some filter to all values in an array, `map_values` apply some filter to all keys in an input list of objects. In the example below, I'll introduce `map_values` and a couple of extra functions. Our goal will be to substitute the string "Example" with "Production" by iterating through all the values with the typed string under the header. We must separate the string values from the array values, as we cannot perform the function we will use to make this substitution, `gsub`, on arrays. The function `gsub` is a multi-argument function that will take the substring we would like to change, followed by the result we'd like to change that substring to. We'll also be utilizing the `select` function to separate our strings from our arrays. We'll incorporate a variable so we have easy access to all the information contained in the header. We'll use the function `type`, which lets us check the JSON data type of input.

<JQEmbed content="199ed596c0f7158cdb7d2da8510690c5?query=.header%20as%20%24header%20%7C%0A.header%20%3D%20%28%24header%20%7C%20map_values%28%28select%28type%20%3D%3D%20%22string%22%29%20%7C%20gsub%28%22Example%22%3B%20%22Production%22%29%29%29%29%20%2B%20%28%24header%20%7C%20map_values%28select%28type%20!%3D%20%22string%22%29%29%29" />

### To and From Entries

The function `to_entries` is a useful single argument jq builtin that is helpful when we'd like to rearrange keys and values. Let's say we wanted to invert all the key/value pairs in the header. Using `to_entries`, we'll construct an array of all key-value pairs in the header, reformatted as objects, and assigned "key" or "value" to reference them later. To understand how this function works, it's important to see what this intermediate looks like. Note that this can also be reversed by appending `from_entries`:

<JQEmbed content="199ed596c0f7158cdb7d2da8510690c5?query=.header%20%7C%20to_entries" />

Now, we'll use `map` to iterate through each array entry, and finally, we'll introduce a new function, add. This single-argument function will take the array of objects output by `map` and essentially move them up one level to again exist as key-value pairs under the header. We'll also need to convert all our values to strings so they can serve as keys. We'll use the single-argument function `tostring`. Note that `tonumber` is the inverse of this:

<JQEmbed content="199ed596c0f7158cdb7d2da8510690c5?query=.header%20%3D%20%28.header%20%7C%20to_entries%20%7C%20map%28%7B%28.value%20%7C%20tostring%29%3A%20.key%7D%29%20%7C%20add%29" />

### Walk

The function `walk` is compelling, as it will recursively apply to everything in the input at all levels. Take the example of deleting all objects with the value null. We'll also be introducing the function `with_entries`, which is just a shorthand for `to_entries | map(some filter) | from_entries`. We'll start our filter with `walk`, indicating we want to go through everything. We'll then use an if statement to ensure we are only editing objects. Else we'll leave the input unchanged. For all objects, we'll use `with_entries` to convert those to mapped keys and values and run a `select` function on those to ensure we only carry on values that are not equal to null:

<JQEmbed content="ef243c5bcf9cfedf561f351b34947f76?query=walk%28if%20type%20%3D%3D%20%22object%22%20then%20with_entries%28select%28.value%20!%3D%20null%29%29%20else%20.%20end%29" />

### Further Reading

Jq has far too many functions to list off here. I've tried to explain those that I find most useful in my jq projects. For further reading, refer to the [jq manual](https://stedolan.github.io/jq/manual/).

## Defining Custom Functions

In jq, one can easily define custom functions with the syntax `def function_name($input1; $input2): some function;`. The variables can then be used all throughout the function. A function can also have no input. Take the boiler plate examples below:

<JQEmbed content="938c5245d17516df7cf8f46c9fd6a525?query=def%20test_func%28%24input1%3B%20%24input2%29%3A%0A%28%24input1%20%2B%20%24input2%29%0A%3B%0A%0Adef%20no_input%3A%0A%281%20%2B%201%29%0A%3B%0A%0A%7B%28test_func%28%22combined%22%3B%20%22Strings%22%29%29%3A%20%28no_input%29%7D" />

## Command Line Use

When invoked from the command line, jq takes the form `jq '[filter]' input.json`. This will only display the output in the terminal. For bash-based systems, simply use the arrow operator, `jq '[filter]' input.json > output.json` to write an output file. If you wish to overwrite the input file on the fly, this method will not work. You will need to generate a temp file or use a utility like Sponge from [moreutils](https://rentes.github.io/unix/utilities/2015/07/27/moreutils-package/). Then, you may simply `jq '[filter]' input.json | sponge input.json`. For large filters, it's generally easier to employ a shell or bash script. You may use the -n flag to construct a JSON file from scratch rather than specify an input. Finally, you may pass terminal variables to be used in your jq filters as follows:

```
jq -n --arg jqvar1 $var1 --arg jqvar2 $var2 '
{
"var1": $jqvar1,
"var2": $jqvar2
}'
```

## Bringing It All Together

Many of the previous examples are abstract and contrived, designed to allow you to become familiar with the basics of jq. Now, I'd like to go over an example of a practical use case of jq. I'll be explaining the jq filter I wrote for converting a Java model to a Bedrock model for use as an attachable while remapping all its UV values.

First, we'll define a simple variable to change the name of our model geometry easily. Next, we'll define a function to deal with our elements, `element_array`. We'll first get some information from the array of textures from our Java model to know how many textures we have, what order they're in, and therefore how to shift our UV values. Now that we've defined all our variables from our texture array, which we'll use later in UV calculations, we'll start to map our elements array.

Iterating through each element in our array of elements, we'll calculate our origin and size. We can use simple math from jq to do this. To go from Java to Bedrock, we'll need to change 2 absolute corner positions to one origin value and one size value. We'll also shift our X and Z coordinates by 8 to account for the different centering of coordinate systems between Bedrock and Java.

Now, we'll deal with rotation. The way Java defines its rotations uses a string followed by a value, but we'd like to construct an array based on that. We can do so with a reasonably simple if, then, else statement. Since rotation is optional, we'll just set that to null for now if we don't have a rotation. We can delete that later. Next, we'll set the element pivot, shifting by 8 on the X and Z due to the coordinate difference and setting to null if we lack a pivot.

We will then calculate our UV values. I wish to shift all our UV's as if we are generating a single square texture atlas from our input textures. We'll define a nested function, `uv_calc`, here. We'll then use some modular division via the `fmod` function to figure out the offsets. Finally, we'll change Java's four coordinate style UV system to Bedrock's, which uses a point value and a size value, with simple arithmetic. We'll then run the function for each of the six faces of our element, and finally, use `walk` to remove any objects with the value null.

To make our geometry compatible with custom blocks, we'll define the function `pivot_groups`, which we'll ultimately use to iterate over our element array, find all unique rotation pivot combinations, and create a bone for all elements that share a rotation-pivot variety.

Lastly, we'll put down the structure of our actual geometry file. We'll concatenate in our model name, use our `element_array` function to bring in all our cubes with no rotation, and add in our special pivot groups. We'll use the map to give each group a unique name, iterating up one value each time.

This filter is a little heavy, so I've linked it on a separate page rather than embedding it [here](https://jqterm.com/85a349e33fd8709ceb0c64be6b63c497?query=%22test%22%20as%20%24model_name%20%7C%0A%0Adef%20element_array%3A%0A%20%20%20%20%28.textures%20%7C%20to_entries%20%7C%20sort_by%28.key%29%20%7C%20map%28%7B%28.key%29%3A%20.value%7D%29%20%7C%20add%20%7C%20keys_unsorted%29%20as%20%24texture_array%0A%20%20%20%20%7C%20%28%24texture_array%20%7C%20length%29%20as%20%24frames%0A%20%20%20%20%7C%20%28%28%24frames%20%7C%20sqrt%29%20%7C%20ceil%29%20as%20%24sides%0A%20%20%20%20%7C%20%28.texture_size%5B1%5D%20%2F%2F%2016%29%20as%20%24t1%0A%20%20%20%20%7C%20.elements%20%7C%20map%28%7B%0A%20%20%20%20%20%20%22origin%22%3A%20%5B%28-.to%5B0%5D%20%2B%208%29%2C%20%28.from%5B1%5D%29%2C%20%28.from%5B2%5D%20-%208%29%5D%2C%0A%20%20%20%20%20%20%22size%22%3A%20%5B.to%5B0%5D%20-%20.from%5B0%5D%2C%20.to%5B1%5D%20-%20.from%5B1%5D%2C%20.to%5B2%5D%20-%20.from%5B2%5D%5D%2C%0A%20%20%20%20%20%20%22rotation%22%3A%20%0A%20%20%20%20%20%20%28if%20%28.rotation.axis%29%20%3D%3D%20%22x%22%20then%20%5B%28.rotation.angle%20%7C%20tonumber%20*%20-1%29%2C%200%2C%200%5D%20%0A%20%20%20%20%20%20%20%20elif%20%28.rotation.axis%29%20%3D%3D%20%22y%22%20then%20%5B0%2C%20%28.rotation.angle%20%7C%20tonumber%20*%20-1%29%2C%200%5D%20%0A%20%20%20%20%20%20%20%20elif%20%28.rotation.axis%29%20%3D%3D%20%22z%22%20then%20%5B0%2C%200%2C%20%28.rotation.angle%20%7C%20tonumber%29%5D%20%0A%20%20%20%20%20%20%20%20else%20null%20end%29%2C%0A%20%20%20%20%20%20%22pivot%22%3A%20%28if%20.rotation.origin%20then%20%5B%28-%20.rotation.origin%5B0%5D%20%2B%208%29%2C%20.rotation.origin%5B1%5D%2C%20%28.rotation.origin%5B2%5D%20-%208%29%5D%20else%20null%20end%29%2C%0A%20%20%20%20%20%20%22uv%22%3A%20%28%0A%20%20%20%20%20%20%20%20def%20uv_calc%28%24input%29%3A%0A%20%20%20%20%20%20%20%20%20%20%28if%20%28.faces%20%7C%20.%5B%24input%5D%29%20then%0A%20%20%20%20%20%20%20%20%20%20%28.faces%20%7C%20.%5B%24input%5D.texture%5B1%3A%5D%20as%20%24input_n%20%7C%20%24texture_array%20%7C%20%28index%28%24input_n%29%20%2F%2F%20index%28%22particle%22%29%29%29%20as%20%24pos_n%0A%20%20%20%20%20%20%20%20%20%20%7C%20%28%28.faces%20%7C%20.%5B%24input%5D.uv%5B0%5D%20%2F%20%24sides%29%20%2B%20%28%28fmod%28%24pos_n%3B%20%24sides%29%29%20*%20%2816%20%2F%20%24sides%29%29%29%20as%20%24fn0%0A%20%20%20%20%20%20%20%20%20%20%7C%20%28%28.faces%20%7C%20.%5B%24input%5D.uv%5B1%5D%20%2F%20%24sides%29%20%2B%20%28%28%28%24pos_n%20%2F%20%24sides%29%20%7C%20floor%29%20*%20%2816%20%2F%20%24sides%29%29%29%20as%20%24fn1%0A%20%20%20%20%20%20%20%20%20%20%7C%20%28%28.faces%20%7C%20.%5B%24input%5D.uv%5B2%5D%20%2F%20%24sides%29%20%2B%20%28%28fmod%28%24pos_n%3B%20%24sides%29%29%20*%20%2816%20%2F%20%24sides%29%29%29%20as%20%24fn2%0A%20%20%20%20%20%20%20%20%20%20%7C%20%28%28.faces%20%7C%20.%5B%24input%5D.uv%5B3%5D%20%2F%20%24sides%29%20%2B%20%28%28%28%24pos_n%20%2F%20%24sides%29%20%7C%20floor%29%20*%20%2816%20%2F%20%24sides%29%29%29%20as%20%24fn3%20%7C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22uv%22%3A%20%5B%28%24fn0%29%2C%20%28%24fn1%29%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22uv_size%22%3A%20%5B%28%24fn2%20-%20%24fn0%29%2C%20%28%24fn3%20-%20%24fn1%29%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%20else%20null%20end%29%3B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22north%22%3A%20uv_calc%28%22north%22%29%2C%0A%20%20%20%20%20%20%20%20%22south%22%3A%20uv_calc%28%22south%22%29%2C%0A%20%20%20%20%20%20%20%20%22east%22%3A%20uv_calc%28%22east%22%29%2C%0A%20%20%20%20%20%20%20%20%22west%22%3A%20uv_calc%28%22west%22%29%2C%0A%20%20%20%20%20%20%20%20%22up%22%3A%20uv_calc%28%22up%22%29%2C%0A%20%20%20%20%20%20%20%20%22down%22%3A%20uv_calc%28%22down%22%29%0A%20%20%20%20%20%20%20%20%7D%29%0A%20%20%20%20%7D%29%20%7C%20walk%28%20if%20type%20%3D%3D%20%22object%22%20then%20with_entries%28select%28.value%20!%3D%20null%29%29%20else%20.%20end%29%3B%0A%0Adef%20pivot_groups%3A%0A%20%20%20%20%28element_array%29%20as%20%24element_array%20%7C%0A%20%20%20%20%5B%5B.elements%5B%5D.rotation%5D%20%7C%20unique%20%7C%20.%5B%5D%20%7C%20select%20%28.!%3Dnull%29%5D%0A%20%20%20%20%7C%20map%28%28%0A%20%20%20%20%5B%28-%20.origin%5B0%5D%20%2B%208%29%2C%20.origin%5B1%5D%2C%20%28.origin%5B2%5D%20-%208%29%5D%20as%20%24i_piv%20%7C%0A%20%20%20%20%28if%20%28.axis%29%20%3D%3D%20%22x%22%20then%20%5B%28.angle%20%7C%20tonumber%20*%20-1%29%2C%200%2C%200%5D%20%0A%20%20%20%20%20%20elif%20%28.axis%29%20%3D%3D%20%22y%22%20then%20%5B0%2C%20%28.angle%20%7C%20tonumber%20*%20-1%29%2C%200%5D%20%0A%20%20%20%20%20%20else%20%5B0%2C%200%2C%20%28.angle%20%7C%20tonumber%29%5D%20end%29%20as%20%24i_rot%20%7C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22parent%22%3A%20%22geysercmd_z%22%2C%0A%20%20%20%20%20%20%22pivot%22%3A%20%28%24i_piv%29%2C%0A%20%20%20%20%20%20%22rotation%22%3A%20%28%24i_rot%29%2C%0A%20%20%20%20%20%20%22mirror%22%3A%20true%2C%0A%20%20%20%20%20%20%22cubes%22%3A%20%5B%28%24element_array%20%7C%20.%5B%5D%20%7C%20select%28.rotation%20%3D%3D%20%24i_rot%20and%20.pivot%20%3D%3D%20%24i_piv%29%29%5D%0A%20%20%20%20%7D%29%29%3B%0A%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22format_version%22%3A%20%221.16.0%22%2C%0A%20%20%20%20%20%20%22minecraft%3Ageometry%22%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%22description%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22identifier%22%3A%20%28%22geometry.geysercmd.%22%20%2B%20%28%24model_name%29%29%2C%0A%20%20%20%20%20%20%20%20%20%20%22texture_width%22%3A%2016%2C%0A%20%20%20%20%20%20%20%20%20%20%22texture_height%22%3A%2016%2C%0A%20%20%20%20%20%20%20%20%20%20%22visible_bounds_width%22%3A%204%2C%0A%20%20%20%20%20%20%20%20%20%20%22visible_bounds_height%22%3A%204.5%2C%0A%20%20%20%20%20%20%20%20%20%20%22visible_bounds_offset%22%3A%20%5B0%2C%200.75%2C%200%5D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%22bones%22%3A%20%28%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22geysercmd%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22binding%22%3A%20%22c.item_slot%20%3D%3D%20%27head%27%20%3F%20%27head%27%20%3A%20q.item_slot_to_bone_name%28c.item_slot%29%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22pivot%22%3A%20%5B0%2C%208%2C%200%5D%0A%20%20%20%20%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22geysercmd_x%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22parent%22%3A%20%22geysercmd%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22pivot%22%3A%20%5B0%2C%208%2C%200%5D%0A%20%20%20%20%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22geysercmd_y%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22parent%22%3A%20%22geysercmd_x%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22pivot%22%3A%20%5B0%2C%208%2C%200%5D%0A%20%20%20%20%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22geysercmd_z%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22parent%22%3A%20%22geysercmd_y%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22pivot%22%3A%20%5B0%2C%208%2C%200%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%22cubes%22%3A%20%5B%28element_array%20%7C%20.%5B%5D%20%7C%20select%28.rotation%20%3D%3D%20null%29%29%5D%0A%20%20%20%20%20%20%20%20%7D%5D%20%2B%20%28pivot_groups%20%7C%20map%28del%28.cubes%5B%5D.rotation%29%29%20%7C%20to_entries%20%7C%20map%28%20%28.value.name%20%3D%20%22rot_%5C%281%2B.key%29%22%20%29%20%7C%20.value%29%29%29%0A%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D).

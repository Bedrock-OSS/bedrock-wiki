---
title: Molang
tags:
    - intermediate
mentions:
    - yanasakana
    - TheDoctor15
    - MedicalJewel105
    - DoubleShotgun
    - Lufurrius
    - TheItsNameless
    - QuazChick
description: Learn about the basics of Molang.
---

## Introduction

Pretty much everything evaluates to a number; if something doesn't evaluate to a number, you can use an `operator` to make it into one. You can basically just think of Molang as one big math equation.

An equation evaluates to `true` when any number except `0` is returned. When I reference `returning`, I'm talking about the output of an equation. There is also a `return` statement, but I don't usually use it, and will therefore not be talking about it.

## Accessing Values

There are three main ways to access and use values in Molang (queries, variables and temp variables)

-   **Queries** are read only values returned by the game. You cannot set these values, only read them. (`query.example_query` | `q.example_query`)

-   **Variables** are read and write values that you can manipulate, these can be set and read through Molang. (`variable.example_variable` | `v.example_variable`)

    -   There are also hard-coded variables which act practically the same way as queries, but can only be used in certain situations.

-   **Temp. Variables** are practically the same as variables, except they only exist in the current scope. (`temp.example_temp` | `t.example_temp`)
    -   A "scope" can refer to the current `for_each` or `loop` _or_ just the current expression, if it's not used within either

## Handling values

-   **Logical Operators** can be used to convert non-numbers into 1s or 0s. These include: `==`, `!=`, `<`, `>`, `<=`, `>=`.

    -   Example.) "`q.property('wiki:size') == 'small'`" Will evaluate to `1`/`true` when the entity's `wiki:size` property is set to `small`.

    -   There is also a _second_ set of _Logical Operators_ which can be used to 'group' values into `and/or` statements, often used in cases where you need _multiple_ things to evaluate to `true` or just _one out of many_. `&&` represents an `and` statement, and `||` represents an `or` statement.
        -   Example.) "`q.is_sneaking && q.is_using_item`" Will evaluate to `1`/`true` when sneaking _and_ using an item
        -   Example.) "`q.is_sneaking || q.is_jumping`" // Evaluates to `1`/`true` when either jumping _or_ sneaking

-   **Parentheses**, `( )`, are also a major help when grouping values or performing math operations.

    -   Example.) "`q.is_angry && (q.property('wiki:size') == 'medium' || q.property('wiki:size') == 'large')`" Will evaluate to `1`/`true` when angry _and_ `wiki:size` is `medium` _or_ `large`.

-   **Conditional Operators** can be used as `if/else` statements.
    -   A _binary_ conditional operator refers to just using `?`. When this is used, it'll output your value or `0` depending on whether the given input value is `true`.
        -   Example.) "`q.is_sneaking ? 5`" Will output a `5` when sneaking, otherwise returning a `0`
    -   A _trinary_ conditional operator refers to using `?` and `:`. When this is used, it'll output one of the two given values depending on whether your given input value is `true`.
        -   Example.) "`q.is_sneaking ? 10 : 3`" Will output a `10` when sneaking, otherwise returning a `3`

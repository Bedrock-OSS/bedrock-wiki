---
title: Molang
tags:
    - intermediate
mentions:
    - yanasakana
    - TheDoctor15
    - MedicalJewel105
    - DoubleShotgun
    - Luthorius
    - TheItsNameless
---

## Introduction
Pretty much everything evaluates to a number; if something doesn't evaluate to a number, you can use an `operator` to make it into one. You can basically just think of Molang as one big math equation.

An equation evaluates to `true` when any number except `0` is returned. When I reference `returning`, I'm talking about the output of an equation. There is also a `return` statement, but I don't usually use it, and will therefore not be talking about it.

## Accessing Values
There are three main ways to access and use values in Molang (queries, variables and temp variables)

- **Queries** are read only values returned by the game. You cannot set these values, only read them. (`query.example_query` | `q.example_query`)

- **Variables** are read and write values that you can manipulate, these can be set and read through Molang. (`variable.example_variable` | `v.example_variable`)
    - There are also hard-coded variables which act practically the same way as queries, but can only be used in certain situations.

- **Temp. Variables** are practically the same as variables, except they only exist in the current scope. (`temp.example_temp` | `t.example_temp`)
    - A "scope" can refer to the current `for_each` or `loop` *or* just the current expression, if it's not used within either

## Handling values

- **Logical Operators** can be used to convert non-numbers into 1s or 0s. These include: `==`, `!=`, `<`, `>`, `<=`, `>=`.
    - Example.) "`q.get_equipped_item_name == 'stick'`" Will evaluate to `1`/`true` when holding a stick

    - There is also a *second* set of *Logical Operators* which can be used to 'group' values into `and/or` statements, often used in cases where you need *multiple* things to evaluate to `true` or just *one out of many*. `&&` represents an `and` statement, and `||` represents an `or` statement.
        - Example.) "`q.is_sneaking && q.is_using_item`" Will evaluate to `1`/`true` when sneaking *and* using an item
        - Example.) "`q.is_sneaking || q.is_jumping`" // Evaluates to `1`/`true` when either jumping *or* sneaking

- **Parentheses**, `( )`, are also a major help when grouping values or performing math operations.
    - Example.) "`q.is_sneaking && (q.get_equipped_item_name == "stick" || q.get_equipped_item_name == "diamond")`" Will evaluate to `1`/`true` when sneaking *and* holding either a stick *or* a diamond

- **Conditional Operators** can be used as `if/else` statements. 
    - A *binary* conditional operator refers to just using `?`. When this is used, it'll output your value or `0` depending on whether the given input value is `true`. 
        - Example.) "`q.is_sneaking ? 5`" Will output a `5` when sneaking, otherwise returning a `0`
    - A *trinary* conditional operator refers to using `?` and `:`. When this is used, it'll output one of the two given values depending on whether your given input value is `true`.
        - Example.) "`q.is_sneaking ? 10 : 3`" Will output a `10` when sneaking, otherwise returning a `3`


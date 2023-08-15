---
title: Advanced Molang
toc_max_level: 2
mentions:
    - Ciosciaa
    - TheItsNameless
---

## Values

- All expressions in Molang return a value for the sake of checks against equality. Most expressions return `0`. Notably, assignments return the value assigned and loops return the resolved value of the looping statements, if one would exist.
- All values in Molang are effectively single-precision floats.
- `this` is used to refer to the field's current value as it accumulated during evaluation. It is only observed to be usable in animations, but it may be usable elsewhere. As an example, if the accumulated transformations on the `x` `scale` of a bone would yield `62`, a final animation with a `x` `scale` of `-this` would resolve to `-62`, unsetting the prior transformations. This is used in vanilla animations in a number of places. Outside of animation contexts, `this` appears to always resolve to `0`.

### Booleans

- Booleans are usable in Molang. `true` resolves to `1`, and `false` resolves to `0`.

### Numbers

- You can use leading `0`s in front of numbers, for example, to line them up better in your code.
- Numbers can use exponential notation, such as `2.5e2`, which would be equal to 250. `e` can be suffixed with `+` or `-` to direct the power.
- Numbers may be suffixed with a single `f`, often used to denote a floating point value. This can be found across vanilla code, but it is not believed to have any functionality.

### Strings

- Strings use `\` (`\\` in escaped JSON) as some sort of escape or perhaps something else. It is unknown what functionality this has. It is known that the subsequent 2 characters are handed off to their own sub-parser, which does not exit correctly on a closing `'`; this means the Molang string `"v.type = '\\x';"` is invalid. `'`, which is normally disallowed on its own as it would represent the end of the string, is allowed in the 2 characters following a `\`.
- String values are (mostly) incremental as they are represented against floats. It is possible to compare 2 individual character strings using equality or comparison operators or even to effectively "adjust" the contents of a single-character string. Multi-character behavior of such is unknown.

## Operators

The complete precedence list, from first to last evaluated:

1. `()` and `[]`
2. `->`
3. `!` and `-` (unary negation)
4. `*` and `/`
5. `+` and `-` (binary subtraction)
6. `<`, `<=`, `>`, and `>=`
7. `==` and `!=`
8. `&&`
9. `||`
10. `?` and `? :`
11. `??`
12. `=`
13. `return`

- Operators are considered from left to right for all operators except the conditionals.
- Multiple `->` cannot be used in the same statement.
- Logical operators short-circuit.

## Statements

- Assignments return the value assigned. You can therefore chain assignments if you need separate variables to work with from a single value, such as with `v.iterator_x = (v.iterator_z = math.random_integer(16, 32));`.
- The last statement inside a brace scope does not need to end with a `;`.
- Brace scopes can be used anywhere an expression can be used. `v.spawn_point ?? {v.target = false;};`, for example, would set `v.target` to `false` if `v.spawn_point` were not defined.

## Collections

- Entity iterables (such as the result of `q.get_nearby_entities`) are their own "type". They are not compatible with subscripts.
- Arrays, likewise, are not compatible with entity iterable operations, such as `q.count`.
- The result of array subscripts cannot directly be an argument to `+`, `-`, `*`, or `/` but may still be used directly as function parameters (even math functions) or with other operators.

## Evaluation

- `initialize` and `pre_animation` are lazily concatenated. Molang strings in these arrays must be syntactically valid independently, but the basic concatenation of all independent strings must also be a valid Molang input.

## Limits

- Molang showed no reasonable limits to any language functionality, aside from numeric size. Loop counts, string lengths, Molang input length, collection size, etc., were observed to hold in very unreasonable situations.
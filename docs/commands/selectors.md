---
title: Understanding Selectors
---

Selectors are what you use in commands to target who or what you want to execute a command at. The basic target selectors are
`@e` - Target all entities `@s` - Target yourself, or the origin who the command is executed at `@a` - Target every player `@r` - Target a random player.

Examples are as followed
```
kill @a
kill @e
kill @r
kill @s
```

## Advanced Selectors

Now we will take a look at the advance selectors so you can be super specific as to what you want to kill and/or execute at. If you didnt know you can kill mobs in a certain radius
and make it only say zombies, and only kill one. This is going to be what we use as an example. In order to do this we must add `[]` at the end of the selector wich will be `@e` so 
we will have `kill @e[]`. In the brakets is where we put the targets, we will make it a radius of 10, radius means the distance in wich you can reach with the command and radius is r,
so we will start with `kill @e[r=10]`. This will now kill ONLY all entities in a 10 block radius. now lets add the mob type, we can do this with `type` and in order to add another
selector we just have to put a comma, so we now have `kill @e[r=10, type=zombie]`. Now lets add a counter, so we can only kill 1 zombie, we can do this with `c`, so we do the same
thing we did with type, and add a comma, so add `c=1`. Congrats! You now have `kill @e[r=10, type=zombie, c=1]` and have killed a zombie within 10 blocks of you!

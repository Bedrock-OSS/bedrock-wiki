---
title: Understanding Selectors
mention:
  - Science-geek42
  - Brougud
---

Selectors are used in commands to target where you want to execute a command at. The primary target selectors are:
-   `@e` - Target all entities 
-   `@s` - Target yourself, or the origin who the command is executed from
-   `@p` - Target the nearest player
-   `@a` - Target every player
-   `@r` - Target a random player

Examples are as follows
```
#kill every player
kill @a 
#kill every loaded entity
kill @e 
#kill a random player
kill @r
#kill the executor of the command
kill @s
#kill the nearest player
kill @p
```

## Secondary Selectors

Now we will take a look at the secondary selectors so you can be specific in regard to what you want to execute the command on. In order to use any of the following secondary selectors, you must first have a primary selector. To start with secondary selectors you must add brackets `[]` to the end of the chosen selector like this `kill @e[]`. There are many secondary selectors you can use so let's start.

-  `kill @e[c=<count>]` Where `<count>` is the number you want. The selector `c` stands for count. It allows you to choose how many entities to select. For example, the command `/kill @e[c=4]` will kill four entities. The selector `c` will target in a specific order depending on how it is used. If the selector used is `@r` then `c` will target randomly E.g. `/kill @r[c=4]` will kill four random players. if `@r` is not used then c will kill from nearest to farthest unless the number given is negative. `kill @e[c=4]` will kill four entities nearest to farthest `kill @e[c=-4]` will still kill four entities but from farthest to nearest.
- `kill @e[name=<name>]` The selector `name` selects only entities with the name put in the place of `<name>`. If `=!` is used in place of `=` the selector will target entities without the name. 
- `kill @e[l=<level>]` The selector `l` will target any players with an exp level equal to or greater than the value put in place of `<level>`.
- `kill @e[lm=<levelm>]` The selector `lm` will target any players with an exp level equal to or lower than the value put in place of `<levelm>`.
- `kill @e[m=<gamemode>]` The selector `m` will target any players who are in the mode put in place of `<gamemode>`. Possible values are: `survival`, `s`, and `0`, `creative`, `c`, and `1`, `adventure`, `a`, and `2`.  If =! is used in place of = the selector will target players who are not in the selected mode. 
- `kill @e[tag=<tag>]` The selector `tag` will target any entities with the tag put in place of `<tag>`. If `=!` is used in place of `=` the selector will target entities without the tag. 
- `kill @e[r=<radius>]` The selector `r` will target any players whose distance in blocks from the location of the command execution is equal to or less than the value put in place of `<radius>`.
- `kill @e[rm=<radiusm>]` The selector `rm` will target any players whose distance in blocks from the location of the command execution is equal to or greater than the value put in place of `<radiusm>`. 
- `kill @e[x=<x>,y=<y>,z=<z>]` These selectors must all be present together or not be there for a command to work. They do nothing by themselves but they modify other secondary selectors. They can modify `dx`, `dy`, `dz`, `rm`, `r`, and `c`. All of those previous selectors use a central starting location which can be set using `x`, `y`, and `z`. Otherwise, the starting location will be set to the position of the executor of the command. Tildes ~ can be used in place of numbers for `x`, `y`, and `z`.
- `kill @e[dx=<dx>,dy=<dy>,dz=<dz>]` These selectors must all be present together or not be there for a command to work. These selectors check if a player is in a volume. Starting at the location of the executor of the command `dx` will add the value put in `<dx>` to the x position to make a point. when `dx`, `dy`, and `dz` are used together they identify a point relative to the executor of the command. All entities within a box drawn between the executor of the command and the point made are selected.
- `kill @e[type=<type>]` This selector chooses the type of entity to be selected. The names of any entity can be replaced for `<type>` to choose the selection. If `type` is used with `@r` instead of  `@r` selecting players `@r` will select the entity put in the place of `<type>`. This allows you to randomly select an entity of a specific type.  If `=!` is used in place of `=` this selector will target entities other than the type. ‌
- `kill @e[family=<family>]` This selector will select entities that are in the family put in place of `<family>`. This could be many things, `creeper` for all creepers, `monster` for any monster, `undead` for any undead mob, `mob` for any well... mob. If `=!` is used in place of `=` the selector will target entities not in the family. 
- `kill @e[scores={<scoreboard>=<score>}]` This selector can read the score that a entity has from a scoreboard. In the place of `<scoreboard>` goes the name of the scoreboard you wish to test. In the place of `<score>` can go many things. If you want to check for a score of 10 just replace `<score>` with a 10. To invert a score selector use `=!` instead of `=`. You have to use `..` for checking between, above, and below a value(s). Think of `..` as the words "between" and "continue" it helps a lot. 
   - `10..` is any number above or equal to ten.
   - `..10` is any number below or equal to ten.
   - `5..10` is any number between five and ten.
- `kill @e[rx=<xrotation>]` The selector `rx` will target any entities with a rotation around the x axis equal to or less than the value put in place of `<xrotation>`. -90 would be straight up, 0 is straight horizontal, and 90 is down.
- `kill @e[rxm=<xrotationm>]` The selector `rxm` will target any entities a rotation around the x axis rotation equal to or greater than the value put in place of `<xrotationm>`. -90 would be straight up, 0 is straight horizontal, and 90 is down.
- `kill @e[ry=<yrotation>]` The selector `ry` will target any entities with a rotation around the y axis equal to or less than the value put in place of `<yrotation>`. -180 is north, -90 is east, 0 is south, 90 is west, 180 is north.
- `kill @e[rym=<yrotationm>]` The selector `rym` will target any entities with a rotation around the y axis equal to or greater than the value put in place of `<yrotationm>`. -180 is north, -90 is east, 0 is south, 90 is west, 180 is north.

## Tags

Tags are a way to discriminate towards a player, or group of players and or mobs. Tags can be useful in alot of ways like making a ranks system, and or making a server with a anticheat. Tags can be used in a number of ways, for example, `give @e[tag=steak] cooked_beef` will give everyone with the tag steak, one steak. There are a number of ways you can use tags but we will be looking at the most used options.

- `kill @e[tag=<tag>]` This is how you would kill all the players with your given tag. Its useful if you are making a minigame, and a player were to lose, you could kill them then set there gamemode into something else with a command block.
- `kill @e[tag=!<tag>]` This will kill all of the entities that **DONT** have the tag that you specified.
- `tag @a <add | remove | list> <tag>` This is how you would give, or remove a tag, useing `add` or `remove`. If you want to see what tags a player has then you can do `tag <selector> list`

## Combining Selectors

Secondary selectors can be used together by utilizing commas. Make sure to split each selector into its own part. As an example `@e[type=<type>]` and `@e[name=<name>]` can be combined like this: `@e[type=<type>,name=<name>]`. However, with the `score` selector you must format checks to another scoreboard like this, `@e[scores={<scoreboard>=<score>,<scoreboard2>=<score2>}]`.

## Other Useful Information

There is one more primary selector on bedrock edition which is a very niche case, `@initiator`. When an NPC is set up to have a button run a command, `@initiator` can be used to target the player which clicked the button. Otherwise, `@p` might likely be used and the command might execute on a different player who is nearer to the NPC than the player who clicked the button.

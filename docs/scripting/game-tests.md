---
layout: page
title: Game Tests
parent: Scripting
badge: BETA
badge_color: red
---

# Game Tests

::: tip
The GameTest framework requires you to activate **"Enable GameTest Framework"** in your world settings and you must be using **Minecraft 1.16.210.60 beta or above**
:::

GameTests are a new feature which allow developers to create unit tests to make it easier to test if game mechanics work. They are created with javascript files in the behavior pack folder and each file can register multiple GameTests. Each GameTest must also have an .mcstructure file in the `BP/structures` folder.

It is recommended that your GameTests go in the `BP/scripts/gametests` directory.

[Type declaration files for the GameTest API](https://github.com/bridge-core/editor/tree/dev/data/types/gameTest)

## Using GameTests

In the behavior pack manifest you need to add a `plugin` module where you set an `entry` point for your GameTests.

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
	"format_version": 2,
	"header": {
		"name": "Pack Name",
		"description": "Pack descripton",
		"min_engine_version": [1, 16, 210],
		"uuid": "604420b9-f4c3-4df2-9f09-4364486f1195",
		"version": [1, 0, 0]
	},
	"modules": [
		{
			"description": "",
			"type": "data",
			"uuid": "42651ba5-6619-4547-9d48-84a5a37cf2a3",
			"version": [1, 0, 0]
		},
		{
			"description": "",
			"uuid": "239c134f-67bf-4738-9bcc-8c69d31b1f72",
			"version": [1, 0, 0],
			"type": "plugin",
			"entry": "scripts/gametests/Main.js"
		}
	]
}
```

The entry point should link to a file containing imports to your GameTest files.

<CodeHeader>BP/scripts/gametests/Main.js</CodeHeader>

```js
import 'scripts/gametests/MyGameTest.js'
import 'scripts/gametests/OtherGameTest.js'
```

GameTests can be used with the /gametest command.

-   `/gametest runthis`

Runs the nearest GameTest in range.

-   `/gametest runthese`

Runs all GameTests in range.

-   `/gametest pos`

Tells you the relative coordinates of the nearest GameTest.

-   `/gametest clearall [radius: int]`

Removes all GameTests in the specified radius.

-   `/gametest run <testName: GameTestName> [rotationSteps: int]`

Creates and runs the specified GameTest.

-   `/gametest runset [tagTag: GameTestTag] [rotationSteps: int]`

Creates and runs all GameTests with the specified tag.

-   `/gametest create <testName: string> [width: int] [height: int] [depth: int]`

Creates a blank GameTest area with the specified dimensions.

## Complete examples

```js
// Structure Path: BP/structures/MinecartTests/turn.mcstructure

import * as GameTest from 'GameTest'
import { BlockLocation } from 'Minecraft'

GameTest.register('MinecartTests', 'turn', (test) => {
	const minecartActorType = 'minecart'

	const endPos = new BlockLocation(1, 2, 2)
	const startPos = new BlockLocation(1, 2, 0)

	test.assertEntityPresent(minecartActorType, startPos)
	test.assertEntityNotPresent(minecartActorType, endPos)

	test.pressButton(new BlockLocation(0, 3, 0))

	test.succeedWhenEntityPresent(minecartActorType, endPos)
}).tag(GameTest.Tags.suiteDefault)
```

```js
// Structure Path: BP/structures/DoorTests/four_villagers_one_door.mcstructure

import * as GameTest from 'GameTest'
import { BlockLocation } from 'Minecraft'

GameTest.register('DoorTests', 'four_villagers_one_door', (test) => {
	const villagerActorType = 'minecraft:villager_v2'
	const villagerActorSpawnType =
		'minecraft:villager_v2<minecraft:spawn_farmer>' // Attempt to spawn the villagers as farmers

	test.spawn(villagerActorSpawnType, new BlockLocation(5, 2, 4))
	test.spawn(villagerActorSpawnType, new BlockLocation(4, 2, 5))
	test.spawn(villagerActorSpawnType, new BlockLocation(2, 2, 5))
	test.spawn(villagerActorSpawnType, new BlockLocation(1, 2, 4))

	test.succeedWhen(() => {
		test.assertEntityPresent(villagerActorType, new BlockLocation(5, 2, 2))
		test.assertEntityPresent(villagerActorType, new BlockLocation(5, 2, 1))
		test.assertEntityPresent(villagerActorType, new BlockLocation(1, 2, 2))
		test.assertEntityPresent(villagerActorType, new BlockLocation(1, 2, 1))
	})
})
	.tag(GameTest.Tags.suiteDefault)
	.padding(50) // Space out villager tests to stop them from confusing each other
	.batch('night') // This should be a constant at some point
	.maxTicks(600)
```

# Modules

<a name="modules_gametest"></a>

## Namespace: "GameTest"

### Functions

#### register

▸ **register**(`namespace`: _string_, `identifier`: _string_, `func`: (`test`: [_Test_](#interfacestest)) => _void_): [_TestRunner_](#interfacestestrunner)

Registers a GameTest into Minecraft

##### Parameters:

| Name         | Type                                          | Description                                                                     |
| :----------- | :-------------------------------------------- | :------------------------------------------------------------------------------ |
| `namespace`  | _string_                                      | Namespace of the GameTest. Should match the namespace of the mcstructure file   |
| `identifier` | _string_                                      | Identifier of the GameTest. Should match the identifier of the mcstructure file |
| `func`       | (`test`: [_Test_](#interfacestest)) => _void_ | -                                                                               |

**Returns:** [_TestRunner_](#interfacestestrunner)

<a name="modules_minecraft"></a>

## Namespace: "Minecraft"

### Variables

#### BlockLocation

• `Const` **BlockLocation**: [_BlockPositionClass_](#interfacesblockpositionclass)

---

#### BlockStates

• `Const` **BlockStates**: [_BlockStates_](#interfacesblockstates)

---

#### Blocks

• `Const` **Blocks**: [_Blocks_](#interfacesblocks)

---

#### ItemStack

• `Const` **ItemStack**: [_ItemStackClass_](#interfacesitemstackclass)

---

#### World

• `Const` **World**: [_World_](#interfacesworld)

# Interfaces

<a name="interfacesblock"></a>

## Interface: Block

### Methods

#### setState

▸ **setState**(`state`: [_State_](#interfacesstate)): [_Block_](#interfacesblock)

##### Parameters:

| Name    | Type                        |
| :------ | :-------------------------- |
| `state` | [_State_](#interfacesstate) |

**Returns:** [_Block_](#interfacesblock)

<a name="interfacesblockpos"></a>

## Interface: BlockPos

### Methods

#### above

▸ **above**(): [_BlockPos_](#interfacesblockpos)

Returns the block position it was called on but increases the y coordinate by 1

**Returns:** [_BlockPos_](#interfacesblockpos)

<a name="interfacesblockpositionclass"></a>

## Interface: BlockPositionClass

### Constructors

#### constructor

\+ **new BlockPositionClass**(`x`: _number_, `y`: _number_, `z`: _number_): [_BlockPos_](#interfacesblockpos)

Creates a block position

##### Parameters:

| Name | Type     |
| :--- | :------- |
| `x`  | _number_ |
| `y`  | _number_ |
| `z`  | _number_ |

**Returns:** [_BlockPos_](#interfacesblockpos)

<a name="interfacesblocks"></a>

## Interface: Blocks

### Methods

#### air

▸ **air**(): [_Block_](#interfacesblock)

**Returns:** [_Block_](#interfacesblock)

---

#### get

▸ **get**(`id`: _string_): [_Block_](#interfacesblock)

Fetches the requested block and returns it, if the block doesn't exist, this returns null

##### Parameters:

| Name | Type     | Description                        |
| :--- | :------- | :--------------------------------- |
| `id` | _string_ | The identifier of the block to get |

**Returns:** [_Block_](#interfacesblock)

<a name="interfacesblockstates"></a>

## Interface: BlockStates

### Methods

#### topSlotBit

▸ **topSlotBit**(`data`: _boolean_): [_State_](#interfacesstate)

##### Parameters:

| Name   | Type      |
| :----- | :-------- |
| `data` | _boolean_ |

**Returns:** [_State_](#interfacesstate)

<a name="interfacesdimension"></a>

## Interface: Dimension

<a name="interfacesentity"></a>

## Interface: Entity

### Methods

#### getComponent

▸ **getComponent**(`component`: _string_): [_EntityComponent_](#interfacesentitycomponent)

Returns the component matching the given identifier

##### Parameters:

| Name        | Type     | Description                     |
| :---------- | :------- | :------------------------------ |
| `component` | _string_ | The component identifier to get |

**Returns:** [_EntityComponent_](#interfacesentitycomponent)

---

#### getComponents

▸ **getComponents**(): [_EntityComponent_](#interfacesentitycomponent)[]

Returns an array of supported components

**Returns:** [_EntityComponent_](#interfacesentitycomponent)[]

---

#### getName

▸ **getName**(): _string_

Returns the name of the entity (e.g. "Horse")

**Returns:** _string_

---

#### hasComponent

▸ **hasComponent**(`component`: _string_): _boolean_

Returns true if the given component exists on the entity and is supported

##### Parameters:

| Name        | Type     | Description                           |
| :---------- | :------- | :------------------------------------ |
| `component` | _string_ | The component identifier to check for |

**Returns:** _boolean_

---

#### kill

▸ **kill**(): _void_

Kills the entity

**Returns:** _void_

<a name="interfacesentitycomponent"></a>

## Interface: EntityComponent

### Methods

#### getName

▸ **getName**(): _string_

Returns the name of the component

**Returns:** _string_

---

#### leash

▸ **leash**(`entity`: [_Entity_](#interfacesentity)): _void_

Leashes this entity to another specified entity. This must be used on the "minecraft:leashable" component

##### Parameters:

| Name     | Type                          | Description                        |
| :------- | :---------------------------- | :--------------------------------- |
| `entity` | [_Entity_](#interfacesentity) | The entity to leash this entity to |

**Returns:** _void_

---

#### setColor

▸ **setColor**(`color`: _number_): _void_

Sets the entities color value. This must be used on the "minecraft:color" component

##### Parameters:

| Name    | Type     | Description            |
| :------ | :------- | :--------------------- |
| `color` | _number_ | The color value to set |

**Returns:** _void_

---

#### setTamed

▸ **setTamed**(`particles`: _boolean_): _void_

Sets the entity as tamed

##### Parameters:

| Name        | Type      | Description                         |
| :---------- | :-------- | :---------------------------------- |
| `particles` | _boolean_ | Whether to display taming particles |

**Returns:** _void_

---

#### unleash

▸ **unleash**(): _void_

Causes this entity to detach leashes. This must be used on the "minecraft:leashable" component

**Returns:** _void_

<a name="interfacesitem"></a>

## Interface: Item

<a name="interfacesitemstack"></a>

## Interface: ItemStack

<a name="interfacesitemstackclass"></a>

## Interface: ItemStackClass

### Constructors

#### constructor

\+ **new ItemStackClass**(`item`: [_Block_](#interfacesblock)): [_ItemStack_](#interfacesitemstack)

Creates a an item stack

##### Parameters:

| Name   | Type                        |
| :----- | :-------------------------- |
| `item` | [_Block_](#interfacesblock) |

**Returns:** [_ItemStack_](#interfacesitemstack)

<a name="interfacessequence"></a>

## Interface: Sequence

### Methods

#### thenIdle

▸ **thenIdle**(`time`: _number_): [_Sequence_](#interfacessequence)

Causes the sequence to wait for the specified amount of time

##### Parameters:

| Name   | Type     | Description                    |
| :----- | :------- | :----------------------------- |
| `time` | _number_ | The amount of time to wait for |

**Returns:** [_Sequence_](#interfacessequence)

---

#### thenSucced

▸ **thenSucced**(): _void_

Causes the GameTest to succeed

**Returns:** _void_

<a name="interfacesstate"></a>

## Interface: State

<a name="interfacestest"></a>

## Interface: Test

### Methods

#### assertBlockNotPresent

▸ **assertBlockNotPresent**(`id`: [_Block_](#interfacesblock), `position`: [_BlockPos_](#interfacesblockpos)): _void_

Asserts an error when the specified block is not found at the specified coordinates

##### Parameters:

| Name       | Type                              | Description                                 |
| :--------- | :-------------------------------- | :------------------------------------------ |
| `id`       | [_Block_](#interfacesblock)       | The block to check for                      |
| `position` | [_BlockPos_](#interfacesblockpos) | The relative position to test for the block |

**Returns:** _void_

---

#### assertBlockPresent

▸ **assertBlockPresent**(`id`: _string_, `position`: [_BlockPos_](#interfacesblockpos)): _void_

Asserts an error when the specified block is found at the specified coordinates

##### Parameters:

| Name       | Type                              | Description                                 |
| :--------- | :-------------------------------- | :------------------------------------------ |
| `id`       | _string_                          | The block to check for                      |
| `position` | [_BlockPos_](#interfacesblockpos) | The relative position to test for the block |

**Returns:** _void_

---

#### assertBlockState

▸ **assertBlockState**(`state`: _string_, `data`: _string_ \| _number_, `position`: [_BlockPos_](#interfacesblockpos)): _void_

Asserts an error when the specified block at the specified coordinates has the block state

##### Parameters:

| Name       | Type                              | Description                                 |
| :--------- | :-------------------------------- | :------------------------------------------ |
| `state`    | _string_                          | The block state to test for                 |
| `data`     | _string_ \| _number_              | The value of the state to test for          |
| `position` | [_BlockPos_](#interfacesblockpos) | The relative position to test for the block |

**Returns:** _void_

---

#### assertContainerContains

▸ **assertContainerContains**(`id`: _string_, `position`: [_BlockPos_](#interfacesblockpos)): _void_

Asserts an error if there is a container with the specified item at the specified coordinates

##### Parameters:

| Name       | Type                              | Description                                     |
| :--------- | :-------------------------------- | :---------------------------------------------- |
| `id`       | _string_                          | The item to test for in the container           |
| `position` | [_BlockPos_](#interfacesblockpos) | The relative position of the container to check |

**Returns:** _void_

---

#### assertContainerEmpty

▸ **assertContainerEmpty**(`position`: [_BlockPos_](#interfacesblockpos)): _void_

Asserts an error if there is an empty container at the specified coordinates

##### Parameters:

| Name       | Type                              | Description                                     |
| :--------- | :-------------------------------- | :---------------------------------------------- |
| `position` | [_BlockPos_](#interfacesblockpos) | The relative position of the container to check |

**Returns:** _void_

---

#### assertEntityHasArmor

▸ **assertEntityHasArmor**(`id`: _string_, `slot`: _number_, `item`: _string_, `data`: _number_, `position`: [_BlockPos_](#interfacesblockpos), `bool`: _boolean_): _void_

Asserts an error when the armor is found on the entity at the specified coordinates

##### Parameters:

| Name       | Type                              | Description                                            |
| :--------- | :-------------------------------- | :----------------------------------------------------- |
| `id`       | _string_                          | The identifier of the entity to check for the armor on |
| `slot`     | _number_                          | The slot of the entity to test for the item            |
| `item`     | _string_                          | The item to test for in the specified slot             |
| `data`     | _number_                          | The data value of the item                             |
| `position` | [_BlockPos_](#interfacesblockpos) | The position of the entity to test for the armor       |
| `bool`     | _boolean_                         | Unknown function of parameter...                       |

**Returns:** _void_

---

#### assertEntityHasComponent

▸ **assertEntityHasComponent**(`id`: _string_, `component`: _string_, `position`: [_BlockPos_](#interfacesblockpos), `bool`: _boolean_): _void_

Asserts an error when the specified entity has the component

##### Parameters:

| Name        | Type                              | Description                           |
| :---------- | :-------------------------------- | :------------------------------------ |
| `id`        | _string_                          | The identifier of the entity to test  |
| `component` | _string_                          | The name of the component to test for |
| `position`  | [_BlockPos_](#interfacesblockpos) | The position of the entity to test    |
| `bool`      | _boolean_                         | Unknown function of parameter...      |

**Returns:** _void_

---

#### assertEntityInstancePresent

▸ **assertEntityInstancePresent**(`id`: _string_, `position`: [_BlockPos_](#interfacesblockpos)): _void_

Asserts an error when the specified entity is found at the specified coordinates

##### Parameters:

| Name       | Type                              | Description                                 |
| :--------- | :-------------------------------- | :------------------------------------------ |
| `id`       | _string_                          | The identifier of the entity to check for   |
| `position` | [_BlockPos_](#interfacesblockpos) | The relative position to test for the actor |

**Returns:** _void_

---

#### assertEntityNotPresent

▸ **assertEntityNotPresent**(`id`: _string_, `position`: [_BlockPos_](#interfacesblockpos)): _void_

Asserts an error when the specified entity is not found at the specified coordinates

##### Parameters:

| Name       | Type                              | Description                                 |
| :--------- | :-------------------------------- | :------------------------------------------ |
| `id`       | _string_                          | The identifier of the entity to check for   |
| `position` | [_BlockPos_](#interfacesblockpos) | The relative position to test for the actor |

**Returns:** _void_

---

#### assertEntityPresent

▸ **assertEntityPresent**(`id`: _string_, `position`: [_BlockPos_](#interfacesblockpos)): _void_

Asserts an error when the specified entity is found at the specified coordinates

##### Parameters:

| Name       | Type                              | Description                                 |
| :--------- | :-------------------------------- | :------------------------------------------ |
| `id`       | _string_                          | The identifier of the entity to check for   |
| `position` | [_BlockPos_](#interfacesblockpos) | The relative position to test for the actor |

**Returns:** _void_

---

#### assertEntityPresentInArea

▸ **assertEntityPresentInArea**(`id`: _string_): _void_

Throws an Error if an entity matching the given identifier does not exist in the test region

##### Parameters:

| Name | Type     | Description                             |
| :--- | :------- | :-------------------------------------- |
| `id` | _string_ | The identifer of the entity to test for |

**Returns:** _void_

---

#### assertItemEntityPresent

▸ **assertItemEntityPresent**(`itemStack`: [_ItemStack_](#interfacesitemstack), `position`: [_BlockPos_](#interfacesblockpos), `amount`: _number_): _void_

Asserts an error when the specified item stack is not found at the specified coordinates

##### Parameters:

| Name        | Type                                | Description                                     |
| :---------- | :---------------------------------- | :---------------------------------------------- |
| `itemStack` | [_ItemStack_](#interfacesitemstack) | The item stack to test for                      |
| `position`  | [_BlockPos_](#interfacesblockpos)   | The position to test for the item stack         |
| `amount`    | _number_                            | The amount of items that should be in the stack |

**Returns:** _void_

---

#### failIf

▸ **failIf**(`func`: () => _void_): _void_

When the `func` parameter calls an assert function the GameTest will fail

##### Parameters:

| Name   | Type         |
| :----- | :----------- |
| `func` | () => _void_ |

**Returns:** _void_

---

#### killAllEntities

▸ **killAllEntities**(): _void_

Kills all entities in the test

**Returns:** _void_

---

#### pressButton

▸ **pressButton**(`position`: [_BlockPos_](#interfacesblockpos)): _void_

Presses a button at the specified coordinates if there is one there

##### Parameters:

| Name       | Type                              | Description                               |
| :--------- | :-------------------------------- | :---------------------------------------- |
| `position` | [_BlockPos_](#interfacesblockpos) | The relative position to press the button |

**Returns:** _void_

---

#### print

▸ **print**(`text`: _string_): _void_

Prints the given text to the chat

##### Parameters:

| Name   | Type     | Description           |
| :----- | :------- | :-------------------- |
| `text` | _string_ | The text to print out |

**Returns:** _void_

---

#### pullLever

▸ **pullLever**(`position`: [_BlockPos_](#interfacesblockpos)): _void_

Pulls a lever at the specified coordinates if there is one there

##### Parameters:

| Name       | Type                              | Description                             |
| :--------- | :-------------------------------- | :-------------------------------------- |
| `position` | [_BlockPos_](#interfacesblockpos) | The relative position to pull the lever |

**Returns:** _void_

---

#### runAfterDelay

▸ **runAfterDelay**(`ticks`: _number_, `func`: (`test`: [_Test_](#interfacestest)) => _void_): _void_

Runs the a function after the set delay

##### Parameters:

| Name    | Type                                          | Description                                                    |
| :------ | :-------------------------------------------- | :------------------------------------------------------------- |
| `ticks` | _number_                                      | The amount of ticks that should pass until the function is run |
| `func`  | (`test`: [_Test_](#interfacestest)) => _void_ | The function that will be run when the delay has passed        |

**Returns:** _void_

---

#### setBlock

▸ **setBlock**(`id`: _string_, `position`: [_BlockPos_](#interfacesblockpos)): _void_

Places the specified block at the specified coordinates

##### Parameters:

| Name       | Type                              | Description                              |
| :--------- | :-------------------------------- | :--------------------------------------- |
| `id`       | _string_                          | The block to place                       |
| `position` | [_BlockPos_](#interfacesblockpos) | The relative position to place the block |

**Returns:** _void_

---

#### spawn

▸ **spawn**(`id`: _string_, `position`: [_BlockPos_](#interfacesblockpos)): [_Entity_](#interfacesentity)

Spawns the specified entity at the specified coordinates

##### Parameters:

| Name       | Type                              | Description                               |
| :--------- | :-------------------------------- | :---------------------------------------- |
| `id`       | _string_                          | The identifier of the entity to spawn     |
| `position` | [_BlockPos_](#interfacesblockpos) | The relative position to spawn the entity |

**Returns:** [_Entity_](#interfacesentity)

---

#### startSequence

▸ **startSequence**(): [_Sequence_](#interfacessequence)

Allows finer control over advanced test sequences

**Returns:** [_Sequence_](#interfacessequence)

---

#### succeed

▸ **succeed**(): _void_

When this is called, the GameTest succeeds

**Returns:** _void_

---

#### succeedOnTick

▸ **succeedOnTick**(`tick`: _number_): _void_

The GameTest will succeed when the specified amount of ticks has passed

##### Parameters:

| Name   | Type     | Description                       |
| :----- | :------- | :-------------------------------- |
| `tick` | _number_ | The tick to succed the test after |

**Returns:** _void_

---

#### succeedOnTickWhen

▸ **succeedOnTickWhen**(`tick`: _number_, `func`: () => _void_): _void_

The GameTest will succeed when the specified amount of ticks has passed and the `func` parameter calls an assert function

##### Parameters:

| Name   | Type         |
| :----- | :----------- |
| `tick` | _number_     |
| `func` | () => _void_ |

**Returns:** _void_

---

#### succeedWhen

▸ **succeedWhen**(`func`: () => _void_): _void_

When the `func` paramater calls an assert function the GameTest will succeed

##### Parameters:

| Name   | Type         |
| :----- | :----------- |
| `func` | () => _void_ |

**Returns:** _void_

---

#### succeedWhenBlockPresent

▸ **succeedWhenBlockPresent**(`id`: _string_, `position`: [_BlockPos_](#interfacesblockpos)): _void_

The GameTest will succeed when the specified block is found at the specified coordinates

##### Parameters:

| Name       | Type                              | Description            |
| :--------- | :-------------------------------- | :--------------------- |
| `id`       | _string_                          | The block to check for |
| `position` | [_BlockPos_](#interfacesblockpos) | -                      |

**Returns:** _void_

▸ **succeedWhenBlockPresent**(`id`: [_Block_](#interfacesblock), `position`: [_BlockPos_](#interfacesblockpos)): _void_

The GameTest will succeed when the specified block is found at the specified coordinates

##### Parameters:

| Name       | Type                              | Description                                 |
| :--------- | :-------------------------------- | :------------------------------------------ |
| `id`       | [_Block_](#interfacesblock)       | The block to check for                      |
| `position` | [_BlockPos_](#interfacesblockpos) | The relative position to test for the block |

**Returns:** _void_

---

#### succeedWhenEntityPresent

▸ **succeedWhenEntityPresent**(`id`: _string_, `position`: [_BlockPos_](#interfacesblockpos)): _void_

The GameTest will succeed when the specified entity is found at the specified coordinates

##### Parameters:

| Name       | Type                              | Description                                 |
| :--------- | :-------------------------------- | :------------------------------------------ |
| `id`       | _string_                          | The identifier of the entity to check for   |
| `position` | [_BlockPos_](#interfacesblockpos) | The relative position to test for the actor |

**Returns:** _void_

<a name="interfacestestrunner"></a>

## Interface: TestRunner

### Methods

#### batch

▸ **batch**(`time`: _night_ \| _day_): [_TestRunner_](#interfacestestrunner)

Sets the time of day when the GameTest is run. The time will be changed to the time set here when the GameTest is run

##### Parameters:

| Name   | Type             | Description                                   |
| :----- | :--------------- | :-------------------------------------------- |
| `time` | _night_ \| _day_ | The time that the GameTest must take place in |

**Returns:** [_TestRunner_](#interfacestestrunner)

---

#### maxTicks

▸ **maxTicks**(`ticks`: _number_): [_TestRunner_](#interfacestestrunner)

Sets the maximum amount of ticks the GameTest must complete until it fails

##### Parameters:

| Name    | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `ticks` | _number_ | The maximum amount of ticks |

**Returns:** [_TestRunner_](#interfacestestrunner)

---

#### padding

▸ **padding**(`time`: _number_): [_TestRunner_](#interfacestestrunner)

Sets the padding between GameTests being run

##### Parameters:

| Name   | Type     | Description                 |
| :----- | :------- | :-------------------------- |
| `time` | _number_ | The duration of the padding |

**Returns:** [_TestRunner_](#interfacestestrunner)

---

#### setupTicks

▸ **setupTicks**(`ticks`: _number_): [_TestRunner_](#interfacestestrunner)

Sets the ticks at which the GameTest begins

##### Parameters:

| Name    | Type     | Description             |
| :------ | :------- | :---------------------- |
| `ticks` | _number_ | The tick starting point |

**Returns:** [_TestRunner_](#interfacestestrunner)

---

#### structureName

▸ **structureName**(`name`: _string_): [_TestRunner_](#interfacestestrunner)

Sets the structure name linked with this GameTest

##### Parameters:

| Name   | Type     | Description           |
| :----- | :------- | :-------------------- |
| `name` | _string_ | Name of the structure |

**Returns:** [_TestRunner_](#interfacestestrunner)

---

#### tag

▸ **tag**(`tag`: _any_): [_TestRunner_](#interfacestestrunner)

Sets a tag for the GameTest to be referenced in the "/gametest runall" command

##### Parameters:

| Name  | Type  | Description             |
| :---- | :---- | :---------------------- |
| `tag` | _any_ | The tag of the GameTest |

**Returns:** [_TestRunner_](#interfacestestrunner)

<a name="interfacesworld"></a>

## Interface: World

### Methods

#### addEventListener

▸ **addEventListener**(`event`: [_WorldEvent_](#worldevent), `func`: () => _void_): _void_

Registers an event listener for entity events Supported

##### Parameters:

| Name    | Type                        | Description                                 |
| :------ | :-------------------------- | :------------------------------------------ |
| `event` | [_WorldEvent_](#worldevent) | -                                           |
| `func`  | () => _void_                | Function to run when the event is triggered |

**Returns:** _void_

---

#### getDimension

▸ **getDimension**(): [_Dimension_](#interfacesdimension)

Gets the current dimension

**Returns:** [_Dimension_](#interfacesdimension)

## Type aliases

### WorldEvent

Ƭ **WorldEvent**: "_onEntityCreated_" \| "_onEntityDefinitionTriggered_"

---
layout: page
title: Game Tests
parent: Scripting
badge: EXPERIMENTAL
badge_color: yellow
---

# Game Tests

::: tip
contents='The GameTest framework requires you to activate **"Enable GameTest Framework"** in your world settings and you must be using **Minecraft 1.16.210.60 beta or above**'
:::

GameTests are a new feature which allow developers to create unit tests to make it easier to test if game mechanics work. They are created with javascript files in the behavior pack folder and each file can register multiple GameTests. Each GameTest must also have an .mcstructure file in the `BP/structures` folder.

It is recommended that your GameTests go in the `BP/scripts/gametests` directory.

[Type declaration files for the GameTest API](https://github.com/bridge-core/editor/tree/dev/data/packages/minecraftBedrock/types/gameTest)

<details id="toc" open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Using GameTests

In the behavior pack manifest you need to add a `javascript` module where you set an `entry` point for your GameTests.

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
			"type": "javascript",
			"entry": "scripts/gametests/Main.js"
		}
	],
	"dependencies": [
		{
			// Minecraft native module - needed to use the "Minecraft" module
			"uuid": "b26a4d4c-afdf-4690-88f8-931846312678",
			"version": [0, 1, 0]
		},
		{
			// GameTest native module - needed to use the "GameTest" module
			"uuid": "6f4b6893-1bb6-42fd-b458-7fa3d0c89616",
			"version": [0, 1, 0]
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

### Variables

#### Tags

• `Const` **Tags**: [_Tags_](#interfacestags)

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

• `Const` **BlockLocation**: [_BlockLocationClass_](#interfacesblocklocationclass)

---

#### BlockStates

• `Const` **BlockStates**: [_BlockStates_](#interfacesblockstates)

---

#### Blocks

• `Const` **Blocks**: [_Blocks_](#interfacesblocks)

---

#### ItemStack

• `Const` **ItemStack**: [_ItemStackClass_](#interfacesitemstackclass)

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

<a name="interfacesblocklocation"></a>

## Interface: BlockLocation

### Methods

#### above

▸ **above**(): [_BlockLocation_](#interfacesblocklocation)

Returns the block position it was called on but increases the y coordinate by 1

**Returns:** [_BlockLocation_](#interfacesblocklocation)

<a name="interfacesblocklocationclass"></a>

## Interface: BlockLocationClass

### Constructors

#### constructor

\+ **new BlockLocation**(`x`: _number_, `y`: _number_, `z`: _number_): [_BlockLocation_](#interfacesblocklocation)

Creates a block position

##### Parameters:

| Name | Type     |
| :--- | :------- |
| `x`  | _number_ |
| `y`  | _number_ |
| `z`  | _number_ |

**Returns:** [_BlockLocation_](#interfacesblocklocation)

<a name="interfacesblocks"></a>

## Interface: Blocks

### Methods

Contains a method for every vanilla block. Every method is in camelCase. Example:

▸ **air**(): [_Block_](#interfacesblock)

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

Contains a method for every block state. Every method is in camelCase. Example:

▸ **topSlotBit**(data: boolean): [_State_](#interfacesstate)

<a name="interfacescommands"></a>

## Interface: Commands

### Methods

#### run

▸ **run**(`command`: _string_): _void_

Runs the given command when called

##### Parameters:

| Name      | Type     | Description                                  |
| :-------- | :------- | :------------------------------------------- |
| `command` | _string_ | The command to run (should start with a '/') |

**Returns:** _void_

<a name="interfacescontainer"></a>

## Interface: Container

### Methods

#### addItem

▸ **addItem**(`itemStack`: [_ItemStack_](#interfacesitemstack)): _void_

Adds the given itemStack to the first available slot of the container

##### Parameters:

| Name        | Type                                |
| :---------- | :---------------------------------- |
| `itemStack` | [_ItemStack_](#interfacesitemstack) |

**Returns:** _void_

---

#### getItem

▸ **getItem**(`slot`: _number_): [_ItemStack_](#interfacesitemstack)

Gets the itemStack at the given slot

##### Parameters:

| Name   | Type     |
| :----- | :------- |
| `slot` | _number_ |

**Returns:** [_ItemStack_](#interfacesitemstack)

---

#### relativeLocation

▸ **relativeLocation**(`worldPosition`: [_BlockLocation_](#interfacesblocklocation)): _any_

Transforms the coordinates of given world location to its corresponding GameTest location

##### Parameters:

| Name            | Type                                        | Description           |
| :-------------- | :------------------------------------------ | :-------------------- |
| `worldPosition` | [_BlockLocation_](#interfacesblocklocation) | Position to transform |

**Returns:** _any_

---

#### setItem

▸ **setItem**(`slot`: _number_, `itemStack`: [_ItemStack_](#interfacesitemstack)): _void_

Adds itemStack to the container at the given slot

##### Parameters:

| Name        | Type                                |
| :---------- | :---------------------------------- |
| `slot`      | _number_                            |
| `itemStack` | [_ItemStack_](#interfacesitemstack) |

**Returns:** _void_

---

#### swapItems

▸ **swapItems**(`slot`: _number_, `otherSlot`: _number_, `otherContainer`: [_Container_](#interfacescontainer)): _void_

Swaps ItemStacks between slot of the container and otherSlot of otherContainer

##### Parameters:

| Name             | Type                                |
| :--------------- | :---------------------------------- |
| `slot`           | _number_                            |
| `otherSlot`      | _number_                            |
| `otherContainer` | [_Container_](#interfacescontainer) |

**Returns:** _void_

---

#### transferItem

▸ **transferItem**(`fromSlot`: _number_, `toSlot`: _number_, `toContainer`: [_Container_](#interfacescontainer)): _void_

Transfers an ItemStack from fromSlot of the container to toSlot of toContainer

##### Parameters:

| Name          | Type                                |
| :------------ | :---------------------------------- |
| `fromSlot`    | _number_                            |
| `toSlot`      | _number_                            |
| `toContainer` | [_Container_](#interfacescontainer) |

**Returns:** _void_

---

#### worldLocation

▸ **worldLocation**(`position`: [_BlockLocation_](#interfacesblocklocation)): _void_

Transforms the coordinates of given GameTest location to its corresponding world location

##### Parameters:

| Name       | Type                                        | Description           |
| :--------- | :------------------------------------------ | :-------------------- |
| `position` | [_BlockLocation_](#interfacesblocklocation) | Position to transform |

**Returns:** _void_

<a name="interfacesdimension"></a>

## Interface: Dimension

<a name="interfaceseffect"></a>

## Interface: Effect

### Methods

#### getAmplifier

▸ **getAmplifier**(): _any_

Gets the effect's amplifier level

**Returns:** _any_

---

#### getDuration

▸ **getDuration**(): _any_

Gets the effect's remaining duration in ticks

**Returns:** _any_

<a name="interfaceseffects"></a>

## Interface: Effects

### Methods

#### absorption

▸ **absorption**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### badOmen

▸ **badOmen**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### blindness

▸ **blindness**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### conduitPower

▸ **conduitPower**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### fatalPoison

▸ **fatalPoison**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### fireResistance

▸ **fireResistance**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### haste

▸ **haste**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### healthBoost

▸ **healthBoost**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### heroOfTheVillage

▸ **heroOfTheVillage**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### hunger

▸ **hunger**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### instantDamage

▸ **instantDamage**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### instantHealth

▸ **instantHealth**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### invisibility

▸ **invisibility**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### jumpBoost

▸ **jumpBoost**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### levitation

▸ **levitation**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### miningFatigue

▸ **miningFatigue**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### nausea

▸ **nausea**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### nightVision

▸ **nightVision**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### poison

▸ **poison**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### regeneration

▸ **regeneration**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### resistance

▸ **resistance**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### saturation

▸ **saturation**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### slowFalling

▸ **slowFalling**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### slowness

▸ **slowness**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### speed

▸ **speed**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### strength

▸ **strength**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### waterBreathing

▸ **waterBreathing**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### weakness

▸ **weakness**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

---

#### wither

▸ **wither**(): [_Effect_](#interfaceseffect)

**Returns:** [_Effect_](#interfaceseffect)

<a name="interfacesentity"></a>

## Interface: Entity

### Methods

#### addEffect

▸ **addEffect**(`effect`: [_Effect_](#interfaceseffect), `duration`: _number_, `amplifier`: _number_): [_Effect_](#interfaceseffect)

Adds an effect to the Entity

##### Parameters:

| Name        | Type                          |
| :---------- | :---------------------------- |
| `effect`    | [_Effect_](#interfaceseffect) |
| `duration`  | _number_                      |
| `amplifier` | _number_                      |

**Returns:** [_Effect_](#interfaceseffect)

---

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

#### getEffect

▸ **getEffect**(`effect`: [_Effect_](#interfaceseffect)): [_Effect_](#interfaceseffect)

Gets an effect from the Entity

##### Parameters:

| Name     | Type                          |
| :------- | :---------------------------- |
| `effect` | [_Effect_](#interfaceseffect) |

**Returns:** [_Effect_](#interfaceseffect)

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

### Properties

#### container

• **container**: [_Container_](#interfacescontainer)

The container of this component. Can only be used on the "inventory" component

### Methods

#### getName

▸ **getName**(): _string_

Returns the name of the component

**Returns:** _string_

---

#### leash

▸ **leash**(`entity`: [_Entity_](#interfacesentity)): _void_

Leashes this entity to another given entity. This must be used on the "minecraft:leashable" component

##### Parameters:

| Name     | Type                          | Description                        |
| :------- | :---------------------------- | :--------------------------------- |
| `entity` | [_Entity_](#interfacesentity) | The entity to leash this entity to |

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

<a name="interfacesitems"></a>

## Interface: Items

### Methods

Contains a method for every vanilla item. Every method is in camelCase. Example:

▸ **apple**(): [_Item_](#interfaceitem)

<a name="interfacesitemstack"></a>

## Interface: ItemStack

<a name="interfacesitemstackclass"></a>

## Interface: ItemStackClass

### Constructors

#### constructor

\+ **new ItemStack**(`item`: [_Item_](#interfacesitem), `amount`: _number_, `data`: _number_): [_ItemStack_](#interfacesitemstack)

Creates a an item stack

##### Parameters:

| Name     | Type                      |
| :------- | :------------------------ |
| `item`   | [_Item_](#interfacesitem) |
| `amount` | _number_                  |
| `data`   | _number_                  |

**Returns:** [_ItemStack_](#interfacesitemstack)

<a name="interfacessequence"></a>

## Interface: Sequence

### Methods

#### assertEntityData

▸ **assertEntityData**(`position`: [_BlockLocation_](#interfacesblocklocation), `id`: _string_, `func`: (`entity`: [_Entity_](#interfacesentity)) => _void_): _void_

Asserts that the given condition is true for all entities of the given type at the given location

##### Parameters:

| Name       | Type                                                | Description                      |
| :--------- | :-------------------------------------------------- | :------------------------------- |
| `position` | [_BlockLocation_](#interfacesblocklocation)         | Position of the entity to test   |
| `id`       | _string_                                            | Identifier of the entity to test |
| `func`     | (`entity`: [_Entity_](#interfacesentity)) => _void_ |                                  |

**Returns:** _void_

---

#### assertEntityHasArmor

▸ **assertEntityHasArmor**(`id`: _string_, `slot`: _number_, `item`: _string_, `data`: _number_, `position`: [_BlockLocation_](#interfacesblocklocation), `bool`: _boolean_): _void_

Asserts an error when the armor is found on the entity at the given coordinates

##### Parameters:

| Name       | Type                                        | Description                                            |
| :--------- | :------------------------------------------ | :----------------------------------------------------- |
| `id`       | _string_                                    | The identifier of the entity to check for the armor on |
| `slot`     | _number_                                    | The slot of the entity to test for the item            |
| `item`     | _string_                                    | The item to test for in the given slot                 |
| `data`     | _number_                                    | The data value of the item                             |
| `position` | [_BlockLocation_](#interfacesblocklocation) | The position of the entity to test for the armor       |
| `bool`     | _boolean_                                   | Unknown function of parameter...                       |

**Returns:** _void_

---

#### assertEntityHasComponent

▸ **assertEntityHasComponent**(`id`: _string_, `component`: _string_, `position`: [_BlockLocation_](#interfacesblocklocation), `bool`: _boolean_): _void_

Asserts an error when the given entity has the component

##### Parameters:

| Name        | Type                                        | Description                           |
| :---------- | :------------------------------------------ | :------------------------------------ |
| `id`        | _string_                                    | The identifier of the entity to test  |
| `component` | _string_                                    | The name of the component to test for |
| `position`  | [_BlockLocation_](#interfacesblocklocation) | The position of the entity to test    |
| `bool`      | _boolean_                                   | Unknown function of parameter...      |

**Returns:** _void_

---

#### assertEntityInstancePresent

▸ **assertEntityInstancePresent**(`id`: _string_, `position`: [_BlockLocation_](#interfacesblocklocation)): _void_

Asserts an error when the given entity is found at the given coordinates

##### Parameters:

| Name       | Type                                        | Description                                 |
| :--------- | :------------------------------------------ | :------------------------------------------ |
| `id`       | _string_                                    | The identifier of the entity to check for   |
| `position` | [_BlockLocation_](#interfacesblocklocation) | The relative position to test for the actor |

**Returns:** _void_

---

#### assertEntityNotTouching

▸ **assertEntityNotTouching**(`id`: _string_, `position`: [_BlockLocation_](#interfacesblocklocation)): _void_

Asserts that there is no entity of the given type at the given position

##### Parameters:

| Name       | Type                                        | Description                        |
| :--------- | :------------------------------------------ | :--------------------------------- |
| `id`       | _string_                                    | The entity to test for             |
| `position` | [_BlockLocation_](#interfacesblocklocation) | The position of the entity to test |

**Returns:** _void_

---

#### assertEntityTouching

▸ **assertEntityTouching**(`id`: _string_, `position`: [_BlockLocation_](#interfacesblocklocation)): _void_

Asserts that there is an entity of the given type at the given position

##### Parameters:

| Name       | Type                                        | Description                        |
| :--------- | :------------------------------------------ | :--------------------------------- |
| `id`       | _string_                                    | The entity to test for             |
| `position` | [_BlockLocation_](#interfacesblocklocation) | The position of the entity to test |

**Returns:** _void_

---

#### assertIsWaterLogged

▸ **assertIsWaterLogged**(`position`: [_BlockLocation_](#interfacesblocklocation), `isWaterLoggged`: _boolean_): _void_

Asserts that the block at the given location is waterlogged

##### Parameters:

| Name             | Type                                        | Description                                          |
| :--------------- | :------------------------------------------ | :--------------------------------------------------- |
| `position`       | [_BlockLocation_](#interfacesblocklocation) | Position of the block to test                        |
| `isWaterLoggged` | _boolean_                                   | Whether to test if the block is or isn't waterlogged |

**Returns:** _void_

---

#### assertItemEntityCountIs

▸ **assertItemEntityCountIs**(`item`: [_Item_](#interfacesitem), `position`: [_BlockLocation_](#interfacesblocklocation), `searchDistance`: _number_, `count`: _number_): _void_

Asserts that the entity item count in the given search area matches the expected count

##### Parameters:

| Name             | Type                                        | Description                                |
| :--------------- | :------------------------------------------ | :----------------------------------------- |
| `item`           | [_Item_](#interfacesitem)                   | The item type to test for                  |
| `position`       | [_BlockLocation_](#interfacesblocklocation) | The position of the item to test for       |
| `searchDistance` | _number_                                    | The distance to search for the item        |
| `count`          | _number_                                    | The amount of items to expect in the stack |

**Returns:** _void_

---

#### assertRedstonePower

▸ **assertRedstonePower**(`position`: [_BlockLocation_](#interfacesblocklocation), `power`: _number_): _void_

Asserts the redstone power level at the given location

##### Parameters:

| Name       | Type                                        | Description                          |
| :--------- | :------------------------------------------ | :----------------------------------- |
| `position` | [_BlockLocation_](#interfacesblocklocation) | Position of the block to test        |
| `power`    | _number_                                    | The redstone power level to test for |

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

#### pulseRedstone

▸ **pulseRedstone**(`position`: [_BlockLocation_](#interfacesblocklocation), `duration`: _number_): _void_

Creates a Redstone block at the given position and destroys it after "duration" ticks

##### Parameters:

| Name       | Type                                        | Description                                    |
| :--------- | :------------------------------------------ | :--------------------------------------------- |
| `position` | [_BlockLocation_](#interfacesblocklocation) | Position to place the redstone block           |
| `duration` | _number_                                    | The time until the redstone block is destroyed |

**Returns:** _void_

---

#### spawn

▸ **spawn**(`id`: _string_, `position`: [_BlockLocation_](#interfacesblocklocation)): [_Entity_](#interfacesentity)

Spawns the specified entity at the specified coordinates

##### Parameters:

| Name       | Type                                        | Description                               |
| :--------- | :------------------------------------------ | :---------------------------------------- |
| `id`       | _string_                                    | The identifier of the entity to spawn     |
| `position` | [_BlockLocation_](#interfacesblocklocation) | The relative position to spawn the entity |

**Returns:** [_Entity_](#interfacesentity)

---

#### spawnItem

▸ **spawnItem**(`item`: [_ItemStack_](#interfacesitemstack), `location`: [_WorldLocation_](#interfacesworldlocation)): [_Item_](#interfacesitem)

Spawns an item at the given location

##### Parameters:

| Name       | Type                                        | Description             |
| :--------- | :------------------------------------------ | :---------------------- |
| `item`     | [_ItemStack_](#interfacesitemstack)         | The item stack to spawn |
| `location` | [_WorldLocation_](#interfacesworldlocation) | -                       |

**Returns:** [_Item_](#interfacesitem)

---

#### thenExecute

▸ **thenExecute**(`func`: () => _void_): [_Sequence_](#interfacessequence)

Executes the function when called

##### Parameters:

| Name   | Type         |
| :----- | :----------- |
| `func` | () => _void_ |

**Returns:** [_Sequence_](#interfacessequence)

---

#### thenExecuteAfter

▸ **thenExecuteAfter**(`time`: _number_, `func`: () => _void_): [_Sequence_](#interfacessequence)

Executes the function after the time given when called

##### Parameters:

| Name   | Type         | Description                                     |
| :----- | :----------- | :---------------------------------------------- |
| `time` | _number_     | The amount of time until the function is called |
| `func` | () => _void_ |                                                 |

**Returns:** [_Sequence_](#interfacessequence)

---

#### thenIdle

▸ **thenIdle**(`time`: _number_): [_Sequence_](#interfacessequence)

Causes the sequence to wait for the given amount of time

##### Parameters:

| Name   | Type     | Description                    |
| :----- | :------- | :----------------------------- |
| `time` | _number_ | The amount of time to wait for |

**Returns:** [_Sequence_](#interfacessequence)

---

#### thenSucceed

▸ **thenSucceed**(): _void_

Causes the GameTest to succeed

**Returns:** _void_

---

#### thenWait

▸ **thenWait**(`func`: () => _void_): [_Sequence_](#interfacessequence)

Causes the sequence to wait until the function asserts an error

##### Parameters:

| Name   | Type         |
| :----- | :----------- |
| `func` | () => _void_ |

**Returns:** [_Sequence_](#interfacessequence)

---

#### thenWaitWithDelay

▸ **thenWaitWithDelay**(`delayTicks`: _number_, `func`: () => _void_): [_Sequence_](#interfacessequence)

Causes the sequence to wait until the function asserts an error and the delay has passed

##### Parameters:

| Name         | Type         | Description                 |
| :----------- | :----------- | :-------------------------- |
| `delayTicks` | _number_     | The amount of ticks to wait |
| `func`       | () => _void_ |                             |

**Returns:** [_Sequence_](#interfacessequence)

<a name="interfacesstate"></a>

## Interface: State

<a name="interfacestags"></a>

## Interface: Tags

### Properties

#### suiteAll

• **suiteAll**: _string_

---

#### suiteBroken

• **suiteBroken**: _string_

---

#### suiteDebug

• **suiteDebug**: _string_

---

#### suiteDefault

• **suiteDefault**: _string_

<a name="interfacestest"></a>

## Interface: Test

### Methods

#### assertBlockNotPresent

▸ **assertBlockNotPresent**(`id`: [_Block_](#interfacesblock), `position`: [_BlockLocation_](#interfacesblocklocation)): _void_

Asserts an error when the given block is not found at the given coordinates

##### Parameters:

| Name       | Type                                        | Description                                 |
| :--------- | :------------------------------------------ | :------------------------------------------ |
| `id`       | [_Block_](#interfacesblock)                 | The block to check for                      |
| `position` | [_BlockLocation_](#interfacesblocklocation) | The relative position to test for the block |

**Returns:** _void_

---

#### assertBlockPresent

▸ **assertBlockPresent**(`id`: [_Block_](#interfacesblock), `position`: [_BlockLocation_](#interfacesblocklocation)): _void_

Asserts an error when the specified block is found at the specified coordinates

##### Parameters:

| Name       | Type                                        | Description                                 |
| :--------- | :------------------------------------------ | :------------------------------------------ |
| `id`       | [_Block_](#interfacesblock)                 | The block to check for                      |
| `position` | [_BlockLocation_](#interfacesblocklocation) | The relative position to test for the block |

**Returns:** _void_

---

#### assertBlockState

▸ **assertBlockState**(`state`: _string_, `stateValue`: _string_ \| _number_, `position`: [_BlockLocation_](#interfacesblocklocation)): _void_

Asserts an error when the given block at the given coordinates has the block state

##### Parameters:

| Name         | Type                                        | Description                                 |
| :----------- | :------------------------------------------ | :------------------------------------------ |
| `state`      | _string_                                    | The block state to test for                 |
| `stateValue` | _string_ \| _number_                        | The value of the state to test for          |
| `position`   | [_BlockLocation_](#interfacesblocklocation) | The relative position to test for the block |

**Returns:** _void_

---

#### assertContainerContains

▸ **assertContainerContains**(`itemStack`: [_ItemStack_](#interfacesitemstack), `position`: [_BlockLocation_](#interfacesblocklocation)): _void_

Asserts an error if there is a container with the given item at the given coordinates

##### Parameters:

| Name        | Type                                        | Description                                     |
| :---------- | :------------------------------------------ | :---------------------------------------------- |
| `itemStack` | [_ItemStack_](#interfacesitemstack)         | The item stack to test for in the container     |
| `position`  | [_BlockLocation_](#interfacesblocklocation) | The relative position of the container to check |

**Returns:** _void_

---

#### assertContainerEmpty

▸ **assertContainerEmpty**(`position`: [_BlockLocation_](#interfacesblocklocation)): _void_

Asserts an error if there is an empty container at the given coordinates

##### Parameters:

| Name       | Type                                        | Description                                     |
| :--------- | :------------------------------------------ | :---------------------------------------------- |
| `position` | [_BlockLocation_](#interfacesblocklocation) | The relative position of the container to check |

**Returns:** _void_

---

#### assertEntityNotPresent

▸ **assertEntityNotPresent**(`id`: _string_, `position`: [_BlockLocation_](#interfacesblocklocation)): _void_

Asserts an error when the given entity is not found at the given coordinates

##### Parameters:

| Name       | Type                                        | Description                                 |
| :--------- | :------------------------------------------ | :------------------------------------------ |
| `id`       | _string_                                    | The identifier of the entity to check for   |
| `position` | [_BlockLocation_](#interfacesblocklocation) | The relative position to test for the actor |

**Returns:** _void_

---

#### assertEntityNotPresentInArea

▸ **assertEntityNotPresentInArea**(`id`: _string_): _void_

Throws an Error if an entity matching the given identifier does not exist in the test region

##### Parameters:

| Name | Type     | Description                             |
| :--- | :------- | :-------------------------------------- |
| `id` | _string_ | The identifer of the entity to test for |

**Returns:** _void_

---

#### assertEntityPresent

▸ **assertEntityPresent**(`id`: _string_, `position`: [_BlockLocation_](#interfacesblocklocation)): _void_

Asserts an error when the given entity is found at the given coordinates

##### Parameters:

| Name       | Type                                        | Description                                 |
| :--------- | :------------------------------------------ | :------------------------------------------ |
| `id`       | _string_                                    | The identifier of the entity to check for   |
| `position` | [_BlockLocation_](#interfacesblocklocation) | The relative position to test for the actor |

**Returns:** _void_

---

#### assertEntityPresentInArea

▸ **assertEntityPresentInArea**(`id`: _string_): _void_

Throws an Error if an entity matching the given identifier exists in the test region

##### Parameters:

| Name | Type     | Description                             |
| :--- | :------- | :-------------------------------------- |
| `id` | _string_ | The identifer of the entity to test for |

**Returns:** _void_

---

#### assertItemEntityNotPresent

▸ **assertItemEntityNotPresent**(`item`: [_Item_](#interfacesitem), `position`: [_BlockLocation_](#interfacesblocklocation), `amount`: _number_): _void_

Asserts an error when the given item is not found at the given coordinates

##### Parameters:

| Name       | Type                                        | Description                                     |
| :--------- | :------------------------------------------ | :---------------------------------------------- |
| `item`     | [_Item_](#interfacesitem)                   | -                                               |
| `position` | [_BlockLocation_](#interfacesblocklocation) | The position to test for the item stack         |
| `amount`   | _number_                                    | The amount of items that should be in the stack |

**Returns:** _void_

---

#### assertItemEntityPresent

▸ **assertItemEntityPresent**(`item`: [_Item_](#interfacesitem), `position`: [_BlockLocation_](#interfacesblocklocation), `amount`: _number_): _void_

Asserts an error when the given item stack is found at the given coordinates

##### Parameters:

| Name       | Type                                        | Description                                     |
| :--------- | :------------------------------------------ | :---------------------------------------------- |
| `item`     | [_Item_](#interfacesitem)                   | -                                               |
| `position` | [_BlockLocation_](#interfacesblocklocation) | The position to test for the item stack         |
| `amount`   | _number_                                    | The amount of items that should be in the stack |

**Returns:** _void_

---

#### fail

▸ **fail**(`errorMessage`: _string_): _void_

Causes the GameTest to fail

##### Parameters:

| Name           | Type     |
| :------------- | :------- |
| `errorMessage` | _string_ |

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

▸ **pressButton**(`position`: [_BlockLocation_](#interfacesblocklocation)): _void_

Presses a button at the specified coordinates if there is one there

##### Parameters:

| Name       | Type                                        | Description                               |
| :--------- | :------------------------------------------ | :---------------------------------------- |
| `position` | [_BlockLocation_](#interfacesblocklocation) | The relative position to press the button |

**Returns:** _void_

---

#### pullLever

▸ **pullLever**(`position`: [_BlockLocation_](#interfacesblocklocation)): _void_

Pulls a lever at the given coordinates if there is one there

##### Parameters:

| Name       | Type                                        | Description                             |
| :--------- | :------------------------------------------ | :-------------------------------------- |
| `position` | [_BlockLocation_](#interfacesblocklocation) | The relative position to pull the lever |

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

#### runAtTickTime

▸ **runAtTickTime**(`tick`: _number_, `func`: () => _void_): _any_

##### Parameters:

| Name   | Type         |
| :----- | :----------- |
| `tick` | _number_     |
| `func` | () => _void_ |

**Returns:** _any_

---

#### setBlock

▸ **setBlock**(`id`: [_Block_](#interfacesblock), `position`: [_BlockLocation_](#interfacesblocklocation)): _void_

Places the specified block at the specified coordinates

##### Parameters:

| Name       | Type                                        | Description                              |
| :--------- | :------------------------------------------ | :--------------------------------------- |
| `id`       | [_Block_](#interfacesblock)                 | The block to place                       |
| `position` | [_BlockLocation_](#interfacesblocklocation) | The relative position to place the block |

**Returns:** _void_

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

The GameTest will succeed when the given amount of ticks has passed

##### Parameters:

| Name   | Type     | Description                       |
| :----- | :------- | :-------------------------------- |
| `tick` | _number_ | The tick to succed the test after |

**Returns:** _void_

---

#### succeedOnTickWhen

▸ **succeedOnTickWhen**(`tick`: _number_, `func`: () => _void_): _void_

The GameTest will succeed when the given amount of ticks has passed and the `func` parameter calls an assert function

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

▸ **succeedWhenBlockPresent**(`id`: [_Block_](#interfacesblock), `position`: [_BlockLocation_](#interfacesblocklocation)): _void_

The GameTest will succeed when the given block is found at the given coordinates

##### Parameters:

| Name       | Type                                        | Description                                 |
| :--------- | :------------------------------------------ | :------------------------------------------ |
| `id`       | [_Block_](#interfacesblock)                 | The block to check for                      |
| `position` | [_BlockLocation_](#interfacesblocklocation) | The relative position to test for the block |

**Returns:** _void_

▸ **succeedWhenBlockPresent**(`id`: [_Block_](#interfacesblock), `position`: [_BlockLocation_](#interfacesblocklocation)): _void_

The GameTest will succeed when the specified block is found at the specified coordinates

##### Parameters:

| Name       | Type                                        | Description            |
| :--------- | :------------------------------------------ | :--------------------- |
| `id`       | [_Block_](#interfacesblock)                 | The block to check for |
| `position` | [_BlockLocation_](#interfacesblocklocation) | -                      |

**Returns:** _void_

---

#### succeedWhenEntityHasComponent

▸ **succeedWhenEntityHasComponent**(`id`: _string_, `component`: _string_, `position`: [_BlockLocation_](#interfacesblocklocation), `hasComponent`: _boolean_): _void_

The GameTest will succeed when the given entity has the given component

##### Parameters:

| Name           | Type                                        | Description                                               |
| :------------- | :------------------------------------------ | :-------------------------------------------------------- |
| `id`           | _string_                                    | The entity to test for                                    |
| `component`    | _string_                                    | The component identififer to test for                     |
| `position`     | [_BlockLocation_](#interfacesblocklocation) | The position of the entity to test for                    |
| `hasComponent` | _boolean_                                   | Whether the entity should or shouldn't have the component |

**Returns:** _void_

---

#### succeedWhenEntityNotPresent

▸ **succeedWhenEntityNotPresent**(`id`: _string_, `position`: [_BlockLocation_](#interfacesblocklocation)): _void_

The GameTest will succeed when the given entity is not found at the given coordinates

##### Parameters:

| Name       | Type                                        | Description                                 |
| :--------- | :------------------------------------------ | :------------------------------------------ |
| `id`       | _string_                                    | The identifier of the entity to check for   |
| `position` | [_BlockLocation_](#interfacesblocklocation) | The relative position to test for the actor |

**Returns:** _void_

---

#### succeedWhenEntityPresent

▸ **succeedWhenEntityPresent**(`id`: _string_, `position`: [_BlockLocation_](#interfacesblocklocation)): _void_

The GameTest will succeed when the given entity is found at the given coordinates

##### Parameters:

| Name       | Type                                        | Description                                 |
| :--------- | :------------------------------------------ | :------------------------------------------ |
| `id`       | _string_                                    | The identifier of the entity to check for   |
| `position` | [_BlockLocation_](#interfacesblocklocation) | The relative position to test for the actor |

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

#### maxAttempts

▸ **maxAttempts**(`attempts`: _number_): [_TestRunner_](#interfacestestrunner)

Sets the maximum number of times a test will try to rerun if it fails

##### Parameters:

| Name       | Type     |
| :--------- | :------- |
| `attempts` | _number_ |

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

#### required

▸ **required**(`isRequired`: _boolean_): [_TestRunner_](#interfacestestrunner)

##### Parameters:

| Name         | Type      |
| :----------- | :-------- |
| `isRequired` | _boolean_ |

**Returns:** [_TestRunner_](#interfacestestrunner)

---

#### requiredSuccessfulAttempts

▸ **requiredSuccessfulAttempts**(`attempts`: _number_): [_TestRunner_](#interfacestestrunner)

Sets the number of successful test runs to be considered successful

##### Parameters:

| Name       | Type     |
| :--------- | :------- |
| `attempts` | _number_ |

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

▸ **addEventListener**(`event`: [_WorldEvent_](#worldevent), `func`: (`entity`: [_Entity_](#interfacesentity)) => _void_): _void_

Registers an event listener for entity events Supported

##### Parameters:

| Name    | Type                                                | Description                                 |
| :------ | :-------------------------------------------------- | :------------------------------------------ |
| `event` | [_WorldEvent_](#worldevent)                         | -                                           |
| `func`  | (`entity`: [_Entity_](#interfacesentity)) => _void_ | Function to run when the event is triggered |

**Returns:** _void_

---

#### getDimension

▸ **getDimension**(): [_Dimension_](#interfacesdimension)

Gets the current dimension

**Returns:** [_Dimension_](#interfacesdimension)

<a name="interfacesworldlocation"></a>

## Interface: WorldLocation

<a name="interfacesworldlocationclass"></a>

## Interface: WorldLocationClass

### Constructors

#### constructor

\+ **new Location**(`x`: _number_, `y`: _number_, `z`: _number_): [_WorldLocation_](#interfacesworldlocation)

Creates a location

##### Parameters:

| Name | Type     |
| :--- | :------- |
| `x`  | _number_ |
| `y`  | _number_ |
| `z`  | _number_ |

**Returns:** [_WorldLocation_](#interfacesworldlocation)

# Type aliases

## WorldEvent

Ƭ **WorldEvent**: "_onEntityCreated_" \| "_onEntityDefinitionTriggered_"

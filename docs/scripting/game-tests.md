---
layout: page
title: Game Tests
parent: Scripting
badge: BETA
badge_color: red
---

# Game Tests

<Panel type="notice">The GameTest framework requires you to activate <b>"Enable GameTest Framework"</b> in your world settings and you must be using <b>Minecraft 1.16.210.60 beta or above</b></Panel>

GameTests are a new feature which allow developers to create unit tests to make it easier to test if game mechanics work. They are created with javascript files in the behavior pack folder and each file can register multiple GameTests. Each GameTest must also have an .mcstructure file in the `BP/structures` folder.

It is recommended that your GameTests go in the `BP/scripts/gametests` directory.

[Type declaration files for the GameTest API](https://github.com/bridge-core/editor/tree/dev/data/types/gameTest)



## Using GameTests

In the behavior pack manifest you need to add a `plugin` module where you set an `entry` point for your GameTests.

{% include filepath.html path="BP/manifest.json"%}
```json
{
    "format_version": 2,
    "header": {
        "name": "Pack Name",
        "description": "Pack descripton",
        "min_engine_version": [
            1,
            16,
            210
        ],
        "uuid": "604420b9-f4c3-4df2-9f09-4364486f1195",
        "version": [
            1,
            0,
            0
        ]
    },
    "modules": [
        {
            "description": "",
            "type": "data",
            "uuid": "42651ba5-6619-4547-9d48-84a5a37cf2a3",
            "version": [
                1,
                0,
                0
            ]
        },
        {
            "description": "",
            "uuid": "239c134f-67bf-4738-9bcc-8c69d31b1f72",
            "version": [
                1,
                0,
                0
            ],
            "type": "plugin",
            "entry": "scripts/gametests/Main.js"
        }
    ]
}
```

The entry point should link to a file containing imports to your GameTest files.

{% include filepath.html path="BP/scripts/gametests/Main.js"%}
```js
import "scripts/gametests/MyGameTest.js";
import "scripts/gametests/OtherGameTest.js"
```


GameTests can be used with the /gametest command.

- `/gametest runthis`

Runs the nearest GameTest in range.

- `/gametest runthese`

Runs all GameTests in range.

- `/gametest pos`

Tells you the relative coordinates of the nearest GameTest.

- `/gametest clearall [radius: int]`

Removes all GameTests in the specified radius.

- `/gametest run <testName: GameTestName> [rotationSteps: int]`

Creates and runs the specified GameTest.

- `/gametest runset [tagTag: GameTestTag] [rotationSteps: int]`

Creates and runs all GameTests with the specified tag.

- `/gametest create <testName: string> [width: int] [height: int] [depth: int]`

Creates a blank GameTest area with the specified dimensions.


## Complete examples
```js
// Structure Path: BP/structures/MinecartTests/turn.mcstructure

import * as GameTest from "GameTest";
import { BlockLocation } from "Minecraft";

GameTest.register("MinecartTests", "turn", (test) => {
  const minecartActorType = "minecart";

  const endPos = new BlockLocation(1, 2, 2);
  const startPos = new BlockLocation(1, 2, 0);

  test.assertEntityPresent(minecartActorType, startPos);
  test.assertEntityNotPresent(minecartActorType, endPos);

  test.pressButton(new BlockLocation(0, 3, 0));

  test.succeedWhenEntityPresent(minecartActorType, endPos);
}).tag(GameTest.Tags.suiteDefault);
```
```js
// Structure Path: BP/structures/DoorTests/four_villagers_one_door.mcstructure

import * as GameTest from "GameTest";
import { BlockLocation } from "Minecraft";

GameTest.register("DoorTests", "four_villagers_one_door", (test) => {
  const villagerActorType = "minecraft:villager_v2";
  const villagerActorSpawnType =
    "minecraft:villager_v2<minecraft:spawn_farmer>"; // Attempt to spawn the villagers as farmers

  test.spawn(villagerActorSpawnType, new BlockLocation(5, 2, 4));
  test.spawn(villagerActorSpawnType, new BlockLocation(4, 2, 5));
  test.spawn(villagerActorSpawnType, new BlockLocation(2, 2, 5));
  test.spawn(villagerActorSpawnType, new BlockLocation(1, 2, 4));

  test.succeedWhen(() => {
    test.assertEntityPresent(villagerActorType, new BlockLocation(5, 2, 2));
    test.assertEntityPresent(villagerActorType, new BlockLocation(5, 2, 1));
    test.assertEntityPresent(villagerActorType, new BlockLocation(1, 2, 2));
    test.assertEntityPresent(villagerActorType, new BlockLocation(1, 2, 1));
  });
})
  .tag(GameTest.Tags.suiteDefault)
  .padding(50) // Space out villager tests to stop them from confusing each other
  .batch("night") // This should be a constant at some point
  .maxTicks(600);
```

# Modules


<a name="modules_gametest"></a>

## Namespace: "GameTest"

### Functions

#### register

▸ **register**(`namespace`: *string*, `identifier`: *string*, `func`: (`test`: [*Test*](#interfacestest)) => *void*): [*TestRunner*](#interfacestestrunner)

Registers a GameTest into Minecraft

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`namespace` | *string* |  Namespace of the GameTest. Should match the namespace of the mcstructure file   |
`identifier` | *string* |  Identifier of the GameTest. Should match the identifier of the mcstructure file    |
`func` | (`test`: [*Test*](#interfacestest)) => *void* | - |

**Returns:** [*TestRunner*](#interfacestestrunner)



<a name="modules_minecraft"></a>

## Namespace: "Minecraft"

### Variables

#### BlockLocation

• `Const` **BlockLocation**: [*BlockPositionClass*](#interfacesblockpositionclass)


___

#### BlockStates

• `Const` **BlockStates**: [*BlockStates*](#interfacesblockstates)


___

#### Blocks

• `Const` **Blocks**: [*Blocks*](#interfacesblocks)


___

#### ItemStack

• `Const` **ItemStack**: [*ItemStackClass*](#interfacesitemstackclass)


___

#### World

• `Const` **World**: [*World*](#interfacesworld)


# Interfaces


<a name="interfacesblock"></a>

## Interface: Block

### Methods

#### setState

▸ **setState**(`state`: [*State*](#interfacesstate)): [*Block*](#interfacesblock)

##### Parameters:

Name | Type |
:------ | :------ |
`state` | [*State*](#interfacesstate) |

**Returns:** [*Block*](#interfacesblock)



<a name="interfacesblockpos"></a>

## Interface: BlockPos

### Methods

#### above

▸ **above**(): [*BlockPos*](#interfacesblockpos)

Returns the block position it was called on but increases the y coordinate by 1

**Returns:** [*BlockPos*](#interfacesblockpos)



<a name="interfacesblockpositionclass"></a>

## Interface: BlockPositionClass

### Constructors

#### constructor

\+ **new BlockPositionClass**(`x`: *number*, `y`: *number*, `z`: *number*): [*BlockPos*](#interfacesblockpos)

Creates a block position

##### Parameters:

Name | Type |
:------ | :------ |
`x` | *number* |
`y` | *number* |
`z` | *number* |

**Returns:** [*BlockPos*](#interfacesblockpos)



<a name="interfacesblocks"></a>

## Interface: Blocks

### Methods

#### air

▸ **air**(): [*Block*](#interfacesblock)

**Returns:** [*Block*](#interfacesblock)


___

#### get

▸ **get**(`id`: *string*): [*Block*](#interfacesblock)

Fetches the requested block and returns it, if the block doesn't exist, this returns null

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* |  The identifier of the block to get    |

**Returns:** [*Block*](#interfacesblock)



<a name="interfacesblockstates"></a>

## Interface: BlockStates

### Methods

#### topSlotBit

▸ **topSlotBit**(`data`: *boolean*): [*State*](#interfacesstate)

##### Parameters:

Name | Type |
:------ | :------ |
`data` | *boolean* |

**Returns:** [*State*](#interfacesstate)



<a name="interfacesdimension"></a>

## Interface: Dimension


<a name="interfacesentity"></a>

## Interface: Entity

### Methods

#### getComponent

▸ **getComponent**(`component`: *string*): [*EntityComponent*](#interfacesentitycomponent)

Returns the component matching the given identifier

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`component` | *string* |  The component identifier to get    |

**Returns:** [*EntityComponent*](#interfacesentitycomponent)


___

#### getComponents

▸ **getComponents**(): [*EntityComponent*](#interfacesentitycomponent)[]

Returns an array of supported components

**Returns:** [*EntityComponent*](#interfacesentitycomponent)[]


___

#### getName

▸ **getName**(): *string*

Returns the name of the entity (e.g. "Horse")

**Returns:** *string*


___

#### hasComponent

▸ **hasComponent**(`component`: *string*): *boolean*

Returns true if the given component exists on the entity and is supported

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`component` | *string* |  The component identifier to check for    |

**Returns:** *boolean*


___

#### kill

▸ **kill**(): *void*

Kills the entity

**Returns:** *void*



<a name="interfacesentitycomponent"></a>

## Interface: EntityComponent

### Methods

#### getName

▸ **getName**(): *string*

Returns the name of the component

**Returns:** *string*


___

#### leash

▸ **leash**(`entity`: [*Entity*](#interfacesentity)): *void*

Leashes this entity to another specified entity. This must be used on the "minecraft:leashable" component

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`entity` | [*Entity*](#interfacesentity) |  The entity to leash this entity to    |

**Returns:** *void*


___

#### setColor

▸ **setColor**(`color`: *number*): *void*

Sets the entities color value. This must be used on the "minecraft:color" component

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`color` | *number* |  The color value to set    |

**Returns:** *void*


___

#### setTamed

▸ **setTamed**(`particles`: *boolean*): *void*

Sets the entity as tamed

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`particles` | *boolean* |  Whether to display taming particles    |

**Returns:** *void*


___

#### unleash

▸ **unleash**(): *void*

Causes this entity to detach leashes. This must be used on the "minecraft:leashable" component

**Returns:** *void*



<a name="interfacesitem"></a>

## Interface: Item


<a name="interfacesitemstack"></a>

## Interface: ItemStack


<a name="interfacesitemstackclass"></a>

## Interface: ItemStackClass

### Constructors

#### constructor

\+ **new ItemStackClass**(`item`: [*Block*](#interfacesblock)): [*ItemStack*](#interfacesitemstack)

Creates a an item stack

##### Parameters:

Name | Type |
:------ | :------ |
`item` | [*Block*](#interfacesblock) |

**Returns:** [*ItemStack*](#interfacesitemstack)



<a name="interfacessequence"></a>

## Interface: Sequence

### Methods

#### thenIdle

▸ **thenIdle**(`time`: *number*): [*Sequence*](#interfacessequence)

Causes the sequence to wait for the specified amount of time

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`time` | *number* |  The amount of time to wait for    |

**Returns:** [*Sequence*](#interfacessequence)


___

#### thenSucced

▸ **thenSucced**(): *void*

Causes the GameTest to succeed

**Returns:** *void*



<a name="interfacesstate"></a>

## Interface: State


<a name="interfacestest"></a>

## Interface: Test

### Methods

#### assertBlockNotPresent

▸ **assertBlockNotPresent**(`id`: [*Block*](#interfacesblock), `position`: [*BlockPos*](#interfacesblockpos)): *void*

Asserts an error when the specified block is not found at the specified coordinates

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | [*Block*](#interfacesblock) |  The block to check for   |
`position` | [*BlockPos*](#interfacesblockpos) |  The relative position to test for the block    |

**Returns:** *void*


___

#### assertBlockPresent

▸ **assertBlockPresent**(`id`: *string*, `position`: [*BlockPos*](#interfacesblockpos)): *void*

Asserts an error when the specified block is found at the specified coordinates

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* |  The block to check for   |
`position` | [*BlockPos*](#interfacesblockpos) |  The relative position to test for the block    |

**Returns:** *void*


___

#### assertBlockState

▸ **assertBlockState**(`state`: *string*, `data`: *string* \| *number*, `position`: [*BlockPos*](#interfacesblockpos)): *void*

Asserts an error when the specified block at the specified coordinates has the block state

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`state` | *string* |  The block state to test for   |
`data` | *string* \| *number* |  The value of the state to test for   |
`position` | [*BlockPos*](#interfacesblockpos) |  The relative position to test for the block    |

**Returns:** *void*


___

#### assertContainerContains

▸ **assertContainerContains**(`id`: *string*, `position`: [*BlockPos*](#interfacesblockpos)): *void*

Asserts an error if there is a container with the specified item at the specified coordinates

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* |  The item to test for in the container   |
`position` | [*BlockPos*](#interfacesblockpos) |  The relative position of the container to check    |

**Returns:** *void*


___

#### assertContainerEmpty

▸ **assertContainerEmpty**(`position`: [*BlockPos*](#interfacesblockpos)): *void*

Asserts an error if there is an empty container at the specified coordinates

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`position` | [*BlockPos*](#interfacesblockpos) |  The relative position of the container to check    |

**Returns:** *void*


___

#### assertEntityHasArmor

▸ **assertEntityHasArmor**(`id`: *string*, `slot`: *number*, `item`: *string*, `data`: *number*, `position`: [*BlockPos*](#interfacesblockpos), `bool`: *boolean*): *void*

Asserts an error when the armor is found on the entity at the specified coordinates

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* |  The identifier of the entity to check for the armor on   |
`slot` | *number* |  The slot of the entity to test for the item   |
`item` | *string* |  The item to test for in the specified slot   |
`data` | *number* |  The data value of the item   |
`position` | [*BlockPos*](#interfacesblockpos) |  The position of the entity to test for the armor   |
`bool` | *boolean* |  Unknown function of parameter...    |

**Returns:** *void*


___

#### assertEntityHasComponent

▸ **assertEntityHasComponent**(`id`: *string*, `component`: *string*, `position`: [*BlockPos*](#interfacesblockpos), `bool`: *boolean*): *void*

Asserts an error when the specified entity has the component

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* |  The identifier of the entity to test   |
`component` | *string* |  The name of the component to test for   |
`position` | [*BlockPos*](#interfacesblockpos) |  The position of the entity to test   |
`bool` | *boolean* |  Unknown function of parameter...    |

**Returns:** *void*


___

#### assertEntityInstancePresent

▸ **assertEntityInstancePresent**(`id`: *string*, `position`: [*BlockPos*](#interfacesblockpos)): *void*

Asserts an error when the specified entity is found at the specified coordinates

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* |  The identifier of the entity to check for   |
`position` | [*BlockPos*](#interfacesblockpos) |  The relative position to test for the actor    |

**Returns:** *void*


___

#### assertEntityNotPresent

▸ **assertEntityNotPresent**(`id`: *string*, `position`: [*BlockPos*](#interfacesblockpos)): *void*

Asserts an error when the specified entity is not found at the specified coordinates

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* |  The identifier of the entity to check for   |
`position` | [*BlockPos*](#interfacesblockpos) |  The relative position to test for the actor    |

**Returns:** *void*


___

#### assertEntityPresent

▸ **assertEntityPresent**(`id`: *string*, `position`: [*BlockPos*](#interfacesblockpos)): *void*

Asserts an error when the specified entity is found at the specified coordinates

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* |  The identifier of the entity to check for   |
`position` | [*BlockPos*](#interfacesblockpos) |  The relative position to test for the actor    |

**Returns:** *void*


___

#### assertEntityPresentInArea

▸ **assertEntityPresentInArea**(`id`: *string*): *void*

Throws an Error if an entity matching the given identifier does not exist in the test region

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* |  The identifer of the entity to test for    |

**Returns:** *void*


___

#### assertItemEntityPresent

▸ **assertItemEntityPresent**(`itemStack`: [*ItemStack*](#interfacesitemstack), `position`: [*BlockPos*](#interfacesblockpos), `amount`: *number*): *void*

Asserts an error when the specified item stack is not found at the specified coordinates

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`itemStack` | [*ItemStack*](#interfacesitemstack) |  The item stack to test for   |
`position` | [*BlockPos*](#interfacesblockpos) |  The position to test for the item stack   |
`amount` | *number* |  The amount of items that should be in the stack    |

**Returns:** *void*


___

#### failIf

▸ **failIf**(`func`: () => *void*): *void*

When the `func` parameter calls an assert function the GameTest will fail

##### Parameters:

Name | Type |
:------ | :------ |
`func` | () => *void* |

**Returns:** *void*


___

#### killAllEntities

▸ **killAllEntities**(): *void*

Kills all entities in the test

**Returns:** *void*


___

#### pressButton

▸ **pressButton**(`position`: [*BlockPos*](#interfacesblockpos)): *void*

Presses a button at the specified coordinates if there is one there

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`position` | [*BlockPos*](#interfacesblockpos) |  The relative position to press the button    |

**Returns:** *void*


___

#### print

▸ **print**(`text`: *string*): *void*

Prints the given text to the chat

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`text` | *string* |  The text to print out    |

**Returns:** *void*


___

#### pullLever

▸ **pullLever**(`position`: [*BlockPos*](#interfacesblockpos)): *void*

Pulls a lever at the specified coordinates if there is one there

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`position` | [*BlockPos*](#interfacesblockpos) |  The relative position to pull the lever    |

**Returns:** *void*


___

#### runAfterDelay

▸ **runAfterDelay**(`ticks`: *number*, `func`: (`test`: [*Test*](#interfacestest)) => *void*): *void*

Runs the a function after the set delay

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`ticks` | *number* |  The amount of ticks that should pass until the function is run   |
`func` | (`test`: [*Test*](#interfacestest)) => *void* |  The function that will be run when the delay has passed    |

**Returns:** *void*


___

#### setBlock

▸ **setBlock**(`id`: *string*, `position`: [*BlockPos*](#interfacesblockpos)): *void*

Places the specified block at the specified coordinates

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* |  The block to place   |
`position` | [*BlockPos*](#interfacesblockpos) |  The relative position to place the block    |

**Returns:** *void*


___

#### spawn

▸ **spawn**(`id`: *string*, `position`: [*BlockPos*](#interfacesblockpos)): [*Entity*](#interfacesentity)

Spawns the specified entity at the specified coordinates

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* |  The identifier of the entity to spawn   |
`position` | [*BlockPos*](#interfacesblockpos) |  The relative position to spawn the entity    |

**Returns:** [*Entity*](#interfacesentity)


___

#### startSequence

▸ **startSequence**(): [*Sequence*](#interfacessequence)

Allows finer control over advanced test sequences

**Returns:** [*Sequence*](#interfacessequence)


___

#### succeed

▸ **succeed**(): *void*

When this is called, the GameTest succeeds

**Returns:** *void*


___

#### succeedOnTick

▸ **succeedOnTick**(`tick`: *number*): *void*

The GameTest will succeed when the specified amount of ticks has passed

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`tick` | *number* |  The tick to succed the test after    |

**Returns:** *void*


___

#### succeedOnTickWhen

▸ **succeedOnTickWhen**(`tick`: *number*, `func`: () => *void*): *void*

The GameTest will succeed when the specified amount of ticks has passed and the `func` parameter calls an assert function

##### Parameters:

Name | Type |
:------ | :------ |
`tick` | *number* |
`func` | () => *void* |

**Returns:** *void*


___

#### succeedWhen

▸ **succeedWhen**(`func`: () => *void*): *void*

When the `func` paramater calls an assert function the GameTest will succeed

##### Parameters:

Name | Type |
:------ | :------ |
`func` | () => *void* |

**Returns:** *void*


___

#### succeedWhenBlockPresent

▸ **succeedWhenBlockPresent**(`id`: *string*, `position`: [*BlockPos*](#interfacesblockpos)): *void*

The GameTest will succeed when the specified block is found at the specified coordinates

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* |  The block to check for   |
`position` | [*BlockPos*](#interfacesblockpos) | - |

**Returns:** *void*


▸ **succeedWhenBlockPresent**(`id`: [*Block*](#interfacesblock), `position`: [*BlockPos*](#interfacesblockpos)): *void*

The GameTest will succeed when the specified block is found at the specified coordinates

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | [*Block*](#interfacesblock) |  The block to check for   |
`position` | [*BlockPos*](#interfacesblockpos) |  The relative position to test for the block    |

**Returns:** *void*


___

#### succeedWhenEntityPresent

▸ **succeedWhenEntityPresent**(`id`: *string*, `position`: [*BlockPos*](#interfacesblockpos)): *void*

The GameTest will succeed when the specified entity is found at the specified coordinates

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* |  The identifier of the entity to check for   |
`position` | [*BlockPos*](#interfacesblockpos) |  The relative position to test for the actor    |

**Returns:** *void*



<a name="interfacestestrunner"></a>

## Interface: TestRunner

### Methods

#### batch

▸ **batch**(`time`: *night* \| *day*): [*TestRunner*](#interfacestestrunner)

Sets the time of day when the GameTest is run. The time will be changed to the time set here when the GameTest is run

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`time` | *night* \| *day* |  The time that the GameTest must take place in    |

**Returns:** [*TestRunner*](#interfacestestrunner)


___

#### maxTicks

▸ **maxTicks**(`ticks`: *number*): [*TestRunner*](#interfacestestrunner)

Sets the maximum amount of ticks the GameTest must complete until it fails

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`ticks` | *number* |  The maximum amount of ticks    |

**Returns:** [*TestRunner*](#interfacestestrunner)


___

#### padding

▸ **padding**(`time`: *number*): [*TestRunner*](#interfacestestrunner)

Sets the padding between GameTests being run

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`time` | *number* |  The duration of the padding    |

**Returns:** [*TestRunner*](#interfacestestrunner)


___

#### setupTicks

▸ **setupTicks**(`ticks`: *number*): [*TestRunner*](#interfacestestrunner)

Sets the ticks at which the GameTest begins

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`ticks` | *number* |  The tick starting point    |

**Returns:** [*TestRunner*](#interfacestestrunner)


___

#### structureName

▸ **structureName**(`name`: *string*): [*TestRunner*](#interfacestestrunner)

Sets the structure name linked with this GameTest

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name` | *string* |  Name of the structure    |

**Returns:** [*TestRunner*](#interfacestestrunner)


___

#### tag

▸ **tag**(`tag`: *any*): [*TestRunner*](#interfacestestrunner)

Sets a tag for the GameTest to be referenced in the "/gametest runall" command

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`tag` | *any* |  The tag of the GameTest    |

**Returns:** [*TestRunner*](#interfacestestrunner)



<a name="interfacesworld"></a>

## Interface: World

### Methods

#### addEventListener

▸ **addEventListener**(`event`: [*WorldEvent*](#worldevent), `func`: () => *void*): *void*

Registers an event listener for entity events Supported

##### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | [*WorldEvent*](#worldevent) | - |
`func` | () => *void* |  Function to run when the event is triggered    |

**Returns:** *void*


___

#### getDimension

▸ **getDimension**(): [*Dimension*](#interfacesdimension)

Gets the current dimension

**Returns:** [*Dimension*](#interfacesdimension)



## Type aliases

### WorldEvent

Ƭ **WorldEvent**: "*onEntityCreated*" \| "*onEntityDefinitionTriggered*"

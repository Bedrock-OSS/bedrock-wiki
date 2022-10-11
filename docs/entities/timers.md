---
title: Entity Timers
category: Tutorials
tags:
    - intermediate
---

Time-based interactions are extremely useful tools for map making. This article hopes to provide an extensive list which details the many ways which timers can be made. For convenience, this page will be split up into two main sections: component-based timers and animation-based timers. Each has their own advantages and disadvantages, which will be outlined in their respective sections.
You might also find useful [Command Timers](/commands/timers/).

## Component-based timers

Component-based timers are done inside the entity.json file of the behavior pack. They have the distinct advantage of persisting upon the entity being reloaded, but are limited by the number of timing components (duplicate components replace each other, which means defining multiple timers using the `minecraft:timer` component isn't possible).

### minecraft:timer

This is the simplest but most effective component for triggering events after an elapsed amount of time. The component [minecraft:timer](https://bedrock.dev/docs/1.14.0.0/1.14.30.2/Entities#minecraft:timer) provides three main ways in which the amount of time before the event can be defined:

-   Exact timing: an exact amount of time after which the event will fire is defined (e.g. 3.4 seconds)
-   Random interval: an interval is defined in which the event will fire at a random time inside that interval (e.g. between 3 to 5 seconds)
-   Weighted random choice: a number of times are defined and assigned weights, one of which will be chosen for the event to fire (e.g. a 20% chance for the event to fire at 5 seconds, and an 80% chance to fire at 20 seconds)

In the vanilla Behavior Pack, this component is used in all kinds of circumstances. For example:

-   The dolphin can only spend 20 seconds on land before it dries out
-   Bees will perish between 10 and 60 seconds after stinging
-   The wandering trader will only stay for either 2400 or 3600 seconds

A simple example which triggers an event after 5.6 seconds:

<CodeHeader></CodeHeader>

```json
"minecraft:timer": {
  "time": 5.6,
  "time_down_event": {
      "event": "wiki:my_event"
  }
}
```

A more complex example which triggers an event after a randomized amount of delay using weighted values:

<CodeHeader></CodeHeader>

```json
"minecraft:timer": {
  "looping": false, //true will fires event after every execution,  false will fire event only once.
  "random_time_choices": [
    {
      "weight": 25,
      "value": 0.5 //Half a second of delay
    },
    {
      "weight": 25,
      "value": 10 //Ten seconds of delay
    },
    {
      "weight": 25,
      "value": 30 //Thirty seconds of delay
    },
    {
      "weight": 25,
      "value": 120 //2 minutes of delay
    }
  ],
  "time_down_event": {
    "event": "wiki:event",
    "target": "self"
  }
}
```

A particularly useful way to handle time events is using a single, looping `minecraft:timer` component and processing the events on each tick (or however often you decide to fire the timer). This is done by using the `randomize` parameter in events, where a weight may be used determine how often other events will be run. This can get you a lot of extra mileage out of a single timer component.

<CodeHeader></CodeHeader>

```json
"wiki:do_event": {
  "randomize": [
    {
      "weight": 1,
      "add": {
        "component_groups": [
          "wiki:my_event"
        ]
      }
    },
    {
      "weight": 5,
      "add": {
        "component_groups": [
          "wiki:my_more_frequent_event"
        ]
      }
    },
    {
      "weight": 50 //Fires nothing
    }
  ]
}
```

### minecraft:environment_sensor

Another component ([minecraft:environment_sensor](https://bedrock.dev/docs/stable/Entities#minecraft:environment_sensor)) which can be very useful for time-based events is `minecraft:environment_sensor`. Pairing this sensor with the `hourly_clock_time` or `clock_time` filters can be used to trigger events based off in-game time.

Here is an example which is used to fire an event 800 ticks after the start of the day (valid range is 0 to 24000):

<CodeHeader></CodeHeader>

```json
"minecraft:environment_sensor": {
  "triggers": [
    {
      "filters": {
        "test": "hourly_clock_time",
        "operator": "=",
        "value": 800
      },
      "event": "wiki:my_daily_event"
    }
  ]
}
```

### minecraft:ageable

If this component ([minecraft:ageable](https://bedrock.dev/docs/stable/Entities#minecraft:ageable)) is not being used in the entity's behavior for a different purpose, it can be useful as an additional timer. It's important to note that it requires the `minecraft:is_baby` component to be defined in order to function.

Here is an example which fires an event after four seconds:

<CodeHeader></CodeHeader>

```json
"minecraft:is_baby": {},
"minecraft:ageable": {
  "duration": 4,
  "grow_up": {
    "event": "wiki:my_other_event",
    "target": "self"
  }
}
```

### Other dummy-timers:

Taking a peak at the docs suggest there are other components which can also can be used for timing. Essentially, you are looking for any component with a "time down event" or a "duration".

Non-exhaustive list of promising examples:

-   `minecraft:angry` (requires the entity to have a target, time must be an integer)
-   `minecraft.behavior.hide`
-   `minecraft:behavior.celebrate`

## Animation-based timers

Behavior pack animations are an extremely powerful tool for triggering time-based events. They have the distinct advantage of providing an "infinite" amount of timers, but are restarted upon an entity being reloaded (leaving and rejoining the world or the chunk containing the entity unloading will cause the timer to restart when the entity reloads).

Animations function differently in behavior packs than in resource packs. If you are unfamiliar with how they operate, it is recommended to learn more about them by checking out the official documentation or the other pages on this wiki.

### Simple timers

By triggering animations from an animation controller or directly from the scripts section, you can execute specific events, commands, or molang expressions in a timed-sequence, called a timeline.

You can set up timelines like this:

<CodeHeader></CodeHeader>

```json
{
	"format_version": "1.8.0",
	"animations": {
		"animation.command.example_timeline": {
			"timeline": {
				"0.0": "/say this will trigger instantly",
				"3.0": "/say this will trigger after 3 seconds"
			},
			"animation_length": 3.1
		},
		"animation.command.example_timeline_2": {
			"timeline": {
				"100": "/say this will trigger after 100 seconds",
				"0.0": [
					"/say you can trigger multiple events at once",
					"/say by using timelines."
				],
				"55.55": "/say this will trigger after 55.55 seconds."
			},
			"animation_length": 100.1
		}
	}
}
```

### Random interval

A very useful feature of the timer component is its ability to define a random interval in which the event will be triggered. This functionality can be replicated using animations and a controller. Below is an example of an animation triggered by adding the `minecraft:is_sheared` component to an entity which randomly fires an event between 2 to 7 seconds after activation. Animation and controller version 1.10.0.

<CodeHeader></CodeHeader>

```json
"controller.animation.shanewolf.random_interval": {
  "initial_state": "inactive",
  "states": {
    "inactive": {
      "transitions": [
        {
          "active": "query.is_sheared"
        }
      ]
    },
    "active": {
      "on_entry": [
        "variable.random_interval = math.random(2, 7);",
        "/say random interval started"
      ],
      "animations": [
        "wiki:animate_interval"
      ],
      "transitions": [
        {
          "inactive": "query.anim_time >= variable.random_interval"
        }
      ],
      "on_exit": [
        "@s wiki:stop_random_interval",
        "/say random interval finished"
      ]
    }
  }
}
```

<CodeHeader></CodeHeader>

```json
"animation.shanewolf.random_interval": {
  "animation_length": 100
}
```

Explanation: Upon entry into the state beginning the animation, a variable is given a random value between 2 and 7. The animation finishes when the current animation time is greater than or equal to the value of this variable.

**Notes**:
-   The animation length can be set to any value greater than the maximum end of the time range (100 is used as a general template)
-   math.random(a, b) is used to trigger an event in the range [a, b]
-   math.floor(math.random(a, b.99)) may be used to end the timer at integer values (0.99 must be added to b)
-   Any events or commands to run when the animation is finished are put inside on_exit

### Weighted random choice

Another useful feature of the timer component is its ability to trigger events at a time determined by a weighted list of values. This functionality can also be replicated using animations and a controller. Below is an example of an animation triggered by adding the `minecraft:is_charged` component to an entity which randomly fires an event at either 2, 5, or 9 seconds with weights of 30, 60, and 10, respectively. Animation and controller version 1.10.0.

<CodeHeader></CodeHeader>

```json
"controller.animation.shanewolf.random_choices": {
  "initial_state": "inactive",
  "states": {
    "inactive": {
      "transitions": [
        {
          "active": "query.is_powered"
        }
      ]
    },
    "active": {
      "on_entry": [
        "variable.random_choices = math.random(0, 100);",
        "/say random interval started"
      ],
      "animations": [
        "wiki:animate_choices"
      ],
      "transitions": [
        {
          "inactive": "query.anim_time >= 2.0 && variable.random_choices < 30"
        },
        {
          "inactive": "query.anim_time >= 5.0 && variable.random_choices < 90"
        },
        {
          "inactive": "query.anim_time >= 9.0 && variable.random_choices <= 100"
        }
      ],
      "on_exit": [
        "@s wiki:stop_random_choices",
        "/say random choices finished"
      ]
    }
  }
}
```

<CodeHeader></CodeHeader>

```json
"animation.shanewolf.random_choices": {
  "animation_length": 100
}
```

Explanation: Upon entry into the state beginning the animation, a variable is given a random value between 0 and 100 (sum of the weights). The transitions are laid out with the list of values ordered from the smallest time to the largest time. This is done so multiple && operators are not required in the latter transitions to define the variable's range (the query for the smallest times return true first and have their weights checked before the others--flipping 2 and 5 would result in 2 mistakenly having a weight of 90 instead of 30). The animation finishes when the current animation time is greater than or equal to a time in the list and the value of the random variable falls within that time's defined weight range.

**Notes**:
-   The animation length can be set to any value greater than the maximum end of the time range (100 is used as a general template)
-   For this particular format to work, order the list of valid times from smallest to largest
-   To assign a weight to a time in the list, add the weight to the value the randomized variable must be less than in the list's previous entry (e.g. 5 seconds has a weight of 90 - 30 = 60)
-   Any events or commands to run when the animation is finished are put inside on_exit

Hopefully this spread some light on the subject of handling time in Minecraft Bedrock! As shown above, there are many possible ways it can be done, each with their own pros and cons. If you have any other useful methods for creating time-based events, please [contribute to the wiki](/contribute.html)!

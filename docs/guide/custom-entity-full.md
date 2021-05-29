---
layout: guide
title: Entities
parent: Beginners Guide
nav_order: 7
badge: 7
badge_color: guide
badge_justification: left
---



___

# Custom entity resource definition

Resource definition is done client-side to define texture, animation and model shortnames, and potentially even control some animations. This type of file is typically called an *.entity* file. It is located in `RP/entity/yourEntityname.entity.json`.

*Note: you can scroll the code examples in both directions if you don't see the document fully.*

## .entity File

`RP/entity/skele_yaklin.entity.json`
```json
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
      "description": {
        "identifier": "tut:skele_yaklin",
        "materials": {
          "default": "skeleton"
        },
        "textures": {
          "default": "textures/entity/skele_yaklin"
        },
        "geometry": {
          "default": "geometry.skele_yaklin"
        },
        "animations": {
          "walk": "animation.skele_yaklin.walk",
          //"attack": "animation.skele_yaklin.attack",
          "humanoid_big_head": "animation.humanoid.big_head",
          "look_at_target": "animation.humanoid.look_at_target.default.v1.0"
        },
        "scripts": {

          "animate": [
            {
              "walk": "query.modified_move_speed"
            },
            {
              "humanoid_big_head": "query.is_baby"
            },
            "look_at_target"
          ]
        },
        "render_controllers": [
          "controller.render.skele_yaklin"
        ],
        "enable_attachables": false,
        "spawn_egg": {
          "base_color": "#949493",
          "overlay_color": "#651818"
        }
      }
    }
  }
```

This is a client entity file;

- "identifier" is your entity's identifier. It means the same as in blocks or items. For example, I can summon my entity via the command `/summon tut:skele_yaklin`.
- "materials" control how the entity is rendered. For now, we'll assign the Vanilla "skeleton" material (which allows texture transparency) to the shortname default.

*Note: Entities that have a single model, a single texture and a single material, do not require custom shortnames and render controllers for all of these. Instead, we can set all of the shortnames to "default" and use a default render controller, like "controller.render.skeleton", which automatically renders everything with shortnames set to "default". We'll create a custom render controller nevertheless.*

- "textures/default" needs to be set to the texture's directory; If this is done incorrect, the texture will be switching uncontrollably.
- "geometry/default" needs to be set to your model's identifier. If this is done incorrect, your entity will appear invisible.
- In "animations" one can simply define shortnames for animations and animation controllers  - Along with our custom "walk" animation, I've defined the Vanilla "humanoid_big_head" animation for baby entities and the "look_at_target" animation. They are both already in Minecraft, no need to create them. Name your head bone `head` to make sure they'll work.

- "scripts/animate" control how animations are run without Animation Controllers. - The "walk" animation will be run when the entity is moving (query.modified_move_speed returns true when speed is higher then 0);- The "humanoid_big_head" animation will be run if query.is_baby returns true, in other words, if the entity is a baby. - And, finally, "look_at_target" will be always run. A more advanced way of controlling animations are Animation Controllers, which will be covered next.

- Queries are a part of MoLang, a simple language developed specifically for controlling MC animations. Queries will be used later on in Animation Controllers, Server Animations and Render controllers  as well. For more info and/or the list of entity queries, see the documentation page on bedrock.dev/c/MoLang.

- "render_controllers" define the render controllers of an entity, which in it's turn, defines which texture shortnames are to be rendered. "controller.render.skeleton", for example, renders everything with the shortname "default". More about Render Controllers below and in the next tutorial: Render controllers.

- "enable_attachments" defines whether armor and equipment will be rendered on this entity.

- "spawn_egg" automatically creates the spawn egg item (which will be found in the creative inventory). You can either set the two colors to different hex codes or set "spawn_egg">"texture" to an item texture's shortname. - For example, the creeper's spawn egg "base_color" is set to green, and it's "overlay_color is set to black.

```json
"spawn_egg": {
    "texture": "itemTextureShortname"
}
```

## Render Controller

`RP/render_controllers/skele_yaklin/render_controller.json`
```json
{
  "format_version": "1.8.0",
  "render_controllers": {
    "controller.render.skele_yaklin": {
      "geometry": "Geometry.default",
      "materials": [
        {
          "*": "Material.default"
        }
      ],
      "textures": [
        "Texture.default"
      ]
    }
  }
}
```

*Note: this is a basic render controller used temporarily. In the next tutorial (Render controllers;), we'll learn about these things much more in-depth, including creating skin variants(e.g: Horse).*

This render controller is the one we called in the .entity file above. It is an almost exact copy of the skeleton render controller, which means it chooses the texture, the model and the material with the shortname "default" to render.

 If we set the textures shortname to, for example, "tex" in the .entity file, the 11th line of code would look like this.

`"textures": [ "texture.tex" ]`

Finally, add these to `RP/texts/en_US.lang`:

```
entity.tut:skele_yaklin=Skeleton Yaklin
item.spawn_egg.entity.tut:skele_yaklin.name=Spawn Skeleton Yaklin
```

The first line defines the entity's name, and the second one the entity's spawn egg item name.


# Custom entity behavior definition

This is one of the most complicated part of creating addons - Entity behaviors. You'll often refer to [bedrock.dev/r/Entities](https://bedrock.dev/r/Entities) for what the different components do and for their parameters. All-in-all, the entity's behavior file defines what the entity does in game. Let's see the overall structure of such a file first. (Behavior files are located in BP/entities/) (The file name doesn't matter, but I recommend naming it entityName.json or entityName.behavior.json)

![](/assets/images/guide/custom_entity_1.png)

- Even though I have "1.8.0" in this particular screenshot, it's best to set "format_version" to the latest release version, currently "1.14".
- "identifier" should be the same as in the .entity file.
- "component_groups" can include behaviors and attributes. They can be removed, added or randomized with events.
- "components" include behaviors, attributes, etc that cannot be removed - they are always with the entity.
- "events" can add, remove and randomize component groups. They can be called in different attributes, for example "on_breed" in "minecraft:breedable" or on "time_down_event" in "minecraft:timer".

## Components

Let's fill "components" first with some behaviors the entity will have by default.

Add all of these into the "components" object. I commented with // about what they do, but you're welcome to look yourself in [bedrock.dev/r/Entities](https://bedrock.dev/r/Entities).

*Note that in order for json comments (// or /* */ not to be displayed as errors, you have to switch your language from json to json in the bottom left corner.*

```json
//the family type for filters
"minecraft:type_family": {
    "family": [
        "yaklin",
        "skeleton_yaklin",
        "neutral",
        "nether_mob"
    ]
},
"minecraft:breathable": {
    "totalSupply": 15,
    "suffocateTime": 0
},
//hitbox/shadow
"minecraft:collision_box": {
    "width": 1.0,
    "height": 0.8
},
//health, speed and some other self-explainable properties
"minecraft:nameable": {},
"minecraft:health": {
    "value": 26,
    "max": 30
},
"minecraft:movement": {
    "value": 0.20
},
"minecraft:leashable": {},
//How the mob navigates
"minecraft:navigation.walk": {
    "can_path_over_water": true,
    "avoid_damage_blocks": true
},
"minecraft:movement.basic": {},
"minecraft:jump.static": {},
//A mob panics when hit
"minecraft:behavior.panic": {
    "priority": 1,
    "speed_multiplier": 1.5
},
//The mob will go to the player who holds the items which tempt it
"minecraft:behavior.tempt": {
    "priority": 4,
    "speed_multiplier": 1.0,
    "items": [
        "tut:meal"
    ]
},
//random walk around
"minecraft:behavior.random_stroll": {
    "priority": 6,
    "speed_multiplier": 1.0
},
"minecraft:behavior.look_at_player": {
    "priority": 7,
    "look_distance": 6.0,
    "probability": 0.02
},
"minecraft:behavior.random_look_around": {
    "priority": 8
},
//necessary, otherwise the mob will just fall through bedrock
"minecraft:physics": {}
```

In this situation, the components set the entity's hitbox, speed, physics, health, family, etc and make it nameable and leashable.


## Component Groups

Now let's take care of the "component_groups" object. We want the entity to be tamable and breedable, thus we need to include a wild, a tamed, a baby and an adult component groups.

*Component group syntax:*
`"namespace:id" : { //behaviors and attributes go here }`

```json
  "tut:baby": {
    "minecraft:is_baby": {},
    //the baby entity is smaller then normal
    "minecraft:scale": {
      "value": 0.5
    },
    //it can grow up
    "minecraft:ageable": {
      "duration": 1200,
      "feedItems": [
        "tut:meal"
      ],
      "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
      }
    },
    //it follow an adult entity of the same type
    "minecraft:behavior.follow_parent": {
      "priority": 5,
      "speed_multiplier": 1.1
    }
  },
  //adult variation
  "tut:adult": {
    //milkable
    "minecraft:interact": {
      "interactions": [
        {
          "on_interact": {
            "filters": {
              "all_of": [
                {
                  "test": "is_family",
                  "subject": "other",
                  "value": "player"
                },
                {
                  "test": "has_equipment",
                  "domain": "hand",
                  "subject": "other",
                  "value": "bucket:0"
                }
              ]
            }
          },
          "use_item": true,
          "transform_to_item": "bucket:1",
          "play_sounds": "milk",
          "interact_text": "action.interact.milk"
        }
      ]
    },
    //what the mob drops. Defined in `BP/loot_tables/entities/skele_yaklin.json` in this scenario
    "minecraft:loot": {
      "table": "loot_tables/entities/skele_yaklin.json"
    },
    //how much xp the mob drops
    "minecraft:experience_reward": {
      "on_bred": "Math.Random(1,7)",
      "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
    },
    //You can breed this mob
    "minecraft:breedable": {
      "requireTame": false,
      "breedsWith": {
        "mateType": "tut:skele_yaklin",
        "babyType": "tut:skele_yaklin",
        "breed_event": {
          "event": "minecraft:entity_born",
          "target": "baby"
        }
      },
      "breedItems": [
        "tut:meal"
      ]
    },
    "minecraft:behavior.breed": {
      "priority": 3,
      "speed_multiplier": 1.0
    }
  },
  //this component group gets added by default in entity_spawned and entity_born events.
  "tut:wild": {
    "minecraft:tameable": {
      "probability": 0.33,
      "tame_items": "minecraft:rotten_flesh",
      "tame_event": {
        "event": "minecraft:on_tame",
        "target": "self"
      }
    }
  },
  //this gets added when the entitiy gets tamed in "minecraft:on_tame" event
  "tut:tamed": {
    //rideable
    "minecraft:horse.jump_strength": {
      "value": {
        "range_min": 0.4,
        "range_max": 1.5
      }
    },
    "minecraft:is_saddled": {},
    "minecraft:input_ground_controlled": {},
    "minecraft:can_power_jump": {},
    "minecraft:behavior.player_ride_tamed": {},
    "minecraft:is_tamed": {},
    "minecraft:rideable": {
      "priority": 0,
      "seat_count": 1,
      "crouching_skip_interact": true,
      "family_types": [
        "player"
      ],
      "interact_text": "Ride the Skele Yaklin",
      "seats": {
        "position": [
          0.0,
          1.1,
          -0.2
        ]
      }
    },
    //inventory
    "minecraft:inventory": {
      "inventory_size": 16,
      "container_type": "horse"
    }
  }
```

As you see, the:

- Baby variation(`tut:baby`) includes a scale, a grow up, and an is_baby component, as well as a follow parent behavior.
- Adult variation(`tut:adult`) has components necessary for milking, breeding, dropping loot and xp.
- Wild variation(`tut:wild`) includes the tamable component.

And, finally, the Tamed variation(`tut:tamed`) include all the components that a rideable entity needs, along with an inventory component.

*Note: "inventory_type": "horse" requires "minecraft:is_chested" component, the same way as "can_power_jump" requires a "minecraft:is_saddled" component.*

* Events

Only events are left now.

*Event Syntax:*
```
namespace:id: {
  "randomize": [ {"weight", "add/remove"}],
  "add/remove": { "component_groups": ["", ""]},
}
```

```json
  //This events gets applied whenever a new entity is added.
  "minecraft:entity_spawned": {
    //either the adult or the baby variant gets randomly chosen, along with the "wild" variation
    "randomize": [
      {
        "weight": 55,
        "remove": {},
        "add": {
          "component_groups": [
            "tut:adult",
            "tut:wild"
          ]
        }
      },
      {
        "weight": 5,
        "remove": {},
        "add": {
          "component_groups": [
            "tut:baby",
            "tut:wild"
          ]
        }
      }
    ]
  },
  //this event fires on the baby entity from the "minecraft:breedable" component above
  "minecraft:entity_born": {
    "remove": {},
    "add": {
      "component_groups": [
        "tut:baby",
        "tut:wild"
      ]
    }
  },
  //this gets fired on a baby entity which grows up in "minecraft:agable:grow_up"
  "minecraft:ageable_grow_up": {
    "remove": {
      "component_groups": [
        "tut:baby"
      ]
    },
    "add": {
      "component_groups": [
        "tut:adult"
      ]
    }
  },
  //this events gets fired on the wil entity that gets tamed in "minecraft:tamable" - it removes the "wild" component group and adds the "tamed" one.
  "minecraft:on_tame": {
    "remove": {
      "component_groups": [
        "tut:wild"
      ]
    },
    "add": {
      "component_groups": [
        "tut:tamed"
      ]
    }
  }
```

- The "minecraft:entity_spawned" effect launches when the entity gets spawned by default. We will add the wild component group here, as well as randomize the baby or adult component groups. Adult has a higher weight, thus a higher chance to get chosen.
- "minecraft:entity_born" is called in the minecraft:breedable component in the "tut:adult" component groups on the "baby" subject. Everything we need to do here is to add the baby component group.
- "minecraft:agable_grow_up", on the other hand, has to remove the baby component group and add adult instead. As you hopefully remember, we called it in "minecraft:ageable" in "tut:baby" on the subject "self". It fires when the entity uses the "ageable" goal - grows up.
- Lastly, "minecraft:on_tame" is called in the tameable component in "tut:wild". The event removes "wild" and adds "tamed".

Events can also have a "sequence" array in them.

```
  "namespace:eventId": {
    "sequence": [
      {
	"add": {
	  "component_groups": []
	}
      }
    ]
  }
```

As you can see, everything that was originally in the event is located "sequence": [ { here } ]. This will come in useful if you wan't to launch multiple actions simultaneously. This will be used when we'll create custom variants for the entity in Render controllers. You can also view the final files on the guide's GitHub repository.

**Amazing! Our Skeleton Yaklin is now ready!**

Don't worry if you didn't grasp something for the first time: coding entities is something that takes some practice to learn for everyone. We covered a lot of information, because I wanted to showcase most often used components. Again, don't stress out if you haven't remembered something - you can always come back to check this [Guide's files](https://github.com/KaiFireborn/Minecraft-Bedrock-Full-Beginner-Add-on-development-Guide-FILES), the [Vanilla Example packs](https://www.minecraft.net/en-us/addons) and the [documentation](https://bedrock.dev). When you feel stuck, feel free to seek help in the [Bedrock Scripting Discord server](https://discord.com/invite/BJkxyRM), which is full of amazing people who'll be happy to help you. In fact, the more you come back to these resources, the faster and better you will learn: there's no point forcing down all the info right now. Now, I say, congratulations for completing this entity, I can't wait to see what you come up with!

![](/assets/images/guide/custom_entity_2.jpg)

*I'll include the full entity behavior file at the bottom of this page, for you to check whether you have written down everything correctly.*

___
___

# Your progress so far

**What you've done:**
- Defined the resources of your entity, which you created previously.
- Hopefully learned about Render Controllers from the Render controllers subpage.
- Learned about "components", "component_groups", and "events".
- Once again referred to the docs and example files.
- Learned about many of the most often used attributes and behaviors.
- Created a Custom Mob/Entity, from bottom to top!

**What you are going to do next:**
- Create variations for your custom entity.
- Learn more about Render Controllers.


___

<details>

  <summary>
    Example Entity BP (From the guide's Template packs)
  </summary>

`BP/entities/skele_yaklin.json`
```json
{
    "format_version": "1.14.0",
    "minecraft:entity": {
        "description": {
            "identifier": "tut:skele_yaklin",
            "is_spawnable": true,
            "is_summonable": true,
            "is_experimental": false
        },
        //Component groups can be added and removed by events
        "component_groups": {
            //baby variation
            "tut:baby": {
                "minecraft:is_baby": {},
                //the baby entity is smaller then normal
                "minecraft:scale": {
                    "value": 0.5
                },
                //it can grow up
                "minecraft:ageable": {
                    "duration": 1200,
                    "feedItems": [
                        "tut:meal"
                    ],
                    "grow_up": {
                        "event": "minecraft:ageable_grow_up",
                        "target": "self"
                    }
                },
                //it follow an adult entity of the same type
                "minecraft:behavior.follow_parent": {
                    "priority": 5,
                    "speed_multiplier": 1.1
                }
            },
            //adult variation
            "tut:adult": {
                //milkable
                "minecraft:interact": {
                    "interactions": [
                        {
                            "on_interact": {
                                "filters": {
                                    "all_of": [
                                        {
                                            "test": "is_family",
                                            "subject": "other",
                                            "value": "player"
                                        },
                                        {
                                            "test": "has_equipment",
                                            "domain": "hand",
                                            "subject": "other",
                                            "value": "bucket:0"
                                        }
                                    ]
                                }
                            },
                            "use_item": true,
                            "transform_to_item": "bucket:1",
                            "play_sounds": "milk",
                            "interact_text": "action.interact.milk"
                        }
                    ]
                },
                //what the mob drops. Defined in `BP/loot_tables/entities/skele_yaklin.json` in this scenario
                "minecraft:loot": {
                    "table": "loot_tables/entities/skele_yaklin.json"
                },
                //how much xp the mob drops
                "minecraft:experience_reward": {
                    "on_bred": "Math.Random(1,7)",
                    "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
                },
                //You can breed this mob
                "minecraft:breedable": {
                    "requireTame": false,
                    "breedsWith": {
                        "mateType": "tut:skele_yaklin",
                        "babyType": "tut:skele_yaklin",
                        "breed_event": {
                            "event": "minecraft:entity_born",
                            "target": "baby"
                        }
                    },
                    "breedItems": [
                        "tut:meal"
                    ]
                },
                "minecraft:behavior.breed": {
                    "priority": 3,
                    "speed_multiplier": 1.0
                }
            },
            //this component group gets added by default in entity_spawned and entity_born events.
            "tut:wild": {
                "minecraft:tameable": {
                    "probability": 0.33,
                    "tame_items": "minecraft:rotten_flesh",
                    "tame_event": {
                        "event": "minecraft:on_tame",
                        "target": "self"
                    }
                }
            },
            //this gets added when the entitiy gets tamed in "minecraft:on_tame" event
            "tut:tamed": {

"minecraft:horse.jump_strength": {
                    "value": {
                        "range_min": 0.4,
                        "range_max": 1.5
                    }
                },
                "minecraft:is_saddled": {},



                //rideable
                "minecraft:input_ground_controlled": {},
                "minecraft:can_power_jump": {},
                "minecraft:behavior.player_ride_tamed": {},
                "minecraft:behavior.mount_pathing": {
                    "priority": 2,
                    "speed_multiplier": 1.5,
                    "target_dist": 0.0,
                    "track_target": true
                },
                "minecraft:is_tamed": {},
                "minecraft:rideable": {
                    "priority": 0,
                    "seat_count": 1,
                    "crouching_skip_interact": true,
                    "family_types": [
                        "player"
                    ],
                    "interact_text": "Ride the Skele Yaklin",
                    "seats": {
                        "position": [
                            0.0,
                            1.1,
                            -0.2
                        ]
                    }
                },
                //inventory
                "minecraft:inventory": {
                    "inventory_size": 6,
                    "container_type": "horse"
                }
            }
        },
        //Components are applied to the entity by default and cannot be removed
        "components": {
            //the family type for filters
            "minecraft:type_family": {
                "family": [
                    "yaklin",
                    "skeleton_yaklin",
                    "neutral",
                    "nether_mob"
                ]
            },
            "minecraft:breathable": {
                "totalSupply": 15,
                "suffocateTime": 0
            },
            //hitbox/shadow
            "minecraft:collision_box": {
                "width": 1.0,
                "height": 0.8
            },
            //health, speed and some other self-explainable properties
            "minecraft:nameable": {},
            "minecraft:health": {
                "value": 26,
                "max": 30
            },
            "minecraft:movement": {
                "value": 0.20
            },
            "minecraft:leashable": {},
            //How the mob navigates
            "minecraft:navigation.walk": {
                "can_path_over_water": true,
                "avoid_damage_blocks": true
            },
            "minecraft:movement.basic": {},
            "minecraft:jump.static": {},
            //A mob panics when hit
            "minecraft:behavior.panic": {
                "priority": 1,
                "speed_multiplier": 1.5
            },
            //The mob will go to the player who holds the items which tempt it
            "minecraft:behavior.tempt": {
                "priority": 4,
                "speed_multiplier": 1.0,
                "items": [
                    "tut:meal"
                ]
            },
            //random walk around
            "minecraft:behavior.random_stroll": {
                "priority": 6,
                "speed_multiplier": 1.0
            },
            "minecraft:behavior.look_at_player": {
                "priority": 7,
                "look_distance": 6.0,
                "probability": 0.02
            },
            "minecraft:behavior.random_look_around": {
                "priority": 8
            },
            //necessary, otherwise the mob will just fall through bedrock
            "minecraft:physics": {}
        },
        "events": {
            //This events gets applied whenewer a new entity is added.
            "minecraft:entity_spawned": {
                //either the adult or the baby variant gets randomly chosen, along with the "wild" variation
                "randomize": [
                    {
                        "weight": 55,
                        "remove": {},
                        "add": {
                            "component_groups": [
                                "tut:adult",
                                "tut:wild"
                            ]
                        }
                    },
                    {
                        "weight": 5,
                        "remove": {},
                        "add": {
                            "component_groups": [
                                "tut:baby",
                                "tut:wild"
                            ]
                        }
                    }
                ]
            },
            //this event fires on the baby entity from the "minecraft:breedable" component above
            "minecraft:entity_born": {
                "remove": {},
                "add": {
                    "component_groups": [
                        "tut:baby",
                        "tut:wild"
                    ]
                }
            },
            //this gets fired on a baby entity which grows up in "minecraft:agable:grow_up"
            "minecraft:ageable_grow_up": {
                "remove": {
                    "component_groups": [
                        "tut:baby"
                    ]
                },
                "add": {
                    "component_groups": [
                        "tut:adult"
                    ]
                }
            },
            //this events gets fired on the wil entity that gets tamed in "minecraft:tamable" - it removes the "wild" component group and adds the "tamed" one.
            "minecraft:on_tame": {
                "remove": {
                    "component_groups": [
                        "tut:wild"
                    ]
                },
                "add": {
                    "component_groups": [
                        "tut:tamed"
                    ]
                }
            }
        }
    }
}
```

</details>
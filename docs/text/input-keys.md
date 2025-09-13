---
title: Input Keys
description: Learn how to display input keys that match player settings.
category: Emojis & Symbols
license: true
mentions:
    - QuazChick
---

Input keys can be used to automatically detect the input of the player and display the appropriate button for each type of action, such as "SHIFT" for sneaking on Windows.

## Displaying Input Keys

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```lang
action.hint.exit.rollercoaster=Press :_input_key.sneak: to end the ride
```

![Press B to end the ride](/assets/images/text/input-keys/exit_rollercoaster_action_hint.png)

## List of Input Keys

Below are the results of default control settings for each input type.
All text below, including "Unassigned", is literal and will be displayed to the player.

Non-existent input keys (such as `:_input_key.fake:`) will always result in "Unassigned".

### General Input Keys

| Name               | Shortcode                        | Keyboard & Mouse                                        | Full Keyboard Gameplay | Touch                                             | Xbox                                                            | Nintendo Switch                                                 | PlayStation                                                     |
| ------------------ | -------------------------------- | ------------------------------------------------------- | ---------------------- | ------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| Attack             | `:_input_key.attack:`            | ![](/assets/images/text/emojis/mouse/left_button.png)   | Q                      | ![](/assets/images/text/emojis/touch/attack.png)  | ![](/assets/images/text/emojis/xbox/right_trigger.png)          | ![](/assets/images/text/emojis/switch/right_trigger.png)        | ![](/assets/images/text/emojis/playstation/right_trigger.png)   |
| Use                | `:_input_key.use:`               | ![](/assets/images/text/emojis/mouse/right_button.png)  | E                      | ![](/assets/images/text/emojis/touch/place.png)   | ![](/assets/images/text/emojis/xbox/left_trigger.png)           | ![](/assets/images/text/emojis/switch/left_trigger.png)         | ![](/assets/images/text/emojis/playstation/left_trigger.png)    |
| Chat               | `:_input_key.chat:`              | T                                                       | T                      | ![](/assets/images/text/emojis/touch/chat.png)    | ![](/assets/images/text/emojis/xbox/dpad_right.png)             | ![](/assets/images/text/emojis/switch/dpad_right.png)           | ![](/assets/images/text/emojis/playstation/dpad_right.png)      |
| Drop               | `:_input_key.drop:`              | Q                                                       | Z                      | Unassigned                                        | ![](/assets/images/text/emojis/xbox/dpad_down.png)              | ![](/assets/images/text/emojis/switch/dpad_down.png)            | ![](/assets/images/text/emojis/playstation/dpad_down.png)       |
| Emote              | `:_input_key.emote:`             | B                                                       | B                      | ![](/assets/images/text/emojis/touch/emote.png)   | ![](/assets/images/text/emojis/xbox/dpad_left.png)              | ![](/assets/images/text/emojis/switch/dpad_left.png)            | ![](/assets/images/text/emojis/playstation/dpad_left.png)       |
| Jump               | `:_input_key.jump:`              | SPACE                                                   | SPACE                  | ![](/assets/images/text/emojis/touch/jump.png)    | ![](/assets/images/text/emojis/xbox/a_button.png)               | ![](/assets/images/text/emojis/switch/a_button.png)             | ![](/assets/images/text/emojis/playstation/cross.png)           |
| Sneak              | `:_input_key.sneak:`             | SHIFT                                                   | SHIFT                  | ![](/assets/images/text/emojis/touch/sneak.png)   | ![](/assets/images/text/emojis/xbox/b_button.png)               | ![](/assets/images/text/emojis/switch/b_button.png)             | ![](/assets/images/text/emojis/playstation/circle.png)          |
| Sprint             | `:_input_key.sprint:`            | CONTROL                                                 | CONTROL                | ![](/assets/images/text/emojis/touch/sprint.png)  | ![](/assets/images/text/emojis/xbox/left_stick.png)             | ![](/assets/images/text/emojis/switch/left_stick.png)           | ![](/assets/images/text/emojis/playstation/left_stick.png)      |
| Forward            | `:_input_key.forward:`           | W                                                       | W                      | ![](/assets/images/text/emojis/touch/forward.png) | ![](/assets/images/text/emojis/controller/left_stick_up.png)    | ![](/assets/images/text/emojis/controller/left_stick_up.png)    | ![](/assets/images/text/emojis/controller/left_stick_up.png)    |
| Back               | `:_input_key.back:`              | S                                                       | S                      | ![](/assets/images/text/emojis/touch/back.png)    | ![](/assets/images/text/emojis/controller/left_stick_down.png)  | ![](/assets/images/text/emojis/controller/left_stick_down.png)  | ![](/assets/images/text/emojis/controller/left_stick_down.png)  |
| Left               | `:_input_key.left:`              | A                                                       | A                      | ![](/assets/images/text/emojis/touch/left.png)    | ![](/assets/images/text/emojis/controller/left_stick_left.png)  | ![](/assets/images/text/emojis/controller/left_stick_left.png)  | ![](/assets/images/text/emojis/controller/left_stick_left.png)  |
| Right              | `:_input_key.right:`             | D                                                       | D                      | ![](/assets/images/text/emojis/touch/right.png)   | ![](/assets/images/text/emojis/controller/left_stick_right.png) | ![](/assets/images/text/emojis/controller/left_stick_right.png) | ![](/assets/images/text/emojis/controller/left_stick_right.png) |
| Inventory          | `:_input_key.inventory:`         | E                                                       | C                      | Unassigned                                        | ![](/assets/images/text/emojis/xbox/y_button.png)               | ![](/assets/images/text/emojis/switch/x_button.png)             | ![](/assets/images/text/emojis/playstation/triangle.png)        |
| Cycle Item Left    | `:_input_key.cycleItemLeft:`     | Unassigned                                              | PAGE UP                | Unassigned                                        | ![](/assets/images/text/emojis/xbox/left_bumper.png)            | ![](/assets/images/text/emojis/switch/left_bumper.png)          | ![](/assets/images/text/emojis/playstation/left_bumper.png)     |
| Cycle Item Right   | `:_input_key.cycleItemRight:`    | Unassigned                                              | PAGE DOWN              | Unassigned                                        | ![](/assets/images/text/emojis/xbox/right_bumper.png)           | ![](/assets/images/text/emojis/switch/right_bumper.png)         | ![](/assets/images/text/emojis/playstation/right_bumper.png)    |
| Toggle Perspective | `:_input_key.togglePerspective:` | F5                                                      | F5                     | Unassigned                                        | Unassigned                                                      | Unassigned                                                      | Unassigned                                                      |
| Pick Block         | `:_input_key.pickItem:`          | ![](/assets/images/text/emojis/mouse/middle_button.png) | X                      | Unassigned                                        | Unassigned                                                      | Unassigned                                                      | Unassigned                                                      |

### Keyboard & Mouse Input Keys

| Name              | Shortcode                        | Keyboard & Mouse | Full Keyboard Gameplay |
| ----------------- | -------------------------------- | ---------------- | ---------------------- |
| Hotbar Slot 1     | `:_input_key.hotbar.1:`          | 1                | 1                      |
| Hotbar Slot 2     | `:_input_key.hotbar.2:`          | 2                | 2                      |
| Hotbar Slot 3     | `:_input_key.hotbar.3:`          | 3                | 3                      |
| Hotbar Slot 4     | `:_input_key.hotbar.4:`          | 4                | 4                      |
| Hotbar Slot 5     | `:_input_key.hotbar.5:`          | 5                | 5                      |
| Hotbar Slot 6     | `:_input_key.hotbar.6:`          | 6                | 6                      |
| Hotbar Slot 7     | `:_input_key.hotbar.7:`          | 7                | 7                      |
| Hotbar Slot 8     | `:_input_key.hotbar.8:`          | 8                | 8                      |
| Hotbar Slot 9     | `:_input_key.hotbar.9:`          | 9                | 9                      |
| Look Up Slight    | `:_input_key.lookUpSlight:`      | Unassigned       | SUBTRACT               |
| Look Down Slight  | `:_input_key.lookDownSlight:`    | Unassigned       | ADD                    |
| Look Down Left    | `:_input_key.lookDownLeft:`      | Unassigned       | NUMPAD1                |
| Look Down         | `:_input_key.lookDown:`          | Unassigned       | NUMPAD2                |
| Look Down Right   | `:_input_key.lookDownRight:`     | Unassigned       | NUMPAD3                |
| Look Left         | `:_input_key.lookLeft:`          | Unassigned       | NUMPAD4                |
| Look Center       | `:_input_key.lookCenter:`        | Unassigned       | NUMPAD5                |
| Look Right        | `:_input_key.lookRight:`         | Unassigned       | NUMPAD6                |
| Look Up Left      | `:_input_key.lookUpLeft:`        | Unassigned       | NUMPAD7                |
| Look Up           | `:_input_key.lookUp:`            | Unassigned       | NUMPAD8                |
| Look Up Right     | `:_input_key.lookUpRight:`       | Unassigned       | NUMPAD9                |
| Look Up Smooth    | `:_input_key.lookUpSmooth:`      | Unassigned       | UP                     |
| Look Down Smooth  | `:_input_key.lookDownSmooth:`    | Unassigned       | DOWN                   |
| Look Left Smooth  | `:_input_key.lookLeftSmooth:`    | Unassigned       | LEFT                   |
| Look Right Smooth | `:_input_key.lookRightSmooth:`   | Unassigned       | RIGHT                  |
| Menu Cancel       | `:_input_key.menuCancel:`        | Button5          | Button5                |
| Mob Effects       | `:_input_key.mobEffects:`        | Z                | TAB                    |
| Open Command      | `:_input_key.command:`           | SLASH            | SLASH                  |
| Open Notification | `:_input_key.interactwithtoast:` | N                | N                      |

### Controller Input Keys

| Name                          | Shortcode                                     | Xbox                                                 | Nintendo Switch                                        | PlayStation                                                 |
| ----------------------------- | --------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------- |
| Fly Up Slow                   | `:_input_key.flyUpSlow:`                      | Unassigned                                           | Unassigned                                             | Unassigned                                                  |
| Fly Down Slow                 | `:_input_key.flyDownSlow:`                    | ![](/assets/images/text/emojis/xbox/right_stick.png) | ![](/assets/images/text/emojis/switch/right_stick.png) | ![](/assets/images/text/emojis/playstation/right_stick.png) |
| Mob Effects/Open Notification | `:_input_key.mobeffectsandinteractwithtoast:` | ![](/assets/images/text/emojis/xbox/select.png)      | ![](/assets/images/text/emojis/switch/minus.png)       | ![](/assets/images/text/emojis/playstation/touch_pad.png)   |

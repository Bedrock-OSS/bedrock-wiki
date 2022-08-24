---
title: Gametest Form
category: Game Tests
---

Minecraft 1.18.30 released new wonderful module, `mojang-minecraft-ui`. With that module, we can create form ui without need JSON-UI.

## Setup
Same with another modules, you need to add the dependency into your `manifest.json`

```json
{
  "dependencies": [
    {
      "uuid": "2bd50a27-ab5f-4f40-a596-3641627c635e",
      "version": [0, 1, 0]
    }
  ] 
}
```

And import the module on your script files

```js
import {
  ActionFormData,
  MessageFormData,
  ModalFormData
} from "mojang-minecraft-ui";
```

## Form Type
The `mojang-minecraft-ui` module bundled with 3 form types, the Action Form Data, Message Form Data, and Modal Form Data

### ActionFormData
Action Form is the form that contain bunch of buttons. This form is ideal for shop UI, minigames selection, etc. If you have seen featured server has UI that consist so many button, the form is same as it.

To use the form, you need to create it first.

```js
let form = new ActionFormData();
```

The form has 3 functions/properties: Title, Body, and Button.

#### Title
Title is a text on the top form to show the player what form is it.

```js
form.title("Action Form");
```

#### Body
Body is some sort of description of the form. You can explain more of what the function of the form.

```js
form.body("This is Action Form Body");
```

#### Button
Button is the main function of the form. The form can have so many button for the player to choose. Button has 2 arguments. First argument is the label, show the text of the button. 

Second argument argument is button icon. Show the picture/icon of the button. To use it, you need to define the texture path. You can use resource pack to show icon (Example `textures/items/compass`). Custom texture need `.png` at the end of the path

```js
// No icon
form.button("Button 1")
// With vanilla texture
form.button("Button 2", "textures/items/compass");
// With custom texture
form.button("Button 3", "textures/icon/btn_icon_3.png");
```

:::warning
Even the form can have infinite button, but the maximum number of button is 256 buttons. You must not have more than 256 buttons or your form may break.
:::

#### Example
This is the example of using the Action Form.

```js
let form = new ActionFormData();
form.title("Minigames");
form.body("Choose the games");
form.button("Spleef", "textures/items/diamond_shovel");
form.button("Murder Mystery", "textures/items/iron_sword");
form.button("Bedwars", "textures/minigames/bedwars.png");
```

<<<<<<< Updated upstream
=======
![image](/assets/images/gametest/gametest-form/action-form.png)

>>>>>>> Stashed changes
### MessageFormData
Message form is the form that consist only 2 buttons with large description (body). This form is great for Yes/No question or OK/Cancel form.

```js
let form = new MessageFormData();
```

Message Form is almost the same as Action Form. Only difference are the button called Button1 and Button2 instead.

#### Title
Title is a text on the top form to show the player what form is it.

```js
form.title("Message Form");
```

#### Body
Body is some sort of description of the form. You can explain more of what the function of the form.

Body on Message Form is huge, so you can fit 5+ lines of message there. To break new line, use `\n`

```js
form.body("This is Message Form Body");
```

#### Button1 and Button2
Message Form only contain 2 buttons, not like Action Form that can have more than 2 buttons. This form was created to give a warning or message to players.

Just like button on Action Form, button1 and button2 has 2 arguments, text and icon

```js
form.button1("Button 1: Yes");
form.button2("Button 2: No")
```

:::tip
Because the Message Form only have 2 buttons, it's recommended to have "Yes/OK" option on "button1" and "No/Cancel" option on "button2". You can see the problem in the "Show and Respond" section
:::

#### Example
This is the example of using Message Form

```js
let form = new MessageFormData();
form.title("Higher Random Tick Warning");
form.body("Are you sure you want to run this command:\n/gamerule randomtickspeed 1000\nThis can cause lag to the world");
form.button1("Yes, do it!");
form.button2("No, leave it as default!");
```

<<<<<<< Updated upstream
=======
![image](/assets/images/gametest/gametest-form/message-form.png)


>>>>>>> Stashed changes
### ModalFormData
Modal Form has the most type input from another 2 form. It has text field, slider, dropdown, and toggle. Modal form is useful for some type of complicated form. Modal form doesn't have body property.

```js
let form = new ModalFormData()
```

Modal Form has 5 property: Title, Text field, Dropdown, Slider, and Toggle.

#### Title
Title is a text on the top form to show the player what form is it.

```js
form.title("Modal Form");
```

#### Text Field
Text field is property to allow player to insert text. It has 3 arguments.

1. Label (`Str`), the title for the text field.
2. Placeholder Text (`Str`), some sort of description or info of the text field.
3. Default Value (`Str`)[Optional], set the default text to the text field. Default is empty (`null`)

```js
// Without default value
form.textField("Text Field", "Type something here");
// With default value
form.textField("Text Field", "Type something here", "Default value");
```

#### Dropdown
Dropdown is property that contain some options. It has 3 arguments.

1. Label (`Str`), the title for the dropdown.
2. Options (`List[String]`), the list of the options for the player choose.
3. Default Value Index (`Int`)[Optional], the index of default value. Default is `0` (first item in list)

```js
// Internal Options
form.dropdown("Dropdown", [ "Opt 1", "Opt 2", "Opt 3" ], 1);
// Default Index "1" will select the second option as default option

// External Options (Recommended)
let options = [ "Opt 1", "Opt 2", "Opt 3" ];
form.dropdown("Dropdown", options);
```

#### Slider
Slider is property that hold the range of numbers. It has 5 arguments.

1. Label (`Str`), the title for the slider.
2. Min Number (`Int`), the lowest number of the range.
3. Max Number (`Int`), the highest number of the range.
4. Value Step (`Int`), the step value of the range.
5. Default Value (`Int`)[Optional], the default number of the slider. Default is the lowest number.

```js
// Normal range from 1 to 100
form.slider("Slider", 1, 100, 1);
// Even number from 0 to 10 with default value is 10
form.slider("Slider", 0, 10, 2, 10);
```

#### Toggle
Toggle is property for true/false options. It has 2 arguments.

1. Label (`Str`), the title for the toggle.
2. Default Value (`Bool`), the default boolean of the toggle. Default is `false`

```js
// Without default value
form.toggle("Toggle");
// With default value
form.toggle("Toggle", true);
```

#### Example
This is example of Modal Form with all the component

```js
let form = new MessageFormData()
let effectList = [ "Regeneration", "Protection", "Poison", "Wither" ]
form.title("Effect Generator");
form.textField("Target", "Target of Effect")
form.dropdown("Effect Type", effectList)
form.slider("Effect Level", 0, 255, 1)
form.toggle("Hide Effect Particle", true)
```

<<<<<<< Updated upstream
=======
![image](/assets/images/gametest/gametest-form/modal-form.png)



>>>>>>> Stashed changes
## Show and Respond
After we create the form, we need to show the form to the player and save the respond to run another task. But we need some event to show our form. The most used event is using `itemUse` event, that read when player use (right-click) an item.

Let say, our form must be open with stick that named "Form Opener". You can use any event with any configuration in order to open the form

```js
world.events.beforeItemUse.subscribe(event => {
  if (event.item.id === "minecraft:stick" && event.item.nameTag === "Form Opener") {
    // Form
  };
})
```

:::warning
The form open when no UI is open. Meaning if you want to open the form with custom command/chat message, you can't open the form because chat UI is open. You need to use damage to close the chat UI, then open the form. Best thing is use another event.
:::

Inside the if statement is where our form is show. Using `.show()`, the form will open. Inside show function, you need player class as an argument. After we show the form, we can use `.then()` to save the respond of player.

```js
form.show(event.source).then(r => {
  // The code after player respond/close the form
})
```

When player close the form, the function inside the `.then()` is still running, even when no input was given. This can cause unintended code to running when player just closing the form. To prevent that, you need to cancel the form to running using `.isCanceled`.

```js
form.show(event.source).then(r => {
  // This will stop the code when player close the form
  if (r.isCanceled) return;

  // The code
})
```

Finally, we can do something with player input. Every form has their own return input from the player.

### ActionFormData
Action form save the input inside `.selection`. It return a number of button index, start from 0 as button 1. You can use switch-case to run certain code for every button

```js
form.show(event.source).then(r => {
  // This will stop the code when player close the form
  if (r.isCanceled) return;

  let respond = r.selection;
  switch (respond) {
    case 0:
      // Do something when button 1 is pressed
      // Don't forget "break" for every case
      break;

    case 1:
      // Do something when button 2 is pressed
      break;

    // You can add more for every button
    default:
      // Use when your button doesn't have function yet
      // You don't need to use "break" on default case
      // Remember to place the default on very bottom
  }
})
```

### ModalFormData
Same like action form, Message form save the input inside `.selection`. But something wrong happened. `.button1` return 1, but `.button2` return 0. The `.isCanceled` is not working, but closing the form will return 0. Meaning button2 is used for "No/Cancel" option.

```js
form.show(event.source).then(r => {
  // ".isCanceled" is not working, but return 0 to ".selection"
  if (r.selection === 0) {
    // Do something when player close the form or press "button2"
    return
  };

  // Do something when player press "button1"
})
```

### ModalFormData
Modal form save the input inside `.formValues` as list of input. The input is sort based on what component on the top to the button.

For example
```js
let form = new ModalFormData();
form.textField(...)
form.dropdown(...)
form.slider(...)
form.toggle(...)

// ...
console.warn(r.formValues)
// Output: [ <TextField Input>, <Dropdown Input>, <Slider Input>, <Toggle Input> ]
```

Because the form will sort based on what component on the top first, you can specify every input into variable

```js
let form = new ModalFormData();
form.textField(...)
form.dropdown(...)
form.slider(...)
form.toggle(...)

form.show(event.source).then(r => {
  // This will stop the code when player close the form
  if (r.isCanceled) return;

  // This will give every input as their own variable
  let [ textField, dropdown, slider, toggle ] = r.formValues

  // Do something
})
```

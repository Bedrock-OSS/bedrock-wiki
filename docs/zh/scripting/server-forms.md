---
title: 服务器表单
category: 教程
mentions:
    - DrakPlay
    - cda94581
    - fraysdev
    - MedicalJewel105
    - Worldwidebrine
    - Fabrimat
    - Axisander
    - JaylyDev
    - Herobrine643928
    - SmokeyStack
    - ThomasOrs
    - kumja1
description: 无需处理 JSON UI 即可创建表单 UI。
---

在 1.18.30 版本中，Minecraft 发布了一个很棒的脚本模块 `@minecraft/server-ui`（原名 `mojang-minecraft-ui`）。使用这个模块，我们可以创建表单 UI，无需处理 JSON UI。

## 设置

与其他模块一样，你需要将依赖项添加到你的 `manifest.json`

```json
{
    "dependencies": [
        {
            "module_name": "@minecraft/server",
            "version": "2.0.0"
        },
        {
            "module_name": "@minecraft/server-ui",
            "version": "2.0.0"
        }
    ]
}
```

并在你的脚本文件中导入模块

```js
import { ActionFormData, MessageFormData, ModalFormData } from "@minecraft/server-ui";
```

## 表单类型

`@minecraft/server-ui` 模块带有 3 种表单类型——操作表单数据、消息表单数据和模态表单数据。

### 操作表单

操作表单是包含一组按钮的表单。这种表单非常适合商店 UI、小游戏选择等。如果你见过特色服务器有一个带很多按钮的 UI，那就是这种表单。

要使用表单，你需要先创建它。

```js
let form = new ActionFormData();
```

表单有 3 个函数/属性：标题、正文和按钮。

#### 标题

标题是表单顶部的文本。

```js
form.title("Action Form");
```

#### 正文

正文添加了一些关于表单的描述。你可以更多地解释表单的功能。

```js
form.body("This is Action Form Body");
```

#### 按钮

按钮是表单的主要功能。表单可以有多个按钮供玩家选择。每个按钮有 2 个参数。第一个参数是标签，显示在按钮上的文本。

第二个参数是可选的，即按钮图标，在按钮上显示图片/图标。要使用它，你需要定义纹理路径。你可以使用原版资源包显示图标（示例 `textures/items/compass`）。自定义纹理需要在路径末尾添加 `.png`，并且在世界需要有有效的资源包。

```js
// No icon
form.button("Button 1");
// With vanilla texture
form.button("Button 2", "textures/items/compass");
// With custom texture
form.button("Button 3", "textures/wiki/icons/btn_icon_3");
```

:::warning
按钮的最大数量是 256。更多可能会导致表单损坏。
:::

#### 示例

这是一个操作表单的示例。

```js
let form = new ActionFormData();
form.title("Minigames");
form.body("Choose the games");
form.button("Spleef", "textures/items/diamond_shovel");
form.button("Murder Mystery", "textures/items/iron_sword");
form.button("Bedwars", "textures/wiki/minigames/bedwars");
```

![image](action-form.png)

### 消息表单

消息表单是一个包含 2 个按钮和一个大型描述（正文）的表单。这种表单非常适合是/否问题或确定/取消表单。

```js
let form = new MessageFormData();
```

消息表单与操作表单非常相似。主要区别是按钮被称为 Button1 和 Button2。

#### 标题

标题是表单顶部的文本。

```js
form.title("Message Form");
```

#### 正文

正文添加了一些关于表单的描述。你可以更多地解释表单的功能。

消息表单的正文文本限制非常大，所以你可以在其中放置 5 行以上的文本。要添加新行，使用 `\n`。

```js
form.body("This is Message Form Body");
```

#### Button1 和 Button2

消息表单只包含 2 个按钮，与可以包含多个按钮的操作表单不同。创建此表单是为了向玩家发出警告或消息。

就像操作表单上的按钮一样，button1 和 button2 有 2 个参数，文本和图标。

```js
form.button1("Button 1: No");
form.button2("Button 2: Yes");
```

:::tip
因为消息表单只有 2 个按钮，建议将 "Yes/OK" 选项放在 "button2"，将 "No/Cancel" 选项放在 "button1"。你可以在"显示和响应"部分看到问题
:::

#### 示例

这是一个消息表单的示例

```js
let form = new MessageFormData();
form.title("Higher Random Tick Warning");
form.body(
    "Are you sure you want to run this command:\n/gamerule randomtickspeed 1000\nThis can cause lag to the world"
);
form.button1("No, leave it as default!");
form.button2("Yes, do it!");
```

![image](message-form.png)

### 模态表单

模态表单是表单中可用输入类型最多的表单。它有文本字段、下拉菜单、滑块和切换。模态表单适用于复杂的表单，例如给予效果的表单。模态表单没有正文属性。

```js
let form = new ModalFormData();
```

模态表单有 5 个属性：标题、文本字段、下拉菜单、滑块和切换。

#### 标题

标题是表单顶部的文本。

```js
form.title("Modal Form");
```

#### 文本字段

文本字段是一个允许玩家插入文本的属性。它有 3 个参数。

1. 标签（`Str`），文本字段的标题。
2. 占位符文本（`Str`），文本字段的一些描述或信息。
3. 默认值（`Str`）[可选]，文本字段中的默认文本。默认为空（`null`）。

```js
// Without default value
form.textField("Text Field", "Type something here");
// With default value
form.textField("Text Field", "Type something here", "Default value");
```

#### 下拉菜单

下拉菜单是一个包含选项列表的属性。它有 3 个参数。

1. 标签（`Str`），下拉菜单的标题。
2. 选项（`List[String]`），玩家可以选择的选项列表。
3. 默认值索引（`Int`）[可选]，默认值的索引。默认为 `0`（列表中的第一项）。

下拉菜单也很独特，因为它们不返回选项的值，而是返回选项的编号。例如，第一个选项将返回 "0"，第二个 "1"，等等。通过这种方式，选项可以在后台映射到它们各自的值，并且显示文本可以与值不同。

```js
// Internal Options
form.dropdown("Dropdown", ["Opt 1", "Opt 2", "Opt 3"], 1);
// Default Index "1" will select the second option ("Opt 2") as default option

// External Options (Recommended)
let options = ["Opt 1", "Opt 2", "Opt 3"];
form.dropdown("Dropdown", options);
```

#### 滑块

滑块是一个可以容纳一系列数字的属性。它有 5 个参数。

1. 标签（`Str`），滑块的标题。
2. 最小数字（`Int`），范围的最小数字。
3. 最大数字（`Int`），范围的最大数字。
4. 值步长（`Int`），范围的步长值。
5. 默认值（`Int`）[可选]，滑块的默认数字。默认为最小数字。

```js
// Normal range from 1 to 100
form.slider("Slider", 1, 100, 1);
// Even number from 0 to 10 with default value set as 10
form.slider("Slider", 0, 10, 2, 10);
```

#### 切换

切换是一个只有 true/false 选项的属性。它有 2 个参数。

1. 标签（`Str`），切换的标题。
2. 可选的 toggleOptions（`Dict`），允许设置默认值和工具提示

```js
form.toggle("Toggle", {
    defaultValue: true,
});
```

#### 示例

这是一个包含所有组件的模态表单的示例

```js
let form = new ModalFormData();
let effectList = ["Regeneration", "Protection", "Poison", "Wither"];
form.title("Effect Generator");
form.textField("Target", "Target of Effect");
form.dropdown("Effect Type", effectList);
form.slider("Effect Level", 0, 255, {
    defaultValue: 1,
});
form.toggle("Hide Effect Particle", {
    defaultValue: true,
});
```

![image](modal-form.png)

## 显示和响应

创建表单后，我们需要向玩家显示表单并将响应保存到以运行其他任务。我们需要一些事件来显示我们的表单。最常用的事件是使用 `itemUse` 事件，当玩家使用（右键点击）物品时触发。

假设我们的表单必须用一根名为 "Form Opener" 的棍子打开。你可以使用任何事件和任何配置来打开你自己的表单。

```js
world.beforeEvents.itemUse.subscribe((event) => {
    if (event.itemStack.typeId === "minecraft:stick" && event.itemStack.nameTag === "Form Opener") {
        // Form
    }
});
```

:::warning
这些表单仅在其他 UI 未打开时才能打开。如果你想通过自定义命令/聊天消息打开表单，你无法做到，因为聊天 UI 是打开的。你需要使用 `/damage` 关闭聊天 UI，然后打开表单。最佳选择是使用另一个事件。
:::

在 if 语句内，我们将显示我们的表单。使用 `.show()`，表单将打开。在 show 函数中，你需要使用一个玩家类作为参数。显示表单后，我们可以使用 `.then()` 保存玩家的响应。

```js
form.show(event.source)
    .then((r) => {
        // The code when the player responds to/closes the form
    })
    .catch((e) => {
        console.error(e, e.stack);
    });
```

当玩家关闭表单时，`.then()` 内的函数将运行，即使没有输入。这可能会导致玩家只是关闭表单时意外运行代码。要防止这种情况，你需要使用 `.canceled` 取消脚本。

```js
form.show(event.source)
    .then((r) => {
        // This will stop the code when the player closes the form
        if (r.canceled) return;

        // The code when the player responds to the form
    })
    .catch((e) => {
        console.error(e, e.stack);
    });
```

最后，我们可以对玩家输入做些什么。每个表单都有自己从玩家那里返回的输入。

### 操作表单

操作表单将输入保存在 `.selection` 中。它返回按钮索引的数字，从 0 开始作为按钮 1。你可以使用 switch-case 为每个按钮运行特定的代码。

```js
form.show(event.source)
    .then((r) => {
        // This will stop the code when the player closes the form
        if (r.canceled) return;

        let response = r.selection;
        switch (response) {
            case 0:
                // Do something when button 1 is pressed
                // Don't forget "break" for every case
                break;

            case 1:
                // Do something when button 2 is pressed
                break;

            // You can add cases for each button
            default:
            // Use this when your button doesn't have a function yet
            // You don't need to use "break" on default case
            // Remember to place the default on very bottom
        }
    })
    .catch((e) => {
        console.error(e, e.stack);
    });
```

### 消息表单

与操作表单类似，消息表单将输入保存在 `.selection` 中。点击 `.button1` 将返回 0，点击 `.button2` 将返回 1。虽然没有关闭按钮，但按 'Escape' 将关闭表单。我们可以使用 `.canceled` 来处理此事件。

```js
form.show(event.source)
    .then((r) => {
        if (r.canceled || r.selection == 0) {
            // Do something when the player closes the form or presses "button1"
            return;
        }
        //we don't need to test for "r.selection == 1" since that the only case we didn't handle yet.
        // Do something when player presses "button2"
    })
    .catch((e) => {
        console.error(e, e.stack);
    });
```

### 模态表单

模态表单将输入作为输入列表保存在 `.formValues` 中。输入从最顶部的组件排序到最底部的组件。

例如

```js
let form = new ModalFormData();
form.textField(...);
form.dropdown(...);
form.slider(...);
form.toggle(...);

// ...
console.warn(r.formValues);
// Output: [ <TextField Input>, <Dropdown Input>, <Slider Input>, <Toggle Input> ]
```

因为表单将根据最顶部的组件首先输出，你可以将每个输入分配给自己的变量。

```js
let form = new ModalFormData();
form.textField(...);
form.dropdown(...);
form.slider(...);
form.toggle(...);

form.show(event.source).then(r => {
	// This will stop the code when the player closes the form
	if (r.canceled) return;

	// This will assign every input their own variable
	let [ textField, dropdown, slider, toggle ] = r.formValues;

	// Do something
}).catch(e => {
	console.error(e, e.stack);
});
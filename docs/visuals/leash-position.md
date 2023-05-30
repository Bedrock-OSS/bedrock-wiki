---
title: Leash Position
category:
    - Tutorials
mentions:
    - MedicalJewel105
    - SirLich
    - Overload1252
tags:
    - easy
---

Have you ever wanted to change position of a leash on your entity?
If so, this page is for you!

## Blockbench Part

To set a leash position, we will use Blockbench.
Open your model, in this case it will be a llama model.

*Don't mind strange bones rotation, mojang likes to render models correctly through animations.*

![](/assets/images/visuals/leash-position/model-1.png)

Now search for locator `lead`.

![](/assets/images/visuals/leash-position/model-2.png)

If it doesn't exist, you can

<Spoiler title="create it">

1. Select a group.
2. Right-click on it.
3. Choose "Add Locator" option.
![](/assets/images/visuals/leash-position/locator-1.png)
4. Rename it to `lead`

</Spoiler>

The last thing will be to move the locator where you want and save the model.

![](/assets/images/visuals/leash-position/model-3.png)

## Testing

Before:

![](/assets/images/visuals/leash-position/result-0.png)

After:

![](/assets/images/visuals/leash-position/result-1.png)

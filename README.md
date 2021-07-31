<p align="center">
    <h1 align="center">Bedrock Wiki</h1>
    <p align="center">The Bedrock Wiki is a knowledge-sharing website for Technical Bedrock, containing documentation, tutorials, and general how-to information.<br>Here, you can contribute to this amazing, open-source resource!</p>
    <p align="center"><strong><a href="https://wiki.bedrock.dev/">Visit the website!</a>             <a href="https://discord.gg/pytC8zKHPn">Join the discord!</a></strong></p>
    <br>
</p>

# Contributing

## Discord

Please join the [discord](https://discord.gg/pytC8zKHPn), which is where all wiki-communication takes place. While small changes and new articles do not need permission, large-scale changes should go through community review.

## Using GitHub

It is beyond the scope of this readme to teach the proper use of Git and GitHub, but you can always reach out personally for help. Some steps to get you started though (google steps if unsure):
 - `make github account`
 - `fork the repository`
 - `make changes, commit changes, push changes`
 - `create pull requests`

## Commits and Pulls

Please provide proper commit messages when contributing, this will make it much easier to approve pull requests. Don't change anything in the config unless you really need to.

## Contributing without GitHub

Want to submit an article, but can't be bothered to learn Git, or GitHub? You can send me markdown articles directly, and I will add them manually.

## Running Locally
You can locally test the website by
- `npm install`
- `npm run dev`

Assuming you did it correctly, the local server will run and you should see `http://localhost:3000`
printed out.

You can now make changes to any of the markdown files and you'll see the changes reflected at that URL in your browser!

## Codeblock Filepaths

You can annotate your code-blocks with filepath information, using the following format:

<CodeHeader>BP/items/gem.item.json</CodeHeader>

```json
{
	"resource_pack_name": "tut",
	"texture_name": "atlas.items",
	"texture_data": {
		"meal": {
			"textures": "textures/items/meal"
		},
		"gem": {
			"textures": "textures/items/gem"
		}
	}
}
```

## File Tree Viewer

There is a number of CSS classes, which help build the directory structure. 

Example:
```html
<div markdown="0" class="folder-structure">
    <ul>
        <li><span class="folder">BP</span>
            <ul>
                <li><span class="folder">items</span>
                    <ul>
                        <li><span class="file">gem.item.json</span></li>
                        <li><span class="file">meal.item.json</span></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><span class="folder">RP</span>
            <ul>
                <li><span class="folder">items</span>
                    <ul>
                        <li><span class="file">gem.item.json</span></li>
                        <li><span class="file">meal.item.json</span></li>
                    </ul>
                </li>
                <li><span class="folder">texts</span>
                    <ul>
                        <li><span class="file">en_US.lang</span></li>
                    </ul>
                </li>
                <li><span class="folder">textures</span>
                    <ul>
                        <li><span class="file">item_texture.json</span></li>
                        <li><span class="folder">items</span>
                            <ul>
                                <li><span class="image">gem.png</span></li>
                                <li><span class="image">meal.png</span></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>
```

Result:
<div markdown="0" class="folder-structure">
    <ul>
        <li><span class="folder">BP</span>
            <ul>
                <li><span class="folder">items</span>
                    <ul>
                        <li><span class="file">gem.item.json</span></li>
                        <li><span class="file">meal.item.json</span></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><span class="folder">RP</span>
            <ul>
                <li><span class="folder">items</span>
                    <ul>
                        <li><span class="file">gem.item.json</span></li>
                        <li><span class="file">meal.item.json</span></li>
                    </ul>
                </li>
                <li><span class="folder">texts</span>
                    <ul>
                        <li><span class="file">en_US.lang</span></li>
                    </ul>
                </li>
                <li><span class="folder">textures</span>
                    <ul>
                        <li><span class="file">item_texture.json</span></li>
                        <li><span class="folder">items</span>
                            <ul>
                                <li><span class="image">gem.png</span></li>
                                <li><span class="image">meal.png</span></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>

## CSS classes

### folder-structure

Changes unordered list style, so it resembles directory tree.

### folder

Adds folder emoji before element. 

### file

Adds text file emoji before element. 

### image

Adds image emoji before element. 

## Structure generator

There is also automatic structure generator at [https://stirante.com/dir-converter/converter.html](https://stirante.com/dir-converter/converter.html).

The text area on the left accepts a list of paths delimited by new line. After clicking the convert button, the HTML should be generated in text area on the right side.

To generate the output in the first example, use this input:
```
RP/texts/en_US.lang
RP/textures/item_texture.json
RP/items/meal.item.json
BP/items/meal.item.json
BP/items/gem.item.json
RP/items/gem.item.json
RP/textures/items/gem.png
RP/textures/items/meal.png
```

### File links

To link file inside directory structure to an element, add `#<id>` after file path like this:

```
RP/texts/en_US.lang
RP/textures/item_texture.json
RP/items/meal.item.json#rp_meal_item
BP/items/meal.item.json#bp_meal_item
BP/items/gem.item.json#bp_gem_item
RP/items/gem.item.json#rp_gem_item
RP/textures/items/gem.png
RP/textures/items/meal.png
```

This will result in this output:
```html
<div markdown="0" class="folder-structure">
    <ul>
        <li><span class="folder">BP</span>
            <ul>
                <li><span class="folder">items</span>
                    <ul>
                        <li><a href="#bp_gem_item" class="file">gem.item.json</>
                        </li>
                        <li><a href="#bp_meal_item" class="file">meal.item.json</>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><span class="folder">RP</span>
            <ul>
                <li><span class="folder">items</span>
                    <ul>
                        <li><a href="#rp_gem_item" class="file">gem.item.json</>
                        </li>
                        <li><a href="#rp_meal_item" class="file">meal.item.json</>
                        </li>
                    </ul>
                </li>
                <li><span class="folder">texts</span>
                    <ul>
                        <li><span class="file">en_US.lang</>
                        </li>
                    </ul>
                </li>
                <li><span class="folder">textures</span>
                    <ul>
                        <li><span class="file">item_texture.json</>
                        </li>
                        <li><span class="folder">items</span>
                            <ul>
                                <li><span class="image">gem.png</>
                                </li>
                                <li><span class="image">meal.png</>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>
```

# Icons

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

# Using Panels

There are three kinds: Tip, Warning, and Error

Use like this:
```
:::warning
This document covers experimental features, for 1.16 format version items. If you would like to learn about stable items, [you can do so here](/items/items-intro).
:::
```

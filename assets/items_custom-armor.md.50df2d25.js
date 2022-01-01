import{_ as o,r as p,c as r,a,w as e,b as n,d as s,o as l}from"./404.md.b72226f0.js";var c="/assets/images/tutorials/custom-armor/custom_chestplate.png",i="/assets/images/tutorials/custom-armor/custom_main.png",u="/assets/images/tutorials/custom-armor/custom_legs.png",m="/assets/images/tutorials/custom-armor/armor-item-image.jpg",k="/assets/images/tutorials/custom-armor/armor-model-image.jpg",b="/assets/images/tutorials/custom-armor/custom_leggings.png",d="/assets/images/tutorials/custom-armor/custom_helmet.png",h="/assets/images/tutorials/custom-armor/custom_boots.png",y="/assets/images/tutorials/custom-armor/custom-set-image.jpg";const zn='{"title":"Custom Armor","description":"","frontmatter":{"title":"Custom Armor","category":"Tutorials","tags":["experimental"]},"headers":[{"level":2,"title":"Creating a Chest Piece","slug":"creating-a-chest-piece"},{"level":2,"title":"Adding attachables and textures","slug":"adding-attachables-and-textures"},{"level":2,"title":"Adding leggings","slug":"adding-leggings"},{"level":2,"title":"Adding a helmet","slug":"adding-a-helmet"},{"level":2,"title":"Adding the boots","slug":"adding-the-boots"},{"level":2,"title":"Bonus - Making set effects","slug":"bonus-making-set-effects"}],"relativePath":"items/custom-armor.md","lastUpdated":1641036811279}',g={},_=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("It is highly recommended that you look over "),n("a",{href:"/guide/blockbench.html"},"the BlockBench modelling and texturing"),s(" section in the beginners guides before tackling these sections.")])],-1),f=n("p",null,"Making custom armors is surprisingly easy to do, you need to do a bit of fiddling around as there are a few files that need to be added and there can be a little bit of texturing involved but you can do as much or as little as you want here.",-1),w=n("h2",{id:"creating-a-chest-piece",tabindex:"-1"},[s("Creating a Chest Piece "),n("a",{class:"header-anchor",href:"#creating-a-chest-piece","aria-hidden":"true"},"#")],-1),v=n("p",null,"Lets dive right into it and make sure our manifests are using the beta version.",-1),x=s("BP/manifest.json"),j=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"header"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My Custom Armor Behaviours"'),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Adds custom armor to the game"'),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"uuid"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"872849a3-408a-4919-9256-2a6f5a6537f0 "'),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token comment"},"// We make sure we target the min version with the beta item changes"),s(`
		`),n("span",{class:"token property"},'"min_engine_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},"]"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"modules"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"data"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"uuid"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"da3c8171-23ac-4da9-8cf7-ad45d6806c4e"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token comment"},"// We are also depending on the RP as we need textures within there"),s(`
	`),n("span",{class:"token property"},'"dependencies"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"uuid"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"8653ca00-05fb-426b-b579-e56f1ec21102"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br")])],-1),T=n("p",null,"Once done we can get on with creating our actual armor item piece like so.",-1),A=s("BP/items/my_chest.json"),q=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.16.100"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"minecraft:item"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:my_chest"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// Notice we give it the equipment category"),s(`
			`),n("span",{class:"token property"},'"category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"equipment"'),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token comment"},"// Make sure it appears within the chestplate category"),s(`
			`),n("span",{class:"token property"},'"minecraft:creative_category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"parent"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"itemGroup.name.chestplate"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// The icon we want to use in our INVENTORY"),s(`
			`),n("span",{class:"token property"},'"minecraft:icon"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"texture"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"my_chest"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// We give it a name"),s(`
			`),n("span",{class:"token property"},'"minecraft:display_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My Custom Armor"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// We dont want it to stack"),s(`
			`),n("span",{class:"token property"},'"minecraft:max_stack_size"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// We make sure it can only receive enchantments for chest pieces"),s(`
			`),n("span",{class:"token property"},'"minecraft:enchantable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"slot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"armor_torso"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// This tells it how much protection it should give"),s(`
			`),n("span",{class:"token property"},'"minecraft:armor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"protection"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// We want it to be repairable, and what to use to repair it"),s(`
			`),n("span",{class:"token property"},'"minecraft:repairable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"repair_items"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"items"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"minecraft:stick"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"repair_amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// Mark it as a wearable and that it goes in the chest slot"),s(`
			`),n("span",{class:"token property"},'"minecraft:wearable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"dispensable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"slot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"slot.armor.chest"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// Provide its durability"),s(`
			`),n("span",{class:"token property"},'"minecraft:durability"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"max_durability"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br")])],-1),P=n("p",null,[s("At this point you could just go and add an item texture into your "),n("code",null,"RP/textures/item_texture.json"),s(" with the key "),n("code",null,"my_chest"),s(" and you are on your way. We have attached a default item texture for your armor here if you want to just follow along.")],-1),B=n("p",null,[n("img",{src:c,alt:""})],-1),W=n("h2",{id:"adding-attachables-and-textures",tabindex:"-1"},[s("Adding attachables and textures "),n("a",{class:"header-anchor",href:"#adding-attachables-and-textures","aria-hidden":"true"},"#")],-1),C=n("p",null,"At this point your item would appear in game and would be wearable but it would not have any appearance. This is because we need to tell it how to handle the attachable equipment and give it a texture to show.",-1),M=n("p",null,[s("To start with you need to create an "),n("code",null,"attachables"),s(" folder in your RP (you may already have one).")],-1),I=s("RP/attachables/my_chest.json"),R=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.8.0"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"minecraft:attachable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token comment"},"// The identifier of the item"),s(`
			`),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:my_chest"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// These 2 are default and are required"),s(`
			`),n("span",{class:"token property"},'"materials"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"default"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"armor"'),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"enchanted"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"armor_enchanted"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"textures"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token comment"},"// This is our CUSTOM armor texture we need to make next"),s(`
				`),n("span",{class:"token property"},'"default"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"textures/models/armor/custom_main"'),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token comment"},"// This texture doesn't actually exist in our RP"),s(`
				`),n("span",{class:"token comment"},"// but it will blow up without it so leave it in"),s(`
				`),n("span",{class:"token property"},'"enchanted"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"textures/misc/enchanted_item_glint"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// We tell it what geometry to use for the chestplate"),s(`
			`),n("span",{class:"token property"},'"geometry"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"default"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"geometry.player.armor.chestplate"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// We tell it to hide the chest layer as we will be showing our armor on top"),s(`
			`),n("span",{class:"token property"},'"scripts"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"parent_setup"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"variable.chest_layer_visible = 0.0;"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// We tell it what controller to use (default armor one)"),s(`
			`),n("span",{class:"token property"},'"render_controllers"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"controller.render.armor"'),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br")])],-1),S=n("p",null,[s("At this point we need to make sure we create a texture for our model, these live in "),n("code",null,"RP/textures/models/armor"),s(". We however actually need 2 textures, as one is for the main armor as if it is being worn all together, and one is for the legs which when worn alone will often cover some of the boot area.")],-1),G=n("p",null,[s("If you do not feel creative we have provided a recoloured diamond armour skin for use with this tutorial. So just "),n("code",null,"Save As"),s(" and plop them in the folder.")],-1),H=n("p",null,[n("img",{src:i,alt:""}),n("img",{src:u,alt:""})],-1),N=n("blockquote",null,[n("p",null,[s("In the real world you would probably want to use "),n("code",null,"BlockBench"),s(" or some photo editing program to edit the textures and ideally see how they look on a model before you add them into the RP/addon. If you now go into the game and check what you have produced you should be able to wear your chest piece and pat yourself on the back for a job well done.")])],-1),z=n("p",null,[n("img",{src:m,alt:""}),n("img",{src:k,alt:""})],-1),E=n("h2",{id:"adding-leggings",tabindex:"-1"},[s("Adding leggings "),n("a",{class:"header-anchor",href:"#adding-leggings","aria-hidden":"true"},"#")],-1),V=n("p",null,"So while the chest piece alone is great, you probably want a whole set, so from here if you make another item json for the boots like so.",-1),L=s("BP/items/my_leggings.json"),O=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.16.100"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"minecraft:item"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:my_leggings"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"equipment"'),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token comment"},"// We give it the leggings category this time"),s(`
			`),n("span",{class:"token property"},'"minecraft:creative_category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"parent"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"itemGroup.name.leggings"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// Give it an applicable ITEM texture"),s(`
			`),n("span",{class:"token property"},'"minecraft:icon"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"texture"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"my_leggings"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:display_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My Custom Leggings"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:max_stack_size"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// Make sure the enchantments are for legs"),s(`
			`),n("span",{class:"token property"},'"minecraft:enchantable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"slot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"armor_legs"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:armor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"protection"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:repairable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"repair_items"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"items"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"minecraft:stick"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"repair_amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// Make sure the wearable slot is legs"),s(`
			`),n("span",{class:"token property"},'"minecraft:wearable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"dispensable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"slot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"slot.armor.legs"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:durability"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"max_durability"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br")])],-1),Y=n("p",null,"This is great and like before you will need to add your own item texture, although here is one if you just want to continue.",-1),$=n("p",null,[n("img",{src:b,alt:""})],-1),D=n("p",null,"Once we are done here we need to create the attachables file like this.",-1),F=s("RP/attachables/my_leggings.json"),U=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.8.0"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"minecraft:attachable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:my_leggings"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// Notice this is the same as before"),s(`
			`),n("span",{class:"token property"},'"materials"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"default"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"armor"'),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"enchanted"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"armor_enchanted"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"textures"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token comment"},"// Same as before"),s(`
				`),n("span",{class:"token property"},'"enchanted"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"textures/misc/enchanted_item_glint"'),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token comment"},"// This one is different as we are using the legging specific texture"),s(`
				`),n("span",{class:"token property"},'"default"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"textures/models/armor/custom_legs"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// Tell it to use leggings geom"),s(`
			`),n("span",{class:"token property"},'"geometry"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"default"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"geometry.humanoid.armor.leggings"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// Hide legs layer as we will be rendering over it"),s(`
			`),n("span",{class:"token property"},'"scripts"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"parent_setup"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"variable.leg_layer_visible = 0.0;"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// Same as before"),s(`
			`),n("span",{class:"token property"},'"render_controllers"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"controller.render.armor"'),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br")])],-1),J=n("p",null,"Given that we have already put in the textures needed we can run it and see our legs straight away.",-1),K=n("h2",{id:"adding-a-helmet",tabindex:"-1"},[s("Adding a helmet "),n("a",{class:"header-anchor",href:"#adding-a-helmet","aria-hidden":"true"},"#")],-1),Q=n("p",null,"This is just like the chest piece, just we change some of the categories and slots like so.",-1),X=s("BP/items/my_helm.json"),Z=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.16.100"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"minecraft:item"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:my_helm"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"equipment"'),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token comment"},"// Helmet category"),s(`
			`),n("span",{class:"token property"},'"minecraft:creative_category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"parent"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"itemGroup.name.helmet"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:icon"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"texture"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"my_helm"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:display_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My Custom Helmet"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:max_stack_size"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// Helm enchantment slot"),s(`
			`),n("span",{class:"token property"},'"minecraft:enchantable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"slot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"armor_head"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:armor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"protection"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:repairable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"repair_items"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"items"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"minecraft:stick"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"repair_amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// Wearable head slot"),s(`
			`),n("span",{class:"token property"},'"minecraft:wearable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"dispensable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"slot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"slot.armor.head"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:durability"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"max_durability"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br")])],-1),nn=n("p",null,"As you can see not much has changed, we just update the categories/slots to the correct ones for helms and then we add the attachables file (here is the item texture if you need it).",-1),sn=n("p",null,[n("img",{src:d,alt:""})],-1),tn=s("RP/attachables/my_helm.json"),an=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.8.0"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"minecraft:attachable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:my_helm"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"materials"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"default"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"armor"'),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"enchanted"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"armor_enchanted"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"textures"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"enchanted"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"textures/misc/enchanted_item_glint"'),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token comment"},"// Notice how we just use the main texture"),s(`
				`),n("span",{class:"token property"},'"default"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"textures/models/armor/custom_main"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// Set it to helmet"),s(`
			`),n("span",{class:"token property"},'"geometry"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"default"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"geometry.humanoid.armor.helmet"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// Hide helm layer"),s(`
			`),n("span",{class:"token property"},'"scripts"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"parent_setup"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"variable.helmet_layer_visible = 0.0;"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"render_controllers"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"controller.render.armor"'),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br")])],-1),en=n("p",null,"There you go, you now have 3/4 of a complete set, we may as well go through the boots as well so you know all the categories etc.",-1),on=n("h2",{id:"adding-the-boots",tabindex:"-1"},[s("Adding the boots "),n("a",{class:"header-anchor",href:"#adding-the-boots","aria-hidden":"true"},"#")],-1),pn=n("p",null,"You already know the pattern so lets make the item and attachable json files.",-1),rn=s("BP/items/my_boots.json"),ln=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.16.100"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"minecraft:item"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:my_boots"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"equipment"'),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token comment"},"// Boots category"),s(`
			`),n("span",{class:"token property"},'"minecraft:creative_category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"parent"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"itemGroup.name.boots"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:icon"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"texture"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"my_boots"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:display_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My Custom Boots"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:max_stack_size"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// Enchantable Feet"),s(`
			`),n("span",{class:"token property"},'"minecraft:enchantable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"slot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"armor_feet"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:armor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"protection"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:repairable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"repair_items"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"items"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"minecraft:stick"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"repair_amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// Feet slot"),s(`
			`),n("span",{class:"token property"},'"minecraft:wearable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"dispensable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"slot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"slot.armor.feet"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:durability"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"max_durability"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br")])],-1),cn=n("p",null,"The custom boots texture if you need it.",-1),un=n("p",null,[n("img",{src:h,alt:""})],-1),mn=s("RP/attachables/my_boots.json"),kn=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.8.0"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"minecraft:attachable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:my_boots"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"materials"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"default"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"armor"'),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"enchanted"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"armor_enchanted"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"textures"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"enchanted"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"textures/misc/enchanted_item_glint"'),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token comment"},"// Again main texture, only leggings are different"),s(`
				`),n("span",{class:"token property"},'"default"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"textures/models/armor/custom_main"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// Boots geom"),s(`
			`),n("span",{class:"token property"},'"geometry"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"default"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"geometry.humanoid.armor.boots"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// Hide boots layer"),s(`
			`),n("span",{class:"token property"},'"scripts"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"parent_setup"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"variable.boot_layer_visible = 0.0;"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"render_controllers"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"controller.render.armor"'),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br")])],-1),bn=n("p",null,"Thats it, you now have a whole suit of custom armor you can swagger around in, and use this as a basis to make whatever other armors you want in the game.",-1),dn=n("blockquote",null,[n("p",null,"It is worth noting that we have used 2 separate textures here, and you could potentially use a texture per attachable, but each new texture consumes memory so its best to use as few as possible. So this is what you should end up with, and as a bonus there is one more section on making set effects using filters, which is a bit more advanced but its a fun thing to do.")],-1),hn=n("p",null,[n("img",{src:y,alt:""})],-1),yn=n("h2",{id:"bonus-making-set-effects",tabindex:"-1"},[s("Bonus - Making set effects "),n("a",{class:"header-anchor",href:"#bonus-making-set-effects","aria-hidden":"true"},"#")],-1),gn=n("p",null,"This is a bit more advanced but lets say you want your custom armor to act like it's a set from an RPG game. We can add some code to check if we have the set equipped and do some great stuff with it.",-1),_n=n("p",null,"In this example we will just add a chance to teleport the attacker somewhere nearby and put a blurb on the console for flavour.",-1),fn=n("p",null,[s("As we want this to trigger when the player is hit we need to add some logic to the "),n("code",null,"player.json"),s(" file. This is a huge file and we unfortunately need to make sure it has all the default content in there as well due to the way it will overwrite the default player components etc.")],-1),wn=n("p",null,[s("So rather than include the whole "),n("code",null,"player.json"),s(" I will just include the parts you will need to add to your "),n("code",null,"components"),s(" and "),n("code",null,"events"),s(" sections.")],-1),vn=n("blockquote",null,[n("p",null,[s("If you have no idea what the "),n("code",null,"player.json"),s(" is then look in the vanilla behavior pack and look for it and just copy it over into your project. So first of all lets put in the damage sensor component (which goes in your component section) which listens for when you take damage and lets you raise an event from it.")])],-1),xn=s("BP/entities/player.json"),jn=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// The damage sensor checks for when you take damage"),s(`
	`),n("span",{class:"token property"},'"minecraft:damage_sensor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"triggers"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token comment"},"// Then when you take damage from a source"),s(`
			`),n("span",{class:"token property"},'"on_damage"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token comment"},"// We filter the damage trigger so we ignore any that dont match"),s(`
				`),n("span",{class:"token property"},'"filters"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token comment"},"// So this means we have to match ALL of the below critera"),s(`
					`),n("span",{class:"token property"},'"all_of"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
						`),n("span",{class:"token comment"},"// Each one of these represents an equipped item in the set"),s(`
						`),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token comment"},"// This is what we are testing"),s(`
							`),n("span",{class:"token property"},'"test"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"has_equipment"'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token comment"},"// The subject is the target, i.e self, damager etc"),s(`
							`),n("span",{class:"token property"},'"subject"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"self"'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token comment"},"// Domain is the body part in this case"),s(`
							`),n("span",{class:"token property"},'"domain"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"head"'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token comment"},"// We want to check that it matches our item"),s(`
							`),n("span",{class:"token property"},'"operator"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"=="'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token comment"},"// The item identifier we want to check"),s(`
							`),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:my_helm"'),s(`
						`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"test"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"has_equipment"'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"subject"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"self"'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"domain"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"torso"'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"operator"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"=="'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token comment"},"// Worth noting you can omit prefix for minecraft internal items i.e stick"),s(`
							`),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:my_chest"'),s(`
						`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"test"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"has_equipment"'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"subject"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"self"'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"domain"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"leg"'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"operator"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"=="'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:my_leggings"'),s(`
						`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"test"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"has_equipment"'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"subject"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"self"'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"domain"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"feet"'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"operator"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"=="'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:my_boots"'),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"]"),s(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token comment"},"// If all the triggers match in the filter raise the event"),s(`
				`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:armor_sets.my_custom.taken_damage"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// This means if it matches the check it still applies damage"),s(`
			`),n("span",{class:"token comment"},"// Can be good to ignore team damage or similar scenarios"),s(`
			`),n("span",{class:"token property"},'"deals_damage"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br")])],-1),Tn=n("p",null,"As you can see from the comments, there is a lot there but really all we are doing is listening out for something then making sure we only filter the results we care about then relay on an event.",-1),An=n("blockquote",null,[n("p",null,[s('The event can be called anything but it is often better to have it more specific, incase you end up having multiple similar events etc, also it can help finding if you have multiple sections to it, i.e I could search on "armour_sets" and find all events related to it. Then once you are done, in the same file we decide what we want to do with the event, which we put into our '),n("code",null,"events"),s(" section.")])],-1),qn=s("BP/entities/player.json"),Pn=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// The event we want to handle"),s(`
	`),n("span",{class:"token property"},'"wiki:armor_sets.my_custom.taken_damage"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"// Set a randomize so effects dont happen every time"),s(`
		`),n("span",{class:"token property"},'"randomize"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token comment"},"// We do a sequence here as we want to apply one command"),s(`
				`),n("span",{class:"token comment"},"// on one entity and the other on ourselves"),s(`
				`),n("span",{class:"token property"},'"sequence"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token comment"},"// This will take the attacker/other because it was in context"),s(`
						`),n("span",{class:"token comment"},"// at time of raising the event in the damage_sensor"),s(`
						`),n("span",{class:"token property"},'"run_command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token comment"},"// Teleport the entity away from us"),s(`
							`),n("span",{class:"token property"},'"command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"spreadplayers ~~ 5 20 @s"'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token comment"},"// Run the command on the attacker not us"),s(`
							`),n("span",{class:"token property"},'"target"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"other"'),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token comment"},"// This command just notifies us that the armor did something"),s(`
						`),n("span",{class:"token property"},'"run_command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"tellraw @s{\\"rawtext\\":[{\\"text\\":\\"\xA7aYour Armor Glows And The Enemy Vanishes\\"}]}"'),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token comment"},"// Dummy weighting so it happens semi frequently"),s(`
				`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"]"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br")])],-1),Bn=n("p",null,"Thats it, you can rejig the bits how you see fit but ultimately you have all the pieces to apply effects to armor and check for if you have the whole set applied or check for other equipment.",-1),Wn=n("blockquote",null,[n("p",null,"You can also change the equipment checks from self to other and check if whoever is attacking you has something equipped or even check if you are attacking a sort of block/entity and do different effects based on that. We haven't touched on that directly here but there is a good enough starting point to get you on your way and let you be creative with things.")],-1);function Cn(Mn,In,Rn,Sn,Gn,Hn){const t=p("CodeHeader");return l(),r("div",null,[_,f,w,v,a(t,null,{default:e(()=>[x]),_:1}),j,T,a(t,null,{default:e(()=>[A]),_:1}),q,P,B,W,C,M,a(t,null,{default:e(()=>[I]),_:1}),R,S,G,H,N,z,E,V,a(t,null,{default:e(()=>[L]),_:1}),O,Y,$,D,a(t,null,{default:e(()=>[F]),_:1}),U,J,K,Q,a(t,null,{default:e(()=>[X]),_:1}),Z,nn,sn,a(t,null,{default:e(()=>[tn]),_:1}),an,en,on,pn,a(t,null,{default:e(()=>[rn]),_:1}),ln,cn,un,a(t,null,{default:e(()=>[mn]),_:1}),kn,bn,dn,hn,yn,gn,_n,fn,wn,vn,a(t,null,{default:e(()=>[xn]),_:1}),jn,Tn,An,a(t,null,{default:e(()=>[qn]),_:1}),Pn,Bn,Wn])}var En=o(g,[["render",Cn]]);export{zn as __pageData,En as default};

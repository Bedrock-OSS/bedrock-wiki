import{_ as c,r as p,c as r,a as t,w as a,b as n,d as s,o as u}from"./404.md.ce6e2709.js";var i="/assets/images/blocks/parts-of-custom-tree/export_structures.png",k="/assets/images/blocks/parts-of-custom-tree/export_tree.png",b="/assets/images/blocks/parts-of-custom-tree/result.png";const Un='{"title":"Parts of Custom Tree","description":"","frontmatter":{"title":"Parts of Custom Tree","category":"Tutorials","tags":["experimental","expert"],"mention":["MedicalJewel105"]},"headers":[{"level":2,"title":"Features","slug":"features"},{"level":2,"title":"Making Leaves","slug":"making-leaves"},{"level":2,"title":"Making Log","slug":"making-log"},{"level":2,"title":"Making Fake Leaves","slug":"making-fake-leaves"},{"level":2,"title":"Making Stripped Log","slug":"making-stripped-log"},{"level":2,"title":"Making Sapling","slug":"making-sapling"},{"level":2,"title":"Making Sapling Placer","slug":"making-sapling-placer"},{"level":2,"title":"Making Loot Tables","slug":"making-loot-tables"},{"level":2,"title":"Exporting Structures","slug":"exporting-structures"},{"level":2,"title":"Resource Pack","slug":"resource-pack"},{"level":2,"title":"Result","slug":"result"},{"level":2,"title":"Download Example Pack","slug":"download-example-pack"}],"relativePath":"blocks/parts-of-custom-tree.md","lastUpdated":1639333921131}',m={},_=n("p",null,"Vanilla-like custom trees are possible. Make their parts by following this tutorial.",-1),d=n("h2",{id:"features",tabindex:"-1"},[s("Features "),n("a",{class:"header-anchor",href:"#features","aria-hidden":"true"},"#")],-1),g=n("ul",null,[n("li",null,[n("p",null,"Features:"),n("ul",null,[n("li",null,"Decaying leaves"),n("li",null,"If leaves were broken using shears, they will drop block"),n("li",null,"Leaves doesn't decay if placed by player"),n("li",null,"Logs are strippable and rotatable"),n("li",null,[s("Stripping logs is compatible with tools from other Add-Ons (if they have the "),n("code",null,'"tag:minecraft:is_axe":{}'),s(" component)")]),n("li",null,"Saplings can be bonemealed")])]),n("li",null,[n("p",null,"Issues:"),n("ul",null,[n("li",null,"Due to some Minecraft bugs leaves will decay after reloading chunks"),n("li",null,"If you made a structure with these blocks, it will crash the game when generated using features. Minecrfat bug.")])])],-1),y=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("To make leaves decay, you need to use "),n("code",null,"/fill"),s(" command that will replace custom_leaves with custom_leaves. It is needed for switching decaying to true because on player placing it sets decaying to false.")])],-1),f=n("div",{class:"warning custom-block"},[n("p",{class:"custom-block-title"},"WARNING"),n("p",null,"This method requires PC.")],-1),h=n("h2",{id:"making-leaves",tabindex:"-1"},[s("Making Leaves "),n("a",{class:"header-anchor",href:"#making-leaves","aria-hidden":"true"},"#")],-1),w=s("BP/blocks/custom_leaves.json"),v=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.16.100"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"minecraft:block"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:custom_leaves"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"properties"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"wiki:decaying"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token comment"},"//Properties will make leaves decay or not"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"permutations"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.block_property('wiki:decaying') == true"`),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"minecraft:ticking"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"looping"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"range"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"15.0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20.0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"on_tick"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:decay"'),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
						`),n("span",{class:"token comment"},"//In range of 10-18 seconds leaves will decay if weren't updated"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.block_property('wiki:decaying') == false"`),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token comment"},"//Empty components"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"minecraft:creative_category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"nature"'),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"group"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"itemGroup.name.leaves"'),s(`
				`),n("span",{class:"token comment"},"//Don't add this component for fake leaves, they should be hidden"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:destroy_time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.35"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:breakonpush"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:material_instances"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"*"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"texture"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"custom_leaves"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"render_method"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"alpha_test"'),s(`
					`),n("span",{class:"token comment"},"//Use this render method to make leaves half-transparent, like vanilla ones"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:flammable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"burn_odds"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"flame_odds"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:unit_cube"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:loot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"loot_tables/empty.json"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"//It is needed to prevent this block from dropping when just destroyed"),s(`
			`),n("span",{class:"token property"},'"minecraft:on_player_placing"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:set_property_false"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"//On player placing runs event that sets decaying property to false"),s(`
			`),n("span",{class:"token property"},'"minecraft:on_player_destroyed"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:on_destroyed"'),s(`
				`),n("span",{class:"token comment"},"//Triggers event that spawns different loot"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"events"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"wiki:set_property_false"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"set_block_property"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"wiki:decaying"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"//Sets decaying to false"),s(`
			`),n("span",{class:"token property"},'"wiki:set_property_true"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"set_block_property"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"wiki:decaying"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"//Sets decaying to true"),s(`
			`),n("span",{class:"token property"},'"wiki:on_destroyed"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"sequence"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.get_equipped_item_name == 'shears'"`),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"spawn_loot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"table"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"loot_tables/blocks/custom_leaves_block.json"'),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.get_equipped_item_name != 'shears'"`),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"spawn_loot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"table"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"loot_tables/blocks/custom_leaves_loot.json"'),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"//Spawns leaves block"),s(`
			`),n("span",{class:"token property"},'"wiki:decay"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"run_command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"setblock ~~~ air 0 destroy"'),n("span",{class:"token punctuation"},"]"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token comment"},"//Imitation of decaying"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br"),n("span",{class:"line-number"},"80"),n("br"),n("span",{class:"line-number"},"81"),n("br"),n("span",{class:"line-number"},"82"),n("br"),n("span",{class:"line-number"},"83"),n("br"),n("span",{class:"line-number"},"84"),n("br"),n("span",{class:"line-number"},"85"),n("br"),n("span",{class:"line-number"},"86"),n("br"),n("span",{class:"line-number"},"87"),n("br"),n("span",{class:"line-number"},"88"),n("br"),n("span",{class:"line-number"},"89"),n("br"),n("span",{class:"line-number"},"90"),n("br"),n("span",{class:"line-number"},"91"),n("br"),n("span",{class:"line-number"},"92"),n("br"),n("span",{class:"line-number"},"93"),n("br"),n("span",{class:"line-number"},"94"),n("br"),n("span",{class:"line-number"},"95"),n("br"),n("span",{class:"line-number"},"96"),n("br"),n("span",{class:"line-number"},"97"),n("br"),n("span",{class:"line-number"},"98"),n("br"),n("span",{class:"line-number"},"99"),n("br"),n("span",{class:"line-number"},"100"),n("br")])],-1),x=n("h2",{id:"making-log",tabindex:"-1"},[s("Making Log "),n("a",{class:"header-anchor",href:"#making-log","aria-hidden":"true"},"#")],-1),j=s("BP/blocks/custom_log.json"),P=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.16.100"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"minecraft:block"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:custom_log"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"properties"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"wiki:facing_direction"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token comment"},"//Log direction properties"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"permutations"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.block_property('wiki:facing_direction') == 0"`),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token comment"},"//If query.block_property('wiki:facing_direction') == 0 sets no rotation and on_interact component"),s(`
				`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"minecraft:rotation"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"minecraft:on_interact"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.equipped_item_any_tag('slot.weapon.mainhand', 'minecraft:is_axe')"`),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:become_stripped_0"'),s(`
						`),n("span",{class:"token comment"},"//Event sets custom stripped log with no rotation"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.block_property('wiki:facing_direction') == 1"`),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token comment"},"//If query.block_property('wiki:facing_direction') == 1 sets rotation and on_interact component"),s(`
				`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"minecraft:rotation"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"minecraft:on_interact"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.equipped_item_any_tag('slot.weapon.mainhand', 'minecraft:is_axe')"`),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:become_stripped1"'),s(`
						`),n("span",{class:"token comment"},"//Event sets custom stripped log with rotation"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.block_property('wiki:facing_direction') == 2"`),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token comment"},"//If query.block_property('wiki:facing_direction') == 2 sets rotation and on_interact component"),s(`
				`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"minecraft:rotation"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"minecraft:on_interact"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.equipped_item_any_tag('slot.weapon.mainhand', 'minecraft:is_axe')"`),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:become_stripped2"'),s(`
						`),n("span",{class:"token comment"},"//Event sets custom stripped log with rotation"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"minecraft:creative_category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"nature"'),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"group"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"itemGroup.name.log"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:material_instances"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"*"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"texture"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"custom_log"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"render_method"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"opaque"'),s(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"ends"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"texture"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"custom_log_top"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"render_method"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"opaque"'),s(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"up"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ends"'),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"down"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ends"'),s(`
				`),n("span",{class:"token comment"},"//Sets different textures for sides and top/bottom of log"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:loot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"loot_tables/blocks/custom_log_block.json"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"//Due to some bugs you need to add this component and loot table"),s(`
			`),n("span",{class:"token property"},'"minecraft:destroy_time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1.0"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:unit_cube"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:ticking"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"looping"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"range"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"6.0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"8.0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"on_tick"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:update_leaves"'),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"//Updates blocks every 4-6 seconds so they don't decay. Use range to prevent huge lags every N-seconds"),s(`
			`),n("span",{class:"token property"},'"minecraft:on_player_placing"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:set_facing_direction"'),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token comment"},"//Sets log rotation on player placing"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"events"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"wiki:update_leaves"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"run_command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
						`),n("span",{class:"token string"},'"fill ~3 ~3 ~3 ~-3 ~-3 ~-3 wiki:fake_leaves 0 replace wiki:custom_leaves"'),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token string"},'"fill ~3 ~3 ~3 ~-3 ~-3 ~-3 wiki:custom_leaves 0 replace wiki:fake_leaves"'),s(`
					`),n("span",{class:"token punctuation"},"]"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"//Updates leaves"),s(`
			`),n("span",{class:"token property"},'"wiki:set_facing_direction"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"set_block_property"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"wiki:facing_direction"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"math.floor( query.block_face / 2.0 )"'),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"//Sets block rotation"),s(`
			`),n("span",{class:"token property"},'"wiki:become_stripped_0"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"sequence"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"run_command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
								`),n("span",{class:"token string"},'"setblock ~~~ wiki:custom_stripped_log"'),n("span",{class:"token punctuation"},","),s(`
								`),n("span",{class:"token string"},'"playsound hit.wood @a ~~~"'),s(`
							`),n("span",{class:"token punctuation"},"]"),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token comment"},"//Sets custom stripped log with special rotation and plays sound"),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"damage"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"durability"'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"target"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"item"'),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token comment"},"//Damages axe of player who stripped the log"),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"wiki:become_stripped1"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"sequence"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"run_command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
								`),n("span",{class:"token string"},'"structure load custom_stripped_log1 ~~~"'),n("span",{class:"token punctuation"},","),s(`
								`),n("span",{class:"token string"},'"playsound hit.wood @a ~~~"'),s(`
							`),n("span",{class:"token punctuation"},"]"),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token comment"},"//Loads structure (custom stripped log with special rotation) and plays sound"),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"damage"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"durability"'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"target"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"item"'),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token comment"},"//Damages axe of player who stripped the log"),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"wiki:become_stripped2"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"sequence"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"run_command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
								`),n("span",{class:"token string"},'"structure load custom_stripped_log2 ~~~"'),n("span",{class:"token punctuation"},","),s(`
								`),n("span",{class:"token string"},'"playsound hit.wood @a ~~~"'),s(`
							`),n("span",{class:"token punctuation"},"]"),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token comment"},"//Loads structure (custom stripped log with special rotation) and plays sound"),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"damage"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"durability"'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"target"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"item"'),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token comment"},"//Damages axe of player who stripped the log"),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br"),n("span",{class:"line-number"},"80"),n("br"),n("span",{class:"line-number"},"81"),n("br"),n("span",{class:"line-number"},"82"),n("br"),n("span",{class:"line-number"},"83"),n("br"),n("span",{class:"line-number"},"84"),n("br"),n("span",{class:"line-number"},"85"),n("br"),n("span",{class:"line-number"},"86"),n("br"),n("span",{class:"line-number"},"87"),n("br"),n("span",{class:"line-number"},"88"),n("br"),n("span",{class:"line-number"},"89"),n("br"),n("span",{class:"line-number"},"90"),n("br"),n("span",{class:"line-number"},"91"),n("br"),n("span",{class:"line-number"},"92"),n("br"),n("span",{class:"line-number"},"93"),n("br"),n("span",{class:"line-number"},"94"),n("br"),n("span",{class:"line-number"},"95"),n("br"),n("span",{class:"line-number"},"96"),n("br"),n("span",{class:"line-number"},"97"),n("br"),n("span",{class:"line-number"},"98"),n("br"),n("span",{class:"line-number"},"99"),n("br"),n("span",{class:"line-number"},"100"),n("br"),n("span",{class:"line-number"},"101"),n("br"),n("span",{class:"line-number"},"102"),n("br"),n("span",{class:"line-number"},"103"),n("br"),n("span",{class:"line-number"},"104"),n("br"),n("span",{class:"line-number"},"105"),n("br"),n("span",{class:"line-number"},"106"),n("br"),n("span",{class:"line-number"},"107"),n("br"),n("span",{class:"line-number"},"108"),n("br"),n("span",{class:"line-number"},"109"),n("br"),n("span",{class:"line-number"},"110"),n("br"),n("span",{class:"line-number"},"111"),n("br"),n("span",{class:"line-number"},"112"),n("br"),n("span",{class:"line-number"},"113"),n("br"),n("span",{class:"line-number"},"114"),n("br"),n("span",{class:"line-number"},"115"),n("br"),n("span",{class:"line-number"},"116"),n("br"),n("span",{class:"line-number"},"117"),n("br"),n("span",{class:"line-number"},"118"),n("br"),n("span",{class:"line-number"},"119"),n("br"),n("span",{class:"line-number"},"120"),n("br"),n("span",{class:"line-number"},"121"),n("br"),n("span",{class:"line-number"},"122"),n("br"),n("span",{class:"line-number"},"123"),n("br"),n("span",{class:"line-number"},"124"),n("br"),n("span",{class:"line-number"},"125"),n("br"),n("span",{class:"line-number"},"126"),n("br"),n("span",{class:"line-number"},"127"),n("br"),n("span",{class:"line-number"},"128"),n("br"),n("span",{class:"line-number"},"129"),n("br"),n("span",{class:"line-number"},"130"),n("br"),n("span",{class:"line-number"},"131"),n("br"),n("span",{class:"line-number"},"132"),n("br"),n("span",{class:"line-number"},"133"),n("br"),n("span",{class:"line-number"},"134"),n("br"),n("span",{class:"line-number"},"135"),n("br"),n("span",{class:"line-number"},"136"),n("br"),n("span",{class:"line-number"},"137"),n("br"),n("span",{class:"line-number"},"138"),n("br"),n("span",{class:"line-number"},"139"),n("br"),n("span",{class:"line-number"},"140"),n("br"),n("span",{class:"line-number"},"141"),n("br"),n("span",{class:"line-number"},"142"),n("br"),n("span",{class:"line-number"},"143"),n("br"),n("span",{class:"line-number"},"144"),n("br"),n("span",{class:"line-number"},"145"),n("br"),n("span",{class:"line-number"},"146"),n("br"),n("span",{class:"line-number"},"147"),n("br"),n("span",{class:"line-number"},"148"),n("br"),n("span",{class:"line-number"},"149"),n("br"),n("span",{class:"line-number"},"150"),n("br"),n("span",{class:"line-number"},"151"),n("br"),n("span",{class:"line-number"},"152"),n("br"),n("span",{class:"line-number"},"153"),n("br"),n("span",{class:"line-number"},"154"),n("br"),n("span",{class:"line-number"},"155"),n("br"),n("span",{class:"line-number"},"156"),n("br"),n("span",{class:"line-number"},"157"),n("br"),n("span",{class:"line-number"},"158"),n("br"),n("span",{class:"line-number"},"159"),n("br"),n("span",{class:"line-number"},"160"),n("br"),n("span",{class:"line-number"},"161"),n("br"),n("span",{class:"line-number"},"162"),n("br"),n("span",{class:"line-number"},"163"),n("br"),n("span",{class:"line-number"},"164"),n("br"),n("span",{class:"line-number"},"165"),n("br")])],-1),q=n("h2",{id:"making-fake-leaves",tabindex:"-1"},[s("Making Fake Leaves "),n("a",{class:"header-anchor",href:"#making-fake-leaves","aria-hidden":"true"},"#")],-1),B=n("p",null,[s("You can replace block with itself only one time, then it wont work. That is why fake leaves are needed. Log commands will update leaves without stopping: "),n("code",null,"fill ~3 ~3 ~3 ~-3 ~-3 ~-3 wiki:fake_leaves 0 replace wiki:custom_leaves"),n("code",null,"fill ~3 ~3 ~3 ~-3 ~-3 ~-3 wiki:custom_leaves 0 replace wiki:fake_leaves")],-1),C=s("BP/blocks/fake_leaves.json"),S=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.16.100"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"minecraft:block"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:fake_leaves"'),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"minecraft:destroy_time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:breakonpush"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:material_instances"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"*"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"texture"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"custom_leaves"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"render_method"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"alpha_test"'),s(`
					`),n("span",{class:"token comment"},"//Use this render method to make leaves half-transparent, like vanilla ones"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:flammable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"burn_odds"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"flame_odds"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:ticking"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"range"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0.1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0.1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"on_tick"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:update_leaves"'),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"//If something went wrong and fake leaves weren't replaces with custom leaves"),s(`
			`),n("span",{class:"token property"},'"minecraft:unit_cube"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:loot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"loot_tables/blocks/custom_leaves_loot.json"'),s(`
			`),n("span",{class:"token comment"},"//Basic loot"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"events"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"wiki:update_leaves"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"run_command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"setblock ~~~ wiki:custom_leaves"'),n("span",{class:"token punctuation"},"]"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token comment"},"//Turning Back into custom leaves (if log was broken)"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br")])],-1),L=n("h2",{id:"making-stripped-log",tabindex:"-1"},[s("Making Stripped Log "),n("a",{class:"header-anchor",href:"#making-stripped-log","aria-hidden":"true"},"#")],-1),M=n("p",null,"Here all components are the same",-1),R=s("BP/blocks/custom_stripped_log.json"),T=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.16.100"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"minecraft:block"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:custom_stripped_log"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"properties"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"wiki:facing_direction"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"permutations"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.block_property('wiki:facing_direction') == 0"`),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"minecraft:rotation"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.block_property('wiki:facing_direction') == 1"`),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"minecraft:rotation"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.block_property('wiki:facing_direction') == 2"`),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"minecraft:rotation"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},"]"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"minecraft:creative_category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"nature"'),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"group"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"itemGroup.name.log"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:material_instances"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"*"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"texture"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"custom_stripped_log"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"render_method"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"opaque"'),s(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"ends"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"texture"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"custom_stripped_log_top"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"render_method"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"opaque"'),s(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"up"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ends"'),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"down"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ends"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:flammable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"burn_odds"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"flame_odds"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"25"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:loot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"loot_tables/blocks/custom_stripped_log_block.json"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:destroy_time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1.0"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:unit_cube"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:on_player_placing"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:set_facing_direction"'),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"events"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"wiki:set_facing_direction"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"set_block_property"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"wiki:facing_direction"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"math.floor( query.block_face / 2.0 )"'),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br")])],-1),I=n("h2",{id:"making-sapling",tabindex:"-1"},[s("Making Sapling "),n("a",{class:"header-anchor",href:"#making-sapling","aria-hidden":"true"},"#")],-1),D=s("BP/blocks/custom_sapling.json"),E=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.16.100"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"minecraft:block"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:custom_sapling"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"properties"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"wiki:growing"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token comment"},"//Properties of sapling growing"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"permutations"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.block_property('wiki:growing') == 0"`),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"minecraft:on_interact"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.get_equipped_item_name('main_hand') == 'bone_meal'"`),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bone_meal_1"'),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"minecraft:ticking"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"range"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"on_tick"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"grow_1"'),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.block_property('wiki:growing') == 1"`),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"minecraft:on_interact"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.get_equipped_item_name('main_hand') == 'bone_meal'"`),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bone_meal_2"'),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"minecraft:ticking"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"range"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"on_tick"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"grow_2"'),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.block_property('wiki:growing') == 2"`),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"minecraft:on_interact"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.get_equipped_item_name('main_hand') == 'bone_meal'"`),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bone_meal_3"'),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"minecraft:ticking"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"range"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"on_tick"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"grow_3"'),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"minecraft:material_instances"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"*"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"texture"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"custom_sapling"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"render_method"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"alpha_test"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token comment"},"//Add this two components to remove shadow from this block:"),s(`
					`),n("span",{class:"token property"},'"face_dimming"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"ambient_occlusion"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:pick_collision"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"origin"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"-6"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"-6"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"size"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"13"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:loot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"loot_tables/blocks/custom_sapling.json"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"//Add loot component so it will drop sapling placer"),s(`
			`),n("span",{class:"token property"},'"minecraft:geometry"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"geometry.custom_sapling"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:destroy_time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.01"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:entity_collision"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:breakonpush"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:breathability"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"air"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:block_light_absorption"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:placement_filter"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"conditions"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"block_filter"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
							`),n("span",{class:"token string"},'"minecraft:dirt"'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token string"},'"minecraft:grass"'),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token string"},'"minecraft:podzol"'),s(`
						`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"allowed_faces"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"up"'),n("span",{class:"token punctuation"},"]"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"//Allows to place block only on this blocks"),s(`
			`),n("span",{class:"token property"},'"minecraft:ticking"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"range"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"on_tick"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"grow_0"'),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token comment"},"//Starts to grow"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"events"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"grow_0"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"set_block_property"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"wiki:growing"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token comment"},"//Sets growing stage to 0"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"grow_1"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"sequence"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"run_command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
								`),n("span",{class:"token string"},'"particle minecraft:crop_growth_emitter ~~~"'),s(`
							`),n("span",{class:"token punctuation"},"]"),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
						`),n("span",{class:"token comment"},"//Adds particles"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"set_block_property"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"wiki:growing"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
						`),n("span",{class:"token comment"},"//Sets growing stage to 1"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"grow_2"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"sequence"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"run_command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
								`),n("span",{class:"token string"},'"particle minecraft:crop_growth_emitter ~~~"'),s(`
							`),n("span",{class:"token punctuation"},"]"),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
						`),n("span",{class:"token comment"},"//Adds particles"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"set_block_property"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"wiki:growing"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(`
							`),n("span",{class:"token comment"},"//Sets growing stage to 2"),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"grow_3"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"run_command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"command"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
						`),n("span",{class:"token string"},'"particle minecraft:crop_growth_emitter ~~~"'),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token string"},'"structure load custom_tree ~-2 ~ ~-2"'),s(`
					`),n("span",{class:"token punctuation"},"]"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token comment"},"//Particles and structure loads. Magic!"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"bone_meal_1"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"sequence"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"decrement_stack"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
						`),n("span",{class:"token comment"},"//Clears item that were used to interact"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"trigger"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"grow_1"'),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
						`),n("span",{class:"token comment"},"//Runs grow_1 event"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"bone_meal_2"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"sequence"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"decrement_stack"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
						`),n("span",{class:"token comment"},"//Clears item that were used to interact"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"trigger"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"grow_2"'),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
						`),n("span",{class:"token comment"},"//Runs grow_2 event"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"bone_meal_3"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"sequence"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"decrement_stack"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
						`),n("span",{class:"token comment"},"//Clears item that were used to interact"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"trigger"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"grow_3"'),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
						`),n("span",{class:"token comment"},"//Runs grow_3 event"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br"),n("span",{class:"line-number"},"80"),n("br"),n("span",{class:"line-number"},"81"),n("br"),n("span",{class:"line-number"},"82"),n("br"),n("span",{class:"line-number"},"83"),n("br"),n("span",{class:"line-number"},"84"),n("br"),n("span",{class:"line-number"},"85"),n("br"),n("span",{class:"line-number"},"86"),n("br"),n("span",{class:"line-number"},"87"),n("br"),n("span",{class:"line-number"},"88"),n("br"),n("span",{class:"line-number"},"89"),n("br"),n("span",{class:"line-number"},"90"),n("br"),n("span",{class:"line-number"},"91"),n("br"),n("span",{class:"line-number"},"92"),n("br"),n("span",{class:"line-number"},"93"),n("br"),n("span",{class:"line-number"},"94"),n("br"),n("span",{class:"line-number"},"95"),n("br"),n("span",{class:"line-number"},"96"),n("br"),n("span",{class:"line-number"},"97"),n("br"),n("span",{class:"line-number"},"98"),n("br"),n("span",{class:"line-number"},"99"),n("br"),n("span",{class:"line-number"},"100"),n("br"),n("span",{class:"line-number"},"101"),n("br"),n("span",{class:"line-number"},"102"),n("br"),n("span",{class:"line-number"},"103"),n("br"),n("span",{class:"line-number"},"104"),n("br"),n("span",{class:"line-number"},"105"),n("br"),n("span",{class:"line-number"},"106"),n("br"),n("span",{class:"line-number"},"107"),n("br"),n("span",{class:"line-number"},"108"),n("br"),n("span",{class:"line-number"},"109"),n("br"),n("span",{class:"line-number"},"110"),n("br"),n("span",{class:"line-number"},"111"),n("br"),n("span",{class:"line-number"},"112"),n("br"),n("span",{class:"line-number"},"113"),n("br"),n("span",{class:"line-number"},"114"),n("br"),n("span",{class:"line-number"},"115"),n("br"),n("span",{class:"line-number"},"116"),n("br"),n("span",{class:"line-number"},"117"),n("br"),n("span",{class:"line-number"},"118"),n("br"),n("span",{class:"line-number"},"119"),n("br"),n("span",{class:"line-number"},"120"),n("br"),n("span",{class:"line-number"},"121"),n("br"),n("span",{class:"line-number"},"122"),n("br"),n("span",{class:"line-number"},"123"),n("br"),n("span",{class:"line-number"},"124"),n("br"),n("span",{class:"line-number"},"125"),n("br"),n("span",{class:"line-number"},"126"),n("br"),n("span",{class:"line-number"},"127"),n("br"),n("span",{class:"line-number"},"128"),n("br"),n("span",{class:"line-number"},"129"),n("br"),n("span",{class:"line-number"},"130"),n("br"),n("span",{class:"line-number"},"131"),n("br"),n("span",{class:"line-number"},"132"),n("br"),n("span",{class:"line-number"},"133"),n("br"),n("span",{class:"line-number"},"134"),n("br"),n("span",{class:"line-number"},"135"),n("br"),n("span",{class:"line-number"},"136"),n("br"),n("span",{class:"line-number"},"137"),n("br"),n("span",{class:"line-number"},"138"),n("br"),n("span",{class:"line-number"},"139"),n("br"),n("span",{class:"line-number"},"140"),n("br"),n("span",{class:"line-number"},"141"),n("br"),n("span",{class:"line-number"},"142"),n("br"),n("span",{class:"line-number"},"143"),n("br"),n("span",{class:"line-number"},"144"),n("br"),n("span",{class:"line-number"},"145"),n("br"),n("span",{class:"line-number"},"146"),n("br"),n("span",{class:"line-number"},"147"),n("br"),n("span",{class:"line-number"},"148"),n("br"),n("span",{class:"line-number"},"149"),n("br"),n("span",{class:"line-number"},"150"),n("br"),n("span",{class:"line-number"},"151"),n("br"),n("span",{class:"line-number"},"152"),n("br"),n("span",{class:"line-number"},"153"),n("br"),n("span",{class:"line-number"},"154"),n("br"),n("span",{class:"line-number"},"155"),n("br"),n("span",{class:"line-number"},"156"),n("br"),n("span",{class:"line-number"},"157"),n("br"),n("span",{class:"line-number"},"158"),n("br"),n("span",{class:"line-number"},"159"),n("br"),n("span",{class:"line-number"},"160"),n("br"),n("span",{class:"line-number"},"161"),n("br"),n("span",{class:"line-number"},"162"),n("br"),n("span",{class:"line-number"},"163"),n("br"),n("span",{class:"line-number"},"164"),n("br"),n("span",{class:"line-number"},"165"),n("br"),n("span",{class:"line-number"},"166"),n("br"),n("span",{class:"line-number"},"167"),n("br"),n("span",{class:"line-number"},"168"),n("br"),n("span",{class:"line-number"},"169"),n("br"),n("span",{class:"line-number"},"170"),n("br"),n("span",{class:"line-number"},"171"),n("br"),n("span",{class:"line-number"},"172"),n("br"),n("span",{class:"line-number"},"173"),n("br"),n("span",{class:"line-number"},"174"),n("br"),n("span",{class:"line-number"},"175"),n("br"),n("span",{class:"line-number"},"176"),n("br"),n("span",{class:"line-number"},"177"),n("br"),n("span",{class:"line-number"},"178"),n("br"),n("span",{class:"line-number"},"179"),n("br"),n("span",{class:"line-number"},"180"),n("br"),n("span",{class:"line-number"},"181"),n("br"),n("span",{class:"line-number"},"182"),n("br"),n("span",{class:"line-number"},"183"),n("br"),n("span",{class:"line-number"},"184"),n("br"),n("span",{class:"line-number"},"185"),n("br"),n("span",{class:"line-number"},"186"),n("br"),n("span",{class:"line-number"},"187"),n("br"),n("span",{class:"line-number"},"188"),n("br"),n("span",{class:"line-number"},"189"),n("br"),n("span",{class:"line-number"},"190"),n("br"),n("span",{class:"line-number"},"191"),n("br"),n("span",{class:"line-number"},"192"),n("br"),n("span",{class:"line-number"},"193"),n("br"),n("span",{class:"line-number"},"194"),n("br"),n("span",{class:"line-number"},"195"),n("br"),n("span",{class:"line-number"},"196"),n("br"),n("span",{class:"line-number"},"197"),n("br")])],-1),N=n("h2",{id:"making-sapling-placer",tabindex:"-1"},[s("Making Sapling Placer "),n("a",{class:"header-anchor",href:"#making-sapling-placer","aria-hidden":"true"},"#")],-1),A=s("BP/items/custom_sapling_placer.json"),U=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.16.100"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"minecraft:item"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:custom_sapling_placer"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"nature"'),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"minecraft:creative_category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"parent"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"itemGroup.name.sapling"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:max_stack_size"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"64"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:block_placer"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"block"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:custom_sapling"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:icon"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"texture"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"custom_sapling_placer"'),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br")])],-1),F=n("h2",{id:"making-loot-tables",tabindex:"-1"},[s("Making Loot Tables "),n("a",{class:"header-anchor",href:"#making-loot-tables","aria-hidden":"true"},"#")],-1),V=s("BP/loot_tables/blocks/custom_leaves_block.json"),z=n("p",null,"This loot will spawn leaves block (when you breaak it using shears)",-1),G=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"pools"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"rolls"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"entries"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
				`),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:custom_leaves"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br")])],-1),$=n("p",null,"Leaves default loot",-1),H=s("BP/loot_tables/blocks/custom_leaves_loot.json"),O=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"pools"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"rolls"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"entries"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
				`),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:apple"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:custom_sapling_placer"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),s(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"empty"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token comment"},"//Nothing wil drop"),s(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br")])],-1),J=n("p",null,"This loot will spawn log block",-1),W=s("BP/loot_tables/blocks/custom_log_block.json"),Y=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"pools"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"rolls"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"entries"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
				`),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:custom_log"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br")])],-1),K=n("p",null,"This loot will spawn stripped log",-1),Q=s("BP/loot_tables/blocks/custom_stripped_log_block.json"),X=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"pools"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"rolls"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"entries"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
				`),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:custom_stripped_log"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br")])],-1),Z=n("p",null,"This will spawn custom_sapling_placer",-1),nn=s("BP/loot_tables/blocks/custom_sapling_placer.json"),sn=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"pools"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"rolls"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"entries"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
				`),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:custom_sapling_placer"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br")])],-1),tn=n("h2",{id:"exporting-structures",tabindex:"-1"},[s("Exporting Structures "),n("a",{class:"header-anchor",href:"#exporting-structures","aria-hidden":"true"},"#")],-1),an=n("p",null,"Now you need to get custom_stripped_log1 and custom_stripped_log2 structures. Just export rotated stripped logs.",-1),en=n("p",null,[n("img",{src:i,alt:""})],-1),on=n("p",null,[s("Build some trees too! (Don't forget to update leaves using "),n("code",null,"/fill"),s(" command)")],-1),pn=n("p",null,[n("img",{src:k,alt:""})],-1),ln=n("h2",{id:"resource-pack",tabindex:"-1"},[s("Resource Pack "),n("a",{class:"header-anchor",href:"#resource-pack","aria-hidden":"true"},"#")],-1),cn=n("p",null,"Now it is time to make a resource pack!",-1),rn=n("p",null,"Make translations for blocks:",-1),un=s("RP/texts/en_US.lang"),kn=n("div",{class:"language-"},[n("pre",null,[n("code",null,`tile.wiki:custom_log.name=Custom Log
tile.wiki:custom_leaves.name=Custom leaves
tile.wiki:custom_stripped_log.name=Custom Stripped Log
tile.wiki:custom_sapling.name=Custom Sapling
item.wiki:custom_sapling_placer=Custom Sapling
tile.wiki:fake_leaves.name=Custom Leaves
`)]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br")])],-1),bn=n("p",null,"Make terrain_texture.json and textures.",-1),mn=s("RP/textures/terrain_texture.json"),_n=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"num_mip_levels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"padding"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"resource_pack_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Parts of Custom Tree"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"texture_data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"custom_leaves"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"textures"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"textures/blocks/leaves_oak"'),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"custom_log"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"textures"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"textures/blocks/log_oak"'),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"custom_log_top"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"textures"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"textures/blocks/log_oak_top"'),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"custom_stripped_log"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"textures"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"textures/blocks/stripped_oak_log"'),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"custom_stripped_log_top"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"textures"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"textures/blocks/stripped_oak_log_top"'),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"custom_sapling"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"textures"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"textures/blocks/sapling_oak"'),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"texture_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"atlas.terrain"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br")])],-1),dn=n("p",null,"Make geometry for sapling:",-1),gn=s("RP/models/blocks/custom_sapling.geo.json"),yn=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.12.0"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"minecraft:geometry"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"geometry.custom_sapling"'),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"texture_width"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"texture_height"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"visible_bounds_width"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"visible_bounds_height"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2.5"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"visible_bounds_offset"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0.75"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"bones"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
				`),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bb_main"'),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"pivot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"cubes"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
						`),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"origin"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"-8"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"size"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"pivot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"rotation"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"-45"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"uv"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(`
						`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token property"},'"origin"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"-8"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"size"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"pivot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"rotation"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"45"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token property"},'"uv"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"]"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br")])],-1),fn=n("p",null,"Make item_texture file",-1),hn=s("RP/textures/item_texture.json"),wn=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"resource_pack_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Parts of Custom Tree"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"texture_name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"atlas.items"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"texture_data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"custom_sapling_placer"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"textures"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"textures/blocks/sapling_oak"'),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br")])],-1),vn=n("p",null,"Add sounds to blocks",-1),xn=s("RP/blocks.json"),jn=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"wiki:custom_leaves"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"sound"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"grass"'),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"wiki:custom_log"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"sound"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wood"'),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"wiki:custom_stripped_log"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"sound"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wood"'),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"wiki:custom_sapling"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"sound"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"grass"'),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"wiki:fake_leaves"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"sound"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"grass"'),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br")])],-1),Pn=n("h2",{id:"result",tabindex:"-1"},[s("Result "),n("a",{class:"header-anchor",href:"#result","aria-hidden":"true"},"#")],-1),qn=n("p",null,"What you have now: Custom Leaves, Custom Log, Custom Stripped Log, Custom Sapling, Custom Tree Structure",-1),Bn=n("p",null,[n("img",{src:b,alt:""})],-1),Cn=n("h2",{id:"download-example-pack",tabindex:"-1"},[s("Download Example Pack "),n("a",{class:"header-anchor",href:"#download-example-pack","aria-hidden":"true"},"#")],-1),Sn=n("p",null,[n("a",{href:"https://wiki.bedrock.dev/assets/packs/tutorials/parts-of-custom-tree/poct_rp.mcpack",target:"_blank",rel:"noopener noreferrer"},"RP")],-1),Ln=n("p",null,[n("a",{href:"https://wiki.bedrock.dev/assets/packs/tutorials/parts-of-custom-tree/poct_bp.mcpack",target:"_blank",rel:"noopener noreferrer"},"BP")],-1);function Mn(Rn,Tn,In,Dn,En,Nn){const e=p("CodeHeader"),o=p("Spoiler"),l=p("FolderView");return u(),r("div",null,[_,d,g,y,f,h,t(o,{title:"Code"},{default:a(()=>[t(e,null,{default:a(()=>[w]),_:1}),v]),_:1}),x,t(o,{title:"Code"},{default:a(()=>[t(e,null,{default:a(()=>[j]),_:1}),P]),_:1}),q,B,t(o,{title:"Code"},{default:a(()=>[t(e,null,{default:a(()=>[C]),_:1}),S]),_:1}),L,M,t(o,{title:"Code"},{default:a(()=>[t(e,null,{default:a(()=>[R]),_:1}),T]),_:1}),I,t(o,{title:"Code"},{default:a(()=>[t(e,null,{default:a(()=>[D]),_:1}),E]),_:1}),N,t(o,{title:"Code"},{default:a(()=>[t(e,null,{default:a(()=>[A]),_:1}),U]),_:1}),F,t(o,{title:"Code"},{default:a(()=>[t(e,null,{default:a(()=>[V]),_:1}),z,G,$,t(e,null,{default:a(()=>[H]),_:1}),O,J,t(e,null,{default:a(()=>[W]),_:1}),Y,K,t(e,null,{default:a(()=>[Q]),_:1}),X,Z,t(e,null,{default:a(()=>[nn]),_:1}),sn]),_:1}),tn,an,en,on,pn,ln,cn,rn,t(e,null,{default:a(()=>[un]),_:1}),kn,bn,t(e,null,{default:a(()=>[mn]),_:1}),_n,dn,t(e,null,{default:a(()=>[gn]),_:1}),yn,fn,t(e,null,{default:a(()=>[hn]),_:1}),wn,vn,t(e,null,{default:a(()=>[xn]),_:1}),jn,Pn,qn,t(l,{paths:["BP/manifest.json","BP/pack_icon.png","BP/blocks/custom_leaves.json","BP/blocks/custom_log.json","BP/blocks/fake_leaves.json","BP/blocks/custom_stripped_log.json","BP/blocks/custom_sapling.json","BP/items/custom_sapling_placer.json","BP/loot_tables/blocks/custom_leaves_block.json","BP/loot_tables/blocks/custom_leaves_loot.json","BP/loot_tables/blocks/custom_log_block.json","BP/loot_tables/blocks/custom_stripped_log_block.json","BP/loot_tables/blocks/custom_sapling_placer.json","BP/structures/custom_stripped_log1.mcstructure","BP/structures/custom_stripped_log2.mcstructure","BP/structures/custom_tree.mcstructure","RP/manifest.json","RP/pack_icon.png","RP/blocks.json","RP/texts/en_US.lang","RP/textures/terrain_texture.json","RP/models/blocks/custom_sapling.geo.json","RP/textures/item_texture.json"]},null,8,["paths"]),Bn,Cn,Sn,Ln])}var Fn=c(m,[["render",Mn]]);export{Un as __pageData,Fn as default};

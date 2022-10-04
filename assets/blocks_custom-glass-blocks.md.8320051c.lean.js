import{_ as c,c as l,a as s,w as a,e as p,b as t,r as o,o as u,d as n}from"./404.md.4e630b9f.js";var i="/assets/images/blocks/glass-block/glass_showcase.png";const A='{"title":"Making Custom Glass Blocks","description":"","frontmatter":{"title":"Making Custom Glass Blocks","category":"Tutorials","tags":["experimental","expert"],"mention":["Eko-byte"]},"headers":[{"level":2,"title":"Glass Block","slug":"glass-block"},{"level":2,"title":"Vertical Connecting Glass","slug":"vertical-connecting-glass"}],"relativePath":"blocks/custom-glass-blocks.md"}',k={},b=p("",6),m=n("BP/blocks/custom_glass.json"),_=p("",1),y=n("RP/blocks.json"),g=p("",3),d=n("BP/blocks/custom_vertical_connecting_glass.json"),h=t("div",{class:"language-json line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token comment"},'//add a "nothing" texture in terrain_texture, and make it have a transparent file'),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token property"},'"format_version"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"1.16.100"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token property"},'"minecraft:block"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token property"},'"description"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token property"},'"identifier"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"wiki:custom_vertical_connecting_glass"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token property"},'"properties"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token comment"},"//properties needed for connected textures, also contols up and down culling"),n(`
				`),t("span",{class:"token property"},'"wiki:connected_state"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token comment"},"//properties to remove culling, depending on the direction in which a block is placed"),n(`
				`),t("span",{class:"token property"},'"wiki:north"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"wiki:south"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"wiki:east"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"wiki:west"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),n(`
			`),t("span",{class:"token punctuation"},"}"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token comment"},"//basic glass components"),n(`
			`),t("span",{class:"token comment"},"//tags used to give connected textures, and remove culling"),n(`
			`),t("span",{class:"token property"},'"tag:custom_vertical_connecting_glass"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token property"},'"tag:glass"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token property"},'"minecraft:creative_category"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"group"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"itemGroup.name.glass"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"category"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"construction"'),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token property"},'"minecraft:unit_cube"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token property"},'"minecraft:destroy_time"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token property"},'"minecraft:ticking"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"looping"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"on_tick"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"event"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"change_state"'),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"range"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token property"},'"minecraft:block_light_absorption"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token property"},'"minecraft:block_light_emission"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0.07"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token property"},'"permutations"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
			`),t("span",{class:"token comment"},"//these permutations control what textures are displayed at different situations"),n(`
			`),t("span",{class:"token comment"},"//they also use tags to determine what state they are in, (top texture then top tag)"),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:connected_state') == 0 && q.block_property('wiki:north') == 0 && q.block_property('wiki:south') == 0 && q.block_property('wiki:east') == 0 && q.block_property('wiki:west') == 0"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:default"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:connected_state') == 1 && q.block_property('wiki:north') == 0 && q.block_property('wiki:south') == 0 && q.block_property('wiki:east') == 0 && q.block_property('wiki:west') == 0"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:top"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_top"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:connected_state') == 2 && q.block_property('wiki:north') == 0 && q.block_property('wiki:south') == 0 && q.block_property('wiki:east') == 0 && q.block_property('wiki:west') == 0"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:bottom"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_bottom"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:connected_state') == 3 && q.block_property('wiki:north') == 0 && q.block_property('wiki:south') == 0 && q.block_property('wiki:east') == 0 && q.block_property('wiki:west') == 0"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:middle"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_middle"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:north') == 1 && q.block_property('wiki:connected_state') == 0"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:default"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"north"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:south') == 1 && q.block_property('wiki:connected_state') == 0"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:default"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"south"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:east') == 1 && q.block_property('wiki:connected_state') == 0"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:default"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"east"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:west') == 1 && q.block_property('wiki:connected_state') == 0"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:default"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"west"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:north') == 1 && q.block_property('wiki:connected_state') == 1"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:top"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_top"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"north"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:south') == 1 && q.block_property('wiki:connected_state') == 1"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:top"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_top"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"south"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:east') == 1 && q.block_property('wiki:connected_state') == 1"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:top"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_top"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"east"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token comment"},"//in this situation if there is a block to the west and it is the upper connected texture then it shall have the west side invisible and the sides be the upper connected part"),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:west') == 1 && q.block_property('wiki:connected_state') == 1"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:top"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_top"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"west"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:north') == 1 && q.block_property('wiki:connected_state') == 2"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:bottom"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_bottom"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"north"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:south') == 1 && q.block_property('wiki:connected_state') == 2"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:bottom"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_bottom"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"south"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:east') == 1 && q.block_property('wiki:connected_state') == 2"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:bottom"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_bottom"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"east"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:west') == 1 && q.block_property('wiki:connected_state') == 2"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:bottom"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_bottom"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"west"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_up"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:north') == 1 && q.block_property('wiki:connected_state') == 3"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:middle"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_middle"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"north"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:south') == 1 && q.block_property('wiki:connected_state') == 3"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:middle"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_middle"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"south"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:east') == 1 && q.block_property('wiki:connected_state') == 3"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:middle"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_middle"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"east"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_property('wiki:west') == 1 && q.block_property('wiki:connected_state') == 3"`),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"components"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token property"},'"tag:middle"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token property"},'"minecraft:material_instances"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"custom_vertical_connecting_glass_middle"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"west"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"down"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"up"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"render_method"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"blend"'),t("span",{class:"token punctuation"},","),n(`
							`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"nothing"'),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"}"),n(`
		`),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token property"},'"events"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token property"},'"change_state"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"sequence"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
					`),t("span",{class:"token comment"},"//these set the block to have no culling"),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_neighbor_has_any_tag(0,0,-1,'custom_vertical_connecting_glass')"`),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"set_block_property"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"wiki:north"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_neighbor_has_any_tag(0,0,1,'custom_vertical_connecting_glass')"`),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"set_block_property"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"wiki:south"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_neighbor_has_any_tag(-1,0,0,'custom_vertical_connecting_glass')"`),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"set_block_property"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"wiki:west"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_neighbor_has_any_tag(1,0,0,'custom_vertical_connecting_glass')"`),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"set_block_property"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"wiki:east"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"!q.block_neighbor_has_any_tag(0,0,-1,'custom_vertical_connecting_glass')"`),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"set_block_property"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"wiki:north"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"!q.block_neighbor_has_any_tag(0,0,1,'custom_vertical_connecting_glass')"`),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"set_block_property"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"wiki:south"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"!q.block_neighbor_has_any_tag(-1,0,0,'custom_vertical_connecting_glass')"`),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"set_block_property"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"wiki:west"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"!q.block_neighbor_has_any_tag(1,0,0,'custom_vertical_connecting_glass')"`),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"set_block_property"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"wiki:east"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token comment"},"//these control the custom texture state"),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_neighbor_has_any_tag(0,-1,0,'default')"`),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"set_block_property"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"wiki:connected_state"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_neighbor_has_any_tag(0,1,0,'top') && !q.block_neighbor_has_any_tag(0,-1,0,'middle')"`),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"set_block_property"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"wiki:connected_state"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_neighbor_has_any_tag(0,1,0,'top') && q.block_neighbor_has_any_tag(0,-1,0,'middle')"`),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"set_block_property"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"wiki:connected_state"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"3"),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_neighbor_has_any_tag(0,-1,0,'top')"`),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"set_block_property"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"wiki:connected_state"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_neighbor_has_any_tag(0,-1,0,'bottom') && (q.block_neighbor_has_any_tag(0,1,0,'top') || q.block_neighbor_has_any_tag(0,1,0,'middle'))"`),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"set_block_property"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"wiki:connected_state"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"3"),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"!q.block_neighbor_has_any_tag(0,1,0,'top', 'default', 'middle', 'bottom') && q.block_neighbor_has_any_tag(0,-1,0,'middle', 'bottom')"`),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"set_block_property"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"wiki:connected_state"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"!q.block_neighbor_has_any_tag(0,1,0,'top', 'default', 'middle', 'bottom') && !q.block_neighbor_has_any_tag(0,-1,0,'middle', 'bottom', 'top', 'default')"`),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"set_block_property"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"wiki:connected_state"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_neighbor_has_any_tag(0,1,0,'top', 'middle', 'bottom') && !q.block_neighbor_has_any_tag(0,-1,0,'middle', 'bottom', 'top', 'default')"`),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"set_block_property"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"wiki:connected_state"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"condition"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"q.block_neighbor_has_any_tag(0,1,0,'default') && q.block_neighbor_has_any_tag(0,-1,0,'default')"`),t("span",{class:"token punctuation"},","),n(`
						`),t("span",{class:"token property"},'"set_block_property"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
							`),t("span",{class:"token property"},'"wiki:connected_state"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"3"),n(`
						`),t("span",{class:"token punctuation"},"}"),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"]"),n(`
			`),t("span",{class:"token punctuation"},"}"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br"),t("span",{class:"line-number"},"15"),t("br"),t("span",{class:"line-number"},"16"),t("br"),t("span",{class:"line-number"},"17"),t("br"),t("span",{class:"line-number"},"18"),t("br"),t("span",{class:"line-number"},"19"),t("br"),t("span",{class:"line-number"},"20"),t("br"),t("span",{class:"line-number"},"21"),t("br"),t("span",{class:"line-number"},"22"),t("br"),t("span",{class:"line-number"},"23"),t("br"),t("span",{class:"line-number"},"24"),t("br"),t("span",{class:"line-number"},"25"),t("br"),t("span",{class:"line-number"},"26"),t("br"),t("span",{class:"line-number"},"27"),t("br"),t("span",{class:"line-number"},"28"),t("br"),t("span",{class:"line-number"},"29"),t("br"),t("span",{class:"line-number"},"30"),t("br"),t("span",{class:"line-number"},"31"),t("br"),t("span",{class:"line-number"},"32"),t("br"),t("span",{class:"line-number"},"33"),t("br"),t("span",{class:"line-number"},"34"),t("br"),t("span",{class:"line-number"},"35"),t("br"),t("span",{class:"line-number"},"36"),t("br"),t("span",{class:"line-number"},"37"),t("br"),t("span",{class:"line-number"},"38"),t("br"),t("span",{class:"line-number"},"39"),t("br"),t("span",{class:"line-number"},"40"),t("br"),t("span",{class:"line-number"},"41"),t("br"),t("span",{class:"line-number"},"42"),t("br"),t("span",{class:"line-number"},"43"),t("br"),t("span",{class:"line-number"},"44"),t("br"),t("span",{class:"line-number"},"45"),t("br"),t("span",{class:"line-number"},"46"),t("br"),t("span",{class:"line-number"},"47"),t("br"),t("span",{class:"line-number"},"48"),t("br"),t("span",{class:"line-number"},"49"),t("br"),t("span",{class:"line-number"},"50"),t("br"),t("span",{class:"line-number"},"51"),t("br"),t("span",{class:"line-number"},"52"),t("br"),t("span",{class:"line-number"},"53"),t("br"),t("span",{class:"line-number"},"54"),t("br"),t("span",{class:"line-number"},"55"),t("br"),t("span",{class:"line-number"},"56"),t("br"),t("span",{class:"line-number"},"57"),t("br"),t("span",{class:"line-number"},"58"),t("br"),t("span",{class:"line-number"},"59"),t("br"),t("span",{class:"line-number"},"60"),t("br"),t("span",{class:"line-number"},"61"),t("br"),t("span",{class:"line-number"},"62"),t("br"),t("span",{class:"line-number"},"63"),t("br"),t("span",{class:"line-number"},"64"),t("br"),t("span",{class:"line-number"},"65"),t("br"),t("span",{class:"line-number"},"66"),t("br"),t("span",{class:"line-number"},"67"),t("br"),t("span",{class:"line-number"},"68"),t("br"),t("span",{class:"line-number"},"69"),t("br"),t("span",{class:"line-number"},"70"),t("br"),t("span",{class:"line-number"},"71"),t("br"),t("span",{class:"line-number"},"72"),t("br"),t("span",{class:"line-number"},"73"),t("br"),t("span",{class:"line-number"},"74"),t("br"),t("span",{class:"line-number"},"75"),t("br"),t("span",{class:"line-number"},"76"),t("br"),t("span",{class:"line-number"},"77"),t("br"),t("span",{class:"line-number"},"78"),t("br"),t("span",{class:"line-number"},"79"),t("br"),t("span",{class:"line-number"},"80"),t("br"),t("span",{class:"line-number"},"81"),t("br"),t("span",{class:"line-number"},"82"),t("br"),t("span",{class:"line-number"},"83"),t("br"),t("span",{class:"line-number"},"84"),t("br"),t("span",{class:"line-number"},"85"),t("br"),t("span",{class:"line-number"},"86"),t("br"),t("span",{class:"line-number"},"87"),t("br"),t("span",{class:"line-number"},"88"),t("br"),t("span",{class:"line-number"},"89"),t("br"),t("span",{class:"line-number"},"90"),t("br"),t("span",{class:"line-number"},"91"),t("br"),t("span",{class:"line-number"},"92"),t("br"),t("span",{class:"line-number"},"93"),t("br"),t("span",{class:"line-number"},"94"),t("br"),t("span",{class:"line-number"},"95"),t("br"),t("span",{class:"line-number"},"96"),t("br"),t("span",{class:"line-number"},"97"),t("br"),t("span",{class:"line-number"},"98"),t("br"),t("span",{class:"line-number"},"99"),t("br"),t("span",{class:"line-number"},"100"),t("br"),t("span",{class:"line-number"},"101"),t("br"),t("span",{class:"line-number"},"102"),t("br"),t("span",{class:"line-number"},"103"),t("br"),t("span",{class:"line-number"},"104"),t("br"),t("span",{class:"line-number"},"105"),t("br"),t("span",{class:"line-number"},"106"),t("br"),t("span",{class:"line-number"},"107"),t("br"),t("span",{class:"line-number"},"108"),t("br"),t("span",{class:"line-number"},"109"),t("br"),t("span",{class:"line-number"},"110"),t("br"),t("span",{class:"line-number"},"111"),t("br"),t("span",{class:"line-number"},"112"),t("br"),t("span",{class:"line-number"},"113"),t("br"),t("span",{class:"line-number"},"114"),t("br"),t("span",{class:"line-number"},"115"),t("br"),t("span",{class:"line-number"},"116"),t("br"),t("span",{class:"line-number"},"117"),t("br"),t("span",{class:"line-number"},"118"),t("br"),t("span",{class:"line-number"},"119"),t("br"),t("span",{class:"line-number"},"120"),t("br"),t("span",{class:"line-number"},"121"),t("br"),t("span",{class:"line-number"},"122"),t("br"),t("span",{class:"line-number"},"123"),t("br"),t("span",{class:"line-number"},"124"),t("br"),t("span",{class:"line-number"},"125"),t("br"),t("span",{class:"line-number"},"126"),t("br"),t("span",{class:"line-number"},"127"),t("br"),t("span",{class:"line-number"},"128"),t("br"),t("span",{class:"line-number"},"129"),t("br"),t("span",{class:"line-number"},"130"),t("br"),t("span",{class:"line-number"},"131"),t("br"),t("span",{class:"line-number"},"132"),t("br"),t("span",{class:"line-number"},"133"),t("br"),t("span",{class:"line-number"},"134"),t("br"),t("span",{class:"line-number"},"135"),t("br"),t("span",{class:"line-number"},"136"),t("br"),t("span",{class:"line-number"},"137"),t("br"),t("span",{class:"line-number"},"138"),t("br"),t("span",{class:"line-number"},"139"),t("br"),t("span",{class:"line-number"},"140"),t("br"),t("span",{class:"line-number"},"141"),t("br"),t("span",{class:"line-number"},"142"),t("br"),t("span",{class:"line-number"},"143"),t("br"),t("span",{class:"line-number"},"144"),t("br"),t("span",{class:"line-number"},"145"),t("br"),t("span",{class:"line-number"},"146"),t("br"),t("span",{class:"line-number"},"147"),t("br"),t("span",{class:"line-number"},"148"),t("br"),t("span",{class:"line-number"},"149"),t("br"),t("span",{class:"line-number"},"150"),t("br"),t("span",{class:"line-number"},"151"),t("br"),t("span",{class:"line-number"},"152"),t("br"),t("span",{class:"line-number"},"153"),t("br"),t("span",{class:"line-number"},"154"),t("br"),t("span",{class:"line-number"},"155"),t("br"),t("span",{class:"line-number"},"156"),t("br"),t("span",{class:"line-number"},"157"),t("br"),t("span",{class:"line-number"},"158"),t("br"),t("span",{class:"line-number"},"159"),t("br"),t("span",{class:"line-number"},"160"),t("br"),t("span",{class:"line-number"},"161"),t("br"),t("span",{class:"line-number"},"162"),t("br"),t("span",{class:"line-number"},"163"),t("br"),t("span",{class:"line-number"},"164"),t("br"),t("span",{class:"line-number"},"165"),t("br"),t("span",{class:"line-number"},"166"),t("br"),t("span",{class:"line-number"},"167"),t("br"),t("span",{class:"line-number"},"168"),t("br"),t("span",{class:"line-number"},"169"),t("br"),t("span",{class:"line-number"},"170"),t("br"),t("span",{class:"line-number"},"171"),t("br"),t("span",{class:"line-number"},"172"),t("br"),t("span",{class:"line-number"},"173"),t("br"),t("span",{class:"line-number"},"174"),t("br"),t("span",{class:"line-number"},"175"),t("br"),t("span",{class:"line-number"},"176"),t("br"),t("span",{class:"line-number"},"177"),t("br"),t("span",{class:"line-number"},"178"),t("br"),t("span",{class:"line-number"},"179"),t("br"),t("span",{class:"line-number"},"180"),t("br"),t("span",{class:"line-number"},"181"),t("br"),t("span",{class:"line-number"},"182"),t("br"),t("span",{class:"line-number"},"183"),t("br"),t("span",{class:"line-number"},"184"),t("br"),t("span",{class:"line-number"},"185"),t("br"),t("span",{class:"line-number"},"186"),t("br"),t("span",{class:"line-number"},"187"),t("br"),t("span",{class:"line-number"},"188"),t("br"),t("span",{class:"line-number"},"189"),t("br"),t("span",{class:"line-number"},"190"),t("br"),t("span",{class:"line-number"},"191"),t("br"),t("span",{class:"line-number"},"192"),t("br"),t("span",{class:"line-number"},"193"),t("br"),t("span",{class:"line-number"},"194"),t("br"),t("span",{class:"line-number"},"195"),t("br"),t("span",{class:"line-number"},"196"),t("br"),t("span",{class:"line-number"},"197"),t("br"),t("span",{class:"line-number"},"198"),t("br"),t("span",{class:"line-number"},"199"),t("br"),t("span",{class:"line-number"},"200"),t("br"),t("span",{class:"line-number"},"201"),t("br"),t("span",{class:"line-number"},"202"),t("br"),t("span",{class:"line-number"},"203"),t("br"),t("span",{class:"line-number"},"204"),t("br"),t("span",{class:"line-number"},"205"),t("br"),t("span",{class:"line-number"},"206"),t("br"),t("span",{class:"line-number"},"207"),t("br"),t("span",{class:"line-number"},"208"),t("br"),t("span",{class:"line-number"},"209"),t("br"),t("span",{class:"line-number"},"210"),t("br"),t("span",{class:"line-number"},"211"),t("br"),t("span",{class:"line-number"},"212"),t("br"),t("span",{class:"line-number"},"213"),t("br"),t("span",{class:"line-number"},"214"),t("br"),t("span",{class:"line-number"},"215"),t("br"),t("span",{class:"line-number"},"216"),t("br"),t("span",{class:"line-number"},"217"),t("br"),t("span",{class:"line-number"},"218"),t("br"),t("span",{class:"line-number"},"219"),t("br"),t("span",{class:"line-number"},"220"),t("br"),t("span",{class:"line-number"},"221"),t("br"),t("span",{class:"line-number"},"222"),t("br"),t("span",{class:"line-number"},"223"),t("br"),t("span",{class:"line-number"},"224"),t("br"),t("span",{class:"line-number"},"225"),t("br"),t("span",{class:"line-number"},"226"),t("br"),t("span",{class:"line-number"},"227"),t("br"),t("span",{class:"line-number"},"228"),t("br"),t("span",{class:"line-number"},"229"),t("br"),t("span",{class:"line-number"},"230"),t("br"),t("span",{class:"line-number"},"231"),t("br"),t("span",{class:"line-number"},"232"),t("br"),t("span",{class:"line-number"},"233"),t("br"),t("span",{class:"line-number"},"234"),t("br"),t("span",{class:"line-number"},"235"),t("br"),t("span",{class:"line-number"},"236"),t("br"),t("span",{class:"line-number"},"237"),t("br"),t("span",{class:"line-number"},"238"),t("br"),t("span",{class:"line-number"},"239"),t("br"),t("span",{class:"line-number"},"240"),t("br"),t("span",{class:"line-number"},"241"),t("br"),t("span",{class:"line-number"},"242"),t("br"),t("span",{class:"line-number"},"243"),t("br"),t("span",{class:"line-number"},"244"),t("br"),t("span",{class:"line-number"},"245"),t("br"),t("span",{class:"line-number"},"246"),t("br"),t("span",{class:"line-number"},"247"),t("br"),t("span",{class:"line-number"},"248"),t("br"),t("span",{class:"line-number"},"249"),t("br"),t("span",{class:"line-number"},"250"),t("br"),t("span",{class:"line-number"},"251"),t("br"),t("span",{class:"line-number"},"252"),t("br"),t("span",{class:"line-number"},"253"),t("br"),t("span",{class:"line-number"},"254"),t("br"),t("span",{class:"line-number"},"255"),t("br"),t("span",{class:"line-number"},"256"),t("br"),t("span",{class:"line-number"},"257"),t("br"),t("span",{class:"line-number"},"258"),t("br"),t("span",{class:"line-number"},"259"),t("br"),t("span",{class:"line-number"},"260"),t("br"),t("span",{class:"line-number"},"261"),t("br"),t("span",{class:"line-number"},"262"),t("br"),t("span",{class:"line-number"},"263"),t("br"),t("span",{class:"line-number"},"264"),t("br"),t("span",{class:"line-number"},"265"),t("br"),t("span",{class:"line-number"},"266"),t("br"),t("span",{class:"line-number"},"267"),t("br"),t("span",{class:"line-number"},"268"),t("br"),t("span",{class:"line-number"},"269"),t("br"),t("span",{class:"line-number"},"270"),t("br"),t("span",{class:"line-number"},"271"),t("br"),t("span",{class:"line-number"},"272"),t("br"),t("span",{class:"line-number"},"273"),t("br"),t("span",{class:"line-number"},"274"),t("br"),t("span",{class:"line-number"},"275"),t("br"),t("span",{class:"line-number"},"276"),t("br"),t("span",{class:"line-number"},"277"),t("br"),t("span",{class:"line-number"},"278"),t("br"),t("span",{class:"line-number"},"279"),t("br"),t("span",{class:"line-number"},"280"),t("br"),t("span",{class:"line-number"},"281"),t("br"),t("span",{class:"line-number"},"282"),t("br"),t("span",{class:"line-number"},"283"),t("br"),t("span",{class:"line-number"},"284"),t("br"),t("span",{class:"line-number"},"285"),t("br"),t("span",{class:"line-number"},"286"),t("br"),t("span",{class:"line-number"},"287"),t("br"),t("span",{class:"line-number"},"288"),t("br"),t("span",{class:"line-number"},"289"),t("br"),t("span",{class:"line-number"},"290"),t("br"),t("span",{class:"line-number"},"291"),t("br"),t("span",{class:"line-number"},"292"),t("br"),t("span",{class:"line-number"},"293"),t("br"),t("span",{class:"line-number"},"294"),t("br"),t("span",{class:"line-number"},"295"),t("br"),t("span",{class:"line-number"},"296"),t("br"),t("span",{class:"line-number"},"297"),t("br"),t("span",{class:"line-number"},"298"),t("br"),t("span",{class:"line-number"},"299"),t("br"),t("span",{class:"line-number"},"300"),t("br"),t("span",{class:"line-number"},"301"),t("br"),t("span",{class:"line-number"},"302"),t("br"),t("span",{class:"line-number"},"303"),t("br"),t("span",{class:"line-number"},"304"),t("br"),t("span",{class:"line-number"},"305"),t("br"),t("span",{class:"line-number"},"306"),t("br"),t("span",{class:"line-number"},"307"),t("br"),t("span",{class:"line-number"},"308"),t("br"),t("span",{class:"line-number"},"309"),t("br"),t("span",{class:"line-number"},"310"),t("br"),t("span",{class:"line-number"},"311"),t("br"),t("span",{class:"line-number"},"312"),t("br"),t("span",{class:"line-number"},"313"),t("br"),t("span",{class:"line-number"},"314"),t("br"),t("span",{class:"line-number"},"315"),t("br"),t("span",{class:"line-number"},"316"),t("br"),t("span",{class:"line-number"},"317"),t("br"),t("span",{class:"line-number"},"318"),t("br"),t("span",{class:"line-number"},"319"),t("br"),t("span",{class:"line-number"},"320"),t("br"),t("span",{class:"line-number"},"321"),t("br"),t("span",{class:"line-number"},"322"),t("br"),t("span",{class:"line-number"},"323"),t("br"),t("span",{class:"line-number"},"324"),t("br"),t("span",{class:"line-number"},"325"),t("br"),t("span",{class:"line-number"},"326"),t("br"),t("span",{class:"line-number"},"327"),t("br"),t("span",{class:"line-number"},"328"),t("br"),t("span",{class:"line-number"},"329"),t("br"),t("span",{class:"line-number"},"330"),t("br"),t("span",{class:"line-number"},"331"),t("br"),t("span",{class:"line-number"},"332"),t("br"),t("span",{class:"line-number"},"333"),t("br"),t("span",{class:"line-number"},"334"),t("br"),t("span",{class:"line-number"},"335"),t("br"),t("span",{class:"line-number"},"336"),t("br"),t("span",{class:"line-number"},"337"),t("br"),t("span",{class:"line-number"},"338"),t("br"),t("span",{class:"line-number"},"339"),t("br"),t("span",{class:"line-number"},"340"),t("br"),t("span",{class:"line-number"},"341"),t("br"),t("span",{class:"line-number"},"342"),t("br"),t("span",{class:"line-number"},"343"),t("br"),t("span",{class:"line-number"},"344"),t("br"),t("span",{class:"line-number"},"345"),t("br"),t("span",{class:"line-number"},"346"),t("br"),t("span",{class:"line-number"},"347"),t("br"),t("span",{class:"line-number"},"348"),t("br"),t("span",{class:"line-number"},"349"),t("br"),t("span",{class:"line-number"},"350"),t("br"),t("span",{class:"line-number"},"351"),t("br"),t("span",{class:"line-number"},"352"),t("br"),t("span",{class:"line-number"},"353"),t("br"),t("span",{class:"line-number"},"354"),t("br"),t("span",{class:"line-number"},"355"),t("br"),t("span",{class:"line-number"},"356"),t("br"),t("span",{class:"line-number"},"357"),t("br"),t("span",{class:"line-number"},"358"),t("br"),t("span",{class:"line-number"},"359"),t("br"),t("span",{class:"line-number"},"360"),t("br"),t("span",{class:"line-number"},"361"),t("br"),t("span",{class:"line-number"},"362"),t("br"),t("span",{class:"line-number"},"363"),t("br"),t("span",{class:"line-number"},"364"),t("br"),t("span",{class:"line-number"},"365"),t("br"),t("span",{class:"line-number"},"366"),t("br"),t("span",{class:"line-number"},"367"),t("br"),t("span",{class:"line-number"},"368"),t("br"),t("span",{class:"line-number"},"369"),t("br"),t("span",{class:"line-number"},"370"),t("br"),t("span",{class:"line-number"},"371"),t("br"),t("span",{class:"line-number"},"372"),t("br"),t("span",{class:"line-number"},"373"),t("br"),t("span",{class:"line-number"},"374"),t("br"),t("span",{class:"line-number"},"375"),t("br"),t("span",{class:"line-number"},"376"),t("br"),t("span",{class:"line-number"},"377"),t("br"),t("span",{class:"line-number"},"378"),t("br"),t("span",{class:"line-number"},"379"),t("br"),t("span",{class:"line-number"},"380"),t("br"),t("span",{class:"line-number"},"381"),t("br"),t("span",{class:"line-number"},"382"),t("br"),t("span",{class:"line-number"},"383"),t("br"),t("span",{class:"line-number"},"384"),t("br"),t("span",{class:"line-number"},"385"),t("br"),t("span",{class:"line-number"},"386"),t("br"),t("span",{class:"line-number"},"387"),t("br"),t("span",{class:"line-number"},"388"),t("br"),t("span",{class:"line-number"},"389"),t("br"),t("span",{class:"line-number"},"390"),t("br"),t("span",{class:"line-number"},"391"),t("br"),t("span",{class:"line-number"},"392"),t("br"),t("span",{class:"line-number"},"393"),t("br"),t("span",{class:"line-number"},"394"),t("br"),t("span",{class:"line-number"},"395"),t("br"),t("span",{class:"line-number"},"396"),t("br"),t("span",{class:"line-number"},"397"),t("br"),t("span",{class:"line-number"},"398"),t("br"),t("span",{class:"line-number"},"399"),t("br"),t("span",{class:"line-number"},"400"),t("br"),t("span",{class:"line-number"},"401"),t("br"),t("span",{class:"line-number"},"402"),t("br"),t("span",{class:"line-number"},"403"),t("br"),t("span",{class:"line-number"},"404"),t("br"),t("span",{class:"line-number"},"405"),t("br"),t("span",{class:"line-number"},"406"),t("br"),t("span",{class:"line-number"},"407"),t("br"),t("span",{class:"line-number"},"408"),t("br"),t("span",{class:"line-number"},"409"),t("br"),t("span",{class:"line-number"},"410"),t("br"),t("span",{class:"line-number"},"411"),t("br"),t("span",{class:"line-number"},"412"),t("br"),t("span",{class:"line-number"},"413"),t("br"),t("span",{class:"line-number"},"414"),t("br"),t("span",{class:"line-number"},"415"),t("br"),t("span",{class:"line-number"},"416"),t("br"),t("span",{class:"line-number"},"417"),t("br"),t("span",{class:"line-number"},"418"),t("br"),t("span",{class:"line-number"},"419"),t("br"),t("span",{class:"line-number"},"420"),t("br"),t("span",{class:"line-number"},"421"),t("br"),t("span",{class:"line-number"},"422"),t("br"),t("span",{class:"line-number"},"423"),t("br"),t("span",{class:"line-number"},"424"),t("br"),t("span",{class:"line-number"},"425"),t("br"),t("span",{class:"line-number"},"426"),t("br"),t("span",{class:"line-number"},"427"),t("br"),t("span",{class:"line-number"},"428"),t("br"),t("span",{class:"line-number"},"429"),t("br"),t("span",{class:"line-number"},"430"),t("br"),t("span",{class:"line-number"},"431"),t("br"),t("span",{class:"line-number"},"432"),t("br"),t("span",{class:"line-number"},"433"),t("br"),t("span",{class:"line-number"},"434"),t("br"),t("span",{class:"line-number"},"435"),t("br"),t("span",{class:"line-number"},"436"),t("br"),t("span",{class:"line-number"},"437"),t("br"),t("span",{class:"line-number"},"438"),t("br"),t("span",{class:"line-number"},"439"),t("br"),t("span",{class:"line-number"},"440"),t("br"),t("span",{class:"line-number"},"441"),t("br"),t("span",{class:"line-number"},"442"),t("br"),t("span",{class:"line-number"},"443"),t("br"),t("span",{class:"line-number"},"444"),t("br"),t("span",{class:"line-number"},"445"),t("br"),t("span",{class:"line-number"},"446"),t("br"),t("span",{class:"line-number"},"447"),t("br"),t("span",{class:"line-number"},"448"),t("br"),t("span",{class:"line-number"},"449"),t("br"),t("span",{class:"line-number"},"450"),t("br"),t("span",{class:"line-number"},"451"),t("br"),t("span",{class:"line-number"},"452"),t("br"),t("span",{class:"line-number"},"453"),t("br"),t("span",{class:"line-number"},"454"),t("br"),t("span",{class:"line-number"},"455"),t("br"),t("span",{class:"line-number"},"456"),t("br"),t("span",{class:"line-number"},"457"),t("br"),t("span",{class:"line-number"},"458"),t("br"),t("span",{class:"line-number"},"459"),t("br"),t("span",{class:"line-number"},"460"),t("br"),t("span",{class:"line-number"},"461"),t("br"),t("span",{class:"line-number"},"462"),t("br"),t("span",{class:"line-number"},"463"),t("br"),t("span",{class:"line-number"},"464"),t("br"),t("span",{class:"line-number"},"465"),t("br"),t("span",{class:"line-number"},"466"),t("br"),t("span",{class:"line-number"},"467"),t("br"),t("span",{class:"line-number"},"468"),t("br"),t("span",{class:"line-number"},"469"),t("br"),t("span",{class:"line-number"},"470"),t("br"),t("span",{class:"line-number"},"471"),t("br"),t("span",{class:"line-number"},"472"),t("br"),t("span",{class:"line-number"},"473"),t("br"),t("span",{class:"line-number"},"474"),t("br"),t("span",{class:"line-number"},"475"),t("br"),t("span",{class:"line-number"},"476"),t("br"),t("span",{class:"line-number"},"477"),t("br"),t("span",{class:"line-number"},"478"),t("br"),t("span",{class:"line-number"},"479"),t("br"),t("span",{class:"line-number"},"480"),t("br"),t("span",{class:"line-number"},"481"),t("br"),t("span",{class:"line-number"},"482"),t("br"),t("span",{class:"line-number"},"483"),t("br"),t("span",{class:"line-number"},"484"),t("br"),t("span",{class:"line-number"},"485"),t("br"),t("span",{class:"line-number"},"486"),t("br"),t("span",{class:"line-number"},"487"),t("br"),t("span",{class:"line-number"},"488"),t("br"),t("span",{class:"line-number"},"489"),t("br"),t("span",{class:"line-number"},"490"),t("br"),t("span",{class:"line-number"},"491"),t("br"),t("span",{class:"line-number"},"492"),t("br"),t("span",{class:"line-number"},"493"),t("br"),t("span",{class:"line-number"},"494"),t("br"),t("span",{class:"line-number"},"495"),t("br"),t("span",{class:"line-number"},"496"),t("br"),t("span",{class:"line-number"},"497"),t("br"),t("span",{class:"line-number"},"498"),t("br"),t("span",{class:"line-number"},"499"),t("br"),t("span",{class:"line-number"},"500"),t("br"),t("span",{class:"line-number"},"501"),t("br"),t("span",{class:"line-number"},"502"),t("br"),t("span",{class:"line-number"},"503"),t("br"),t("span",{class:"line-number"},"504"),t("br"),t("span",{class:"line-number"},"505"),t("br"),t("span",{class:"line-number"},"506"),t("br"),t("span",{class:"line-number"},"507"),t("br"),t("span",{class:"line-number"},"508"),t("br"),t("span",{class:"line-number"},"509"),t("br"),t("span",{class:"line-number"},"510"),t("br"),t("span",{class:"line-number"},"511"),t("br"),t("span",{class:"line-number"},"512"),t("br"),t("span",{class:"line-number"},"513"),t("br"),t("span",{class:"line-number"},"514"),t("br"),t("span",{class:"line-number"},"515"),t("br"),t("span",{class:"line-number"},"516"),t("br"),t("span",{class:"line-number"},"517"),t("br"),t("span",{class:"line-number"},"518"),t("br"),t("span",{class:"line-number"},"519"),t("br"),t("span",{class:"line-number"},"520"),t("br"),t("span",{class:"line-number"},"521"),t("br"),t("span",{class:"line-number"},"522"),t("br"),t("span",{class:"line-number"},"523"),t("br"),t("span",{class:"line-number"},"524"),t("br"),t("span",{class:"line-number"},"525"),t("br"),t("span",{class:"line-number"},"526"),t("br"),t("span",{class:"line-number"},"527"),t("br"),t("span",{class:"line-number"},"528"),t("br"),t("span",{class:"line-number"},"529"),t("br"),t("span",{class:"line-number"},"530"),t("br"),t("span",{class:"line-number"},"531"),t("br"),t("span",{class:"line-number"},"532"),t("br"),t("span",{class:"line-number"},"533"),t("br"),t("span",{class:"line-number"},"534"),t("br"),t("span",{class:"line-number"},"535"),t("br"),t("span",{class:"line-number"},"536"),t("br"),t("span",{class:"line-number"},"537"),t("br"),t("span",{class:"line-number"},"538"),t("br"),t("span",{class:"line-number"},"539"),t("br"),t("span",{class:"line-number"},"540"),t("br"),t("span",{class:"line-number"},"541"),t("br"),t("span",{class:"line-number"},"542"),t("br"),t("span",{class:"line-number"},"543"),t("br"),t("span",{class:"line-number"},"544"),t("br"),t("span",{class:"line-number"},"545"),t("br"),t("span",{class:"line-number"},"546"),t("br"),t("span",{class:"line-number"},"547"),t("br"),t("span",{class:"line-number"},"548"),t("br"),t("span",{class:"line-number"},"549"),t("br"),t("span",{class:"line-number"},"550"),t("br"),t("span",{class:"line-number"},"551"),t("br"),t("span",{class:"line-number"},"552"),t("br"),t("span",{class:"line-number"},"553"),t("br"),t("span",{class:"line-number"},"554"),t("br"),t("span",{class:"line-number"},"555"),t("br"),t("span",{class:"line-number"},"556"),t("br"),t("span",{class:"line-number"},"557"),t("br"),t("span",{class:"line-number"},"558"),t("br"),t("span",{class:"line-number"},"559"),t("br"),t("span",{class:"line-number"},"560"),t("br"),t("span",{class:"line-number"},"561"),t("br"),t("span",{class:"line-number"},"562"),t("br"),t("span",{class:"line-number"},"563"),t("br"),t("span",{class:"line-number"},"564"),t("br"),t("span",{class:"line-number"},"565"),t("br"),t("span",{class:"line-number"},"566"),t("br"),t("span",{class:"line-number"},"567"),t("br"),t("span",{class:"line-number"},"568"),t("br"),t("span",{class:"line-number"},"569"),t("br"),t("span",{class:"line-number"},"570"),t("br"),t("span",{class:"line-number"},"571"),t("br"),t("span",{class:"line-number"},"572"),t("br"),t("span",{class:"line-number"},"573"),t("br"),t("span",{class:"line-number"},"574"),t("br"),t("span",{class:"line-number"},"575"),t("br"),t("span",{class:"line-number"},"576"),t("br"),t("span",{class:"line-number"},"577"),t("br"),t("span",{class:"line-number"},"578"),t("br"),t("span",{class:"line-number"},"579"),t("br"),t("span",{class:"line-number"},"580"),t("br"),t("span",{class:"line-number"},"581"),t("br"),t("span",{class:"line-number"},"582"),t("br"),t("span",{class:"line-number"},"583"),t("br"),t("span",{class:"line-number"},"584"),t("br"),t("span",{class:"line-number"},"585"),t("br"),t("span",{class:"line-number"},"586"),t("br"),t("span",{class:"line-number"},"587"),t("br"),t("span",{class:"line-number"},"588"),t("br"),t("span",{class:"line-number"},"589"),t("br"),t("span",{class:"line-number"},"590"),t("br"),t("span",{class:"line-number"},"591"),t("br"),t("span",{class:"line-number"},"592"),t("br"),t("span",{class:"line-number"},"593"),t("br"),t("span",{class:"line-number"},"594"),t("br"),t("span",{class:"line-number"},"595"),t("br"),t("span",{class:"line-number"},"596"),t("br"),t("span",{class:"line-number"},"597"),t("br"),t("span",{class:"line-number"},"598"),t("br"),t("span",{class:"line-number"},"599"),t("br"),t("span",{class:"line-number"},"600"),t("br"),t("span",{class:"line-number"},"601"),t("br"),t("span",{class:"line-number"},"602"),t("br"),t("span",{class:"line-number"},"603"),t("br"),t("span",{class:"line-number"},"604"),t("br"),t("span",{class:"line-number"},"605"),t("br"),t("span",{class:"line-number"},"606"),t("br"),t("span",{class:"line-number"},"607"),t("br"),t("span",{class:"line-number"},"608"),t("br"),t("span",{class:"line-number"},"609"),t("br"),t("span",{class:"line-number"},"610"),t("br"),t("span",{class:"line-number"},"611"),t("br"),t("span",{class:"line-number"},"612"),t("br"),t("span",{class:"line-number"},"613"),t("br"),t("span",{class:"line-number"},"614"),t("br"),t("span",{class:"line-number"},"615"),t("br"),t("span",{class:"line-number"},"616"),t("br"),t("span",{class:"line-number"},"617"),t("br"),t("span",{class:"line-number"},"618"),t("br")])],-1),w=t("p",null,"More Coming Soon!",-1);function q(x,v,f,T,C,B){const e=o("CodeHeader"),r=o("Spoiler");return u(),l("div",null,[b,s(e,null,{default:a(()=>[m]),_:1}),_,s(e,null,{default:a(()=>[y]),_:1}),g,s(e,null,{default:a(()=>[d]),_:1}),s(r,{title:"Code"},{default:a(()=>[h]),_:1}),w])}var G=c(k,[["render",q]]);export{A as __pageData,G as default};

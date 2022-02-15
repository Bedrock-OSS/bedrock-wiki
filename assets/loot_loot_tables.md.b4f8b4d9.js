import{_ as r,r as p,c,a as s,w as e,b as n,d as t,e as o,o as u}from"./404.md.6f5dde84.js";const V='{"title":"Loot Tables","description":"","frontmatter":{"title":"Loot Tables"},"headers":[],"relativePath":"loot/loot_tables.md","lastUpdated":1644950065011}',i={},k=n("p",null,[t("Loot tables are powerful tools that define what blocks drop upon destruction, what entities upon death, what equipment can entities use, what can a player fish out of a river and what loot ends up in the game's loot chests. In order to understand loot tables better, I recommend looking into the "),n("code",null,"loot_tables"),t(" folder of the Example Vanilla Behavior pack, but I'll trow in some examples from there into here nevertheless. "),n("br"),t(" One can even make a loot that drops half-removed blocks like glowingobsidian and netherreactors!")],-1),b=t("BP/loot_tables/entities/ghast.json"),m=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token property"},'"pools"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
		`),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token property"},'"rolls"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
			`),n("span",{class:"token property"},'"entries"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"minecraft:ghast_tear"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"functions"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
						`),n("span",{class:"token punctuation"},"{"),t(`
							`),n("span",{class:"token property"},'"function"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"set_count"'),n("span",{class:"token punctuation"},","),t(`
							`),n("span",{class:"token property"},'"count"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
								`),n("span",{class:"token property"},'"min"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
								`),n("span",{class:"token property"},'"max"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
							`),n("span",{class:"token punctuation"},"}"),t(`
						`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
						`),n("span",{class:"token punctuation"},"{"),t(`
							`),n("span",{class:"token property"},'"function"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"looting_enchant"'),n("span",{class:"token punctuation"},","),t(`
							`),n("span",{class:"token property"},'"count"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
								`),n("span",{class:"token property"},'"min"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
								`),n("span",{class:"token property"},'"max"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
							`),n("span",{class:"token punctuation"},"}"),t(`
						`),n("span",{class:"token punctuation"},"}"),t(`
					`),n("span",{class:"token punctuation"},"]"),t(`
				`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token punctuation"},"]"),t(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
		`),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token property"},'"rolls"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
			`),n("span",{class:"token property"},'"entries"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"minecraft:gunpowder"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"functions"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
						`),n("span",{class:"token punctuation"},"{"),t(`
							`),n("span",{class:"token property"},'"function"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"set_count"'),n("span",{class:"token punctuation"},","),t(`
							`),n("span",{class:"token property"},'"count"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
								`),n("span",{class:"token property"},'"min"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
								`),n("span",{class:"token property"},'"max"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),t(`
							`),n("span",{class:"token punctuation"},"}"),t(`
						`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
						`),n("span",{class:"token punctuation"},"{"),t(`
							`),n("span",{class:"token property"},'"function"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"looting_enchant"'),n("span",{class:"token punctuation"},","),t(`
							`),n("span",{class:"token property"},'"count"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
								`),n("span",{class:"token property"},'"min"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
								`),n("span",{class:"token property"},'"max"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
							`),n("span",{class:"token punctuation"},"}"),t(`
						`),n("span",{class:"token punctuation"},"}"),t(`
					`),n("span",{class:"token punctuation"},"]"),t(`
				`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token punctuation"},"]"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"]"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br")])],-1),y=t("BP/loot_tables/chests/equipment.low_tier_items.json"),h=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token property"},'"pools"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
		`),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token property"},'"rolls"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
			`),n("span",{class:"token property"},'"entries"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"minecraft:leather_chestplate"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"minecraft:iron_chestplate"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"empty"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"5"),t(`
				`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token punctuation"},"]"),t(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
		`),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token property"},'"rolls"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
			`),n("span",{class:"token property"},'"entries"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"minecraft:leather_helmet"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"minecraft:iron_helmet"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"empty"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"5"),t(`
				`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token punctuation"},"]"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"]"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br")])],-1),d=t("BP/loot_tables/chests/village/village_cartographer.json"),g=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token property"},'"pools"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
		`),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token property"},'"rolls"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token property"},'"min"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token property"},'"max"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"5"),t(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
			`),n("span",{class:"token property"},'"entries"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"functions"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
						`),n("span",{class:"token punctuation"},"{"),t(`
							`),n("span",{class:"token property"},'"function"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"set_count"'),n("span",{class:"token punctuation"},","),t(`
							`),n("span",{class:"token property"},'"count"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
								`),n("span",{class:"token property"},'"min"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
								`),n("span",{class:"token property"},'"max"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),t(`
							`),n("span",{class:"token punctuation"},"}"),t(`
						`),n("span",{class:"token punctuation"},"}"),t(`
					`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"minecraft:map"'),t(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"functions"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
						`),n("span",{class:"token punctuation"},"{"),t(`
							`),n("span",{class:"token property"},'"function"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"set_count"'),n("span",{class:"token punctuation"},","),t(`
							`),n("span",{class:"token property"},'"count"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
								`),n("span",{class:"token property"},'"min"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
								`),n("span",{class:"token property"},'"max"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"5"),t(`
							`),n("span",{class:"token punctuation"},"}"),t(`
						`),n("span",{class:"token punctuation"},"}"),t(`
					`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"minecraft:paper"'),t(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"minecraft:compass"'),t(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"functions"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
						`),n("span",{class:"token punctuation"},"{"),t(`
							`),n("span",{class:"token property"},'"function"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"set_count"'),n("span",{class:"token punctuation"},","),t(`
							`),n("span",{class:"token property"},'"count"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
								`),n("span",{class:"token property"},'"min"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
								`),n("span",{class:"token property"},'"max"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"4"),t(`
							`),n("span",{class:"token punctuation"},"}"),t(`
						`),n("span",{class:"token punctuation"},"}"),t(`
					`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"minecraft:bread"'),t(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"functions"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
						`),n("span",{class:"token punctuation"},"{"),t(`
							`),n("span",{class:"token property"},'"function"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"set_count"'),n("span",{class:"token punctuation"},","),t(`
							`),n("span",{class:"token property"},'"count"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
								`),n("span",{class:"token property"},'"min"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
								`),n("span",{class:"token property"},'"max"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),t(`
							`),n("span",{class:"token punctuation"},"}"),t(`
						`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
						`),n("span",{class:"token punctuation"},"{"),t(`
							`),n("span",{class:"token property"},'"function"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"set_data"'),n("span",{class:"token punctuation"},","),t(`
							`),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),t(`
						`),n("span",{class:"token punctuation"},"}"),t(`
					`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"minecraft:sapling"'),t(`
				`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token punctuation"},"]"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"]"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br")])],-1),_=t("BP/loot_tables/gameplay/fishing/treasure.json"),q=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token property"},'"pools"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
		`),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token property"},'"rolls"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
			`),n("span",{class:"token property"},'"entries"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"minecraft:nautilus_shell"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"5"),t(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"minecraft:waterlily"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"5"),t(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"minecraft:name_tag"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"5"),t(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"minecraft:saddle"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"5"),t(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"minecraft:bow"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"functions"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
						`),n("span",{class:"token punctuation"},"{"),t(`
							`),n("span",{class:"token property"},'"function"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"set_damage"'),n("span",{class:"token punctuation"},","),t(`
							`),n("span",{class:"token property"},'"damage"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
								`),n("span",{class:"token property"},'"min"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
								`),n("span",{class:"token property"},'"max"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0.25"),t(`
							`),n("span",{class:"token punctuation"},"}"),t(`
						`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
						`),n("span",{class:"token punctuation"},"{"),t(`
							`),n("span",{class:"token property"},'"function"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"enchant_with_levels"'),n("span",{class:"token punctuation"},","),t(`
							`),n("span",{class:"token property"},'"levels"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),t(`
							`),n("span",{class:"token property"},'"treasure"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(`
						`),n("span",{class:"token punctuation"},"}"),t(`
					`),n("span",{class:"token punctuation"},"]"),t(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"minecraft:fishing_rod"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"functions"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
						`),n("span",{class:"token punctuation"},"{"),t(`
							`),n("span",{class:"token property"},'"function"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"set_damage"'),n("span",{class:"token punctuation"},","),t(`
							`),n("span",{class:"token property"},'"damage"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
								`),n("span",{class:"token property"},'"min"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
								`),n("span",{class:"token property"},'"max"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0.25"),t(`
							`),n("span",{class:"token punctuation"},"}"),t(`
						`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
						`),n("span",{class:"token punctuation"},"{"),t(`
							`),n("span",{class:"token property"},'"function"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"enchant_with_levels"'),n("span",{class:"token punctuation"},","),t(`
							`),n("span",{class:"token property"},'"levels"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),t(`
							`),n("span",{class:"token property"},'"treasure"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(`
						`),n("span",{class:"token punctuation"},"}"),t(`
					`),n("span",{class:"token punctuation"},"]"),t(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"item"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"minecraft:book"'),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),t(`
					`),n("span",{class:"token property"},'"functions"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
						`),n("span",{class:"token punctuation"},"{"),t(`
							`),n("span",{class:"token property"},'"function"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"enchant_with_levels"'),n("span",{class:"token punctuation"},","),t(`
							`),n("span",{class:"token property"},'"levels"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),t(`
							`),n("span",{class:"token property"},'"treasure"'),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(`
						`),n("span",{class:"token punctuation"},"}"),t(`
					`),n("span",{class:"token punctuation"},"]"),t(`
				`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token punctuation"},"]"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"]"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br")])],-1),f=o("<br><hr><p>The most important thing in a loot table is the <em>file name</em>, since loot tables have no other identifier. They can be called by the path of the file in <code>BP/blocks/blockname.json/&quot;minecraft:loot: {}&quot;</code> for block loot, <code>BP/entities/entityname.json/&quot;minecraft:loot: {}&quot;</code> for entities and <code>BP/entities/entityname.json/&quot;minecraft:equipment: {}&quot;</code> for entity equipment (most hostile mobs use <code>low_tier_items.json</code>).\\</p><p>If you want to change what can a player fish out of a jungle river, simply create your own loot table under <code>BP/loot_tables/gameplay/fishing/jungle_fish.json and BP/loot_tables/gameplay/fishing/jungle_junk.json</code> to overwrite the Vanilla loot tables. This can be done with most other Vanilla files too (if the aspect is data-driven).</p><p>You can also use <code>loot_tables.empty.json</code> for no loot.</p><p>Let&#39;s break up the Loot table structure somewhat. I took a simple zombie loot table as an example.</p>",6),w=o(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;pools&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;rolls&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token property">&quot;entries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;item&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:rotten_flesh&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
					<span class="token property">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;function&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set_count&quot;</span><span class="token punctuation">,</span>
							<span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
								<span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
								<span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
							<span class="token punctuation">}</span>
						<span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;function&quot;</span><span class="token operator">:</span> <span class="token string">&quot;looting_enchant&quot;</span><span class="token punctuation">,</span>
							<span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
								<span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
								<span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
							<span class="token punctuation">}</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;conditions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;killed_by_player&quot;</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">{</span>
					<span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;random_chance_with_looting&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;chance&quot;</span><span class="token operator">:</span> <span class="token number">0.025</span><span class="token punctuation">,</span>
					<span class="token property">&quot;looting_multiplier&quot;</span><span class="token operator">:</span> <span class="token number">0.01</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">&quot;rolls&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token property">&quot;entries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;item&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:iron_ingot&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">{</span>
					<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;item&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:carrot&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">{</span>
					<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;item&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:potato&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><ul><li>&quot;<code>rolls</code>&quot; defines how many times a random entry will be chosen from the following &quot;<code>entries</code>&quot; object.</li><li>&quot;<code>type</code>&quot; can be set to either &quot;<code>item</code>&quot; or &quot;<code>loot_table</code>&quot; (to refer to an external loot table. For more information on that, check the Vanilla <code>BP/loot_tables/gameplay/fishing.json</code>).</li><li>&quot;<code>name</code>&quot; only goes after <code>&quot;type&quot;: &quot;item&quot;</code> and can be set to an item&#39;s full identifier, including the namespace.</li><li>&quot;<code>weight</code>&quot; is the chance of this entry being chosen. The higher the weight in comparison to other entries in this &quot;<code>entries</code>&quot; array, the higher the chance of the entry being chosen.</li><li>&quot;<code>functions</code>&quot; are what makes loot tables so powerful. They can do a lot, including setting the number of items dropped, enchanting the items(enchantments can even go on normally non-enchantable items that way), setting the items&#39; names, the items&#39; lores, and even writing books. <br> For more information on functions check the example vanilla files or the unofficial Loot Table documentation, available <a href="https://minecraft.gamepedia.com/Bedrock_Edition_function/loot_tables/trade_tables_documentation" target="_blank" rel="noopener noreferrer">here</a>.</li><li>&quot;<code>conditions</code>&quot; can check for things like <em>&quot;was the entity killed by a player?&quot;</em> and <em>&quot;was the sword enchanted with Looting III?&quot;</em>. More info in them can be found in the resources listed above. \\</li></ul><p><em>Blocks do not drop loot in creative mode</em></p><p><strong>Note: it is possible to generate loot tables visually online. Check Links and Contact for the link to a reliable generator.</strong></p><p><strong><em>Challenge: Create custom loot tables for our custom blocks created in the previous chapter!</em></strong></p>`,5);function v(x,j,T,B,P,C){const a=p("CodeHeader"),l=p("Spoiler");return u(),c("div",null,[k,s(l,{title:"Example Loot Tables"},{default:e(()=>[s(a,null,{default:e(()=>[b]),_:1}),m,s(a,null,{default:e(()=>[y]),_:1}),h,s(a,null,{default:e(()=>[d]),_:1}),g,s(a,null,{default:e(()=>[_]),_:1}),q]),_:1}),f,s(a),w])}var L=r(i,[["render",v]]);export{V as __pageData,L as default};

import{_ as r,r as p,c,a as s,w as e,b as n,d as t,e as o,o as u}from"./404.md.f487741c.js";const V='{"title":"Loot Tables","description":"","frontmatter":{"title":"Loot Tables"},"headers":[],"relativePath":"loot/loot_tables.md","lastUpdated":1645020391912}',i={},k=n("p",null,[t("Loot tables are powerful tools that define what blocks drop upon destruction, what entities upon death, what equipment can entities use, what can a player fish out of a river and what loot ends up in the game's loot chests. In order to understand loot tables better, I recommend looking into the "),n("code",null,"loot_tables"),t(" folder of the Example Vanilla Behavior pack, but I'll trow in some examples from there into here nevertheless. "),n("br"),t(" One can even make a loot that drops half-removed blocks like glowingobsidian and netherreactors!")],-1),b=t("BP/loot_tables/entities/ghast.json"),m=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),t(`
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
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br")])],-1),f=o("",6),w=o("",5);function v(x,j,T,B,P,C){const a=p("CodeHeader"),l=p("Spoiler");return u(),c("div",null,[k,s(l,{title:"Example Loot Tables"},{default:e(()=>[s(a,null,{default:e(()=>[b]),_:1}),m,s(a,null,{default:e(()=>[y]),_:1}),h,s(a,null,{default:e(()=>[d]),_:1}),g,s(a,null,{default:e(()=>[_]),_:1}),q]),_:1}),f,s(a),w])}var L=r(i,[["render",v]]);export{V as __pageData,L as default};

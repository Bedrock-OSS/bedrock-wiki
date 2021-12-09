import{_ as l,r as o,c,a as s,w as e,b as n,d as t,e as p,o as u}from"./404.md.959732d2.js";const A='{"title":"Loot Tables and Spawn Rules","description":"","frontmatter":{"title":"Loot Tables and Spawn Rules"},"headers":[{"level":2,"title":"Spawn Rules","slug":"spawn-rules"},{"level":2,"title":"Your progress so far","slug":"your-progress-so-far"}],"relativePath":"loot/loot_tables-spawn_rules.md","lastUpdated":1639074843825}',i={},k=n("p",null,[t("Loot tables are powerful tools that define what blocks drop upon destruction, what entities upon death, what equipment can entities use, what can a player fish out of a river and what loot ends up in the game's loot chests. In order to understand loot tables better, I recommend looking into the "),n("code",null,"loot_tables"),t(" folder of the Example Vanilla Behavior pack, but I'll trow in some examples from there into here nevertheless. "),n("br"),t(" One can even make a loot that drops half-removed blocks like glowingobsidian and netherreactors!")],-1),b=t("BP/loot_tables/entities/ghast.json"),m=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),t(`
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
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br")])],-1),d=t("BP/loot_tables/chests/equipment.low_tier_items.json"),y=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),t(`
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
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br")])],-1),q=t("BP/loot_tables/chests/village/village_cartographer.json"),h=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),t(`
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
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br")])],-1),g=t("BP/loot_tables/gameplay/fishing/treasure.json"),_=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),t(`
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
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br")])],-1),f=p("",6),w=p(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><ul><li>&quot;<code>rolls</code>&quot; defines how many times a random entry will be chosen from the following &quot;<code>entries</code>&quot; object.</li><li>&quot;<code>type</code>&quot; can be set to either &quot;<code>item</code>&quot; or &quot;<code>loot_table</code>&quot; (to refer to an external loot table. For more information on that, check the Vanilla <code>BP/loot_tables/gameplay/fishing.json</code>).</li><li>&quot;<code>name</code>&quot; only goes after <code>&quot;type&quot;: &quot;item&quot;</code> and can be set to an item&#39;s full identifier, including the namespace.</li><li>&quot;<code>weight</code>&quot; is the chance of this entry being chosen. The higher the weight in comparison to other entries in this &quot;<code>entries</code>&quot; array, the higher the chance of the entry being chosen.</li><li>&quot;<code>functions</code>&quot; are what makes loot tables so powerful. They can do a lot, including setting the number of items dropped, enchanting the items(enchantments can even go on normally non-enchantable items that way), setting the items&#39; names, the items&#39; lores, and even writing books. <br> For more information on functions check the example vanilla files or the unofficial Loot Table documentation, available <a href="https://minecraft.gamepedia.com/Bedrock_Edition_function/loot_tables/trade_tables_documentation" target="_blank" rel="noopener noreferrer">here</a>.</li><li>&quot;<code>conditions</code>&quot; can check for things like <em>&quot;was the entity killed by a player?&quot;</em> and <em>&quot;was the sword enchanted with Looting III?&quot;</em>. More info in them can be found in the resources listed above. \\</li></ul><p><em>Blocks do not drop loot in creative mode</em></p><p><strong>Note: it is possible to generate loot tables visually online. Check Links and Contact for the link to a reliable generator.</strong></p><p><strong><em>Challenge: Create custom loot tables for our custom blocks created in the previous chapter!</em></strong></p><hr><hr><h2 id="spawn-rules" tabindex="-1">Spawn Rules <a class="header-anchor" href="#spawn-rules" aria-hidden="true">#</a></h2><p>Spawn rules define how vanilla Entities and custom entities spawn. In the next chapter we&#39;ll be creating a custom entity, so make sure to prepare a custom spawn rule for it! Check out the vanilla example files for more information. \u{1F609}</p>__VP_STATIC_END__`,9),v=t("BP/spawn_rules/zombie.json"),x=p(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.8.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:spawn_rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:zombie&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;population_control&quot;</span><span class="token operator">:</span> <span class="token string">&quot;monster&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;conditions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
					<span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
					<span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
					<span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;minecraft:permute_type&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token punctuation">{</span>
						<span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">95</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span>
						<span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
						<span class="token property">&quot;entity_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:zombie_villager&quot;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;monster&quot;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><ul><li>&quot;<code>description</code>&quot;&gt;&quot;<code>identifier</code>&quot;: the entity to spawn</li><li>&quot;<code>population_control</code>&quot;: controls spawning and despawning quantities. Can be set to &quot;<code>animal</code>&quot;, &quot;<code>underwater_animal</code>&quot;, &quot;<code>monster</code>&quot; and &quot;<code>ambient</code>&quot;.</li><li>&quot;<code>conditions</code>&quot; are a list of conditions that have to be met in order for the spawn attempt to succeed.</li><li>&quot;<code>minecraft:spawns_on_surface</code>&quot;, &quot;<code>minecraft:spawns_underground</code>&quot; and &quot;<code>minecraft:spawns_underwater</code>&quot; control where the entity spawns cap-wise.</li><li>&quot;<code>minecraft_brightness_filter</code>&quot; can be set from 0 to 15 and controls in which light levels can entities spawn. - &quot;<code>adjust_for_weather</code>&quot; defines whether it light levels are counted lower during rain or thunder weather.</li><li>&quot;<code>minecraft:difficulty_filter</code>&quot; sets the range of level difficulty to enable this entity&#39;s spawns.</li><li>&quot;<code>minecraft:herd</code>&quot; sets the number of entities spawning together, on the same spawn rule.</li><li>&quot;<code>minecraft:permute_type</code>&quot; with &quot;<code>weight</code>&quot;s and &quot;<code>entity_type</code>&quot;s sets a chance for the spawned entity to mutate into a different one.</li><li>And, lastly, &quot;<code>minecraft:biome_filter</code>&quot; tests for certain biome tags. Look up the filter syntax and list of biome tags in the documentation or search examples in the vanilla Example pack.</li></ul>__VP_STATIC_END__`,2),T=p(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;event&quot;</span><span class="token operator">:</span><span class="token string">&quot;minecraft:entity_born&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;event_skip_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>&quot;<code>minecraft:herd</code>&quot; can also be used like this to make the second entity spawned [in this scenario] with the &quot;<code>minecraft:entity_born</code>&quot; (as baby). Can be used in any event. <code>&quot;event_skip_count&quot;: 2</code>, for example, means that the first two entities will not be spawned with this event, but all the next ones will.</li></ul><p><em>Why not create some more custom blocks, items, and loot tables before moving onto the next big chapter?</em></p><hr><hr><h2 id="your-progress-so-far" tabindex="-1">Your progress so far <a class="header-anchor" href="#your-progress-so-far" aria-hidden="true">#</a></h2><p><strong>What you&#39;ve done:</strong></p><ul><li>[x] Learned to create Loot Tables;</li><li>[x] Learned to create spawn rules;</li><li>[x] Created Loot Tables for our custom blocks and items;</li><li>[x] Learned about the usefulness referencing the Example files and the documentation even better;</li><li>[x] Tried out some online file generators;</li></ul><p><strong>What are you to do next:</strong></p><ul><li>[ ] <strong>Create. Custom. Entities.</strong></li></ul>__VP_STATIC_END__`,10);function j(C,S,P,B,I,V){const a=o("CodeHeader"),r=o("Spoiler");return u(),c("div",null,[k,s(r,{title:"Example Loot Tables"},{default:e(()=>[s(a,null,{default:e(()=>[b]),_:1}),m,s(a,null,{default:e(()=>[d]),_:1}),y,s(a,null,{default:e(()=>[q]),_:1}),h,s(a,null,{default:e(()=>[g]),_:1}),_]),_:1}),f,s(a),w,s(a,null,{default:e(()=>[v]),_:1}),x,s(a),T])}var E=l(i,[["render",j]]);export{A as __pageData,E as default};

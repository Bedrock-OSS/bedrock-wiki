import{_ as l,c,a as n,w as s,b as t,e as o,d as e,r,o as u}from"./404.md.4e630b9f.js";var d="/assets/images/loot/trade_tables/trading.png";const xt='{"title":"Trade Tables","description":"","frontmatter":{"title":"Trade Tables","category":"Documentation","nav_order":2,"tags":["Stable","Last updated for Version 1.18.10"],"mention":["Ciosciaa"]},"headers":[{"level":2,"title":"Integration","slug":"integration"},{"level":2,"title":"Structure","slug":"structure"},{"level":3,"title":"Tiers","slug":"tiers"},{"level":3,"title":"Trade Groups","slug":"trade-groups"},{"level":3,"title":"Trades","slug":"trades"},{"level":3,"title":"Choices","slug":"choices"},{"level":3,"title":"Items","slug":"items"},{"level":2,"title":"Overrides","slug":"overrides"}],"relativePath":"loot/trade-tables.md"}',b={},m=o("",6),h=t("p",null,"The following example is referenced and analyzed throughout the document:",-1),k=e("BP/trading/minister.json"),_=t("div",{class:"language-json line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token property"},'"tiers"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),e(`
		`),t("span",{class:"token punctuation"},"{"),e(`
			`),t("span",{class:"token property"},'"groups"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),e(`
				`),t("span",{class:"token punctuation"},"{"),e(`
					`),t("span",{class:"token property"},'"num_to_select"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),e(`
					
					`),t("span",{class:"token property"},'"trades"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),e(`
						`),t("span",{class:"token punctuation"},"{"),e(`
							`),t("span",{class:"token property"},'"wants"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),e(`
								`),t("span",{class:"token punctuation"},"{"),e(`
									`),t("span",{class:"token property"},'"item"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"wiki:blessing_glyph"'),t("span",{class:"token punctuation"},","),e(`
									`),t("span",{class:"token property"},'"quantity"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
										`),t("span",{class:"token property"},'"min"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),e(`
										`),t("span",{class:"token property"},'"max"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"4"),e(`
									`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
									
									`),t("span",{class:"token property"},'"price_multiplier"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"0.5"),e(`
								`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
								`),t("span",{class:"token punctuation"},"{"),e(`
									`),t("span",{class:"token property"},'"item"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"minecraft:book"'),e(`
								`),t("span",{class:"token punctuation"},"}"),e(`
							`),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),e(`
							`),t("span",{class:"token property"},'"gives"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),e(`
								`),t("span",{class:"token punctuation"},"{"),e(`
									`),t("span",{class:"token property"},'"item"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"minecraft:enchanted_book"'),t("span",{class:"token punctuation"},","),e(`
									`),t("span",{class:"token property"},'"functions"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),e(`
										`),t("span",{class:"token punctuation"},"{"),e(`
											`),t("span",{class:"token property"},'"function"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"enchant_book_for_trading"'),t("span",{class:"token punctuation"},","),e(`
											
											`),t("span",{class:"token property"},'"base_cost"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),e(`
											`),t("span",{class:"token property"},'"base_random_cost"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"12"),t("span",{class:"token punctuation"},","),e(`
											`),t("span",{class:"token property"},'"per_level_cost"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),e(`
											`),t("span",{class:"token property"},'"per_level_random_cost"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"8"),e(`
										`),t("span",{class:"token punctuation"},"}"),e(`
									`),t("span",{class:"token punctuation"},"]"),e(`
								`),t("span",{class:"token punctuation"},"}"),e(`
							`),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),e(`
							`),t("span",{class:"token property"},'"max_uses"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"7"),t("span",{class:"token punctuation"},","),e(`
							
							`),t("span",{class:"token property"},'"trader_exp"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"3"),e(`
						`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
						`),t("span",{class:"token punctuation"},"{"),e(`
							`),t("span",{class:"token property"},'"wants"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),e(`
								`),t("span",{class:"token punctuation"},"{"),e(`
									`),t("span",{class:"token property"},'"item"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"wiki:crystalline_spiritite"'),t("span",{class:"token punctuation"},","),e(`
									`),t("span",{class:"token property"},'"quantity"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"32"),t("span",{class:"token punctuation"},","),e(`
									
									`),t("span",{class:"token property"},'"price_multiplier"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"0.125"),e(`
								`),t("span",{class:"token punctuation"},"}"),e(`
							`),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),e(`
							`),t("span",{class:"token property"},'"gives"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),e(`
								`),t("span",{class:"token punctuation"},"{"),e(`
									`),t("span",{class:"token property"},'"item"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"wiki:exalted_blade"'),t("span",{class:"token punctuation"},","),e(`
									`),t("span",{class:"token property"},'"functions"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),e(`
										`),t("span",{class:"token punctuation"},"{"),e(`
											`),t("span",{class:"token property"},'"function"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"enchant_with_levels"'),t("span",{class:"token punctuation"},","),e(`
											
											`),t("span",{class:"token property"},'"treasure"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),e(`
											`),t("span",{class:"token property"},'"levels"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
												`),t("span",{class:"token property"},'"min"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"15"),t("span",{class:"token punctuation"},","),e(`
												`),t("span",{class:"token property"},'"max"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"25"),e(`
											`),t("span",{class:"token punctuation"},"}"),e(`
										`),t("span",{class:"token punctuation"},"}"),e(`
									`),t("span",{class:"token punctuation"},"]"),e(`
								`),t("span",{class:"token punctuation"},"}"),e(`
							`),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),e(`
							`),t("span",{class:"token property"},'"max_uses"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),e(`
							
							`),t("span",{class:"token property"},'"reward_exp"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},","),e(`
							`),t("span",{class:"token property"},'"trader_exp"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"8"),e(`
						`),t("span",{class:"token punctuation"},"}"),e(`
					`),t("span",{class:"token punctuation"},"]"),e(`
				`),t("span",{class:"token punctuation"},"}"),e(`
			`),t("span",{class:"token punctuation"},"]"),e(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
		`),t("span",{class:"token punctuation"},"{"),e(`
			`),t("span",{class:"token property"},'"total_exp_required"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"28"),t("span",{class:"token punctuation"},","),e(`
			
			`),t("span",{class:"token property"},'"trades"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),e(`
				`),t("span",{class:"token punctuation"},"{"),e(`
					`),t("span",{class:"token property"},'"wants"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),e(`
						`),t("span",{class:"token punctuation"},"{"),e(`
							`),t("span",{class:"token property"},'"choice"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),e(`
								`),t("span",{class:"token punctuation"},"{"),e(`
									`),t("span",{class:"token property"},'"item"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"wiki:sacred_stones"'),t("span",{class:"token punctuation"},","),e(`
									`),t("span",{class:"token property"},'"quantity"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
										`),t("span",{class:"token property"},'"min"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),e(`
										`),t("span",{class:"token property"},'"max"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"6"),e(`
									`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
									
									`),t("span",{class:"token property"},'"price_multiplier"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"0.5"),e(`
								`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
								`),t("span",{class:"token punctuation"},"{"),e(`
									`),t("span",{class:"token property"},'"item"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"wiki:blessed_beads"'),t("span",{class:"token punctuation"},","),e(`
									`),t("span",{class:"token property"},'"quantity"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
										`),t("span",{class:"token property"},'"min"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"16"),t("span",{class:"token punctuation"},","),e(`
										`),t("span",{class:"token property"},'"max"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"24"),e(`
									`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
									
									`),t("span",{class:"token property"},'"price_multiplier"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"0.5"),e(`
								`),t("span",{class:"token punctuation"},"}"),e(`
							`),t("span",{class:"token punctuation"},"]"),e(`
						`),t("span",{class:"token punctuation"},"}"),e(`
					`),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),e(`
					`),t("span",{class:"token property"},'"gives"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),e(`
						`),t("span",{class:"token punctuation"},"{"),e(`
							`),t("span",{class:"token property"},'"item"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"wiki:aeleon_jewels"'),t("span",{class:"token punctuation"},","),e(`
							`),t("span",{class:"token property"},'"quantity"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
								`),t("span",{class:"token property"},'"min"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),e(`
								`),t("span",{class:"token property"},'"max"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"6"),e(`
							`),t("span",{class:"token punctuation"},"}"),e(`
						`),t("span",{class:"token punctuation"},"}"),e(`
					`),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),e(`
					`),t("span",{class:"token property"},'"max_uses"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"2"),e(`
				`),t("span",{class:"token punctuation"},"}"),e(`
			`),t("span",{class:"token punctuation"},"]"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token punctuation"},"]"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br"),t("span",{class:"line-number"},"15"),t("br"),t("span",{class:"line-number"},"16"),t("br"),t("span",{class:"line-number"},"17"),t("br"),t("span",{class:"line-number"},"18"),t("br"),t("span",{class:"line-number"},"19"),t("br"),t("span",{class:"line-number"},"20"),t("br"),t("span",{class:"line-number"},"21"),t("br"),t("span",{class:"line-number"},"22"),t("br"),t("span",{class:"line-number"},"23"),t("br"),t("span",{class:"line-number"},"24"),t("br"),t("span",{class:"line-number"},"25"),t("br"),t("span",{class:"line-number"},"26"),t("br"),t("span",{class:"line-number"},"27"),t("br"),t("span",{class:"line-number"},"28"),t("br"),t("span",{class:"line-number"},"29"),t("br"),t("span",{class:"line-number"},"30"),t("br"),t("span",{class:"line-number"},"31"),t("br"),t("span",{class:"line-number"},"32"),t("br"),t("span",{class:"line-number"},"33"),t("br"),t("span",{class:"line-number"},"34"),t("br"),t("span",{class:"line-number"},"35"),t("br"),t("span",{class:"line-number"},"36"),t("br"),t("span",{class:"line-number"},"37"),t("br"),t("span",{class:"line-number"},"38"),t("br"),t("span",{class:"line-number"},"39"),t("br"),t("span",{class:"line-number"},"40"),t("br"),t("span",{class:"line-number"},"41"),t("br"),t("span",{class:"line-number"},"42"),t("br"),t("span",{class:"line-number"},"43"),t("br"),t("span",{class:"line-number"},"44"),t("br"),t("span",{class:"line-number"},"45"),t("br"),t("span",{class:"line-number"},"46"),t("br"),t("span",{class:"line-number"},"47"),t("br"),t("span",{class:"line-number"},"48"),t("br"),t("span",{class:"line-number"},"49"),t("br"),t("span",{class:"line-number"},"50"),t("br"),t("span",{class:"line-number"},"51"),t("br"),t("span",{class:"line-number"},"52"),t("br"),t("span",{class:"line-number"},"53"),t("br"),t("span",{class:"line-number"},"54"),t("br"),t("span",{class:"line-number"},"55"),t("br"),t("span",{class:"line-number"},"56"),t("br"),t("span",{class:"line-number"},"57"),t("br"),t("span",{class:"line-number"},"58"),t("br"),t("span",{class:"line-number"},"59"),t("br"),t("span",{class:"line-number"},"60"),t("br"),t("span",{class:"line-number"},"61"),t("br"),t("span",{class:"line-number"},"62"),t("br"),t("span",{class:"line-number"},"63"),t("br"),t("span",{class:"line-number"},"64"),t("br"),t("span",{class:"line-number"},"65"),t("br"),t("span",{class:"line-number"},"66"),t("br"),t("span",{class:"line-number"},"67"),t("br"),t("span",{class:"line-number"},"68"),t("br"),t("span",{class:"line-number"},"69"),t("br"),t("span",{class:"line-number"},"70"),t("br"),t("span",{class:"line-number"},"71"),t("br"),t("span",{class:"line-number"},"72"),t("br"),t("span",{class:"line-number"},"73"),t("br"),t("span",{class:"line-number"},"74"),t("br"),t("span",{class:"line-number"},"75"),t("br"),t("span",{class:"line-number"},"76"),t("br"),t("span",{class:"line-number"},"77"),t("br"),t("span",{class:"line-number"},"78"),t("br"),t("span",{class:"line-number"},"79"),t("br"),t("span",{class:"line-number"},"80"),t("br"),t("span",{class:"line-number"},"81"),t("br"),t("span",{class:"line-number"},"82"),t("br"),t("span",{class:"line-number"},"83"),t("br"),t("span",{class:"line-number"},"84"),t("br"),t("span",{class:"line-number"},"85"),t("br"),t("span",{class:"line-number"},"86"),t("br"),t("span",{class:"line-number"},"87"),t("br"),t("span",{class:"line-number"},"88"),t("br"),t("span",{class:"line-number"},"89"),t("br"),t("span",{class:"line-number"},"90"),t("br"),t("span",{class:"line-number"},"91"),t("br"),t("span",{class:"line-number"},"92"),t("br"),t("span",{class:"line-number"},"93"),t("br"),t("span",{class:"line-number"},"94"),t("br"),t("span",{class:"line-number"},"95"),t("br"),t("span",{class:"line-number"},"96"),t("br"),t("span",{class:"line-number"},"97"),t("br"),t("span",{class:"line-number"},"98"),t("br"),t("span",{class:"line-number"},"99"),t("br"),t("span",{class:"line-number"},"100"),t("br"),t("span",{class:"line-number"},"101"),t("br"),t("span",{class:"line-number"},"102"),t("br"),t("span",{class:"line-number"},"103"),t("br"),t("span",{class:"line-number"},"104"),t("br"),t("span",{class:"line-number"},"105"),t("br"),t("span",{class:"line-number"},"106"),t("br"),t("span",{class:"line-number"},"107"),t("br"),t("span",{class:"line-number"},"108"),t("br"),t("span",{class:"line-number"},"109"),t("br"),t("span",{class:"line-number"},"110"),t("br"),t("span",{class:"line-number"},"111"),t("br"),t("span",{class:"line-number"},"112"),t("br"),t("span",{class:"line-number"},"113"),t("br"),t("span",{class:"line-number"},"114"),t("br"),t("span",{class:"line-number"},"115"),t("br"),t("span",{class:"line-number"},"116"),t("br"),t("span",{class:"line-number"},"117"),t("br"),t("span",{class:"line-number"},"118"),t("br"),t("span",{class:"line-number"},"119"),t("br"),t("span",{class:"line-number"},"120"),t("br")])],-1),f=t("h2",{id:"structure",tabindex:"-1"},[e("Structure "),t("a",{class:"header-anchor",href:"#structure","aria-hidden":"true"},"#")],-1),y=t("p",null,"Trade tables are represented as un-versioned, un-namespaced objects.",-1),g=e("#"),v=o("",4),q=e("#/tiers/0"),w=o("",1),T=e("#/tiers/1"),x=o("",6),I=e("#/tiers/1/"),A=o("",10),S=e("Example Tier Freeze"),P=o("",4),C=e("#/tiers/0/groups/0"),E=o("",6),V=e("#/tiers/0/trades/1"),j=o("",5),N=e("#/tiers/0/trades/1/"),B=o("",6),D=e("#/tiers/0/trades/1/"),R=o("",6),O=e("#/tiers/0/trades/1/"),F=o("",4),z=e("#/tiers/0/trades/1/"),W=o("",5),H=e("#/tiers/1/trades/0/wants/0"),X=o("",6),G=e("#/tiers/1/trades/0/wants/0/choice/0"),L=o("",1),M=e("#/tiers/0/groups/0/trades/1/gives/0"),Q=o("",3),U=e("#/tiers/1/trades/0/wants/0/choice/0/"),$=o("",2),J=e("Example Data Assignment"),K=o("",5),Y=e("#/tiers/1/trades/0/wants/0/choice/0/"),Z=o("",5),tt=e("#/tiers/1/trades/0/wants/0/choice/0/"),et=o("",18),nt=e("#/tiers/0/groups/0/trades/1/gives/0/"),st=o("",15),at=e("#/tiers/0/groups/0/trades/1/gives/0/functions/0"),ot=o("",4),rt=e("#/tiers/0/groups/0/trades/0/gives/0/functions/0"),pt=o("",8),it={class:"tip custom-block"},lt=t("p",{class:"custom-block-title"},"TIP",-1),ct=t("p",null,[e("If the total combined cost would be negative (assuming no negative random cost properties were used), the provided "),t("a",{href:"#quantity"},"quantity"),e(" of the affected wanted item is used instead. The simplest means of guaranteeing this would be:")],-1),ut=e("Example Quantity-Based Enchanted Book Cost"),dt=o("",1),bt=t("h5",{id:"spawn-egg-trader-binding",tabindex:"-1"},[e("Spawn Egg Trader Binding "),t("a",{class:"header-anchor",href:"#spawn-egg-trader-binding","aria-hidden":"true"},"#")],-1),mt=t("p",null,[e("The "),t("code",null,'"set_actor_id"'),e(" function is used to set the data value of a spawn egg based on a provided entity identifier, given with "),t("code",null,'"id"'),e(".")],-1),ht=e("Example Spawn Egg Trader Binding"),kt=o("",7);function _t(ft,yt,gt,vt,qt,wt){const p=r("FolderView"),a=r("CodeHeader"),i=r("Spoiler");return u(),c("div",null,[m,n(p,{paths:["BP/trading/minister.json","BP/trading/economy_trades/cleric_trades.json"]},null,8,["paths"]),h,n(i,{title:"Trade Table File Example"},{default:s(()=>[n(a,null,{default:s(()=>[k]),_:1}),_]),_:1}),f,y,n(a,null,{default:s(()=>[g]),_:1}),v,n(a,null,{default:s(()=>[q]),_:1}),w,n(a,null,{default:s(()=>[T]),_:1}),x,n(a,null,{default:s(()=>[I]),_:1}),A,n(a,null,{default:s(()=>[S]),_:1}),P,n(a,null,{default:s(()=>[C]),_:1}),E,n(a,null,{default:s(()=>[V]),_:1}),j,n(a,null,{default:s(()=>[N]),_:1}),B,n(a,null,{default:s(()=>[D]),_:1}),R,n(a,null,{default:s(()=>[O]),_:1}),F,n(a,null,{default:s(()=>[z]),_:1}),W,n(a,null,{default:s(()=>[H]),_:1}),X,n(a,null,{default:s(()=>[G]),_:1}),L,n(a,null,{default:s(()=>[M]),_:1}),Q,n(a,null,{default:s(()=>[U]),_:1}),$,n(a,null,{default:s(()=>[J]),_:1}),K,n(a,null,{default:s(()=>[Y]),_:1}),Z,n(a,null,{default:s(()=>[tt]),_:1}),et,n(a,null,{default:s(()=>[nt]),_:1}),st,n(a,null,{default:s(()=>[at]),_:1}),ot,n(a,null,{default:s(()=>[rt]),_:1}),pt,t("div",it,[lt,ct,n(a,null,{default:s(()=>[ut]),_:1}),dt]),bt,mt,n(a,null,{default:s(()=>[ht]),_:1}),kt])}var It=l(b,[["render",_t]]);export{xt as __pageData,It as default};

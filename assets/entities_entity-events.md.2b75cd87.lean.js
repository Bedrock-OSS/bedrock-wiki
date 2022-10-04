import{_ as c,c as l,a,w as p,e,r as o,o as u,b as n,d as s}from"./404.md.4e630b9f.js";const F='{"title":"Entity Events","description":"","frontmatter":{"title":"Entity Events","category":"General","mention":["ChibiMango"],"tags":["beginner"]},"headers":[{"level":2,"title":"Event Layout","slug":"event-layout"},{"level":3,"title":"Add/Remove","slug":"add-remove"},{"level":3,"title":"Randomize","slug":"randomize"},{"level":3,"title":"Sequence/Filters","slug":"sequence-filters"},{"level":3,"title":"Trigger","slug":"trigger"},{"level":2,"title":"Calling Events","slug":"calling-events"},{"level":3,"title":"Calling Events in Other Entities","slug":"calling-events-in-other-entities"},{"level":3,"title":"Targets","slug":"targets"},{"level":3,"title":"Built-in Events","slug":"built-in-events"}],"relativePath":"entities/entity-events.md"}',i={},b=e("",7),k=e("",5),m=e("",4),d=e("",4),h=n("p",null,"This event is run when the entity is hit by a player or projectile. There is a 60% chance nothing will happen and a 40% chance an attack sequence will activate. This attack sequence chooses a random attack with weights determined both by the entity's current health (stronger attacks are given a higher chance when the entity is below half health) and the distance to the nearest player (ranged attacks have higher priority when the player is further away).",-1),q=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token property"},'"wiki:on_hit"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"randomize"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token comment"},"//60% chance nothing happens"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"60"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"//40% chance this entry is run"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"sequence"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token comment"},"//runs separate event required for all attacks"),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"trigger"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"attack_event"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token comment"},"//runs if entity is not sheared (entity becomes sheared if under half health)"),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"filters"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token property"},'"test"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"has_component"'),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token property"},'"operator"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"!="'),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"minecraft:is_sheared"'),s(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"sequence"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token comment"},"//runs if player is within 5 blocks"),s(`
                        `),n("span",{class:"token punctuation"},"{"),s(`
                            `),n("span",{class:"token property"},'"filters"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
                                `),n("span",{class:"token property"},'"test"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"distance_to_nearest_player"'),n("span",{class:"token punctuation"},","),s(`
                                `),n("span",{class:"token property"},'"operator"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"<="'),n("span",{class:"token punctuation"},","),s(`
                                `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"5.0"),s(`
                            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                            `),n("span",{class:"token property"},'"randomize"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                                `),n("span",{class:"token punctuation"},"{"),s(`
                                    `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
                                    `),n("span",{class:"token property"},'"add"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
                                        `),n("span",{class:"token property"},'"component_groups"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                                            `),n("span",{class:"token string"},'"explode"'),s(`
                                        `),n("span",{class:"token punctuation"},"]"),s(`
                                    `),n("span",{class:"token punctuation"},"}"),s(`
                                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                                `),n("span",{class:"token punctuation"},"{"),s(`
                                    `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},","),s(`
                                    `),n("span",{class:"token property"},'"add"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
                                        `),n("span",{class:"token property"},'"component_groups"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                                            `),n("span",{class:"token string"},'"attack"'),s(`
                                        `),n("span",{class:"token punctuation"},"]"),s(`
                                    `),n("span",{class:"token punctuation"},"}"),s(`
                                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                                `),n("span",{class:"token punctuation"},"{"),s(`
                                    `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
                                    `),n("span",{class:"token property"},'"add"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
                                        `),n("span",{class:"token property"},'"component_groups"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                                            `),n("span",{class:"token string"},'"range_attack"'),s(`
                                        `),n("span",{class:"token punctuation"},"]"),s(`
                                    `),n("span",{class:"token punctuation"},"}"),s(`
                                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                                `),n("span",{class:"token punctuation"},"{"),s(`
                                    `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"10"),s(`
                                `),n("span",{class:"token punctuation"},"}"),s(`
                            `),n("span",{class:"token punctuation"},"]"),s(`
                        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token comment"},"//runs if player is farther than 5 blocks and entity still has a target"),s(`
                        `),n("span",{class:"token punctuation"},"{"),s(`
                            `),n("span",{class:"token property"},'"filters"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
                                `),n("span",{class:"token property"},'"all_of"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                                    `),n("span",{class:"token punctuation"},"{"),s(`
                                        `),n("span",{class:"token property"},'"test"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"distance_to_nearest_player"'),n("span",{class:"token punctuation"},","),s(`
                                        `),n("span",{class:"token property"},'"operator"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'">"'),n("span",{class:"token punctuation"},","),s(`
                                        `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"5.0"),s(`
                                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                                    `),n("span",{class:"token punctuation"},"{"),s(`
                                        `),n("span",{class:"token property"},'"test"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"has_target"'),n("span",{class:"token punctuation"},","),s(`
                                        `),n("span",{class:"token property"},'"operator"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"equals"'),n("span",{class:"token punctuation"},","),s(`
                                        `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"true"),s(`
                                    `),n("span",{class:"token punctuation"},"}"),s(`
                                `),n("span",{class:"token punctuation"},"]"),s(`
                            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                            `),n("span",{class:"token property"},'"randomize"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                                `),n("span",{class:"token punctuation"},"{"),s(`
                                    `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(`
                                    `),n("span",{class:"token property"},'"add"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
                                        `),n("span",{class:"token property"},'"component_groups"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                                            `),n("span",{class:"token string"},'"attack"'),s(`
                                        `),n("span",{class:"token punctuation"},"]"),s(`
                                    `),n("span",{class:"token punctuation"},"}"),s(`
                                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                                `),n("span",{class:"token punctuation"},"{"),s(`
                                    `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},","),s(`
                                    `),n("span",{class:"token property"},'"add"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
                                        `),n("span",{class:"token property"},'"component_groups"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                                            `),n("span",{class:"token string"},'"range_attack"'),s(`
                                        `),n("span",{class:"token punctuation"},"]"),s(`
                                    `),n("span",{class:"token punctuation"},"}"),s(`
                                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                                `),n("span",{class:"token punctuation"},"{"),s(`
                                    `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"10"),s(`
                                `),n("span",{class:"token punctuation"},"}"),s(`
                            `),n("span",{class:"token punctuation"},"]"),s(`
                        `),n("span",{class:"token punctuation"},"}"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token comment"},"//runs if entity is sheared (under half health)"),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"filters"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token property"},'"test"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"has_component"'),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"minecraft:is_sheared"'),s(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"sequence"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token comment"},"//runs if player is within 5 blocks"),s(`
                        `),n("span",{class:"token punctuation"},"{"),s(`
                            `),n("span",{class:"token property"},'"filters"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
                                `),n("span",{class:"token property"},'"test"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"distance_to_nearest_player"'),n("span",{class:"token punctuation"},","),s(`
                                `),n("span",{class:"token property"},'"operator"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"<="'),n("span",{class:"token punctuation"},","),s(`
                                `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"5.0"),s(`
                            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                            `),n("span",{class:"token property"},'"randomize"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                                `),n("span",{class:"token punctuation"},"{"),s(`
                                    `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
                                    `),n("span",{class:"token property"},'"add"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
                                        `),n("span",{class:"token property"},'"component_groups"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                                            `),n("span",{class:"token string"},'"explode"'),s(`
                                        `),n("span",{class:"token punctuation"},"]"),s(`
                                    `),n("span",{class:"token punctuation"},"}"),s(`
                                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                                `),n("span",{class:"token punctuation"},"{"),s(`
                                    `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},","),s(`
                                    `),n("span",{class:"token property"},'"add"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
                                        `),n("span",{class:"token property"},'"component_groups"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                                            `),n("span",{class:"token string"},'"strong_attack"'),s(`
                                        `),n("span",{class:"token punctuation"},"]"),s(`
                                    `),n("span",{class:"token punctuation"},"}"),s(`
                                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                                `),n("span",{class:"token punctuation"},"{"),s(`
                                    `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
                                    `),n("span",{class:"token property"},'"add"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
                                        `),n("span",{class:"token property"},'"component_groups"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                                            `),n("span",{class:"token string"},'"strong_range_attack"'),s(`
                                        `),n("span",{class:"token punctuation"},"]"),s(`
                                    `),n("span",{class:"token punctuation"},"}"),s(`
                                `),n("span",{class:"token punctuation"},"}"),s(`
                            `),n("span",{class:"token punctuation"},"]"),s(`
                        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token comment"},"//runs if player is farther than 5 blocks and entity still has a target"),s(`
                        `),n("span",{class:"token punctuation"},"{"),s(`
                            `),n("span",{class:"token property"},'"filters"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
                                `),n("span",{class:"token property"},'"all_of"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                                    `),n("span",{class:"token punctuation"},"{"),s(`
                                        `),n("span",{class:"token property"},'"test"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"distance_to_nearest_player"'),n("span",{class:"token punctuation"},","),s(`
                                        `),n("span",{class:"token property"},'"operator"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'">"'),n("span",{class:"token punctuation"},","),s(`
                                        `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"5.0"),s(`
                                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                                    `),n("span",{class:"token punctuation"},"{"),s(`
                                        `),n("span",{class:"token property"},'"test"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"has_target"'),n("span",{class:"token punctuation"},","),s(`
                                        `),n("span",{class:"token property"},'"operator"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"equals"'),n("span",{class:"token punctuation"},","),s(`
                                        `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),n("span",{class:"token boolean"},"true"),s(`
                                    `),n("span",{class:"token punctuation"},"}"),s(`
                                `),n("span",{class:"token punctuation"},"]"),s(`
                            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                            `),n("span",{class:"token property"},'"randomize"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                                `),n("span",{class:"token punctuation"},"{"),s(`
                                    `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},","),s(`
                                    `),n("span",{class:"token property"},'"add"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
                                        `),n("span",{class:"token property"},'"component_groups"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                                            `),n("span",{class:"token string"},'"strong_range_attack"'),s(`
                                        `),n("span",{class:"token punctuation"},"]"),s(`
                                    `),n("span",{class:"token punctuation"},"}"),s(`
                                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                                `),n("span",{class:"token punctuation"},"{"),s(`
                                    `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},","),s(`
                                    `),n("span",{class:"token property"},'"randomize"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                                        `),n("span",{class:"token punctuation"},"{"),s(`
                                            `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(`
                                            `),n("span",{class:"token property"},'"trigger"'),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"rapid_fire"'),s(`
                                        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                                        `),n("span",{class:"token punctuation"},"{"),s(`
                                            `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"70"),n("span",{class:"token punctuation"},","),s(`
                                            `),n("span",{class:"token property"},'"add"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
                                                `),n("span",{class:"token property"},'"component_groups"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"["),s(`
                                                    `),n("span",{class:"token string"},'"strong_blast"'),s(`
                                                `),n("span",{class:"token punctuation"},"]"),s(`
                                            `),n("span",{class:"token punctuation"},"}"),s(`
                                        `),n("span",{class:"token punctuation"},"}"),s(`
                                    `),n("span",{class:"token punctuation"},"]"),s(`
                                `),n("span",{class:"token punctuation"},"}"),s(`
                            `),n("span",{class:"token punctuation"},"]"),s(`
                        `),n("span",{class:"token punctuation"},"}"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br"),n("span",{class:"line-number"},"80"),n("br"),n("span",{class:"line-number"},"81"),n("br"),n("span",{class:"line-number"},"82"),n("br"),n("span",{class:"line-number"},"83"),n("br"),n("span",{class:"line-number"},"84"),n("br"),n("span",{class:"line-number"},"85"),n("br"),n("span",{class:"line-number"},"86"),n("br"),n("span",{class:"line-number"},"87"),n("br"),n("span",{class:"line-number"},"88"),n("br"),n("span",{class:"line-number"},"89"),n("br"),n("span",{class:"line-number"},"90"),n("br"),n("span",{class:"line-number"},"91"),n("br"),n("span",{class:"line-number"},"92"),n("br"),n("span",{class:"line-number"},"93"),n("br"),n("span",{class:"line-number"},"94"),n("br"),n("span",{class:"line-number"},"95"),n("br"),n("span",{class:"line-number"},"96"),n("br"),n("span",{class:"line-number"},"97"),n("br"),n("span",{class:"line-number"},"98"),n("br"),n("span",{class:"line-number"},"99"),n("br"),n("span",{class:"line-number"},"100"),n("br"),n("span",{class:"line-number"},"101"),n("br"),n("span",{class:"line-number"},"102"),n("br"),n("span",{class:"line-number"},"103"),n("br"),n("span",{class:"line-number"},"104"),n("br"),n("span",{class:"line-number"},"105"),n("br"),n("span",{class:"line-number"},"106"),n("br"),n("span",{class:"line-number"},"107"),n("br"),n("span",{class:"line-number"},"108"),n("br"),n("span",{class:"line-number"},"109"),n("br"),n("span",{class:"line-number"},"110"),n("br"),n("span",{class:"line-number"},"111"),n("br"),n("span",{class:"line-number"},"112"),n("br"),n("span",{class:"line-number"},"113"),n("br"),n("span",{class:"line-number"},"114"),n("br"),n("span",{class:"line-number"},"115"),n("br"),n("span",{class:"line-number"},"116"),n("br"),n("span",{class:"line-number"},"117"),n("br"),n("span",{class:"line-number"},"118"),n("br"),n("span",{class:"line-number"},"119"),n("br"),n("span",{class:"line-number"},"120"),n("br"),n("span",{class:"line-number"},"121"),n("br"),n("span",{class:"line-number"},"122"),n("br"),n("span",{class:"line-number"},"123"),n("br"),n("span",{class:"line-number"},"124"),n("br"),n("span",{class:"line-number"},"125"),n("br"),n("span",{class:"line-number"},"126"),n("br"),n("span",{class:"line-number"},"127"),n("br"),n("span",{class:"line-number"},"128"),n("br"),n("span",{class:"line-number"},"129"),n("br"),n("span",{class:"line-number"},"130"),n("br"),n("span",{class:"line-number"},"131"),n("br"),n("span",{class:"line-number"},"132"),n("br"),n("span",{class:"line-number"},"133"),n("br"),n("span",{class:"line-number"},"134"),n("br"),n("span",{class:"line-number"},"135"),n("br"),n("span",{class:"line-number"},"136"),n("br"),n("span",{class:"line-number"},"137"),n("br"),n("span",{class:"line-number"},"138"),n("br"),n("span",{class:"line-number"},"139"),n("br"),n("span",{class:"line-number"},"140"),n("br"),n("span",{class:"line-number"},"141"),n("br"),n("span",{class:"line-number"},"142"),n("br"),n("span",{class:"line-number"},"143"),n("br"),n("span",{class:"line-number"},"144"),n("br"),n("span",{class:"line-number"},"145"),n("br"),n("span",{class:"line-number"},"146"),n("br"),n("span",{class:"line-number"},"147"),n("br"),n("span",{class:"line-number"},"148"),n("br"),n("span",{class:"line-number"},"149"),n("br"),n("span",{class:"line-number"},"150"),n("br"),n("span",{class:"line-number"},"151"),n("br"),n("span",{class:"line-number"},"152"),n("br"),n("span",{class:"line-number"},"153"),n("br"),n("span",{class:"line-number"},"154"),n("br"),n("span",{class:"line-number"},"155"),n("br"),n("span",{class:"line-number"},"156"),n("br"),n("span",{class:"line-number"},"157"),n("br"),n("span",{class:"line-number"},"158"),n("br"),n("span",{class:"line-number"},"159"),n("br"),n("span",{class:"line-number"},"160"),n("br"),n("span",{class:"line-number"},"161"),n("br"),n("span",{class:"line-number"},"162"),n("br"),n("span",{class:"line-number"},"163"),n("br"),n("span",{class:"line-number"},"164"),n("br"),n("span",{class:"line-number"},"165"),n("br"),n("span",{class:"line-number"},"166"),n("br"),n("span",{class:"line-number"},"167"),n("br"),n("span",{class:"line-number"},"168"),n("br"),n("span",{class:"line-number"},"169"),n("br"),n("span",{class:"line-number"},"170"),n("br"),n("span",{class:"line-number"},"171"),n("br"),n("span",{class:"line-number"},"172"),n("br"),n("span",{class:"line-number"},"173"),n("br"),n("span",{class:"line-number"},"174"),n("br"),n("span",{class:"line-number"},"175"),n("br"),n("span",{class:"line-number"},"176"),n("br"),n("span",{class:"line-number"},"177"),n("br"),n("span",{class:"line-number"},"178"),n("br"),n("span",{class:"line-number"},"179"),n("br"),n("span",{class:"line-number"},"180"),n("br"),n("span",{class:"line-number"},"181"),n("br"),n("span",{class:"line-number"},"182"),n("br"),n("span",{class:"line-number"},"183"),n("br"),n("span",{class:"line-number"},"184"),n("br"),n("span",{class:"line-number"},"185"),n("br"),n("span",{class:"line-number"},"186"),n("br"),n("span",{class:"line-number"},"187"),n("br"),n("span",{class:"line-number"},"188"),n("br"),n("span",{class:"line-number"},"189"),n("br"),n("span",{class:"line-number"},"190"),n("br")])],-1),_=e("",3),g=e("",3),y=e("",5),v=e("",2),w=e("",2),f=e("",3),T=e("",5),S=e("",2),A=s("BP/entities/zombie.json#component_groups/minecraft:convert_to_drowned"),C=e("",3),I=e("",6),E=s("BP/entities/cow.json#events"),P=e("",1);function V(x,j,z,N,R,D){const t=o("CodeHeader"),r=o("Spoiler");return u(),l("div",null,[b,a(t),k,a(t),m,a(t),d,a(r,{title:"Sequence Example"},{default:p(()=>[h,a(t),q]),_:1}),_,a(t),g,a(t),y,a(t),v,a(t),w,a(t),f,a(t),T,a(t),S,a(t,null,{default:p(()=>[A]),_:1}),C,a(t),I,a(t,null,{default:p(()=>[E]),_:1}),P])}var W=c(i,[["render",V]]);export{F as __pageData,W as default};

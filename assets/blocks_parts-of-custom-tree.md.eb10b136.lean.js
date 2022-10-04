import{_ as k,c as b,a,w as t,e as o,b as n,d as s,r as c,o as m}from"./404.md.4e630b9f.js";var _="/assets/images/blocks/parts-of-custom-tree/export_structures.png",y="/assets/images/blocks/parts-of-custom-tree/export_tree.png",g="/assets/images/blocks/parts-of-custom-tree/result.png";const An='{"title":"Custom Tree","description":"","frontmatter":{"title":"Custom Tree","category":"Tutorials","tags":["experimental"],"mention":["MedicalJewel105"]},"headers":[{"level":2,"title":"What you will do","slug":"what-you-will-do"},{"level":2,"title":"Making Decaying Leaves","slug":"making-decaying-leaves"},{"level":2,"title":"Making Custom Log","slug":"making-custom-log"},{"level":2,"title":"Making Stripped Log","slug":"making-stripped-log"},{"level":2,"title":"Making Custom Sapling","slug":"making-custom-sapling"},{"level":2,"title":"Making Sapling Placer","slug":"making-sapling-placer"},{"level":2,"title":"Making Loot Tables","slug":"making-loot-tables"},{"level":2,"title":"Making/Exporting Structures","slug":"making-exporting-structures"},{"level":2,"title":"Tree Features","slug":"tree-features"},{"level":2,"title":"Resource Pack (optional guide)","slug":"resource-pack-optional-guide"},{"level":2,"title":"Result","slug":"result"},{"level":2,"title":"Download Example Pack","slug":"download-example-pack"}],"relativePath":"blocks/parts-of-custom-tree.md"}',d={},h=o("",6),f=n("p",null,"Our custom leaves disables ticking when placed by the player which doesn't make the leaves decay and this removes the requirements for another duplicate leave block.",-1),w=s("BP/blocks/custom_leaves.json"),q=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.16.100"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"minecraft:block"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:custom_leaves"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"properties"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"wiki:decay_tier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token number"},"0"),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//the distance in blocks to find the log"),s(`
                `),n("span",{class:"token property"},'"wiki:not_decay"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token boolean"},"true"),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//used when placed by the player or with features"),s(`
                `),n("span",{class:"token property"},'"wiki:solid"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token boolean"},"true"),s(`
                `),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token comment"},"//optional; makes the leaves non-transparent when surrounded"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"events"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"wiki:on_destroyed"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"//defines the loot for the tool"),s(`
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
            `),n("span",{class:"token property"},'"check"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"//checks for the log"),s(`
                `),n("span",{class:"token property"},'"sequence"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"q.block_property('wiki:not_decay') == false"`),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token property"},'"set_block_property"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                            `),n("span",{class:"token property"},'"wiki:decay_tier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"(q.block_neighbor_has_any_tag(0,0,-1,'wiki:custom_log') || q.block_neighbor_has_any_tag(0,0,1,'wiki:custom_log') || q.block_neighbor_has_any_tag(-1,0,0,'wiki:custom_log') || q.block_neighbor_has_any_tag(1,0,0,'wiki:custom_log') || q.block_neighbor_has_any_tag(0,-1,0,'wiki:custom_log') || q.block_neighbor_has_any_tag(0,1,0,'wiki:custom_log')) ? 4 : ((q.block_neighbor_has_any_tag(0,0,-1,'wiki:decay_tier_4') || q.block_neighbor_has_any_tag(0,0,1,'wiki:decay_tier_4') || q.block_neighbor_has_any_tag(-1,0,0,'wiki:decay_tier_4') || q.block_neighbor_has_any_tag(1,0,0,'wiki:decay_tier_4') || q.block_neighbor_has_any_tag(0,-1,0,'wiki:decay_tier_4') || q.block_neighbor_has_any_tag(0,1,0,'wiki:decay_tier_4')) ? 3 : ( (q.block_neighbor_has_any_tag(0,0,-1,'wiki:decay_tier_3') || q.block_neighbor_has_any_tag(0,0,1,'wiki:decay_tier_3 ') || q.block_neighbor_has_any_tag(-1,0,0,'wiki:decay_tier_3') || q.block_neighbor_has_any_tag(1,0,0,'wiki:decay_tier_3') || q.block_neighbor_has_any_tag(0,-1,0,'wiki:decay_tier_3') || q.block_neighbor_has_any_tag(0,1,0,'wiki:decay_tier_3')) ? 2 : ( (q.block_neighbor_has_any_tag(0,0,-1,'wiki:decay_tier_2') || q.block_neighbor_has_any_tag(0,0,1,'wiki:decay_tier_2') || q.block_neighbor_has_any_tag(-1,0,0,'wiki:decay_tier_2') || q.block_neighbor_has_any_tag(1,0,0,'wiki:decay_tier_2') || q.block_neighbor_has_any_tag(0,-1,0,'wiki:decay_tier_2') || q.block_neighbor_has_any_tag(0,1,0,'wiki:decay_tier_2')) ? 1 : 0 ) ) )"`),s(`
                        `),n("span",{class:"token punctuation"},"}"),s(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token property"},'"set_block_property"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                            `),n("span",{class:"token property"},'"wiki:solid"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"q.block_neighbor_has_any_tag(0,0,-1,'wiki:custom_log','stone','wiki:custom_leaves') && q.block_neighbor_has_any_tag(0,0,1,'wiki:custom_log','stone','wiki:custom_leaves') && q.block_neighbor_has_any_tag(0,1,0,'wiki:custom_log','stone','wiki:custom_leaves') && q.block_neighbor_has_any_tag(0,-1,0,'wiki:custom_log','stone','wiki:custom_leaves') && q.block_neighbor_has_any_tag(-1,0,0,'wiki:custom_log','stone','wiki:custom_leaves') && q.block_neighbor_has_any_tag(1,0,0,'wiki:custom_log','stone','wiki:custom_leaves')"`),s(`
                        `),n("span",{class:"token punctuation"},"}"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"wiki:stop_decay"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"//when placed"),s(`
                `),n("span",{class:"token property"},'"set_block_property"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"wiki:not_decay"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"wiki:decay"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"//when decayed"),s(`
                `),n("span",{class:"token property"},'"die"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"permutations"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token comment"},"//nothing great here, just the stages."),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.block_property('wiki:decay_tier') == 0"`),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"minecraft:ticking"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token property"},'"looping"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token property"},'"range"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                            `),n("span",{class:"token number"},"0"),s(`
                        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token property"},'"on_tick"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                            `),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"check"'),s(`
                        `),n("span",{class:"token punctuation"},"}"),s(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"minecraft:unit_cube"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"tag:wiki:decay_tier_0"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"minecraft:random_ticking"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token property"},'"on_tick"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                            `),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:decay"'),s(`
                        `),n("span",{class:"token punctuation"},"}"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.block_property('wiki:decay_tier') == 1"`),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"minecraft:ticking"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token property"},'"looping"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token property"},'"range"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                            `),n("span",{class:"token number"},"0"),s(`
                        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token property"},'"on_tick"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                            `),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"check"'),s(`
                        `),n("span",{class:"token punctuation"},"}"),s(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"minecraft:unit_cube"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"tag:wiki:decay_tier_1"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.block_property('wiki:decay_tier') == 2"`),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"minecraft:ticking"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token property"},'"looping"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token property"},'"range"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                            `),n("span",{class:"token number"},"0"),s(`
                        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token property"},'"on_tick"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                            `),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"check"'),s(`
                        `),n("span",{class:"token punctuation"},"}"),s(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"minecraft:unit_cube"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"tag:wiki:decay_tier_2"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.block_property('wiki:decay_tier') == 3"`),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"minecraft:ticking"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token property"},'"looping"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token property"},'"range"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                            `),n("span",{class:"token number"},"0"),s(`
                        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token property"},'"on_tick"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                            `),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"check"'),s(`
                        `),n("span",{class:"token punctuation"},"}"),s(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"minecraft:unit_cube"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"tag:wiki:decay_tier_3"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.block_property('wiki:decay_tier') == 4"`),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"minecraft:ticking"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token property"},'"looping"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token property"},'"range"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                            `),n("span",{class:"token number"},"0"),s(`
                        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token property"},'"on_tick"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                            `),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"check"'),s(`
                        `),n("span",{class:"token punctuation"},"}"),s(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"minecraft:unit_cube"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"tag:wiki:decay_tier_4"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.block_property('wiki:solid') == true"`),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"minecraft:material_instances"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token property"},'"*"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                            `),n("span",{class:"token property"},'"texture"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"custom_leaves"'),n("span",{class:"token punctuation"},","),s(`
                            `),n("span",{class:"token property"},'"render_method"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"opaque"'),s(`
                        `),n("span",{class:"token punctuation"},"}"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"//main components"),s(`
            `),n("span",{class:"token property"},'"minecraft:creative_category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"group"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"itemGroup.name.leaves"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"nature"'),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"minecraft:on_player_placing"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:stop_decay"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"target"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"self"'),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"minecraft:on_player_destroyed"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:on_destroyed"'),s(`
                `),n("span",{class:"token comment"},"//Triggers event that spawns different loot"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"minecraft:ticking"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"looping"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"range"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token number"},"0"),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"on_tick"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"check"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//we need both of these to work with world generation"),s(`
            `),n("span",{class:"token property"},'"minecraft:random_ticking"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"on_tick"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"check"'),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"target"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"block"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"tag:wiki:custom_leaves"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"minecraft:breathability"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"air"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"minecraft:destroy_time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.3"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"minecraft:map_color"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#FFFFFF"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"minecraft:explosion_resistance"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1.0"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"minecraft:block_light_absorption"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.0"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"minecraft:block_light_emission"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.0"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"minecraft:material_instances"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"*"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"texture"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"custom_leaves"'),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"render_method"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"blend"'),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"ambient_occlusion"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"face_dimming"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br"),n("span",{class:"line-number"},"80"),n("br"),n("span",{class:"line-number"},"81"),n("br"),n("span",{class:"line-number"},"82"),n("br"),n("span",{class:"line-number"},"83"),n("br"),n("span",{class:"line-number"},"84"),n("br"),n("span",{class:"line-number"},"85"),n("br"),n("span",{class:"line-number"},"86"),n("br"),n("span",{class:"line-number"},"87"),n("br"),n("span",{class:"line-number"},"88"),n("br"),n("span",{class:"line-number"},"89"),n("br"),n("span",{class:"line-number"},"90"),n("br"),n("span",{class:"line-number"},"91"),n("br"),n("span",{class:"line-number"},"92"),n("br"),n("span",{class:"line-number"},"93"),n("br"),n("span",{class:"line-number"},"94"),n("br"),n("span",{class:"line-number"},"95"),n("br"),n("span",{class:"line-number"},"96"),n("br"),n("span",{class:"line-number"},"97"),n("br"),n("span",{class:"line-number"},"98"),n("br"),n("span",{class:"line-number"},"99"),n("br"),n("span",{class:"line-number"},"100"),n("br"),n("span",{class:"line-number"},"101"),n("br"),n("span",{class:"line-number"},"102"),n("br"),n("span",{class:"line-number"},"103"),n("br"),n("span",{class:"line-number"},"104"),n("br"),n("span",{class:"line-number"},"105"),n("br"),n("span",{class:"line-number"},"106"),n("br"),n("span",{class:"line-number"},"107"),n("br"),n("span",{class:"line-number"},"108"),n("br"),n("span",{class:"line-number"},"109"),n("br"),n("span",{class:"line-number"},"110"),n("br"),n("span",{class:"line-number"},"111"),n("br"),n("span",{class:"line-number"},"112"),n("br"),n("span",{class:"line-number"},"113"),n("br"),n("span",{class:"line-number"},"114"),n("br"),n("span",{class:"line-number"},"115"),n("br"),n("span",{class:"line-number"},"116"),n("br"),n("span",{class:"line-number"},"117"),n("br"),n("span",{class:"line-number"},"118"),n("br"),n("span",{class:"line-number"},"119"),n("br"),n("span",{class:"line-number"},"120"),n("br"),n("span",{class:"line-number"},"121"),n("br"),n("span",{class:"line-number"},"122"),n("br"),n("span",{class:"line-number"},"123"),n("br"),n("span",{class:"line-number"},"124"),n("br"),n("span",{class:"line-number"},"125"),n("br"),n("span",{class:"line-number"},"126"),n("br"),n("span",{class:"line-number"},"127"),n("br"),n("span",{class:"line-number"},"128"),n("br"),n("span",{class:"line-number"},"129"),n("br"),n("span",{class:"line-number"},"130"),n("br"),n("span",{class:"line-number"},"131"),n("br"),n("span",{class:"line-number"},"132"),n("br"),n("span",{class:"line-number"},"133"),n("br"),n("span",{class:"line-number"},"134"),n("br"),n("span",{class:"line-number"},"135"),n("br"),n("span",{class:"line-number"},"136"),n("br"),n("span",{class:"line-number"},"137"),n("br"),n("span",{class:"line-number"},"138"),n("br"),n("span",{class:"line-number"},"139"),n("br"),n("span",{class:"line-number"},"140"),n("br"),n("span",{class:"line-number"},"141"),n("br"),n("span",{class:"line-number"},"142"),n("br"),n("span",{class:"line-number"},"143"),n("br"),n("span",{class:"line-number"},"144"),n("br"),n("span",{class:"line-number"},"145"),n("br"),n("span",{class:"line-number"},"146"),n("br"),n("span",{class:"line-number"},"147"),n("br"),n("span",{class:"line-number"},"148"),n("br"),n("span",{class:"line-number"},"149"),n("br"),n("span",{class:"line-number"},"150"),n("br"),n("span",{class:"line-number"},"151"),n("br"),n("span",{class:"line-number"},"152"),n("br"),n("span",{class:"line-number"},"153"),n("br"),n("span",{class:"line-number"},"154"),n("br"),n("span",{class:"line-number"},"155"),n("br"),n("span",{class:"line-number"},"156"),n("br"),n("span",{class:"line-number"},"157"),n("br"),n("span",{class:"line-number"},"158"),n("br"),n("span",{class:"line-number"},"159"),n("br"),n("span",{class:"line-number"},"160"),n("br"),n("span",{class:"line-number"},"161"),n("br"),n("span",{class:"line-number"},"162"),n("br"),n("span",{class:"line-number"},"163"),n("br"),n("span",{class:"line-number"},"164"),n("br"),n("span",{class:"line-number"},"165"),n("br"),n("span",{class:"line-number"},"166"),n("br"),n("span",{class:"line-number"},"167"),n("br"),n("span",{class:"line-number"},"168"),n("br"),n("span",{class:"line-number"},"169"),n("br"),n("span",{class:"line-number"},"170"),n("br"),n("span",{class:"line-number"},"171"),n("br"),n("span",{class:"line-number"},"172"),n("br"),n("span",{class:"line-number"},"173"),n("br"),n("span",{class:"line-number"},"174"),n("br"),n("span",{class:"line-number"},"175"),n("br"),n("span",{class:"line-number"},"176"),n("br"),n("span",{class:"line-number"},"177"),n("br"),n("span",{class:"line-number"},"178"),n("br"),n("span",{class:"line-number"},"179"),n("br"),n("span",{class:"line-number"},"180"),n("br"),n("span",{class:"line-number"},"181"),n("br"),n("span",{class:"line-number"},"182"),n("br"),n("span",{class:"line-number"},"183"),n("br"),n("span",{class:"line-number"},"184"),n("br"),n("span",{class:"line-number"},"185"),n("br"),n("span",{class:"line-number"},"186"),n("br"),n("span",{class:"line-number"},"187"),n("br"),n("span",{class:"line-number"},"188"),n("br"),n("span",{class:"line-number"},"189"),n("br"),n("span",{class:"line-number"},"190"),n("br"),n("span",{class:"line-number"},"191"),n("br"),n("span",{class:"line-number"},"192"),n("br"),n("span",{class:"line-number"},"193"),n("br"),n("span",{class:"line-number"},"194"),n("br"),n("span",{class:"line-number"},"195"),n("br"),n("span",{class:"line-number"},"196"),n("br"),n("span",{class:"line-number"},"197"),n("br"),n("span",{class:"line-number"},"198"),n("br"),n("span",{class:"line-number"},"199"),n("br"),n("span",{class:"line-number"},"200"),n("br"),n("span",{class:"line-number"},"201"),n("br"),n("span",{class:"line-number"},"202"),n("br"),n("span",{class:"line-number"},"203"),n("br"),n("span",{class:"line-number"},"204"),n("br"),n("span",{class:"line-number"},"205"),n("br"),n("span",{class:"line-number"},"206"),n("br"),n("span",{class:"line-number"},"207"),n("br"),n("span",{class:"line-number"},"208"),n("br"),n("span",{class:"line-number"},"209"),n("br"),n("span",{class:"line-number"},"210"),n("br"),n("span",{class:"line-number"},"211"),n("br"),n("span",{class:"line-number"},"212"),n("br"),n("span",{class:"line-number"},"213"),n("br"),n("span",{class:"line-number"},"214"),n("br")])],-1),v=n("h2",{id:"making-custom-log",tabindex:"-1"},[s("Making Custom Log "),n("a",{class:"header-anchor",href:"#making-custom-log","aria-hidden":"true"},"#")],-1),x=s("BP/blocks/custom_log.json"),P=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.16.100"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"minecraft:block"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:custom_log"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"properties"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"wiki:facing_direction"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token number"},"2"),s(`
                `),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token comment"},"//Log direction properties"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"permutations"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.block_property('wiki:facing_direction') == 0"`),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token comment"},"//If query.block_property('wiki:facing_direction') == 0 sets no rotation and on_interact component"),s(`
                `),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"minecraft:rotation"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token number"},"0"),s(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
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
                    `),n("span",{class:"token property"},'"minecraft:rotation"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token number"},"0"),s(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
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
                    `),n("span",{class:"token property"},'"minecraft:rotation"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token number"},"90"),s(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"minecraft:on_interact"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token property"},'"condition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"query.equipped_item_any_tag('slot.weapon.mainhand', 'minecraft:is_axe')"`),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:become_stripped2"'),s(`
                        `),n("span",{class:"token comment"},"//Event sets custom stripped log with rotation"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"tag:wiki:custom_log"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
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
            `),n("span",{class:"token property"},'"minecraft:on_player_placing"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"event"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:set_facing_direction"'),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token comment"},"//Sets log rotation on player placing"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"events"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
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
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br"),n("span",{class:"line-number"},"80"),n("br"),n("span",{class:"line-number"},"81"),n("br"),n("span",{class:"line-number"},"82"),n("br"),n("span",{class:"line-number"},"83"),n("br"),n("span",{class:"line-number"},"84"),n("br"),n("span",{class:"line-number"},"85"),n("br"),n("span",{class:"line-number"},"86"),n("br"),n("span",{class:"line-number"},"87"),n("br"),n("span",{class:"line-number"},"88"),n("br"),n("span",{class:"line-number"},"89"),n("br"),n("span",{class:"line-number"},"90"),n("br"),n("span",{class:"line-number"},"91"),n("br"),n("span",{class:"line-number"},"92"),n("br"),n("span",{class:"line-number"},"93"),n("br"),n("span",{class:"line-number"},"94"),n("br"),n("span",{class:"line-number"},"95"),n("br"),n("span",{class:"line-number"},"96"),n("br"),n("span",{class:"line-number"},"97"),n("br"),n("span",{class:"line-number"},"98"),n("br"),n("span",{class:"line-number"},"99"),n("br"),n("span",{class:"line-number"},"100"),n("br"),n("span",{class:"line-number"},"101"),n("br"),n("span",{class:"line-number"},"102"),n("br"),n("span",{class:"line-number"},"103"),n("br"),n("span",{class:"line-number"},"104"),n("br"),n("span",{class:"line-number"},"105"),n("br"),n("span",{class:"line-number"},"106"),n("br"),n("span",{class:"line-number"},"107"),n("br"),n("span",{class:"line-number"},"108"),n("br"),n("span",{class:"line-number"},"109"),n("br"),n("span",{class:"line-number"},"110"),n("br"),n("span",{class:"line-number"},"111"),n("br"),n("span",{class:"line-number"},"112"),n("br"),n("span",{class:"line-number"},"113"),n("br"),n("span",{class:"line-number"},"114"),n("br"),n("span",{class:"line-number"},"115"),n("br"),n("span",{class:"line-number"},"116"),n("br"),n("span",{class:"line-number"},"117"),n("br"),n("span",{class:"line-number"},"118"),n("br"),n("span",{class:"line-number"},"119"),n("br"),n("span",{class:"line-number"},"120"),n("br"),n("span",{class:"line-number"},"121"),n("br"),n("span",{class:"line-number"},"122"),n("br"),n("span",{class:"line-number"},"123"),n("br"),n("span",{class:"line-number"},"124"),n("br"),n("span",{class:"line-number"},"125"),n("br"),n("span",{class:"line-number"},"126"),n("br"),n("span",{class:"line-number"},"127"),n("br"),n("span",{class:"line-number"},"128"),n("br"),n("span",{class:"line-number"},"129"),n("br"),n("span",{class:"line-number"},"130"),n("br"),n("span",{class:"line-number"},"131"),n("br"),n("span",{class:"line-number"},"132"),n("br"),n("span",{class:"line-number"},"133"),n("br"),n("span",{class:"line-number"},"134"),n("br"),n("span",{class:"line-number"},"135"),n("br"),n("span",{class:"line-number"},"136"),n("br"),n("span",{class:"line-number"},"137"),n("br"),n("span",{class:"line-number"},"138"),n("br"),n("span",{class:"line-number"},"139"),n("br"),n("span",{class:"line-number"},"140"),n("br"),n("span",{class:"line-number"},"141"),n("br"),n("span",{class:"line-number"},"142"),n("br"),n("span",{class:"line-number"},"143"),n("br"),n("span",{class:"line-number"},"144"),n("br"),n("span",{class:"line-number"},"145"),n("br"),n("span",{class:"line-number"},"146"),n("br"),n("span",{class:"line-number"},"147"),n("br"),n("span",{class:"line-number"},"148"),n("br"),n("span",{class:"line-number"},"149"),n("br"),n("span",{class:"line-number"},"150"),n("br"),n("span",{class:"line-number"},"151"),n("br"),n("span",{class:"line-number"},"152"),n("br"),n("span",{class:"line-number"},"153"),n("br"),n("span",{class:"line-number"},"154"),n("br"),n("span",{class:"line-number"},"155"),n("br"),n("span",{class:"line-number"},"156"),n("br"),n("span",{class:"line-number"},"157"),n("br"),n("span",{class:"line-number"},"158"),n("br"),n("span",{class:"line-number"},"159"),n("br"),n("span",{class:"line-number"},"160"),n("br"),n("span",{class:"line-number"},"161"),n("br"),n("span",{class:"line-number"},"162"),n("br"),n("span",{class:"line-number"},"163"),n("br"),n("span",{class:"line-number"},"164"),n("br"),n("span",{class:"line-number"},"165"),n("br")])],-1),T=n("h2",{id:"making-stripped-log",tabindex:"-1"},[s("Making Stripped Log "),n("a",{class:"header-anchor",href:"#making-stripped-log","aria-hidden":"true"},"#")],-1),j=n("p",null,"Here all components are the same",-1),S=s("BP/blocks/custom_stripped_log.json"),C=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br")])],-1),B=n("h2",{id:"making-custom-sapling",tabindex:"-1"},[s("Making Custom Sapling "),n("a",{class:"header-anchor",href:"#making-custom-sapling","aria-hidden":"true"},"#")],-1),A=n("p",null,[s("For the sapling we will need structures of out tree to make the sapling semi-realistick. "),n("code",null,"/place feature"),s(" would be great.")],-1),R=s("BP/blocks/custom_sapling.json"),I=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.16.100"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"minecraft:block"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:custom_sapling"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"properties"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"wiki:growing"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token number"},"2"),s(`
                `),n("span",{class:"token punctuation"},"]"),s(`
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
                        `),n("span",{class:"token property"},'"range"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),s(`
                            `),n("span",{class:"token number"},"180"),s(`
                        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
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
                        `),n("span",{class:"token property"},'"range"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),s(`
                            `),n("span",{class:"token number"},"180"),s(`
                        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
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
                        `),n("span",{class:"token property"},'"range"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),s(`
                            `),n("span",{class:"token number"},"180"),s(`
                        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
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
                `),n("span",{class:"token property"},'"origin"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token number"},"-6"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token number"},"-6"),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"size"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token number"},"13"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token number"},"12"),s(`
                `),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"minecraft:loot"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"loot_tables/blocks/custom_sapling.json"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token comment"},"//Add loot component so it will drop sapling placer"),s(`
            `),n("span",{class:"token property"},'"minecraft:geometry"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"geometry.custom_sapling"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"minecraft:destroy_time"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.01"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"minecraft:entity_collision"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
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
                        `),n("span",{class:"token property"},'"allowed_faces"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"up"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token comment"},"//Allows to place block only on this blocks"),s(`
            `),n("span",{class:"token property"},'"minecraft:ticking"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"range"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token number"},"1"),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
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
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br"),n("span",{class:"line-number"},"80"),n("br"),n("span",{class:"line-number"},"81"),n("br"),n("span",{class:"line-number"},"82"),n("br"),n("span",{class:"line-number"},"83"),n("br"),n("span",{class:"line-number"},"84"),n("br"),n("span",{class:"line-number"},"85"),n("br"),n("span",{class:"line-number"},"86"),n("br"),n("span",{class:"line-number"},"87"),n("br"),n("span",{class:"line-number"},"88"),n("br"),n("span",{class:"line-number"},"89"),n("br"),n("span",{class:"line-number"},"90"),n("br"),n("span",{class:"line-number"},"91"),n("br"),n("span",{class:"line-number"},"92"),n("br"),n("span",{class:"line-number"},"93"),n("br"),n("span",{class:"line-number"},"94"),n("br"),n("span",{class:"line-number"},"95"),n("br"),n("span",{class:"line-number"},"96"),n("br"),n("span",{class:"line-number"},"97"),n("br"),n("span",{class:"line-number"},"98"),n("br"),n("span",{class:"line-number"},"99"),n("br"),n("span",{class:"line-number"},"100"),n("br"),n("span",{class:"line-number"},"101"),n("br"),n("span",{class:"line-number"},"102"),n("br"),n("span",{class:"line-number"},"103"),n("br"),n("span",{class:"line-number"},"104"),n("br"),n("span",{class:"line-number"},"105"),n("br"),n("span",{class:"line-number"},"106"),n("br"),n("span",{class:"line-number"},"107"),n("br"),n("span",{class:"line-number"},"108"),n("br"),n("span",{class:"line-number"},"109"),n("br"),n("span",{class:"line-number"},"110"),n("br"),n("span",{class:"line-number"},"111"),n("br"),n("span",{class:"line-number"},"112"),n("br"),n("span",{class:"line-number"},"113"),n("br"),n("span",{class:"line-number"},"114"),n("br"),n("span",{class:"line-number"},"115"),n("br"),n("span",{class:"line-number"},"116"),n("br"),n("span",{class:"line-number"},"117"),n("br"),n("span",{class:"line-number"},"118"),n("br"),n("span",{class:"line-number"},"119"),n("br"),n("span",{class:"line-number"},"120"),n("br"),n("span",{class:"line-number"},"121"),n("br"),n("span",{class:"line-number"},"122"),n("br"),n("span",{class:"line-number"},"123"),n("br"),n("span",{class:"line-number"},"124"),n("br"),n("span",{class:"line-number"},"125"),n("br"),n("span",{class:"line-number"},"126"),n("br"),n("span",{class:"line-number"},"127"),n("br"),n("span",{class:"line-number"},"128"),n("br"),n("span",{class:"line-number"},"129"),n("br"),n("span",{class:"line-number"},"130"),n("br"),n("span",{class:"line-number"},"131"),n("br"),n("span",{class:"line-number"},"132"),n("br"),n("span",{class:"line-number"},"133"),n("br"),n("span",{class:"line-number"},"134"),n("br"),n("span",{class:"line-number"},"135"),n("br"),n("span",{class:"line-number"},"136"),n("br"),n("span",{class:"line-number"},"137"),n("br"),n("span",{class:"line-number"},"138"),n("br"),n("span",{class:"line-number"},"139"),n("br"),n("span",{class:"line-number"},"140"),n("br"),n("span",{class:"line-number"},"141"),n("br"),n("span",{class:"line-number"},"142"),n("br"),n("span",{class:"line-number"},"143"),n("br"),n("span",{class:"line-number"},"144"),n("br"),n("span",{class:"line-number"},"145"),n("br"),n("span",{class:"line-number"},"146"),n("br"),n("span",{class:"line-number"},"147"),n("br"),n("span",{class:"line-number"},"148"),n("br"),n("span",{class:"line-number"},"149"),n("br"),n("span",{class:"line-number"},"150"),n("br"),n("span",{class:"line-number"},"151"),n("br"),n("span",{class:"line-number"},"152"),n("br"),n("span",{class:"line-number"},"153"),n("br"),n("span",{class:"line-number"},"154"),n("br"),n("span",{class:"line-number"},"155"),n("br"),n("span",{class:"line-number"},"156"),n("br"),n("span",{class:"line-number"},"157"),n("br"),n("span",{class:"line-number"},"158"),n("br"),n("span",{class:"line-number"},"159"),n("br"),n("span",{class:"line-number"},"160"),n("br"),n("span",{class:"line-number"},"161"),n("br"),n("span",{class:"line-number"},"162"),n("br"),n("span",{class:"line-number"},"163"),n("br"),n("span",{class:"line-number"},"164"),n("br"),n("span",{class:"line-number"},"165"),n("br"),n("span",{class:"line-number"},"166"),n("br"),n("span",{class:"line-number"},"167"),n("br"),n("span",{class:"line-number"},"168"),n("br"),n("span",{class:"line-number"},"169"),n("br"),n("span",{class:"line-number"},"170"),n("br"),n("span",{class:"line-number"},"171"),n("br"),n("span",{class:"line-number"},"172"),n("br"),n("span",{class:"line-number"},"173"),n("br"),n("span",{class:"line-number"},"174"),n("br"),n("span",{class:"line-number"},"175"),n("br"),n("span",{class:"line-number"},"176"),n("br"),n("span",{class:"line-number"},"177"),n("br"),n("span",{class:"line-number"},"178"),n("br"),n("span",{class:"line-number"},"179"),n("br"),n("span",{class:"line-number"},"180"),n("br"),n("span",{class:"line-number"},"181"),n("br"),n("span",{class:"line-number"},"182"),n("br"),n("span",{class:"line-number"},"183"),n("br"),n("span",{class:"line-number"},"184"),n("br"),n("span",{class:"line-number"},"185"),n("br"),n("span",{class:"line-number"},"186"),n("br"),n("span",{class:"line-number"},"187"),n("br"),n("span",{class:"line-number"},"188"),n("br"),n("span",{class:"line-number"},"189"),n("br"),n("span",{class:"line-number"},"190"),n("br"),n("span",{class:"line-number"},"191"),n("br"),n("span",{class:"line-number"},"192"),n("br"),n("span",{class:"line-number"},"193"),n("br"),n("span",{class:"line-number"},"194"),n("br"),n("span",{class:"line-number"},"195"),n("br"),n("span",{class:"line-number"},"196"),n("br"),n("span",{class:"line-number"},"197"),n("br"),n("span",{class:"line-number"},"198"),n("br"),n("span",{class:"line-number"},"199"),n("br"),n("span",{class:"line-number"},"200"),n("br"),n("span",{class:"line-number"},"201"),n("br"),n("span",{class:"line-number"},"202"),n("br"),n("span",{class:"line-number"},"203"),n("br"),n("span",{class:"line-number"},"204"),n("br"),n("span",{class:"line-number"},"205"),n("br"),n("span",{class:"line-number"},"206"),n("br"),n("span",{class:"line-number"},"207"),n("br"),n("span",{class:"line-number"},"208"),n("br"),n("span",{class:"line-number"},"209"),n("br"),n("span",{class:"line-number"},"210"),n("br"),n("span",{class:"line-number"},"211"),n("br"),n("span",{class:"line-number"},"212"),n("br"),n("span",{class:"line-number"},"213"),n("br"),n("span",{class:"line-number"},"214"),n("br"),n("span",{class:"line-number"},"215"),n("br"),n("span",{class:"line-number"},"216"),n("br"),n("span",{class:"line-number"},"217"),n("br"),n("span",{class:"line-number"},"218"),n("br"),n("span",{class:"line-number"},"219"),n("br"),n("span",{class:"line-number"},"220"),n("br"),n("span",{class:"line-number"},"221"),n("br"),n("span",{class:"line-number"},"222"),n("br")])],-1),M=n("h2",{id:"making-sapling-placer",tabindex:"-1"},[s("Making Sapling Placer "),n("a",{class:"header-anchor",href:"#making-sapling-placer","aria-hidden":"true"},"#")],-1),V=s("BP/items/custom_sapling_placer.json"),L=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br")])],-1),D=n("h2",{id:"making-loot-tables",tabindex:"-1"},[s("Making Loot Tables "),n("a",{class:"header-anchor",href:"#making-loot-tables","aria-hidden":"true"},"#")],-1),z=s("BP/loot_tables/blocks/custom_leaves_block.json"),E=n("p",null,"This loot will spawn leaves block (when you breaak it using shears)",-1),F=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br")])],-1),N=n("p",null,"Leaves default loot",-1),W=s("BP/loot_tables/blocks/custom_leaves_loot.json"),G=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br")])],-1),$=n("p",null,"This loot will spawn log block",-1),H=s("BP/loot_tables/blocks/custom_log_block.json"),O=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br")])],-1),J=n("p",null,"This loot will spawn stripped log",-1),U=s("BP/loot_tables/blocks/custom_stripped_log_block.json"),Y=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br")])],-1),K=n("p",null,"This will spawn custom_sapling_placer",-1),Q=s("BP/loot_tables/blocks/custom_sapling_placer.json"),X=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br")])],-1),Z=o("",7),nn=s("BP/feature/custom_tree_feature.json"),sn=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.13.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"minecraft:tree_feature"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:custom_tree_feature"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"trunk"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"trunk_height"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"range_min"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"range_max"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"height_modifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"range_min"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"-2"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"range_max"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"trunk_block"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:log"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"states"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"old_log_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"spruce"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"spruce_canopy"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"lower_offset"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"range_min"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"range_max"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"upper_offset"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"range_min"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"range_max"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"max_radius"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"range_min"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"range_max"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"leaf_block"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:custom_leaves"'),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"base_block"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"minecraft:dirt"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:dirt"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"states"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"dirt_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"coarse"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"may_grow_on"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"minecraft:dirt"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token string"},'"minecraft:grass"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token string"},'"minecraft:podzol"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token string"},'"minecraft:dirt_with_roots"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token string"},'"minecraft:moss_block"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:dirt"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"states"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"dirt_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"coarse"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:farmland"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"states"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"moisturized_amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:farmland"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"states"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"moisturized_amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:farmland"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"states"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"moisturized_amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:farmland"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"states"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"moisturized_amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:farmland"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"states"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"moisturized_amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:farmland"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"states"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"moisturized_amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:farmland"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"states"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"moisturized_amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:farmland"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"states"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"moisturized_amount"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"may_replace"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"minecraft:air"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:leaves"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"states"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"old_leaf_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"oak"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:leaves"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"states"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"old_leaf_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"spruce"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:leaves"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"states"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"old_leaf_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"birch"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:leaves"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"states"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"old_leaf_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"jungle"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:leaves2"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"states"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"new_leaf_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"acacia"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:leaves2"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"states"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"new_leaf_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"dark_oak"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"may_grow_through"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"minecraft:dirt"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token string"},'"minecraft:grass"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:dirt"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"states"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"dirt_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"coarse"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br"),n("span",{class:"line-number"},"80"),n("br"),n("span",{class:"line-number"},"81"),n("br"),n("span",{class:"line-number"},"82"),n("br"),n("span",{class:"line-number"},"83"),n("br"),n("span",{class:"line-number"},"84"),n("br"),n("span",{class:"line-number"},"85"),n("br"),n("span",{class:"line-number"},"86"),n("br"),n("span",{class:"line-number"},"87"),n("br"),n("span",{class:"line-number"},"88"),n("br"),n("span",{class:"line-number"},"89"),n("br"),n("span",{class:"line-number"},"90"),n("br"),n("span",{class:"line-number"},"91"),n("br"),n("span",{class:"line-number"},"92"),n("br"),n("span",{class:"line-number"},"93"),n("br"),n("span",{class:"line-number"},"94"),n("br"),n("span",{class:"line-number"},"95"),n("br"),n("span",{class:"line-number"},"96"),n("br"),n("span",{class:"line-number"},"97"),n("br"),n("span",{class:"line-number"},"98"),n("br"),n("span",{class:"line-number"},"99"),n("br"),n("span",{class:"line-number"},"100"),n("br"),n("span",{class:"line-number"},"101"),n("br"),n("span",{class:"line-number"},"102"),n("br"),n("span",{class:"line-number"},"103"),n("br"),n("span",{class:"line-number"},"104"),n("br"),n("span",{class:"line-number"},"105"),n("br"),n("span",{class:"line-number"},"106"),n("br"),n("span",{class:"line-number"},"107"),n("br"),n("span",{class:"line-number"},"108"),n("br"),n("span",{class:"line-number"},"109"),n("br"),n("span",{class:"line-number"},"110"),n("br"),n("span",{class:"line-number"},"111"),n("br"),n("span",{class:"line-number"},"112"),n("br"),n("span",{class:"line-number"},"113"),n("br"),n("span",{class:"line-number"},"114"),n("br"),n("span",{class:"line-number"},"115"),n("br"),n("span",{class:"line-number"},"116"),n("br"),n("span",{class:"line-number"},"117"),n("br"),n("span",{class:"line-number"},"118"),n("br"),n("span",{class:"line-number"},"119"),n("br"),n("span",{class:"line-number"},"120"),n("br"),n("span",{class:"line-number"},"121"),n("br"),n("span",{class:"line-number"},"122"),n("br"),n("span",{class:"line-number"},"123"),n("br"),n("span",{class:"line-number"},"124"),n("br"),n("span",{class:"line-number"},"125"),n("br"),n("span",{class:"line-number"},"126"),n("br"),n("span",{class:"line-number"},"127"),n("br"),n("span",{class:"line-number"},"128"),n("br"),n("span",{class:"line-number"},"129"),n("br"),n("span",{class:"line-number"},"130"),n("br"),n("span",{class:"line-number"},"131"),n("br"),n("span",{class:"line-number"},"132"),n("br"),n("span",{class:"line-number"},"133"),n("br"),n("span",{class:"line-number"},"134"),n("br"),n("span",{class:"line-number"},"135"),n("br"),n("span",{class:"line-number"},"136"),n("br"),n("span",{class:"line-number"},"137"),n("br"),n("span",{class:"line-number"},"138"),n("br"),n("span",{class:"line-number"},"139"),n("br"),n("span",{class:"line-number"},"140"),n("br"),n("span",{class:"line-number"},"141"),n("br"),n("span",{class:"line-number"},"142"),n("br"),n("span",{class:"line-number"},"143"),n("br"),n("span",{class:"line-number"},"144"),n("br"),n("span",{class:"line-number"},"145"),n("br"),n("span",{class:"line-number"},"146"),n("br"),n("span",{class:"line-number"},"147"),n("br"),n("span",{class:"line-number"},"148"),n("br"),n("span",{class:"line-number"},"149"),n("br"),n("span",{class:"line-number"},"150"),n("br"),n("span",{class:"line-number"},"151"),n("br"),n("span",{class:"line-number"},"152"),n("br"),n("span",{class:"line-number"},"153"),n("br"),n("span",{class:"line-number"},"154"),n("br"),n("span",{class:"line-number"},"155"),n("br"),n("span",{class:"line-number"},"156"),n("br"),n("span",{class:"line-number"},"157"),n("br"),n("span",{class:"line-number"},"158"),n("br"),n("span",{class:"line-number"},"159"),n("br"),n("span",{class:"line-number"},"160"),n("br")])],-1),an=s("BP/feature_rules/custom_tree_feature_rule.json"),tn=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.13.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"minecraft:feature_rules"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:custom_tree_feature_rule"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"places_feature"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:custom_tree_feature"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"conditions"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"placement_pass"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"surface_pass"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"minecraft:biome_filter"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"test"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"has_biome_tag"'),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"operator"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"=="'),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"taiga"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"test"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"has_biome_tag"'),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"operator"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"!="'),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"mega"'),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"distribution"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"iterations"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"coordinate_eval_order"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"zxy"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"extent"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token number"},"16"),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"distribution"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"uniform"'),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"query.heightmap(variable.worldx, variable.worldz)"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"z"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"extent"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token number"},"16"),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"distribution"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"uniform"'),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br")])],-1),en=n("h2",{id:"resource-pack-optional-guide",tabindex:"-1"},[s("Resource Pack (optional guide) "),n("a",{class:"header-anchor",href:"#resource-pack-optional-guide","aria-hidden":"true"},"#")],-1),pn=n("p",null,"Now it is time to make a resource pack!",-1),on=n("p",null,"Make translations for blocks:",-1),cn=s("RP/texts/en_US.lang"),rn=o("",2),ln=s("RP/textures/terrain_texture.json"),un=o("",2),kn=s("RP/models/blocks/custom_sapling.geo.json"),bn=o("",2),mn=s("RP/textures/item_texture.json"),_n=o("",2),yn=s("RP/blocks.json"),gn=o("",3),dn=n("ul",null,[n("li",null,"[x] Custom Trees with Decaying Leaves"),n("li",null,"[x] Working Sapling"),n("li",null,"[x] Rotatable and Stripable Logs")],-1),hn=n("p",null,[n("img",{src:g,alt:""})],-1),fn=n("h2",{id:"download-example-pack",tabindex:"-1"},[s("Download Example Pack "),n("a",{class:"header-anchor",href:"#download-example-pack","aria-hidden":"true"},"#")],-1),wn=n("p",null,"Template Pack to use in-game to get the idea.",-1),qn=s("TEMPLATE");function vn(xn,Pn,Tn,jn,Sn,Cn){const r=c("WikiImage"),e=c("CodeHeader"),p=c("Spoiler"),l=c("Checklist"),u=c("FolderView"),i=c("BButton");return m(),b("div",null,[h,a(r,{src:"/assets/images/blocks/parts-of-custom-tree/decaying_leaves_showcase_example.png",alt:"alternative text",pixelated:"true",width:"420"}),f,a(p,{title:"Code"},{default:t(()=>[a(e,null,{default:t(()=>[w]),_:1}),q]),_:1}),v,a(p,{title:"Code"},{default:t(()=>[a(e,null,{default:t(()=>[x]),_:1}),P]),_:1}),T,j,a(p,{title:"Code"},{default:t(()=>[a(e,null,{default:t(()=>[S]),_:1}),C]),_:1}),B,A,a(p,{title:"Code"},{default:t(()=>[a(e,null,{default:t(()=>[R]),_:1}),I]),_:1}),M,a(p,{title:"Code"},{default:t(()=>[a(e,null,{default:t(()=>[V]),_:1}),L]),_:1}),D,a(p,{title:"Code"},{default:t(()=>[a(e,null,{default:t(()=>[z]),_:1}),E,F,N,a(e,null,{default:t(()=>[W]),_:1}),G,$,a(e,null,{default:t(()=>[H]),_:1}),O,J,a(e,null,{default:t(()=>[U]),_:1}),Y,K,a(e,null,{default:t(()=>[Q]),_:1}),X]),_:1}),Z,a(p,{title:"Feature"},{default:t(()=>[a(e,null,{default:t(()=>[nn]),_:1}),sn]),_:1}),a(p,{title:"Feature Rule"},{default:t(()=>[a(e,null,{default:t(()=>[an]),_:1}),tn]),_:1}),en,pn,on,a(e,null,{default:t(()=>[cn]),_:1}),rn,a(e,null,{default:t(()=>[ln]),_:1}),un,a(e,null,{default:t(()=>[kn]),_:1}),bn,a(e,null,{default:t(()=>[mn]),_:1}),_n,a(e,null,{default:t(()=>[yn]),_:1}),gn,a(l,null,{default:t(()=>[dn]),_:1}),a(u,{paths:["BP/manifest.json","BP/pack_icon.png","BP/blocks/custom_leaves.json","BP/blocks/custom_log.json","BP/blocks/custom_stripped_log.json","BP/blocks/custom_sapling.json","BP/features/custom_tree_feature.json","BP/feature_rules/custom_tree_feature_rule.json","BP/items/custom_sapling_placer.json","BP/loot_tables/blocks/custom_leaves_block.json","BP/loot_tables/blocks/custom_leaves_loot.json","BP/loot_tables/blocks/custom_log_block.json","BP/loot_tables/blocks/custom_stripped_log_block.json","BP/loot_tables/blocks/custom_sapling_placer.json","BP/structures/custom_stripped_log1.mcstructure","BP/structures/custom_stripped_log2.mcstructure","BP/structures/custom_tree.mcstructure","RP/manifest.json","RP/pack_icon.png","RP/blocks.json","RP/texts/en_US.lang","RP/textures/terrain_texture.json","RP/models/blocks/custom_sapling.geo.json","RP/textures/item_texture.json"]},null,8,["paths"]),hn,fn,wn,a(i,{link:"/assets/packs/tutorials/parts-of-custom-tree/custom_tree_template.mcaddon",download:"",color:"blue"},{default:t(()=>[qn]),_:1})])}var Rn=k(d,[["render",vn]]);export{An as __pageData,Rn as default};

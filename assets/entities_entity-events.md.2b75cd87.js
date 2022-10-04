import{_ as c,c as l,a,w as p,e,r as o,o as u,b as n,d as s}from"./404.md.4e630b9f.js";const F='{"title":"Entity Events","description":"","frontmatter":{"title":"Entity Events","category":"General","mention":["ChibiMango"],"tags":["beginner"]},"headers":[{"level":2,"title":"Event Layout","slug":"event-layout"},{"level":3,"title":"Add/Remove","slug":"add-remove"},{"level":3,"title":"Randomize","slug":"randomize"},{"level":3,"title":"Sequence/Filters","slug":"sequence-filters"},{"level":3,"title":"Trigger","slug":"trigger"},{"level":2,"title":"Calling Events","slug":"calling-events"},{"level":3,"title":"Calling Events in Other Entities","slug":"calling-events-in-other-entities"},{"level":3,"title":"Targets","slug":"targets"},{"level":3,"title":"Built-in Events","slug":"built-in-events"}],"relativePath":"entities/entity-events.md"}',i={},b=e('<p>Entity events are one of the fundamental building blocks of behavior alongside components and component groups. They serve as the control center for component groups and can be called from components, animations, animation controllers, and other events. This page aims to cover how to call events within the entity and other entities as well as the format of an event.</p><h2 id="event-layout" tabindex="-1">Event Layout <a class="header-anchor" href="#event-layout" aria-hidden="true">#</a></h2><p>Events allow us to add and remove component groups from our entity allowing us to change the behavior of our entity when certain conditions are met. They are called events because we can activate them when events happen such as a timer running out, a player interacting with the entity or an environmental change occuring. When an event is activated it will read through the keys and determined whether to add or remove component groups.</p><p>An event can have six different keys which can add or remove component groups:</p><ul><li>add</li><li>remove</li><li>randomize</li><li>sequence</li><li>filters</li><li>trigger</li></ul><h3 id="add-remove" tabindex="-1">Add/Remove <a class="header-anchor" href="#add-remove" aria-hidden="true">#</a></h3><p>The most essential and common use of events is directly adding and/or removing component groups. These will almost always be used in your event and are used in conjunction with the other keys. The following event named <code>wiki:ranged_attacker</code> adds the two component groups &quot;attacker&quot; and &quot;ranged&quot; and removes the groups &quot;standby&quot; and &quot;melee&quot;:</p>',7),k=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;wiki:ranged_attacker&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">&quot;attacker&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;ranged&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;remove&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">&quot;standby&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;melee&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>When you add a component group, if a currently active component group has the same component inside it, it will be overwritten by the group most recently added.</p></div><h3 id="randomize" tabindex="-1">Randomize <a class="header-anchor" href="#randomize" aria-hidden="true">#</a></h3><p>Randomize is a parameter which can be used inside of an entity event to add or remove component groups based off weighted randomization. This is a very useful tool when different component groups should be added based on random chance.</p><p>The <code>minecraft:entity_spawned</code> event inside the cow uses randomize to give a 95% chance of the cow spawning as an adult and a 5% chance of spawning as a baby (component groups <code>minecraft:cow_adult</code> and <code>minecraft:cow_baby</code>).</p>`,5),m=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:entity_spawned&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;randomize&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">95</span><span class="token punctuation">,</span>
            <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;minecraft:cow_adult&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;minecraft:cow_baby&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>Note that the <code>randomize</code> will only select one option out of the pool of options.</p><h3 id="sequence-filters" tabindex="-1">Sequence/Filters <a class="header-anchor" href="#sequence-filters" aria-hidden="true">#</a></h3><p>Sequence is a parameter which can be used inside of an entity event to add or remove component groups based on filters. Filters allow us to make conditional events which will only add/remove component groups if a conditon is met. The <code>minecraft:convert_to_drowned</code> event inside the zombie uses the <code>sequence</code> parameter to add a different component group based on whether or not the zombie is a baby.</p>`,4),d=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:convert_to_drowned&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;sequence&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_component&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span><span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;minecraft:is_baby&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;minecraft:convert_to_drowned&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;remove&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;minecraft:start_drowned_transformation&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_component&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;minecraft:is_baby&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;minecraft:convert_to_baby_drowned&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;remove&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;minecraft:start_drowned_transformation&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>Additionally, <code>sequence</code> allows us to run multiple parameters in sequence. It evaluates each section at a time and if valid, will apply it.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Entries in a sequence are not exclusive; if a filter in one of them passes, it does not prevent the other entries from running. In the case above, there is no filter in the first entry and so it automatically runs. This does not stop the other entries from being checked and subsequently running if valid.</p></div><p>Below is an extensive example of using the sequence to combine filters, randomising and add &amp; removing component groups:</p>`,4),h=n("p",null,"This event is run when the entity is hit by a player or projectile. There is a 60% chance nothing will happen and a 40% chance an attack sequence will activate. This attack sequence chooses a random attack with weights determined both by the entity's current health (stronger attacks are given a higher chance when the entity is below half health) and the distance to the nearest player (ranged attacks have higher priority when the player is further away).",-1),q=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token property"},'"wiki:on_hit"'),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
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
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br"),n("span",{class:"line-number"},"80"),n("br"),n("span",{class:"line-number"},"81"),n("br"),n("span",{class:"line-number"},"82"),n("br"),n("span",{class:"line-number"},"83"),n("br"),n("span",{class:"line-number"},"84"),n("br"),n("span",{class:"line-number"},"85"),n("br"),n("span",{class:"line-number"},"86"),n("br"),n("span",{class:"line-number"},"87"),n("br"),n("span",{class:"line-number"},"88"),n("br"),n("span",{class:"line-number"},"89"),n("br"),n("span",{class:"line-number"},"90"),n("br"),n("span",{class:"line-number"},"91"),n("br"),n("span",{class:"line-number"},"92"),n("br"),n("span",{class:"line-number"},"93"),n("br"),n("span",{class:"line-number"},"94"),n("br"),n("span",{class:"line-number"},"95"),n("br"),n("span",{class:"line-number"},"96"),n("br"),n("span",{class:"line-number"},"97"),n("br"),n("span",{class:"line-number"},"98"),n("br"),n("span",{class:"line-number"},"99"),n("br"),n("span",{class:"line-number"},"100"),n("br"),n("span",{class:"line-number"},"101"),n("br"),n("span",{class:"line-number"},"102"),n("br"),n("span",{class:"line-number"},"103"),n("br"),n("span",{class:"line-number"},"104"),n("br"),n("span",{class:"line-number"},"105"),n("br"),n("span",{class:"line-number"},"106"),n("br"),n("span",{class:"line-number"},"107"),n("br"),n("span",{class:"line-number"},"108"),n("br"),n("span",{class:"line-number"},"109"),n("br"),n("span",{class:"line-number"},"110"),n("br"),n("span",{class:"line-number"},"111"),n("br"),n("span",{class:"line-number"},"112"),n("br"),n("span",{class:"line-number"},"113"),n("br"),n("span",{class:"line-number"},"114"),n("br"),n("span",{class:"line-number"},"115"),n("br"),n("span",{class:"line-number"},"116"),n("br"),n("span",{class:"line-number"},"117"),n("br"),n("span",{class:"line-number"},"118"),n("br"),n("span",{class:"line-number"},"119"),n("br"),n("span",{class:"line-number"},"120"),n("br"),n("span",{class:"line-number"},"121"),n("br"),n("span",{class:"line-number"},"122"),n("br"),n("span",{class:"line-number"},"123"),n("br"),n("span",{class:"line-number"},"124"),n("br"),n("span",{class:"line-number"},"125"),n("br"),n("span",{class:"line-number"},"126"),n("br"),n("span",{class:"line-number"},"127"),n("br"),n("span",{class:"line-number"},"128"),n("br"),n("span",{class:"line-number"},"129"),n("br"),n("span",{class:"line-number"},"130"),n("br"),n("span",{class:"line-number"},"131"),n("br"),n("span",{class:"line-number"},"132"),n("br"),n("span",{class:"line-number"},"133"),n("br"),n("span",{class:"line-number"},"134"),n("br"),n("span",{class:"line-number"},"135"),n("br"),n("span",{class:"line-number"},"136"),n("br"),n("span",{class:"line-number"},"137"),n("br"),n("span",{class:"line-number"},"138"),n("br"),n("span",{class:"line-number"},"139"),n("br"),n("span",{class:"line-number"},"140"),n("br"),n("span",{class:"line-number"},"141"),n("br"),n("span",{class:"line-number"},"142"),n("br"),n("span",{class:"line-number"},"143"),n("br"),n("span",{class:"line-number"},"144"),n("br"),n("span",{class:"line-number"},"145"),n("br"),n("span",{class:"line-number"},"146"),n("br"),n("span",{class:"line-number"},"147"),n("br"),n("span",{class:"line-number"},"148"),n("br"),n("span",{class:"line-number"},"149"),n("br"),n("span",{class:"line-number"},"150"),n("br"),n("span",{class:"line-number"},"151"),n("br"),n("span",{class:"line-number"},"152"),n("br"),n("span",{class:"line-number"},"153"),n("br"),n("span",{class:"line-number"},"154"),n("br"),n("span",{class:"line-number"},"155"),n("br"),n("span",{class:"line-number"},"156"),n("br"),n("span",{class:"line-number"},"157"),n("br"),n("span",{class:"line-number"},"158"),n("br"),n("span",{class:"line-number"},"159"),n("br"),n("span",{class:"line-number"},"160"),n("br"),n("span",{class:"line-number"},"161"),n("br"),n("span",{class:"line-number"},"162"),n("br"),n("span",{class:"line-number"},"163"),n("br"),n("span",{class:"line-number"},"164"),n("br"),n("span",{class:"line-number"},"165"),n("br"),n("span",{class:"line-number"},"166"),n("br"),n("span",{class:"line-number"},"167"),n("br"),n("span",{class:"line-number"},"168"),n("br"),n("span",{class:"line-number"},"169"),n("br"),n("span",{class:"line-number"},"170"),n("br"),n("span",{class:"line-number"},"171"),n("br"),n("span",{class:"line-number"},"172"),n("br"),n("span",{class:"line-number"},"173"),n("br"),n("span",{class:"line-number"},"174"),n("br"),n("span",{class:"line-number"},"175"),n("br"),n("span",{class:"line-number"},"176"),n("br"),n("span",{class:"line-number"},"177"),n("br"),n("span",{class:"line-number"},"178"),n("br"),n("span",{class:"line-number"},"179"),n("br"),n("span",{class:"line-number"},"180"),n("br"),n("span",{class:"line-number"},"181"),n("br"),n("span",{class:"line-number"},"182"),n("br"),n("span",{class:"line-number"},"183"),n("br"),n("span",{class:"line-number"},"184"),n("br"),n("span",{class:"line-number"},"185"),n("br"),n("span",{class:"line-number"},"186"),n("br"),n("span",{class:"line-number"},"187"),n("br"),n("span",{class:"line-number"},"188"),n("br"),n("span",{class:"line-number"},"189"),n("br"),n("span",{class:"line-number"},"190"),n("br")])],-1),_=e('<h3 id="trigger" tabindex="-1">Trigger <a class="header-anchor" href="#trigger" aria-hidden="true">#</a></h3><p>Trigger is a parameter which can be used inside of an entity event to run other events based on filters to a chosen target. We can use this to trigger another event within the entity, and combining this with <code>sequence</code> can allow us to organise our events neatly.</p><p>We are also able to specify filters and a target for the event. The target parameter is discussed in depth later. If the following event is called by the <code>minecraft:interact</code> component, then if the entity interacted with has the family tag <code>pig</code>, it will run the event <code>wiki:interacted</code> in the player that interacted with the entity.</p>',3),g=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;wiki:on_interact&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;trigger&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;is_family&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;self&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pig&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:interacted&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Events are able to retain entity context from the component they were called in. For example, the if an event is triggered using a <code>minecraft:interact</code> component, we are able to apply the filter to the player who interacted with the entity. However, if the method that called the event does not have this context, using target will not work.</p></div><p>Combining this with the sequence parameter, this allows us to run an event in multiple entities as long as there is a context for it. We discuss this more in the target section.</p>`,3),y=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;wiki:on_interact&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;sequence&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;trigger&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:interacted&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;trigger&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:interacted_with&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;self&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="calling-events" tabindex="-1">Calling Events <a class="header-anchor" href="#calling-events" aria-hidden="true">#</a></h2><p>In order for an event to run we need to know to activate it, this is done by calling the event. There are five main ways to do this:</p><ul><li>within a component</li><li>within an animation</li><li>within an animation controller</li><li>within another event</li><li>using a command</li></ul><p>Some components allow the player to call an event based on parameters set. Here we input the event we want to run when the parameters are met. For example, the <code>minecraft:environment_sensor</code> component is used in the zombie to call the event <code>minecraft:start_transforming</code> when the entity is underwater.</p>`,5),v=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:environment_sensor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;triggers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;is_underwater&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:start_transforming&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>We are also able to run an event directly on the entity within animations and animation controllers. This behavior-based animation is used to call the event <code>wiki:start_pouncing</code> after 10 seconds.</p>`,2),w=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;animation.entity.pounce_timer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;timeline&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;10.0&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@s wiki:start_pouncing&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;animation_length&quot;</span><span class="token operator">:</span> <span class="token number">10.1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>This behavior-based animation controller is used to call the event <code>wiki:running</code> upon transition to the state &quot;run&quot;.</p>`,2),f=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;controller.animation.entity.movement&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span><span class="token string">&quot;walk&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;states&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;walk&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;run&quot;</span><span class="token operator">:</span><span class="token string">&quot;query.is_sheared&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;run&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token string">&quot;@s wiki:running&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;walk&quot;</span><span class="token operator">:</span><span class="token string">&quot;!query.is_sheared&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>Here the <code>@s</code> is used to apply the event onto the entities self. Animation controllers are incredibly powerful and can be used to create even more custom behavior, though they are more advanced. Check out our page <a href="/animation-controllers/animation-controllers-intro.html">here</a> for more information</p><p>Within an event, as well as adding &amp; removing component groups we can also <code>trigger</code> other events to occur. This event inside the piglin calls the event <code>spawn_baby</code> from the event <code>minecraft:entity_born</code>.</p>`,3),T=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:entity_born&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;trigger&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spawn_baby&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>We can also use the command <code>/event</code> to activate an event on an entity. The following would add the component group <code>wiki:example</code> to all pigs. <code>/event entity @e[type=minecraft:pig] wiki:example</code>.</p><h3 id="calling-events-in-other-entities" tabindex="-1">Calling Events in Other Entities <a class="header-anchor" href="#calling-events-in-other-entities" aria-hidden="true">#</a></h3><p>Some components, such as the damage sensor, can target entities other than &quot;self&quot; when calling events. One component in particular is specifically designed to call events in other entities: <code>minecraft:behavior.send_event</code>. We will discuss this component first.</p><p>The <code>minecraft:behavior.send_event</code> component is used inside the evoker to call an event named <code>wololo</code> inside any blue sheep within its activation range.</p>`,5),S=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:behavior.send_event&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event_choices&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;min_activation_range&quot;</span><span class="token operator">:</span><span class="token number">0.0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;max_activation_range&quot;</span><span class="token operator">:</span><span class="token number">16.0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cooldown_time&quot;</span><span class="token operator">:</span><span class="token number">5.0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cast_duration&quot;</span><span class="token operator">:</span><span class="token number">3.0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;particle_color&quot;</span><span class="token operator">:</span><span class="token string">&quot;#FFB38033&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;is_family&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span><span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;sheep&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;is_color&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span><span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;blue&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;start_sound_event&quot;</span><span class="token operator">:</span><span class="token string">&quot;cast.spell&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sequence&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;base_delay&quot;</span><span class="token operator">:</span><span class="token number">2.0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span><span class="token string">&quot;wololo&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;sound_event&quot;</span><span class="token operator">:</span><span class="token string">&quot;prepare.wololo&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>You can also call event when spawning entity. To do it, add <code>&lt;my:event_name&gt;</code> in the end of string that is in component that can summon entity.</p>`,2),A=s("BP/entities/zombie.json#component_groups/minecraft:convert_to_drowned"),C=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:transformation&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;into&quot;</span><span class="token operator">:</span><span class="token string">&quot;minecraft:drowned&lt;minecraft:as_adult&gt;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;transformation_sound&quot;</span><span class="token operator">:</span><span class="token string">&quot;convert_to_drowned&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;drop_equipment&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;delay&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token number">15</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="targets" tabindex="-1">Targets <a class="header-anchor" href="#targets" aria-hidden="true">#</a></h3><p>The component <code>minecraft:damage_sensor</code> inside the pillager calls the event <code>minecraft:gain_bad_omen</code> on the player which kills it. Note how the target of the event is set to &quot;other&quot;.</p>`,3),I=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:damage_sensor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;triggers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;on_damage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_damage&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fatal&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;is_family&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;player&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:gain_bad_omen&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>Some components have these <code>targets</code> and each has certain ones that can be used. For example, <code>minecraft:interact</code> can have the target as either <code>self</code> or <code>other</code> where other is the entity that interacted with the entity. All valid components should have <code>self</code> and <code>target</code> as options where target is the targetted entity.</p><h3 id="built-in-events" tabindex="-1">Built-in Events <a class="header-anchor" href="#built-in-events" aria-hidden="true">#</a></h3><p>In general, using the component groups from vanilla mobs will not work. For example, the <code>minecraft:convert_to_drowned</code> will not be called in your entity unless you use one of the methods above to call it. However, there are a few events that called automatically when the conditions are met:</p><ul><li><code>minecraft:entity_spawned</code> : called when the entity is spawned in. Useful for setting up inital component groups.</li><li><code>minecraft:entity_born</code> : called when the entity is spawned in through breeding.</li><li><code>minecraft:entity_transformed</code> : called when another entity transforms into this one.</li><li><code>minecraft:on_prime</code> : called when the entity&#39;s fuse is lit and is ready to explode.</li></ul><p>A good example of these in use is with the cow. This shows how we can always ensure the cow has either <code>minecraft:cow_adult</code> or <code>minecraft:cow_baby</code> as soon as it is spawned/transformed.</p>`,6),E=s("BP/entities/cow.json#events"),P=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;events&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;minecraft:entity_spawned&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;randomize&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">95</span><span class="token punctuation">,</span>
                <span class="token property">&quot;add&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;minecraft:cow_adult&quot;</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                <span class="token property">&quot;add&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;minecraft:cow_baby&quot;</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minecraft:entity_born&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;add&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;minecraft:cow_baby&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minecraft:entity_transformed&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;add&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;minecraft:cow_adult&quot;</span><span class="token punctuation">]</span>   
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,1);function V(x,j,z,N,R,D){const t=o("CodeHeader"),r=o("Spoiler");return u(),l("div",null,[b,a(t),k,a(t),m,a(t),d,a(r,{title:"Sequence Example"},{default:p(()=>[h,a(t),q]),_:1}),_,a(t),g,a(t),y,a(t),v,a(t),w,a(t),f,a(t),T,a(t),S,a(t,null,{default:p(()=>[A]),_:1}),C,a(t),I,a(t,null,{default:p(()=>[E]),_:1}),P])}var W=c(i,[["render",V]]);export{F as __pageData,W as default};

import{_ as e,r as o,c as r,a,w as t,e as n,o as l,d as p}from"./404.md.d88e6622.js";const S='{"title":"Spawning Tamed Entities","description":"","frontmatter":{"title":"Spawning Tamed Entities","category":"Tutorials","tags":["intermediate"],"mention":["Axelpvz2030"]},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"player.json","slug":"player-json"},{"level":2,"title":"pretamed_wolf.json","slug":"pretamed-wolf-json"},{"level":2,"title":"Integrating Item Projectiles (Alternate Method)","slug":"integrating-item-projectiles-alternate-method"}],"relativePath":"entities/spawning-tamed-entities.md","lastUpdated":1641092892768}',c={},u=n('',8),i=p("BP/entities/player.json"),k=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span><span class="token string">&quot;1.16.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minecraft:entity&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span><span class="token string">&quot;minecraft:player&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;wiki:spawn_tamed_wolf&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;minecraft:spawn_entity&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;entities&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                        <span class="token property">&quot;min_wait_time&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;max_wait_time&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;spawn_entity&quot;</span><span class="token operator">:</span><span class="token string">&quot;wiki:pretamed_wolf&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;single_use&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;num_to_spawn&quot;</span><span class="token operator">:</span><span class="token number">1</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
		<span class="token property">&quot;events&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;wiki:spawn_tamed_wolf&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token string">&quot;wiki:spawn_tamed_wolf&quot;</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="pretamed-wolf-json" tabindex="-1">pretamed_wolf.json <a class="header-anchor" href="#pretamed-wolf-json" aria-hidden="true">#</a></h2><p>Afterwards, we&#39;ll need to create a simple custom entity that will have the <code>minecraft:arrow</code> runtime identifier (other projectile runtime identifiers work as well), an empty projectile component, and a trasnfomation component to turn into a tamed wolf.</p>__VP_STATIC_END__`,3),m=p("BP/entities/pretamed_wolf.json"),b=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:pretamed_wolf&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;runtime_identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:arrow&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;minecraft:projectile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:transformation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;into&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:wolf&lt;minecraft:on_tame&gt;&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;keep_owner&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>And now, you can spawn a tamed wolf next to the player with <code>/event entity @p wiki:spawn_tamed_wolf</code>. You can also spawn it with a <code>wiki:pretamed_wolf</code> spawn egg by setting <code>is_spawnable</code> to <code>true</code>!</p><h2 id="integrating-item-projectiles-alternate-method" tabindex="-1">Integrating Item Projectiles (Alternate Method) <a class="header-anchor" href="#integrating-item-projectiles-alternate-method" aria-hidden="true">#</a></h2><p>Introduced as one of <a href="https://wiki.bedrock.dev/items/items-16.html" target="_blank" rel="noopener noreferrer">1.16&#39;s experimental item features</a>, the <code>shoot</code> event property can be used to make projectiles that transform into tamed entities upon impact.</p>__VP_STATIC_END__`,4),d=p("BP/items/throwable_pretamed_wolf.json"),q=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span><span class="token string">&quot;1.16.100&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minecraft:item&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span><span class="token string">&quot;wiki:throwable_pretamed_wolf&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;components&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;minecraft:on_use&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;on_use&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span><span class="token string">&quot;wiki:on_use&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;events&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;wiki:on_use&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;shoot&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;projectile&quot;</span><span class="token operator">:</span><span class="token string">&quot;wiki:pretamed_wolf&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>We&#39;ll also need to make some adjustment to our custom projectile entity so that it doesn&#39;t transform right as it spawns.</p>__VP_STATIC_END__`,2),_=p("BP/entities/pretamed_wolf.json"),y=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;minecraft:entity&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span><span class="token string">&quot;wiki:pretamed_wolf&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;runtime_identifier&quot;</span><span class="token operator">:</span><span class="token string">&quot;minecraft:arrow&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;wiki:transform_to_entity&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;minecraft:transformation&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;into&quot;</span><span class="token operator">:</span><span class="token string">&quot;minecraft:wolf&lt;minecraft:on_tame&gt;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;keep_owner&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;components&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;minecraft:projectile&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;on_hit&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;impact_damage&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                        <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span><span class="token number">0</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;stick_in_ground&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                        
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;definition_event&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                        <span class="token property">&quot;event_trigger&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                            <span class="token property">&quot;event&quot;</span><span class="token operator">:</span><span class="token string">&quot;wiki:on_hit&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;events&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;wiki:on_hit&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token string">&quot;wiki:transform_to_entity&quot;</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>Special thanks to <a href="https://twitter.com/Zarkmend_ZAN" target="_blank" rel="noopener noreferrer">Zarkmend ZAN</a> for figuring this out \u{1F603}</p>__VP_STATIC_END__`,2);function w(f,h,g,v,T,j){const s=o("CodeHeader");return l(),r("div",null,[u,a(s,null,{default:t(()=>[i]),_:1}),k,a(s,null,{default:t(()=>[m]),_:1}),b,a(s,null,{default:t(()=>[d]),_:1}),q,a(s,null,{default:t(()=>[_]),_:1}),y])}var P=e(c,[["render",w]]);export{S as __pageData,P as default};

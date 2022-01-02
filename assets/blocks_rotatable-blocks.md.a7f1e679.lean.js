import{_ as o,r as e,c,a,w as t,e as n,o as r,d as p}from"./404.md.374d6fdd.js";const D='{"title":"Rotatable Blocks","description":"","frontmatter":{"title":"Rotatable Blocks","category":"Tutorials","tags":["experimental"]},"headers":[{"level":3,"title":"First Steps","slug":"first-steps"},{"level":3,"title":"The Model","slug":"the-model"},{"level":3,"title":"Permutations","slug":"permutations"},{"level":3,"title":"Events","slug":"events"},{"level":3,"title":"The Block Code","slug":"the-block-code"},{"level":3,"title":"Log Rotation","slug":"log-rotation"},{"level":3,"title":"Premutations","slug":"premutations"},{"level":3,"title":"Component","slug":"component"},{"level":3,"title":"Event","slug":"event"},{"level":3,"title":"Block Property","slug":"block-property"},{"level":3,"title":"Block Code","slug":"block-code"}],"relativePath":"blocks/rotatable-blocks.md","lastUpdated":1641147239258}',l={},u=n('',7),i=p("BP/blocks/my_block.json#description"),k=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;permutations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.block_property(&#39;wiki:rotation&#39;) == 2&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;minecraft:rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.block_property(&#39;wiki:rotation&#39;) == 3&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;minecraft:rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.block_property(&#39;wiki:rotation&#39;) == 4&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;minecraft:rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.block_property(&#39;wiki:rotation&#39;) == 5&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;minecraft:rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">270</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><p>In order to make the block rotate the way the player is facing, we have to use some simple molang to query which way the player is facing.</p>__VP_STATIC_END__`,3),b=p("BP/blocks/my_block.json#description"),m=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;events&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;wiki:set_rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;set_block_property&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;wiki:rotation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;(query.cardinal_facing_2d)&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>This event is called upon by using the <code>minecraft:on_player_placing</code> component.</p>__VP_STATIC_END__`,2),q=p("BP/blocks/my_block.json#components"),_=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:on_player_placing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:set_rotation&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="the-block-code" tabindex="-1">The Block Code <a class="header-anchor" href="#the-block-code" aria-hidden="true">#</a></h3>__VP_STATIC_END__`,2),d=p("BP/blocks/my_block.json"),y=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.100&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:cabinet&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;wiki:rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;events&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;wiki:set_rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;set_block_property&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;wiki:rotation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;(query.cardinal_facing_2d)&quot;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;minecraft:material_instances&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cabinet&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;render_method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alpha_test&quot;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:pick_collision&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;origin&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">-8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">-8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:entity_collision&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;origin&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">-8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">-8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:geometry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geometry.cabinet&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:block_light_absorption&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:destroy_time&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:on_player_placing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:set_rotation&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;permutations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.block_property(&#39;wiki:rotation&#39;) == 2&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;minecraft:rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.block_property(&#39;wiki:rotation&#39;) == 3&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;minecraft:rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.block_property(&#39;wiki:rotation&#39;) == 4&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;minecraft:rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.block_property(&#39;wiki:rotation&#39;) == 5&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;minecraft:rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">270</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><h3 id="log-rotation" tabindex="-1">Log Rotation <a class="header-anchor" href="#log-rotation" aria-hidden="true">#</a></h3><p>Block Rotation identical to how vanilla logs rotate.</p><h3 id="premutations" tabindex="-1">Premutations <a class="header-anchor" href="#premutations" aria-hidden="true">#</a></h3>__VP_STATIC_END__`,4),h=p("BP/blocks/my_block.json#minecraft:block"),g=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;permutations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
	<span class="token punctuation">{</span>
		<span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.block_property(&#39;wiki:block_rotation&#39;) == 0&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;minecraft:rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token number">0</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		<span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.block_property(&#39;wiki:block_rotation&#39;) == 1&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;minecraft:rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token number">90</span><span class="token punctuation">,</span>
				<span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token number">0</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		<span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.block_property(&#39;wiki:block_rotation&#39;) == 2&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;minecraft:rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token number">90</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="component" tabindex="-1">Component <a class="header-anchor" href="#component" aria-hidden="true">#</a></h3><p>The component <code>minecraft:on_player_placing</code> triggers the event.</p>__VP_STATIC_END__`,3),f=p("BP/blocks/my_block.json#components"),v=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:on_player_placing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:update_rotation&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="event" tabindex="-1">Event <a class="header-anchor" href="#event" aria-hidden="true">#</a></h3><p>This event is called upon by using the <code>minecraft:on_player_placing</code> component.</p>__VP_STATIC_END__`,3),T=p("BP/blocks/my_block.json#events"),w=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;wiki:update_rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;set_block_property&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;wiki:block_rotation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;math.floor(query.block_face/2)&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="block-property" tabindex="-1">Block Property <a class="header-anchor" href="#block-property" aria-hidden="true">#</a></h3>__VP_STATIC_END__`,2),P=p("BP/blocks/my_block.json#description"),S=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;wiki:block_rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token number">2</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="block-code" tabindex="-1">Block Code <a class="header-anchor" href="#block-code" aria-hidden="true">#</a></h3>__VP_STATIC_END__`,2),C=p("BP/blocks/my_block.json#components"),A=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span><span class="token string">&quot;1.16.100&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minecraft:block&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span><span class="token string">&quot;wiki:custom_log&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;wiki:block_rotation&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token number">2</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;components&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;minecraft:destroy_time&quot;</span><span class="token operator">:</span><span class="token number">1.5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;minecraft:explosion_resistance&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;minecraft:friction&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;minecraft:block_light_absorption&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;minecraft:material_instances&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;*&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;texture&quot;</span><span class="token operator">:</span><span class="token string">&quot;log_side&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;render_method&quot;</span><span class="token operator">:</span><span class="token string">&quot;opaque&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;ambient_occlusion&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;face_dimming&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;up&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;texture&quot;</span><span class="token operator">:</span><span class="token string">&quot;log_top&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;render_method&quot;</span><span class="token operator">:</span><span class="token string">&quot;opaque&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;ambient_occlusion&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;face_dimming&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;down&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;texture&quot;</span><span class="token operator">:</span><span class="token string">&quot;log_top&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;render_method&quot;</span><span class="token operator">:</span><span class="token string">&quot;opaque&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;ambient_occlusion&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;face_dimming&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;minecraft:unit_cube&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;minecraft:on_player_placing&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;event&quot;</span><span class="token operator">:</span><span class="token string">&quot;wiki:update_rotation&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;permutations&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span><span class="token string">&quot;query.block_property(&#39;wiki:block_rotation&#39;) == 0&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;components&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;minecraft:rotation&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token number">0</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span><span class="token string">&quot;query.block_property(&#39;wiki:block_rotation&#39;) == 1&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;components&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;minecraft:rotation&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token number">90</span><span class="token punctuation">,</span>
                        <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token number">0</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span><span class="token string">&quot;query.block_property(&#39;wiki:block_rotation&#39;) == 2&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;components&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;minecraft:rotation&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token number">90</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;events&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;wiki:update_rotation&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;set_block_property&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;wiki:block_rotation&quot;</span><span class="token operator">:</span><span class="token string">&quot;math.floor(query.block_face/2)&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br></div></div>__VP_STATIC_END__`,1);function x(B,I,V,j,E,R){const s=e("CodeHeader");return r(),c("div",null,[u,a(s,null,{default:t(()=>[i]),_:1}),k,a(s,null,{default:t(()=>[b]),_:1}),m,a(s,null,{default:t(()=>[q]),_:1}),_,a(s,null,{default:t(()=>[d]),_:1}),y,a(s,null,{default:t(()=>[h]),_:1}),g,a(s,null,{default:t(()=>[f]),_:1}),v,a(s,null,{default:t(()=>[T]),_:1}),w,a(s,null,{default:t(()=>[P]),_:1}),S,a(s,null,{default:t(()=>[C]),_:1}),A])}var F=o(l,[["render",x]]);export{D as __pageData,F as default};

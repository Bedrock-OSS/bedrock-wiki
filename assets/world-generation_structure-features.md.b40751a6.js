import{_ as e,c as o,a,w as t,e as n,r,o as u,d as p}from"./404.md.4e630b9f.js";var l="/assets/images/world-generation/structure-features/house.png",c="/assets/images/world-generation/structure-features/bunker.png",i="/assets/images/world-generation/structure-features/balloon.png",k="/assets/images/world-generation/structure-features/aqua_temple.png",b="/assets/images/world-generation/structure-features/raft.png";const W='{"title":"Generating Custom Structures","description":"","frontmatter":{"title":"Generating Custom Structures","category":"Tutorials","mention":["DerpMcaddon"],"tags":["experimental"]},"headers":[{"level":2,"title":"Surface Structure","slug":"surface-structure"},{"level":3,"title":"Feature File","slug":"feature-file"},{"level":3,"title":"Feature Rule","slug":"feature-rule"},{"level":2,"title":"Underground Structure","slug":"underground-structure"},{"level":3,"title":"Feature File","slug":"feature-file-1"},{"level":3,"title":"Feature Rule","slug":"feature-rule-1"},{"level":2,"title":"Floating Feature","slug":"floating-feature"},{"level":3,"title":"Feature File","slug":"feature-file-2"},{"level":3,"title":"Feature Rule","slug":"feature-rule-2"},{"level":2,"title":"Underwater Structure","slug":"underwater-structure"},{"level":3,"title":"Feature File","slug":"feature-file-3"},{"level":3,"title":"Feature Rule","slug":"feature-rule-3"},{"level":2,"title":"Water Surface Structure","slug":"water-surface-structure"},{"level":3,"title":"Feature File","slug":"feature-file-4"},{"level":3,"title":"Feature Rule","slug":"feature-rule-4"}],"relativePath":"world-generation/structure-features.md"}',m={},q=n('<p>Structure feature is one of the most basic feature. It places exported <code>.mcstructure</code> file in the world. This tutorial will show you how to make:</p><ul><li><p>Surface structure,</p></li><li><p>Underground structure,</p></li><li><p>Floating structure,</p></li><li><p>Underwater structure, and</p></li><li><p>Water surface structure</p></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>For exporting structure on android devices, use this <a href="https://mcpedl.com/export-structure-button-android-addon/" target="_blank" rel="noopener noreferrer">resource pack</a></p></div><p>Make sure you put the <code>.mcstructure</code> file inside of <code>BP/structures/</code>!</p><h2 id="surface-structure" tabindex="-1">Surface Structure <a class="header-anchor" href="#surface-structure" aria-hidden="true">#</a></h2><h3 id="feature-file" tabindex="-1">Feature File <a class="header-anchor" href="#feature-file" aria-hidden="true">#</a></h3>',6),_=p("BP/features/house_feature.json"),d=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:structure_template_feature&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:house_feature&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;structure_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mystructure:house&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;adjustment_radius&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
		<span class="token property">&quot;facing_direction&quot;</span><span class="token operator">:</span> <span class="token string">&quot;random&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;constraints&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;grounded&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;unburied&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;block_intersection&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;block_allowlist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token string">&quot;minecraft:air&quot;</span> <span class="token comment">//The structure can only replace air</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="feature-rule" tabindex="-1">Feature Rule <a class="header-anchor" href="#feature-rule" aria-hidden="true">#</a></h3>`,2),f=p("BP/feature_rules/plains_house_feature.json"),y=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:feature_rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:plains_house_feature&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;places_feature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:house_feature&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;conditions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;placement_pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;first_pass&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;plains&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;iterations&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniform&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.heightmap(v.worldx, v.worldz)&quot;</span><span class="token punctuation">,</span> <span class="token comment">//Generates the feature on the highest block on the column</span>
			<span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniform&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;scatter_chance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;numerator&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token property">&quot;denominator&quot;</span><span class="token operator">:</span> <span class="token number">25</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p><img src="`+l+'" alt=""></p><h2 id="underground-structure" tabindex="-1">Underground Structure <a class="header-anchor" href="#underground-structure" aria-hidden="true">#</a></h2><h3 id="feature-file-1" tabindex="-1">Feature File <a class="header-anchor" href="#feature-file-1" aria-hidden="true">#</a></h3>',4),g=p("BP/features/bunker_feature.json"),h=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:structure_template_feature&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:bunker_feature&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;structure_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mystructure:bunker&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;adjustment_radius&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
		<span class="token property">&quot;facing_direction&quot;</span><span class="token operator">:</span> <span class="token string">&quot;random&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;constraints&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;block_intersection&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;block_allowlist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token string">&quot;minecraft:air&quot;</span><span class="token punctuation">,</span> <span class="token comment">//Makes the feature only replace air and stone</span>
					<span class="token string">&quot;minecraft:stone&quot;</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="feature-rule-1" tabindex="-1">Feature Rule <a class="header-anchor" href="#feature-rule-1" aria-hidden="true">#</a></h3>`,2),v=p("BP/feature_rules/overworld_bunker_feature.json"),w=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:feature_rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:overworld_bunker_feature&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;places_feature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:bunker_feature&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;conditions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;placement_pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;first_pass&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;overworld&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;iterations&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniform&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token number">11</span><span class="token punctuation">,</span>
					<span class="token number">50</span> <span class="token comment">//Makes the structure generate between y11 and y50</span>
				<span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniform&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniform&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;scatter_chance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;numerator&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token property">&quot;denominator&quot;</span><span class="token operator">:</span> <span class="token number">15</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p><img src="`+c+'" alt=""></p><h2 id="floating-feature" tabindex="-1">Floating Feature <a class="header-anchor" href="#floating-feature" aria-hidden="true">#</a></h2><h3 id="feature-file-2" tabindex="-1">Feature File <a class="header-anchor" href="#feature-file-2" aria-hidden="true">#</a></h3>',4),T=p("BP/features/balloon_feature.json"),S=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:structure_template_feature&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:balloon_feature&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;structure_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mystructure:balloon&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;adjustment_radius&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
		<span class="token property">&quot;facing_direction&quot;</span><span class="token operator">:</span> <span class="token string">&quot;random&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;constraints&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;block_intersection&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;block_allowlist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token string">&quot;minecraft:air&quot;</span> <span class="token comment">//Makes the structure only replace air</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="feature-rule-2" tabindex="-1">Feature Rule <a class="header-anchor" href="#feature-rule-2" aria-hidden="true">#</a></h3>`,2),x=p("BP/feature_rules/overworld_balloon_feature.json"),F=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:feature_rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:overworld_baloon_feature&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;places_feature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:balloon_feature&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;conditions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;placement_pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;first_pass&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;overworld&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;iterations&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniform&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">//Makes the structure generate from y100 to y200</span>
					<span class="token number">200</span>
				<span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniform&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniform&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;scatter_chance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;numerator&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token property">&quot;denominator&quot;</span><span class="token operator">:</span> <span class="token number">25</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p><img src="`+i+'" alt=""></p><h2 id="underwater-structure" tabindex="-1">Underwater Structure <a class="header-anchor" href="#underwater-structure" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>For underwater structures, make sure you waterlogged the structure, because Minecraft won&#39;t waterlog them automatically!</p></div><h3 id="feature-file-3" tabindex="-1">Feature File <a class="header-anchor" href="#feature-file-3" aria-hidden="true">#</a></h3>',5),P=p("BP/features/aqua_temple_feature.json"),A=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:structure_template_feature&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:aqua_temple_feature&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;structure_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mystructure:aqua_temple&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;adjustment_radius&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
		<span class="token property">&quot;facing_direction&quot;</span><span class="token operator">:</span> <span class="token string">&quot;random&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;constraints&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;block_intersection&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;block_allowlist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token string">&quot;minecraft:water&quot;</span> <span class="token comment">//Makes the structure only replace water</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="feature-rule-3" tabindex="-1">Feature Rule <a class="header-anchor" href="#feature-rule-3" aria-hidden="true">#</a></h3>`,2),C=p("BP/feature_rules/ocean_aqua_temple_feature.json"),j=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:feature_rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:ocean_aqua_temple_feature&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;places_feature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:aqua_temple_feature&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;conditions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;placement_pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;first_pass&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ocean&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;iterations&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniform&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.above_top_solid(v.worldx, v.worldz)&quot;</span><span class="token punctuation">,</span> <span class="token comment">//Places the feature on top of the highest solid block on the column, so it won&#39;t place it on the surface of the water</span>
			<span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniform&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;scatter_chance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;numerator&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token property">&quot;denominator&quot;</span><span class="token operator">:</span> <span class="token number">25</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p><img src="`+k+'" alt=""></p><h2 id="water-surface-structure" tabindex="-1">Water Surface Structure <a class="header-anchor" href="#water-surface-structure" aria-hidden="true">#</a></h2><h3 id="feature-file-4" tabindex="-1">Feature File <a class="header-anchor" href="#feature-file-4" aria-hidden="true">#</a></h3>',4),I=p("BP/features/raft_feature.json"),V=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:structure_template_feature&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:raft_feature&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;structure_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mystructure:raft&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;adjustment_radius&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
		<span class="token property">&quot;facing_direction&quot;</span><span class="token operator">:</span> <span class="token string">&quot;random&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;constraints&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;block_intersection&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;block_allowlist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token string">&quot;minecraft:water&quot;</span><span class="token punctuation">,</span> <span class="token comment">//Makes the structure only replace air and water</span>
					<span class="token string">&quot;minecraft:air&quot;</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="feature-rule-4" tabindex="-1">Feature Rule <a class="header-anchor" href="#feature-rule-4" aria-hidden="true">#</a></h3>`,2),R=p("BP/feature_rules/ocean_raft_feature.json"),N=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:feature_rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:ocean_raft_feature&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;places_feature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:raft_feature&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;conditions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;placement_pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;first_pass&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ocean&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;iterations&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniform&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">62</span><span class="token punctuation">,</span> <span class="token comment">//Makes the feature generate only on y62, which is Minecraft water level</span>
			<span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniform&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;scatter_chance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;numerator&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token property">&quot;denominator&quot;</span><span class="token operator">:</span> <span class="token number">25</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p><img src="`+b+'" alt=""></p>',2);function B(D,E,M,z,U,$){const s=r("CodeHeader");return u(),o("div",null,[q,a(s,null,{default:t(()=>[_]),_:1}),d,a(s,null,{default:t(()=>[f]),_:1}),y,a(s,null,{default:t(()=>[g]),_:1}),h,a(s,null,{default:t(()=>[v]),_:1}),w,a(s,null,{default:t(()=>[T]),_:1}),S,a(s,null,{default:t(()=>[x]),_:1}),F,a(s,null,{default:t(()=>[P]),_:1}),A,a(s,null,{default:t(()=>[C]),_:1}),j,a(s,null,{default:t(()=>[I]),_:1}),V,a(s,null,{default:t(()=>[R]),_:1}),N])}var H=e(m,[["render",B]]);export{W as __pageData,H as default};

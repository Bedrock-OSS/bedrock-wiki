import{_ as p,r as o,c as r,a,w as t,e as n,o as l,d as e}from"./404.md.ca7c1a7f.js";const C='{"title":"Dummy Entities","description":"","frontmatter":{"title":"Dummy Entities","tags":["beginner"]},"headers":[{"level":2,"title":"Using Dummies","slug":"using-dummies"},{"level":2,"title":"Creating Dummies","slug":"creating-dummies"},{"level":3,"title":"Behavior Entity","slug":"behavior-entity"},{"level":3,"title":"Resource Entity","slug":"resource-entity"},{"level":3,"title":"Geometry","slug":"geometry"},{"level":3,"title":"Render Controller (Optional)","slug":"render-controller-optional"},{"level":3,"title":"Texture (Optional)","slug":"texture-optional"}],"relativePath":"entities/dummy-entities.md","lastUpdated":1638174400832}',u={},c=n('',7),i=e("BP/entities/dummy.json"),m=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:dummy&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;minecraft:custom_hit_test&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;hitboxes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token punctuation">{</span>
						<span class="token property">&quot;pivot&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
						<span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
						<span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:damage_sensor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;triggers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;deals_damage&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:pushable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;is_pushable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
				<span class="token property">&quot;is_pushable_by_piston&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:collision_box&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">0.0001</span><span class="token punctuation">,</span>
				<span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">0.0001</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h3 id="resource-entity" tabindex="-1">Resource Entity <a class="header-anchor" href="#resource-entity" aria-hidden="true">#</a></h3>__VP_STATIC_END__`,2),k=e("RP/entity/dummy.json"),b=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:client_entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:dummy&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;entity_alphatest&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geometry.dummy&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;render_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;controller.render.dummy&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/entity/dummy&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="geometry" tabindex="-1">Geometry <a class="header-anchor" href="#geometry" aria-hidden="true">#</a></h3>__VP_STATIC_END__`,2),d=e("RP/models/entity/dummy.json"),q=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.12.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:geometry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geometry.dummy&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;texture_width&quot;</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
				<span class="token property">&quot;texture_height&quot;</span><span class="token operator">:</span> <span class="token number">16</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="render-controller-optional" tabindex="-1">Render Controller (Optional) <a class="header-anchor" href="#render-controller-optional" aria-hidden="true">#</a></h3>__VP_STATIC_END__`,2),_=e("RP/render_controllers/dummy.json"),y=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;render_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;controller.render.dummy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Geometry.default&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Texture.default&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Material.default&quot;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="texture-optional" tabindex="-1">Texture (Optional) <a class="header-anchor" href="#texture-optional" aria-hidden="true">#</a></h3><p>You can either leave the texture location blank, or open the model in block-bench and create a blank texture.</p>__VP_STATIC_END__`,3);function h(g,f,v,T,x,w){const s=o("CodeHeader");return l(),r("div",null,[c,a(s,null,{default:t(()=>[i]),_:1}),m,a(s,null,{default:t(()=>[k]),_:1}),b,a(s,null,{default:t(()=>[d]),_:1}),q,a(s,null,{default:t(()=>[_]),_:1}),y])}var S=p(u,[["render",h]]);export{C as __pageData,S as default};

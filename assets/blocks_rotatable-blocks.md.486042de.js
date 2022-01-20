import{_ as e,r as o,c as r,a,w as p,e as n,o as l,d as t}from"./404.md.d072aea0.js";const A='{"title":"Rotatable Blocks","description":"","frontmatter":{"title":"Rotatable Blocks","category":"Tutorials","tags":["experimental"]},"headers":[{"level":2,"title":"First Steps","slug":"first-steps"},{"level":2,"title":"The Model","slug":"the-model"},{"level":2,"title":"JSON Part","slug":"json-part"},{"level":3,"title":"Permutations","slug":"permutations"},{"level":3,"title":"Component","slug":"component"},{"level":3,"title":"Event","slug":"event"},{"level":3,"title":"Block Property","slug":"block-property"},{"level":2,"title":"Block Code","slug":"block-code"}],"relativePath":"blocks/rotatable-blocks.md","lastUpdated":1642670701005}',c={},u=n('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This tutorial assumes you have a basic understanding of blocks and Blockbench. Ensure to check out the <a href="/blocks/blocks-intro.html">blocks guide</a> before starting this tutorial</p></div><h2 id="first-steps" tabindex="-1">First Steps <a class="header-anchor" href="#first-steps" aria-hidden="true">#</a></h2><p>Make sure you have the <code>Holiday Creator Features</code> toggle turned on. This will allow us to utilize the <code>1.16.100</code> components.</p><h2 id="the-model" tabindex="-1">The Model <a class="header-anchor" href="#the-model" aria-hidden="true">#</a></h2><p>Minecraft uses the default pivot points of [0,0,0]. This means that if your model consits of specific pivot points, your model will look detached in-game. In order to combat this, we can use the blockbench plugin called &quot;Bedrock Pivot Fix 2&quot;. This will align your elements to the default pivot point without moving your elements.</p><h2 id="json-part" tabindex="-1">JSON Part <a class="header-anchor" href="#json-part" aria-hidden="true">#</a></h2><p>Here json part of creating rotatable blocks will be discussed.</p><h3 id="permutations" tabindex="-1">Permutations <a class="header-anchor" href="#permutations" aria-hidden="true">#</a></h3><p>Rotating blocks make use of the permutations that were intoduced in 1.16.100. The each permutation contains the <code>minecraft:rotation</code> component, and when the condition is true, it will rotate the block to that direction.</p>',9),i=t("BP/blocks/my_block.json#minecraft:block"),b=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;permutations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
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
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="component" tabindex="-1">Component <a class="header-anchor" href="#component" aria-hidden="true">#</a></h3><p>The component <code>minecraft:on_player_placing</code> triggers the event.</p>`,3),k=t("BP/blocks/my_block.json#components"),m=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:on_player_placing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:update_rotation&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="event" tabindex="-1">Event <a class="header-anchor" href="#event" aria-hidden="true">#</a></h3><p>This event is called upon by using the <code>minecraft:on_player_placing</code> component.</p>`,3),d=t("BP/blocks/my_block.json#events"),q=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;wiki:update_rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;set_block_property&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;wiki:block_rotation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;math.floor(query.block_face/2)&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="block-property" tabindex="-1">Block Property <a class="header-anchor" href="#block-property" aria-hidden="true">#</a></h3>`,2),_=t("BP/blocks/my_block.json#description"),h=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;wiki:block_rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token number">2</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="block-code" tabindex="-1">Block Code <a class="header-anchor" href="#block-code" aria-hidden="true">#</a></h2>`,2),y=t("BP/blocks/my_block.json#components"),f=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br></div></div>`,1);function g(v,T,w,P,S,C){const s=o("CodeHeader");return l(),r("div",null,[u,a(s,null,{default:p(()=>[i]),_:1}),b,a(s,null,{default:p(()=>[k]),_:1}),m,a(s,null,{default:p(()=>[d]),_:1}),q,a(s,null,{default:p(()=>[_]),_:1}),h,a(s,null,{default:p(()=>[y]),_:1}),f])}var B=e(c,[["render",g]]);export{A as __pageData,B as default};

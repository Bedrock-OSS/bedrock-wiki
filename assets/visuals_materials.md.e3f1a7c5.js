import{_ as t,c as p,a,e as n,r as e,o}from"./404.md.4e630b9f.js";const S='{"title":"Materials","description":"","frontmatter":{"title":"Materials","tags":["expert"],"category":["General"]},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Syntax and Structure","slug":"syntax-and-structure"}],"relativePath":"visuals/materials.md"}',r={},l=n('<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Materials are not for the faint of heart. Be prepared for potential crashes, content log errors, and long loading times.</p></div><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>Materials are used to specify the shaders that render the different parts of the game, along with states and settings the shaders should consider for each element. At the moment, most things in the game are hard-coded to use specific material and may not be assigned new ones. The only way to change how these elements are rendered is by editing their materials directly (potentially having unintentional effects on other parts) or creating new shaders (an old experimental feature no longer officially supported by Mojang). The only elements that allow default or custom materials to be assigned or removed are entities and particles.</p><p>If you are not prepared to go in-depth with the ins and outs, material presets can be found <a href="/documentation/materials.html">here</a>.</p><h2 id="syntax-and-structure" tabindex="-1">Syntax and Structure <a class="header-anchor" href="#syntax-and-structure" aria-hidden="true">#</a></h2><p>Most materials inherit the settings of previously defined materials, then further building off of them. This is written in the following format:</p>',6),u=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;&lt;New material ID&gt;:&lt;ID of material to use as a base&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    &lt;defines<span class="token punctuation">,</span> states<span class="token punctuation">,</span> and other settings&gt;
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Although it may look similar, do not confuse material format files in packs. There are no namespaces used in materials.</p></div><p>Some material files contain extensive branching trees of materials. For example, nearly all of the materials used by default entities are ultimately derivatives of the material <code>entity_static</code> in the entity.material file. If we look at the material used by the current villagers:</p>`,3),c=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;villager_v2_masked:entity_multitexture_masked&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;depthFunc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LessEqual&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>We can see that the material&#39;s name is <code>villager_v2_masked</code> and builds off the material named <code>entity_multitexture_masked</code>. Scrolling up in the file, we can find &quot;entity_multitexture_masked&quot; inheriting the settings from &quot;entity_alphatest&quot; and building further onto it:</p>`,2),i=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;entity_multitexture_masked:entity_alphatest&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;+defines&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;MASKED_MULTITEXTURE&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;+samplerStates&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;samplerIndex&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;textureWrap&quot;</span><span class="token operator">:</span><span class="token string">&quot;Clamp&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;samplerIndex&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;textureWrap&quot;</span><span class="token operator">:</span><span class="token string">&quot;Clamp&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>&quot;entity_alphatest&quot; can then be followed to &quot;entity_nocull&quot;</p>`,2),b=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;entity_alphatest:entity_nocull&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;+defines&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;ALPHA_TEST&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;+samplerStates&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;samplerIndex&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;textureWrap&quot;</span><span class="token operator">:</span><span class="token string">&quot;Repeat&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msaaSupport&quot;</span><span class="token operator">:</span><span class="token string">&quot;Both&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>which can be followed to plain &quot;entity&quot;</p>`,2),k=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;entity_nocull:entity&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;+states&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;DisableCulling&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>which can then finally be followed to &quot;entity_static&quot;</p>`,2),m=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;entity:entity_static&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;+defines&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;USE_OVERLAY&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msaaSupport&quot;</span><span class="token operator">:</span><span class="token string">&quot;Both&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>&quot;entity_static&quot; doesn&#39;t have a colon followed by another material, indicating that it&#39;s the bottom of this inheritance tree.</p>`,2),d=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;entity_static&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;vertexShader&quot;</span><span class="token operator">:</span><span class="token string">&quot;shaders/entity.vertex&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vrGeometryShader&quot;</span><span class="token operator">:</span><span class="token string">&quot;shaders/entity.geometry&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;fragmentShader&quot;</span><span class="token operator">:</span><span class="token string">&quot;shaders/entity.fragment&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vertexFields&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;Position&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;Normal&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;UV0&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;variants&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;skinning&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;+defines&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;USE_SKINNING&quot;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vertexFields&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;Position&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;BoneId0&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;Normal&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;UV0&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;skinning_color&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;+defines&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;USE_SKINNING&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;USE_OVERLAY&quot;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;+states&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;Blending&quot;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vertexFields&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;Position&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;BoneId0&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;Color&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;Normal&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;UV0&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msaaSupport&quot;</span><span class="token operator">:</span><span class="token string">&quot;Both&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;+samplerStates&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;samplerIndex&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;textureFilter&quot;</span><span class="token operator">:</span><span class="token string">&quot;Point&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div>`,1);function q(_,h,y,g,f,v){const s=e("CodeHeader");return o(),p("div",null,[l,a(s),u,a(s),c,a(s),i,a(s),b,a(s),k,a(s),m,a(s),d])}var A=t(r,[["render",q]]);export{S as __pageData,A as default};

import{_ as t,c as p,a as o,w as e,b as s,d as n,e as u,r as l,o as c}from"./404.md.4e630b9f.js";const y='{"title":"Block Sounds","description":"","frontmatter":{"title":"Block Sounds","category":"Documentation","mention":["MedicalJewel105"]},"headers":[],"relativePath":"blocks/block-sounds.md"}',r={},i=s("p",null,[n("Block sounds refers to the sound property in your block entry inside "),s("code",null,"blocks.json"),n(". This property is used to determine general block sounds, such as the mining sound, step on sound, breaking sound, and placement sound. You can apply sound to your block this way:")],-1),b=n("RP/blocks.json"),k=u(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token number">0</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;acacia_button&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;sound&quot;</span><span class="token operator">:</span><span class="token string">&quot;wood&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Define sound here</span>
        <span class="token property">&quot;textures&quot;</span><span class="token operator">:</span><span class="token string">&quot;acacia_planks&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>The following are valid values for the sound property:</p><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">[</span>
    <span class="token string">&quot;amethyst_block&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;amethyst_cluster&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;ancient_debris&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;anvil&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;azalea&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;azalea_leaves&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bamboo&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bamboo_sapling&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;basalt&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;big_dripleaf&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bone_block&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;calcite&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;candle&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;cave_vines&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;chain&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;cloth&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;comparator&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;copper&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;coral&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;deepslate&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;deepslate_bricks&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;dirt_with_roots&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;dripstone_block&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;frog_spawn&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;froglight&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;fungus&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;glass&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;grass&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;gravel&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;hanging_roots&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;honey_block&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;itemframe&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;ladder&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;lantern&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;large_amethyst_bud&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;lodestone&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;mangrove_roots&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;medium_amethyst_bud&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;metal&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;moss_block&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;moss_carpet&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;mud&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;mud_bricks&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;muddy_mangrove_roots&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;nether_brick&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;nether_gold_ore&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;nether_sprouts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;nether_wart&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;netherite&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;netherrack&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;nylium&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;packed_mud&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;pointed_dripstone&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;powder_snow&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;roots&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sand&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;scaffolding&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sculk&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sculk_catalyst&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sculk_sensor&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sculk_shrieker&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sculk_vein&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;shroomlight&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;slime&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;small_amethyst_bud&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;snow&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;soul_sand&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;soul_soil&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;spore_blossom&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;stem&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;stone&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sweet_berry_bush&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;tuff&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vines&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;wood&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br></div></div><p><em>Last updated for 1.19.30</em></p>`,4);function q(m,g,d,_,h,v){const a=l("CodeHeader");return c(),p("div",null,[i,o(a,null,{default:e(()=>[b]),_:1}),k])}var w=t(r,[["render",q]]);export{y as __pageData,w as default};

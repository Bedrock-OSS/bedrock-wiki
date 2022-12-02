import{_ as n,c as s,o as a,e as p}from"./404.md.f7b48380.js";const q='{"title":"Vanilla Usage Spawn Rules - Full","description":"","frontmatter":{"title":"Vanilla Usage Spawn Rules - Full","category":"Documentation","mentions":["MedicalJewel105"],"hidden":true},"headers":[{"level":2,"title":"biome_filter","slug":"biome-filter"},{"level":2,"title":"brightness_filter","slug":"brightness-filter"},{"level":2,"title":"delay_filter","slug":"delay-filter"},{"level":2,"title":"density_limit","slug":"density-limit"},{"level":2,"title":"difficulty_filter","slug":"difficulty-filter"},{"level":2,"title":"disallow_spawns_in_bubble","slug":"disallow-spawns-in-bubble"},{"level":2,"title":"distance_filter","slug":"distance-filter"},{"level":2,"title":"height_filter","slug":"height-filter"},{"level":2,"title":"herd","slug":"herd"},{"level":2,"title":"mob_event_filter","slug":"mob-event-filter"},{"level":2,"title":"permute_type","slug":"permute-type"},{"level":2,"title":"player_in_village_filter","slug":"player-in-village-filter"},{"level":2,"title":"spawn_event","slug":"spawn-event"},{"level":2,"title":"spawns_lava","slug":"spawns-lava"},{"level":2,"title":"spawns_on_block_filter","slug":"spawns-on-block-filter"},{"level":2,"title":"spawns_on_block_prevented_filter","slug":"spawns-on-block-prevented-filter"},{"level":2,"title":"spawns_on_surface","slug":"spawns-on-surface"},{"level":2,"title":"spawns_underground","slug":"spawns-underground"},{"level":2,"title":"spawns_underwater","slug":"spawns-underwater"},{"level":2,"title":"weight","slug":"weight"},{"level":2,"title":"world_age_filter","slug":"world-age-filter"}],"relativePath":"entities/vusr-full.md"}',e={},t=p(`<p>This page was created with <a href="https://github.com/Bedrock-OSS/bedrock-wiki-content-generator" target="_blank" rel="noopener noreferrer">Wiki Content Generator</a>. If there are issues, contact us on <a href="https://discord.gg/XjV87YN" target="_blank" rel="noopener noreferrer">Bedrock OSS</a> Discord server. Includes all examples. Namespace <code>minecraft</code> and some formatting has been removed to make the page load quickly. <em>Last updated for 1.19.40</em></p><h2 id="biome-filter" tabindex="-1">biome_filter <a class="header-anchor" href="#biome-filter" aria-hidden="true">#</a></h2><p>axolotl</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lush_caves&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>bat</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;animal&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>bee</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;plains&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sunflower_plains&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flower_forest&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>chicken</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;animal&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>cod</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ocean&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warm&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>cow</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;animal&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>creeper</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;monster&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>dolphin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ocean&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frozen&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>donkey</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;plains&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;meadow&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>drowned</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ocean&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;river&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dripstone_caves&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>enderman</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;monster&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nether&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spawn_endermen&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warped_forest&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;the_end&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>fox</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;taiga&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;grove&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>frog</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;any_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;swamp&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mangrove_swamp&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>ghast</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nether&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spawn_ghast&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>goat</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;any_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;snowy_slopes&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jagged_peaks&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frozen_peaks&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>hoglin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;crimson_forest&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>horse</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;plains&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;savanna&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>husk</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desert&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>llama</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;extreme_hills&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;savanna&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>magma_cube</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spawn_magma_cubes&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spawn_many_magma_cubes&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>mooshroom</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mooshroom_island&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>ocelot</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jungle&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>panda</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jungle&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bamboo&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bamboo&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>parrot</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jungle&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>phantom</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;monster&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>pig</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;animal&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>piglin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spawn_piglin&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spawn_few_piglins&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>pillager_patrol</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mooshroom_island&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nether&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;the_end&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mooshroom_island&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nether&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;the_end&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mooshroom_island&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nether&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;the_end&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>polar_bear</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frozen&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ocean&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frozen&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ocean&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>pufferfish</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ocean&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warm&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>rabbit</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;any_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;taiga&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mega&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;is_snow_covered&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desert&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;any_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flower_forest&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;grove&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;snowy_slopes&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;any_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;meadow&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>salmon</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ocean&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warm&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;river&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>sheep</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;animal&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;meadow&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>skeleton</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;any_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;monster&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frozen&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;soulsand_valley&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>slime</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;any_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;monster&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;swamp&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mangrove_swamp&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frozen&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>spider</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;monster&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>squid</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ocean&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;any_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;river&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>stray</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frozen&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ocean&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frozen&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ocean&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>strider</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nether&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>tropicalfish</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ocean&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;any_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warm&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lukewarm&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ocean&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;any_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warm&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lukewarm&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lush_caves&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lush_caves&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mangrove_swamp&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>turtle</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;beach&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warm&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>witch</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;monster&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>wolf</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;taiga&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;grove&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;forest&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mutated&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;birch&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;roofed&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mountain&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>zombie</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;monster&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>zombie_pigman</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spawn_zombified_piglin&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spawn_few_zombified_piglins&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="brightness-filter" tabindex="-1">brightness_filter <a class="header-anchor" href="#brightness-filter" aria-hidden="true">#</a></h2><p>bat</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>bee</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>chicken</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>cow</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>creeper</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>donkey</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>drowned</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>enderman</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>fox</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>goat</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>horse</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>husk</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>llama</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>mooshroom</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>ocelot</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>panda</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>parrot</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>phantom</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>pig</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>pillager_patrol</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>polar_bear</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>rabbit</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>sheep</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>skeleton</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>spider</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>stray</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>turtle</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>witch</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>wolf</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>zombie</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="delay-filter" tabindex="-1">delay_filter <a class="header-anchor" href="#delay-filter" aria-hidden="true">#</a></h2><p>pillager_patrol</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:delay_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">660</span><span class="token punctuation">,</span>
    <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:pillager_patrol_easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;spawn_chance&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:delay_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">660</span><span class="token punctuation">,</span>
    <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:pillager_patrol_normal&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;spawn_chance&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:delay_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">660</span><span class="token punctuation">,</span>
    <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:pillager_patrol_hard&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;spawn_chance&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="density-limit" tabindex="-1">density_limit <a class="header-anchor" href="#density-limit" aria-hidden="true">#</a></h2><p>axolotl</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;underground&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>bat</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>cod</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>creeper</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>dolphin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">&quot;underground&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>drowned</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>ghast</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;underground&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>phantom</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>pufferfish</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>salmon</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>squid</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>strider</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>tropicalfish</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:density_limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;surface&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="difficulty-filter" tabindex="-1">difficulty_filter <a class="header-anchor" href="#difficulty-filter" aria-hidden="true">#</a></h2><p>creeper</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>drowned</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>enderman</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>ghast</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>hoglin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;peaceful&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>husk</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>magma_cube</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>phantom</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>piglin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;peaceful&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;peaceful&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>pillager_patrol</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;normal&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>skeleton</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>slime</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>spider</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>stray</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>strider</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;peaceful&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>witch</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>zombie</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>zombie_pigman</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="disallow-spawns-in-bubble" tabindex="-1">disallow_spawns_in_bubble <a class="header-anchor" href="#disallow-spawns-in-bubble" aria-hidden="true">#</a></h2><p>axolotl</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:disallow_spawns_in_bubble&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="distance-filter" tabindex="-1">distance_filter <a class="header-anchor" href="#distance-filter" aria-hidden="true">#</a></h2><p>cod</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:distance_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">32</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>pillager_patrol</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:distance_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">48</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:distance_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">48</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:distance_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">48</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>pufferfish</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:distance_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">32</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>salmon</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:distance_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">32</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:distance_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">32</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>tropicalfish</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:distance_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">32</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:distance_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">32</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:distance_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">32</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:distance_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">32</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:distance_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">32</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="height-filter" tabindex="-1">height_filter <a class="header-anchor" href="#height-filter" aria-hidden="true">#</a></h2><p>bat</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:height_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">-63</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">63</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>cod</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:height_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">64</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>dolphin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:height_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">64</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>glow_squid</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:height_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">-64</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">30</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>pufferfish</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:height_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">64</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>salmon</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:height_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">64</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:height_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">64</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>stray</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:height_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">66</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>tropicalfish</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:height_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">64</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:height_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">64</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:height_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">64</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>turtle</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:height_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">67</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="herd" tabindex="-1">herd <a class="header-anchor" href="#herd" aria-hidden="true">#</a></h2><p>axolotl</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:entity_born&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event_skip_count&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>bat</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>bee</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>chicken</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>cod</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">7</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>cow</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>dolphin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>donkey</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>drowned</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>enderman</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>fox</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:entity_born&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event_skip_count&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:entity_born&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event_skip_count&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>frog</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>glow_squid</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>goat</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>hoglin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>horse</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:make_white&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:make_creamy&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:make_chestnut&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:make_brown&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:make_black&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:make_gray&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:make_darkbrown&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:make_white&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:make_creamy&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:make_chestnut&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:make_brown&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:make_black&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:make_gray&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:make_darkbrown&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>husk</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>llama</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>magma_cube</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>mooshroom</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">8</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>ocelot</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>panda</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>parrot</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>pig</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>piglin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>pillager_patrol</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">&quot;initial_event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:promote_to_patrol_captain&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;initial_event_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:spawn_as_patrol_follower&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event_skip_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">&quot;initial_event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:promote_to_patrol_captain&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;initial_event_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:spawn_as_patrol_follower&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event_skip_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">&quot;initial_event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:promote_to_patrol_captain&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;initial_event_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:spawn_as_patrol_follower&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event_skip_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>polar_bear</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:entity_born&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event_skip_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:entity_born&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event_skip_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>pufferfish</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>rabbit</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>salmon</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>sheep</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>skeleton</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>squid</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>stray</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>strider</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>tropicalfish</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_anenonme&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_black_tang&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_blue_dory&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_butterfly_fish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_cichlid&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_clownfish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_cc_betta&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_dog_fish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_e_red_snapper&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_goat_fish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_moorish_idol&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_ornate_butterfly&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_parrot_fish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_queen_angel_fish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_red_cichlid&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_red_lipped_benny&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_red_snapper&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_threadfin&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_tomato_clown&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_triggerfish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_yellow_tang&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_yellow_tail_parrot&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_anenonme&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_black_tang&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_blue_dory&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_butterfly_fish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_cichlid&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_clownfish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_cc_betta&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_dog_fish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_e_red_snapper&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_goat_fish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_moorish_idol&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_ornate_butterfly&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_parrot_fish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_queen_angel_fish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_red_cichlid&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_red_lipped_benny&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_red_snapper&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_threadfin&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_tomato_clown&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_triggerfish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_yellow_tang&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_yellow_tail_parrot&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_anenonme&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_black_tang&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_blue_dory&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_butterfly_fish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_cichlid&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_clownfish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_cc_betta&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_dog_fish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_e_red_snapper&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_goat_fish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_moorish_idol&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_ornate_butterfly&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_parrot_fish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_queen_angel_fish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_red_cichlid&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_red_lipped_benny&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_red_snapper&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_threadfin&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_tomato_clown&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_triggerfish&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_yellow_tang&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:become_yellow_tail_parrot&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br></div></div><p>turtle</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">6</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>wolf</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>zombie</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>zombie_pigman</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="mob-event-filter" tabindex="-1">mob_event_filter <a class="header-anchor" href="#mob-event-filter" aria-hidden="true">#</a></h2><p>pillager_patrol</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:mob_event_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:pillager_patrols_event&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:mob_event_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:pillager_patrols_event&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:mob_event_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:pillager_patrols_event&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="permute-type" tabindex="-1">permute_type <a class="header-anchor" href="#permute-type" aria-hidden="true">#</a></h2><p>pillager_patrol</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:permute_type&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token property">&quot;entity_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:pillager&lt;minecraft:spawn_as_patrol_follower&gt;&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:permute_type&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token property">&quot;entity_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:pillager&lt;minecraft:spawn_as_patrol_follower&gt;&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:permute_type&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token property">&quot;entity_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:pillager&lt;minecraft:spawn_as_patrol_follower&gt;&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>zombie</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:permute_type&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">95</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;entity_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:zombie_villager_v2&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="player-in-village-filter" tabindex="-1">player_in_village_filter <a class="header-anchor" href="#player-in-village-filter" aria-hidden="true">#</a></h2><p>pillager_patrol</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:player_in_village_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
    <span class="token property">&quot;village_border_tolerance&quot;</span><span class="token operator">:</span> <span class="token number">32</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:player_in_village_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
    <span class="token property">&quot;village_border_tolerance&quot;</span><span class="token operator">:</span> <span class="token number">32</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:player_in_village_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
    <span class="token property">&quot;village_border_tolerance&quot;</span><span class="token operator">:</span> <span class="token number">32</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="spawn-event" tabindex="-1">spawn_event <a class="header-anchor" href="#spawn-event" aria-hidden="true">#</a></h2><p>stray</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawn_event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;change_to_skeleton&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawn_event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;change_to_skeleton&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="spawns-lava" tabindex="-1">spawns_lava <a class="header-anchor" href="#spawns-lava" aria-hidden="true">#</a></h2><p>strider</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_lava&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="spawns-on-block-filter" tabindex="-1">spawns_on_block_filter <a class="header-anchor" href="#spawns-on-block-filter" aria-hidden="true">#</a></h2><p>axolotl</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:clay&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>chicken</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>cow</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>donkey</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>goat</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;minecraft:stone&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:snow&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:powder_snow&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:snow_layer&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:packed_ice&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:gravel&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>horse</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>llama</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>ocelot</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>panda</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>parrot</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>pig</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>polar_bear</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:ice&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>rabbit</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;minecraft:grass&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:snow&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:sand&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:snow_layer&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;minecraft:grass&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:snow&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:sand&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:snow_layer&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;minecraft:grass&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:snow&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:sand&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:snow_layer&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>sheep</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>turtle</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:sand&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>wolf</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;minecraft:grass&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:podzol&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:dirt&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;minecraft:grass&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:podzol&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:dirt&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="spawns-on-block-prevented-filter" tabindex="-1">spawns_on_block_prevented_filter <a class="header-anchor" href="#spawns-on-block-prevented-filter" aria-hidden="true">#</a></h2><p>hoglin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_prevented_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;minecraft:nether_wart_block&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:shroomlight&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>magma_cube</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_prevented_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;minecraft:nether_wart_block&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:shroomlight&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_prevented_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;minecraft:nether_wart_block&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:shroomlight&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>piglin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_prevented_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;minecraft:nether_wart_block&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:shroomlight&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_prevented_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;minecraft:nether_wart_block&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:shroomlight&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>skeleton</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_prevented_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;minecraft:nether_wart_block&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:shroomlight&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>zombie_pigman</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_prevented_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;minecraft:nether_wart_block&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:shroomlight&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_block_prevented_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;minecraft:nether_wart_block&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;minecraft:shroomlight&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="spawns-on-surface" tabindex="-1">spawns_on_surface <a class="header-anchor" href="#spawns-on-surface" aria-hidden="true">#</a></h2><p>bee</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>chicken</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>cod</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>cow</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>creeper</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>dolphin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>donkey</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>drowned</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>enderman</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>fox</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>frog</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>goat</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>horse</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>husk</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>llama</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>mooshroom</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>ocelot</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>panda</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>parrot</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>phantom</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>pig</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>pillager_patrol</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>polar_bear</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>pufferfish</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>rabbit</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>salmon</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>sheep</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>skeleton</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>slime</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>spider</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>squid</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>stray</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>tropicalfish</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>turtle</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>witch</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>wolf</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>zombie</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="spawns-underground" tabindex="-1">spawns_underground <a class="header-anchor" href="#spawns-underground" aria-hidden="true">#</a></h2><p>axolotl</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>bat</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>creeper</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>enderman</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>ghast</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>glow_squid</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>hoglin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>magma_cube</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>piglin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>skeleton</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>slime</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>spider</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>stray</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>strider</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>tropicalfish</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>witch</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>zombie</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>zombie_pigman</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="spawns-underwater" tabindex="-1">spawns_underwater <a class="header-anchor" href="#spawns-underwater" aria-hidden="true">#</a></h2><p>axolotl</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underwater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>cod</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underwater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>dolphin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underwater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>drowned</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underwater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underwater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underwater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>glow_squid</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underwater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>guardian</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underwater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>pufferfish</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underwater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>salmon</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underwater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underwater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>squid</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underwater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underwater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>tropicalfish</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underwater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underwater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underwater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underwater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:spawns_underwater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="weight" tabindex="-1">weight <a class="header-anchor" href="#weight" aria-hidden="true">#</a></h2><p>axolotl</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>bat</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>bee</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>chicken</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>cod</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">75</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>cow</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">8</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>creeper</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>dolphin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">7</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>donkey</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>drowned</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>enderman</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">6</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>fox</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">8</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">8</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>frog</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>ghast</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">40</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>glow_squid</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>goat</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>hoglin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>horse</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>husk</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">240</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>llama</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">8</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>magma_cube</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>mooshroom</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">8</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>ocelot</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">30</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>panda</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">40</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>parrot</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">40</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>phantom</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>pig</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>piglin</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">15</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>polar_bear</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>pufferfish</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>rabbit</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>salmon</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">26</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">16</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>sheep</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">12</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>skeleton</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">80</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>slime</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>spider</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>squid</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">8</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">8</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>stray</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">120</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">120</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>strider</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>tropicalfish</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">75</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">75</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>turtle</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">8</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>witch</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>wolf</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">8</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">8</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>zombie</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>zombie_pigman</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="world-age-filter" tabindex="-1">world_age_filter <a class="header-anchor" href="#world-age-filter" aria-hidden="true">#</a></h2><p>pillager_patrol</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:world_age_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">6000</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:world_age_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">6000</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:world_age_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">6000</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,807),o=[t];function r(l,c,u,i,b,k){return a(),s("div",null,o)}var d=n(e,[["render",r]]);export{q as __pageData,d as default};

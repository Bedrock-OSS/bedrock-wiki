import{_ as l,c,a,w as t,e as p,b as n,d as s,r as o,o as u}from"./404.md.4e630b9f.js";const H='{"title":"Throwable Items","description":"","frontmatter":{"title":"Throwable Items","category":"Tutorials","tags":["intermediate"]},"headers":[{"level":2,"title":"Stable method","slug":"stable-method"},{"level":3,"title":"The Item","slug":"the-item"},{"level":3,"title":"The Entity","slug":"the-entity"},{"level":3,"title":"The Animation Controller","slug":"the-animation-controller"},{"level":2,"title":"Experimental method","slug":"experimental-method"},{"level":3,"title":"The Item","slug":"the-item-1"},{"level":3,"title":"The Entity","slug":"the-entity-1"},{"level":2,"title":"Conclusion","slug":"conclusion"}],"relativePath":"items/throwable.md"}',i={},k=p('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This tutorial assumes you have a basic understanding of MoLang, animation controllers and entity definitions.</p></div><p>Items like the Splash Potion or the Trident are special items that can be thrown. Currently, there are two ways to accomplish something similar in your add-on, one that can be done in the stable release and one that needs the <code>Holiday Creator Features</code> experimental toggle to be enabled.</p><h2 id="stable-method" tabindex="-1">Stable method <a class="header-anchor" href="#stable-method" aria-hidden="true">#</a></h2><p>This method lets you detect the usage of an item through the <code>minecraft:food</code> component from an animation controller, and modifying the <code>player.json</code> you can then spawn an entity when that happens.</p><h3 id="the-item" tabindex="-1">The Item <a class="header-anchor" href="#the-item" aria-hidden="true">#</a></h3><p>First, you&#39;ll want to make the actual item:</p>',6),b=s("BP/items/throwable_item.item.json"),m=p(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;minecraft:item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:throwable_item&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;minecraft:max_stack_size&quot;</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
      <span class="token property">&quot;minecraft:use_duration&quot;</span><span class="token operator">:</span> <span class="token number">12000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;minecraft:food&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;can_always_eat&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>We can notice several things here:</p><ul><li><code>format_version</code> must be <code>1.16.0</code></li><li><code>minecraft:use_duration</code> should be a high number, in order to stop the eating sound to play and to prevent the player from eating the item</li><li><code>minecraft:food</code> is used to allow player to actually &quot;use&quot; the item, so we can detect it</li></ul><p>Because the format version is <code>1.16.0</code>, your item needs an RP definition too:</p>`,4),d=s("RP/items/throwable_item.item.json"),_=p(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;minecraft:item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:throwable_item&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Equipment&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;minecraft:icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;throwable_item&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="the-entity" tabindex="-1">The Entity <a class="header-anchor" href="#the-entity" aria-hidden="true">#</a></h3><p>The entity will be the actual thrown item, and it will behave like a projectile. Make sure to add snowball runtime identifier to make your projectile to actually be shoot, not spawned. You can also experiment with other projectile runtime id&#39;s.</p>`,3),h=s("BP/entities/throwable_item_entity.se.json"),q=p(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:throwable_item_entity&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;runtime_identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:snowball&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;minecraft:collision_box&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">0.25</span><span class="token punctuation">,</span>
				<span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">0.25</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:projectile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;on_hit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;grant_xp&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
						<span class="token property">&quot;minXP&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
						<span class="token property">&quot;maxXP&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token property">&quot;impact_damage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
						<span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">16</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token property">&quot;remove_on_hit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;power&quot;</span><span class="token operator">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span>
				<span class="token property">&quot;gravity&quot;</span><span class="token operator">:</span> <span class="token number">0.03</span><span class="token punctuation">,</span>
				<span class="token property">&quot;angle_offset&quot;</span><span class="token operator">:</span> <span class="token number">-20.0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;hit_sound&quot;</span><span class="token operator">:</span> <span class="token string">&quot;glass&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:physics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:pushable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;is_pushable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				<span class="token property">&quot;is_pushable_by_piston&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:conditional_bandwidth_optimization&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default_values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;max_optimized_distance&quot;</span><span class="token operator">:</span> <span class="token number">80.0</span><span class="token punctuation">,</span>
					<span class="token property">&quot;max_dropped_ticks&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
					<span class="token property">&quot;use_motion_prediction_hints&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>This entity is based on the Vanilla splash potion.</p><p>You can then customize its behavior by editing the <code>minecraft:projectile</code> component, in this case the thrown item will grant some exp and will damage any entity it will hit.</p><h3 id="the-animation-controller" tabindex="-1">The Animation Controller <a class="header-anchor" href="#the-animation-controller" aria-hidden="true">#</a></h3><p>The animation controller is responsible for detecting the usage of the item and for telling the player entity to spawn a throwable entity.</p>`,5),y=s("BP/animation_controllers/throwables.ac.json"),g=p(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;animation_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;controller.animation.player.throwables&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// The ID we will reference in the player&#39;s entity description</span>
      <span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token comment">// The &#39;name&#39; to use is the item identifier without the namespace</span>
              <span class="token property">&quot;throw_item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;q.get_equipped_item_name == &#39;throwable_item&#39; &amp;&amp; q.item_remaining_use_duration &gt; 0.0&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// Resets the player entity in order to be able to throw another item</span>
            <span class="token string">&quot;@s wiki:reset_player&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;throw_item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// Call the event in the player entity responsible of throwing the item</span>
            <span class="token string">&quot;@s wiki:throw_item&quot;</span><span class="token punctuation">,</span>
            <span class="token comment">// Remove the item from player&#39;s inventory</span>
            <span class="token string">&quot;/clear @s wiki:throwable_item -1 1&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h4 id="player-json" tabindex="-1">player.json <a class="header-anchor" href="#player-json" aria-hidden="true">#</a></h4><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Always make sure that your <code>player.json</code> file is updated to the latest version available, depending on the game version you are working on. You can do that <a href="https://bedrock.dev/packs" target="_blank" rel="noopener noreferrer">here</a>.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Do not edit/remove existing parts of the <code>player.json</code> file unless you know what you are doing, as it could (and probably will) break the game.</p></div><p>Now, you have to register the animation controller to the <code>player.json</code> file:</p>`,5),w=s("BP/entities/player.json"),f=p(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.18.20&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;minecraft:entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:player&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;animate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;throwables_controller&quot;</span> <span class="token comment">// This should exactly match the same as the one below</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;throwables_controller&quot;</span><span class="token operator">:</span> <span class="token string">&quot;controller.animation.player.throwables&quot;</span> <span class="token comment">// ID as referenced in animation controller file</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    ...
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>Then, you need to add all the events and component groups to the <code>player.json</code> file:</p>`,2),v=s("BP/entities/player.json#minecraft:entity"),T=p(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;wiki:throw_entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// Contains a component that will spawn the entity</span>
    <span class="token property">&quot;minecraft:spawn_entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;entities&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;min_wait_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_wait_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;single_use&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;spawn_entity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:throwable_item_entity&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;num_to_spawn&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;events&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;wiki:reset_player&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;remove&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;wiki:throw_entity&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;wiki:throw_item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;add&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;wiki:throw_entity&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="experimental-method" tabindex="-1">Experimental method <a class="header-anchor" href="#experimental-method" aria-hidden="true">#</a></h2><p>This method requires the <code>Holiday Creator Features</code> experimental toggle to be enabled.</p><h3 id="the-item-1" tabindex="-1">The Item <a class="header-anchor" href="#the-item-1" aria-hidden="true">#</a></h3>`,4),x=s("BP/items/throwable_item.item.json"),P=p(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.100&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minecraft:item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:throwable_item&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;minecraft:max_stack_size&quot;</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
            <span class="token property">&quot;minecraft:on_use&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;on_use&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;throw&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;minecraft:icon&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;apple&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;events&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;throw&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;shoot&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;projectile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:throwable_item_entity&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;launch_power&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;angle_offset&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;swing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;decrement_stack&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;run_command&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;playsound fire.ignite&quot;</span><span class="token punctuation">,</span>
                        <span class="token string">&quot;playsound mob.witch.throw&quot;</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>We can notice several things here:</p><ul><li><code>format_version</code> must be <code>1.16.100</code></li><li><code>minecraft:on_use</code> will call an event everytime the item is used (right-clicked)</li></ul><p>In the event:</p><ul><li><code>shoot</code> will shoot our entity</li><li><code>swing</code> will run the swing animation on the player</li><li><code>decrement_stack</code> will remove one item from the player&#39;s inventory</li><li><code>run_command</code> will execute commands when the item is shot, like playing sounds</li></ul><h3 id="the-entity-1" tabindex="-1">The Entity <a class="header-anchor" href="#the-entity-1" aria-hidden="true">#</a></h3><p>The entity file is the same as the Stable version.</p>`,7),j=s("BP/entities/throwable_item_entity.se.json"),S=n("div",{class:"language-json line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},'"format_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.16.0"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token property"},'"minecraft:entity"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"wiki:throwable_item_entity"'),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"is_spawnable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"is_summonable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"is_experimental"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token property"},'"runtime_identifier"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"minecraft:snowball"'),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token property"},'"components"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token property"},'"minecraft:collision_box"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"width"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.25"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"height"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.25"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:projectile"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"on_hit"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"grant_xp"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"minXP"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token property"},'"maxXP"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"impact_damage"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token property"},'"damage"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"remove_on_hit"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"power"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.7"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"gravity"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.03"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"angle_offset"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"-20.0"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"hit_sound"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"glass"'),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:physics"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:pushable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"is_pushable"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token property"},'"is_pushable_by_piston"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token property"},'"minecraft:conditional_bandwidth_optimization"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token property"},'"default_values"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token property"},'"max_optimized_distance"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"80.0"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"max_dropped_ticks"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token property"},'"use_motion_prediction_hints"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br")])],-1),C=n("h2",{id:"conclusion",tabindex:"-1"},[s("Conclusion "),n("a",{class:"header-anchor",href:"#conclusion","aria-hidden":"true"},"#")],-1),A=n("p",null,[s("Once you have your throwable item you can start trying several things, like playing with its power, effects, animations or combining it with an "),n("a",{href:"/entities/introduction-to-aec.html"},"AOE Cloud"),s(". The only limit is your imagination.")],-1);function I(V,E,N,R,B,D){const e=o("CodeHeader"),r=o("Spoiler");return u(),c("div",null,[k,a(e,null,{default:t(()=>[b]),_:1}),m,a(e,null,{default:t(()=>[d]),_:1}),_,a(e,null,{default:t(()=>[h]),_:1}),q,a(e,null,{default:t(()=>[y]),_:1}),g,a(e,null,{default:t(()=>[w]),_:1}),f,a(e,null,{default:t(()=>[v]),_:1}),T,a(e,null,{default:t(()=>[x]),_:1}),P,a(r,{title:"BP/entities/throwable_item_entity.se.json"},{default:t(()=>[a(e,null,{default:t(()=>[j]),_:1}),S]),_:1}),C,A])}var X=l(i,[["render",I]]);export{H as __pageData,X as default};

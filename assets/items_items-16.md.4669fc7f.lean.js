import{_ as t,r as p,c as e,a,e as n,o}from"./404.md.d1b86b31.js";const kn='{"title":"Items 1.16.100+","description":"","frontmatter":{"title":"Items 1.16.100+","category":"General","tags":["experimental"],"nav_order":2},"headers":[{"level":2,"title":"Item Events","slug":"item-events"},{"level":3,"title":"Using Events","slug":"using-events"},{"level":3,"title":"Event Functions","slug":"event-functions"},{"level":2,"title":"Behaviour Item Components","slug":"behaviour-item-components"},{"level":3,"title":"Enchantable Slots","slug":"enchantable-slots"},{"level":3,"title":"Allowed Sound Events","slug":"allowed-sound-events"},{"level":2,"title":"Item Tags","slug":"item-tags"},{"level":2,"title":"Breaking changes","slug":"breaking-changes"},{"level":2,"title":"Additional Notes","slug":"additional-notes"}],"relativePath":"items/items-16.md","lastUpdated":1643025133724}',r={},l=n('',5),c=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.100&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example:food_item&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;items&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;minecraft:use_duration&quot;</span><span class="token operator">:</span> <span class="token number">1.6</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:food&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;nutrition&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
				<span class="token property">&quot;saturation_modifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;low&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;can_always_eat&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				<span class="token property">&quot;on_consume&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on_consume&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;self&quot;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:use_animation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eat&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;events&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;on_consume&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;remove_mob_effect&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nausea&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;holder&quot;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h3 id="event-functions" tabindex="-1">Event Functions <a class="header-anchor" href="#event-functions" aria-hidden="true">#</a></h3><p>Items do, however, have a slightly different set of event functions that they use.</p><blockquote><p><code>swing</code></p></blockquote><p>Plays the item swinging animation. (As if to hit.)</p>__VP_STATIC_END__`,5),u=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;example:swing_event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;swing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>shoot</code></p></blockquote><p>Shoots a projectile when triggered.</p><ul><li><p>Properties:</p><ul><li><p><code>&quot;angle_offset&quot;</code> - Does nothing. (Broken)</p></li><li><p><code>&quot;launch_power&quot;</code> - The launch power to be multiplied over the base power of the projectile entity. Accepts MoLang values.</p></li><li><p><code>&quot;projectile&quot;</code> - Takes an identifier of an entity - any entity, not just ones projectile - to use as an entity to &#39;shoot&#39;.</p></li></ul></li></ul>__VP_STATIC_END__`,4),i=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;example:shoot_event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;shoot&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;projectile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:snowball&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;launch_power&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
			<span class="token property">&quot;angle_offset&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p><code>damage</code></p></blockquote><p>Applies a damage to a specified target.</p><ul><li><p>Properties:</p><ul><li><p><code>&quot;type&quot;</code> - The type of damage to administer to the target. Standard entity damage types apply, with contextual exceptions.</p></li><li><p><code>&quot;target&quot;</code> - The target which receives the damage.</p></li><li><p><code>&quot;amount&quot;</code> - Amount of damage points to apply.</p></li></ul></li></ul>__VP_STATIC_END__`,4),b=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;example:damage_event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;magic&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p><code>decrement_stack</code></p></blockquote><p>Decrements the stack by one.</p><ul><li><p>Properties:</p><ul><li><code>&quot;ignore_game_mode&quot;</code> - When <code>false</code> (as is set by default) will not decrement in Creative gamemode.</li></ul></li></ul>__VP_STATIC_END__`,4),k=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;example:remove_one&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;decrement_stack&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;ignore_game_mode&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p><code>add_mob_effect</code></p></blockquote><p>Adds a mob effect when triggered.</p><ul><li><p>Properties:</p><ul><li><code>&quot;ignore_game_mode&quot;</code> - When <code>false</code> (as is set by default) will not decrement in Creative gamemodes.</li></ul></li></ul>__VP_STATIC_END__`,4),m=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;example:effect_event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;add_mob_effect&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;poison&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;holder&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
			<span class="token property">&quot;amplifier&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p><code>remove_mob_effect</code></p></blockquote><p>Removes a mob effect when triggered.</p>__VP_STATIC_END__`,3),_=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;example:remove_effect_event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;remove_mob_effect&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;poison&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;holder&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p><code>transform_item</code></p></blockquote><p>Transforms the item into the item specified.</p>__VP_STATIC_END__`,3),d=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;example:transform_event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;transform_item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;transform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:apple&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p><code>teleport</code></p></blockquote><p>Teleports the target to a random location in the specified range.</p>__VP_STATIC_END__`,3),q=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;example:teleport_event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;teleport&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;holder&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;max_range&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p><code>sequence</code></p></blockquote><p>Used to sequence multiple event functions. Works just as in entities.</p>__VP_STATIC_END__`,3),g=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;example:sequence_event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;sequence&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;add_mob_effect&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;poison&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;holder&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
					<span class="token property">&quot;amplifier&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;transform_item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;transform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:apple&quot;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><blockquote><p><code>randomize</code></p></blockquote><p>Used to randomize event functions. Works just as in entities.</p>__VP_STATIC_END__`,3),T=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;example:randomize_events&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;randomize&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token property">&quot;transform_item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;transform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:apple&quot;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
				<span class="token property">&quot;add_mob_effect&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;weakness&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;holder&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
					<span class="token property">&quot;amplifier&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><blockquote><p><code>run_command</code></p></blockquote><p>Used to execute commands. Works just as in entities.</p>__VP_STATIC_END__`,3),y=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;example:execute_command_event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;run_command&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;say hi&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="behaviour-item-components" tabindex="-1">Behaviour Item Components <a class="header-anchor" href="#behaviour-item-components" aria-hidden="true">#</a></h2><p>List of all new item components, with usage examples</p><ul><li>minecraft:ignores_permission</li></ul>__VP_STATIC_END__`,4),v=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:ignores_permission&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>minecraft:mining_speed</li></ul>__VP_STATIC_END__`,2),f=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:mining_speed&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>minecraft:damage</li></ul>__VP_STATIC_END__`,2),h=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:damage&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>minecraft:can_destroy_in_creative</li></ul>__VP_STATIC_END__`,2),A=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:can_destroy_in_creative&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>minecraft:dye_powder</li></ul>__VP_STATIC_END__`,2),S=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:dye_powder&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>minecraft:mirrored_art</li></ul>__VP_STATIC_END__`,2),w=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:mirrored_art&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>minecraft:explodable</li></ul>__VP_STATIC_END__`,2),C=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:explodable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>minecraft:should_despawn</li></ul>__VP_STATIC_END__`,2),I=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:should_despawn&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>minecraft:liquid_clipped</li></ul>__VP_STATIC_END__`,2),P=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:liquid_clipped&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>minecraft:allow_off_hand</li></ul>__VP_STATIC_END__`,2),V=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:allow_off_hand&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// Disables most functionality</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>minecraft:projectile</li></ul>__VP_STATIC_END__`,2),j=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:projectile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;projectile_entity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:arrow&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;minimum_critical_power&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>minecraft:block_placer</li></ul>__VP_STATIC_END__`,2),E=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:block_placer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;block&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:grass&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;use_block_description&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>minecraft:entity_placer</li></ul>__VP_STATIC_END__`,2),N=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:entity_placer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;entity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:zombie&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;use_on&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;minecraft:grass&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;minecraft:sand&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;dispense_on&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;minecraft:stone&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;minecraft:gold_ore&quot;</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>minecraft:on_use_on</li></ul>__VP_STATIC_END__`,2),x=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:on_use_on&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;on_use_on&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example:block_event&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;block&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>minecraft:on_use</li></ul>__VP_STATIC_END__`,2),R=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:on_use&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;on_use&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example:item_event&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;self&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>minecraft:knockback_resistance</li></ul>__VP_STATIC_END__`,2),D=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:knockback_resistance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">0.4</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>minecraft:enchantable</li></ul>__VP_STATIC_END__`,2),B=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:enchantable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bow&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Can be any of the enchant slot listed below</span>
		<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="enchantable-slots" tabindex="-1">Enchantable Slots <a class="header-anchor" href="#enchantable-slots" aria-hidden="true">#</a></h3><table><thead><tr><th>Slot Name</th></tr></thead><tbody><tr><td>bow</td></tr><tr><td>armor_feet</td></tr><tr><td>armor_torso</td></tr><tr><td>armor_head</td></tr><tr><td>armor_legs</td></tr><tr><td>hoe</td></tr><tr><td>axe</td></tr><tr><td>pickaxe</td></tr><tr><td>shovel</td></tr><tr><td>sword</td></tr><tr><td>elytra</td></tr><tr><td>fishing_rod</td></tr><tr><td>flintsteel</td></tr><tr><td>shears</td></tr><tr><td>cosmetic_head</td></tr></tbody></table><ul><li>minecraft:shooter</li></ul>__VP_STATIC_END__`,4),z=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:shooter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;max_draw_duration&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">&quot;charge_on_draw&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
		<span class="token property">&quot;scale_power_by_draw_duration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;ammunition&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:arrow&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;use_offhand&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				<span class="token property">&quot;search_inventory&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				<span class="token property">&quot;use_in_creative&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>minecraft:durability</li></ul>__VP_STATIC_END__`,2),U=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:durability&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;max_durability&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
		<span class="token property">&quot;damage_chance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
			<span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>minecraft:armor</li></ul>__VP_STATIC_END__`,2),W=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>minecraft:wearable</li></ul>__VP_STATIC_END__`,2),F=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:wearable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;slot.armor.feet&quot;</span> <span class="token comment">// Can be slot listed in the &#39;/replaceitem&#39; command</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>minecraft:weapon</li></ul>__VP_STATIC_END__`,2),M=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:weapon&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;on_hurt_entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example_event&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;holder&quot;</span> <span class="token comment">// Can also be &#39;self&#39; to trigger an item event&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>minecraft:record</li></ul>__VP_STATIC_END__`,2),G=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:record&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;sound_event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cat&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Currently restricted to strings listed below</span>
		<span class="token property">&quot;comparator_signal&quot;</span><span class="token operator">:</span> <span class="token number">8</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="allowed-sound-events" tabindex="-1">Allowed Sound Events <a class="header-anchor" href="#allowed-sound-events" aria-hidden="true">#</a></h3><table><thead><tr><th>Slot Name</th></tr></thead><tbody><tr><td>11</td></tr><tr><td>13</td></tr><tr><td>cat</td></tr><tr><td>chirp</td></tr><tr><td>blocks</td></tr><tr><td>far</td></tr><tr><td>mall</td></tr><tr><td>mellohi</td></tr><tr><td>pigstep</td></tr><tr><td>stall</td></tr><tr><td>strad</td></tr><tr><td>wait</td></tr><tr><td>ward</td></tr></tbody></table><ul><li>minecraft:repairable</li></ul>__VP_STATIC_END__`,4),L=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:repairable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;repair_items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;minecraft:iron_ingot&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;minecraft:gold_ingot&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;repair_amount&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// Can also be molang expression</span>
				<span class="token property">&quot;on_repaired&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example_event&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;holder&quot;</span> <span class="token comment">// Can also be &#39;self&#39; to trigger an item event&quot;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li>minecraft:cooldown</li></ul>__VP_STATIC_END__`,2),$=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:cooldown&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ender_pearl&quot;</span><span class="token punctuation">,</span> <span class="token comment">// May be a custom string, as to disable the large, white cooldown bar on multiple cooldown items</span>
		<span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>minecraft:use_duration</li></ul>__VP_STATIC_END__`,2),H=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:use_duration&quot;</span><span class="token operator">:</span> <span class="token number">1.6</span> <span class="token comment">// Use duration in seconds of the item</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>minecraft:digger</li></ul>__VP_STATIC_END__`,2),K=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:digger&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;use_efficiency&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;destroy_speeds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.any_tag(&#39;stone&#39;, &#39;metal&#39;)&quot;</span> <span class="token comment">// Note that not all blocks have tags; listing many blocks may be necessary</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;speed&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
				<span class="token property">&quot;on_dig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on_dig&quot;</span>
                <span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li>minecraft:fertilizer</li></ul>__VP_STATIC_END__`,2),J=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:fertilizer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bonemeal&quot;</span> <span class="token comment">// Can also be &quot;rapid&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>minecraft:fuel</li></ul>__VP_STATIC_END__`,2),O=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:fuel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>minecraft:throwable</li></ul>__VP_STATIC_END__`,2),Q=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:throwable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;do_swing_animation&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;max_draw_duration&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token property">&quot;scale_power_by_draw_duration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>minecraft:icon</li></ul>__VP_STATIC_END__`,2),X=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:icon&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;frame&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Texture&#39;s array entry to use, defaults to 0</span>
		<span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tool.Kama&quot;</span> <span class="token comment">// Texture referenced in &#39;item_texture.json&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>minecraft:creative_category</li></ul>__VP_STATIC_END__`,2),Y=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:creative_category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;itemGroup.name.nature&quot;</span> <span class="token comment">// Can be any creative category</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><em>Full list of categories can be found <a href="/documentation/creative-categories.html">here</a></em></p><ul><li><p>minecraft:food</p><p><em>New Syntax</em></p></li></ul>__VP_STATIC_END__`,3),Z=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:food&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;on_consume&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example_event&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;holder&quot;</span> <span class="token comment">// Can also be &#39;self&#39; to trigger an item event</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;nutrition&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
		<span class="token property">&quot;can_always_eat&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;saturation_modifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;using_converts_to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:apple&quot;</span> <span class="token comment">// Changes the food or drink into another item when consumed. It can be changed to any item.</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>minecraft:use_animation</li></ul>__VP_STATIC_END__`,2),nn=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:use_animation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eat&quot;</span> <span class="token comment">// Adds the animation and sound when eating a food item. It can also be changed to &quot;drink&quot;.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>minecraft:render<em>offsets _New Syntax</em></li></ul>__VP_STATIC_END__`,2),sn=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:render_offsets&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;main_hand&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;first_person&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;scale&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;third_person&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;scale&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;off_hand&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;first_person&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;scale&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;third_person&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;scale&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="item-tags" tabindex="-1">Item Tags <a class="header-anchor" href="#item-tags" aria-hidden="true">#</a></h2><p>Item tags work the same as block tags and can be applied like this:</p>__VP_STATIC_END__`,3),an=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.100&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example:my_item&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;tag:example:my_tag&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>They can then be queried with:</p><ul><li><code>query.any_tag</code></li><li><code>query.all_tags</code></li><li><code>query.equipped_item_all_tags</code></li><li><code>query.equipped_item_any_tag</code></li></ul><h2 id="breaking-changes" tabindex="-1">Breaking changes <a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a></h2><p>If your item isn&#39;t showing up, these changes might have broken your item.</p><ul><li>Item behavior files now require a &quot;category&quot; to show up in the /give command and creative inventory. Example:</li></ul>__VP_STATIC_END__`,6),tn=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.100&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minecraft:item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example:item&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;items&quot;</span>     <span class="token comment">// This line is required</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;events&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li><p>RP item files are no longer used, <code>minecraft:icon</code> and all other RP components should be used in the BP item file.</p></li><li><p>Refer to the Troubleshooting Guide for more information, found <a href="#">here</a></p></li></ul><h2 id="additional-notes" tabindex="-1">Additional Notes <a class="header-anchor" href="#additional-notes" aria-hidden="true">#</a></h2><p>Niche Features</p><ul><li>Components <ul><li><code>minecraft:icon</code> - Property <code>&quot;frame&quot;</code> may take in MoLang values.</li></ul></li></ul><blockquote><p>Broken/Nonfunctional Features</p></blockquote><ul><li>Components <ul><li><code>minecraft:mining_speed</code> - Currently has no known function.</li><li><code>minecraft:dye_powder</code> - Currently has no known function.</li><li><code>minecraft:frame_count</code> - Currently has no known function.</li><li><code>minecraft:animates_in_toolbar</code> - Currently has no known function.</li><li><code>minecraft:mirrored_art</code> - Currently has no known function.</li><li><code>minecraft:requires_interact</code> - Currently has no known function.</li><li><code>minecraft:ignores_permission</code> - Currently has no known function.</li><li><code>minecraft:map</code> - Currently has no known function.</li><li><code>&quot;saddle&quot;</code> - Currently has no known function.</li><li><code>minecraft:shears</code> - Currently has no known function.</li><li><code>minecraft:bucket</code> - Currently has no known function.</li><li><code>minecraft:shooter</code> - Currently broken.</li><li><code>minecraft:digger</code> - <code>use_efficiency</code> - Parameter Currently has no known function.</li></ul></li></ul><blockquote><p>Current Limitations</p></blockquote><ul><li>Vanilla Items are hardcoded; you may not override or access them, using the new format.</li><li><code>minecraft:record</code> - May not add a custom <code>sound_event</code>.</li><li>Items aliases currently do not work.</li></ul>__VP_STATIC_END__`,9);function pn(en,on,rn,ln,cn,un){const s=p("CodeHeader");return o(),e("div",null,[l,a(s),c,a(s),u,a(s),i,a(s),b,a(s),k,a(s),m,a(s),_,a(s),d,a(s),q,a(s),g,a(s),T,a(s),y,a(s),v,a(s),f,a(s),h,a(s),A,a(s),S,a(s),w,a(s),C,a(s),I,a(s),P,a(s),V,a(s),j,a(s),E,a(s),N,a(s),x,a(s),R,a(s),D,a(s),B,a(s),z,a(s),U,a(s),W,a(s),F,a(s),M,a(s),G,a(s),L,a(s),$,a(s),H,a(s),K,a(s),J,a(s),O,a(s),Q,a(s),X,a(s),Y,a(s),Z,a(s),nn,a(s),sn,a(s),an,a(s),tn])}var mn=t(r,[["render",pn]]);export{kn as __pageData,mn as default};

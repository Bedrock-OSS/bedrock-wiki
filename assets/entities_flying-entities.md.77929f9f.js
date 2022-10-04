import{_ as e,c as o,a as s,b as t,d as p,e as a,r,o as l}from"./404.md.4e630b9f.js";const D='{"title":"Flying Entities","description":"","frontmatter":{"title":"Flying Entities","category":"Tutorials","tags":["recipe","intermediate"]},"headers":[{"level":2,"title":"Great Jump, Slow Fall","slug":"great-jump-slow-fall"},{"level":2,"title":"Controlling Through Looking","slug":"controlling-through-looking"},{"level":2,"title":"Controlling Through Jumping","slug":"controlling-through-jumping"}],"relativePath":"entities/flying-entities.md"}',u={},c=t("p",null,`Whether making a plane or a dragon, adding controllability to flying entities will probably challenge most devs who haven't dabbled around this concept. Since there is no "right" way of adding a piloting mechanic to flying entities, I'll showcase 3 main workaround ways you can use to achieve this.`,-1),i=t("h2",{id:"great-jump-slow-fall",tabindex:"-1"},[p("Great Jump, Slow Fall "),t("a",{class:"header-anchor",href:"#great-jump-slow-fall","aria-hidden":"true"},"#")],-1),b=t("p",null,`While not exactly "flying", setting the entity's jumping power high and giving it slow falling & speed effects as it falls is probably the most straightforward method.`,-1),k=t("p",null,[p("To achieve this, we will need to add the "),t("code",null,'"minecraft:horse.jump_strength"'),p(" component to our entity. Adding this will allow you to control its jumping power and disable dismounting when the player presses the jump button.")],-1),m=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:horse.jump_strength&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">7</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>We can also use <code>&quot;value&quot;</code> as an object to utilize the <strong>range bar</strong> players will see when holding down the jump button.</p>`,2),d=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:horse.jump_strength&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;range_min&quot;</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span> <span class="token property">&quot;range_max&quot;</span><span class="token operator">:</span> <span class="token number">1.2</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Now we will give it slow falling and speed as it&#39;s falling so that it doesn&#39;t instantly fall. To do this, we will make an animation controller and give it those effects when it&#39;s not on the ground as so:</p><p>(You can read a tutorial on how to use animation controllers to execute commands <a href="/animation-controllers/entity-commands.html">here</a>.)</p>`,3),q=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;controller.animation.dragon.flying&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;states&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;default&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;jumping&quot;</span><span class="token operator">:</span><span class="token string">&quot;!query.is_on_ground&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;jumping&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span><span class="token string">&quot;query.is_on_ground&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token string">&quot;/effect @s slow_falling 20000 0 true&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;/effect @s speed 20000 10 true&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;on_exit&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token string">&quot;/effect @s clear&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>We&#39;ll also need to hook it up to our entity as so:</p>`,2),_=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;description&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span><span class="token string">&quot;wiki:dragon&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;animate&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">&quot;flying&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;animations&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;flying&quot;</span><span class="token operator">:</span><span class="token string">&quot;controller.animation.dragon.flying&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Now, we should have a mechanic at least resemblant of flying. You can change the values like jump_strength and speed, but the entity will always fall using this method.</p><h2 id="controlling-through-looking" tabindex="-1">Controlling Through Looking <a class="header-anchor" href="#controlling-through-looking" aria-hidden="true">#</a></h2><p>This is probably the most popular method of piloting flying entities, and unlike the first method, this one gives players control over the vertical movement of the entity so that you don&#39;t always have to fall every time you jump, with the downside being you can&#39;t look around freely without changing the entity&#39;s vertical trajectory.</p><p>This method detects the riding player&#39;s vertical rotation and applies levitation/slow_falling effects to the entity accordingly.</p><p>There are multiple ways of achieving that, but in this tutorial, we&#39;ll be using the target selectors <code>rym</code> (minimum y-rotation) and <code>ry</code> (maximum y-rotation) in a chain of repeating command-blocks to detect the player&#39;s pitch, and depending on the range, giving our entity levitation or slowly falling.</p>`,6),h=a(`<div class="language-"><pre><code>execute @a[rxm=-90,rx=-25] ~~~ effect @e[type=wiki:dragon,r=1] levitation 1 6 true
execute @a[rxm=-25,rx=-15] ~~~ effect @e[type=wiki:dragon,r=1] levitation 1 3 true
execute @a[rxm=-15,rx=-5] ~~~ effect @e[type=wiki:dragon,r=1] levitation 1 2 true
execute @a[rxm=-5,rx=20] ~~~ effect @e[type=wiki:dragon,r=1] levitation 1 1 true
execute @a[rxm=20,rx=35] ~~~ effect @e[type=wiki:dragon,r=1] slow_falling 1 1 true
execute @a[rxm=35,rx=90] ~~~ effect @e[type=wiki:dragon,r=1] clear
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>Depending on how big your entity is and how far away the player&#39;s seat is from its pivot, you might need to change the radius <code>r</code> to a more significant value.</strong></p><p>After you run those commands in a repeating command block, you should control its vertical movement by looking up and down. or you may use a simple animation controller and link it to the entity, so it always plays the function.</p><p>It&#39;s recommended that you link this animation controller to the player.</p>`,4),g=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;animation_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;controller.animation.base&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;base&quot;</span><span class="token operator">:</span> <span class="token string">&quot;(1.0)&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;/function dragon_control&quot;</span>
                    <span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;base&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;(1.0)&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;/function dragon_control&quot;</span>
                    <span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>The entity will probably still be too slow when flying, so we&#39;ll borrow our animation controller from the first method with some changes to give the entity speed when it&#39;s flying.</p>`,2),y=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;controller.animation.dragon.flying&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;states&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;default&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;jumping_1&quot;</span><span class="token operator">:</span><span class="token string">&quot;!query.is_on_ground&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;jumping_1&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;transition_to_default&quot;</span><span class="token operator">:</span><span class="token string">&quot;query.is_on_ground&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;jumping_2&quot;</span><span class="token operator">:</span><span class="token string">&quot;true&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token string">&quot;/effect @s speed 15 10 true&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;jumping_2&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;transition_to_default&quot;</span><span class="token operator">:</span><span class="token string">&quot;query.is_on_ground&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;jumping_1&quot;</span><span class="token operator">:</span><span class="token string">&quot;true&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token string">&quot;/effect @s speed 15 10 true&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;transition_to_default&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;transition_to_default&quot;</span><span class="token operator">:</span><span class="token string">&quot;true&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token string">&quot;/effect @s clear&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><p><em>Since the entity&#39;s effects might be cleared when it&#39;s being flown, we changed the animation controller to give the entity speed every tick it&#39;s not on the ground.</em></p><p>You might also notice that the entity levitates when you go near it. We can fix this by giving the entity a tag when it&#39;s being ridden (removing it when it isn&#39;t being ridden) and only applying those effects when the entity has the tag by making and animating another animation controller and updating our commands.</p>`,3),f=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;controller.animation.dragon.test_rider&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;states&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;default&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;has_rider&quot;</span><span class="token operator">:</span><span class="token string">&quot;query.has_rider&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;has_rider&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span><span class="token string">&quot;!query.has_rider&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token string">&quot;/tag @s add has_rider&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;on_exit&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token string">&quot;/tag @s remove has_rider&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,1),v=a(`<div class="language-"><pre><code>execute @a[rxm=-90,rx=-25] ~~~ effect @e[type=wiki:dragon,r=1,tag=has_rider] levitation 1 6 true
execute @a[rxm=-25,rx=-15] ~~~ effect @e[type=wiki:dragon,r=1,tag=has_rider] levitation 1 3 true
execute @a[rxm=-15,rx=-5] ~~~ effect @e[type=wiki:dragon,r=1,tag=has_rider] levitation 1 2 true
execute @a[rxm=-5,rx=20] ~~~ effect @e[type=wiki:dragon,r=1,tag=has_rider] levitation 1 1 true
execute @a[rxm=20,rx=35] ~~~ effect @e[type=wiki:dragon,r=1,tag=has_rider] slow_falling 1 1 true
execute @a[rxm=35,rx=90] ~~~ effect @e[type=wiki:dragon,r=1,tag=has_rider] clear
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="controlling-through-jumping" tabindex="-1">Controlling Through Jumping <a class="header-anchor" href="#controlling-through-jumping" aria-hidden="true">#</a></h2><p>A third method of controlling flying entities uses the player&#39;s jump button. The entity rises when the player is holding the jump button and falls when they release their jump button.</p><p>To do this, we need an animation controller attached to the player rather than the entity itself to detect when the player uses their jump button. We also need to disable dismounting when the player presses the jump button.</p><p>First, on the entity, disable dismounting and jumping:</p>`,5),w=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:horse.jump_strength&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;minecraft:can_power_jump&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Next, we need an animation controller that causes the entity to levitate when the player uses their jump button and resets the levitation when they release their jump button.</p>`,2),T=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;controller.animation.fly_dragon&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span><span class="token string">&quot;falling&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;states&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;falling&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token string">&quot;/effect @e[type=wiki:dragon,r=1,c=1] levitation 0&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;rising&quot;</span><span class="token operator">:</span><span class="token string">&quot;query.is_jumping&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rising&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token string">&quot;/effect @e[type=wiki:dragon,r=1,c=1] levitation 100000 6 true&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;falling&quot;</span><span class="token operator">:</span><span class="token string">&quot;!query.is_jumping&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>Now, we need a copy of the player&#39;s behavior file, which we will modify slightly. You can find the player&#39;s behavior file in the vanilla behavior pack provided by Mojang (found <a href="https://aka.ms/behaviorpacktemplate" target="_blank" rel="noopener noreferrer">here</a>). Once you have copied the player&#39;s behavior file to your own behavior pack, find their <code>&quot;description&quot;</code> object and add the animation controller. We also want to ensure that the entity will only respond to the player&#39;s jump input when the player is riding it, so we can use a MoLang query in the player&#39;s behavior to only activate the animation controller when the player is riding.</p>`,2),x=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;description&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span><span class="token string">&quot;minecraft:player&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;animations&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;fly_dragon&quot;</span><span class="token operator">:</span><span class="token string">&quot;controller.animation.fly_dragon&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;animate&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;fly_dragon&quot;</span><span class="token operator">:</span><span class="token string">&quot;query.is_riding&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>The entity can now be controlled with the jump key, but there&#39;s a bug. If the player dismounts the entity while holding the jump key, it will continue rising. We can fix this with an animation controller on the entity itself that resets the levitation whenever a player dismounts it.</p>`,2),j=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;controller.animation.reset_levitation&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span><span class="token string">&quot;no_rider&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;states&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;no_rider&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;has_rider&quot;</span><span class="token operator">:</span><span class="token string">&quot;query.has_rider&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;has_rider&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;on_exit&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token string">&quot;/effect @s levitation 0&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;no_rider&quot;</span><span class="token operator">:</span><span class="token string">&quot;!query.has_rider&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,1);function S(A,C,V,I,P,N){const n=r("CodeHeader");return l(),o("div",null,[c,i,b,k,s(n),m,s(n),d,s(n),q,s(n),_,s(n),h,s(n),g,s(n),y,s(n),f,s(n),v,s(n),w,s(n),T,s(n),x,s(n),j])}var R=e(u,[["render",S]]);export{D as __pageData,R as default};

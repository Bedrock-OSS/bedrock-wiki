import{_ as l,c,a,w as t,e,b as s,d as n,r,o as u}from"./404.md.4e630b9f.js";var i="/assets/images/tutorials/custom-armor/custom_chestplate.png",m="/assets/images/tutorials/custom-armor/custom_main.png",k="/assets/images/tutorials/custom-armor/custom_legs.png",b="/assets/images/tutorials/custom-armor/armor-item-image.jpg",q="/assets/images/tutorials/custom-armor/armor-model-image.jpg",d="/assets/images/tutorials/custom-armor/custom_leggings.png",h="/assets/images/tutorials/custom-armor/custom_helmet.png",y="/assets/images/tutorials/custom-armor/custom_boots.png",g="/assets/images/tutorials/custom-armor/custom-set-image.jpg";const mn='{"title":"Custom Armor","description":"","frontmatter":{"title":"Custom Armor","category":"Tutorials","tags":["experimental"]},"headers":[{"level":2,"title":"Chest Piece","slug":"chest-piece"},{"level":2,"title":"Adding attachables and textures","slug":"adding-attachables-and-textures"},{"level":2,"title":"Leggings","slug":"leggings"},{"level":2,"title":"Helmet","slug":"helmet"},{"level":2,"title":"Boots","slug":"boots"},{"level":2,"title":"Bonus - Making Set Effects","slug":"bonus-making-set-effects"}],"relativePath":"items/custom-armor.md"}',_={},f=e('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>It is highly recommended that you look over <a href="/guide/blockbench.html">the BlockBench modelling and texturing</a> section in the beginners guides before tackling these sections.</p></div><p>Making custom armors is surprisingly easy to do, you need to do a bit of fiddling around as there are a few files that need to be added and there can be a little bit of texturing involved but you can do as much or as little as you want here.</p><h2 id="chest-piece" tabindex="-1">Chest Piece <a class="header-anchor" href="#chest-piece" aria-hidden="true">#</a></h2><p>Create a chest piece:</p>',4),w=n("BP/items/my_chest.json"),v=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.100&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:my_chest&quot;</span><span class="token punctuation">,</span>
			<span class="token comment">// Notice we give it the equipment category</span>
			<span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;equipment&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token comment">// Make sure it appears within the chestplate category</span>
			<span class="token property">&quot;minecraft:creative_category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;itemGroup.name.chestplate&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// The icon we want to use in our INVENTORY</span>
			<span class="token property">&quot;minecraft:icon&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_chest&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// We give it a name</span>
			<span class="token property">&quot;minecraft:display_name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My Custom Armor&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// We dont want it to stack</span>
			<span class="token property">&quot;minecraft:max_stack_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token comment">// We make sure it can only receive enchantments for chest pieces</span>
			<span class="token property">&quot;minecraft:enchantable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
				<span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;armor_torso&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// This tells it how much protection it should give</span>
			<span class="token property">&quot;minecraft:armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// We want it to be repairable, and what to use to repair it</span>
			<span class="token property">&quot;minecraft:repairable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;repair_items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token punctuation">{</span>
						<span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;minecraft:stick&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
						<span class="token property">&quot;repair_amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;context.other-&gt;query.remaining_durability + 0.05 * context.other-&gt;query.max_durability&quot;</span>
						<span class="token comment">// Some complicated molang; just copy it</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// Mark it as a wearable and that it goes in the chest slot</span>
			<span class="token property">&quot;minecraft:wearable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;dispensable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				<span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;slot.armor.chest&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// Provide its durability</span>
			<span class="token property">&quot;minecraft:durability&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;max_durability&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><p>At this point you could just go and add an item texture into your <code>RP/textures/item_texture.json</code> with the key <code>my_chest</code> and you are on your way. We have attached a default item texture for your armor here if you want to just follow along.</p><p><img src="`+i+'" alt=""></p>',3),T=n("Download texture here"),x=s("h2",{id:"adding-attachables-and-textures",tabindex:"-1"},[n("Adding attachables and textures "),s("a",{class:"header-anchor",href:"#adding-attachables-and-textures","aria-hidden":"true"},"#")],-1),S=s("p",null,"At this point your item would appear in game and would be wearable but it would not have any appearance. This is because we need to tell it how to handle the attachable equipment and give it a texture to show.",-1),j=s("p",null,[n("To start with you need to create an "),s("code",null,"attachables"),n(" folder in your RP (you may already have one).")],-1),A=n("RP/attachables/my_chest.json"),P=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.8.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:attachable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:my_chest&quot;</span><span class="token punctuation">,</span>
			<span class="token comment">// These 2 are default and are required</span>
			<span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;armor&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;enchanted&quot;</span><span class="token operator">:</span> <span class="token string">&quot;armor_enchanted&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token comment">// This is our CUSTOM armor texture we need to make next</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/models/armor/custom_main&quot;</span><span class="token punctuation">,</span>
				<span class="token comment">// This texture doesn&#39;t actually exist in our RP</span>
				<span class="token comment">// but it will blow up without it so leave it in</span>
				<span class="token property">&quot;enchanted&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/misc/enchanted_item_glint&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// We tell it what geometry to use for the chestplate</span>
			<span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geometry.player.armor.chestplate&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// We tell it to hide the chest layer as we will be showing our armor on top</span>
			<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;parent_setup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;variable.chest_layer_visible = 0.0;&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// We tell it what controller to use (default armor one)</span>
			<span class="token property">&quot;render_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;controller.render.armor&quot;</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>At this point we need to make sure we create a texture for our model, these live in <code>RP/textures/models/armor</code>. We however actually need 2 textures, as one is for the main armor as if it is being worn all together, and one is for the legs which when worn alone will often cover some of the boot area.</p><p>If you do not feel creative we have provided a recoloured diamond armour skin for use with this tutorial. So just <code>Save As</code> and plop them in the folder.</p><p><img src="`+m+'" alt=""></p>',4),C=n("Download texture here"),I=s("p",null,[s("img",{src:k,alt:""})],-1),B=n("Download texture here"),V=s("blockquote",null,[s("p",null,[n("In the real world you would probably want to use "),s("code",null,"BlockBench"),n(" or some photo editing program to edit the textures and ideally see how they look on a model before you add them into the addon. If you now go into the game and check what you have produced you should be able to wear your chest piece and pat yourself on the back for a job well done.")])],-1),R=s("p",null,[s("img",{src:b,alt:""}),s("img",{src:q,alt:""})],-1),W=s("h2",{id:"leggings",tabindex:"-1"},[n("Leggings "),s("a",{class:"header-anchor",href:"#leggings","aria-hidden":"true"},"#")],-1),D=s("p",null,"So while the chest piece alone is great, you probably want a whole set, so from here if you make another item json for the boots like so.",-1),N=n("BP/items/my_leggings.json"),E=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.100&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:my_leggings&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;equipment&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token comment">// We give it the leggings category this time</span>
			<span class="token property">&quot;minecraft:creative_category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;itemGroup.name.leggings&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// Give it an applicable ITEM texture</span>
			<span class="token property">&quot;minecraft:icon&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_leggings&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:display_name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My Custom Leggings&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:max_stack_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token comment">// Make sure the enchantments are for legs</span>
			<span class="token property">&quot;minecraft:enchantable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
				<span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;armor_legs&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:repairable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;repair_items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token punctuation">{</span>
						<span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;minecraft:stick&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
						<span class="token property">&quot;repair_amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;context.other-&gt;query.remaining_durability + 0.05 * context.other-&gt;query.max_durability&quot;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// Make sure the wearable slot is legs</span>
			<span class="token property">&quot;minecraft:wearable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;dispensable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				<span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;slot.armor.legs&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:durability&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;max_durability&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><p>This is great and like before you will need to add your own item texture, although here is one if you just want to continue.</p><p><img src="`+d+'" alt=""></p>',3),M=n("Download texture here"),O=s("p",null,"Once we are done here we need to create the attachables file like this:",-1),G=n("RP/attachables/my_leggings.json"),H=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.8.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:attachable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:my_leggings&quot;</span><span class="token punctuation">,</span>
			<span class="token comment">// Notice this is the same as before</span>
			<span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;armor&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;enchanted&quot;</span><span class="token operator">:</span> <span class="token string">&quot;armor_enchanted&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token comment">// Same as before</span>
				<span class="token property">&quot;enchanted&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/misc/enchanted_item_glint&quot;</span><span class="token punctuation">,</span>
				<span class="token comment">// This one is different as we are using the legging specific texture</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/models/armor/custom_legs&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// Tell it to use leggings geom</span>
			<span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geometry.humanoid.armor.leggings&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// Hide legs layer as we will be rendering over it</span>
			<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;parent_setup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;variable.leg_layer_visible = 0.0;&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// Same as before</span>
			<span class="token property">&quot;render_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;controller.render.armor&quot;</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>Given that we have already put in the textures needed we can run it and see our legs straight away.</p><h2 id="helmet" tabindex="-1">Helmet <a class="header-anchor" href="#helmet" aria-hidden="true">#</a></h2><p>This is just like the chest piece, just we change some of the categories and slots like so.</p>`,4),z=n("BP/items/my_helm.json"),Y=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.100&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:my_helm&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;equipment&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token comment">// Helmet category</span>
			<span class="token property">&quot;minecraft:creative_category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;itemGroup.name.helmet&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:icon&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_helm&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:display_name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My Custom Helmet&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:max_stack_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token comment">// Helm enchantment slot</span>
			<span class="token property">&quot;minecraft:enchantable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
				<span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;armor_head&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:repairable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;repair_items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token punctuation">{</span>
						<span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;minecraft:stick&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
						<span class="token property">&quot;repair_amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;context.other-&gt;query.remaining_durability + 0.05 * context.other-&gt;query.max_durability&quot;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// Wearable head slot</span>
			<span class="token property">&quot;minecraft:wearable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;dispensable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				<span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;slot.armor.head&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:durability&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;max_durability&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>As you can see not much has changed, we just update the categories/slots to the correct ones for helms and then we add the attachables file (here is the item texture if you need it).</p><p><img src="`+h+'" alt=""></p>',3),$=n("Download texture here"),L=n("RP/attachables/my_helm.json"),U=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.8.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:attachable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:my_helm&quot;</span><span class="token punctuation">,</span>
			<span class="token comment">// These 2 are default and are required</span>
			<span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;armor&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;enchanted&quot;</span><span class="token operator">:</span> <span class="token string">&quot;armor_enchanted&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token comment">// This is our CUSTOM armor texture we need to make next</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/models/armor/custom_main&quot;</span><span class="token punctuation">,</span>
				<span class="token comment">// This texture doesn&#39;t actually exist in our RP</span>
				<span class="token comment">// but it will blow up without it so leave it in</span>
				<span class="token property">&quot;enchanted&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/misc/enchanted_item_glint&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// We tell it what geometry to use for the helmet</span>
			<span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geometry.player.armor.helmet&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// We tell it to hide the helmet layer as we will be showing our armor on top</span>
			<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;parent_setup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;variable.chest_layer_visible = 0.0;&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// We tell it what controller to use (default armor one)</span>
			<span class="token property">&quot;render_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;controller.render.armor&quot;</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>There you go, you now have 3/4 of a complete set, we may as well go through the boots as well so you know all the categories etc.</p><h2 id="boots" tabindex="-1">Boots <a class="header-anchor" href="#boots" aria-hidden="true">#</a></h2><p>You already know the pattern so lets make the item and attachable json files.</p>`,4),F=n("BP/items/my_boots.json"),J=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.100&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:my_boots&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;equipment&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token comment">// Boots category</span>
			<span class="token property">&quot;minecraft:creative_category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;itemGroup.name.boots&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:icon&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_boots&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:display_name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My Custom Boots&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:max_stack_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token comment">// Enchantable Feet</span>
			<span class="token property">&quot;minecraft:enchantable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
				<span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;armor_feet&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:armor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;protection&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:repairable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;repair_items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token punctuation">{</span>
						<span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;minecraft:stick&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
						<span class="token property">&quot;repair_amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;context.other-&gt;query.remaining_durability + 0.05 * context.other-&gt;query.max_durability&quot;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// Feet slot</span>
			<span class="token property">&quot;minecraft:wearable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;dispensable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				<span class="token property">&quot;slot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;slot.armor.feet&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:durability&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;max_durability&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>The custom boots texture if you need it.</p><p><img src="`+y+'" alt=""></p>',3),K=n("Download texture here"),Q=n("RP/attachables/my_boots.json"),X=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.8.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:attachable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:my_boots&quot;</span><span class="token punctuation">,</span>
			<span class="token comment">// These 2 are default and are required</span>
			<span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;armor&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;enchanted&quot;</span><span class="token operator">:</span> <span class="token string">&quot;armor_enchanted&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token comment">// This is our CUSTOM armor texture we need to make next</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/models/armor/custom_main&quot;</span><span class="token punctuation">,</span>
				<span class="token comment">// This texture doesn&#39;t actually exist in our RP</span>
				<span class="token comment">// but it will blow up without it so leave it in</span>
				<span class="token property">&quot;enchanted&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/misc/enchanted_item_glint&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// We tell it what geometry to use for the boots</span>
			<span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geometry.player.armor.boots&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// We tell it to hide the boots layer as we will be showing our armor on top</span>
			<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;parent_setup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;variable.chest_layer_visible = 0.0;&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// We tell it what controller to use (default armor one)</span>
			<span class="token property">&quot;render_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;controller.render.armor&quot;</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>Thats it, you now have a whole suit of custom armor you can swagger around in, and use this as a basis to make whatever other armors you want in the game.</p><blockquote><p>It is worth noting that we have used 2 separate textures here, and you could potentially use a texture per attachable, but each new texture consumes memory so its best to use as few as possible. So this is what you should end up with, and as a bonus there is one more section on making set effects using filters, which is a bit more advanced but its a fun thing to do.</p></blockquote><p><img src="`+g+'" alt=""></p><h2 id="bonus-making-set-effects" tabindex="-1">Bonus - Making Set Effects <a class="header-anchor" href="#bonus-making-set-effects" aria-hidden="true">#</a></h2><p>This is a bit more advanced but lets say you want your custom armor to act like it&#39;s a set from an RPG game. We can add some code to check if we have the set equipped and do some great stuff with it.</p><p>Note that for effects yoy can use tick.json and functions with hasitem selector argument to avoid using player.json.</p><p>In this example we will just add a chance to teleport the attacker somewhere nearby and put a blurb on the console for flavour.</p><p>As we want this to trigger when the player is hit we need to add some logic to the <code>player.json</code> file. This is a huge file and we unfortunately need to make sure it has all the default content in there as well due to the way it will overwrite the default player components etc.</p><p>So rather than include the whole <code>player.json</code> I will just include the parts you will need to add to your <code>components</code> and <code>events</code> sections.</p><blockquote><p>If you have no idea what the <code>player.json</code> is then look in the vanilla behavior pack and look for it and just copy it over into your project. So first of all lets put in the damage sensor component (which goes in your component section) which listens for when you take damage and lets you raise an event from it.</p></blockquote>',11),Z=n("BP/entities/player.json#components"),nn=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:damage_sensor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;triggers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;on_damage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token punctuation">{</span>
						<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_equipment&quot;</span><span class="token punctuation">,</span>
						<span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;self&quot;</span><span class="token punctuation">,</span>
						<span class="token comment">// Domain is the body part in this case</span>
						<span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;head&quot;</span><span class="token punctuation">,</span>
						<span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
						<span class="token comment">// The item identifier we want to check</span>
						<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:my_helm&quot;</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span>
						<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_equipment&quot;</span><span class="token punctuation">,</span>
						<span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;self&quot;</span><span class="token punctuation">,</span>
						<span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;torso&quot;</span><span class="token punctuation">,</span>
						<span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
						<span class="token comment">// Worth noting you can omit prefix for minecraft internal items i.e stick</span>
						<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:my_chest&quot;</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span>
						<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_equipment&quot;</span><span class="token punctuation">,</span>
						<span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;self&quot;</span><span class="token punctuation">,</span>
						<span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;leg&quot;</span><span class="token punctuation">,</span>
						<span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
						<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:my_leggings&quot;</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span>
						<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_equipment&quot;</span><span class="token punctuation">,</span>
						<span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;self&quot;</span><span class="token punctuation">,</span>
						<span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;feet&quot;</span><span class="token punctuation">,</span>
						<span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
						<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:my_boots&quot;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// If all the triggers match in the filter raise the event</span>
			<span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:armor_sets.my_custom.taken_damage&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token comment">// This means if it matches the check it still applies damage</span>
		<span class="token comment">// Can be good to ignore team damage or similar scenarios</span>
		<span class="token property">&quot;deals_damage&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>As you can see from the comments, there is a lot there but really all we are doing is listening out for something then making sure we only filter the results we care about then relay on an event.</p><blockquote><p>The event can be called anything but it is often better to have it more specific, incase you end up having multiple similar events etc, also it can help finding if you have multiple sections to it, i.e I could search on &quot;armour_sets&quot; and find all events related to it. Then once you are done, in the same file we decide what we want to do with the event, which we put into our <code>events</code> section.</p></blockquote>`,3),sn=n("BP/entities/player.json#events"),an=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;wiki:armor_sets.my_custom.taken_damage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;randomize&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token comment">// We do a sequence here as we want to apply one command</span>
			<span class="token comment">// on one entity and the other on ourselves</span>
			<span class="token property">&quot;sequence&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token comment">// This will take the attacker/other because it was in context</span>
					<span class="token comment">// at time of raising the event in the damage_sensor</span>
					<span class="token property">&quot;run_command&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
						<span class="token comment">// Teleport the entity away from us</span>
						<span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spreadplayers ~~ 5 20 @s&quot;</span><span class="token punctuation">,</span>
						<span class="token comment">// Run the command on the attacker not us</span>
						<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">{</span>
					<span class="token property">&quot;run_command&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
						<span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tellraw @s{\\&quot;rawtext\\&quot;:[{\\&quot;text\\&quot;:\\&quot;\xA7aYour Armor Glows And The Enemy Vanishes\\&quot;}]}&quot;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// Dummy weighting so it happens semi frequently</span>
			<span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>Thats it, you can rejig the bits how you see fit but ultimately you have all the pieces to apply effects to armor and check for if you have the whole set applied or check for other equipment.</p><blockquote><p>You can also change the equipment checks from self to other and check if whoever is attacking you has something equipped or even check if you are attacking a sort of block/entity and do different effects based on that. We haven&#39;t touched on that directly here but there is a good enough starting point to get you on your way and let you be creative with things.</p></blockquote>`,3);function tn(en,pn,on,rn,ln,cn){const p=r("CodeHeader"),o=r("BButton");return u(),c("div",null,[f,a(p,null,{default:t(()=>[w]),_:1}),v,a(o,{link:"https://raw.githubusercontent.com/Bedrock-OSS/bedrock-wiki/wiki/docs/public/assets/images/tutorials/custom-armor/custom_chestplate.png"},{default:t(()=>[T]),_:1}),x,S,j,a(p,null,{default:t(()=>[A]),_:1}),P,a(o,{link:"https://raw.githubusercontent.com/Bedrock-OSS/bedrock-wiki/wiki/docs/public/assets/images/tutorials/custom-armor/custom_main.png"},{default:t(()=>[C]),_:1}),I,a(o,{link:"https://raw.githubusercontent.com/Bedrock-OSS/bedrock-wiki/wiki/docs/public/assets/images/tutorials/custom-armor/custom_legs.png"},{default:t(()=>[B]),_:1}),V,R,W,D,a(p,null,{default:t(()=>[N]),_:1}),E,a(o,{link:"https://raw.githubusercontent.com/Bedrock-OSS/bedrock-wiki/wiki/docs/public/assets/images/tutorials/custom-armor/custom_leggings.png"},{default:t(()=>[M]),_:1}),O,a(p,null,{default:t(()=>[G]),_:1}),H,a(p,null,{default:t(()=>[z]),_:1}),Y,a(o,{link:"https://raw.githubusercontent.com/Bedrock-OSS/bedrock-wiki/wiki/docs/public/assets/images/tutorials/custom-armor/custom_helmet.png"},{default:t(()=>[$]),_:1}),a(p,null,{default:t(()=>[L]),_:1}),U,a(p,null,{default:t(()=>[F]),_:1}),J,a(o,{link:"https://raw.githubusercontent.com/Bedrock-OSS/bedrock-wiki/wiki/docs/public/assets/images/tutorials/custom-armor/custom_boots.png"},{default:t(()=>[K]),_:1}),a(p,null,{default:t(()=>[Q]),_:1}),X,a(p,null,{default:t(()=>[Z]),_:1}),nn,a(p,null,{default:t(()=>[sn]),_:1}),an])}var kn=l(_,[["render",tn]]);export{mn as __pageData,kn as default};

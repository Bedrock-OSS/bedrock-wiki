import{_ as e,c as o,a,w as t,e as n,r as l,o as r,d as p}from"./404.md.4e630b9f.js";var u="/assets/images/tutorials/sleeping-entities/result.png";const E='{"title":"Sleeping Entities","description":"","frontmatter":{"title":"Sleeping Entities","category":"Tutorials","tags":["intermediate"],"mention":["MedicalJewel105"]},"headers":[{"level":2,"title":"Features","slug":"features"},{"level":2,"title":"Behavior Pack","slug":"behavior-pack"},{"level":3,"title":"Components","slug":"components"},{"level":3,"title":"Component Groups","slug":"component-groups"},{"level":3,"title":"Events","slug":"events"},{"level":2,"title":"Resource Pack","slug":"resource-pack"},{"level":3,"title":"Animation","slug":"animation"},{"level":3,"title":"Animation Controller","slug":"animation-controller"},{"level":2,"title":"Result","slug":"result"}],"relativePath":"entities/sleeping-entities.md"}',c={},i=n('<p>This tutorial will explain how to make entity sleep.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><ul><li>Entity sleeps during the night and wakes up at day time</li><li>Interaction with entity will wake it up and after a while it goes sleeping again</li><li>If entity is hurt, it wakes up</li></ul><h2 id="behavior-pack" tabindex="-1">Behavior Pack <a class="header-anchor" href="#behavior-pack" aria-hidden="true">#</a></h2><p>In this section behavior pack components will be discussed.</p><h3 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-hidden="true">#</a></h3><p>Let&#39;s start with some basic components that you need to add to your entity.</p>',7),k=p("BP/entities/sleeping_entity.json#components"),b=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:dweller&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dwelling_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;village&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dweller_role&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inhabitant&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;can_find_poi&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Undocumented, needed for entity to be able to sleep.</p>`,2),m=p("BP/entities/sleeping_entity.json#components"),q=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:environment_sensor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;triggers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;is_daytime&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sleep&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>This component is required for entity understand when to sleep. It runs event if it isn&#39;t day time.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You need some basic navigation components for your entity be able to move to bed.</p></div><h3 id="component-groups" tabindex="-1">Component Groups <a class="header-anchor" href="#component-groups" aria-hidden="true">#</a></h3><p>Now you need some component groups for your entity with some components.</p>`,5),_=p("BP/entities/sleeping_entity.json#component_groups"),d=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;sleeping&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;minecraft:behavior.sleep&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;goal_radius&quot;</span><span class="token operator">:</span> <span class="token number">1.5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;speed_multiplier&quot;</span><span class="token operator">:</span> <span class="token number">1.25</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sleep_collider_height&quot;</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sleep_collider_width&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sleep_y_offset&quot;</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;timeout_cooldown&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minecraft:damage_sensor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;triggers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;on_damage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wake_up&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minecraft:environment_sensor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;triggers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;is_daytime&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wake_up&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minecraft:interact&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;interactions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;on_interact&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;is_family&quot;</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;player&quot;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;woken_up&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><ul><li>minecraft:behavior.sleep</li></ul><p>Determines sleep details, priority needs to be at <code>0</code> (the biggest weight).</p><ul><li>minecraft:damage_sensor</li></ul><p>Add it if you want your entity wake up if it is being attacked.</p><ul><li>minecraft:environment_sensor</li></ul><p>Runs <code>wake_up</code> event when it is day time.</p><ul><li>minecraft:interact</li></ul><p>This makes player to be able wake up entity without hurting it.</p>`,9),y=p("BP/entities/sleeping_entity.json#component_groups"),g=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;sleep_timer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;minecraft:timer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token property">&quot;time_down_event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sleep_again&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>This component group is required because entity will sleep again after delay when woken up.</p><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><p>Here you will find all events that you need. I don&#39;t really think it needs explanation.</p>`,4),h=p("BP/entities/sleeping_entity.json#events"),v=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;sleep&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;add&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;sleeping&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;wake_up&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;remove&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;sleeping&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;woken_up&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;remove&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;sleeping&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;add&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;sleep_timer&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;sleep_again&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;add&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;sleeping&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;remove&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;sleep_timer&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="resource-pack" tabindex="-1">Resource Pack <a class="header-anchor" href="#resource-pack" aria-hidden="true">#</a></h2><p>Don&#39;t forget that you need to add sleeping animation and controller for it to your entity!</p><h3 id="animation" tabindex="-1">Animation <a class="header-anchor" href="#animation" aria-hidden="true">#</a></h3><p>Just copy/paste it.</p>`,5),f=p("RP/animations/sleeping_entity.animation.json"),T=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.8.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;animation.sleeping_entity.sleep&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;loop&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hold_on_last_frame&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;animation_length&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
			<span class="token property">&quot;bones&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
						<span class="token property">&quot;0.0&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
						<span class="token property">&quot;0.5&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">-90</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">-15</span><span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="animation-controller" tabindex="-1">Animation Controller <a class="header-anchor" href="#animation-controller" aria-hidden="true">#</a></h3><p>Again just copy/paste it if you need.</p>`,3),w=p("RP/animations_controllers/ac.sleeping_entity.sleep.json"),A=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;animation_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;controller.animation.sleeping_entity.sleep&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;sleep&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.is_sleeping&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;sleep&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;sleeping&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!query.is_sleeping&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>Note that you will need to define animation in client entity like this:</p><p><code>&quot;sleeping&quot;: &quot;animation.sleeping_entity.sleep&quot;</code></p><h2 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-hidden="true">#</a></h2><p><img src="`+u+'" alt=""></p>',5);function P(S,C,I,V,j,x){const s=l("CodeHeader");return r(),o("div",null,[i,a(s,null,{default:t(()=>[k]),_:1}),b,a(s,null,{default:t(()=>[m]),_:1}),q,a(s,null,{default:t(()=>[_]),_:1}),d,a(s,null,{default:t(()=>[y]),_:1}),g,a(s,null,{default:t(()=>[h]),_:1}),v,a(s,null,{default:t(()=>[f]),_:1}),T,a(s,null,{default:t(()=>[w]),_:1}),A])}var N=e(c,[["render",P]]);export{E as __pageData,N as default};

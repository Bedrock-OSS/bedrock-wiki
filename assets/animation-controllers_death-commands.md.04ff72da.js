import{_ as r,c as l,a as n,w as s,e as a,r as o,o as i,d as t}from"./404.md.744d5190.js";const C='{"title":"Death Commands","description":"","frontmatter":{"title":"Death Commands","tags":["recipe"]},"headers":[{"level":2,"title":"Using query.is_alive","slug":"using-query-is-alive"},{"level":2,"title":"Use on player entities","slug":"use-on-player-entities"},{"level":2,"title":"Using minecraft:on_death","slug":"using-minecraft-on-death"}],"relativePath":"animation-controllers/death-commands.md"}',c={},u=t("Learn more about Animation Controllers"),d=a('<p>I define <code>Death Effects</code> as &quot;Doing something when an Entity dies&quot;. There are a few wrong ways to achieve this that should be avoided, including:</p><ul><li>Detecting death in the entity file, adding a component, and <em>then</em> trying to detect that component in the animation controller. This is wrong because the entity will be removed from the world before the animation controller has a chance to run.</li><li>Detecting the entity death from an outside source, such as a ticking command block. This method isn&#39;t <em>strictly</em> wrong, and in some circumstances, it may even be preferred. However it is costly and easy to break.</li></ul><h2 id="using-query-is-alive" tabindex="-1">Using query.is_alive <a class="header-anchor" href="#using-query-is-alive" aria-hidden="true">#</a></h2><p>The best way to create death effects is by using the <code>is_alive</code> query.</p><p>Simply create an animation controller with a transition based on <code>is_alive</code>. The final <code>on_entry</code> will run before the entity is removed from the world, allowing you to run your commands.</p><p>Here is a sample animation controller:</p>',6),m=t("BP/animation_controllers/death.ac.json"),b=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;animation_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;controller.animation.death&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;dead&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!query.is_alive&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;dead&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/say I am dead!&quot;</span><span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="use-on-player-entities" tabindex="-1">Use on player entities <a class="header-anchor" href="#use-on-player-entities" aria-hidden="true">#</a></h2><p>In the case of player entities, an additional transition must be added to the second animation state in order to ensure the state resets between deaths:</p>`,3),k=t("BP/animation_controllers/death.ac.json"),h=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;animation_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;controller.animation.death&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;dead&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!query.is_alive&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;dead&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/say I am dead!&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.is_alive&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Requires Experimental</p></div><h2 id="using-minecraft-on-death" tabindex="-1">Using minecraft:on_death <a class="header-anchor" href="#using-minecraft-on-death" aria-hidden="true">#</a></h2><p>You can also use the <code>minecraft:on_death</code> component in your <code>entity.json</code> file in the Behavior Pack, which is a fairly easy way to accomplish a command on death.</p><p>You first add it to your components and make it run an event on self;</p><div class="language-"><pre><code>&quot;minecraft:on_death&quot; : {
          &quot;event&quot; : &quot;wiki:on_death&quot;,
          &quot;target&quot; : &quot;self&quot;
           }
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>And then, in your events section you add the event;</p><div class="language-"><pre><code>&quot;wiki:on_death&quot;: {
            &quot;run_command&quot;: {
                &quot;command&quot;: [
                    &quot;say I have died!&quot;
                ]
            }
        }
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can add scores and tags to the entity even when it is dead using this method.</p></div>`,9);function q(_,y,v,g,f,w){const p=o("BButton"),e=o("CodeHeader");return i(),l("div",null,[n(p,{color:"blue",link:"animation-controllers-intro"},{default:s(()=>[u]),_:1}),d,n(e,null,{default:s(()=>[m]),_:1}),b,n(e,null,{default:s(()=>[k]),_:1}),h])}var I=r(c,[["render",q]]);export{C as __pageData,I as default};

import{_ as r,r as a,c as l,a as t,w as p,b as s,d as n,e as c,o as i}from"./404.md.959732d2.js";const B='{"title":"Respawn Commands","description":"","frontmatter":{"title":"Respawn Commands","tags":["recipe"]},"relativePath":"animation-controllers/respawn-commands.md","lastUpdated":1639074843813}',u={},m=n("Learn more about Animation Controllers"),b=s("p",null,"This animation controller can be used to run commands, such as re-adding potion effects or giving items when the player respawns.",-1),k=s("p",null,[n("Simply add the animation controller to the "),s("code",null,"player.json"),n(", and")],-1),d=n("BP/animation_controllers/respawn.ac.json"),_=c(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;animation_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;controller.animation.death&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;initialization&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;initialization&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;has_died&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!query.is_alive&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token property">&quot;on_exit&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token string">&quot;variable.delay = 0.2 + query.life_time;&quot;</span><span class="token punctuation">,</span>
						<span class="token string">&quot;/&lt;death command or animation&gt;&quot;</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;has_died&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;on_exit&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/&lt;Respawn command or animation&gt;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;initialization&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.is_alive &amp;&amp; (query.life_time &gt;= variable.delay)&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,1);function q(y,h,g,f,v,w){const o=a("BButton"),e=a("CodeHeader");return i(),l("div",null,[t(o,{color:"blue",link:"animation-controllers-intro"},{default:p(()=>[m]),_:1}),b,k,t(e,null,{default:p(()=>[d]),_:1}),_])}var T=r(u,[["render",q]]);export{B as __pageData,T as default};

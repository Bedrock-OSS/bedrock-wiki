import{_ as o,c as t,a as e,w as p,b as n,d as s,e as r,r as l,o as c}from"./404.md.50721ce7.js";const w='{"title":"MoLang into Scoreboard","description":"","frontmatter":{"title":"MoLang into Scoreboard","mentions":["SirLich","MedicalJewel105"]},"headers":[],"relativePath":"animation-controllers/molang-into-scoreboard.md"}',u={},i=n("p",null,`From this page you'll learn how to "convert" MoLang (variable or query) into scoreboard. We will omit some details, such as adding animation to entity, setting a variable and scoreboard.`,-1),b=n("p",null,[s("Here we set value of "),n("code",null,"molang_to_score"),s(" variable to scoreboard "),n("code",null,"molang"),s(".")],-1),m=s("BP/animations/molang_into_scoreboard.json"),k=r(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
   <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span><span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;animations&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;animation.molang_into_scoreboard&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
         <span class="token property">&quot;animation_length&quot;</span><span class="token operator">:</span>&lt;last time+<span class="token number">0.1</span>&gt;<span class="token punctuation">,</span>
         <span class="token property">&quot;anim_time_update&quot;</span><span class="token operator">:</span><span class="token string">&quot;&lt;condition+0.1&gt;&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;timeline&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;0&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
               <span class="token string">&quot;/scoreboard players set @s molang 0&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;1&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
               <span class="token string">&quot;/scoreboard players set @s molang 1&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;2&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
               <span class="token string">&quot;/scoreboard players set @s molang 2&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;3&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
               <span class="token string">&quot;/scoreboard players set @s molang 3&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;4&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
               <span class="token string">&quot;/scoreboard players set @s molang 4&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            ...
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>The minus of this method is that the score doesn&#39;t go back. Remember, you can always write a simple script which will make a timeline for you.</p>`,2);function d(_,q,g,y,h,v){const a=l("CodeHeader");return c(),t("div",null,[i,b,e(a,null,{default:p(()=>[m]),_:1}),k])}var S=o(u,[["render",d]]);export{w as __pageData,S as default};

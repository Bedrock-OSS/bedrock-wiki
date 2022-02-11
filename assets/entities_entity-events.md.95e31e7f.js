import{_ as e,r as o,c as r,a as s,w as c,b as p,d as t,e as a,o as l}from"./404.md.b1194070.js";const G='{"title":"Entity Events","description":"","frontmatter":{"title":"Entity Events","category":"General","tags":["beginner"]},"headers":[{"level":2,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Adding/Removing Component Groups","slug":"adding-removing-component-groups"},{"level":3,"title":"Calling Events","slug":"calling-events"},{"level":2,"title":"Advanced Usage","slug":"advanced-usage"},{"level":3,"title":"Calling Events on Other Entities","slug":"calling-events-on-other-entities"},{"level":3,"title":"Sequence","slug":"sequence"},{"level":3,"title":"Randomize","slug":"randomize"},{"level":3,"title":"Trigger","slug":"trigger"},{"level":3,"title":"Sequence and Randomize Combination","slug":"sequence-and-randomize-combination"}],"relativePath":"entities/entity-events.md","lastUpdated":1644595471568}',u={},i=p("p",null,"Entity events are one of the fundamental building blocks of behavior alongside components and component groups. They serve as the control center for component groups and can be called from components, animations, animation controllers, and other events. This tutorial aims to cover the basics of events and their more advanced usage.",-1),b=p("h2",{id:"basic-usage",tabindex:"-1"},[t("Basic Usage "),p("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#")],-1),k=p("p",null,"This section covers the main feature of events and how to call them inside an entity.",-1),m=p("h3",{id:"adding-removing-component-groups",tabindex:"-1"},[t("Adding/Removing Component Groups "),p("a",{class:"header-anchor",href:"#adding-removing-component-groups","aria-hidden":"true"},"#")],-1),q=p("p",null,[t("The most essential and common use of events is directly adding and/or removing component groups. The following event named "),p("code",null,"wiki:ranged_attacker"),t(' adds the two component groups "attacker" and "ranged" and removes the groups "standby" and "melee":')],-1),d=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;wiki:ranged_attacker&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">&quot;attacker&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;ranged&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;remove&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">&quot;standby&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;melee&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="calling-events" tabindex="-1">Calling Events <a class="header-anchor" href="#calling-events" aria-hidden="true">#</a></h3><p>Following are examples of calling an event on an entity using a component, an animation, an animation controller and another event. Note that certain components can be used to call events on entities other than the entity within which the component exists, and this will be shown in the Advanced Usage section.</p><p>The <code>minecraft:environment_sensor</code> component is used in the zombie to call the event <code>minecraft:start_transforming</code> when the entity is underwater.</p>`,4),_=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:environment_sensor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;triggers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;is_underwater&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:start_transforming&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>This behavior-based animation is used to call the event <code>wiki:start_pouncing</code> after 10 seconds.</p>`,2),h=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;animation.entity.pounce_timer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;timeline&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;10.0&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@s wiki:start_pouncing&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;animation_length&quot;</span><span class="token operator">:</span> <span class="token number">15.0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>This behavior-based animation controller is used to call the event <code>wiki:running</code> upon transition to the state &quot;run&quot;.</p>`,2),g=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;controller.animation.entity.movement&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span><span class="token string">&quot;walk&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;states&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;walk&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;run&quot;</span><span class="token operator">:</span><span class="token string">&quot;query.is_sheared&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;run&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token string">&quot;@s wiki:running&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;walk&quot;</span><span class="token operator">:</span><span class="token string">&quot;!query.is_sheared&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>This event inside the piglin calls the event <code>spawn_baby</code> from the event <code>minecraft:entity_born</code>. This particular example does not showcase the most practical usage, but there will be better examples shown in the following section.</p>`,2),y=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:entity_born&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;trigger&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spawn_baby&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="advanced-usage" tabindex="-1">Advanced Usage <a class="header-anchor" href="#advanced-usage" aria-hidden="true">#</a></h2><p>More complex and powerful usage of entity events consists of the <code>sequence</code> and <code>randomize</code> paramaters in addition to calling events on other entities.</p><h3 id="calling-events-on-other-entities" tabindex="-1">Calling Events on Other Entities <a class="header-anchor" href="#calling-events-on-other-entities" aria-hidden="true">#</a></h3><p>Some components, such as the damage sensor, can target entities other than &quot;self&quot; when calling events. One component in particular is specifically designed to call events in other entities: <code>minecraft:behavior.send_event</code>. Examples of each are shown below.</p><p>The component <code>minecraft:damage_sensor</code> inside the pillager calls the event <code>minecraft:gain_bad_omen</code> on the player which kills it. Note how the target of the event is set to &quot;other&quot;.</p>`,6),v=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:damage_sensor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;triggers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;on_damage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_damage&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fatal&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;is_family&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;player&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:gain_bad_omen&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>The following components are known to be able to send events to the &quot;other&quot; entity:</p><ul><li><code>&quot;minecraft:damage_sensor&quot;</code></li><li><code>&quot;minecraft:interact&quot;</code></li><li><code>&quot;minecraft:nameable&quot;</code></li></ul><p>The <code>minecraft:behavior.send_event</code> component is used inside the evoker to call an event named <code>wololo</code> inside any blue sheep within its activation range.</p>`,4),f=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:behavior.send_event&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event_choices&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;min_activation_range&quot;</span><span class="token operator">:</span><span class="token number">0.0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;max_activation_range&quot;</span><span class="token operator">:</span><span class="token number">16.0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cooldown_time&quot;</span><span class="token operator">:</span><span class="token number">5.0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;cast_duration&quot;</span><span class="token operator">:</span><span class="token number">3.0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;particle_color&quot;</span><span class="token operator">:</span><span class="token string">&quot;#FFB38033&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;is_family&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span><span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;sheep&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;is_color&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span><span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;blue&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;start_sound_event&quot;</span><span class="token operator">:</span><span class="token string">&quot;cast.spell&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sequence&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;base_delay&quot;</span><span class="token operator">:</span><span class="token number">2.0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span><span class="token string">&quot;wololo&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;sound_event&quot;</span><span class="token operator">:</span><span class="token string">&quot;prepare.wololo&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>You can also call event when spawning entity. To do it, add <code>&lt;my:event_name&gt;</code> in the end of string that is in component that can summon entity. Example:</p>`,2),w=t("BP/entities/zombie.json#component_groups/minecraft:convert_to_drowned"),T=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:transformation&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;into&quot;</span><span class="token operator">:</span><span class="token string">&quot;minecraft:drowned&lt;minecraft:as_adult&gt;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;transformation_sound&quot;</span><span class="token operator">:</span><span class="token string">&quot;convert_to_drowned&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;drop_equipment&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;delay&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token number">15</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="sequence" tabindex="-1">Sequence <a class="header-anchor" href="#sequence" aria-hidden="true">#</a></h3><p>Sequence is a parameter which can be used inside of an entity event to add or remove component groups based on filters. This is a very useful tool when different component groups should be dependent on varying conditions.</p><p>The <code>minecraft:convert_to_drowned</code> event inside the zombie uses the <code>sequence</code> parameter to add a different component group based on whether or not the zombie is a baby.</p>`,4),A=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:convert_to_drowned&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;sequence&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_component&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span><span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;minecraft:is_baby&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;minecraft:convert_to_drowned&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;remove&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;minecraft:start_drowned_transformation&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_component&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;minecraft:is_baby&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;minecraft:convert_to_baby_drowned&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;remove&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;minecraft:start_drowned_transformation&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>In this particular case, it may be noted that both entries in the sequence remove the same component group. In practice, a more useful way to write this event may appear as follows:</p>`,2),S=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:convert_to_drowned&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;sequence&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;remove&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;minecraft:start_drowned_transformation&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_component&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span><span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;minecraft:is_baby&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;minecraft:convert_to_drowned&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_component&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;minecraft:is_baby&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;minecraft:convert_to_baby_drowned&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Entries in a sequence are not exclusive; if a filter in one of them passes, it does not prevent the other entries from running. In the case above, there is no filter in the first entry and so it automatically runs. This does not stop the other entries from being checked and subsequently running if valid.</p></div><h3 id="randomize" tabindex="-1">Randomize <a class="header-anchor" href="#randomize" aria-hidden="true">#</a></h3><p>Randomize is a parameter which can be used inside of an entity event to add or remove component groups based off weighted randomization. This is a very useful tool when different component groups should be added based on random chance.</p><p>The <code>minecraft:entity_spawned</code> event inside the cow uses randomize to give a 95% chance of the cow spawning as an adult and a 5% chance of spawning as a baby (component groups <code>minecraft:cow_adult</code> and <code>minecraft:cow_baby</code>).</p>`,5),C=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:entity_spawned&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;randomize&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">95</span><span class="token punctuation">,</span>
            <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;minecraft:cow_adult&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;minecraft:cow_baby&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="trigger" tabindex="-1">Trigger <a class="header-anchor" href="#trigger" aria-hidden="true">#</a></h3><p>Trigger is a parameter which can be used inside of an entity event to run other events based on filters to a chosen target.</p><p>As seen before, the event, <code>minecraft:entity_born</code>, inside the piglin calls the event <code>spawn_baby</code> using trigger.</p>`,4),I=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:entity_born&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;trigger&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spawn_baby&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>We are also able to specify filters and a target for the event, similarly to how we did in the damage sensor. This event runs when the entity is interacted with by a player. If the player has the tag <code>test</code>, then it will run the event <code>wiki:interacted</code> inside the player entity.</p>`,2),V=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;wiki:on_interact&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;trigger&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:interacted&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Combining this with the sequence parameter, this allows us to run an event in both the entity and the player.</p>`,2),P=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;wiki:on_interact&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token property">&quot;sequence&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;trigger&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:interacted&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;wiki:interacted_with&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Using <code>target</code> in the event only works if the component which calls the event allows for different targets. If the component <code>&quot;minecraft:environment_sensor&quot;</code> called the event <code>wiki:on_interact</code>, then the <code>trigger</code> parameter would have no context for the target of <code>other</code> and the event wouldn&#39;t run. However, it would add the component <code>wiki:interacted_with</code>.</p></div><h3 id="sequence-and-randomize-combination" tabindex="-1">Sequence and Randomize Combination <a class="header-anchor" href="#sequence-and-randomize-combination" aria-hidden="true">#</a></h3><p>The sequence and randomize parameters can be combined for more complex behavior inside an event. Below is an example which aims to be exhaustive in showing how these parameters can be combined and utilized.</p><p>This event is run when the entity is hit by a player or projectile. There is a 60% chance nothing will happen and a 40% chance an attack sequence will activate. This attack sequence chooses a random attack with weights determined both by the entity&#39;s current health (stronger attacks are given a higher chance when the entity is below half health) and the distance to the nearest player (ranged attacks have higher priority when the player is further away).</p>`,5),E=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;wiki:on_hit&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;randomize&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token comment">//60% chance nothing happens</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">60</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//40% chance this entry is run</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">40</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sequence&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token comment">//runs separate event required for all attacks</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;trigger&quot;</span><span class="token operator">:</span><span class="token string">&quot;attack_event&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">//runs if entity is not sheared (entity becomes sheared if under half health)</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_component&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span><span class="token string">&quot;!=&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;minecraft:is_sheared&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;sequence&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token comment">//runs if player is within 5 blocks</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;distance_to_nearest_player&quot;</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span><span class="token string">&quot;&lt;=&quot;</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token number">5.0</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;randomize&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                <span class="token punctuation">{</span>
                                    <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span>
                                    <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                            <span class="token string">&quot;explode&quot;</span>
                                        <span class="token punctuation">]</span>
                                    <span class="token punctuation">}</span>
                                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                <span class="token punctuation">{</span>
                                    <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">60</span><span class="token punctuation">,</span>
                                    <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                            <span class="token string">&quot;attack&quot;</span>
                                        <span class="token punctuation">]</span>
                                    <span class="token punctuation">}</span>
                                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                <span class="token punctuation">{</span>
                                    <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span>
                                    <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                            <span class="token string">&quot;range_attack&quot;</span>
                                        <span class="token punctuation">]</span>
                                    <span class="token punctuation">}</span>
                                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                <span class="token punctuation">{</span>
                                    <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">10</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">]</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token comment">//runs if player is farther than 5 blocks and entity still has a target</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                    <span class="token punctuation">{</span>
                                        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;distance_to_nearest_player&quot;</span><span class="token punctuation">,</span>
                                        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span><span class="token string">&quot;&gt;&quot;</span><span class="token punctuation">,</span>
                                        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token number">5.0</span>
                                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                    <span class="token punctuation">{</span>
                                        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_target&quot;</span><span class="token punctuation">,</span>
                                        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span><span class="token string">&quot;equals&quot;</span><span class="token punctuation">,</span>
                                        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
                                    <span class="token punctuation">}</span>
                                <span class="token punctuation">]</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;randomize&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                <span class="token punctuation">{</span>
                                    <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span>
                                    <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                            <span class="token string">&quot;attack&quot;</span>
                                        <span class="token punctuation">]</span>
                                    <span class="token punctuation">}</span>
                                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                <span class="token punctuation">{</span>
                                    <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">60</span><span class="token punctuation">,</span>
                                    <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                            <span class="token string">&quot;range_attack&quot;</span>
                                        <span class="token punctuation">]</span>
                                    <span class="token punctuation">}</span>
                                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                <span class="token punctuation">{</span>
                                    <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">10</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">]</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">//runs if entity is sheared (under half health)</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_component&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;minecraft:is_sheared&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;sequence&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token comment">//runs if player is within 5 blocks</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;distance_to_nearest_player&quot;</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span><span class="token string">&quot;&lt;=&quot;</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token number">5.0</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;randomize&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                <span class="token punctuation">{</span>
                                    <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span>
                                    <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                            <span class="token string">&quot;explode&quot;</span>
                                        <span class="token punctuation">]</span>
                                    <span class="token punctuation">}</span>
                                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                <span class="token punctuation">{</span>
                                    <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">60</span><span class="token punctuation">,</span>
                                    <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                            <span class="token string">&quot;strong_attack&quot;</span>
                                        <span class="token punctuation">]</span>
                                    <span class="token punctuation">}</span>
                                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                <span class="token punctuation">{</span>
                                    <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span>
                                    <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                            <span class="token string">&quot;strong_range_attack&quot;</span>
                                        <span class="token punctuation">]</span>
                                    <span class="token punctuation">}</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">]</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token comment">//runs if player is farther than 5 blocks and entity still has a target</span>
                        <span class="token punctuation">{</span>
                            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                    <span class="token punctuation">{</span>
                                        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;distance_to_nearest_player&quot;</span><span class="token punctuation">,</span>
                                        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span><span class="token string">&quot;&gt;&quot;</span><span class="token punctuation">,</span>
                                        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token number">5.0</span>
                                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                    <span class="token punctuation">{</span>
                                        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_target&quot;</span><span class="token punctuation">,</span>
                                        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span><span class="token string">&quot;equals&quot;</span><span class="token punctuation">,</span>
                                        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
                                    <span class="token punctuation">}</span>
                                <span class="token punctuation">]</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;randomize&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                <span class="token punctuation">{</span>
                                    <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">60</span><span class="token punctuation">,</span>
                                    <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                            <span class="token string">&quot;strong_range_attack&quot;</span>
                                        <span class="token punctuation">]</span>
                                    <span class="token punctuation">}</span>
                                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                <span class="token punctuation">{</span>
                                    <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">40</span><span class="token punctuation">,</span>
                                    <span class="token property">&quot;randomize&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                        <span class="token punctuation">{</span>
                                            <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span>
                                            <span class="token property">&quot;trigger&quot;</span><span class="token operator">:</span><span class="token string">&quot;rapid_fire&quot;</span>
                                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                        <span class="token punctuation">{</span>
                                            <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span><span class="token number">70</span><span class="token punctuation">,</span>
                                            <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                                <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                                    <span class="token string">&quot;strong_blast&quot;</span>
                                                <span class="token punctuation">]</span>
                                            <span class="token punctuation">}</span>
                                        <span class="token punctuation">}</span>
                                    <span class="token punctuation">]</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">]</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br></div></div>`,1);function x(z,j,N,R,D,B){const n=o("CodeHeader");return l(),r("div",null,[i,b,k,m,q,s(n),d,s(n),_,s(n),h,s(n),g,s(n),y,s(n),v,s(n),f,s(n,null,{default:c(()=>[w]),_:1}),T,s(n),A,s(n),S,s(n),C,s(n),I,s(n),V,s(n),P,s(n),E])}var $=e(u,[["render",x]]);export{G as __pageData,$ as default};

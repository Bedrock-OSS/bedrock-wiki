import{_ as r,c as l,a as s,w as t,b as e,d as a,e as o,r as i,o as d}from"./404.md.4e630b9f.js";const H='{"title":"Useful tick.json Creations","description":"","frontmatter":{"title":"Useful tick.json Creations","mentions":["MedicalJewel105","Hatchibombotar"],"category":"General"},"headers":[{"level":2,"title":"Death Detection","slug":"death-detection"},{"level":2,"title":"Looping Timer","slug":"looping-timer"},{"level":2,"title":"Hello World","slug":"hello-world"},{"level":2,"title":"First World Load","slug":"first-world-load"},{"level":2,"title":"NOT hasitem detection","slug":"not-hasitem-detection"}],"relativePath":"commands/tick_json-creations.md"}',c={},p=e("p",null,[a("On this page you can find some of the tick.json creations by our community. You can read about tick.json "),e("a",{href:"/commands/mcfunction.html#creating-tick-json"},"here")],-1),u=e("h2",{id:"death-detection",tabindex:"-1"},[a("Death Detection "),e("a",{class:"header-anchor",href:"#death-detection","aria-hidden":"true"},"#")],-1),m=e("p",null,[a("Death detection with commands that does not use "),e("code",null,"player.json")],-1),h=a("BP/functions/death_detection.mcfunction"),_=o(`<div class="language-"><pre><code>tag @a add dead
tag @e[type=player] remove dead # Removes dead tag from alive players.

execute @a[tag=dead, tag=!already_dead] ~~~ function my_function

tag @a[tag=dead, tag=!already_dead] add already_dead
tag @a[tag=!dead, tag=already_dead] remove already_dead
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>This works because @a targets all players whereas <code>@e[type=player]</code> only targets alive players. You can do whatever you want with the output command, in the above example, it runs the <code>my_function</code> function.</p><p>Example: <a href="https://github.com/Hatchibombotar/graves-addon/blob/main/Graves_BP/functions/graves/death_detection.mcfunction" target="_blank" rel="noopener noreferrer">Graves Addon by Hatchibombotar</a>.</p><h2 id="looping-timer" tabindex="-1">Looping Timer <a class="header-anchor" href="#looping-timer" aria-hidden="true">#</a></h2><p>Here you can find timer that executes function with name <code>my_function</code> on players with a 10 sec delay.</p>`,5),b=a("BP/functions/timer.mcfunction"),f=o(`<div class="language-"><pre><code># Setup
scoreboard objectives add timer dummy
# Loop
scoreboard players add @a timer 1
# Main
execute @a[scores={timer=200}] ~~~ function my_function
# Timer Update
scoreboard players set @a[scores={timer=200..}] timer 0
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Note that the order of loop and timer update is important.</p><h2 id="hello-world" tabindex="-1">Hello World <a class="header-anchor" href="#hello-world" aria-hidden="true">#</a></h2><p>This function tellraws something to every player, who joined the game for the first time. It also has a 4 seconds delay so world is fully loaded.</p>`,4),g=a("BP/functions/hello_world.mcfunction"),v=o(`<div class="language-"><pre><code># Setup
scoreboard objectives add hello_world dummy

scoreboard players set @a[tag=!hello_world] hello_world 81
tag @a add hello_world
scoreboard players add @a[scores={hello_world=!0}] hello_world -1
execute @a[scores={hello_world=1}] ~~~ tellraw @s {&quot;rawtext&quot;:[{&quot;text&quot;:&quot;Did you know that MJ105 made this Hello World function?&quot;}]}
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="first-world-load" tabindex="-1">First World Load <a class="header-anchor" href="#first-world-load" aria-hidden="true">#</a></h2><p>Unlike entities, worlds can not be applied tags. Instead we have to use scoreboards. Because of that, it is a bit more complicated.</p>`,3),y=a("BP/functions/load_check.mcfunction"),w=e("div",{class:"language-"},[e("pre",null,[e("code",null,`execute @a[c=1] ~ ~ ~ function load_commands
`)]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br")])],-1),T=e("p",null,[a("Here, we are running it from one player, this could be from any "),e("strong",null,"entity"),a(" though.")],-1),x=a("BP/functions/load_commands.mcfunction"),k=o(`<div class="language-"><pre><code># setup
scoreboard objectives add loaded dummy

# check if the value that the player value has is set to 1, otherwise runs commands
scoreboard players operation @s loaded = value loaded
execute @s[scores={loaded=0}] ~ ~ ~ say The world is loaded!

scoreboard players set value loaded 1
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>The above function checks if the player value has the loaded score set to 0, then runs functions if that is true. It sets it to 1 afterwards to make sure it does not run again.</p><h2 id="not-hasitem-detection" tabindex="-1">NOT hasitem detection <a class="header-anchor" href="#not-hasitem-detection" aria-hidden="true">#</a></h2><p>Ever wanted to check if player doesn&#39;t have an item?</p>`,4),S=a("BP/functions/detect.mcfunction"),P=o(`<div class="language-"><pre><code># Setup
scoreboard objectives add detect dummy
scoreboard players add @a detect 0
# Main
scoreboard players set @a[hasitem={item=mj105:flashlight,location=slot.weapon.mainhand}] detect 4
scoreboard players add @a[scores={detect=!0}] detect -1
# Trigger
execute @a[scores={detect=1}] ~~~ function single_trigger
execute @a[scores={detect=0}] ~~~ function multiple_trigger
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>This sets up <code>detect</code> scoreboard with 0 value. Then it adds 4 (recommended use this amount) to this scoreboard if player has item you want. This scoreboard is lowered every tick. When value of scoreboard drops to 1, you can do something with player. It will be a singe trigger. If you call a function on a player, whose <code>detect</code> value is 0, function will be run every time this player doesn&#39;t have specified item.</p>`,2);function C(A,I,j,V,D,N){const n=i("CodeHeader");return d(),l("div",null,[p,u,m,s(n,null,{default:t(()=>[h]),_:1}),_,s(n,null,{default:t(()=>[b]),_:1}),f,s(n,null,{default:t(()=>[g]),_:1}),v,s(n,null,{default:t(()=>[y]),_:1}),w,T,s(n,null,{default:t(()=>[x]),_:1}),k,s(n,null,{default:t(()=>[S]),_:1}),P])}var E=r(c,[["render",C]]);export{H as __pageData,E as default};

---
hidden: true
show_toc: false
show_contributors: false
title: MolangGraph
---

<MolangGraph code="query.anim_time"/>

<MolangGraph code="math.cos(query.anim_time * 360)" :range="4" :stepSize="0.02"/>

<MolangGraph code="q.anim_time == 0 ? 0 : q.anim_time == 1 ? 1 : math.pow(2, -10 * math.clamp(q.anim_time, 0, 1)) * math.sin((math.clamp(q.anim_time, 0, 1) * 10 - 0.75) * 120) + 1" :range="0.8" :stepSize="0.001" :useCenteredOrigin="false"/>

<MolangGraph code="q.anim_time == 0 ? 0 : q.anim_time == 1 ? 1 : q.anim_time < 0.5 ? -(math.pow(2, 20 * math.clamp(q.anim_time, 0, 1) - 10) * math.sin((20 * math.clamp(q.anim_time, 0, 1) - 11.125) * 80)) / 2 : (math.pow(2, -20 * math.clamp(q.anim_time, 0, 1) + 10) * math.sin((20 * math.clamp(q.anim_time, 0, 1) - 11.125) * 80)) / 2 + 1" :range="1.6" :stepSize="0.001" :useCenteredOrigin="true"/>

<MolangGraph code="q.anim_time < 0.5 ? (math.pow(2 * math.clamp(q.anim_time, 0, 1), 2) * ((2.5949095 + 1) * 2 * math.clamp(q.anim_time, 0, 1) - 2.5949095)) / 2 : (math.pow(2 * math.clamp(q.anim_time, 0, 1) - 2, 2) * ((2.5949095 + 1) * (math.clamp(q.anim_time, 0, 1) * 2 - 2) + 2.5949095) + 2) / 2" :range="1.6" :stepSize="0.001" :useCenteredOrigin="true"/>

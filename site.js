const NAV=[["HOME","index.html"],["TOOLS","tools.html"],["NOTES","notes.html"],["ABOUT","about.html"]];
const page=document.body.dataset.page;
document.body.insertAdjacentHTML("afterbegin",
'<a class="skip" href="#main">本文へ移動</a><header class="hd"><div class="wrap"><a class="brand" href="index.html"><img src="icon.png" alt="" width="36" height="36"><span>言語オタクの多言語学習ラボ<small>MY LANGUAGE PLAYGROUND</small></span></a><button class="mb" aria-label="メニューを開く" aria-expanded="false" aria-controls="nav">☰</button><nav id="nav" aria-label="メイン">'+
NAV.map(([t,h])=>`<a href="${h}"${h.startsWith(page)?' aria-current="page"':""}>${t}</a>`).join("")+"</nav></div></header>");
document.body.insertAdjacentHTML("beforeend",'<footer><div class="wrap">© 言語オタクの多言語学習ラボ ・ 個人が運営するサイトです ・ 辞書データ: Wiktionary(CC BY-SA・GFDL)</div></footer>');
const mb=document.querySelector(".mb"),nav=document.getElementById("nav");
mb.onclick=()=>{const o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
nav.addEventListener("click",e=>{if(e.target.tagName==="A")nav.classList.remove("open")});
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function card(o,kind){const soon=o.soon||!o.href,tag=soon?"div":"a",at=soon?' class="card soon"':` class="card" href="${esc(o.href)}"`;
const badge=soon?'<span class="badge">準備中</span>':"";
if(kind==="tool")return`<${tag}${at}><span class="en">${esc(o.sub)}</span><h3>${esc(o.name)}${badge}</h3><p>${esc(o.desc)}</p><div class="meta">${o.tags.map(esc).join(" ・ ")}</div></${tag}>`;
return`<${tag}${at}><span class="en">${esc(o.lang)} · ${esc(o.theme)}</span><h3>${esc(o.title)}${badge}</h3><p>${esc(o.desc)}</p><div class="meta">${o.date?esc(o.date):""}</div></${tag}>`}
function list(id,items,kind,keys){const el=document.getElementById(id);if(!el)return;
const draw=f=>{el.innerHTML=items.filter(f).map(o=>card(o,kind)).join("")};draw(()=>true);
const fb=document.getElementById(id+"-filter");if(!fb)return;
const vals=[...new Set(items.flatMap(o=>keys(o)))];
fb.innerHTML=["すべて",...vals].map((v,i)=>`<button aria-pressed="${i===0}">${esc(v)}</button>`).join("");
fb.onclick=e=>{const b=e.target.closest("button");if(!b)return;fb.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===b));
const v=b.textContent;draw(o=>v==="すべて"||keys(o).includes(v))}}
list("tools",TOOLS,"tool",o=>o.tags);
list("notes",NOTES,"note",o=>[o.lang,o.theme]);

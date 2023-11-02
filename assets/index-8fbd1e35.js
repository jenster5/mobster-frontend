(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function i(n){let t=0;const o=c=>{t=c,n.innerHTML=`count is ${t}`};n.addEventListener("click",()=>o(t+1)),o(0)}document.querySelector("#app").innerHTML=`
 <header>
  <h1>Mobster</h1>
</header>

 <card>
  <h1>Rasmus</h1>
</card>
<card>
  <h1>Tetiana</h1>
</card>
<card>
  <h1>Izabela</h1>
</card>
<card>
  <h1>Jennifer</h1>
</card>
`;i(document.querySelector("#counter"));

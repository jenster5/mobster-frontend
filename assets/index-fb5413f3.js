(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const i="/mobster-frontend/assets/typescript-f6ead1af.svg",a="/mobster-frontend/vite.svg";function d(c){let r=0;const o=s=>{r=s,c.innerHTML=`count is ${r}`};c.addEventListener("click",()=>o(r+1)),o(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${a}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${i}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
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
`;d(document.querySelector("#counter"));
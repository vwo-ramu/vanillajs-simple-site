(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function s(n){let r=0;const o=i=>{r=i,n.innerHTML=`count is ${r}`};n.addEventListener("click",()=>o(r+1)),o(0)}document.querySelector("#app").innerHTML=`

  <nav>
    <ul>
      <li><strong>Acme Corp</strong></li>
    </ul>
    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Products</a></li>
    </ul>
  </nav>

  <main class="container">
    <h1>Sample VWO Testing</h1>

    <ul>
      <li>
        <a href="https://vwo.com/" target="_blank">
          VWO Website
        </a>
      </li>

      <li>
        <a href="https://help.vwo.com/hc/en-us" target="_blank">
        VWO KB articles
        </a>
      </li>
    </ul>

        
    

    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </main>
`;s(document.querySelector("#counter"));

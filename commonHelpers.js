import{a as u,i as n,S as p}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const g=u.create({baseURL:"https://pixabay.com/"});async function f(a,t){try{const e={key:"44427326-e2b4a6eb28305d60c68b186c8",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await g.get("api/",{params:e})).data}catch(e){n.error({title:"Error",message:`${e}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}}async function m(a){let t=a.map(e=>`<li class="gallery-item">  
      <a class="gallery-link" 
      href="${e.largeImageURL}">
      <img class="gallery-image" 
      src="${e.webformatURL}"
      alt="${e.tags}"/>
      </a> 
<div class="gallery-card-container">
<p><strong>Likes:</strong> ${e.likes}</p>
<p><strong>Views:</strong> ${e.views}</p>
<p><strong>Comments:</strong> ${e.comments}</p>
<p><strong>Downloads:</strong> ${e.downloads}</p>
<p><strong>Likes:</strong> ${e.likes}</p>
</div>
</li>`).join("");s.gallery.insertAdjacentHTML("beforeend",t),new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function y(){s.loader.classList.remove("hidden")}function d(){s.loader.classList.add("hidden")}function h(){s.loader.classList.remove("load-more-hidden")}const s={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),LoadMoreBtn:document.querySelector(".load-more-btn")};let c="";s.form.addEventListener("submit",async a=>{try{a.preventDefault(),c=a.target.elements.text.value.trim();let t=1;if(c===""){s.gallery.innerHTML=" ",n.warning({title:"Warning",message:"Please, enter the query.",backgroundColor:"#ef4040",layout:2,position:"topRight",displayMode:"once"});return}y(),s.gallery.innerHTML=" ";const e=await f(c,t);if(e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),d(),s.form.reset();return}d(),s.form.reset(),m(e.hits),h()}catch(t){n.error({title:"Error",message:`${t}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map

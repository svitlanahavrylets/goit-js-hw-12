import{a as b,i,S as L}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const x=b.create({baseURL:"https://pixabay.com/"});async function y(o,t,r){try{const n={key:"44427326-e2b4a6eb28305d60c68b186c8",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:r};return(await x.get("api/",{params:n})).data}catch(n){i.error({title:"Error",message:`${n}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}}async function f(o){let t=o.map(r=>`<li class="gallery-item">  
      <a class="gallery-link" 
      href="${r.largeImageURL}">
      <img class="gallery-image" 
      src="${r.webformatURL}"
      alt="${r.tags}"/>
      </a> 
<div class="text-card-container">
   <ul class="text-list">
     <li class="text-item">
       <p class="text-item-name">Likes</p>
       <p class="text-item-quantity">${r.likes}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name">Views</p>
       <p class="text-item-quantity">${r.views}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name">Comments</p>
       <p class="text-item-quantity">${r.comments}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name">Downloads</p>
       <p class="text-item-quantity">${r.downloads}</p>
     </li>
   </ul>
</div>
</li>`).join("");a.gallery.insertAdjacentHTML("beforeend",t),new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function h(){a.loader.classList.remove("hidden")}function l(){a.loader.classList.add("hidden")}function B(){a.loadMoreBtn.classList.remove("hidden")}function m(){a.loadMoreBtn.classList.add("hidden")}function M(o,t){page>=t?(m(),t&&i.info({title:"The end!",message:"We're sorry, but you've reached the end of search results."})):B()}const a={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let c="",g=1,p=15,d=1;m();a.form.addEventListener("submit",async o=>{try{o.preventDefault(),c=o.target.elements.text.value.trim();let t=1;if(c===""){a.gallery.innerHTML=" ",i.warning({title:"Warning",message:"Please, enter the query.",backgroundColor:"#ef4040",layout:2,position:"topRight",displayMode:"once"});return}h(),a.gallery.innerHTML=" ";const r=await y(c,t,p);if(d=Math.ceil(r.totalHits/p),d===0){i.error({title:"Error",message:"Empty result",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),l(),M(t,d);return}if(r.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),l(),a.form.reset();return}l(),a.form.reset(),f(r.hits),B()}catch(t){i.error({title:"Error",message:`${t}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});a.loadMoreBtn.addEventListener("click",async()=>{try{g++,m(),h();const o=await y(c,g,p);if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),l(),a.form.reset();return}f(o.hits)}catch(o){a.gallery.innerHTML=" ",i.error({title:"Error",message:`${o}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map

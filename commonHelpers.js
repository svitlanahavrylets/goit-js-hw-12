import{a as b,i as n,S as B}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const x=b.create({baseURL:"https://pixabay.com/"});async function f(t,r,o){try{const i={key:"44427326-e2b4a6eb28305d60c68b186c8",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:o};return(await x.get("api/",{params:i})).data}catch(i){n.error({title:"Error",message:`${i}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}}const s={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};async function g(t){let r=t.map(o=>`<li class="gallery-item">  
      <a class="gallery-link" 
      href="${o.largeImageURL}">
      <img class="gallery-image" 
      src="${o.webformatURL}"
      alt="${o.tags}"/>
      </a> 
<div class="text-card-container">
   <ul class="text-list">
     <li class="text-item">
       <p class="text-item-name">Likes</p>
       <p class="text-item-quantity">${o.likes}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name">Views</p>
       <p class="text-item-quantity">${o.views}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name">Comments</p>
       <p class="text-item-quantity">${o.comments}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name">Downloads</p>
       <p class="text-item-quantity">${o.downloads}</p>
     </li>
   </ul>
</div>
</li>`).join("");s.gallery.insertAdjacentHTML("beforeend",r),new B(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function h(){s.loader.classList.remove("hidden")}function p(){s.loader.classList.add("hidden")}function L(){s.loadMoreBtn.classList.remove("hidden")}function c(){s.loadMoreBtn.classList.add("hidden")}function M(t,r){t>r?(c(),r&&n.info({title:"The end!",message:"We're sorry, but you've reached the end of search results."})):L()}let l="",u=1,m=15,y=1;c();s.form.addEventListener("submit",async t=>{try{t.preventDefault(),l=t.target.elements.text.value.trim();let r=1;if(c(),l===""){s.gallery.innerHTML=" ",n.warning({title:"Warning",message:"Please, enter the query.",backgroundColor:"#ef4040",layout:2,position:"topRight",displayMode:"once"});return}h(),s.gallery.innerHTML=" ";const o=await f(l,r,m);if(y=Math.ceil(o.totalHits/m),y===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),p();return}p(),s.form.reset(),g(o.hits),L()}catch(r){n.error({title:"Error",message:`${r}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});s.loadMoreBtn.addEventListener("click",async()=>{try{c(),h();const t=await f(l,u,m);t.hits.length!==0&&(g(t.hits),p(),u++),M(u,y)}catch(t){s.gallery.innerHTML=" ",n.error({title:"Error",message:`${t}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map

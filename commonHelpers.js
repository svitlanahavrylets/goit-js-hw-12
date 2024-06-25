import{a as b,i as n,S as B}from"./assets/vendor-ee72e1a4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();const x=b.create({baseURL:"https://pixabay.com/"});async function y(r,o,e){try{const i={key:"44427326-e2b4a6eb28305d60c68b186c8",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:e};return(await x.get("api/",{params:i})).data}catch(i){n.error({title:"Error",message:`${i}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}}const s={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};async function f(r){let o=r.map(e=>`<li class="gallery-item">  
      <a class="gallery-link" 
      href="${e.largeImageURL}">
      <img class="gallery-image" 
      src="${e.webformatURL}"
      alt="${e.tags}"/>
      </a> 
<div class="text-card-container">
   <ul class="text-list">
     <li class="text-item">
       <p class="text-item-name"><strong>Likes:</strong></p>
       <p class="text-item-quantity">${e.likes}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name"><strong>Views</strong></p>
       <p class="text-item-quantity">${e.views}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name"><strong>Comments</strong></p>
       <p class="text-item-quantity">${e.comments}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name"><strong>Downloads</strong></p>
       <p class="text-item-quantity">${e.downloads}</p>
     </li>
   </ul>
</div>
</li>`).join("");s.gallery.insertAdjacentHTML("beforeend",o),new B(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function h(){s.loader.classList.remove("hidden")}function u(){s.loader.classList.add("hidden")}function L(){s.loadMoreBtn.classList.remove("hidden")}function g(){s.loadMoreBtn.classList.add("hidden")}function M(r,o){r>o?(g(),o&&n.info({title:"The end!",message:"We're sorry, but you've reached the end of search results."})):L()}function w(r=0,o=0){const i=s.gallery.children[0].getBoundingClientRect().height;window.scrollBy({top:i*2,left:o,behavior:"smooth"})}let l="",d=1,p=15,m=1;s.form.addEventListener("submit",async r=>{r.preventDefault(),l=r.target.elements.text.value.trim();let o=1;if(g(),l===""){s.gallery.innerHTML=" ",n.warning({title:"Warning",message:"Please, enter the query.",backgroundColor:"#ef4040",layout:2,position:"topRight",displayMode:"once"}),s.form.reset();return}h(),s.gallery.innerHTML=" ";try{const e=await y(l,o,p);if(m=Math.ceil(e.totalHits/p),m===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),s.form.reset(),u();return}u(),s.form.reset(),f(e.hits),L()}catch(e){n.error({title:"Error",message:`${e}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});s.loadMoreBtn.addEventListener("click",async()=>{g(),h();try{const r=await y(l,d,p);r.hits.length!==0&&(f(r.hits),u(),d++),M(d,m),w()}catch(r){s.gallery.innerHTML=" ",n.error({title:"Error",message:`${r}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map

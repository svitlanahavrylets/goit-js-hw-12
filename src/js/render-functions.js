import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from '../main';
import iziToast from 'izitoast';

export let markup = '';
export async function imagesTemplate(imagesObj) {
  let markup = imagesObj
    .map(image => {
      return `<li class="gallery-item">  
      <a class="gallery-link" 
      href="${image.largeImageURL}">
      <img class="gallery-image" 
      src="${image.webformatURL}"
      alt="${image.tags}"/>
      </a> 
<div class="text-card-container">
   <ul class="text-list">
     <li class="text-item">
       <p class="text-item-name">Likes</p>
       <p class="text-item-quantity">${image.likes}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name">Views</p>
       <p class="text-item-quantity">${image.views}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name">Comments</p>
       <p class="text-item-quantity">${image.comments}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name">Downloads</p>
       <p class="text-item-quantity">${image.downloads}</p>
     </li>
   </ul>
</div>
</li>`;
    })
    .join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  }).refresh();
}

export function showLoader() {
  refs.loader.classList.remove('hidden');
}
export function hideLoader() {
  refs.loader.classList.add('hidden');
}
export function showLoadMore() {
  refs.loadMoreBtn.classList.remove('hidden');
}
export function hideLoadMore() {
  refs.loadMoreBtn.classList.add('hidden');
}

export function btnStatus(currentPage, maxPage) {
  if (page >= maxPage) {
    hideLoadMore();

    if (maxPage) {
      iziToast.info({
        title: 'The end!',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } else {
    showLoadMore();
  }
}

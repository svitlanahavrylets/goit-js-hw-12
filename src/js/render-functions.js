import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from '../main';

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
<div class="gallery-card-container">
<p><strong>Likes:</strong> ${image.likes}</p>
<p><strong>Views:</strong> ${image.views}</p>
<p><strong>Comments:</strong> ${image.comments}</p>
<p><strong>Downloads:</strong> ${image.downloads}</p>
<p><strong>Likes:</strong> ${image.likes}</p>
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
  refs.loader.classList.remove('load-more-hidden');
}
export function hideLoadMore() {
  refs.loader.classList.add('load-more-hidden');
}

//    <ul class="property">
//      <li class="property-item">
//        <p class="property-name">Likes</p>
//        <p class="item-prop-quantity">${image.likes}</p>
//      </li>
//      <li class="property-item">
//        <p class="property-name">Views</p>
//        <p class="item-prop-quantity">${image.views}</p>
//      </li>
//      <li class="property-item">
//        <p class="property-name">Comments</p>
//        <p class="item-prop-quantity">${image.comments}</p>
//      </li>
//      <li class="property-item">
//        <p class="property-name">Downloads</p>
//        <p class="item-prop-quantity">${image.downloads}</p>
//      </li>
//    </ul>;

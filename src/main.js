import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './js/pixabay-api';
import {
  imagesTemplate,
  showLoader,
  hideLoader,
  showLoadMore,
  hideLoadMore,
  btnStatus,
} from './js/render-functions';

export const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('.input'),
  button: document.querySelector('button'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
};

export let inputValue = '';
export let currentPage = 1;
export let perPage = 15;
export let maxPage = 1;

hideLoadMore();

refs.form.addEventListener('submit', async e => {
  try {
    e.preventDefault();
    inputValue = e.target.elements.text.value.trim();
    let currentPage = 1;

    if (inputValue === '') {
      refs.gallery.innerHTML = ' ';
      iziToast.warning({
        title: 'Warning',
        message: 'Please, enter the query.',
        backgroundColor: '#ef4040',
        layout: 2,
        position: 'topRight',
        displayMode: 'once',
      });
      return;
    }
    showLoader();
    refs.gallery.innerHTML = ' ';

    const data = await getImages(inputValue, currentPage, perPage);
    maxPage = Math.ceil(data.totalHits / perPage);

    if (maxPage === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Empty result',
        layout: 2,
        displayMode: 'once',
        backgroundColor: '#ef4040',
        progressBarColor: '#B51B1B',
        position: 'topRight',
      });
      hideLoader();
      btnStatus(currentPage, maxPage);
      return;
    }

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        layout: 2,
        displayMode: 'once',
        backgroundColor: '#ef4040',
        progressBarColor: '#B51B1B',
        position: 'topRight',
      });
      hideLoader();
      refs.form.reset();
      return;
    }
    hideLoader();
    refs.form.reset();

    imagesTemplate(data.hits);

    showLoadMore();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `${error}`,
      layout: 2,
      displayMode: 'once',
      backgroundColor: '#ef4040',
      progressBarColor: '#B51B1B',
      position: 'topRight',
    });
  }
});

refs.loadMoreBtn.addEventListener('click', async () => {
  try {
    currentPage++;
    hideLoadMore();
    showLoader();
    const data = await getImages(inputValue, currentPage, perPage);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        layout: 2,
        displayMode: 'once',
        backgroundColor: '#ef4040',
        progressBarColor: '#B51B1B',
        position: 'topRight',
      });
      hideLoader();
      refs.form.reset();
      return;
    }
    imagesTemplate(data.hits);
  } catch (error) {
    refs.gallery.innerHTML = ' ';

    iziToast.error({
      title: 'Error',
      message: `${error}`,
      layout: 2,
      displayMode: 'once',
      backgroundColor: '#ef4040',
      progressBarColor: '#B51B1B',
      position: 'topRight',
    });
  }
});

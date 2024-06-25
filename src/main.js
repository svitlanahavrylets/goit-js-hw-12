import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './js/pixabay-api';
import {
  imagesTemplate,
  showLoader,
  hideLoader,
  showLoadMore,
  hideLoadMore,
  checkEndPages,
} from './js/render-functions';
import { refs } from './js/refs';

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

    hideLoadMore();

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
    refs.gallery.innerHTML = ' '; // прибирає картки від попереднбого запиту

    const data = await getImages(inputValue, currentPage, perPage);
    maxPage = Math.ceil(data.totalHits / perPage);

    if (maxPage === 0) {
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
      // checkEndPages(currentPage, maxPage);
      return;
    }

    // if (data.hits.length === 0) {
    //   iziToast.error({
    //     message:
    //       'Sorry, there are no images matching your search query. Please try again!',
    //     layout: 2,
    //     displayMode: 'once',
    //     backgroundColor: '#ef4040',
    //     progressBarColor: '#B51B1B',
    //     position: 'topRight',
    //   });
    //   hideLoader();
    //   refs.form.reset();
    //   return;
    // }
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
    hideLoadMore();
    showLoader();

    const data = await getImages(inputValue, currentPage, perPage);
    if (data.hits.length !== 0) {
      imagesTemplate(data.hits);

      hideLoader();
      currentPage++;
    }
    checkEndPages(currentPage, maxPage);
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

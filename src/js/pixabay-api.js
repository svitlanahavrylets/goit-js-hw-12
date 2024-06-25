import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const articlesApi = axios.create({
  baseURL: 'https://pixabay.com/',
});

export async function getImages(inputValue, currentPage, perPage) {
  try {
    const params = {
      key: '44427326-e2b4a6eb28305d60c68b186c8',
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currentPage,
      per_page: perPage,
    };

    const res = await articlesApi.get('api/', { params });
    return res.data;
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
}

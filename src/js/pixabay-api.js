import axios from 'axios';

const articlesApi = axios.create({
  baseURL: 'https://pixabay.com/',
  headers: {
    key: '44427326-e2b4a6eb28305d60c68b186c8',
  },
});

export async function getImages(inputValue, currentPage) {
  try {
    const params = {
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currentPage,
      per_page: 15,
    };

    const res = await articlesApi.get({'api/', {params} });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
getImages('cats', 1);

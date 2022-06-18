const URL = 'https://hn.algolia.com/api/v1/search';
export const fetchNews = ({ query, page }) => 
    axios.get(`${URL}?query=${query}&page=${page}`)
    .then(({data}) => data);
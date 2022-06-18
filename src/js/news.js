import { fetchNews } from "./newsApi";

console.log('Module 10.2');

const refs = {
    form: document.querySelector('form'),
    list: document.querySelector('#news-list'),
    buttons: document.querySelector('#page-buttons')
}

let currentPage = 1;
let query = '';
const handleSubmit = (event) => {
    const { value } = event.target.query;

    event.preventDefault();

    if (!value) return;

    // console.log(value);
    query = value;
    fetchNews({ query, page: currentPage })
        .then(({hits}) => {
            render(hits);
             refs.form.reset();
        });
   
};
const handlePageClick = (event) => {
  if (event.target === event.currentTarget) return;

    const { page } = event.target.dataset;
    // console.log(page);
    currentPage = page;
    
    fetchNews({query: value, page: currentPage});

      
};
const render = (hits) => {
    //render new list here
    console.log(hits);
};

const handlefetch = () => {
    //load tada here
    render();
};
refs.form.addEventListener('submit', handleSubmit);
refs.buttons.addEventListener('click', handlePageClick);
'use strict';

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://newsapi.org/v2/everything?q=tesla&from=2023-10-20&sortBy=publishedAt&apiKey=1712717d771b426fb91b3b0cf0fc4f5b', true);
xhr.send();

xhr.addEventListener('load', () => {
/*
    const responsetoJSON = JSON.parse(xhr.responseText);
    console.log(responsetoJSON);

    const articles = responsetoJSON.articles;
    const output = document.querySelector('.output');
    let html = '';
    articles.forEach(article => {
        html += `${article.title}`;
    });
    output.append(html);
*/
});

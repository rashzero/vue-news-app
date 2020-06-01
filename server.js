const express = require('express');
const path = require('path');

const app = express();
const fetch = require('node-fetch');

const newsID = [];

app.use(express.static(path.join(__dirname, 'build')));

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8081');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  next();
});

app.use(express.json());

app.get('/api/news/:page', async (req, res) => {
  const sliceStart = req.params.page * 10;
  const sliceEnd = sliceStart + 10;
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
  const responseJson = await response.json();
  const numberOfButton = Math.ceil(responseJson.length / 10);
  const chunkNewsIds = responseJson.slice(sliceStart, sliceEnd);
  const promises = chunkNewsIds.map(async (item) => {
    const responseNews = await fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`);
    const responseJsonNews = await responseNews.json();
    return responseJsonNews;
  });
  const newsResponse = await Promise.all(promises);
  res.json({
    news: newsResponse,
    numbOfPage: numberOfButton,
  });
});

app.listen(8080);

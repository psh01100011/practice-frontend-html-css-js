const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/component/pages/basic.html');
});

app.get('/basic.js', (req, res) => {
  res.type('application/javascript');
  res.sendFile(__dirname + '/component/pages/basic.js');
});

app.get('/header.js', (req, res) => {
  res.type('application/javascript');
  res.sendFile(__dirname + '/component/header/header.js');
});

app.get('/header.css', (req, res) => {
  res.type('text/css');
  res.sendFile(__dirname+'/component/header/header.css');
});

app.get('/api/post/post.js', (req, res) => {
  res.type('application/javascript');
  res.sendFile(__dirname+'/api/post/post.js');
});

app.get('/api/posts', async (req, res) => {
  const response = await fetch('http://localhost:8080/api/v1/posts?lastPostId=10&limit=5');
  const data = await response.json();
  res.json(data);
});

app.get('/post/:id', async (req, res) => {
  const postId = req.params.id;
  try {
    const response = await fetch(`http://localhost:8080/api/v1/posts/${postId}`);
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch post' });
    }
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('게시물 단건 조회 오류:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});
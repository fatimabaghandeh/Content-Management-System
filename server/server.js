const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '.')));

app.get('/articles.json', (req, res) => {
  const filePath = path.join(__dirname, 'articles.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Error reading file');
      return;
    }
    res.send(data);
  });
});

app.post('/articles', (req, res) => {
  const filePath = path.join(__dirname, 'articles.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Error reading file');
      return;
    }

    let articles = JSON.parse(data);
    let newArticle = req.body;
    newArticle.id = Date.now();
    articles.articles.push(newArticle);

    fs.writeFile(filePath, JSON.stringify(articles, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
        res.status(500).send('Error writing file');
        return;
      }
      res.send('Article added successfully');
    });
  });
});

app.delete('/articles/:id', (req, res) => {
  const filePath = path.join(__dirname, 'articles.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Error reading file');
      return;
    }

    let articles = JSON.parse(data);
    const articleId = parseInt(req.params.id, 10);
    articles.articles = articles.articles.filter(article => article.id !== articleId);

    fs.writeFile(filePath, JSON.stringify(articles, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
        res.status(500).send('Error writing file');
        return;
      }
      res.send('Article deleted successfully');
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

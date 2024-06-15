// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create array to store comments
const comments = [];

// Create GET request to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create POST request to add a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
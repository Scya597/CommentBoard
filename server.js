const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const uuid = require('node-uuid');

const app = express();

const TodoApp = [];

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/js', (req, res) => {
  res.sendFile(path.join(__dirname, 'bundle.js'));
});

app.get('/style', (req, res) => {
  res.sendFile(path.join(__dirname, 'style.css'));
});

app.post('/api/todoItem', (req, res) => {
  const id = req.body.id;
  const text = req.body.text;
  const time = JSON.parse(JSON.stringify(new Date()));
  TodoApp.forEach((list) => {
    if (list.listID === id) {
      list.listContent.push({ id: uuid(), text, time });
    }
  });
});

app.post('/api/todoList', (req, res) => {
  const time = JSON.parse(JSON.stringify(new Date()));
  const newTodoList = {
    listID: req.body.listID,
    listName: req.body.listName,
    listContent: req.body.listContent,
    time,
  };
  TodoApp.push(newTodoList);
});

app.get('/api', (req, res) => {
  res.send({ TodoApp });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

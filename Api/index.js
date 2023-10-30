const ApiService = require('./ApiService');
const path = require('path')

const express = require("express");
const { name } = require('ejs');
const app = express();
const PORT = 5000;

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index',{});
});

app.get('/table', function(req, res) {
  res.render('table',{
    items:[]
  });
});


app.listen(PORT, () => console.log(`Connected to ${PORT}`));

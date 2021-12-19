const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
  res.send('Email me sushantkumardbg@gmail.com')
})

app.get('/Skills', (req, res) => {
  res.send('<ul><li>Java</li><li>Web dev</li><li>JavaScript</li></ul>')
})

app.get('/Hobbies', (req, res) => {
  res.send('<ul><li>bhole nath ka fan</li></ul>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

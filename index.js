const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to NFTask API')
});

app.listen(3000, () => {
  console.log('server started');
});
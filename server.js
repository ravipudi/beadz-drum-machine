const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, function() {
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });
});

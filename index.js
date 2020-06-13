const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("i swear i'm trying to help but i'm forced to make web apps");
});

app.listen(3000, () => {
  console.log('Listening');
})

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs')
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/",require("./controller/login.js"));

app.listen(3000, () => {
  console.log('これ動いた？')
})
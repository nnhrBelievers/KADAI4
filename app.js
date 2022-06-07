const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs')
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('login.ejs',{err:""});
});

app.use("/",require("./control/login.js"));

app.post("/ok", (req,res)=>{
  id =  req.body.username;
  pass =  req.body.password;

  if(id===req.body.username && pass===req.body.password){
    const name = req.body.username

    const data = {
      name: name
    }
    res.render('ok.ejs', data)
  }else{
    res.render('login.ejs',{err:'打ち直し'});
  }
});

app.listen(3000, () => {
  console.log('これ動いた？')
})
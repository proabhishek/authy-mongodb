const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {mongourl} = require('./secret.js');


const port = 5000;

console.log("app.js loaded");
console.log(mongourl);


// connect mongodb:
mongoose.connect(mongourl) 

// true case - established
mongoose.connection.on("connected" , ()=>{console.log("connected to mongo")})


// false case - not established
mongoose.connection.on("error" , (err)=>{console.log("error connecting to mongo", err)})

app.listen(port, () => {
  console.log(`Authy app listening at http://localhost:${port}`)
})

// auth
// yj1QA2yucpChSYlf

// 
var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
   console.log("GET REQUEST");
});

app.listen(3000);
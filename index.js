var express = require('express');
var app = express();
const port = process.env.PORT || 5000

app.get('/', function(req, res){
   res.send("Hello world!");
   console.log("GET REQUEST");
});

app.listen(port,() => {
  console.log(`Server running at port `+port);
});

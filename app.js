const express = require('express');
const v1 = require('./routers/v1.js');
const bodyParser = require("body-parser");
const app = express();

var jsonParser = bodyParser.json();
var urlencoded = bodyParser.urlencoded({ extended : false });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log("IP: " + req.ip);
  console.log("Method: " + req.method);
  next();
});

app.use(express.static('views'));

app.get('/', function(req, res){
    res.redirect('v1');
})

app.use('/v1', jsonParser, v1);
app.listen(3000, () => console.log('Server app listening on port 3000!'));

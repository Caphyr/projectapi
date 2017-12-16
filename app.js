const express = require('express');
const v1 = require('./routers/v1.js');
const bodyParser = require("body-parser");
const app = express();

var jsonParser = bodyParser.json();
var urlencoded = bodyParser.urlencoded({ extended : false });


app.use('/v1', jsonParser, v1);
app.listen(3000, () => console.log('Server app listening on port 3000!'));

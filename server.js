var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(PORT);
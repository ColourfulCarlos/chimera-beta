var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public'))); 
var port = 8000; // you can use any port
app.listen(port);
console.log('server on' + port);
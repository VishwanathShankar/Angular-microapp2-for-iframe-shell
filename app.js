var express = require('express');
var app = express();
var PORT = 3002
app.use('/', express.static('dist/microapp2'));

app.listen(PORT);
console.log("Microapp2 started on port"+PORT);

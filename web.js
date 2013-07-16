var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buff = Buffer(128);
var buf = new Buffer(128);
app.get('/', function(request, response) {
buff= fs.readFileSync("./index.html");
response.send(buf.toString(buff)) ;
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

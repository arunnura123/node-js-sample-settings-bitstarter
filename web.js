var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buff = Buffer(128);
var buf = new Buffer(128);
app.get('/', function(request, response) {
buf=fs.readFileSync("./index.html","utf-8");
response.send(buf.toString("utf-8", 0, 32));
} );
var port = process.env.PORT ||  8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

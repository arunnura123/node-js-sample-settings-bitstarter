
var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buff = Buffer(128);
var buf = new Buffer(128);
app.get('/', function(request, response) {
buf=fs.readFileSync("./index.html","utf-8");
response.send(buf.toString("utf-8", 0, 32));
 console.log("helo");
} );
var port = process.env.PORT ||  8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

function WriteToFile(element) {
 console.log("hello");
 var array = new Array();
    array[0] = "Red";
    array[1] = "Blue";
    array[3] = "Green";

    var ul = document.createElement("ul");
    for (var i=0; i < array.length; i++) {
       var li = document.createElement("li");
       li.innerHtml = array[i];
       ul.appendChild(li);
    }
    body.insertAfter(ul, element);
}


var express = require('express');

var app = express()
;

var fs = require('fs');

var helloWorld = fs.readFileSync('index.html','utf-8');

app.get('/', function(request, response) {
 // response.send('Hello World 2!');
    response.send(helloWorld);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var express = require('express');

var app = express.createServer(express.logger());

var helloWorld = fs.readFileSync('index.html').toString();

app.get('/', function(request, response) {
 // response.send('Hello World 2!');
    response.send(helloWorld);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

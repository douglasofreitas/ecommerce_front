var express = require('express');
var cookieParser = require('cookie-parser');
var configurations = require("./.env");

var app = express();
app.use(express.static('public'));
app.use(cookieParser());

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
});

//service to get configurations system
app.get('/configurations', function (req, res) {
   // Prepare output in JSON format
   response = configurations;
   res.end(JSON.stringify(response));
});

var server = app.listen(configurations.port, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})

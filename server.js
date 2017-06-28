var express = require('express');
var cookieParser = require('cookie-parser');

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
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name,
      var_1: 123
   };
   res.end(JSON.stringify(response));
});

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})

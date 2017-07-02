var express = require('express');
var cookieParser = require('cookie-parser');
var configurations = require("../.env");

var app = express();
app.use(express.static('public'));
app.use(cookieParser());

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
  //console.log("Cookies: ", req.cookies);
  res.sendFile( __dirname + "/public/" + "initial.html" );
});

//service to get configurations system
app.get('/configurations', function (req, res) {
   // Prepare output in JSON format
   response = configurations;
   res.end(JSON.stringify(response));
});


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  //debug('Listening on ' + bind);
}

var server = app.listen(configurations.port, function () {

  var host = server.address().address
  var port = server.address().port


  console.log("Example app listening at http://%s:%s", host, port)
});

server.on('error', onError);
server.on('listening', onListening);

module.exports = server;

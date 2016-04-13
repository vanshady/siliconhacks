const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var compression = require('compression')

// const port = process.env.VCAP_APP_PORT || 3000;
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// server-sent event stream
app.get('/events', function (req, res) {
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')

  // send a ping approx every 2 seconds
  var timer = setInterval(function () {
    res.write('data: ping\n\n')

    // !!! this is the important part
    res.flush()
  }, 2000)

  res.on('close', function () {
    clearInterval(timer)
  })
})

app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname + '/public/error.html');
});

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(port);
console.log('listening at:', port);


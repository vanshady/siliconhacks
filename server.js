const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');

// var http = require("http");

// const port = process.env.VCAP_APP_PORT || 3000;
const port = process.env.PORT || 3000;

// 301 Redirect
// app.use(function(req,res,next){
//         var host = req.get('host');
//         if(/^www\./.test(host)){
//             host = host.substring(4, host.length);
//             res.writeHead(301, {'Location':req.protocol + '://' + host + req.originalUrl,
//                 'Expires': new Date().toGMTString()});
//             res.end();
//         } else {
//             next();
//         }
//     });

app.use(compression({ threshold: 0 }));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 404 Error
// app.use(function(req, res, next) {
//   res.status(404).redirect('/');
// });

// app.get('*', function (req, res) {
//   res.sendFile('./public/index.html');
// });

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port);
console.log('listening at:', port);

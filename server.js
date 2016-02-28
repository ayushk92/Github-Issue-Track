var express = require('express');
var app = express();
//var fs = require("fs");
//var nodemailer = require('nodemailer');
var http = require('http');

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8081);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

http.createServer(app).listen(app.get('port') ,app.get('ip'), function () {
    console.log("✔ Express server listening at %s:%d ", app.get('ip'),app.get('port'));    
});

app.use(express.static('static'));

app.get('/', function (req, response) {
   response.sendfile( __dirname + "/views/" + "index.html" );
})


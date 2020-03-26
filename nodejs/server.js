var fs = require('fs');
var express = require("express");
var http = require("http");
var app = express();

app.get("/", function(req, res, next) {
    //Open a file on the server and return its content:
  fs.readFile('input.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end(); //for send back information
  });
});
app.get("/input.html", function(req, res, next) {
    //Open a file on the server and return its content:
  fs.readFile('input.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});
app.get("/register.html", function(req, res, next) {
    fs.readFile('register.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});
app.get("/t1.html", function(req, res, next) {
    fs.readFile('t1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});
app.get("/t2.html", function(req, res, next) {
    fs.readFile('t2.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});
app.get("/main.html", function(req, res, next) {
    fs.readFile('main.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});
app.get("/all.html", function(req, res, next) {
    fs.readFile('all.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});
app.get("/football.html", function(req, res, next) {
    fs.readFile('football.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});
app.get("/basketball.html", function(req, res, next) {
    fs.readFile('basketball.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});
app.get("/user_information.html", function(req, res, next) {
    fs.readFile('user_information.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});
http.createServer(app).listen(8080);
console.log('Server On and Port number: 8080');
var fs = require('fs');
var express = require("express");
var http = require("http");
var url = require('url');
var app = express();


const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

function say(word){
		console.log(word);
		return 1;
	}

app.get("/", function(req, res, next) {
    //Open a file on the server and return its content:
  fs.readFile('main.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
	console.log(say("fuckyou"));
    return res.end();
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
app.get("/column.html", function(req, res, next) {
    fs.readFile('column.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});
app.get("/logo_and_room.html", function(req, res, next) {
    fs.readFile('logo_and_room.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});
app.get("/logo.html", function(req, res, next) {
    fs.readFile('logo.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});
app.get("/room_main.html", function(req, res, next) {
    fs.readFile('room_main.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});
app.get("/login.html", function(req, res, next) {
    fs.readFile('login.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});


app.get("/user_create", function(req, res, next) {
	console.log("Trying to create a new user...");
	var q = url.parse(req.url, true);
	var qdata = q.query;
	console.log(qdata.create_first_name);
	fs.readFile('main.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Welcome"+qdata.create_first_name);
    return res.end();
  });
});
http.createServer(app).listen(8765);

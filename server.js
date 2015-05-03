'use strict';

var http = require('http');
var server = http.createServer(function (req, res) {

	res.writeHead(200);
	res.end('Hello world');

});

var port = process.env.TEST_PORT || 3000;

server.listen(port, function () {

	console.log('Running on port ', port);

});
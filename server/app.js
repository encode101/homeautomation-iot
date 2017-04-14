var express = require('express');
var app = express();
var router = require('./router.js');

app.use(router);

app.listen('8080', function(){
	console.log('[ '+new Date+" ] Server Lisening To Port 8080");
});


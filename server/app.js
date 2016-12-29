var express = require('express');
var app = express();
var router = require('./router.js');

app.use(router);

app.listen('3000', function(){
	console.log('[ '+new Date+" ] Server Lisening To Port 3000");
})

console.log(app.path())

app.set('etag', 'strong');
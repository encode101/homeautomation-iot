var express = require('express');
var app = express();
var router = require('./router.js');

app.use(router);
app.set('etag', 'strong');

app.listen('3030', function(){
	console.log('[ '+new Date+" ] Server Lisening To Port 3030");
});
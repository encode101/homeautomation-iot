var express = require('express');
var router = express.Router();
var promise = require('bluebird');
var awsCon = require('./controllers/aws-con.js')
var bodyParser = require('body-parser');
var JSONParser = bodyParser.json();

// var bodyParser.urlencoded({ extended: false })

router.get('/', function(req, res){
	res.send({'msg': 'Nothing Here, Please Check The API Documentation.'});
})

router.get('/aws', function(req, res){
	awsCon.upload(params, function(data){
		res.send(data);
	});	
})

router.post('/aws', JSONParser, function(req, res){
	var params = req.body;
	/*awsCon.upload(params, function(data){
		res.send(data);
	});	*/
	res.send(params);
})


module.exports = router;





/*params = {
	Bucket: 'dev-zobo-1/rahul-aws', 
	Key: 'hello_world.txt',
	Body: 'Hello World!'
};*/
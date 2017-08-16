var express = require('express');
var router = express.Router();
//var promise = require('bluebird');
//var awsCon = require('./controllers/aws-con.js')
var bodyParser = require('body-parser');
var User = require('./controllers/UserController.js')
var Heat = require('./controllers/HeatController.js')
var Notification = require('./controllers/NotificationController.js');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/* Default Route For API ROOT ACCESS */

router.all('/', function(req, res){
	res.send({'msg': 'Nothing Here, Please Check The API Documentation.'});
})

//	User CRUD API Routes

router.get('/users', User.find);
router.post('/users', User.create);

router.get('/heat', Heat.find);
router.post('/report', Heat.report);
router.post('/heat', Heat.create);

/* Notification API */

router.get('/notification/send', Notification.sendNotification);

module.exports = router;




// var bodyParser.urlencoded({ extended: false })

/*router.use(function(req, res, next){
	console.log(router.param());
	next();
})*/
/*
router.all('/', function(req, res){
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
	});	
	res.send(params);
})*/






/*params = {
	Bucket: 'dev-zobo-1/rahul-aws', 
	Key: 'hello_world.txt',
	Body: 'Hello World!'
};*/
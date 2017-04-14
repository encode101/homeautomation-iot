var express = require('express');
var router = express.Router();
var promise = require('bluebird');
var awsCon = require('./controllers/aws-con.js')
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/* Default Route For API ROOT ACCESS */

router.all('/', function(req, res){
	res.send({'msg': 'Nothing Here, Please Check The API Documentation.'});
})

//	User CRUD API Routes



module.exports = router;
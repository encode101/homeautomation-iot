var express = require('express');
var router = express.Router();
var promise = require('bluebird');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

var git = require('./controllers/GitController.js')

/* Default Route For API ROOT ACCESS */

router.all('/', function(req, res){
	res.send({'msg': 'Nothing Here, Please Check The API Documentation.'});
})

//	User CRUD API Routes

router.get('/git-status', git.pull);

module.exports = router;
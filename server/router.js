var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.send({'msg': 'Nothing Here, Please Check The API Documentation.'});
})

module.exports = router;
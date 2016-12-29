var User = require('../models/User');

module.exports = {
	'find': function(req, res){
		User.find(function(data){
			res.send(data)
		})
	},

	'create': function(req, res){
		var userInfo = req.body;
		User.create(userInfo, function(data){
			res.send(data)
		})
	}
}
var Heat = require('../models/Heat');

module.exports = {
	'find': function(req, res){
		Heat.find(function(data){
			res.send(data)
		})
	},

	/* For Generating Reports Between Two Specific TimeStamp */

	'report': function(req, res){

		if(!req.body.startTime || !req.body.endTime){
			res.send("StartTime or EndTime Not Present");
		}
		
		var startTime = req.body.startTime;
		var endTime = req.body.endTime;

		Heat.report(startTime, endTime, function(data){
			res.send(data)
		});
	},

	'create': function(req, res){
		var userInfo = req.body;
		Heat.create(userInfo, function(data){
			res.send(data)
		})
	}
}
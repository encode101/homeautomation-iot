var mongoClient = require('mongodb');

module.exports = {
	'find': function(cb){
		mongoClient.connect('mongodb://localhost:27017/Heat', function(err, db){
			if(err){
				cb({'error': err});
			}
			db.collection('heat').find().toArray(function(err, usersFound){
				if(err){
					cb({'error': err})
				}
				cb(usersFound);				
			})
		})
	},

	'report': function(startTime, endTime, cb){
		mongoClient.connect('mongodb://localhost:27017/Heat', function(err, db){
			
			if(err){
				cb({'error': err});
			}

			db.collection('heat').find({
				"startTime": { $gt: startTime }, 
				"endTime": { $lt: endTime }
			}).toArray(function(err, usersFound){
				
				if(err){
					cb({'error': err})
				}

				cb(usersFound);				
			})
		})
	},

	'create': function(heatInfo, cb){
		mongoClient.connect('mongodb://localhost:27017/Heat', function(err, db){
			if(err){
				cb({'error': err});
			}
			heatInfo.timestamp = new Date().getTime();
			db.collection('heat').insert(heatInfo, function(err, userCreated){
				if(err){
					cb({'error': err})
				}
				cb(userCreated);				
			})
		})
	}
}
var mongoClient = require('mongodb');

module.exports = {
	'find': function(cb){
		mongoClient.connect('mongodb://localhost:27017/users', function(err, db){
			if(err){
				cb({'error': err});
			}
			db.collection('users').find().toArray(function(err, usersFound){
				if(err){
					cb({'error': err})
				}
				cb(usersFound);				
			})
		})
	},
	'create': function(userInfo, cb){
		mongoClient.connect('mongodb://localhost:27017/users', function(err, db){
			if(err){
				cb({'error': err});
			}
			db.collection('users').insert(userInfo, function(err, userCreated){
				if(err){
					cb({'error': err})
				}
				cb(userCreated);				
			})
		})
	}
}
var aws = require('aws-sdk');
var promise = require('bluebird');
var s3 = new aws.S3();
aws.config.setPromisesDependency(require('bluebird'));

module.exports = {
	upload: function(params, cb){
		var putObjectPromise = s3.putObject(params).promise();
		putObjectPromise.then(function(data) {
		  cb ({'msg': 'Data Uploaded Successfully.'})
		}).catch(function(err) {
		  cb ({'msg': 'Error: '+err.msssage});
		});
	}
}
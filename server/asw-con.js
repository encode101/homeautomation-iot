var aws = require('aws-sdk');
var s3 = new AWS.S3();

var bucketName = 'node-sdk-sample-' + uuid.v4();
var keyName = 'hello_world.txt';

s3.createBucket({Bucket: bucketName}, function() {
  var params = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
  s3.putObject(params, function(err, data) {
    if (err)
      console.log(err)
    else
      console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
  });
});

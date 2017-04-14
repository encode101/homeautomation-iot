
var bodyParser = require('body-parser');
var PubNub = require('pubnub')
/*router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
*/


var pubnub = new PubNub({
    subscribeKey: "sub-c-140c3668-c679-11e6-bb2e-02ee2ddab7fe",
    publishKey: "pub-c-f8903dae-bcfa-4ff6-9702-d5c094e59118",
    secretKey: "sec-c-M2M3OWZjMjItZTdjOC00MmQzLTkyYjItZDczOGMyMDQwNDA3",
    ssl: true
})

/*pubnub.addListener({
        status: function(statusEvent) {
            if (statusEvent.category === "PNConnectedCategory") {
                _publishSampleMessage();
            }
        },
        message: function(message) {
            console.log("New Message!!", message);
        },
        presence: function(presenceEvent) {
            // handle presence
        }
})  */

function _publishSampleMessage() {
	console.log("Since we're publishing on subscribe connectEvent, we're sure we'll receive the following publish.");
	var publishConfig = {
	    channel : "gitIOT",
	    message : "Hello from PubNub Docs!"
	}
	pubnub.publish(publishConfig, function(status, response) {
	    console.log(status, response);
	})
} 

/*pubnub.subscribe({
        channels: ['gitIOT'] 
    });*/

module.exports ={
	pull: function(req, res, next){
		_publishSampleMessage();
		res.send({"Response": "Git Pull Origin Master"})
	}
}
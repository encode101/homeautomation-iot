var PubNub = require('Pubnub');

module.exports = {
    'sendNotification': function(req, res){
        function publish() {
            
             pubnub = new PubNub({
                 publishKey : 'pub-c-f8903dae-bcfa-4ff6-9702-d5c094e59118',
                 subscribeKey : 'sub-c-140c3668-c679-11e6-bb2e-02ee2ddab7fe'
             })
                
             function publishSampleMessage() {
                 console.log("Since we're publishing on subscribe connectEvent, we're sure we'll receive the following publish.");
                 var publishConfig = {
                     channel : "hello_world",
                     message : "Hello from PubNub Docs!"
                 }
                 pubnub.publish(publishConfig, function(status, response) {
                     console.log(status, response);
                 })
             }
                
             pubnub.addListener({
                 status: function(statusEvent) {
                     if (statusEvent.category === "PNConnectedCategory") {
                         publishSampleMessage();
                     }
                 },
                 message: function(message) {
                     console.log("New Message!!", message);
                 },
                 presence: function(presenceEvent) {
                     // handle presence
                 }
             })      
             console.log("Subscribing..");
             pubnub.subscribe({
                 channels: ['hello_world'] 
             });
         };
         publish()

        res.send('Notification Sent!')
    }
}
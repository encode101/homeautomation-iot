function initPubnub() {
    
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
             $("#messageLog").append("<li class='list-group-item'> "+ message.message +")</li>");
             console.log("New Message!!", message);
         },
         presence: function(presenceEvent) {
             // handle presence
         }
     })      
    function fetchHistory(pubnub){
        pubnub.fetchMessages(
            { 
                channels: ['hello_world'],
                count: 5 
            }, 
            (status, response) => {
                if(status.error !== true){
                   let count = 0;
                   while(count < response.channels.hello_world.length){
                    $("#historyMessageLog").append("<li class='list-group-item'> "+ response.channels.hello_world[count].message+"</li>");
                    count++;
                   }
                   $('#loadHistory').hide();
                }
                // handle response
            }
        );
    }
    
     pubnub.subscribe({
         channels: ['hello_world'] 
     });
     
     fetchHistory(pubnub);

     
     
 };

 initPubnub();

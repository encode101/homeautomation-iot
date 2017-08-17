var PubNub = require('pubnub');
var rpio = require('rpio');
//console.log(rpio)
function _lightLED(pin){
console.log("Pin : "+pin);
    var pin = pin;		/* P12/GPIO18 */
    var range = 1024;	/* LEDs can quickly hit max brightness, so only use */
    var max = 128;		/*   the bottom 8th of a larger scale */
    var clockdiv = 8;	/* Clock divider (PWM refresh rate), 8 == 2.4MHz */
    var interval = 5;	/* setInterval timer, speed of pulses */
    var times = 5;		/* How many times to pulse before exiting */
    
    /*
     * Enable PWM on the chosen pin and set the clock and range.
     */
    rpio.open(pin, rpio.PWM);
    rpio.pwmSetClockDivider(clockdiv);
    rpio.pwmSetRange(pin, range);
    
    /*
     * Repeatedly pulse from low to high and back again until times runs out.
     */
    var direction = 1;
    var data = 0;
    var pulse = setInterval(function() {
        rpio.pwmSetData(pin, data);
        if (data === 0) {
            direction = 1;
            if (times-- === 0) {
                clearInterval(pulse);
                rpio.open(pin, rpio.INPUT);
                return;
            }
        } else if (data === max) {
            direction = -1;
        }
        data += direction;
    }, interval, data, direction, times);
}

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
//                     console.log(status, response);
                 })
             }
                
             pubnub.addListener({
                 status: function(statusEvent) {
                     if (statusEvent.category === "PNConnectedCategory") {
                         publishSampleMessage();
                     }
                 },
                 message: function(message) {
  //                   console.log("New Message!!", message);
                     _lightLED(32);	// 32 for yellow and 12 for red.
		var ytrue = false;
		 for(var i=0; i++; i<50){
			if(ytrue){
			   _lightLED(32);
				yfalse = false;
console.log("inside if")
			}else{
			   _lightLED(12);
				yfalse = true;
console.log("inside else")			
}
	}
                 },
                 presence: function(presenceEvent) {
                     // handle presence
                 }
             })      
    //         console.log("Subscribing..");
             pubnub.subscribe({
                 channels: ['hello_world'] 
             });
         };
         publish()

        res.send('Notification Sent!')
    }
}

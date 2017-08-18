function viewCam(){
    $("#message").html("Loading")
    $.ajax({
        url: 'http://192.168.1.40:3030/notification/send',
        dataType: "JSONP",
        success: function(data){
            $("#message").html(data)
        },
        error: function(err){
            $("#message").html("Error :"+JSON.stringify(err))
        }
    })
}
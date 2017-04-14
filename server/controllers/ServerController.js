
_getLocalTime = function(){
	return new Date;
}

module.exports = {
	"status":  function(req, res){
		res.send({"status": "[[ "+_getLocalTime()+"]] Status : OK"})
	}
}
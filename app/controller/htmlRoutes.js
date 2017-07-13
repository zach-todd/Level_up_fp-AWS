var path = require("path");

module.exports = function(app){

	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/index.html"))
	});
	app.get("/camps", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/camps.html"))
	});
	app.get("/coaches", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/coaches.html"))
	});
	app.get("/lessons", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/lessons.html"))
	});
	app.get("/schedule", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/schedule.html"))
	});
	app.get("/teamassist", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/teamassist.html"))
	});
	
};
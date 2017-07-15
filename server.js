var express = require("express");
var bodyParser = require("body-parser");
var expressHandlebars= require("express-handlebars");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var mongojs = require("mongojs");

var Coach = require("./app/models/coach.js");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



require("./app/controller/htmlRoutes")(app);
app.use(express.static(__dirname + "/app"));


var db =process.env.MONGODB_URI || "mongodb://localhost/CoachList";
var databaseUrl = "CoachList";
var collections = ["coaches"];

var dbb= mongojs(databaseUrl, collections)

mongoose.connect(db, function(error){
  if(error){
    console.log(error);
  }
  else{
    console.log("mongoose connection is successful")
  }
});
app.get("/all", function(req,res){
  db.coaches.find({},function(error, found){
    if(error){
      console.log(error);
    }
    else{
      res.json(found);
    }
  })
})

app.post("/submit", function(req,res){

  var coach = new Coach(req.body);

  coach.save(function(error,doc){
    if(error){
      res.send(error);
    }
    else{
      res.send(doc);
    }
  });
});
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

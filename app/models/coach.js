var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var coachSchema = new Schema({
	name: {
		type:String,
		require: true
	},
	sports: {
		type: String
	},
	age : {
		date: String
	},
	bio: {
		type: String,
		require : true
	},
	experience : {
		type : String
	},
});

var Coach = mongoose.model("Coach", coachSchema);

module.exports = Coach; 
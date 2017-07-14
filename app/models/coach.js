var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CoachSchema = new Schema({
	name: {
		type:String,
		require: "Name is required"
	},
	nickname: {
		type: String,
	},
	sports: {
		type: String
	},
	age : {
		type: Date,
		date: String
	},
	bio: {
		type: String,
		require : true
	},
	phone: {
		type: String
	},
	email: {
		type: String,
	    unique: true,
	    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
	},
	userCreated: {
		type: Date,
		default: Date.now
	},
	password: {
		type: String,
	    trim: true,
	    required: "Password is Required",
	    validate: [
		      function(input) {
		        return input.length >= 6;
		      },
		      "Password should be longer."
	    ]
	}
});

var Coach = mongoose.model("Coach", CoachSchema);

module.exports = Coach; 
/** @format */

const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://franklin:12345@cluster0.xcjqq5v.mongodb.net/?retryWrites=true&w=majority",
			//USE THIS TO CONNECT YOU DATABASE: replace username and password: "mongodb+srv://username:password@cluster0.xcjqq5v.mongodb.net/?retryWrites=true&w=majority",

			() => {
				console.log("Database Connected");
			}
		);
	} catch (error) {
		console.log(error);
	}
};

module.exports = connectDB;

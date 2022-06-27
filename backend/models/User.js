const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isAdmin: {
			type: Boolean,
			default: false
		},
		img: { type: String }
	},
	{ timestamps: true } //adds createdAt & updatedAt timestamps
);

module.exports = mongoose.model("User", UserSchema);

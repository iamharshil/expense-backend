import { Schema, model, models } from "mongoose";

const User = models.User || model("User", new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			minLength: 3,
			maxLength: 30,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			minLength: 4,
			// maxLength: 20,
		},
		password: {
			type: String,
			required: true,
			minLength: 4,
			maxLength: 256,
		},
	},
	{ timestamps: true, versionKey: false },
));
export default User;

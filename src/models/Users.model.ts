import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			minLength: 4,
			maxLength: 20,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			minLength: 4,
			maxLength: 20,
		},
		password: {
			type: String,
			required: true,
			minLength: 4,
			maxLength: 20,
		},
	},
	{ timestamps: true, versionKey: false },
);

const User = models.User || model("User", UserSchema);
export default User;

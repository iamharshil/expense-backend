import { Request, Response } from "express";
import User from "../../../models/Users.model";
import { current_time, encrypt_data, generate_token } from "../../../utils/helper.util";

const index = async (req: Request, res: Response) => {
	try {
		const users = await User.find().select("_id name email");
		return res.status(200).json({ success: true, message: "All users data", data: users });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};

const register = async (req: Request, res: Response) => {
	try {
		const rawData = req.body;
		console.log("rawData", rawData);
		const user = new User({ username: rawData.username, email: rawData.email, password: encrypt_data(rawData.password), date: current_time() });
		await user.save();
		return res.status(200).json({ success: true, message: "User created successfully." });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};

const login = async (req: Request, res: Response) => {
	try {
		const rawData = req.body;
		const user = await User.find({ $or: [{ username: rawData.username }, { email: rawData.email }] });
		if (user && user.length > 0) {
			const match_password = user[0].password === encrypt_data(rawData.password);
			if (match_password) {
				const token = generate_token(encrypt_data(user[0]._id));
				if (token) {
					res.cookie("auth_token", token, { maxAge: 86400, httpOnly: true });
					return res.status(200).json({ success: true, message: "Login Successful", token: token });
				} else {
					return res.status(500).json({ success: false, message: "Internal Server Error" });
				}
			} else {
				return res.status(401).json({ success: false, message: "Invalid Password" });
			}
		} else {
			return res.status(401).json({ success: false, message: "Invalid Username or Email" });
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};

export { index, register, login };

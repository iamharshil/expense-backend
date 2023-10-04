import crypto from "crypto";
import fs from "fs";
import { Console } from "console";
import jwt from "jsonwebtoken";
import { JWT_KEY } from "../config";
import Joi from "joi";
import { validateExpenseType, validateUserType } from "../types/helper.types";

export async function logger() {
	console.log("logger function called");
}

export const custom_logger = new Console({
	stdout: fs.createWriteStream(`${process.cwd()}/logs/stdout.log`, { flags: "a", encoding: "utf8" }),
	stderr: fs.createWriteStream(`${process.cwd()}/logs/stderr.log`, { flags: "a", encoding: "utf8" }),
	inspectOptions: { depth: 5 },
	colorMode: true,
});

export function validator() {
	console.log("validator function called");
}

export const current_time = () => {
	return Date.now();
};

export const encrypt_data = (data: string) => {
	const key = "this is key";
	const cipher = crypto.createCipher("aes192", key);
	let encrypted = cipher.update(data, "utf8", "hex");
	encrypted += cipher.final("hex");
	return encrypted;
};

export const decrypt_data = (data: string) => {
	const key = "this is key";
	const decipher = crypto.createDecipher("aes192", key);
	let decrypted = decipher.update(data, "hex", "utf8");
	decrypted += decipher.final("utf8");
	return decrypted;
};
export const generate_token = (data: string) => {
	return jwt.sign({ tokenized_data: data }, JWT_KEY, { expiresIn: "1 day" });
};

export const validate_user = async (data: validateUserType) => {
	return Joi.object({
		username: Joi.string().min(3).max(30).required(),
		email: Joi.string().min(4).required().email(),
		password: Joi.string().min(4).max(256).required(),
		repeat_password: Joi.ref("password"),
	}).validate(data);
};

export const validate_expense = async (data: validateExpenseType) => {
	return Joi.object({
		title: Joi.string().min(3).max(30).required(),
		amount: Joi.number().min(1).required(),
		category: Joi.string().min(3).max(30).required(),
	}).validate(data);
};

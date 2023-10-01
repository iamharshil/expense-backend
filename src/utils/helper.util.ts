import crypto from "crypto";
import fs from "fs";
import { Console } from "console";

export async function logger() {
	console.log("logger function called");
}

export const custom_logger = new Console({
    stdout: fs.createWriteStream(`${process.cwd()}/logs/stdout.log`, { flags: "a", encoding: "utf8" }),
    stderr: fs.createWriteStream(`${process.cwd()}/logs/stderr.log`, { flags: "a", encoding: "utf8" }),
    inspectOptions: { depth: 5 },
	colorMode: true
});

export function validator() {
	console.log("validator function called");
}

export const current_time = () => {
	return Date.now();
};

export const encrypt_data = (data: string) => {
	const key = 'this is key';
	const cipher = crypto.createCipher("aes192", key);
	let encrypted = cipher.update(data, "utf8", "hex");
	encrypted += cipher.final("hex");
	return encrypted;
}

export const decrypt_data = (data: string) => {
	const key = 'this is key';
	const decipher = crypto.createDecipher("aes192", key);
	let decrypted = decipher.update(data, "hex", "utf8");
	decrypted += decipher.final("utf8");
	return decrypted;
}
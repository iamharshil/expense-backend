import { Secret } from "jsonwebtoken";

declare namespace NodeJS {
	export interface ProcessEnv {
		MONGODB_URI: string;
		JWT_KEY: Secret;
		// define other variables as needed
	}
}

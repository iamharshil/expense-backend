import mongoose, { ConnectOptions } from "mongoose";
import { MONGODB_URI } from "../config";

let cachedConnection: typeof mongoose | null = null;

const MongoDB = async () => {
	try {
		if (cachedConnection) {
			console.log("MongoDB cached connection");
			return cachedConnection;
		}

		if (!MONGODB_URI) {
			return console.log("MONGODB_URI is not defined");
		}

		const options: ConnectOptions = {
			autoIndex: true,
		};

		const connection = await mongoose.connect(MONGODB_URI, options);
		cachedConnection = connection;
		console.log("MongoDB new connection");
		return connection;
	} catch (error) {
		console.log("Error while connecting to the database", error);
	}
};

export default MongoDB;

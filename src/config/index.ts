import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
const ENDPOINT = process.env.ENDPOINT || `http://localhost:${PORT}`;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_KEY: string = process.env.JWT_KEY;

export { PORT, ENDPOINT, MONGODB_URI, JWT_KEY };

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
const ENDPOINT = process.env.ENDPOINT || `http://localhost:${PORT}`;
const MONGODB_URI = process.env.MONGODB_URI;

export { PORT, ENDPOINT, MONGODB_URI };

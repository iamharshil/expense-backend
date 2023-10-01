import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
const endpoint = process.env.ENDPOINT || `http://localhost:${PORT}`;

export { PORT, endpoint };

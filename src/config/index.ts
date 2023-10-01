import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

// export
export default app;

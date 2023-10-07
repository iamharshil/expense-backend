import express from "express";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import fs from "fs";
import moment from "moment";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

// configuration
const app = express();
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors({
	credentials: true,
	origin: ['http://localhost:3000', "http://127.0.0.1:3000"]
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
morgan.token("date", () => moment().format());
app.use(morgan("dev"));
app.use(
	morgan("combined", {
		stream: fs.createWriteStream(`${process.cwd()}/logs/access.log`, { flags: "a", encoding: "utf8" }),
	}),
);
app.use(compression());
// subapp.on("mount", () => { ... });
app.disable("/api/v2");
app.set("title", "Expense API");

// export
export default app;

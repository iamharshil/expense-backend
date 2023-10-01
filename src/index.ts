import express from "express";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";

// configuration
const app = express();
app.use(express.json({ strict: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
app.use(morgan("dev"));
app.use(compression());
// subapp.on("mount", () => { ... });
app.disable("/api/v2");
app.set("title", "Expense API");

// export
export default app;

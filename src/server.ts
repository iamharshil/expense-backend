import http from "http";
import app from "./index";
import { PORT } from "./config";
import router from "./routes";
import MongoDB from "./services/Database";

const server = http.createServer(app);
app.use("/api", router);
app.all("/*", (req, res) => res.status(404).send("Not Found"));

server.listen(PORT, async () => {
	try {
		await MongoDB();
		console.log(`server listening on http://localhost:${PORT}`);
	} catch (err) {
		console.error(err);
	}
});

import http from "http";
import app from "./index";

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT, () => console.log(`server listening on http://localhost:${PORT}`));

import express from "express";
import v1Router from "./v1.route";
import v2Router from "./v2.route";

const router = express.Router();

router.use("/v1", v1Router);
router.use("/v2", v2Router);
router.all("/*", (req, res) => res.status(404).send("Not Found"));

export default router;

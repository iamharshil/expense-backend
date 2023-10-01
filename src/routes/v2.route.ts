import { Router } from "express";

const v2Router = Router();

v2Router.all("/*", (req, res) => res.status(404).send("Not Found"));

export default v2Router;

import { Router } from "express";
import * as AuthController from "./auth.controller";

const AuthRouter = Router();

AuthRouter.post("/register", AuthController.register)
	.post("/login", AuthController.login)
	.all("*", (req, res) => res.status(404).send("Not Found"));

export default AuthRouter;

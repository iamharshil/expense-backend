import { Router } from "express";
import ExpenseRouter from "../v1/expense/expense.route";
import AuthRouter from "../v1/expense/authentication/auth.route";

const v1Router = Router();

v1Router.use("/expense", ExpenseRouter);
v1Router.use("/auth", AuthRouter);
v1Router.all("/*", (req, res) => res.status(404).send("Not Found"));

export default v1Router;

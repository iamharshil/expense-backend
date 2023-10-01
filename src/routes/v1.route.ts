import { Router } from "express";
import ExpenseRouter from "../v1/expense/expense.route";

const v1Router = Router();

v1Router.use("/expense", ExpenseRouter);
v1Router.all("/*", (req, res) => res.status(404).send("Not Found"));

export default v1Router;

import { Router } from "express";
import * as ExpenseController from "./expense.controller";

const ExpenseRouter = Router();

ExpenseRouter.get("/", ExpenseController.index)
	.post("/", ExpenseController.create)
	.get("/:id", ExpenseController.show)
	.put("/:id", ExpenseController.update)
	.delete("/:id", ExpenseController.destroy)
	.all("/*", (req, res) => res.status(404).send("Not Found"));

export default ExpenseRouter;

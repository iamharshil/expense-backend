import { Router } from "express";
import * as ExpenseController from "./expense.controller";

const ExpenseRouter = Router();

ExpenseRouter.get("/", ExpenseController.index)
	.post("/create", ExpenseController.create)
	.get("/:id", ExpenseController.show)
	.put("/update/:id", ExpenseController.update)
	.delete("/delete:id", ExpenseController.destroy)
	.all("/*", (req, res) => res.status(404).send("Not Found"));

export default ExpenseRouter;

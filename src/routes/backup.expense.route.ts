import express, { Request, Response } from "express";
import MongoDB from "../../utils/Database";
import Expense from "../../models/Expense.model";

const ExpenseRouter = express.Router();

ExpenseRouter.get("/", async (req: Request, res: Response) => {
	try {
		await MongoDB();
		const expenses = await Expense.find().select("_id title amount category");
		return res.status(200).json({ success: true, data: expenses });
	} catch (error) {
		console.error("expense get:", error);
		return res.status(500).json({ success: false, message: "Internal server error." });
	}
});

ExpenseRouter.post("/create", async (req: Request, res: Response) => {
	try {
		await MongoDB();
		const { title, amount, category } = req.body;
		const expense = new Expense({ title, amount, category, date: Date.now() });
		await expense.save();
		return res.status(200).json({ success: true, data: expense });
	} catch (error) {
		console.error("expense create:", error);
		return res.status(500).json({ success: false, message: "Internal server error." });
	}
});

ExpenseRouter.get("/:id", async (req: Request, res: Response) => {
	try {
		await MongoDB();
		const expense = await Expense.findById(req.params.id);
		return res.status(200).json({ success: true, data: expense });
	} catch (error) {
		console.error("expense single:", error);
		return res.status(500).json({ success: false, message: "Internal server error." });
	}
});

ExpenseRouter.patch("/:id", async (request: Request, response: Response) => {
	try {
		await MongoDB();
		const { title, amount, category } = request.body;
		const expense = await Expense.findByIdAndUpdate(request.params.id, { title, amount, category }, { new: true });
		return response.status(200).json({ success: true, data: expense });
	} catch (error) {
		console.error("expense update:", error);
		return response.status(500).json({ success: false, message: "Internal server error" });
	}
});

ExpenseRouter.delete("/:id", async (request: Request, response: Response) => {
	try {
		await MongoDB();
		const expense = await Expense.findByIdAndDelete(request.params.id);
		return response.status(200).json({ success: true, data: expense });
	} catch (error) {
		console.error("expense delete:", error);
		return response.status(500).json({ success: false, message: "Internal server error" });
	}
});

export default ExpenseRouter;

import { Request, Response } from "express";
import Expense from "../../models/Expense.model";
import { current_time } from "../../utils/helper.util";

const index = async (req: Request, res: Response) => {
	try {
		const expenses = await Expense.find().select("_id title amount category");
		return res.status(200).json({ success: true, message: "All expenses data", data: expenses });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};

const create = async (req: Request, res: Response) => {
	try {
		const rawData = req.body;
		const expense = new Expense({ title: rawData.title, amount: rawData.amount, category: rawData.category, date: current_time() });
		await expense.save();
		return res.status(200).json({ success: true, message: "Expense created successfully." });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};

const show = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const expense = await Expense.findById(id);
		return res.status(200).json({ success: true, message: "Success", data: expense });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};

const update = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const rawData = req.body;
		await Expense.findByIdAndUpdate(id, { title: rawData.title, amount: rawData.amount, category: rawData.category }, { new: true });
		return res.status(200).json({ success: true, message: "Expense updated successfully." });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};

const destroy = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		await Expense.findByIdAndDelete(id);
		return res.status(200).json({ success: true, message: "Expense deleted successfully." });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};

export { index, create, show, update, destroy };

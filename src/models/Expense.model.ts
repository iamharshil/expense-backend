import { Schema, model, models } from "mongoose";

const ExpenseSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			minLength: 4,
			maxLength: 20,
		},
		amount: {
			type: Number,
			required: true,
			min: 0,
		},
		category: {
			type: String,
			required: true,
			minLength: 4,
			maxLength: 20,
		},
	},
	{ timestamps: true, versionKey: false },
);

const Expense = models.Expense || model("Expense", ExpenseSchema);
export default Expense;

const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
    type: {
      type: String,
      required: [true, "Type is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    date: {
      type: String,
      required: [true, "Date is required"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("Expense", transactionSchema);
module.exports = transactionModel;
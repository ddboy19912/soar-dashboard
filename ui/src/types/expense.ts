export type ExpenseType = "entertainment" | "investment" | "bills" | "others";

export interface ExpenseCategory {
  category: ExpenseType;
  percentage: number;
  amount: number;
}

export interface DailyExpense {
  date: string;
  withdrawals: number;
  deposits: number;
}

export type TransactionType = "credit" | "debit";
export type TransactionCategory =
  | "entertainment"
  | "investment"
  | "bills"
  | "others";
export type TransactionStatus = "completed" | "pending" | "failed";
export type TransactionMethod = "card" | "paypal" | "transfer";

export interface Transaction {
  id: string;
  type: "credit" | "debit";
  amount: number;
  description: string;
  category:
    | "entertainment"
    | "investment"
    | "bills"
    | "others"
    | "shopping"
    | "food"
    | "transfer";
  date: string;
  merchant: string;
  status: "completed" | "pending" | "failed";
  transactionName: string;
  method: TransactionMethod;
}

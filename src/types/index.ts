export type { MonthlyBalance } from "./balance";
export type { Card } from "./card";
export type { Contact } from "./contact";
export type { DailyExpense, ExpenseCategory, ExpenseType } from "./expense";
export type {
  Transaction,
  TransactionCategory,
  TransactionStatus,
  TransactionType,
} from "./transaction";
export type { User } from "./user";

import { CustomComponents } from "react-day-picker";

export type ExtendedCustomComponents = Partial<CustomComponents> & {
  IconLeft?: React.ComponentType<React.ComponentProps<"svg">>;
  IconRight?: React.ComponentType<React.ComponentProps<"svg">>;
};

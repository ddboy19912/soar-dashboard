import { DailyExpense } from "@/types";

interface FormatAmountOptions {
  type: "credit" | "debit";
  abbreviated?: boolean;
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const formatBalance = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatAmount = (
  amount: number,
  options: FormatAmountOptions
): string => {
  const { type, abbreviated = true } = options;
  const prefix = type === "credit" ? "+" : "-";

  // Handles large numbers with abbreviation
  if (abbreviated && amount >= 10000) {
    const abbreviations = [
      { value: 1e12, symbol: "T" },
      { value: 1e9, symbol: "B" },
      { value: 1e6, symbol: "M" },
      { value: 1e3, symbol: "K" },
    ];

    const item = abbreviations.find((item) => amount >= item.value);
    if (item) {
      const shortenedAmount = amount / item.value;
      return `${prefix}$${shortenedAmount}${item.symbol}`;
    }
  }

  const formattedAmount = formatBalance(Math.round(amount));
  const fullAmount = `${prefix}$${formattedAmount}`;

  return fullAmount;
};

export const formatDayName = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { weekday: "long" });
};

export const formatChartData = (dailyExpenses: DailyExpense[]) => {
  return dailyExpenses.map((expense) => ({
    day: formatDayName(expense.date),
    withdraw: expense.withdrawals,
    deposit: expense.deposits,
  }));
};

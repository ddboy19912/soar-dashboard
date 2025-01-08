import { DailyExpense } from "@/types"

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)

  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export const formatAmount = (
  amount: number,
  type: "credit" | "debit"
): string => {
  const prefix = type === "credit" ? "+" : "-"
  return `${prefix}$${amount.toFixed(2)}`
}

export const formatDayName = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { weekday: "long" })
}

export const formatChartData = (dailyExpenses: DailyExpense[]) => {
  return dailyExpenses.map((expense) => ({
    day: formatDayName(expense.date),
    withdraw: expense.withdrawals,
    deposit: expense.deposits,
  }))
}

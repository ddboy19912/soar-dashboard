import { User } from "@/types"
import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3001",
})

export const apiService = {
  // User APIs
  getUserProfile: () => api.get("/user"),
  updateUserProfile: (data: Partial<User>) => api.patch("/user", data),

  // Card APIs
  getUserCards: () => api.get("/cards"),

  // Transaction APIs
  getRecentTransactions: () => api.get("/transactions"),

  // Expense Category APIs
  getExpenseCategories: () => api.get("/expenseCategories"),

  // Daily Expense APIs
  getDailyExpenses: () => api.get("/dailyExpenses"),

  // Contact APIs
  getUserContacts: () => api.get("/contacts"),

  // Monthly Balance APIs
  getMonthlyBalances: () => api.get("/monthlyBalances"),
}

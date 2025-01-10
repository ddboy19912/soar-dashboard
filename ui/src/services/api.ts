import { User } from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const apiService = {
  // User APIs
  getUserProfile: (id: string) => api.get(`/users/${id}`),
  updateUserProfile: (id: string, data: Partial<User>) =>
    api.patch(`/users/${id}`, data),

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
};

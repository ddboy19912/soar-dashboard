import { apiService } from "@/services/api";
import { ExpenseCategory } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useExpenseCategories = () => {
  return useQuery<ExpenseCategory[]>({
    queryKey: ["expenseCategories"],
    queryFn: async () => {
      const { data } = await apiService.getExpenseCategories();
      return data;
    },
  });
};

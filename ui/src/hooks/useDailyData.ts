import { apiService } from "@/services/api";
import { DailyExpense } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useDailyData = () => {
  return useQuery<DailyExpense[]>({
    queryKey: ["dailyExpenses"],
    queryFn: async () => {
      const { data } = await apiService.getDailyExpenses();
      return data;
    },
  });
};

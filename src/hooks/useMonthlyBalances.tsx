import { apiService } from "@/services/api"
import { MonthlyBalance } from "@/types"
import { useQuery } from "@tanstack/react-query"

export const useMonthlyBalances = () => {
  return useQuery<MonthlyBalance[]>({
    queryKey: ["monthlyBalances"],
    queryFn: async () => {
      const { data } = await apiService.getMonthlyBalances()
      return data
    },
  })
}

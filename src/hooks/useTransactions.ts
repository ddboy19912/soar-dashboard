import { apiService } from "@/services/api"
import { Transaction } from "@/types"
import { useQuery } from "@tanstack/react-query"

export const useTransactions = () => {
  return useQuery<Transaction[]>({
    queryKey: ["transactions"],
    queryFn: async () => {
      const { data } = await apiService.getRecentTransactions()
      return data
    },
  })
}

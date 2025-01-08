import { apiService } from "@/services/api"
import { useQuery } from "@tanstack/react-query"

export const useUserData = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await apiService.getUserProfile()
      return data
    },
  })
}

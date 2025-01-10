import { apiService } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useUserData = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    staleTime: 0,
    refetchOnWindowFocus: true,
    queryFn: async () => {
      const { data } = await apiService.getUserProfile(id);
      return data;
    },
  });
};

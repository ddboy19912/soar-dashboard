import { apiService } from "@/services/api";
import { Card } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useCards = () => {
  return useQuery<Card[]>({
    queryKey: ["cards"],
    queryFn: async () => {
      const { data } = await apiService.getUserCards();
      return data;
    },
  });
};

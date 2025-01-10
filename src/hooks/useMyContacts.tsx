import { apiService } from "@/services/api";
import { Contact } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useMyContacts = () => {
  return useQuery<Contact[]>({
    queryKey: ["contacts"],
    queryFn: async () => {
      const { data } = await apiService.getUserContacts();
      return data;
    },
  });
};

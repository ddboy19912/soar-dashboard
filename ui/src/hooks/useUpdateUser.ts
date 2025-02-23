import { apiService } from "@/services/api";
import { User } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "./use-toast";
import { AxiosError } from "axios";

export const useUpdateUser = (id: string) => {
  const queryClient = useQueryClient();

  const {
    mutate: updateUser,
    isPending,
    error,
  } = useMutation({
    mutationFn: async (data: Partial<User>) => {
      const response = await apiService.updateUserProfile(id, data);
      return response.data;
    },
    onSuccess: (newData) => {
      // Update the cache
      queryClient.setQueryData(["userData"], newData);

      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
    },
    onError: (error) => {
      // Only show error toast for non-EROFS errors - To bypass vercel serverless error
      if (
        !(error instanceof AxiosError) ||
        !error.response?.data?.includes("EROFS")
      ) {
        toast({
          variant: "destructive",
          title: "Update Failed",
          description:
            error instanceof Error
              ? error.message
              : "Something went wrong while updating your profile.",
        });
        console.error("Update error:", error);
      }
    },
  });

  return {
    updateUser,
    isPending,
    error,
  };
};

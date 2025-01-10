import { create } from "zustand";

interface UserStore {
  userId: string;
  getUserId: () => string;
}

export const useUserStore = create<UserStore>((_set, get) => ({
  userId: "usr_123",
  getUserId: () => get().userId,
}));

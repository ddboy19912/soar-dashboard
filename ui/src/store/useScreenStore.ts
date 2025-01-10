import { useEffect } from "react";
import { create } from "zustand";

interface ScreenState {
  isLargeScreen: boolean;
  setIsLargeScreen: (value: boolean) => void;
}

export const useScreenStore = create<ScreenState>((set) => ({
  isLargeScreen: window?.innerWidth >= 1200 || false,
  setIsLargeScreen: (value) => set({ isLargeScreen: value }),
}));

export const useScreenSize = () => {
  const setIsLargeScreen = useScreenStore((state) => state.setIsLargeScreen);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsLargeScreen]);

  return useScreenStore((state) => state.isLargeScreen);
};

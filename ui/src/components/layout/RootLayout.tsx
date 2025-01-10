import Navbar from "@/components/navigation/Navbar";
import Sidebar from "@/components/navigation/Sidebar";
import { useCallback, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "../ui/toaster";

const RootLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = useLocation().pathname;

  const isSettingsPath = pathname === "/settings";

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen]);

  const mobilePageBackground = isSettingsPath
    ? "bg-input-background"
    : "bg-white";

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Toaster />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div
        className={`flex-1 ml-0 chromebook:ml-[250px] ${mobilePageBackground} chromebook:bg-input-background overflow-hidden`}
      >
        <Navbar isSidebarOpen={isSidebarOpen} onMenuClick={toggleSidebar} />
        <main className="pt-[141px] chromebook:pt-[101px] w-full">
          <div className="container mx-auto chromebook:mx-0 chromebook:max-w-[1190px] px-[25px] pt-[1px] pb-5 md:px-8 chromebook:px-10 chromebook:pt-6 chromebook:pb-[30px] overflow-x-visible">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default RootLayout;

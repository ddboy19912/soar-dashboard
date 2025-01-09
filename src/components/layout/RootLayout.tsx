import Navbar from "@/components/navigation/Navbar"
import Sidebar from "@/components/navigation/Sidebar"
import { useCallback, useState } from "react"
import { Outlet } from "react-router-dom"
import { Toaster } from "../ui/toaster"

const RootLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false)
  }, [])

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen)
  }, [isSidebarOpen])

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className="flex-1 ml-0 chromebook:ml-[250px] bg-input-background">
        <Navbar isSidebarOpen={isSidebarOpen} onMenuClick={toggleSidebar} />
        <main className="pt-[101px]">
          <div className="container mx-auto px-10 py-6">
            <Outlet />
          </div>
        </main>
      </div>
      <Toaster />
    </div>
  )
}

export default RootLayout

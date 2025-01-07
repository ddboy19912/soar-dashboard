import Navbar from "@/components/navigation/Navbar"
import Sidebar from "@/components/navigation/Sidebar"
import { useCallback, useState } from "react"
import { Outlet } from "react-router-dom"

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
      <div className="flex-1 ml-0 chromebook:ml-[250px]">
        <Navbar isSidebarOpen={isSidebarOpen} onMenuClick={toggleSidebar} />
        <main className="pt-16">
          <div className="container mx-auto px-4 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default RootLayout

import Navbar from "@/components/navigation/Navbar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default RootLayout

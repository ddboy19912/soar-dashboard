import { Route, Routes } from "react-router-dom"
import { RootLayout } from "./components/layout"
import { Dashboard } from "./pages"

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App

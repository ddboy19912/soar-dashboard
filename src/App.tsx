import { Route, Routes } from "react-router-dom"
import { RootLayout } from "./components/layout"
import {
  Accounts,
  CreditCards,
  Dashboard,
  Investments,
  Loans,
  MyPrivileges,
  Services,
  Settings,
  Transactions,
} from "./pages"

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/credit-cards" element={<CreditCards />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/my-privileges" element={<MyPrivileges />} />
        <Route path="/services" element={<Services />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/transactions" element={<Transactions />} />
      </Route>
    </Routes>
  )
}

export default App

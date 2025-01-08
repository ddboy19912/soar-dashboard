import BalanceHistory from "./components/BalanceHistory"
import ExpenseStatistics from "./components/ExpenseStatistics"
import MyCards from "./components/MyCards"
import QuickTransfer from "./components/QuickTransfer"
import RecentTransactions from "./components/RecentTransactions"
import WeeklyActivity from "./components/WeeklyActivity"

const Dashboard = () => {
  return (
    <div>
      <div className="flex overflow-x-auto gap-[30px]">
        <MyCards />
        <RecentTransactions />
      </div>
      <div className="flex overflow-x-auto gap-[30px] mt-6">
        <WeeklyActivity />
        <ExpenseStatistics />
      </div>
      <div className="flex gap-[30px] mt-6">
        <QuickTransfer />
        <BalanceHistory />
      </div>
    </div>
  )
}

export default Dashboard

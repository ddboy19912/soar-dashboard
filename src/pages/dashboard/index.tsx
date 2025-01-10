import BalanceHistory from "./components/BalanceHistory"
import ExpenseStatistics from "./components/ExpenseStatistics"
import MyCards from "./components/MyCards"
import QuickTransfer from "./components/QuickTransfer"
import RecentTransactions from "./components/RecentTransactions"
import WeeklyActivity from "./components/WeeklyActivity"

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col chromebook:flex-row chromebook:overflow-x-auto gap-[22px] chromebook:gap-[30px] hide-scrollbar">
        <MyCards />
        <RecentTransactions />
      </div>
      <div className="flex flex-col lg:flex-row chromebook:overflow-x-auto gap-[22px] chromebook:gap-[30px] mt-[22px] chromebook:mt-6 hide-scrollbar">
        <WeeklyActivity />
        <ExpenseStatistics />
      </div>
      <div className="flex flex-col lg:flex-row gap-[22px] chromebook:gap-[30px] mt-[22px] chromebook:mt-6 hide-scrollbar">
        <QuickTransfer />
        <BalanceHistory />
      </div>
    </div>
  )
}

export default Dashboard

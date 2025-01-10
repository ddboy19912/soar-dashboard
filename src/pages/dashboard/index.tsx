import BalanceHistory from "./components/BalanceHistory"
import ExpenseStatistics from "./components/ExpenseStatistics"
import MyCards from "./components/MyCards"
import QuickTransfer from "./components/QuickTransfer"
import RecentTransactions from "./components/RecentTransactions"
import WeeklyActivity from "./components/WeeklyActivity"

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col chromebook:flex-row chromebook:overflow-x-auto gap-[22px] chromebook:gap-[30px] hide-scrollbar w-[calc(100vw-290px)]">
        <MyCards />
        <RecentTransactions />
        <div
          className="shrink-0 w-[10px] h-1 hidden chromebook:block"
          aria-hidden="true"
        />
      </div>
      <div className="flex flex-col lg:flex-row chromebook:overflow-x-auto gap-[22px] chromebook:gap-[30px] mt-[22px] chromebook:mt-6 hide-scrollbar w-[calc(100vw-290px)]">
        <WeeklyActivity />
        <ExpenseStatistics />
        <div
          className="shrink-0 w-[10px] h-1 hidden chromebook:block"
          aria-hidden="true"
        />
      </div>
      <div className="flex flex-col lg:flex-row chromebook:overflow-x-auto overflow-y-hidden gap-[22px] chromebook:gap-[30px] mt-[22px] chromebook:mt-6 hide-scrollbar w-[calc(100vw-290px)]">
        <QuickTransfer />
        <BalanceHistory />
        <div
          className="shrink-0 w-[10px] h-1 hidden chromebook:block"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

export default Dashboard

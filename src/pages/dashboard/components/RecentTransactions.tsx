import CustomCard from "@/components/common/CustomCard"
import Icon from "@/components/Icon"
import { useTransactions } from "@/hooks/useTransactions"
import { formatAmount, formatDate } from "@/lib/helpers"
import { Transaction } from "@/types"
import { TransactionMethod } from "@/types/transaction"

interface TransactionStyle {
  icon: string
  bgColor: string
}

const getTransactionStyle = (transaction: Transaction): TransactionStyle => {
  const styles: Record<TransactionMethod, TransactionStyle> = {
    card: {
      icon: "cards",
      bgColor: "bg-primary-yellow",
    },
    paypal: {
      icon: "paypal",
      bgColor: "bg-paypal-blue",
    },
    transfer: {
      icon: "money",
      bgColor: "bg-primary-green",
    },
  }

  return styles[transaction.method]
}

const TransactionCard = ({ transaction }: { transaction: Transaction }) => {
  const { icon, bgColor } = getTransactionStyle(transaction)

  const amountClasses =
    transaction.type === "credit" ? "text-positive-green" : "text-negative-red"

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[17px]">
        <div
          className={`size-[50px] chromebook:size-[55px] rounded-full flex items-center justify-center ${bgColor}`}
        >
          <Icon icon={icon} size={24} className="text-gray-700" />
        </div>
        <div>
          <p className="text-sm chromebook:text-base leading-[1.2] text-active-link font-medium truncate max-w-[151px]">
            {transaction.description}
          </p>
          <p className="text-xs chromebook:text-[15px] leading-[1.2] text-soft-blue font-normal mt-[7px]">
            {formatDate(transaction.date)}
          </p>
        </div>
      </div>
      <div>
        <p
          className={`text-sm chromebook:text-base leading-[1.2] font-medium ${amountClasses}`}
        >
          {formatAmount(transaction.amount, {
            type: transaction.type,
          })}
        </p>
      </div>
    </div>
  )
}

const RecentTransactions = () => {
  const { data: transactions } = useTransactions()

  return (
    <div>
      <h2 className="text-accent-blue">Recent Transactions</h2>
      <CustomCard
        containerClass="mt-[22px] chromebook:mt-5 w-full chromebook:w-[350px] h-[235px] border overflow-y-auto hide-scrollbar"
        contentClass="px-3 py-5 md:py-5 md:px-[25px] chromebook:py-[25px]"
      >
        <div className="space-y-3 chromebook:space-y-[10px]">
          {transactions?.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </div>
      </CustomCard>
    </div>
  )
}

export default RecentTransactions

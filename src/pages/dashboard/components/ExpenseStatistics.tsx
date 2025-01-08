import CustomCard from "@/components/common/CustomCard"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { useExpenseCategories } from "@/hooks/useExpenseCategories"
import { useCallback, useState } from "react"
import { Cell, Pie, PieChart } from "recharts"

const COLORS = ["#2f3554", "#f4813f", "#4169e1", "#1c1c1c"]

const chartConfig = {
  value: {
    label: "Amount",
  },
  entertainment: {
    label: "Entertainment",
    color: COLORS[0],
  },
  billExpense: {
    label: "Bill Expense",
    color: COLORS[1],
  },
  investment: {
    label: "Investment",
    color: COLORS[2],
  },
  others: {
    label: "Others",
    color: COLORS[3],
  },
} satisfies ChartConfig

const ExpenseStatistics = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const onPieEnter = useCallback((_: any, index: number) => {
    setActiveIndex(index)
  }, [])

  const onPieLeave = useCallback(() => {
    setActiveIndex(null)
  }, [])

  const renderCustomizedLabel = useCallback(
    ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      name,
      index,
    }: any) => {
      const RADIAN = Math.PI / 180
      const radius = innerRadius + (outerRadius - innerRadius) * 0.6
      const extraRadius = activeIndex === index ? 10 : 0
      const x = cx + (radius + extraRadius) * Math.cos(-midAngle * RADIAN)
      const y = cy + (radius + extraRadius) * Math.sin(-midAngle * RADIAN)

      return (
        <g className="pointer-events-none">
          <text
            x={x}
            y={y - 8}
            fill="white"
            textAnchor="middle"
            dominantBaseline="bottom"
            className={`text-[15px] font-bold transition-all duration-300 ${
              activeIndex === index ? "font-bold" : ""
            } ${activeIndex !== null && activeIndex !== index ? "opacity-50" : ""}`}
          >
            {`${(percent * 100).toFixed(0)}%`}
          </text>
          <text
            x={x}
            y={y + 8}
            fill="white"
            textAnchor="middle"
            dominantBaseline="top"
            className={`text-[12px] font-bold transition-all duration-300 capitalize ${
              activeIndex === index ? "font-medium" : ""
            } ${activeIndex !== null && activeIndex !== index ? "opacity-50" : ""}`}
          >
            {name}
          </text>
        </g>
      )
    },
    [activeIndex]
  )

  const { data: expenseData } = useExpenseCategories()

  return (
    <div>
      <h2 className="text-accent-blue">Expense Statistics</h2>
      <CustomCard
        containerClass="w-[350px] h-[326px] mt-[18px] overflow-hidden"
        contentClass="p-0"
      >
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square [&_.recharts-text]:fill-background"
        >
          <PieChart width={270} height={270}>
            <Pie
              data={expenseData}
              dataKey="amount"
              nameKey="category"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={125}
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
              isAnimationActive={false}
            >
              {expenseData?.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                  strokeWidth={4}
                  stroke="white"
                  className="transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `scale(${activeIndex === index ? 1.1 : 1})`,
                    transformOrigin: "center",
                  }}
                />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CustomCard>
    </div>
  )
}

export default ExpenseStatistics

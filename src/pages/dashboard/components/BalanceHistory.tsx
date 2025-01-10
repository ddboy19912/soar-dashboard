import CustomCard from "@/components/common/CustomCard";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMonthlyBalances } from "@/hooks/useMonthlyBalances";
import { useScreenSize } from "@/store/useScreenStore";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const BalanceHistory = () => {
  const { data: monthlyBalances } = useMonthlyBalances();
  const isLargeScreen = useScreenSize();

  const chartConfig = {
    balance: {
      label: "Balance",
      color: "rgb(45, 96, 255)",
    },
    growth: {
      label: "Growth",
      color: "rgb(45, 96, 255)",
    },
  } satisfies ChartConfig;

  return (
    <div>
      <h2 className="text-accent-blue">Balance History</h2>
      <CustomCard
        containerClass="h-[280px] w-full chromebook:w-[615px] mt-3 chromebook:mt-5 border-none chromebook:border"
        contentClass="py-[29px] px-[18px] chromebook:pr-[25px] chromebook:pl-[20px]"
      >
        <ChartContainer className="h-[216px] w-full" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={monthlyBalances}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#DFE5EE"
              vertical={true}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              dataKey="balance"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={isLargeScreen ? 50 : 40}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillBalance" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="rgb(45, 96, 255)"
                  stopOpacity={0.25}
                />
                <stop
                  offset="100%"
                  stopColor="rgb(45, 96, 255)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="balance"
              type="monotone"
              fill="url(#fillBalance)"
              fillOpacity={1}
              stroke="rgb(45, 96, 255)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CustomCard>
    </div>
  );
};

export default BalanceHistory;

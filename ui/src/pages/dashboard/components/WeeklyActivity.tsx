import CustomCard from "@/components/common/CustomCard";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";
import { useDailyData } from "@/hooks/useDailyData";
import { formatChartData } from "@/lib/helpers";
import { useScreenSize } from "@/store/useScreenStore";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  withdraw: {
    label: "Withdraw",
    color: "#ff0000",
  },
  deposit: {
    label: "Deposit",
    color: "#ff0000",
  },
} satisfies ChartConfig;

const WeeklyActivitySkeleton = () => {
  return (
    <div className="grid w-full gap-4 ml-[9px]">
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-20" />
      </div>
      <div className="relative aspect-[16/9]">
        <Skeleton className="absolute inset-0 h-full w-full rounded-md" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    </div>
  );
};

const WeeklyActivity = () => {
  const { data: dailyExpenses, isLoading } = useDailyData();
  const chartData = dailyExpenses ? formatChartData(dailyExpenses) : [];
  const isLargeScreen = useScreenSize();
  const barWidth = isLargeScreen ? 15 : 7;
  const barGap = isLargeScreen ? 12 : 5;

  return (
    <div>
      <h2 className="text-accent-blue">Weekly Activity</h2>
      <CustomCard
        containerClass="w-full chromebook:w-[730px] h-[326px] mt-3 chromebook:mt-[18px] border-none chromebook:border"
        contentClass="px-[18px] chromebook:px-[31.5px] py-[17px] chromebook:py-[28px]"
      >
        {isLoading ? (
          <WeeklyActivitySkeleton />
        ) : (
          <>
            <div className="flex items-center justify-end gap-4 mb-[22px]">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <span className="text-xs chromebook:text-sm text-muted-foreground">
                  Deposit
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-black" />
                <span className="text-xs chromebook:text-sm text-muted-foreground">
                  Withdraw
                </span>
              </div>
            </div>
            <ChartContainer config={chartConfig} className="h-[226px] w-full">
              <BarChart barGap={barGap} accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <XAxis
                  dataKey="day"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value.slice(0, 3)}`}
                  transform="translate(0, 15)"
                />
                <YAxis
                  fontSize={12}
                  width={29}
                  tickLine={false}
                  axisLine={false}
                />
                <Bar
                  dataKey="withdraw"
                  fill="#232323"
                  radius={30}
                  barSize={barWidth}
                />
                <Bar
                  dataKey="deposit"
                  fill="#396AFF"
                  radius={30}
                  barSize={barWidth}
                />
              </BarChart>
            </ChartContainer>
          </>
        )}
      </CustomCard>
    </div>
  );
};

export default WeeklyActivity;

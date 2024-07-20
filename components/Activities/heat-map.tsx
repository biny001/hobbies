"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useState } from "react";
const chartData = [
  { date: "2024-07-12", desktop: 0 },
  { date: "2024-07-13", desktop: 2 },
  { date: "2024-07-14", desktop: 3 },
  { date: "2024-07-15", desktop: 4 },
  { date: "2024-07-16", desktop: 5 },
  { date: "2024-07-18", desktop: 6 },
  { date: "2024-07-19", desktop: 6 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function HeatMap() {
  const [timeRange, setTimeRange] = useState("90d");
  const filterData = chartData.filter((item) => {
    const date = new Date(item.date);
    const now = new Date();
    let daysToSubtract = 10;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    console.log(now.getDate() - daysToSubtract);
    now.setDate(now.getDate() - daysToSubtract);
    return date >= now;
  });

  console.log(filterData, "This is my filter data");
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Chart</CardTitle>
        <CardDescription>
          Showing total logs for the last 7 days
        </CardDescription>
      </CardHeader>
      <CardContent className=" flex items-center justify-center">
        <ChartContainer
          config={chartConfig}
          className="max-h-[200px] w-full "
        >
          <AreaChart
            accessibilityLayer
            data={filterData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Jul 13 - Jul 20
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

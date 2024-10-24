import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

interface DataPoint {
  month: string;
  value: number;
}

const data: DataPoint[] = [
  { month: "Jan", value: 670 },
  { month: "Feb", value: 950 },
  { month: "Mar", value: 780 },
  { month: "Apr", value: 420 },
  { month: "May", value: 1000 },
  { month: "Jun", value: 580 },
  { month: "Jul", value: 880 },
  { month: "Aug", value: 350 },
  { month: "Sep", value: 860 },
  { month: "Oct", value: 670 },
  { month: "Nov", value: 950 },
  { month: "Dec", value: 600 },
];

const CustomTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({
  active,
  payload,
  label,
}) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="bg-white p-2 shadow-lg rounded-lg border border-gray-100">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-sm font-semibold text-gray-900">
        {payload[0].value?.toString()}
      </p>
    </div>
  );
};

const MonthlyBarChart: React.FC = () => {
  return (
    <div className="w-[85.56%] h-60 gap-4 font-inter font-normal text-center sm:w-[97.58%]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#F3F4F6"
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#64748B", fontSize: 10 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#64748B", fontSize: 10 }}
            ticks={[0, 200, 400, 600, 800, 1000]}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "#F3F4F6", opacity: 0.4 }}
          />
          <Bar dataKey="value" fill="#818CF8" maxBarSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyBarChart;

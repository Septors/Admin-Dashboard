import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from "recharts";

interface ChartData {
  data: { x: number; y: number }[];
}

interface DashboardChartProps {
  data: ChartData | null;
}

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-blue-600 text-white p-1 rounded text-xs">
        <div>{`X: ${payload[0].payload.x.toLocaleString()}`}</div>
        <div>{`Y: ${payload[0].value}%`}</div>
      </div>
    );
  }
  return null;
};

const DashboardChart = ({ data }: DashboardChartProps) => {
  if (!data) return null;

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data.data} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
          <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="2 2" />
          <XAxis dataKey="x" axisLine={false} tickLine={false} tickFormatter={v => `${v / 1000}k`} />
          <YAxis ticks={[20, 40, 60, 80, 100]} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="y"
            stroke="#2563eb"
            fill="rgba(37, 99, 235, 0.2)"
            strokeWidth={2}
            dot={{ r: 4, fill: "#2563eb" }}
            activeDot={{ r: 6, fill: "#2563eb", stroke: "#2563eb", strokeWidth: 1 }}
          />
          <Line type="monotone" dataKey="y" stroke="#2563eb" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  CartesianGrid,
} from "recharts";

interface DashboardChartProps {
  data: { data: { x: number; y: number }[] } | null;
}


const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#2563eb",
          color: "#fff",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
        }}
      >
        <div>{`X: ${payload[0].payload.x.toLocaleString()}`}</div>
        <div>{`Y: ${payload[0].value}%`}</div>
      </div>
    );
  }
  return null;
};

const DashboardChart: React.FC<DashboardChartProps> = ({ data }) => {
  if (!data) return null; // если данных нет — не рендерим график

  return (
    <div style={{ width: "100%", height: 300 }} tabIndex={-1}>
      <ResponsiveContainer>
        <LineChart data={data.data} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
          <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="2 2" />
          <XAxis dataKey="x" axisLine={false} tickLine={false} tickFormatter={(v) => `${v / 1000}k`} />
          <YAxis ticks={[20, 40, 60, 80, 100]} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="y" stroke="#2563eb" fill="rgba(37, 99, 235, 0.2)" strokeWidth={2} dot={{ r: 4, fill: "#2563eb" }} activeDot={{ r: 6, fill: "#2563eb", stroke: "#2563eb", strokeWidth: 1 }} />
          <Line type="monotone" dataKey="y" stroke="#2563eb" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DashboardChart;


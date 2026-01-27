import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StatCardData {
  title: string;
  value: number;
  icon: string;
  format?: "number" | "price";
  trend?: "Up" | "Down";
  different: number;
}

const DashboardCart = ({
  title,
  value,
  icon,
  format = "number",
  trend = "Up",
  different,
}: StatCardData) => {
  const isUp = trend === "Up";

  return (
    <div className="w-64 h-40 p-4 bg-white rounded-xl flex flex-col justify-between shadow-sm">
      <div className="flex justify-between">
        <div>
          <p className="mb-2">{title}</p>
          <p className="text-2xl font-bold">
            {format === "price" ? `$${value.toLocaleString()}` : value.toLocaleString()}
          </p>
        </div>
        <img src={icon} alt={title} className="w-14 h-14" />
      </div>
      <p className={`flex items-center ${isUp ? "text-green-500" : "text-red-500"}`}>
        {isUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        <span className="ml-1">{different}%</span> {isUp ? "Up" : "Down"} from yesterday
      </p>
    </div>
  );
};

export default DashboardCart;

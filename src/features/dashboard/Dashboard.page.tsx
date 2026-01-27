import { useState, useEffect } from "react";
import DashboardCart from "./components/DashboardCart";
import DashboardChart from "./components/DashboardChart";
import DashboardDeals from "./components/DashboardDeals";
import { DashboardResponse } from "./mockData";

const DashboardPage = () => {
  const [statCardData, setStatCardData] = useState(DashboardResponse.stats);
  const [salesChart, setSalesChart] = useState(DashboardResponse.chart);
  const [deals, setDeals] = useState(DashboardResponse.deals);


   useEffect(() => {
     setStatCardData(DashboardResponse.stats);
     setSalesChart(DashboardResponse.chart);
     setDeals(DashboardResponse.deals);
   }, []);

  return (
    <main className="p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Dashboard</h2>

      {/* Статистические карточки */}
      <div className="flex flex-wrap gap-6 mb-8">
        {Object.values(statCardData).map(item => (
          <DashboardCart
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            trend={item.trend}
            different={item.different}
            format={item.format}
          />
        ))}
      </div>

      {/* График продаж */}
      <div className="bg-white rounded-xl p-8 mb-8">
        <p className="text-xl font-bold mb-6">Sales Details</p>
        <DashboardChart data={salesChart} />
      </div>

      {/* Таблица сделок */}
      <div className="bg-white rounded-xl p-8">
        <h3 className="text-xl font-bold mb-4">Deals Details</h3>
        <DashboardDeals data={deals} />
      </div>
    </main>
  );
};

export default DashboardPage;

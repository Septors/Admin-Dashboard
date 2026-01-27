import UserIcon from "../../assets/icons/Dashboard/user-cart.png";
import OrderIcon from "../../assets/icons/Dashboard/order-cart.png";
import SalesIcon from "../../assets/icons/Dashboard/sales-cart.png";
import PendingIcon from "../../assets/icons/Dashboard/pending-cart.png";
import AppleWatchImg from "../../assets/images/Image.png";

export type Trend = "Up" | "Down";
export type StatFormat = "number" | "price";

export interface StatCardResponse {
  title: string;
  value: number;
  icon: string;
  format?: StatFormat;
  trend?: Trend;
  different: number;
}

export interface ChartData {
  data: { x: number; y: number }[];
}

export interface Deal {
  img: string;
  name: string;
  location: string;
  date: string;
  piece: number;
  amount: number;
  status: string;
}

export const DashboardResponse: {
  stats: Record<string, StatCardResponse>;
  chart: ChartData;
  deals: Deal[];
} = {
  stats: {
    totalUsers: {
      title: "Total User",
      value: 40689,
      icon: UserIcon,
      trend: "Up",
      different: 8.5,
    },
    totalOrders: {
      title: "Total Order",
      value: 10293,
      icon: OrderIcon,
      trend: "Up",
      different: 1.3,
    },
    totalSales: {
      title: "Total Sales",
      value: 89000,
      icon: SalesIcon,
      format: "price",
      trend: "Down",
      different: 4.3,
    },
    totalPending: {
      title: "Total Pending",
      value: 2040,
      icon: PendingIcon,
      trend: "Up",
      different: 1.8,
    },
  },
  chart: {
    data: [
      { x: 7000, y: 20 },
      { x: 10000, y: 50 },
      { x: 15000, y: 40 },
      { x: 20000, y: 85 },
      { x: 25000, y: 50 },
      { x: 30000, y: 55 },
      { x: 35000, y: 25 },
      { x: 40000, y: 30 },
      { x: 45000, y: 70 },
      { x: 50000, y: 60 },
      { x: 55000, y: 45 },
      { x: 60000, y: 55 },
    ],
  },
  deals: [
    {
      img: AppleWatchImg,
      name: "Apple Watch",
      location: "6096 Marjolaine Landing",
      date: "12.09.2019 - 12.53 PM",
      piece: 423,
      amount: 3429,
      status: "Delivered",
    },
    {
      img: AppleWatchImg,
      name: "Apple Watch",
      location: "6096 Marjolaine Landing",
      date: "12.09.2019 - 12.53 PM",
      piece: 423,
      amount: 34295,
      status: "Delivered",
    },
    {
      img: AppleWatchImg,
      name: "Apple Watch",
      location: "6096 Marjolaine Landing",
      date: "12.09.2019 - 12.53 PM",
      piece: 423,
      amount: 34295,
      status: "Delivered",
    },
    {
      img: AppleWatchImg,
      name: "Apple Watch",
      location: "6096 Marjolaine Landing",
      date: "12.09.2019 - 12.53 PM",
      piece: 423,
      amount: 34295,
      status: "Delivered",
    },
  ],
};

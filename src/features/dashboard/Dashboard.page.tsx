import DashboardCart from "./components/DashboardCart"
import UserIcon from "../../assets/icons/Dashboard/user-cart.png"
import OrderIcon from "../../assets/icons/Dashboard/order-cart.png"
import SalesIcon from "../../assets/icons/Dashboard/sales-cart.png"
import PendingIcon from "../../assets/icons/Dashboard/pending-cart.png"
import AppleWatchImg from "../../assets/images/Image.png"
import { useState, useEffect } from "react";
import DashboardChart from "./components/DashboardChart"
import DashboardDeals from "./components/DashboardDeals"

interface ChartData {
    data: { x: number; y: number }[];
}


interface Deal {
    img: string,
    name: string,
    location: string,
    date: string,
    piece: number,
    amount: number,
    status: string,
}

const DashboardResponse = {
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
        ]
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

    ]

}

const DashboardPage = () => {
    const [statCardData, setstatCardData] = useState<Record<string, any> | null>(null);
    const [salesChart, setSalesChart] = useState<ChartData | null>(null);
    const [deals, setDeals] = useState<Deal[]>([]);

    useEffect(() => {
        setstatCardData(DashboardResponse.stats)
        setSalesChart(DashboardResponse.chart)
        setDeals(DashboardResponse.deals)
    }, [])

    return (
        <main className="p-[30px]">
            <h2 className="text-[32px] font-bold mb-[27px]">Dashboard</h2>
            <div>
                <div className="flex justify-between gap-6 mb-[30px]">
                    {statCardData &&
                        Object.values(statCardData).map((item) => (
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
                <div className="bg-white rounded-[14px] px-[32px] pt-[37px] pb-[58px]">
                    <p className="mb-[51px] text-[24px] font-bold">Sales Details</p>
                    <DashboardChart data={salesChart} />
                </div>
                <div className="px-[32px] pt-[37px] mt-[28px] bg-white">
                    <h3 className="text-[24px] font-bold mb-[11px]">Deals Details</h3>
                    <DashboardDeals data={deals} />
                </div>
            </div>
        </main>
    )
}
export default DashboardPage;

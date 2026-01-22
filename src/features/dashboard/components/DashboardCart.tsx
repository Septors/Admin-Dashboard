import { ArrowUpRight, ArrowDownRight } from "lucide-react";

type StatFormat = "number" | "price";

type Trend = "Up" | "Down";

interface StatCardData {
    title: string;
    value: number;
    icon: string;
    format?: StatFormat;
    trend?: Trend;
    different: number;


}


const DashboardCart = ({ title, value, icon, format = "number", trend = "Up", different }: StatCardData) => {
    return (
        <div className="w-[262px] h-[161px] p-4 bg-[#FFFFFF] rounded-[14px] flex flex-col justify-between ">
            <div className="flex justify-between ">
                <div >
                    <p className="mb-4">{title}</p>
                    {format == "price" ? (<p className="text-[26px] font-bold">${value.toLocaleString()}</p>) : (<p className="text-[26px] font-bold">{value.toLocaleString()}</p>)}
                </div>
                <img src={icon} alt="" className="w-[60px] h-[60px]" />
            </div>
            {trend == "Up" ? (<p className="flex items-center"><ArrowUpRight size={16} color="#00B69B" /> <span className="text-[#00B69B] mr-1">{different}% </span>  Up from yesterday</p>) : (<p className="flex items-center"><ArrowDownRight size={16} color="#F93C65" /> <span className="text-[#F93C65] mr-1">{different}% </span> Down from yesterday</p>)}
        </div>
    )
}

export default DashboardCart;
type Status = "Completed" | "Processing" | "Rejected" | "On Hold";


export interface OrderProps {
    id: number,
    name: string,
    address: string,
    date: string,
    type: string,
    status: string;
}
interface OrderList {
    data: OrderProps[]
};

const OrderList = ({ data }: OrderList) => {
    return (
        <table className="min-w-full bg-white  rounded-[40px]">
            <thead className="rounded-tl-[20px]">
                <tr >
                    <th className="px-10 py-4 text-left font-bold rounded-tl-[20px] ">ID</th>
                    <th className="px-4 py-2 text-left font-bold">NAME</th>
                    <th className="px-4 py-2 text-left font-bold">ADDRESS</th>
                    <th className="px-4 py-2 text-left font-bold">DATE</th>
                    <th className="px-4 py-2 text-left font-bold">TYPE</th>
                    <th className="px-4 py-2 text-left font-bold rounded-tr-[20px] ">STATUS</th>
                </tr>
            </thead>
            <tbody>
                {data.map((order) => (
                    <tr>
                        <td className="px-10 py-[28px]">{order.id}</td>
                        <td className="px-4 py-[28px]">{order.name}</td>
                        <td className="px-4 py-[28px]">{order.address}</td>
                        <td className="px-4 py-[28px]">{order.date}</td>
                        <td className="px-4 py-[28px]">{order.type}</td>
                        <td
                            className={`px-4 py-2 font-bold ${order.status === "Completed" ? "text-green-600" :
                                order.status === "Processing" ? "text-blue-600 " :
                                    order.status === "Rejected" ? "text-red-600" :
                                        "text-yellow-600"
                                }`}
                        >{order.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default OrderList;
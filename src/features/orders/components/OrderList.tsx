type Status = "Completed" | "Processing" | "Rejected" | "On Hold";

export interface OrderProps {
    id: number;
    name: string;
    address: string;
    date: string;
    type: string;
    status: Status;
}

interface OrderListProps {
    data: OrderProps[];
}

const statusColors: Record<Status, string> = {
    Completed: "text-green-600",
    Processing: "text-blue-600",
    Rejected: "text-red-600",
    "On Hold": "text-yellow-600",
};

const OrderList = ({ data }: OrderListProps) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-2xl">
                <thead>
                    <tr>
                        <th className="px-10 py-4 text-left font-bold rounded-tl-2xl">ID</th>
                        <th className="px-4 py-4 text-left font-bold">NAME</th>
                        <th className="px-4 py-4 text-left font-bold">ADDRESS</th>
                        <th className="px-4 py-4 text-left font-bold">DATE</th>
                        <th className="px-4 py-4 text-left font-bold">TYPE</th>
                        <th className="px-4 py-4 text-left font-bold rounded-tr-2xl">STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((order) => (
                        <tr key={order.id} className="border-b last:border-b-0">
                            <td className="px-10 py-6">{order.id}</td>
                            <td className="px-4 py-6">{order.name}</td>
                            <td className="px-4 py-6">{order.address}</td>
                            <td className="px-4 py-6">{order.date}</td>
                            <td className="px-4 py-6">{order.type}</td>
                            <td className={`px-4 py-6 font-bold ${statusColors[order.status]}`}>
                                {order.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;

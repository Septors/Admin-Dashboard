import { useEffect, useState, useMemo } from "react";
import OrderList from "./components/OrderList";
import type { OrderProps } from "./components/OrderList";
import { OrderData } from "./mockData";
import { getVisibleItems } from "../../utils/products";

type SortType = "type" | "name" | "status" | undefined;
type OrderType = "asc" | "desc" | undefined;

const OrderPage = () => {
    const [page, setPage] = useState(1);
    const [order, setOrder] = useState<OrderType>(undefined);
    const [sort, setSort] = useState<SortType>(undefined);
    const [limit, setLimit] = useState(9);
    const [orders, setOrders] = useState<OrderProps[]>([]);


    useEffect(() => {
        setOrders(OrderData);
    }, []);


    useEffect(() => {
        setPage(1);
    }, [sort, order, limit]);


    const visibleOrders = useMemo(() => {
        return getVisibleItems(orders, sort, order, page, limit);
    }, [orders, page, limit, sort, order]);

    const handleReset = () => {
        setSort(undefined);
        setOrder(undefined);
    };

    return (
        <div className="p-[30px] w-full max-w-[1200px] mx-auto">
            <h3 className="text-[32px] font-bold mb-[10px]">Order Lists</h3>

            <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-wrap justify-between items-end gap-4">
                <div className="flex gap-4 flex-wrap">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Sort by</span>
                        <select
                            className="px-4 py-2 text-sm border rounded-lg"
                            value={sort ?? ""}
                            onChange={(e) => {
                                const value = e.target.value as SortType | "";
                                setSort(value === "" ? undefined : value);
                            }}
                        >
                            <option value="">-</option>
                            <option value="type">Type</option>
                            <option value="name">Name</option>
                            <option value="status">Status</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Order</span>
                        <select
                            className="px-4 py-2 text-sm border rounded-lg"
                            value={order ?? ""}
                            onChange={(e) => {
                                const value = e.target.value as OrderType | "";
                                setOrder(value === "" ? undefined : value);
                            }}
                        >
                            <option value="">-</option>
                            <option value="asc">⬆ Asc</option>
                            <option value="desc">⬇ Desc</option>
                        </select>
                    </div>

                    <button
                        className="self-end text-sm text-gray-400 hover:text-gray-600 underline"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Items:</span>
                    <select
                        className="px-3 py-2 text-sm border rounded-lg"
                        value={limit}
                        onChange={(e) => setLimit(+e.target.value)}
                    >
                        <option value={9}>9</option>
                        <option value={12}>12</option>
                    </select>
                </div>
            </div>

            <div>
                <OrderList data={visibleOrders} />
            </div>
            {orders.length > limit && (
                <div className="flex items-center justify-center gap-4 mt-4">
                    <button onClick={() => setLimit(limit + limit)}
                        className=" flex items-center gap-4 py-2 px-4 rounded-md font-medium bg-[#4880FF] text-white transition-colors duration-200 hover:bg-[#3A6ED6] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#3A6ED6] focus:ring-offset-2 active:bg-[#355FC1 ">Show more</button>
                </div>
            )}
        </div>
    );
};

export default OrderPage;

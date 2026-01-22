import { useEffect, useState, useMemo } from "react"
import OrderList from "./components/OrderList";
import type { OrderProps } from "./components/OrderList";

type SortType = 'type' | 'name' | "status" | null
type OrderType = 'asc' | 'desc' | null


const OrderData = [
    {
        id: 1,
        name: "Christine Brooks",
        address: "089 Kutch Green Apt. 448",
        date: "04 Sep 2019",
        type: "Electric",
        status: "Completed"
    },
    {
        id: 2,
        name: "Christine Brooks",
        address: "089 Kutch Green Apt. 448",
        date: "04 Sep 2019",
        type: "Electric",
        status: "Processing"
    }, {
        id: 3,
        name: "Christine Brooks",
        address: "089 Kutch Green Apt. 448",
        date: "04 Sep 2019",
        type: "Electric",
        status: "Rejected"
    }, {
        id: 4,
        name: "Christine Brooks",
        address: "089 Kutch Green Apt. 448",
        date: "04 Sep 2019",
        type: "Electric",
        status: "On Hold"
    },
    {
        id: 1,
        name: "Christine Brooks",
        address: "089 Kutch Green Apt. 448",
        date: "04 Sep 2019",
        type: "Electric",
        status: "Completed"
    },
    {
        id: 2,
        name: "Christine Brooks",
        address: "089 Kutch Green Apt. 448",
        date: "04 Sep 2019",
        type: "Electric",
        status: "Processing"
    }, {
        id: 3,
        name: "Christine Brooks",
        address: "089 Kutch Green Apt. 448",
        date: "04 Sep 2019",
        type: "Electric",
        status: "Rejected"
    }, {
        id: 4,
        name: "Christine Brooks",
        address: "089 Kutch Green Apt. 448",
        date: "04 Sep 2019",
        type: "Electric",
        status: "On Hold"
    },
    {
        id: 1,
        name: "Christine Brooks",
        address: "089 Kutch Green Apt. 448",
        date: "04 Sep 2019",
        type: "Electric",
        status: "Completed"
    },
    {
        id: 2,
        name: "Christine Brooks",
        address: "089 Kutch Green Apt. 448",
        date: "04 Sep 2019",
        type: "Electric",
        status: "Processing"
    }, {
        id: 3,
        name: "Christine Brooks",
        address: "089 Kutch Green Apt. 448",
        date: "04 Sep 2019",
        type: "Electric",
        status: "Rejected"
    }, {
        id: 4,
        name: "Christine Brooks",
        address: "089 Kutch Green Apt. 448",
        date: "04 Sep 2019",
        type: "Electric",
        status: "On Hold"
    },
]

const OrderPage = () => {
    const [page, setPage] = useState(1)
    const [order, setOrder] = useState<OrderType>(null)
    const [sort, setSort] = useState<SortType>(null)
    const [limit, setLimit] = useState(9)
    const [orders, setOrders] = useState<OrderProps[]>([])

    useEffect(() => {
        setPage(1)
    }, [sort, order, limit])

    useEffect(() => {
        setOrders(OrderData)
    }, [])

    const visibleProducts = useMemo(() => {
        let res = [...orders]

        res.sort((a, b) => {

            if (sort === 'name') {
                return order === 'asc'
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name)
            }
            if (sort === 'type') {
                return order === 'asc'
                    ? a.type.localeCompare(b.type)
                    : b.type.localeCompare(a.type)
            }

            if (sort === 'status') {
                return order === 'asc'
                    ? a.status.localeCompare(b.status)
                    : b.status.localeCompare(a.status)
            }

            return 0
        })

        const start = (page - 1) * limit
        const end = start + limit

        return res.slice(start, end)
    }, [orders, page, limit, sort, order])

    return (
        <div className="p-[30px]">
            <h3 className="text-[32px] font-bold mb-[10px]">Order Lists</h3>
            <div>
                <div className="mb-[24px] text-[14px] font-bold flex gap-[10px] justify-between">
                    <div className="flex gap-[10px]">

                        <select
                            className="px-6 py-3 text-lg font-bold bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={sort ?? ''}
                            onChange={(e) => {
                                const value = e.target.value as SortType | ''
                                setSort(value === '' ? null : value)
                            }}
                        >
                            <option value="">—</option>
                            <option value="type">type</option>
                            <option value="name">name</option>
                            <option value="status">status</option>
                        </select>
                        <select
                            className="px-6 py-3 text-lg font-bold bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={order ?? ''}
                            onChange={(e) => {
                                const value = e.target.value as OrderType | ''
                                setOrder(value === '' ? null : value)
                            }}
                        >
                            <option value="">—</option>
                            <option value="asc">asc</option>
                            <option value="desc">desc</option>
                        </select>


                        <button
                            className="px-6 py-3 text-lg font-bold bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={() => {
                                setOrder(null),
                                    setSort(null)

                            }}>Reset</button>
                    </div>
                    <select
                        className="px-6 py-3 text-lg font-bold bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={limit} onChange={(e) => setLimit(+e.target.value)}>
                        <option value="9" className="">9</option>
                        <option value="12">12</option>
                    </select>
                </div>
            </div>
            <div>
                <OrderList data={visibleProducts} />
            </div>
        </div>
    )
}
export default OrderPage
import { useState, useEffect, useMemo } from "react"
import StockList from "../stock/component/StockList"
import { type StockProps } from "../stock/component/StockList"
import ImageWatch from "../../assets/icons/appleWatch6.png"

type SortType = 'category' | 'name' | null
type OrderType = 'asc' | 'desc' | null

const StockData = [
    {
        img: ImageWatch,
        name: 'Apple Watch Series 4',
        category: 'Digital Product',
        price: 690.00,
        piece: 63,
        colors: ["#000000", "#FFFFFF", "#FF5733","#4343EE"],
    },
    {
        img: ImageWatch,
        name: 'Apple Watch Series 4',
        category: 'Digital Product',
        price: 690.00,
        piece: 63,
        colors: ["#000000", "#FFFFFF", "#FF5733"],
    },
    {
        img: ImageWatch,
        name: 'Apple Watch Series 4',
        category: 'Digital Product',
        price: 690.00,
        piece: 63,
        colors: ["#000000", "#FFFFFF", "#FF5733"],
    },
    {
        img: ImageWatch,
        name: 'Apple Watch Series 4',
        category: 'Digital Product',
        price: 690.00,
        piece: 63,
        colors: ["#000000", "#FFFFFF", "#FF5733"],
    },
    {
        img: ImageWatch,
        name: 'Apple Watch Series 4',
        category: 'Digital Product',
        price: 690.00,
        piece: 63,
        colors: ["#000000", "#FFFFFF", "#FF5733"],
    },
]

const StocksPage = () => {
    const [page, setPage] = useState(1)
    const [order, setOrder] = useState<OrderType>(null)
    const [sort, setSort] = useState<SortType>(null)
    const [limit, setLimit] = useState(9)
    const [stocks, setStocks] = useState<StockProps[]>([])

    useEffect(() => {
        setPage(1)
    }, [sort, order, limit])

    useEffect(() => {
        setStocks(StockData)
    }, [])

    const visibleProducts = useMemo(() => {
        let res = [...stocks]

        res.sort((a, b) => {

            if (sort === 'name') {
                return order === 'asc'
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name)
            }
            if (sort === 'category') {
                return order === 'asc'
                    ? a.category.localeCompare(b.category)
                    : b.category.localeCompare(a.category)
            }


            return 0
        })

        const start = (page - 1) * limit
        const end = start + limit

        return res.slice(start, end)
    }, [stocks, page, limit, sort, order])

    return (
        <div className="p-[30px]">
            <h3 className="text-[32px] font-bold mb-[10px]">Order Lists </h3>
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
                <StockList data={visibleProducts} />
            </div>
        </div>
    )
}
export default StocksPage
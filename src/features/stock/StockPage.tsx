import { useState, useEffect, useMemo } from "react"
import StockList from "../stock/component/StockList"
import { type StockProps } from "../stock/component/StockList"
import { StockData } from "./mockData"
import { getVisibleItems } from "../../utils/products"
import EditProductModal from "./component/EditProductModal"

type SortType = 'category' | 'piece' | "price" | undefined
type OrderType = 'asc' | 'desc' | undefined



const StocksPage = () => {
    const [page, setPage] = useState(1)
    const [order, setOrder] = useState<OrderType>(undefined)
    const [sort, setSort] = useState<SortType>(undefined)
    const [limit, setLimit] = useState(9)
    const [stocks, setStocks] = useState<StockProps[]>([])
    const [deleteId, setDeleteId] = useState<number | null>(null);
    const [editingProduct, setEditingProduct] = useState<StockProps | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        setPage(1)
    }, [sort, order, limit])

    useEffect(() => {
        setStocks(StockData)
    }, [])

    const visibleProducts = useMemo(() => {
        return getVisibleItems(stocks, sort, order, page, limit)
    }, [stocks, page, limit, sort, order])

    const handleEdit = (product: StockProps) => {
        setEditingProduct(product);
        setIsModalOpen(true);
    };

    const handleUpdate = (updatedProduct: StockProps) => {
        setStocks(prev =>
            prev.map(p => (p.id === updatedProduct.id ? updatedProduct : p))
        );
        setIsModalOpen(false);
        setEditingProduct(null);
    };
    const openDeleteModal = (id: number) => {
        setDeleteId(id);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        if (deleteId !== null) {
            setStocks(prev => prev.filter(p => p.id !== deleteId));
        }
        setIsModalOpen(false);
        setDeleteId(null);
    };

    return (
        <div className="p-[30px]">
            <h3 className="text-[32px] font-bold mb-[10px]">Order Lists </h3>
            <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm border border-gray-200 flex justify-between items-end">
                <div className="flex gap-4">

                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Sort by</span>
                        <select className="px-4 py-2 text-sm border rounded-lg"
                            value={sort ?? ''}
                            onChange={(e) => {
                                const value = e.target.value as SortType | ''
                                setSort(value === '' ? undefined : value)
                            }}>
                            <option value="">-</option>
                            <option value="category">category</option>
                            <option value="piece">piece</option>
                            <option value="price">price</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Order</span>
                        <select className="px-4 py-2 text-sm border rounded-lg"
                            value={order ?? ''}
                            onChange={(e) => {
                                const value = e.target.value as OrderType | ''
                                setOrder(value === '' ? undefined : value)
                            }}>
                            <option value="">-</option>
                            <option value="asc">⬆ Asc</option>
                            <option value="desc">⬇ Desc</option>
                        </select>
                    </div>

                    <button className="self-end text-sm text-gray-400 hover:text-gray-600 underline"
                        onClick={() => {
                            setOrder(undefined),
                                setSort(undefined)

                        }}>
                        Reset
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Items:</span>
                    <select className="px-3 py-2 text-sm border rounded-lg"
                        value={limit} onChange={(e) => setLimit(+e.target.value)}>
                        <option value="9">9</option>
                        <option value="12">12</option>
                    </select>
                </div>
            </div>
            <div>
                <StockList
                    data={visibleProducts}
                    onDelete={openDeleteModal}
                    onEdit={handleEdit}
                />
            </div>
            {stocks.length > limit && (
                <div className="flex items-center justify-center gap-4 mt-4">
                    <button onClick={() => setLimit(limit + limit)}
                        className=" flex items-center gap-4 py-2 px-4 rounded-md font-medium bg-[#4880FF] text-white transition-colors duration-200 hover:bg-[#3A6ED6] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#3A6ED6] focus:ring-offset-2 active:bg-[#355FC1 ">Show more</button>
                </div>
            )}
            {deleteId !== null && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-[400px] shadow-xl">
                        <h2 className="text-xl font-bold mb-2">Delete Product</h2>
                        <p className="text-gray-600 mb-6">
                            Are you sure you want to delete this product?
                        </p>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setDeleteId(null)}
                                className="px-4 py-2 rounded-lg border hover:bg-gray-100"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {editingProduct && (
                <EditProductModal
                    product={editingProduct}
                    onClose={() => setEditingProduct(null)}
                    onSave={handleUpdate}
                />
            )}

        </div>
    )
}
export default StocksPage
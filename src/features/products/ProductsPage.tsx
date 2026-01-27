import { useEffect, useMemo, useState } from "react"
import { ProductCart, type Product } from "./components/ProductcCart"
import { mockProducts } from "./mockData"
import { getVisibleItems } from "../../utils/products"

type SortType = 'rating' | 'name' | undefined
type OrderType = 'asc' | 'desc' | undefined


const ProductsPage = () => {
  const [page, setPage] = useState(1)
  const [order, setOrder] = useState<OrderType>(undefined)
  const [sort, setSort] = useState<SortType>(undefined)
  const [limit, setLimit] = useState(9)
  const [products, setProducts] = useState<Product[]>([])


  useEffect(() => {
    setProducts(mockProducts)
  }, [])

  useEffect(() => {
    setPage(1)
  }, [sort, order, limit])


  const toggleLike = (id: number) => {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, liked: !p.liked } : p))
    );
  };

  const visibleProducts = useMemo(() => {
    return getVisibleItems(products,sort,order,page,limit)
  },[products, page, limit, sort, order])
  
  return (
    <div className="p-[30px]">
      <h3 className="text-[32px] font-bold mb-[10px]">Products</h3>
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
        <option value="rating">⭐ Rating</option>
        <option value="name">🔤 Name</option>
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

      <div className="grid grid-cols-3 gap-[30px]">
        {visibleProducts.map(product => (
          <ProductCart
            key={product.id}
            product={product}
            onToggleLike={toggleLike}
          />

        )
        )
        }
      </div>
      {products.length > limit && <div className="flex items-center justify-center gap-4 mt-[10px]">

        <button
          className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg hover:bg-blue-600 transition-colors duration-200"
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
        >
          ⬅
        </button>


        <span className="text-lg font-bold w-8 text-center">{page}</span>


        <button
          className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg hover:bg-blue-600 transition-colors duration-200"
          onClick={() => setPage(products.length/limit > page ? page+1:page)}
        >
          ➡
        </button>
      </div>}
    </div>
  )
}
export default ProductsPage
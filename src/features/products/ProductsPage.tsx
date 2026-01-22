import { useEffect, useMemo, useState } from "react"
import { ProductCart, type Product } from "./components/ProductcCart"
import ProductImg from "../../assets/images/Bitmap.png"


type SortType = 'rating' | 'name' | null
type OrderType = 'asc' | 'desc' | null

const mockProducts = [
  {
    id: 1,
    img: ProductImg,
    name: "Apple Watch Series 4",
    price: 120.00,
    rating: 3,
    countReview: 131,
    liked: false
  },
  {
    id: 2,
    img: ProductImg,
    name: "Bpple Watch Series 4",
    price: 120.00,
    rating: 4,
    countReview: 131,
    liked: true
  },
  {
    id: 3,
    img: ProductImg,
    name: "Apple Watch Series 4",
    price: 120.00,
    rating: 4,
    countReview: 131,
    liked: true
  }, {
    id: 4,
    img: ProductImg,
    name: "Apple Watch Series 4",
    price: 120.20,
    rating: 3,
    countReview: 131,
    liked: true
  },
  {
    id: 5,
    img: ProductImg,
    name: "Bpple Watch Series 4",
    price: 120.00,
    rating: 4,
    countReview: 131,
    liked: true
  },
  {
    id: 6,
    img: ProductImg,
    name: "Apple Watch Series 4",
    price: 120.00,
    rating: 4,
    countReview: 131,
    liked: true
  },
  {
    id: 7,
    img: ProductImg,
    name: "Apple Watch Series 4",
    price: 120.00,
    rating: 3,
    countReview: 131,
    liked: false
  },
  {
    id: 8,
    img: ProductImg,
    name: "Bpple Watch Series 4",
    price: 120.00,
    rating: 4,
    countReview: 131,
    liked: true
  },
  {
    id: 9,
    img: ProductImg,
    name: "Apple Watch Series 4",
    price: 120.00,
    rating: 4,
    countReview: 131,
    liked: true
  }, {
    id: 10,
    img: ProductImg,
    name: "Apple Watch Series 4",
    price: 120.20,
    rating: 3,
    countReview: 131,
    liked: true
  },
  {
    id: 11,
    img: ProductImg,
    name: "Bpple Watch Series 4",
    price: 120.00,
    rating: 4,
    countReview: 131,
    liked: true
  },
  {
    id: 12,
    img: ProductImg,
    name: "Apple Watch Series 4",
    price: 120.00,
    rating: 4,
    countReview: 131,
    liked: true
  }
]

const ProductsPage = () => {
  const [page, setPage] = useState(1)
  const [order, setOrder] = useState<OrderType>(null)
  const [sort, setSort] = useState<SortType>(null)
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
    let res = [...products]

    res.sort((a, b) => {
      if (sort === 'rating') {
        return order === 'asc'
          ? a.rating - b.rating
          : b.rating - a.rating
      }

      if (sort === 'name') {
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      }

      return 0
    })

    const start = (page - 1) * limit
    const end = start + limit

    return res.slice(start, end)
  }, [products, page, limit, sort, order])
  return (
    <div className="p-[30px]">
      <h3 className="text-[32px] font-bold mb-[10px]">Products</h3>
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
            <option value="rating">rating</option>
            <option value="name">name</option>
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
          onClick={() => setPage(page + 1)}
        >
          ➡
        </button>
      </div>}
    </div>
  )
}
export default ProductsPage
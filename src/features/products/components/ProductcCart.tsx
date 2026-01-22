

export interface Product {
  id: number,
  img: string,
  name: string,
  price: number,
  rating: number,
  countReview: number,
  liked: boolean,
}
interface StarRatingProps {
  rating: number
  max?: number
}

interface ProductCartProps {
  product: Product;
  onToggleLike: (id: number) => void;
}

export const StarRating = ({ rating, max = 5 }: StarRatingProps) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`full-${i}`} className="text-[#FF9500] text-[16px]">★</span>
      ))}

      {hasHalfStar && <span>☆</span>}

      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={`empty-${i}`}>☆</span>
      ))}
    </div>
  )
}


export const ProductCart = ({ product, onToggleLike }: ProductCartProps) => {
  return (
    <div className="w-[361px] h-[497px] p-[24px] bg-white ">
      <img src={product.img} alt={product.name} className="w-[337px] h-[304px] mb-[24px]" />
      <div className="flex justify-between ">
        <div>
          <p className="text-[18px] font-bold">{product.name}</p>
          <p className="text-[16px] text-[#4880FF] font-bold">${product.price}</p>
          <div className="flex gap-[10px] text-[14px]"><StarRating rating={product.rating} /> ({product.countReview})</div>
        </div>
        <button className="rounded-[50%] w-[44px] h-[44px]  bg-[#F9F9F9] " onClick={() => onToggleLike(product.id)} >{product.liked ? '❤️' : '🤍'}</button>
      </div>
      <button className="w-[128px] h-[36px] py-[5px] px-[22px] text-xs text-[#202224] font-bold bg-[#E2EAF8] rounded-[12px] mt-[10px]">Edit Product</button>
    </div>
  )
}




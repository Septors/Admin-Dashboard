import icon from "../../../assets/icons/pencil-write (1).png"
import icon2 from "../../../assets/icons/bin.png"


export interface StockProps {
    img: string,
    name: string,
    category: string,
    price: number,
    piece: number,
    colors: string[],
}

interface StockList {
    data: StockProps[]
};

const StockList = ({ data }: StockList) => {
    return (
        <table className="min-w-full bg-white  rounded-[40px]">
            <thead className="rounded-tl-[20px]">
                <tr >
                    <th className="px-10 py-4 text-left font-bold rounded-tl-[20px] ">Image</th>
                    <th className="px-4 py-2 text-left font-bold">Product Name</th>
                    <th className="px-4 py-2 text-left font-bold">Category</th>
                    <th className="px-4 py-2 text-left font-bold">Price</th>
                    <th className="px-4 py-2 text-left font-bold">Piece</th>
                    <th className="px-4 py-2 text-left font-bold">Available Color</th>
                    <th className="px-4 py-2 text-left font-bold rounded-tr-[20px] ">Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((product) => (
                    <tr>
                        <td className="px-10 py-[28px]"><img className="w-[60px] h-[60px]" src={product.img} alt="" /></td>
                        <td className="px-4 py-[28px]">{product.name}</td>
                        <td className="px-4 py-[28px]">{product.category}</td>
                        <td className="px-4 py-[28px]">${product.price}</td>
                        <td className="px-4 py-[28px]">{product.piece}</td>
                        <td className="px-4 py-[28px]">
                            <div className="flex gap-2">
                                {product.colors.map((color, index) => (
                                    <span
                                        key={index}
                                        className="w-4 h-4 rounded-full border border-gray-300"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </td>
                        <td className="px-4 py-[28px]">
                            <button className="p-[9px_16px] bg-[#FAFBFD] rounded-l-[8px]  border-[1px] hover:bg-[#DEDDDD]"><img className="h-[16px] w-[16px]" src={icon} alt="" /></button>
                            <button className="p-[9px_16px] bg-[#FAFBFD] rounded-r-[8px] border-[1px] hover:bg-[#DEDDDD] border-l-[#979797]" ><img className="h-[16px] w-[16px]" src={icon2} alt="" /></button>
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default StockList
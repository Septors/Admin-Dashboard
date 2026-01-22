
interface Deal {
  img: string,
  name: string,
  location: string,
  date: string,
  piece: number,
  amount: number,
  status: string
}
interface DealsData {
  data: Deal[]
}

const DashboardDeals = ({ data }: DealsData) => {
  return (
    <div >
      <table className="w-[100%] border-separate border-spacing-y-[24px]">
        <thead className="bg-[#F1F4F9] h-[48px] rounded-[100px]">
          <tr>
            <th className="rounded-l-lg">Product Name</th>
            <th>Location</th>
            <th>Date - Time</th>
            <th>Piece</th>
            <th>Amount</th>
            <th className="rounded-r-lg">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((deal, index) => (
            <tr key={index} className="text-center align-middle">
              <td className="flex gap-5 justify-center items-center">
                <img src={deal.img} alt={deal.name} width={32} />
                {deal.name}
              </td>
              <td>{deal.location}</td>
              <td>{deal.date}</td>
              <td>{deal.piece}</td>
              <td>${deal.amount.toLocaleString()}</td>
              <td className="py-[4px] px[14px] rounded-[14px] bg-[#00B69B] text-white">{deal.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DashboardDeals
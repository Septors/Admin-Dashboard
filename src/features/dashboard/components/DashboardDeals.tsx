interface Deal {
  img: string;
  name: string;
  location: string;
  date: string;
  piece: number;
  amount: number;
  status: string;
}

interface DealsData {
  data: Deal[];
}

const DashboardDeals = ({ data }: DealsData) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-y-6 text-center">
        <thead className="bg-gray-100">
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
          {data.map((deal, idx) => (
            <tr key={idx} className="align-middle">
              <td className="flex items-center justify-center gap-2">
                <img src={deal.img} alt={deal.name} width={32} />
                {deal.name}
              </td>
              <td>{deal.location}</td>
              <td>{deal.date}</td>
              <td>{deal.piece}</td>
              <td>${deal.amount.toLocaleString()}</td>
              <td className="py-1 px-3 rounded bg-green-500 text-white">{deal.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardDeals;

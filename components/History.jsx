const History = () => {
    return ( 
        <>
            <table className="min-w-full bg-white rounded shadow overflow-hidden">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left bg-accent2 text-white">ID</th>
                  <th className="px-4 py-2 text-left bg-accent2 text-white">Reference</th>
                  <th className="px-4 py-2 text-left bg-accent2 text-white">Detail</th>
                  <th className="px-4 py-2 text-left bg-accent2 text-white">Amount</th>
                </tr>
              </thead>
              <tbody>
                {/* Example data, replace with your dynamic data */}
                <tr>
                  <td className="px-4 py-2 border-b">1</td>
                  <td className="px-4 py-2 border-b">REF123456</td>
                  <td className="px-4 py-2 border-b">Buy</td>
                  <td className="px-4 py-2 border-b">₦50,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">2</td>
                  <td className="px-4 py-2 border-b">REF654321</td>
                  <td className="px-4 py-2 border-b">Sell</td>
                  <td className="px-4 py-2 border-b">₦25,000</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
        </>
     );
}
 
export default History;
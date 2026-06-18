export default function VillageAnalytics() {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-6">
        Village Analytics
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Total Villages
          </h2>

          <p className="text-4xl text-blue-600 font-bold mt-3">
            128
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            High Loss Areas
          </h2>

          <p className="text-4xl text-red-600 font-bold mt-3">
            24
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Collection Rate
          </h2>

          <p className="text-4xl text-green-600 font-bold mt-3">
            78%
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Theft Hotspots
          </h2>

          <p className="text-4xl text-orange-500 font-bold mt-3">
            12
          </p>
        </div>

      </div>

      <div className="mt-8 bg-white p-6 rounded-xl shadow">

        <h2 className="text-2xl font-semibold mb-4">
          Top Risk Villages
        </h2>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="text-left py-3">
                Village
              </th>

              <th className="text-left py-3">
                Revenue Loss
              </th>

              <th className="text-left py-3">
                Collection %
              </th>

              <th className="text-left py-3">
                Risk Level
              </th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="py-3">
                Rampur
              </td>

              <td>
                ₹25 Lakh
              </td>

              <td>
                42%
              </td>

              <td className="text-red-600 font-bold">
                High
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3">
                Sitapur Rural
              </td>

              <td>
                ₹18 Lakh
              </td>

              <td>
                57%
              </td>

              <td className="text-orange-500 font-bold">
                Medium
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}
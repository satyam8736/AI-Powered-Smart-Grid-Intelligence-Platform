export default function TheftDetection() {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-6">
        Theft Detection System
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            High Risk Consumers
          </h2>

          <p className="text-4xl text-red-600 mt-3 font-bold">
            125
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Suspicious Meters
          </h2>

          <p className="text-4xl text-orange-500 mt-3 font-bold">
            54
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Theft Probability
          </h2>

          <p className="text-4xl text-blue-600 mt-3 font-bold">
            87%
          </p>
        </div>

      </div>

      <div className="mt-8 bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-semibold mb-4">
          Recent Theft Alerts
        </h2>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="text-left py-3">
                Consumer ID
              </th>

              <th className="text-left py-3">
                Village
              </th>

              <th className="text-left py-3">
                Risk Score
              </th>

              <th className="text-left py-3">
                Status
              </th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="py-3">
                SG101
              </td>

              <td>
                Rampur
              </td>

              <td>
                95%
              </td>

              <td className="text-red-600 font-bold">
                High Risk
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3">
                SG102
              </td>

              <td>
                Lucknow Rural
              </td>

              <td>
                89%
              </td>

              <td className="text-orange-500 font-bold">
                Medium Risk
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}
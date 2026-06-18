export default function PaymentRisk() {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-6">
        Payment Risk Analysis
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Total Consumers
          </h2>

          <p className="text-4xl font-bold text-blue-600 mt-3">
            12,450
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            High Risk
          </h2>

          <p className="text-4xl font-bold text-red-600 mt-3">
            542
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Medium Risk
          </h2>

          <p className="text-4xl font-bold text-orange-500 mt-3">
            1180
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Low Risk
          </h2>

          <p className="text-4xl font-bold text-green-600 mt-3">
            10728
          </p>
        </div>

      </div>

      <div className="mt-8 bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-semibold mb-4">
          AI Defaulter Prediction
        </h2>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="text-left py-3">
                Consumer ID
              </th>

              <th className="text-left py-3">
                Name
              </th>

              <th className="text-left py-3">
                Risk Score
              </th>

              <th className="text-left py-3">
                Prediction
              </th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="py-3">C1001</td>
              <td>Rakesh Kumar</td>
              <td>96%</td>
              <td className="text-red-600 font-bold">
                Likely Defaulter
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3">C1002</td>
              <td>Anil Singh</td>
              <td>88%</td>
              <td className="text-orange-500 font-bold">
                Monitor
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}
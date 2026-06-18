export default function TransformerAnalytics() {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-6">
        Transformer Analytics
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Total Transformers
          </h2>

          <p className="text-4xl text-blue-600 font-bold mt-3">
            850
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Overloaded
          </h2>

          <p className="text-4xl text-red-600 font-bold mt-3">
            37
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Healthy
          </h2>

          <p className="text-4xl text-green-600 font-bold mt-3">
            765
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Maintenance Due
          </h2>

          <p className="text-4xl text-orange-500 font-bold mt-3">
            48
          </p>
        </div>

      </div>

      <div className="mt-8 bg-white p-6 rounded-xl shadow">

        <h2 className="text-2xl font-semibold mb-4">
          Transformer Status
        </h2>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="text-left py-3">ID</th>
              <th className="text-left py-3">Location</th>
              <th className="text-left py-3">Load</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="py-3">TR-101</td>
              <td>Lucknow Rural</td>
              <td>92%</td>
              <td className="text-red-600 font-bold">
                Overloaded
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3">TR-102</td>
              <td>Sitapur</td>
              <td>58%</td>
              <td className="text-green-600 font-bold">
                Healthy
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}
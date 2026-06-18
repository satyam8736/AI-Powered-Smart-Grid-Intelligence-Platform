const alerts = [
  {
    village: "Rampur",
    issue: "Power Theft",
    priority: "High",
  },
  {
    village: "Sitapur Rural",
    issue: "Payment Risk",
    priority: "Medium",
  },
  {
    village: "Lucknow East",
    issue: "Defaulters",
    priority: "High",
  },
  {
    village: "Barabanki",
    issue: "Transformer Overload",
    priority: "Low",
  },
];

export default function AlertsTable() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-4">
        Recent Alerts
      </h2>

      <table className="w-full">

        <thead>
          <tr className="border-b">
            <th className="text-left p-3">
              Village
            </th>

            <th className="text-left p-3">
              Issue
            </th>

            <th className="text-left p-3">
              Priority
            </th>
          </tr>
        </thead>

        <tbody>

          {alerts.map((alert, index) => (
            <tr key={index} className="border-b">

              <td className="p-3">
                {alert.village}
              </td>

              <td className="p-3">
                {alert.issue}
              </td>

              <td className="p-3">

                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold
                  ${
                    alert.priority === "High"
                      ? "bg-red-100 text-red-600"
                      : alert.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {alert.priority}
                </span>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}
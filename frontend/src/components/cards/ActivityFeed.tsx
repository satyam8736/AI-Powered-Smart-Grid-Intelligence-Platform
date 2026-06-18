const activities = [
  {
    time: "10:32 AM",
    event: "Theft detected in Rampur",
  },
  {
    time: "10:45 AM",
    event: "Payment risk updated",
  },
  {
    time: "11:05 AM",
    event: "Transformer overload alert",
  },
  {
    time: "11:18 AM",
    event: "Revenue report generated",
  },
  {
    time: "11:32 AM",
    event: "Village risk score recalculated",
  },
];

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">
        Live Activity Feed
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-500 pl-4"
          >
            <p className="font-semibold">
              {activity.event}
            </p>

            <p className="text-sm text-gray-500">
              {activity.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
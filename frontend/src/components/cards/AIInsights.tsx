export default function AIInsights() {
  const insights = [
    "⚠ Rampur theft probability increased by 12%",
    "⚡ Transformer TR-101 overload risk detected",
    "💰 542 consumers likely to default next month",
    "📈 Revenue collection improved by 8%",
    "🔴 Sitapur Rural marked as high-risk area",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">
        AI Insights
      </h2>

      <div className="space-y-3">
        {insights.map((item, index) => (
          <div
            key={index}
            className="p-3 bg-slate-50 rounded-lg border"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
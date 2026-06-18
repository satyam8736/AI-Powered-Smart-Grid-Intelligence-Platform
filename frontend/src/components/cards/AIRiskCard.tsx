export default function AIRiskCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-6">
        AI Risk Analysis
      </h2>

      <div className="flex justify-center">
        <div className="w-40 h-40 rounded-full border-8 border-red-500 flex items-center justify-center">

          <div className="text-center">
            <div className="text-4xl font-bold text-red-600">
              87%
            </div>

            <p className="text-sm text-gray-500">
              Risk Score
            </p>
          </div>

        </div>
      </div>

      <div className="mt-6 space-y-3">

        <div className="flex justify-between">
          <span>Critical Villages</span>
          <span className="font-bold text-red-600">
            12
          </span>
        </div>

        <div className="flex justify-between">
          <span>Suspicious Consumers</span>
          <span className="font-bold text-orange-500">
            542
          </span>
        </div>

        <div className="flex justify-between">
          <span>Predicted Theft Cases</span>
          <span className="font-bold text-blue-600">
            45
          </span>
        </div>

      </div>

    </div>
  );
}
import DashboardLayout from "../../components/layout/DashboardLayout";
import RevenueChart from "../../components/charts/RevenueChart";
import TheftPieChart from "../../components/charts/TheftPieChart";
import AIRiskCard from "../../components/cards/AIRiskCard";
import AlertsTable from "../../components/tables/AlertsTable";
import AIInsights from "../../components/cards/AIInsights";
import ActivityFeed from "../../components/cards/ActivityFeed";

export default function Dashboard() {
  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-8">
        Dashboard Overview
      </h1>

      {/* KPI Cards */}

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <p className="text-gray-500">
            Revenue Loss
          </p>

          <h2 className="text-4xl font-bold mt-3 text-red-600">
            ₹2.5 Cr
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <p className="text-gray-500">
            Collection %
          </p>

          <h2 className="text-4xl font-bold mt-3 text-green-600">
            78%
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <p className="text-gray-500">
            Defaulters
          </p>

          <h2 className="text-4xl font-bold mt-3 text-orange-500">
            1240
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <p className="text-gray-500">
            Theft Cases
          </p>

          <h2 className="text-4xl font-bold mt-3 text-blue-600">
            45
          </h2>
        </div>

      </div>

      {/* Charts */}

      <div className="grid grid-cols-2 gap-6 mt-8">

        <RevenueChart />

        <TheftPieChart />

      </div>

      {/* AI Section */}

<div className="grid grid-cols-2 gap-6 mt-8">

  <AIRiskCard />

  <AIInsights />

</div>
{/* Activity Feed */}

<div className="mt-8">
  <ActivityFeed />
</div>

      {/* Alerts Table */}

      <div className="mt-8">
        <AlertsTable />
      </div>

    </DashboardLayout>
  );
}
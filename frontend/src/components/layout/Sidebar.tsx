import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-72 h-screen bg-slate-900 text-white">

      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">
          Smart Grid AI
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Intelligence Platform
        </p>
      </div>

      <div className="p-4 space-y-3">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `block w-full text-left p-3 rounded-lg ${
              isActive
                ? "bg-slate-800"
                : "hover:bg-slate-700"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/theft-detection"
          className="block w-full text-left p-3 rounded-lg hover:bg-slate-700"
        >
          Theft Detection
        </NavLink>

        <NavLink
          to="/payment-risk"
          className="block w-full text-left p-3 rounded-lg hover:bg-slate-700"
        >
          Payment Risk
        </NavLink>

        <NavLink
          to="/village-analytics"
          className="block w-full text-left p-3 rounded-lg hover:bg-slate-700"
        >
          Village Analytics
        </NavLink>

        <NavLink
          to="/transformer-analytics"
          className="block w-full text-left p-3 rounded-lg hover:bg-slate-700"
        >
          Transformer Analytics
        </NavLink>

        <NavLink
          to="/gis-map"
          className="block w-full text-left p-3 rounded-lg hover:bg-slate-700"
        >
          GIS Map
        </NavLink>

        <NavLink
          to="/reports"
          className="block w-full text-left p-3 rounded-lg hover:bg-slate-700"
        >
          Reports
        </NavLink>

      </div>

    </div>
  );
}
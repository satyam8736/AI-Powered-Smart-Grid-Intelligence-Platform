import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/login/Login";
import TheftDetection from "./pages/TheftDetection/TheftDetection";
import PaymentRisk from "./pages/PaymentRisk/PaymentRisk";
import GISMap from "./pages/GISMap/GISMap";
import Reports from "./pages/Reports/Reports";
import VillageAnalytics from "./pages/VillageAnalytics/VillageAnalytics";
import TransformerAnalytics from "./pages/TransformerAnalytics/TransformerAnalytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/theft-detection"
          element={<TheftDetection />}
        />

        <Route
          path="/payment-risk"
          element={<PaymentRisk />}
        />

        <Route
          path="/gis-map"
          element={<GISMap />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/village-analytics"
          element={<VillageAnalytics />}
        />

        <Route
          path="/transformer-analytics"
          element={<TransformerAnalytics />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
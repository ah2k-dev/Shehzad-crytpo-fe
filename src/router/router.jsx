import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/landingPages/home";
import HomeLayout from "../layout/homeLayout";
import Shop from "../pages/landingPages/shop";
import Dashboard from "../pages/dashboardPages/dashboard";
import DashboardLayout from "../layout/dashboardLayout";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route  element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
      <Route path="/dashboard"  element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

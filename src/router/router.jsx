import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/landingPages/home";
import HomeLayout from "../layout/homeLayout";
import Shop from "../pages/landingPages/shop";
import Dashboard from "../pages/dashboardPages/dashboard";
import DashboardLayout from "../layout/dashboardLayout";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import Products from "../pages/dashboardPages/products";
import Category from "../pages/dashboardPages/category";
import Faqs from "../pages/dashboardPages/faqs";
import ProductDetail from "../pages/landingPages/productDetail";
import AboutUs from "../pages/landingPages/aboutUs";
const Router = () => {

  useEffect(() => {
    ReactGA.initialize('G-W2XTCCMZHQ'); // Replace with your GA4 Measurement ID
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
  }, []);
  useEffect(() => {
    // Track page view on route change
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
  }, [window.location]);

 

  return (
    <BrowserRouter>
      <Routes>
      <Route  element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/about" element={<AboutUs />} />
      </Route>
      <Route path="/dashboard"  element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/products" element={<Products />} />
        <Route path="/dashboard/categories" element={<Category />} />
        <Route path="/dashboard/faqs" element={<Faqs />} />
        
      </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

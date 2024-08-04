import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/landingPages/home";
import HomeLayout from "../layout/homeLayout";
import Shop from "../pages/landingPages/shop";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route  element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

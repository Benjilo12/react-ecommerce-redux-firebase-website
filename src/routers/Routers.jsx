import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";
import Signup from "../pages/Signup";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";
import ProtectRoute from "./ProtectRoute";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route
        path="checkout"
        element={
          <ProtectRoute>
            <Checkout />
          </ProtectRoute>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routers;

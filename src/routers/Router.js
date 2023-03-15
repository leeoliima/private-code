import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "../pages/cart/Cart";
import { Feed } from "../pages/feed/Feed";
import { Restaurant } from "../pages/restaurant/Restaurant";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Feed/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurant" element={<Restaurant/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

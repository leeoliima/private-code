import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "../pages/cart/Cart";
import { Feed } from "../pages/feed/Feed";
import { Adress } from "../pages/adress/Adress";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Feed />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/adress" element={<Adress />} />
      </Routes>
    </BrowserRouter>
  );
};

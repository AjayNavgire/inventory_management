import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Products from "../pages/Products";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
      <Route path="/products" element={<Products />} />

    </Routes>
  );
};

export default Routers;
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Kitchen from "./components/Kitchen";
import Waiter from "./components/Waiter";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Waiters" element={<Waiter />} />
        <Route path="/Kitchen" element={<Kitchen />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Kitchen from "./components/Kitchen/Kitchen";
import Waiter from "./components/Waiter/Waiter";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Waiters" element={<Waiter />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

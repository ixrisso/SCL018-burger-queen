import './App.css';
import React from "react";
import {Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Kitchen from "./components/Kitchen";
import Waiter from "./components/Waiter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Waiter" element={<Waiter />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

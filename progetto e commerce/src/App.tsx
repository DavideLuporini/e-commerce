import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonContained from "./components/Button/ButtonContained";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Products" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

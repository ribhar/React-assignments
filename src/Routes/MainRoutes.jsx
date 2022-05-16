import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import { Products } from "../components/Products";
import { CategoryCard } from "../components/CategoryCard";

const MainRoutes = () => {
  return <>{/* Navbar and all the routes */}
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/products/:category" element={<CategoryCard/>}></Route>
    </Routes>
  </>;
};
export { MainRoutes };

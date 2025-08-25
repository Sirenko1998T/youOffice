import React from "react";
import { Routes, Route } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import Layout from "./pages/layout.jsx";
import FAQ from "./pages/faq.jsx";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import Reset from "./pages/reset.jsx";
import ContactUs from "./pages/contactUs.jsx";
import Home from "./pages/home.jsx";
import ProductPage from "./pages/productPage.jsx";
import CategoryPage from "./pages/categoryPage.jsx";
export let ThemeContext = React.createContext(null);
export default function App() {

   return (



      <Routes>
         <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="reset" element={<Reset />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="category/:categoryName" element={<CategoryPage />} />
            <Route path="product/:productId" element={<ProductPage />} />

         </Route>
      </Routes>
   );
}
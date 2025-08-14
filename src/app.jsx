import React from "react";
import { Routes, Route } from 'react-router-dom';
import UserPanel from "./components/userPanel.jsx";
import BurgerMenu from "./components/burgerMenu.jsx";
import Search from "./components/search.jsx";
import Cart from "./components/cart.jsx";
import Saved from "./components/saved.jsx";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import Reset from "./pages/reset.jsx";
export default function App() {
   return (< >


      <header>
         <nav> <UserPanel /></nav>
         <div><img src="./assets/img/logo/HOME-N-OFFICE-LOGO-min (1).png" alt="logo" />
            {/* <BurgerMenu />

            <Search />
            <Saved />
            <Cart /> */}
         </div>
      </header>
      <Routes>

         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route path="/reset" element={<Reset />} />

      </Routes>
   </>);
}

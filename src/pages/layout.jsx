import React from "react";
import { Link, Outlet } from 'react-router-dom';
import UserPanel from "../components/userPanel.jsx";
import BurgerMenu from "../components/burgerMenu.jsx";
import Search from "../components/search.jsx";
import Cart from "../components/cart.jsx";
import Saved from "../components/saved.jsx";

export default function Layout() {
   return (
      <div className="min-h-screen flex flex-col">

         <header className="bg-white shadow-sm">

            <nav className=" ">
               <UserPanel />
            </nav>


            <div className="container mx-auto px-4 py-3 flex items-center justify-between">

               <div className="flex-shrink-0 mr-4">
                  <Link to='/'>
                     <img
                        src="./assets/img/logo/HOME-N-OFFICE-LOGO-min (1).png"
                        alt="HomenOffice Logo"
                        className="h-12 object-contain"
                     />
                  </Link>
               </div>

               <div className="md:hidden">
                  <BurgerMenu />
               </div>

               <div className="hidden md:flex items-center space-x-6 ml-auto">
                  <Search />
                  <Saved />
                  <Cart />
               </div>
            </div>
         </header>


         <main className="flex-grow container mx-auto px-4 py-6">
            <Outlet />
         </main>

         <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">

               <p className="text-center">© {new Date().getFullYear()} HomenOffice. All rights reserved.</p>
            </div>
         </footer>
      </div>
   );
}
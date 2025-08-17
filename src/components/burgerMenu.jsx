
import React from 'react';

export default function BurgerMenu() {
   return (
      <button
         className="flex flex-col justify-center items-center w-10 h-10 rounded-full bg-gray-800 cursor-pointer transition-all duration-300 hover:bg-gray-700 focus:outline-none"
         aria-label="Menu"
      >
         <div className="w-6 h-0.5 bg-white my-1 transition-all duration-300"></div>
         <div className="w-6 h-0.5 bg-white my-1 transition-all duration-300"></div>
         <div className="w-6 h-0.5 bg-white my-1 transition-all duration-300"></div>
      </button>
   );
}
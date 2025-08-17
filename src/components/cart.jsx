
import React from "react";

export default function Cart() {
   return (
      <button className="p-2 relative hover:bg-gray-100 rounded-full transition-colors duration-200">
         <img
            src="../assets/img/cart.png"
            alt="cart"
            className="w-6 h-6 object-contain"
         />
         <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            0
         </span>
      </button>
   );
}
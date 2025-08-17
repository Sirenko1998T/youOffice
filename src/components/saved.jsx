
import React from "react";

export default function Saved() {
   return (
      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
         <img
            src="../assets/img/heart.png"
            alt="saved items"
            className="w-6 h-6 object-contain"
         />
      </button>
   );
}
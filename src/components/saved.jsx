import React from "react";
import heartIcon from "../assets/img/heart.png";
export default function Saved({ onClick }) {
   return (
      <button onClick={onClick} className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
         <img
            src={heartIcon}
            alt="saved items"
            className="w-6 h-6 object-contain"
         />
      </button>
   );
} 
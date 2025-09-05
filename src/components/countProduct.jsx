
import React from "react";
export default function CountProduct({ reduce, increase, name, count }) {
   return (
      <div className="flex items-center gap-3 mt-2">
         <p className="text-sm font-medium text-gray-700">{name}</p>
         <div className="flex items-center border border-gray-300 rounded-lg">
            <button onClick={reduce} className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
               -
            </button>
            <input value={count} className="w-12 h-8 text-center border-x border-gray-300 outline-none" readOnly />

            <button onClick={increase} className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
               +
            </button>
         </div>
      </div>
   );
} 
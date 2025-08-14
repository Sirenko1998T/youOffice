import React from "react";
export default function Button({ label, onClick }) {
   return (
      <button
         onClick={onClick}
         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
         {label}
      </button>
   );
}
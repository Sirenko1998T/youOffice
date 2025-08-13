import React from "react";

export default function Input({ label, type, onChange, name, placeholder, error, value }) {
   return (
      <div className="flex flex-col mb-4">
         <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1">
            {label}
         </label>
         <input
            type={type}
            value={value}
            id={name}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
         />
         {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
   );
}
import React from "react";

export default function Select({ values, label }) {
   return (<>

      <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1">
         {label}
      </label>
      <select className="
         w-full 
         px-4 
         py-2 
         border 
         border-gray-300 
         rounded-lg 
         focus:ring-2 
         focus:ring-blue-500 
         focus:border-blue-500 
         outline-none 
         transition-all 
         duration-200
         text-gray-700
         bg-white
      ">
         {values.map((item, index) => {
            return (
               <option key={index} value={item}>{item}</option>
            )
         })}
      </select>
   </>

   )
}
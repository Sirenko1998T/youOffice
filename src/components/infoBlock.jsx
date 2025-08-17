import React from "react";

export default function InfoBlock({ title, description, image }) {
   return (
      <div className="bg-white p-4 h-full flex flex-col items-center text-center border border-gray-200 hover:border-gray-400 transition-colors duration-200 group-hover:shadow-sm">
         <img
            src={image}
            alt=""
            className="w-10 h-10 object-contain mb-2"
         />
         <h3 className="text-base font-medium text-gray-800 mb-1 uppercase tracking-tight">{title}</h3>
         <p className="text-xs text-gray-600">{description}</p>
      </div>
   );
}
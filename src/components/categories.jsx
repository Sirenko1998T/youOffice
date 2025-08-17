import React, { useState } from "react";
import category from "../files/category.json";

export default function Categories() {
   const [wrap, setWrap] = useState({});

   function toggleWrap(name) {
      setWrap(prev => ({
         ...prev,
         [name]: !prev[name]
      }));
   }

   function renderCategories(items) {
      return items.map((item, index) => {
         if (typeof item === "object") {
            return (
               <div key={index} className="mb-1">
                  <h3
                     onClick={() => toggleWrap(item.category)}
                     className="flex justify-between items-center p-2   hover:bg-gray-200 cursor-pointer transition-colors text-sm"
                  >
                     <span>{item.category}</span>
                     <span className={`inline-block transition-transform duration-200 ${wrap[item.category] ? 'rotate-180' : ''}`}>
                        <svg
                           width="12"
                           height="12"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        >
                           <path d="M6 9l6 6 6-6" />
                        </svg>
                     </span>
                  </h3>
                  {wrap[item.category] && (
                     <div className="pl-3 mt-1">
                        {renderCategories(item.sub_categories)}
                     </div>
                  )}
               </div>
            );
         }
         return (
            <div key={index} className="p-1 pl-4 hover:bg-gray-50 transition-colors text-sm">
               {item}
            </div>
         );
      });
   }

   return (
      <div className="bg-white p-3 rounded shadow-sm h-full">
         <h2 className="text-lg font-medium mb-3 uppercase tracking-wider">Shop By Categories</h2>
         <div className="space-y-1">
            {renderCategories(category)}
         </div>
      </div>
   );
}
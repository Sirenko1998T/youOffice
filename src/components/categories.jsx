import React, { useState } from "react";
import category from "../files/category.json";
import { Link } from "react-router-dom";

export default function Categories() {
   const [wrap, setWrap] = useState({});

   function cleanKey(str) {
      return str.replace(/[^a-zA-Z]/g, "");
   }

   function toggleWrap(name) {
      setWrap(prev => ({
         ...prev,
         [name]: !prev[name]
      }));
   }

   function renderCategories(items) {
      return items.map((item, index) => {
         if (typeof item === "object") {
            const key = cleanKey(item.category);
            return (
               <div key={index} className="mb-1">
                  <h3
                     onClick={() => toggleWrap(key)}
                     className="flex justify-between items-center p-2 hover:bg-gray-200 cursor-pointer transition-colors text-sm"
                  >
                     <span>{item.category}</span>
                     <span className={`inline-block transition-transform duration-200 ${wrap[key] ? 'rotate-180' : ''}`}>
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
                  {wrap[key] && (
                     <div className="pl-3 mt-1">
                        {renderCategories(item.sub_categories)}
                     </div>
                  )}
               </div>
            );
         }

         const link = cleanKey(item);
         return (
            <Link to={`/category/${link}`} key={index} className="p-1 pl-4 hover:bg-gray-50 transition-colors text-sm">
               {item}
            </Link>
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

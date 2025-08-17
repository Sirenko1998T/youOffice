import React from "react";
import category from "../files/category.json";
export default function PopupMenu() {
   function renderCategories(items) {
      return items.map((item, index) => {
         if (typeof item === "object") {
            return (
               <div key={index}>
                  <h3>{item.category}</h3>
                  {renderCategories(item.sub_categories)}
               </div>
            )
         }
         return (
            <div key={index}>{item}</div>
         )
      })
   }
   return (
      <div>
         {renderCategories(category)}
      </div>
   )
} 

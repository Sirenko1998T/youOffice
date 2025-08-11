import React, { useState } from "react";
import category from "../files/category.json";

export default function Categories() {
   let [wrap, setwrap] = useState({});
   let arrow = "▼";
   function toggleWrap(name) {
      setwrap(prev => ({
         ...prev, [name]: !prev[name]
      }))
   }

   function renderCategories(items) {
      return items.map((item, index) => {
         if (typeof item === "object") {
            return (
               <div key={index}>
                  <h3 onClick={() => toggleWrap(item.category)}>{item.category}  <span>{arrow}</span> </h3>
                  {wrap[item.category] && <div >{renderCategories(item.sub_categories)} 	</div>}

               </div>
            )
         }
         return (
            <div key={index}>{item}</div>
         )
      })
   }
   return (
      <>
         <h2>Shop By Categories</h2>
         {renderCategories(category)}
      </>
   );
}



import React from "react";
export default function AccountBlock({ onclick, img, title, subtitle }) {
   return (
      <>
         <div onclick={onclick}>
            <img src={img} alt="Image" />
            <div>
               <h3>{title}</h3>
               <p>{subtitle}</p>
            </div>
         </div>
      </>
   )
}
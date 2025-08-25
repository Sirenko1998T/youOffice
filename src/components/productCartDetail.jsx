
import React from "react";
import ProductCard from "./productCard.jsx";

export default function ProductCartDetail({ product }) {
   return (
      <div className="max-w-2xl mx-auto">
         <ProductCard details={true} product={product} />
      </div>
   );
}
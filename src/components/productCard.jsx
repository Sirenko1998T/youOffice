import React, { useContext, useState } from "react";
import Button from '../components/button.jsx';
import CountProduct from './countProduct.jsx';
import { Link } from 'react-router-dom';
import { CartContext } from './context/cartContext.jsx';
import Saved from "./saved.jsx";

export default function ProductCard({ product, details = false }) {

   const { count, increase, reduce, addProduct, addFavorite, favorite } = useContext(CartContext);
   const [showOptions, setShowOptions] = useState(true);

   return (
      <div className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 max-w-xs bg-white">
         <Saved onClick={() => addFavorite(product)} />

         <Link to={`/product/${product?.id}`}>
            {product?.img && (
               <img
                  src={product.img}
                  alt={product.product_name || "Product"}
                  className="w-full h-48 object-contain mb-3"
               />
            )}
         </Link>

         <Link to={`/product/${product?.id}`} className="block">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-200">
               {product?.product_name || "Unnamed Product"}
            </h3>
         </Link>

         <div className="mb-3">
            <p className="text-2xl font-bold text-gray-900">
               {product?.price?.current_price || "Price not available"}
            </p>
            {product?.price?.savings && (
               <p className="text-green-600 text-sm font-medium">
                  Save: {product.price.savings}
               </p>
            )}
            {product?.price?.retail_price && (
               <p className="text-gray-500 text-sm line-through">
                  Retail Price: {product.price.retail_price}
               </p>
            )}
         </div>

         {product?.bulk_pricing && (
            <div className="mb-3 p-3 bg-gray-50 rounded-lg text-sm">
               <p className="font-medium">Bulk Quantity: {product.bulk_pricing.quantity || "-"}</p>
               <p>
                  Bulk Price: {product.bulk_pricing.bulk_price || "-"}{" "}
                  {product.bulk_pricing.savings && (
                     <span className="text-green-600">
                        Save ({product.bulk_pricing.savings})
                     </span>
                  )}
               </p>
               {product.bulk_pricing.note && (
                  <p className="text-gray-600 italic">{product.bulk_pricing.note}</p>
               )}
            </div>
         )}

         {details && product?.features && (
            <div className="mt-3">
               <ul className="list-disc pl-5 space-y-1">
                  {product.features.map((feature, i) => (
                     <li key={i} className="text-sm text-gray-700">
                        {feature}
                     </li>
                  ))}
               </ul>

               <div className="mt-3">
                  {product?.available_options ? (
                     <>
                        <div onClick={() => setShowOptions(!showOptions)} className="font-semibold">
                           Available Options
                        </div>
                        {showOptions && (
                           <ol className="space-y-3 list-decimal pl-5 mt-2">
                              {product.available_options.map((option, i) => (
                                 <li key={i} className="ml-4 py-2">
                                    <div className="flex items-center justify-between gap-4">
                                       <span className="text-sm font-medium text-gray-700">{option.type}</span>
                                       <CountProduct
                                          reduce={() => reduce(product.id, option.type)}
                                          count={count[product.id]?.[option.type] || 0}
                                          increase={() => increase(product.id, option.type)}
                                          name="QTY" />
                                    </div>
                                 </li>
                              ))}
                           </ol>
                        )}
                     </>
                  ) : (
                     <div className="mt-2">
                        <CountProduct
                           reduce={() => reduce(product.id, 'default')}
                           count={count[product.id]?.['default'] || 0}


                           increase={() => increase(product.id, 'default')}
                           name="QTY"
                        />

                     </div>
                  )
                  }
               </div>

            </div>

         )}

         <Button
            label="Add to Cart"
            onClick={() => {
               if (product?.available_options) {
                  product.available_options.forEach((option) => {
                     addProduct(product, option.type);
                  });
               } else {
                  addProduct(product, "default");
               }
            }}
         />

      </div>
   );
}

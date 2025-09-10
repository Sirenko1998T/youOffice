import React, { useContext } from "react";
import { CartContext } from "../components/context/cartContext";

export default function MyWishList() {
   const { favorite } = useContext(CartContext);

   return (
      <div className="max-w-6xl mx-auto px-4 py-8">
         <h1 className="text-3xl font-light mb-8">My Wish List</h1>

         {favorite.length === 0 ? (
            <div className="text-center py-12 bg-white border border-gray-200 rounded-lg">
               <p className="text-gray-600">Your wish list is empty</p>
            </div>
         ) : (
            <>
               {/* Заголовки таблицы */}
               <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-100 p-4 rounded-t-lg border border-gray-200">
                  <div className="col-span-2">
                     <p className="font-medium text-gray-700">Image</p>
                  </div>
                  <div className="col-span-3">
                     <p className="font-medium text-gray-700">Product Name</p>
                  </div>
                  <div className="col-span-2">
                     <p className="font-medium text-gray-700">Model</p>
                  </div>
                  <div className="col-span-1">
                     <p className="font-medium text-gray-700">Stock</p>
                  </div>
                  <div className="col-span-2">
                     <p className="font-medium text-gray-700">Unit Price</p>
                  </div>
                  <div className="col-span-2">
                     <p className="font-medium text-gray-700">Action</p>
                  </div>
               </div>

               {/* Список товаров */}
               <div className="bg-white border border-gray-200 rounded-lg md:rounded-t-none">
                  {favorite.map((item, index) => (
                     <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-gray-200 last:border-b-0"
                     >
                        {/* Изображение */}
                        <div className="md:col-span-2">
                           <img
                              src={item.img}
                              alt={item.product_name}
                              className="w-20 h-20 object-cover border border-gray-200 rounded"
                           />
                        </div>

                        {/* Название товара */}
                        <div className="md:col-span-3">
                           <p className="font-medium text-gray-800">{item.product_name}</p>
                        </div>

                        {/* Модель */}
                        <div className="md:col-span-2">
                           <p className="text-gray-600 text-sm">-</p>
                        </div>

                        {/* Наличие */}
                        <div className="md:col-span-1">
                           <p className="text-green-600 font-medium">In Stock</p>
                        </div>

                        {/* Цена */}
                        <div className="md:col-span-2">
                           <p className="text-lg font-medium text-gray-800">
                              S${item.price.current_price.toFixed(2)}
                           </p>
                        </div>

                        {/* Действия */}
                        <div className="md:col-span-2">
                           <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2">

                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </>
         )}
      </div>
   );
}
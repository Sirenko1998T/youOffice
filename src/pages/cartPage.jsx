import React, { useContext } from "react";
import { CartContext } from "../components/context/cartContext";
import Button from "../components/button";
export default function CartPage() {
   const { cart, updateCartQuantity } = useContext(CartContext);

   const subtotal = cart.reduce((sum, item) => sum + item.quantity * item.price.current_price, 0);
   const gst = Math.round(subtotal * 0.09 * 100) / 100;
   const total = subtotal;

   return (
      <div className="max-w-6xl mx-auto px-4 py-8">
         <h1 className="text-3xl font-light mb-8">Shopping Cart</h1>

         {cart.length === 0 ? (
            <div className="text-center py-12">
               <p className="text-gray-600">Your cart is empty</p>
            </div>
         ) : (
            <div className="flex flex-col lg:flex-row gap-8">

               <div className="lg:w-2/3">
                  <div className="bg-white border border-gray-200 rounded-lg">
                     {cart.map((item) => (
                        <div key={`${item.id}-${item.option}`} className="p-6 border-b border-gray-200 last:border-b-0">
                           <div className="flex gap-4">

                              <img
                                 src={item.img}
                                 alt={item.product_name}
                                 className="w-20 h-20 object-cover border border-gray-200"
                              />

                              <div className="flex-1">
                                 <h3 className="font-medium text-gray-800">{item.product_name}</h3>
                                 {item.type && (
                                    <p className="text-sm text-gray-600 mb-2">{item.type}</p>
                                 )}
                                 {item.option && (
                                    <p className="text-sm text-gray-600 mb-2">Option: {item.option}</p>
                                 )}
                                 <p className="text-lg font-medium text-gray-800">
                                    S${item.price.current_price.toFixed(2)}
                                 </p>
                              </div>


                              <div className="flex items-center gap-3">
                                 <button
                                    onClick={() => updateCartQuantity(item.id, -1, item.option)}
                                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition"
                                 >
                                    -
                                 </button>
                                 <span className="w-10 text-center font-medium">{item.quantity}</span>
                                 <button
                                    onClick={() => updateCartQuantity(item.id, 1, item.option)}
                                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition"
                                 >
                                    +
                                 </button>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>


               <div className="lg:w-1/3">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                     <h2 className="text-xl font-medium mb-4">Order Summary</h2>

                     <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                           <span className="text-gray-600">Sub-Total:</span>
                           <span className="font-medium">S${subtotal.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between">
                           <span className="text-gray-600">GST 9% (inclusive):</span>
                           <span className="font-medium">S${gst.toFixed(2)}</span>
                        </div>

                        <div className="border-t border-gray-200 pt-3">
                           <div className="flex justify-between text-lg font-medium">
                              <span>Total:</span>
                              <span>S${total.toFixed(2)}</span>
                           </div>
                        </div>
                     </div>



                     <Button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition" label='Proceed to Checkout' />
                     <Button className="w-full mt-3 border border-gray-300 text-gray-700 py-3 rounded hover:bg-gray-50 transition" label='Continue Shopping' />
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}
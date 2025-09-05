import React, { useContext } from "react";
import { CartContext } from "../components/context/cartContext";


export default function CartPage() {
   const { cart, updateCartQuantity } = useContext(CartContext);

   return (
      <>
         <h1>lk</h1>
         {cart.map((i) => (<>
            <div key={i.id}>
               <p>{i.product_name}</p>
               <p>{i.type}</p>
               <img src={i.img} alt="Image" />
               <p>{i.price.current_price}</p>





            </div>
            <button onClick={() => updateCartQuantity(i.id, 1, i.option)}>+</button>

            <p>{i.quantity}</p>
            <button onClick={() => updateCartQuantity(i.id, -1 .i.option)}>-</button>

         </>
         ))}
         <div>
            <div>
               <p>Sub-Total:	</p>
               {cart.reduce((sum, item) => sum + item.quantity * item.price.current_price, 0)}
               <p> </p>

            </div>
         </div>

      </>
   )
}
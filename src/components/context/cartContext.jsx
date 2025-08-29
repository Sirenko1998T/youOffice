import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
   const [count, setCount] = useState({});

   const increase = (id, option = "default") => {
      setCount(prev => ({
         ...prev,
         [id]: {
            ...prev[id],
            [option]: (prev[id]?.[option] || 0) + 1
         }
      }));
   };

   const reduce = (id, option = "default") => {
      setCount(prev => ({
         ...prev,
         [id]: {
            ...prev[id],
            [option]: Math.max(0, (prev[id]?.[option] || 0) - 1)
         }
      }));
   };

   const countValue = { count, increase, reduce };

   return (
      <CartContext.Provider value={countValue}>
         {children}
      </CartContext.Provider>
   );
}

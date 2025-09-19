import { createContext, useContext, useState } from "react";
import Button from "../button";
export const CartContext = createContext();

export function CartProvider({ children }) {

   const [count, setCount] = useState({});
   let [cart, setCart] = useState([]);
   let [favorite, setFavorite] = useState([]);
   const [favoriteStatus, setFavoriteStatus] = useState({});

   let addFavorite = (product) => {
      setFavorite((prev) => {
         let exists = prev.find((item) => item.id === product.id);
         if (exists) {
            return prev.filter((item) => item.id !== product.id)
         }
         else {
            return [...prev, product]
         }
      })
      setFavoriteStatus((prev) => ({
         ...prev,
         [product.id]: true,
      }))
   }

   let reduce = (id, option = 'default') => {
      setCount((prev) => ({
         ...prev,
         [id]: {
            ...prev[id],
            [option]: Math.max((prev[id]?.[option] || 0) - 1, 0),
         }
      }))
   }
   let increase = (id, option = 'default') => {
      setCount((prev) => ({
         ...prev,
         [id]: {
            ...prev[id],
            [option]: (prev[id]?.[option] || 0) + 1,
         }
      }))

   }

   let addProduct = (product, option) => {
      let quantity = count[product.id]?.[option] || 0;
      if (quantity > 0) {
         setCart((prev) => {
            let exists = prev.find((item) => item.id === product.id && item.option === option);
            if (exists) {
               return prev.map((item) =>
                  item.id === product.id && item.option === option ?
                     { ...item, quantity: item.quantity + quantity } : item);
            }
            else {
               return [...prev, { ...product, option, quantity }];
            }
         })
         setCount((prev) => ({
            ...prev, [product.id]: {
               ...prev[product.id],
               [option]: 0
            }
         }));
      }
   }
   let updateCartQuantity = (id, delta, option) => {
      setCart((prev) => prev.map((item) =>
         item.id === id && item.option === option ?
            { ...item, quantity: Math.max(item.quantity + delta, 0) }
            : item
      )
         .filter((item) => item.quantity > 0));
   };
   const countValue = { count, increase, reduce, addProduct, cart, updateCartQuantity, favorite, addFavorite, favoriteStatus, setFavoriteStatus };

   return (
      <CartContext.Provider value={countValue}>
         {children}
      </CartContext.Provider>
   );
}

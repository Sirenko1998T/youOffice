
import { createContext, useState } from "react";
import { db } from "../../firebase.js";
import { collection, query, where, getDocs } from "firebase/firestore";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);


   const fetchProducts = async (categoryName) => {
      setLoading(true);
      try {
         const productsQuery = query(
            collection(db, "products"),
            where("category", "==", categoryName)
         );

         const snapshot = await getDocs(productsQuery);
         const fetchedProducts = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
         }));
         setProducts(fetchedProducts);
      } catch (err) {
         console.error("Error fetching products:", err);
      } finally {
         setLoading(false);
      }
   };

   return (
      <ProductsContext.Provider value={{ products, loading, fetchProducts }}>
         {children}
      </ProductsContext.Provider>
   );
}

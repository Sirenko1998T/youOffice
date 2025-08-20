import React, { useState, useEffect } from 'react';
import { db } from '../firebase.js';
import { collection, getDocs } from 'firebase/firestore';

const ProductList = () => {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchAllProducts = async () => {
         try {
            setLoading(true);


            const productsSnapshot = await getDocs(collection(db, 'BallpointPens'));

            const fetchedProducts = productsSnapshot.docs.map(doc => ({
               id: doc.id,
               ...doc.data()
            }));

            setProducts(fetchedProducts);
            setError(null);

         } catch (err) {
            console.error("error", err);
            setError("error");
         } finally {
            setLoading(false);
         }
      };

      fetchAllProducts();
   }, []);

   if (loading) {
      return <div>loading...</div>;
   }

   if (error) {
      return <div>erorr: {error}</div>;
   }

   return (
      <div>

         <div className="products-grid">

         </div>
      </div>
   );
};

export default ProductList;
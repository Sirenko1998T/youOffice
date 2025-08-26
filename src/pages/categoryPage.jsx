
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../firebase.js';
import { collection, query, where, getDocs } from 'firebase/firestore';
import ProductCard from '../components/productCard.jsx';

const CategoryPage = () => {
   const { categoryName } = useParams();
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);


   useEffect(() => {
      const fetchProducts = async () => {
         setLoading(true);
         try {
            let productsQuery = query(collection(db, 'products'), where('category', '==', categoryName));



            const snapshot = await getDocs(productsQuery);
            const fetchedProducts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(fetchedProducts);
         } catch (err) {
            console.error("Error", err);
         } finally {
            setLoading(false);
         }
      };
      fetchProducts();
   }, [categoryName])

   if (loading) return <div>loading...</div>;


   return (
      <div>


         <div className="products-grid">
            {
               products.map(product => (
                  <ProductCard key={product.id} product={product} />
               ))
            }
         </div>
      </div>
   );
};

export default CategoryPage;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase.js';
import { collection, query, where, getDocs } from 'firebase/firestore';
import ProductCartDetail from '../components/productCartDetail.jsx';

const ProductPage = () => {
   const { productId } = useParams(); // id из URL
   const [product, setProduct] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchProduct = async () => {
         try {
            const productsRef = collection(db, 'products');

            // Ищем документ по полю 'id' внутри документа
            const q = query(productsRef, where('id', '==', productId));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
               const docData = querySnapshot.docs[0]; // берём первый найденный документ
               setProduct({ id: docData.id, ...docData.data() });
            } else {
               console.log("Product not found");
            }
         } catch (err) {
            console.error("Loading error:", err);
         } finally {
            setLoading(false);
         }
      };

      fetchProduct();
   }, [productId]);

   if (loading) return <div>Loading...</div>;
   if (!product) return <div>Product not found</div>;

   return (
      <div>

         <ProductCartDetail product={product} />
      </div>
   );
};

export default ProductPage;

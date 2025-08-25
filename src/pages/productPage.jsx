import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase.js';
import { doc, getDoc } from 'firebase/firestore';
import ProductCartDetail from '../components/productCartDetail.jsx';

const ProductPage = () => {
   const { productId } = useParams();
   const [product, setProduct] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchProduct = async () => {
         try {
            const productRef = doc(db, 'products', productId);
            const productDoc = await getDoc(productRef);
            if (productDoc.exists()) {
               setProduct({ id: productDoc.id, ...productDoc.data() });
            } else {
               console.log("Product not found");
            }
         } catch (err) {
            console.error("loadding error", err);
         } finally {
            setLoading(false);
         }
      };
      fetchProduct();
   }, [productId]);

   if (loading) return <div>loading</div>;


   return (
      <div>
         <ProductCartDetail product={product} />
      </div>
   );
};

export default ProductPage;

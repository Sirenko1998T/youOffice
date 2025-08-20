// src/ProductPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase.js';
import { doc, getDoc } from 'firebase/firestore';

const ProductPage = () => {
   const { productID } = useParams(); // Получаем ID товара из URL
   const [product, setProduct] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchProduct = async () => {
         try {
            const productRef = doc(db, 'products', productID);
            const productDoc = await getDoc(productRef);
            if (productDoc.exists()) {
               setProduct(productDoc.data());
            } else {
               console.log("Товар не найден!");
            }
         } catch (err) {
            console.error("Ошибка загрузки товара:", err);
         } finally {
            setLoading(false);
         }
      };
      fetchProduct();
   }, [productID]); // Перезагружаем при смене ID товара

   if (loading) return <div>Загрузка...</div>;
   if (!product) return <div>Товар не найден.</div>;

   return (
      <div>
         <h1>{product.product_name}</h1>
         <p>Категория: {product.category}</p>
         <p>Цена: {product.price.current_price}</p>
         <p>Подробности: ...</p>
      </div>
   );
};

export default ProductPage;
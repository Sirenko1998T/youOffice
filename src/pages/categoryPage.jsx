import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/productCard.jsx";
import { ProductsContext } from "../components/context/productContext.jsx"

const CategoryPage = () => {
   const { categoryName } = useParams();
   const { products, loading, fetchProducts } = useContext(ProductsContext);

   useEffect(() => {
      fetchProducts(categoryName);
   }, [categoryName]);

   if (loading) return <div>loading...</div>;

   return (
      <div className="products-grid">
         {products.map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </div>
   );
};

export default CategoryPage;

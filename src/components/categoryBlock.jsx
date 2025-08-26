import React from 'react'
import ProductCard from './productCard'

export default function CategoryBlock({ label, products = [] }) {
   return (
      <div className="my-6">
         <h2 className="text-2xl font-bold mb-4">{label}</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length > 0 ? (
               products.map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))
            ) : (
               <p className="text-gray-500">No products found</p>
            )}
         </div>
      </div>
   )
}

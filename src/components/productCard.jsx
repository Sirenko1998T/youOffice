import Button from '../components/button.jsx'
export default function ProductCard({ product }) {
   return (
      <>
         <img src={product.img} alt={product.product_name} />
         <h3>{product.product_name}</h3>
         <div>
            <p>{product.price.current_price}</p>
            <p>Save: {product.price.savings}</p>
         </div>
         <p>Retail Price:{product.price.retail_price}</p>
         <div>
            <p>Bulk Quantity: {product.bulk_pricing.quantity}</p>
            <p>Bulk Price: {product.bulk_pricing.bulk_price}Save ({product.bulk_pricing.savings})</p>
            <p>{product.bulk_pricing.note}</p>
         </div>
         <Button label="Add to Cart" onClick={() => console.log('Added to cart')} />
      </>
   );
}